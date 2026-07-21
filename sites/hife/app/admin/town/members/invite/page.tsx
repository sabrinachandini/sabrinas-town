export const dynamic = "force-dynamic";

export default function PartnerInviteInfoPage() {
  return (
    <div className="bg-[#1a3a72] min-h-screen flex items-start justify-center pt-20 px-8">
      <div className="max-w-[500px] w-full bg-white/10 border border-white/20 p-10">
        <p className="font-ui text-[10px] uppercase tracking-[0.28em] text-white/40 mb-4">
          Invite Team Member
        </p>
        <p className="font-ui text-[14px] text-white/80 leading-relaxed">
          To invite a new team member, contact your HIFE account manager. They will generate a
          secure magic-link invitation that you can forward to your teammate.
        </p>
        <a
          href="/admin/town/members"
          className="font-ui text-[10px] uppercase tracking-[0.15em] text-white/40 hover:text-white/70 mt-8 block"
        >
          ← Back to Members
        </a>
      </div>
    </div>
  );
}
