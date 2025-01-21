import MainLayout from '@/Layout/MainLayout';
import Home from '@/features/Home';

export default function Page() {
  return (
    <MainLayout>
      <Home posts={[]} />
    </MainLayout>
  );
}
