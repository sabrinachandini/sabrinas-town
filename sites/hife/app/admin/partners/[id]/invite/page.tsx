import { redirect } from "next/navigation";
import { notFound } from "next/navigation";
import { auth } from "@/lib/auth";
import { resolveScope, requireNetworkScope } from "@/lib/scope";
import prisma from "@/lib/prisma";
import { InviteResult } from "./InviteResult";
import type { MemberRole } from "@prisma/client";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ id: string }>; searchParams: Promise<{ token?: string }> };

async function createInvite(accountId: string, formData: FormData) {
  "use server";
  const session = await auth();
  const scope = await resolveScope(session);
  requireNetworkScope(scope);

  const email = (formData.get("email") as string).trim().toLowerCase();
  const role = (formData.get("role") as MemberRole) ?? "VIEWER";

  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

  await prisma.partnerInvite.create({
    data: { partnerAccountId: accountId, email, role, expiresAt },
  });

  redirect(`/admin/partners/${accountId}/invite?created=1`);
}

export default async function InvitePartnerPage({ params, searchParams }: Props) {
  const { id } = await params;
  const { token: _token } = await searchParams;

  const session = await auth();
  const scope = await resolveScope(session);
  requireNetworkScope(scope);

  const account = await prisma.partnerAccount.findUnique({
    where: { id },
    include: {
      invites: {
        where: { acceptedAt: null, expiresAt: { gt: new Date() } },
        orderBy: { createdAt: "desc" },
      },
    },
  });
  if (!account) notFound();

  const boundAction = createInvite.bind(null, id);

  const baseUrl = process.env.NEXTAUTH_URL ?? "https://sabrinas-town.vercel.app";

  return (
    <div>
      <div className="bg-[#14100a] px-8 py-8 border-b-4 border-[#C8A24A]">
        <div className="flex items-center gap-3 mb-2">
          <a href={`/admin/partners/${id}`}
            className="font-ui text-[10px] text-[#C8A24A]/50 hover:text-[#C8A24A]">
            ← {account.name}
          </a>
        </div>
        <h1 className="font-display text-[#f2e6c8] text-[32px] tracking-[-0.03em]">Invite User</h1>
        <p className="font-ui text-[13px] text-[#f2e6c8]/40 mt-1">
          Generates a 7-day magic link. Paste it into your email to the partner.
        </p>
      </div>

      <div className="max-w-[600px] mx-auto px-8 py-10 space-y-10">
        <form action={boundAction} className="space-y-5">
          <div>
            <label className="block font-ui text-[10px] uppercase tracking-[0.2em] text-[#14100a]/50 mb-2">
              Email *
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="partner@example.com"
              className="w-full font-ui text-[12px] border-2 border-[#14100a]/10 bg-white/60 px-4 py-2.5 focus:outline-none focus:border-[#1a3a72]/40"
            />
          </div>
          <div>
            <label className="block font-ui text-[10px] uppercase tracking-[0.2em] text-[#14100a]/50 mb-2">
              Role
            </label>
            <select
              name="role"
              className="w-full font-ui text-[12px] border-2 border-[#14100a]/10 bg-white/60 px-4 py-2.5 focus:outline-none focus:border-[#1a3a72]/40"
            >
              <option value="VIEWER">Viewer</option>
              <option value="EDITOR">Editor</option>
              <option value="ADMIN">Admin</option>
              <option value="OWNER">Owner</option>
            </select>
          </div>
          <button
            type="submit"
            className="font-ui text-[10px] uppercase tracking-[0.15em] px-5 py-2.5 bg-[#14100a] text-white hover:bg-[#14100a]/80 transition-colors"
          >
            Generate Link
          </button>
        </form>

        {account.invites.length > 0 && (
          <section>
            <h2 className="font-display text-[18px] text-[#14100a] tracking-[-0.02em] mb-4">
              Pending Invites
            </h2>
            <div className="space-y-3">
              {account.invites.map((inv) => (
                <InviteResult
                  key={inv.id}
                  email={inv.email}
                  role={inv.role}
                  expiresAt={inv.expiresAt.toISOString()}
                  link={`${baseUrl}/invite/accept?token=${inv.token}`}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
