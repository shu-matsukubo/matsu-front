import { useState, useMemo } from 'react';
import { addMonth } from '@/utils/date/get';
import { useSummaryApi } from '@/hooks/expenses/api/useSummaryApi';
import type { CalendarCell } from '@/types/expenses/summary';
import { formatDate } from '@/utils/date/format';
import { isSameDay } from '@/utils/date/compare';

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

      // 未来日、過去日のうち支払いが0円だった日、それ以外の日で区切る
      if (!isSameDay(d, today)) {
        if (d > today) {
          type = 'future';
        } else if (d < today && net === 0) {
          type = 'empty';
        }
      }
      console.log(type);

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
