import { Button } from "./ui/Button";

type Pillar = {
  id: string;
  tag: string;
  title: string;
  body: string;
  accent: string;
  accentText: string;
  badge: React.ReactNode;
  visual: React.ReactNode;
};

const pillars: Pillar[] = [
  {
    id: "seo",
    tag: "Traditional Local SEO",
    title: "Rank for every service you provide.",
    body: "Google rankings, technical SEO, authority content, structured data, and backlink strategies that put your practice at the top of search results for every service you provide.",
    accent: "bg-accent-mint",
    accentText: "text-brand-700",
    badge: <GoogleMark />,
    visual: <SeoVisual />,
  },
  {
    id: "maps",
    tag: "Google Maps Optimization",
    title: "Own the local 3-pack.",
    body: "Local pack rankings, Google Business Profile management, citation consistency, and the review signals that determine whether Google shows your practice or your competitor's in the map results.",
    accent: "bg-accent-blush",
    accentText: "text-brand-600",
    badge: <PinMark />,
    visual: <MapsVisual />,
  },
  {
    id: "aeo",
    tag: "AEO — Answer Engine Optimization",
    title: "Appear above the rankings.",
    body: "Your practice optimized to appear in featured snippets, knowledge panels, and AI-generated answer results — the positions that now appear above traditional rankings on many searches.",
    accent: "bg-accent-sky",
    accentText: "text-brand-700",
    badge: <SparkleMark />,
    visual: <AeoVisual />,
  },
  {
    id: "geo",
    tag: "GEO — Generative Engine Optimization",
    title: "Get recommended by the AIs your patients ask.",
    body: "As patients increasingly use AI tools like ChatGPT, Gemini, and Perplexity to find healthcare providers, GEO ensures your practice appears in those recommendations. This is the frontier of dental search visibility — and we're building for it now.",
    accent: "bg-accent-lavender",
    accentText: "text-brand-700",
    badge: <NewBadge />,
    visual: <GeoVisual />,
  },
];

export function Trust() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Soft brand grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(67,69,75,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(67,69,75,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 95%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[520px] w-[820px] rounded-full blur-3xl opacity-50 -z-[1]"
        style={{
          background:
            "radial-gradient(circle, rgba(67,69,75,0.35), transparent 70%)",
        }}
      />

      <div className="container-page relative">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-soft backdrop-blur shadow-card">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
            Visibility
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-[64px] leading-[1.04] font-semibold tracking-[-0.028em] text-ink">
            Search Has{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#FF521C]">Changed.</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 h-3 -z-0 bg-accent-butter"
                style={{ filter: "blur(0.5px)" }}
              />
            </span>
            <br />
            Your Visibility Strategy Should Too.
          </h2>
          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-[16px] md:text-[17px] leading-[1.65] text-ink-soft">
            <p>
              Five years ago, dental SEO meant ranking for &ldquo;dentist near
              me&rdquo; on Google. That still matters — but it&rsquo;s no
              longer the whole picture. Today&rsquo;s patients find practices
              through Google Maps, AI-generated answer boxes, voice assistants,
              social platforms, and search engines that didn&rsquo;t exist
              three years ago.
            </p>
            <p className="font-semibold text-ink">
              PRACPROS builds visibility across{" "}
              <span className="text-brand-600">all of it.</span>
            </p>
          </div>
        </div>

        {/* Pillar cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {pillars.map((p, i) => (
            <article
              key={p.id}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              {/* Header strip with visual */}
              <div className={`relative overflow-hidden ${p.accent}`}>
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-50"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(10,10,10,0.08) 1px, transparent 1px)",
                    backgroundSize: "18px 18px",
                  }}
                />
                <div className="relative flex items-center justify-between px-6 pt-5">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/65">
                    0{i + 1}
                  </span>
                  <span className={`grid h-9 w-9 place-items-center rounded-xl bg-white shadow-card ${p.accentText}`}>
                    {p.badge}
                  </span>
                </div>
                <div className="relative px-6 pb-6 pt-3">{p.visual}</div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                    {p.tag}
                  </div>
                  <h3 className="mt-2 font-display text-[22px] md:text-[24px] font-semibold tracking-tight text-ink leading-[1.2]">
                    {p.title}
                  </h3>
                </div>
                <p className="text-[14.5px] leading-[1.6] text-ink-soft">
                  {p.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <Button href="#growth-audit" variant="primary" size="lg" trailingIcon>
            Get a Free Visibility Audit
          </Button>
          <Button href="#strategy-call" variant="secondary" size="lg">
            Schedule a Strategy Call
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ── Badge marks ───────────────────────────────────────────── */

function GoogleMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
      <path d="M17.6 9.2c0-.7-.1-1.3-.2-2H9v3.8h4.8c-.2 1.1-.8 2-1.8 2.6v2.2h2.9c1.7-1.6 2.7-3.9 2.7-6.6z" fill="#43454B" />
      <path d="M9 18c2.4 0 4.5-.8 6-2.2l-2.9-2.2c-.8.5-1.8.9-3.1.9-2.4 0-4.4-1.6-5.1-3.8H.9v2.3C2.4 15.9 5.5 18 9 18z" fill="#43454B" />
      <path d="M3.9 10.7c-.2-.5-.3-1.1-.3-1.7s.1-1.2.3-1.7V5H.9C.3 6.2 0 7.6 0 9s.3 2.8.9 4l3-2.3z" fill="#43454B" />
      <path d="M9 3.6c1.3 0 2.5.5 3.5 1.4l2.6-2.6C13.5.9 11.4 0 9 0 5.5 0 2.4 2.1.9 5l3 2.3C4.6 5.2 6.6 3.6 9 3.6z" fill="#43454B" />
    </svg>
  );
}

function PinMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
      <path d="M9 1c-3 0-5.5 2.3-5.5 5.2 0 4 5.5 10.3 5.5 10.3s5.5-6.3 5.5-10.3C14.5 3.3 12 1 9 1z" fill="currentColor" />
      <circle cx="9" cy="6.3" r="2.2" fill="white" />
    </svg>
  );
}

function SparkleMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
      <path d="M9 1.5l1.5 4 4 1.5-4 1.5L9 12.5l-1.5-4-4-1.5 4-1.5L9 1.5z" fill="currentColor" />
      <circle cx="14.5" cy="14" r="1.2" fill="currentColor" />
      <circle cx="3" cy="14" r="1" fill="currentColor" />
    </svg>
  );
}

function NewBadge() {
  return (
    <span className="font-display text-[10px] font-bold tracking-[0.06em]" style={{ color: "#FF521C" }}>
      NEW
    </span>
  );
}

/* ── Per-pillar visuals ────────────────────────────────────── */

function SeoVisual() {
  // Mock SERP listing
  return (
    <div className="space-y-1.5 rounded-xl bg-white/85 p-3 shadow-card">
      <div className="flex items-center gap-1.5">
        <span className="rounded bg-brand-100 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-brand-700">
          Ad
        </span>
        <div className="h-1.5 w-20 rounded-full bg-ink/15" />
      </div>
      <div className="rounded-md border border-brand-300 bg-brand-50/60 p-2">
        <div className="flex items-center justify-between">
          <div className="text-[10.5px] font-semibold text-brand-700">
            yourpractice.com
          </div>
          <span className="font-mono text-[9px] font-bold text-brand-700">#1</span>
        </div>
        <div className="mt-1 h-1 w-3/4 rounded-full bg-brand-200" />
        <div className="mt-1 h-1 w-2/3 rounded-full bg-brand-200" />
      </div>
      <div className="space-y-1 p-1.5 opacity-60">
        <div className="h-1 w-1/2 rounded-full bg-ink/15" />
        <div className="h-1 w-3/5 rounded-full bg-ink/10" />
      </div>
    </div>
  );
}

