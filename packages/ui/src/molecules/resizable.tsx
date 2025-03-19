import { GripVertical } from 'lucide-react';
import React from 'react';
import * as ResizablePrimitive from 'react-resizable-panels';

import { cn } from '../lib/utils';

const ResizablePanelGroup = React.forwardRef<
  React.ElementRef<typeof ResizablePrimitive.PanelGroup>,
  React.ComponentPropsWithoutRef<typeof ResizablePrimitive.PanelGroup>
>(({ className, ...props }, ref) => (
  <ResizablePrimitive.PanelGroup
    ref={ref}
    className={cn(
      'flex h-full w-full border-2 border-black bg-gray-100 shadow-md data-[panel-group-direction=vertical]:flex-col',
      'hover:shadow-lg transition-all active:shadow-none',
      className,
    )}
    {...props}
  />
));
ResizablePanelGroup.displayName = 'ResizablePanelGroup';

const ResizablePanel = React.forwardRef<
  React.ElementRef<typeof ResizablePrimitive.Panel>,
  React.ComponentPropsWithoutRef<typeof ResizablePrimitive.Panel>
>(({ className, ...props }, ref) => (
  <ResizablePrimitive.Panel
    ref={ref}
    className={cn('border-black bg-background transition-all', className)}
    {...props}
  />
));
ResizablePanel.displayName = 'ResizablePanel';

const ResizableHandle = React.forwardRef<
  React.ElementRef<typeof ResizablePrimitive.PanelResizeHandle>,
  React.ComponentPropsWithoutRef<typeof ResizablePrimitive.PanelResizeHandle> & { withHandle?: boolean }
>(({ withHandle, className, ...props }, ref) => (
  <ResizablePrimitive.PanelResizeHandle
    {...props}
    className={cn(
      'relative flex w-2 cursor-ew-resize items-center justify-center bg-black text-white transition-all',
      'hover:bg-yellow-300 hover:text-black active:scale-95',
      'data-[panel-group-direction=vertical]:h-2 data-[panel-group-direction=vertical]:w-full',
      className,
    )}
  >
    {withHandle && (
      <div className="z-10 flex h-6 w-4 items-center justify-center rounded-md border-2 border-black bg-gray-300 shadow-md">
        <GripVertical className="h-3 w-3 text-black" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
));
ResizableHandle.displayName = 'ResizableHandle';

export { ResizableHandle, ResizablePanel, ResizablePanelGroup };
