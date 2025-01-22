import React from 'react';
import Spinner from '@/components/Spinner';
import { classNames } from '@/utils';

export type ButtonProps = {
  /** Button variant */
  variant?: 'primary' | 'outline' | 'danger' | 'icon';
  /** Button text or content */
  children: React.ReactNode;
  /** Optional click handler */
  onClick?: () => void;
  /** Whether the button is in a loading state */
  loading?: boolean;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Additional class names for the button */
  className?: string;

  // form props
  type?: 'button' | 'submit' | 'reset';
  form?: string;
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  onClick,
  loading = false,
  disabled = false,
  className = 'h-9 px-4',
  type = 'button',
  form,
}) => {
  const isDisabled = disabled || loading;

  // Common base styles
  const baseStyles = [
    'inline-flex',
    'justify-center',
    'items-center',
    'gap-2',
    'rounded-md',
    'font-medium',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'transition-colors',
    'duration-200',
  ];

  // Variant-specific styles
  const variantStyles = {
    primary: [
      'bg-success',
      'hover:bg-green-700',
      isDisabled ? 'hover:!bg-green-700' : '',
      'text-white',
      'focus:ring-blue-500',
    ],
    outline: [
      'border',
      'border-success',
      'text-success',
      'hover:bg-green-50',
      isDisabled ? 'hover:!bg-green-50' : '',
      'focus:ring-green-500',
    ],
    danger: [
      'bg-red-600',
      'hover:bg-red-700',
      isDisabled ? 'hover:!bg-red-600' : '',
      'text-white',
      'focus:ring-red-500',
    ],
    icon: [
      // bg transparent no focus box shadow
      'bg-transparent',
      'hover:bg-transparent',
      'focus:ring-0',
      'p-0',
      '!px-1',
    ],
  }[variant];

  // Disabled styles
  // remove hover if disabled
  const disabledStyles = isDisabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      type={type}
      form={form}
      onClick={onClick}
      disabled={isDisabled}
      className={classNames([
        ...baseStyles,
        ...variantStyles,
        disabledStyles,
        className,
      ])}
    >
      {loading && <Spinner className="h-5 w-5" />}
      {children}
    </button>
  );
};

export default Button;
