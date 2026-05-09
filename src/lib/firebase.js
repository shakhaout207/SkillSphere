import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOvUZXOKSqEgbhKoerTXQjFcO3JDuzO30",
  authDomain: "skill-sphere-1a917.firebaseapp.com",
  projectId: "skill-sphere-1a917",
  storageBucket: "skill-sphere-1a917.firebasestorage.app",
  messagingSenderId: "728913984690",
  appId: "1:728913984690:web:403d21076c7471c8ff5dab",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();