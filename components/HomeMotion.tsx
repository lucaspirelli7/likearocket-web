"use client";

import { useEffect } from "react";

/** A single passive listener drives progressive, reduced-motion-aware hero movement. */
export function HomeMotion() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const hero = document.querySelector<HTMLElement>(".launch-hero");
    if (!hero) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const progress = media.matches ? 0 : Math.min(window.scrollY / hero.offsetHeight, 1);
      hero.style.setProperty("--hero-progress", String(progress));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    media.addEventListener("change", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      media.removeEventListener("change", update);
      hero.style.removeProperty("--hero-progress");
    };
  }, []);
  return null;
}
