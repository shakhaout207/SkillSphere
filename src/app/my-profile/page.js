"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function MyProfilePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

  if (loading) {
    return <p className="text-center mt-20">Loading profile...</p>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen px-6 py-12 bg-gray-50">
      <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-orange-500">
          My Profile
        </h1>

        <div className="flex flex-col items-center gap-4">
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border"
            />
          ) : (
            <div className="w-28 h-28 rounded-full bg-orange-500 text-white flex items-center justify-center text-4xl font-bold">
              {user.displayName ? user.displayName[0].toUpperCase() : "U"}
            </div>
          )}

          <div className="text-center">
            <h2 className="text-2xl font-semibold">
              {user.displayName || "No Name Added"}
            </h2>
            <p className="text-gray-600 mt-1">{user.email}</p>
          </div>

          <div className="w-full mt-5 border rounded-xl p-4 bg-gray-50">
            <p className="mb-2">
              <span className="font-semibold">Name:</span>{" "}
              {user.displayName || "Not added"}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p className="break-all">
              <span className="font-semibold">Photo URL:</span>{" "}
              {user.photoURL || "Not added"}
            </p>
          </div>

          <Link
            href="/my-profile/update"
            className="bg-orange-500 text-white px-6 py-3 rounded-xl mt-4 font-semibold hover:bg-orange-600 transition"
          >
            Update Information
          </Link>
        </div>
      </div>
    </div>
  );
}