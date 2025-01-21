'use client';
import React from 'react';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import FormRenderer from '@/components/FormRenderer';
import {
  createPostDefaultValue,
  createPostField,
  CreatePostForm,
} from '@/features/Home/_components/CreateModal/constants';
import { useRouter } from 'next/navigation';
import useAuthentication from '@/hooks/useAuthentication';
import AppCustomFooter from '@/components/AppCustomFooter';
import { createPostService } from '@/services/post';

interface CreateModalProps {
  onCreate: () => void;
}

const CreateModal = ({ onCreate }: CreateModalProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isAuthenticated } = useAuthentication();
  const router = useRouter();

  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (values: CreatePostForm) => {
    setIsLoading(true);
    try {
      await createPostService(values);
      onCreate();
      setIsLoading(false);
      setIsOpen(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <>
      <Button
        onClick={() => {
          if (isAuthenticated()) {
            setIsOpen(true);
          } else {
            router.push('/signin');
          }
        }}
        className="h-10 px-4 w-full"
      >
        Create
      </Button>

      <Modal
        title="Create Post"
        isOpen={isOpen}
        onCancel={() => setIsOpen(false)}
        customFooter={
          <AppCustomFooter
            cancelButtonProps={{
              onClick: () => setIsOpen(false),
            }}
            confirmButtonProps={{
              loading: isLoading,
              form: 'create-post',
              type: 'submit',
            }}
          />
        }
      >
        <div tw="p-4">
          <FormRenderer
            id="create-post"
            initialValues={createPostDefaultValue}
            fields={createPostField}
            onSubmit={handleSubmit}
          />
        </div>
      </Modal>
    </>
  );
};

export default CreateModal;
