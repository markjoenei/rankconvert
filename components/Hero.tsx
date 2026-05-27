import Image from "next/image";
import Link from "next/link";
import { HeroVideo } from "./HeroVideo";
import { HeroCollage } from "./HeroCollage";
import { Button } from "./ui/Button";

const TRUST_AVATARS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=120&q=80",
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 md:pt-36 pb-0 text-ink">
      <HeroBackdrop />

      <div className="container-page relative">
        <div className="mx-auto max-w-7xl text-center">
          {/* Announcement pill (Jasper-style) */}
          <Link
            href="#growth-audit"
            className="group inline-flex animate-fade-up items-center gap-2.5 rounded-full border border-border bg-white/85 px-4 py-1.5 text-[12.5px] font-medium text-ink-soft backdrop-blur-md shadow-card transition-colors hover:border-brand-300 hover:text-ink"
          >
            <span className="relative inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2 py-0.5 text-[10.5px] font-bold uppercase tracking-[0.14em] text-brand-700">
              <span aria-hidden className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-500" />
              </span>
              New
            </span>
            <span>2026 Dental Growth Benchmark · Get your free audit</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden
              className="text-ink-soft transition-transform duration-200 group-hover:translate-x-0.5"
            >
              <path
                d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <h1
            className="mx-auto mt-6 max-w-7xl animate-fade-up text-center font-display text-[24px] sm:text-[34px] md:text-[46px] lg:text-[58px] leading-[1.04] tracking-[-0.03em] font-semibold text-ink"
            style={{ animationDelay: "120ms" }}
          >
            <span className="block lg:whitespace-nowrap">Your Competitors Aren&rsquo;t</span>
            <span className="block lg:whitespace-nowrap">Out-Dentisting You.</span>
            <span className="block text-ink lg:whitespace-nowrap">
              They&rsquo;re Out-
              <span className="relative inline-block">
                <span className="relative z-10" style={{ color: "#FF521C" }}>Marketing</span>
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-1 left-0 right-0 h-[7px] origin-left scale-x-0 rounded-full bg-[#FF521C]/30 animate-hero-underline"
                />
              </span>{" "}
              You.
            </span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl animate-fade-up text-[17px] md:text-[20px] leading-[1.5] text-ink-soft"
            style={{ animationDelay: "240ms" }}
          >
            The connected growth engine that finds patients, answers first, and
            books them — before a competitor can.
          </p>

          <div
            className="mt-9 flex animate-fade-up flex-row flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: "360ms" }}
          >
            <Button href="#strategy-call" variant="primary" size="lg">
              Start Free Audit
            </Button>
            <Button href="#growth-audit" size="lg" variant="secondary" trailingIcon>
              Book a Demo
            </Button>
          </div>

          {/* Trust strip — avatars + rating + customer count (desktop only) */}
          <div
            className="mt-8 hidden animate-fade-up flex-col items-center gap-4 sm:flex sm:flex-row sm:justify-center sm:gap-6"
            style={{ animationDelay: "480ms" }}
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {TRUST_AVATARS.map((src) => (
                  <span
                    key={src}
                    className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white shadow-card"
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="32px"
                      className="object-cover"
                      unoptimized
                    />
                  </span>
                ))}
              </div>
              <div className="flex flex-col items-start leading-tight">
                <div className="flex items-center gap-1 text-[13px] font-semibold text-ink">
                  <Stars />
                  <span className="ml-1">4.9</span>
                </div>
                <span className="text-[11.5px] text-ink-soft">
                  from 200+ practices
                </span>
              </div>
            </div>

            <span aria-hidden className="hidden h-6 w-px bg-border sm:block" />

            <div className="flex items-center gap-2 text-[12.5px] font-medium text-ink-soft">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden className="text-brand-600">
                <path d="M3 8.5L6.5 12L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              No credit card required
            </div>

            <span aria-hidden className="hidden h-6 w-px bg-border sm:block" />

            <div className="flex items-center gap-2 text-[12.5px] font-medium text-ink-soft">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden className="text-brand-600">
                <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.6" />
                <path d="M8 4.5V8L10.4 9.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              Audit in 5 business days
            </div>
          </div>
        </div>

        <HeroCollage />
      </div>
    </section>
  );
}

function Stars() {
  return (
    <span className="inline-flex items-center text-[#FF521C]" aria-label="4.9 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
          <path d="M6 1l1.5 3.3 3.5.4-2.6 2.4.7 3.5L6 8.9 2.9 10.6l.7-3.5L1 4.7l3.5-.4L6 1z" />
        </svg>
      ))}
    </span>
  );
}

function HeroBackdrop() {
  return (
    <>
      <div className="absolute inset-0 -z-20" style={{ background: "#faf9f7" }} aria-hidden />
      <HeroVideo />

      {/* Smooth light overlay so video stays subtle behind light copy */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-[5]"
        style={{
          background:
            "linear-gradient(180deg, rgba(250,249,247,0.92) 0%, rgba(250,249,247,0.78) 40%, rgba(250,249,247,0.82) 70%, rgba(250,249,247,0.95) 100%)",
        }}
      />
    </>
  );
}

