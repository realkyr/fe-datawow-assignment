'use client';
import React from 'react';
import Button from '@/components/Button';
import TextArea from '@/components/TextArea';
import { createCommentService } from '@/services/comment';
import Modal from '@/components/Modal';
import AppCustomFooter from '@/components/AppCustomFooter';
import useClientViewport from '@/hooks/useClientViewport';

interface CreateCommentProps {
  onAddComment: () => Promise<void>;
  postId: string;
}

const CreateComment = ({ onAddComment, postId }: CreateCommentProps) => {
  const [comment, setComment] = React.useState('');
  const [commentMode, setCommentMode] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    await createCommentService(postId, comment);
    await onAddComment();

    setComment('');
    setIsLoading(false);
    setCommentMode(false);
  };

  const [shouldShowModal, setShouldShowModal] = React.useState(false);
  const { clientWidth, clientHeight } = useClientViewport();

  React.useEffect(() => {
    if (clientWidth < 768) {
      setShouldShowModal(true);
    } else {
      setShouldShowModal(false);
    }
  }, [clientWidth]);

  const commentForm = (
    <>
      <TextArea
        name={'comment'}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
    </>
  );

  return (
    <>
      {commentMode && !shouldShowModal ? (
        <>
          {commentForm}
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setCommentMode(false)}>
              Cancel
            </Button>
            <Button loading={isLoading} onClick={() => handleSubmit()}>
              Save
            </Button>
          </div>{' '}
        </>
      ) : (
        <div className="ml-8">
          <Button variant="outline" onClick={() => setCommentMode(true)}>
            Add Comment
          </Button>
        </div>
      )}

      {shouldShowModal && (
        <Modal
          isOpen={commentMode}
          onCancel={() => setCommentMode(false)}
          title="Add Comment"
          customFooter={
            <AppCustomFooter
              cancelButtonProps={{
                variant: 'outline',
                onClick: () => setCommentMode(false),
              }}
              confirmButtonProps={{
                loading: isLoading,
                form: 'create-post',
                type: 'submit',
              }}
            />
          }
        >
          {commentForm}
        </Modal>
      )}
    </>
  );
};

export default CreateComment;
