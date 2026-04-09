import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import type { ExpensesCreate } from '../../../types/expenses/create';
import { fetchExpensePaymentMethod, fetchExpenseCategory } from '../../../api/expenses/master';
import { fetchExpenseCreate } from '../../../api/expenses/create';

export const useExpenseApi = () => {
  const queryClient = useQueryClient();

  // マスタ取得
  const paymentMethodsQuery = useQuery({
    queryKey: ['paymentMethods'],
    queryFn: async () => fetchExpensePaymentMethod(),
  });

  const categoriesQuery = useQuery({
    queryKey: ['categories'],
    queryFn: async () => fetchExpenseCategory(),
  });

  // 登録処理
  const createMutation = useMutation({
    mutationFn: async (payload: ExpensesCreate) => {
      fetchExpenseCreate(payload);
    },
    onSuccess: () => {
      // 月次一覧を更新
      queryClient.invalidateQueries({ queryKey: ['expenseSummary'] });
    },
  });

  return {
    paymentMethodsQuery,
    categoriesQuery,
    createExpense: createMutation.mutateAsync,
  };
};
