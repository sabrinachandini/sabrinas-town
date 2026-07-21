import { redirect } from "next/navigation";
import NextLink from "next/link";
import { auth } from "@/lib/auth";
import { resolveScope } from "@/lib/scope";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function YourTownDashboard() {
  const session = await auth();
  const scope = await resolveScope(session);
  if (!scope || scope.type !== "town") redirect("/login");

  const [account, suggestionCounts, proposalCounts] = await Promise.all([
    prisma.partnerAccount.findUnique({
      where: { id: scope.partnerAccountId },
      include: {
        town: { select: { name: true, state: true } },
        memberships: {
          include: { user: { select: { name: true, email: true } } },
          orderBy: { createdAt: "asc" },
        },
        agreements: {
          orderBy: { createdAt: "desc" },
          take: 1,
          select: { id: true, title: true, status: true, startsAt: true, expiresAt: true },
        },
      },
    }),
    prisma.suggestion.groupBy({
      by: ["status"],
      where: { partnerAccountId: scope.partnerAccountId },
      _count: { id: true },
    }),
    prisma.proposal.groupBy({
      by: ["status"],
      where: { partnerAccountId: scope.partnerAccountId },
      _count: { id: true },
    }),
  ]);

  if (!account) redirect("/login");

  const suggCount = (status: string) =>
    suggestionCounts.find((s) => s.status === status)?._count.id ?? 0;
  const propCount = (status: string) =>
    proposalCounts.find((s) => s.status === status)?._count.id ?? 0;

  const latestAgreement = account.agreements[0];

  const STATUS_COLORS: Record<string, string> = {
    PENDING: "#C8A24A",
    ACTIVE: "#2a5c45",
    SUSPENDED: "#cc3322",
    CHURNED: "#14100a",
  };

  return (
    <div>
      <div className="bg-[#1a3a72] px-8 py-8 border-b-4 border-white/20">
        <p className="font-ui text-[10px] uppercase tracking-[0.28em] text-white/40 mb-1">
          Partner Dashboard
        </p>
        <h1 className="font-display text-[#f2e6c8] text-[36px] tracking-[-0.03em]">
          {account.town.name}
        </h1>
        <div className="flex items-center gap-3 mt-2">
          <span
            className="font-ui text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 border"
            style={{
              color: STATUS_COLORS[account.status] ?? "#14100a",
              borderColor: STATUS_COLORS[account.status] ?? "#14100a",
            }}
          >
            {account.status}
          </span>
          {account.contactEmail && (
            <span className="font-ui text-[11px] text-white/40">
              {account.contactEmail}
            </span>
          )}
        </div>
      </div>

      <div className="max-w-[900px] mx-auto px-8 py-10 space-y-10">
        {/* Quick stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Suggestions Pending", value: suggCount("PENDING"), href: "/admin/town/suggestions" },
            { label: "Suggestions Accepted", value: suggCount("ACCEPTED"), href: "/admin/town/suggestions" },
            { label: "Proposals Draft", value: propCount("DRAFT"), href: "/admin/town/proposals" },
            { label: "Proposals Submitted", value: propCount("SUBMITTED") + propCount("IN_REVIEW"), href: "/admin/town/proposals" },
          ].map((stat) => (
            <NextLink
              key={stat.label}
              href={stat.href ?? "#"}
              className="block p-5 border-2 border-[#14100a]/10 bg-white/60 hover:bg-white/90 transition-colors no-underline"
            >
              <p className="font-ui text-[10px] uppercase tracking-[0.15em] text-[#14100a]/40 mb-1">
                {stat.label}
              </p>
              <p className="font-display text-[28px] tracking-[-0.03em] text-[#1a3a72]">
                {stat.value}
              </p>
            </NextLink>
          ))}
        </div>

        {/* Agreement */}
        <section>
          <h2 className="font-display text-[20px] text-[#14100a] tracking-[-0.02em] mb-4">
            Agreement
          </h2>
          {latestAgreement ? (
            <div className="border-2 border-[#14100a]/10 bg-white/60 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-ui text-[12px] font-semibold text-[#14100a]">
                    {latestAgreement.title}
                  </p>
                  <div className="flex gap-3 mt-2 flex-wrap">
                    <span className="font-ui text-[10px] text-[#14100a]/40 uppercase tracking-[0.15em]">
                      Status: {latestAgreement.status}
                    </span>
                    {latestAgreement.startsAt && (
                      <span className="font-ui text-[10px] text-[#14100a]/40">
                        From {new Date(latestAgreement.startsAt).toLocaleDateString()}
                      </span>
                    )}
                    {latestAgreement.expiresAt && (
                      <span className="font-ui text-[10px] text-[#14100a]/40">
                        Until {new Date(latestAgreement.expiresAt).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </div>
                <NextLink
                  href="/admin/town/proposals"
                  className="font-ui text-[10px] text-[#1a3a72] hover:underline no-underline shrink-0"
                >
                  View proposals →
                </NextLink>
              </div>
            </div>
          ) : (
            <p className="font-ui text-[13px] text-[#14100a]/40">
              No agreement on file. Contact your HIFE account manager.
            </p>
          )}
        </section>

        {/* Team */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-[20px] text-[#14100a] tracking-[-0.02em]">
              Team
            </h2>
            <NextLink
              href="/admin/town/members"
              className="font-ui text-[10px] text-[#1a3a72] hover:underline no-underline"
            >
              Manage →
            </NextLink>
          </div>
          <div className="space-y-1">
            {account.memberships.map((m) => (
              <div
                key={m.id}
                className="flex items-center justify-between py-2.5 px-3 border-b border-[#14100a]/5"
              >
                <div>
                  <p className="font-ui text-[12px] text-[#14100a]">
                    {m.user.name ?? m.user.email}
                  </p>
                  {m.user.name && (
                    <p className="font-ui text-[10px] text-[#14100a]/40">{m.user.email}</p>
                  )}
                </div>
                <span className="font-ui text-[9px] uppercase tracking-[0.15em] text-[#14100a]/40">
                  {m.role}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Quick actions */}
        <section>
          <h2 className="font-display text-[20px] text-[#14100a] tracking-[-0.02em] mb-4">
            Quick Actions
          </h2>
          <div className="flex gap-3 flex-wrap">
            <NextLink
              href="/admin/town/suggestions/new"
              className="font-ui text-[10px] uppercase tracking-[0.15em] px-4 py-2.5 bg-[#1a3a72] text-white hover:bg-[#1a3a72]/80 transition-colors no-underline"
            >
              + Submit Suggestion
            </NextLink>
            <NextLink
              href="/admin/town/proposals/new"
              className="font-ui text-[10px] uppercase tracking-[0.15em] px-4 py-2.5 border-2 border-[#1a3a72] text-[#1a3a72] hover:bg-[#1a3a72]/5 transition-colors no-underline"
            >
              + New Proposal
            </NextLink>
          </div>
        </section>
      </div>
    </div>
  );
}
