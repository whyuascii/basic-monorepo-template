import { type VariantProps, cva } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import type React from 'react';

import { cn } from '../lib/utils';

const spinnerVariants = cva('flex items-center justify-center', {
  variants: {
    show: {
      true: 'flex',
      false: 'hidden',
    },
    direction: {
      vertical: 'flex-col',
      horizontal: 'flex-row gap-2',
    },
  },
  defaultVariants: {
    show: true,
    direction: 'vertical',
  },
});

const loaderVariants = cva('animate-spin text-primary', {
  variants: {
    size: {
      small: 'w-4 h-4',
      medium: 'w-6 h-6',
      large: 'w-8 h-8',
    },
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      muted: 'text-muted',
    },
  },
  defaultVariants: {
    size: 'medium',
    color: 'primary',
  },
});

interface SpinnerProps extends VariantProps<typeof spinnerVariants>, VariantProps<typeof loaderVariants> {
  className?: string;
  children?: React.ReactNode;
  label?: string; // Accessibility improvement for screen readers
}

export function Spinner({ size, show, direction, color, children, className, label = 'Loading' }: SpinnerProps) {
  return (
    <div className={cn(spinnerVariants({ show, direction }), className)} role="alert" aria-live="polite">
      <Loader2 className={cn(loaderVariants({ size, color }))} aria-hidden="true" />
      {children && <span className="text-sm text-muted">{children}</span>}
      {label && <span className="sr-only">{label}</span>}
    </div>
  );
}
