"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const tryPlay = () => {
      const p = el.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };

    tryPlay();

    el.addEventListener("pause", tryPlay);
    el.addEventListener("ended", tryPlay);
    el.addEventListener("stalled", tryPlay);
    el.addEventListener("loadeddata", tryPlay);

    const onVisible = () => {
      if (document.visibilityState === "visible") tryPlay();
    };
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      el.removeEventListener("pause", tryPlay);
      el.removeEventListener("ended", tryPlay);
      el.removeEventListener("stalled", tryPlay);
      el.removeEventListener("loadeddata", tryPlay);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 -z-10 h-full w-full object-cover opacity-100"
      src="/hero.mp4"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      disablePictureInPicture
      controls={false}
      aria-hidden
    />
  );
}
