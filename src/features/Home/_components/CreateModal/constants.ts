import { PostResponse } from '@/shared-types/post';
import { FormFieldConfig } from '@/types';

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
    options: [],
  },
  {
    type: 'TextField',
    name: 'topic',
    placeholder: 'Title',
  },
  {
    type: 'TextArea',
    name: 'content',
    placeholder: "What's on your mind ..",
  },
];
