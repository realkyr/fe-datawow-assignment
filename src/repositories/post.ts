import { PostQuery, PostResponse } from '@/shared-types/post';
import request from '@/utils/axios';
import { Pagination } from '@/shared-types/pagination';

const MODULE_NAME = 'post';

export const getPostsRepository = (query: Partial<PostQuery>) => {
  return request.get<{
    data: PostResponse[];
    pagination: Pagination;
  }>(`${MODULE_NAME}`, {
    params: query,
  });
};
