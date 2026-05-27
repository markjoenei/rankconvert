import Image from "next/image";
import Link from "next/link";

const COLUMNS: { heading: string; links: string[] }[] = [
  {
    heading: "Solutions",
    links: [
      "Websites",
      "SEO & AEO",
      "Google Ads",
      "Speed-to-Lead",
      "Reputation",
      "Referral Engine",
      "Dashboard",
    ],
  },
  {
    heading: "Industries",
    links: [
      "General Dentistry",
      "Orthodontics",
      "Cosmetic Dentistry",
      "Oral Surgery",
      "Pediatric Dentistry",
      "DSOs & Multi-Location",
    ],
  },
  {
    heading: "Company",
    links: [
      "About",
      "Case Studies",
      "Blog",
      "Partners",
      "Contact",
      "Google Premier Partner",
    ],
  },
  {
    heading: "Support",
    links: ["Knowledge Base", "Help Center", "API Status", "Contact Sales"],
  },
  {
    heading: "Resources",
    links: ["Growth Audit", "ROI Calculator", "Reports", "Newsletter"],
  },
];

export function SemrushFooter() {
  return (
    <footer className="bg-white">
      {/* Top tagline + email row */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 pb-10">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-16 mb-14 pb-14 border-b border-gray-200">
          <div>
            <Image
              src="/brand/pracpros-logo-v2.png"
              alt="PracPros"
              width={1091}
              height={229}
              className="h-9 w-auto mb-5"
            />
            <h3 className="normal-case text-[20px] sm:text-[24px] font-black text-[#0f0f1a] leading-[1.2] tracking-tight mb-3">
              Dental marketing, engineered.
            </h3>
            <p className="text-[13px] text-[#5a5a6a] leading-[1.55] max-w-[440px]">
              PRACPROS is a dental marketing agency specializing in AI-native patient acquisition systems, Google Premier Partner advertising, conversion-optimized websites, local SEO, speed-to-lead automation, and real-time performance visibility — for dental practices across North America that are serious about growth.
            </p>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#0f0f1a] mt-5 px-3 py-1.5 bg-[#f4f4f6] rounded-full">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                <circle cx="6" cy="6" r="5" fill="#4285f4" />
              </svg>
              Google Premier Partner
            </span>
          </div>

          <div>
            <div className="text-[13px] font-bold text-[#0f0f1a] mb-3">Get monthly growth insights</div>
            <p className="text-[12px] text-[#5a5a6a] mb-4">Unsubscribe anytime. No spam, ever.</p>
            <form className="flex items-center gap-2 bg-white border border-gray-200 rounded-full pl-4 pr-1.5 h-[48px] max-w-[400px] shadow-sm">
              <input
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                className="flex-1 min-w-0 text-[14px] text-gray-700 placeholder-gray-400 outline-none bg-transparent"
              />
              <button className="shrink-0 bg-[#ff521c] text-white px-5 h-[38px] rounded-full text-[13px] font-semibold hover:bg-[#e0461a] transition-colors">
                Subscribe
              </button>
            </form>
            <div className="flex items-center gap-2 mt-5 text-[11px] text-[#1a8754] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1a8754] animate-pulse" />
              All systems operational
            </div>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-[13px] font-bold text-[#0f0f1a] mb-4">{col.heading}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <Link href="#" className="text-[13px] text-[#5a5a6a] hover:text-[#0f0f1a] transition-colors">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Social + legal */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <Socials />
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-[#6b6b76]">
            <Link href="#" className="hover:text-[#0f0f1a]">Privacy</Link>
            <Link href="#" className="hover:text-[#0f0f1a]">Terms</Link>
            <Link href="#" className="hover:text-[#0f0f1a]">Cookies</Link>
            <Link href="#" className="hover:text-[#0f0f1a]">Status</Link>
          </div>
        </div>

        <div className="mt-6">
          <span className="text-[12px] text-[#6b6b76]">
            © 2026 PRACPROS, Inc. All rights reserved.
          </span>
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="relative w-full overflow-hidden bg-[#FF521C]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-16">
          <h2
            aria-hidden
            className="text-white font-black leading-[0.9] tracking-[-0.05em] text-center"
            style={{ fontSize: "clamp(72px, 19vw, 280px)" }}
          >
            PRACPROS
          </h2>
        </div>
      </div>
    </footer>
  );
}

function Socials() {
  const items: { label: string; icon: React.ReactNode }[] = [
    {
      label: "Instagram",
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <rect x="1.5" y="1.5" width="15" height="15" rx="4" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="9" cy="9" r="3.2" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="13.2" cy="4.8" r="0.8" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: "Facebook",
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <path d="M11 17v-7h2.4l.4-2.6H11V5.7c0-.8.2-1.3 1.3-1.3h1.5V2c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2H6v2.6h2.4V17H11z" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: "X",
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <path d="M13.5 2h2.5L10.7 8.3 17 16h-5.1l-4-5.2L3.2 16H.7l5.8-6.7L0 2h5.2l3.6 4.8L13.5 2z" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <rect x="1" y="1" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
          <rect x="4" y="7" width="2" height="7" fill="currentColor" />
          <circle cx="5" cy="5" r="1" fill="currentColor" />
          <path d="M8 7h2v1c.4-.7 1.2-1.2 2.2-1.2 1.7 0 2.8 1 2.8 3v4h-2v-3.6c0-1-.5-1.6-1.4-1.6s-1.6.6-1.6 1.7V14H8V7z" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      icon: (
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" aria-hidden>
          <rect x="1" y="3" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.4" />
          <path d="M8.5 6.5v5l4-2.5-4-2.5z" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: "TikTok",
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <path
            d="M11 1.5v8.5a2.5 2.5 0 11-2.5-2.5V10a1 1 0 100 2 .5.5 0 00.5-.5V1.5h2zm0 0c.3 1.5 1.5 2.7 3 3v2c-1.2-.2-2.3-.7-3-1.4V1.5z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex items-center gap-3 text-[#0f0f1a]">
      {items.map((it) => (
        <a key={it.label} href="#" aria-label={it.label} className="hover:text-[#ff521c] transition-colors">
          {it.icon}
        </a>
      ))}
    </div>
  );
}
