"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface TownSubnavProps {
  slug: string;
}

const NAV_ITEMS = [
  { label: "Overview", path: "" },
  { label: "History", path: "/history" },
  { label: "Timeline", path: "/timeline" },
  { label: "People", path: "/people" },
  { label: "Places", path: "/places" },
  { label: "Stories", path: "/stories" },
  { label: "Teacher", path: "/teacher" },
  { label: "Sources", path: "/sources" },
] as const;

export function TownSubnav({ slug }: TownSubnavProps) {
  const pathname = usePathname();
  const base = `/towns/${slug}`;

  const isActive = (itemPath: string) => {
    const href = `${base}${itemPath}`;
    if (itemPath === "") {
      return pathname === base || pathname === `${base}/`;
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav className="bg-ink border-b-[3px] border-crimson sticky top-[52px] z-20" aria-label="Town sections">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 overflow-x-auto">
        <ul className="flex gap-0 min-w-max">
          {NAV_ITEMS.map(({ label, path }) => {
            const active = isActive(path);
            return (
              <li key={path}>
                <Link
                  href={`${base}${path}`}
                  className={`no-underline block px-4 py-3.5 font-ui font-medium text-[10px] uppercase tracking-[0.15em] whitespace-nowrap border-b-2 transition-colors duration-150 ${
                    active
                      ? "text-cream border-crimson"
                      : "text-cream/40 border-transparent hover:text-cream hover:border-cream/30"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
