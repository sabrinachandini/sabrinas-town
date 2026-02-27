"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Towns", href: "/towns" },
  { label: "Teach", href: "/teach" },
  { label: "Clusters", href: "/clusters" },
  { label: "Partner", href: "/partner" },
  { label: "About", href: "/methodology" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/towns") {
      return pathname === "/towns" || pathname.startsWith("/towns/");
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="border-b border-border-light bg-bg-primary">
      <div className="mx-auto max-w-wide px-6 md:px-12 flex items-center justify-between h-14">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-heading text-[1.125rem] font-semibold tracking-tight text-text-primary hover:text-accent-blue transition-colors"
        >
          History is for Everyone
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {NAV_LINKS.map(({ label, href }) => {
              const active = isActive(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`text-[0.9375rem] font-body transition-colors py-1 border-b-2 ${
                      active
                        ? "border-accent-blue text-text-primary font-medium"
                        : "border-transparent text-text-muted hover:text-text-primary"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -mr-2 text-text-muted hover:text-text-primary transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-border-light bg-bg-primary">
          <ul className="px-6 py-4 space-y-1">
            {NAV_LINKS.map(({ label, href }) => {
              const active = isActive(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`block py-2 text-[0.9375rem] font-body transition-colors ${
                      active
                        ? "text-text-primary font-medium"
                        : "text-text-muted hover:text-text-primary"
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