function MapsVisual() {
  // Mock map with 3 pins
  return (
    <div className="relative h-[110px] overflow-hidden rounded-xl bg-white/85 shadow-card">
      {/* fake map roads */}
      <svg viewBox="0 0 200 120" className="absolute inset-0 h-full w-full" preserveAspectRatio="none" aria-hidden>
        <rect width="200" height="120" fill="#faf9f7" />
        <path d="M-10 30 L 220 60" stroke="rgba(10,10,10,0.08)" strokeWidth="14" />
        <path d="M-10 80 L 220 50" stroke="rgba(10,10,10,0.08)" strokeWidth="10" />
        <path d="M60 -10 L 90 130" stroke="rgba(10,10,10,0.08)" strokeWidth="8" />
        <path d="M140 -10 L 130 130" stroke="rgba(10,10,10,0.08)" strokeWidth="8" />
      </svg>
      {/* pins */}
      <div className="absolute left-[20%] top-[28%] grid h-6 w-6 -translate-x-1/2 place-items-center rounded-full bg-brand-500 text-[10px] font-bold text-white shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
        1
      </div>
      <div className="absolute left-[58%] top-[20%] grid h-6 w-6 -translate-x-1/2 place-items-center rounded-full bg-brand-500 text-[10px] font-bold text-white shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
        2
      </div>
      <div className="absolute left-[75%] top-[58%] grid h-6 w-6 -translate-x-1/2 place-items-center rounded-full bg-brand-500 text-[10px] font-bold text-white shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
        3
      </div>
      <span className="absolute bottom-2 left-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-ink shadow-card">
        Local 3-pack
      </span>
    </div>
  );
}

function AeoVisual() {
  // Mock answer box
  return (
    <div className="rounded-xl border border-brand-200 bg-white/90 p-3 shadow-card">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1 rounded-full bg-brand-100 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-brand-700">
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden>
            <path d="M4.5 1l1 2 2 .5-1.5 1.3.5 2L4.5 6 2.5 6.8l.5-2L1.5 3.5l2-.5L4.5 1z" fill="currentColor" />
          </svg>
          Featured Answer
        </span>
        <span className="font-mono text-[9.5px] font-bold text-brand-700">Top</span>
      </div>
      <div className="mt-2 space-y-1">
        <div className="h-1.5 w-3/4 rounded-full bg-brand-200" />
        <div className="h-1.5 w-2/3 rounded-full bg-brand-200" />
        <div className="h-1.5 w-1/2 rounded-full bg-brand-100" />
      </div>
      <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold text-brand-700">
        yourpractice.com
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden>
          <path d="M2 4.5h5m0 0L4.5 2m2.5 2.5L4.5 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

function GeoVisual() {
  // AI assistants list
  const assistants = [
    { name: "ChatGPT", color: "bg-brand-500" },
    { name: "Gemini", color: "bg-brand-500" },
    { name: "Perplexity", color: "bg-brand-500" },
  ];
  return (
    <div className="rounded-xl bg-white/90 p-3 shadow-card">
      <div className="text-[10.5px] font-semibold uppercase tracking-wider text-muted">
        Recommended by
      </div>
      <div className="mt-2 space-y-1.5">
        {assistants.map((a) => (
          <div
            key={a.name}
            className="flex items-center justify-between rounded-md bg-brand-50/60 px-2 py-1.5"
          >
            <div className="flex items-center gap-2">
              <span className={`h-2.5 w-2.5 rounded-full ${a.color}`} />
              <span className="text-[11.5px] font-semibold text-ink">{a.name}</span>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-white px-1.5 py-0.5 text-[9.5px] font-bold text-brand-700">
              <svg width="8" height="8" viewBox="0 0 9 9" fill="none" aria-hidden>
                <path d="M2 4.5l1.5 1.5L7 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Cited
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
