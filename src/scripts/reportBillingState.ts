// Usage: npx tsx src/scripts/reportBillingState.ts <orgSlug>
import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const slug = process.argv[2];
  if (!slug) { console.error('Usage: npx tsx src/scripts/reportBillingState.ts <orgSlug>'); process.exit(1); }

  const org = await prisma.organization.findUnique({
    where: { slug },
    include: {
      subscription: true,
      townStewardships: { include: { town: { select: { name: true, slug: true } } } },
    },
  });

  if (!org) { console.error(`Org "${slug}" not found`); process.exit(1); }

  console.log('\n=== Org ===');
  console.log(`  id: ${org.id}`);
  console.log(`  slug: ${org.slug}`);
  console.log(`  stripeCustomerId: ${org.stripeCustomerId || '(none)'}`);

  if (org.subscription) {
    const s = org.subscription;
    console.log('\n=== Subscription ===');
    console.log(`  planTier: ${s.planTier}`);
    console.log(`  status: ${s.status}`);
    console.log(`  stripeSubscriptionId: ${s.stripeSubscriptionId}`);
    console.log(`  currentPeriodEnd: ${s.currentPeriodEnd}`);
    console.log(`  cancelAtPeriodEnd: ${s.cancelAtPeriodEnd}`);
  } else {
    console.log('\n=== Subscription: none ===');
  }

  console.log(`\n=== Stewardships (${org.townStewardships.length}) ===`);
  for (const ts of org.townStewardships) {
    console.log(`  ${ts.town.name} (${ts.town.slug}): ${ts.status}`);
  }

  await prisma.$disconnect();
}
main();
