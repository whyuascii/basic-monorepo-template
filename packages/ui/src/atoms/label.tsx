import * as LabelPrimitive from '@radix-ui/react-label';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '../lib/utils';

const labelVariants = cva(
  'text-base font-semibold uppercase tracking-wide text-foreground transition-all peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      labelVariants(),
      'relative px-2 py-1 rounded-md border border-border bg-secondary/90 shadow-md transition-all duration-200',
      'focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-background',
      'hover:shadow-lg hover:scale-105 focus-within:scale-[1.02]',
      className,
    )}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
