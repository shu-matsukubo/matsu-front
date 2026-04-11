import { Button } from './Button';

type Option<T> = {
  label: string;
  value: T;
};

type Props<T> = {
  options: Option<T>[];
  value: T;
  onChange: (v: T) => void;
};

export const ButtonGroup = <T extends string>({ options, value, onChange }: Props<T>) => {
  return (
    <div className="btn-group">
      {options.map(opt => {
        const isActive = value === opt.value;

        return (
          <Button
            key={opt.value}
            variant={isActive ? 'primary' : 'secondary'}
            onClick={() => onChange(opt.value)}
          >
            {opt.label}
          </Button>
        );
      })}
    </div>
  );
};
