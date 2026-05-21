type Badge = {
  label: string;
  tone: string;
  icon: React.ReactNode;
};

const badges: Badge[] = [
  {
    label: "Google Premier Partner",
    tone: "text-[#43454B]",
    icon: (
      <svg viewBox="0 0 18 18" aria-hidden width="16" height="16">
        <path d="M17.6 9.2c0-.7-.1-1.3-.2-2H9v3.8h4.8c-.2 1.1-.8 2-1.8 2.6v2.2h2.9c1.7-1.6 2.7-3.9 2.7-6.6z" fill="#43454B" />
        <path d="M9 18c2.4 0 4.5-.8 6-2.2l-2.9-2.2c-.8.5-1.8.9-3.1.9-2.4 0-4.4-1.6-5.1-3.8H.9v2.3C2.4 15.9 5.5 18 9 18z" fill="#43454B" />
        <path d="M3.9 10.7c-.2-.5-.3-1.1-.3-1.7s.1-1.2.3-1.7V5H.9C.3 6.2 0 7.6 0 9s.3 2.8.9 4l3-2.3z" fill="#43454B" />
        <path d="M9 3.6c1.3 0 2.5.5 3.5 1.4l2.6-2.6C13.5.9 11.4 0 9 0 5.5 0 2.4 2.1.9 5l3 2.3C4.6 5.2 6.6 3.6 9 3.6z" fill="#43454B" />
      </svg>
    ),
  },
  {
    label: "AI-Optimized Websites",
    tone: "text-brand-600",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" aria-hidden width="16" height="16">
        <path d="M8 2L9.2 5.5L12.7 6.7L9.2 7.9L8 11.4L6.8 7.9L3.3 6.7L6.8 5.5L8 2Z" fill="currentColor" />
        <circle cx="12.5" cy="3" r="1.2" fill="currentColor" />
        <circle cx="3.2" cy="12.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Sub-60s Lead Response",
    tone: "text-brand-600",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" aria-hidden width="16" height="16">
        <circle cx="8" cy="8" r="6.4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 4.5V8L10.4 9.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "SEO + AEO + GEO",
    tone: "text-brand-600",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" aria-hidden width="16" height="16">
        <circle cx="8" cy="8" r="6.4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M1.6 8H14.4 M8 1.6C9.8 3.7 10.8 5.8 10.8 8s-1 4.3-2.8 6.4M8 1.6C6.2 3.7 5.2 5.8 5.2 8s1 4.3 2.8 6.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Real-Time ROI Dashboard",
    tone: "text-brand-600",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" aria-hidden width="16" height="16">
        <path d="M2 13L6 8L9 11L14 4 M10.5 4H14V7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Trusted Across North America",
    tone: "text-brand-600",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" aria-hidden width="16" height="16">
        <path d="M8 14.5C8 14.5 13 10.5 13 6.5C13 3.7 10.8 1.5 8 1.5C5.2 1.5 3 3.7 3 6.5C3 10.5 8 14.5 8 14.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="8" cy="6.5" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export function LogoCloud() {
  const items = [...badges, ...badges, ...badges];
  return (
    <section
      aria-label="Trust badges"
      className="relative py-6 md:py-8"
      style={{
        background:
          "linear-gradient(180deg, #faf9f7 0%, #faf9f7 100%)",
      }}
    >
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32"
          style={{
            background:
              "linear-gradient(90deg, #faf9f7 0%, rgba(250,249,247,0.85) 60%, transparent 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32"
          style={{
            background:
              "linear-gradient(-90deg, #faf9f7 0%, rgba(250,249,247,0.85) 60%, transparent 100%)",
          }}
        />
        <ul
          className="marquee-track flex w-max items-center gap-4"
          style={{
            animation: "marquee 38s linear infinite",
            willChange: "transform",
          }}
        >
          {items.map((b, i) => (
            <li
              key={`${b.label}-${i}`}
              className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-white px-4 py-2.5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-subtle ${b.tone}`}>
                {b.icon}
              </span>
              <span className="font-display text-[14px] md:text-[15px] font-semibold tracking-tight text-ink whitespace-nowrap select-none">
                {b.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
