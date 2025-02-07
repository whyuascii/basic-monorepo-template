import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as React from 'react';

import { cn } from '../lib/utils';

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value = 0, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      'relative w-full h-4 rounded-full border border-border bg-muted/50 overflow-hidden',
      'shadow-md transition-all duration-300 hover:shadow-lg',
      className,
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-500 ease-in-out"
      style={{ width: `${value}%` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
