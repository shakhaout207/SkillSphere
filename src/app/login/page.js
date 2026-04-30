"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Globe, Lock, Mail } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login, googleLogin } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const getRedirectPath = () => {
    if (typeof window === "undefined") return "/";
    return new URLSearchParams(window.location.search).get("redirect") || "/";
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const success = login(formData);

    if (success) {
      router.push(getRedirectPath());
    }
  };

  const handleGoogleLogin = () => {
    googleLogin();
    router.push(getRedirectPath());
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 grid place-items-center px-5 py-12">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl border border-slate-100">
        <h1 className="text-4xl font-black text-center">Welcome Back</h1>

        <p className="text-center text-slate-500 mt-2">
          Login to continue your learning journey.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 mt-8">
          <label className="input input-bordered flex items-center gap-2 rounded-2xl">
            <Mail size={18} />
            <input
              type="email"
              required
              placeholder="Email"
              className="grow"
              value={formData.email}
              onChange={(event) =>
                setFormData({ ...formData, email: event.target.value })
              }
            />
          </label>

          <label className="input input-bordered flex items-center gap-2 rounded-2xl">
            <Lock size={18} />
            <input
              type="password"
              required
              placeholder="Password"
              className="grow"
              value={formData.password}
              onChange={(event) =>
                setFormData({ ...formData, password: event.target.value })
              }
            />
          </label>

          <button className="btn btn-primary w-full rounded-full">
            Login
          </button>
        </form>

        <div className="divider">OR</div>

        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full rounded-full"
        >
          <Globe size={18} /> Continue with Google
        </button>

        <p className="text-center mt-6 text-slate-600">
          New here?{" "}
          <Link href="/register" className="text-primary font-bold">
            Register now
          </Link>
        </p>
      </div>
    </main>
  );
}