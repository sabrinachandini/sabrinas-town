import type { Metadata } from "next";
import { redirect } from "next/navigation";
import NextLink from "next/link";
import { auth } from "@/lib/auth";
import { resolveScope } from "@/lib/scope";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const NAV = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/review", label: "Review Queue" },
  { href: "/admin/graph", label: "Graph" },
  { href: "/admin/audit", label: "Audit Log" },
  { href: "/admin/towns", label: "Towns" },
  { href: "/admin/picks", label: "Picks" },
  { href: "/admin/inquiries", label: "Inquiries" },
];

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const scope = await resolveScope(session);

  if (!scope) redirect("/login?callbackUrl=/admin");
  if (scope.type === "town") redirect("/admin/town");

  return (
    <div className="bg-[#f2ece0] min-h-screen">
      <nav className="bg-[#14100a] border-b border-[#C8A24A]/20 px-6 py-0 flex items-center gap-0 overflow-x-auto">
        <span className="font-ui text-[10px] uppercase tracking-[0.28em] text-[#C8A24A]/50 mr-6 shrink-0">
          Mission Control
        </span>
        {NAV.map((n) => (
          <NextLink
            key={n.href}
            href={n.href}
            className="font-ui text-[11px] text-[#f2e6c8]/50 hover:text-[#f2e6c8] transition-colors px-3 py-3 shrink-0 border-b-2 border-transparent hover:border-[#C8A24A]/40"
          >
            {n.label}
          </NextLink>
        ))}
      </nav>
      {children}
    </div>
  );
}
