// Seed diverse changelog entries — both town-specific and global

import prisma from '../db/client.js';
import { ChangelogCategory } from '@prisma/client';

interface ChangelogSeedEntry {
  title: string;
  summary: string;
  category: ChangelogCategory;
  townId?: string;
  publicNotes?: string;
  createdBy?: string;
}

const CHANGELOG_ENTRIES: ChangelogSeedEntry[] = [
  // Town-specific
  {
    title: 'Updated source citations for Battle Green',
    summary: 'Revised and expanded source citations for Lexington Battle Green content.',
    category: 'SOURCES',
    townId: 'us-ma-lexington',
    publicNotes: 'Added 2 new primary sources from the Lexington Historical Society archive.',
  },
  {
    title: 'Added teacher module for Morristown',
    summary: 'Published teacher materials for Morristown including lesson plans and discussion prompts.',
    category: 'TEACHER',
    townId: 'us-nj-morristown',
    publicNotes: 'Covers the Jockey Hollow winter encampment and the Arnold treason crisis.',
  },
  {
    title: 'Revised preservation quality score',
    summary: 'Updated Concord preservation quality score after new NPS assessment data.',
    category: 'CONTENT',
    townId: 'us-ma-concord',
    publicNotes: 'Score increased based on recent preservation improvements at North Bridge.',
  },
  {
    title: 'Added 4 new primary sources',
    summary: 'Added 4 new primary sources for Princeton including battlefield survey reports.',
    category: 'SOURCES',
    townId: 'us-nj-princeton',
    publicNotes: 'Includes the 2024 archaeological survey of the Princeton Battlefield.',
  },

  // Global entries
  {
    title: 'Launched partner inquiry system',
    summary: 'Historical societies and tourism boards can now submit partnership inquiries.',
    category: 'INFRA',
    publicNotes: 'Available at /partner for organizations interested in contributing.',
  },
  {
    title: 'Added smoke test coverage for all API endpoints',
    summary: 'Comprehensive smoke test suite covering health, towns, rankings, compare, and changelog endpoints.',
    category: 'INFRA',
  },
  {
    title: 'Standardized source credibility tier definitions',
    summary: 'Defined clear criteria for Tier 1, 2, and 3 source classifications.',
    category: 'CONTENT',
    publicNotes: 'See our Methodology page for the full tier definitions.',
  },
  {
    title: 'Published methodology page',
    summary: 'Added a public methodology page explaining how towns are scored and sources evaluated.',
    category: 'CONTENT',
    publicNotes: 'Transparency in how we work is a core value.',
  },
  {
    title: 'Added New Jersey towns to the network',
    summary: 'Expanded coverage to include Revolutionary War towns across New Jersey.',
    category: 'CONTENT',
    publicNotes: 'Morristown, Princeton, Trenton, and more are now part of the network.',
  },
  {
    title: 'Improved teacher print packet layout',
    summary: 'Redesigned the printable teacher packet for better classroom usability.',
    category: 'TEACHER',
  },
  {
    title: 'Fixed score calculation for interconnection dimension',
    summary: 'Corrected a bug in how interconnection scores were computed for towns with fewer than 3 links.',
    category: 'FIX',
    publicNotes: 'Affected scores were off by <0.5 points. All scores have been recalculated.',
  },
  {
    title: 'Added changelog page for public transparency',
    summary: 'Launched this changelog so every update to the site is publicly visible.',
    category: 'INFRA',
    publicNotes: 'We believe transparency is how you build trust with readers.',
  },
];

export async function seedChangelogEntries(): Promise<number> {
  let created = 0;

  for (const entry of CHANGELOG_ENTRIES) {
    // Idempotent: skip if an entry with this title already exists
    const existing = await prisma.changeLogEntry.findFirst({
      where: { title: entry.title },
    });

    if (existing) continue;

    await prisma.changeLogEntry.create({
      data: {
        title: entry.title,
        summary: entry.summary,
        category: entry.category,
        publicNotes: entry.publicNotes ?? null,
        createdBy: entry.createdBy ?? null,
        details: { action: 'SEEDED', category: entry.category },
        ...(entry.townId ? { town: { connect: { id: entry.townId } } } : {}),
      },
    });
    created++;
  }

  return created;
}
