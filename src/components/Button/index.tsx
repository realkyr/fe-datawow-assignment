import React from 'react';
import Spinner from '@/components/Spinner';
import { classNames } from '@/utils';

export type ButtonProps = {
  /** Button variant */
  variant?: 'primary' | 'outline' | 'danger';
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
  className = 'h-10 px-4',
  type = 'button',
  form,
}) => {
  const isDisabled = disabled || loading;

  // Common base styles
  const baseStyles = [
    'inline-flex',
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
      'bg-blue-600',
      'hover:bg-blue-700',
      isDisabled ? 'hover:!bg-blue-600' : '',
      'text-white',
      'focus:ring-blue-500',
    ],
    outline: [
      'border',
      'border-blue-600',
      'text-blue-600',
      'hover:bg-blue-50',
      isDisabled ? 'hover:!bg-blue-50' : '',
      'focus:ring-blue-500',
    ],
    danger: [
      'bg-red-600',
      'hover:bg-red-700',
      isDisabled ? 'hover:!bg-red-600' : '',
      'text-white',
      'focus:ring-red-500',
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
