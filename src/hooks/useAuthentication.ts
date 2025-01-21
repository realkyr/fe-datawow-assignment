import React from 'react';

const useAuthentication = () => {
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

  return { login, logout, isAuthenticated, getUsername };
};

export default useAuthentication;
