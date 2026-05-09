"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user, loading, logoutUser } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logoutUser();
    router.push("/login");
  };

  return (
    <nav className="bg-white shadow px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold text-orange-500">
        SkillSphere
      </Link>

      <div className="flex items-center gap-5">
        <Link href="/" className="font-medium hover:text-orange-500">
          Home
        </Link>
        <Link href="/courses" className="font-medium hover:text-orange-500">
          Courses
        </Link>

        {loading ? (
          <span className="text-sm text-gray-400">Loading...</span>
        ) : user ? (
          <>
            <Link
              href="/my-profile"
              className="font-medium hover:text-orange-500"
            >
              My Profile
            </Link>

            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="User"
                className="w-9 h-9 rounded-full object-cover border"
              />
            ) : (
              <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                {user.displayName ? user.displayName[0].toUpperCase() : "U"}
              </div>
            )}

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="font-medium hover:text-orange-500">
              Login
            </Link>
            <Link
              href="/register"
              className="bg-orange-500 text-white px-4 py-2 rounded-lg"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}