import React from 'react';
import Avatar from '@/components/Avatar';
import MsgBubbleIcon from '@/components/Icons/MsgBubbleIcon';
import { PostProps } from '@/components/Post/types';

const CommentAmount = ({ amount }: { amount: number }) => {
  return (
    <div className="flex items-center gap-2">
      <MsgBubbleIcon />
      {amount} {amount === 1 ? 'comment' : 'comments'}
    </div>
  );
};

const Post = ({ avatarProps, commentsAmount, content, topic }: PostProps) => {
  return (
    <div className="flex flex-col gap-2 p-8">
      <Avatar {...avatarProps} />

      <h3 className="text-lg font-semibold">{topic}</h3>

      <p>{content}</p>

      <CommentAmount amount={commentsAmount} />
    </div>
  );
};

export default Post;
