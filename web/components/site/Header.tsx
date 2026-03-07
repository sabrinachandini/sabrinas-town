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

function StarMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <circle cx="16" cy="16" r="15.5" fill="#0D1F3C" />
      <polygon
        points="16,4 17.32,10.66 21.56,5.37 19.65,11.89 25.87,9.18 21.14,14.05 27.91,14.55 21.46,16.66 27.22,20.26 20.53,19.12 23.96,24.98 18.55,20.87 18.87,27.65 16,21.5 13.13,27.65 13.45,20.87 8.04,24.98 11.47,19.12 4.78,20.26 10.54,16.66 4.09,14.55 10.86,14.05 6.13,9.18 12.35,11.89 10.44,5.37 14.68,10.66"
        fill="#BF1A2F"
      />
      <circle cx="16" cy="16" r="4" fill="#F7F3EC" />
    </svg>
  );
}

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
      className={`sticky top-0 z-50 bg-navy transition-shadow duration-300 ${
        scrolled ? "shadow-lg border-b border-white/10" : ""
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 flex items-center justify-between h-16">

        {/* Logo lockup */}
        <Link href="/" className="no-underline flex items-center gap-3 group" aria-label="History is for Everyone — home">
          <StarMark size={36} />
          <div className="leading-none">
            <div className="font-heading font-bold text-white text-[1.05rem] tracking-tight">
              History Is For Everyone
            </div>
            <div
              className="font-condensed font-bold text-[0.65rem] tracking-[0.12em] uppercase mt-0.5"
              style={{ color: "#C4923B" }}
            >
              75 Towns · Revolutionary America
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                className={`no-underline font-condensed font-bold text-[0.875rem] tracking-[0.08em] uppercase transition-colors duration-200 py-1 border-b-2 ${
                  active
                    ? "text-white border-crimson"
                    : "text-fog border-transparent hover:text-white"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/towns"
            className="no-underline ml-2 px-5 py-2 bg-crimson text-white font-condensed font-bold text-[0.875rem] tracking-[0.08em] uppercase transition-colors duration-200 hover:bg-[#d4202f]"
          >
            Plan a Visit
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -mr-2 text-fog hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-navy border-t border-white/10" aria-label="Mobile navigation">
          <ul className="px-6 py-4 space-y-1">
            {NAV_LINKS.map(({ label, href }) => {
              const active = isActive(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`no-underline block py-2 font-condensed font-bold text-[0.875rem] tracking-[0.08em] uppercase transition-colors ${
                      active ? "text-white" : "text-fog hover:text-white"
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
                className="no-underline block w-full text-center py-2 px-4 bg-crimson text-white font-condensed font-bold text-[0.875rem] tracking-[0.08em] uppercase"
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
