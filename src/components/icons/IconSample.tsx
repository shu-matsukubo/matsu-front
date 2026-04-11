import SampleSvg from '@/assets/icons/sample.svg?react';
import type { SVGProps } from 'react';

type Props = {
  size?: number;
} & SVGProps<SVGSVGElement>;

export const IconSample = ({ size = 16, ...props }: Props) => {
  return <SampleSvg width={size} height={size} stroke="currentColor" {...props} />;
};
