'use client';

import React, { useEffect } from 'react';
import useAuthentication from '@/hooks/useAuthentication';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';
import TextField from '@/components/TextField';

const SignInButton = () => {
  const router = useRouter();
  const { login, getUsername } = useAuthentication();

  const [username, setUsername] = React.useState('');

  const onLogin = () => {
    login(username);
    router.push('/');
  };

  useEffect(() => {
    if (getUsername()) {
      router.push('/');
    }
  }, []);

  return (
    <>
      <TextField
        name="username"
        placeholder="Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <Button
        onClick={onLogin}
        className="h-10 px-4 w-full flex justify-center"
      >
        Sign In
      </Button>
    </>
  );
};

export default SignInButton;
