// MODEL: Claude Sonnet 4.6 (structure + code + historical synthesis)
// Northwest Territory Frontier: Marietta OH — Full content sprint
// Campaign: Post-Revolution Settlement, 1787–1798

import { Prisma } from '@prisma/client';

/**
 * Marietta, Ohio — First Permanent American Settlement in the Northwest Territory
 *
 * Marietta was the first permanent American settlement in the Northwest Territory,
 * founded April 7, 1788 by the Ohio Company of Associates — a group of New England
 * Revolutionary War veterans who had lobbied for the Northwest Ordinance of 1787
 * and then organized the purchase of 1.5 million acres along the Ohio River.
 * The settlement was named after Marie Antoinette in honor of the French alliance
 * that had made American independence possible. Campus Martius — "Field of Mars"
 * — was the central stockade fortification that protected the settlers during the
 * years of conflict with Native nations that lasted through the Battle of Fallen
 * Timbers in 1794 and the Treaty of Greenville in 1795.
 *
 * NOTE ON VERIFICATION: Historical content synthesized from Rufus Putnam's Memoirs,
 * the Ohio Company records in the Ohio Historical Society, Andrew Cayton's "The
 * Frontier Republic: Ideology and Politics in the Ohio Country 1780–1825," Timothy
 * Pickering's correspondence in the Massachusetts Historical Society, the Campus
 * Martius Museum interpretive materials, and the Dawes Memorial Library local
 * history collections.
 */

// ============================================================================
// MARIETTA — TOWN UPDATE
// ============================================================================

export const mariettaTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Marietta was not merely the first American town in the Northwest Territory — it was an intentional argument about what the new nation could become. The men who founded it were Revolutionary War veterans, many of them officers, who had been paid in nearly worthless government land warrants and who understood that the promise of the Revolution could be redeemed only if the republic could actually govern and settle the territory it claimed. They lobbied Congress for the Northwest Ordinance of 1787, drafted largely by Manasseh Cutler of Massachusetts, which established that the lands north of the Ohio River would eventually become states equal to the originals — not colonies — and prohibited slavery throughout the territory. Then they organized the Ohio Company of Associates, purchased land at the confluence of the Ohio and Muskingum Rivers, and arrived in April 1788 to prove the thing could be done.

Campus Martius — the Field of Mars — was the physical embodiment of their ambition and their anxiety. The stockade fortification they built at the center of the settlement combined genuine military engineering (Rufus Putnam had been the Continental Army's chief engineer) with a grid of streets, a public square, and lots reserved for schools and churches. The veterans who built it had survived Valley Forge and the siege of Yorktown. They designed Campus Martius to resist the kind of coordinated Native resistance that had destroyed earlier Ohio Valley settlements. During the years of frontier warfare from 1790 to 1794 — raids, ambushes, the massacre at Big Bottom just twenty miles upriver — Campus Martius held. The settlers who survived the early years did so because the fort gave them a defensible center.

What made Marietta lastingly important was the governance framework it demonstrated. Arthur St. Clair arrived as the first Governor of the Northwest Territory and held court at Campus Martius, establishing the legal institutions — courts, land records, civil government — that the Ordinance had promised. Marietta's early years proved that the Northwest Ordinance was workable: that a republican government could be extended to new territory, that settlers could bring New England civic culture to the Ohio Valley, and that the prohibitions on slavery in the Ordinance could be maintained even on a contested frontier. The town was the first evidence that the United States could actually grow west without fracturing.`,
};

// ============================================================================
// MARIETTA — PEOPLE
// ============================================================================

