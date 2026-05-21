import { HeroVideo } from "./HeroVideo";
import { HeroCollage } from "./HeroCollage";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 md:pt-36 pb-0 text-ink">
      <HeroBackdrop />

      <div className="container-page relative">
        <div className="mx-auto max-w-7xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1.5 text-[12.5px] font-medium text-ink-soft backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
            AI-Native Dental Growth Platform
          </span>

          <h1 className="mt-6 font-display text-[26px] sm:text-[34px] md:text-[44px] lg:text-[52px] leading-[1.06] tracking-[-0.028em] font-semibold text-ink">
            <span className="block lg:whitespace-nowrap">Your Competitors Aren&rsquo;t Out-Dentisting You.</span>
            <span className="block text-ink lg:whitespace-nowrap">
              They&rsquo;re Out-
              <span className="relative inline-block">
                <span className="relative z-10" style={{ color: "#FF521C" }}>Marketing</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 h-3 -z-0 bg-accent-butter/60"
                  style={{ filter: "blur(0.5px)" }}
                />
              </span>{" "}
              You.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-[16px] md:text-[18px] leading-[1.55] text-ink-soft">
            You&rsquo;re not losing patients because of your clinical work.
            You&rsquo;re losing them because someone else answered first, ranked
            higher, or showed up on Google Maps when you didn&rsquo;t.
            That&rsquo;s a systems problem. And it&rsquo;s exactly what we
            solve.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href="#strategy-call"
              variant="primary"
              size="lg"
            >
              Schedule a Strategy Call
            </Button>
            <Button
              href="#growth-audit"
              size="lg"
              variant="secondary"
              trailingIcon
            >
              Get a Free Growth Audit
            </Button>
          </div>
        </div>

        <HeroCollage />
      </div>
    </section>
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

