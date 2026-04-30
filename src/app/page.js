import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import { courses, getPopularCourses } from "@/data/courses";

export default function HomePage() {
  const popularCourses = getPopularCourses();
  const trendingCourses = courses.slice(3, 6);

  const instructors = [
    {
      name: "John Doe",
      skill: "Web Development",
      image: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "Sarah Wilson",
      skill: "UI/UX Design",
      image: "https://i.pravatar.cc/150?img=47"
    },
    {
      name: "Daniel Lee",
      skill: "Power BI & Data",
      image: "https://i.pravatar.cc/150?img=15"
    },
    {
      name: "Nora Ahmed",
      skill: "Next.js",
      image: "https://i.pravatar.cc/150?img=5"
    }
  ];

  return (
    <>
      {/* HERO / BANNER SECTION */}
      <section className="bg-gradient-to-br from-indigo-950 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-5 py-20 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="inline-block bg-white/10 px-5 py-2 rounded-full font-bold mb-5">
              🚀 Learn from Industry Experts
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Upgrade Your Skills Today
            </h1>

            <p className="mt-6 text-lg text-blue-100 max-w-xl">
              SkillSphere is a modern online learning platform where users can
              explore courses, watch lessons, and enroll in skill-based programs
              like Web Development, Design, Marketing, and Data Analytics.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/courses" className="btn btn-warning btn-lg rounded-full">
                Explore Courses
              </Link>

              <Link href="/register" className="btn btn-outline btn-lg rounded-full text-white border-white hover:bg-white hover:text-indigo-900">
                Start Learning
              </Link>
            </div>
          </div>

          <div className="bg-white/10 rounded-[2rem] p-4 shadow-2xl border border-white/20">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
              alt="Online learning platform"
              className="rounded-[1.5rem] h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* QUICK INFO SECTION */}
      <section className="max-w-7xl mx-auto px-5 py-14 grid gap-6 md:grid-cols-3">
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
          <div className="text-4xl">📚</div>
          <h3 className="text-2xl font-bold mt-4">Skill-Based Courses</h3>
          <p className="text-slate-600 mt-2">
            Learn practical topics like development, design, marketing, and data.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
          <div className="text-4xl">👨‍🏫</div>
          <h3 className="text-2xl font-bold mt-4">Expert Instructors</h3>
          <p className="text-slate-600 mt-2">
            Courses are designed by experienced instructors and professionals.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
          <div className="text-4xl">🎯</div>
          <h3 className="text-2xl font-bold mt-4">Career Growth</h3>
          <p className="text-slate-600 mt-2">
            Improve your knowledge and build confidence for real-world work.
          </p>
        </div>
      </section>

      {/* POPULAR COURSES */}
      <section className="max-w-7xl mx-auto px-5 py-12">
        <div className="text-center mb-10">
          <p className="text-primary font-bold">🔥 Popular Courses</p>
          <h2 className="text-4xl font-black mt-2">
            Top 3 Highest-Rated Courses
          </h2>
          <p className="text-slate-500 mt-3">
            These courses are selected based on the highest rating.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {popularCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* EXTRA SECTION: TRENDING COURSES */}
      <section className="bg-slate-950 text-white py-16 mt-10">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-10">
            <p className="text-cyan-300 font-bold">✨ Extra Section</p>
            <h2 className="text-4xl font-black mt-2">Trending Courses</h2>
            <p className="text-slate-300 mt-3">
              New and trending courses for modern learners.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {trendingCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white/10 border border-white/10 rounded-3xl p-6 hover:bg-white/20 transition"
              >
                <p className="badge badge-info">{course.category}</p>
                <h3 className="text-2xl font-bold mt-4">{course.title}</h3>
                <p className="text-slate-300 mt-2">
                  {course.duration} • {course.level}
                </p>
                <p className="text-yellow-300 mt-3">⭐ {course.rating}</p>

                <Link
                  href={`/courses/${course.id}`}
                  className="btn btn-primary btn-sm rounded-full mt-5"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEARNING TIPS + TOP INSTRUCTORS */}
      <section className="max-w-7xl mx-auto px-5 py-16 grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl bg-gradient-to-br from-orange-100 to-yellow-50 p-8 shadow-xl">
          <p className="text-orange-600 font-bold">💡 Learning Tips Section</p>

          <h2 className="text-3xl font-black mt-3">
            Study Techniques & Time Management
          </h2>

          <ul className="mt-6 space-y-3 text-slate-700">
            <li>✅ Make a small daily study routine.</li>
            <li>✅ Learn one topic at a time.</li>
            <li>✅ Practice after every lesson.</li>
            <li>✅ Revise important topics weekly.</li>
          </ul>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-blue-100 to-cyan-50 p-8 shadow-xl">
          <p className="text-blue-600 font-bold">🏆 Top Instructors Section</p>

          <h2 className="text-3xl font-black mt-3">
            Learn from Skilled Mentors
          </h2>

          <div className="grid grid-cols-2 gap-4 mt-6">
            {instructors.map((instructor) => (
              <div key={instructor.name} className="bg-white rounded-2xl p-4 shadow">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <h4 className="font-bold mt-3">{instructor.name}</h4>
                <p className="text-sm text-slate-500">{instructor.skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}