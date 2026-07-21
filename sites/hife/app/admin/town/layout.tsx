import type { Metadata } from "next";
import { redirect } from "next/navigation";
import NextLink from "next/link";
import { auth } from "@/lib/auth";
import { resolveScope } from "@/lib/scope";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const NAV = [
  { href: "/admin/town", label: "Dashboard" },
  { href: "/admin/town/suggestions", label: "Suggestions" },
  { href: "/admin/town/proposals", label: "Proposals" },
  { href: "/admin/town/members", label: "Members" },
];

export default async function TownAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const scope = await resolveScope(session);

  if (!scope) redirect("/login?callbackUrl=/admin/town");
  if (scope.type === "network") redirect("/admin");

  return (
    <div className="bg-[#f2ece0] min-h-screen">
      <nav className="bg-[#1a3a72] border-b border-white/10 px-6 py-0 flex items-center gap-0 overflow-x-auto">
        <span className="font-ui text-[10px] uppercase tracking-[0.28em] text-white/40 mr-6 shrink-0">
          Your Town
        </span>
        {NAV.map((n) => (
          <NextLink
            key={n.href}
            href={n.href}
            className="font-ui text-[11px] text-white/50 hover:text-white transition-colors px-3 py-3 shrink-0 border-b-2 border-transparent hover:border-white/30"
          >
            {n.label}
          </NextLink>
        ))}
      </nav>
      {children}
    </div>
  );
}
