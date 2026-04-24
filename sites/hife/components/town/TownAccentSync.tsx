"use client";

import { useEffect } from "react";

/**
 * Sets --town-hero-accent on :root so the Header can read it
 * for the tab-row border color. Runs once on mount.
 */
export function TownAccentSync({ hex }: { hex: string }) {
  useEffect(() => {
    document.documentElement.style.setProperty("--town-hero-accent", hex);
    return () => {
      document.documentElement.style.removeProperty("--town-hero-accent");
    };
  }, [hex]);
  return null;
}
