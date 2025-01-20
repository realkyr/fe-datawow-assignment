import React from 'react';
import CrossIcon from '@/components/Icons/CrossIcon';

type CloseButtonProps = {
  onClick: () => void;
  className?: string;
};

const CloseButton: React.FC<CloseButtonProps> = ({
  onClick,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`absolute top-2 right-2 rounded-full bg-transparent p-1 hover:bg-gray-300 ${className}`}
      aria-label="Close"
    >
      <CrossIcon />
    </button>
  );
};

export default CloseButton;
