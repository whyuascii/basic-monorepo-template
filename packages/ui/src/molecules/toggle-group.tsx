import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import type { VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { toggleVariants } from '../atoms/toggle';
import { cn } from '../lib/utils';

type ToggleGroupContextType = VariantProps<typeof toggleVariants>;

const ToggleGroupContext = React.createContext<ToggleGroupContextType | null>(null);

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & ToggleGroupContextType
>(({ className, variant = 'default', size = 'default', children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn(
      'flex items-center gap-3 rounded-xl p-3 backdrop-blur-lg',
      'glass border border-border shadow-xl transition-all duration-300 hover:shadow-2xl active:shadow-md',
      className,
    )}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> & ToggleGroupContextType
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: variant ?? context?.variant ?? 'default',
          size: size ?? context?.size ?? 'default',
        }),
        'relative flex items-center justify-center rounded-lg px-6 py-3 text-sm font-bold uppercase tracking-wide',
        'border border-border backdrop-blur-lg shadow-md transition-all duration-300 hover:shadow-lg active:shadow-sm',
        'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2',
        'aria-pressed:bg-gradient-to-r aria-pressed:from-purple-500 aria-pressed:to-green-400 aria-pressed:text-white',
        'hover:bg-gradient-to-r hover:from-peach-400 hover:to-green-300 hover:text-white',
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
