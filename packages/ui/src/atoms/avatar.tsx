import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as React from 'react';

import { cn } from '../lib/utils';

const generateDiceBearAvatar = (seed: string) => {
  return `https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(seed)}&backgroundColor=ffbf00,ff3131,6bdcff,34d2a3`;
};

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & { seed?: string }
>(({ className, seed, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex h-12 w-12 shrink-0 overflow-hidden rounded-full border border-border shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95',
      className,
    )}
    {...props}
  >
    {props.children ?? <AvatarImage src={generateDiceBearAvatar(seed ?? 'ModernUser')} />}
  </AvatarPrimitive.Root>
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('h-full w-full object-cover transition-all duration-300', className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> & { seed?: string }
>(({ className, seed = 'Unknown', ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted border border-border text-lg font-semibold text-foreground uppercase tracking-wide',
      className,
    )}
    {...props}
  >
    <img src={generateDiceBearAvatar(seed)} alt="Generated Avatar" className="h-full w-full object-cover" />
  </AvatarPrimitive.Fallback>
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarFallback, AvatarImage };
