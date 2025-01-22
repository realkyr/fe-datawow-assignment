import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import useAuthentication from '@/hooks/useAuthentication';

const useNavigation = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { username } = useAuthentication();

  const addUsernameToQuery = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('mode', 'my-block');

    router.push('/?' + params.toString());
  };

  return {
    mode: searchParams.get('mode'),
    addUsernameToQuery,
  };
};

export default useNavigation;
