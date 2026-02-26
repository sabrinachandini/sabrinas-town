// MA Flagship Towns — TownPerson links + gap-closing events/persons
// Lexington, Concord, Salem, Worcester, Springfield, Plymouth
//
// Primary gap: All 6 towns have Person records but zero TownPerson join entries.
// Secondary gap: Lexington (6/10 events), Concord (6/10 events), Salem (8/10 events).

import { Prisma } from '@prisma/client';

// ============================================================================
// LEXINGTON — need 1 more person (have 7, need 8) + 4 more events (have 6, need 10)
// ============================================================================

// Existing person IDs from src/seed/lexington.ts:
// person-john-parker, person-paul-revere, person-samuel-adams,
// person-jonas-parker, person-prince-estabrook, person-dorothy-quincy,
// person-jonathan-harrington

export const lexingtonTownPersons: { personId: string; connectionNote: string }[] = [
  { personId: 'person-john-parker', connectionNote: 'Commander of the Lexington militia' },
  { personId: 'person-paul-revere', connectionNote: 'Warned Lexington of approaching British' },
  { personId: 'person-samuel-adams', connectionNote: 'Staying at Hancock-Clarke House when alarm came' },
  { personId: 'person-jonas-parker', connectionNote: 'Killed on Lexington Green' },
  { personId: 'person-prince-estabrook', connectionNote: 'Enslaved man wounded on Lexington Green' },
  { personId: 'person-dorothy-quincy', connectionNote: 'Present at Hancock-Clarke House during alarm' },
  { personId: 'person-jonathan-harrington', connectionNote: 'Mortally wounded, crawled home to die at doorstep' },
  { personId: 'person-john-hancock-lexington', connectionNote: 'Staying in Lexington when British marched' },
];

export const lexingtonAdditionalPerson: Prisma.PersonCreateInput = {
  id: 'person-john-hancock-lexington',
  name: 'John Hancock',
  roles: ['Politician', 'Patriot Leader', 'Merchant'],
  bioShort:
    'President of the Continental Congress who was staying at the Hancock-Clarke House in Lexington on the night of April 18, 1775. Revere rode to warn him and Samuel Adams of the approaching British.',
  bioLong: `John Hancock was one of the wealthiest men in Massachusetts and a prominent Patriot leader. By April 1775, he was effectively a fugitive from British authority, having been singled out along with Samuel Adams as a chief instigator of colonial resistance.

On the night of April 18-19, 1775, Hancock was staying at the home of Reverend Jonas Clarke in Lexington—the same house where he had grown up under the guardianship of his uncle Thomas Hancock. When Paul Revere arrived with his warning, Hancock reportedly wanted to take up arms and join the militia on the Green. Adams and others persuaded him that his political role was too important to risk.

Hancock and Adams fled Lexington before dawn, narrowly avoiding the British column. Hancock went on to serve as President of the Continental Congress and was the first to sign the Declaration of Independence. His bold signature became a symbol of defiance. He later served as Governor of Massachusetts.`,
  birthYear: 1737,
  deathYear: 1793,
  verificationStatus: 'VERIFIED',
};

