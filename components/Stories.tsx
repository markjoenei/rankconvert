import Image from "next/image";
import { Button } from "./ui/Button";
import { Reveal } from "./Reveal";

type Story = {
  id: string;
  customer: string;
  category: string;
  quote: string;
  attribution: string;
  image: string;
  imagePosition?: string;
  stat: { label: string; value: string };
};

const featured: Story = {
  id: "brighthill",
  customer: "Brighthill Family Dental",
  category: "General · Suburban",
  quote:
    "We rebuilt the front desk around the dashboard. On Monday morning we know exactly what Friday produced — without asking anyone.",
  attribution: "Dr. Lee · Owner",
  image: "/dentists/featured-story.png",
  imagePosition: "center 20%",
  stat: { label: "New patients", value: "+62%" },
};

const stories: Story[] = [
  {
    id: "magnolia",
    customer: "Magnolia Orthodontics",
    category: "Orthodontics",
    quote:
      "Inquiries used to die overnight. Now they book themselves before our team gets in.",
    attribution: "Dr. Mills · Founder",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85",
    imagePosition: "center 35%",
    stat: { label: "Response time", value: "47s" },
  },
  {
    id: "riverbend",
    customer: "Riverbend Dental",
    category: "General · Urban",
    quote:
      "We were invisible. Now we're the #1 dentist in our zip code and we know exactly why.",
    attribution: "Dr. Patel · Owner",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85",
    imagePosition: "center 30%",
    stat: { label: "Local rank", value: "#1" },
  },
  {
    id: "pacific",
    customer: "Pacific Family Dental",
    category: "Family · Recall focus",
    quote:
      "Dormant patients keep coming back. Their families come with them.",
    attribution: "Dr. Reyes · Owner",
    image:
      "https://images.unsplash.com/photo-1581952976147-5a2d15560349?auto=format&fit=crop&w=1200&q=85",
    imagePosition: "center 25%",
    stat: { label: "Reactivated", value: "+186/mo" },
  },
];

export function Stories() {
  return (
    <section
      id="stories"
      className="relative overflow-hidden py-16 md:py-24"
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
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-soft backdrop-blur shadow-card">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
            Customer stories
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-[60px] leading-[1.04] font-semibold tracking-[-0.028em] text-ink">
            Practices winning their{" "}
            <span className="text-[#FF521C]">market.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] md:text-[17px] leading-[1.6] text-ink-soft">
            Real practices. Real numbers — pulled from their live dashboard,
            not a case-study deck.
          </p>
        </Reveal>

        {/* Featured testimonial */}
        <Reveal delay={120} className="mt-14">
          <article className="group relative grid overflow-hidden rounded-3xl border border-border bg-white shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover lg:grid-cols-[1.05fr_1fr]">
            {/* Image */}
            <div className="relative aspect-[5/4] w-full overflow-hidden lg:aspect-auto lg:h-full">
              <Image
                src={featured.image}
                alt={featured.customer}
                fill
                sizes="(min-width: 1024px) 640px, 100vw"
                className="scale-[1.04] object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.1]"
                style={{ objectPosition: featured.imagePosition ?? "center" }}
                unoptimized
              />
              <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink shadow-card backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                Featured story
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between gap-8 p-8 md:p-10 lg:p-12">
              <div>
                <div className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-muted">
                  {featured.category}
                </div>
                <p className="mt-5 font-display text-[22px] md:text-[28px] lg:text-[30px] leading-[1.25] tracking-tight text-ink">
                  &ldquo;{featured.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="text-[14px] font-semibold text-ink">
                    {featured.customer}
                  </span>
                  <span aria-hidden className="h-1 w-1 rounded-full bg-muted" />
                  <span className="text-[13px] text-ink-soft">
                    {featured.attribution}
                  </span>
                </div>
              </div>

              {/* Stat tile */}
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-subtle/40 px-5 py-4">
                <div>
                  <div className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-muted">
                    {featured.stat.label}
                  </div>
                  <div className="mt-1 font-display text-[32px] font-semibold leading-none tracking-[-0.02em]">
                    <span className="bg-gradient-to-br from-ink to-[#FF521C] bg-clip-text text-transparent">
                      {featured.stat.value}
                    </span>
                  </div>
                </div>
                <span aria-hidden className="ml-auto h-12 w-px bg-border" />
                <div className="text-[12.5px] leading-snug text-ink-soft">
                  Six months from launch. Tracked live in the dashboard.
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Supporting stories — clean uniform 3-column grid */}
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal
              key={s.id}
              delay={240 + i * 100}
              as="article"
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="relative aspect-[5/4] w-full overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.customer}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 33vw, 100vw"
                  className="scale-[1.05] object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.12]"
                  style={{ objectPosition: s.imagePosition ?? "center" }}
                  unoptimized
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-muted">
                    {s.category}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-bold text-brand-700">
                    {s.stat.value}
                    <span className="ml-1 font-normal normal-case text-brand-600">
                      · {s.stat.label}
                    </span>
                  </span>
                </div>
                <p className="font-display text-[15.5px] leading-snug text-ink">
                  &ldquo;{s.quote}&rdquo;
                </p>
                <div className="mt-auto flex items-center gap-2 text-[12.5px]">
                  <span className="font-semibold text-ink">{s.customer}</span>
                  <span aria-hidden className="h-1 w-1 rounded-full bg-muted" />
                  <span className="text-ink-soft">{s.attribution}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <Button href="#stories-all" variant="primary" size="lg" trailingIcon>
            See more practice stories
          </Button>
          <Button href="#strategy-call" variant="secondary" size="lg">
            Talk to a strategist
          </Button>
        </div>
      </div>
    </section>
  );
}
