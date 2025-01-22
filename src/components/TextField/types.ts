import { WithError } from '@/types';
import { ChangeEvent, ReactNode } from 'react';

type BaseProps = {
  name: string;
  label?: string;
  value?: string;
  placeholder?: string;
  prefix?: ReactNode;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;

  className?: string;
  innerClassName?: string;
};

export type TextFieldProps = WithError<BaseProps>;
