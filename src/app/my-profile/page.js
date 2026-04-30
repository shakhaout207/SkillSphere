"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Mail, Pencil, ShieldCheck, User } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function MyProfilePage() {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login?redirect=/my-profile");
    }
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <main className="min-h-screen grid place-items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-14">
      <section className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-primary to-indigo-800 text-white rounded-3xl p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src={user.image}
              alt={user.name}
              className="h-36 w-36 rounded-full object-cover ring-4 ring-white"
            />

            <div className="text-center md:text-left">
              <h1 className="text-4xl font-black">{user.name}</h1>
              <p className="mt-2 text-blue-100">{user.email}</p>
              <Link href="/my-profile/update" className="btn btn-warning rounded-full mt-6">
                <Pencil size={18} /> Update Information
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mt-8">
          <div className="bg-white p-6 rounded-3xl shadow border border-slate-100">
            <User className="text-primary" />
            <h3 className="font-bold mt-3">Name</h3>
            <p className="text-slate-500">{user.name}</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow border border-slate-100">
            <Mail className="text-primary" />
            <h3 className="font-bold mt-3">Email</h3>
            <p className="text-slate-500 break-all">{user.email}</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow border border-slate-100">
            <ShieldCheck className="text-primary" />
            <h3 className="font-bold mt-3">Status</h3>
            <p className="text-slate-500">Logged In Student</p>
          </div>
        </div>
      </section>
    </main>
  );
}