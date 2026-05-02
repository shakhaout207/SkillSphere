import Link from "next/link";
import { Clock, Star, Signal } from "lucide-react";

export default function CourseCard({ course }) {
  return (
    <div className="card bg-white shadow-xl border border-slate-100 overflow-hidden hover:-translate-y-2 transition-all duration-300">
      <figure className="h-54 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover hover:scale-110 transition duration-500"
        />
      </figure>

      <div className="card-body">
        <div className="flex items-center justify-between gap-3">
          <span className="badge badge-primary badge-outline">{course.category}</span>
          <span className="flex items-center gap-1 text-sm font-semibold text-amber-500">
            <Star size={16} fill="currentColor" /> {course.rating}
          </span>
        </div>

        <h3 className="card-title text-xl text-slate-900 line-clamp-2">
          {course.title}
        </h3>

        <p className="text-sm text-slate-500">By {course.instructor}</p>

        <p className="text-slate-600 line-clamp-3">{course.description}</p>

        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 mt-2">
          <span className="flex items-center gap-1">
            <Clock size={16} /> {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <Signal size={16} /> {course.level}
          </span>
        </div>

        <div className="card-actions items-center justify-between mt-4">
          <span className="text-lg font-bold text-primary">{course.price}</span>
          <Link href={`/courses/${course.id}`} className="btn btn-primary rounded-full">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}