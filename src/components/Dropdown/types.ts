import { WithError } from '@/types';
import { CSSProperties } from 'react';

export interface Option {
  label: string;
  value: string;
}

interface BaseDropdownProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  allowSearch?: boolean;
  label?: string;
  width?: string | number;
}

export type DropdownProps = WithError<BaseDropdownProps>;

export interface WithBottomVariableCSS extends CSSProperties {
  '--bottom': string | number;
}
