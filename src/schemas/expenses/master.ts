import { z } from 'zod';

// 支払方法
export const ExpensePaymentMethodSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export const ExpensePaymentMethodListSchema = z.array(ExpensePaymentMethodSchema);

export type ExpensePaymentMethod = z.infer<typeof ExpensePaymentMethodSchema>;

// カテゴリ
export const ExpenseCategorySchema = z.object({
  id: z.string(),
  name: z.string(),
});

export const ExpenseCategoryListSchema = z.array(ExpenseCategorySchema);

export type ExpenseCategory = z.infer<typeof ExpenseCategorySchema>;
