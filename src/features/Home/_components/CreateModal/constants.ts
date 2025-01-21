import { PostResponse } from '@/shared-types/post';
import { FormFieldConfig } from '@/types';
import { communityDropdown } from '@/utils/constants';

export interface CreatePostForm
  extends Omit<
    PostResponse,
    'id' | 'createdAt' | 'updatedAt' | 'createdBy' | 'commentsAmount'
  > {}

export const createPostDefaultValue: CreatePostForm = {
  topic: '',
  content: '',
  community: '',
};

export const createPostField: FormFieldConfig[] = [
  {
    type: 'Dropdown',
    name: 'community',
    placeholder: 'Community',
    options: communityDropdown,
    validate: (value) => {
      if (!value) {
        return 'กรุณาเลือก Community';
      }
    },
  },
  {
    type: 'TextField',
    name: 'topic',
    placeholder: 'Title',
    validate: (value) => {
      if (!value) {
        return 'กรุณากรอก Title';
      }
    },
  },
  {
    type: 'TextArea',
    name: 'content',
    placeholder: "What's on your mind ..",
    validate: (value) => {
      if (!value) {
        return 'กรุณากรอก Content';
      }
    },
  },
];
