"use client";

import { useMemo, useState } from "react";
import { BookOpen, Search, Sparkles, X } from "lucide-react";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    const allCategories = courses.map((course) => course.category);
    return ["All", ...new Set(allCategories)];
  }, []);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = course.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || course.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <>
      {/* Top Banner */}
      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 text-white pb-24 pt-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100">
              <Sparkles size={16} />
              Explore SkillSphere Courses
            </p>

            <h1 className="mt-5 text-4xl md:text-6xl font-black leading-tight">
              Find the Perfect Course
              <span className="block text-cyan-300">for Your Next Skill</span>
            </h1>

            <p className="mt-5 text-base md:text-lg text-slate-200 max-w-2xl">
              Browse all available courses, search by title, filter by category,
              and choose the right learning path for your growth.
            </p>
          </div>
        </div>
      </section>

      {/* Search Card */}
      <section className="max-w-7xl mx-auto px-5 -mt-12 relative z-10">
        <div className="rounded-[2rem] bg-white shadow-2xl border border-slate-100 p-5 md:p-7">
          <div className="grid gap-5 lg:grid-cols-[1.4fr_.9fr] items-end">
            {/* Search */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-3">
                Search by course title
              </label>

              <div className="relative">
                <Search
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  placeholder="Search courses like Web Development, Design, Marketing..."
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-12 outline-none focus:border-primary focus:bg-white"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
            </div>

            {/* Result Summary */}
            <div className="rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100 p-5">
              <p className="text-sm text-slate-500">Showing Results</p>
              <h3 className="text-3xl font-black text-slate-900 mt-1">
                {filteredCourses.length}
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                course{filteredCourses.length !== 1 ? "s" : ""} found
              </p>
            </div>
          </div>

          {/* Category Filters */}
          <div className="mt-6">
            <p className="text-sm font-bold text-slate-700 mb-3">
              Filter by category
            </p>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const isActive = selectedCategory === category;

                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                      isActive
                        ? "bg-primary text-white shadow-lg"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Small Info Cards */}
      <section className="max-w-7xl mx-auto px-5 pt-10">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-white border border-slate-100 p-6 shadow-lg">
            <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary grid place-items-center">
              <BookOpen size={22} />
            </div>
            <h3 className="text-xl font-bold mt-4">All Courses</h3>
            <p className="text-slate-600 mt-2">
              Explore all available courses in one place.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-slate-100 p-6 shadow-lg">
            <div className="h-12 w-12 rounded-2xl bg-cyan-100 text-cyan-700 grid place-items-center">
              <Search size={22} />
            </div>
            <h3 className="text-xl font-bold mt-4">Quick Search</h3>
            <p className="text-slate-600 mt-2">
              Instantly search courses by title and find what you need.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-slate-100 p-6 shadow-lg">
            <div className="h-12 w-12 rounded-2xl bg-amber-100 text-amber-700 grid place-items-center">
              <Sparkles size={22} />
            </div>
            <h3 className="text-xl font-bold mt-4">Smart Filter</h3>
            <p className="text-slate-600 mt-2">
              Filter courses by category for a better browsing experience.
            </p>
          </div>
        </div>
      </section>

      {/* Course List */}
      <section className="max-w-7xl mx-auto px-5 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <p className="text-primary font-bold">📚 Course Collection</p>
            <h2 className="text-4xl font-black text-slate-950 mt-1">
              Browse All Courses
            </h2>
            <p className="text-slate-500 mt-2">
              Click on any course to view full details.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="badge badge-primary badge-lg px-4 py-4">
              Total: {courses.length}
            </span>
            <span className="badge badge-outline badge-lg px-4 py-4">
              Category: {selectedCategory}
            </span>
          </div>
        </div>

        {filteredCourses.length === 0 ? (
          <div className="rounded-[2rem] bg-white border border-slate-100 shadow-xl p-12 text-center">
            <div className="text-6xl mb-4">😕</div>
            <h3 className="text-3xl font-black text-slate-900">
              No Course Found
            </h3>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              No course matches your current search or selected category. Try a
              different title or choose another category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
              className="btn btn-primary rounded-full mt-6"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}