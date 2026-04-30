"use client";

import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext(null);

const USERS_KEY = "skillsphere_users";
const CURRENT_USER_KEY = "skillsphere_current_user";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem(CURRENT_USER_KEY);

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    setLoading(false);
  }, []);

  const register = ({ name, email, password, image }) => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    const userExists = users.some((item) => item.email === email);

    if (userExists) {
      toast.error("This email is already registered.");
      return false;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      image: image || "https://i.pravatar.cc/150?img=12"
    };

    localStorage.setItem(USERS_KEY, JSON.stringify([...users, newUser]));
    toast.success("Registration successful. Please login.");
    return true;
  };

  const login = ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    const foundUser = users.find(
      (item) => item.email === email && item.password === password
    );

    if (!foundUser) {
      toast.error("Invalid email or password.");
      return false;
    }

    const safeUser = {
      id: foundUser.id,
      name: foundUser.name,
      email: foundUser.email,
      image: foundUser.image
    };

    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(safeUser));
    setUser(safeUser);
    toast.success("Login successful.");
    return true;
  };

  const googleLogin = () => {
    const googleUser = {
      id: 999,
      name: "Google Learner",
      email: "google.user@skillsphere.com",
      image: "https://i.pravatar.cc/150?img=32"
    };

    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(googleUser));
    setUser(googleUser);
    toast.success("Google login successful.");
  };

  const logout = () => {
    localStorage.removeItem(CURRENT_USER_KEY);
    setUser(null);
    toast.success("Logged out successfully.");
  };

  const updateProfile = ({ name, image }) => {
    const updatedUser = {
      ...user,
      name: name || user.name,
      image: image || user.image
    };

    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(updatedUser));
    setUser(updatedUser);
    toast.success("Profile updated successfully.");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        register,
        login,
        googleLogin,
        logout,
        updateProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}