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

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        {/* Text */}
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-soft backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#FF521C" }} aria-hidden />
            Centralized dashboard
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-[60px] leading-[1.04] font-semibold tracking-[-0.028em] text-ink">
            You Shouldn&rsquo;t Have to{" "}
            <span className="relative inline-block">
              <span className="relative z-10" style={{ color: "#FF521C" }}>Wonder</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 h-3 -z-0 bg-accent-butter/60"
                style={{ filter: "blur(0.5px)" }}
              />
            </span>
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

        {/* Visual: dashboard mockup */}
        <Reveal delay={120} className="relative mx-auto w-full max-w-[640px]">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[44px] blur-3xl opacity-50"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 50%, rgba(255,82,28,0.35), transparent 70%)",
              }}
            />

            <div className="relative overflow-hidden rounded-[20px] border border-border bg-white shadow-[0_50px_100px_-30px_rgba(10,10,10,0.25)]">
              {/* Window chrome */}
              <div className="flex items-center justify-between border-b border-border bg-subtle/60 px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-brand-400" />
                  <span className="h-2 w-2 rounded-full bg-brand-300" />
                  <span className="h-2 w-2 rounded-full bg-brand-400" />
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-ink shadow-card">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse" />
                  Dr. Lee&rsquo;s practice · Live
                </span>
                <span className="font-mono text-[10.5px] text-muted">May · this month</span>
              </div>

              {/* Top KPIs */}
              <div className="grid grid-cols-3 gap-3 border-b border-border p-4">
                {[
                  { l: "New patients", v: "126", d: "+22%" },
                  { l: "Pipeline", v: "$184K", d: "+38%" },
                  { l: "ROAS", v: "6.4×", d: "+0.8" },
                ].map((k) => (
                  <div key={k.l} className="rounded-xl bg-subtle/60 p-3">
                    <div className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-muted">
                      {k.l}
                    </div>
                    <div className="mt-1 flex items-baseline gap-1.5">
                      <span className="font-display text-[22px] font-semibold tracking-[-0.02em] text-ink">
                        {k.v}
                      </span>
                      <span className="text-[10.5px] font-semibold text-brand-600">{k.d}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Source attribution */}
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-muted">
                    New patients by source
                  </div>
                  <span className="font-mono text-[10.5px] text-muted">last 30 days</span>
                </div>
                <div className="mt-3 flex h-2.5 w-full overflow-hidden rounded-full">
                  {sources.map((s) => (
                    <div key={s.label} style={{ width: `${s.value}%`, background: s.color }} />
                  ))}
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {sources.map((s) => (
                    <div key={s.label} className="flex items-center justify-between rounded-md bg-subtle/50 px-2.5 py-1.5">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full" style={{ background: s.color }} />
                        <span className="text-[11.5px] font-medium text-ink">{s.label}</span>
                      </div>
                      <span className="font-mono text-[11.5px] font-semibold text-ink">{s.value}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent activity */}
              <div className="border-t border-border bg-subtle/30 p-4">
                <div className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-muted">
                  This morning at the practice
                </div>
                <ul className="mt-2 space-y-1.5">
                  {[
                    { c: "bg-brand-500", t: "Maria booked whitening · Friday 2:30", s: "Found you on Google Maps", time: "2m" },
                    { c: "bg-brand-500", t: "Theo's chat answered in 14s", s: "Came from your Instagram", time: "8m" },
                    { c: "bg-brand-500", t: "Call from the Patel family · 4:12", s: "Asked about Invisalign", time: "21m" },
                  ].map((row, i) => (
                    <li key={i} className="flex items-center gap-3 rounded-lg bg-white p-2.5">
                      <span className={`h-2 w-2 shrink-0 rounded-full ${row.c} animate-pulse`} />
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-[12.5px] font-semibold text-ink">{row.t}</div>
                        <div className="truncate text-[10.5px] text-muted">{row.s}</div>
                      </div>
                      <span className="font-mono text-[10.5px] text-muted">{row.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Humanized dentist quote callout under the dashboard */}
            <div className="relative mt-6 flex items-start gap-4 rounded-2xl border border-border bg-white p-4 shadow-card sm:p-5">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80"
                  alt="Dr. Lee"
                  fill
                  sizes="56px"
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="flex-1">
                <p className="font-display text-[15px] leading-snug text-ink">
                  &ldquo;On Monday morning I know what Friday produced. No spreadsheet. No agency email.&rdquo;
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-[12px] font-semibold text-ink">Dr. Lee</span>
                  <span aria-hidden className="h-1 w-1 rounded-full bg-muted" />
                  <span className="text-[12px] text-ink-soft">Brighthill Family Dental</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
