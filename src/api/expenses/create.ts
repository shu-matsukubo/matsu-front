import { api } from '../client';
import type { ExpensesCreate } from '../../types/expenses/create';

export const fetchExpenseCreate = async (payload: ExpensesCreate) => {
  await api.post('/expenses', payload);
};
