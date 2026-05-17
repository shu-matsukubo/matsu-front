import { useQuery } from '@tanstack/react-query';

import { fetchExpenseSummary } from '@/api/expenses/summary';

const defaultResponse = {
  data: [],
  meta: {
    total_net_amount: 0,
    fixed_cost_net_amount: 0,
    fixed_costs: [],
  },
};

export const useSummaryApi = (startDate: string, endDate: string, groupBy: string) => {
  const query = useQuery({
    queryKey: ['expenseSummary', startDate, endDate, groupBy],
    queryFn: () => fetchExpenseSummary({ startDate, endDate, groupBy }),
  });

  return {
    ...query,
    data: query.data ?? defaultResponse,
  };
};
