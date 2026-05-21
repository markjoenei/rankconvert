import Image from "next/image";
import { Button } from "./ui/Button";
import { Reveal } from "./Reveal";

type Sync = {
  label: string;
  meta: string;
  latency: string;
  icon: React.ReactNode;
};

const syncs: Sync[] = [
  {
    label: "Website",
    meta: "Header · footer · hours",
    latency: "120ms",
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden>
        <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M2.5 9h13M9 2.5c1.8 2.1 2.7 4.2 2.7 6.5s-.9 4.4-2.7 6.5M9 2.5C7.2 4.6 6.3 6.7 6.3 9s.9 4.4 2.7 6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Google Business",
    meta: "Profile · hours · posts",
    latency: "180ms",
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden>
        <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M11.8 11.8L15 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    meta: "Bio · highlight · posts",
    latency: "210ms",
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden>
        <rect x="2.5" y="2.5" width="13" height="13" rx="3.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="13" cy="5" r="0.7" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    meta: "Page info · cover",
    latency: "190ms",
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden>
        <path d="M11 9.5h2l.5-2.5H11V5.6c0-.7.3-1.4 1.4-1.4H13.6V2.1S12.6 2 11.6 2c-2 0-3.3 1.2-3.3 3.4V7H6v2.5h2.3V16H11V9.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Recall SMS",
    meta: "Reminders · re-care",
    latency: "60ms",
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden>
        <path d="M3 4.5C3 3.7 3.7 3 4.5 3h9c.8 0 1.5.7 1.5 1.5v6c0 .8-.7 1.5-1.5 1.5H9l-3 2.5V12H4.5C3.7 12 3 11.3 3 10.5v-6z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M6 6.5h6M6 8.5h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Re-care email",
    meta: "Sequenced · personalized",
    latency: "80ms",
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden>
        <rect x="2.5" y="4" width="13" height="10" rx="1.6" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 5l6 4 6-4" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function Automation() {
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
            Automation & operations
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-[60px] leading-[1.04] font-semibold tracking-[-0.028em] text-ink">
            The Best Practices Run With{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#FF521C]">Consistency</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 h-3 -z-0 bg-accent-butter"
                style={{ filter: "blur(0.5px)" }}
              />
            </span>
            <span className="block">Across Every Touchpoint.</span>
          </h2>
          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-[16px] md:text-[17px] leading-[1.65] text-ink-soft">
            <p>
              The practices that grow predictably aren&rsquo;t the ones with
              the best marketing campaigns. They&rsquo;re the ones with systems
              that eliminate the gaps — the unmade recall call, the missed
              follow-up text, the promotion that never went out because nobody
              had time.
            </p>
            <p>
              PRACPROS connects your marketing and operations through
              intelligent automation that handles appointment reminders,
              recare campaigns, promotional announcements, and patient
              re-engagement sequences without anyone on your team having to
              remember to do it.
            </p>
            <p className="font-semibold text-ink">
              Consistency isn&rsquo;t a discipline when it&rsquo;s{" "}
              <span className="text-brand-600">built into the system.</span>
            </p>
          </div>
        </Reveal>

        {/* Modern command + sync grid */}
        <Reveal delay={120} className="relative mx-auto mt-14 max-w-[1100px]">
          {/* Command bar */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-card">
            <div className="flex flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-card">
                  <Image
                    src="https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=200&q=80"
                    alt="Jen, office manager"
                    fill
                    sizes="44px"
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                    Jen · Office manager
                  </div>
                  <div className="truncate font-display text-[15px] font-semibold tracking-tight text-ink">
                    &ldquo;Changed our Thu &amp; Fri hours.&rdquo;
                    <span className="ml-2 font-mono text-[12px] font-normal text-muted">
                      9:00 → 19:00
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-[11.5px] font-semibold text-brand-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse" />
                  Updated everywhere
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-[11px] text-ink-soft">
                  in under a second
                </span>
              </div>
            </div>

            {/* progress bar */}
            <div className="relative h-px w-full bg-border">
              <div className="absolute inset-y-0 left-0 w-full origin-left bg-gradient-to-r from-brand-500 via-brand-400 to-brand-200" />
            </div>

            {/* Sync grid */}
            <ul className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3">
              {syncs.map((s, i) => (
                <li
                  key={s.label}
                  className="group relative flex items-center gap-3 p-4 transition-colors sm:p-5"
                  style={{
                    borderTop:
                      i >= 3 ? "1px solid var(--color-border)" : undefined,
                  }}
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-subtle text-ink transition-colors group-hover:border-brand-300 group-hover:bg-brand-50 group-hover:text-brand-700">
                    {s.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="truncate font-display text-[14.5px] font-semibold tracking-tight text-ink">
                        {s.label}
                      </span>
                      <span className="ml-auto font-mono text-[10.5px] font-medium text-muted">
                        {s.latency}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="truncate text-[12px] text-ink-soft">
                        {s.meta}
                      </span>
                    </div>
                  </div>
                  <span className="ml-1 inline-flex items-center gap-1 text-[10.5px] font-semibold text-brand-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                    Synced
                  </span>
                </li>
              ))}
            </ul>

            {/* footer bar — humanized */}
            <div className="flex flex-col items-start gap-3 border-t border-border bg-subtle/40 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div className="flex items-center gap-2 text-[12px] text-ink-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse" />
                <span className="font-medium text-ink">Jen got her Thursday back.</span>
                <span className="text-muted">No 6-tab afternoon.</span>
              </div>
              <div className="flex items-center gap-2 text-[12px] text-muted">
                <span>That&rsquo;s what consistency feels like.</span>
              </div>
            </div>
          </div>

          {/* tiny meta callouts under the card */}
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { k: "Time saved / week", v: "6.4 hrs" },
              { k: "Manual touches removed", v: "38" },
              { k: "Sync error rate", v: "0.01%" },
            ].map((m) => (
              <div
                key={m.k}
                className="rounded-xl border border-border bg-white/70 px-4 py-3 backdrop-blur"
              >
                <div className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-muted">
                  {m.k}
                </div>
                <div className="mt-1 font-display text-[20px] font-semibold tracking-[-0.02em] text-ink">
                  {m.v}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button href="#growth-audit" variant="primary" size="md" trailingIcon>
            See What Auto-Syncs
          </Button>
          <Button href="#strategy-call" variant="secondary" size="md">
            Talk to an operations lead
          </Button>
        </div>
      </div>
    </section>
  );
}
