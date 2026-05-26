"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Solution = {
  number: string;
  tag: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  mockup: React.ReactNode;
};

const SOLUTIONS: Solution[] = [
  {
    number: "01",
    tag: "Visibility",
    title: "Your practice appears first — everywhere patients search",
    body: "Google Search, Google Maps, AI results, and every platform where patients are actively looking for a dentist.",
    image: "/solutions/visibility.jpg",
    alt: "Patient searching for a dentist on a phone",
    mockup: <VisibilityMockup />,
  },
  {
    number: "02",
    tag: "Speed-to-Lead",
    title: "Answer first. Win the patient.",
    body: "Personalized response in under 60 seconds. After-hours coverage. Confirmed before a competitor calls back.",
    image: "/solutions/speed.jpg",
    alt: "Patient on a phone receiving a quick response",
    mockup: <SpeedMockup />,
  },
  {
    number: "03",
    tag: "Conversion",
    title: "Turn site traffic into booked appointments",
    body: "Conversion-optimized sites built around the patient decision journey — not template themes.",
    image: "/solutions/conversion.jpg",
    alt: "Patient booking an appointment online",
    mockup: <ConversionMockup />,
  },
  {
    number: "04",
    tag: "Reputation",
    title: "Make your reviews do the selling",
    body: "Generate reviews from happy patients, reply to every one, and monitor the signals that drive trust and rankings.",
    image: "/solutions/reputation.jpg",
    alt: "Happy patient leaving a review",
    mockup: <ReputationMockup />,
  },
  {
    number: "05",
    tag: "Retention & Referral",
    title: "Turn loyal patients into a growth channel",
    body: "Automated referral links, reward systems, and tracking that turns goodwill into a measurable acquisition engine.",
    image: "/solutions/referral.jpg",
    alt: "Loyal patients sharing referrals",
    mockup: <ReferralMockup />,
  },
  {
    number: "06",
    tag: "Dashboard",
    title: "One report. Every channel. Real time.",
    body: "Every lead, call, chat, form, and campaign result — tracked live. Marketing becomes an operational metric you manage.",
    image: "/solutions/dashboard.jpg",
    alt: "Practice owner reviewing the dashboard",
    mockup: <DashboardMockup />,
  },
];

export function SemrushSolutions() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  const scroll = (dir: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir === "next" ? el.clientWidth * 0.8 : -el.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onEnter = () => (pausedRef.current = true);
    const onLeave = () => (pausedRef.current = false);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("touchstart", onEnter, { passive: true });
    el.addEventListener("touchend", onLeave, { passive: true });

    const cardWidth = (el.firstElementChild as HTMLElement | null)?.offsetWidth ?? 400;
    const step = cardWidth + 16; // gap-4

    const id = window.setInterval(() => {
      if (pausedRef.current || document.hidden) return;
      const max = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= max - 4) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 3500);

    return () => {
      window.clearInterval(id);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("touchstart", onEnter);
      el.removeEventListener("touchend", onLeave);
    };
  }, []);

  return (
    <section className="relative z-20 bg-white py-14 sm:py-20 lg:py-24 md:-mt-[20vh] md:rounded-t-[32px] md:shadow-[0_-20px_60px_rgba(0,0,0,0.12)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-[680px]">
            <div className="flex items-center gap-1.5 mb-3">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#0f0f1a]">
                Six Capabilities
              </span>
              <span className="text-[11px] font-medium text-[#6b6b76]">
                ( {SOLUTIONS.length} )
              </span>
            </div>
            <h2 className="text-[24px] sm:text-[34px] lg:text-[46px] font-black text-[#0f0f1a] leading-[1.06] tracking-[-1px] [text-wrap:balance]">
              <span className="block">One system. Every</span>
              <span className="block">patient touchpoint.</span>
              <span className="block">Nothing disconnected.</span>
            </h2>
          </div>
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <button
              onClick={() => scroll("prev")}
              aria-label="Previous"
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M9 3l-4 4 4 4" stroke="#0f0f1a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => scroll("next")}
              aria-label="Next"
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M5 3l4 4-4 4" stroke="#0f0f1a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop horizontal scroller */}
        <div
          ref={scrollerRef}
          className="hidden lg:flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {SOLUTIONS.map((s, i) => (
            <SolutionCard key={i} solution={s} />
          ))}
        </div>

        {/* Mobile stacked */}
        <ul className="lg:hidden divide-y divide-gray-200 border-t border-b border-gray-200">
          {SOLUTIONS.map((s, i) => (
            <li key={i}>
              <button type="button" className="w-full flex items-center justify-between gap-4 py-4 text-left">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-[#ff521c]">{s.number}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#6b6b76]">
                      {s.tag}
                    </span>
                  </div>
                  <div className="text-[15px] font-semibold text-[#0f0f1a] leading-[1.3]">
                    {s.title}
                  </div>
                </div>
                <span className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path d="M7 3v8M3 7h8" stroke="#0f0f1a" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <article
      className="snap-start shrink-0 w-[400px] rounded-2xl p-5 flex flex-col gap-4 min-h-[540px] relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #d8f5e4 0%, #d4f0e1 50%, #d4e8e8 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent 0, transparent 24px, rgba(255,255,255,0.4) 25px, transparent 26px)",
        }}
      />

      {/* Header image */}
      <div className="relative z-10 aspect-[16/9] rounded-xl overflow-hidden">
        <Image
          src={solution.image}
          alt={solution.alt}
          fill
          sizes="400px"
          className="object-cover"
        />
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#0f0f1a]">
          <span className="text-[#ff521c]">{solution.number}</span>
          {solution.tag}
        </span>
      </div>

      <div className="relative z-10 flex items-start justify-between gap-3">
        <div className="flex-1">
          <h3 className="normal-case text-[18px] font-black text-[#0f0f1a] leading-[1.2] tracking-tight mb-2">
            {solution.title}
          </h3>
          <p className="text-[12px] text-[#3a3a4a] leading-[1.5]">{solution.body}</p>
        </div>
        <button
          type="button"
          aria-label="Open"
          className="w-9 h-9 rounded-full border border-[#0f0f1a]/30 flex items-center justify-center shrink-0 hover:bg-white/40 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M7 3v8M3 7h8" stroke="#0f0f1a" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <div className="relative z-10 mt-auto">{solution.mockup}</div>
    </article>
  );
}

