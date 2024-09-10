// src/hooks/useGlobalState.js

import { useEffect, useState } from 'react';
import { getLoginUser, setLoginUser } from './globalState';

const useGlobalState = () => {
  const [loginUser, setLoginUserState] = useState(() => {
    const storedUser = sessionStorage.getItem('login_user_data');
    return storedUser ? JSON.parse(storedUser) : getLoginUser();
  });

  useEffect(() => {
    // Update global state from sessionStorage on mount
    const storedUser = sessionStorage.getItem('login_user_data');
    if (storedUser) {
      setLoginUserState(JSON.parse(storedUser));
    }

    const handleStorageChange = () => {
      const updatedUser = sessionStorage.getItem('login_user_data');
      setLoginUserState(updatedUser ? JSON.parse(updatedUser) : null);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const setLoginUserAndUpdateState = (user) => {
    setLoginUser(user);
    sessionStorage.setItem('login_user_data', JSON.stringify(user));
    setLoginUserState(user);
  };

  return {
    loginUser,
    setLoginUser: setLoginUserAndUpdateState,
  };
};

export default useGlobalState;
