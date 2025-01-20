import { DropdownProps } from '@/components/Dropdown/types';
import { TextFieldProps } from '@/components/TextField/types';
import { TextAreaProps } from '@/components/TextArea/types';

type WithValidation<T> = T & {
  validate?: (value: string) => string | undefined;
};

export type TextFieldConfig = TextFieldProps & {
  type: 'TextField';
};

export type TextAreaConfig = TextAreaProps & {
  type: 'TextArea';
};

export type DropdownConfig = Omit<DropdownProps, 'value' | 'onChange'> & {
  type: 'Dropdown';
};

// Combined configuration type
export type FormFieldConfig = WithValidation<
  TextFieldConfig | TextAreaConfig | DropdownConfig
>;
