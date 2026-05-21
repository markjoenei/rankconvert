"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./ui/Logo";
import { Button } from "./ui/Button";

const navItems = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Resources", href: "#resources" },
  { label: "Customers", href: "#stories" },
  { label: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{ backgroundColor: "#43454B" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 text-white ${
        scrolled
          ? "backdrop-blur-xl border-b border-white/10 shadow-[0_1px_0_rgba(255,255,255,0.04)]"
          : "border-b border-white/10"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-[72px]">
        <div className="flex items-center gap-10">
          <Link
            href="/"
            aria-label="PracPros home"
            className="rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
          >
            <Logo invert />
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative rounded-full px-3 py-1.5 text-[14px] font-medium text-white/75 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Link
            href="#login"
            className="text-[14px] font-medium text-white/75 hover:text-white px-3 py-2 transition-colors"
          >
            Log in
          </Link>
          <Button
            href="#demo"
            variant="secondary"
            size="sm"
            className="!bg-[#FF521C] !border-[#FF521C] !text-white hover:!bg-[#e0461a] hover:!border-[#e0461a]"
          >
            Book a demo
          </Button>
          <Button
            href="#start"
            variant="primary"
            size="sm"
            trailingIcon
            className="!bg-white !text-ink hover:!bg-white/90"
          >
            Start free
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur text-white"
        >
          <span className="sr-only">Toggle menu</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
            {open ? (
              <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 6h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M3 12h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          className="md:hidden border-t border-white/10 backdrop-blur-xl"
          style={{ backgroundColor: "#43454B" }}
        >
          <div className="container-page py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-white hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-4">
              <Button
                href="#demo"
                variant="secondary"
                size="md"
                className="w-full !bg-[#FF521C] !border-[#FF521C] !text-white hover:!bg-[#e0461a] hover:!border-[#e0461a]"
              >
                Book a demo
              </Button>
              <Button
                href="#start"
                variant="primary"
                size="md"
                className="w-full !bg-white !text-ink hover:!bg-white/90"
                trailingIcon
              >
                Start free
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
