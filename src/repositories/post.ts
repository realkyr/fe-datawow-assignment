import { PostQuery, PostResponse } from '@/shared-types/post';
import request from '@/utils/axios';
import { Pagination } from '@/shared-types/pagination';
import { CreatePostForm } from '@/features/Home/_components/CreateModal/constants';

const MODULE_NAME = 'post';

export const getPostsRepository = (query: Partial<PostQuery>) => {
  return request.get<{
    data: PostResponse[];
    pagination: Pagination;
  }>(`${MODULE_NAME}`, {
    params: query,
  });
};

export const createPostRepository = (data: CreatePostForm) => {
  return request.post<PostResponse>(`${MODULE_NAME}`, data);
};
