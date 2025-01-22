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

const firstCapital = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
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
          <p className="text-xs text-gray-700">{firstCapital(community)}</p>
        </div>

        <h3 className="text-lg font-semibold mt-2">{topic}</h3>

        <p className="mb-2">{content}</p>

        <CommentAmount amount={commentsAmount} />
      </Link>
    </div>
  );
};

export default Post;
