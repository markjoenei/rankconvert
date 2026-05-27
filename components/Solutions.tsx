"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/Button";

type Capability = {
  id: string;
  label: string;
  accent: string;
  accentHex: string;
  iconPath: React.ReactNode;
  headline: string;
  description: string;
  bullets: string[];
  metrics: { label: string; value: string; emphasized?: boolean }[];
  agentMessage: string;
  sparkline: number[];
  image: string;
  imageAlt: string;
  imagePosition?: string;
  quote: { text: string; author: string; role: string };
};

const personas: Capability[] = [
  {
    id: "visibility",
    label: "Visibility",
    accent: "bg-accent-mint",
    accentHex: "#FF916A",
    iconPath: (
      <>
        <circle cx="9" cy="9" r="6.4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2.6 9H15.4 M9 2.6C10.8 4.7 11.8 6.8 11.8 9s-1 4.3-2.8 6.4M9 2.6C7.2 4.7 6.2 6.8 6.2 9s1 4.3 2.8 6.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </>
    ),
    headline: "Your practice appears first — everywhere patients are searching.",
    description:
      "On Google Search, Google Maps, AI-generated results, and every platform where patients are actively looking for a dentist.",
    bullets: [
      "Top-of-page Google Search placement",
      "Google Maps 3-pack dominance",
      "AI / AEO answer engine visibility",
    ],
    metrics: [
      { label: "Search rank", value: "#1–3", emphasized: true },
      { label: "Map pack", value: "Top 3" },
      { label: "AI mentions", value: "+412%" },
      { label: "Impressions", value: "38.2k", emphasized: true },
    ],
    agentMessage:
      "Found 4 new keywords this market is searching for — pulling up your draft.",
    sparkline: [12, 18, 22, 28, 32, 30, 38, 42, 48, 55, 62, 68],
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Modern dental practice with new patients arriving",
    imagePosition: "center 35%",
    quote: {
      text: "We went from invisible to the #1 dentist in our zip code in six months.",
      author: "Dr. Patel",
      role: "Riverbend Dental Group",
    },
  },
  {
    id: "speed-to-lead",
    label: "Speed-to-Lead",
    accent: "bg-accent-blush",
    accentHex: "#FF7142",
    iconPath: (
      <>
        <path d="M10 2L4 11h4l-1 5 6-9h-4l1-5z" fill="currentColor" />
      </>
    ),
    headline: "Every inquiry gets an intelligent reply in under 60 seconds.",
    description:
      "Day or night, whether your front desk is available or not — personalized, automated, never missed.",
    bullets: [
      "Sub-60-second AI response",
      "24/7 coverage across calls, text & chat",
      "Personalized replies, not boilerplate",
    ],
    metrics: [
      { label: "Avg response", value: "47s", emphasized: true },
      { label: "Coverage", value: "24 / 7" },
      { label: "Missed", value: "0" },
      { label: "Convert rate", value: "62%", emphasized: true },
    ],
    agentMessage:
      "23 inquiries came in overnight — 19 booked themselves before you opened.",
    sparkline: [80, 75, 70, 60, 55, 50, 48, 47, 47, 46, 47, 47],
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Patient receiving a same-day reply from the practice",
    imagePosition: "center 28%",
    quote: {
      text: "Patients are booking themselves at 11pm. We just confirm in the morning.",
      author: "Dr. Lee",
      role: "Brighthill Family Dental",
    },
  },
  {
    id: "conversion",
    label: "Conversion",
    accent: "bg-accent-butter",
    accentHex: "#FF916A",
    iconPath: (
      <>
        <path d="M2 3h14L11 10v6l-4-2v-4L2 3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
      </>
    ),
    headline: "Clicks don't pay production. Booked chairs do.",
    description:
      "We engineer the landing pages, follow-up sequences, and appointment funnels that turn interest into a booked appointment.",
    bullets: [
      "High-intent landing pages",
      "Multi-touch follow-up sequences",
      "Smart booking funnels",
    ],
    metrics: [
      { label: "Booked rate", value: "84%", emphasized: true },
      { label: "Drop-off", value: "−61%" },
      { label: "Cost / booked", value: "$48" },
      { label: "Funnel time", value: "3m 12s", emphasized: true },
    ],
    agentMessage:
      "Ran an A/B on two landing pages this week — the warmer one is winning +18%.",
    sparkline: [40, 48, 52, 58, 60, 65, 70, 72, 78, 80, 82, 84],
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Patient confidently booking an appointment",
    imagePosition: "center 25%",
    quote: {
      text: "Our landing page closes more than our front desk used to.",
      author: "Dr. Cole",
      role: "Cedar & Pine DSO",
    },
  },
  {
    id: "reputation",
    label: "Reputation",
    accent: "bg-accent-sky",
    accentHex: "#43454B",
    iconPath: (
      <>
        <path d="M9 1l2.2 5L17 6.5l-4.2 3.7 1.3 5.7L9 13l-5.1 2.9 1.3-5.7L1 6.5 6.8 6 9 1z" fill="currentColor" />
      </>
    ),
    headline: "An always-on reputation engine.",
    description:
      "Reviews generated, responded to, and amplified across the signals that influence both patients and Google.",
    bullets: [
      "Automated 5★ review requests",
      "AI-drafted, human-tone responses",
      "Sentiment & trend monitoring",
    ],
    metrics: [
      { label: "Rating", value: "4.9★", emphasized: true },
      { label: "Reviews", value: "1,247" },
      { label: "This week", value: "+38" },
      { label: "Response time", value: "< 1h", emphasized: true },
    ],
    agentMessage:
      "Drafted 12 review responses for your read-through. Took me ~20 minutes.",
    sparkline: [4.4, 4.5, 4.5, 4.6, 4.6, 4.7, 4.7, 4.8, 4.8, 4.9, 4.9, 4.9].map(
      (v) => (v - 4) * 100,
    ),
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Patient leaving a glowing review",
    imagePosition: "center 25%",
    quote: {
      text: "We went from 4.3 to 4.9 in a season. Bookings followed.",
      author: "Dr. Mills",
      role: "Magnolia Orthodontics",
    },
  },
  {
    id: "retention",
    label: "Retention & Referral",
    accent: "bg-accent-lavender",
    accentHex: "#5a5d65",
    iconPath: (
      <>
        <path d="M9 16s-6-3.5-6-8.5C3 4.5 5.5 2.5 9 5c3.5-2.5 6-.5 6 2.5 0 5-6 8.5-6 8.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
      </>
    ),
    headline: "Your existing patients are your most powerful growth channel.",
    description:
      "Automated recall, reactivation, and referral systems that turn a one-time visit into a lifetime of production.",
    bullets: [
      "Smart recall · nightly outreach",
      "Dormant-patient reactivation",
      "Referral rewards & tracking",
    ],
    metrics: [
      { label: "Recall rate", value: "92%", emphasized: true },
      { label: "Reactivated", value: "186" },
      { label: "Referrals", value: "+54 / mo" },
      { label: "LTV lift", value: "+31%", emphasized: true },
    ],
    agentMessage:
      "Reached out to 186 patients we hadn't heard from in a while — 47 already rebooked.",
    sparkline: [55, 60, 65, 68, 72, 75, 78, 82, 84, 86, 90, 92],
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Loyal patients and their families at the practice",
    imagePosition: "center 35%",
    quote: {
      text: "Dormant patients keep coming back. Their friends come with them.",
      author: "Dr. Reyes",
      role: "Pacific Family Dental",
    },
  },
  {
    id: "dashboard",
    label: "Dashboard",
    accent: "bg-brand-100",
    accentHex: "#43454B",
    iconPath: (
      <>
        <path d="M2 13L6 7L9 10L14 3 M10.5 3H14V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </>
    ),
    headline: "See exactly what your marketing is producing.",
    description:
      "Every lead, call, chat, form submission, and campaign result tracked in real time — so you always know exactly what your marketing is producing.",
    bullets: [
      "Live source-to-chair attribution",
      "Real-time ROI by channel",
      "No agency-speak — just dollars",
    ],
    metrics: [
      { label: "Pipeline", value: "+38%", emphasized: true },
      { label: "ROAS", value: "6.4×" },
      { label: "New patients", value: "126" },
      { label: "Booked / web", value: "84%", emphasized: true },
    ],
    agentMessage:
      "Just refreshed your view — 4 channels tracked, latest 12 seconds ago.",
    sparkline: [20, 25, 35, 30, 42, 50, 48, 58, 65, 70, 78, 88],
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Practice owner reviewing real-time performance",
    imagePosition: "center 25%",
    quote: {
      text: "On Monday morning I know exactly what Friday produced.",
      author: "Dr. Lee",
      role: "Brighthill Family Dental",
    },
  },
];

