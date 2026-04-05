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

export const ExpenseSummaryListSchema = z.array(ExpenseSummarySchema);

export type ExpenseSummary = z.infer<typeof ExpenseSummarySchema>;
