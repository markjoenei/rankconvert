import { Button } from "./ui/Button";
import { SideElements } from "./BenefitsSideElements";

export function Benefits() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
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
            Running a dental practice is a demanding, full-time leadership job
            that leaves no room for managing complex marketing tactics.
            PRACPROS eliminates this extra burden by completely handling the
            strategy, systems, execution, and optimization in the background.
            Instead of forcing you to chase reports or decipher agency jargon,
            they provide a hands-off growth engine and a clear, simple
            dashboard that shows you exactly what results are being produced.
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
