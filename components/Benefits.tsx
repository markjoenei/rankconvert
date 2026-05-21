import { Button } from "./ui/Button";
import { SideElements } from "./BenefitsSideElements";

export function Benefits() {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: "#faf9f7" }}
    >
      {/* Soft brand grid */}
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

      <SideElements />

      <div className="container-page relative">
        {/* ── Header ─────────────────────────────────── */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-soft backdrop-blur shadow-card">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
            The Operator&rsquo;s Reality
          </span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-[64px] leading-[1.04] font-semibold tracking-[-0.028em] text-ink">
            Are You Still{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#FF521C]">Guessing</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 h-3 bg-accent-butter -z-0"
                style={{ filter: "blur(0.5px)" }}
              />
            </span>{" "}
            What&rsquo;s Working?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] md:text-[16px] leading-[1.55] text-muted">
            Most practices fly blind. A patchwork of tools, hunches, and
            agency reports that never quite add up. There&rsquo;s a better
            way to run growth.
          </p>
        </div>

        {/* ── Before / After comparison ─────────────────── */}
        <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-2">
          {/* Without */}
          <div className="relative rounded-2xl border border-border bg-white/70 p-6 md:p-7 backdrop-blur-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-ink/5 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              Without PRACPROS
            </span>
            <ul className="mt-5 space-y-3 text-[14.5px] leading-snug text-ink-soft">
              {[
                "Fragmented vendors, no single source of truth",
                "Guessing where leads come from",
                "Agency reports you can't decode",
                "Front desk drowning in inquiries",
                "Marketing spend with unclear ROI",
              ].map((line) => (
                <li key={line} className="flex items-start gap-2.5">
                  <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-500">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden>
                      <path d="M2 2l5 5M7 2l-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* With */}
          <div className="relative overflow-hidden rounded-2xl border border-brand-200 bg-white p-6 md:p-7 shadow-[0_30px_60px_-30px_rgba(67,69,75,0.45)]">
            <div
              aria-hidden
              className="absolute -right-12 -top-12 h-40 w-40 rounded-full blur-2xl opacity-60"
              style={{
                background:
                  "radial-gradient(circle, rgba(67,69,75,0.45), transparent 70%)",
              }}
            />
            <span className="relative inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse" />
              With PRACPROS
            </span>
            <ul className="relative mt-5 space-y-3 text-[14.5px] leading-snug text-ink">
              {[
                "One connected growth engine",
                "Live attribution from search to chair",
                "A dashboard you can read in 30 seconds",
                "Inquiries answered in under 60 seconds",
                "Every dollar tied to a booked patient",
              ].map((line) => (
                <li key={line} className="flex items-start gap-2.5">
                  <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-600">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                      <path d="M2 5.5L4 7.5L8 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="font-medium">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Body copy ─────────────────────────────────── */}
        <div className="mx-auto mt-16 max-w-3xl space-y-6 text-[17px] md:text-[18px] leading-[1.7] text-ink-soft">
          <p>
            Running a practice is already a full-time leadership position.
            You&rsquo;re managing clinical outcomes, staffing, operations,
            patient experience, insurance, scheduling, and growth pressure —
            simultaneously. The last thing you need is a marketing situation
            that demands another layer of your attention.
          </p>
          <p className="font-semibold text-ink text-[20px] md:text-[22px]">
            That&rsquo;s not what PRACPROS looks like.
          </p>
          <p>
            We handle the strategy, the systems, the execution, the
            optimization, and the reporting. You get a growth engine that runs
            in the background — and a dashboard that tells you exactly what
            it&rsquo;s producing — without you needing to chase reports or
            decipher agency speak.
          </p>
        </div>

        {/* ── Stat strip ─────────────────────────────────── */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { v: "47s", l: "avg lead response" },
            { v: "+38%", l: "new-patient pipeline" },
            { v: "4.9★", l: "average Google rating" },
            { v: "24/7", l: "system uptime" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-2xl border border-border bg-white px-4 py-5 text-center shadow-card"
            >
              <div className="font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-ink">
                {s.v}
              </div>
              <div className="mt-1 text-[11.5px] font-medium uppercase tracking-[0.12em] text-muted">
                {s.l}
              </div>
            </div>
          ))}
        </div>

        {/* ── The deal callout ───────────────────────────── */}
        <div className="mx-auto mt-14 max-w-4xl">
          <div
            className="relative overflow-hidden rounded-[28px] p-[1.5px]"
            style={{
              background:
                "linear-gradient(135deg, #FF521C 0%, #43454B 50%, #FF521C 100%)",
            }}
          >
            <div className="relative rounded-[26px] bg-white p-10 md:p-14">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl opacity-50"
                style={{
                  background:
                    "radial-gradient(circle, rgba(67,69,75,0.5), transparent 70%)",
                }}
              />
              <span
                aria-hidden
                className="absolute -top-3 left-10 inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white shadow-card"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-300" />
                The deal
              </span>
              <p className="relative font-display text-[24px] md:text-[34px] leading-[1.2] tracking-[-0.02em] text-ink">
                Your job is to deliver{" "}
                <span className="text-brand-600">exceptional dentistry.</span>
                <span className="block mt-1">
                  Ours is to make sure the right patients are in your chair to
                  receive it.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* ── CTAs ──────────────────────────────────────── */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <Button href="#growth-audit" variant="primary" size="lg" trailingIcon>
            Get a Free Growth Audit
          </Button>
          <Button href="#strategy-call" variant="secondary" size="lg">
            Schedule a Strategy Call
          </Button>
        </div>
      </div>
    </section>
  );
}
