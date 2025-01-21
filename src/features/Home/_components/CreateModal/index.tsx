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

const CreateModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isAuthenticated } = useAuthentication();
  const router = useRouter();

  const handleSubmit = (values: CreatePostForm) => {
    console.log(values);
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
