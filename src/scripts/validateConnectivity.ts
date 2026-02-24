// MODEL: Claude Sonnet
// Validates connectivity of the 75-town network graph
// Uses BFS from Lexington to verify all towns are reachable
// Can run against data files (pre-seed) or database (post-seed)

import { TOP_75_TOWNS, HUB_TOWN_IDS } from '../data/top75.js';
import { TOWN_LINKS_75 } from '../data/townLinks75.js';

interface ConnectivityReport {
  totalTowns: number;
  totalLinks: number;
  townsWithInsufficientLinks: { townId: string; count: number }[];
  townsWithInsufficientLinkTypes: { townId: string; typeCount: number }[];
  nonHubTownsWithoutHubLink: string[];
  isolatedTowns: string[];
  reachableFromLexington: number;
  unreachableTowns: string[];
  isValid: boolean;
}

/**
 * Build adjacency list from link definitions
 */
function buildAdjacencyList(): Map<string, Set<string>> {
  const adj = new Map<string, Set<string>>();

  // Initialize all towns
  for (const town of TOP_75_TOWNS) {
    adj.set(town.id, new Set());
  }

  // Add edges (links go both ways for reachability)
  for (const link of TOWN_LINKS_75) {
    adj.get(link.fromTownId)?.add(link.toTownId);
    adj.get(link.toTownId)?.add(link.fromTownId);
  }

  return adj;
}

/**
 * BFS from Lexington to find all reachable towns
 */
