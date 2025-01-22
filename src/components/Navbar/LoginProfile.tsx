'use client';

import React, { useEffect } from 'react';
import useAuthentication from '@/hooks/useAuthentication';
import Button from '@/components/Button';
import Avatar from '@/components/Avatar';
import { useRouter } from 'next/navigation';

const LoginProfile = () => {
  const { getUsername } = useAuthentication();
  const [username, setUsername] = React.useState('');
  const router = useRouter();
  const onClickSignIn = () => {
    router.push('/signin');
  };

  useEffect(() => {
    setUsername(getUsername() || '');
  }, []);

  return (
    <>
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
    </>
  );
};

export default LoginProfile;
