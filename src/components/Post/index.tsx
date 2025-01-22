import React from 'react';
import Avatar from '@/components/Avatar';
import MsgBubbleIcon from '@/components/Icons/MsgBubbleIcon';
import { PostProps } from '@/components/Post/types';
import ActionButton from '@/components/Post/ActionButton';
import Link from 'next/link';

const CommentAmount = ({ amount }: { amount: number }) => {
  return (
    <div className="flex items-center gap-2">
      <MsgBubbleIcon />
      {amount} {amount === 1 ? 'comment' : 'comments'}
    </div>
  );
};

const Post = ({
  avatarProps,
  commentsAmount,
  content,
  topic,
  community,
  id,
  onDelete,
  onEdit,
}: PostProps) => {
  return (
    <div className="flex flex-col gap-2 p-8 relative">
      <Avatar {...avatarProps} />

      <ActionButton
        onClickEdit={onEdit}
        onDelete={onDelete}
        id={id}
        owner={avatarProps.name}
      />

      {/* gray pill */}

      <Link href={`post/${id}`}>
        <div className="bg-gray-200 rounded-full p-2 w-max">
          <p className="text-xs text-gray-700">{community}</p>
        </div>

        <h3 className="text-lg font-semibold">{topic}</h3>

        <p>{content}</p>

        <CommentAmount amount={commentsAmount} />
      </Link>
    </div>
  );
};

export default Post;
