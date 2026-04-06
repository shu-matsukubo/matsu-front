import { BalanceTable } from './BalanceTable';
import { Calendar } from './Calendar';
import { useSummary } from '../../../hooks/expenses/summary/useSummary';

export const SummaryPage = () => {
  const { currentMonth, changeMonth, groupBy, setGroupBy, summary, isLoading } = useSummary();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <div>
        <button onClick={() => changeMonth(-1)}>←</button>
        {currentMonth.toISOString().slice(0, 7)}
        <button onClick={() => changeMonth(1)}>→</button>
      </div>
      <div>
        <button onClick={() => setGroupBy('category')}>カテゴリ</button>
        <button onClick={() => setGroupBy('payment_method')}>支払方法</button>
        <button onClick={() => setGroupBy('date')}>カレンダー</button>
      </div>

      {groupBy === 'category' && <BalanceTable data={summary} />}
      {groupBy === 'payment_method' && <BalanceTable data={summary} />}
      {groupBy === 'date' && <Calendar data={summary} />}
    </div>
  );
};