export const lexingtonAdditionalEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-lexington-alarm-riders',
    name: 'Alarm Riders Spread Through Middlesex County',
    startDate: new Date('1775-04-19T01:00:00'),
    datePrecision: 'DAY',
    summary: `After Paul Revere and William Dawes passed through Lexington, a network of local alarm riders fanned out across Middlesex County. These riders—many of them unnamed in the historical record—carried the news of the British march to towns throughout the region. Within hours, militia companies from Woburn, Burlington, Menotomy (Arlington), and dozens of other communities were marching toward Lexington and Concord. This relay system, organized through committees of safety, demonstrated the sophisticated communications infrastructure the Patriots had built. By noon on April 19, thousands of armed colonists were converging on the road between Concord and Boston.`,
    significanceWeight: 65,
    lat: 42.4490,
    lng: -71.2310,
    town: { connect: { id: 'us-ma-lexington' } },
  },
  {
    id: 'event-lexington-depositions',
    name: 'Lexington Depositions Collected',
    startDate: new Date('1775-04-25'),
    datePrecision: 'DAY',
    summary: `In the days following the battle, Patriots in Lexington collected sworn depositions from militia members and eyewitnesses. These statements, gathered under the direction of the Massachusetts Provincial Congress, were intended to establish that the British had fired first. The depositions—from men like Nathaniel Mulliken, John Parker, and others—became critical propaganda tools. Copies were rushed to England aboard the schooner Quero, arriving before the British military's official account. These eyewitness testimonies remain among the most important primary sources for understanding what happened on Lexington Green. The effort demonstrated that the Patriots understood the battle for public opinion was as important as the battle itself.`,
    significanceWeight: 55,
    lat: 42.4490,
    lng: -71.2310,
    town: { connect: { id: 'us-ma-lexington' } },
  },
  {
    id: 'event-lexington-memorial-1799',
    name: 'First Memorial Erected on Lexington Green',
    startDate: new Date('1799-07-04'),
    datePrecision: 'YEAR',
    summary: `In 1799, the town of Lexington erected a memorial stone on the Green to honor the eight men killed on April 19, 1775. This was among the earliest Revolutionary War memorials in America. The monument, which listed the names of the fallen, established Lexington Green as a site of national memory. The act of memorializing—choosing to remember, and choosing how to remember—reflected the community's determination that the sacrifice of their neighbors would not be forgotten. The original stone was later replaced by a more elaborate monument, but the tradition of public commemoration on Lexington Green continues to this day, most notably on Patriots' Day each April.`,
    significanceWeight: 45,
    lat: 42.4490,
    lng: -71.2310,
    town: { connect: { id: 'us-ma-lexington' } },
  },
  {
    id: 'event-lexington-hancock-clarke-warning',
    name: 'Hancock and Adams Warned at Clarke House',
    startDate: new Date('1775-04-19T00:30:00'),
    datePrecision: 'DAY',
    summary: `Shortly after midnight on April 19, Paul Revere arrived at the Hancock-Clarke House where John Hancock and Samuel Adams were staying as guests of Reverend Jonas Clarke. Sergeant William Munroe, standing guard outside, initially told Revere not to make so much noise. Revere replied that noise was exactly what was needed—the British regulars were coming. Inside, Hancock reportedly wanted to stay and fight, but Adams convinced him that their political leadership was too valuable to risk. Dorothy Quincy, Hancock's fiancée, and Aunt Lydia Hancock helped prepare for the hasty departure. By the time the British column reached Lexington Green, the two most wanted Patriots had already escaped toward Woburn.`,
    significanceWeight: 70,
    lat: 42.4510,
    lng: -71.2290,
    town: { connect: { id: 'us-ma-lexington' } },
  },
];

// ============================================================================
// CONCORD — need 1 more person (have 7, need 8) + 4 more events (have 6, need 10)
// ============================================================================

// Existing person IDs from src/seed/concord.ts:
// person-john-buttrick, person-james-barrett, person-william-emerson,
// person-isaac-davis, person-martha-moulton, person-amos-barrett,
// person-francis-smith

export const concordTownPersons: { personId: string; connectionNote: string }[] = [
  { personId: 'person-john-buttrick', connectionNote: 'Commanded militia at North Bridge' },
  { personId: 'person-james-barrett', connectionNote: 'Colonel of Concord militia regiment' },
  { personId: 'person-william-emerson', connectionNote: 'Minister who witnessed North Bridge fight' },
  { personId: 'person-isaac-davis', connectionNote: 'Minuteman captain killed at North Bridge' },
  { personId: 'person-martha-moulton', connectionNote: 'Civilian who confronted British soldiers' },
  { personId: 'person-amos-barrett', connectionNote: 'Minuteman who left written memoir of the day' },
  { personId: 'person-francis-smith', connectionNote: 'British commander of the Concord expedition' },
  { personId: 'person-samuel-prescott-concord', connectionNote: 'Local physician who completed the ride to Concord' },
];

