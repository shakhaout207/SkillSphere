"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const { user, loading, loginUser, googleLogin } = useAuth();
  const router = useRouter();

  const [loginLoading, setLoginLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  useEffect(() => {
    if (!loading && user) {
      router.push("/");
    }
  }, [user, loading, router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginLoading(true);

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await loginUser(email, password);
      toast.success("Login successful");
      router.push("/");
    } catch (error) {
      toast.error("Invalid email or password");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    if (googleLoading) return;

    setGoogleLoading(true);

    try {
      await googleLogin();
    } catch (error) {
      toast.error(error.message);
      setGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-center mb-3 text-orange-500">
          Sign In
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Access your account and continue learning
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block font-semibold mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>

            <input
              name="email"
              type="email"
              placeholder="john@example.com"
              required
              className="w-full border rounded-xl px-4 py-3 outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Password <span className="text-red-500">*</span>
            </label>

            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              required
              minLength={6}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:border-orange-500"
            />

            <p className="text-sm text-gray-400 mt-2">
              Minimum 6 characters
            </p>
          </div>

          <button
            type="submit"
            disabled={loginLoading}
            className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition disabled:opacity-50"
          >
            {loginLoading ? "Signing In..." : "✓ Sign In"}
          </button>
        </form>

        <div className="flex items-center gap-3 my-7">
          <div className="h-px bg-gray-200 flex-1"></div>
          <p className="text-gray-400 text-sm">Or continue with</p>
          <div className="h-px bg-gray-200 flex-1"></div>
        </div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={googleLoading}
          className="w-full border py-3 rounded-xl font-semibold text-orange-500 hover:bg-orange-50 transition disabled:opacity-50"
        >
          {googleLoading ? "Opening Google..." : "G  Continue with Google"}
        </button>

        <p className="text-center mt-7 text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-orange-500 font-semibold">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}