import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80">
      <div className="container py-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-slate-500">
        <p>
          © {new Date().getFullYear()} Jaarky LLC. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-xs uppercase tracking-wide text-slate-400">
            New Jersey · USA
          </span>
          <Link
            href="mailto:jaarky.eng@gmail.com"
            className="text-jaarky-teal hover:underline"
          >
            jaarky.eng@gmail.com
          </Link>
        </div>
      </div>
    </footer>
  );
}