import { Reveal } from "@/components/ui/Reveal";
import { SemrushPreFooterCTA } from "@/components/semrush/PreFooterCTA";

export type LegalSection = {
  heading: string;
  body: React.ReactNode;
};

export function LegalLayout({
  eyebrow,
  title,
  subtitle,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(91,155,213,0.18) 0%, transparent 60%), linear-gradient(180deg, #10121a 0%, #09090e 60%, #0b0d14 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-[820px] mx-auto text-center">
            <div className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "#f5c842" }}>
              {eyebrow}
            </div>
            <h1 className="text-[32px] sm:text-[48px] lg:text-[60px] font-black text-white leading-[1.05] tracking-[-1.6px] mb-5">
              {title}
            </h1>
            <p className="text-[15px] sm:text-[17px] text-white/60 leading-[1.65] max-w-[640px] mx-auto mb-4">
              {subtitle}
            </p>
            <div className="text-[12px] text-white/40">Last updated: {updated}</div>
          </div>
        </div>
      </section>

      {/* Body */}
      <Reveal variant="up">
        <section className="py-14 sm:py-20" style={{ background: "#f6f6f8" }}>
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[240px_1fr] gap-10 lg:gap-16">
              {/* Sticky TOC */}
              <nav className="hidden lg:block">
                <div className="sticky top-24">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-[#09090e]/45 mb-4">
                    On this page
                  </div>
                  <ul className="space-y-2">
                    {sections.map((s, i) => (
                      <li key={i}>
                        <a
                          href={`#s-${i + 1}`}
                          className="text-[13px] leading-[1.4] text-[#09090e]/65 hover:text-[#09090e] transition-colors block"
                        >
                          {i + 1}. {s.heading}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>

              {/* Content */}
              <article className="max-w-[720px]">
                {sections.map((s, i) => (
                  <section key={i} id={`s-${i + 1}`} className="mb-10 scroll-mt-24">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full text-[12px] font-black text-[#09090e] shrink-0"
                        style={{ background: "#f5c842" }}
                      >
                        {i + 1}
                      </span>
                      <h2 className="text-[20px] sm:text-[24px] font-black text-[#09090e] leading-[1.2] tracking-tight">
                        {s.heading}
                      </h2>
                    </div>
                    <div className="text-[14px] sm:text-[15px] leading-[1.75] text-[#09090e]/70 space-y-3 pl-11">
                      {s.body}
                    </div>
                  </section>
                ))}
              </article>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal variant="scale">
        <SemrushPreFooterCTA />
      </Reveal>
    </>
  );
}
