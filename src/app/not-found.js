import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen grid place-items-center bg-slate-50 px-5">
      <div className="text-center bg-white rounded-3xl p-10 shadow-xl max-w-lg">
        <h1 className="text-7xl font-black text-primary">404</h1>
        <h2 className="text-3xl font-bold mt-4">Page Not Found</h2>
        <p className="text-slate-500 mt-3">
          The page or course you are looking for does not exist.
        </p>
        <Link href="/" className="btn btn-primary rounded-full mt-7">
          Back to Home
        </Link>
      </div>
    </main>
  );
}