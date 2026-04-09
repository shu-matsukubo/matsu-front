export type CalendarCell = {
  date: string;
  day: number;
  net_amount: number;
  transaction_count: number;
  type: 'normal' | 'empty' | 'future';
};
