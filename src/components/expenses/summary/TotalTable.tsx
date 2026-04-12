import type { ExpenseSummaryMeta } from '@/schemas/expenses/summary';

type Props = {
  data: ExpenseSummaryMeta;
};

export const TotalTable = ({ data }: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th className="text-center text-lg">合計利用金額</th>
          <th className="text-center text-lg">固定費</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border text-center text-md">{data.total_net_amount ?? 0}</td>
          <td className="border text-center text-md">{data.fixed_cost_net_amount ?? 0}</td>
        </tr>
      </tbody>
    </table>
  );
};
