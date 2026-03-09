"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Towns", href: "/towns" },
  { label: "Teach", href: "/teach" },
  { label: "Partner", href: "/partner" },
  { label: "About", href: "/about" },
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

  const isActive = (href: string) => {
    if (href === "/towns") return pathname === "/towns" || pathname.startsWith("/towns/");
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`sticky top-0 z-50 h-[52px] bg-ink border-b-[3px] border-crimson transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 flex items-center justify-between h-full">

        {/* Logo — pure text wordmark */}
        <Link href="/" className="no-underline" aria-label="History is for Everyone — home">
          <span className="font-display text-cream text-[15px] tracking-wide">
            HISTORY IS FOR EVERYONE
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                className={`no-underline font-ui text-[10px] font-medium uppercase tracking-[0.2em] transition-colors py-1 border-b-2 ${
                  active
                    ? "text-cream border-crimson"
                    : "text-cream/45 border-transparent hover:text-cream"
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
          className="md:hidden p-2 -mr-2 text-cream/70 hover:text-cream transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-ink border-t border-cream/10" aria-label="Mobile navigation">
          <ul className="px-6 py-4 space-y-1">
            {NAV_LINKS.map(({ label, href }) => {
              const active = isActive(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`no-underline block py-2 font-ui font-medium text-[10px] uppercase tracking-[0.2em] transition-colors ${
                      active ? "text-cream" : "text-cream/45 hover:text-cream"
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
