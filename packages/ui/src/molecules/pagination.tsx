import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import * as React from 'react';

import { type ButtonProps, buttonVariants } from '../atoms/button';
import { cn } from '../lib/utils';

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    aria-label="pagination"
    className={cn(
      'mx-auto flex w-full justify-center border-2 border-black rounded-md bg-secondary p-2 shadow-[4px_4px_0px_#000] transition-all hover:shadow-[6px_6px_0px_#000] active:shadow-none',
      className,
    )}
    {...props}
  />
);
Pagination.displayName = 'Pagination';

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<'ul'>>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn('flex flex-row items-center gap-2', className)} {...props} />
  ),
);
PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn('border-2 border-black rounded-md p-1 bg-primary shadow-[3px_3px_0px_#000]', className)}
    {...props}
  />
));
PaginationItem.displayName = 'PaginationItem';

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<'a'>;

const PaginationLink = ({ className, isActive, size = 'icon', ...props }: PaginationLinkProps) => (
  <a
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? 'outline' : 'ghost',
        size,
      }),
      'border-2 border-black shadow-[3px_3px_0px_#000] transition-all hover:shadow-[5px_5px_0px_#000] active:shadow-none',
      className,
    )}
    {...props}
  />
);
PaginationLink.displayName = 'PaginationLink';

const PaginationPrevious = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn(
      'gap-1 pl-2.5 flex items-center border-2 border-black bg-background px-3 py-2 rounded-md shadow-[3px_3px_0px_#000] transition-all hover:shadow-[5px_5px_0px_#000] active:shadow-none',
      className,
    )}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = 'PaginationPrevious';

const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn(
      'gap-1 pr-2.5 flex items-center border-2 border-black bg-background px-3 py-2 rounded-md shadow-[3px_3px_0px_#000] transition-all hover:shadow-[5px_5px_0px_#000] active:shadow-none',
      className,
    )}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = 'PaginationNext';

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
    className={cn(
      'flex h-9 w-9 items-center justify-center border-2 border-black rounded-md bg-muted shadow-[3px_3px_0px_#000] transition-all hover:shadow-[5px_5px_0px_#000] active:shadow-none',
      className,
    )}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = 'PaginationEllipsis';

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
