/**
 * Curated YouTube video map for Revolutionary War events and towns.
 *
 * Liberty's Kids clips are from the official WildBrain YouTube channel —
 * freely available, historically grounded, and appropriate for all ages.
 *
 * Ken Burns "The American Revolution" (PBS, 2025) — official trailer only;
 * full episodes require PBS Passport and are not freely embeddable.
 *
 * Keys are event IDs or town slugs from the database.
 */

export interface CuratedVideo {
  videoId: string;
  title: string;
  /** Short source label shown in the credit line */
  source: "Liberty's Kids" | "Ken Burns — The American Revolution" | "PBS";
  /** One-line description shown below the player */
  description?: string;
}

/** Map from event ID → curated video */
export const EVENT_VIDEOS: Record<string, CuratedVideo> = {
  // Boston
  "event-boston-tea-party": {
    videoId: "W3tsKiXjjPM",
    title: "The Boston Tea Party",
    source: "Liberty's Kids",
    description: "Liberty's Kids follows James and Sarah as colonists dump 342 chests of tea into Boston Harbor, December 1773.",
  },
  "event-boston-massacre": {
    videoId: "pznv3MHrFRk",
    title: "The Boston Tea Party, Intolerable Acts & United We Stand",
    source: "Liberty's Kids",
    description: "Three-episode compilation covering the escalating tensions that led to open conflict.",
  },

  // Midnight Ride / Lexington & Concord
  "event-revere-dawes-warning": {
    videoId: "qggxB9wgJQY",
    title: "The Midnight Ride",
    source: "Liberty's Kids",
    description: "Liberty's Kids — Episode 5. Paul Revere and William Dawes ride through the night to warn Lexington and Concord.",
  },
  "event-lexington-battle": {
    videoId: "hoEzLJiQbJ0",
    title: "The Shot Heard Round the World",
    source: "Liberty's Kids",
    description: "Liberty's Kids — Episode 6. James and Sarah report from opposite sides at the battles of Lexington and Concord, April 19, 1775.",
  },
  "event-british-concord-arrival": {
    videoId: "hoEzLJiQbJ0",
    title: "The Shot Heard Round the World",
    source: "Liberty's Kids",
    description: "Liberty's Kids — Episode 6. The British expedition reaches Concord, and the running fight begins.",
  },
  "event-concord-running-battle": {
    videoId: "hoEzLJiQbJ0",
    title: "The Shot Heard Round the World",
    source: "Liberty's Kids",
    description: "Liberty's Kids — Episode 6. The seventeen-mile running battle from Concord back to Charlestown.",
  },
  "event-portsmouth-revere-rides-north": {
    videoId: "qggxB9wgJQY",
    title: "The Midnight Ride",
    source: "Liberty's Kids",
    description: "Liberty's Kids — Episode 5. Paul Revere's earlier ride to Portsmouth, New Hampshire.",
  },

  // Bunker Hill / Siege of Boston
  "event-bunker-hill": {
    videoId: "cdcPnEGp0Zc",
    title: "Bunker Hill",
    source: "Liberty's Kids",
    description: "Liberty's Kids — Episode 7. The bloody assault on Breed's Hill that shocked both sides, June 17, 1775.",
  },
  "event-siege-boston-begins": {
    videoId: "cdcPnEGp0Zc",
    title: "Bunker Hill",
    source: "Liberty's Kids",
    description: "Liberty's Kids — Episode 7. The colonial siege of Boston and the fortification of Charlestown.",
  },
  "event-boston-evacuation": {
    videoId: "cdcPnEGp0Zc",
    title: "Bunker Hill",
    source: "Liberty's Kids",
    description: "Liberty's Kids — Episode 7. Context on the year-long campaign that ended with the British evacuation of Boston.",
  },

  // Declaration of Independence
  "event-philadelphia-declaration-independence": {
    videoId: "cAyyjWdkbds",
    title: "The First Fourth of July",
    source: "Liberty's Kids",
    description: "Liberty's Kids — Episode 17. John Adams pushes Congress to vote for independence; the Declaration is adopted, July 4, 1776.",
  },
  "event-philadelphia-first-public-reading-declaration": {
    videoId: "cAyyjWdkbds",
    title: "The First Fourth of July",
    source: "Liberty's Kids",
    description: "Liberty's Kids — Episode 17. The Declaration is read publicly for the first time in Philadelphia.",
  },
  "event-williamsburg-virginia-declaration-of-rights": {
    videoId: "cAyyjWdkbds",
    title: "The First Fourth of July",
    source: "Liberty's Kids",
    description: "Liberty's Kids covers the debates and votes that produced the Declaration of Independence.",
  },

  // Crossing the Delaware / Trenton / Princeton
  "event-trenton-delaware-crossing": {
    videoId: "FzDYACbCB84",
    title: "Across the Delaware",
    source: "Liberty's Kids",
    description: "Liberty's Kids. Washington re-crosses the Delaware on Christmas night, 1776 — a desperate gamble that changed the war.",
  },
  "event-princeton-washington-crosses-delaware": {
    videoId: "FzDYACbCB84",
    title: "Across the Delaware",
    source: "Liberty's Kids",
    description: "Liberty's Kids. The Delaware crossing and its sequel — the victory at Princeton, January 3, 1777.",
  },
  "event-marblehead-delaware-crossing": {
    videoId: "FzDYACbCB84",
    title: "Across the Delaware",
    source: "Liberty's Kids",
    description: "Liberty's Kids. The Marblehead regiment manned the boats that carried Washington's army across the Delaware.",
  },

  // Valley Forge
  "event-valley-forge-arrival-1777": {
    videoId: "plE8BfXKOMk",
    title: "Valley Forge",
    source: "Liberty's Kids",
    description: "Liberty's Kids — Episode 24. The Continental Army endures a brutal winter at Valley Forge, December 1777 – June 1778.",
  },
  "event-valley-forge-martha-washington-arrives": {
    videoId: "plE8BfXKOMk",
    title: "Valley Forge",
    source: "Liberty's Kids",
    description: "Liberty's Kids — Episode 24. Martha Washington arrives at Valley Forge to support the encampment.",
  },
  "event-valley-forge-army-departs": {
    videoId: "plE8BfXKOMk",
    title: "Valley Forge",
    source: "Liberty's Kids",
    description: "Liberty's Kids — Episode 24. The army that marched out of Valley Forge was transformed from what entered.",
  },

  // Saratoga
  "event-saratoga-springs-first-battle": {
    videoId: "mPhB2e3MEGg",
    title: "The Hessians Are Coming",
    source: "Liberty's Kids",
    description: "Liberty's Kids — Episode 23. Covers the Saratoga campaign, with Gates, Arnold, and Burgoyne's ill-fated invasion from Canada.",
  },
  "event-saratoga-springs-second-battle": {
    videoId: "mPhB2e3MEGg",
    title: "The Hessians Are Coming",
    source: "Liberty's Kids",
    description: "Liberty's Kids — Episode 23. Benedict Arnold's reckless charge at the Breymann Redoubt seals the American victory.",
  },
  "event-saratoga-springs-burgoyne-surrender": {
    videoId: "mPhB2e3MEGg",
    title: "The Hessians Are Coming",
    source: "Liberty's Kids",
    description: "Liberty's Kids — Episode 23. Burgoyne surrenders his army of nearly 6,000 men on October 17, 1777.",
  },
  "event-kingston-burgoyne-surrenders": {
    videoId: "mPhB2e3MEGg",
    title: "The Hessians Are Coming",
    source: "Liberty's Kids",
    description: "Liberty's Kids — Episode 23. The Saratoga surrender that triggered French entry into the war.",
  },

  // Benedict Arnold / West Point
  "event-saratoga-springs-fortification-bemis-heights": {
    videoId: "G-gxCDkmpwo",
    title: "Benedict Arnold",
    source: "Liberty's Kids",
    description: "Liberty's Kids — Episode 32. Kosciuszko's fortifications and Arnold's heroism at Saratoga, before his infamous treason.",
  },

  // Yorktown
  "event-yorktown-siege-1781": {
    videoId: "Un_ToSe6XDw",
    title: "Yorktown",
    source: "Liberty's Kids",
    description: "Liberty's Kids. The final siege — Washington, Rochambeau, and de Grasse trap Cornwallis at Yorktown, October 1781.",
  },
  "event-yorktown-british-fortify": {
    videoId: "Un_ToSe6XDw",
    title: "Yorktown",
    source: "Liberty's Kids",
    description: "Liberty's Kids. Cornwallis fortifies Yorktown — and is cut off by the French fleet at the Battle of the Chesapeake.",
  },

  // Sybil Ludington
  "event-danbury-ludington-ride": {
    videoId: "qggxB9wgJQY",
    title: "The Midnight Ride",
    source: "Liberty's Kids",
    description: "Liberty's Kids — Episode 5. Paul Revere's famous ride — and others like Sybil Ludington — who rode through the night to mobilize colonial militia.",
  },
};

