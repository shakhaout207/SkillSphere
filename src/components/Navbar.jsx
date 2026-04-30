"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, LogOut, Menu, UserRound } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/my-profile", label: "My Profile" }
  ];

  return (
    <div className="navbar sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200 px-4 md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <Menu />
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <Link href="/" className="flex items-center gap-2 text-xl font-extrabold">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary text-white">
            <GraduationCap size={23} />
          </span>
          <span>SkillSphere</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={pathname === link.href ? "font-bold text-primary" : ""}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end gap-3">
        {user ? (
          <>
            <Link href="/my-profile" className="avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-2">
                <img src={user.image} alt={user.name} />
              </div>
            </Link>
            <button onClick={logout} className="btn btn-outline btn-primary rounded-full">
              <LogOut size={17} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="btn btn-ghost rounded-full">
              Login
            </Link>
            <Link href="/register" className="btn btn-primary rounded-full">
              <UserRound size={17} />
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
}