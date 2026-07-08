import { PrismaClient } from "@prisma/client";

async function main() {
  const p = new PrismaClient({ datasources: { db: { url: process.env.DATABASE_URL } } });
  const pkts = await p.primarySourcePacket.findMany({
    orderBy: [{ townId: "asc" }, { displayOrder: "asc" }],
    select: { id: true, title: true, url: true, publisherOrHolder: true, town: { select: { name: true, state: true } } }
  });
  pkts.forEach(pk => console.log(JSON.stringify({ id: pk.id, title: pk.title, town: pk.town.name, state: pk.town.state, pub: pk.publisherOrHolder })));
  await p.$disconnect();
}
main().catch(e => { console.error(e); process.exit(1); });
