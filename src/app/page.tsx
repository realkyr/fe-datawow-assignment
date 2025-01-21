import MainLayout from '@/Layout/MainLayout';
import Home from '@/features/Home';
import { getPostsService } from '@/services/post';

export default async function Page() {
  const posts = await getPostsService({
    limit: 10,
    page: 1,
    sortBy: 'updatedAt',
    orderBy: 'desc',
  });

  return (
    <MainLayout>
      <Home posts={posts.data} />
    </MainLayout>
  );
}
