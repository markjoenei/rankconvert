import Image from "next/image";
import { Eyebrow } from "./ui/Eyebrow";
import { Button } from "./ui/Button";

export function Stories() {
  return (
    <section
      id="stories"
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

      <div className="container-page relative">
        <div className="mx-auto max-w-6xl text-center">
          <Eyebrow>Customer stories</Eyebrow>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-[64px] leading-[1.04] font-semibold tracking-[-0.028em] text-ink">
            <span className="block lg:whitespace-nowrap">A Website That Works Like a</span>
            <span className="block lg:whitespace-nowrap">
              Full-Time{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#FF521C]">Patient Acquisition</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 h-3 -z-0 bg-accent-butter"
                  style={{ filter: "blur(0.5px)" }}
                />
              </span>{" "}
              Engine.
            </span>
          </h2>
          <div className="mt-6 space-y-4 text-[15px] md:text-[16px] leading-[1.65] text-muted">
            <p className="mx-auto max-w-none lg:whitespace-nowrap">
              A dental website has one job: convert visitors into patients. Not
              look impressive at a conference. Not win a design award. Convert.
            </p>
            <p className="mx-auto max-w-3xl">
              PRACPROS websites are built on modern Next.js architecture —
              engineered for speed, structured for Google and AI search
              systems, and designed around the psychology of a patient who is
              one click away from choosing your practice or a competitor&rsquo;s.
            </p>
          </div>
          <div className="mt-7 flex justify-center">
            <Button href="#stories-all" variant="primary" size="md" trailingIcon>
              Explore practice stories
            </Button>
          </div>
        </div>

        <div className="mt-14 grid auto-rows-[minmax(0,1fr)] gap-4 sm:grid-cols-6 lg:grid-cols-12">
          <ClientImageTile
            className="sm:col-span-3 lg:col-span-4"
            src="https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=900&q=85"
            alt="Smiling patient"
            tag="Happy patient"
            customer="Cedar & Pine DSO"
            quote="My favorite dental office, by far."
            objectPosition="center 18%"
          />
          <ClientImageTile
            className="sm:col-span-3 lg:col-span-4"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=85"
            alt="Happy young patient"
            tag="Happy patient"
            customer="Magnolia Orthodontics"
            quote="They actually answered the phone."
            objectPosition="center 25%"
          />
          <FeatureTile
            className="sm:col-span-6 lg:col-span-4 row-span-2"
            tone="bg-white"
            tag="SEO · AEO · GEO"
            title="Built for search, not just aesthetics."
            description="Traditional SEO, AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization) are all embedded in the architecture — so your practice ranks on Google, appears in AI-generated answers, and shows up in voice assistant responses."
            visual={<SearchVisual />}
            chips={[
              { label: "Google Search", tone: "bg-accent-mint" },
              { label: "AI Answers", tone: "bg-accent-blush" },
              { label: "Voice", tone: "bg-accent-sky" },
            ]}
          />

          <FeatureTile
            className="sm:col-span-6 lg:col-span-5"
            tone="bg-white"
            tag="Performance"
            title="Built for speed that converts."
            description="Page speed is a ranking factor and a conversion factor. Our sites load fast on every device — particularly mobile, where the majority of dental searches now happen."
            visual={<SpeedVisual />}
            chips={[
              { label: "Core Web Vitals", tone: "bg-accent-butter" },
              { label: "Mobile-first", tone: "bg-accent-lavender" },
            ]}
          />
          <ClientImageTile
            className="sm:col-span-6 lg:col-span-3"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=85"
            alt="Smiling client at the front desk"
            tag="Happy patient"
            customer="Pacific Family Dental"
            quote="Booked same-day. Loved it."
            objectPosition="center 20%"
          />

          <ClientImageTile
            className="sm:col-span-3 lg:col-span-4"
            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=85"
            alt="Happy smiling man portrait"
            tag="Happy patient"
            customer="Riverbend Dental Group"
            quote="Insurance was sorted before I arrived."
            objectPosition="center 22%"
          />
          <ClientImageTile
            className="sm:col-span-3 lg:col-span-4"
            src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=85"
            alt="Smiling woman portrait"
            tag="Happy patient"
            customer="Lumen Dental Co."
            quote="They got back to me in seconds."
            objectPosition="center 20%"
          />
          <ClientImageTile
            className="sm:col-span-6 lg:col-span-4"
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85"
            alt="Smiling patient at clinic"
            tag="Happy patient"
            customer="Heartwood Dental"
            quote="Confirmed my appointment overnight."
            objectPosition="center 25%"
          />

          <FeatureTile
            className="sm:col-span-6 lg:col-span-12"
            tone="bg-ink text-white"
            tag="Speed-to-Lead"
            title="Built to engage before the front desk picks up the phone."
            description="Every form submission, every chat inquiry, and every missed call triggers an immediate automated engagement sequence — so no lead goes cold because your office was busy."
            visual={<EngagementVisual />}
            chips={[
              { label: "Forms", tone: "bg-accent-mint" },
              { label: "Chat", tone: "bg-accent-blush" },
              { label: "Missed Calls", tone: "bg-accent-sky" },
              { label: "Under 60s", tone: "bg-accent-butter" },
            ]}
            invert
          />
        </div>
      </div>
    </section>
  );
}

function StatTile({
  className = "",
  tone = "bg-white",
  stat,
  statSize = "text-5xl md:text-6xl",
  label,
  customer,
  tag,
}: {
  className?: string;
  tone?: string;
  stat: string;
  statSize?: string;
  label: string;
  customer: string;
  tag?: string;
}) {
  return (
    <div
      className={`relative flex h-full flex-col justify-between rounded-3xl border border-border ${tone} p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card ${className}`}
    >
      {tag && (
        <span className="absolute right-5 top-5 inline-flex rounded-full border border-ink/10 bg-white/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink-soft">
          {tag}
        </span>
      )}
      <div>
        <div className={`font-display ${statSize} font-semibold tracking-[-0.02em] text-ink leading-[1]`}>
          {stat}
        </div>
        <p className="mt-3 text-[14.5px] leading-[1.45] text-ink-soft">{label}</p>
      </div>
      <div className="mt-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-ink/70">
        {customer}
      </div>
    </div>
  );
}

function ClientImageTile({
  className = "",
  src,
  alt,
  tag,
  customer,
  quote,
  objectPosition = "center 22%",
  zoom = 1,
}: {
  className?: string;
  src: string;
  alt: string;
  tag?: string;
  customer: string;
  quote?: string;
  objectPosition?: string;
  zoom?: number;
}) {
  return (
    <div
      className={`group relative h-full min-h-[340px] overflow-hidden rounded-3xl border border-border bg-paper transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        style={{
          objectPosition,
          transform: zoom !== 1 ? `scale(${zoom})` : undefined,
          transformOrigin: "center top",
        }}
        unoptimized
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.55) 100%)",
        }}
      />
      {tag && (
        <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
          {tag}
        </span>
      )}
      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        {quote && (
          <p className="font-display text-[16px] md:text-[18px] leading-snug tracking-tight">
            &ldquo;{quote}&rdquo;
          </p>
        )}
        <div className="mt-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/85">
          {customer}
        </div>
      </div>
    </div>
  );
}

function FeatureTile({
  className = "",
  tone = "bg-white",
  tag,
  title,
  description,
  chips,
  invert = false,
  visual,
}: {
  className?: string;
  tone?: string;
  tag?: string;
  title: string;
  description: string;
  chips?: { label: string; tone: string }[];
  invert?: boolean;
  visual?: React.ReactNode;
}) {
  const titleColor = invert ? "text-white" : "text-ink";
  const descColor = invert ? "text-white/75" : "text-ink-soft";
  const tagStyle = invert
    ? "border-white/20 bg-white/10 text-white/90 backdrop-blur"
    : "border-ink/10 bg-white/80 text-ink-soft";
  return (
    <div
      className={`relative flex h-full flex-col justify-between rounded-3xl border border-border ${tone} p-7 md:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card overflow-hidden ${className}`}
    >
      {tag && (
        <span className={`absolute right-5 top-5 z-10 inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${tagStyle}`}>
          {tag}
        </span>
      )}
      <div className="relative">
        <h3 className={`font-display text-[22px] md:text-[26px] font-semibold tracking-tight ${titleColor} leading-[1.2] max-w-[22ch]`}>
          {title}
        </h3>
        <p className={`mt-4 text-[14.5px] leading-[1.6] ${descColor}`}>
          {description}
        </p>
      </div>
      {visual ? <div className="relative mt-6">{visual}</div> : null}
      {chips && chips.length > 0 ? (
        <div className="relative mt-6 flex flex-wrap gap-1.5">
          {chips.map((c) => (
            <span
              key={c.label}
              className={`inline-flex items-center gap-1.5 rounded-full ${c.tone} px-2.5 py-1 text-[11px] font-semibold tracking-tight text-ink/80`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-ink/70" />
              {c.label}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

/* ── Mini-visuals for FeatureTiles ─────────────────────────── */

function SearchVisual() {
  // Mock search/answer engine result
  return (
    <div className="space-y-2">
      {[
        { engine: "Google", rank: "#1", color: "bg-accent-mint", pct: 100 },
        { engine: "AI Answers", rank: "Featured", color: "bg-accent-blush", pct: 92 },
        { engine: "Voice", rank: "Top result", color: "bg-accent-sky", pct: 84 },
      ].map((row) => (
        <div
          key={row.engine}
          className="flex items-center gap-3 rounded-xl border border-border bg-white/70 px-3 py-2"
        >
          <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg ${row.color}`}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
              <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.4" />
              <path d="M10.5 10.5L13 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </span>
          <div className="min-w-0 flex-1">
            <div className="text-[12px] font-semibold text-ink">{row.engine}</div>
            <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-ink/10">
              <div className="h-full rounded-full bg-brand-500" style={{ width: `${row.pct}%` }} />
            </div>
          </div>
          <span className="rounded-full bg-ink/5 px-2 py-0.5 text-[10.5px] font-semibold text-ink-soft">
            {row.rank}
          </span>
        </div>
      ))}
    </div>
  );
}

