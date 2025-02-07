import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-md hover:bg-primary/90 hover:shadow-lg hover:scale-105',
        destructive:
          'bg-destructive text-destructive-foreground shadow-md hover:bg-destructive/90 hover:shadow-lg hover:scale-105',
        outline:
          'border border-border bg-transparent text-foreground shadow-sm hover:bg-muted/20 hover:shadow-md hover:scale-105',
        secondary:
          'bg-secondary text-secondary-foreground shadow-md hover:bg-secondary/80 hover:shadow-lg hover:scale-105',
        ghost: 'text-foreground hover:bg-muted/30 hover:text-foreground/90 hover:scale-105',
        link: 'text-primary font-medium underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-6 py-2 text-base',
        sm: 'h-8 px-4 text-sm',
        lg: 'h-12 px-8 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
