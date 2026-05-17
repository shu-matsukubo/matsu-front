import { z } from 'zod';

export const ExpenseSummarySchema = z.object({
  total_amount: z.number(),
  total_point: z.number(),
  net_amount: z.number(),
  transaction_count: z.number(),

  category_id: z.string().optional(),
  category_name: z.string().optional(),

  payment_method_id: z.string().optional(),
  payment_method_name: z.string().optional(),

  initial_balance: z.number().optional(),
  remaining_balance: z.number().optional(),

  date: z.string().optional(),
});

export const ExpenseSummaryMetaSchema = z.object({
  total_net_amount: z.number(),
  fixed_cost_net_amount: z.number().optional(),
  fixed_costs: z
    .array(z.object({
      name: z.string(),
      payment_date: z.string(),
      amount: z.number(),
    }))
    .default([]),
});

export const ExpenseSummaryResponseSchema = z.object({
  data: z.array(ExpenseSummarySchema),
  meta: ExpenseSummaryMetaSchema,
});

export const ExpenseHistorySchema = z.object({
  net_amount: z.number(),
  memo: z.string().nullable(),
  date: z.string(),
});

export const ExpenseHistoryResponseSchema = z.array(ExpenseHistorySchema);

export type ExpenseSummary = z.infer<typeof ExpenseSummarySchema>;
export type ExpenseSummaryMeta = z.infer<typeof ExpenseSummaryMetaSchema>;
export type ExpenseSummaryResponse = z.infer<typeof ExpenseSummaryResponseSchema>;
export type ExpenseHistory = z.infer<typeof ExpenseHistorySchema>;
export type ExpenseHistoryResponse = z.infer<typeof ExpenseHistoryResponseSchema>;
