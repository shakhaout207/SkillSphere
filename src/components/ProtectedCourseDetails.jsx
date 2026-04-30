"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BookOpen, CheckCircle2, Clock, Star, Users } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function ProtectedCourseDetails({ course }) {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.replace(`/login?redirect=/courses/${course.id}`);
    }
  }, [loading, user, router, course.id]);

  if (loading || !user) {
    return (
      <main className="min-h-screen grid place-items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-indigo-950 via-blue-900 to-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-5 py-16 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <span className="badge badge-warning mb-4">{course.category}</span>
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              {course.title}
            </h1>
            <p className="mt-5 text-lg text-blue-100">{course.description}</p>

            <div className="mt-6 flex flex-wrap gap-4">
              <span className="flex items-center gap-2">
                <Star fill="currentColor" /> {course.rating} Rating
              </span>
              <span className="flex items-center gap-2">
                <Clock /> {course.duration}
              </span>
              <span className="flex items-center gap-2">
                <Users /> {course.level}
              </span>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-4 shadow-2xl">
            <img
              src={course.image}
              alt={course.title}
              className="rounded-2xl h-80 w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-14 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
          <h2 className="text-3xl font-extrabold mb-4 flex items-center gap-2">
            <BookOpen className="text-primary" /> Course Curriculum
          </h2>

          <div className="space-y-4">
            {course.curriculum.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-100 p-4"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-primary font-bold">
                  {index + 1}
                </span>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 h-fit">
          <h3 className="text-2xl font-bold">Course Summary</h3>
          <div className="divider"></div>

          <p className="flex justify-between">
            <span>Instructor</span>
            <b>{course.instructor}</b>
          </p>
          <p className="flex justify-between mt-3">
            <span>Duration</span>
            <b>{course.duration}</b>
          </p>
          <p className="flex justify-between mt-3">
            <span>Level</span>
            <b>{course.level}</b>
          </p>
          <p className="flex justify-between mt-3">
            <span>Price</span>
            <b className="text-primary">{course.price}</b>
          </p>

          <button className="btn btn-primary w-full rounded-full mt-7">
            <CheckCircle2 size={18} />
            Enroll Now
          </button>

          <Link href="/courses" className="btn btn-outline w-full rounded-full mt-3">
            Back to Courses
          </Link>
        </aside>
      </section>
    </main>
  );
}