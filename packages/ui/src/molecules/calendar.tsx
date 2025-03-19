import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import type React from 'react';
import { DayPicker, type DayPickerProps } from 'react-day-picker';

import { buttonVariants } from '../atoms/button';
import { cn } from '../lib/utils';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps & DayPickerProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        'p-4 border border-border rounded-lg bg-background shadow-lg transition-all duration-200 hover:shadow-xl',
        className,
      )}
      classNames={{
        months: 'flex flex-col sm:flex-row justify-center gap-4 sm:gap-6',
        month: 'space-y-4 flex flex-col items-center w-full',
        caption: 'flex justify-between items-center w-full py-2',
        caption_label: 'text-sm font-semibold uppercase tracking-wide text-foreground',
        nav: 'flex items-center gap-2',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'h-8 w-8 flex items-center justify-center border border-border bg-muted hover:bg-primary text-foreground shadow-md hover:shadow-lg active:scale-95',
        ),
        nav_button_previous: 'absolute left-2 sm:left-4',
        nav_button_next: 'absolute right-2 sm:right-4',
        table: 'w-full border-collapse',
        head_row: 'grid grid-cols-7',
        head_cell: 'text-xs font-semibold uppercase text-center bg-primary text-primary-foreground rounded-md py-1',
        row: 'grid grid-cols-7 w-full',
        cell: cn(
          'relative flex justify-center items-center p-1 text-sm border border-border rounded-md transition-all',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md'
            : '[&:has([aria-selected])]:rounded-md',
        ),
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-10 w-10 flex items-center justify-center font-medium text-foreground bg-muted border border-border rounded-md hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground active:scale-95',
        ),
        day_range_start: 'day-range-start',
        day_range_end: 'day-range-end',
        day_selected: 'bg-primary text-primary-foreground border border-border',
        day_today: 'bg-accent text-accent-foreground border border-border',
        day_outside: 'text-muted-foreground opacity-50',
        day_disabled: 'text-muted-foreground opacity-50 cursor-not-allowed',
        day_range_middle: 'aria-selected:bg-accent aria-selected:text-accent-foreground border border-border',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        Chevron: (props) => {
          return props.orientation === 'left' ? (
            <ChevronLeftIcon
              className="h-5 w-5 text-foreground hover:scale-110 transition-transform duration-200"
              {...props}
            />
          ) : (
            <ChevronRightIcon
              className="h-5 w-5 text-foreground hover:scale-110 transition-transform duration-200"
              {...props}
            />
          );
        },
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
