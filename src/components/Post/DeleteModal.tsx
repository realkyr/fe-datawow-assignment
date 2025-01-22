import React from 'react';
import Modal from '@/components/Modal';
import Button from '@/components/Button';
import { deletePostService } from '@/services/post';

const DeleteModal = ({
  id,
  isOpen,
  setOpen,
  onDelete,
}: {
  id: string;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  onDelete: () => void;
}) => {
  const [isLoading, setLoading] = React.useState(false);
  const handleDelete = async () => {
    setLoading(true);
    await deletePostService(id);
    onDelete();
    setLoading(false);
    setOpen(false);
  };

  return (
    <Modal
      customFooter={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
          <Button
            onClick={() => setOpen(false)}
            variant="outline"
            className="border-[#DADADA] text-[#5B5B5B] px-4"
          >
            Cancel
          </Button>

          <Button loading={isLoading} onClick={handleDelete} variant="danger">
            Delete
          </Button>
        </div>
      }
      isOpen={isOpen}
      onCancel={() => setOpen(false)}
    >
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold">
          Please confirm if you wish to delete the post
        </h2>
        <p>
          Are you sure you want to delete the post? Once deleted, it cannot be
          recovered.
        </p>
      </div>
    </Modal>
  );
};

export default DeleteModal;
