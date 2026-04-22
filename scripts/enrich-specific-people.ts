/**
 * Enriches bioLong for specific people by ID.
 * Usage:
 *   env DATABASE_URL=... npx tsx --env-file=/dev/null scripts/enrich-specific-people.ts
 */

import Anthropic from "@anthropic-ai/sdk";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["error"] });
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const TARGET_IDS = [
  "person-john-hancock-lexington",
  "person-paul-revere",
];

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const people = await prisma.person.findMany({
    where: { id: { in: TARGET_IDS } },
    select: {
      id: true, name: true, roles: true, bioShort: true, bioLong: true,
      birthYear: true, deathYear: true,
      townPeople: { select: { town: { select: { name: true, state: true } }, connectionNote: true }, take: 6 },
      eventPeople: {
        select: { event: { select: { name: true, startDate: true, significanceWeight: true } }, roleInEvent: true },
        orderBy: { event: { significanceWeight: "desc" } },
        take: 12,
      },
    },
  });

  for (const person of people) {
    const lifespan = person.birthYear ? `${person.birthYear}–${person.deathYear ?? "?"}` : "";
    const townList = person.townPeople.map((tp) => `${tp.town.name}, ${tp.town.state}${tp.connectionNote ? ` (${tp.connectionNote})` : ""}`).join("; ");
    const eventList = person.eventPeople.map((ep) => `${ep.event.name}${ep.event.startDate ? ` (${new Date(ep.event.startDate).getFullYear()})` : ""}${ep.roleInEvent ? `: ${ep.roleInEvent}` : ""}`).join("; ");
    const primaryTown = person.townPeople[0]?.town;

    const prompt = `Write a biographical article for an American Revolution educational website.

Person: ${person.name}${lifespan ? ` (${lifespan})` : ""}
Prominence level: famous
Roles: ${person.roles.join(", ")}
Associated towns: ${townList || "Various locations"}
Key events: ${eventList || "Various Revolutionary War events"}
Short bio: ${person.bioShort}
${person.bioLong ? `Existing bio (expand and improve upon this): ${person.bioLong}` : ""}

Output EXACTLY this structure:

[MAIN BIO — 10 paragraphs, each 180–220 words]
- Paragraph 1: Early life, origins, and formation of character before the Revolution
- Paragraph 2: How they entered the Revolutionary cause — the turning point
- Paragraph 3: Their most significant military or political action
- Paragraph 4: Key battles, decisions, or moments they shaped
- Paragraph 5: Relationships and alliances that defined their role
- Paragraph 6: Setbacks, controversies, or moral complexity
- Paragraph 7: How the war changed them personally
- Paragraph 8: Their role in the war's resolution or aftermath
- Paragraph 9: Immediate legacy — how contemporaries saw them
- Paragraph 10: Why students and visitors today should know this person

WHY ${person.name.toUpperCase()} MATTERS${primaryTown ? ` TO ${primaryTown.name.toUpperCase()}` : ""}
[1 paragraph, 80–120 words: why students and visitors should know this person — what their story teaches us about the Revolution]

TIMELINE
[8–12 bullet points of key life dates, format: "- YYYY: Event description"]

SOURCES
[4–6 real, verifiable sources — books, primary documents, or reputable archives. Format: "- Author. Title. Publisher, Year." or "- Institution. Document title. URL."]

Additional requirements:
- Write for educated general readers — vivid, specific, not dry
- Use specific dates and places where historically accurate
- Do NOT begin with the person's name as the first word
- Do NOT invent facts not supported by the bio above
- The TIMELINE and SOURCES sections must use the exact header words shown above`;

    console.log(`\nGenerating bio for ${person.name}...`);
    try {
      const msg = await client.messages.create({
        model: "claude-opus-4-6",
        max_tokens: 6000,
        messages: [{ role: "user", content: prompt }],
      });

      const text = (msg.content[0] as any).text as string;
      if (!text || text.length < 1000) {
        console.log(`  ⚠ Short response (${text?.length ?? 0} chars)`);
        continue;
      }

      await prisma.person.update({ where: { id: person.id }, data: { bioLong: text } });
      console.log(`  ✓ ${person.name} — ${text.length} chars written`);
    } catch (err) {
      console.error(`  ✗ ${person.name}:`, err);
    }

    await delay(3000);
  }

  console.log("\nDone.");
}

main().catch(console.error).finally(() => prisma.$disconnect());
