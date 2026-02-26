"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Overview", path: "" },
  { label: "History", path: "/history" },
  { label: "Timeline", path: "/events" },
  { label: "People", path: "/people" },
  { label: "Places", path: "/visit" },
  { label: "Stories", path: "/stories" },
  { label: "Teacher", path: "/teacher" },
  { label: "Sources", path: "/sources" },
];

export function EditorialNav({ slug }: { slug: string }) {
  const pathname = usePathname();
  const base = `/towns/${slug}`;

  return (
    <nav className="border-b border-border-light bg-bg-primary sticky top-0 z-30">
      <div className="mx-auto max-w-[860px] px-6 overflow-x-auto">
        <ul className="flex gap-6 py-3 text-small font-body whitespace-nowrap">
          {NAV_ITEMS.map((item) => {
            const href = `${base}${item.path}`;
            const isActive =
              item.path === ""
                ? pathname === base || pathname === `${base}/`
                : pathname.startsWith(href);

            return (
              <li key={item.label}>
                <Link
                  href={href}
                  className={
                    isActive
                      ? "font-semibold underline underline-offset-4 text-text-primary"
                      : "text-text-muted hover:text-text-primary transition-colors"
                  }
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
