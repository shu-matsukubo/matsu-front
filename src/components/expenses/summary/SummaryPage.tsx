import { BalanceTable } from './BalanceTable';
import { Calendar } from './Calendar';
import { useSummary } from '@/hooks/expenses/summary/useSummary';
import { ButtonGroup } from '@/components/common/ButtonGroup';
import { Button } from '@/components/common/Button';

export const SummaryPage = () => {
  const { currentMonth, changeMonth, groupBy, setGroupBy, summary, calendarData, isLoading } =
    useSummary();
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex flex-row justify-center gap-2">
        <Button variant="secondary" onClick={() => changeMonth(-1)}>
          ←
        </Button>
        {currentMonth.toISOString().slice(0, 7)}
        <Button variant="secondary" onClick={() => changeMonth(-1)}>
          →
        </Button>
      </div>
      <div className="flex justify-center">
        <ButtonGroup
          value={groupBy}
          onChange={setGroupBy}
          options={[
            { label: 'カテゴリ', value: 'category' },
            { label: '支払方法', value: 'payment_method' },
            { label: 'カレンダー', value: 'date' },
          ]}
        />
      </div>

      {groupBy === 'category' && <BalanceTable data={summary} />}
      {groupBy === 'payment_method' && <BalanceTable data={summary} />}
      {groupBy === 'date' && <Calendar data={calendarData} currentMonth={currentMonth} />}
    </div>
  );
};
