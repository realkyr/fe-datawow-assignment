'use client';

// components/Sidebar.tsx
import React from 'react';
import MenuItem from '../MenuItem';
import { useRouter, useSearchParams } from 'next/navigation';
import useAuthentication from '@/hooks/useAuthentication';
import EditBlogIcon from '@/components/Icons/EditBlogIcon';
import HomeIcon from '@/components/Icons/HomeIcon';
import useNavigation from '@/hooks/useNavigation';

const Sidebar: React.FC = () => {
  const { username } = useAuthentication();
  const router = useRouter();
  const { mode, addUsernameToQuery } = useNavigation();

  return (
    <div className="!bg-gray-app-100 h-[calc(100vh-64px)] hidden md:block w-64 p-4">
      <MenuItem
        icon={<HomeIcon />}
        label="Home"
        active={mode === null}
        onClick={() => router.push('/')}
      />
      {username && (
        <MenuItem
          icon={<EditBlogIcon />}
          label="Our Blog"
          active={mode === 'my-block'}
          onClick={addUsernameToQuery}
        />
      )}
    </div>
  );
};

export default Sidebar;