/* ---------- mockups ---------- */

function VisibilityMockup() {
  return (
    <div className="bg-white border border-black/5 rounded-md p-3 shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[9px] font-semibold text-[#0f0f1a]">dentist near me · Toronto</span>
        <span className="text-[9px] text-[#1a8754] font-bold bg-[#dcf2e2] px-1.5 py-0.5 rounded">Top 3</span>
      </div>
      <ul className="space-y-1.5 text-[9px]">
        {[
          { rank: 1, name: "Brighthill Family Dental", rating: "4.9 · 1,247", you: true },
          { rank: 2, name: "Yorkville Dental Co.", rating: "4.7 · 612" },
          { rank: 3, name: "Bay Smiles Clinic", rating: "4.6 · 488" },
        ].map((r) => (
          <li key={r.rank} className={`flex items-center gap-2 p-1.5 rounded ${r.you ? "bg-[#dcf2e2] border border-[#1a8754]/30" : ""}`}>
            <span className={`w-4 h-4 rounded-full text-[8px] font-bold flex items-center justify-center ${r.you ? "bg-[#1a8754] text-white" : "bg-gray-200 text-gray-600"}`}>
              {r.rank}
            </span>
            <span className="flex-1 font-semibold text-[#0f0f1a] truncate">{r.name}</span>
            <span className="text-gray-500">★ {r.rating}</span>
          </li>
        ))}
      </ul>
      <div className="mt-2 flex items-center justify-between text-[9px] text-[#1a8754] font-bold">
        <span>+186% taps</span>
        <span className="text-gray-400 font-normal">Local 3-pack #1 of 38</span>
      </div>
    </div>
  );
}

