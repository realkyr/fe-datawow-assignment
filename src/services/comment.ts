import { createCommentRepo, getCommentsByPostIdRepo } from '@/repositories';
import { BaseQuery } from '@/shared-types/query';
import { Pagination } from '@/shared-types/pagination';
import { CommentResponse } from '@/shared-types/comment';

export const createCommentService = async (postId: string, content: string) => {
  try {
    await createCommentRepo(postId, content);
  } catch (error) {
    throw error;
  }
};

export const getCommentsByPostIdService = async (
  postId: string,
  query: BaseQuery
): Promise<{
  pagination: Pagination;
  data: CommentResponse[];
}> => {
  try {
    const { data } = await getCommentsByPostIdRepo(postId, query);

    return data;
  } catch (error) {
    throw error;
  }
};
