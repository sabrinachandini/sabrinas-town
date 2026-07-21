import { redirect } from "next/navigation";
import NextLink from "next/link";
import { auth } from "@/lib/auth";
import { resolveScope } from "@/lib/scope";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function MembersPage() {
  const session = await auth();
  const scope = await resolveScope(session);
  if (!scope || scope.type !== "town") redirect("/login");

  const [account, invites] = await Promise.all([
    prisma.partnerAccount.findUnique({
      where: { id: scope.partnerAccountId },
      include: {
        memberships: {
          include: { user: { select: { id: true, name: true, email: true } } },
          orderBy: { createdAt: "asc" },
        },
      },
    }),
    prisma.partnerInvite.findMany({
      where: {
        partnerAccountId: scope.partnerAccountId,
        acceptedAt: null,
        expiresAt: { gt: new Date() },
      },
      orderBy: { createdAt: "desc" },
    }),
  ]);

  if (!account) redirect("/login");

  return (
    <div>
      <div className="bg-[#1a3a72] px-8 py-8 border-b-4 border-white/20">
        <p className="font-ui text-[10px] uppercase tracking-[0.28em] text-white/40 mb-1">
          Your Town
        </p>
        <h1 className="font-display text-[#f2e6c8] text-[36px] tracking-[-0.03em]">
          Team Members
        </h1>
        <p className="font-ui text-[13px] text-white/40 mt-1">
          {account.memberships.length} active member{account.memberships.length !== 1 ? "s" : ""}
          {invites.length > 0 ? ` · ${invites.length} pending invite${invites.length !== 1 ? "s" : ""}` : ""}
        </p>
      </div>

      <div className="max-w-[800px] mx-auto px-8 py-8 space-y-10">
        {/* Members list */}
        <section>
          <h2 className="font-display text-[20px] text-[#14100a] tracking-[-0.02em] mb-4">
            Active Members
          </h2>
          <div className="border-2 border-[#14100a]/10 bg-white/60 divide-y divide-[#14100a]/5">
            {account.memberships.map((m) => (
              <div key={m.id} className="flex items-center justify-between px-5 py-3.5">
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

        {/* Pending invites */}
        {invites.length > 0 && (
          <section>
            <h2 className="font-display text-[20px] text-[#14100a] tracking-[-0.02em] mb-4">
              Pending Invites
            </h2>
            <div className="border-2 border-[#14100a]/10 bg-white/60 divide-y divide-[#14100a]/5">
              {invites.map((inv) => (
                <div key={inv.id} className="flex items-center justify-between px-5 py-3.5">
                  <div>
                    <p className="font-ui text-[12px] text-[#14100a]">{inv.email}</p>
                    <p className="font-ui text-[10px] text-[#14100a]/40">
                      Expires {new Date(inv.expiresAt).toLocaleDateString()} · Role: {inv.role}
                    </p>
                  </div>
                  <span className="font-ui text-[9px] uppercase tracking-[0.15em] text-[#C8A24A]">
                    pending
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Invite CTA — only OWNER/ADMIN can invite; no role check here, staff manages roles */}
        <section>
          <NextLink
            href="/admin/town/members/invite"
            className="font-ui text-[10px] uppercase tracking-[0.15em] px-4 py-2.5 bg-[#1a3a72] text-white hover:bg-[#1a3a72]/80 transition-colors no-underline inline-block"
          >
            + Invite Team Member
          </NextLink>
        </section>
      </div>
    </div>
  );
}