export const concordAdditionalPerson: Prisma.PersonCreateInput = {
  id: 'person-samuel-prescott-concord',
  name: 'Dr. Samuel Prescott',
  roles: ['Physician', 'Patriot', 'Alarm Rider'],
  bioShort:
    'Young Concord physician who joined Revere and Dawes on the road and was the only rider to actually reach Concord with the alarm. His local knowledge allowed him to escape a British patrol that captured Revere.',
  bioLong: `Samuel Prescott was a young physician from Concord who happened to encounter Paul Revere and William Dawes on the road between Lexington and Concord in the early hours of April 19, 1775. He had been visiting a lady friend in Lexington and was riding home.

When the three riders were stopped by a British patrol near Lincoln, Prescott's knowledge of the local terrain proved decisive. While Revere was captured and Dawes turned back, Prescott jumped his horse over a stone wall and escaped through the fields. He reached Concord around 1:30 AM and raised the alarm, giving the town crucial hours to hide military supplies and muster militia.

Prescott's role is often overlooked in popular accounts that focus on Revere. Yet it was Prescott—not Revere—who actually completed the ride to Concord. Without his warning, the British might have seized the military supplies that were the expedition's primary objective.

Prescott later joined the Continental Army. He is believed to have died in a British prison, though the circumstances of his capture and death remain uncertain.`,
  birthYear: 1751,
  deathYear: 1777,
  verificationStatus: 'VERIFIED',
};

export const concordAdditionalEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-concord-militia-muster',
    name: 'Concord Militia Musters at Wright Tavern',
    startDate: new Date('1775-04-19T02:00:00'),
    datePrecision: 'DAY',
    summary: `After Dr. Samuel Prescott arrived with the alarm around 1:30 AM, the Concord militia began assembling at Wright Tavern in the town center. Colonel James Barrett took overall command, with Major John Buttrick as his second. Amos Barrett later recalled the confusion and determination of those early morning hours—men arriving in the dark, some still pulling on coats, muskets in hand. By dawn, about 250 militia and minutemen had gathered. Barrett made the critical decision to withdraw to a ridge north of town rather than meet the British column head-on. This tactical retreat allowed time for more militia companies to arrive and positioned the Americans above North Bridge.`,
    significanceWeight: 65,
    lat: 42.4612,
    lng: -71.3489,
    town: { connect: { id: 'us-ma-concord' } },
  },
  {
    id: 'event-concord-supplies-dispersed',
    name: 'Military Supplies Dispersed to Surrounding Farms',
    startDate: new Date('1775-04-19T03:00:00'),
    datePrecision: 'DAY',
    summary: `With several hours of warning before the British arrived, Concord residents worked frantically to hide the military supplies the Provincial Congress had stockpiled in town. Cannon were buried in plowed fields at Barrett's Farm. Musket balls were hidden under feather beds. Barrels of flour were rolled into the woods. Women and children helped carry supplies to hiding places throughout the countryside. When the British finally searched Concord, they found far less than expected—some wooden gun carriages, a few barrels of flour, and some musket balls. The successful concealment of these supplies meant the British expedition largely failed in its primary objective, making the costly march a strategic defeat before the fighting even began.`,
    significanceWeight: 60,
    lat: 42.4612,
    lng: -71.3489,
    town: { connect: { id: 'us-ma-concord' } },
  },
  {
    id: 'event-concord-town-fire',
    name: 'Fire at Concord Town House',
    startDate: new Date('1775-04-19T10:00:00'),
    datePrecision: 'DAY',
    summary: `While searching Concord for military supplies, British soldiers set fire to several gun carriages and other materials they had gathered in the town center. The fire accidentally spread to the Town House (courthouse). Martha Moulton and other residents confronted the British soldiers and demanded they help extinguish the blaze, which they did. The smoke rising from Concord center was visible to the American militia gathered on the ridge above North Bridge. Believing the British were burning the town, the militia officers decided to march back toward the bridge—a decision that led directly to the exchange of fire at North Bridge. The misunderstanding about the fire's cause thus became one of the pivotal moments of April 19.`,
    significanceWeight: 60,
    lat: 42.4612,
    lng: -71.3489,
    town: { connect: { id: 'us-ma-concord' } },
  },
  {
    id: 'event-concord-running-battle',
    name: 'Running Battle: Concord to Charlestown',
    startDate: new Date('1775-04-19T12:00:00'),
    datePrecision: 'DAY',
    summary: `After the engagement at North Bridge, the British began their retreat from Concord around noon. What followed was a running battle stretching nearly 20 miles back to Charlestown. Militia companies from dozens of towns lined the route, firing from behind stone walls, trees, and buildings. The British column, initially disciplined, began to break down under the constant harassment. Only the arrival of a relief column under Lord Percy at Lexington, with artillery, prevented the expedition's complete destruction. By day's end, the British suffered 273 casualties (73 killed, 174 wounded, 26 missing) compared to 95 American casualties. The long retreat demonstrated that colonial militia could effectively resist professional British troops.`,
    significanceWeight: 75,
    lat: 42.4612,
    lng: -71.3489,
    town: { connect: { id: 'us-ma-concord' } },
  },
];

