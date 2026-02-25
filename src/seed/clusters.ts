// Seed clusters, cluster-town memberships, and cross-cluster bridges
// Idempotent: uses upsert on unique slugs and composite keys

import prisma from '../db/client.js';
import { ClusterTownRole, Prisma } from '@prisma/client';

interface ClusterSeed {
  slug: string;
  name: string;
  state: string;
  theme: string;
  summary: string;
  hubTownId: string;
  towns: { townId: string; role: ClusterTownRole; sortOrder: number }[];
}

interface BridgeSeed {
  fromClusterSlug: string;
  toClusterSlug: string;
  label: string;
  rationale: string;
  anchorTownIds?: string[];
}

const CLUSTERS: ClusterSeed[] = [
  {
    slug: 'ma-revolution-ignites',
    name: 'Massachusetts: Revolution Ignites',
    state: 'MA',
    theme: 'Where resistance became revolution',
    summary:
      'Massachusetts is where the abstract idea of colonial rights turned into armed resistance. From the propaganda networks of Boston to the first shots at Lexington and Concord, this cluster traces the escalation from political dissent to open war. The towns here held the infrastructure of rebellion: printing presses, meeting houses, militia training grounds, and smuggling networks that kept the cause alive before anyone called it a revolution.\n\nBoston anchors the cluster as the political and economic center of colonial protest. Surrounding towns — Lexington, Concord, Cambridge, Arlington — formed the immediate theater of April 19, 1775. Salem, Marblehead, and Plymouth contributed maritime capacity and early governance. Worcester and Springfield provided inland supply lines and the armories that made sustained fighting possible.',
    hubTownId: 'us-ma-boston',
    towns: [
      { townId: 'us-ma-boston', role: 'HUB', sortOrder: 0 },
      { townId: 'us-ma-lexington', role: 'CORE', sortOrder: 1 },
      { townId: 'us-ma-concord', role: 'CORE', sortOrder: 2 },
      { townId: 'us-ma-cambridge', role: 'CORE', sortOrder: 3 },
      { townId: 'us-ma-arlington', role: 'CORE', sortOrder: 4 },
      { townId: 'us-ma-salem', role: 'SUPPORTING', sortOrder: 5 },
      { townId: 'us-ma-marblehead', role: 'SUPPORTING', sortOrder: 6 },
      { townId: 'us-ma-plymouth', role: 'SUPPORTING', sortOrder: 7 },
      { townId: 'us-ma-worcester', role: 'SUPPORTING', sortOrder: 8 },
      { townId: 'us-ma-springfield', role: 'SUPPORTING', sortOrder: 9 },
    ],
  },
  {
    slug: 'nj-war-in-motion',
    name: 'New Jersey: War in Motion',
    state: 'NJ',
    theme: 'The crossroads where momentum shifted',
    summary:
      'New Jersey saw more military engagements per square mile than any other colony. Its position between the British stronghold of New York and the Continental capital in Philadelphia made it a permanent corridor of war. The Ten Crucial Days — Washington\'s crossing and the battles at Trenton and Princeton — reversed the trajectory of the revolution when it looked finished.\n\nMorristown served as the Continental Army\'s winter headquarters twice, enduring conditions that rivaled Valley Forge. The cluster stretches from Fort Lee\'s November 1776 retreat through the brutal winter encampments to the decisive battle at Monmouth. These towns trace how an army on the edge of collapse rebuilt itself into a force that could stand against professional soldiers.',
    hubTownId: 'us-nj-morristown',
    towns: [
      { townId: 'us-nj-morristown', role: 'HUB', sortOrder: 0 },
      { townId: 'us-nj-trenton', role: 'CORE', sortOrder: 1 },
      { townId: 'us-nj-princeton', role: 'CORE', sortOrder: 2 },
      { townId: 'us-nj-monmouth', role: 'CORE', sortOrder: 3 },
      { townId: 'us-nj-new-brunswick', role: 'SUPPORTING', sortOrder: 4 },
      { townId: 'us-nj-fort-lee', role: 'SUPPORTING', sortOrder: 5 },
    ],
  },
  {
    slug: 'pa-political-heart',
    name: 'Pennsylvania: Political Heart',
    state: 'PA',
    theme: 'Where independence was declared and defended',
    summary:
      'Pennsylvania was where the revolution found its language and its legitimacy. Philadelphia hosted the Continental Congress, produced the Declaration of Independence, and served as the de facto national capital for most of the war. But the state also saw desperate military action — the defeats at Brandywine and Germantown, the occupation of Philadelphia, and the pivotal winter at Valley Forge.\n\nThe cluster connects Philadelphia\'s political leadership with the military reality that surrounded it. Valley Forge turned a retreating army into a disciplined force under von Steuben\'s training. York served as the emergency capital when Philadelphia fell. Carlisle provided frontier defense and military supply. These towns together tell the story of how political ideals survived contact with battlefield losses.',
    hubTownId: 'us-pa-philadelphia',
    towns: [
      { townId: 'us-pa-philadelphia', role: 'HUB', sortOrder: 0 },
      { townId: 'us-pa-valley-forge', role: 'CORE', sortOrder: 1 },
      { townId: 'us-pa-york', role: 'CORE', sortOrder: 2 },
      { townId: 'us-pa-germantown', role: 'CORE', sortOrder: 3 },
      { townId: 'us-pa-carlisle', role: 'SUPPORTING', sortOrder: 4 },
      { townId: 'us-pa-paoli', role: 'SUPPORTING', sortOrder: 5 },
      { townId: 'us-pa-pittsburgh', role: 'SUPPORTING', sortOrder: 6 },
    ],
  },
  {
    slug: 'ny-turning-point',
    name: 'New York: The Turning Point',
    state: 'NY',
    theme: 'The theater that decided the war\'s fate',
    summary:
      'New York was the most contested territory of the revolution. The British occupied New York City for nearly the entire war, while American and British forces fought for control of the Hudson Valley — the strategic corridor that connected New England to the rest of the colonies. Cutting that corridor was the British grand strategy; holding it together was Washington\'s constant preoccupation.\n\nSaratoga stands as the turning point: the American victory there in 1777 convinced France to enter the war as an ally, fundamentally changing the conflict\'s scale and outcome. From the fortifications at West Point to the retreat through White Plains and the political maneuvering at Kingston, New York\'s cluster traces the war\'s most consequential strategic contest.',
    hubTownId: 'us-ny-saratoga-springs',
    towns: [
      { townId: 'us-ny-saratoga-springs', role: 'HUB', sortOrder: 0 },
      { townId: 'us-ny-albany', role: 'CORE', sortOrder: 1 },
      { townId: 'us-ny-west-point', role: 'CORE', sortOrder: 2 },
      { townId: 'us-ny-ticonderoga', role: 'CORE', sortOrder: 3 },
      { townId: 'us-ny-new-york-city', role: 'CORE', sortOrder: 4 },
      { townId: 'us-ny-white-plains', role: 'SUPPORTING', sortOrder: 5 },
      { townId: 'us-ny-newburgh', role: 'SUPPORTING', sortOrder: 6 },
      { townId: 'us-ny-kingston', role: 'SUPPORTING', sortOrder: 7 },
      { townId: 'us-ny-crown-point', role: 'SUPPORTING', sortOrder: 8 },
      { townId: 'us-ny-stony-point', role: 'SUPPORTING', sortOrder: 9 },
      { townId: 'us-ny-harlem-heights', role: 'SUPPORTING', sortOrder: 10 },
    ],
  },
  {
    slug: 'ct-arsenal-of-the-revolution',
    name: 'Connecticut: Arsenal of the Revolution',
    state: 'CT',
    theme: 'The supply line that kept the army fighting',
    summary:
      'Connecticut earned its nickname as the "Provisions State" by feeding and equipping the Continental Army when other colonies could not. Governor Jonathan Trumbull was the only colonial governor to support the revolution from the start, turning the state into a logistical backbone. Connecticut also contributed more soldiers per capita than any other colony.\n\nNew Haven served as an intellectual and organizational center, while New London and Groton guarded the coast and paid a heavy price in Benedict Arnold\'s 1781 raid. Danbury was targeted specifically because it housed Continental Army supplies. The cluster tells a story less about famous battles and more about the infrastructure of sustained resistance — the powder mills, provision depots, and shipyards that made the war possible.',
    hubTownId: 'us-ct-new-haven',
    towns: [
      { townId: 'us-ct-new-haven', role: 'HUB', sortOrder: 0 },
      { townId: 'us-ct-new-london', role: 'CORE', sortOrder: 1 },
      { townId: 'us-ct-danbury', role: 'CORE', sortOrder: 2 },
      { townId: 'us-ct-groton', role: 'SUPPORTING', sortOrder: 3 },
    ],
  },
  {
    slug: 'ri-naval-power',
    name: 'Rhode Island: Naval Power',
    state: 'RI',
    theme: 'Where sea power shaped the revolution',
    summary:
      'Rhode Island\'s contribution to the revolution was shaped by its coast. Newport was one of the most important ports in colonial America, and its occupation by the British from 1776 to 1779 disrupted Atlantic trade networks. The French alliance brought Rochambeau\'s army to Newport in 1780, turning the state into a staging ground for the campaign that ended the war at Yorktown.\n\nProvidence served as the state capital and intellectual hub, home to Brown University and a network of merchants who financed privateering operations. The Battle of Rhode Island in 1778 was one of the few engagements where the 1st Rhode Island Regiment — including Black and Indigenous soldiers — fought as a unit. The cluster connects maritime strategy, the French alliance, and questions of who fought and why.',
    hubTownId: 'us-ri-newport',
    towns: [
      { townId: 'us-ri-newport', role: 'HUB', sortOrder: 0 },
      { townId: 'us-ri-providence', role: 'CORE', sortOrder: 1 },
    ],
  },
  {
    slug: 'va-endgame',
    name: 'Virginia: Endgame',
    state: 'VA',
    theme: 'Where the revolution began in thought and ended in victory',
    summary:
      'Virginia bookends the revolution. The colony\'s leaders — Washington, Jefferson, Mason, Henry — provided the intellectual and military framework for independence. Williamsburg hosted the House of Burgesses where colonial resistance first took political form. Yorktown, seven years later, hosted the siege that ended British ambitions in America.\n\nBetween those endpoints, Virginia\'s towns trace the revolution\'s full arc. Richmond became the state capital as Williamsburg proved too vulnerable. Charlottesville nearly lost the state legislature to a British raid. Norfolk was burned in the war\'s opening months. The cluster connects the political origins of independence with the military conclusion, through towns that experienced the revolution as both idea and consequence.',
    hubTownId: 'us-va-williamsburg',
    towns: [
      { townId: 'us-va-williamsburg', role: 'HUB', sortOrder: 0 },
      { townId: 'us-va-yorktown', role: 'CORE', sortOrder: 1 },
      { townId: 'us-va-richmond', role: 'CORE', sortOrder: 2 },
      { townId: 'us-va-norfolk', role: 'CORE', sortOrder: 3 },
      { townId: 'us-va-charlottesville', role: 'SUPPORTING', sortOrder: 4 },
      { townId: 'us-va-alexandria', role: 'SUPPORTING', sortOrder: 5 },
      { townId: 'us-va-fredericksburg', role: 'SUPPORTING', sortOrder: 6 },
      { townId: 'us-va-mount-vernon', role: 'SUPPORTING', sortOrder: 7 },
    ],
  },
];

