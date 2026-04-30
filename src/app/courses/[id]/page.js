import { notFound } from "next/navigation";
import ProtectedCourseDetails from "@/components/ProtectedCourseDetails";
import { getCourseById } from "@/data/courses";

export default async function CourseDetailsPage({ params }) {
  const { id } = await params;
  const course = getCourseById(id);

  if (!course) {
    notFound();
  }

  return <ProtectedCourseDetails course={course} />;
}