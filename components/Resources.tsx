import Image from "next/image";
import { Button } from "./ui/Button";

type Channel = {
  title: string;
  body: string;
  tag: string;
  tagTone: string;
  image: string;
  alt: string;
  objectPosition?: string;
  span: string;
  metric: { value: string; label: string };
  overlay: React.ReactNode;
  accentHex: string;
};

const channels: Channel[] = [
  {
    title: "Instant SMS engagement",
    body: "Personalized text response sent within seconds of any form submission.",
    tag: "SMS",
    tagTone: "bg-accent-mint text-ink",
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=900&q=85",
    alt: "Hand typing a message on a smartphone",
    objectPosition: "center",
    span: "sm:col-span-2 lg:col-span-2",
    metric: { value: "< 8s", label: "first reply" },
    accentHex: "#FF916A",
    overlay: (
      <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-3 shadow-card backdrop-blur">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-500 text-[10px] font-bold text-white">P</span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">PracPros · just now</span>
        </div>
        <p className="mt-1.5 text-[12px] leading-snug text-ink">
          &ldquo;Hi! We can fit you in Friday at 2:30. Reply YES to confirm.&rdquo;
        </p>
      </div>
    ),
  },
  {
    title: "Automated callback",
    body: "Leads can receive a live callback within seconds of requesting one.",
    tag: "Call",
    tagTone: "bg-accent-blush text-ink",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=85",
    alt: "Person on a phone call",
    objectPosition: "center 30%",
    span: "sm:col-span-2 lg:col-span-2",
    metric: { value: "Ringing", label: "live callback" },
    accentHex: "#FF7142",
    overlay: (
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <div className="relative grid h-16 w-16 place-items-center rounded-full bg-brand-500 text-white shadow-[0_18px_30px_-10px_rgba(255,82,28,0.6)]">
          <span className="absolute inset-0 rounded-full bg-brand-400/40 animate-ping" />
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
            <path d="M5 3.5h3l1.5 4-2 1a8 8 0 0 0 4.5 4.5l1-2 4 1.5v3a2 2 0 0 1-2 2A12 12 0 0 1 3 5.5a2 2 0 0 1 2-2z" fill="currentColor" />
          </svg>
        </div>
        <div className="mt-2 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
          Live
        </div>
      </div>
    ),
  },
  {
    title: "After-hours AI chat",
    body: "Qualified leads captured and engaged 24 hours a day, seven days a week.",
    tag: "24 / 7",
    tagTone: "bg-accent-sky text-ink",
    image: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?auto=format&fit=crop&w=900&q=85",
    alt: "Laptop with chat interface in low light",
    objectPosition: "center",
    span: "sm:col-span-2 lg:col-span-2",
    metric: { value: "11:42 PM", label: "always on" },
    accentHex: "#43454B",
    overlay: (
      <div className="absolute bottom-4 left-4 right-4 space-y-1.5">
        <div className="inline-flex max-w-[80%] rounded-2xl rounded-bl-sm bg-white/95 px-2.5 py-1.5 text-[11.5px] text-ink shadow-card">
          Hi, are you open tomorrow?
        </div>
        <div className="ml-auto inline-flex max-w-[80%] items-center gap-1.5 rounded-2xl rounded-br-sm px-2.5 py-1.5 text-[11.5px] text-white shadow-card"
          style={{ background: "linear-gradient(135deg, #43454B, #FF521C)" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-300 animate-pulse" />
          Yes — booking now…
        </div>
      </div>
    ),
  },
  {
    title: "Missed call recovery",
    body: "Every missed call triggers an immediate follow-up sequence.",
    tag: "Recovery",
    tagTone: "bg-accent-butter text-ink",
    image: "https://images.unsplash.com/photo-1574192324001-ee41e18ed679?auto=format&fit=crop&w=900&q=85",
    alt: "Smartphone showing a missed call",
    objectPosition: "center",
    span: "sm:col-span-2 lg:col-span-3",
    metric: { value: "Recovered", label: "in 9s" },
    accentHex: "#FF916A",
    overlay: (
      <div className="absolute bottom-4 left-4 right-4">
        <div className="rounded-2xl bg-ink/90 p-3 text-white backdrop-blur shadow-card">
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="text-brand-400">
              <path d="M3 6.5a2 2 0 0 1 2-2h2L8.5 8 7 9a8 8 0 0 0 4 4l1-1.5 3.5 1.5v2a2 2 0 0 1-2 2A12 12 0 0 1 3 6.5z" fill="currentColor" />
              <path d="M12 3l3 3M15 3l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70">Missed call</span>
          </div>
          <div className="mt-1 flex items-center justify-between">
            <span className="font-display text-[15px] font-semibold">Calling back · 9s</span>
            <span className="rounded-full bg-brand-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
              Auto
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Lead nurturing",
    body: "Patients who don't book immediately stay engaged through intelligent follow-up until they're ready.",
    tag: "Nurture",
    tagTone: "bg-accent-lavender text-ink",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=900&q=85",
    alt: "Person working on laptop, following up with leads",
    objectPosition: "center 30%",
    span: "sm:col-span-2 lg:col-span-3",
    metric: { value: "5-touch", label: "sequence" },
    accentHex: "#5a5d65",
    overlay: (
      <div className="absolute bottom-4 left-4 right-4">
        <div className="rounded-2xl bg-white/95 p-3 shadow-card backdrop-blur">
          <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
            Follow-up sequence
          </div>
          <div className="mt-2 flex items-center gap-1">
            {[
              { d: "Day 1", on: true },
              { d: "Day 3", on: true },
              { d: "Day 7", on: true },
              { d: "Day 14", on: false },
              { d: "Day 30", on: false },
            ].map((s, i) => (
              <div key={i} className="flex flex-1 items-center gap-1">
                <span
                  className={`grid h-5 w-5 shrink-0 place-items-center rounded-full text-[9.5px] font-bold ${
                    s.on ? "bg-brand-500 text-white" : "bg-ink/10 text-ink-soft"
                  }`}
                >
                  {i + 1}
                </span>
                {i < 4 ? <span className={`h-px flex-1 ${s.on ? "bg-brand-300" : "bg-ink/10"}`} /> : null}
              </div>
            ))}
          </div>
          <div className="mt-1.5 text-[10.5px] font-medium text-ink-soft">
            Patient stays engaged until they book.
          </div>
        </div>
      </div>
    ),
  },
];

export function Resources() {
  return (
    <section
      id="resources"
      className="relative overflow-hidden py-20 md:py-28 text-ink"
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
        {/* Header */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-soft backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#FF521C" }} aria-hidden />
              Speed-to-Lead
            </span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-[64px] leading-[1.04] font-semibold tracking-[-0.028em] text-ink">
              The{" "}
              <span className="relative inline-block">
                <span className="relative z-10" style={{ color: "#FF521C" }}>First Office</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 h-3 -z-0 bg-accent-butter/60"
                  style={{ filter: "blur(0.5px)" }}
                />
              </span>{" "}
              to Respond
              <br />
              Almost Always Wins the Patient.
            </h2>
            <div className="mt-6 space-y-4 text-[16px] md:text-[17px] leading-[1.65] text-ink-soft">
              <p>
                This isn&rsquo;t a theory. It&rsquo;s a pattern we see in every
                market we operate in. A patient searching for a dentist is
                often contacting two or three offices within minutes.
              </p>
              <p className="font-medium text-ink">
                Response time is the invisible differentiator that determines
                who books the appointment.
              </p>
            </div>
          </div>

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="relative aspect-[4/5] w-full">
              {/* glow */}
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[40px] blur-3xl opacity-50"
                style={{
                  background:
                    "radial-gradient(60% 60% at 50% 50%, rgba(255,82,28,0.30), transparent 70%)",
                }}
              />

              {/* Phone-frame image card */}
              <div className="absolute inset-0 overflow-hidden rounded-[28px] border border-border bg-white shadow-[0_40px_80px_-30px_rgba(10,10,10,0.35)]">
                <Image
                  src="https://images.unsplash.com/photo-1581952976147-5a2d15560349?auto=format&fit=crop&w=900&q=85"
                  alt="Happy family smiling together"
                  fill
                  sizes="(min-width: 1024px) 480px, 60vw"
                  className="object-cover"
                  style={{ objectPosition: "center 25%" }}
                  unoptimized
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%)",
                  }}
                />
              </div>

              {/* Floating "Replied in 12s" badge */}
              <div
                className="absolute -left-4 top-10 inline-flex items-center gap-2 rounded-2xl border border-border bg-white px-3 py-2 shadow-card animate-float-soft"
                style={{ animationDuration: "7s" }}
              >
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand-100 text-brand-700">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <circle cx="8" cy="8" r="6.4" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 4.5V8L10.4 9.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
                <div className="leading-tight">
                  <div className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-muted">
                    PracPros agent
                  </div>
                  <div className="font-display text-[15px] font-semibold text-ink">
                    Replied in 12s
                  </div>
                </div>
              </div>

              {/* Floating SMS bubble */}
              <div
                className="absolute right-2 top-[42%] w-[200px] rounded-[18px] bg-white p-3 shadow-card animate-float-soft"
                style={{ animationDuration: "8.5s", animationDelay: "0.4s" }}
              >
                <div className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-muted">
                  Inbound SMS
                </div>
                <p className="mt-1 text-[12.5px] leading-snug text-ink">
                  &ldquo;Hi! Saw your form — we can fit you in Friday at 2:30. Reply YES to confirm.&rdquo;
                </p>
                <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2 py-0.5 text-[10.5px] font-semibold text-brand-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse" />
                  Delivered
                </div>
              </div>

              {/* Bottom "Booked" badge */}
              <div
                className="absolute -bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-white px-4 py-2 shadow-card animate-float-soft"
                style={{ animationDuration: "9s", animationDelay: "0.2s" }}
              >
                <span className="h-2 w-2 rounded-full bg-brand-500 animate-pulse" />
                <span className="font-display text-[14px] font-semibold text-ink">
                  Booked · 47 seconds total
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Channel cards — bento grid with rich visuals */}
        <div className="mt-16 md:mt-20 grid gap-5 sm:grid-cols-4 lg:grid-cols-6">
          {channels.map((c) => (
            <article
              key={c.title}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${c.span}`}
            >
              {/* Image layer */}
              <div className="relative h-[260px] overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                  style={{ objectPosition: c.objectPosition ?? "center" }}
                  unoptimized
                />
                {/* Bottom gradient */}
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.0) 35%, rgba(0,0,0,0.55) 100%)",
                  }}
                />
                {/* Accent edge glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-px rounded-[24px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(135deg, ${c.accentHex}55, transparent 50%)`,
                    mixBlendMode: "screen",
                  }}
                />

                {/* Top row: tag + metric */}
                <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider shadow-card ${c.tagTone}`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-ink/70" />
                    {c.tag}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-2.5 py-1 text-[10.5px] font-semibold text-white backdrop-blur">
                    <span
                      className="h-1.5 w-1.5 rounded-full animate-pulse"
                      style={{ background: c.accentHex }}
                    />
                    {c.metric.value}{" "}
                    <span className="text-white/65 font-normal normal-case">· {c.metric.label}</span>
                  </span>
                </div>

                {/* Visual overlay (per card) */}
                {c.overlay}
              </div>

              {/* Body */}
              <div className="relative flex flex-1 flex-col gap-3 p-6">
                <div
                  aria-hidden
                  className="absolute -top-px left-6 right-6 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${c.accentHex}80, transparent)`,
                  }}
                />
                <h3 className="font-display text-[20px] md:text-[22px] font-semibold tracking-tight text-ink leading-snug">
                  {c.title}
                </h3>
                <p className="text-[14.5px] leading-[1.55] text-ink-soft">
                  {c.body}
                </p>
              </div>
            </article>
          ))}

          {/* Closer CTA card */}
          <article className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border p-7 transition-all duration-300 hover:-translate-y-1 sm:col-span-4 lg:col-span-6"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,82,28,0.10) 0%, rgba(67,69,75,0.10) 100%)",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-12 -top-12 h-60 w-60 rounded-full blur-3xl opacity-60"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,82,28,0.5), transparent 70%)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-16 -left-12 h-60 w-60 rounded-full blur-3xl opacity-50"
              style={{
                background:
                  "radial-gradient(circle, rgba(67,69,75,0.5), transparent 70%)",
              }}
            />
            <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink-soft backdrop-blur">
                  <span
                    className="h-1.5 w-1.5 rounded-full animate-pulse"
                    style={{ background: "#FF521C" }}
                  />
                  Be first
                </span>
                <h3 className="mt-4 font-display text-[24px] md:text-[28px] font-semibold tracking-tight leading-snug text-ink">
                  See how fast PracPros responds —{" "}
                  <span className="text-ink-soft">to a real lead in your market.</span>
                </h3>
              </div>
              <Button
                href="#growth-audit"
                variant="primary"
                size="lg"
                trailingIcon
              >
                Get a Free Audit
              </Button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
