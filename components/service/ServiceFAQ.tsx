"use client";

import { useState } from "react";

export type ServiceFAQItem = { q: string; a: string };

export function ServiceFAQ({
  eyebrow = "Frequently asked",
  title,
  intro,
  items,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  items: ServiceFAQItem[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className="py-14 sm:py-20 lg:py-24"
      style={{ background: "linear-gradient(180deg, #10121a 0%, #09090e 55%, #0b0d14 100%)" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "#f5c842" }}>
              {eyebrow}
            </div>
            <h2 className="text-[26px] sm:text-[38px] lg:text-[50px] font-black text-white leading-[1.06] tracking-[-1px] mb-5">
              {title}
            </h2>
            {intro && (
              <p className="text-[14px] sm:text-[15px] leading-[1.6] max-w-[360px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                {intro}
              </p>
            )}
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-5 h-[40px] mt-6 text-[13px] font-bold text-[#09090e] rounded-full hover:bg-[#e6b830] transition-colors"
              style={{ background: "#f5c842" }}
            >
              Book Free Strategy Call
            </a>
          </div>

          <ul
            className="divide-y"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={i} style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-[15px] sm:text-[16px] font-semibold text-white leading-[1.35]">
                      {item.q}
                    </span>
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all"
                      style={{
                        border: isOpen ? "none" : "1px solid rgba(255,255,255,0.15)",
                        background: isOpen ? "#f5c842" : "transparent",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                        <path d="M6 2v8M2 6h8" stroke={isOpen ? "#09090e" : "white"} strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out"
                    style={{ maxHeight: isOpen ? 600 : 0, opacity: isOpen ? 1 : 0 }}
                  >
                    <p className="text-[13px] sm:text-[14px] leading-[1.65] pb-5 pr-12" style={{ color: "rgba(255,255,255,0.55)" }}>
                      {item.a}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
