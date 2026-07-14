import type { ReactNode } from "react";
import type { TownConfig } from "../config/schema";

interface NavItem {
  href: string;
  label: string;
}

interface TownLayoutProps {
  config: TownConfig;
  children: ReactNode;
  /**
   * Header navigation. Defaults to the route-based nav shared by every town
   * site (Events / People / Stories / Places) so links never 404. New towns
   * can override this once they add tourism routes.
   */
  nav?: NavItem[];
}

const DEFAULT_NAV: NavItem[] = [
  { href: "/events", label: "Events" },
  { href: "/people", label: "People" },
  { href: "/stories", label: "Stories" },
  { href: "/places", label: "Places" },
];

/**
 * Two-tier shell (header + footer) shared by every branded town site.
 * The site's own `app/layout.tsx` keeps <html>/<body> and metadata; it renders
 * this component around {children}. Markup matches the original Lexington shell
 * exactly so refactored sites stay pixel-identical.
 */
export function TownLayout({ config, children, nav = DEFAULT_NAV }: TownLayoutProps) {
  return (
    <>
      <header className="bg-navy text-cream px-6 py-4 flex items-center gap-4">
        <a href="/" className="font-condensed text-2xl tracking-widest uppercase">
          {config.name}
        </a>
        <nav className="flex gap-6 text-sm font-body ml-auto">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:underline">
              {item.label}
            </a>
          ))}
        </nav>
      </header>
      <main>{children}</main>
      <footer className="bg-navy text-cream/60 text-xs font-body text-center py-6 mt-16">
        Part of the History Is for Everyone network ·{" "}
        <a href="https://sabrinas-town.vercel.app" className="underline">
          sabrinas-town.vercel.app
        </a>
      </footer>
    </>
  );
}