const BRIDGES: BridgeSeed[] = [
  {
    fromClusterSlug: 'ma-revolution-ignites',
    toClusterSlug: 'ny-turning-point',
    label: 'Revolution Ignites → Turning Point',
    rationale:
      'The war that started in Massachusetts moved to New York within a year. The siege of Boston drove the British to New York City, and control of the Hudson Valley became the central strategic question. Henry Knox dragged cannons from Ticonderoga to Boston; the army that won at Saratoga drew troops from New England.',
    anchorTownIds: ['us-ma-boston', 'us-ny-saratoga-springs', 'us-ny-ticonderoga'],
  },
  {
    fromClusterSlug: 'nj-war-in-motion',
    toClusterSlug: 'pa-political-heart',
    label: 'Ten Crucial Days → Political Heart',
    rationale:
      'The Trenton-Princeton campaign was fought to protect Philadelphia and revive the revolution\'s credibility. When Philadelphia fell anyway, York became the emergency capital. Valley Forge sits just miles from the New Jersey border. These two clusters are inseparable — New Jersey was the battlefield, Pennsylvania the political prize.',
    anchorTownIds: ['us-nj-trenton', 'us-pa-philadelphia', 'us-pa-valley-forge'],
  },
  {
    fromClusterSlug: 'nj-war-in-motion',
    toClusterSlug: 'ny-turning-point',
    label: 'Hudson Corridor',
    rationale:
      'Fort Lee\'s fall in November 1776 and the retreat across New Jersey were direct consequences of the loss of New York City. The Hudson River connected these theaters — British control of New York City and American defense of the upper Hudson created a continuous contested zone that New Jersey sat in the middle of.',
    anchorTownIds: ['us-nj-fort-lee', 'us-ny-new-york-city', 'us-ny-west-point'],
  },
  {
    fromClusterSlug: 'ri-naval-power',
    toClusterSlug: 'va-endgame',
    label: 'French Alliance → Yorktown',
    rationale:
      'Rochambeau\'s French army staged in Newport before marching south to join Washington for the Yorktown campaign. The French fleet that sealed the British surrender at Yorktown operated from the same naval strategy that brought them to Rhode Island. The alliance that formed after Saratoga was physically headquartered in Newport before it delivered the decisive blow in Virginia.',
    anchorTownIds: ['us-ri-newport', 'us-va-yorktown'],
  },
];

