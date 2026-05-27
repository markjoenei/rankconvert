import Image from "next/image";
import { Button } from "./ui/Button";
import { Reveal } from "./Reveal";

const sources = [
  { label: "Google Search", value: 42, color: "#FF521C" },
  { label: "Google Maps", value: 28, color: "#FF916A" },
  { label: "Social / Reels", value: 18, color: "#FFB799" },
  { label: "Referrals", value: 12, color: "#43454B" },
];

export function Dashboard() {
  return (
    <section
      className="relative isolate overflow-hidden py-16 md:py-24 text-ink"
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

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        {/* Text */}
        <Reveal className="max-w-2xl lg:order-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-soft backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#FF521C" }} aria-hidden />
            Centralized dashboard
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-[60px] leading-[1.04] font-semibold tracking-[-0.028em] text-ink">
            You Shouldn&rsquo;t Have to{" "}
            <span className="relative inline-block">
              <span className="relative z-10" style={{ color: "#FF521C" }}>Wonder</span></span>
            <span className="block">Where Your Patients Are Coming From.</span>
          </h2>

          <div className="mt-6 space-y-4 text-[16px] md:text-[17px] leading-[1.65] text-ink-soft">
            <p>
              &ldquo;What&rsquo;s actually working?&rdquo; is the question every
              practice owner asks — and too few marketing agencies can answer
              it clearly. <span className="font-semibold text-ink">We can.</span>
            </p>
            <p>
              Every practice in the PRACPROS system gets a centralized
              dashboard that tracks every lead, every call, every chat, every
              form, and every campaign result in real time. See which
              campaigns are generating appointments, listen to recorded calls,
              monitor front desk response quality, and measure marketing ROI
              with the same precision you apply to clinical outcomes.
            </p>
            <p className="font-semibold text-ink">
              Marketing stops being an expense you hope is working.{" "}
              <span className="text-brand-600">It becomes an operational metric you manage.</span>
            </p>
            <p>
              Your team gets visibility into live conversations. Your front
              desk gets accountability tools. And you get the one report that
              actually matters: what did this month&rsquo;s marketing produce
              in new patient production?
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href="#growth-audit"
              variant="primary"
              size="md"
              trailingIcon
            >
              See a Live Demo
            </Button>
            <Button
              href="#strategy-call"
              variant="secondary"
              size="md"
            >
              Schedule a Walkthrough
            </Button>
          </div>
        </Reveal>

        {/* Visual: dashboard mockup — bigger + animated */}
        <Reveal delay={120} className="relative mx-auto w-full max-w-[820px] lg:order-1">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-8 rounded-[56px] blur-3xl opacity-60 animate-glow-pulse"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 50%, rgba(255,82,28,0.4), transparent 70%)",
              }}
            />

            <div className="relative overflow-hidden rounded-[26px] border border-border bg-white shadow-[0_60px_120px_-30px_rgba(67,69,75,0.35)] transition-transform duration-500 hover:-translate-y-1">
              {/* Window chrome */}
              <div className="flex items-center justify-between border-b border-border bg-subtle/60 px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-400" />
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink shadow-card">
                  <span className="h-2 w-2 rounded-full bg-brand-500 animate-pulse" />
                  Dr. Lee&rsquo;s practice · Live
                </span>
                <span className="font-mono text-[12px] text-muted">May · this month</span>
              </div>

              {/* Top KPIs */}
              <div className="grid grid-cols-3 gap-4 border-b border-border p-5">
                {[
                  { l: "New patients", v: "126", d: "+22%", delay: "0s" },
                  { l: "Pipeline", v: "$184K", d: "+38%", delay: "0.15s" },
                  { l: "ROAS", v: "6.4×", d: "+0.8", delay: "0.3s" },
                ].map((k) => (
                  <div
                    key={k.l}
                    className="rounded-xl bg-subtle/60 p-4 transition-transform duration-300 hover:-translate-y-0.5 animate-kpi-rise"
                    style={{ animationDelay: k.delay }}
                  >
                    <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">
                      {k.l}
                    </div>
                    <div className="mt-1.5 flex items-baseline gap-2">
                      <span className="font-display text-[30px] font-semibold tracking-[-0.02em] text-ink">
                        {k.v}
                      </span>
                      <span className="text-[12px] font-semibold text-brand-600">{k.d}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Source attribution */}
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div className="text-[13px] font-semibold uppercase tracking-[0.12em] text-muted">
                    New patients by source
                  </div>
                  <span className="font-mono text-[12px] text-muted">last 30 days</span>
                </div>
                <div className="mt-4 flex h-3 w-full overflow-hidden rounded-full">
                  {sources.map((s, i) => (
                    <div
                      key={s.label}
                      className="animate-bar-fill h-full"
                      style={{
                        width: `${s.value}%`,
                        background: s.color,
                        transformOrigin: "left center",
                        animationDelay: `${i * 0.15}s`,
                      }}
                    />
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2.5">
                  {sources.map((s, i) => (
                    <div
                      key={s.label}
                      className="flex items-center justify-between rounded-lg bg-subtle/50 px-3 py-2 transition-colors hover:bg-subtle"
                      style={{ animationDelay: `${i * 0.08}s` }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full" style={{ background: s.color }} />
                        <span className="text-[13px] font-medium text-ink">{s.label}</span>
                      </div>
                      <span className="font-mono text-[13px] font-semibold text-ink">{s.value}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent activity */}
              <div className="border-t border-border bg-subtle/30 p-5">
                <div className="text-[13px] font-semibold uppercase tracking-[0.12em] text-muted">
                  This morning at the practice
                </div>
                <ul className="mt-3 space-y-2">
                  {[
                    { c: "bg-brand-500", t: "Maria booked whitening · Friday 2:30", s: "Found you on Google Maps", time: "2m" },
                    { c: "bg-brand-500", t: "Theo's chat answered in 14s", s: "Came from your Instagram", time: "8m" },
                    { c: "bg-brand-500", t: "Call from the Patel family · 4:12", s: "Asked about Invisalign", time: "21m" },
                  ].map((row, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-[0_1px_0_rgba(67,69,75,0.04)] animate-feed-in"
                      style={{ animationDelay: `${0.2 + i * 0.18}s` }}
                    >
                      <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${row.c} animate-pulse`} />
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-[14px] font-semibold text-ink">{row.t}</div>
                        <div className="truncate text-[12px] text-muted">{row.s}</div>
                      </div>
                      <span className="font-mono text-[11.5px] text-muted">{row.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Humanized dentist quote callout — bigger */}
            <div className="relative mt-7 flex items-start gap-5 rounded-2xl border border-border bg-white p-5 shadow-card sm:p-6">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-[3px] border-white shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80"
                  alt="Dr. Lee"
                  fill
                  sizes="80px"
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="flex-1">
                <p className="font-display text-[18px] md:text-[20px] leading-snug text-ink">
                  &ldquo;On Monday morning I know what Friday produced. No spreadsheet. No agency email.&rdquo;
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-[13px] font-semibold text-ink">Dr. Lee</span>
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-muted" />
                  <span className="text-[13px] text-ink-soft">Brighthill Family Dental</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
