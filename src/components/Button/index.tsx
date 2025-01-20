import React from 'react';

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
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  onClick,
  loading = false,
  disabled = false,
  className = '',
}) => {
  const isDisabled = disabled || loading;

  // Common base styles
  const baseStyles = [
    'inline-flex',
    'items-center',
    'justify-center',
    'rounded-md',
    'font-medium',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'transition-colors',
    'duration-200',
  ].join(' ');

  // Variant-specific styles
  const variantStyles = {
    primary: [
      'bg-blue-600',
      'hover:bg-blue-700',
      'text-white',
      'focus:ring-blue-500',
    ],
    outline: [
      'border',
      'border-blue-600',
      'text-blue-600',
      'hover:bg-blue-50',
      'focus:ring-blue-500',
    ],
    danger: [
      'bg-red-600',
      'hover:bg-red-700',
      'text-white',
      'focus:ring-red-500',
    ],
  }[variant].join(' ');

  // Disabled styles
  const disabledStyles = isDisabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className={`${baseStyles} ${variantStyles} ${disabledStyles} px-4 py-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
