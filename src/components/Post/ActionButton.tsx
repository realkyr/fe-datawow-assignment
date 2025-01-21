'use client';
import React from 'react';
import Button from '@/components/Button';
import EditIcon from '@/components/Icons/EditIcon';
import DeleteIcon from '@/components/Icons/DeleteIcon';
import useAuthentication from '@/hooks/useAuthentication';
import DeleteModal from '@/components/Post/DeleteModal';

interface ActionButtonProps {
  owner: string;
  onClickEdit?: () => void;
  id: string;
  onDelete: () => void;
}

const ActionButton = ({
  id: postId,
  owner,
  onClickEdit,
  onDelete,
}: ActionButtonProps) => {
  const { username } = useAuthentication();

  const [modalDeleteOpen, setModalDeleteOpen] = React.useState(false);

  if (!username || owner !== username) return null;
  // icon button transparent
  return (
    <div className="flex gap-1 absolute top-2 right-2">
      <Button onClick={onClickEdit} variant="icon">
        <EditIcon />
      </Button>

      <Button onClick={() => setModalDeleteOpen(true)} variant="icon">
        <DeleteIcon />
      </Button>

      <DeleteModal
        id={postId}
        isOpen={modalDeleteOpen}
        setOpen={setModalDeleteOpen}
        onDelete={onDelete}
      />
    </div>
  );
};

export default ActionButton;