function findReachableTowns(adj: Map<string, Set<string>>, startId: string): Set<string> {
  const visited = new Set<string>();
  const queue = [startId];

  while (queue.length > 0) {
    const current = queue.shift()!;
    if (visited.has(current)) continue;
    visited.add(current);

    const neighbors = adj.get(current);
    if (neighbors) {
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }

  return visited;
}

/**
 * Count outbound links per town
 */
function countOutboundLinks(): Map<string, number> {
  const counts = new Map<string, number>();

  for (const town of TOP_75_TOWNS) {
    counts.set(town.id, 0);
  }

  for (const link of TOWN_LINKS_75) {
    counts.set(link.fromTownId, (counts.get(link.fromTownId) || 0) + 1);
  }

  return counts;
}

/**
 * Count distinct link types per town
 */
function countLinkTypes(): Map<string, Set<string>> {
  const types = new Map<string, Set<string>>();

  for (const town of TOP_75_TOWNS) {
    types.set(town.id, new Set());
  }

  for (const link of TOWN_LINKS_75) {
    types.get(link.fromTownId)?.add(link.linkType);
  }

  return types;
}

/**
 * Check if non-hub towns link to at least one hub
 */
function checkHubLinks(): string[] {
  const hubSet = new Set(HUB_TOWN_IDS);
  const nonHubsWithoutHubLink: string[] = [];

  // Build outbound link map
  const outboundToHubs = new Map<string, boolean>();
  for (const town of TOP_75_TOWNS) {
    if (!hubSet.has(town.id)) {
      outboundToHubs.set(town.id, false);
    }
  }

  for (const link of TOWN_LINKS_75) {
    if (!hubSet.has(link.fromTownId) && hubSet.has(link.toTownId)) {
      outboundToHubs.set(link.fromTownId, true);
    }
  }

  for (const [townId, hasHubLink] of outboundToHubs) {
    if (!hasHubLink) {
      nonHubsWithoutHubLink.push(townId);
    }
  }

  return nonHubsWithoutHubLink;
}

/**
 * Generate full connectivity report
 */
function generateReport(): ConnectivityReport {
  const adj = buildAdjacencyList();
  const reachable = findReachableTowns(adj, 'us-ma-lexington');
  const linkCounts = countOutboundLinks();
  const linkTypes = countLinkTypes();

  const townsWithInsufficientLinks: { townId: string; count: number }[] = [];
  const townsWithInsufficientLinkTypes: { townId: string; typeCount: number }[] = [];
  const isolatedTowns: string[] = [];
  const unreachableTowns: string[] = [];

  for (const town of TOP_75_TOWNS) {
    const count = linkCounts.get(town.id) || 0;
    const typeCount = linkTypes.get(town.id)?.size || 0;

    // Check minimum 5 outbound links
    if (count < 5) {
      townsWithInsufficientLinks.push({ townId: town.id, count });
    }

    // Check minimum 3 link types
    if (typeCount < 3) {
      townsWithInsufficientLinkTypes.push({ townId: town.id, typeCount });
    }

    // Check for completely isolated towns (no links at all)
    if (count === 0 && (adj.get(town.id)?.size || 0) === 0) {
      isolatedTowns.push(town.id);
    }

    // Check if reachable from Lexington
    if (!reachable.has(town.id)) {
      unreachableTowns.push(town.id);
    }
  }

  const nonHubTownsWithoutHubLink = checkHubLinks();

  const isValid =
    unreachableTowns.length === 0 &&
    isolatedTowns.length === 0 &&
    townsWithInsufficientLinks.length === 0;

  return {
    totalTowns: TOP_75_TOWNS.length,
    totalLinks: TOWN_LINKS_75.length,
    townsWithInsufficientLinks,
    townsWithInsufficientLinkTypes,
    nonHubTownsWithoutHubLink,
    isolatedTowns,
    reachableFromLexington: reachable.size,
    unreachableTowns,
    isValid,
  };
}

/**
 * Print the report to console
 */
function printReport(report: ConnectivityReport): void {
  console.log('🗺️  75-Town Network Connectivity Report');
  console.log('========================================\n');

  console.log(`📊 Summary:`);
  console.log(`   Total towns: ${report.totalTowns}`);
  console.log(`   Total links: ${report.totalLinks}`);
  console.log(`   Reachable from Lexington: ${report.reachableFromLexington}/${report.totalTowns}`);
  console.log();

  // Unreachable towns (critical)
  if (report.unreachableTowns.length > 0) {
    console.error(`❌ CRITICAL: ${report.unreachableTowns.length} unreachable towns:`);
    for (const townId of report.unreachableTowns) {
      console.error(`   - ${townId}`);
    }
    console.log();
  } else {
    console.log('✓ All towns reachable from Lexington');
  }

  // Isolated towns (critical)
  if (report.isolatedTowns.length > 0) {
    console.error(`❌ CRITICAL: ${report.isolatedTowns.length} isolated towns (no links):`);
    for (const townId of report.isolatedTowns) {
      console.error(`   - ${townId}`);
    }
    console.log();
  } else {
    console.log('✓ No isolated towns');
  }

  // Insufficient links (error)
  if (report.townsWithInsufficientLinks.length > 0) {
    console.error(`❌ ${report.townsWithInsufficientLinks.length} towns with <5 outbound links:`);
    for (const { townId, count } of report.townsWithInsufficientLinks) {
      console.error(`   - ${townId}: ${count} links`);
    }
    console.log();
  } else {
    console.log('✓ All towns have ≥5 outbound links');
  }

  // Insufficient link types (warning)
  if (report.townsWithInsufficientLinkTypes.length > 0) {
    console.warn(`⚠ ${report.townsWithInsufficientLinkTypes.length} towns with <3 link types:`);
    for (const { townId, typeCount } of report.townsWithInsufficientLinkTypes) {
      console.warn(`   - ${townId}: ${typeCount} types`);
    }
    console.log();
  } else {
    console.log('✓ All towns have ≥3 link types');
  }

  // Non-hub towns without hub link (warning)
  if (report.nonHubTownsWithoutHubLink.length > 0) {
    console.warn(`⚠ ${report.nonHubTownsWithoutHubLink.length} non-hub towns without hub link:`);
    for (const townId of report.nonHubTownsWithoutHubLink) {
      console.warn(`   - ${townId}`);
    }
    console.log();
  } else {
    console.log('✓ All non-hub towns link to at least one hub');
  }

  // Final verdict
  console.log('\n========================================');
  if (report.isValid) {
    console.log('✅ Connectivity validation PASSED');
  } else {
    console.error('❌ Connectivity validation FAILED');
    process.exit(1);
  }
}

// Run if executed directly
const report = generateReport();
printReport(report);
