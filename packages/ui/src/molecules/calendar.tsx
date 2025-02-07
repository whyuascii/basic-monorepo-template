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
        'p-4 border-2 border-black rounded-[6px] bg-background shadow-[4px_4px_0px_#000] transition-all hover:shadow-[6px_6px_0px_#000] active:translate-y-[2px]',
        className,
      )}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-bold uppercase tracking-widest',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'h-8 w-8 border-2 border-black bg-muted hover:bg-primary text-black p-0 shadow-[3px_3px_0px_#000] hover:shadow-[4px_4px_0px_#000] active:translate-y-[2px]',
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell:
          'text-muted-foreground rounded-[4px] border-2 border-black w-10 font-bold text-[0.8rem] bg-primary text-primary-foreground text-center',
        row: 'flex w-full mt-2',
        cell: cn(
          'relative p-0 text-center text-sm border-2 border-black rounded-[4px] focus-within:z-20 transition-all',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
            : '[&:has([aria-selected])]:rounded-md',
        ),
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-10 w-10 p-0 font-bold text-black bg-muted border-2 border-black hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground active:translate-y-[2px]',
        ),
        day_range_start: 'day-range-start',
        day_range_end: 'day-range-end',
        day_selected:
          'bg-primary text-primary-foreground border-2 border-black hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
        day_today: 'bg-accent text-accent-foreground border-2 border-black',
        day_outside: 'text-muted-foreground opacity-50',
        day_disabled: 'text-muted-foreground opacity-50',
        day_range_middle: 'aria-selected:bg-accent aria-selected:text-accent-foreground border-2 border-black',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        Chevron: (props) => {
          if (props.orientation === 'left') {
            return (
              <ChevronLeftIcon
                className="h-5 w-5 text-black hover:scale-110 transition-transform duration-200"
                {...props}
              />
            );
          }
          return (
            <ChevronRightIcon
              className="h-5 w-5 text-black hover:scale-110 transition-transform duration-200"
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
