import React from 'react';
import Button, { ButtonProps } from '@/components/Button';

interface FooterBtnProps extends Omit<ButtonProps, 'children'> {}

interface FooterProps {
  cancelButtonProps: FooterBtnProps;
  confirmButtonProps: FooterBtnProps;
}

const AppCustomFooter = ({
  cancelButtonProps,
  confirmButtonProps,
}: FooterProps) => {
  return (
    <div className="flex flex-col  space-y-2 md:space-y-0 md:flex-row md:space-x-4 justify-end">
      <Button
        className="px-4 py-2 rounded-md justify-center"
        {...cancelButtonProps}
      >
        Cancel
      </Button>
      <Button
        className="px-4 py-2 rounded-md justify-center"
        {...confirmButtonProps}
      >
        Confirm
      </Button>
    </div>
  );
};

export default AppCustomFooter;
