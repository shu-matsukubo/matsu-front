import { api } from '@/api/client';
import {
  ExpenseHistoryResponseSchema,
  ExpenseSummaryResponseSchema,
} from '@/schemas/expenses/summary';

export type ExpenseSummaryParams = {
  startDate: string;
  endDate: string;
  groupBy?: string;
};

export type ExpenseHistoryParams = {
  startDate: string;
  endDate: string;
  categoryId: string;
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

export const fetchExpenseHistory = async ({
  startDate,
  endDate,
  categoryId,
}: ExpenseHistoryParams) => {
  const res = await api.get('/expenses', {
    params: {
      mode: 'history',
      start_date: startDate,
      end_date: endDate,
      category_id: categoryId,
    },
  });

  return ExpenseHistoryResponseSchema.parse(res.data);
};
