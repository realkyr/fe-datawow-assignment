import { WithError } from '@/types';
import { ChangeEvent } from 'react';

type BaseProps = {
  name: string;
  label?: string;
  value?: string;
  placeholder?: string;
  prefix?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
};

export type TextFieldProps = WithError<BaseProps>;
