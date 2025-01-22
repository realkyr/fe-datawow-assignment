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

  if (!username)
    return (
      <Button
        onClick={onClickSignIn}
        className="h-10 px-4 w-40 flex justify-center"
      >
        Sign In
      </Button>
    );

  return (
    <Avatar namePosition="left" nameClassName="text-white" name={username} />
  );
};

export default LoginProfile;
