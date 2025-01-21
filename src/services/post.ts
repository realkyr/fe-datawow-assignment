import { PostQuery, PostResponse, PostType } from '@/shared-types/post';
import { getPostsRepository } from '@/repositories';
import { Pagination } from '@/shared-types/pagination';

const postResponseToPostType = (response: PostResponse): PostType => {
  return {
    ...response,
    createdAt: new Date(response.createdAt),
    updatedAt: new Date(response.updatedAt),
  };
};

export const getPostsService = async (
  query: PostQuery
): Promise<{
  data: PostType[];
  pagination: Pagination;
}> => {
  try {
    const response = await getPostsRepository(query);
    const data = response.data;

    return {
      data: data.data.map(postResponseToPostType),
      pagination: data.pagination,
    };
  } catch (error) {
    console.log({ error });
    return {
      data: [],
      pagination: {
        total: 0,
        page: 1,
        limit: 10,
        totalPages: 1,
      },
    };
  }
};
