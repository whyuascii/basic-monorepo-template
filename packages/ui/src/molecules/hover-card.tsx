import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import * as React from 'react';

import { cn } from '../lib/utils';

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      'relative z-50 w-64 rounded-[6px] border-2 border-black bg-popover p-4 text-popover-foreground shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] transition-all',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      'before:absolute before:top-[-2px] before:left-[-2px] before:right-[-2px] before:bottom-[-2px]',
      'before:bg-gradient-to-r before:from-primary before:via-accent before:to-secondary before:rounded-[8px]',
      'before:blur-[2px] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100',
      className,
    )}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardContent, HoverCardTrigger };