/** Map from town slug → curated video (for town overview / history pages) */
export const TOWN_VIDEOS: Record<string, CuratedVideo> = {
  // Ken Burns official trailer — shown on major town overview pages as a "featured documentary" callout
  "lexington-ma": {
    videoId: "lruEtNTN9oY",
    title: "The American Revolution — Official Trailer",
    source: "Ken Burns — The American Revolution",
    description: "Ken Burns' sweeping 2025 documentary series covering the full arc of the American Revolution, from the first sparks of rebellion through the founding of the republic.",
  },
  "concord-ma": {
    videoId: "lruEtNTN9oY",
    title: "The American Revolution — Official Trailer",
    source: "Ken Burns — The American Revolution",
    description: "Ken Burns' 2025 PBS documentary — twelve hours covering the Revolution from Concord's North Bridge to the Constitutional Convention.",
  },
  "boston-ma": {
    videoId: "lruEtNTN9oY",
    title: "The American Revolution — Official Trailer",
    source: "Ken Burns — The American Revolution",
    description: "Ken Burns' 2025 documentary premieres with the long road from colonial grievance to open rebellion, starting in Boston.",
  },
  "saratoga-springs-ny": {
    videoId: "dBToyHSGD2Q",
    title: "The American Revolution — Extended Trailer",
    source: "Ken Burns — The American Revolution",
    description: "Ken Burns' extended preview for his 2025 PBS series — includes coverage of the Saratoga campaign and the French alliance it produced.",
  },
  "valley-forge-pa": {
    videoId: "dBToyHSGD2Q",
    title: "The American Revolution — Extended Trailer",
    source: "Ken Burns — The American Revolution",
    description: "Ken Burns' extended preview for the 2025 PBS documentary series, which devotes a full episode to the Valley Forge winter.",
  },
  "yorktown-va": {
    videoId: "lruEtNTN9oY",
    title: "The American Revolution — Official Trailer",
    source: "Ken Burns — The American Revolution",
    description: "Ken Burns' 2025 PBS documentary culminates at Yorktown — the surrender that ended the war and began the republic.",
  },
};
