"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/Button";
import { Reveal } from "./Reveal";

export function Trust() {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-24"
      style={{ background: "#faf9f7" }}
    >
      {/* Soft brand grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(67,69,75,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(67,69,75,0.06) 1px, transparent 1px)",
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
            Visibility, everywhere
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-[60px] leading-[1.04] font-semibold tracking-[-0.028em] text-ink">
            Patients are searching{" "}
            <span className="text-[#FF521C]">in five different places.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] md:text-[17px] leading-[1.6] text-ink-soft">
            From Google Maps to ChatGPT, the moment a patient looks for a
            dentist — we make sure your practice is the answer.
          </p>
        </Reveal>

        {/* 2-column: Maps + ChatGPT */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <MapsCard />
          </Reveal>
          <Reveal delay={150}>
            <ChatGPTCard />
          </Reveal>
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <Button href="#growth-audit" variant="primary" size="lg" trailingIcon>
            Audit my visibility
          </Button>
          <Button href="#strategy-call" variant="secondary" size="lg">
            Talk to a strategist
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ── Google Maps mockup ───────────────────────────────────── */

function MapsCard() {
  // Real Toronto location — Bloor St W near Bathurst
  const mapSrc =
    "https://maps.google.com/maps?q=412+Bloor+St+W+Toronto+ON&t=&z=15&ie=UTF8&iwloc=&output=embed";
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover">
      {/* Top label */}
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-white shadow-card">
            <svg width="16" height="16" viewBox="0 0 18 18" aria-hidden>
              <path d="M17.6 9.2c0-.7-.1-1.3-.2-2H9v3.8h4.8c-.2 1.1-.8 2-1.8 2.6v2.2h2.9c1.7-1.6 2.7-3.9 2.7-6.6z" fill="#43454B" />
              <path d="M9 18c2.4 0 4.5-.8 6-2.2l-2.9-2.2c-.8.5-1.8.9-3.1.9-2.4 0-4.4-1.6-5.1-3.8H.9v2.3C2.4 15.9 5.5 18 9 18z" fill="#43454B" />
              <path d="M3.9 10.7c-.2-.5-.3-1.1-.3-1.7s.1-1.2.3-1.7V5H.9C.3 6.2 0 7.6 0 9s.3 2.8.9 4l3-2.3z" fill="#43454B" />
              <path d="M9 3.6c1.3 0 2.5.5 3.5 1.4l2.6-2.6C13.5.9 11.4 0 9 0 5.5 0 2.4 2.1.9 5l3 2.3C4.6 5.2 6.6 3.6 9 3.6z" fill="#43454B" />
            </svg>
          </span>
          <div className="leading-tight">
            <div className="text-[13px] font-semibold text-ink">Google Maps</div>
            <div className="font-mono text-[10.5px] text-muted">
              dentist near me · Toronto, ON
            </div>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF521C] px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wider text-white">
          Top 3
        </span>
      </div>

      {/* Map area — real Google Maps iframe (Toronto, Canada) */}
      <div className="relative aspect-[5/4] w-full overflow-hidden bg-[#e8edf1]">
        <iframe
          src={mapSrc}
          title="Toronto dental practice on Google Maps"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
        />

        {/* Practice pin — overlaid blinking marker */}
        <div
          className="pointer-events-none absolute"
          style={{ left: "50%", top: "48%", transform: "translate(-50%, -100%)" }}
        >
          {/* Ping ring */}
          <span
            aria-hidden
            className="absolute left-1/2 top-full h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF521C]/40 animate-ping"
          />
          {/* Pin shape */}
          <svg width="44" height="56" viewBox="0 0 38 48" aria-hidden className="relative drop-shadow-[0_4px_8px_rgba(67,69,75,0.5)]">
            <path
              d="M19 1c10 0 17 7 17 17 0 12-17 29-17 29S2 30 2 18C2 8 9 1 19 1z"
              fill="#FF521C"
              stroke="#ffffff"
              strokeWidth="2.4"
            />
            <circle cx="19" cy="17" r="6.4" fill="#ffffff" />
          </svg>
          {/* Practice tooltip */}
          <div className="absolute left-1/2 top-[-14px] -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-xl bg-white px-3.5 py-2.5 shadow-[0_18px_30px_-12px_rgba(67,69,75,0.5)]">
            <div className="flex items-center gap-2">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-[#FF521C] text-[10px] font-bold text-white">
                #1
              </span>
              <span className="text-[12px] font-semibold text-ink">
                Brighthill Family Dental
              </span>
            </div>
            <div className="mt-1 flex items-center gap-1.5 text-[10.5px] text-muted">
              <span className="text-[#FF521C]">★★★★★</span>
              <span>4.9 · 1,247 · 412 Bloor St W, Toronto</span>
            </div>
          </div>
        </div>

        {/* Search results count badge */}
        <div className="pointer-events-none absolute bottom-4 left-4 rounded-xl bg-white/95 px-3 py-2 shadow-card backdrop-blur">
          <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
            Local 3-pack
          </div>
          <div className="mt-0.5 font-display text-[16px] font-semibold leading-none text-ink">
            #1 of 38
          </div>
        </div>
      </div>

      {/* Footer summary */}
      <div className="flex items-center justify-between gap-4 border-t border-border bg-subtle/40 px-5 py-4">
        <div className="text-[12.5px] leading-snug text-ink-soft">
          When 38 dentists fight for the 3-pack — we make sure you&rsquo;re in
          it.
        </div>
        <span className="font-mono text-[11px] text-muted whitespace-nowrap">+186% taps</span>
      </div>
    </article>
  );
}

/* ── ChatGPT mockup ───────────────────────────────────────── */

const USER_MSG =
  "Find me a family dentist in Toronto that takes new patients and has great reviews.";
const ASSISTANT_PRE =
  "Based on recent patient reviews and availability, I'd recommend ";
const ASSISTANT_BRAND = "Brighthill Family Dental";
const ASSISTANT_POST =
  " on Bloor St W in Toronto. They have a 4.9★ rating across 1,247 reviews and are currently accepting new patients with same-week openings.";

function useTypewriter(text: string, active: boolean, speed = 22) {
  const [shown, setShown] = useState("");
  useEffect(() => {
    if (!active) {
      setShown("");
      return;
    }
    let i = 0;
    setShown("");
    const id = setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, active, speed]);
  return shown;
}

function ChatGPTCard() {
  // 0: idle empty, 1: user msg visible, 2: typing indicator, 3: assistant typing, 4: hold complete
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timings: Record<number, number> = {
      0: 700,    // idle pause before user message
      1: 1900,   // user message visible
      2: 1600,   // typing indicator
      3: 4200,   // assistant typing duration
      4: 3200,   // hold complete state
    };
    const t = setTimeout(() => setStep((s) => (s + 1) % 5), timings[step] ?? 2000);
    return () => clearTimeout(t);
  }, [step]);

  const userVisible = step >= 1 && step <= 4;
  const typingVisible = step === 2;
  const assistantVisible = step >= 3;
  const assistantPre = useTypewriter(ASSISTANT_PRE, step === 3 || step === 4, 18);
  const showBrand = step === 4 || (step === 3 && assistantPre.length >= ASSISTANT_PRE.length);
  const assistantPost = useTypewriter(ASSISTANT_POST, step === 3 && showBrand, 18);
  const assistantComplete = step === 4;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-white">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M22.28 9.82a5.95 5.95 0 0 0-.51-4.92 6.05 6.05 0 0 0-6.5-2.9A6 6 0 0 0 4.93 4a5.99 5.99 0 0 0-4 2.9 6.06 6.06 0 0 0 .75 7.1A6 6 0 0 0 8.18 20a5.99 5.99 0 0 0 4 1.99 6 6 0 0 0 5.7-4.04 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.6-5.23zm-9.06 12.67a4.42 4.42 0 0 1-2.84-1.03l.14-.08 4.7-2.71a.77.77 0 0 0 .38-.67v-6.62l1.99 1.15c.02 0 .03.03.04.05v5.49a4.45 4.45 0 0 1-4.41 4.42z" />
            </svg>
          </span>
          <div className="leading-tight">
            <div className="text-[13px] font-semibold text-ink">ChatGPT</div>
            <div className="font-mono text-[10.5px] text-muted">
              GPT-4 · web search enabled
            </div>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF521C] px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wider text-white">
          Cited
        </span>
      </div>

      {/* Chat thread — live state-driven loop */}
      <div className="flex min-h-[360px] flex-1 flex-col gap-4 bg-paper p-5 md:p-6">
        {/* User prompt */}
        <div
          className="flex justify-end transition-all duration-500 ease-out"
          style={{
            opacity: userVisible ? 1 : 0,
            transform: userVisible ? "translateY(0)" : "translateY(8px)",
          }}
        >
          <div className="max-w-[88%] rounded-2xl rounded-br-sm bg-ink px-4 py-3 text-[13.5px] leading-snug text-white">
            {USER_MSG}
          </div>
        </div>

        {/* Assistant typing indicator */}
        <div
          className="flex items-center gap-2 text-[11px] text-muted transition-opacity duration-300"
          style={{ opacity: typingVisible ? 1 : 0 }}
        >
          <span aria-hidden className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-1.5 w-1.5 animate-ping rounded-full bg-[#FF521C] opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FF521C]" />
          </span>
          Searching the web · 3 sources
          <span className="ml-2 inline-flex gap-1">
            <span className="h-1 w-1 rounded-full bg-muted animate-typing-dot" style={{ animationDelay: "0s" }} />
            <span className="h-1 w-1 rounded-full bg-muted animate-typing-dot" style={{ animationDelay: "0.2s" }} />
            <span className="h-1 w-1 rounded-full bg-muted animate-typing-dot" style={{ animationDelay: "0.4s" }} />
          </span>
        </div>

        {/* Assistant response — typewriter */}
        <div
          className="rounded-2xl rounded-bl-sm border border-border bg-white p-4 shadow-card transition-all duration-500 ease-out"
          style={{
            opacity: assistantVisible ? 1 : 0,
            transform: assistantVisible ? "translateY(0)" : "translateY(8px)",
          }}
        >
          <p className="text-[13.5px] leading-relaxed text-ink">
            {assistantPre}
            {showBrand && (
              <span className="rounded bg-brand-50 px-1.5 py-0.5 font-semibold text-brand-700">
                {ASSISTANT_BRAND}
              </span>
            )}
            {showBrand && assistantPost}
            {!assistantComplete && assistantVisible && (
              <span
                aria-hidden
                className="ml-0.5 inline-block h-[1.05em] w-[2px] -translate-y-[2px] bg-ink align-middle"
                style={{ animation: "typing-dot 0.8s ease-in-out infinite" }}
              />
            )}
          </p>

          {/* Cited source card — appears after typing completes */}
          <div
            className="mt-4 rounded-xl border border-border bg-subtle/40 p-3 transition-opacity duration-500"
            style={{ opacity: assistantComplete ? 1 : 0 }}
          >
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path d="M6.5 5.5L9 3a2 2 0 0 1 3 3L9.5 8.5a2 2 0 0 1-2.8 0M5.5 6.5L3 9a2 2 0 0 0 3 3L8.5 9.5a2 2 0 0 0 0-2.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
              Source · brighthill.dental
            </div>
            <div className="mt-1.5 flex items-center justify-between">
              <span className="font-display text-[13.5px] font-semibold text-ink">
                Brighthill Family Dental
              </span>
              <span className="text-[11px] text-[#FF521C]">★ 4.9</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer summary */}
      <div className="flex items-center justify-between gap-4 border-t border-border bg-subtle/40 px-5 py-4">
        <div className="text-[12.5px] leading-snug text-ink-soft">
          The next generation of search isn&rsquo;t a page of links. It&rsquo;s
          a recommendation.
        </div>
        <span className="font-mono text-[11px] text-muted whitespace-nowrap">
          +412% mentions
        </span>
      </div>
    </article>
  );
}