function SpeedMockup() {
  return (
    <div className="bg-white border border-black/5 rounded-md p-3 shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
      <div className="text-[10px] font-bold text-[#0f0f1a] mb-2">Response timeline</div>
      <ul className="space-y-2">
        {[
          { t: "0s", title: "Inquiry lands", desc: "Form, chat, or missed call", on: true },
          { t: "12s", title: "Reply sent", desc: "Name + booking options", on: true },
          { t: "47s", title: "Patient booked", desc: "Calendar invite confirmed", on: true },
        ].map((s) => (
          <li key={s.t} className="flex items-start gap-2">
            <span className="text-[10px] font-black text-[#ff521c] w-8">{s.t}</span>
            <div className="flex-1">
              <div className="text-[10px] font-bold text-[#0f0f1a]">{s.title}</div>
              <div className="text-[8px] text-gray-500">{s.desc}</div>
            </div>
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden className="mt-1">
              <circle cx="6" cy="6" r="5" fill="#10b981" />
              <path d="M3.5 6l1.8 1.8L8.5 4" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ConversionMockup() {
  return (
    <div className="bg-white border border-black/5 rounded-md p-3 shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
      <div className="text-[10px] font-bold text-[#0f0f1a] mb-3">Conversion funnel</div>
      <div className="space-y-2">
        {[
          { l: "Visits", v: 4820, w: 100 },
          { l: "Engaged", v: 1640, w: 68 },
          { l: "Inquired", v: 312, w: 36 },
          { l: "Booked", v: 187, w: 22 },
        ].map((s) => (
          <div key={s.l} className="flex items-center gap-2 text-[9px]">
            <span className="w-12 text-gray-600">{s.l}</span>
            <div className="flex-1 h-3 bg-gray-100 rounded-sm overflow-hidden">
              <div
                className="h-full rounded-sm"
                style={{ width: `${s.w}%`, background: "linear-gradient(90deg, #ff521c, #ff8a5c)" }}
              />
            </div>
            <span className="w-10 text-right font-bold text-[#0f0f1a]">{s.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReputationMockup() {
  return (
    <div className="bg-white border border-black/5 rounded-md p-3 shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-[24px] font-black text-[#0f0f1a] leading-none">4.9</span>
        <span className="text-[10px] text-[#1a8754] font-bold">+38 this week</span>
      </div>
      <div className="space-y-1 mb-2">
        {[
          { stars: 5, w: 92 },
          { stars: 4, w: 7 },
          { stars: 3, w: 1 },
        ].map((s) => (
          <div key={s.stars} className="flex items-center gap-2 text-[9px]">
            <span className="w-3 text-gray-500">{s.stars}</span>
            <div className="flex-1 h-1.5 bg-gray-100 rounded-full">
              <div className="h-full bg-[#ff521c] rounded-full" style={{ width: `${s.w}%` }} />
            </div>
            <span className="w-8 text-right text-gray-500">{s.w}%</span>
          </div>
        ))}
      </div>
      <div className="text-[9px] text-gray-500 pt-2 border-t border-gray-100">
        Reply rate <span className="font-bold text-[#0f0f1a]">100%</span> · within 1h
      </div>
    </div>
  );
}

function ReferralMockup() {
  return (
    <div className="bg-white border border-black/5 rounded-md p-3 shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
      <div className="text-[10px] font-bold text-[#0f0f1a] mb-2">Emma · 5★ referrer</div>
      <ul className="space-y-1 text-[9px]">
        {["Marcus · brother", "Lila · coworker", "Sam · neighbor", "Priya · yoga friend"].map((r) => (
          <li key={r} className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-gradient-to-br from-[#ff521c] to-[#ff8a5c]" />
            <span className="text-gray-700">{r}</span>
            <span className="ml-auto text-[#1a8754] font-bold text-[8px]">booked</span>
          </li>
        ))}
      </ul>
      <div className="mt-2 pt-2 border-t border-gray-100 text-[9px] text-[#0f0f1a] flex justify-between">
        <span>Auto-reward sent</span>
        <span className="font-bold text-[#1a8754]">$50</span>
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="bg-white border border-black/5 rounded-md p-3 shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
      <div className="text-[10px] font-bold text-[#0f0f1a] mb-2">This month · Live</div>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { v: "126", l: "Patients", t: "+22%" },
          { v: "$184K", l: "Pipeline", t: "+38%" },
          { v: "6.4×", l: "ROAS", t: "+0.8" },
        ].map((m) => (
          <div key={m.l} className="bg-gray-50 p-2 rounded">
            <div className="text-[12px] font-black text-[#0f0f1a]">{m.v}</div>
            <div className="text-[8px] text-gray-500">{m.l}</div>
            <div className="text-[8px] text-[#1a8754] font-bold">{m.t}</div>
          </div>
        ))}
      </div>
      <svg viewBox="0 0 200 40" className="w-full h-[36px]" preserveAspectRatio="none" aria-hidden>
        <path d="M0,30 L40,28 L80,22 L120,18 L160,12 L200,8" stroke="#ff521c" strokeWidth="1.6" fill="none" />
      </svg>
    </div>
  );
}
