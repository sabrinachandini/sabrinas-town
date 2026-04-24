"use client";

import { useEffect, useRef, useState } from "react";

interface UseIntersectionRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useIntersectionReveal({
  threshold = 0.1,
  rootMargin = "0px 0px -60px 0px",
  triggerOnce = true,
}: UseIntersectionRevealOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(el);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}
