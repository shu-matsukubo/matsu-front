import { BalanceTable } from './BalanceTable';
import { useSummary } from '../../../hooks/expenses/summary/useSummary';

export const SummaryPage = () => {
  const { currentMonth, changeMonth, summary, isLoading } = useSummary();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h2>{currentMonth.toISOString().slice(0, 7)}</h2>

      <button onClick={() => changeMonth(-1)}>←</button>
      <button onClick={() => changeMonth(1)}>→</button>

      <BalanceTable data={summary} />
    </div>
  );
};
