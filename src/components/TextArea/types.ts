import { ChangeEventHandler, FocusEventHandler } from 'react';
import { WithError } from '@/types';

export interface TextAreaPropsBase {
  name: string; // Name of the textarea
  label?: string; // Optional label
  value?: string; // Controlled value of the textarea
  placeholder?: string; // Placeholder text
  onChange?: ChangeEventHandler<HTMLTextAreaElement>; // Event handler for changes
  onFocus?: FocusEventHandler<HTMLTextAreaElement>; // Event handler for focus
  message?: string; // Error or helper message
  rows?: number; // Number of rows for the textarea
}

export type TextAreaProps = WithError<TextAreaPropsBase>;
