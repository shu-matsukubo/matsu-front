import type { ExpenseSummary } from '../../../schemas/expenses';

type Props = {
  data: ExpenseSummary[];
};

export const BalanceTable = ({ data }: Props) => {
  return (
    <table className="">
      <thead>
        <tr>
          <th>名前</th>
          <th>収支</th>
          <th>残高</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            <td>{row.category_name ?? row.payment_method_name ?? row.date}</td>
            <td>{row.net_amount}</td>
            <td>{row.remaining_balance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