export async function seedClusters(): Promise<{ clusters: number; memberships: number; bridges: number }> {
  let clustersCreated = 0;
  let membershipsCreated = 0;
  let bridgesCreated = 0;

  // 1. Upsert clusters
  for (const cluster of CLUSTERS) {
    // Check if hub town exists
    const hubExists = await prisma.town.findUnique({ where: { id: cluster.hubTownId } });

    await prisma.cluster.upsert({
      where: { slug: cluster.slug },
      update: {
        name: cluster.name,
        state: cluster.state,
        theme: cluster.theme,
        summary: cluster.summary,
        hubTownId: hubExists ? cluster.hubTownId : null,
      },
      create: {
        slug: cluster.slug,
        name: cluster.name,
        state: cluster.state,
        theme: cluster.theme,
        summary: cluster.summary,
        hubTownId: hubExists ? cluster.hubTownId : null,
      },
    });
    clustersCreated++;
  }

  // 2. Upsert cluster-town memberships
  for (const cluster of CLUSTERS) {
    const clusterRecord = await prisma.cluster.findUnique({ where: { slug: cluster.slug } });
    if (!clusterRecord) continue;

    for (const membership of cluster.towns) {
      // Skip if town doesn't exist
      const townExists = await prisma.town.findUnique({ where: { id: membership.townId } });
      if (!townExists) continue;

      const existing = await prisma.clusterTown.findUnique({
        where: {
          clusterId_townId: {
            clusterId: clusterRecord.id,
            townId: membership.townId,
          },
        },
      });

      if (!existing) {
        await prisma.clusterTown.create({
          data: {
            clusterId: clusterRecord.id,
            townId: membership.townId,
            role: membership.role,
            sortOrder: membership.sortOrder,
          },
        });
        membershipsCreated++;
      }
    }
  }

  // 3. Upsert bridges
  for (const bridge of BRIDGES) {
    const fromCluster = await prisma.cluster.findUnique({ where: { slug: bridge.fromClusterSlug } });
    const toCluster = await prisma.cluster.findUnique({ where: { slug: bridge.toClusterSlug } });
    if (!fromCluster || !toCluster) continue;

    const existing = await prisma.clusterBridge.findUnique({
      where: {
        fromClusterId_toClusterId: {
          fromClusterId: fromCluster.id,
          toClusterId: toCluster.id,
        },
      },
    });

    if (!existing) {
      await prisma.clusterBridge.create({
        data: {
          fromClusterId: fromCluster.id,
          toClusterId: toCluster.id,
          label: bridge.label,
          rationale: bridge.rationale,
          anchorTownIds: bridge.anchorTownIds ?? Prisma.JsonNull,
        },
      });
      bridgesCreated++;
    }
  }

  return { clusters: clustersCreated, memberships: membershipsCreated, bridges: bridgesCreated };
}