// ============================================================================
// SALEM — need 2 more events (have 8, need 10)
// ============================================================================

// Existing person IDs from src/seed/massachusetts/content.ts:
// person-salem-joseph-sprague, person-salem-sarah-derby, person-salem-john-derby,
// person-salem-nathaniel-bowditch, person-salem-alexander-leslie,
// person-salem-elias-hasket-derby, person-salem-richard-derby, person-salem-timothy-pickering

export const salemTownPersons: { personId: string; connectionNote: string }[] = [
  { personId: 'person-salem-joseph-sprague', connectionNote: 'Led militia resistance at North Bridge drawbridge' },
  { personId: 'person-salem-sarah-derby', connectionNote: 'Managed Derby shipping empire during war' },
  { personId: 'person-salem-john-derby', connectionNote: 'Captained privateer vessels from Salem' },
  { personId: 'person-salem-nathaniel-bowditch', connectionNote: 'Mathematician and navigator from Salem' },
  { personId: 'person-salem-alexander-leslie', connectionNote: 'British colonel turned back at Salem' },
  { personId: 'person-salem-elias-hasket-derby', connectionNote: 'Privateer magnate who funded the war effort' },
  { personId: 'person-salem-richard-derby', connectionNote: 'Patriarch of Salem\'s leading merchant family' },
  { personId: 'person-salem-timothy-pickering', connectionNote: 'Militia colonel and later Secretary of State' },
];

export const salemAdditionalEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-salem-prize-court',
    name: 'Salem Prize Court Established',
    startDate: new Date('1775-11-01'),
    datePrecision: 'MONTH',
    summary: `Salem became home to one of the most active prize courts in the colonies, adjudicating captured British vessels and their cargoes. The court, operating under authority from the Continental Congress and later the Massachusetts General Court, processed hundreds of cases during the war. Captured ships and their goods were condemned and sold at auction, with proceeds divided among ship owners, captains, and crews according to established formulas. The prize court system transformed privateering from piracy into a regulated instrument of war, providing legal framework for the economic warfare Salem's merchants waged against British commerce. The court's records survive as valuable primary sources documenting wartime maritime commerce.`,
    significanceWeight: 55,
    lat: 42.5195,
    lng: -70.8967,
    town: { connect: { id: 'us-ma-salem' } },
  },
  {
    id: 'event-salem-fortification-1775',
    name: 'Salem Harbor Fortifications Strengthened',
    startDate: new Date('1775-06-01'),
    datePrecision: 'MONTH',
    summary: `Following the outbreak of hostilities at Lexington and Concord, Salem moved quickly to fortify its harbor against potential British naval attack. Under the direction of Colonel Timothy Pickering and the local committee of safety, earthwork fortifications were constructed at Winter Island and Salem Neck. Cannon were positioned to command the harbor entrance. The defensive works served both practical and symbolic purposes—protecting Salem's vital shipping interests while demonstrating the town's commitment to armed resistance. Though Salem was never subjected to a major naval assault during the war, the fortifications deterred raids and provided a secure base from which privateers could operate throughout the conflict.`,
    significanceWeight: 50,
    lat: 42.5260,
    lng: -70.8680,
    town: { connect: { id: 'us-ma-salem' } },
  },
];

// ============================================================================
// WORCESTER — only needs TownPerson entries (8 people, 0 links)
// ============================================================================

