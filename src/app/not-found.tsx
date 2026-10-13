import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--ink)] px-5 text-center text-[var(--foam)]">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary)] mb-6">
        <span>404 · Page Not Found</span>
      </div>
      <h1 className="font-display text-5xl font-bold tracking-tight sm:text-7xl">
        Lost in Cyberspace
      </h1>
      <p className="mt-4 max-w-md text-base text-[var(--mist)]">
        The requested system resource or page does not exist or has been migrated.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[var(--primary)] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-black transition-transform hover:scale-105"
      >
        <span>&larr; Return to Jawa Solutions</span>
      </Link>
    </div>
  );
}
