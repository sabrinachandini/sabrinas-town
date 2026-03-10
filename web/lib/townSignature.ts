export interface TownSignature {
  ghost: string;
  stamp?: string;
  rightLabel?: string;
  rightSub?: string;
}

const SIGNATURES: Record<string, TownSignature> = {
  "lexington-ma":      { ghost: "APR 19",   stamp: "The First Shot",          rightLabel: "1775",                    rightSub: "The Shot Heard Round the World" },
  "concord-ma":        { ghost: "APR 19",   stamp: "North Bridge",            rightLabel: "1775",                    rightSub: "The Armed Resistance Begins" },
  "boston-ma":         { ghost: "1770",     stamp: "The Metropolis of Sedition", rightLabel: "1776",                 rightSub: "The Siege Ends. The British Leave." },
  "cambridge-ma":      { ghost: "1775",     stamp: "Washington Takes Command", rightLabel: "Jul 3",                  rightSub: "Washington assumes command, 1775" },
  "salem-ma":          { ghost: "FEB 26",   stamp: "The Gunpowder Alarm",     rightLabel: "1775",                    rightSub: "The first armed standoff" },
  "marblehead-ma":     { ghost: "1776",                                         rightLabel: "Glover's Regiment",      rightSub: "The men who ferried the army" },
  "trenton-nj":        { ghost: "DEC 26",   stamp: "The Gamble",              rightLabel: "1776",                    rightSub: "Victory or Death" },
  "princeton-nj":      { ghost: "JAN 3",    stamp: "The Rear Guard",          rightLabel: "1777",                    rightSub: "Eight days after Trenton" },
  "morristown-nj":     { ghost: "1779-80",  stamp: "The Winter",              rightLabel: "Worse Than Valley Forge", rightSub: "The army nearly dissolves" },
  "philadelphia-pa":   { ghost: "INDEPENDENCE", stamp: "The Broadside",       rightLabel: "Jul 4, 1776",             rightSub: "Declared here. Signed here." },
  "valley-forge-pa":   { ghost: "1777-78",  stamp: "The Winter Ordeal",       rightLabel: "2,000",                   rightSub: "Soldiers who did not survive" },
  "germantown-pa":     { ghost: "OCT 4",    stamp: "The Near Victory",        rightLabel: "1777",                    rightSub: "Washington's most complex attack" },
  "yorktown-va":       { ghost: "1781",     stamp: "The Last Battle",         rightLabel: "Oct 19",                  rightSub: "The surrender" },
  "williamsburg-va":   { ghost: "1776",     stamp: "The Capital",             rightLabel: "Patrick Henry",           rightSub: "Give me liberty or give me death" },
  "saratoga-ny":       { ghost: "OCT 17",   stamp: "The Turning Point",       rightLabel: "1777",                    rightSub: "Burgoyne surrenders. France enters." },
  "albany-ny":         { ghost: "1777",     stamp: "The Supply Line",         rightLabel: "Schuyler",                rightSub: "The general who saved the north" },
  "charleston-sc":     { ghost: "1780",     stamp: "The Occupation",          rightLabel: "2 Years",                 rightSub: "Under British rule" },
  "guilford-courthouse-nc": { ghost: "MAR 15", stamp: "A Costly Win",        rightLabel: "1781",                    rightSub: "Cornwallis wins the field. Loses the south." },
};

export function getTownSignature(slug: string, town: { state: string; name: string }): TownSignature {
  if (SIGNATURES[slug]) return SIGNATURES[slug];
  return {
    ghost: town.state.toUpperCase(),
    rightLabel: town.name.toUpperCase(),
    rightSub: "Revolutionary War Town",
  };
}
