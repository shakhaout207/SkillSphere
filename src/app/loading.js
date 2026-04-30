export default function Loading() {
  return (
    <main className="min-h-screen grid place-items-center bg-slate-50">
      <div className="text-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="mt-4 font-semibold text-slate-600">Loading SkillSphere...</p>
      </div>
    </main>
  );
}