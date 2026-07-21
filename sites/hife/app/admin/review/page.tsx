import prisma from "@/lib/prisma";
import {
  approveLocalEvent, rejectLocalEvent,
  approvePlace, rejectPlace,
  approvePerson, rejectPerson,
  publishEntityLinkAction, demoteEntityLinkAction,
  approveSuggestion, rejectSuggestion,
} from "./actions";
import { RatifyButton } from "./RatifyButton";

export const dynamic = "force-dynamic";

async function getReviewQueue() {
  const [localEvents, places, persons, entityLinks, suggestions] = await Promise.all([
    prisma.localEvent.findMany({
      where: { needsReview: true },
      include: { town: { select: { name: true } } },
      orderBy: { createdAt: "desc" },
      take: 50,
    }),
    prisma.place.findMany({
      where: { needsReview: true },
      include: { town: { select: { name: true } } },
      orderBy: { createdAt: "desc" },
      take: 50,
    }),
    prisma.person.findMany({
      where: { needsReview: true },
      orderBy: { createdAt: "desc" },
      take: 50,
    }),
    prisma.entityLink.findMany({
      where: { status: "NEEDS_REVIEW" },
      orderBy: { createdAt: "desc" },
      take: 50,
    }),
    prisma.suggestion.findMany({
      where: { status: "PENDING" },
      include: { partnerAccount: { select: { name: true } }, submittedBy: { select: { email: true } } },
      orderBy: { createdAt: "desc" },
      take: 50,
    }),
  ]);
  return { localEvents, places, persons, entityLinks, suggestions };
}

function SectionHeader({ title, count }: { title: string; count: number }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <h2 className="font-display text-[20px] text-[#14100a] tracking-[-0.02em]">{title}</h2>
      {count > 0 && (
        <span className="font-ui text-[10px] font-semibold text-white bg-[#cc3322] px-2 py-0.5">
          {count}
        </span>
      )}
    </div>
  );
}

