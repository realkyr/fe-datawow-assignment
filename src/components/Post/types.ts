import { AvatarProps } from '@/components/Avatar';
import { PostType } from '@/shared-types/post';

export interface PostProps extends PostType {
  avatarProps: AvatarProps;
  onDelete: () => void;
}
