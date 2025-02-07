import { type VariantProps, cva } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import type React from 'react';

import { cn } from '../lib/utils';

const spinnerVariants = cva('flex items-center justify-center transition-opacity duration-200', {
  variants: {
    show: {
      true: 'opacity-100 flex',
      false: 'opacity-0 hidden',
    },
    direction: {
      vertical: 'flex-col gap-1',
      horizontal: 'flex-row gap-2',
    },
    alignment: {
      center: 'justify-center',
      start: 'justify-start',
      end: 'justify-end',
    },
  },
  defaultVariants: {
    show: true,
    direction: 'vertical',
    alignment: 'center',
  },
});

const loaderVariants = cva('animate-spin transition-transform duration-300', {
  variants: {
    size: {
      xs: 'w-3 h-3',
      sm: 'w-4 h-4',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
      xl: 'w-10 h-10',
    },
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      accent: 'text-accent',
      muted: 'text-muted-foreground',
      white: 'text-white',
    },
    speed: {
      slow: 'animate-[spin_1.5s_linear_infinite]',
      normal: 'animate-[spin_1s_linear_infinite]',
      fast: 'animate-[spin_0.5s_linear_infinite]',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
    speed: 'normal',
  },
});

interface SpinnerProps extends VariantProps<typeof spinnerVariants>, VariantProps<typeof loaderVariants> {
  className?: string;
  children?: React.ReactNode;
  label?: string; // Accessibility improvement for screen readers
}

export function Spinner({
  size,
  show,
  direction,
  color,
  speed,
  alignment,
  children,
  className,
  label = 'Loading',
}: SpinnerProps) {
  return (
    <div className={cn(spinnerVariants({ show, direction, alignment }), className)} role="alert" aria-live="polite">
      <Loader2 className={cn(loaderVariants({ size, color, speed }), 'drop-shadow-md')} aria-hidden="true" />
      {children && <span className="text-sm text-muted-foreground">{children}</span>}
      <span className="sr-only">{label}</span>
    </div>
  );
}
