"use client";

import Image from "next/image";

type ReviewCard = {
  id: string;
  source: string;
  sourceColor: string; // bg color for label pill
  initials: string;
  avatarBg: string;
  name: string;
  rating: number;
  daysAgo: string;
  body: string;
  pinSide:
    | "tl"
    | "tr"
    | "ml"
    | "mr"
    | "bl"
    | "br";
};

const reviews: ReviewCard[] = [
  {
    id: "r1",
    source: "Google",
    sourceColor: "bg-brand-300",
    initials: "EM",
    avatarBg: "bg-brand-500",
    name: "Emma M.",
    rating: 5,
    daysAgo: "2d ago",
    body: "Honestly the best dental visit I've ever had. The whole team was so kind.",
    pinSide: "tl",
  },
  {
    id: "r2",
    source: "Google",
    sourceColor: "bg-brand-400",
    initials: "DR",
    avatarBg: "bg-brand-500",
    name: "Daniel R.",
    rating: 5,
    daysAgo: "5d ago",
    body: "Booked online, answered in seconds. Got in the next morning. Wow.",
    pinSide: "ml",
  },
  {
    id: "r3",
    source: "Google",
    sourceColor: "bg-brand-400",
    initials: "PV",
    avatarBg: "bg-brand-500",
    name: "Priya V.",
    rating: 5,
    daysAgo: "1w ago",
    body: "They followed up to make sure I was healing well. Felt seen, not processed.",
    pinSide: "bl",
  },
  {
    id: "r4",
    source: "Google",
    sourceColor: "bg-brand-400",
    initials: "JS",
    avatarBg: "bg-brand-500",
    name: "James S.",
    rating: 5,
    daysAgo: "1w ago",
    body: "My insurance was sorted before I even sat down. Truly above and beyond.",
    pinSide: "tr",
  },
  {
    id: "r5",
    source: "Google",
    sourceColor: "bg-brand-400",
    initials: "OK",
    avatarBg: "bg-brand-500",
    name: "Olivia K.",
    rating: 5,
    daysAgo: "12d ago",
    body: "First time I haven't dreaded the dentist. Front desk is incredible.",
    pinSide: "mr",
  },
  {
    id: "r6",
    source: "Google",
    sourceColor: "bg-brand-400",
    initials: "AT",
    avatarBg: "bg-brand-500",
    name: "Alex T.",
    rating: 5,
    daysAgo: "3w ago",
    body: "Found them on Google, booked through their site. Easiest healthcare moment ever.",
    pinSide: "br",
  },
];

const HERO_PORTRAIT =
  "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=1100&q=85";