// Existing person IDs from src/seed/massachusetts/content.ts:
// person-worcester-timothy-paine, person-worcester-mary-stearns-walker,
// person-worcester-samuel-curtis, person-worcester-john-adams-worcester,
// person-worcester-william-young, person-worcester-ephraim-doolittle,
// person-worcester-isaiah-thomas, person-worcester-timothy-bigelow

export const worcesterTownPersons: { personId: string; connectionNote: string }[] = [
  { personId: 'person-worcester-timothy-paine', connectionNote: 'Loyalist whose house was surrounded by Patriots' },
  { personId: 'person-worcester-mary-stearns-walker', connectionNote: 'Managed family affairs during the Revolution' },
  { personId: 'person-worcester-samuel-curtis', connectionNote: 'Led Worcester militia to Cambridge' },
  { personId: 'person-worcester-john-adams-worcester', connectionNote: 'Taught school in Worcester before political career' },
  { personId: 'person-worcester-william-young', connectionNote: 'Enslaved man who served in the Continental Army' },
  { personId: 'person-worcester-ephraim-doolittle', connectionNote: 'Commanded Worcester regiment at Bunker Hill' },
  { personId: 'person-worcester-isaiah-thomas', connectionNote: 'Printer who moved his press from Boston to Worcester' },
  { personId: 'person-worcester-timothy-bigelow', connectionNote: 'Led the blacksmith company of minutemen' },
];

// ============================================================================
// SPRINGFIELD — only needs TownPerson entries (8 people, 0 links)
// ============================================================================

// Existing person IDs from src/seed/massachusetts/content.ts:
// person-springfield-henry-knox, person-springfield-daniel-shays,
// person-springfield-william-shepard, person-springfield-david-ames,
// person-springfield-luke-day, person-springfield-john-worthington,
// person-springfield-thomas-day, person-springfield-experience-storrs

export const springfieldTownPersons: { personId: string; connectionNote: string }[] = [
  { personId: 'person-springfield-henry-knox', connectionNote: 'Oversaw the Springfield Armory' },
  { personId: 'person-springfield-daniel-shays', connectionNote: 'Led the rebellion against the Arsenal' },
  { personId: 'person-springfield-william-shepard', connectionNote: 'Defended the Arsenal during Shays\' Rebellion' },
  { personId: 'person-springfield-david-ames', connectionNote: 'Master armorer at the Springfield Armory' },
  { personId: 'person-springfield-luke-day', connectionNote: 'Co-leader of the Shays\' Rebellion forces' },
  { personId: 'person-springfield-john-worthington', connectionNote: 'Prominent Loyalist forced to recant publicly' },
  { personId: 'person-springfield-thomas-day', connectionNote: 'Selectman and militia organizer' },
  { personId: 'person-springfield-experience-storrs', connectionNote: 'Continental Army chaplain from Springfield' },
];

// ============================================================================
// PLYMOUTH — only needs TownPerson entries (8 people, 0 links)
// ============================================================================

// Existing person IDs from src/seed/massachusetts/content.ts:
// person-plymouth-mercy-otis-warren, person-plymouth-james-warren,
// person-plymouth-william-watson, person-plymouth-james-otis-sr,
// person-plymouth-theophilus-cotton, person-plymouth-george-watson,
// person-plymouth-hannah-winslow, person-plymouth-nathaniel-goodwin

export const plymouthTownPersons: { personId: string; connectionNote: string }[] = [
  { personId: 'person-plymouth-mercy-otis-warren', connectionNote: 'Political writer and historian of the Revolution' },
  { personId: 'person-plymouth-james-warren', connectionNote: 'President of the Massachusetts Provincial Congress' },
  { personId: 'person-plymouth-william-watson', connectionNote: 'Led Plymouth militia companies' },
  { personId: 'person-plymouth-james-otis-sr', connectionNote: 'Patriot politician and father of James Otis Jr.' },
  { personId: 'person-plymouth-theophilus-cotton', connectionNote: 'Minister who preached resistance from the pulpit' },
  { personId: 'person-plymouth-george-watson', connectionNote: 'Merchant and member of the committee of correspondence' },
  { personId: 'person-plymouth-hannah-winslow', connectionNote: 'Managed household and farms during wartime' },
  { personId: 'person-plymouth-nathaniel-goodwin', connectionNote: 'Militia officer who served throughout the war' },
];
