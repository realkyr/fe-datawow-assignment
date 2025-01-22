'use client';
import React, { useEffect } from 'react';
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
import { createPostService, updatePostService } from '@/services/post';

interface CreateModalProps {
  onCreate: () => Promise<void>;
  defaultValue: CreatePostForm;
  setDefaultValue: (value: CreatePostForm) => void;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const CreateModal = ({
  onCreate,
  defaultValue,
  setDefaultValue,
  isOpen,
  setIsOpen,
}: CreateModalProps) => {
  const { isAuthenticated } = useAuthentication();
  const router = useRouter();

  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (values: CreatePostForm) => {
    setIsLoading(true);
    try {
      if (defaultValue?.id) {
        await updatePostService(defaultValue.id, values);
      } else await createPostService(values);
      await onCreate();
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
            setDefaultValue(createPostDefaultValue);
            setIsOpen(true);
          } else {
            router.push('/signin');
          }
        }}
        className="h-9 px-4 w-full flex justify-center"
      >
        Create +
      </Button>

      <Modal
        title="Create Post"
        isOpen={isOpen}
        onCancel={() => setIsOpen(false)}
        customFooter={
          <AppCustomFooter
            cancelButtonProps={{
              variant: 'outline',
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
            initialValues={defaultValue || { ...createPostDefaultValue }}
            fields={createPostField}
            onSubmit={handleSubmit}
          />
        </div>
      </Modal>
    </>
  );
};

export default CreateModal;
