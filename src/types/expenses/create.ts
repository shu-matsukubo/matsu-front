export type ExpensesCreate = {
  amount: number;
  point_amount: number;
  payment_method_id: string;
  category_id: string;
  memo: string;
  date: string;
};
