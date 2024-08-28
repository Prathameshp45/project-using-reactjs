
import { useState } from 'react';

const useAuth = () => {
  const [user] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const register = (payload) => {
    localStorage.setItem('user', JSON.stringify(payload));
  };

  const login = (payload) => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser && savedUser.email === payload.email && savedUser.password === payload.password) {
      console.log('Login successful');
      return true;
    } else {
      console.log('Invalid email or password');
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
  };

  return { user, register, login, logout };
};

export default useAuth;
