// MODEL: Claude Sonnet 4.6 (structure + code + historical synthesis)
// West Virginia Frontier: Wheeling WV — Full content sprint
// Campaign: Western Frontier Defense, 1774–1782

import { Prisma } from '@prisma/client';

/**
 * Wheeling, West Virginia
 *
 * Fort Henry at Wheeling stood as the anchor of the upper Ohio River frontier
 * throughout the Revolution. Established on the site of Ebenezer Zane's 1769
 * settlement, the fort endured two major sieges — in September 1777 and September
 * 1782. The 1782 siege is widely regarded as the last land battle of the
 * Revolutionary War. The legend of Betty Zane's run for gunpowder during that
 * final siege became one of the most celebrated stories of frontier heroism in
 * American memory, preserved in oral tradition and popularized by Zane Grey in
 * his 1903 novel.
 *
 * NOTE ON VERIFICATION: Historical content synthesized from Lyman Draper's
 * Draper Manuscripts (State Historical Society of Wisconsin), Consul W. Butterfield's
 * History of the Girtys (1890), Reuben Gold Thwaites and Louise P. Kellogg's
 * Frontier Defense on the Upper Ohio 1777–1778, Boyd Crumrine's History of
 * Washington County Pennsylvania (1882), and the West Virginia Archives and
 * History Division Revolutionary War records.
 */

// ============================================================================
// WHEELING — TOWN UPDATE
// ============================================================================

export const wheelingTownUpdate: Prisma.TownUpdateInput = {
  whyMatters: `Wheeling sits at the point where the Ohio River bends west and the Virginia backcountry met the continent's interior. Ebenezer Zane reached this ground in 1769 and planted a settlement that would grow into the most strategically important fortified position on the upper Ohio. When the Revolution came, Wheeling did not merely witness events from a distance — it was the frontier itself, the line where American territorial ambition and British-allied Native resistance met in a decade of raids, sieges, and grinding violence.

Fort Henry, constructed in 1774 at the outset of Lord Dunmore's War and rebuilt after the first siege, was attacked twice in the Revolutionary era. The first siege, in September 1777, saw a force of British rangers and Delaware, Mingo, and Wyandot warriors lay the fort under assault for nearly two days. The garrison held, but the outlying settlements were devastated. Five years later, in September 1782 — weeks after the preliminary peace articles had been agreed in Paris — a second force of British rangers under William Caldwell and Alexander McKee, with Wyandot and Delaware allies, struck Fort Henry again. This second siege is traditionally dated as the last land battle of the Revolutionary War. That it happened at all was testament to how completely the frontier war operated on a different timeline than the eastern theater.

The enduring legend of Wheeling belongs to Betty Zane, who, during the 1782 siege, allegedly ran from the fort to the nearby Zane cabin to retrieve a keg of gunpowder, carrying it back through British rifle fire in her apron. Whether the story is precisely accurate or embellished in transmission, it became one of the most celebrated accounts of female courage on the American frontier. Zane Grey — Betty's descendant — made it the foundation of his first novel in 1903. The story's grip on American memory reflects something real about what the frontier demanded of everyone who lived there, regardless of age or gender.`,
};

// ============================================================================
// WHEELING — PEOPLE
// ============================================================================

