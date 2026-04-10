import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      <div className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/30 mb-4 font-mono">
        404
      </div>
      <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mb-4">
        Page not found
      </h1>
      <p className="text-white/50 mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-6 py-3 bg-white text-black rounded-lg text-sm font-medium hover:bg-white/90 transition-colors"
      >
        Go home
      </Link>
    </main>
  );
}
