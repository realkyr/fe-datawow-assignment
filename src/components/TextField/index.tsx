'use client';
import React, { useRef } from 'react';
import Label from '../Label';
import { TextFieldProps } from './types';

const TextField: React.FC<TextFieldProps> = ({
  name,
  label,
  value,
  placeholder = `Enter ${name}`,
  prefix,
  onChange,
  onFocus,
  error = false,
  message,
}) => {
  const inputRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={inputRef}>
      <Label name={name} label={label} error={error} />
      <div className="relative rounded-md shadow-sm">
        {prefix && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">{prefix}</span>
          </div>
        )}

        <input
          type="text"
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={onFocus}
          className={`block w-full rounded-md border-0 p-5 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-0 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
            error
              ? 'ring-2 ring-red-500 focus:ring-2 focus:ring-inset focus:ring-red-500'
              : 'focus:ring-green-900'
          } ${prefix ? 'pl-10' : 'pl-3'}`}
        />
      </div>

      {error && message && (
        <span className="mt-1 text-sm text-red-500">{message}</span>
      )}
    </div>
  );
};

export default TextField;
