"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: "412%", label: "Organic growth", desc: "Year-one average across managed accounts." },
  { value: "47s", label: "Response time", desc: "Median across calls, chat, and form fills." },
  { value: "4.9★", label: "Patient rating", desc: "Average across PRACPROS practices." },
  { value: "6.4×", label: "ROAS", desc: "Channel-attributed, full-funnel return on ad spend." },
  { value: "+186/mo", label: "Reactivated", desc: "Dormant patients re-engaged through recare." },
];

export function SemrushDataStats() {
  const [active, setActive] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onScroll = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const total = r.height + vh * 0.6;
      const past = vh * 0.7 - r.top;
      const ratio = Math.max(0, Math.min(0.99, past / total));
      const idx = Math.min(STATS.length - 1, Math.floor(ratio * STATS.length));
      setActive(idx);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <div className="text-[11px] font-bold uppercase tracking-widest text-[#0f0f1a] mb-3">
            By the numbers
          </div>
          <div className="flex items-start justify-between gap-6">
            <h2 className="text-[24px] sm:text-[34px] lg:text-[42px] font-black text-[#0f0f1a] leading-[1.06] tracking-[-0.8px] max-w-[560px] [text-wrap:balance]">
              <span className="block">Outcomes our practices</span>
              <span className="block">measure every day.</span>
            </h2>
            <a
              href="#"
              className="hidden sm:inline-flex items-center justify-center px-6 h-[40px] border border-[#0f0f1a]/30 text-[13px] font-semibold text-[#0f0f1a] rounded-full hover:bg-gray-50 transition-colors shrink-0"
            >
              Learn more
            </a>
          </div>
          <p className="text-[14px] sm:text-[15px] text-[#5a5a6a] leading-[1.55] mt-5 max-w-[600px]">
            Not vanity metrics. The numbers that change production, retention, and the quality of every Monday morning.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-6 lg:gap-16">
          {/* Left numbers */}
          <ul className="space-y-3 lg:space-y-4">
            {STATS.map((s, i) => (
              <StatRow key={s.value} stat={s} active={i === active} />
            ))}
          </ul>

          {/* Right descriptions */}
          <ul className="space-y-12 sm:space-y-14 lg:space-y-20 lg:pt-20 hidden sm:block">
            {STATS.map((s, i) => (
              <li
                key={s.value}
                className={`text-[15px] sm:text-[17px] leading-[1.5] max-w-[320px] transition-colors duration-500 ${
                  i === active ? "text-[#0f0f1a]" : "text-[#c5c5cb]"
                }`}
              >
                {s.desc}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 sm:hidden">
          <a href="#" className="inline-flex items-center justify-center px-5 h-[40px] border border-[#0f0f1a]/30 text-[13px] font-semibold text-[#0f0f1a] rounded-full">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}

function StatRow({ stat, active }: { stat: { value: string; label: string }; active: boolean }) {
  if (active) {
    return (
      <li className="flex items-stretch h-[88px] sm:h-[120px] lg:h-[140px] transition-all duration-500">
        <div
          className="w-[80px] sm:w-[110px] lg:w-[130px] flex items-center justify-center"
          style={{
            background:
              "linear-gradient(90deg, #ffb89c 0%, #ff8a5c 60%, #ff521c 100%)",
          }}
        >
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden className="sm:w-[48px] sm:h-[48px]">
            <path d="M18 30V6M8 16l10-10 10 10" stroke="#0f0f1a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="flex-1 bg-[#0f0f1a] flex items-center px-6 sm:px-8 lg:px-10 relative">
          <span className="text-white font-black tracking-[-2.5px] leading-none text-[44px] sm:text-[72px] lg:text-[92px]">
            {stat.value}
          </span>
          <span className="absolute right-6 sm:right-8 lg:right-10 bottom-3 sm:bottom-4 lg:bottom-5 text-white/80 text-[11px] sm:text-[13px] font-medium">
            {stat.label}
          </span>
        </div>
      </li>
    );
  }

  return (
    <li className="flex items-center gap-4 h-[60px] sm:h-[80px] lg:h-[96px] transition-all duration-500">
      <span className="shrink-0 inline-flex items-center justify-center w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[96px] lg:h-[96px] bg-[#f4f4f6]">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden className="sm:w-[28px] sm:h-[28px] lg:w-[32px] lg:h-[32px]">
          <path d="M12 20V4M5 11l7-7 7 7" stroke="#c5c5cb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="font-black tracking-[-2px] leading-none text-[#e5e5ea] text-[36px] sm:text-[56px] lg:text-[72px]">
        {stat.value}
      </span>
    </li>
  );
}
