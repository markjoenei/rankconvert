import { Button } from "./ui/Button";
import { Reveal } from "./Reveal";

type Platform = {
  name: string;
  side: "left" | "right";
  top: string;
  offset: string; // additional horizontal offset percent
  duration: string; // float duration
  delay: string;
  icon: React.ReactNode;
};

const platforms: Platform[] = [
  {
    name: "Website",
    side: "left",
    top: "4%",
    offset: "4%",
    duration: "7s",
    delay: "0s",
    icon: <WebsiteIcon />,
  },
  {
    name: "Facebook",
    side: "left",
    top: "32%",
    offset: "10%",
    duration: "8s",
    delay: "0.4s",
    icon: <FacebookIcon />,
  },
  {
    name: "Instagram",
    side: "left",
    top: "62%",
    offset: "2%",
    duration: "7.5s",
    delay: "0.8s",
    icon: <InstagramIcon />,
  },
  {
    name: "Google Business",
    side: "right",
    top: "6%",
    offset: "4%",
    duration: "7.5s",
    delay: "0.2s",
    icon: <GoogleBusinessIcon />,
  },
  {
    name: "Gmail",
    side: "right",
    top: "36%",
    offset: "10%",
    duration: "8.5s",
    delay: "0.6s",
    icon: <GmailIcon />,
  },
  {
    name: "TikTok",
    side: "right",
    top: "66%",
    offset: "2%",
    duration: "7s",
    delay: "1s",
    icon: <TikTokIcon />,
  },
];

export function Automation() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24" style={{ background: "#faf9f7" }}>
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
        <Reveal className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-soft backdrop-blur shadow-card">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
            Automation & operations
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-[60px] leading-[1.04] font-semibold tracking-[-0.028em] text-ink">
            The Best Practices Run With{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#FF521C]">Consistency</span>
            </span>
            <span className="block">Across Every Touchpoint.</span>
          </h2>
          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-[16px] md:text-[17px] leading-[1.65] text-ink-soft">
            <p>
              The practices that grow predictably aren&rsquo;t the ones with
              the best marketing campaigns. They&rsquo;re the ones with systems
              that eliminate the gaps — the unmade recall call, the missed
              follow-up text, the promotion that never went out because nobody
              had time.
            </p>
            <p className="font-semibold text-ink">
              Consistency isn&rsquo;t a discipline when it&rsquo;s{" "}
              <span className="text-brand-600">built into the system.</span>
            </p>
          </div>
        </Reveal>

        {/* Floating platform logos — left + right around the section */}
        <Reveal delay={120} className="relative mx-auto mt-14 h-[520px] w-full max-w-[1180px] sm:h-[560px] md:h-[600px]">
          {/* Subtle radial brand glow behind center */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(255,82,28,0.25), transparent 70%)",
            }}
          />

          {/* Connecting dashed lines from center to each logo */}
          <svg
            aria-hidden
            viewBox="0 0 1180 600"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full"
            fill="none"
          >
            <g stroke="rgba(67,69,75,0.18)" strokeWidth="1.2" strokeDasharray="2 8">
              <line x1="590" y1="300" x2="120" y2="60" />
              <line x1="590" y1="300" x2="80" y2="220" />
              <line x1="590" y1="300" x2="140" y2="430" />
              <line x1="590" y1="300" x2="1060" y2="80" />
              <line x1="590" y1="300" x2="1100" y2="240" />
              <line x1="590" y1="300" x2="1040" y2="450" />
            </g>
          </svg>

          {/* Floating logo bubbles */}
          {platforms.map((p) => (
            <div
              key={p.name}
              className={`absolute inline-flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 shadow-[0_18px_40px_-18px_rgba(67,69,75,0.4)] backdrop-blur-sm animate-float-soft ${
                p.side === "left" ? "left-0" : "right-0"
              }`}
              style={{
                top: p.top,
                animationDuration: p.duration,
                animationDelay: p.delay,
              }}
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white shadow-card">
                {p.icon}
              </span>
              <div className="leading-tight">
                <div className="font-display text-[14.5px] font-semibold tracking-tight text-ink whitespace-nowrap">
                  {p.name}
                </div>
                <div className="mt-0.5 flex items-center gap-1.5 font-mono text-[10.5px] text-ink-soft">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse" />
                  Synced
                </div>
              </div>
            </div>
          ))}
        </Reveal>

        {/* CTAs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <Button href="#growth-audit" variant="primary" size="lg" trailingIcon>
            See what auto-syncs
          </Button>
          <Button href="#strategy-call" variant="secondary" size="lg">
            Talk to an operations lead
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ── Official platform logos (SVG) ─────────────────────────── */

function WebsiteIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="10" fill="#43454B" />
      <path
        d="M2 12h20M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10M12 2c-2.5 3-4 6.5-4 10s1.5 7 4 10"
        stroke="#ffffff"
        strokeWidth="1.4"
        fill="none"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden>
      <rect width="24" height="24" rx="6" fill="#1877F2" />
      <path
        d="M14.5 8.5h1.7l.3-2.6h-2.4c-1.4 0-2.6 1-2.6 2.6V10H9.5v2.7h2v6.8h2.7v-6.8h2l.3-2.7h-2.3v-1.1c0-.2 0-.4.3-.4z"
        fill="#ffffff"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden>
      <defs>
        <linearGradient id="ig-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#feda77" />
          <stop offset="35%" stopColor="#f58529" />
          <stop offset="65%" stopColor="#dd2a7b" />
          <stop offset="100%" stopColor="#8134af" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#ig-grad)" />
      <rect x="5" y="5" width="14" height="14" rx="4" stroke="#ffffff" strokeWidth="1.6" fill="none" />
      <circle cx="12" cy="12" r="3.4" stroke="#ffffff" strokeWidth="1.6" fill="none" />
      <circle cx="16.5" cy="7.5" r="1" fill="#ffffff" />
    </svg>
  );
}

function GoogleBusinessIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden>
      <rect width="24" height="24" rx="6" fill="#ffffff" stroke="#e5e7eb" strokeWidth="0.6" />
      <g transform="translate(4, 4) scale(0.83)">
        <path
          d="M17.6 9.2c0-.7-.1-1.3-.2-2H9v3.8h4.8c-.2 1.1-.8 2-1.8 2.6v2.2h2.9c1.7-1.6 2.7-3.9 2.7-6.6z"
          fill="#4285F4"
        />
        <path
          d="M9 18c2.4 0 4.5-.8 6-2.2l-2.9-2.2c-.8.5-1.8.9-3.1.9-2.4 0-4.4-1.6-5.1-3.8H.9v2.3C2.4 15.9 5.5 18 9 18z"
          fill="#34A853"
        />
        <path
          d="M3.9 10.7c-.2-.5-.3-1.1-.3-1.7s.1-1.2.3-1.7V5H.9C.3 6.2 0 7.6 0 9s.3 2.8.9 4l3-2.3z"
          fill="#FBBC05"
        />
        <path
          d="M9 3.6c1.3 0 2.5.5 3.5 1.4l2.6-2.6C13.5.9 11.4 0 9 0 5.5 0 2.4 2.1.9 5l3 2.3C4.6 5.2 6.6 3.6 9 3.6z"
          fill="#EA4335"
        />
      </g>
    </svg>
  );
}

function GmailIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden>
      <rect width="24" height="24" rx="6" fill="#ffffff" stroke="#e5e7eb" strokeWidth="0.6" />
      <path d="M4 8v10h2V11l6 4 6-4v7h2V8l-8 5.2L4 8z" fill="#EA4335" />
      <path d="M4 8l8 5.2L20 8v0l-8 5.2L4 8z" fill="#FBBC05" />
      <path d="M4 8v0l3 2v-2H4z" fill="#34A853" />
      <path d="M20 8h-3v2l3-2z" fill="#4285F4" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden>
      <rect width="24" height="24" rx="6" fill="#000000" />
      <path
        d="M15 5.5v6.7a2.6 2.6 0 1 1-2.6-2.6h.4V7.4a5 5 0 1 0 5 5V8.4c.9.6 2 1 3.2 1V7a3.4 3.4 0 0 1-3-1.5 3.6 3.6 0 0 1-.6-1.2h-2.4z"
        fill="#FF0050"
      />
      <path
        d="M15 4.5v6.7a2.6 2.6 0 1 1-2.6-2.6h.4V6.4a5 5 0 1 0 5 5V7.4c.9.6 2 1 3.2 1V6a3.4 3.4 0 0 1-3-1.5z"
        fill="#00F2EA"
        opacity="0.85"
      />
    </svg>
  );
}
