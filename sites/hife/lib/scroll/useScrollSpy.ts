"use client";

import { useEffect, useState } from "react";

interface UseScrollSpyOptions {
  selector?: string;
  rootMargin?: string;
}

export function useScrollSpy({
  selector = "section[id]",
  rootMargin = "0px 0px -70% 0px",
}: UseScrollSpyOptions = {}) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll(selector);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [selector, rootMargin]);

  return { activeId };
}
