import React from 'react';
import Post from '@/components/Post';
import { PostType } from '@/shared-types/post';
import { postTypeToPropsConvert } from '@/utils/convertor';
import { CommentResponse } from '@/shared-types/comment';
import Comment from '@/components/Comment';
import dayjs from 'dayjs';

interface PostDetailProps {
  post: PostType;
  comments: CommentResponse[];
}

const PostDetail = ({ post, comments }: PostDetailProps) => {
  return (
    <div className="w-full h-full bg-white">
      <Post {...postTypeToPropsConvert(post)} />

      {comments.map((c) => (
        <Comment
          avatarProps={{
            name: c.author,
            lastActive: dayjs(c.updatedAt).toDate(),
          }}
          content={c.content}
          key={c.id}
        />
      ))}
    </div>
  );
};

export default PostDetail;
