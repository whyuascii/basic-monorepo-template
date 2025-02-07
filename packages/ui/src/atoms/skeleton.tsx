import type React from 'react';
import { cn } from '../lib/utils';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  radius?: string | number;
}

const Skeleton = ({ className, width, height, radius = '0.5rem', ...props }: SkeletonProps) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden bg-muted/40 dark:bg-muted/30 animate-pulse',
        'before:absolute before:inset-0 before:z-10 before:bg-gradient-to-r before:from-transparent before:via-muted/20 before:to-transparent before:animate-shimmer',
        className,
      )}
      style={{
        width: width ?? '100%',
        height: height ?? '1rem',
        borderRadius: radius,
      }}
      role="status"
      aria-live="polite"
      {...props}
    />
  );
};

Skeleton.displayName = 'Skeleton';

export { Skeleton };
