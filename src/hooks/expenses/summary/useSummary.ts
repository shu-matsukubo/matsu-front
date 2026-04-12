import { useState, useMemo } from 'react';
import { addMonth } from '@/utils/date/get';
import { useSummaryApi } from '@/hooks/expenses/api/useSummaryApi';
import type { CalendarCell } from '@/types/expenses/summary';
import { buildCalendar } from '@/utils/expenses/calendar';

export const useSummary = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [groupBy, setGroupBy] = useState<'category' | 'payment_method' | 'date'>('category');

  const { data, isLoading } = useSummaryApi(currentMonth, groupBy);

  const changeMonth = (diff: number) => {
    setCurrentMonth(addMonth(currentMonth, diff));
  };

  const calendarData = useMemo<CalendarCell[]>(() => {
    if (groupBy !== 'date') return [];
    return buildCalendar(data.data, currentMonth);
  }, [data, currentMonth, groupBy]);

  return {
    currentMonth,
    changeMonth,
    groupBy,
    setGroupBy,
    summary: data.data ?? [],
    meta: data.meta ?? [],
    calendarData,
    isLoading,
  };
};
