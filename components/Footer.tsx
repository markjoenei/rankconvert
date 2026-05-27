import Link from "next/link";
import { Logo } from "./ui/Logo";
import { NewsletterForm } from "./NewsletterForm";

const columns: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Solutions",
    links: [
      { label: "Websites", href: "#websites" },
      { label: "SEO & AEO", href: "#seo" },
      { label: "Google Ads", href: "#google-ads" },
      { label: "Speed-to-Lead", href: "#speed-to-lead" },
      { label: "Reputation", href: "#reputation" },
      { label: "Referral Engine", href: "#referral" },
      { label: "Dashboard", href: "#dashboard" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "General Dentistry", href: "#general" },
      { label: "Orthodontics", href: "#orthodontics" },
      { label: "Cosmetic Dentistry", href: "#cosmetic" },
      { label: "Oral Surgery", href: "#oral-surgery" },
      { label: "Pediatric Dentistry", href: "#pediatric" },
      { label: "DSOs & Multi-Location", href: "#dso" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Blog", href: "#blog" },
      { label: "Partners", href: "#partners" },
      { label: "Contact", href: "#contact" },
      { label: "Google Premier Partner", href: "#premier-partner" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      className="relative isolate overflow-hidden border-t border-white/10 text-white"
      style={{ background: "#43454B" }}
    >
      {/* Grid + glow backdrop, matching dark sections */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 95%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-[480px] w-[480px] rounded-full blur-3xl opacity-30 -z-[1]"
        style={{
          background: "radial-gradient(circle, rgba(255,82,28,0.45), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-30 -z-[1]"
        style={{
          background: "radial-gradient(circle, rgba(67,69,75,0.55), transparent 70%)",
        }}
      />

      <div className="container-page relative py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            {/* Footer brand block */}
            <div className="inline-flex items-center rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur">
              <Logo invert imageClassName="h-12 w-auto md:h-14" />
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span aria-hidden className="h-px w-8 bg-brand-500" />
              <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-brand-400">
                Dental marketing, engineered.
              </span>
            </div>

            <p className="mt-5 max-w-sm text-[14.5px] leading-[1.65] text-white/75">
              PRACPROS is a dental marketing agency specializing in AI-native
              patient acquisition systems, Google Premier Partner advertising,
              conversion-optimized websites, local SEO, speed-to-lead
              automation, and real-time performance visibility — for dental
              practices across North America that are serious about growth.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur">
              <svg width="14" height="14" viewBox="0 0 18 18" aria-hidden>
                <path d="M17.6 9.2c0-.7-.1-1.3-.2-2H9v3.8h4.8c-.2 1.1-.8 2-1.8 2.6v2.2h2.9c1.7-1.6 2.7-3.9 2.7-6.6z" fill="#43454B" />
                <path d="M9 18c2.4 0 4.5-.8 6-2.2l-2.9-2.2c-.8.5-1.8.9-3.1.9-2.4 0-4.4-1.6-5.1-3.8H.9v2.3C2.4 15.9 5.5 18 9 18z" fill="#43454B" />
                <path d="M3.9 10.7c-.2-.5-.3-1.1-.3-1.7s.1-1.2.3-1.7V5H.9C.3 6.2 0 7.6 0 9s.3 2.8.9 4l3-2.3z" fill="#43454B" />
                <path d="M9 3.6c1.3 0 2.5.5 3.5 1.4l2.6-2.6C13.5.9 11.4 0 9 0 5.5 0 2.4 2.1.9 5l3 2.3C4.6 5.2 6.6 3.6 9 3.6z" fill="#43454B" />
              </svg>
              Google Premier Partner
            </div>

            {/* Get directions + Write a review */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-[13px] font-semibold text-white backdrop-blur transition-all hover:-translate-y-[1px] hover:border-white/40 hover:bg-white/15"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M8 1.5c2.8 0 5 2.2 5 5 0 3.5-5 8-5 8s-5-4.5-5-8c0-2.8 2.2-5 5-5z" stroke="currentColor" strokeWidth="1.4" />
                    <circle cx="8" cy="6.5" r="1.8" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </span>
                Get directions
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden className="transition-transform group-hover:translate-x-0.5">
                  <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              <Link
                href="https://g.page/r/your-place/review"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[#FF521C] px-4 py-2.5 text-[13px] font-semibold text-white shadow-[0_8px_24px_-12px_rgba(255,82,28,0.55)] transition-all hover:-translate-y-[1px] hover:bg-[#e0461a]"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20">
                  <svg width="13" height="13" viewBox="0 0 18 18" aria-hidden>
                    <path d="M9 1.5l2.2 5L17 7l-4.2 3.7 1.3 5.7L9 13l-5.1 3.4 1.3-5.7L1 7l5.8-.5L9 1.5z" fill="currentColor" />
                  </svg>
                </span>
                Write a review
              </Link>
            </div>

            <NewsletterForm />
            <p className="mt-2 text-[12px] text-white/60">
              Get monthly growth insights. Unsubscribe anytime.
            </p>
          </div>

          <div className="grid gap-10 md:col-span-8 md:grid-cols-3">
            {columns.map((c) => (
              <div key={c.heading}>
                <div className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-white/90">
                  {c.heading}
                </div>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-[14px] text-white/70 transition-colors hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center">
          <div className="text-[12.5px] text-white/60">
            © {new Date().getFullYear()} PRACPROS, Inc. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-white/60">
            <Link href="#privacy" className="hover:text-white">Privacy</Link>
            <Link href="#terms" className="hover:text-white">Terms</Link>
            <Link href="#cookies" className="hover:text-white">Cookies</Link>
            <Link href="#status" className="hover:text-white">Status</Link>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
