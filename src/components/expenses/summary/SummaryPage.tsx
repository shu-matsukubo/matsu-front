import { BalanceTable } from './BalanceTable';
import { FixedCostTable } from './FixedCostTable';
import { HistoryTable } from './HistoryTable';
import { TotalTable } from './TotalTable';
import './summary.css';

import { Button } from '@/components/common/Button';
import { ButtonGroup } from '@/components/common/ButtonGroup';
import { useSummary } from '@/hooks/expenses/summary/useSummary';

export const SummaryPage = () => {
  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    searchRange,
    dateError,
    search,
    groupBy,
    setGroupBy,
    selectedCategory,
    selectCategory,
    history,
    summary,
    meta,
    isLoading,
    isHistoryLoading,
  } = useSummary();
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-row items-end justify-center gap-2">
          <label className="flex flex-col gap-1 text-sm">
            開始日
            <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
          </label>

          <label className="flex flex-col gap-1 text-sm">
            終了日
            <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
          </label>

          <Button onClick={search}>検索</Button>
        </div>

        {dateError && <p className="text-sm text-red-500">{dateError}</p>}
      </div>

      <TotalTable data={meta} />

      <div className="flex justify-center">
        <ButtonGroup
          value={groupBy}
          onChange={setGroupBy}
          options={[
            { label: 'カテゴリ', value: 'category' },
            { label: '支払方法', value: 'payment_method' },
          ]}
        />
      </div>

      {groupBy === 'category' && (
        <BalanceTable
          data={summary}
          selectedCategoryId={selectedCategory?.category_id}
          onRowClick={selectCategory}
        />
      )}
      {groupBy === 'payment_method' && <BalanceTable data={summary} />}

      {groupBy === 'category' && selectedCategory && (
        <HistoryTable
          categoryName={selectedCategory.category_name ?? ''}
          totalAmount={selectedCategory.net_amount}
          startDate={searchRange.startDate}
          endDate={searchRange.endDate}
          data={history}
          isLoading={isHistoryLoading}
        />
      )}

      <FixedCostTable data={meta.fixed_costs} />
    </div>
  );
};
