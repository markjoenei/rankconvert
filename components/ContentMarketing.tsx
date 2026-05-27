import Image from "next/image";
import { Button } from "./ui/Button";
import { Reveal } from "./Reveal";

const platforms = [
  { label: "Instagram", color: "bg-gradient-to-br from-brand-300 via-brand-400 to-brand-500" },
  { label: "Facebook", color: "bg-brand-500" },
  { label: "TikTok", color: "bg-ink" },
  { label: "YouTube Shorts", color: "bg-brand-500" },
  { label: "Google Business Profile", color: "bg-brand-500" },
];

export function ContentMarketing() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24" style={{ background: "#faf9f7" }}>
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

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        {/* Text */}
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-soft backdrop-blur shadow-card">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
            Content marketing
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-[60px] leading-[1.04] font-semibold tracking-[-0.028em] text-ink">
            Content That Feels Like{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#FF521C]">Your Practice.</span></span>
            <span className="block">Not Like Every Other Dental Practice.</span>
          </h2>

          <div className="mt-6 space-y-4 text-[16px] md:text-[17px] leading-[1.65] text-ink-soft">
            <p>
              Patients can recognize generic dental marketing immediately — the
              stock photos, the template posts, the &ldquo;smile with us&rdquo;
              captions. It doesn&rsquo;t build trust. It builds nothing.
            </p>
            <p>
              We create content that actually reflects who you are: your team,
              your approach, your patients&rsquo; experiences, and the community
              you&rsquo;re part of. Content that makes someone stop scrolling
              because it feels real — and reminds them that there&rsquo;s a
              specific practice they should trust with their family&rsquo;s
              care.
            </p>
            <p className="font-semibold text-ink">
              Platforms covered:
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            {platforms.map((p) => (
              <span
                key={p.label}
                className="inline-flex items-center gap-2.5 rounded-full border border-border bg-white px-4 py-2.5 text-[14.5px] font-semibold tracking-tight text-ink shadow-card"
              >
                <span className={`h-2.5 w-2.5 rounded-full ${p.color}`} />
                {p.label}
              </span>
            ))}
          </div>

          <p className="mt-6 text-[16.5px] leading-[1.6] text-ink-soft">
            Campaigns built around your practice&rsquo;s calendar, promotions,
            and patient journey milestones.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#growth-audit" variant="primary" size="md" trailingIcon>
              See Sample Content Plan
            </Button>
          </div>
        </Reveal>

        {/* Visual: stack of social/content cards (bigger) */}
        <Reveal delay={120} className="relative mx-auto w-full max-w-[720px]">
          <div className="relative aspect-[4/5] w-full">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[48px] blur-3xl opacity-50"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 50%, rgba(67,69,75,0.35), transparent 70%)",
              }}
            />

            {/* Card 1 — Instagram-style post (real photo) */}
            <div
              className="absolute left-[6%] top-[2%] w-[76%] rotate-[-3deg] rounded-[24px] border border-border bg-white p-4 shadow-card animate-float-soft"
              style={{ animationDuration: "8s" }}
            >
              <div className="flex items-center gap-2.5">
                <span className="h-9 w-9 rounded-full bg-gradient-to-br from-brand-300 via-brand-400 to-brand-500" />
                <div className="text-[14px] font-semibold text-ink">brighthill_dental</div>
                <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-[12px] font-bold text-brand-600">
                  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
                    <path d="M6 10.5S1 7.2 1 4.4C1 3 2.1 2 3.4 2c.9 0 1.7.5 2.1 1.2C5.9 2.5 6.7 2 7.6 2 8.9 2 10 3 10 4.4c0 2.8-4 6.1-4 6.1z" fill="currentColor" />
                  </svg>
                  342
                </span>
              </div>
              <div className="relative mt-3 aspect-[4/3] w-full overflow-hidden rounded-[16px]">
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=85"
                  alt="Dental hygiene team"
                  fill
                  sizes="(min-width: 1024px) 460px, 60vw"
                  className="object-cover"
                  unoptimized
                />
                <span className="absolute bottom-2.5 left-2.5 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse" />
                  Real team
                </span>
              </div>
              <p className="mt-3 text-[14px] leading-snug text-ink">
                Meet Jen & the hygiene crew. ✨ Real team. Real Tuesday.
              </p>
            </div>

            {/* Card 2 — TikTok / Reel (real photo) */}
            <div
              className="absolute right-[4%] top-[16%] w-[52%] rotate-[5deg] rounded-[24px] bg-ink p-1.5 shadow-[0_40px_70px_-25px_rgba(10,10,10,0.5)] animate-float-soft"
              style={{ animationDuration: "9s", animationDelay: "0.4s" }}
            >
              <div className="relative aspect-[9/16] overflow-hidden rounded-[20px]">
                <Image
                  src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=600&q=85"
                  alt="Dentist talking on camera"
                  fill
                  sizes="(min-width: 1024px) 320px, 45vw"
                  className="object-cover"
                  style={{ objectPosition: "center 15%" }}
                  unoptimized
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.65) 100%)",
                  }}
                />
                <div className="absolute inset-x-3 bottom-10 text-white">
                  <div className="font-display text-[24px] font-semibold leading-tight">
                    3 myths
                  </div>
                  <div className="text-[12px] uppercase tracking-[0.14em] text-white/85">
                    about whitening
                  </div>
                </div>
                <div className="absolute bottom-2.5 left-2.5 inline-flex items-center gap-1 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
                  ▶ 48s
                </div>
                <div className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1 rounded-full bg-brand-500/95 px-2 py-0.5 text-[11px] font-bold text-white">
                  12.4k
                </div>
              </div>
            </div>

            {/* Card 3 — Google Business post (real photo) */}
            <div
              className="absolute left-[4%] bottom-[6%] w-[66%] rotate-[2deg] overflow-hidden rounded-[22px] border border-border bg-white shadow-card animate-float-soft"
              style={{ animationDuration: "7.5s", animationDelay: "0.7s" }}
            >
              <div className="relative h-[130px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=85"
                  alt="Dentist working with patient"
                  fill
                  sizes="(min-width: 1024px) 420px, 55vw"
                  className="object-cover"
                  style={{ objectPosition: "center 35%" }}
                  unoptimized
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-white shadow-card">
                    <svg width="16" height="16" viewBox="0 0 18 18" aria-hidden>
                      <path d="M17.6 9.2c0-.7-.1-1.3-.2-2H9v3.8h4.8c-.2 1.1-.8 2-1.8 2.6v2.2h2.9c1.7-1.6 2.7-3.9 2.7-6.6z" fill="#43454B" />
                      <path d="M9 18c2.4 0 4.5-.8 6-2.2l-2.9-2.2c-.8.5-1.8.9-3.1.9-2.4 0-4.4-1.6-5.1-3.8H.9v2.3C2.4 15.9 5.5 18 9 18z" fill="#43454B" />
                      <path d="M3.9 10.7c-.2-.5-.3-1.1-.3-1.7s.1-1.2.3-1.7V5H.9C.3 6.2 0 7.6 0 9s.3 2.8.9 4l3-2.3z" fill="#43454B" />
                      <path d="M9 3.6c1.3 0 2.5.5 3.5 1.4l2.6-2.6C13.5.9 11.4 0 9 0 5.5 0 2.4 2.1.9 5l3 2.3C4.6 5.2 6.6 3.6 9 3.6z" fill="#43454B" />
                    </svg>
                  </span>
                  <div className="text-[13.5px] font-semibold text-ink">Bright Hill Dental</div>
                </div>
                <div className="mt-2.5 text-[15px] font-semibold text-ink leading-snug">
                  Now offering Saturday cleanings
                </div>
                <p className="mt-1.5 text-[12.5px] leading-snug text-muted">
                  Posted by your team · 1.2k impressions this week
                </p>
              </div>
            </div>

            {/* Card 4 — Calendar / publishing pill (bigger) */}
            <div
              className="absolute right-[2%] bottom-[2%] inline-flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3.5 shadow-card animate-float-soft"
              style={{ animationDuration: "8.5s", animationDelay: "0.2s" }}
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-100 text-brand-700">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <rect x="2" y="3" width="12" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M2 6h12M5.5 2v3M10.5 2v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </span>
              <div className="leading-tight">
                <div className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-muted">
                  Next post
                </div>
                <div className="font-display text-[17px] font-semibold text-ink">
                  Thu · 10:30 AM
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
