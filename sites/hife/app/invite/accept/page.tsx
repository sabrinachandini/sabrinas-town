import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

type Props = { searchParams: Promise<{ token?: string }> };

async function acceptInvite(token: string, userId: string) {
  "use server";
  // Re-fetch inside action to get latest state
  const invite = await prisma.partnerInvite.findUnique({ where: { token } });

  if (!invite || invite.acceptedAt || invite.expiresAt < new Date()) {
    redirect("/invite/accept?error=expired");
  }

  // Upsert — idempotent if already a member
  await prisma.membership.upsert({
    where: { partnerAccountId_userId: { partnerAccountId: invite.partnerAccountId, userId } },
    create: { partnerAccountId: invite.partnerAccountId, userId, role: invite.role },
    update: { role: invite.role },
  });

  await prisma.partnerInvite.update({
    where: { token },
    data: { acceptedAt: new Date() },
  });

  redirect("/admin/town");
}

export default async function AcceptInvitePage({ searchParams }: Props) {
  const { token } = await searchParams;
  const session = await auth();

  if (!token) {
    return <ErrorPage message="Invalid invite link." />;
  }

  const invite = await prisma.partnerInvite.findUnique({
    where: { token },
    include: { partnerAccount: { include: { town: { select: { name: true } } } } },
  });

  if (!invite || invite.expiresAt < new Date()) {
    return <ErrorPage message="This invite link has expired or is invalid." />;
  }

  if (invite.acceptedAt) {
    return <ErrorPage message="This invite has already been accepted." />;
  }

  // Not signed in → send to login then come back
  if (!session?.user?.id) {
    redirect(`/login?callbackUrl=/invite/accept?token=${token}`);
  }

  // Wrong email — warn but don't hard-block (they may use SSO with alias)
  const emailMismatch = session.user.email?.toLowerCase() !== invite.email.toLowerCase();

  const boundAccept = acceptInvite.bind(null, token, session.user.id);

  return (
    <div className="bg-[#f2ece0] min-h-screen flex items-center justify-center px-4">
      <div className="max-w-[440px] w-full border-2 border-[#14100a]/10 bg-white/80 p-10">
        <p className="font-ui text-[10px] uppercase tracking-[0.28em] text-[#1a3a72]/50 mb-2">
          Partner Invite
        </p>
        <h1 className="font-display text-[28px] text-[#14100a] tracking-[-0.02em] mb-1">
          {invite.partnerAccount.town.name}
        </h1>
        <p className="font-ui text-[13px] text-[#14100a]/50 mb-6">
          You&apos;ve been invited to join <strong>{invite.partnerAccount.name}</strong> as a{" "}
          <strong>{invite.role}</strong>.
        </p>

        {emailMismatch && (
          <div className="border border-[#C8A24A]/40 bg-[#C8A24A]/5 px-4 py-3 mb-6">
            <p className="font-ui text-[11px] text-[#C8A24A]">
              This invite was sent to <strong>{invite.email}</strong> but you&apos;re signed in as{" "}
              <strong>{session.user.email}</strong>. You can still accept, or sign in with the correct account.
            </p>
          </div>
        )}

        <form action={boundAccept}>
          <button
            type="submit"
            className="w-full font-ui text-[10px] uppercase tracking-[0.2em] px-5 py-3 bg-[#1a3a72] text-white hover:bg-[#1a3a72]/80 transition-colors"
          >
            Accept &amp; Join
          </button>
        </form>
      </div>
    </div>
  );
}

function ErrorPage({ message }: { message: string }) {
  return (
    <div className="bg-[#f2ece0] min-h-screen flex items-center justify-center px-4">
      <div className="max-w-[440px] w-full border-2 border-[#14100a]/10 bg-white/80 p-10 text-center">
        <p className="font-ui text-[10px] uppercase tracking-[0.28em] text-[#cc3322]/50 mb-4">Invite Error</p>
        <p className="font-ui text-[14px] text-[#14100a]">{message}</p>
        <a
          href="/"
          className="font-ui text-[11px] text-[#1a3a72] hover:underline mt-6 block"
        >
          Return home
        </a>
      </div>
    </div>
  );
}
