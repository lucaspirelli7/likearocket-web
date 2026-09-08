"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

export function Reveal({ children, as: Component = "div", className = "", delay = 0 }: { children: ReactNode; as?: ElementType; className?: string; delay?: number }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!el || media.matches || !("IntersectionObserver" in window)) return;
    const show = () => { el.classList.add("is-visible"); };
    if (el.getBoundingClientRect().top < window.innerHeight * .94) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) { show(); observer.disconnect(); }
    }, { threshold: 0, rootMargin: "0px 0px -5% 0px" });
    el.dataset.armed = "true";
    observer.observe(el);
    media.addEventListener("change", show);
    return () => { observer.disconnect(); media.removeEventListener("change", show); delete el.dataset.armed; };
  }, []);
  return <Component ref={ref} className={`reveal ${className}`.trim()} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>{children}</Component>;
}
