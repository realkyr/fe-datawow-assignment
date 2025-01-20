import React, { useRef } from 'react';
import Label from '../Label';
import { TextAreaProps } from '@/components/TextArea/types';

const TextArea: React.FC<TextAreaProps> = ({
  name,
  label,
  value,
  placeholder = `Enter ${name}`,
  onChange,
  onFocus,
  error = false,
  message,
  rows = 4, // Default number of rows
}) => {
  const inputRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={inputRef}>
      <Label name={name} label={label} error={error} />
      <div className="relative mt-2 rounded-md shadow-sm">
        <textarea
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={onFocus}
          rows={rows}
          className={`block w-full rounded-md border-0 p-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-0 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
            error
              ? 'ring-2 ring-red-500 focus:ring-2 focus:ring-inset focus:ring-red-500'
              : 'focus:ring-indigo-600'
          }`}
        />
      </div>

      {error && message && (
        <span className="mt-1 text-sm text-red-500">{message}</span>
      )}
    </div>
  );
};

export default TextArea;
