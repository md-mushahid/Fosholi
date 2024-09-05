"use client"
import { useState, useEffect } from 'react';

function useGlobalData() {
  const [loginUser, setLoginUser] = useState(null);

  useEffect(() => {
    const login_user_data = JSON.parse(localStorage.getItem('login_user_data'));
    if (login_user_data) {
      setLoginUser(login_user_data);
    }
  }, []);

  const updateGlobalData = (newData) => {
    setLoginUser(newData);
  };

  return {loginUser, setLoginUser, updateGlobalData};
}

export default useGlobalData;
