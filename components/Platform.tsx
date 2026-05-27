import Image from "next/image";
import { Button } from "./ui/Button";

type Node = {
  label: string;
  value: string;
  side: "left" | "right";
  top: string;
  iconBg: string;
  iconFg: string;
  icon: React.ReactNode;
};

function PlatformVisual() {
  const nodes: Node[] = [
    {
      label: "Website + SEO",
      value: "#1 ranked · 186 keywords",
      side: "left",
      top: "6%",
      iconBg: "bg-brand-50",
      iconFg: "text-brand-700",
      icon: (
        <path
          d="M2 6h12M2 10h12M4 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
    {
      label: "Google Ads",
      value: "6.4× ROAS",
      side: "left",
      top: "32%",
      iconBg: "bg-brand-50",
      iconFg: "text-brand-700",
      icon: (
        <path d="M8 1.5l5.5 9.5h-11L8 1.5z M8 7L10.5 14h-5L8 7z" fill="currentColor" />
      ),
    },
    {
      label: "Reviews & Reputation",
      value: "4.9★ · 1,247 reviews",
      side: "left",
      top: "58%",
      iconBg: "bg-brand-50",
      iconFg: "text-brand-700",
      icon: (
        <path d="M8 1l2 4.5 5 .5-3.7 3.3 1.2 5L8 11.7 3.5 14.3l1.2-5L1 6l5-.5L8 1z" fill="currentColor" />
      ),
    },
    {
      label: "Lead Response",
      value: "47s avg · 24/7",
      side: "right",
      top: "10%",
      iconBg: "bg-subtle",
      iconFg: "text-ink",
      icon: (
        <>
          <circle cx="8" cy="8" r="6.4" stroke="currentColor" strokeWidth="1.4" fill="none" />
          <path d="M8 4.5V8L10.4 9.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </>
      ),
    },
    {
      label: "Front Desk AI",
      value: "0 missed calls",
      side: "right",
      top: "38%",
      iconBg: "bg-subtle",
      iconFg: "text-ink",
      icon: (
        <path
          d="M5 6.5a3 3 0 0 1 6 0v1a3 3 0 0 1-6 0v-1z M2.5 13.5c0-2.5 2.5-4 5.5-4s5.5 1.5 5.5 4"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
    {
      label: "ROI Dashboard",
      value: "+38% pipeline",
      side: "right",
      top: "64%",
      iconBg: "bg-subtle",
      iconFg: "text-ink",
      icon: (
        <path
          d="M2 13l4-5 3 3 5-7 M11 4h3v3"
          stroke="currentColor"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
  ];

  return (
    <div className="relative mx-auto w-full max-w-[980px]">
      <div className="relative aspect-[5/5.6] w-full">
        {/* Outer glow — animated */}
        <div
          aria-hidden
          className="absolute -inset-6 rounded-[56px] blur-3xl opacity-70 animate-glow-pulse"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 50%, rgba(255,82,28,0.35), transparent 70%)",
          }}
        />

        {/* Connecting curves with animated dash */}
        <svg
          aria-hidden
          viewBox="0 0 600 672"
          className="absolute inset-0 h-full w-full"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(67,69,75,0.05)" />
              <stop offset="50%" stopColor="rgba(67,69,75,0.55)" />
              <stop offset="100%" stopColor="rgba(67,69,75,0.05)" />
            </linearGradient>
          </defs>
          <g stroke="url(#lineGrad)" strokeWidth="1.2" fill="none">
            <path d="M120 90 C 220 110, 260 240, 300 336" />
            <path d="M120 240 C 220 250, 260 300, 300 336" />
            <path d="M120 430 C 220 410, 260 380, 300 336" />
            <path d="M480 130 C 380 170, 340 270, 300 336" />
            <path d="M480 300 C 400 310, 360 320, 300 336" />
            <path d="M480 480 C 380 440, 340 380, 300 336" />
          </g>
          <g stroke="rgba(255,82,28,0.55)" strokeWidth="1.1" strokeDasharray="2 7" fill="none">
            <path d="M120 90 C 220 110, 260 240, 300 336">
              <animate attributeName="stroke-dashoffset" from="0" to="-36" dur="4s" repeatCount="indefinite" />
            </path>
            <path d="M120 240 C 220 250, 260 300, 300 336">
              <animate attributeName="stroke-dashoffset" from="0" to="-36" dur="4.5s" repeatCount="indefinite" />
            </path>
            <path d="M120 430 C 220 410, 260 380, 300 336">
              <animate attributeName="stroke-dashoffset" from="0" to="-36" dur="5s" repeatCount="indefinite" />
            </path>
            <path d="M480 130 C 380 170, 340 270, 300 336">
              <animate attributeName="stroke-dashoffset" from="0" to="36" dur="4.2s" repeatCount="indefinite" />
            </path>
            <path d="M480 300 C 400 310, 360 320, 300 336">
              <animate attributeName="stroke-dashoffset" from="0" to="36" dur="3.8s" repeatCount="indefinite" />
            </path>
            <path d="M480 480 C 380 440, 340 380, 300 336">
              <animate attributeName="stroke-dashoffset" from="0" to="36" dur="4.6s" repeatCount="indefinite" />
            </path>
          </g>
        </svg>

        {/* Central dashboard card — bigger */}
        <div className="absolute left-1/2 top-1/2 w-[64%] -translate-x-1/2 -translate-y-1/2 animate-kpi-rise">
          <div className="overflow-hidden rounded-[24px] border border-border bg-white shadow-[0_50px_110px_-30px_rgba(67,69,75,0.5)]">
            {/* Image header — dentist (enlarged, no text overlay) */}
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src="/dentists/platform.png"
                alt="Smiling dentist in her practice"
                fill
                sizes="(min-width: 1024px) 600px, 70vw"
                className="object-cover"
                style={{ objectPosition: "center 18%" }}
                priority
              />
            </div>

          </div>

          {/* Central node dot below the card */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative h-4 w-4">
              <span className="absolute inset-0 rounded-full bg-brand-500" />
              <span className="absolute -inset-3 rounded-full bg-brand-500/30 animate-ping" />
            </div>
          </div>
        </div>

        {/* Floating live-status cards — premium pill design */}
        {nodes.map((n, i) => (
          <div
            key={n.label}
            className={`group absolute z-10 inline-flex items-center gap-2.5 sm:gap-3.5 rounded-2xl border border-border bg-white/95 px-3 py-2 sm:px-4 sm:py-3 shadow-[0_18px_40px_-20px_rgba(67,69,75,0.35)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_60px_-22px_rgba(67,69,75,0.4)] animate-float-soft ${
              n.side === "left" ? "left-0" : "right-0"
            }`}
            style={{
              top: n.top,
              animationDuration: `${6 + (i % 3)}s`,
              animationDelay: `${(i % 5) * 0.25}s`,
            }}
          >
            <span
              className={`grid h-9 w-9 sm:h-11 sm:w-11 shrink-0 place-items-center rounded-xl ${n.iconBg} ${n.iconFg} transition-transform duration-300 group-hover:scale-110`}
            >
              <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 16 16" aria-hidden>
                {n.icon}
              </svg>
            </span>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-[12px] sm:text-[14.5px] font-semibold tracking-tight text-ink whitespace-nowrap">
                {n.label}
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] sm:text-[11.5px] font-medium text-ink-soft whitespace-nowrap">
                <span aria-hidden className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-50" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-500" />
                </span>
                {n.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Platform() {
  return (
    <section
      id="platform"
      className="relative isolate overflow-hidden py-16 md:py-24 text-ink"
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
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20 lg:items-center">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-white/80 px-4 py-2 text-[13px] font-medium uppercase tracking-[0.14em] text-ink-soft backdrop-blur shadow-card">
              <span className="h-2 w-2 rounded-full bg-brand-500" aria-hidden />
              The PracPros Platform
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-[64px] leading-[1.04] font-semibold tracking-[-0.028em] text-ink">
              You Have Marketing.
              <span className="block">
                What You Don&rsquo;t Have Is a{" "}
                <span className="relative inline-block">
                  <span className="relative z-10" style={{ color: "#FF521C" }}>System</span></span>
                .
              </span>
            </h2>

            <div className="mt-7 space-y-5 text-[18px] leading-[1.65] text-ink-soft">
              <p>
                Modern dental practices are failing because they rely on
                fragmented, outdated marketing tactics and slow manual
                follow-ups. In today&rsquo;s fast-paced market, patients book
                with whoever responds first, meaning success no longer depends
                on being the most skilled, but on being the most systematic. To
                win, practices must replace their patchwork methods with an
                automated, connected growth engine that instantly captures,
                engages, and converts inquiries into booked appointments.
              </p>
              <p className="font-semibold text-ink">
                Most practices don&rsquo;t have that system.{" "}
                <span className="text-brand-600">PRACPROS builds it.</span>
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button
                href="#growth-audit"
                variant="primary"
                size="lg"
                trailingIcon
              >
                Get a Free Growth Audit
              </Button>
              <Button
                href="#platform"
                size="lg"
                variant="secondary"
              >
                Explore the platform
              </Button>
            </div>
          </div>

          <PlatformVisual />
        </div>
      </div>
    </section>
  );
}
