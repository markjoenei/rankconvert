"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Story = {
  image: string;
  alt: string;
  badge: string;
  practice: string;
  segment: string;
  quote: string;
  author: string;
  role: string;
  metric: string;
  metricLabel: string;
};

const STORIES: Story[] = [
  {
    image: "/stories/brighthill.jpg",
    alt: "Family at home reflecting Brighthill's patient base",
    badge: "Featured",
    practice: "Brighthill Family Dental",
    segment: "General · Suburban",
    quote: "We rebuilt the front desk around the dashboard. We know what Friday produced — without asking anyone.",
    author: "Dr. Lee",
    role: "Owner",
    metric: "+62%",
    metricLabel: "New patients",
  },
  {
    image: "/stories/magnolia.jpg",
    alt: "Confident young woman with aligned smile",
    badge: "Orthodontics",
    practice: "Magnolia Orthodontics",
    segment: "Orthodontics",
    quote: "Inquiries used to die overnight. Now they book themselves before our team gets in.",
    author: "Dr. Mills",
    role: "Founder",
    metric: "47s",
    metricLabel: "Response time",
  },
  {
    image: "/stories/riverbend.jpg",
    alt: "Urban couple laughing outdoors",
    badge: "Local SEO",
    practice: "Riverbend Dental",
    segment: "General · Urban",
    quote: "We were invisible. Now we're the #1 dentist in our zip code and we know exactly why.",
    author: "Dr. Patel",
    role: "Owner",
    metric: "#1",
    metricLabel: "Local rank",
  },
  {
    image: "/stories/pacific.jpg",
    alt: "Family walking together at a fairground",
    badge: "Recare",
    practice: "Pacific Family Dental",
    segment: "Family · Recall focus",
    quote: "Dormant patients keep coming back. Their families come with them.",
    author: "Dr. Reyes",
    role: "Owner",
    metric: "+186/mo",
    metricLabel: "Reactivated",
  },
  {
    image: "/stories/cedarbrook.jpg",
    alt: "Cosmetic patient portrait",
    badge: "Cosmetic",
    practice: "Cedarbrook Smiles",
    segment: "Cosmetic · Urban",
    quote: "We stopped wondering. Every channel ties to a booked patient, every week.",
    author: "Dr. Chen",
    role: "Owner",
    metric: "6.4×",
    metricLabel: "ROAS",
  },
  {
    image: "/stories/northwood.jpg",
    alt: "Mother and child — pediatric care",
    badge: "Pediatric · DSO",
    practice: "Northwood Pediatric",
    segment: "Pediatric · DSO",
    quote: "Five locations, one dashboard. Operations meetings cut in half.",
    author: "Maya R.",
    role: "Director of Ops",
    metric: "5",
    metricLabel: "Locations synced",
  },
];

export function SemrushNews() {
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

    const cardWidth = (el.firstElementChild as HTMLElement | null)?.offsetWidth ?? 320;
    const step = cardWidth + 16;

    const id = window.setInterval(() => {
      if (pausedRef.current || document.hidden) return;
      const max = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= max - 4) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 4500);

    return () => {
      window.clearInterval(id);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("touchstart", onEnter);
      el.removeEventListener("touchend", onLeave);
    };
  }, []);

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-1.5 mb-3">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#0f0f1a]">
                Practice Stories
              </span>
              <span className="text-[11px] font-medium text-[#6b6b76]">( {STORIES.length} )</span>
            </div>
            <h2 className="text-[26px] sm:text-[38px] lg:text-[50px] font-black text-[#0f0f1a] leading-[1.06] tracking-[-1px] [text-wrap:balance]">
              <span className="block">Practices winning</span>
              <span className="block">their market.</span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 shrink-0">
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

        <div
          ref={scrollerRef}
          className="grid grid-flow-col auto-cols-[80%] sm:auto-cols-[42%] lg:auto-cols-[calc((100%-3rem)/4)] gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 -mx-4 px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {STORIES.map((s, i) => (
            <article key={i} className="snap-start group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 transition-transform group-hover:scale-[1.01]">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 42vw, 80vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest text-white bg-black/45 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  {s.badge}
                </span>
                <span className="absolute top-3 right-3 text-[12px] font-black text-white bg-[#ff521c] px-2.5 py-1 rounded-full leading-none">
                  {s.metric}
                </span>
              </div>
              <h3 className="normal-case text-[15px] sm:text-[16px] font-bold text-[#0f0f1a] leading-[1.25] tracking-tight mb-2">
                {s.practice}
              </h3>
              <p className="text-[12px] text-[#5a5a6a] mb-3 leading-[1.5]">
                &ldquo;{s.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between text-[11px] text-[#6b6b76]">
                <span className="font-medium">{s.author} · {s.role}</span>
                <span>{s.segment}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="flex md:hidden items-center justify-center gap-2 mt-8">
          <button
            onClick={() => scroll("prev")}
            aria-label="Previous"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M9 3l-4 4 4 4" stroke="#0f0f1a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => scroll("next")}
            aria-label="Next"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M5 3l4 4-4 4" stroke="#0f0f1a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
