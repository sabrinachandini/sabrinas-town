export interface TownSignature {
  ghost?: string;
  stamp?: string;
  redKicker?: string;
  quote?: string;
  quoteAttr?: string;
  mapLabel1?: string;
  mapLabel2?: string;
  mapTagline?: string;
}

const SIGNATURES: Record<string, TownSignature> = {
  "lexington-ma": {
    ghost: "APR 19",
    stamp: "The First Shot",
    redKicker: "What Happened at Dawn",
    quote: "Stand your ground. Don't fire unless fired upon. But if they mean to have a war, let it begin here.",
    quoteAttr: "Capt. John Parker · Lexington Green · April 19, 1775",
    mapLabel1: "April 19, 1775",
    mapLabel2: "The Shot Heard Round the World",
    mapTagline: "77 militiamen. 700 British regulars. The first morning of the war.",
  },
  "concord-ma": {
    ghost: "APR 19",
    stamp: "North Bridge",
    redKicker: "The Armed Resistance Begins",
    quote: "By the rude bridge that arched the flood, their flag to April's breeze unfurled — here once the embattled farmers stood.",
    quoteAttr: "Ralph Waldo Emerson · Concord Hymn · 1836",
    mapLabel1: "North Bridge · 1775",
    mapLabel2: "The British Retreat",
    mapTagline: "The first armed resistance. 14 miles from Boston.",
  },
  "boston-ma": {
    ghost: "1770",
    stamp: "The Metropolis of Sedition",
    redKicker: "The Charge Against the City",
    quote: "The town of Boston ought to be considered as the metropolis of sedition.",
    quoteAttr: "Lord North · House of Commons · 1774",
    mapLabel1: "1775–1776",
    mapLabel2: "The Siege Ends. The British Leave.",
    mapTagline: "Where the grievance became a movement — and the movement became a war.",
  },
  "cambridge-ma": {
    ghost: "JUL 3",
    stamp: "Washington Takes Command",
    redKicker: "Where the Army Was Born",
    quote: "I do not think myself equal to the command I am honored with.",
    quoteAttr: "George Washington · Letter to Martha · June 18, 1775",
    mapLabel1: "July 3, 1775",
    mapLabel2: "Cambridge Common",
    mapTagline: "Under this elm, Washington took command of the Continental Army.",
  },
  "salem-ma": {
    ghost: "FEB 26",
    stamp: "The Gunpowder Alarm",
    redKicker: "The First Armed Standoff",
    mapLabel1: "February 26, 1775",
    mapLabel2: "Salem, Massachusetts",
    mapTagline: "The first armed standoff between colonists and British troops.",
  },
  "marblehead-ma": {
    ghost: "1776",
    stamp: "Glover's Regiment",
    redKicker: "The Men Who Ferried the Army",
    mapLabel1: "1775–1776",
    mapLabel2: "Marblehead Mariners",
    mapTagline: "The fishermen who rowed Washington across the Delaware.",
  },
  "trenton-nj": {
    ghost: "DEC 26",
    stamp: "Victory or Death",
    redKicker: "The Night That Saved the Revolution",
    quote: "These are the times that try men's souls. The summer soldier and the sunshine patriot will, in this crisis, shrink from the service.",
    quoteAttr: "Thomas Paine · The Crisis · December 1776",
    mapLabel1: "December 26, 1776",
    mapLabel2: "The Delaware Crossing",
    mapTagline: "2,400 men. A frozen river. Nine miles in sleet. And then — Trenton.",
  },
  "princeton-nj": {
    ghost: "JAN 3",
    stamp: "The Rear Guard",
    redKicker: "Eight Days After Trenton",
    mapLabel1: "January 3, 1777",
    mapLabel2: "Nassau Hall",
    mapTagline: "Washington struck again before the British could regroup.",
  },
  "morristown-nj": {
    ghost: "1779-80",
    stamp: "The Winter",
    redKicker: "Worse Than Valley Forge",
    mapLabel1: "Winter 1779–1780",
    mapLabel2: "The Army Nearly Dissolves",
    mapTagline: "The worst winter of the 18th century. The army nearly ceased to exist.",
  },
  "philadelphia-pa": {
    ghost: "JULY 4",
    stamp: "Declared Here",
    redKicker: "Where It Was Written",
    quote: "We hold these truths to be self-evident, that all men are created equal.",
    quoteAttr: "Declaration of Independence · July 4, 1776",
    mapLabel1: "July 4, 1776",
    mapLabel2: "Independence Hall",
    mapTagline: "The document was signed here. The argument started long before.",
  },
  "valley-forge-pa": {
    ghost: "1777",
    stamp: "The Winter Ordeal",
    redKicker: "What the Army Endured",
    quote: "I am sick, discontented, and out of humor. Poor food, hard lodging, cold weather, fatigue, nasty clothes, nasty cookery.",
    quoteAttr: "Surgeon Albigence Waldo · Valley Forge · December 1777",
    mapLabel1: "Winter 1777–1778",
    mapLabel2: "~2,000 Died Here",
    mapTagline: "Not a battle. A test of whether the army would still exist in spring.",
  },
  "germantown-pa": {
    ghost: "OCT 4",
    stamp: "The Near Victory",
    redKicker: "Washington's Most Complex Attack",
    mapLabel1: "October 4, 1777",
    mapLabel2: "Four Columns",
    mapTagline: "Four columns. Fog. A near-victory that became a model for the French.",
  },
  "yorktown-va": {
    ghost: "1781",
    stamp: "The Last Battle",
    redKicker: "The Surrender",
    quote: "I have the mortification to inform your Excellency that I have been forced to give up the posts of York and Gloucester.",
    quoteAttr: "Lord Cornwallis · Letter to General Clinton · October 20, 1781",
    mapLabel1: "October 19, 1781",
    mapLabel2: "8,087 British Surrendered",
    mapTagline: "The trap closed. The war ended. A band played The World Turned Upside Down.",
  },
  "williamsburg-va": {
    ghost: "1776",
    stamp: "The Capital",
    redKicker: "Give Me Liberty",
    mapLabel1: "1776",
    mapLabel2: "Patrick Henry",
    mapTagline: "The capital of Virginia — and the home of its most dangerous orators.",
  },
  "saratoga-ny": {
    ghost: "OCT 17",
    stamp: "The Turning Point",
    redKicker: "Why This Battle Changed Everything",
    quote: "This is my last hour of service. I will not ask any man to do what I am unwilling to do myself.",
    quoteAttr: "Gen. Benedict Arnold · Saratoga · October 1777",
    mapLabel1: "October 17, 1777",
    mapLabel2: "Burgoyne Surrenders",
    mapTagline: "Burgoyne surrenders an entire British army. France enters the war. Everything changes.",
  },
  "albany-ny": {
    ghost: "1777",
    stamp: "The Supply Line",
    redKicker: "The General Who Saved the North",
    mapLabel1: "1777",
    mapLabel2: "Gen. Schuyler",
    mapTagline: "The logistics capital of the northern theater.",
  },
  "charleston-sc": {
    ghost: "1780",
    stamp: "The Occupation",
    redKicker: "Two Years Under British Rule",
    mapLabel1: "1780–1782",
    mapLabel2: "Occupied",
    mapTagline: "The largest British victory of the war. The bloodiest American loss.",
  },
  "guilford-courthouse-nc": {
    ghost: "MAR 15",
    stamp: "A Costly Win",
    redKicker: "Cornwallis Wins the Field, Loses the South",
    mapLabel1: "March 15, 1781",
    mapLabel2: "Cornwallis Retreats",
    mapTagline: "A pyrrhic British victory that broke Cornwallis's army.",
  },
};

export function getTownSignature(slug: string, town: { state: string; name: string }): TownSignature {
  if (SIGNATURES[slug]) return SIGNATURES[slug];
  return {
    ghost: town.state.toUpperCase(),
    stamp: `${town.name}, ${town.state}`,
    redKicker: "The Revolutionary Record",
    mapLabel1: town.state,
    mapLabel2: "American Revolution",
    mapTagline: `${town.name}'s role in the American Revolution.`,
  };
}
