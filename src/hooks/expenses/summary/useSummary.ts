import { useState, useMemo } from 'react';
import { addMonth } from '../../../utils/dateUtil';
import { useSummaryApi } from '../api/useSummaryApi';

type CalendarCell = {
  date: string;
  day: number;
  net_amount: number;
  transaction_count: number;
  type: 'normal' | 'empty' | 'future';
};

const formatDate = (d: Date) => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
};

export const useSummary = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [groupBy, setGroupBy] = useState<'category' | 'payment_method' | 'date'>('category');

  const { data, isLoading } = useSummaryApi(currentMonth, groupBy);

  const changeMonth = (diff: number) => {
    setCurrentMonth(addMonth(currentMonth, diff));
  };

  const calendarData = useMemo<CalendarCell[]>(() => {
    if (groupBy !== 'date') return [];

    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const today = new Date();

    const end = new Date(year, month + 1, 0);
    const map = new Map((data ?? []).map(d => [d.date, d]));

    const result: CalendarCell[] = [];

    for (let i = 1; i <= end.getDate(); i++) {
      const d = new Date(year, month, i);
      const key = formatDate(d);
      const row = map.get(key);

      const net = row?.net_amount ?? 0;
      const count = row?.transaction_count ?? 0;

      let type: CalendarCell['type'] = 'normal';

      const isSameDay =
        d.getFullYear() === today.getFullYear() &&
        d.getMonth() === today.getMonth() &&
        d.getDate() === today.getDate();

      if (d > today && !isSameDay) {
        type = 'future';
      } else if (d < today && net === 0) {
        type = 'empty';
      }

      result.push({
        date: key,
        day: i,
        net_amount: net,
        transaction_count: count,
        type,
      });
    }

    return result;
  }, [data, currentMonth, groupBy]);

  return {
    currentMonth,
    changeMonth,
    groupBy,
    setGroupBy,
    summary: data ?? [],
    calendarData,
    isLoading,
  };
};
