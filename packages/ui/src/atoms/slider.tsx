import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';

import { cn } from '../lib/utils';

interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  showTooltip?: boolean;
  defaultValue?: number[];
}

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  ({ className, showTooltip = false, defaultValue = [50], ...props }, ref) => {
    const [value, setValue] = React.useState(defaultValue);

    return (
      <SliderPrimitive.Root
        ref={ref}
        defaultValue={defaultValue}
        value={value}
        onValueChange={setValue}
        min={0}
        max={100}
        step={1}
        className={cn('relative flex w-full touch-none select-none items-center', className)}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-muted/50">
          <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-primary to-accent transition-all" />
        </SliderPrimitive.Track>
        {value.map((val, index) => (
          <SliderPrimitive.Thumb
            // biome-ignore lint/suspicious/noArrayIndexKey: required for dynamic thumbs
            key={index}
            className="block h-5 w-5 rounded-full border border-border bg-background shadow-md transition-all hover:scale-110 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            aria-label={`Slider Thumb ${index + 1}`}
          />
        ))}
        {showTooltip && value.length > 0 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-popover px-2 py-1 text-xs text-popover-foreground shadow-md transition-all">
            {value.join(' - ')}
          </div>
        )}
      </SliderPrimitive.Root>
    );
  },
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