export function Personas() {
  return (
    <section
      className="relative isolate overflow-hidden py-20 md:py-28 text-ink"
      style={{ background: "#faf9f7" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(67,69,75,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(67,69,75,0.08) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 95%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-[480px] w-[480px] rounded-full blur-3xl opacity-40 -z-[1]"
        style={{
          background: "radial-gradient(circle, rgba(255,82,28,0.25), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-40 -z-[1]"
        style={{
          background: "radial-gradient(circle, rgba(67,69,75,0.25), transparent 70%)",
        }}
      />

      <div className="container-page relative">
        {/* Header */}
        <div className="mx-auto max-w-6xl text-center">
          <span className="inline-block rounded-md bg-brand-200/80 px-2 py-0.5 font-mono text-[11.5px] font-semibold text-brand-700 underline underline-offset-4">
            Reputation as a growth channel
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-[64px] leading-[1.04] font-semibold tracking-[-0.028em] text-ink">
            <span className="block lg:whitespace-nowrap">Your Reviews Are Doing More Work</span>
            <span className="block lg:whitespace-nowrap">
              Than Your Ads. Treat Them{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#FF521C]">That Way.</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 h-3 -z-0 bg-accent-butter"
                  style={{ filter: "blur(0.5px)" }}
                />
              </span>
            </span>
          </h2>
          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-[15.5px] md:text-[16.5px] leading-[1.65] text-ink-soft">
            <p>
              Before a patient calls your office, they&rsquo;ve read your
              reviews. They&rsquo;ve compared your rating to the practice down
              the street. They&rsquo;ve looked at how recently patients left
              feedback and whether you responded professionally.{" "}
              <span className="font-semibold text-ink">
                Reviews aren&rsquo;t social proof — they&rsquo;re a primary
                conversion mechanism.
              </span>
            </p>
            <p>
              PRACPROS builds a reputation management system that actively
              generates new reviews from satisfied patients, responds to every
              review intelligently, and monitors the reputation signals that
              influence both patient trust and Google&rsquo;s local ranking
              algorithm.
            </p>
            <p className="font-medium text-ink">
              A strong review profile doesn&rsquo;t just look good.{" "}
              <span className="text-brand-600">
                It converts more of the traffic you&rsquo;re already getting
              </span>{" "}
              — making every other part of your marketing work harder.
            </p>
          </div>
        </div>

        {/* Collage stage */}
        <div className="relative mx-auto mt-14 h-[820px] w-full max-w-[1200px] md:h-[760px]">
          {/* Decorative mini grids — corners */}
          <DecorGrid className="absolute left-[4%] top-[10%]" />
          <DecorGrid className="absolute right-[4%] top-[10%]" />
          <DecorGrid className="absolute left-[10%] bottom-[10%]" />
          <DecorGrid className="absolute right-[10%] bottom-[14%]" />

          {/* Center hero photo + pixel cluster — BIGGER */}
          <div className="absolute left-1/2 top-1/2 h-[88%] w-[52%] max-w-[560px] -translate-x-1/2 -translate-y-1/2">
            <PixelCluster />
            <div className="absolute inset-0 overflow-hidden rounded-[8px] shadow-[0_40px_80px_-30px_rgba(10,10,10,0.45)]">
              <Image
                src={HERO_PORTRAIT}
                alt="Happy dental patient"
                fill
                sizes="(min-width: 1024px) 560px, 60vw"
                className="object-cover"
                style={{ objectPosition: "center top" }}
                unoptimized
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.55) 100%)",
                }}
              />
              {/* Bottom rating badge over the portrait */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <div className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/80">
                    Just rated
                  </div>
                  <div className="mt-0.5 inline-flex items-center gap-1.5 text-white">
                    <Stars rating={5} size={14} />
                    <span className="font-display text-[15px] font-semibold tracking-tight">
                      5.0
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wider text-ink shadow-card">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse" />
                  Verified
                </span>
              </div>
            </div>
          </div>

          {/* Big rating summary card (top center, overlapping portrait) */}
          <div className="absolute left-1/2 top-[1%] z-20 w-[420px] max-w-[88%] -translate-x-1/2">
            <div
              className="rounded-[18px] border border-border bg-white p-4 shadow-[0_30px_60px_-20px_rgba(10,10,10,0.25)] animate-float-soft"
              style={{ animationDuration: "8s" }}
            >
              <div className="flex items-center gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white shadow-card">
                  <GoogleMark />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-[34px] font-semibold leading-none tracking-[-0.02em] text-ink">
                      4.9
                    </span>
                    <Stars rating={4.9} size={16} />
                  </div>
                  <div className="mt-1 text-[12px] text-muted">
                    <span className="font-semibold text-ink">1,247 reviews</span> ·{" "}
                    <span className="font-semibold text-brand-600">+38 this week</span>
                  </div>
                </div>
              </div>
              {/* Rating distribution bars */}
              <div className="mt-3 space-y-1">
                {[
                  { label: "5", pct: 92 },
                  { label: "4", pct: 7 },
                  { label: "3", pct: 1 },
                ].map((r) => (
                  <div key={r.label} className="flex items-center gap-2 text-[11px]">
                    <span className="w-3 font-semibold text-ink-soft">{r.label}</span>
                    <svg width="10" height="10" viewBox="0 0 12 12" aria-hidden className="text-brand-400">
                      <path d="M6 1l1.5 3 3.5.5L8.5 7l.5 3.5L6 9 3 10.5 3.5 7 1 4.5 4.5 4 6 1z" fill="currentColor" />
                    </svg>
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink/10">
                      <div className="h-full rounded-full bg-brand-400" style={{ width: `${r.pct}%` }} />
                    </div>
                    <span className="w-8 text-right font-semibold text-ink-soft">{r.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Response-rate chip (bottom-center, overlapping portrait) */}
          <div className="absolute bottom-[2%] left-1/2 z-20 -translate-x-1/2">
            <div
              className="inline-flex items-center gap-2.5 rounded-full border border-border bg-white px-4 py-2.5 shadow-card animate-float-soft"
              style={{ animationDuration: "7s", animationDelay: "0.3s" }}
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-100 text-brand-700">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8L6.5 11.5L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div className="leading-tight">
                <div className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-muted">
                  Reply rate
                </div>
                <div className="font-display text-[15px] font-semibold tracking-tight text-ink">
                  100% · within 1h
                </div>
              </div>
            </div>
          </div>

          {/* Floating review excerpt cards around the portrait */}
          {reviews.map((r) => (
            <ReviewBubble key={r.id} review={r} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Stars ──────────────────────────────────────────────── */
function Stars({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <span className="inline-flex items-center gap-0.5 text-brand-400">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 12 12"
          aria-hidden
          style={{ opacity: rating >= i ? 1 : 0.25 }}
        >
          <path
            d="M6 1l1.5 3 3.5.5L8.5 7l.5 3.5L6 9 3 10.5 3.5 7 1 4.5 4.5 4 6 1z"
            fill="currentColor"
          />
        </svg>
      ))}
    </span>
  );
}

/* ── Google mark ────────────────────────────────────────── */
function GoogleMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 18 18" aria-hidden>
      <path d="M17.6 9.2c0-.7-.1-1.3-.2-2H9v3.8h4.8c-.2 1.1-.8 2-1.8 2.6v2.2h2.9c1.7-1.6 2.7-3.9 2.7-6.6z" fill="#43454B" />
      <path d="M9 18c2.4 0 4.5-.8 6-2.2l-2.9-2.2c-.8.5-1.8.9-3.1.9-2.4 0-4.4-1.6-5.1-3.8H.9v2.3C2.4 15.9 5.5 18 9 18z" fill="#43454B" />
      <path d="M3.9 10.7c-.2-.5-.3-1.1-.3-1.7s.1-1.2.3-1.7V5H.9C.3 6.2 0 7.6 0 9s.3 2.8.9 4l3-2.3z" fill="#43454B" />
      <path d="M9 3.6c1.3 0 2.5.5 3.5 1.4l2.6-2.6C13.5.9 11.4 0 9 0 5.5 0 2.4 2.1.9 5l3 2.3C4.6 5.2 6.6 3.6 9 3.6z" fill="#43454B" />
    </svg>
  );
}

/* ── Decorative purple-grid block ────────────────────────── */
function DecorGrid({ className = "" }: { className?: string }) {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" className={`hidden md:block ${className}`} aria-hidden>
      <g stroke="rgba(67,69,75,0.45)" strokeWidth="1.4">
        <path d="M6 6h60M6 30h60M6 54h60" />
        <path d="M6 6v60M30 6v60M54 6v60" />
      </g>
      <circle cx="6" cy="6" r="2.4" fill="rgba(67,69,75,0.65)" />
      <circle cx="66" cy="66" r="2.4" fill="rgba(67,69,75,0.65)" />
    </svg>
  );
}

/* ── Pixelated brand-purple block surrounding the portrait ── */
function PixelCluster() {
  const cells = [
    { l: -10, t: 10, s: 56, o: 0.85, shade: 600 },
    { l: -22, t: 28, s: 40, o: 0.55, shade: 300 },
    { l: -14, t: 56, s: 48, o: 0.85, shade: 500 },
    { l: -28, t: 70, s: 32, o: 0.45, shade: 200 },
    { l: -6, t: 84, s: 40, o: 0.75, shade: 400 },
    { l: 20, t: -8, s: 64, o: 0.9, shade: 600 },
    { l: 56, t: -12, s: 44, o: 0.75, shade: 500 },
    { l: 78, t: 4, s: 36, o: 0.55, shade: 300 },
    { l: 90, t: 22, s: 56, o: 0.85, shade: 600 },
    { l: 102, t: 44, s: 40, o: 0.55, shade: 300 },
    { l: 92, t: 66, s: 48, o: 0.75, shade: 500 },
    { l: 80, t: 88, s: 36, o: 0.65, shade: 400 },
    { l: 40, t: 96, s: 52, o: 0.85, shade: 600 },
    { l: 14, t: 96, s: 32, o: 0.55, shade: 300 },
  ];
  const colorByShade: Record<number, string> = {
    200: "rgba(200,189,239,0.85)",
    300: "rgba(165,150,227,0.85)",
    400: "rgba(67,69,75,0.85)",
    500: "rgba(67,69,75,0.85)",
    600: "rgba(74,55,168,0.9)",
  };
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {cells.map((c, i) => (
        <span
          key={i}
          className="absolute"
          style={{
            left: `${c.l}%`,
            top: `${c.t}%`,
            width: c.s,
            height: c.s,
            background: colorByShade[c.shade],
            opacity: c.o,
          }}
        />
      ))}
    </div>
  );
}

/* ── Floating review excerpt bubble ──────────────────────── */
function ReviewBubble({ review }: { review: ReviewCard }) {
  const positions: Record<ReviewCard["pinSide"], string> = {
    tl: "left-[2%] top-[18%]",
    tr: "right-[2%] top-[18%]",
    ml: "left-[1%] top-[44%]",
    mr: "right-[1%] top-[44%]",
    bl: "left-[6%] bottom-[18%]",
    br: "right-[6%] bottom-[18%]",
  };
  return (
    <div
      className={`absolute z-10 w-[260px] max-w-[40%] rounded-[14px] border border-border bg-white p-3.5 shadow-card animate-float-soft ${positions[review.pinSide]}`}
      style={{
        animationDuration: `${6 + (review.id.charCodeAt(1) % 4)}s`,
        animationDelay: `${(review.id.charCodeAt(1) % 5) * 0.2}s`,
      }}
    >
      {/* Header: avatar + name + days */}
      <div className="flex items-center gap-2.5">
        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${review.avatarBg} text-[11px] font-bold text-white`}
        >
          {review.initials}
        </span>
        <div className="flex-1 min-w-0">
          <div className="truncate text-[12.5px] font-semibold text-ink">
            {review.name}
          </div>
          <div className="flex items-center gap-1.5">
            <Stars rating={review.rating} size={10} />
            <span className="text-[10.5px] text-muted">{review.daysAgo}</span>
          </div>
        </div>
        <span className="grid h-5 w-5 place-items-center rounded-full bg-white shadow-card">
          <GoogleMark />
        </span>
      </div>
      {/* Body */}
      <p className="mt-2 text-[12.5px] leading-snug text-ink-soft">
        &ldquo;{review.body}&rdquo;
      </p>
    </div>
  );
}
