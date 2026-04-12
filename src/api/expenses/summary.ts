import { api } from '@/api/client';
import { ExpenseSummaryResponseSchema } from '@/schemas/expenses/summary';

export const fetchExpenseSummary = async (month: string, groupBy: string = 'category') => {
  const res = await api.get(`/expenses?mode=summary&month=${month}&group_by=${groupBy}`);

  return ExpenseSummaryResponseSchema.parse(res.data);
};
