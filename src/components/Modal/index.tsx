import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import usePortal from '@/hooks/usePortal';

import Overlay from './Overlay';
import CloseButton from './CloseButton';
import Button from '../Button';

type ModalProps = {
  isOpen: boolean;
  title?: string;
  customHeader?: React.ReactNode;
  customFooter?: React.ReactNode;
  onCancel?: () => void;
  onSave?: () => void | Promise<void>;
  showSaveButton?: boolean;
  showCancelButton?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title = '',
  customHeader = false,
  customFooter = false,
  onCancel = () => {},
  onSave = () => {},
  showSaveButton = true,
  showCancelButton = true,
  isLoading = false,
  children,
}) => {
  const portalTarget = usePortal();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !portalTarget) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <Overlay onCancel={onCancel} />

      {/* Modal Content */}
      <div
        className="relative z-10 mx-auto w-11/12 max-w-md rounded-lg bg-white p-4 shadow-lg"
        role="dialog"
        aria-modal="true"
      >
        <CloseButton onClick={onCancel} />

        {/* Header */}
        {!customHeader && title ? (
          <div className="mb-4 border-b pb-2">
            <h2 className="text-lg font-semibold">{title}</h2>
          </div>
        ) : (
          customHeader
        )}

        {/* Content */}
        <div className="mb-4">{children}</div>

        {/* Footer */}
        {!customFooter ? (
          <div className="mt-4 flex justify-end space-x-2 pt-2">
            {showCancelButton && (
              <Button
                className="rounded-md bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300"
                onClick={onCancel}
              >
                Cancel
              </Button>
            )}

            {showSaveButton && (
              <Button loading={isLoading} onClick={onSave}>
                Save
              </Button>
            )}
          </div>
        ) : (
          customFooter
        )}
      </div>
    </div>,
    portalTarget
  );
};

export default Modal;
