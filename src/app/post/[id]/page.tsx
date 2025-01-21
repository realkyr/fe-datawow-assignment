import MainLayout from '@/Layout/MainLayout';
import { getPostDetailService } from '@/services/post';
import PostDetail from '@/features/PostDetail';
import { getCommentsByPostIdService } from '@/services/comment';

const DetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const post = await getPostDetailService((await params).id);
  const comments = await getCommentsByPostIdService((await params).id, {
    page: 1,
    limit: 0,
    orderBy: 'desc',
    sortBy: 'createdAt',
  });

  post.commentsAmount = comments.pagination.total;

  return (
    <MainLayout>
      <PostDetail post={post} comments={comments.data} />
    </MainLayout>
  );
};

export default DetailPage;
