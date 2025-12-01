"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <nav className="container flex items-center justify-between py-3">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/img/logo-jaarky-transparent.svg"
            alt="Jaarky logo"
            width={40}
            height={40}
            className="rounded-md"
            priority
          />
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-jaarky-ink">Jaarky</span>
            <span className="text-xs text-slate-500">
              Product & Software Studio
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? "text-jaarky-teal"
                    : "text-slate-600 hover:text-jaarky-teal"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-jaarky-teal px-4 py-2 text-sm font-semibold text-white shadow-soft-lg hover:opacity-95 transition"
          >
            Work With Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Open menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-slate-800"></span>
            <span className="block h-0.5 w-5 bg-slate-800"></span>
          </div>
        </button>
      </nav>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/95">
          <div className="container py-3 flex flex-col gap-2">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-1 text-sm ${
                    active
                      ? "text-jaarky-teal font-semibold"
                      : "text-slate-700"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-jaarky-teal px-4 py-2 text-sm font-semibold text-white shadow-soft-lg"
            >
              Work With Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}