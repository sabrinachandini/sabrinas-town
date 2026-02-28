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
    <nav className="border-b border-border-light bg-bg-primary sticky top-[3.5rem] z-20">
      <div className="mx-auto max-w-wide px-6 md:px-12 overflow-x-auto">
        <ul className="flex gap-6 min-w-max py-3 text-[0.9375rem] font-body whitespace-nowrap">
          {NAV_ITEMS.map(({ label, path }) => {
            const active = isActive(path);
            return (
              <li key={path}>
                <Link
                  href={`${base}${path}`}
                  className={`no-underline py-1 transition-colors duration-150 ${
                    active
                      ? "text-text-primary font-medium border-b-2 border-accent-blue"
                      : "text-text-muted hover:text-text-primary"
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
