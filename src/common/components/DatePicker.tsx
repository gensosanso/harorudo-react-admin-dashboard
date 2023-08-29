import * as React from 'react';

import fr from 'date-fns/locale/fr';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import DatePickerPrimitive, { registerLocale } from 'react-datepicker';
import { SelectSimple } from './Select';

import 'react-datepicker/dist/react-datepicker.css';
import { cn } from '../../core/utils/common.util';
import { formatDate, getDateMonth, getDateYear, getYearsRange } from '../../core/utils/date.util';
import { Input } from './Input';

registerLocale('fr', fr);

const DatePicker = () => {
  const [startDate, setStartDate] = React.useState<Date | null>(new Date());

  const years = getYearsRange(1990, getDateYear(new Date()) + 1);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <DatePickerPrimitive
      locale="fr"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      // todayButton="Today"
      timeCaption="Heure"
      openToDate={startDate || new Date()}
      // showTimeSelect
      renderCustomHeader={({
        date,
        monthDate,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className="space-y-4 px-2">
          <div className="flex items-center justify-between">
            <div
              aria-label="Previous Month"
              aria-hidden="true"
              onClick={() => decreaseMonth()}
              role="button"
              className={cn(
                'flex items-center justify-center rounded p-2 transition duration-100 hover:bg-primary-100',
                prevMonthButtonDisabled && 'cursor-not-allowed opacity-50'
              )}
            >
              <ArrowLeft size={18} />
            </div>

            <span className="react-datepicker__current-month">
              {formatDate(monthDate, 'fr-FR')}
            </span>

            <div
              aria-label="Next Month"
              aria-hidden="true"
              onClick={() => increaseMonth()}
              role="button"
              className={cn(
                'flex items-center justify-center rounded p-2 transition duration-100 hover:bg-primary-100',
                nextMonthButtonDisabled && 'cursor-not-allowed opacity-50'
              )}
            >
              <ArrowRight size={18} />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <SelectSimple
              options={months.map((month, index) => ({
                lable: month,
                value: index.toString(),
              }))}
              value={getDateMonth(date)}
              onChange={(e) => changeMonth(Number(e.target.value))}
              className="col-span-2 h-auto p-1 text-sm"
            />
            <SelectSimple
              options={years.map((year) => ({
                lable: year.toString(),
                value: year.toString(),
              }))}
              value={getDateYear(date).toString()}
              onChange={(e) => changeYear(Number(e.target.value))}
              className="h-auto p-1 text-sm"
            />
          </div>
        </div>
      )}
      customInput={<Input />}
    />
  );
};
DatePicker.displayName = 'DatePicker';

export default DatePicker;