export function Solutions() {
  const [active, setActive] = useState(personas[0].id);
  const current = personas.find((p) => p.id === active) ?? personas[0];
  const activeIndex = personas.findIndex((p) => p.id === active);

  return (
    <section
      id="solutions"
      className="relative isolate overflow-hidden py-16 md:py-24 text-ink"
      style={{ background: "#faf9f7" }}
    >
      {/* Grid pattern overlay */}
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
      {/* Glow accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-[480px] w-[480px] rounded-full blur-3xl opacity-50 -z-[1]"
        style={{
          background:
            "radial-gradient(circle, rgba(67,69,75,0.35), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-45 -z-[1]"
        style={{
          background:
            "radial-gradient(circle, rgba(67,69,75,0.3), transparent 70%)",
        }}
      />

      <div className="container-page relative">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          {/* LEFT column — sticky header */}
          <div className="lg:sticky lg:top-32">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-soft backdrop-blur shadow-card">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
              Built for every seat in the practice
            </span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-[56px] leading-[1.04] font-semibold tracking-[-0.028em] text-ink">
              One{" "}
              <span className="relative inline-block">
                <span className="relative z-10" style={{ color: "#FF521C" }}>System</span>
              </span>
              . Every Patient Touchpoint.{" "}
              <span className="block">Nothing Disconnected.</span>
            </h2>
            <div className="mt-6 space-y-4 text-[16px] md:text-[17px] leading-[1.6] text-ink-soft">
              <p className="font-semibold text-ink text-[18px] md:text-[19px]">
                Most agencies sell you a service.{" "}
                <span className="text-brand-600">PRACPROS builds you a system.</span>
              </p>
              <p>
                There&rsquo;s a fundamental difference between hiring an agency
                to run your ads and building a connected growth infrastructure
                that spans every moment in a patient&rsquo;s decision journey
                — from the first Google search to the booked appointment to the
                five-star review they leave afterward.
              </p>
              <p className="font-medium text-ink-soft">
                Six capabilities. One operating engine.
              </p>
            </div>
          </div>

          {/* RIGHT column — tabs + capability card */}
          <div>
        {/* Connected step indicator — tabs with icons + numbers */}
        <div
          role="tablist"
          aria-label="Capabilities"
          className="relative"
        >
          {/* Connecting line behind the tabs */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-ink/10"
          />
          <div
            aria-hidden
            className="absolute left-0 top-1/2 -translate-y-1/2 h-px transition-all duration-500"
            style={{
              width: `${((activeIndex + 0.5) / personas.length) * 100}%`,
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,82,28,0.7) 100%)",
            }}
          />

          <div className="relative flex flex-wrap items-center justify-center gap-2">
            {personas.map((p, i) => {
              const selected = p.id === active;
              return (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(p.id)}
                  className={`group inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[13px] font-medium tracking-tight transition-all ${
                    selected
                      ? "border-ink bg-ink text-white shadow-card"
                      : "border-border bg-white/80 text-ink-soft backdrop-blur hover:border-ink/30 hover:bg-white"
                  }`}
                >
                  <span
                    className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-[10px] font-bold transition-all ${
                      selected
                        ? "bg-white text-ink"
                        : "bg-ink/10 text-ink-soft group-hover:bg-ink/15"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 18 18"
                    aria-hidden
                    className={selected ? "" : "opacity-80"}
                    style={{ color: selected ? p.accentHex : "currentColor" }}
                  >
                    {p.iconPath}
                  </svg>
                  <span>{p.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Capability card */}
        <div className="relative mt-10">
          <div
            aria-hidden
            className="absolute inset-x-0 -top-6 -z-10 mx-auto h-40 max-w-3xl rounded-full opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, rgba(67,69,75,0.18), rgba(67,69,75,0) 70%)",
            }}
          />
          <div
            key={current.id}
            className="grid items-stretch gap-5 rounded-3xl border border-border bg-white p-5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.45)] md:grid-cols-2 md:p-8 animate-fade-up"
          >
            {/* LEFT */}
            <div className="flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-center gap-2.5">
                  <span
                    className="grid h-9 w-9 place-items-center rounded-xl"
                    style={{ background: current.accentHex + "30", color: current.accentHex }}
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
                      {current.iconPath}
                    </svg>
                  </span>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                    {String(activeIndex + 1).padStart(2, "0")} / {String(personas.length).padStart(2, "0")}
                  </span>
                  <span className={`inline-flex h-7 items-center rounded-full px-3 text-[12px] font-semibold tracking-tight text-ink ${current.accent}`}>
                    {current.label}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl md:text-[28px] font-semibold tracking-tight text-ink leading-[1.18]">
                  {current.headline}
                </h3>
                <p className="mt-4 text-[15.5px] leading-[1.6] text-muted">
                  {current.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {current.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[15px] text-ink">
                      <span
                        className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full"
                        style={{ background: current.accentHex + "25", color: current.accentHex }}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                          <path d="M2.5 6l2.5 2.5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href={`#${current.id}`} variant="primary" size="md" trailingIcon>
                  Explore {current.label}
                </Button>
                <Button href="#demo" variant="ghost" size="md">
                  Talk to sales
                </Button>
              </div>
            </div>

            {/* RIGHT — big image + quote (humanized) */}
            <div className="relative overflow-hidden rounded-2xl border border-border bg-white">
              <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[3/4]">
                <Image
                  key={current.id}
                  src={current.image}
                  alt={current.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 520px, 60vw"
                  className="object-cover transition-transform duration-700 ease-out scale-[1.05] group-hover:scale-[1.08] animate-fade-up"
                  style={{ objectPosition: current.imagePosition ?? "center" }}
                  unoptimized
                />
                {/* Bottom gradient for legibility */}
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(67,69,75,0) 45%, rgba(67,69,75,0.78) 100%)",
                  }}
                />
                {/* Top-right metric */}
                {current.metrics[0] ? (
                  <div
                    key={`badge-${current.id}`}
                    className="absolute right-4 top-4 rounded-xl border border-white/30 bg-white/90 px-3 py-2 shadow-card backdrop-blur animate-chip-pop"
                  >
                    <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                      {current.metrics[0].label}
                    </div>
                    <div className="font-display text-[20px] font-semibold leading-none tracking-[-0.02em] text-ink">
                      {current.metrics[0].value}
                    </div>
                  </div>
                ) : null}
                {/* Bottom quote */}
                <div
                  key={`quote-${current.id}`}
                  className="absolute inset-x-5 bottom-5 text-white animate-feed-in"
                >
                  <p className="font-display text-[17px] md:text-[19px] leading-snug tracking-tight">
                    &ldquo;{current.quote.text}&rdquo;
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-[12.5px]">
                    <span className="font-semibold">{current.quote.author}</span>
                    <span aria-hidden className="h-1 w-1 rounded-full bg-white/60" />
                    <span className="text-white/85">{current.quote.role}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PersonaTile({
  tone,
  label,
  value,
}: {
  tone: string;
  label: string;
  value: string;
}) {
  return (
    <div className={`rounded-xl border border-border ${tone} p-3`}>
      <div className="text-[11px] uppercase tracking-[0.14em] text-ink/60">
        {label}
      </div>
      <div className="mt-1 font-display text-xl font-semibold tracking-tight text-ink">
        {value}
      </div>
    </div>
  );
}

function Sparkline({ points, color }: { points: number[]; color: string }) {
  const w = 280;
  const h = 56;
  const pad = 4;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = Math.max(1, max - min);
  const step = (w - pad * 2) / (points.length - 1);
  const coords = points.map((v, i) => {
    const x = pad + i * step;
    const y = h - pad - ((v - min) / range) * (h - pad * 2);
    return { x, y };
  });
  const path = coords
    .map((c, i) => (i === 0 ? `M ${c.x} ${c.y}` : `L ${c.x} ${c.y}`))
    .join(" ");
  const area =
    path +
    ` L ${coords[coords.length - 1].x} ${h - pad} L ${coords[0].x} ${h - pad} Z`;
  const last = coords[coords.length - 1];
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      className="block h-12 w-full"
      aria-hidden
    >
      <defs>
        <linearGradient id={`spark-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#spark-${color})`} />
      <path d={path} stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={last.x} cy={last.y} r="3" fill={color} />
      <circle cx={last.x} cy={last.y} r="6" fill={color} fillOpacity="0.25" />
    </svg>
  );
}
