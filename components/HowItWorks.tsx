import Image from "next/image";
import { Button } from "./ui/Button";
import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Market & Growth Analysis",
    body: "We map your market, competitors, visibility gaps, and highest-value patient acquisition opportunities before we build anything.",
    tag: "Discovery",
    tone: "bg-accent-mint",
    accentHex: "#FF521C",
    person: "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=160&q=80",
    person2: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=160&q=80",
    leadName: "Sarah · Strategist",
    duration: "2 weeks",
  },
  {
    n: "02",
    title: "Build Your Growth Infrastructure",
    body: "Website, campaigns, automation, lead engagement, tracking, and reputation systems — launched as one connected engine, not five separate projects.",
    tag: "Build",
    tone: "bg-accent-blush",
    accentHex: "#FF7142",
    person: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
    person2: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
    leadName: "Maya · Lead Engineer",
    duration: "3–4 weeks",
  },
  {
    n: "03",
    title: "Optimize & Scale",
    body: "Continuous improvement of rankings, conversion rates, lead quality, and ROI — informed by the data your dashboard generates every day.",
    tag: "Operate",
    tone: "bg-accent-sky",
    accentHex: "#43454B",
    person: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=160&q=80",
    person2: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=160&q=80",
    leadName: "Alex · Growth Ops",
    duration: "ongoing",
  },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: "#faf9f7" }}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(67,69,75,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(67,69,75,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 95%)",
        }}
      />

      <div className="container-page relative">
        {/* Header */}
        <Reveal className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-soft backdrop-blur shadow-card">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
            How it works
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-[60px] leading-[1.04] font-semibold tracking-[-0.028em] text-ink">
            Three Steps to a{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#FF521C]">Growth System</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 h-3 -z-0 bg-accent-butter"
                style={{ filter: "blur(0.5px)" }}
              />
            </span>
            <span className="block">That Runs Without You.</span>
          </h2>
        </Reveal>

        {/* Steps */}
        <div className="relative mt-14">
          {/* connector line */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-[88px] hidden md:block"
          >
            <svg viewBox="0 0 1200 4" className="h-1 w-full" preserveAspectRatio="none">
              <line x1="0" y1="2" x2="1200" y2="2" stroke="rgba(67,69,75,0.25)" strokeWidth="2" strokeDasharray="6 8" />
            </svg>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {steps.map((s, idx) => (
              <Reveal
                key={s.n}
                delay={idx * 120}
                as="article"
                className="group relative flex flex-col rounded-3xl border border-border bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`grid h-16 w-16 place-items-center rounded-2xl ${s.tone}`}
                    style={{ boxShadow: `0 18px 30px -10px ${s.accentHex}55` }}
                  >
                    <span className="font-display text-[26px] font-semibold tracking-[-0.02em] text-ink">
                      {s.n}
                    </span>
                  </span>
                  <span className="rounded-full bg-ink/5 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                    {s.tag}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-[22px] md:text-[24px] font-semibold tracking-tight text-ink leading-snug">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.6] text-ink-soft">
                  {s.body}
                </p>

                {/* Team + duration row */}
                <div className="mt-5 flex items-center justify-between gap-3 rounded-xl border border-border bg-subtle/40 p-2.5">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[s.person, s.person2].map((src) => (
                        <span
                          key={src}
                          className="relative h-7 w-7 overflow-hidden rounded-full border-2 border-white shadow-card"
                        >
                          <Image src={src} alt="" fill sizes="28px" className="object-cover" unoptimized />
                        </span>
                      ))}
                    </div>
                    <div className="text-[11.5px] font-semibold text-ink leading-tight">
                      {s.leadName}
                      <div className="text-[10px] font-normal uppercase tracking-[0.1em] text-muted">
                        Your team
                      </div>
                    </div>
                  </div>
                  <span
                    className="rounded-full px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wider"
                    style={{ background: `${s.accentHex}1f`, color: s.accentHex }}
                  >
                    {s.duration}
                  </span>
                </div>

                <div
                  className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold"
                  style={{ color: s.accentHex }}
                >
                  Phase {s.n}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                    <path d="M2.5 6h6m0 0L6 3.5M8.5 6L6 8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <Button href="#growth-audit" variant="primary" size="lg" trailingIcon>
            Start with a Free Audit
          </Button>
          <Button href="#strategy-call" variant="secondary" size="lg">
            Talk to a Strategist
          </Button>
        </div>
      </div>
    </section>
  );
}
