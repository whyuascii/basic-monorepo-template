import { type VariantProps, cva } from 'class-variance-authority';
import type React from 'react';

import { cn } from '../lib/utils';

const badgeVariants = cva(
  'inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-md select-none transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground border border-transparent',
        secondary: 'bg-secondary text-secondary-foreground border border-transparent',
        destructive: 'bg-destructive text-destructive-foreground border border-transparent',
        warning: 'bg-warning text-warning-foreground border border-transparent',
        success: 'bg-success text-success-foreground border border-transparent',
        info: 'bg-info text-info-foreground border border-transparent',
        outline: 'bg-transparent text-foreground border border-border shadow-none hover:bg-muted/20',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