function ActionBar({ approve, reject, children }: {
  approve: () => Promise<void>;
  reject: () => Promise<void>;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-2 flex-wrap mt-3">
      <form action={approve}>
        <button type="submit"
          className="font-ui text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 bg-[#2a5c45] text-white hover:bg-[#2a5c45]/80 transition-colors">
          Approve
        </button>
      </form>
      <form action={reject}>
        <button type="submit"
          className="font-ui text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 border border-[#cc3322] text-[#cc3322] hover:bg-[#cc3322]/5 transition-colors">
          Reject
        </button>
      </form>
      {children}
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-2 border-[#14100a]/10 bg-white/60 p-5">{children}</div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <span className="font-ui text-[10px] text-[#14100a]/40">
      <span className="uppercase tracking-[0.15em]">{label}:</span> {value}
    </span>
  );
}

export default async function ReviewQueuePage() {
  const { localEvents, places, persons, entityLinks, suggestions } = await getReviewQueue();
  const total = localEvents.length + places.length + persons.length + entityLinks.length + suggestions.length;

  return (
    <div>
      <div className="bg-[#14100a] px-8 py-8 border-b-4 border-[#C8A24A]">
        <p className="font-ui text-[10px] uppercase tracking-[0.28em] text-[#C8A24A]/50 mb-1">Mission Control</p>
        <h1 className="font-display text-[#f2e6c8] text-[36px] tracking-[-0.03em]">Review Queue</h1>
        <p className="font-ui text-[13px] text-[#f2e6c8]/40 mt-1">
          {total === 0 ? "All clear — nothing needs review." : `${total} item${total !== 1 ? "s" : ""} need attention.`}
        </p>
      </div>

      {total === 0 && (
        <div className="max-w-[900px] mx-auto px-8 py-20 text-center">
          <p className="font-display text-[32px] text-[#14100a]/20 tracking-[-0.02em]">All clear ✓</p>
        </div>
      )}

      <div className="max-w-[900px] mx-auto px-8 py-10 space-y-14">

        {/* EntityLinks — M0.4 publish / rollback */}
        {entityLinks.length > 0 && (
          <section>
            <SectionHeader title="Entity Links" count={entityLinks.length} />
            <div className="space-y-3">
              {entityLinks.map((el) => (
                <Card key={el.id}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="font-ui text-[11px] font-semibold text-[#14100a]">
                        {el.fromType} <span className="text-[#14100a]/40">→</span>{" "}
                        <span className="text-[#1a3a72]">{el.linkType}</span>{" "}
                        <span className="text-[#14100a]/40">→</span> {el.toType}
                      </p>
                      <p className="font-ui text-[11px] text-[#14100a]/50 mt-1 font-mono truncate">
                        {el.fromId} → {el.toId}
                      </p>
                      {el.label && (
                        <p className="font-ui text-[11px] text-[#2a5c45] mt-1">
                          label: &quot;{el.label}&quot;
                        </p>
                      )}
                      <div className="flex gap-3 mt-2">
                        <Meta label="created" value={el.createdAt.toLocaleDateString()} />
                      </div>
                    </div>
                  </div>
                  <ActionBar
                    approve={publishEntityLinkAction.bind(null, el.id)}
                    reject={demoteEntityLinkAction.bind(null, el.id)}
                  >
                    <RatifyButton
                      entityType="EntityLink"
                      entityId={el.id}
                      entityData={`${el.fromType} [${el.fromId}] -[${el.linkType}]-> ${el.toType} [${el.toId}]${el.label ? ` (label: "${el.label}")` : ""}`}
                    />
                  </ActionBar>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Local Events */}
        {localEvents.length > 0 && (
          <section>
            <SectionHeader title="Local Events" count={localEvents.length} />
            <div className="space-y-3">
              {localEvents.map((ev) => (
                <Card key={ev.id}>
                  <p className="font-ui text-[12px] font-semibold text-[#14100a]">{ev.name}</p>
                  <p className="font-ui text-[11px] text-[#14100a]/60 mt-1 line-clamp-2">{ev.description}</p>
                  <div className="flex gap-3 mt-2 flex-wrap">
                    <Meta label="town" value={ev.town.name} />
                    <Meta label="category" value={ev.category} />
                    <Meta label="confidence" value={ev.confidence} />
                    {ev.url && <Meta label="url" value={ev.url} />}
                  </div>
                  <ActionBar
                    approve={approveLocalEvent.bind(null, ev.id)}
                    reject={rejectLocalEvent.bind(null, ev.id)}
                  >
                    <RatifyButton
                      entityType="LocalEvent"
                      entityId={ev.id}
                      entityData={`Name: ${ev.name}\nTown: ${ev.town.name}\nCategory: ${ev.category}\nDescription: ${ev.description}`}
                    />
                  </ActionBar>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Places */}
        {places.length > 0 && (
          <section>
            <SectionHeader title="Places" count={places.length} />
            <div className="space-y-3">
              {places.map((pl) => (
                <Card key={pl.id}>
                  <p className="font-ui text-[12px] font-semibold text-[#14100a]">{pl.name}</p>
                  <p className="font-ui text-[11px] text-[#14100a]/60 mt-1 line-clamp-2">{pl.description}</p>
                  <div className="flex gap-3 mt-2 flex-wrap">
                    <Meta label="town" value={pl.town.name} />
                    <Meta label="type" value={pl.placeType} />
                  </div>
                  <ActionBar
                    approve={approvePlace.bind(null, pl.id)}
                    reject={rejectPlace.bind(null, pl.id)}
                  >
                    <RatifyButton
                      entityType="Place"
                      entityId={pl.id}
                      entityData={`Name: ${pl.name}\nType: ${pl.placeType}\nTown: ${pl.town.name}\nDescription: ${pl.description}`}
                    />
                  </ActionBar>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Persons */}
        {persons.length > 0 && (
          <section>
            <SectionHeader title="Persons" count={persons.length} />
            <div className="space-y-3">
              {persons.map((p) => (
                <Card key={p.id}>
                  <p className="font-ui text-[12px] font-semibold text-[#14100a]">{p.name}</p>
                  <p className="font-ui text-[11px] text-[#14100a]/60 mt-1 line-clamp-2">{p.bioShort}</p>
                  <div className="flex gap-3 mt-2">
                    <Meta label="roles" value={p.roles.join(", ")} />
                    {p.birthYear && <Meta label="born" value={String(p.birthYear)} />}
                  </div>
                  <ActionBar
                    approve={approvePerson.bind(null, p.id)}
                    reject={rejectPerson.bind(null, p.id)}
                  >
                    <RatifyButton
                      entityType="Person"
                      entityId={p.id}
                      entityData={`Name: ${p.name}\nRoles: ${p.roles.join(", ")}\nBio: ${p.bioShort}`}
                    />
                  </ActionBar>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Partner Suggestions */}
        {suggestions.length > 0 && (
          <section>
            <SectionHeader title="Partner Suggestions" count={suggestions.length} />
            <div className="space-y-3">
              {suggestions.map((s) => (
                <Card key={s.id}>
                  <p className="font-ui text-[11px] font-semibold text-[#14100a]">
                    {s.entityType}{s.entityId ? ` · ${s.entityId}` : " (new entity)"}
                  </p>
                  <div className="flex gap-3 mt-2 flex-wrap">
                    <Meta label="from" value={s.partnerAccount.name} />
                    <Meta label="by" value={s.submittedBy.email} />
                    <Meta label="submitted" value={s.createdAt.toLocaleDateString()} />
                  </div>
                  {s.note && (
                    <p className="font-ui text-[11px] text-[#14100a]/60 mt-2 border-l-2 border-[#14100a]/10 pl-3">
                      {s.note}
                    </p>
                  )}
                  <pre className="mt-2 text-[10px] text-[#14100a]/50 bg-[#14100a]/3 p-2 overflow-auto max-h-[120px]">
                    {JSON.stringify(s.payload, null, 2)}
                  </pre>
                  <ActionBar
                    approve={approveSuggestion.bind(null, s.id)}
                    reject={rejectSuggestion.bind(null, s.id)}
                  >
                    <RatifyButton
                      entityType="Suggestion"
                      entityId={s.id}
                      entityData={`Type: ${s.entityType}\nFrom: ${s.partnerAccount.name}\nNote: ${s.note ?? "none"}\nPayload: ${JSON.stringify(s.payload)}`}
                    />
                  </ActionBar>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
