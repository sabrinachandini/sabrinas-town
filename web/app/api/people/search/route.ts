import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q")?.trim() ?? "";

  if (q.length < 2) {
    return NextResponse.json({ results: [] });
  }

  const eventPeople = await prisma.eventPerson.findMany({
    where: {
      person: { name: { contains: q, mode: "insensitive" } },
    },
    include: {
      person: { select: { id: true, name: true, roles: true } },
      event: {
        include: {
          town: { select: { name: true, slug: true, state: true } },
        },
      },
    },
    take: 50,
  });

  // Group by person, deduplicate towns
  const personMap = new Map<
    string,
    {
      id: string;
      name: string;
      roles: string[];
      towns: Map<string, { name: string; slug: string; state: string }>;
    }
  >();

  for (const ep of eventPeople) {
    const p = ep.person;
    if (!personMap.has(p.id)) {
      personMap.set(p.id, {
        id: p.id,
        name: p.name,
        roles: p.roles,
        towns: new Map(),
      });
    }
    const entry = personMap.get(p.id)!;
    const town = ep.event.town;
    if (town && !entry.towns.has(town.slug)) {
      entry.towns.set(town.slug, {
        name: town.name,
        slug: town.slug,
        state: town.state,
      });
    }
  }

  const results = [...personMap.values()]
    .slice(0, 10)
    .map((p) => ({
      id: p.id,
      name: p.name,
      roles: p.roles,
      towns: [...p.towns.values()],
    }));

  return NextResponse.json({ results });
}
