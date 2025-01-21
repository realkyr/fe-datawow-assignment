'use client';
import React from 'react';
import Button from '@/components/Button';
import TextArea from '@/components/TextArea';
import { createCommentService } from '@/services/comment';

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

  const commentForm = (
    <>
      <TextArea
        name={'comment'}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <div className="flex justify-end">
        <Button onClick={() => setCommentMode(false)}>Cancel</Button>
        <Button loading={isLoading} onClick={() => handleSubmit()}>
          Save
        </Button>
      </div>
    </>
  );

  return (
    <>
      {commentMode ? (
        commentForm
      ) : (
        <Button variant="outline" onClick={() => setCommentMode(true)}>
          Add Comment
        </Button>
      )}
    </>
  );
};

export default CreateComment;
