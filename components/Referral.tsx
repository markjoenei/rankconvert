import Image from "next/image";
import { Button } from "./ui/Button";
import { Reveal } from "./Reveal";

const stats = [
  { v: "−54%", l: "cost to acquire" },
  { v: "+3.2×", l: "higher conversion" },
  { v: "+38%", l: "more treatment acceptance" },
  { v: "+2.1y", l: "longer patient tenure" },
];

const referredPeople = [
  {
    name: "Marcus",
    role: "Emma's brother",
    pos: { left: "6%", top: "10%" },
    delay: "0s",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Lila",
    role: "Coworker",
    pos: { left: "82%", top: "6%" },
    delay: "0.6s",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Sam",
    role: "Neighbor",
    pos: { left: "2%", top: "62%" },
    delay: "1.2s",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Priya",
    role: "Yoga friend",
    pos: { left: "84%", top: "60%" },
    delay: "0.3s",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
  },
];

export function Referral() {
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
          background: "radial-gradient(circle, rgba(67,69,75,0.35), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-40 -z-[1]"
        style={{
          background: "radial-gradient(circle, rgba(255,82,28,0.25), transparent 70%)",
        }}
      />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        {/* Text */}
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-soft backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
            Referral system
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-[60px] leading-[1.04] font-semibold tracking-[-0.028em] text-ink">
            Your Happiest Patients Are Your{" "}
            <span className="relative inline-block">
              <span className="relative z-10" style={{ color: "#FF521C" }}>Most Underutilized</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 h-3 -z-0 bg-accent-butter/60"
                style={{ filter: "blur(0.5px)" }}
              />
            </span>
            <span className="block">Growth Channel.</span>
          </h2>
          <div className="mt-6 space-y-4 text-[16px] md:text-[17px] leading-[1.65] text-ink-soft">
            <p>
              A referred patient costs less to acquire, converts at a higher
              rate, accepts more treatment, stays longer, and refers more
              people themselves. Word of mouth has always been
              dentistry&rsquo;s highest-value growth channel — it just used to
              be entirely passive.
            </p>
            <p>
              PRACPROS builds an active referral engine: unique referral
              links, automated reward systems, tracking dashboards, and
              follow-up sequences that turn the goodwill your patients
              already feel into a measurable, repeatable patient acquisition
              channel.
            </p>
            <p className="font-semibold text-ink">
              The referrals were always there.{" "}
              <span className="text-brand-600">We give them a system to travel through.</span>
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href="#growth-audit"
              variant="primary"
              size="md"
              trailingIcon
            >
              See Referral Engine
            </Button>
          </div>
        </Reveal>

        {/* Visual: humanized referral network + stats */}
        <Reveal delay={120} className="relative mx-auto w-full max-w-[640px]">
          <div className="relative h-[520px] w-full md:h-[560px]">
            {/* warm radial glow */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-[44px] blur-3xl opacity-60"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 50%, rgba(255,82,28,0.28), transparent 70%)",
              }}
            />

            {/* connecting lines from Emma to each referred person */}
            <svg
              aria-hidden
              viewBox="0 0 400 400"
              className="absolute inset-0 h-full w-full"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="referralLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(255,82,28,0.7)" />
                  <stop offset="100%" stopColor="rgba(67,69,75,0.2)" />
                </linearGradient>
              </defs>
              <g stroke="url(#referralLine)" strokeWidth="1.6" strokeDasharray="3 5">
                <path d="M200 200 Q 130 130 60 70">
                  <animate attributeName="stroke-dashoffset" from="0" to="-32" dur="3s" repeatCount="indefinite" />
                </path>
                <path d="M200 200 Q 280 130 350 60">
                  <animate attributeName="stroke-dashoffset" from="0" to="-32" dur="3.4s" repeatCount="indefinite" />
                </path>
                <path d="M200 200 Q 130 280 50 320">
                  <animate attributeName="stroke-dashoffset" from="0" to="-32" dur="3.8s" repeatCount="indefinite" />
                </path>
                <path d="M200 200 Q 290 280 360 320">
                  <animate attributeName="stroke-dashoffset" from="0" to="-32" dur="3.2s" repeatCount="indefinite" />
                </path>
              </g>
            </svg>

            {/* Central — Emma, the happy patient */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="relative">
                {/* warm halo */}
                <span
                  aria-hidden
                  className="absolute -inset-4 rounded-full blur-2xl opacity-70"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(255,82,28,0.45), transparent 70%)",
                  }}
                />
                {/* pulse ring */}
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full"
                  style={{
                    boxShadow: "0 0 0 8px rgba(255,82,28,0.18)",
                  }}
                />
                {/* avatar */}
                <div className="relative h-[148px] w-[148px] overflow-hidden rounded-full border-[6px] border-white shadow-[0_30px_60px_-20px_rgba(67,69,75,0.45)] md:h-[160px] md:w-[160px]">
                  <Image
                    src="https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=500&q=85"
                    alt="Emma — happy patient"
                    fill
                    sizes="160px"
                    className="object-cover"
                    style={{ objectPosition: "center 20%" }}
                    unoptimized
                  />
                </div>
                {/* badge */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11.5px] font-semibold text-ink shadow-card whitespace-nowrap">
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-brand-500 text-white">
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden>
                      <path d="M2 5l2 2 4-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  Emma · 5★ patient
                </div>
              </div>

              {/* SMS bubble — humanizing detail */}
              <div className="mx-auto mt-12 max-w-[280px] rounded-2xl rounded-bl-md border border-border bg-white px-4 py-3 text-left shadow-card animate-float-soft" style={{ animationDuration: "8s" }}>
                <div className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-muted">
                  Emma · just now
                </div>
                <p className="mt-1 text-[13px] leading-snug text-ink">
                  &ldquo;Honestly the best dentist I&rsquo;ve ever been to. Here&rsquo;s my link if you want to try them →
                  <span className="ml-1 font-semibold text-brand-600">brighthill.dental/r/emma</span>&rdquo;
                </p>
              </div>
            </div>

            {/* Floating referred-person avatars (humanized) */}
            {referredPeople.map((p, i) => (
              <div
                key={p.name}
                className="absolute flex flex-col items-center animate-float-soft"
                style={{
                  left: p.pos.left,
                  top: p.pos.top,
                  animationDuration: `${7 + (i % 2)}s`,
                  animationDelay: p.delay,
                }}
              >
                <div className="relative h-[80px] w-[80px] overflow-hidden rounded-full border-4 border-white shadow-[0_18px_30px_-12px_rgba(67,69,75,0.45)] md:h-[88px] md:w-[88px]">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    sizes="88px"
                    className="object-cover"
                    style={{ objectPosition: "center 25%" }}
                    unoptimized
                  />
                </div>
                <div className="mt-2 rounded-full border border-border bg-white px-2.5 py-1 text-[11px] font-semibold text-ink shadow-card">
                  {p.name}
                  <span className="ml-1 font-normal text-muted">· {p.role}</span>
                </div>
              </div>
            ))}

            {/* Reward card — bigger, warmer */}
            <div
              className="absolute right-2 top-[45%] inline-flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 shadow-card animate-float-soft"
              style={{ animationDuration: "9s", animationDelay: "0.4s" }}
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                  <path d="M3 8h14v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M2 5h16v3H2zM10 5v13M10 5c-1-2-3-3-4-2.5S5 5.5 7 6h3zM10 5c1-2 3-3 4-2.5S15 5.5 13 6h-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </span>
              <div className="leading-tight">
                <div className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-muted">
                  Auto-reward sent
                </div>
                <div className="font-display text-[18px] font-semibold tracking-tight text-ink">
                  $50 · Emma
                </div>
              </div>
            </div>
          </div>

          {/* Bigger, more breathable stat tiles */}
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border border-border bg-white px-4 py-5 text-center shadow-card transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div className="font-display text-[30px] font-semibold tracking-[-0.02em] text-brand-600 md:text-[34px]">
                  {s.v}
                </div>
                <div className="mt-1.5 text-[11.5px] font-medium uppercase tracking-[0.12em] text-ink-soft">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
