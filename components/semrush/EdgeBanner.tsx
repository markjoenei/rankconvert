"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function SemrushEdgeBanner() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const articleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const article = articleRef.current;
    if (!wrapper || !article) return;

    // Disable on small screens (matches the md: sticky breakpoint).
    const mq = window.matchMedia("(min-width: 768px)");

    const onScroll = () => {
      if (!mq.matches) {
        article.style.transform = "";
        article.style.opacity = "";
        article.style.transformOrigin = "";
        return;
      }
      const rect = wrapper.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) return;
      const progress = Math.max(0, Math.min(1, -rect.top / total));
      // Engage scale/opacity once past 60% — the final 40% is the "release" zone
      // where ScaleBanner is climbing up over the pinned card.
      const t = Math.max(0, (progress - 0.6) / 0.4);
      const scale = 1 - t * 0.08;
      const opacity = 1 - t * 0.55;
      const translateY = t * -24;
      article.style.transform = `translateY(${translateY}px) scale(${scale})`;
      article.style.opacity = String(opacity);
      article.style.transformOrigin = "center top";
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    mq.addEventListener("change", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      mq.removeEventListener("change", onScroll);
    };
  }, []);

  return (
    // Tall outer wrapper sets the scroll distance over which the card stays pinned.
    // On mobile (<md) we fall back to normal flow so the pin doesn't feel cramped.
    <div ref={wrapperRef} className="relative md:h-[180vh] bg-[#ede5ff]">
      <section className="md:sticky md:top-0 md:h-screen md:flex md:items-center bg-[#ede5ff] py-6 md:py-0 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <article
            ref={articleRef}
            className="relative rounded-2xl overflow-hidden p-7 sm:p-12 lg:p-16 min-h-[440px] sm:min-h-[500px] lg:min-h-[540px] grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-center transition-[transform,opacity] duration-100 will-change-transform"
            style={{
              background:
                "linear-gradient(135deg, #c7a8ff 0%, #d6bcff 35%, #e0d8ff 65%, #d3f0e3 100%)",
            }}
          >
          <div
            className="absolute -left-20 top-1/2 -translate-y-1/2 w-[420px] h-[420px] pointer-events-none opacity-50"
            style={{
              background:
                "linear-gradient(135deg, transparent 45%, rgba(255,255,255,0.18) 50%, transparent 55%)",
              transform: "translateY(-50%) rotate(45deg)",
            }}
          />

          <div className="relative z-10 max-w-[500px]">
            <h2 className="normal-case text-[26px] sm:text-[36px] lg:text-[48px] font-black text-[#0f0f1a] leading-[1.06] tracking-[-0.8px] mb-6 [text-wrap:balance]">
              <span className="block">You have marketing.</span>
              <span className="block">What you don&apos;t</span>
              <span className="block">have is a system.</span>
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#3a3a4a] leading-[1.55] mb-6 max-w-[440px]">
              Modern dental practices are failing because they rely on fragmented, outdated tactics and slow manual follow-ups. Patients book with whoever responds first — success no longer depends on being the most skilled, but on being the most systematic.
            </p>
            <p className="text-[14px] sm:text-[15px] text-[#0f0f1a] font-semibold leading-[1.5] mb-7 max-w-[440px]">
              Most practices don&apos;t have that system. PRACPROS builds it.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 h-[44px] bg-[#0f0f1a] text-white text-[13px] font-semibold rounded-full hover:bg-black transition-colors"
              >
                Get a Free Growth Audit
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 h-[44px] bg-transparent text-[#0f0f1a] text-[13px] font-semibold rounded-full border border-[#0f0f1a]/60 hover:bg-white/40 transition-colors"
              >
                Explore the platform
              </a>
            </div>
          </div>

            <div className="relative z-10">
              <PipelineChartCard />
              {/* Floating patient portrait */}
              <div className="hidden lg:block absolute -top-6 -right-4 w-[120px] h-[120px] rounded-full overflow-hidden ring-4 ring-white shadow-[0_10px_30px_rgba(60,40,120,0.25)]">
                <Image
                  src="/portraits/edge-patient.webp"
                  alt="Happy patient smiling"
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

function PipelineChartCard() {
  return (
    <div className="bg-white rounded-xl shadow-[0_20px_50px_rgba(60,40,120,0.18)] p-5 sm:p-7">
      <div className="text-[16px] sm:text-[18px] font-bold text-[#0f0f1a] mb-5">
        New-patient pipeline
      </div>

      <div className="flex items-end gap-6 sm:gap-10 mb-6 pb-5 border-b border-gray-100">
        <Legend color="#3b82f6" name="Google Search" value="412K" />
        <Legend color="#10b981" name="Google Maps" value="186%" />
        <Legend color="#f97316" name="AI Citations" value="+412%" />
      </div>

      <div className="relative h-[160px] sm:h-[200px]">
        <svg viewBox="0 0 600 200" className="w-full h-full" preserveAspectRatio="none" aria-hidden>
          <text x="0" y="14" fontSize="9" fill="#9ca3af">200</text>
          <text x="0" y="56" fontSize="9" fill="#9ca3af">150</text>
          <text x="0" y="98" fontSize="9" fill="#9ca3af">100</text>
          <text x="0" y="140" fontSize="9" fill="#9ca3af">50</text>
          <text x="0" y="182" fontSize="9" fill="#9ca3af">0</text>
          {[14, 56, 98, 140, 182].map((y) => (
            <line key={y} x1="40" y1={y - 4} x2="600" y2={y - 4} stroke="#f3f4f6" strokeWidth="1" />
          ))}
          {/* AI Citations (orange) - rising sharply */}
          <path d="M60,160 L160,150 L260,120 L360,80 L460,50 L560,30" stroke="#f97316" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          {/* Google Maps (green) - steady growth */}
          <path d="M60,140 L160,130 L260,118 L360,100 L460,90 L560,80" stroke="#10b981" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          {/* Google Search (blue) - moderate growth */}
          <path d="M60,130 L160,125 L260,118 L360,110 L460,102 L560,95" stroke="#3b82f6" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <circle cx="560" cy="30" r="4" fill="#f97316" />
        </svg>
      </div>

      <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-[#6b6b76] mt-2 pl-10">
        <span>Mar 2026</span>
        <span>Apr 2026</span>
        <span>May 2026</span>
      </div>
    </div>
  );
}

function Legend({ color, name, value }: { color: string; name: string; value: string }) {
  return (
    <div>
      <div className="flex items-center gap-1.5 mb-1">
        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
        <span className="text-[12px] text-[#6b6b76] font-medium">{name}</span>
      </div>
      <div className="text-[22px] sm:text-[26px] font-black text-[#0f0f1a] leading-none">
        {value}
      </div>
    </div>
  );
}
