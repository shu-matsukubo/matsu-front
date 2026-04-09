import { useQuery } from '@tanstack/react-query';
import { fetchExpenseSummary } from '../../../api/expenses/summary';
import { formatMonth } from '../../../utils/dateUtil';

export const useSummaryApi = (currentMonth: Date, groupBy: string) => {
  const month = formatMonth(currentMonth);

  return useQuery({
    queryKey: ['expenseSummary', month, groupBy],
    queryFn: () => fetchExpenseSummary(month, groupBy),
  });
};