function SpeedVisual() {
  // Speed gauge + LCP / FID / CLS metrics
  return (
    <div className="rounded-2xl border border-border bg-white/70 p-4">
      <div className="flex items-center gap-4">
        <div className="relative h-20 w-20 shrink-0">
          <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90">
            <circle cx="40" cy="40" r="32" stroke="rgba(10,10,10,0.08)" strokeWidth="8" fill="none" />
            <circle
              cx="40"
              cy="40"
              r="32"
              stroke="var(--color-brand-500)"
              strokeWidth="8"
              fill="none"
              strokeDasharray={2 * Math.PI * 32}
              strokeDashoffset={2 * Math.PI * 32 * (1 - 0.98)}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <div className="font-display text-[18px] font-semibold leading-none text-ink">98</div>
              <div className="text-[8.5px] font-semibold uppercase tracking-[0.14em] text-muted">
                score
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-1.5 text-[11.5px]">
          {[
            { label: "LCP", value: "1.1s", pct: 92 },
            { label: "FID", value: "12ms", pct: 96 },
            { label: "CLS", value: "0.02", pct: 90 },
          ].map((m) => (
            <div key={m.label} className="flex items-center gap-2">
              <span className="w-6 font-mono font-semibold text-ink">{m.label}</span>
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-ink/10">
                <div className="h-full rounded-full bg-brand-500" style={{ width: `${m.pct}%` }} />
              </div>
              <span className="w-10 text-right font-mono font-semibold text-ink-soft">{m.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EngagementVisual() {
  // Inbound channels → response → booked flow
  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur">
      <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-3">
        {/* Inputs */}
        <div className="space-y-1.5">
          {[
            { label: "Form", color: "bg-accent-mint" },
            { label: "Chat", color: "bg-accent-blush" },
            { label: "Missed call", color: "bg-accent-sky" },
          ].map((c) => (
            <div
              key={c.label}
              className="inline-flex w-full items-center gap-2 rounded-lg bg-white/10 px-2 py-1.5 text-[11px] font-semibold text-white"
            >
              <span className={`h-2 w-2 rounded-full ${c.color}`} />
              {c.label}
            </div>
          ))}
        </div>

        {/* Arrow 1 */}
        <svg width="22" height="14" viewBox="0 0 22 14" aria-hidden>
          <path d="M2 7h16m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="text-white/70" fill="none" />
        </svg>

        {/* Middle: AI engagement */}
        <div className="rounded-xl bg-white/10 p-2.5 text-center">
          <div className="font-display text-[16px] font-semibold leading-none text-white">{"<60s"}</div>
          <div className="mt-1 text-[9.5px] font-semibold uppercase tracking-[0.14em] text-white/70">
            AI engages
          </div>
        </div>

        {/* Arrow 2 */}
        <svg width="22" height="14" viewBox="0 0 22 14" aria-hidden>
          <path d="M2 7h16m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="text-white/70" fill="none" />
        </svg>

        {/* Output */}
        <div className="rounded-xl bg-brand-500/20 p-2.5 text-center">
          <div className="font-display text-[16px] font-semibold leading-none text-white">Booked</div>
          <div className="mt-1 inline-flex items-center gap-1 text-[9.5px] font-semibold uppercase tracking-[0.14em] text-brand-200">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
            live
          </div>
        </div>
      </div>
    </div>
  );
}

function QuoteTile({
  className = "",
  tone = "bg-white",
  invert = false,
  inline = false,
  quote,
  author,
  role,
  company,
}: {
  className?: string;
  tone?: string;
  invert?: boolean;
  inline?: boolean;
  quote: string;
  author: string;
  role?: string;
  company: string;
}) {
  const text = invert ? "text-white" : "text-ink";
  const muted = invert ? "text-white/70" : "text-ink-soft";
  return (
    <figure
      className={`relative flex h-full flex-col justify-between rounded-3xl border border-border ${tone} p-7 md:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card ${className}`}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden
        className={`opacity-30 ${invert ? "text-white" : "text-ink"}`}
      >
        <path
          d="M11.5 10c-3 0-5 2-5 5 0 2.5 1.5 5 4.5 5V14h-2c.5-1.5 1.5-2.5 3-2.5V10zM22 10c-3 0-5 2-5 5 0 2.5 1.5 5 4.5 5V14h-2c.5-1.5 1.5-2.5 3-2.5V10z"
          fill="currentColor"
        />
      </svg>
      <blockquote
        className={`mt-3 font-display text-[18px] md:text-[22px] leading-[1.4] tracking-tight ${text} ${inline ? "max-w-xl" : ""}`}
      >
        “{quote}”
      </blockquote>
      <figcaption className={`mt-6 flex items-center justify-between gap-4 text-[13px] ${muted}`}>
        <div>
          <div className={`font-semibold ${text}`}>{author}</div>
          {role && <div className="mt-0.5">{role}</div>}
        </div>
        <div className={`font-display text-base font-semibold ${text}`}>{company}</div>
      </figcaption>
    </figure>
  );
}
