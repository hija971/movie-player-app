import React, { useEffect, useState } from "react";
import AuthService from "../../services/authService.js";
import AuthContext from "./AuthContext.js";

const authService = new AuthService();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: {},
  });

  const handleLogin = async () => {
    try {
      const response = await authService.getMe();
      setAuth({
        isAuthenticated: true,
        user: response.data
      })
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    setAuth({
      isAuthenticated: false,
      user: {},
    });
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      handleLogin();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
