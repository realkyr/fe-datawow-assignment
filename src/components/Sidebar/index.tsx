'use client';

// components/Sidebar.tsx
import React from 'react';
import MenuItem from '../MenuItem';
import { useRouter, useSearchParams } from 'next/navigation';
import useAuthentication from '@/hooks/useAuthentication';

const Sidebar: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { username } = useAuthentication();

  const addUsernameToQuery = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('mode', 'my-block');

    router.push('/?' + params.toString());
  };

  return (
    <div className="!bg-gray-app-100 h-[calc(100vh-64px)] w-64 p-4">
      <MenuItem
        icon="🏠"
        label="Home"
        active={!searchParams.get('mode')}
        onClick={() => router.push('/')}
      />
      {username && (
        <MenuItem
          icon="✍️"
          label="Our Blog"
          active={searchParams.get('mode') === 'my-block'}
          onClick={addUsernameToQuery}
        />
      )}
    </div>
  );
};

export default Sidebar;
