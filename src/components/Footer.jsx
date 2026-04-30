import Link from "next/link";
import { Globe, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 mt-20">
      <div className="max-w-7xl mx-auto px-5 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <h2 className="text-2xl font-extrabold text-white">SkillSphere</h2>
          <p className="mt-3 text-slate-400">
            A modern online learning platform for skill-based courses.
          </p>
        </div>

        <div>
          <h3 className="footer-title text-white">Contact Info</h3>

          <p className="flex items-center gap-2 text-slate-400">
            <Mail size={16} /> support@skillsphere.com
          </p>

          <p className="flex items-center gap-2 text-slate-400 mt-2">
            <Phone size={16} /> +880 1234 567890
          </p>

          <p className="flex items-center gap-2 text-slate-400 mt-2">
            <MapPin size={16} /> Dhaka, Bangladesh
          </p>
        </div>

        <div>
          <h3 className="footer-title text-white">Important Links</h3>

          <Link href="/courses" className="block text-slate-400 hover:text-white">
            Courses
          </Link>

          <Link href="/login" className="block text-slate-400 hover:text-white mt-2">
            Login
          </Link>

          <Link href="/register" className="block text-slate-400 hover:text-white mt-2">
            Register
          </Link>
        </div>

        <div>
          <h3 className="footer-title text-white">Social Links</h3>

          <div className="flex gap-3">
            <a className="btn btn-circle btn-sm" href="#">
              <Globe size={16} />
            </a>

            <a className="btn btn-circle btn-sm font-bold" href="#">
              in
            </a>

            <a className="btn btn-circle btn-sm font-bold" href="#">
              GH
            </a>
          </div>

          <div className="mt-5 text-sm">
            <a href="#" className="block text-slate-400 hover:text-white">
              Terms & Conditions
            </a>

            <a href="#" className="block text-slate-400 hover:text-white mt-2">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4 text-center text-sm text-slate-500">
        © 2026 SkillSphere. All rights reserved.
      </div>
    </footer>
  );
}