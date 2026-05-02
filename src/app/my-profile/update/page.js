"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ImageIcon, Save, User } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function UpdateProfilePage() {
  const router = useRouter();
  const { user, loading, updateProfile } = useAuth();
  const [formData, setFormData] = useState({ name: "", image: "" });

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login?redirect=/my-profile/update");
    }

    if (user) {
      setFormData({ name: user.name, image: user.image });
    }
  }, [loading, user, router]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProfile(formData);
    router.push("/my-profile");
  };

  if (loading || !user) {
    return (
      <main className="min-h-screen grid place-items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 grid place-items-center px-6 py-14">
      <div className="w-full max-w-lg bg-white rounded-3xl p-8 shadow-2xl border border-slate-100">
        <h1 className="text-4xl font-black text-center">Update Profile</h1>
        <p className="text-center text-slate-500 mt-2">
          Change your name and profile image URL.
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
            <ImageIcon size={18} />
            <input
              type="url"
              required
              placeholder="Image URL"
              className="grow"
              value={formData.image}
              onChange={(event) =>
                setFormData({ ...formData, image: event.target.value })
              }
            />
          </label>

          <button className="btn btn-primary w-full rounded-full">
            <Save size={18} />
            Update Information
          </button>
        </form>
      </div>
    </main>
  );
}