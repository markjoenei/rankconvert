import Image from "next/image";
import { Reveal } from "./Reveal";
import { CountUp } from "./ui/CountUp";

type Stat = {
  value: string;
  label: string;
  sub?: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
};

const stats: Stat[] = [
  {
    value: "412%",
    label: "Avg organic growth",
    sub: "Year one across managed accounts",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Growing dental practice team",
    imagePosition: "center 30%",
  },
  {
    value: "47s",
    label: "Median response time",
    sub: "Across calls, chat, and form fills",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Patient receiving fast response",
    imagePosition: "center 25%",
  },
  {
    value: "4.9★",
    label: "Patient rating",
    sub: "Average across PRACPROS practices",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Smiling patient",
    imagePosition: "center 25%",
  },
  {
    value: "6.4×",
    label: "Return on ad spend",
    sub: "Channel-attributed, full-funnel",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
    imageAlt: "ROI dashboard analytics",
    imagePosition: "center 50%",
  },
];

export function Stats() {
  return (
    <section
      aria-label="Performance highlights"
      className="relative isolate overflow-hidden py-16 md:py-24"
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
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 95%)",
        }}
      />

      <div className="container-page relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-soft backdrop-blur shadow-card">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
            By the numbers
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-[56px] leading-[1.05] font-semibold tracking-[-0.028em] text-ink">
            Outcomes our practices{" "}
            <span className="text-[#FF521C]">measure every day.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[16.5px] md:text-[17.5px] leading-[1.55] text-ink-soft">
            Not vanity metrics. The numbers that change production, retention,
            and the quality of every Monday morning.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 100}
              className="group relative flex flex-col bg-white transition-colors hover:bg-subtle/30"
            >
              {/* Image — top of card */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  style={{ objectPosition: s.imagePosition ?? "center" }}
                  unoptimized
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(67,69,75,0) 55%, rgba(67,69,75,0.45) 100%)",
                  }}
                />
              </div>

              {/* Stat content */}
              <div className="flex flex-col gap-2 p-6 md:p-7">
                <div className="font-display text-[40px] md:text-[48px] font-semibold leading-none tracking-[-0.03em] text-ink">
                  <span className="bg-gradient-to-br from-ink to-[#FF521C] bg-clip-text text-transparent">
                    <CountUp value={s.value} />
                  </span>
                </div>
                <div className="mt-2 text-[14px] font-semibold text-ink">
                  {s.label}
                </div>
                {s.sub ? (
                  <div className="text-[12.5px] leading-snug text-ink-soft">
                    {s.sub}
                  </div>
                ) : null}
              </div>

              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-brand-500 to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
