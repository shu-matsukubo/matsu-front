import { useState } from 'react';
import { addMonth } from '../../../utils/dateUtil';
import { useSummaryApi } from '../api/useSummaryApi';

export const useSummary = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [groupBy, setGroupBy] = useState<'category' | 'payment_method' | 'date'>('category');

  const { data, isLoading } = useSummaryApi(currentMonth, groupBy);

  const changeMonth = (diff: number) => {
    setCurrentMonth(addMonth(currentMonth, diff));
  };

  return {
    currentMonth,
    changeMonth,
    groupBy,
    setGroupBy,
    summary: data ?? [],
    isLoading,
  };
};
