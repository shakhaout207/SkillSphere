"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useAuth } from "@/context/AuthContext";

export default function RegisterPage() {
  const { user, loading, registerUser, googleLogin } = useAuth();
  const router = useRouter();

  const [registerLoading, setRegisterLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  useEffect(() => {
    if (!loading && user) {
      router.push("/");
    }
  }, [user, loading, router]);

  const handleRegister = async (e) => {
    e.preventDefault();
    setRegisterLoading(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    try {
      await registerUser(name, email, password, photoURL);
      toast.success("Registration successful. Please login.");
      router.push("/login");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setRegisterLoading(false);
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
          Create Account
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Register and start learning with SkillSphere
        </p>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block font-semibold mb-2">
              Name <span className="text-red-500">*</span>
            </label>

            <input
              name="name"
              type="text"
              placeholder="Your full name"
              required
              className="w-full border rounded-xl px-4 py-3 outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Email <span className="text-red-500">*</span>
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
              Photo URL
            </label>

            <input
              name="photoURL"
              type="url"
              placeholder="https://example.com/photo.jpg"
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
              placeholder="Enter password"
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
            disabled={registerLoading}
            className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition disabled:opacity-50"
          >
            {registerLoading ? "Creating Account..." : "Register"}
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
          Already have an account?{" "}
          <Link href="/login" className="text-orange-500 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}