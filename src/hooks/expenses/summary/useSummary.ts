// src/hooks/expenses/summary/useSummary.ts
import { useState, useMemo } from 'react';
import { addMonth } from '../../../utils/dateUtil';
import { useSummaryApi } from '../api/useSummaryApi';

type CalendarCell = {
  date: string;
  day: number;
  net_amount: number;
  transaction_count: number;
};

const formatDate = (d: Date) => d.toISOString().slice(0, 10);

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

    const end = new Date(year, month + 1, 0);

    const map = new Map((data ?? []).map(d => [d.date, d]));

    const result: CalendarCell[] = [];

    for (let i = 1; i <= end.getDate(); i++) {
      const d = new Date(year, month, i);
      const key = formatDate(d);
      const row = map.get(key);

      result.push({
        date: key,
        day: i,
        net_amount: row?.net_amount ?? 0,
        transaction_count: row?.transaction_count ?? 0,
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
