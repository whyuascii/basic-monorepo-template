import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '../lib/utils';

const alertVariants = cva(
  'relative w-full rounded-xl border px-6 py-4 text-sm shadow-lg transition-all duration-200 hover:shadow-xl active:scale-95 flex items-start gap-4 backdrop-blur-lg bg-opacity-60',
  {
    variants: {
      variant: {
        default: 'bg-primary/20 text-primary border-primary dark:bg-primary/30 dark:text-primary-foreground',
        destructive:
          'border-destructive text-destructive bg-destructive/20 dark:bg-destructive/30 [&>svg]:text-destructive',
        success: 'border-success text-success bg-success/20 dark:bg-success/30 [&>svg]:text-success',
        warning: 'border-warning text-warning bg-warning/20 dark:bg-warning/30 [&>svg]:text-warning',
        info: 'border-info text-info bg-info/20 dark:bg-info/30 [&>svg]:text-info',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
));
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn(
        'text-lg font-semibold uppercase tracking-wide border-b border-opacity-30 pb-1 text-foreground',
        className,
      )}
      {...props}
    />
  ),
);
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('text-sm leading-relaxed text-foreground/80', className)} {...props} />
  ),
);
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertDescription, AlertTitle };
