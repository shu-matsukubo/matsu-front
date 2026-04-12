import { useQuery } from '@tanstack/react-query';
import { fetchExpenseSummary } from '@/api/expenses/summary';
import { formatMonth } from '@/utils/date/format';

const defaultResponse = {
  data: [],
  meta: {
    total_net_amount: 0,
    fixed_cost_net_amount: 0,
  },
};

export const useSummaryApi = (currentMonth: Date, groupBy: string) => {
  const month = formatMonth(currentMonth);

  const query = useQuery({
    queryKey: ['expenseSummary', month, groupBy],
    queryFn: () => fetchExpenseSummary(month, groupBy),
  });

  return {
    ...query,
    data: query.data ?? defaultResponse,
  };
};
