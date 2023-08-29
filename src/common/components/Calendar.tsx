import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ComponentProps, FC } from 'react';
import { DayPicker } from 'react-day-picker';
import { cn } from '../../core/utils/common.util';

type CalendarProps = ComponentProps<typeof DayPicker>;

const Calendar: FC<CalendarProps> = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) => {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium',
        nav: 'space-x-1 flex items-center',
        nav_button: cn('h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell: 'text-muted-dark rounded-md w-9 font-normal text-[0.8rem]',
        row: 'flex w-full mt-2',
        cell: 'text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        day: cn('h-9 w-9 p-0 font-normal aria-selected:opacity-100'),
        day_selected:
          'bg-primary text-primary-dark hover:bg-primary hover:text-primary-dark focus:bg-primary focus:text-primary-dark',
        day_today: 'bg-accent text-accent-dark',
        day_outside: 'text-muted-dark opacity-50',
        day_disabled: 'text-muted-dark opacity-50',
        day_range_middle: 'aria-selected:bg-accent aria-selected:text-accent-dark',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...leftProps }) => <ChevronLeft className="h-4 w-4" {...leftProps} />,
        IconRight: ({ ...rightProps }) => <ChevronRight className="h-4 w-4" {...rightProps} />,
      }}
      {...props}
    />
  );
};

Calendar.displayName = 'Calendar';

export default Calendar;
