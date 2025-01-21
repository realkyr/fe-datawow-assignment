import MainLayout from '@/Layout/MainLayout';
import Home from '@/features/Home';

export default async function Page() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}
