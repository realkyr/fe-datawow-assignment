import React from 'react';
import { LabelProps } from './types';

const Label: React.FC<LabelProps> = ({ name, label, error }) => {
  if (!label) return null;

  return (
    <label
      htmlFor={name}
      className={`block text-sm font-medium leading-6 ${
        error ? 'text-red-500' : 'text-gray-900'
      }`}
    >
      {label}
    </label>
  );
};

export default Label;
