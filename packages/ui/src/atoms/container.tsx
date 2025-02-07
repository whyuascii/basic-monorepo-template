import type React from 'react';
import { cn } from '../lib/utils';

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        'max-w-7xl mx-auto px-6 py-4 rounded-lg border border-border bg-background shadow-md transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-95',
      )}
    >
      {children}
    </div>
  );
}
