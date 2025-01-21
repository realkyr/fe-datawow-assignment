'use client';

import React from 'react';
import Post from '@/components/Post';
import { PostType } from '@/shared-types/post';
import { postTypeToPropsConvert } from '@/utils/convertor';
import { CommentResponse } from '@/shared-types/comment';
import Comment from '@/components/Comment';
import dayjs from 'dayjs';
import CreateComment from '@/features/Comment/_components/CreateComment';
import { getCommentsByPostIdService } from '@/services/comment';
import Spinner from '@/components/Spinner';
import useSWR from 'swr';

interface PostDetailProps {
  post: PostType;
  comments: CommentResponse[];
}

const PostDetail = ({ post, comments }: PostDetailProps) => {
  const { data, isLoading, mutate } = useSWR(
    ['getCommentService', post.id],
    () =>
      getCommentsByPostIdService(post.id, {
        page: 1,
        limit: 0,
        orderBy: 'desc',
        sortBy: 'createdAt',
      })
  );

  return (
    <div className="w-full h-full bg-white p-4">
      <Post
        {...postTypeToPropsConvert(post)}
        commentsAmount={data?.pagination?.total || post.commentsAmount || 0}
      />

      <CreateComment postId={post.id} onAddComment={mutate} />

      {(data?.data || comments).map((c) => (
        <Comment
          avatarProps={{
            name: c.author,
            lastActive: dayjs(c.updatedAt).toDate(),
          }}
          content={c.content}
          key={c.id}
        />
      ))}

      {isLoading && <Spinner />}
    </div>
  );
};

export default PostDetail;
