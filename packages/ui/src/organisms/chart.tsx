import * as React from 'react';
import * as RechartsPrimitive from 'recharts';

import { cn } from '../lib/utils';

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: '', dark: '.dark' } as const;

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & ({ color?: string; theme?: never } | { color?: never; theme: Record<keyof typeof THEMES, string> });
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error('useChart must be used within a <ChartContainer />');
  }
  return context;
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & {
    config: ChartConfig;
    children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>['children'];
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, '')}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          'relative flex aspect-video justify-center text-xs border-2 border-black rounded-[6px] bg-background shadow-[4px_4px_0px_#000] transition-all hover:shadow-[6px_6px_0px_#000]',
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = 'ChartContainer';

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([, config]) => config.theme || config.color);

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] || itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join('\n')}
}
`,
          )
          .join('\n'),
      }}
    />
  );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<'div'> & {
      hideLabel?: boolean;
      hideIndicator?: boolean;
      indicator?: 'line' | 'dot' | 'dashed';
      nameKey?: string;
      labelKey?: string;
    }
>(({ active, payload, className, indicator = 'dot', hideLabel = false, hideIndicator = false, label }, ref) => {
  if (!active || !payload?.length) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn(
        'grid min-w-[8rem] items-start gap-1.5 border-2 border-black rounded-[6px] bg-background px-3 py-2 text-xs shadow-[4px_4px_0px_#000] transition-all hover:shadow-[6px_6px_0px_#000]',
        className,
      )}
    >
      {!hideLabel && <div className="font-bold uppercase tracking-widest">{label}</div>}
      <div className="grid gap-1.5">
        {payload.map((item, index) => (
          <div key={item.name} className="flex items-center justify-between">
            {!hideIndicator && (
              <div className="h-3 w-3 rounded-[4px] border-2 border-black" style={{ backgroundColor: item.color }} />
            )}
            <span className="text-muted-foreground">{item.name}</span>
            <span className="font-mono font-medium tabular-nums text-foreground">{item.value?.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
});
ChartTooltipContent.displayName = 'ChartTooltipContent';

const ChartLegend = RechartsPrimitive.Legend;

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> &
    Pick<RechartsPrimitive.LegendProps, 'payload'> & {
      hideIcon?: boolean;
      nameKey?: string;
    }
>(({ className, hideIcon = false, payload }, ref) => {
  if (!payload?.length) {
    return null;
  }

  return (
    <div ref={ref} className={cn('flex items-center justify-center gap-4 border-t-2 border-black pt-3', className)}>
      {payload.map((item) => (
        <div key={item.value} className="flex items-center gap-2">
          {!hideIcon && (
            <div className="h-3 w-3 rounded-[4px] border-2 border-black" style={{ backgroundColor: item.color }} />
          )}
          <span className="text-black font-bold">{item.value}</span>
        </div>
      ))}
    </div>
  );
});
ChartLegendContent.displayName = 'ChartLegendContent';

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config: ChartConfig, payload: unknown, key: string) {
  if (typeof payload !== 'object' || payload === null) {
    return undefined;
  }

  const payloadPayload =
    'payload' in payload && typeof payload.payload === 'object' && payload.payload !== null
      ? payload.payload
      : undefined;

  let configLabelKey: string = key;

  if (key in payload && typeof payload[key as keyof typeof payload] === 'string') {
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === 'string'
  ) {
    configLabelKey = payloadPayload[key as keyof typeof payloadPayload] as string;
  }

  return configLabelKey in config ? config[configLabelKey] : config[key as keyof typeof config];
}

export { ChartContainer, ChartLegend, ChartLegendContent, ChartStyle, ChartTooltip, ChartTooltipContent };
