import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import * as React from 'react';

import { cn } from '../lib/utils';

const HoverCard = HoverCardPrimitive.Root;
const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = 'center', sideOffset = 6, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      'relative z-50 w-72 rounded-lg border-2 border-black bg-popover p-4 text-popover-foreground shadow-lg backdrop-blur-md transition-all hover:shadow-2xl',
      'data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out',
      'data-[state=closed]:scale-95 data-[state=open]:scale-100',
      'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
      'before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary before:via-accent before:to-secondary before:rounded-lg',
      'before:blur-md before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-20',
      className,
    )}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardContent, HoverCardTrigger };
