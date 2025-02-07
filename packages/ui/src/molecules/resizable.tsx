import { GripVertical } from 'lucide-react';
import type React from 'react';
import * as ResizablePrimitive from 'react-resizable-panels';

import { cn } from '../lib/utils';

const ResizablePanelGroup = ({ className, ...props }: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      'flex h-full w-full border-2 border-black bg-gray-100 shadow-[4px_4px_0px_#000] data-[panel-group-direction=vertical]:flex-col',
      'hover:shadow-[6px_6px_0px_#000] transition-all active:shadow-none',
      className,
    )}
    {...props}
  />
);
ResizablePanelGroup.displayName = 'ResizablePanelGroup';

const ResizablePanel = ResizablePrimitive.Panel;

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean;
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      'relative flex w-2 cursor-ew-resize items-center justify-center bg-black text-white',
      'transition-all hover:bg-yellow-300 hover:text-black',
      'data-[panel-group-direction=vertical]:h-2 data-[panel-group-direction=vertical]:w-full',
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-6 w-4 items-center justify-center rounded-sm border-2 border-black bg-gray-300 shadow-[2px_2px_0px_#000]">
        <GripVertical className="h-3 w-3 text-black" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
);
ResizableHandle.displayName = 'ResizableHandle';

export { ResizableHandle, ResizablePanel, ResizablePanelGroup };
