import { Button } from "./ui/Button";

export function FinalCTA() {
  return (
    <section id="start" className="relative pt-10 md:pt-16 pb-24 md:pb-32">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[32px] bg-ink p-8 sm:p-12 md:p-16">
          <div
            aria-hidden
            className="absolute inset-0 opacity-50"
            style={{
              background:
                "radial-gradient(120% 80% at 100% 0%, rgba(132, 112, 213, 0.45), transparent 60%), radial-gradient(80% 60% at 0% 100%, rgba(67,69,75,0.4), transparent 60%)",
            }}
          />
          <div aria-hidden className="absolute inset-0 grid-bg opacity-[0.06]" />

          <div className="relative grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <h2 className="font-display text-4xl md:text-5xl lg:text-[64px] leading-[1.04] font-semibold tracking-[-0.028em] text-white">
                Spend your day{" "}
                <span className="relative inline-block">
                  <span className="relative z-10" style={{ color: "#FF521C" }}>chairside</span></span>
                ,
                <br />
                not on the phone.
              </h2>
              <p className="mt-5 max-w-xl text-[17px] leading-[1.6] text-white/70">
                See how PracPros agents quietly run recall, scheduling,
                insurance, and follow-up — so your team can spend more time
                with the people in the chair.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#trial" variant="secondary" size="lg" trailingIcon className="!bg-white !text-ink hover:!bg-white">
                  Start free trial
                </Button>
                <Button
                  href="#demo"
                  size="lg"
                  className="!bg-transparent !text-white border border-white/25 hover:!bg-white/10"
                  variant="ghost"
                >
                  Book a demo
                </Button>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative ml-auto max-w-md">
                <div className="absolute -top-8 -left-6 hidden md:block animate-float-soft">
                  <Pill tone="bg-accent-butter" label="+22% production" />
                </div>
                <div className="absolute -bottom-6 -right-4 hidden md:block">
                  <Pill tone="bg-accent-mint" label="0 missed calls" />
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-2 backdrop-blur">
                  <div className="rounded-2xl bg-white p-5">
                    <div className="flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.14em] text-ink/60">
                      Today
                      <span className="inline-flex items-center gap-1 rounded-full bg-brand-100 px-2 py-0.5 text-brand-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                        Schedule full
                      </span>
                    </div>
                    <div className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">
                      Bright Hill · Tuesday
                    </div>
                    <div className="mt-4 space-y-2">
                      {[
                        ["Recall", 100],
                        ["Confirmations", 100],
                        ["Insurance", 72],
                        ["Tx follow-up", 14],
                      ].map(([label, pct]) => (
                        <div key={label as string} className="flex items-center gap-3 text-[13px]">
                          <span className="w-20 text-ink-soft">{label}</span>
                          <div className="flex-1 h-1.5 rounded-full bg-ink/10 overflow-hidden">
                            <div
                              className="h-full bg-brand-500"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                          <span className="w-9 text-right font-medium text-ink">
                            {pct}%
                          </span>
                        </div>
                      ))}
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

function Pill({ tone, label }: { tone: string; label: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full ${tone} px-3 py-1.5 text-[12.5px] font-semibold text-ink shadow-card`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-ink" />
      {label}
    </span>
  );
}
