import React, { createContext, useContext, useState, useEffect } from 'react';
import { loginUser, registerUser } from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // You might want to verify token or fetch user details here
      setUser({ token });
    }
    setLoading(false);
  }, []);

  const login = async (mobile, password) => {
    try {
      const response = await loginUser({ mobile, password });
      localStorage.setItem('token', response.token);
      setUser({ token: response.token });
      return response;
    } catch (error) {
      throw error;
    }
  };

  const register = async (mobile, password) => {
    try {
      const response = await registerUser({ mobile, password });
      localStorage.setItem('token', response.token);
      setUser({ token: response.token });
      return response;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);