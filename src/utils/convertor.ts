import { PostResponse, PostType } from '@/shared-types/post';
import { PostProps } from '@/components/Post/types';
import { AvatarProps } from '@/components/Avatar';
import dayjs from 'dayjs';

export const postResponseToPropsConvert = (
  postType: PostResponse
): PostProps => {
  const avatarProps: AvatarProps = {
    name: postType.createdBy,
    lastActive: postType.updatedAt,
  };

  return {
    avatarProps,
    id: postType.id,
    commentsAmount: postType.commentsAmount,
    content: postType.content,
    createdBy: postType.createdBy,
    createdAt: dayjs(postType.createdAt).toDate(),
    updatedAt: dayjs(postType.updatedAt).toDate(),
    topic: postType.topic,
    community: postType.community,
  };
};

export const postTypeToPropsConvert = (postType: PostType): PostProps => {
  const avatarProps: AvatarProps = {
    name: postType.createdBy,
    lastActive: postType.updatedAt,
  };

  return {
    avatarProps,
    id: postType.id,
    commentsAmount: postType.commentsAmount,
    content: postType.content,
    createdBy: postType.createdBy,
    createdAt: postType.createdAt,
    updatedAt: postType.updatedAt,
    topic: postType.topic,
    community: postType.community,
  };
};
