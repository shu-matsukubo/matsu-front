import { api } from '@/api/client';
import {
  ExpensePaymentMethodListSchema,
  ExpenseCategoryListSchema,
} from '@/schemas/expenses/master';

export const fetchExpensePaymentMethod = async () => {
  const res = await api.get<{ data: unknown }>('/payment-methods');

  return ExpensePaymentMethodListSchema.parse(res.data);
};

export const fetchExpenseCategory = async () => {
  const res = await api.get<{ data: unknown }>('/categories');

  return ExpenseCategoryListSchema.parse(res.data);
};
