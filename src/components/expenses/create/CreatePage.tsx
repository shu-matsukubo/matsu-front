import { useCreate } from '@/hooks/expenses/create/useCreate';
import { CreateForm } from './CreateForm';

export type Props = {
  onBack: () => void;
};

export const CreatePage = ({ onBack }: Props) => {
  const {
    form,
    updateForm,
    paymentMethodsData,
    categoriesData,
    handleSubmit,
    isLoading,
    isCreating,
  } = useCreate({ onCreated: onBack });

  if (isLoading) return <p>Loading...</p>;

  return (
    <CreateForm
      form={form}
      paymentMethods={paymentMethodsData}
      categories={categoriesData}
      isCreating={isCreating}
      onBack={onBack}
      onChange={updateForm}
      onSubmit={handleSubmit}
    />
  );
};
