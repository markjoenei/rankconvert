"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS: { label: string; chevron: boolean }[] = [
  { label: "Get New Patients", chevron: true },
  { label: "Services", chevron: true },
  { label: "Products", chevron: true },
  { label: "Our Difference", chevron: false },
  { label: "Blog", chevron: false },
  { label: "Contact", chevron: false },
];

export function SemrushNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-[64px] gap-6">
        <Link
          href="/"
          aria-label="PracPros home"
          className="flex items-center gap-3 shrink-0"
        >
          <Image
            src="/brand/pracpros-logo-v2.png"
            alt="PracPros"
            width={1091}
            height={229}
            priority
            className="h-7 sm:h-8 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1 ml-6" aria-label="Main navigation">
          {NAV_ITEMS.map(({ label, chevron }) => (
            <Link
              key={label}
              href="#"
              className="flex items-center gap-1 px-3 py-2 text-[14px] font-medium text-[#1a1a1a] hover:text-[#ff521c] rounded-md transition-colors"
            >
              {label}
              {chevron && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                  <path d="M2.5 3.5l2.5 2.5 2.5-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2 ml-auto shrink-0">
          <Link href="#" className="px-3 h-[36px] inline-flex items-center text-[13px] font-semibold text-[#1a1a1a] hover:text-[#ff521c] transition-colors">
            Log in
          </Link>
          <Link href="#" className="px-5 h-[36px] inline-flex items-center text-[13px] font-semibold text-[#1a1a1a] border border-[#d8d8de] rounded-full hover:bg-gray-50 transition-colors">
            Book a demo
          </Link>
          <Link href="#" className="px-5 h-[36px] inline-flex items-center bg-[#ff521c] text-white text-[13px] font-semibold rounded-full hover:bg-[#e0461a] transition-colors">
            Start free
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden ml-auto p-2 rounded-md hover:bg-gray-100 transition-colors"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
            {open ? (
              <path d="M5 5l12 12M17 5L5 17" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 7h14" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M4 11h14" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M4 15h14" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-3">
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href="#"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between px-2 py-3.5 text-[15px] font-medium text-[#1a1a1a] border-b border-gray-50"
              >
                {item.label}
                {item.chevron && (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path d="M5.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2.5 pt-4 pb-2">
            <Link href="#" className="text-center py-3 text-[15px] font-semibold text-[#1a1a1a] border border-[#d8d8de] rounded-full">
              Log in
            </Link>
            <Link href="#" className="text-center py-3 text-[15px] font-semibold text-[#1a1a1a] border border-[#d8d8de] rounded-full">
              Book a demo
            </Link>
            <Link href="#" className="text-center py-3 bg-[#ff521c] text-white text-[15px] font-semibold rounded-full">
              Start free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

