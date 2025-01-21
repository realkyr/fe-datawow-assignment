import React from 'react';
import Avatar from '@/components/Avatar';
import { CommentProps } from '@/components/Comment/types';

const Comment = ({ avatarProps, content }: CommentProps) => {
  return (
    <div className="flex flex-col gap-2 p-8">
      <Avatar {...avatarProps} />

      <p className="pl-12">{content}</p>
    </div>
  );
};

export default Comment;
