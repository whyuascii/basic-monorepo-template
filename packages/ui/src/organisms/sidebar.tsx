import { PanelLeft } from 'lucide-react';
import * as React from 'react';

import { Button } from '../atoms/button';
import { Separator } from '../atoms/separator';
import { TooltipProvider } from '../atoms/tooltip';
import { useIsMobile } from '../hooks/use-mobile';
import { cn } from '../lib/utils';
import { Sheet, SheetContent } from '../molecules/sheet';

const SIDEBAR_COOKIE_NAME = 'sidebar:state';
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 Days
const SIDEBAR_WIDTH = '16rem';
const SIDEBAR_WIDTH_MOBILE = '18rem';
const SIDEBAR_WIDTH_ICON = '3rem';
const SIDEBAR_KEYBOARD_SHORTCUT = 'b';

// Sidebar Context
type SidebarContextProps = {
  state: 'expanded' | 'collapsed';
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContextProps | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider.');
  }
  return context;
}

// Sidebar Provider
const SidebarProvider = ({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<'div'> & { defaultOpen?: boolean; open?: boolean; onOpenChange?: (open: boolean) => void }) => {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;

  const setOpen = React.useCallback(
    (value: boolean | ((prev: boolean) => boolean)) => {
      const newState = typeof value === 'function' ? value(open) : value;
      setOpenProp ? setOpenProp(newState) : _setOpen(newState);
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${newState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [open, setOpenProp],
  );

  const toggleSidebar = React.useCallback(() => {
    isMobile ? setOpenMobile((prev) => !prev) : setOpen((prev) => !prev);
  }, [isMobile, setOpen]);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleSidebar]);

  return (
    <SidebarContext.Provider
      value={{
        state: open ? 'expanded' : 'collapsed',
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }}
    >
      <TooltipProvider delayDuration={0}>
        <div
          style={
            {
              '--sidebar-width': SIDEBAR_WIDTH,
              '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={cn('group/sidebar-wrapper flex min-h-screen w-full bg-sidebar', className)}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
};

// Sidebar
const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & {
    side?: 'left' | 'right';
    variant?: 'sidebar' | 'floating' | 'inset';
    collapsible?: 'offcanvas' | 'icon' | 'none';
  }
>(({ side = 'left', variant = 'sidebar', collapsible = 'offcanvas', className, children, ...props }, ref) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  return isMobile ? (
    <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
      <SheetContent
        className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
        style={{ '--sidebar-width': SIDEBAR_WIDTH_MOBILE } as React.CSSProperties}
        side={side}
      >
        <div className="flex h-full w-full flex-col">{children}</div>
      </SheetContent>
    </Sheet>
  ) : (
    <div
      ref={ref}
      className="group hidden md:block text-sidebar-foreground"
      data-state={state}
      data-collapsible={state === 'collapsed' ? collapsible : ''}
      data-variant={variant}
      data-side={side}
      {...props}
    >
      <div
        className={cn(
          'relative h-screen w-[--sidebar-width] bg-transparent transition-all duration-200 ease-linear',
          'group-data-[collapsible=offcanvas]:w-0',
          variant === 'floating' ? 'rounded-lg shadow-lg' : '',
          className,
        )}
      >
        <div className="flex h-full w-full flex-col bg-sidebar">{children}</div>
      </div>
    </div>
  );
});
Sidebar.displayName = 'Sidebar';

// Sidebar Trigger
const SidebarTrigger = React.forwardRef<React.ElementRef<typeof Button>, React.ComponentProps<typeof Button>>(
  ({ className, onClick, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();
    return (
      <Button
        ref={ref}
        variant="ghost"
        size="icon"
        className={cn('h-7 w-7', className)}
        onClick={(event) => {
          onClick?.(event);
          toggleSidebar();
        }}
        {...props}
      >
        <PanelLeft />
        <span className="sr-only">Toggle Sidebar</span>
      </Button>
    );
  },
);
SidebarTrigger.displayName = 'SidebarTrigger';

// Sidebar Content
const SidebarContent = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex min-h-0 flex-1 flex-col gap-2 overflow-auto', className)} {...props} />
));
SidebarContent.displayName = 'SidebarContent';

// Sidebar Header
const SidebarHeader = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex flex-col gap-2 p-2', className)} {...props} />
));
SidebarHeader.displayName = 'SidebarHeader';

// Sidebar Footer
const SidebarFooter = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex flex-col gap-2 p-2', className)} {...props} />
));
SidebarFooter.displayName = 'SidebarFooter';

// Sidebar Separator
const SidebarSeparator = React.forwardRef<React.ElementRef<typeof Separator>, React.ComponentProps<typeof Separator>>(
  ({ className, ...props }, ref) => (
    <Separator ref={ref} className={cn('mx-2 w-auto bg-sidebar-border', className)} {...props} />
  ),
);
SidebarSeparator.displayName = 'SidebarSeparator';

// Exporting Sidebar Components
export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};
