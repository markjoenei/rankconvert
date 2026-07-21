import Image from "next/image";
import Link from "next/link";

const COLUMNS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Quick Links",
    links: [
      { label: "Home", href: "#" },
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Website Design", href: "#" },
      { label: "SEO", href: "#" },
      { label: "Shopify", href: "#" },
      { label: "CRO", href: "#" },
      { label: "Social Media", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About RankConvert", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "0478 186 355", href: "tel:0478186355" },
      { label: "grow@rankconvert.com.au", href: "mailto:grow@rankconvert.com.au" },
      { label: "Melbourne, Australia", href: "#" },
    ],
  },
];

export function SemrushFooter() {
  return (
    <footer style={{ background: "linear-gradient(180deg, #12141c 0%, #0a0b10 55%, #0c0e15 100%)" }}>
      <div
        className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 pb-10"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div
          className="grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-16 mb-14 pb-14"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        >
          {/* Brand */}
          <div>
            <div className="mb-5 inline-block animate-rocket-fly">
              <Image
                src="/brand/rocket.webp"
                alt="RankConvert"
                width={720}
                height={680}
                className="h-28 sm:h-36 w-auto"
                priority={false}
              />
            </div>
            <h3 className="text-[20px] sm:text-[24px] font-black text-white leading-[1.2] tracking-tight mb-3">
              Digital marketing that actually grows your business.
            </h3>
            <p className="text-[13px] leading-[1.6] max-w-[440px]" style={{ color: "rgba(255,255,255,0.45)" }}>
              RankConvert is a Melbourne-based, Australian-owned digital marketing agency specialising in SEO, website design, Shopify stores, conversion rate optimisation, and social media marketing for businesses across Australia.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-5">
              <span
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-white/70 px-3 py-1.5 rounded-full"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <circle cx="6" cy="6" r="5" fill="#f5c842" />
                </svg>
                5-Star Google Rated
              </span>
              <span
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-white/70 px-3 py-1.5 rounded-full"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                🇦🇺 Australian Owned
              </span>
              <span
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-white/70 px-3 py-1.5 rounded-full"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                No Lock-in Contracts
              </span>
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <div className="text-[13px] font-bold text-white mb-3">Get monthly growth insights</div>
            <p className="text-[12px] mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
              Practical tips to grow your business online. No spam, unsubscribe anytime.
            </p>
            <form
              className="flex items-center gap-2 rounded-full pl-4 pr-1.5 h-[48px] max-w-[400px]"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <input
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                className="flex-1 min-w-0 text-[14px] text-white placeholder-white/30 outline-none bg-transparent"
              />
              <button
                type="submit"
                className="shrink-0 px-5 h-[38px] rounded-full text-[13px] font-bold text-[#09090e] hover:bg-[#e6b830] transition-colors"
                style={{ background: "#f5c842" }}
              >
                Subscribe
              </button>
            </form>
            <div className="flex items-center gap-2 mt-5 text-[11px] font-semibold" style={{ color: "#f5c842" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5c842] animate-pulse" />
              Ready to grow your business?
            </div>
            <a
              href="#"
              className="inline-flex items-center justify-center mt-3 px-5 h-[38px] rounded-full text-[13px] font-bold text-[#09090e] hover:bg-[#e6b830] transition-colors"
              style={{ background: "#f5c842" }}
            >
              Scale My Business Today
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-10">
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-[13px] font-bold text-white mb-4">{col.heading}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[13px] hover:text-white transition-colors"
                      style={{ color: "rgba(255,255,255,0.45)" }}
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

      {/* Social + legal */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div
          className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <Socials />
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px]" style={{ color: "rgba(255,255,255,0.3)" }}>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>

        <div className="mt-6">
          <span className="text-[12px]" style={{ color: "rgba(255,255,255,0.25)" }}>
            © 2026 RankConvert. All Rights Reserved. Melbourne, Australia.
          </span>
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="relative w-full overflow-hidden" style={{ background: "#f5c842" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-16">
          <h2
            aria-hidden
            className="font-black leading-[0.9] tracking-[-0.05em] text-center"
            style={{ fontSize: "clamp(64px, 17vw, 260px)", color: "#09090e" }}
          >
            RANKCONVERT
          </h2>
        </div>
      </div>
    </footer>
  );
}

function Socials() {
  const items: { label: string; href: string; icon: React.ReactNode }[] = [
    {
      label: "Facebook",
      href: "#",
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <path d="M11 17v-7h2.4l.4-2.6H11V5.7c0-.8.2-1.3 1.3-1.3h1.5V2c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2H6v2.6h2.4V17H11z" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "#",
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <rect x="1.5" y="1.5" width="15" height="15" rx="4" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="9" cy="9" r="3.2" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="13.2" cy="4.8" r="0.8" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "#",
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <rect x="1" y="1" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
          <rect x="4" y="7" width="2" height="7" fill="currentColor" />
          <circle cx="5" cy="5" r="1" fill="currentColor" />
          <path d="M8 7h2v1c.4-.7 1.2-1.2 2.2-1.2 1.7 0 2.8 1 2.8 3v4h-2v-3.6c0-1-.5-1.6-1.4-1.6s-1.6.6-1.6 1.7V14H8V7z" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex items-center gap-3" style={{ color: "rgba(255,255,255,0.4)" }}>
      {items.map((it) => (
        <a
          key={it.label}
          href={it.href}
          aria-label={it.label}
          className="hover:text-white transition-colors"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          {it.icon}
        </a>
      ))}
    </div>
  );
}
