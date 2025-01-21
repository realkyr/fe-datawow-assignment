import request from '@/utils/axios';
import { BaseQuery } from '@/shared-types/query';
import { Pagination } from '@/shared-types/pagination';
import { CommentResponse } from '@/shared-types/comment';

export const getCommentsByPostIdRepo = async (
  postId: string,
  query: BaseQuery
) => {
  return request.get<{
    pagination: Pagination;
    data: CommentResponse[];
  }>(`/comment/${postId}`, {
    params: query,
  });
};

export const createCommentRepo = async (postId: string, content: string) => {
  return request.post<CommentResponse>('/comment', {
    postId,
    content,
  });
};
