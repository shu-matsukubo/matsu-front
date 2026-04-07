// src/components/Calendar.tsx
import type { FC } from 'react';

type Cell = {
  date: string;
  day: number;
  net_amount: number;
  transaction_count: number;
};

type Props = {
  data: Cell[];
  currentMonth: Date;
};

const WEEK = ['日', '月', '火', '水', '木', '金', '土'];

export const Calendar: FC<Props> = ({ data, currentMonth }) => {
  const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

  return (
    <div className="w-full">
      {/* header */}
      <div className="grid grid-cols-7 gap-2">
        {WEEK.map(d => (
          <div key={d} className="text-center">
            {d}
          </div>
        ))}
      </div>

      {/* body */}
      <div className="grid grid-cols-7 gap-2">
        {/* empty */}
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {data.map(cell => (
          <div key={cell.date} className="p-2 border flex flex-col" style={{ minHeight: 80 }}>
            <div>{cell.day}</div>

            <div className="mt-1 flex flex-row items-center .gap-1">
              <span className="text-md">{cell.net_amount}円</span>
              <span className="text-sm">({cell.transaction_count}回)</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
