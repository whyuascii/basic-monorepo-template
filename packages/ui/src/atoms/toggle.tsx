import * as TogglePrimitive from '@radix-ui/react-toggle';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '../lib/utils';

const toggleVariants = cva(
  'inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-200 ease-in-out',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground hover:bg-muted hover:text-muted-foreground',
        outline:
          'border border-border bg-background text-foreground shadow-md hover:bg-accent hover:text-accent-foreground',
        ghost: 'bg-transparent text-muted-foreground hover:bg-muted/30',
      },
      size: {
        default: 'h-10 px-3 min-w-10',
        sm: 'h-8 px-2 min-w-8 text-xs',
        lg: 'h-12 px-4 min-w-12 text-lg',
      },
      active: {
        true: 'bg-primary text-primary-foreground shadow-lg',
        false: 'bg-muted text-muted-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      active: false,
    },
  },
);

interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
    VariantProps<typeof toggleVariants> {}

const Toggle = React.forwardRef<React.ElementRef<typeof TogglePrimitive.Root>, ToggleProps>(
  ({ className, variant, size, active, ...props }, ref) => (
    <TogglePrimitive.Root
      ref={ref}
      className={cn(
        toggleVariants({ variant, size, active }),
        'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        'disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...props}
    />
  ),
);

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
