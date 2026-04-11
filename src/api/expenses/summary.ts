import { api } from '@/api/client';
import { ExpenseSummaryListSchema } from '@/schemas/expenses/summary';

export const fetchExpenseSummary = async (month: string, groupBy: string = 'category') => {
  const res = await api.get<{ data: unknown }>(
    `/expenses?mode=summary&month=${month}&group_by=${groupBy}`
  );

  return ExpenseSummaryListSchema.parse(res.data);
};
