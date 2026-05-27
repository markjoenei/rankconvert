import Image from "next/image";
import { Button } from "./ui/Button";
import { Reveal } from "./Reveal";

type Reason = {
  title: string;
  body: string;
  span: string;
  accentHex: string;
  badge: React.ReactNode;
};

const reasons: Reason[] = [
  {
    title: "Google Premier Partner",
    body: "Fewer than 3% of marketing agencies hold Google Premier Partner status. It means advanced platform access, dedicated Google support, and verified performance across managed accounts. Your campaigns are in expert hands.",
    span: "md:col-span-2",
    accentHex: "#43454B",
    badge: (
      <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11.5px] font-semibold text-ink shadow-card">
        <svg width="14" height="14" viewBox="0 0 18 18" aria-hidden>
          <path d="M17.6 9.2c0-.7-.1-1.3-.2-2H9v3.8h4.8c-.2 1.1-.8 2-1.8 2.6v2.2h2.9c1.7-1.6 2.7-3.9 2.7-6.6z" fill="#43454B" />
          <path d="M9 18c2.4 0 4.5-.8 6-2.2l-2.9-2.2c-.8.5-1.8.9-3.1.9-2.4 0-4.4-1.6-5.1-3.8H.9v2.3C2.4 15.9 5.5 18 9 18z" fill="#43454B" />
          <path d="M3.9 10.7c-.2-.5-.3-1.1-.3-1.7s.1-1.2.3-1.7V5H.9C.3 6.2 0 7.6 0 9s.3 2.8.9 4l3-2.3z" fill="#43454B" />
          <path d="M9 3.6c1.3 0 2.5.5 3.5 1.4l2.6-2.6C13.5.9 11.4 0 9 0 5.5 0 2.4 2.1.9 5l3 2.3C4.6 5.2 6.6 3.6 9 3.6z" fill="#43454B" />
        </svg>
        Premier Partner · top 3%
      </span>
    ),
  },
  {
    title: "Dental-specific. Not adapted from another industry.",
    body: "We don't apply a general marketing framework to dental. We've built our systems specifically for the patient acquisition cycle, the local search dynamics, and the conversion behavior of dental patients — and we optimize exclusively for the metrics that matter in a dental practice: new patients, case acceptance, and production.",
    span: "md:col-span-1",
    accentHex: "#FF521C",
    badge: (
      <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[11.5px] font-semibold text-ink shadow-card">
        <span className="grid h-5 w-5 place-items-center rounded-full" style={{ background: "#FF521C" }}>
          <svg width="11" height="11" viewBox="0 0 12 12" aria-hidden className="text-white">
            <path d="M6 1c2 0 4 1 4 3.5 0 1.5-.5 2.5-1 4.5-.5 2-1 5-2 5-.5 0-.75-1.5-1-3.5-.25 2-.5 3.5-1 3.5-1 0-1.5-3-2-5-.5-2-1-3-1-4.5C2 2 4 1 6 1z" fill="currentColor" />
          </svg>
        </span>
        Dental-native
      </span>
    ),
  },
  {
    title: "One system. One point of accountability.",
    body: "No more managing multiple vendors, reconciling conflicting reports, or wondering which agency is responsible for which result. PRACPROS is your single growth partner — with one dashboard, one team, and one mandate: fill your chairs.",
    span: "md:col-span-1",
    accentHex: "#FF521C",
    badge: (
      <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[11.5px] font-semibold text-ink shadow-card">
        <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-500 text-white text-[10px]">P</span>
        One partner
      </span>
    ),
  },
  {
    title: "Built for the next generation of search.",
    body: "AI is fundamentally changing how patients discover healthcare providers. Our infrastructure is built for where search is going — not where it's been. GEO, AEO, and AI-native architecture are standard in every PRACPROS build.",
    span: "md:col-span-1",
    accentHex: "#43454B",
    badge: (
      <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[11.5px] font-semibold text-ink shadow-card">
        <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden className="text-brand-600">
          <path d="M8 1.5l1.5 4 4 1.5-4 1.5L8 12.5l-1.5-4-4-1.5 4-1.5L8 1.5z" fill="currentColor" />
        </svg>
        AI-native
      </span>
    ),
  },
  {
    title: "Technology and people.",
    body: "Automation handles the speed and consistency. Strategy and creative require real expertise. You get both — intelligent systems backed by specialists who understand dental growth.",
    span: "md:col-span-1",
    accentHex: "#FF916A",
    badge: (
      <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[11.5px] font-semibold text-ink shadow-card">
        <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-500 text-white text-[10px]">⚙</span>
        AI + Humans
      </span>
    ),
  },
];

export function WhyPracpros() {
  return (
    <section
      className="relative isolate overflow-hidden py-16 md:py-24 text-ink"
      style={{ background: "#faf9f7" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(67,69,75,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(67,69,75,0.08) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 95%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-[480px] w-[480px] rounded-full blur-3xl opacity-40 -z-[1]"
        style={{
          background: "radial-gradient(circle, rgba(255,82,28,0.25), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-40 -z-[1]"
        style={{
          background: "radial-gradient(circle, rgba(67,69,75,0.3), transparent 70%)",
        }}
      />

      <div className="container-page relative">
        {/* Header */}
        <Reveal className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-soft backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#FF521C" }} aria-hidden />
            Why PRACPROS
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-[60px] leading-[1.04] font-semibold tracking-[-0.028em] text-ink">
            Why the{" "}
            <span className="relative inline-block">
              <span className="relative z-10" style={{ color: "#FF521C" }}>Fastest-Growing</span></span>
            <span className="block">Practices Choose PRACPROS.</span>
          </h2>
        </Reveal>

        {/* Bento grid of reasons */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal
              key={r.title}
              delay={i * 80}
              as="article"
              className={`group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${r.span}`}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl opacity-50 transition-opacity duration-500 group-hover:opacity-80"
                style={{
                  background: `radial-gradient(circle, ${r.accentHex}33, transparent 70%)`,
                }}
              />
              <div className="relative flex items-center justify-between">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                  0{i + 1}
                </span>
                {r.badge}
              </div>
              <h3 className="relative mt-6 font-display text-[22px] md:text-[24px] font-semibold tracking-tight text-ink leading-[1.2]">
                {r.title}
              </h3>
              <p className="relative mt-3 text-[14.5px] leading-[1.6] text-ink-soft">
                {r.body}
              </p>
              {r.title.startsWith("Technology and people") ? (
                <div className="relative mt-5 flex items-center gap-2">
                  {[
                    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=120&q=80",
                    "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=120&q=80",
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
                  ].map((src, idx) => (
                    <span
                      key={src}
                      className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white shadow-card"
                      style={{ marginLeft: idx === 0 ? 0 : -10 }}
                    >
                      <Image src={src} alt="" fill sizes="32px" className="object-cover" unoptimized />
                    </span>
                  ))}
                  <span className="ml-2 inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse" />
                    Real strategists
                  </span>
                </div>
              ) : null}
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <Button
            href="#growth-audit"
            variant="primary"
            size="lg"
            trailingIcon
          >
            Get a Free Growth Audit
          </Button>
          <Button
            href="#strategy-call"
            variant="secondary"
            size="lg"
          >
            Schedule a Strategy Call
          </Button>
        </div>
      </div>
    </section>
  );
}
