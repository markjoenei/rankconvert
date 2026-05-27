import Image from "next/image";
import { Button } from "./ui/Button";
import { Reveal } from "./Reveal";
import { CountUp } from "./ui/CountUp";

type Step = {
  id: string;
  time: string;
  label: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
};

const steps: Step[] = [
  {
    id: "submit",
    time: "0s",
    label: "Inquiry lands",
    title: "Form, chat, or missed call.",
    body: "A patient searches for a dentist, lands on your site, and submits a form — or messages, or rings the after-hours line.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Patient searching for a dentist on their laptop",
    imagePosition: "center 35%",
  },
  {
    id: "reply",
    time: "12s",
    label: "Reply sent",
    title: "Personalized response, not a template.",
    body: "Your PRACPROS system replies in seconds with their name, the service they asked about, and two booking options.",
    image: "/dentists/front-desk.png",
    imageAlt: "Front desk team replying to a patient inquiry at Aura Dental",
    imagePosition: "center 45%",
  },
  {
    id: "booked",
    time: "47s",
    label: "Patient booked",
    title: "Confirmed before a competitor calls back.",
    body: "They tap a slot, get an instant calendar invite, and your front desk sees the booking in real time on the dashboard.",
    image: "/dentists/confirmed.jpg",
    imageAlt: "Patient confirming their appointment via chat",
    imagePosition: "center 40%",
  },
];

const proof = [
  { v: "47s", l: "median first reply" },
  { v: "84%", l: "patients booked from web" },
  { v: "24 / 7", l: "after-hours coverage" },
  { v: "0", l: "missed inquiries" },
];

export function Resources() {
  return (
    <section
      id="resources"
      className="relative overflow-hidden py-16 md:py-24 text-ink"
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
        <Reveal className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-soft backdrop-blur shadow-card">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#FF521C" }} aria-hidden />
            Speed-to-lead
          </span>
          <h2
            className="mt-5 font-display font-semibold leading-[1.05] tracking-[-0.028em] text-ink"
            style={{ fontSize: "clamp(22px, 4.8vw, 56px)" }}
          >
            <span className="block whitespace-nowrap">The first office to respond,</span>
            <span className="block whitespace-nowrap text-[#FF521C]">almost always wins.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] md:text-[17px] leading-[1.6] text-ink-soft">
            Patients contact two or three practices within minutes. Response
            time is the invisible differentiator that decides which chair gets
            filled — and which practice gets the call.
          </p>
        </Reveal>

        {/* 3-step timeline */}
        <div className="relative mt-14">
          {/* connecting line (md+) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-[140px] hidden md:block"
          >
            <svg viewBox="0 0 1200 4" className="h-1 w-full" preserveAspectRatio="none">
              <line
                x1="0"
                y1="2"
                x2="1200"
                y2="2"
                stroke="rgba(255,82,28,0.4)"
                strokeWidth="2"
                strokeDasharray="6 8"
              />
            </svg>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal
                key={s.id}
                delay={i * 140}
                as="article"
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 33vw, 100vw"
                    className="scale-[1.06] object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.14]"
                    style={{ objectPosition: s.imagePosition ?? "center" }}
                    unoptimized
                  />
                  {/* Bottom gradient */}
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(67,69,75,0) 50%, rgba(67,69,75,0.55) 100%)",
                    }}
                  />
                  {/* Time + step badge top-left */}
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#FF521C] font-display text-[18px] font-bold text-white shadow-card">
                      {s.time}
                    </span>
                  </div>
                  {/* Step label bottom */}
                  <span className="absolute bottom-4 left-5 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink shadow-card backdrop-blur">
                    <span className="font-mono text-muted">
                      0{i + 1}
                    </span>
                    <span aria-hidden className="h-0.5 w-3 bg-ink/30" />
                    {s.label}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-3 p-6 md:p-7">
                  <h3 className="font-display text-[20px] md:text-[22px] font-semibold tracking-tight text-ink leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-[14.5px] leading-[1.6] text-ink-soft">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Proof strip */}
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
          {proof.map((p, i) => (
            <Reveal
              key={p.l}
              delay={i * 80}
              className="bg-white p-5 text-center transition-colors hover:bg-subtle/40 md:p-7"
            >
              <div className="font-display text-[30px] md:text-[36px] font-semibold leading-none tracking-[-0.02em]">
                <span className="bg-gradient-to-br from-ink to-[#FF521C] bg-clip-text text-transparent">
                  <CountUp value={p.v} />
                </span>
              </div>
              <div className="mt-2 text-[12px] font-medium uppercase tracking-[0.1em] text-muted">
                {p.l}
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <Button href="#growth-audit" variant="primary" size="lg" trailingIcon>
            Test our response time
          </Button>
          <Button href="#demo" variant="secondary" size="lg">
            See it in action
          </Button>
        </div>
      </div>
    </section>
  );
}