export const wheelingPeople: Array<{
  person: Prisma.PersonCreateInput;
  connectionNote: string;
}> = [
  {
    person: {
      id: 'person-wheeling-ebenezer-zane',
      name: 'Colonel Ebenezer Zane',
      roles: ['Frontier Settler', 'Fort Henry Founder', 'Virginia Militia Officer'],
      bioShort:
        'Virginia-born frontiersman who founded Wheeling in 1769 and built the first permanent settlement on the site of Fort Henry. He organized and commanded the defense of Fort Henry during both the 1777 and 1782 sieges. After the war he negotiated Zane\'s Trace, a road through Ohio that opened the interior. His three brothers all fought at Fort Henry.',
      birthYear: 1747,
      deathYear: 1812,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Founder of Wheeling and commander of Fort Henry\'s defense through both the 1777 and 1782 sieges; his family\'s commitment to the garrison shaped every aspect of Wheeling\'s Revolutionary experience.',
  },
  {
    person: {
      id: 'person-wheeling-silas-zane',
      name: 'Silas Zane',
      roles: ['Frontier Settler', 'Fort Henry Defender', 'Virginia Militia'],
      bioShort:
        'Younger brother of Ebenezer Zane who fought alongside his family at Fort Henry during both sieges. Silas was one of the garrison\'s experienced riflemen and helped maintain the defense during the extended September 1777 engagement when the outer settlements had already fallen to the attacking force.',
      birthYear: 1749,
      deathYear: 1821,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Served as a key member of the Fort Henry garrison alongside his brothers; his frontier experience with the rifle was essential to the successful defense.',
  },
  {
    person: {
      id: 'person-wheeling-jonathan-zane',
      name: 'Jonathan Zane',
      roles: ['Frontier Scout', 'Fort Henry Defender', 'Scout and Ranger'],
      bioShort:
        'Brother of Ebenezer Zane and one of the most skilled scouts on the upper Ohio frontier. Jonathan operated as an intelligence gatherer and ranger, repeatedly scouting the approaches to Wheeling and carrying warning of approaching enemy forces. His woodcraft was critical to the garrison\'s ability to anticipate attacks.',
      birthYear: 1753,
      deathYear: 1823,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Served as principal scout for Fort Henry throughout the war; his ability to read the frontier and gather intelligence made him one of Wheeling\'s most important defenders.',
  },
  {
    person: {
      id: 'person-wheeling-betty-zane',
      name: 'Elizabeth "Betty" Zane',
      roles: ['Frontier Heroine', 'Popular Legend', 'Zane Family Member'],
      bioShort:
        'Sister of Ebenezer Zane, celebrated in oral tradition for running from Fort Henry to the nearby Zane cabin during the 1782 siege to retrieve a keg of gunpowder, carrying it back through British rifle fire wrapped in her apron or tablecloth. The story\'s specific details vary across sources and cannot be independently verified, but early accounts from frontier survivors support the core tradition. Zane Grey made her the heroine of his 1903 novel Betty Zane.',
      birthYear: 1759,
      deathYear: 1823,
      verificationStatus: 'ORAL_TRADITION',
    },
    connectionNote:
      'The most celebrated figure from the 1782 siege; her legendary gunpowder run preserved frontier memory of Fort Henry and became a defining story of American female courage on the frontier.',
  },
  {
    person: {
      id: 'person-wheeling-david-shepherd',
      name: 'Colonel David Shepherd',
      roles: ['Virginia Militia Commander', 'Ohio County Lieutenant', 'Fort Henry Commandant'],
      bioShort:
        'Virginia militia colonel and Lieutenant of Ohio County who held overall military authority for the Wheeling area during the Revolution. Shepherd commanded or coordinated the defense during the 1777 siege and organized the regional militia response to frontier attacks throughout the war. His administrative role made him the key link between Wheeling\'s garrison and the Virginia government.',
      birthYear: 1734,
      deathYear: 1795,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Ohio County Lieutenant and senior Virginia militia officer at Wheeling; his authority over the regional defense and his coordination with the Virginia government were essential to sustaining the Fort Henry garrison through the war.',
  },
  {
    person: {
      id: 'person-wheeling-andrew-swearingen',
      name: 'Captain Andrew Swearingen',
      roles: ['Virginia Militia Captain', 'Fort Henry Garrison Officer'],
      bioShort:
        'Virginia militia captain who served at Fort Henry and commanded one of the garrison\'s companies during the 1777 siege. Swearingen\'s company formed part of the core defensive force that held the fort when the surrounding settlement had been overrun. He continued to serve on the upper Ohio frontier through the later years of the war.',
      birthYear: 1745,
      deathYear: 1806,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Commanded a Virginia militia company at Fort Henry during the 1777 siege; one of the garrison officers whose leadership helped hold the fort against a numerically superior attacking force.',
  },
  {
    person: {
      id: 'person-wheeling-william-caldwell',
      name: 'Captain William Caldwell',
      roles: ['British Ranger Officer', '1782 Siege Commander', 'Butler\'s Rangers'],
      bioShort:
        'British ranger officer who commanded the 1782 expedition against Fort Henry alongside Alexander McKee. Caldwell led Butler\'s Rangers supplemented by Wyandot and Delaware warriors. His force attacked the fort on September 11–13, 1782, in what would prove to be the last significant land battle of the Revolutionary War. He failed to take the fort and withdrew after the garrison held.',
      birthYear: 1745,
      deathYear: 1822,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'Led the British and Native allied force that besieged Fort Henry in September 1782; his failed assault defined Wheeling\'s place in history as the site of the last land battle of the Revolution.',
  },
  {
    person: {
      id: 'person-wheeling-lewis-wetzel',
      name: 'Lewis Wetzel',
      roles: ['Frontier Ranger', 'Scout', 'Fort Henry Defender'],
      bioShort:
        'Legendary Virginia frontier ranger known across the upper Ohio Valley for his extraordinary skill as a rifleman and his relentless pursuit of Native raiding parties. Wetzel operated near Wheeling throughout the Revolution and was present during the Fort Henry engagements. His reputation combined genuine martial skill with a ferocity born of personal loss — Delaware warriors had killed his father and brother.',
      birthYear: 1763,
      deathYear: 1808,
      verificationStatus: 'VERIFIED',
    },
    connectionNote:
      'One of the most celebrated frontier rangers on the upper Ohio; associated with Fort Henry\'s defense and the surrounding area throughout the war; his story embodies the personal dimension of the frontier conflict.',
  },
];

// ============================================================================
// WHEELING — PLACES
// ============================================================================

export const wheelingPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'place-wheeling-fort-henry-site',
    name: 'Fort Henry Site (Wheeling Heritage Port Area)',
    placeType: 'BATTLEFIELD',
    description:
      'Fort Henry was constructed in 1774 on a hill above the Ohio River at the site of Ebenezer Zane\'s settlement. It was the westernmost Virginia fort on the upper Ohio and the anchor of frontier defense for the region throughout the Revolution. The fort endured two sieges — in September 1777 and September 1782. The 1782 siege is recognized as the last land battle of the Revolutionary War. The site is within the modern Wheeling Heritage Port area; a historical marker commemorates the fort\'s location near the riverfront.',
    lat: 40.0640,
    lng: -80.7209,
    address: 'Heritage Port, Wheeling, WV 26003',
    town: { connect: { id: 'us-wv-wheeling' } },
  },
  {
    id: 'place-wheeling-independence-hall',
    name: 'West Virginia Independence Hall',
    placeType: 'GOVERNMENT',
    description:
      'While constructed in 1859 as the Wheeling Custom House, this building served as the site of the Wheeling Conventions of 1861 that created the state of West Virginia during the Civil War. Its location at the heart of Wheeling connects the town\'s Revolutionary-era role as a frontier Virginia garrison to its later significance as the birthplace of a new state. The building is now a National Park Service site and museum interpreting both the Civil War and the broader history of Wheeling.',
    lat: 40.0632,
    lng: -80.7212,
    address: '1528 Market St, Wheeling, WV 26003',
    hours: 'Mon–Sat 9am–5pm; closed Sunday and federal holidays',
    website: 'https://www.nps.gov/wein',
    town: { connect: { id: 'us-wv-wheeling' } },
  },
  {
    id: 'place-wheeling-ohio-river-landing',
    name: 'Ohio River Landing and Heritage Port',
    placeType: 'LANDMARK',
    description:
      'The Ohio River at Wheeling was the strategic reality that determined why a fort was built here. Whoever controlled this stretch of river controlled movement between Virginia and the interior. During the Revolution, the Ohio River was simultaneously a supply route, a military highway, and a contested boundary between American settlement and Native-held territory. The modern Heritage Port area preserves access to the riverfront and interprets Wheeling\'s frontier history.',
    lat: 40.0635,
    lng: -80.7200,
    address: 'Heritage Port, Wheeling, WV 26003',
    town: { connect: { id: 'us-wv-wheeling' } },
  },
  {
    id: 'place-wheeling-creek-confluence',
    name: 'Wheeling Creek Confluence',
    placeType: 'LANDMARK',
    description:
      'Wheeling Creek flows into the Ohio River just south of the original Fort Henry site. The creek valley provided the primary approach route from the Virginia interior toward the fort and was the path along which settler families fleeing raids sought refuge. During the 1777 siege, families caught outside the fort were killed or captured in the settlements along the creek. The confluence remains visible today as a geographic feature that shaped all movement in and out of the original settlement.',
    lat: 40.0600,
    lng: -80.7195,
    address: 'Wheeling Creek at Ohio River, Wheeling, WV 26003',
    town: { connect: { id: 'us-wv-wheeling' } },
  },
  {
    id: 'place-wheeling-zane-grey-museum',
    name: 'Zane Grey Birthplace and Museum (Zanesville, OH — regional connection)',
    placeType: 'MUSEUM',
    description:
      'Pearl Zane Grey, great-grandnephew of Ebenezer Zane, was born in Zanesville, Ohio — a town Ebenezer Zane founded at the end of Zane\'s Trace. Zane Grey\'s 1903 novel Betty Zane was the first of his western novels and drew directly on family oral tradition about the 1782 siege of Fort Henry. Though the museum is in Zanesville, its content is inseparable from Wheeling\'s Revolutionary history. It preserves the literary transmission of the Betty Zane legend and Zane family frontier history.',
    lat: 39.9401,
    lng: -82.0132,
    address: '135 Jefferson St, Zanesville, OH 43701',
    town: { connect: { id: 'us-wv-wheeling' } },
  },
  {
    id: 'place-wheeling-grave-creek-mound',
    name: 'Grave Creek Mound Archaeological Complex (Moundsville, WV)',
    placeType: 'LANDMARK',
    description:
      'Located nine miles south of Wheeling in Moundsville, the Grave Creek Mound is one of the largest Adena burial mounds in North America, built around 250–150 BC. During the Revolution, the mound was a recognized landmark that settlers and military commanders used for orientation in the upper Ohio Valley. Its presence reminded all parties — American, British, and Native — that the Ohio Valley had been home to complex civilizations long before European contact. The adjacent Delf Norona Museum interprets the mound and its context.',
    lat: 39.9198,
    lng: -80.7428,
    address: '801 Jefferson Ave, Moundsville, WV 26041',
    hours: 'Mon–Sat 10am–4:30pm, Sun 1pm–5pm',
    website: 'https://www.wvculture.org/museums/gravecreek',
    town: { connect: { id: 'us-wv-wheeling' } },
  },
  {
    id: 'place-wheeling-fort-henry-monument',
    name: 'Fort Henry Memorial Monument',
    placeType: 'MONUMENT',
    description:
      'A historical marker and small memorial commemorating Fort Henry and the 1782 siege stands in the Wheeling area near the original fort site. The monument recognizes Wheeling\'s place in Revolutionary War history as the site of the war\'s last land battle and honors the garrison that held the frontier line. Local historical societies have maintained interpretation of this site as a way of keeping the frontier dimension of the Revolution visible in American memory.',
    lat: 40.0642,
    lng: -80.7215,
    address: 'Near Heritage Port, Wheeling, WV 26003',
    town: { connect: { id: 'us-wv-wheeling' } },
  },
];

// ============================================================================
// WHEELING — EVENTS
// ============================================================================

export const wheelingEvents: Prisma.EventCreateInput[] = [
  {
    id: 'event-wheeling-zane-settlement-1769',
    name: 'Ebenezer Zane Founds Wheeling Settlement',
    startDate: new Date('1769-01-01'),
    datePrecision: 'YEAR',
    summary:
      'In 1769, Ebenezer Zane and his brothers made their way down the Ohio River and established a permanent settlement at the site that would become Wheeling. The location was chosen with a frontiersman\'s eye: a bend in the Ohio River provided a natural defensive position, Wheeling Creek offered fresh water and an approach from the interior, and the site commanded river traffic in both directions.\n\nZane\'s settlement was not the first white presence in the upper Ohio Valley, but it was the first stable permanent one at this location. Over the following years, Zane built a substantial log house, cleared land, and attracted other settlers. When the Revolution came and Virginia organized its frontier defenses, Zane\'s settlement was already the logical site for a fort. Fort Henry, when it was built in 1774, was essentially Zane\'s compound fortified and garrisoned.',
    significanceWeight: 70,
    lat: 40.0640,
    lng: -80.7209,
    town: { connect: { id: 'us-wv-wheeling' } },
  },
  {
    id: 'event-wheeling-lord-dunmores-war-1774',
    name: 'Lord Dunmore\'s War and Fort Henry Construction',
    startDate: new Date('1774-06-01'),
    datePrecision: 'MONTH',
    summary:
      'In the summer of 1774, escalating violence between Virginia settlers and Native peoples of the upper Ohio Valley — particularly the Shawnee and Mingo — led Virginia Governor Lord Dunmore to organize a military campaign. As part of the preparations, Virginia ordered the construction of Fort Fincastle (later renamed Fort Henry) at Wheeling to protect settlers and serve as a staging point for military operations.\n\nThe campaign culminated at the Battle of Point Pleasant in October 1774, where a Virginia militia force under Andrew Lewis defeated a Shawnee force under Cornstalk. The result was the Treaty of Camp Charlotte, in which the Shawnee ceded their hunting grounds south of the Ohio River. Fort Henry, built for this crisis, remained standing as the essential garrison on the upper Ohio throughout the coming Revolution. Lord Dunmore\'s War set the terms of conflict that would shape the entire Revolutionary period in the Ohio Valley.',
    significanceWeight: 75,
    lat: 40.0640,
    lng: -80.7209,
    town: { connect: { id: 'us-wv-wheeling' } },
  },
  {
    id: 'event-wheeling-fort-renamed-henry-1776',
    name: 'Fort Fincastle Renamed Fort Henry',
    startDate: new Date('1776-01-01'),
    datePrecision: 'YEAR',
    summary:
      'With the outbreak of the Revolution, the fort at Wheeling was renamed from Fort Fincastle — honoring Lord Dunmore\'s son — to Fort Henry, honoring Patrick Henry, the Patriot governor of Virginia. The renaming was symbolic but significant: it marked Wheeling\'s formal alignment with the revolutionary cause and the erasure of royal nomenclature from the frontier garrison.\n\nThe fort at this point was a standard log palisade with blockhouses at the corners, capable of housing a garrison of forty to sixty soldiers and providing refuge for the surrounding settler families during an attack. Ebenezer Zane\'s family cabin sat just outside the main palisade — a detail that would become central to the 1782 siege legend.',
    significanceWeight: 55,
    lat: 40.0640,
    lng: -80.7209,
    town: { connect: { id: 'us-wv-wheeling' } },
  },
  {
    id: 'event-wheeling-first-siege-1777',
    name: 'First Siege of Fort Henry — September 1777',
    startDate: new Date('1777-09-01'),
    datePrecision: 'MONTH',
    summary:
      'On September 1, 1777, a force estimated at 350–400 warriors from Delaware, Mingo, and Wyandot nations, accompanied by British rangers, attacked the Wheeling settlement. A scouting party of about fourteen men rode out to reconnoiter the approaching force and was ambushed; most were killed. The survivors fled to the fort, and the garrison — now reduced and alarmed — prepared for the assault.\n\nThe siege lasted approximately two days. The attackers burned the outlying cabins and killed settlers who had not reached the fort in time, but Fort Henry held. Ebenezer Zane and David Shepherd coordinated the defense. The garrison\'s accurate rifle fire from the blockhouses prevented the attackers from breaching the palisade. When the attack was lifted, Wheeling had survived, but the human cost in the surrounding settlement was severe. The 1777 siege demonstrated that Fort Henry could hold — but only if the garrison fought effectively and the settlers got inside the walls in time.',
    significanceWeight: 85,
    lat: 40.0640,
    lng: -80.7209,
    town: { connect: { id: 'us-wv-wheeling' } },
  },
  {
    id: 'event-wheeling-frontier-raids-1778',
    name: 'Continuous Frontier Raids Along the Upper Ohio — 1778',
    startDate: new Date('1778-01-01'),
    datePrecision: 'YEAR',
    summary:
      'The year 1778 saw near-continuous raiding along the upper Ohio Valley frontier. British agents operating from Detroit — most notably Henry Hamilton, known as "the Hair Buyer" for his alleged practice of paying for American scalps — organized and supplied Native raiding parties that struck repeatedly at settlements in the Wheeling area and throughout western Virginia and Pennsylvania.\n\nFort Henry served as the refugee point for families caught in these raids. The garrison\'s strength fluctuated as Virginia struggled to maintain adequate forces on the distant frontier while also meeting demands from Washington\'s Continental Army in the east. Jonathan Zane\'s scouting operations were essential during this period: his ability to detect approaching raiding parties and carry warning to the settlements saved many lives. The pressure of 1778 shaped the frontier population\'s understanding of the war as a permanent state of emergency rather than a series of discrete military events.',
    significanceWeight: 72,
    lat: 40.0640,
    lng: -80.7209,
    town: { connect: { id: 'us-wv-wheeling' } },
  },
  {
    id: 'event-wheeling-sullivan-clinton-campaign-1779',
    name: 'Sullivan-Clinton Campaign Context — 1779',
    startDate: new Date('1779-06-01'),
    datePrecision: 'MONTH',
    summary:
      'In 1779, Washington authorized the Sullivan-Clinton Campaign — a major military expedition into the Iroquois homeland in New York — to break the British-allied confederacy that had been raiding the frontier from New York to the Ohio Valley. Though Wheeling itself was not directly involved in the campaign, its strategic logic applied equally to the upper Ohio: the raids that kept Fort Henry under constant threat were coordinated from British Detroit and required British logistical support.\n\nThe Sullivan-Clinton expedition devastated the Iroquois homeland and disrupted the British-Native alliance in the north. The upper Ohio Valley experienced some reduction in raid pressure in the immediate aftermath. But the British base at Detroit remained intact, and the fundamental strategic situation — British rangers and Native allies able to strike from north of the Ohio — persisted until the war\'s end. Wheeling\'s garrison could not stand down.',
    significanceWeight: 65,
    lat: 40.0640,
    lng: -80.7209,
    town: { connect: { id: 'us-wv-wheeling' } },
  },
  {
    id: 'event-wheeling-brodhead-expedition-1781',
    name: 'Colonel Brodhead\'s Expedition and Frontier Coordination',
    startDate: new Date('1781-04-01'),
    datePrecision: 'MONTH',
    summary:
      'Throughout 1780–1781, Continental Army Colonel Daniel Brodhead commanded the Western Department from Fort Pitt and conducted counter-offensive operations against the Lenape (Delaware) villages on the Muskingum River. Wheeling and Fort Henry were critical waypoints in Brodhead\'s operational planning — the fort served as a staging area and supply depot for expeditions into the Ohio country.\n\nThe relationship between Fort Henry\'s garrison and the Continental command structure at Fort Pitt was complicated: Wheeling\'s defenders were primarily Virginia militia under David Shepherd\'s authority, not Continental regulars. Coordination between the two command structures was often imperfect. But the presence of a Continental strategic force north of Wheeling at Fort Pitt, however strained the relationship, provided some depth to the frontier defense that the isolated garrison could not have maintained alone.',
    significanceWeight: 68,
    lat: 40.0640,
    lng: -80.7209,
    town: { connect: { id: 'us-wv-wheeling' } },
  },
  {
    id: 'event-wheeling-gnadenhutten-massacre-1782',
    name: 'Gnadenhutten Massacre and Its Aftermath — March 1782',
    startDate: new Date('1782-03-08'),
    datePrecision: 'DAY',
    summary:
      'On March 8, 1782, Pennsylvania militia under Colonel David Williamson murdered approximately 96 Christianized Delaware men, women, and children at the Moravian mission village of Gnadenhutten in present-day Ohio. The victims were pacifist converts who had no part in frontier raids; the militia killed them anyway, claiming revenge for earlier attacks on white settlements.\n\nThe Gnadenhutten massacre poisoned relations between the American settler population and all Native peoples of the Ohio Valley, including those who had sought accommodation with the Americans. It enraged the Delaware and Wyandot nations and directly contributed to the planning of the September 1782 expedition against Fort Henry: the attack on Wheeling was, in part, a response to Gnadenhutten. The massacre therefore created the very attack it was supposedly retaliating for, in an illustration of how frontier violence generated more frontier violence in an escalating cycle that neither side could break.',
    significanceWeight: 80,
    lat: 40.4476,
    lng: -81.4296,
    town: { connect: { id: 'us-wv-wheeling' } },
  },
  {
    id: 'event-wheeling-second-siege-1782',
    name: 'Second Siege of Fort Henry — The Last Battle of the Revolution',
    startDate: new Date('1782-09-11'),
    datePrecision: 'DAY',
    summary:
      'On September 11, 1782, Captain William Caldwell commanding Butler\'s Rangers and a force of Wyandot and Delaware warriors led by Matthew Elliott and Alexander McKee descended on Wheeling and began the second siege of Fort Henry. The attacking force numbered at least 250 and possibly 300 or more; the garrison inside Fort Henry was small — estimates range from twelve to forty effective defenders, with settlers crowded inside.\n\nThe siege lasted three days. On September 13, during one of the most critical moments of the defense — when the garrison\'s powder supply was running low — someone ran from the fort to Ebenezer Zane\'s cabin outside the palisade to retrieve a keg of gunpowder. The tradition holds this was Betty Zane, Ebenezer\'s teenage sister. Whether Betty or another person made the run, the powder was retrieved and the siege continued. Caldwell, unable to take the fort by direct assault and lacking artillery to breach the walls, withdrew his force on September 13.\n\nThe engagement at Fort Henry on September 11–13, 1782, is generally recognized as the last land battle of the American Revolutionary War. The preliminary peace articles had been signed in Paris on November 30, 1781, and the formal Treaty of Paris would be signed in September 1783. Caldwell and his allies did not know this, or if they knew, did not consider it binding on a war that had never formally reached the western frontier.',
    significanceWeight: 95,
    lat: 40.0640,
    lng: -80.7209,
    town: { connect: { id: 'us-wv-wheeling' } },
  },
  {
    id: 'event-wheeling-betty-zane-gunpowder-run',
    name: 'Betty Zane\'s Gunpowder Run (Traditional Account)',
    startDate: new Date('1782-09-12'),
    datePrecision: 'DAY',
    summary:
      'According to the tradition preserved in frontier memory and first published in detail by Zane Grey in his 1903 novel Betty Zane, during the second siege of Fort Henry in September 1782, the garrison\'s powder supply ran dangerously low. A volunteer was needed to run from the fort to the Zane cabin outside the palisade, retrieve a keg of gunpowder, and return under British and Native rifle fire.\n\nBetty Zane, approximately nineteen years old at the time, is said to have volunteered — arguing that the garrison could not afford to lose a fighting man. She ran to the cabin, filled her apron (or tablecloth, in some versions) with powder, and ran back through gunfire to reach the fort. Some accounts say the attackers held fire briefly, not believing a young woman was carrying something militarily significant; other accounts say she was fired upon and somehow reached the gate unharmed.\n\nThe specific details vary in early accounts, and the story cannot be independently verified at the level of primary documentation. The Draper Manuscripts contain recollections from frontier survivors that support the general tradition, though not uniformly. Betty Zane herself left no written account. The story\'s durability reflects both the genuine drama of the 1782 siege and the cultural work it did in preserving the memory of women\'s contributions to frontier survival.',
    significanceWeight: 82,
    lat: 40.0640,
    lng: -80.7209,
    town: { connect: { id: 'us-wv-wheeling' } },
  },
  {
    id: 'event-wheeling-treaty-paris-frontier-silence',
    name: 'Treaty of Paris and the Frontier\'s Uncertain Peace — 1783',
    startDate: new Date('1783-09-03'),
    datePrecision: 'DAY',
    summary:
      'The Treaty of Paris, signed September 3, 1783, ended the Revolutionary War and ceded British territorial claims east of the Mississippi to the United States. From the perspective of Fort Henry and the upper Ohio frontier, the formal peace was almost irrelevant in the short term. The British evacuated Detroit slowly; Native peoples of the Ohio Valley had not been parties to the treaty and did not consider themselves bound by its terms; and the raiding that had characterized the frontier throughout the war continued intermittently into the 1790s.\n\nWheeling\'s garrison stood down gradually rather than suddenly. The formal end of the war did not immediately transform the Ohio Valley into safe American territory. It took Mad Anthony Wayne\'s decisive victory at the Battle of Fallen Timbers in 1794 and the subsequent Treaty of Greenville to actually pacify the upper Ohio frontier. For Wheeling, the Revolution did not end in 1783 — it ended in 1795, when the strategic reality matched the diplomatic settlement.',
    significanceWeight: 70,
    lat: 40.0640,
    lng: -80.7209,
    town: { connect: { id: 'us-wv-wheeling' } },
  },
];

// ============================================================================
// WHEELING — STORIES
// ============================================================================

export const wheelingStories: Prisma.StoryCreateInput[] = [
  {
    id: 'story-wheeling-betty-zane-run',
    title: 'The Run for Powder: Betty Zane and the Last Defense',
    storyType: 'HISTORICAL_VOICE',
    verificationStatus: 'ORAL_TRADITION',
    textVersion: `The powder was almost gone. Inside Fort Henry on the morning of September 12, 1782, Ebenezer Zane and the other defenders understood what that meant. They had held through a day and a night. The attacking force — Captain William Caldwell's British rangers and their Wyandot and Delaware allies — numbered somewhere between two hundred and fifty and three hundred. The garrison inside the fort counted perhaps twelve to forty effective fighters, depending on which account you read, plus the women and children crowded into the blockhouses. They had done what frontier soldiers were trained to do: fire deliberately, conserve ammunition, never show the full weakness of their numbers.

But powder was not something you could substitute or stretch. When it was gone, the rifles were clubs.

There was a keg in the Zane cabin, thirty yards outside the palisade gate. Thirty yards is not a long distance under most circumstances. Under fire from a force that had spent the night working into positions in the weeds and behind stumps and fallen logs, with riflemen who could kill a man at two hundred yards with a good eye and a steady hand, thirty yards was the longest distance imaginable.

The question was who would go. The garrison could not spare a fighting man — every rifle behind the palisade was the difference between holding and not holding. What they needed, someone said, was a volunteer the enemy might hesitate over. Someone who did not look like a soldier.

Betty Zane stepped forward.

She was Ebenezer's sister, nineteen years old, recently returned from a period in Philadelphia where she had received more formal schooling than most frontier girls of her generation. She had been trapped in the fort with the rest of the non-combatants when the attack began. She was not a soldier. She was not armed. She was exactly the kind of person the garrison could not afford to lose in an exchange of fire — but also exactly the kind of person who might make the enemy pause.

The gate opened. Betty walked out.

What happened in the next thirty yards depends on the account. The version Zane Grey collected from family oral tradition and published in his 1903 novel says that the British and Native attackers held fire briefly, puzzled by a young woman walking out of the fort apparently unarmed. By the time they realized what she was doing — by the time she had reached the cabin, scooped the powder into her tablecloth, and bundled it against her body — she was already running back. Then the firing started.

She made it.

Other versions say she was fired on immediately and ran the whole way under continuous fire. Some accounts name a different person — a young male cousin — as the actual courier. The earliest written accounts are confused, the oral tradition is fragmented, and Betty Zane herself left no written record. Lyman Draper, the great collector of frontier history who spent decades interviewing Ohio Valley survivors in the 1840s and 1850s, found conflicting testimony. He recorded it carefully and honestly and could not resolve it.

What is not in dispute is this: the powder made it back into the fort. The defense continued. On September 13, Caldwell withdrew without having taken Fort Henry. The last major land battle of the American Revolutionary War ended with the garrison alive.

Whether Betty Zane carried that powder or someone else did, the tradition attached itself to her name and has not let go. It attached itself because it was true to something the frontier required of everyone who lived there. Survival on the upper Ohio in 1782 did not permit anyone to stay out of the fight because of age or sex. Everyone who was in the fort that September contributed to the defense in whatever way they could. The tradition of Betty's run is the frontier's own account of that reality, told in the form of a single story about a single act of courage.

Zane Grey — Pearl Zane Grey, Betty's great-grandnephew, born in Zanesville, Ohio, on a road that Ebenezer Zane cut through the wilderness — wrote the story down in 1903. It was his first novel, and he told it as a family history as much as a literary exercise. Whatever liberties the novel took with the specifics, it preserved something the frontier community already knew: that Fort Henry held in 1782 because everyone inside it, including the women, did what had to be done.

The war was over. The garrison did not know it. They fought as if everything depended on the next hour, because in their understanding, it did.`,
    tags: ['Fort Henry', 'Betty Zane', '1782 siege', 'frontier defense', 'women in the Revolution', 'oral tradition'],
    town: { connect: { id: 'us-wv-wheeling' } },
  },
  {
    id: 'story-wheeling-last-battle',
    title: 'After Yorktown: The War the Peace Treaty Couldn\'t End',
    storyType: 'MODERN_VOICE',
    verificationStatus: 'VERIFIED',
    textVersion: `Most Americans know how the Revolutionary War ended: Cornwallis surrendered at Yorktown in October 1781, the British gave up, and the new United States was born. This is true and also incomplete. What it leaves out is the western frontier, where the war ended roughly a year later, in a small fort above the Ohio River, at a place called Wheeling.

The disconnect between the eastern narrative of the Revolution and the western reality is one of the stranger features of how we remember the war. In the east, the conflict had a beginning, a middle, and an end that most people can name. In the west — in the Ohio Valley, in Kentucky, in what would become West Virginia — the war was a permanent condition of life that had no clean beginning and no clean end. It started, for practical purposes, before the Declaration of Independence, with Lord Dunmore's War in 1774. It continued past Yorktown. It was still happening, in reduced form, when the Treaty of Paris was signed in September 1783, and in some areas it continued intermittently until Anthony Wayne's victory at Fallen Timbers in 1794.

Fort Henry at Wheeling was the anchor of the upper Ohio defense throughout this period. Ebenezer Zane had settled the site in 1769, and when Virginia built a fort there in 1774, the fort was essentially Zane's compound enlarged and given palisade walls. The garrison was always small — Virginia was fighting a war on multiple fronts and could not spare large forces for the western frontier. What Fort Henry had, instead of numbers, was experienced riflemen, a family of frontiersmen who knew the ground, and a population of settlers who understood that the fort was the only alternative to death or captivity.

The fort survived two sieges: September 1777 and September 1782. The 1782 siege came eleven months after Cornwallis surrendered. It came two months after preliminary peace articles had been agreed in Paris. Captain William Caldwell and his force of British rangers and Wyandot and Delaware warriors did not know this, or if they knew, did not consider it relevant to what was happening on the upper Ohio.

From their perspective, they were entirely rational. The Treaty of Paris was an agreement between Britain and the United States. The Native peoples of the Ohio Valley were not signatories. No one had asked them if they agreed to cede the Ohio country to the Americans. The raids on American settlements had not been unprovoked: the Gnadenhutten massacre of March 1782, in which Pennsylvania militia murdered ninety-six Christianized Delaware people who had nothing to do with frontier raids, had demonstrated that the American settler population did not distinguish between hostile and friendly Native people. The attack on Fort Henry was, in part, a response.

This context does not simplify the story. The garrison at Fort Henry was trying to survive. The attacking force was trying to end American settlement in the Ohio Valley before the diplomatic situation made it impossible to do so. Both sides had reasons that made sense from where they stood.

What we can say, with some confidence, is that Fort Henry held on September 13, 1782, when Caldwell withdrew, and that no major engagement between American and British-allied Native forces followed it. The campaign of September 1782 was the last large-scale offensive operation on the upper Ohio frontier during the Revolutionary era. By the usual measures historians use to define "last battles" — last major engagement, last significant casualties, last attempt by British-directed forces to reverse the outcome of the eastern war — Fort Henry in September 1782 qualifies.

The people who held it did not know they were fighting the last battle of the Revolution. They were just fighting. That is, in itself, a kind of truth about what the frontier war was: not a series of discrete historical events with clear beginnings and endings, but a continuous state of emergency that required continuous vigilance and continuous courage. The formal peace, when it came, did not immediately change that reality. It just meant that the vigilance was beginning, very slowly, to be enough.

Wheeling is a small city now, overshadowed in size and history by Pittsburgh forty miles to the northeast. But the Ohio River still bends at the same place it bent in 1782, and the ground above the river is the same ground where Ebenezer Zane's garrison held the line of the American frontier against the last British-organized offensive of the Revolutionary War. That is not a small thing. It is just not the story most Americans grew up hearing.`,
    tags: ['Fort Henry', '1782 siege', 'last battle', 'frontier defense', 'Ohio Valley', 'western theater'],
    town: { connect: { id: 'us-wv-wheeling' } },
  },
];

// ============================================================================
// WHEELING — LESSON PLANS
// ============================================================================

export const wheelingLessonPlans: Prisma.LessonPlanCreateInput[] = [
  {
    town: { connect: { id: 'us-wv-wheeling' } },
    title: 'The Last Battle: Fort Henry and the Frontier Revolution',
    gradeRange: '8-12',
    estimatedDuration: '2 class periods',
    summary:
      'This lesson uses the 1782 siege of Fort Henry to challenge students to think about how and why wars end — or fail to end — and about the gap between diplomatic history and lived experience. Students examine why the Revolutionary War\'s formal conclusion at Yorktown did not end the conflict on the western frontier, analyze the causes and consequences of the Gnadenhutten massacre and the 1782 siege, and consider what it means to describe Fort Henry as the site of the "last battle" of the Revolution.',
    lessonData: {
      objectives: [
        'Students will explain why the upper Ohio Valley frontier continued to experience violent conflict after Cornwallis\'s surrender at Yorktown in October 1781',
        'Students will analyze the connection between the Gnadenhutten massacre (March 1782) and the September 1782 siege of Fort Henry',
        'Students will evaluate the claim that Fort Henry was the site of the "last battle" of the Revolutionary War, considering what criteria define a "last battle"',
        'Students will compare the eastern and western narratives of the Revolution and explain why they differ',
      ],
      essentialQuestions: [
        'When does a war actually end — when political leaders sign treaties, or when fighting stops?',
        'Who was not represented in the peace settlement at Paris, and what were the consequences of that exclusion?',
        'How does geography shape military experience, and why did the frontier war follow a different timeline than the eastern theater?',
      ],
      materials: [
        'Map of the upper Ohio Valley showing Fort Henry, Fort Pitt, and Gnadenhutten',
        'Excerpt: Treaty of Paris (1783), Article II on western territorial boundaries',
        'Background reading: Gnadenhutten massacre, March 1782 (from NPS or academic source)',
        'Timeline: Eastern theater events (Yorktown, preliminary peace) vs. frontier events (1782 siege)',
        'Primary source excerpt: Draper Manuscripts recollection of the 1782 siege (adapted for classroom)',
      ],
      activities: [
        {
          name: 'Two Timelines, One War',
          duration: '20 minutes',
          description:
            'Students work in pairs to create a dual timeline: one track follows the eastern theater from Yorktown (Oct 1781) through the Treaty of Paris (Sept 1783); the other tracks the frontier from the Gnadenhutten massacre (March 1782) through the second siege of Fort Henry (Sept 1782). Students annotate connections between the two tracks — where does one event influence the other? Where are the timelines completely disconnected? Class discussion: what does it mean that both tracks are part of the same "war"?',
        },
        {
          name: 'Gnadenhutten and Fort Henry: Cause and Effect',
          duration: '25 minutes',
          description:
            'Students read a short account of the Gnadenhutten massacre and the Delaware and Wyandot response. They then read a description of the 1782 Fort Henry siege. Using a structured cause-effect graphic organizer, students map the connections: what grievances drove Caldwell\'s expedition? What did the attacking force hope to achieve? What prevented them from achieving it? Students consider: is the concept of "cause and effect" too simple to describe how frontier violence worked? What other models might explain it?',
        },
        {
          name: 'Defining the Last Battle',
          duration: '20 minutes',
          description:
            'Small groups are given three competing claims for the "last battle" of the Revolutionary War: (1) Yorktown, October 1781; (2) Fort Henry, September 1782; (3) Fallen Timbers, August 1794. Each group argues for their assigned answer using criteria they develop themselves (last major engagement, last death, last organized British action, etc.). Class votes on criteria and discusses how the definition of "last" shapes what we choose to remember about the war.',
        },
      ],
      assessment:
        'Students write a 3–4 paragraph essay responding to: "The Treaty of Paris ended the Revolutionary War in 1783, but for some Americans the war did not end until years later. Explain this claim using at least two specific historical examples, and evaluate whether the frontier experience changes our understanding of the Revolution\'s conclusion."',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.9-10.1: Cite specific textual evidence to support analysis of primary and secondary sources',
        'CCSS.ELA-LITERACY.RH.9-10.6: Compare the point of view of two or more authors for how they treat the same or similar topics',
        'CCSS.ELA-LITERACY.WHST.9-10.1: Write arguments focused on discipline-specific content',
      ],
      c3Framework: [
        'D2.His.1.9-12: Evaluate how historical events and developments were shaped by unique circumstances of time and place as well as broader historical contexts',
        'D2.His.5.9-12: Analyze how historical contexts shaped and continue to shape people\'s perspectives',
        'D2.His.14.9-12: Analyze multiple and complex causes and effects of events in the past',
        'D2.Geo.2.9-12: Use geographic concepts and geospatial data to explain relationships and patterns across time and place',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 1,
  },
  {
    town: { connect: { id: 'us-wv-wheeling' } },
    title: 'Betty Zane: Legend, History, and How Stories Work',
    gradeRange: '6-8',
    estimatedDuration: '50 minutes',
    summary:
      'This lesson uses the Betty Zane tradition to teach students about how historical legends form, how oral history preserves and transforms events, and how historians evaluate sources of different types. Students examine multiple versions of the gunpowder run story, consider why the tradition attached to Betty Zane specifically, and develop their own criteria for evaluating what makes a historical account credible. The lesson also introduces students to the frontier context of the 1782 siege.',
    lessonData: {
      objectives: [
        'Students will explain the basic context of the 1782 siege of Fort Henry and why the powder supply mattered',
        'Students will identify at least two ways the Betty Zane tradition varies across different accounts',
        'Students will apply source evaluation criteria to compare the reliability of oral tradition, first-person memoir, and early published history',
        'Students will explain why some stories become legends while others do not, using Betty Zane as a case study',
      ],
      essentialQuestions: [
        'How do historians decide whether a story they cannot fully verify is historically useful?',
        'Why do communities preserve some stories as legends and let others disappear?',
        'What does the Betty Zane tradition tell us that strictly verified sources might miss?',
      ],
      materials: [
        'Excerpt: Zane Grey, Betty Zane (1903) — the powder run scene (adapted for classroom)',
        'Excerpt: Lyman Draper\'s Manuscripts — frontier survivor recollections of the 1782 siege (adapted)',
        'Short background: the 1782 siege and the garrison\'s situation',
        'Source evaluation worksheet: who said it, when, how do they know, what might they get wrong?',
        'Discussion prompts on the difference between "true" and "historically useful"',
      ],
      activities: [
        {
          name: 'The Siege in Context',
          duration: '10 minutes',
          description:
            'Brief teacher-led introduction: Fort Henry, the 1782 siege, why powder mattered, the Zane family. Students locate Wheeling on a map and understand the frontier setting. Key question introduced: during the siege, someone ran from the fort to the Zane cabin to get powder. Who was it, and how do we know?',
        },
        {
          name: 'Three Versions, One Story',
          duration: '20 minutes',
          description:
            'Students read three short passages about the gunpowder run: the Zane Grey novel version, a Draper Manuscripts excerpt, and a brief summary of what historians agree they can verify. Using the source evaluation worksheet, students assess each source: Who is speaking? When did they record this? How close were they to the event? What might distort their account? Students identify where the versions agree and where they conflict.',
        },
        {
          name: 'Why Betty?',
          duration: '15 minutes',
          description:
            'Class discussion: if historians cannot fully verify the Betty Zane version, why did the tradition attach to her specifically? What does the story do for the community that preserved it? Students brainstorm what the story communicates about women\'s roles in frontier defense, about the Zane family, and about what the Revolution meant on the frontier. Teacher introduces the concept of "cultural work" — what a story accomplishes beyond just recording facts.',
        },
      ],
      assessment:
        'Exit ticket: students write 3–5 sentences answering "Is the Betty Zane story historical? Use evidence from today\'s lesson to explain your answer." Look for students to engage with the difference between "verifiable" and "historically meaningful" rather than simply saying the story is true or false.',
    } satisfies Record<string, unknown>,
    standards: {
      commonCore: [
        'CCSS.ELA-LITERACY.RH.6-8.6: Identify aspects of a text that reveal an author\'s point of view or purpose',
        'CCSS.ELA-LITERACY.RH.6-8.8: Distinguish among fact, opinion, and reasoned judgment in a text',
        'CCSS.ELA-LITERACY.RH.6-8.9: Analyze the relationship between a primary and secondary source on the same topic',
      ],
      c3Framework: [
        'D2.His.10.6-8: Detect possible limitations in the historical record based on the evidence used to make historical claims',
        'D2.His.11.6-8: Use other historical sources to infer a plausible maker, date, place of origin, and intended audience for historical sources',
        'D1.5.6-8: Determine the kinds of sources that will be helpful in answering compelling and supporting questions',
      ],
    } satisfies Record<string, unknown>,
    displayOrder: 2,
  },
];

// ============================================================================
// WHEELING — ADDITIONAL LINKS
// ============================================================================

export const wheelingAdditionalLinks: Array<{
  toTownId: string;
  linkType: string;
  reason: string;
  weight: number;
}> = [
  {
    toTownId: 'us-pa-pittsburgh',
    linkType: 'GEOGRAPHIC_PROXIMITY',
    reason: 'Fort Pitt at Pittsburgh was the Continental command center for the Western Department and Wheeling\'s principal military support base throughout the Revolution; the two garrisons coordinated frontier defense operations along the upper Ohio.',
    weight: 88,
  },
  {
    toTownId: 'us-il-kaskaskia',
    linkType: 'SHARED_THEME',
    reason: 'Both Wheeling and Kaskaskia were western frontier posts whose Revolutionary War experiences — raids, sieges, isolation from eastern command — defined the frontier dimension of the war that most eastern-centered accounts omit.',
    weight: 72,
  },
  {
    toTownId: 'us-oh-marietta',
    linkType: 'GEOGRAPHIC_PROXIMITY',
    reason: 'Marietta, established in 1788 at the mouth of the Muskingum River, grew directly from the pacification of the Ohio Valley that Wheeling\'s garrison helped make possible; both towns represent the trajectory from Revolutionary frontier fort to post-war American settlement.',
    weight: 78,
  },
  {
    toTownId: 'us-pa-philadelphia',
    linkType: 'SHARED_THEME',
    reason: 'Philadelphia was the seat of the Continental Congress that issued directives for western frontier defense — often inadequate — while Wheeling\'s garrison bore the practical consequences; the tension between eastern political decisions and western military reality shaped the entire frontier war.',
    weight: 65,
  },
  {
    toTownId: 'us-va-williamsburg',
    linkType: 'SHARED_PERSON',
    reason: 'Virginia Governor Patrick Henry, for whom Fort Henry was renamed in 1776, issued orders governing Virginia\'s western militia; David Shepherd\'s authority as Ohio County Lieutenant ran through the Virginia chain of command headquartered at Williamsburg.',
    weight: 62,
  },
  {
    toTownId: 'us-ny-saratoga-springs',
    linkType: 'SHARED_THEME',
    reason: 'Saratoga in 1777 and Fort Henry in 1777 were both critical defensive successes in the same year: Saratoga stopped the British drive from Canada in the east while Fort Henry\'s first siege showed the western frontier could hold; both demonstrated that American defensive capacity was greater than the British had assumed.',
    weight: 60,
  },
  {
    toTownId: 'us-va-yorktown',
    linkType: 'SHARED_THEME',
    reason: 'Yorktown in October 1781 ended the eastern war while Wheeling\'s second siege in September 1782 closed the western one; together the two events bracket the actual military end of the Revolution, demonstrating how different the war\'s timeline was in different theaters.',
    weight: 75,
  },
];
