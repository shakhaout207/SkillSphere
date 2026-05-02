"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Globe, ImageIcon, Lock, Mail, User } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function RegisterPage() {
  const router = useRouter();
  const { register, googleLogin } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: "",
    password: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const success = register(formData);

    if (success) {
      router.push("/login");
    }
  };

  const handleGoogleLogin = () => {
    googleLogin();
    router.push("/");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 grid place-items-center px-5 py-12">
      <div className="w-full max-w-lg bg-white rounded-3xl p-8 shadow-2xl border border-slate-100">
        <h1 className="text-4xl font-black text-center">Create Account</h1>

        <p className="text-center text-slate-500 mt-2">
          Register and start learning with SkillSphere.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 mt-8">
          <label className="input input-bordered flex items-center gap-2 rounded-2xl">
            <User size={18} />
            <input
              type="text"
              required
              placeholder="Name"
              className="grow"
              value={formData.name}
              onChange={(event) =>
                setFormData({ ...formData, name: event.target.value })
              }
            />
          </label>

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

          <label className="input input-bordered flex items-center gap-3 rounded-2xl">
            <ImageIcon size={18} />
            <input
              type="url"
              placeholder="Photo URL"
              className="grow"
              value={formData.image}
              onChange={(event) =>
                setFormData({ ...formData, image: event.target.value })
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
            Register
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
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-bold">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}