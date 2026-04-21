"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Towns", href: "/towns" },
  { label: "Map", href: "/map" },
  { label: "Teach", href: "/teach" },
  { label: "Partner", href: "/partner" },
  { label: "Methodology", href: "/methodology" },
  { label: "About", href: "/about" },
] as const;

const TOWN_TABS = [
  { label: "Overview", path: "" },
  { label: "History", path: "/history" },
  { label: "Timeline", path: "/timeline" },
  { label: "People", path: "/people" },
  { label: "Places", path: "/places" },
  { label: "Stories", path: "/stories" },
  { label: "Teacher", path: "/teacher" },
  { label: "Sources", path: "/sources" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const townMatch = pathname.match(/^\/towns\/([^/]+)/);
  const townSlug = townMatch?.[1];
  const isTownContext = !!townSlug;

  const isNavActive = (href: string) => {
    if (href === "/towns") return pathname === "/towns" || pathname.startsWith("/towns/");
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isTownTabActive = (tabPath: string) => {
    const base = `/towns/${townSlug}`;
    const href = `${base}${tabPath}`;
    if (tabPath === "") return pathname === base || pathname === `${base}/`;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  /* ── Town context: 2-row header ─────────────────────────── */
  if (isTownContext) {
    const activeTab = TOWN_TABS.find(({ path }) => isTownTabActive(path));

    return (
      <header
        className={`sticky top-0 z-50 bg-[#1a3a72] transition-shadow duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        {/* Row 1: back + wordmark + mobile hamburger */}
        <div className="h-14 mx-auto max-w-[1200px] px-6 md:px-10 flex items-center justify-between">
          <Link
            href="/towns"
            className="no-underline font-ui text-[10px] font-medium uppercase tracking-[0.2em] text-cream/55 hover:text-cream transition-colors flex items-center gap-1.5"
          >
            <span aria-hidden="true">←</span> Towns
          </Link>
          <Link href="/" className="no-underline hidden sm:block" aria-label="History is for Everyone — home">
            <span className="font-editorial font-black text-white text-[20px] tracking-[-0.03em] leading-tight">
              History is<br />for Everyone
            </span>
          </Link>
          {/* Mobile hamburger — shows active section + icon */}
          <button
            className="sm:hidden flex items-center gap-2 p-2 -mr-2 text-cream/70 hover:text-cream transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close section menu" : "Open section menu"}
          >
            {activeTab && (
              <span className="font-ui text-[10px] font-medium uppercase tracking-[0.15em] text-cream/55">
                {activeTab.label}
              </span>
            )}
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Row 2: town section tabs — desktop only */}
        <nav
          className="hidden sm:block border-b-[3px] overflow-x-auto"
          style={{ borderBottomColor: "var(--town-hero-accent, var(--crimson))" }}
          aria-label="Town sections"
        >
          <div className="mx-auto max-w-[1200px] px-6 md:px-10">
            <ol className="flex gap-0 min-w-max">
              {TOWN_TABS.map(({ label, path }) => {
                const active = isTownTabActive(path);
                return (
                  <li key={path}>
                    <Link
                      href={`/towns/${townSlug}${path}`}
                      className={`no-underline block px-4 py-3 font-ui font-medium text-[10px] uppercase tracking-[0.15em] whitespace-nowrap border-b-2 transition-colors duration-150 ${
                        active
                          ? "text-cream border-crimson"
                          : "text-cream/50 border-transparent hover:text-cream hover:border-cream/30"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ol>
          </div>
        </nav>

        {/* Mobile section dropdown */}
        {open && (
          <nav className="mobile-dropdown sm:hidden bg-[#0e1428] border-t-2 border-crimson" aria-label="Town sections">
            <ul className="px-6 py-4 space-y-1">
              {TOWN_TABS.map(({ label, path }) => {
                const active = isTownTabActive(path);
                return (
                  <li key={path}>
                    <Link
                      href={`/towns/${townSlug}${path}`}
                      onClick={() => setOpen(false)}
                      className={`no-underline block py-2 font-ui font-medium text-[10px] uppercase tracking-[0.2em] transition-colors ${
                        active ? "text-white" : "text-white hover:text-cream"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </header>
    );
  }

  /* ── Default: single-row header ─────────────────────────── */
  return (
    <header
      className={`sticky top-0 z-50 bg-[#1a3a72] border-b-[3px] border-crimson transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="no-underline" aria-label="History is for Everyone — home">
          <span className="font-display uppercase leading-tight text-white text-[20px] tracking-[0.02em]">
            History is<br />for Everyone
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => {
            const active = isNavActive(href);
            return (
              <Link
                key={href}
                href={href}
                className={`no-underline font-ui text-[10px] font-medium uppercase tracking-[0.2em] transition-colors py-1 border-b-2 ${
                  active
                    ? "text-white border-crimson"
                    : "text-white border-transparent hover:text-cream"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/towns"
            className="no-underline ml-2 bg-yellow text-ink font-ui text-[10px] font-semibold uppercase tracking-[0.2em] px-4 py-2 border-2 border-ink hover:bg-cream transition-colors"
          >
            Plan a Visit
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden p-2 -mr-2 text-cream/70 hover:text-cream transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="mobile-dropdown sm:hidden bg-[#0e1428] border-t-2 border-crimson" aria-label="Mobile navigation">
          <ul className="px-6 py-4 space-y-1">
            {NAV_LINKS.map(({ label, href }) => {
              const active = isNavActive(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`no-underline block py-2 font-ui font-medium text-[10px] uppercase tracking-[0.2em] transition-colors ${
                      active ? "text-white" : "text-white hover:text-cream"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Link
                href="/towns"
                onClick={() => setOpen(false)}
                className="no-underline block w-full text-center py-2 px-4 bg-yellow text-ink font-ui font-semibold text-[10px] uppercase tracking-[0.2em]"
              >
                Plan a Visit
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