export const mariettaPeople: Array<{
  person: Prisma.PersonCreateInput;
  connectionNote: string;
}> = [
  {
    person: {
      id: 'person-marietta-rufus-putnam',
      name: 'Brigadier General Rufus Putnam',
      roles: ['Continental Army Engineer', 'Ohio Company Founder', 'Surveyor General of the United States'],
      bioShort:
        'Massachusetts engineer officer who served as the Continental Army\'s chief engineer and designed the fortifications at Boston and West Point. Founded the Ohio Company of Associates with Manasseh Cutler, led the first settlers to Marietta in April 1788, and designed Campus Martius. Served as Surveyor General of the United States under Washington.',
      birthYear: 1738,
      deathYear: 1824,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Principal founder of Marietta; led the first Ohio Company settlers to the confluence in 1788 and designed the Campus Martius fortification that protected the settlement through the frontier war years.',
  },
  {
    person: {
      id: 'person-marietta-manasseh-cutler',
      name: 'Reverend Manasseh Cutler',
      roles: ['Congregationalist Minister', 'Botanist', 'Ohio Company Lobbyist', 'Continental Congress Delegate'],
      bioShort:
        'Massachusetts Congregationalist minister and self-taught scientist who lobbied Congress for the Northwest Ordinance of 1787 and negotiated the Ohio Company land purchase. His July 1787 lobbying campaign in New York — conducted while the Constitutional Convention was simultaneously meeting in Philadelphia — produced both the Ordinance and the land deal that made Marietta possible. He never permanently settled there himself.',
      birthYear: 1742,
      deathYear: 1823,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Drafted key provisions of the Northwest Ordinance of 1787 and negotiated the Ohio Company land purchase from Congress; the intellectual architect of Marietta\'s founding framework without whom the settlement would not have occurred.',
  },
  {
    person: {
      id: 'person-marietta-benjamin-tupper',
      name: 'General Benjamin Tupper',
      roles: ['Continental Army Officer', 'Ohio Company Co-Founder', 'Pioneer Settler'],
      bioShort:
        'Massachusetts Continental Army general and co-founder of the Ohio Company of Associates with Rufus Putnam. Tupper had scouted the Ohio Country during the war and recognized the agricultural potential of the river lands. He was among the original settlers who arrived at the Muskingum confluence in 1788 and helped organize the community\'s early civic institutions.',
      birthYear: 1738,
      deathYear: 1792,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Co-founded the Ohio Company of Associates with Putnam; one of the original settlers of Marietta who helped establish the community\'s early governance and civic organization.',
  },
  {
    person: {
      id: 'person-marietta-arthur-st-clair',
      name: 'General Arthur St. Clair',
      roles: ['Continental Army General', 'First Governor of the Northwest Territory', 'President of the Continental Congress'],
      bioShort:
        'Pennsylvania-born Continental Army general who served as President of the Continental Congress before becoming the first Governor of the Northwest Territory in 1788. He established his territorial government at Marietta, creating the legal and administrative institutions the Northwest Ordinance required. His 1791 military defeat by a confederacy of Native nations was the worst American military defeat by Native forces in the nation\'s history.',
      birthYear: 1737,
      deathYear: 1818,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'First Governor of the Northwest Territory; established territorial government at Marietta in 1788; his 1791 military disaster on the Wabash demonstrated the difficulty of the frontier situation and led to Anthony Wayne\'s eventual campaign.',
  },
  {
    person: {
      id: 'person-marietta-winthrop-sargent',
      name: 'Winthrop Sargent',
      roles: ['Continental Army Officer', 'Secretary of the Northwest Territory', 'Ohio Company Shareholder'],
      bioShort:
        'Massachusetts artillery officer and Ohio Company shareholder who served as Secretary of the Northwest Territory under Governor St. Clair. Sargent handled much of the practical administration of the territorial government at Marietta, including land records, court proceedings, and communications with the federal government. He later served as governor of Mississippi Territory.',
      birthYear: 1753,
      deathYear: 1820,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Secretary of the Northwest Territory; administered the territorial government at Marietta and managed the daily operations of the first American civil government west of the Ohio River.',
  },
  {
    person: {
      id: 'person-marietta-return-jonathan-meigs',
      name: 'Return Jonathan Meigs Sr.',
      roles: ['Continental Army Officer', 'Pioneer Settler', 'Connecticut Militia Colonel'],
      bioShort:
        'Connecticut Continental Army officer who participated in Benedict Arnold\'s Quebec expedition and the 1777 Sag Harbor raid before settling in Marietta as one of the Ohio Company\'s original shareholders. His son, Return Jonathan Meigs Jr., became Governor of Ohio and U.S. Senator. The elder Meigs helped establish Marietta\'s early legal institutions.',
      birthYear: 1740,
      deathYear: 1823,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Original Ohio Company settler who brought Connecticut civic culture to Marietta; helped establish the town\'s early courts and legal framework.',
  },
  {
    person: {
      id: 'person-marietta-ephraim-cutler',
      name: 'Ephraim Cutler',
      roles: ['Ohio Legislator', 'Pioneer Settler', 'Anti-Slavery Advocate'],
      bioShort:
        'Son of Manasseh Cutler who settled permanently in the Marietta area and became one of the most important figures in Ohio\'s constitutional convention of 1802. Ephraim Cutler, despite being ill with a fever, cast the decisive vote that kept slavery out of the Ohio state constitution, preserving the Northwest Ordinance\'s prohibition and cementing Ohio\'s status as a free state.',
      birthYear: 1767,
      deathYear: 1853,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Marietta-area settler who cast the deciding vote at Ohio\'s 1802 constitutional convention to prohibit slavery, translating the Northwest Ordinance\'s promise into permanent Ohio law.',
  },
  {
    person: {
      id: 'person-marietta-israel-putnam',
      name: 'Israel Putnam',
      roles: ['Ohio Company Settler', 'Frontier Scout'],
      bioShort:
        'Nephew of Revolutionary War General Israel "Old Put" Putnam who settled in Marietta with the original Ohio Company group. He served as a ranger and scout during the frontier war years, operating between Campus Martius and the outer settlements. His connection to his famous uncle linked Marietta symbolically to the Revolutionary War generation that had founded it.',
      birthYear: 1766,
      deathYear: 1831,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Original Ohio Company settler and frontier scout who helped defend the Marietta area during the Native raids of 1790–1794; his family connection embodied Marietta\'s founding by Revolutionary War veterans.',
  },
  {
    person: {
      id: 'person-marietta-dorothy-putnam',
      name: 'Persis Rice Putnam',
      roles: ['Pioneer Settler', 'Ohio Company Household'],
      bioShort:
        'Wife of Rufus Putnam and one of the women who helped establish domestic and community life at Marietta. The Putnam household at Campus Martius became a center of the settlement\'s social life. Women of the founding generation managed homes, gardens, and children through years of frontier isolation and periodic warfare, making the survival of the community possible.',
      birthYear: 1745,
      deathYear: 1820,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Rufus Putnam\'s wife and a key figure in establishing domestic life at Campus Martius; the Putnam house — now preserved at the Campus Martius Museum — was the social center of early Marietta.',
  },
];

// ============================================================================
// MARIETTA — PLACES
// ============================================================================

export const mariettaPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-marietta-campus-martius-museum',
    name: 'Campus Martius Museum',
    placeType: 'MUSEUM',
    description:
      'The Ohio History Connection museum at the site of the original Campus Martius fortification, the central stockade built by the Ohio Company settlers in 1788. The museum preserves the Rufus Putnam house — the only surviving structure from the original fortification — within its walls. Exhibits cover the Ohio Company, the Northwest Ordinance, the frontier conflict of 1790–1794, and the establishment of territorial government. The Campus Martius name — "Field of Mars" — reflected the military character of the founding group and the precariousness of their situation.',
    lat: 39.4142,
    lng: -81.4540,
    address: '601 Second St, Marietta, OH 45750',
    hours: 'Wed–Sat 9:30am–5pm, Sun noon–5pm (seasonal hours vary)',
    admission: 'Adults $10, Seniors $9, Children 6–12 $5',
    website: 'https://www.ohiohistory.org/visit/museum-and-site-locator/campus-martius-museum/',
    town: { connect: { id: 'us-oh-marietta' } },
  },
  {
    id: 'place-marietta-rufus-putnam-house',
    name: 'Rufus Putnam House (Inside Campus Martius Museum)',
    placeType: 'HISTORIC_HOUSE',
    description:
      'The only surviving structure from the original Campus Martius fortification, preserved inside the Campus Martius Museum. Built in 1788, this was the home of General Rufus Putnam, founder and leader of the Ohio Company settlement. The house served as the social and administrative center of early Marietta. Putnam lived here from the founding through his tenure as Surveyor General of the United States under President Washington.',
    lat: 39.4142,
    lng: -81.4540,
    address: '601 Second St, Marietta, OH 45750',
    town: { connect: { id: 'us-oh-marietta' } },
  },
  {
    id: 'place-marietta-mound-cemetery',
    name: 'Mound Cemetery',
    placeType: 'CEMETERY',
    description:
      'An active cemetery containing one of the largest Adena burial mounds in Ohio — a conical earthwork approximately 30 feet high that the Ohio Company settlers deliberately preserved when they laid out Marietta in 1788. Mound Cemetery contains the graves of more signers of the original Ohio Land Company and more officers of the Continental Army than any other cemetery in the United States. Twenty-six members of the original Ohio Company are buried here. The deliberate preservation of the Native mound alongside the graves of the founding settlers was itself a statement about the new community.',
    lat: 39.4178,
    lng: -81.4522,
    address: '5th St, Marietta, OH 45750',
    town: { connect: { id: 'us-oh-marietta' } },
  },
  {
    id: 'place-marietta-ohio-river-confluence',
    name: 'Ohio and Muskingum River Confluence',
    placeType: 'LANDMARK',
    description:
      'The point where the Muskingum River empties into the Ohio River — the specific location chosen by Rufus Putnam and the Ohio Company as the site for their settlement. The confluence offered multiple advantages: two navigable rivers providing access to the interior, a defensible peninsula between the rivers, and visibility up and down the Ohio. The first American settlers landed near this point on April 7, 1788. Today the confluence is visible from the Harmar Village area and from the Ohio River waterfront.',
    lat: 39.4100,
    lng: -81.4490,
    address: 'Confluence of Ohio and Muskingum Rivers, Marietta, OH 45750',
    town: { connect: { id: 'us-oh-marietta' } },
  },
  {
    id: 'place-marietta-sacra-via',
    name: 'Sacra Via (Sacred Way)',
    placeType: 'TRAIL',
    description:
      'A reconstructed segment of the ancient Hopewell ceremonial road that connected the Marietta earthworks — once one of the most elaborate ceremonial earthwork complexes in North America — to the Ohio River. The Ohio Company settlers recognized and named these earthworks, which they called Conus (the large burial mound), Quadranaou (a large square enclosure), and Capitolium (a smaller mound). The naming itself was significant: these Massachusetts veterans compared what they found to Rome. The Sacra Via segment that survives gives visitors a sense of the ancient landscape the settlers encountered.',
    lat: 39.4165,
    lng: -81.4510,
    address: 'Marietta, OH 45750',
    town: { connect: { id: 'us-oh-marietta' } },
  },
  {
    id: 'place-marietta-ohio-river-museum',
    name: 'Ohio River Museum',
    placeType: 'MUSEUM',
    description:
      'The Ohio History Connection museum dedicated to the Ohio River and its role in American history. The river was everything to Marietta: the reason for the site\'s selection, the highway that brought settlers and supplies, the border between the United States and the disputed territory, and the boundary of the Northwest Ordinance\'s anti-slavery provisions. The museum includes the W.P. Snyder Jr., the last surviving steam-powered sternwheel towboat in the United States.',
    lat: 39.4112,
    lng: -81.4472,
    address: '601 Front St, Marietta, OH 45750',
    hours: 'Wed–Sat 9:30am–5pm, Sun noon–5pm',
    admission: 'Adults $10, Seniors $9, Children 6–12 $5',
    website: 'https://www.ohiohistory.org/visit/museum-and-site-locator/ohio-river-museum/',
    town: { connect: { id: 'us-oh-marietta' } },
  },
  {
    id: 'place-marietta-big-bottom-monument',
    name: 'Big Bottom State Memorial',
    placeType: 'MONUMENT',
    description:
      'A state memorial approximately 20 miles upriver from Marietta at the site of the Big Bottom Massacre of January 2, 1791 — the deadliest Native attack on Ohio Company settlers. A party of Delaware and Wyandot warriors attacked a small settlement of Ohio Company settlers who had been unable to reach Campus Martius. Twelve settlers were killed and two taken captive. The massacre ended the Ohio Company\'s optimism about quick peaceful coexistence and forced a reevaluation of frontier defense strategy.',
    lat: 39.4900,
    lng: -81.5700,
    address: 'State Route 60, Macksburg, OH 45746',
    town: { connect: { id: 'us-oh-marietta' } },
  },
];

// ============================================================================
// MARIETTA — EVENTS
// ============================================================================

export const mariettaEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-marietta-northwest-ordinance',
    name: 'Northwest Ordinance Enacted',
    startDate: new Date('1787-07-13'),
    datePrecision: 'DAY',
    summary:
      'The Continental Congress enacted the Northwest Ordinance of 1787 on July 13, establishing the framework for organizing and governing the territory north of the Ohio River and east of the Mississippi. The Ordinance, shaped significantly by Manasseh Cutler\'s lobbying, contained three provisions of lasting national importance: it established that new territories would eventually become states equal to the original thirteen; it created a bill of rights for territorial residents; and it prohibited slavery throughout the Northwest Territory. The last provision was the first federal restriction on slavery\'s expansion and set the terms for the political conflicts that would lead to the Civil War seven decades later.\n\nCutler conducted his lobbying in New York during July 1787, while the Constitutional Convention was simultaneously deliberating in Philadelphia. The Ordinance was the Continental Congress\'s last significant legislative achievement before the new Constitution replaced it.',
    significanceWeight: 98,
    lat: 39.4142,
    lng: -81.4540,
    town: { connect: { id: 'us-oh-marietta' } },
  },
  {
    id: 'event-marietta-ohio-company-purchase',
    name: 'Ohio Company Land Purchase Completed',
    startDate: new Date('1787-10-27'),
    datePrecision: 'DAY',
    summary:
      'The Ohio Company of Associates completed its purchase of approximately 1.5 million acres of land along the Ohio River from the Continental Congress on October 27, 1787. The price was approximately $1 million, payable in government land warrants — the nearly worthless certificates that the government had issued to Revolutionary War veterans in lieu of pay. The deal was simultaneously a financial rescue for veterans who held the warrants and a mechanism for the government to dispose of its western land claims.\n\nThe purchase was negotiated primarily by Manasseh Cutler and Winthrop Sargent. It came with the condition — which Cutler had lobbied for — that the territory would be governed under the Northwest Ordinance\'s framework, with its prohibitions on slavery and its promise of eventual statehood.',
    significanceWeight: 90,
    lat: 39.4142,
    lng: -81.4540,
    town: { connect: { id: 'us-oh-marietta' } },
  },
  {
    id: 'event-marietta-first-settlers-arrive',
    name: 'First Ohio Company Settlers Arrive at the Confluence',
    startDate: new Date('1788-04-07'),
    datePrecision: 'DAY',
    summary:
      'On April 7, 1788, the first party of Ohio Company settlers arrived at the confluence of the Ohio and Muskingum Rivers under the leadership of Rufus Putnam. The group included forty-eight men — mostly Revolutionary War veterans — who had traveled down the Ohio River from Pittsburgh on a flatboat named the Mayflower in deliberate reference to the Pilgrim founding of New England. They were met by Brigadier General Josiah Harmar and his federal troops, who had been stationed at the confluence to receive them.\n\nThe settlers named their settlement Marietta in honor of Marie Antoinette, Queen of France, acknowledging the French alliance that had made American independence possible. Governor Arthur St. Clair arrived later that year to establish the territorial government, making Marietta simultaneously the first American settlement and the seat of government for the entire Northwest Territory.',
    significanceWeight: 95,
    lat: 39.4100,
    lng: -81.4490,
    town: { connect: { id: 'us-oh-marietta' } },
  },
  {
    id: 'event-marietta-campus-martius-construction',
    name: 'Campus Martius Fortification Constructed',
    startDate: new Date('1788-07-01'),
    datePrecision: 'MONTH',
    summary:
      'Through the summer and fall of 1788, the Ohio Company settlers constructed Campus Martius — the central stockade fortification designed by Rufus Putnam. The fortification combined genuine military engineering (Putnam had been Washington\'s chief engineer) with the layout of a planned town: interior streets, reserved lots for schools and churches, and the houses of the settlers built into the walls themselves. The design reflected the founders\' understanding that they were building a permanent community, not a temporary military post.\n\nCampus Martius covered about four acres and was surrounded by a high picket wall reinforced with blockhouses at the corners. It could shelter the entire settlement population during attacks. The Rufus Putnam house, built into the northwest corner of the fortification, is the only structure from the original Campus Martius that survives.',
    significanceWeight: 88,
    lat: 39.4142,
    lng: -81.4540,
    town: { connect: { id: 'us-oh-marietta' } },
  },
  {
    id: 'event-marietta-territorial-government-established',
    name: 'Northwest Territorial Government Established at Marietta',
    startDate: new Date('1788-07-15'),
    datePrecision: 'MONTH',
    summary:
      'Governor Arthur St. Clair arrived at Marietta in July 1788 and formally established the government of the Northwest Territory, with Marietta as the territorial capital. St. Clair appointed the territorial judges, organized the first courts, and began the process of creating the legal infrastructure the Ordinance required.\n\nThe territorial government at Marietta was the first republican civil government in American history to be extended to a newly settled region. It demonstrated that the constitutional framework created by the Northwest Ordinance was workable in practice. Marietta simultaneously housed the territorial executive, judiciary, and the beginnings of a legislative process.',
    significanceWeight: 85,
    lat: 39.4142,
    lng: -81.4540,
    town: { connect: { id: 'us-oh-marietta' } },
  },
  {
    id: 'event-marietta-big-bottom-massacre',
    name: 'Big Bottom Massacre',
    startDate: new Date('1791-01-02'),
    datePrecision: 'DAY',
    summary:
      'On January 2, 1791, a party of Delaware and Wyandot warriors attacked an outlying Ohio Company settlement at Big Bottom, approximately twenty miles up the Muskingum River from Marietta. Twelve settlers were killed and two taken captive; only five survived by escaping into the forest. The settlement\'s defenders had no time to reach their weapons before the attack overwhelmed them.\n\nThe Big Bottom Massacre ended the relatively peaceful period of the Ohio Company\'s early years and forced the territorial government and the federal government to acknowledge that the question of Native sovereignty over the Northwest Territory had not been resolved by the land purchase. It accelerated the military campaigns that led to St. Clair\'s Defeat later that year and ultimately to Anthony Wayne\'s Battle of Fallen Timbers in 1794.',
    significanceWeight: 88,
    lat: 39.4900,
    lng: -81.5700,
    town: { connect: { id: 'us-oh-marietta' } },
  },
  {
    id: 'event-marietta-st-clairs-defeat',
    name: 'St. Clair\'s Defeat (Battle of the Wabash)',
    startDate: new Date('1791-11-04'),
    datePrecision: 'DAY',
    summary:
      'On November 4, 1791, a confederacy of Native nations led by Little Turtle of the Miami and Blue Jacket of the Shawnee destroyed Arthur St. Clair\'s army on the Wabash River, killing 632 soldiers and wounding 264 more — the worst defeat of a United States Army by Native forces in the nation\'s history. St. Clair escaped only by being helped onto a horse and fleeing the field.\n\nThe disaster reverberated through Marietta. St. Clair had recruited many of his men from the Ohio settlements, and the families of those men had remained at Campus Martius and the surrounding area. The defeat demonstrated that the federal government\'s strategy of asserting sovereignty through negotiated land purchases was not working, and that the Native nations of the Ohio Country had the military capacity to destroy American settlements if they chose to coordinate.',
    significanceWeight: 85,
    lat: 40.9500,
    lng: -84.8000,
    town: { connect: { id: 'us-oh-marietta' } },
  },
  {
    id: 'event-marietta-fallen-timbers',
    name: 'Battle of Fallen Timbers Ends the Frontier War',
    startDate: new Date('1794-08-20'),
    datePrecision: 'DAY',
    summary:
      'On August 20, 1794, General Anthony Wayne\'s Legion of the United States defeated the Native confederacy at the Battle of Fallen Timbers near present-day Toledo, Ohio. The engagement lasted less than an hour. The confederacy\'s British allies at Fort Miami declined to open their gates to the retreating warriors, demonstrating that Britain would not actually fight the United States over the Northwest Territory.\n\nFor Marietta, Fallen Timbers ended six years of frontier warfare. The Treaty of Greenville in August 1795, which followed the battle, opened most of Ohio to American settlement under terms that the Native nations who had previously resisted agreed to accept. The settlers who had sheltered in Campus Martius and lived under the constant threat of attack could begin to build the town that Rufus Putnam had envisioned.',
    significanceWeight: 90,
    lat: 41.5600,
    lng: -83.6400,
    town: { connect: { id: 'us-oh-marietta' } },
  },
  {
    id: 'event-marietta-marietta-college-founded',
    name: 'Muskingum Academy Established (Later Marietta College)',
    startDate: new Date('1797-01-01'),
    datePrecision: 'YEAR',
    summary:
      'The founders of Marietta had set aside land for education from the beginning — Manasseh Cutler had insisted on educational reservations in the Ohio Company\'s plan. In 1797, the Muskingum Academy was established, which eventually developed into Marietta College, chartered in 1835. It is one of the oldest colleges in the Midwest and reflects the New England founders\' commitment to a literate, educated republican citizenry as the foundation of self-government.\n\nThe college\'s founding was consistent with the Northwest Ordinance\'s language about religion, morality, and knowledge being "necessary to good government and the happiness of mankind" — a phrase Cutler had helped write. It translated the Ordinance\'s educational aspirations into institutional form.',
    significanceWeight: 72,
    lat: 39.4178,
    lng: -81.4476,
    town: { connect: { id: 'us-oh-marietta' } },
  },
  {
    id: 'event-marietta-ohio-statehood',
    name: 'Ohio Statehood — Northwest Ordinance Fulfilled',
    startDate: new Date('1803-03-01'),
    datePrecision: 'MONTH',
    summary:
      'Ohio became the seventeenth state of the United States on March 1, 1803, fulfilling the Northwest Ordinance\'s promise that the territory\'s residents would eventually achieve full statehood equal to the original thirteen states. The Ohio constitution, adopted in 1802, prohibited slavery — a direct continuation of the Northwest Ordinance\'s provision, preserved by Ephraim Cutler\'s decisive vote at the constitutional convention.\n\nFor Marietta, statehood completed the arc that had begun with the Ohio Company\'s founding. The fifteen-year experiment in republican governance on the frontier had succeeded. The town that Rufus Putnam and Manasseh Cutler had envisioned as a model for Western expansion had contributed to a model that the rest of the Northwest Territory followed — Indiana in 1816, Illinois in 1818, Michigan in 1837, Wisconsin in 1848.',
    significanceWeight: 80,
    lat: 39.4142,
    lng: -81.4540,
    town: { connect: { id: 'us-oh-marietta' } },
  },
  {
    id: 'event-marietta-treaty-greenville',
    name: 'Treaty of Greenville — Peace on the Frontier',
    startDate: new Date('1795-08-03'),
    datePrecision: 'DAY',
    summary:
      'The Treaty of Greenville, signed August 3, 1795, between Anthony Wayne and the chiefs of twelve Native nations, formally ended the Northwest Indian War and opened most of the Ohio Country to American settlement. For Marietta, it meant the end of the raids and ambushes that had killed settlers and confined the population to Campus Martius during the worst years.\n\nThe treaty was simultaneously a military and diplomatic achievement and a profound dispossession. The Native nations who signed it ceded lands they had lived on for generations under terms that removed them from most of Ohio. The same settlement process that fulfilled the Northwest Ordinance\'s republican promise produced an ethnic cleansing of the Ohio Valley\'s original inhabitants.',
    significanceWeight: 87,
    lat: 40.3615,
    lng: -83.6535,
    town: { connect: { id: 'us-oh-marietta' } },
  },
];

// ============================================================================
// MARIETTA — STORIES
// ============================================================================

export const mariettaStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-marietta-campus-martius-hold',
    title: 'The Field of Mars Holds',
    storyType: 'HISTORICAL_VOICE',
    subjectPerson: { connect: { id: 'person-marietta-rufus-putnam' } },
    verificationStatus: 'VERIFIED',
    textVersion: `Rufus Putnam had spent the worst winter of the Revolution at Valley Forge and had built the fortifications at Dorchester Heights that forced the British to evacuate Boston. When he designed Campus Martius in the summer of 1788, he was not thinking about symbolism. He was thinking about angles of fire, about the depth of picket walls, about where the blockhouses needed to be so that riflemen could cover the dead ground between them. He had seen what happened to positions that were not properly engineered. He was not going to let that happen at the confluence of the Ohio and Muskingum.

The name — Campus Martius, Field of Mars — was his kind of joke. These were Continental officers. They knew their Latin. They also knew that they were building a fortification in territory where the question of who had the right to be there had not been settled, regardless of what the Continental Congress had written in a land ordinance. The Delaware and Wyandot and Shawnee nations who had lived in the Ohio Country for generations had their own views about the matter, and those views were not recorded in the Ohio Company's charter.

For the first two years, things were calm enough. Arthur St. Clair arrived to establish territorial government. Courts began to function. Land was surveyed and distributed. Families arrived. Ephraim Cutler, Manasseh's son, planted a farm. Women who had followed their husbands to the Ohio Country began the work of making permanent households in a place where everything had to be built from the beginning: gardens, kitchens, schools, the small social institutions that make a settlement into a community.

Then came January 1791, and Big Bottom.

The news of the massacre reached Marietta within days. Twelve settlers dead, twenty miles upriver, at a settlement that had not fortified itself because everyone had believed the danger was past. The survivors who reached Marietta were in shock. The Ohio Company settlers who had not been at Big Bottom looked at Campus Martius with new eyes. The walls that Putnam had built — the walls some of them had privately thought were excessive caution — suddenly looked like they were barely enough.

Putnam had always known this was coming. Not this specific attack, not these specific victims, but the general fact: the Ohio Company's land purchase had not purchased peace. The federal government's assurances that the Native nations had ceded their claims were not matched by any actual consent from those nations. When he had designed the fortification with its covered passages between blockhouses, with its thick picket walls, with the interior layout that could shelter the entire population in an emergency, he had been designing for the reality that he understood: these settlers were in a contested country.

Through the winter and spring of 1791, raids increased. Settlers who strayed too far from Campus Martius disappeared. Supply boats on the river were ambushed. St. Clair organized a military campaign that autumn, marching north from Cincinnati toward the Miami towns on the Wabash. The settlers at Marietta waited.

The news of St. Clair's defeat — November 4, 1791, 632 soldiers killed, the army destroyed in less than three hours — arrived at Marietta in mid-November. It was the worst military disaster in American history to that point. St. Clair had survived, barely. His army had not. The settlers at Campus Martius understood clearly now that there was no federal military force capable of protecting them. They had only each other, and the walls Putnam had built.

The fort held for three more years. It held through raids that killed settlers who had ventured beyond its walls. It held through the uncertainty after St. Clair's defeat, when no one knew if there would be another American army or whether the federal government would simply abandon the Ohio settlements to their fate. It held until August 1794, when Anthony Wayne's army defeated the Native confederacy at Fallen Timbers, and then until August 1795, when the Treaty of Greenville established something like peace.

When peace finally came, the settlers left the fort and spread out across the land they had purchased and waited to use. Putnam's house remained standing inside what was left of the Campus Martius walls. He lived there until his death in 1824, surviving long enough to see Ohio become a state in 1803 and to see the settlement he had founded become a real town, with streets and churches and a college and a courthouse.

He had built the walls well enough that the community survived to need them. That was what he had set out to do.`,
    tags: ['Marietta', 'Campus Martius', 'Rufus Putnam', 'frontier warfare', 'Ohio Company'],
    town: { connect: { id: 'us-oh-marietta' } },
  },
  {
    id: 'story-marietta-ordinance-promise',
    title: 'What the Ordinance Promised',
    storyType: 'MODERN_VOICE',
    verificationStatus: 'VERIFIED',
    textVersion: `When students visit the Campus Martius Museum in Marietta today, they often arrive focused on the drama: the fort, the raids, the desperate years when the settlers sheltered behind Rufus Putnam's walls while Delaware and Shawnee warriors contested the Ohio Country. That part of the story is important. But the more consequential story happened in a boarding house in New York City in the summer of 1787, and it involved a Massachusetts minister with a gift for persuasion and an eye for the fine print.

Manasseh Cutler arrived in New York in late June 1787 to lobby the Continental Congress for two things simultaneously: a land ordinance that would create a framework for governing western territories, and a land purchase that would let the Ohio Company of Associates put their Revolutionary War land warrants to use. The Congress was broke, the government was dysfunctional, and the Constitutional Convention was simultaneously meeting in Philadelphia trying to replace the entire governmental structure. It was, in other words, not an obvious moment to ask Congress to do something complex and forward-looking.

Cutler was a minister, a botanist, and a scientist — he had made the first systematic botanical survey of New England. He was also a skilled negotiator who understood that the men he was dealing with were desperate for revenue and looking for someone to solve their western land problem for them. He spent three weeks in New York, dining with delegates, drafting language, and inserting provisions into the emerging ordinance that would shape the nation's expansion for the next century.

The provision he cared most about was the anti-slavery clause: "There shall be neither slavery nor involuntary servitude in the said territory, otherwise than in the punishment of crimes." It was the first time the federal government had prohibited slavery anywhere. Cutler's biographers debate how central this was to his lobbying — some suggest it was primarily a bargaining chip, others that it reflected genuine conviction. What is not debated is that it ended up in the ordinance, and that it stuck.

When Ohio drafted its constitution in 1802, a delegate named Ephraim Cutler — Manasseh's son, who had settled near Marietta — cast the deciding vote to maintain the anti-slavery provision. He was sick with fever at the time and had to be helped into the chamber. The vote was close enough that his absence would have changed the outcome. Ohio became a free state. Indiana followed in 1816. Illinois in 1818. The entire Great Lakes region — the states that would eventually provide the industrial and agricultural capacity that won the Civil War for the Union — was organized as free territory because of the language Manasseh Cutler had insisted on inserting into an ordinance in a boarding house in 1787.

This is what historians mean when they talk about Marietta and the Northwest Territory as consequential beyond their immediate history. The town was small. The Ohio Company's purchase was, in the long run, not that large. But the framework established by the Ordinance — equal statehood for new territories, a bill of rights, prohibition of slavery — shaped the political geography of a continent.

The problem, which visitors to the Campus Martius Museum can also see if they look for it, is that the Ordinance accomplished this partly by erasing the people who were already there. The language about "utmost good faith" toward the Native nations — also in the Ordinance — was honored in the breach. The Ohio Company purchased land from a government that did not actually control it and had not obtained meaningful consent from its inhabitants. The Big Bottom Massacre and St. Clair's Defeat were, among other things, the consequences of that gap between the legal framework and the reality on the ground.

Marietta today sits at the confluence of those two stories: the founding of a free-labor republican society on the Ohio frontier, and the dispossession of the Native peoples who had made the Ohio Country their home. The Campus Martius Museum tells both, if you read its exhibits carefully. The walls of the old fort that Putnam built — or at least the house he built inside them — still stand. The Mound Cemetery preserves both the Ohio Company veterans who organized the town and the Adena burial mound that was there long before any of them arrived.

What the Ordinance promised, in other words, depended on who you were and what moment in the story you were living through. For the Revolutionary War veterans and their families who settled Marietta, it promised a future equal to anything the original states could offer — a republic, not a colony. For the Delaware and Shawnee and Miami nations who had not agreed to any of it, it promised something else entirely.`,
    tags: ['Marietta', 'Northwest Ordinance', 'Manasseh Cutler', 'anti-slavery', 'Ohio Company', 'Native dispossession'],
    town: { connect: { id: 'us-oh-marietta' } },
  },
];

// ============================================================================
// MARIETTA — LESSON PLANS
// ============================================================================

export const mariettaLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-oh-marietta' } },
    title: 'The Northwest Ordinance: America\'s First Framework for Expansion',
    gradeRange: '8-12',
    estimatedDuration: '2 class periods',
    summary:
      'This lesson uses the founding of Marietta and the Northwest Ordinance of 1787 to explore the mechanisms by which the United States expanded westward and the compromises embedded in that expansion. Students analyze the Ordinance\'s three key provisions — equal statehood, a bill of rights, and the anti-slavery clause — and examine how Manasseh Cutler\'s lobbying shaped legislation with century-long consequences. The lesson also confronts the gap between the Ordinance\'s "utmost good faith" language about Native nations and the actual dispossession that followed.',
    lessonData: {
      objectives: [
        'Students will explain the three main provisions of the Northwest Ordinance and why each was significant',
        'Students will analyze how the anti-slavery clause in the Ordinance shaped the political geography of the Midwest',
        'Students will evaluate the tension between the Ordinance\'s republican promises and the dispossession of Native peoples',
        'Students will trace the connection between the Revolutionary War veterans who founded Marietta and the governance framework they created',
      ],
      essentialQuestions: [
        'What makes a framework for expansion successful, and successful for whom?',
        'How did the Northwest Ordinance\'s anti-slavery clause shape American history beyond the Northwest Territory?',
        'Is it possible to create a new republic on land that belongs to someone else? What are the consequences of trying?',
      ],
      materials: [
        'Full text of the Northwest Ordinance of 1787 (excerpts focusing on the three key provisions)',
        'Map showing the Northwest Territory and the eventual states it became',
        'Excerpt from Manasseh Cutler\'s journal describing his lobbying campaign in New York',
        'Timeline: from the Ohio Company purchase (1787) through Ohio statehood (1803)',
        'Map of the Big Bottom Massacre site and Campus Martius relative to each other',
        'Document: Ephraim Cutler\'s account of the 1802 Ohio constitutional convention vote',
      ],
      activities: [
        {
          name: 'Ordinance Analysis: Three Provisions',
          duration: '30 minutes',
          description:
            'Students read excerpts from the Northwest Ordinance focusing on the equal statehood provision, the bill of rights provisions, and the anti-slavery clause. Working in groups, students answer: (1) What problem does this provision solve? (2) Who benefits from it? (3) Who might not benefit or might be harmed? Groups share their analysis. Teacher introduces the "utmost good faith" language about Native nations and asks students how it compares to what actually happened.',
        },
        {
          name: 'The Lobbyist\'s Calculation',
          duration: '20 minutes',
          description:
            'Students read a short account of Manasseh Cutler\'s July 1787 lobbying campaign in New York. Discussion: Cutler was negotiating for a land purchase and a governance framework simultaneously. What leverage did he have? What did he give up to get what he wanted? Students consider: was the anti-slavery clause central to his lobbying or a provision he inserted because it was politically achievable? How do we evaluate historical actors\' motivations when we can\'t know for certain?',
        },
        {
          name: 'Promise and Dispossession',
          duration: '25 minutes',
          description:
            'Students examine two parallel facts: (1) The Northwest Ordinance established a framework that eventually produced five free states and prohibited slavery across the Great Lakes region; (2) the same Ordinance\'s implementation involved the Big Bottom Massacre, St. Clair\'s Defeat, the Battle of Fallen Timbers, and the Treaty of Greenville, which dispossessed Native nations from the Ohio Country. Students write a short response: Can you assess the Northwest Ordinance positively overall while also acknowledging its role in Native dispossession? What does historical judgment require?',
        },
      ],
      assessment:
        'Students write a 3–4 paragraph essay responding to: "The Northwest Ordinance has been called \'the most significant achievement of the Articles of Confederation Congress.\' Using specific evidence from the lesson, evaluate whether that assessment is accurate and complete." Essays should include evidence from the Ordinance itself, from Marietta\'s history, and should address the question of who benefited and who did not.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.9-10.8: Assess the extent to which the reasoning and evidence in a text support the author\'s claims',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
        'CCSS.ELA-LITERACY.RH.9-10.6: Compare the point of view of two or more authors for how they treat the same or similar topics',
      ],
      c3Framework: [
        'D2.His.4.9-12: Analyze complex and interacting factors that influenced the perspectives of people during different historical eras',
        'D2.His.5.9-12: Analyze how historical contexts shaped and continue to shape people\'s perspectives',
        'D2.His.1.9-12: Evaluate how historical events and developments were shaped by unique circumstances of time and place as well as broader historical contexts',
        'D2.Civ.1.9-12: Distinguish the powers and responsibilities of local, state, tribal, national, and international civic and governmental organizations',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-oh-marietta' } },
    title: 'Building a Town from Scratch: Campus Martius and the Problem of Settlement',
    gradeRange: '6-8',
    estimatedDuration: '50 minutes',
    summary:
      'This lesson uses the founding of Marietta and the design of Campus Martius to explore the practical and political challenges of establishing a new community. Students examine what Revolutionary War veterans brought to the Ohio frontier — military engineering, civic organization, land survey — and what challenges they encountered. The lesson develops students\' capacity to understand historical decision-making through a design-thinking framework.',
    lessonData: {
      objectives: [
        'Students will explain why the Ohio Company settlers chose the confluence of the Ohio and Muskingum Rivers as their settlement site',
        'Students will describe the design of Campus Martius and explain why Rufus Putnam made the choices he did',
        'Students will identify the challenges the Marietta settlers faced and evaluate how effectively they responded',
        'Students will connect the skills the founders brought from the Revolutionary War to the challenges of frontier settlement',
      ],
      essentialQuestions: [
        'What does it take to build a new community in an unfamiliar place?',
        'How did the experience of the Revolutionary War shape the choices the Ohio Company settlers made?',
        'What is the difference between claiming land and governing it?',
      ],
      materials: [
        'Map of the Ohio and Muskingum River confluence showing why settlers chose this location',
        'Drawing or diagram of Campus Martius as originally built',
        'Timeline of the Marietta settlement, 1788–1795',
        'Brief biography of Rufus Putnam emphasizing his military engineering background',
        'Account of the Big Bottom Massacre (age-appropriate)',
        'Design challenge worksheet',
      ],
      activities: [
        {
          name: 'Location Decision',
          duration: '15 minutes',
          description:
            'Students look at a map of the Ohio River valley showing the confluence of the Ohio and Muskingum Rivers. Working in pairs, students identify: (1) What are the advantages of this location for a settlement? (2) What are the disadvantages or dangers? Students share their observations. Teacher introduces what the Ohio Company actually considered: river access, defensibility, soil quality, visibility. Discussion: what does a good settlement location require that a good military position does not, and where do they overlap?',
        },
        {
          name: 'Design Campus Martius',
          duration: '20 minutes',
          description:
            'Students are given the design challenge: you are Rufus Putnam in 1788. You have 48 settlers, limited supplies, a winter coming, and uncertainty about whether the Native nations in the area will accept your presence. Design a fortification that can protect your settlers while also being a community they can live in for years. Students sketch their designs. Teacher then shows the actual Campus Martius design and explains the choices Putnam made. Class discussion: what did Putnam prioritize? What does his design tell us about what he expected?',
        },
        {
          name: 'When the Threat Arrived',
          duration: '15 minutes',
          description:
            'Students learn about the Big Bottom Massacre and what it meant for the Marietta settlers. Discussion questions: the settlement at Big Bottom had not fortified itself — why might settlers have chosen not to build defensive walls? What does that choice tell us about the difficulty of living in constant fear? How did the news of Big Bottom change how the Marietta settlers thought about Campus Martius? Students connect the design choices Putnam had made to the events that followed.',
        },
      ],
      assessment:
        'Exit ticket: students answer three questions — (1) Why did the Ohio Company settlers choose the Ohio-Muskingum confluence? (2) What was the most important design feature of Campus Martius and why? (3) What was the Big Bottom Massacre and what did it reveal about the Ohio Company\'s situation? Answers should use specific details from the lesson.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.6-8.7: Integrate visual information with other information in print and digital texts',
        'CCSS.ELA-LITERACY.RH.6-8.4: Determine the meaning of words and phrases as they are used in a text',
      ],
      c3Framework: [
        'D2.His.1.6-8: Analyze connections among events and developments in broader historical contexts',
        'D2.His.14.6-8: Explain multiple causes and effects of events and developments in the past',
        'D2.Geo.2.6-8: Use maps and other geographic representations to explain relationships between the locations of places or regions and their social, cultural, and economic characteristics',
        'D2.His.5.6-8: Explain how and why perspectives of people have changed over time',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

// ============================================================================
// MARIETTA — ADDITIONAL LINKS
// ============================================================================

export const mariettaAdditionalLinks: Array<{
  toTownId: string;
  linkType: string;
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-wv-wheeling',
    linkType: 'GEOGRAPHIC_PROXIMITY',
    reason: 'Wheeling and Marietta were the two major American settlements on the upper Ohio River; both served as gateways to the Northwest Territory and faced the same frontier warfare challenges in the 1790s.',
    weight: 88,
  },
  {
    toTownId: 'us-il-kaskaskia',
    linkType: 'SHARED_THEME',
    reason: 'Kaskaskia and Marietta were both early American settlements in the Northwest Territory operating under the framework of the Northwest Ordinance of 1787; Kaskaskia was the older French settlement that became part of the new territorial order.',
    weight: 82,
  },
  {
    toTownId: 'us-pa-philadelphia',
    linkType: 'SHARED_EVENT',
    reason: 'The Continental Congress in Philadelphia enacted the Northwest Ordinance in 1787 and approved the Ohio Company land purchase that made Marietta possible; Philadelphia was the political capital that set the legal framework Marietta operated under.',
    weight: 85,
  },
  {
    toTownId: 'us-va-richmond',
    linkType: 'SHARED_PERSON',
    reason: 'Arthur St. Clair, first Governor of the Northwest Territory based at Marietta, had served as President of the Continental Congress and coordinated with Virginia\'s political leadership on the western land question before and after Marietta\'s founding.',
    weight: 65,
  },
  {
    toTownId: 'us-pa-pittsburgh',
    linkType: 'ROUTE',
    reason: 'Marietta was founded by settlers who traveled from Pittsburgh down the Ohio River; Pittsburgh (Fort Pitt) was the primary staging point for Northwest Territory settlement and the gateway through which Ohio Company settlers passed.',
    weight: 60,
  },
  {
    toTownId: 'us-wv-wheeling',
    linkType: 'ROUTE',
    reason: 'The Ohio River connected Marietta and Wheeling as the primary commercial and migration highway of the Northwest Territory; flatboats traveling from Pittsburgh passed Wheeling before reaching Marietta\'s confluence.',
    weight: 75,
  },
  {
    toTownId: 'us-pa-philadelphia',
    linkType: 'SHARED_PERSON',
    reason: 'Manasseh Cutler traveled from Massachusetts through Philadelphia to New York to lobby for the Northwest Ordinance in 1787; several Ohio Company founders had served in the Continental Army and attended Congress in Philadelphia.',
    weight: 70,
  },
];
