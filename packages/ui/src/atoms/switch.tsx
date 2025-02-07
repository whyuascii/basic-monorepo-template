import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as React from 'react';

import { cn } from '../lib/utils';

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & { label?: string; disabled?: boolean }
>(({ className, label, disabled, ...props }, ref) => {
  return (
    <label
      htmlFor={props.id}
      className={cn(
        'flex items-center gap-2 cursor-pointer transition-opacity',
        disabled ? 'cursor-not-allowed opacity-50' : 'hover:opacity-90',
      )}
    >
      {label && <span className="text-sm font-medium text-foreground">{label}</span>}
      <SwitchPrimitives.Root
        ref={ref}
        disabled={disabled}
        id={props.id}
        className={cn(
          'peer relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-border shadow-md transition-all duration-300',
          'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          'data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-primary data-[state=checked]:to-accent',
          'data-[state=unchecked]:bg-muted/50',
          className,
        )}
        {...props}
      >
        <SwitchPrimitives.Thumb
          className={cn(
            'absolute left-1 h-5 w-5 rounded-full bg-background shadow-md ring-0 transition-all duration-300',
            'data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
          )}
        />
      </SwitchPrimitives.Root>
    </label>
  );
});
Switch.displayName = 'Switch';

export { Switch };
