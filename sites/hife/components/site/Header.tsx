"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Towns", href: "/towns" },
  { label: "Map", href: "/map" },
  { label: "Muster", href: "/muster" },
  { label: "Teach", href: "/teach" },
  { label: "Partner", href: "/partner" },
  { label: "About", href: "/about" },
] as const;

const TOWN_TABS = [
  { label: "Overview", path: "" },
  { label: "History", path: "/history" },
  { label: "Timeline", path: "/timeline" },
  { label: "People", path: "/people" },
  { label: "Places", path: "/places" },
  { label: "Events", path: "/events" },
  { label: "Stories", path: "/stories" },
  { label: "Teacher", path: "/teacher" },
  { label: "Sources", path: "/sources" },
] as const;

// Accessible muted color on #1a3a72 — contrast 5.8:1 (passes AA)
const MUTED_ON_BLUE = "#a8bcd8";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

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
        className={`sticky top-0 z-50 bg-blue transition-shadow duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        {/* Row 1: logo LEFT + back link + mobile hamburger */}
        <div className="h-24 mx-auto max-w-[1200px] pr-6 md:pr-10 flex items-center justify-between">
          {/* Star logo — top left, always big */}
          <Link href="/" className="no-underline flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue" aria-label="History is for Everyone — home">
            <img src="/logo-star.svg" alt="" role="presentation" className="h-[96px] w-auto" />
          </Link>
          {/* Right: back to towns (desktop) + mobile hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/towns"
              className="no-underline hidden sm:flex font-ui text-[13px] font-medium uppercase tracking-[0.2em] hover:text-cream transition-colors items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-blue"
              style={{ color: MUTED_ON_BLUE }}
            >
              <span aria-hidden="true">←</span> Towns
            </Link>
            <button
              className="sm:hidden flex items-center gap-2 p-2 -mr-2 hover:text-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-blue min-w-[44px] min-h-[44px] justify-center"
              style={{ color: MUTED_ON_BLUE }}
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close section menu" : "Open section menu"}
              aria-expanded={open}
              aria-controls="town-mobile-menu"
            >
              {activeTab && (
                <span className="font-ui text-[10px] font-medium uppercase tracking-[0.15em]" style={{ color: MUTED_ON_BLUE }}>
                  {activeTab.label}
                </span>
              )}
              {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Row 2: town section tabs — desktop only */}
        <nav
          className="hidden sm:block border-b-[3px] overflow-x-auto"
          style={{ borderBottomColor: "var(--town-hero-accent, var(--crimson))" }}
          aria-label="Town sections"
        >
          <div className="mx-auto max-w-[1200px] px-6 md:px-10">
            <ul className="flex gap-0 min-w-max list-none m-0 p-0" role="list">
              {TOWN_TABS.map(({ label, path }) => {
                const active = isTownTabActive(path);
                return (
                  <li key={path}>
                    <Link
                      href={`/towns/${townSlug}${path}`}
                      aria-current={active ? "page" : undefined}
                      className={`no-underline block px-4 py-3 font-ui font-medium text-[10px] uppercase tracking-[0.15em] whitespace-nowrap border-b-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-0 ${
                        active
                          ? "text-cream border-crimson"
                          : "border-transparent hover:text-cream hover:border-cream/30"
                      }`}
                      style={active ? undefined : { color: MUTED_ON_BLUE }}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        {/* Mobile section dropdown */}
        {open && (
          <nav
            id="town-mobile-menu"
            ref={menuRef}
            className="mobile-dropdown sm:hidden bg-ink border-t-2 border-crimson"
            aria-label="Town sections"
          >
            <ul className="px-6 py-4 space-y-1 list-none m-0 p-0" role="list">
              {TOWN_TABS.map(({ label, path }) => {
                const active = isTownTabActive(path);
                return (
                  <li key={path} className="px-6 py-0">
                    <Link
                      href={`/towns/${townSlug}${path}`}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`no-underline block py-3 font-ui font-medium text-[10px] uppercase tracking-[0.2em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-ink min-h-[44px] flex items-center ${
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
      className={`sticky top-0 z-50 bg-blue border-b-[3px] border-crimson transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="w-full pl-0 pr-5 sm:pr-10 py-2 flex items-center justify-between">

        {/* Logo — TOP LEFT, always visible */}
        <Link href="/" className="no-underline flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue" aria-label="History is for Everyone — home">
          {/* Mobile: stacked lockup */}
          <img src="/logo-lockup-town.svg" alt="" role="presentation" className="h-[240px] w-auto sm:hidden" />
          {/* Desktop: horizontal lockup */}
          <img src="/logo-horizontal.svg" alt="" role="presentation" className="h-[110px] w-auto hidden sm:block" />
        </Link>

        {/* Desktop nav — RIGHT */}
        <nav className="hidden sm:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => {
            const active = isNavActive(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`no-underline font-ui text-[13px] font-medium uppercase tracking-[0.2em] transition-colors py-1 border-b-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-blue ${
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
            href="/search"
            className="no-underline text-white hover:text-cream transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-blue"
            aria-label="Search the site"
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="2" />
              <path d="M13 13l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </Link>
          <Link
            href="/muster/new"
            className="no-underline ml-2 bg-crimson text-cream font-ui text-[10px] font-semibold uppercase tracking-[0.2em] px-4 py-3 min-h-[44px] flex items-center border-2 border-crimson hover:bg-[#a82818] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue"
          >
            Plan a Visit
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden p-2 -mr-2 text-white hover:text-cream transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-blue"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="main-mobile-menu"
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id="main-mobile-menu"
          className="mobile-dropdown sm:hidden bg-ink border-t-2 border-crimson"
          aria-label="Mobile navigation"
        >
          <ul className="px-6 py-4 space-y-1 list-none m-0 p-0" role="list">
            {NAV_LINKS.map(({ label, href }) => {
              const active = isNavActive(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`no-underline block py-3 font-ui font-medium text-[10px] uppercase tracking-[0.2em] transition-colors min-h-[44px] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-ink ${
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
                href="/muster/new"
                onClick={() => setOpen(false)}
                className="no-underline block w-full text-center py-3 px-4 bg-crimson text-cream font-ui font-semibold text-[10px] uppercase tracking-[0.2em] min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-ink"
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
