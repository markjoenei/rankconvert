"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Website Design", href: "/website-design" },
  { label: "SEO", href: "/seo" },
  { label: "Shopify", href: "/shopify" },
  { label: "Contact", href: "/contact" },
];

export function SemrushNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#09090e]/95 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center py-[10px]">
        <Link href="/" aria-label="RankConvert home" className="flex items-center shrink-0">
          <Image
            src="/brand/rankconvert-logo.png"
            alt="RankConvert"
            width={800}
            height={389}
            priority
            fetchPriority="high"
            sizes="288px"
            className="h-14 sm:h-16 lg:h-[72px] w-auto"
          />
        </Link>

        <nav className="hidden lg:flex flex-1 items-center justify-center gap-1" aria-label="Main navigation">
          {NAV_ITEMS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="px-3 py-2 text-[14px] font-medium text-white/70 hover:text-white rounded-md transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <a
            href="tel:0478186355"
            className="px-3 h-[36px] inline-flex items-center gap-1.5 text-[13px] font-semibold text-white/70 hover:text-white transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path
                d="M2 3.5a1.5 1.5 0 011.5-1.5h1.4a1 1 0 01.95.68l.7 2.09a1 1 0 01-.24 1.02L5.4 6.8a8 8 0 003.8 3.8l1-.9a1 1 0 011.02-.24l2.1.7a1 1 0 01.68.95V12.5A1.5 1.5 0 0112.5 14C6.7 14 2 9.3 2 3.5z"
                stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"
              />
            </svg>
            0478 186 355
          </a>
          <Link
            href="/contact"
            className="px-5 h-[36px] inline-flex items-center bg-[#f5c842] text-[#09090e] text-[13px] font-bold rounded-full hover:bg-[#e6b830] transition-colors"
          >
            Get a Free Review
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden ml-auto p-2 rounded-md hover:bg-white/8 transition-colors"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
            {open ? (
              <path d="M5 5l12 12M17 5L5 17" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 7h14" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M4 11h14" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M4 15h14" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0f1017] border-t border-white/[0.06] px-4 py-3">
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-2 py-3.5 text-[15px] font-medium text-white/80 border-b border-white/[0.06] hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2.5 pt-4 pb-2">
            <a
              href="tel:0478186355"
              className="inline-flex items-center justify-center gap-2 py-3 text-[15px] font-semibold text-white/70 border border-white/10 rounded-full"
            >
              <svg width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path
                  d="M2 3.5a1.5 1.5 0 011.5-1.5h1.4a1 1 0 01.95.68l.7 2.09a1 1 0 01-.24 1.02L5.4 6.8a8 8 0 003.8 3.8l1-.9a1 1 0 011.02-.24l2.1.7a1 1 0 01.68.95V12.5A1.5 1.5 0 0112.5 14C6.7 14 2 9.3 2 3.5z"
                  stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"
                />
              </svg>
              0478 186 355
            </a>
            <Link
              href="/contact"
              className="text-center py-3 bg-[#f5c842] text-[#09090e] text-[15px] font-bold rounded-full"
            >
              Get a Free Review
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
