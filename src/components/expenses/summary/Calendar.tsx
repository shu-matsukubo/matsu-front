import type { FC } from 'react';
import { WEEK_DAYS } from '@/utils/date/constants';
import type { CalendarCell } from '@/types/expenses/summary';
import { getFirstDay } from '@/utils/date/get';

export type Props = {
  data: CalendarCell[];
  currentMonth: Date;
};

export const Calendar: FC<Props> = ({ data, currentMonth }) => {
  const firstDay = getFirstDay(currentMonth);

  const getCellClass = (type: CalendarCell['type']) => {
    switch (type) {
      case 'empty':
        return 'calendar-cell--empty';
      case 'future':
        return 'calendar-cell--future';
      default:
        return '';
    }
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-7 gap-2">
        {WEEK_DAYS.map(d => (
          <div key={d} className="text-center">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {data.map(cell => (
          <div key={cell.date} className={`calendar-cell ${getCellClass(cell.type)}`}>
            <div>{cell.day}</div>

            <div className="mt-1 flex flex-row items-center gap-1">
              <span className="text-md">{cell.net_amount}円</span>
              <span className="text-sm">({cell.transaction_count}回)</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
