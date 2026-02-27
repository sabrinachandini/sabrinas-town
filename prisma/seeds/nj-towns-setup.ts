import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Setting up Elizabeth and Hackensack town records...');

  // Elizabeth, NJ
  await prisma.town.upsert({
    where: { id: 'us-nj-elizabeth' },
    update: {
      name: 'Elizabeth',
      state: 'NJ',
      slug: 'elizabeth-nj',
      lat: 40.6640,
      lng: -74.2107,
      heroSummary40: 'First capital, first to fight',
      execSummary150: 'New Jersey\'s colonial capital and a hub of early resistance where militia organizing, supply networks, and Continental Army movements shaped the war\'s middle theater.',
    },
    create: {
      id: 'us-nj-elizabeth',
      name: 'Elizabeth',
      state: 'NJ',
      country: 'USA',
      slug: 'elizabeth-nj',
      lat: 40.6640,
      lng: -74.2107,
      heroSummary40: 'First capital, first to fight',
      execSummary150: 'New Jersey\'s colonial capital and a hub of early resistance where militia organizing, supply networks, and Continental Army movements shaped the war\'s middle theater.',
      whyMatters: `Elizabeth — known as Elizabethtown during the Revolution — was the colonial capital of New Jersey and one of the oldest English settlements in the state, founded in 1664. Its position along the Arthur Kill waterway made it a strategic crossing point between New Jersey and Staten Island, and its prominence as the seat of colonial government ensured it would be at the center of revolutionary politics from the earliest days of resistance.

The town produced several signers of the Declaration of Independence, including Abraham Clark, and was home to prominent patriot families like the Livingstons and Boudinots. Elias Boudinot, who later served as President of the Continental Congress, organized intelligence networks from Elizabeth that fed information to Washington's army throughout the war.

Elizabeth endured repeated British raids from Staten Island, particularly the devastating Battle of Connecticut Farms (1780) and the Battle of Springfield (1780), which targeted the town and surrounding communities. The civilian population suffered enormously — homes were burned, churches destroyed, and the murder of Hannah Caldwell, wife of the patriot minister James Caldwell, became a rallying cry for the American cause.

The town's experience illustrates how the Revolution was fought not only on battlefields but in communities where civilians bore the costs of war, where women maintained resistance networks, and where local militia provided the backbone of defense when the Continental Army was elsewhere.`,
      compositeScore: 0,
      tourismInfo: {
        placeholder: false,
        tier: 'supporting',
        region: 'New Jersey',
        shortRoleTag: 'First capital, first to fight',
      },
    },
  });
  console.log('  ✓ Elizabeth (us-nj-elizabeth) created');

  // Hackensack, NJ
  await prisma.town.upsert({
    where: { id: 'us-nj-hackensack' },
    update: {
      name: 'Hackensack',
      state: 'NJ',
      slug: 'hackensack-nj',
      lat: 40.8859,
      lng: -74.0435,
      heroSummary40: 'Divided town on the retreat line',
      execSummary150: 'A deeply divided community on Washington\'s retreat route where Loyalist and patriot neighbors turned against each other and the war came to every doorstep.',
    },
    create: {
      id: 'us-nj-hackensack',
      name: 'Hackensack',
      state: 'NJ',
      country: 'USA',
      slug: 'hackensack-nj',
      lat: 40.8859,
      lng: -74.0435,
      heroSummary40: 'Divided town on the retreat line',
      execSummary150: 'A deeply divided community on Washington\'s retreat route where Loyalist and patriot neighbors turned against each other and the war came to every doorstep.',
      whyMatters: `Hackensack sits at the heart of Bergen County, which during the Revolution was one of the most bitterly divided regions in all of British North America. The town's population was roughly split between patriots and Loyalists, with the Dutch Reformed community largely supporting independence while many Anglican families remained loyal to the Crown. This division turned neighbors into enemies and made Bergen County a theater of civil war within the larger Revolution.

Washington's retreating army passed through Hackensack in November 1776 after the fall of Fort Lee, crossing the Hackensack River in a desperate march south that nearly ended the Revolution. The town witnessed firsthand the collapse of American military fortunes — soldiers streaming through in disarray, local militia deserting, and civilians confronting the choice of whether to shelter the retreating army or welcome the advancing British.

The Green, at the center of Hackensack, served as a mustering ground for militia throughout the war. The First Dutch Reformed Church became a focal point of patriot organizing, while its congregation was torn apart by divided loyalties. The Hopper House and other local landmarks witnessed interrogations, imprisonments, and the daily violence of a community at war with itself.

Hackensack's story is essential to understanding the Revolution as a civil conflict, not merely a war between armies. It shows how ordinary people — farmers, merchants, ministers — were forced to choose sides, and how those choices destroyed families and communities even as they built a new nation.`,
      compositeScore: 0,
      tourismInfo: {
        placeholder: false,
        tier: 'supporting',
        region: 'New Jersey',
        shortRoleTag: 'Divided town on the retreat line',
      },
    },
  });
  console.log('  ✓ Hackensack (us-nj-hackensack) created');

  // Add both to the NJ cluster as SUPPORTING towns
  const njCluster = await prisma.cluster.findFirst({
    where: { slug: 'nj-war-in-motion' },
  });

  if (njCluster) {
    // Get current max sortOrder
    const maxSort = await prisma.clusterTown.findFirst({
      where: { clusterId: njCluster.id },
      orderBy: { sortOrder: 'desc' },
    });
    const nextSort = (maxSort?.sortOrder ?? 5) + 1;

    await prisma.clusterTown.upsert({
      where: {
        clusterId_townId: {
          clusterId: njCluster.id,
          townId: 'us-nj-elizabeth',
        },
      },
      update: { role: 'SUPPORTING', sortOrder: nextSort },
      create: {
        clusterId: njCluster.id,
        townId: 'us-nj-elizabeth',
        role: 'SUPPORTING',
        sortOrder: nextSort,
      },
    });
    console.log('  ✓ Elizabeth added to NJ cluster');

    await prisma.clusterTown.upsert({
      where: {
        clusterId_townId: {
          clusterId: njCluster.id,
          townId: 'us-nj-hackensack',
        },
      },
      update: { role: 'SUPPORTING', sortOrder: nextSort + 1 },
      create: {
        clusterId: njCluster.id,
        townId: 'us-nj-hackensack',
        role: 'SUPPORTING',
        sortOrder: nextSort + 1,
      },
    });
    console.log('  ✓ Hackensack added to NJ cluster');
  } else {
    console.log('  ⚠ NJ cluster not found — skipping cluster membership');
  }

  console.log('Done!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
