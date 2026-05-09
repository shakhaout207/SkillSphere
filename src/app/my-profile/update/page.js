"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useAuth } from "@/context/AuthContext";

export default function UpdateProfilePage() {
  const { user, loading, updateUserInfo } = useAuth();
  const router = useRouter();

  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }

    if (user) {
      setName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [loading, user, router]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await updateUserInfo(name, photoURL);
      toast.success("Profile updated successfully");
      router.push("/my-profile");
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (loading) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-orange-500">
          Update Information
        </h1>

        <form onSubmit={handleUpdate} className="space-y-5">
          <div>
            <label className="block font-semibold mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border rounded-xl px-4 py-3 outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Image URL
            </label>
            <input
              type="url"
              placeholder="https://example.com/photo.jpg"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:border-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
          >
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
}