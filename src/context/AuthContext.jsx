"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { auth, googleProvider } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext(null);

const makeUser = (firebaseUser) => {
  if (!firebaseUser) return null;
  return {
    uid: firebaseUser.uid,
    displayName: firebaseUser.displayName || "",
    email: firebaseUser.email || "",
    photoURL: firebaseUser.photoURL || "",
  };
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          setUser(makeUser(result.user));
        }
      })
      .catch((error) => {
        console.log("Google Redirect Error:", error.message);
      });

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(makeUser(currentUser));
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const registerUser = async (name, email, password, photoURL) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(result.user, {
      displayName: name,
      photoURL: photoURL || "",
    });
    setUser({
      uid: result.user.uid,
      displayName: name,
      email: result.user.email,
      photoURL: photoURL || "",
    });
    return result.user;
  };

  const loginUser = async (email, password) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    setUser(makeUser(result.user));
    return result.user;
  };

  const googleLogin = async () => {
    await signInWithRedirect(auth, googleProvider);
  };

  const logoutUser = async () => {
    await signOut(auth);
    setUser(null);
  };

  const updateUserInfo = async (name, photoURL) => {
    if (!auth.currentUser) throw new Error("No logged in user found");
    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL || "",
    });
    setUser({
      uid: auth.currentUser.uid,
      displayName: name,
      email: auth.currentUser.email,
      photoURL: photoURL || "",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        registerUser,
        loginUser,
        googleLogin,
        logoutUser,
        updateUserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}