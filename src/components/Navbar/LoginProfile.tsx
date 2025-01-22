'use client';

import React, { useEffect } from 'react';
import useAuthentication from '@/hooks/useAuthentication';
import Button from '@/components/Button';
import Avatar from '@/components/Avatar';
import { useRouter } from 'next/navigation';
import MenuIcon from '@/components/Icons/MenuIcon';
import Drawer from '@/components/Drawer';
import useNavigation from '@/hooks/useNavigation';
import EditBlogIcon from '@/components/Icons/EditBlogIcon';
import HomeIcon from '@/components/Icons/HomeIcon';

const LoginProfile = () => {
  const { getUsername } = useAuthentication();
  const [username, setUsername] = React.useState('');
  const router = useRouter();
  const onClickSignIn = () => {
    router.push('/signin');
  };

  const [openDrawer, setOpenDrawer] = React.useState(false);

  useEffect(() => {
    setUsername(getUsername() || '');
  }, []);

  const { mode, addUsernameToQuery } = useNavigation();

  const menuItems = [
    {
      icon: <HomeIcon />,
      label: 'Home',
      active: mode === null,
      onClick: () => router.push('/'),
      color: 'white',
      visible: true,
    },
    {
      icon: <EditBlogIcon />,
      label: 'Our Blog',
      active: mode === 'my-block',
      onClick: addUsernameToQuery,
      visible: !!username,
      color: 'white',
    },
  ];

  return (
    <>
      <Drawer isOpen={openDrawer} setIsOpen={setOpenDrawer} menus={menuItems} />

      <div className="hidden md:inline-block">
        {username && (
          <Avatar
            namePosition="left"
            nameClassName="text-white"
            name={username}
          />
        )}
        {!username && (
          <Button
            onClick={onClickSignIn}
            className="h-10 px-4 w-40 flex justify-center"
          >
            Sign In
          </Button>
        )}
      </div>

      <div className="md:hidden">
        <Button onClick={() => setOpenDrawer(true)} variant="icon">
          <MenuIcon />
        </Button>
      </div>
    </>
  );
};

export default LoginProfile;
