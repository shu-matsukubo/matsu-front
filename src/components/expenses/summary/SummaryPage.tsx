import { BalanceTable } from './BalanceTable';
import { Calendar } from './Calendar';
import { useSummary } from '../../../hooks/expenses/summary/useSummary';

export const SummaryPage = () => {
  const { currentMonth, changeMonth, groupBy, setGroupBy, summary, calendarData, isLoading } =
    useSummary();
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-center">
        <button onClick={() => changeMonth(-1)}>←</button>
        {currentMonth.toISOString().slice(0, 7)}
        <button onClick={() => changeMonth(1)}>→</button>
      </div>
      <div className="flex justify-center">
        <button onClick={() => setGroupBy('category')}>カテゴリ</button>
        <button onClick={() => setGroupBy('payment_method')}>支払方法</button>
        <button onClick={() => setGroupBy('date')}>カレンダー</button>
      </div>

      {groupBy === 'date' && <Calendar data={calendarData} currentMonth={currentMonth} />}
      {groupBy === 'category' && <BalanceTable data={summary} />}
      {groupBy === 'payment_method' && <BalanceTable data={summary} />}
    </div>
  );
};
