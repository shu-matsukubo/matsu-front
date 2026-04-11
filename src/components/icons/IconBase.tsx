import type { SVGProps } from 'react';

type Props = {
  size?: number;
} & SVGProps<SVGSVGElement>;

export const IconBase = ({ size = 16, style, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      fill="currentColor"
      style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
      {...props}
    />
  );
};
