"use client";

import { useRef, useState } from "react";

const VIDEOS = [
  {
    src: "https://videos.files.wordpress.com/OykIgyWA/xl-fitness-testimonial-1.mp4",
    client: "XL Fitness",
    service: "Digital Marketing",
  },
  {
    src: "https://videos.files.wordpress.com/m4hP2gQl/dcg-plumbing-testimonial-1.mp4",
    client: "DCG Plumbing",
    service: "SEO · Website Design",
  },
  {
    src: "https://videos.files.wordpress.com/dG4XenFH/youngconstruct-testimonial-2.mp4",
    client: "Aidan Young — YoungConstruct",
    service: "Website Design · SEO · CRO",
  },
  {
    src: "https://videos.files.wordpress.com/metzouQa/sprociety-testimonial.mp4",
    client: "Jono East — Sprociety Coffee",
    service: "Shopify Development",
  },
];

const N = VIDEOS.length;

export function SemrushEdgeBanner({ bottomOverlap = false }: { bottomOverlap?: boolean } = {}) {
  const [active, setActive] = useState(0);
  const [centerPlaying, setCenterPlaying] = useState(false);
  // All 4 refs always valid — videos never unmount
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([null, null, null, null]);

  const navigate = (newActive: number) => {
    // Pause old center (synchronously, within user gesture)
    const oldEl = videoRefs.current[active];
    if (oldEl) { oldEl.pause(); oldEl.currentTime = 0; }

    // Play new center (synchronously, within user gesture)
    const newEl = videoRefs.current[newActive];
    if (newEl) newEl.play().then(() => setCenterPlaying(true)).catch(() => setCenterPlaying(false));

    setCenterPlaying(false); // reset until .then fires
    setActive(newActive);
  };

  const goPrev = () => navigate((active - 1 + N) % N);
  const goNext = () => navigate((active + 1) % N);

  const toggleCenter = () => {
    const el = videoRefs.current[active];
    if (!el) return;
    if (el.paused) {
      el.play().then(() => setCenterPlaying(true)).catch(() => {});
    } else {
      el.pause();
      setCenterPlaying(false);
    }
  };

  return (
    <section
      className={
        bottomOverlap
          ? "pt-16 sm:pt-24 lg:pt-32 pb-24 md:pb-[16rem] lg:pb-[22rem]"
          : "py-16 sm:py-24 lg:py-32"
      }
      style={{ background: "#f6f6f8" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Headline */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[11px] font-bold uppercase tracking-widest mb-5" style={{ color: "#c9971a" }}>
            Real clients · Unscripted · Unfiltered
          </p>
          <h2
            className="font-black text-[#09090e] leading-[1.05] tracking-[-1.5px] mb-4"
            style={{ fontSize: "clamp(26px, 4.5vw, 54px)" }}
          >
            Forget Fake Google Reviews
            <br />
            and Bulls<span style={{ color: "#f5c842" }}>#!t</span> Testimonials.
          </h2>
          <p
            className="font-semibold leading-[1.4] max-w-[560px] mx-auto"
            style={{ fontSize: "clamp(15px, 2.2vw, 20px)", color: "rgba(9,9,14,0.5)" }}
          >
            Hear it Direct From Our Clients Themselves.
          </p>
        </div>

        {/* Carousel row */}
        <div className="flex items-center gap-3 sm:gap-5">

          {/* Prev button */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous video"
            className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center hover:opacity-75 transition-opacity"
            style={{ background: "#09090e" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M10 3L6 8l4 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Video track — all 4 always mounted, 3 visible via order + display:none */}
          <div className="flex-1 flex gap-3 sm:gap-5 py-4">
            {VIDEOS.map((video, idx) => {
              const offset = ((idx - active) % N + N) % N;
              const isCenter = offset === 0;
              const isLeft   = offset === N - 1;
              const isRight  = offset === 1;
              const visible  = isCenter || isLeft || isRight;
              // flex order: left=1, center=2, right=3 (hidden item is irrelevant)
              const order    = isCenter ? 2 : isRight ? 3 : isLeft ? 1 : 0;

              return (
                <div
                  key={idx}
                  style={{
                    display:    visible ? "flex" : "none",
                    order,
                    flex:       "1 1 0",
                    flexDirection: "column",
                    position:   "relative",
                    aspectRatio: "3/4",
                    borderRadius: 16,
                    overflow:   "hidden",
                    background: "#0f1017",
                    border:     isCenter ? "2px solid #f5c842" : "1px solid rgba(0,0,0,0.10)",
                    opacity:    isCenter ? 1 : 0.45,
                    transform:  isCenter ? "scale(1.04)" : "scale(0.97)",
                    boxShadow:  isCenter ? "0 24px 64px rgba(0,0,0,0.22)" : "none",
                    transition: "opacity 0.3s ease, transform 0.3s ease, border 0.3s ease, box-shadow 0.3s ease",
                  }}
                >
                  <video
                    ref={el => { videoRefs.current[idx] = el; }}
                    src={video.src}
                    className="w-full h-full object-cover"
                    onEnded={() => { if (idx === active) setCenterPlaying(false); }}
                    playsInline
                    preload="none"
                  />

                  {/* Play/pause — only center is interactive */}
                  {isCenter && (
                    <button
                      type="button"
                      onClick={toggleCenter}
                      aria-label={centerPlaying ? "Pause" : "Play"}
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ background: centerPlaying ? "transparent" : "rgba(0,0,0,0.40)" }}
                    >
                      {!centerPlaying && (
                        <span
                          className="w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                          style={{ background: "#f5c842" }}
                        >
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                            <path d="M6 4l12 6-12 6V4z" fill="#09090e" />
                          </svg>
                        </span>
                      )}
                    </button>
                  )}

                  {/* Extra dim overlay on side cards */}
                  {!isCenter && (
                    <div className="absolute inset-0 pointer-events-none" style={{ background: "rgba(0,0,0,0.15)" }} />
                  )}

                  {/* Client label */}
                  <div
                    className="absolute bottom-0 left-0 right-0 px-4 py-3 pointer-events-none"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, transparent 100%)" }}
                  >
                    <div className="text-[12px] sm:text-[13px] font-bold text-white leading-tight">{video.client}</div>
                    <div className="text-[10px] sm:text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>{video.service}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Next button */}
          <button
            type="button"
            onClick={goNext}
            aria-label="Next video"
            className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center hover:opacity-75 transition-opacity"
            style={{ background: "#09090e" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M6 3l4 5-4 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {VIDEOS.map((_, i) => (
            <span
              key={i}
              className="rounded-full"
              style={{
                width:      i === active ? 20 : 6,
                height:     6,
                background: i === active ? "#f5c842" : "rgba(9,9,14,0.2)",
                transition: "width 0.3s ease, background 0.3s ease",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
