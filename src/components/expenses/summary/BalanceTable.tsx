import type { ExpenseSummary } from '../../../schemas/expenses';

type Props = {
  data: ExpenseSummary[];
};

export const BalanceTable = ({ data }: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th className="text-center text-lg">名前</th>
          <th className="text-center text-lg">収支</th>
          <th className="text-center text-lg">残高</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            <td className="border text-center text-md">
              {row.category_name ?? row.payment_method_name ?? row.date}
            </td>
            <td className="border text-center text-md">{row.net_amount}</td>
            <td className="border text-center text-md">{row.remaining_balance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
