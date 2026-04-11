import { useState } from 'react';
import { useExpenseApi } from '@/hooks/expenses/api/useCreateApi';
import { Plus } from 'lucide-react';
import { Button } from '@/components/common/Button';

export type Props = {
  onBack: () => void;
};
export const CreatePage = ({ onBack }: Props) => {
  const { paymentMethodsQuery, categoriesQuery, createExpense } = useExpenseApi();

  const [amount, setAmount] = useState('');
  const [pointAmount, setPointAmount] = useState('');
  const [paymentMethodId, setPaymentMethodId] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [memo, setMemo] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async () => {
    await createExpense({
      amount: Number(amount),
      point_amount: Number(pointAmount),
      payment_method_id: paymentMethodId,
      category_id: categoryId,
      memo,
      date,
    });

    onBack();
  };

  if (paymentMethodsQuery.isLoading || categoriesQuery.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <input value={amount} onChange={e => setAmount(e.target.value)} placeholder="金額" />
      <input
        value={pointAmount}
        onChange={e => setPointAmount(e.target.value)}
        placeholder="ポイント"
      />

      <select onChange={e => setPaymentMethodId(e.target.value)}>
        <option value="">選択してください</option>
        {paymentMethodsQuery.data.map(pm => (
          <option key={pm.id} value={pm.id}>
            {pm.name}
          </option>
        ))}
      </select>

      <select onChange={e => setCategoryId(e.target.value)}>
        <option value="">選択してください</option>
        {categoriesQuery.data.map(c => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>

      <input value={memo} onChange={e => setMemo(e.target.value)} placeholder="メモ" />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} />

      <Button variant="secondary" onClick={onBack}>
        戻る
      </Button>
      <Button onClick={handleSubmit} leftIcon={<Plus size={16} />}>
        登録
      </Button>
    </div>
  );
};
