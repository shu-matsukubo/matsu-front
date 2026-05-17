import { api } from '@/api/client';
import { ExpenseSummaryResponseSchema } from '@/schemas/expenses/summary';

export type ExpenseSummaryParams = {
  startDate: string;
  endDate: string;
  groupBy?: string;
};

export const fetchExpenseSummary = async ({
  startDate,
  endDate,
  groupBy = 'category',
}: ExpenseSummaryParams) => {
  const res = await api.get('/expenses', {
    params: {
      mode: 'summary',
      start_date: startDate,
      end_date: endDate,
      group_by: groupBy,
    },
  });

  return ExpenseSummaryResponseSchema.parse(res.data);
};
