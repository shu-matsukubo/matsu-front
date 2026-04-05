export const INITIAL_BALANCE: Record<string, number> = {
  Cash: 35000,
  VPointPay: 10000,
  PayPay: 6000,
  Suica: 3500,
  Others: 110000,
};
export const PAYMENT_METHOD_KEYS = Object.keys(INITIAL_BALANCE);

export const PAYMENT_METHODS = {
  Cash: {
    label: '現金',
    color: 'blue',
    initial: 35000,
  },
  VPointPay: {
    label: 'VPointPay',
    color: 'yellow',
    initial: 10000,
  },
  PayPay: {
    label: 'PayPay',
    color: 'red',
    initial: 6000,
  },
  Suica: {
    label: 'Suica',
    color: 'green',
    initial: 14000,
  },
  Others: {
    label: 'その他',
    color: 'gray',
    initial: 0,
  },
} as const;
