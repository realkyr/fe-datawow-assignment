import React, { useEffect } from 'react';

const useAuthentication = () => {
  const [username, setUsername] = React.useState<string | null>(null);

  const login = (username: string) => {
    localStorage.setItem('username', username);
  };

  const logout = () => {
    localStorage.removeItem('username');
  };

  const isAuthenticated = () => {
    return !!localStorage.getItem('username');
  };

  const getUsername = () => {
    return localStorage.getItem('username');
  };

  useEffect(() => {
    setUsername(getUsername());
  }, []);

  return { login, logout, isAuthenticated, getUsername, username };
};

export default useAuthentication;
