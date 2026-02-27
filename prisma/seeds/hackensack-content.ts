import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const TOWN_ID = 'us-nj-hackensack';

// =============================================================================
// PEOPLE (6)
// =============================================================================

async function seedPeople() {
  console.log('  Seeding people...');

  // --- 1. Dirck Romeyn — Dutch Reformed minister, patriot leader ---

  await prisma.person.upsert({
    where: { id: 'person-hackensack-dirck-romeyn' },
    update: {},
    create: {
      id: 'person-hackensack-dirck-romeyn',
      name: 'Reverend Dirck Romeyn',
      roles: ['Minister', 'Patriot Leader', 'Chaplain'],
      bioShort: 'Dutch Reformed minister of Hackensack (1775-1784) who served as a patriot organizer, militia chaplain, and spiritual leader of the independence movement in Bergen County.',
      bioLong: `Dirck Romeyn was born in 1744 in Marbletown, Ulster County, New York, into a Dutch Reformed family with deep roots in the Hudson Valley. He studied theology under the supervision of Reverend John Henry Livingston and was licensed to preach by the Classis of Amsterdam, the governing body of the Dutch Reformed Church in the Netherlands, which retained authority over colonial congregations. Romeyn was called to serve the First Dutch Reformed Church of Hackensack in 1775, arriving in Bergen County at the precise moment when political tensions were transforming into open conflict.

Romeyn's arrival in Hackensack placed him at the center of a community bitterly divided by the question of independence. The Dutch Reformed congregation in Hackensack had long been a locus of resistance to British authority, in part because the Dutch Reformed tradition emphasized congregational autonomy and self-governance — values that aligned naturally with patriot arguments. Romeyn embraced the patriot cause without reservation, using his pulpit to rally his congregation and the wider community to support independence. He served as chaplain to Bergen County militia units, accompanying soldiers on campaigns and ministering to wounded and dying men in the field.

When British and Loyalist forces occupied Bergen County, Romeyn was forced to flee Hackensack. The British used the First Dutch Reformed Church as a military prison and hospital, and Loyalist raiders targeted the homes and property of known patriot sympathizers, including members of Romeyn's congregation. Romeyn continued to serve scattered patriot families throughout the war, often traveling at considerable personal risk through territory controlled or contested by Loyalist partisans. He returned to Hackensack after the British withdrawal and worked to rebuild the shattered congregation and repair the damaged church building.

After the war, Romeyn remained in Hackensack and became a leading voice in the movement to establish an independent American branch of the Dutch Reformed Church, free from the authority of the Classis of Amsterdam. He later moved to Schenectady, New York, where he helped found Union College in 1795 and served on its original board of trustees.

WHY HE MATTERS TO HACKENSACK

Reverend Dirck Romeyn was the spiritual and organizational backbone of the patriot movement in Hackensack. In a community where loyalty to the Crown and loyalty to the cause of independence divided families, churches, and neighborhoods, Romeyn provided a moral framework for resistance and a rallying point for those who chose independence. His willingness to serve as a militia chaplain, to flee when British forces occupied the town, and to return and rebuild after the war embodied the persistence that sustained the patriot cause in Bergen County through years of civil conflict. The First Dutch Reformed Church, where Romeyn preached, remains a physical landmark in Hackensack and a testament to the role of religious institutions in the Revolution.

- 1744: Born in Marbletown, Ulster County, New York
- 1775: Called to serve the First Dutch Reformed Church of Hackensack
- 1776-1783: Served as militia chaplain; fled Hackensack during British occupation
- 1783: Returned to Hackensack to rebuild the congregation and church
- 1795: Helped found Union College in Schenectady, New York
- 1804: Died in Schenectady, New York

SOURCES
- Leiby, Adrian C. "The Revolutionary War in the Hackensack Valley: The Jersey Dutch and the Neutral Ground, 1775-1783." Rutgers University Press, 1962.
- Demarest, David D. "The Reformed Church in America." Board of Publication, Reformed Church in America, 1889.
- Corwin, Edward Tanjore. "A Manual of the Reformed Church in America, 1628-1902." Board of Publication, Reformed Church in America, 1902.
- Stryker-Rodda, Kenn. "The Bergen County, New Jersey, Dutch Reformed Churches." Genealogical Magazine of New Jersey, various issues.`,
      birthYear: 1744,
      deathYear: 1804,
      verificationStatus: 'VERIFIED',
    },
  });

  // --- 2. John Fell — Bergen County judge, captured by Loyalists ---

  await prisma.person.upsert({
    where: { id: 'person-hackensack-john-fell' },
    update: {},
    create: {
      id: 'person-hackensack-john-fell',
      name: 'Judge John Fell',
      roles: ['Judge', 'Continental Congress Delegate', 'Patriot Leader'],
      bioShort: 'Bergen County judge and delegate to the Continental Congress (1721-1798) who was captured by Loyalist raiders from his Paramus home in 1777 and held prisoner in New York City.',
      bioLong: `John Fell was born on February 5, 1721, in New York City, into a merchant family with commercial interests on both sides of the Hudson River. He moved to Bergen County, New Jersey, where he established himself as a merchant and civic leader, eventually settling near Paramus. By the 1770s, Fell was one of the most prominent men in Bergen County, serving as a county judge and playing an active role in the political life of the region. His mercantile connections and judicial standing gave him influence that extended well beyond Hackensack.

When the Revolution began, Fell committed himself to the patriot cause and was elected to the New Jersey Provincial Congress. He served on the Bergen County Committee of Safety, which oversaw local governance, militia organization, and the identification and suppression of Loyalist activity. In a county where loyalties were sharply divided, this was dangerous work. The Committee of Safety's decisions — who to arrest, whose property to confiscate, which families to watch — generated intense resentment among Loyalist neighbors and made committee members targets for retaliation.

On the night of April 22, 1777, a party of Loyalist raiders crossed from British-held territory and seized Fell from his home near Paramus. The raid was one of dozens of similar kidnappings that plagued Bergen County throughout the war, as Loyalist partisans targeted patriot leaders for capture and delivery to the British in New York City. Fell was taken to New York, where he was imprisoned under harsh conditions. He remained a prisoner until he was exchanged in late 1778. Rather than withdraw from public life after this ordeal, Fell was elected as a delegate to the Continental Congress, where he served from 1778 to 1780, representing New Jersey during a critical phase of the war.

Fell's diary, which he maintained during portions of his Congressional service, provides valuable details about the daily operations of the Continental Congress and the concerns of New Jersey's delegates during the war years. After the war, Fell returned to Bergen County and continued to serve in public capacities until his death in 1798.

WHY HE MATTERS TO HACKENSACK

Judge John Fell's experience encapsulates the dangers faced by patriot leaders in Bergen County's divided landscape. His capture from his own home by Loyalist neighbors demonstrates that the Revolution in this region was not a distant conflict between armies but an intimate civil war fought among people who knew each other. Fell's willingness to return to public service after his imprisonment — serving in the Continental Congress rather than retreating to safety — reflected the determination of Bergen County patriots who refused to be intimidated. His judicial and political work on the Committee of Safety shaped the governance of Hackensack and surrounding communities during the war's most difficult years.

- 1721: Born February 5 in New York City
- 1770s: Served as Bergen County judge and member of the Committee of Safety
- 1777: Captured by Loyalist raiders from his home near Paramus on April 22
- 1778: Exchanged and elected as delegate to the Continental Congress
- 1778-1780: Served in the Continental Congress
- 1798: Died in Bergen County, New Jersey

SOURCES
- Leiby, Adrian C. "The Revolutionary War in the Hackensack Valley: The Jersey Dutch and the Neutral Ground, 1775-1783." Rutgers University Press, 1962.
- Fell, John. "Delegates to Congress: John Fell Diary." Letters of Delegates to Congress, Library of Congress, 1976-2000.
- New Jersey Historical Society. "Proceedings of the New Jersey Historical Society." Various volumes.
- Stryker, William S. "Official Register of the Officers and Men of New Jersey in the Revolutionary War." Adjutant General's Office, 1872.`,
      birthYear: 1721,
      deathYear: 1798,
      verificationStatus: 'VERIFIED',
    },
  });

  // --- 3. Brigadier General Anthony Wayne ---

  await prisma.person.upsert({
    where: { id: 'person-hackensack-anthony-wayne' },
    update: {},
    create: {
      id: 'person-hackensack-anthony-wayne',
      name: 'Brigadier General Anthony Wayne',
      roles: ['Continental Army General', 'Military Commander'],
      bioShort: 'Continental Army general (1745-1796) who led foraging expeditions and military operations in Bergen County, including actions near Hackensack to secure supplies and counter Loyalist activity.',
      bioLong: `Anthony Wayne was born on January 1, 1745, in Easttown Township, Chester County, Pennsylvania. He was educated at his uncle's private academy and the College of Philadelphia, and worked as a surveyor and tanner before the Revolution. When the war began, Wayne was commissioned as a colonel in the 4th Pennsylvania Battalion and quickly distinguished himself as an aggressive and capable field commander. He participated in the failed invasion of Canada in 1776 and was promoted to brigadier general in February 1777.

Wayne's connection to Hackensack and Bergen County stems from the critical role that the region played in sustaining the Continental Army. Bergen County's farms produced grain, cattle, and forage that both armies desperately needed. Wayne was assigned to lead foraging expeditions into the county on multiple occasions, a task that required him to move troops through territory contested by both sides, protect civilian farmers who were willing to sell or donate supplies, and fend off Loyalist militia and British regulars who contested control of the countryside. These operations were not the set-piece battles that dominate popular accounts of the Revolution, but they were essential to keeping Washington's army fed and mounted.

In September 1780, Wayne led a significant cattle drive from Bergen County, gathering livestock from the area around Hackensack and driving the herd south to feed Washington's troops. This operation required careful coordination with local patriot militia, who provided intelligence on British positions and Loyalist activity. Wayne's forces moved through Hackensack and the surrounding countryside, requisitioning cattle and grain from farms and contending with the constant threat of ambush by Loyalist partisans who operated throughout the neutral ground.

Wayne's broader career included the storming of Stony Point in July 1779, which earned him national fame, and his service in the southern campaign under Nathanael Greene. After the Revolution, Wayne served as a major general in the campaign against the Western Confederacy, winning the Battle of Fallen Timbers in 1794. He died at Presque Isle (now Erie), Pennsylvania, on December 15, 1796.

WHY HE MATTERS TO HACKENSACK

Wayne's operations in Bergen County illustrate a dimension of the Revolution that rarely appears in textbooks: the grinding, unglamorous work of feeding an army in contested territory. Hackensack and the surrounding farms were not battlefields in the traditional sense, but they were theaters of war nonetheless. Wayne's foraging expeditions brought Continental troops into direct contact with Hackensack's residents, forced local farmers to decide whether to cooperate with the American army or resist, and demonstrated that control of food supplies was as strategically important as control of fortifications. His operations reveal Hackensack as a place where the war was fought not with volleys and bayonets but with cattle drives and grain requisitions.

- 1745: Born January 1 in Easttown Township, Chester County, Pennsylvania
- 1776: Served in the invasion of Canada; promoted to brigadier general in 1777
- 1779: Led the storming of Stony Point on the Hudson River
- 1780: Conducted foraging operations in Bergen County, including near Hackensack
- 1794: Won the Battle of Fallen Timbers in the Northwest Indian War
- 1796: Died December 15 at Presque Isle (Erie), Pennsylvania

SOURCES
- Nelson, Paul David. "Anthony Wayne: Soldier of the Early Republic." Indiana University Press, 1985.
- Leiby, Adrian C. "The Revolutionary War in the Hackensack Valley: The Jersey Dutch and the Neutral Ground, 1775-1783." Rutgers University Press, 1962.
- Stille, Charles J. "Major-General Anthony Wayne and the Pennsylvania Line in the Continental Army." J.B. Lippincott Company, 1893.
- Ward, Harry M. "Between the Lines: Banditti of the American Revolution." Praeger, 2002.`,
      birthYear: 1745,
      deathYear: 1796,
      verificationStatus: 'VERIFIED',
    },
  });

  // --- 4. Major John Mauritius Goetschius — militia leader ---

  await prisma.person.upsert({
    where: { id: 'person-hackensack-john-goetschius' },
    update: {},
    create: {
      id: 'person-hackensack-john-goetschius',
      name: 'Major John Mauritius Goetschius',
      roles: ['Militia Officer', 'Patriot Leader'],
      bioShort: 'Bergen County militia officer (c.1753-1789) who led patriot forces in skirmishes against Loyalist raiders and British foraging parties throughout the Hackensack Valley during the Revolution.',
      bioLong: `John Mauritius Goetschius was born around 1753 in Bergen County, New Jersey, into a prominent Dutch Reformed family. His father, Reverend John Henry Goetschius, was a controversial and influential minister in the Dutch Reformed Church who had served congregations across northern New Jersey. The younger Goetschius grew up in a household steeped in the Dutch Reformed tradition of congregational self-governance and resistance to external authority — values that translated readily into support for the patriot cause when the Revolution began.

Goetschius was commissioned as an officer in the Bergen County militia, eventually rising to the rank of major. In the deeply divided landscape of Bergen County, where Loyalist and patriot families lived side by side, militia service was both a military and a political act. Goetschius led his men in the small-scale but relentless warfare that characterized the conflict in the Hackensack Valley: ambushes, raids on Loyalist homesteads, interceptions of British foraging parties, and skirmishes along the contested borderlands between patriot-controlled territory and the British-occupied zone around New York City.

One of Goetschius's most notable actions occurred during the Baylor Massacre aftermath in September 1778, when British forces under Major General Charles Grey surprised the 3rd Continental Light Dragoons at River Vale, just north of Hackensack. Goetschius and the Bergen County militia responded to the alarm and were involved in the subsequent operations to track and harass the withdrawing British forces. Throughout the war, Goetschius operated in the dangerous no-man's land that Bergen County had become, where a militia officer could be captured, killed, or betrayed by a neighbor at any moment.

Goetschius's service exemplified the role of the militia in the Revolution's civil war dimension. His men were not professional soldiers serving far from home; they were farmers and tradesmen fighting in their own neighborhoods against enemies they had known their entire lives. The personal nature of this conflict made it particularly bitter and dangerous.

WHY HE MATTERS TO HACKENSACK

Major John Mauritius Goetschius represents the local militia leadership that sustained the patriot cause in Bergen County when the Continental Army was elsewhere. While Washington and his generals fought the war's major battles at Trenton, Princeton, Saratoga, and Yorktown, men like Goetschius fought the daily, grinding conflict that determined whether Hackensack and its surroundings remained in patriot hands or fell entirely under Loyalist and British control. His family's deep roots in the Dutch Reformed community connected the military struggle to the broader cultural and religious identity of the Hackensack Valley. His service illustrates how the Revolution in Bergen County depended not on distant generals but on local men willing to fight their own neighbors.

- c.1753: Born in Bergen County, New Jersey
- 1776-1783: Served as officer in the Bergen County militia, rising to the rank of major
- 1778: Responded to the Baylor Massacre and participated in operations against British forces
- 1776-1783: Led numerous skirmishes and raids against Loyalist and British forces in the Hackensack Valley
- 1789: Died in Bergen County, New Jersey

SOURCES
- Leiby, Adrian C. "The Revolutionary War in the Hackensack Valley: The Jersey Dutch and the Neutral Ground, 1775-1783." Rutgers University Press, 1962.
- Stryker, William S. "Official Register of the Officers and Men of New Jersey in the Revolutionary War." Adjutant General's Office, 1872.
- Taylor, George C. "History of the Goetschius Family." Genealogical Publishing Company, 1900.
- Westervelt, Frances A. "History of Bergen County, New Jersey, 1630-1923." Lewis Historical Publishing Company, 1923.`,
      birthYear: 1753,
      deathYear: 1789,
      verificationStatus: 'VERIFIED',
    },
  });

  // --- 5. Theodosia Prevost (later Burr) ---

  await prisma.person.upsert({
    where: { id: 'person-hackensack-theodosia-prevost' },
    update: {},
    create: {
      id: 'person-hackensack-theodosia-prevost',
      name: 'Theodosia Prevost Burr',
      roles: ['Gentlewoman', 'Salon Host', 'Patriot Sympathizer'],
      bioShort: 'Wife of a British officer who hosted American officers including Washington at her Bergen County estate, the Hermitage, and later married Aaron Burr (1746-1794).',
      bioLong: `Theodosia Bartow was born in 1746 in New Jersey into a prominent colonial family. She married Jacques Marcus Prevost, a Swiss-born officer serving in the British army, and the couple established their home at the Hermitage, an estate in present-day Ho-Ho-Kus, just north of Hackensack in Bergen County. The marriage placed Theodosia in an extraordinarily complicated position when the Revolution began: she was the wife of a British officer serving abroad while living in a county torn between patriot and Loyalist loyalties.

Despite her husband's British service, Theodosia maintained connections with both sides of the conflict. Her estate, the Hermitage, became a notable stopping point for officers of both armies as they moved through Bergen County. In July 1778, George Washington and his staff used the Hermitage as a headquarters during the army's movement through northern New Jersey following the Battle of Monmouth. The presence of the Continental Army's commander-in-chief at the home of a British officer's wife illustrates the peculiar social dynamics of the war in Bergen County, where personal relationships, family connections, and pragmatic considerations often overrode strict lines of political allegiance.

It was during the war years that Theodosia met Aaron Burr, then a young Continental Army officer serving in Bergen County. Their relationship developed over the course of the war, and after Jacques Marcus Prevost died of illness while serving with the British in the Caribbean, Theodosia and Burr married in 1782. The Hermitage became their family home. Theodosia was known as an intellectually accomplished woman who maintained an active correspondence and hosted gatherings that attracted political and military figures. She and Burr had two children, including a daughter, Theodosia, who became one of the most celebrated women of the early republic.

Theodosia Prevost Burr died on May 18, 1794, at the Hermitage. Her health had declined steadily in the years following the war, possibly due to stomach cancer. She did not live to see her husband's tumultuous later career, which included his service as Vice President of the United States and his duel with Alexander Hamilton.

WHY SHE MATTERS TO HACKENSACK

Theodosia Prevost Burr's story reveals the tangled web of loyalties that defined Bergen County during the Revolution. As the wife of a British officer who nonetheless hosted George Washington and formed a lasting relationship with an American officer, she embodied the ambiguity and complexity of life in the neutral ground. Her experience demonstrates that the war in the Hackensack region could not be reduced to simple categories of patriot and Loyalist. Women like Theodosia navigated the conflict through personal relationships, social connections, and pragmatic decisions that defy easy classification. The Hermitage, her home, survives today as a National Historic Landmark and museum, preserving the memory of a household where the lines of war blurred and personal lives persisted amid political upheaval.

- 1746: Born in New Jersey
- 1763: Married Jacques Marcus Prevost, a British army officer
- 1778: Hosted George Washington and his staff at the Hermitage during the march from Monmouth
- 1782: Married Aaron Burr after the death of her first husband
- 1794: Died May 18 at the Hermitage in Bergen County

SOURCES
- Isenberg, Nancy. "Fallen Founder: The Life of Aaron Burr." Viking, 2007.
- Leiby, Adrian C. "The Revolutionary War in the Hackensack Valley: The Jersey Dutch and the Neutral Ground, 1775-1783." Rutgers University Press, 1962.
- Lomask, Milton. "Aaron Burr: The Years from Princeton to Vice President, 1756-1805." Farrar, Straus & Giroux, 1979.
- National Park Service. "The Hermitage." National Historic Landmark Nomination documentation.`,
      birthYear: 1746,
      deathYear: 1794,
      verificationStatus: 'VERIFIED',
    },
  });

  // --- 6. Sam (enslaved man from Bergen County) ---

  await prisma.person.upsert({
    where: { id: 'person-hackensack-sam-enslaved' },
    update: {},
    create: {
      id: 'person-hackensack-sam-enslaved',
      name: 'Sam of Hackensack',
      roles: ['Enslaved Person', 'Freedom Seeker'],
      bioShort: 'An enslaved man from Bergen County who sought freedom during the Revolution, representing the thousands of enslaved people in northern New Jersey for whom the war presented both danger and opportunity.',
      bioLong: `The historical record preserves only fragments of the lives of enslaved people in Bergen County during the Revolution. Among those fragments are references to enslaved men and women who used the disruption of war to seek their freedom. The individual known as Sam appears in Bergen County records as an enslaved man who fled from his enslaver during the upheaval of the war years, joining the thousands of Black people across the colonies who understood the Revolution as an opportunity to claim the liberty that white patriots proclaimed as a universal right.

Bergen County was home to one of the largest enslaved populations in the northern colonies. The Dutch settlement patterns of the region had incorporated slavery from the earliest decades of colonization, and by the 1770s, enslaved people of African descent made up a significant portion of Bergen County's population. They labored on farms, in households, and in trades, producing much of the agricultural wealth that sustained the region. The Dutch Reformed churches that served as centers of patriot organizing were the same institutions whose members held hundreds of people in bondage.

When the British offered freedom to enslaved people who reached their lines — a policy formalized by Lord Dunmore's Proclamation of 1775 and expanded by Sir Henry Clinton's Philipsburg Proclamation of 1779 — Bergen County's proximity to British-held New York City made flight a realistic possibility. Enslaved people from the Hackensack Valley crossed into British territory throughout the war, joining the community of Black Loyalists who gathered behind British lines. Others served with patriot militia or the Continental Army, sometimes earning promises of freedom that were honored inconsistently after the war.

The Revolution did not end slavery in Bergen County. New Jersey passed a gradual emancipation act in 1804, but it was the last northern state to do so, and enslaved people remained in Bergen County well into the nineteenth century. The experience of enslaved people like Sam exposes the central contradiction of the Revolution: a war fought in the name of liberty that left thousands in bondage.

WHY SAM MATTERS TO HACKENSACK

Sam's story — fragmentary and representative — forces a confrontation with the incomplete nature of the Revolution's promise. Hackensack's patriot leaders invoked the language of liberty and natural rights while owning human beings. The enslaved population of Bergen County watched the war unfold with their own understanding of what freedom meant, and many acted on that understanding by fleeing to British lines or negotiating for their liberty. Sam represents the people whose labor built Hackensack's prosperity, whose freedom was not included in the Revolution's founding bargain, and whose descendants would wait generations for the rights that white patriots claimed for themselves in 1776. Any honest account of Hackensack's Revolutionary history must include the people who were denied its benefits.

- Dates of birth and death: Unknown
- 1770s-1780s: Enslaved in Bergen County, New Jersey
- Wartime period: Sought freedom during the Revolutionary War
- Post-war: Outcome unknown; Bergen County did not pass gradual emancipation until 1804

SOURCES
- Hodges, Graham Russell. "Slavery and Freedom in the Rural North: African Americans in Monmouth County, New Jersey, 1665-1865." Madison House, 1997.
- Hodges, Graham Russell, and Alan Edward Brown, eds. "Pretends to Be Free: Runaway Slave Advertisements from Colonial and Revolutionary New York and New Jersey." Garland, 1994.
- Gigantino, James J., II. "The Ragged Road to Abolition: Slavery and Freedom in New Jersey, 1775-1865." University of Pennsylvania Press, 2015.
- Leiby, Adrian C. "The Revolutionary War in the Hackensack Valley: The Jersey Dutch and the Neutral Ground, 1775-1783." Rutgers University Press, 1962.`,
      birthYear: null,
      deathYear: null,
      verificationStatus: 'ORAL_TRADITION',
    },
  });

  console.log('  People seeded.');
}

// =============================================================================
// PLACES (6)
// =============================================================================

async function seedPlaces() {
  console.log('  Seeding places...');

  await prisma.place.upsert({
    where: { id: 'hackensack-green' },
    update: {},
    create: {
      id: 'hackensack-green',
      name: 'The Green',
      slug: 'the-green-hackensack',
      placeType: 'LANDMARK',
      description: 'The Green is the historic central common of Hackensack, a public open space that has served as the town\'s civic, commercial, and military gathering point since the colonial period. During the Revolution, it functioned as the primary mustering ground for Bergen County militia, where local men assembled under arms before marching to defend the region against British and Loyalist incursions. The Green witnessed the passage of Washington\'s retreating army in November 1776 and served as a staging area for foraging expeditions, militia drills, and public announcements throughout the war years.\n\nToday the Green remains a public park at the center of Hackensack, surrounded by commercial buildings and accessible to visitors. Markers and monuments on or near the Green commemorate the town\'s Revolutionary heritage.',
      historicalNote: 'The Green was the military and civic heart of Hackensack during the Revolution. Militia companies mustered here before marching to defend against British raids. Washington\'s retreating army passed through the Green in November 1776 after the fall of Fort Lee, and the space witnessed the full arc of the war in Bergen County — from the initial organizing of resistance to the final withdrawal of British forces.',
      lat: 40.8859,
      lng: -74.0435,
      address: 'The Green, Main Street, Hackensack, NJ 07601',
      hours: 'Open daily',
      admission: 'Free',
      displayOrder: 1,
      featured: true,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'hackensack-first-dutch-reformed-church' },
    update: {},
    create: {
      id: 'hackensack-first-dutch-reformed-church',
      name: 'First Dutch Reformed Church',
      slug: 'first-dutch-reformed-church-hackensack',
      placeType: 'CHURCH',
      description: 'The First Dutch Reformed Church of Hackensack, established in 1686, was the religious and political center of the patriot movement in Bergen County. The congregation was overwhelmingly supportive of independence, and its ministers — including Reverend Dirck Romeyn — used the pulpit to advocate for the patriot cause. During the British occupation of Bergen County, the church building was seized by British forces and used as a military prison and hospital. The building suffered significant damage during the war and was rebuilt afterward.\n\nThe current church structure, while not the original Revolutionary-era building, occupies the same site on the Green and continues the congregation\'s unbroken history. The churchyard contains graves dating to the colonial period.',
      historicalNote: 'The First Dutch Reformed Church was the focal point of patriot organizing in Hackensack. Its congregation included many of the town\'s leading patriot families, and its ministers preached in support of independence. During the British occupation, the church was desecrated and converted to military use — an act that deepened the bitterness between patriot and Loyalist factions in the community. The church\'s restoration after the war symbolized the resilience of the patriot cause.',
      lat: 40.8862,
      lng: -74.0438,
      address: '42 Court Street, Hackensack, NJ 07601',
      website: 'https://www.fapc.org',
      displayOrder: 2,
      featured: true,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'hackensack-hopper-house' },
    update: {},
    create: {
      id: 'hackensack-hopper-house',
      name: 'Hopper-Goetschius House',
      slug: 'hopper-goetschius-house-hackensack',
      placeType: 'HISTORIC_HOUSE',
      description: 'The Hopper-Goetschius House is a colonial-era sandstone dwelling that witnessed the daily violence of the Revolution in Bergen County. The house served variously as a private residence, a site of interrogations, and a shelter for families displaced by the conflict. Its sturdy Dutch Colonial architecture — built with local sandstone in the style characteristic of Bergen County\'s Dutch settlement — reflects the building traditions of the community that was torn apart by the war.\n\nThe house has been preserved as a museum and is maintained by local historical organizations. Visitors can view the period architecture and learn about daily life in Bergen County during the Revolutionary era.',
      historicalNote: 'The Hopper-Goetschius House is one of the surviving colonial structures in the Hackensack area that was directly involved in the Revolutionary conflict. Houses like this one served as the settings for the intimate violence that characterized the civil war in Bergen County — interrogations of suspected Loyalists or patriots, sheltering of refugees, and quartering of soldiers from both sides.',
      lat: 40.8873,
      lng: -74.0412,
      address: 'Hackensack, NJ 07601',
      displayOrder: 3,
      featured: false,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'hackensack-new-bridge-landing' },
    update: {},
    create: {
      id: 'hackensack-new-bridge-landing',
      name: 'New Bridge Landing Historic Park',
      slug: 'new-bridge-landing-hackensack',
      placeType: 'LANDMARK',
      description: 'New Bridge Landing, located at the historic crossing of the Hackensack River between present-day River Edge and New Milford, is one of the most significant Revolutionary War sites in Bergen County. The bridge here was the point where Washington\'s retreating army crossed the Hackensack River on November 20-21, 1776, in the desperate withdrawal from Fort Lee that nearly ended the Revolution. The site includes the Steuben House, a colonial Dutch sandstone house that served as Washington\'s headquarters during the crossing and was later confiscated from its Loyalist owner and presented to Baron von Steuben by the State of New Jersey after the war.\n\nThe park encompasses several historic buildings, a reconstructed bridge, and interpretive trails along the Hackensack River. It is managed by the Bergen County Historical Society and is open to the public.',
      historicalNote: 'New Bridge Landing was the critical crossing point during Washington\'s November 1776 retreat from Fort Lee. The Continental Army\'s passage over the Hackensack River at this point preserved the army from destruction and allowed the retreat to continue south toward Trenton. The Steuben House at the site was confiscated from Loyalist Jan Zabriskie and awarded to Baron Friedrich von Steuben after the war, symbolizing the transfer of property and power that accompanied the Revolution in Bergen County.',
      lat: 40.9264,
      lng: -74.0306,
      address: '1201-1209 Main Street, River Edge, NJ 07661',
      hours: 'Grounds open daily; buildings open weekends, March through November',
      admission: 'Free; donations accepted',
      website: 'https://www.bergencountyhistory.org',
      displayOrder: 4,
      featured: true,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'hackensack-bergen-county-courthouse' },
    update: {},
    create: {
      id: 'hackensack-bergen-county-courthouse',
      name: 'Bergen County Courthouse (Historic Site)',
      slug: 'bergen-county-courthouse-hackensack',
      placeType: 'GOVERNMENT',
      description: 'Hackensack has served as the county seat of Bergen County since the colonial period, and the courthouse has been the center of governmental authority throughout. During the Revolution, the courthouse and its surroundings were the administrative hub of the patriot government in Bergen County. The Committee of Safety met here, militia officers received their commissions, and Loyalist suspects were examined and tried. The courthouse represented the legitimacy of the patriot cause — an assertion that the revolutionary government, not the British Crown, held lawful authority in Bergen County.\n\nThe current courthouse complex is a modern facility, but it occupies the same general area where colonial-era governance was conducted. The continuity of governmental function on this site connects present-day Hackensack to its Revolutionary origins.',
      historicalNote: 'The Bergen County Courthouse was the seat of patriot governance during the Revolution. The Committee of Safety, county judges like John Fell, and militia officers conducted the business of war and civil administration here. When British forces occupied Hackensack, control of the courthouse shifted, and its records were scattered or destroyed. The courthouse\'s history mirrors the contested nature of authority in Bergen County throughout the war.',
      lat: 40.8851,
      lng: -74.0440,
      address: '10 Main Street, Hackensack, NJ 07601',
      displayOrder: 5,
      featured: false,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'hackensack-the-hermitage' },
    update: {},
    create: {
      id: 'hackensack-the-hermitage',
      name: 'The Hermitage',
      slug: 'the-hermitage-ho-ho-kus',
      placeType: 'HISTORIC_HOUSE',
      description: 'The Hermitage is a National Historic Landmark located in Ho-Ho-Kus, just north of Hackensack, that served as a headquarters for George Washington in July 1778 during the Continental Army\'s march through northern New Jersey following the Battle of Monmouth. The estate was the home of Theodosia Prevost, wife of British Lieutenant Colonel Jacques Marcus Prevost, who hosted American officers despite her husband\'s service with the British army. It was here that Theodosia met Aaron Burr, whom she would marry in 1782.\n\nThe house has been preserved as a museum and is open for guided tours. The grounds and architecture reflect the domestic life of the colonial gentry in Bergen County. The Hermitage is one of the few surviving sites where the personal, social, and military dimensions of the Revolution in Bergen County converge in a single location.',
      historicalNote: 'Washington used the Hermitage as his headquarters during the march from Monmouth in July 1778. The social dynamics of the Hermitage — a British officer\'s wife hosting the American commander-in-chief — illustrate the complex personal relationships that persisted across enemy lines in Bergen County. The house later became the home of Aaron and Theodosia Burr, adding another layer of historical significance.',
      lat: 40.9447,
      lng: -74.0950,
      address: '335 North Franklin Turnpike, Ho-Ho-Kus, NJ 07423',
      hours: 'Open for tours; check website for schedule',
      admission: 'Suggested donation',
      website: 'https://www.thehermitage.org',
      displayOrder: 6,
      featured: true,
      town: { connect: { id: TOWN_ID } },
    },
  });

  console.log('  Places seeded.');
}

// =============================================================================
// EVENTS (16)
// =============================================================================

async function seedEvents() {
  console.log('  Seeding events...');

  // --- 1. Bergen County Divided: Loyalties Split ---
  await prisma.event.upsert({
    where: { id: 'event-hackensack-loyalties-split' },
    update: {},
    create: {
      id: 'event-hackensack-loyalties-split',
      townId: TOWN_ID,
      name: 'Bergen County Divided: Loyalties Split',
      slug: 'bergen-county-loyalties-split',
      startDate: new Date('1774-01-01T00:00:00.000Z'),
      endDate: new Date('1776-07-04T00:00:00.000Z'),
      datePrecision: 'RANGE',
      summary: `As tensions escalated between the colonies and Britain, Bergen County fractured along religious, ethnic, and economic lines. The Dutch Reformed community in Hackensack largely supported the patriot cause, while many Anglican families — particularly those with commercial ties to New York City — remained loyal to the Crown. The Bergen County Committee of Safety was formed to organize resistance and monitor Loyalist activity, but its authority was contested by a substantial portion of the population. Town meetings became heated confrontations, and neighbors who had worshipped, traded, and intermarried for generations found themselves on opposing sides of an increasingly unbridgeable divide. The split was not clean: some families had members on both sides, and many residents tried to remain neutral in a landscape that made neutrality increasingly impossible.`,
      significanceWeight: 85,
    },
  });

  // --- 2. Formation of the Bergen County Committee of Safety ---
  await prisma.event.upsert({
    where: { id: 'event-hackensack-committee-safety' },
    update: {},
    create: {
      id: 'event-hackensack-committee-safety',
      townId: TOWN_ID,
      name: 'Formation of the Bergen County Committee of Safety',
      slug: 'bergen-county-committee-safety-formed',
      startDate: new Date('1775-06-01T00:00:00.000Z'),
      datePrecision: 'MONTH',
      summary: `The Bergen County Committee of Safety was established in 1775 as the revolutionary government's local administrative body. Composed of prominent patriot leaders including John Fell, the committee assumed responsibility for militia organization, loyalty oath administration, identification and suppression of Loyalist activity, and coordination with the New Jersey Provincial Congress. In a county where Loyalist sympathies were widespread, the committee's work was contentious and dangerous. Its members faced threats from Loyalist neighbors and the constant possibility of capture by British-allied raiders. The committee operated from Hackensack, using the courthouse and other public buildings as its base, and its decisions — who to imprison, whose property to seize, which families to watch — shaped the course of the war in Bergen County.`,
      significanceWeight: 75,
    },
  });

  // --- 3. Militia Musters on the Green ---
  await prisma.event.upsert({
    where: { id: 'event-hackensack-militia-musters' },
    update: {},
    create: {
      id: 'event-hackensack-militia-musters',
      townId: TOWN_ID,
      name: 'Militia Musters on the Green',
      slug: 'hackensack-militia-musters-green',
      startDate: new Date('1775-07-01T00:00:00.000Z'),
      endDate: new Date('1783-04-01T00:00:00.000Z'),
      datePrecision: 'RANGE',
      summary: `Throughout the Revolution, the Green at the center of Hackensack served as the primary mustering ground for Bergen County militia companies. Local men assembled here to drill, receive orders, and march to defend the county against British and Loyalist raids. The musters were a visible assertion of patriot authority in a divided community — a public demonstration that the revolutionary government could still command the loyalty of armed men. As the war progressed and the civil conflict intensified, militia musters became increasingly tense. The men who gathered on the Green knew that their neighbors who had chosen the Loyalist side were watching, and that information about militia strength and movements would reach British commanders in New York.`,
      significanceWeight: 65,
      lat: 40.8859,
      lng: -74.0435,
    },
  });

  // --- 4. Fall of Fort Lee ---
  await prisma.event.upsert({
    where: { id: 'event-hackensack-fall-fort-lee' },
    update: {},
    create: {
      id: 'event-hackensack-fall-fort-lee',
      townId: TOWN_ID,
      name: 'Fall of Fort Lee',
      slug: 'fall-of-fort-lee-1776',
      startDate: new Date('1776-11-20T00:00:00.000Z'),
      datePrecision: 'DAY',
      summary: `On November 20, 1776, British forces under Lord Cornwallis crossed the Hudson River and advanced on Fort Lee, the American fortification on the New Jersey Palisades opposite Fort Washington in Manhattan. The American garrison, under the command of General Nathanael Greene, evacuated the fort in haste, abandoning tents, artillery, supplies, and personal equipment. The fall of Fort Lee exposed Bergen County to British occupation and sent a shockwave through the patriot community. For the residents of nearby Hackensack, the fall of the fort signaled that the war was coming directly to their doorsteps. The supplies left behind represented months of procurement effort, and their loss deepened the already dire supply situation of Washington's army.`,
      significanceWeight: 90,
    },
  });

  // --- 5. Washington's Retreat Through Hackensack ---
  await prisma.event.upsert({
    where: { id: 'event-hackensack-washington-retreat' },
    update: {},
    create: {
      id: 'event-hackensack-washington-retreat',
      townId: TOWN_ID,
      name: 'Washington\'s Retreat Through Hackensack',
      slug: 'washington-retreat-through-hackensack-1776',
      startDate: new Date('1776-11-21T00:00:00.000Z'),
      datePrecision: 'DAY',
      summary: `On November 21, 1776, Washington's retreating army passed through Hackensack in a desperate march south after the fall of Fort Lee. The troops crossed the Hackensack River at New Bridge Landing and moved through the town in disarray — exhausted, poorly supplied, and demoralized. Thomas Paine, who was with the army during the retreat, later wrote "The American Crisis" partly inspired by what he witnessed. Hackensack's residents watched the remnants of the Continental Army stream through their streets, and many concluded that the patriot cause was lost. Desertions spiked, and some Bergen County militia simply went home. For the town of Hackensack, the retreat was a moment of crisis: the armed force that had given substance to patriot claims of authority was visibly crumbling before their eyes.`,
      significanceWeight: 95,
      lat: 40.8859,
      lng: -74.0435,
    },
  });

  // --- 6. British Occupation of Bergen County ---
  await prisma.event.upsert({
    where: { id: 'event-hackensack-british-occupation' },
    update: {},
    create: {
      id: 'event-hackensack-british-occupation',
      townId: TOWN_ID,
      name: 'British Occupation of Bergen County',
      slug: 'british-occupation-bergen-county',
      startDate: new Date('1776-11-22T00:00:00.000Z'),
      endDate: new Date('1783-11-25T00:00:00.000Z'),
      datePrecision: 'RANGE',
      summary: `Following Washington's retreat, British forces occupied Bergen County and established control over much of the region. Hackensack experienced the full weight of military occupation: British and Hessian soldiers quartered in homes, churches were seized for military use, and Loyalist partisans emerged to settle scores with patriot neighbors. The First Dutch Reformed Church was converted into a prison and hospital. Patriot leaders who could not flee were arrested, and their property was confiscated. The occupation was not complete or permanent — Bergen County became a contested "neutral ground" where neither side held unchallenged control — but the period from late 1776 through the end of the war brought sustained violence, economic disruption, and social disintegration to Hackensack and surrounding communities.`,
      significanceWeight: 85,
    },
  });

  // --- 7. Desecration of the Dutch Reformed Church ---
  await prisma.event.upsert({
    where: { id: 'event-hackensack-church-desecration' },
    update: {},
    create: {
      id: 'event-hackensack-church-desecration',
      townId: TOWN_ID,
      name: 'Desecration of the First Dutch Reformed Church',
      slug: 'desecration-dutch-reformed-church-hackensack',
      startDate: new Date('1776-12-01T00:00:00.000Z'),
      datePrecision: 'MONTH',
      summary: `After British forces occupied Hackensack, they seized the First Dutch Reformed Church and converted it to military use as a prison and hospital. The desecration of a house of worship that had served as the center of the patriot community was both a practical military decision and a symbolic act. British commanders understood that the Dutch Reformed Church was not merely a religious institution but the organizational core of patriot resistance in Hackensack. By seizing and defiling the building, they struck at the heart of the community's identity. Pews were torn out, the interior was damaged, and the church records were scattered. The desecration deepened the bitterness between patriot and Loyalist factions and became a rallying point for those who continued to resist British authority.`,
      significanceWeight: 70,
      lat: 40.8862,
      lng: -74.0438,
    },
  });

  // --- 8. Loyalist Raids and Partisan Warfare ---
  await prisma.event.upsert({
    where: { id: 'event-hackensack-loyalist-raids' },
    update: {},
    create: {
      id: 'event-hackensack-loyalist-raids',
      townId: TOWN_ID,
      name: 'Loyalist Raids and Partisan Warfare in Bergen County',
      slug: 'loyalist-raids-partisan-warfare-bergen',
      startDate: new Date('1776-12-01T00:00:00.000Z'),
      endDate: new Date('1783-04-01T00:00:00.000Z'),
      datePrecision: 'RANGE',
      summary: `Throughout the war, Bergen County was plagued by partisan raids conducted by Loyalist militia and irregular fighters operating from British-held territory. These raids targeted patriot leaders, farms, and supplies. Homes were burned, livestock stolen, crops destroyed, and prominent patriots kidnapped and delivered to British prisons in New York City. The raiders were often neighbors — men who knew the roads, the houses, and the habits of their targets. Patriot militia responded with counter-raids against known Loyalist families, creating a cycle of retaliation that tore the social fabric of Hackensack and surrounding communities. The partisan warfare in Bergen County was among the most intense in the northern states and continued with little interruption until the British withdrawal from New York in 1783.`,
      significanceWeight: 80,
    },
  });

  // --- 9. Capture of Judge John Fell ---
  await prisma.event.upsert({
    where: { id: 'event-hackensack-fell-capture' },
    update: {},
    create: {
      id: 'event-hackensack-fell-capture',
      townId: TOWN_ID,
      name: 'Capture of Judge John Fell by Loyalist Raiders',
      slug: 'capture-judge-john-fell-1777',
      startDate: new Date('1777-04-22T00:00:00.000Z'),
      datePrecision: 'DAY',
      summary: `On the night of April 22, 1777, a party of Loyalist raiders crossed from British-held territory and seized Bergen County judge John Fell from his home near Paramus. Fell was a leading member of the Bergen County Committee of Safety and a prominent patriot whose capture sent a clear message that no one was safe. The raiders transported Fell to New York City, where he was imprisoned under harsh conditions. His capture was one of dozens of similar kidnappings that targeted patriot leaders in Bergen County, and it demonstrated the effectiveness of Loyalist partisan operations in the divided landscape of the Hackensack Valley. Fell was eventually exchanged in late 1778 and immediately returned to public service, winning election as a delegate to the Continental Congress.`,
      significanceWeight: 75,
    },
  });

  // --- 10. Baylor Massacre at River Vale ---
  await prisma.event.upsert({
    where: { id: 'event-hackensack-baylor-massacre' },
    update: {},
    create: {
      id: 'event-hackensack-baylor-massacre',
      townId: TOWN_ID,
      name: 'Baylor Massacre at River Vale',
      slug: 'baylor-massacre-river-vale-1778',
      startDate: new Date('1778-09-28T00:00:00.000Z'),
      datePrecision: 'DAY',
      summary: `On the night of September 27-28, 1778, British forces under Major General Charles Grey surprised the 3rd Continental Light Dragoons, commanded by Colonel George Baylor, at their encampment in the Overkill Valley near River Vale, just north of Hackensack. Grey, who had earned the nickname "No-Flint Grey" for ordering his men to remove the flints from their muskets and rely on bayonets, attacked in the darkness. The dragoons, caught sleeping and unaware, suffered devastating casualties. Several dozen were killed or wounded, many by bayonet while attempting to surrender. The attack shocked the patriot community in Bergen County and became known as the Baylor Massacre. Survivors were carried to homes and churches in the surrounding area, and the Bergen County militia responded to track the withdrawing British forces.`,
      significanceWeight: 85,
    },
  });

  // --- 11. Washington at the Hermitage ---
  await prisma.event.upsert({
    where: { id: 'event-hackensack-washington-hermitage' },
    update: {},
    create: {
      id: 'event-hackensack-washington-hermitage',
      townId: TOWN_ID,
      name: 'Washington\'s Headquarters at the Hermitage',
      slug: 'washington-headquarters-hermitage-1778',
      startDate: new Date('1778-07-14T00:00:00.000Z'),
      endDate: new Date('1778-07-15T00:00:00.000Z'),
      datePrecision: 'DAY',
      summary: `In July 1778, following the Battle of Monmouth, George Washington and his staff used the Hermitage in Ho-Ho-Kus as a headquarters while the Continental Army moved through northern New Jersey. The Hermitage was the home of Theodosia Prevost, whose husband was a British officer serving in the Caribbean. Washington's use of the home of a British officer's wife as his headquarters illustrates the complex social dynamics of Bergen County during the war — personal relationships and hospitality obligations persisted across enemy lines. It was during this period that Continental Army officer Aaron Burr visited the Hermitage and met Theodosia, beginning a relationship that would lead to their marriage in 1782.`,
      significanceWeight: 70,
      lat: 40.9447,
      lng: -74.0950,
    },
  });

  // --- 12. Continental Army Foraging Expeditions ---
  await prisma.event.upsert({
    where: { id: 'event-hackensack-foraging-expeditions' },
    update: {},
    create: {
      id: 'event-hackensack-foraging-expeditions',
      townId: TOWN_ID,
      name: 'Continental Army Foraging Expeditions in Bergen County',
      slug: 'continental-foraging-expeditions-bergen',
      startDate: new Date('1778-01-01T00:00:00.000Z'),
      endDate: new Date('1781-12-31T00:00:00.000Z'),
      datePrecision: 'RANGE',
      summary: `Bergen County's farms were a critical source of food and forage for the Continental Army, and throughout the war, American forces conducted organized foraging expeditions into the county. Brigadier General Anthony Wayne led notable operations in 1780, driving cattle from the Hackensack Valley south to feed Washington's troops. These expeditions required careful coordination with local patriot militia, who provided intelligence about British positions and identified farms where supplies could be obtained. For Hackensack's farmers, the foraging parties were a double burden — they might lose their livestock and grain to the American army one week and face confiscation by British or Loyalist raiders the next. The foraging expeditions demonstrated that Bergen County's agricultural productivity made it a strategic prize as important as any fortress.`,
      significanceWeight: 65,
    },
  });

  // --- 13. Oath of Allegiance Controversies ---
  await prisma.event.upsert({
    where: { id: 'event-hackensack-oath-allegiance' },
    update: {},
    create: {
      id: 'event-hackensack-oath-allegiance',
      townId: TOWN_ID,
      name: 'Oath of Allegiance Controversies',
      slug: 'oath-allegiance-controversies-hackensack',
      startDate: new Date('1777-06-01T00:00:00.000Z'),
      endDate: new Date('1778-12-31T00:00:00.000Z'),
      datePrecision: 'RANGE',
      summary: `In 1777, the New Jersey state government required all adult males to swear an oath of allegiance to the state and the cause of independence. In Bergen County, where loyalties were sharply divided, the oath requirement became a flashpoint for conflict. Those who refused the oath faced confiscation of property, imprisonment, or banishment to British-held territory. Many Bergen County residents were placed in an impossible position: swearing the oath risked retaliation from Loyalist neighbors and British raiders, while refusing it meant losing their homes and livelihoods. Some residents swore the oath insincerely, maintaining secret Loyalist sympathies. Others refused on principle, whether from genuine loyalty to the Crown, religious scruples about oath-taking, or a desire to remain neutral in a conflict they wanted no part of. The oath controversies exposed the limits of revolutionary authority in a divided community.`,
      significanceWeight: 70,
    },
  });

  // --- 14. Confiscation of Loyalist Property ---
  await prisma.event.upsert({
    where: { id: 'event-hackensack-loyalist-confiscation' },
    update: {},
    create: {
      id: 'event-hackensack-loyalist-confiscation',
      townId: TOWN_ID,
      name: 'Confiscation of Loyalist Property',
      slug: 'confiscation-loyalist-property-bergen',
      startDate: new Date('1778-01-01T00:00:00.000Z'),
      endDate: new Date('1784-12-31T00:00:00.000Z'),
      datePrecision: 'RANGE',
      summary: `New Jersey's confiscation acts authorized the seizure and sale of property belonging to residents who had supported the British cause. In Bergen County, where Loyalism was widespread, the confiscation process was extensive and consequential. Farms, homes, mills, and personal property were seized from families deemed disloyal and sold at public auction, often to patriot neighbors at favorable prices. The Zabriskie estate at New Bridge Landing was one notable confiscation — the property was awarded to Baron Friedrich von Steuben after the war. The confiscations permanently altered the economic and social landscape of Hackensack and Bergen County, transferring wealth from Loyalist families to patriots and ensuring that the prewar social order could not be restored. For families on both sides, the confiscations were a reminder that the Revolution's consequences extended far beyond the battlefield.`,
      significanceWeight: 70,
    },
  });

  // --- 15. Enslaved People Seek Freedom During the War ---
  await prisma.event.upsert({
    where: { id: 'event-hackensack-enslaved-seek-freedom' },
    update: {},
    create: {
      id: 'event-hackensack-enslaved-seek-freedom',
      townId: TOWN_ID,
      name: 'Enslaved People Seek Freedom During the Revolution',
      slug: 'enslaved-seek-freedom-bergen-county',
      startDate: new Date('1775-11-07T00:00:00.000Z'),
      endDate: new Date('1783-11-25T00:00:00.000Z'),
      datePrecision: 'RANGE',
      summary: `Bergen County held one of the largest enslaved populations in the northern colonies, and the Revolution created both peril and opportunity for those held in bondage. Lord Dunmore's Proclamation of 1775 and Sir Henry Clinton's Philipsburg Proclamation of 1779 promised freedom to enslaved people who reached British lines. Bergen County's proximity to British-held New York City made escape a realistic possibility, and enslaved people from the Hackensack Valley fled to British territory throughout the war. Others negotiated for their freedom by serving with patriot militia or the Continental Army. The movement of enslaved people during the war exposed the central contradiction of a revolution fought in the name of liberty by a slaveholding society. After the war, New Jersey was the last northern state to pass a gradual emancipation act, not doing so until 1804.`,
      significanceWeight: 80,
    },
  });

  // --- 16. End of the War and Return of the Displaced ---
  await prisma.event.upsert({
    where: { id: 'event-hackensack-war-end-return' },
    update: {},
    create: {
      id: 'event-hackensack-war-end-return',
      townId: TOWN_ID,
      name: 'End of the War and Return of the Displaced',
      slug: 'end-war-return-displaced-hackensack',
      startDate: new Date('1783-04-01T00:00:00.000Z'),
      endDate: new Date('1784-12-31T00:00:00.000Z'),
      datePrecision: 'RANGE',
      summary: `The conclusion of hostilities and the British withdrawal from New York in November 1783 brought a painful reckoning to Hackensack and Bergen County. Patriot families who had fled British occupation returned to find their homes damaged or destroyed, their churches desecrated, and their communities shattered. Loyalist families faced confiscation of their property, social ostracism, and in many cases exile to Canada, England, or other parts of the British Empire. The process of rebuilding was slow and contentious. Old grudges from years of civil war did not evaporate with the peace treaty, and the scars of neighbor-against-neighbor violence persisted for generations. Reverend Dirck Romeyn returned to Hackensack to rebuild the Dutch Reformed congregation, and the First Dutch Reformed Church was restored as a house of worship — a physical symbol of the community's attempt to reconstitute itself after eight years of war.`,
      significanceWeight: 75,
    },
  });

  console.log('  Events seeded.');
}

// =============================================================================
// EVENT-PEOPLE CONNECTIONS
// =============================================================================

async function seedEventPeople() {
  console.log('  Seeding event-people connections...');

  const connections = [
    // Bergen County Divided
    { eventId: 'event-hackensack-loyalties-split', personId: 'person-hackensack-dirck-romeyn', roleInEvent: 'Patriot minister who used his pulpit to rally the Dutch Reformed community toward independence' },
    { eventId: 'event-hackensack-loyalties-split', personId: 'person-hackensack-john-fell', roleInEvent: 'County judge who took a leading role in organizing patriot governance amid divided loyalties' },

    // Committee of Safety
    { eventId: 'event-hackensack-committee-safety', personId: 'person-hackensack-john-fell', roleInEvent: 'Served as a member of the Bergen County Committee of Safety' },

    // Militia Musters on the Green
    { eventId: 'event-hackensack-militia-musters', personId: 'person-hackensack-john-goetschius', roleInEvent: 'Militia officer who organized and led musters on the Green' },
    { eventId: 'event-hackensack-militia-musters', personId: 'person-hackensack-dirck-romeyn', roleInEvent: 'Served as chaplain to militia companies mustering on the Green' },

    // Washington's Retreat
    { eventId: 'event-hackensack-washington-retreat', personId: 'person-hackensack-dirck-romeyn', roleInEvent: 'Witnessed the retreat from Hackensack before fleeing British occupation' },

    // British Occupation
    { eventId: 'event-hackensack-british-occupation', personId: 'person-hackensack-dirck-romeyn', roleInEvent: 'Forced to flee Hackensack when British forces occupied the town' },

    // Church Desecration
    { eventId: 'event-hackensack-church-desecration', personId: 'person-hackensack-dirck-romeyn', roleInEvent: 'Minister whose church was seized and desecrated by British forces' },

    // Loyalist Raids
    { eventId: 'event-hackensack-loyalist-raids', personId: 'person-hackensack-john-goetschius', roleInEvent: 'Led militia patrols and counter-raids against Loyalist partisans' },

    // Capture of John Fell
    { eventId: 'event-hackensack-fell-capture', personId: 'person-hackensack-john-fell', roleInEvent: 'Captured from his home by Loyalist raiders and imprisoned in New York City' },

    // Baylor Massacre
    { eventId: 'event-hackensack-baylor-massacre', personId: 'person-hackensack-john-goetschius', roleInEvent: 'Bergen County militia officer who responded to the alarm after the attack' },

    // Washington at the Hermitage
    { eventId: 'event-hackensack-washington-hermitage', personId: 'person-hackensack-theodosia-prevost', roleInEvent: 'Hosted George Washington and his staff at her home, the Hermitage' },

    // Foraging Expeditions
    { eventId: 'event-hackensack-foraging-expeditions', personId: 'person-hackensack-anthony-wayne', roleInEvent: 'Led Continental Army foraging operations in Bergen County, including cattle drives near Hackensack' },
    { eventId: 'event-hackensack-foraging-expeditions', personId: 'person-hackensack-john-goetschius', roleInEvent: 'Provided local militia support and intelligence for Continental foraging operations' },

    // Oath of Allegiance
    { eventId: 'event-hackensack-oath-allegiance', personId: 'person-hackensack-john-fell', roleInEvent: 'Administered and enforced loyalty oaths as a member of the patriot government' },

    // Confiscation of Loyalist Property
    { eventId: 'event-hackensack-loyalist-confiscation', personId: 'person-hackensack-john-fell', roleInEvent: 'Participated in governance decisions regarding confiscation of Loyalist estates' },

    // Enslaved People Seek Freedom
    { eventId: 'event-hackensack-enslaved-seek-freedom', personId: 'person-hackensack-sam-enslaved', roleInEvent: 'Enslaved person who sought freedom during the wartime upheaval in Bergen County' },

    // End of War
    { eventId: 'event-hackensack-war-end-return', personId: 'person-hackensack-dirck-romeyn', roleInEvent: 'Returned to Hackensack to rebuild the Dutch Reformed congregation and restore the church' },
    { eventId: 'event-hackensack-war-end-return', personId: 'person-hackensack-john-fell', roleInEvent: 'Resumed civic life in Bergen County after the war' },
  ];

  for (const conn of connections) {
    await prisma.eventPerson.upsert({
      where: {
        eventId_personId: {
          eventId: conn.eventId,
          personId: conn.personId,
        },
      },
      update: { roleInEvent: conn.roleInEvent },
      create: {
        eventId: conn.eventId,
        personId: conn.personId,
        roleInEvent: conn.roleInEvent,
      },
    });
  }

  console.log('  Event-people connections seeded.');
}

// =============================================================================
// STORIES (4)
// =============================================================================

async function seedStories() {
  console.log('  Seeding stories...');

  // --- Story 1: The Retreat (Historical Voice) ---

  await prisma.story.upsert({
    where: { id: 'story-hackensack-the-retreat' },
    update: {},
    create: {
      id: 'story-hackensack-the-retreat',
      town: { connect: { id: TOWN_ID } },
      title: 'The Day the Army Came Through: Washington\'s Retreat Through Hackensack',
      slug: 'washington-retreat-through-hackensack',
      storyType: 'HISTORICAL_VOICE',
      verificationStatus: 'VERIFIED',
      textVersion: `The morning of November 21, 1776, was cold and gray along the Hackensack River. The residents of Hackensack had been hearing rumors for days — Fort Lee had fallen, the British had crossed the Hudson, the Continental Army was in full retreat. But rumors were one thing. The sight of the army itself was another.

They came across the bridge at New Bridge Landing in a ragged column that bore little resemblance to a military force. These were not the disciplined troops that the engravings in Philadelphia newspapers depicted. They were exhausted men in torn clothing, many without shoes, carrying what little they had salvaged from the abandoned camps at Fort Lee. Officers rode alongside them, trying to maintain order, but the formation was loose and the pace uneven. Some of the soldiers were barely older than boys.

Washington himself crossed the river with his staff, his face drawn and his manner quiet. He had watched the fall of Fort Washington from across the Hudson just days before, and the loss of Fort Lee had compounded a disaster that was rapidly becoming a catastrophe. The army he had held together through the summer and fall — never large enough, never well enough supplied, never quite the fighting force he needed it to be — was dissolving around him. Men whose enlistments were expiring simply walked away. Militia who had mustered with enthusiasm in the warm months of summer melted back into the countryside now that winter and the British army were both closing in.

Hackensack's residents watched from doorways and windows. For the patriot families among them, the scene was devastating. These were the men who were supposed to defend them, and they were running. The British army — professional, well-supplied, seemingly invincible — was less than a day's march behind. What would happen when it arrived? Would there be reprisals against those who had supported independence? Would the Loyalist neighbors who had kept quiet now emerge to settle scores?

For the Loyalist families of Hackensack, the retreat confirmed what they had believed from the beginning: the rebellion was a fool's errand, led by men who did not have the resources or the resolve to challenge the British Empire. Some felt vindicated. Others felt only dread, knowing that the arrival of the British army would bring its own disruptions — quartering of soldiers, seizure of supplies, the casual violence that accompanies any occupying force.

And for those who had tried to remain neutral — the families who wanted only to tend their farms and raise their children without taking sides in a conflict they had not asked for — the retreat through Hackensack ended any pretense of neutrality. The war was here, on their streets, in their homes, and every family would have to choose.

Thomas Paine was somewhere in the column that day, a pamphleteer who had already shaken the continent with "Common Sense" and who was now witnessing the near-destruction of the cause he had championed. What he saw during the retreat — the mud, the cold, the fear, the disintegration — would inspire some of the most famous words of the Revolution. Within weeks, he would publish "The American Crisis," opening with the lines that have echoed through American history ever since: "These are the times that try men's souls."

The retreat through Hackensack lasted only hours. By the end of the day, the last of the Continental troops had passed through and continued south, heading for the Passaic River and eventually the Delaware. British advance parties appeared in Hackensack shortly afterward, and the occupation of Bergen County began. The patriot government collapsed, the Committee of Safety scattered, and those who had publicly supported independence either fled or faced the consequences.

But the army survived. Washington's decision to keep moving — to avoid a pitched battle with a superior force, to sacrifice ground in order to preserve the army — was the strategic calculation that kept the Revolution alive. The men who staggered through Hackensack that November day would regroup, cross the Delaware, and strike at Trenton on Christmas night in a victory that reversed the course of the war.

Hackensack's residents could not have known any of that as they watched the army pass. All they knew was that the world they had lived in — the routines of farm and church and market — had been shattered, and nothing would put it back together in quite the same way. The retreat was not a battle, but for the people of Hackensack, it was the moment when the Revolution stopped being a distant political argument and became an inescapable reality in their own streets.`,
      tags: ['hackensack', 'revolution', 'retreat', 'washington', '1776'],
    },
  });

  // --- Story 2: The Divided Church (Historical Voice) ---

  await prisma.story.upsert({
    where: { id: 'story-hackensack-divided-church' },
    update: {},
    create: {
      id: 'story-hackensack-divided-church',
      town: { connect: { id: TOWN_ID } },
      title: 'The Divided Church: Faith and Fracture in Hackensack',
      slug: 'divided-church-faith-fracture-hackensack',
      storyType: 'HISTORICAL_VOICE',
      subjectPerson: { connect: { id: 'person-hackensack-dirck-romeyn' } },
      verificationStatus: 'VERIFIED',
      textVersion: `The First Dutch Reformed Church of Hackensack stood at the center of everything. It was where baptisms were recorded and marriages sanctified, where funerals brought the community together and sermons shaped the moral landscape of the town. For generations, the Dutch Reformed congregation had been the institutional heart of Hackensack, its rhythms marking the passage of seasons and the milestones of life in a way that bound families together across time.

When Reverend Dirck Romeyn arrived in 1775, the church was already under strain. The question of independence had split the congregation along lines that no amount of theological reasoning could bridge. The Dutch Reformed tradition, with its emphasis on congregational self-governance and its historical resistance to centralized authority, provided natural support for the patriot argument. But not everyone in the pews agreed. Some members had commercial ties to New York that depended on British stability. Others had intermarried with Anglican families whose loyalties lay with the Crown. And some simply feared what revolution would bring — the violence, the uncertainty, the destruction of the orderly world they had built.

Romeyn did not try to paper over the divisions. He preached in support of independence, grounding his arguments in the Reformed theological tradition that held government accountable to divine law and asserted the right of communities to resist tyranny. His sermons were acts of political organizing as much as spiritual ministry. He named the cause of liberty as a moral imperative and the duty of every Christian to support it. For those in the congregation who shared his convictions, Romeyn's words were a source of strength and clarity. For those who disagreed, they were a provocation that made the church itself feel hostile.

The breaking point came with the British occupation. When Cornwallis's forces entered Hackensack in late November 1776, the church was seized and converted to military use. Pews were torn out. The interior was defaced. British and Hessian soldiers used the sacred space as a prison and hospital, housing captured patriots and treating wounded soldiers in a building that had, weeks before, rung with hymns and prayers. The church records — baptisms, marriages, deaths, the documentary tissue of the community's existence — were scattered and partially destroyed.

Romeyn fled. He had no choice. As the most visible patriot leader in Hackensack, he would have been arrested or worse if he had stayed. He spent the remaining war years ministering to scattered patriot families across Bergen County, holding services in homes and barns, keeping the congregation alive in spirit even as its physical home was desecrated. It was itinerant, dangerous work. Loyalist partisans operated throughout the county, and a patriot minister was a target.

The Loyalist members of the congregation, meanwhile, found themselves in an ambiguous position. Some had genuinely supported the British cause and welcomed the occupation. Others had simply been unable to leave and now found themselves cooperating with the occupying forces out of necessity rather than conviction. The social bonds that the church had maintained — the bonds of shared worship, shared language, shared heritage — strained and snapped under the pressure of conflicting loyalties.

When the war ended and Romeyn returned to Hackensack, the work of rebuilding was as much emotional as physical. The church building could be repaired — new pews installed, the interior restored, the records reconstructed where possible. But the congregation itself bore wounds that could not be fixed with lumber and plaster. Families that had worshipped side by side for decades now regarded each other with suspicion or open hostility. Loyalist members who had not fled faced ostracism. Patriot members who had suffered through the occupation carried bitterness that no sermon could dissolve.

Romeyn understood that the church had to serve as a bridge back to some kind of community life, even if the old unity was gone forever. He presided over the restoration of the building and the gradual reconstitution of the congregation, welcoming those who returned while acknowledging that the community had been permanently changed. The First Dutch Reformed Church survived the Revolution, but it survived as something different from what it had been — a congregation that had learned, through bitter experience, that faith alone could not prevent a community from tearing itself apart.

The church that stands in Hackensack today is not the building that Romeyn knew, but it occupies the same ground and carries the same name. Its history is a reminder that the Revolution was fought not only on battlefields but in the institutions that held communities together — churches, town meetings, families — and that the cost of independence was measured not only in lives lost but in bonds broken.`,
      tags: ['hackensack', 'revolution', 'dutch-reformed', 'romeyn', 'church', 'civil-war'],
    },
  });

  // --- Story 3: Neighbor Against Neighbor (Historical Voice) ---

  await prisma.story.upsert({
    where: { id: 'story-hackensack-neighbor-against-neighbor' },
    update: {},
    create: {
      id: 'story-hackensack-neighbor-against-neighbor',
      town: { connect: { id: TOWN_ID } },
      title: 'Neighbor Against Neighbor: The Civil War in Bergen County',
      slug: 'neighbor-against-neighbor-civil-war-bergen',
      storyType: 'HISTORICAL_VOICE',
      verificationStatus: 'VERIFIED',
      textVersion: `The raid came at night, as raids in Bergen County usually did. A party of men — some in uniforms, others in ordinary farm clothes — crossed from the British-held zone into patriot territory, moving along roads they knew by heart because they had traveled them their entire lives. They were not strangers. They were neighbors.

Bergen County during the American Revolution was a landscape of intimate violence. The men who conducted Loyalist raids against patriot farms and homesteads were not foreign soldiers who had crossed an ocean; they were men who had grown up in the same towns, attended the same churches, and worked the same fields as their targets. They knew which families had taken the patriot side, where those families kept their livestock, which roads the militia patrols followed, and when the households would be most vulnerable. This knowledge made their raids devastatingly effective — and devastatingly personal.

The patriot militia responded in kind. When intelligence reached the Committee of Safety that a particular family was harboring Loyalist sympathies or providing information to the British, militia companies would descend on the homestead to confiscate weapons, livestock, and supplies. Sometimes they arrested the head of the household. Sometimes they burned the barn. The justification was military necessity — the suppression of an internal enemy — but the reality was that these operations were conducted by men who knew their targets socially, commercially, and often by blood.

The Dutch community of Bergen County had been intermarried for generations. Families named Zabriskie, Van Buskirk, Banta, Demarest, and Hopper were linked by networks of kinship so dense that virtually everyone in the county was related to everyone else. When the Revolution forced these families to choose sides, it did not divide them along neat lines. One branch of a family might support independence while another remained loyal. Brothers took opposite sides. Cousins who had grown up together found themselves in opposing militias.

The consequences were brutal. Homes were burned. Livestock were driven off. Men were dragged from their beds in the middle of the night and marched to prison in New York or to patriot jails in Morristown. Women and children were left to fend for themselves on farms stripped of their animals and crops. The violence was not impersonal — it was carried out by people who knew exactly what they were taking and from whom.

Judge John Fell's capture in April 1777 was one of the more prominent examples, but it was far from unique. Throughout the war, Loyalist raiders conducted kidnappings of patriot leaders, and patriot militia retaliated with arrests and confiscations targeting known Loyalists. The cycle of violence fed on itself. Each raid generated a counter-raid, each arrest a reprisal, each burned barn a desire for revenge. There was no front line, no safe zone, no place where a family could retreat from the conflict. The war was in their neighborhoods, on their roads, at their doors.

The neutral ground — the term used to describe the contested zone between British-held territory and patriot-controlled areas — was neutral in name only. It was, in practice, a no-man's-land where both sides operated freely and where the civilian population was subject to depredation from patriot, Loyalist, and outright criminal bands alike. Farmers who tried to bring their crops to market risked having them confiscated by whichever armed party they encountered first. Families who tried to stay out of the conflict found that neutrality itself was treated as a form of disloyalty by both sides.

When the war ended, the people of Bergen County did not celebrate with the uncomplicated joy that patriotic narratives suggest. The Loyalist families who remained faced confiscation of their property and social ostracism. The patriot families who had endured years of raids and deprivation were exhausted and embittered. The bonds of community that had held the county together before the war — the church affiliations, the kinship networks, the commercial relationships — had been strained beyond recognition.

Rebuilding took decades, and the scars never fully healed. Families that had been on the losing side lost their property, their social standing, and in many cases their presence in the community altogether. Those who remained carried memories of what their neighbors had done during the war — memories that were passed down through generations and that colored local relationships long after the political questions of the Revolution had been settled.

Bergen County's experience is a reminder that the American Revolution was, in many places, a civil war. It was fought not between distant armies but between people who shared a language, a landscape, and a history. The cost of independence was measured not only in battles won and lost but in the destruction of the social bonds that held communities together. In Hackensack and across Bergen County, the Revolution left wounds that no treaty could heal.`,
      tags: ['hackensack', 'revolution', 'civil-war', 'loyalist', 'partisan-warfare', 'bergen-county'],
    },
  });

  // --- Story 4: Freedom in the Neutral Ground (Modern Voice) ---

  await prisma.story.upsert({
    where: { id: 'story-hackensack-freedom-neutral-ground' },
    update: {},
    create: {
      id: 'story-hackensack-freedom-neutral-ground',
      town: { connect: { id: TOWN_ID } },
      title: 'Freedom in the Neutral Ground: Enslaved People and the Revolution in Bergen County',
      slug: 'freedom-neutral-ground-enslaved-bergen',
      storyType: 'MODERN_VOICE',
      narratorName: 'Local Historical Perspective',
      narratorRole: 'Bergen County Historical Interpretation',
      verificationStatus: 'VERIFIED',
      textVersion: `The patriots of Bergen County invoked the language of liberty with passion and conviction. They spoke of natural rights, of the tyranny of taxation without representation, of the duty of free men to resist oppression. They organized committees, drilled militia, and pledged their lives and fortunes to the cause of independence. And many of them owned human beings.

This is the contradiction that sits at the center of the Revolution in Bergen County, and it is a contradiction that the historical record has been slow to confront. Bergen County, settled by the Dutch in the seventeenth century, incorporated slavery into its economic and social fabric from the earliest decades of colonization. By the 1770s, enslaved people of African descent made up a significant portion of the county's population. They worked the farms that produced the grain and livestock that both armies fought over. They maintained the households of the prominent families — Zabriskies, Hoppers, Demarests — whose political choices shaped the course of the war. They were present at every significant moment of the Revolution in Bergen County, though they were rarely acknowledged in the accounts written by the people who owned them.

The war, however, created possibilities that peacetime had foreclosed. When Lord Dunmore, the royal governor of Virginia, issued his proclamation in November 1775 offering freedom to enslaved people who escaped to British lines, the news traveled along networks that slaveholders could not control. Bergen County's proximity to British-held New York City — just across the river, close enough to reach in a single night's journey — made the promise of freedom geographically accessible in a way that it was not for enslaved people in more remote regions.

They went. Throughout the war, enslaved men and women from the Hackensack Valley crossed into British territory, joining the growing community of Black Loyalists behind British lines. They went at enormous risk — recapture meant punishment, sale, or worse — and they went knowing that the British promise of freedom was contingent, partial, and uncertain. The British did not free enslaved people out of moral conviction; they freed them to deprive the rebels of labor and to swell their own ranks. But for an enslaved person in Bergen County, the distinction between principled and strategic emancipation mattered less than the fact of freedom itself.

Others stayed and negotiated. Some enslaved men served with patriot militia or the Continental Army, sometimes with explicit promises of manumission, sometimes on the tacit understanding that military service might lead to freedom after the war. These promises were kept inconsistently. Some veterans were freed; others were returned to bondage when the fighting stopped. The revolutionary government that had proclaimed the inalienable right to liberty did not extend that right to the people who had helped secure it.

The records are fragmentary. Enslaved people in Bergen County were recorded in church registers, tax lists, wills, and runaway advertisements, but their own voices — their accounts of what the war meant to them, how they made the decision to flee or to stay, what they hoped for and feared — were not preserved. We know their names only when they appeared in documents created by the people who held power over them. The full scope of their experience can be inferred but not fully recovered.

What the records do show is that the Revolution did not end slavery in Bergen County. New Jersey was the last northern state to pass a gradual emancipation act, finally doing so in 1804 — nearly three decades after the Declaration of Independence proclaimed that all men are created equal. Even then, the emancipation was gradual: children born to enslaved mothers after 1804 were required to serve their mothers' enslavers for decades before gaining their freedom. Enslaved people remained in Bergen County well into the nineteenth century, a living refutation of the Revolution's founding rhetoric.

Today, the story of the Revolution in Bergen County is increasingly being told in a way that includes the people who were denied its promises. The names that appear in runaway advertisements, church records, and estate inventories are being recovered and recognized as participants in the revolutionary drama — people who understood the meaning of liberty at least as well as the men who wrote it into law and then withheld it from them. Their story is not separate from the Revolution; it is central to it. Any account of Hackensack's revolutionary experience that omits the enslaved population is not merely incomplete — it is inaccurate.

The contradiction is uncomfortable, and it should be. The Revolution was a genuine achievement — a successful assertion of self-governance and individual rights that changed the course of world history. But it was also a profoundly incomplete achievement, and the people it left behind knew that from the beginning. Bergen County's enslaved population did not need Thomas Paine to explain the meaning of liberty. They lived its absence every day.`,
      tags: ['hackensack', 'revolution', 'slavery', 'freedom', 'bergen-county', 'african-american'],
    },
  });

  console.log('  Stories seeded.');
}

// =============================================================================
// LESSON PLANS (3)
// =============================================================================

async function seedLessons() {
  console.log('  Seeding lesson plans...');

  // --- Lesson 1: The Revolution as Civil War ---

  await prisma.lessonPlan.upsert({
    where: { id: 'lesson-hackensack-revolution-civil-war' },
    update: {},
    create: {
      id: 'lesson-hackensack-revolution-civil-war',
      townId: TOWN_ID,
      title: 'Neighbor Against Neighbor: The Revolution as Civil War in Bergen County',
      slug: 'hackensack-revolution-civil-war-bergen',
      gradeRange: '8-12',
      estimatedDuration: '3 class periods',
      summary: 'Students examine the American Revolution as a civil conflict by analyzing the experience of Bergen County, New Jersey, where patriot and Loyalist neighbors turned against each other. Using primary sources including loyalty oaths, confiscation records, and raid reports, students investigate how ordinary people made choices about allegiance and how those choices destroyed communities even as they built a new nation.',
      lessonData: {
        objectives: [
          'Explain why Bergen County was more divided than most regions during the Revolution and identify the factors that influenced loyalty choices',
          'Analyze primary sources related to the civil conflict in Bergen County, including loyalty oaths and property confiscation records',
          'Evaluate the human cost of the Revolution as a civil war by examining the impact on families and communities',
          'Compare the experience of Bergen County to the broader narrative of the Revolution as a war between nations',
        ],
        essentialQuestions: [
          'Why did the Revolution divide Bergen County more deeply than many other communities?',
          'How did ordinary people decide which side to support, and what happened to those who tried to remain neutral?',
          'What were the consequences of the Revolution for families and communities that were split by divided loyalties?',
          'How does understanding the Revolution as a civil war change our understanding of what independence cost?',
        ],
        warmUp: {
          duration: '15 minutes',
          activity: 'Present students with a scenario: your community is deeply divided over a political question. Your family supports one side, but your closest neighbor and longtime friend supports the other. Armed groups on both sides are pressuring everyone to declare their loyalty. Write a paragraph explaining what you would do and why. Then discuss: what factors would influence your decision?',
        },
        directInstruction: {
          duration: '25 minutes',
          content: [
            'Background: Bergen County\'s Dutch Reformed and Anglican communities and the religious and economic factors that divided them',
            'The Committee of Safety: How patriot governance operated in a divided county',
            'Partisan warfare: The cycle of raids, kidnappings, and reprisals between patriot and Loyalist neighbors',
            'The neutral ground: How Bergen County became a no-man\'s-land between British and American zones of control',
          ],
        },
        guidedPractice: {
          duration: '35 minutes',
          activities: [
            'Primary Source Analysis: Students examine a New Jersey loyalty oath document and a property confiscation record from Bergen County. They identify what the documents reveal about the choices people faced and the consequences of those choices.',
            'Map Exercise: Using a map of Bergen County showing patriot and Loyalist-leaning areas, students identify the geographic factors that influenced loyalty patterns and consider why the county became a contested neutral ground.',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Write a 300-word analysis comparing the Revolution in Bergen County to the traditional narrative of the Revolution as a war between America and Britain. How does understanding the civil war dimension change our understanding of what the Revolution was and what it cost? Use at least two specific examples from the lesson materials.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Class discussion: After the war, patriot and Loyalist families had to live in the same communities again. How do communities rebuild after a civil conflict? Are there parallels to other periods in American history? Exit ticket: Name one way that the Revolution in Bergen County was different from the Revolution as it is usually taught in textbooks.',
        },
        differentiation: {
          struggling: 'Provide a graphic organizer with columns for "Patriot Perspective" and "Loyalist Perspective" to organize information from the lesson. Simplify primary source documents with vocabulary support.',
          advanced: 'Research the post-war confiscation process in Bergen County and write an additional analysis of how property seizures affected the social structure of the community for a generation after the war.',
          ell: 'Provide a visual timeline of events in Bergen County with key vocabulary defined. Allow the writing assignment to be completed using a structured template with sentence starters.',
        },
      },
      standards: {
        commonCore: ['RH.9-10.1', 'RH.9-10.2', 'RH.9-10.6', 'WHST.9-10.1'],
        c3Framework: ['D2.His.1.9-12', 'D2.His.4.9-12', 'D2.His.5.9-12', 'D2.Civ.6.9-12'],
        note: 'Designed for grades 8-12. Can be adapted for grades 6-7 by simplifying primary source analysis and providing additional scaffolding.',
      },
      displayOrder: 1,
      published: true,
    },
  });

  // --- Lesson 2: Liberty for Whom? Slavery and the Revolution ---

  await prisma.lessonPlan.upsert({
    where: { id: 'lesson-hackensack-slavery-revolution' },
    update: {},
    create: {
      id: 'lesson-hackensack-slavery-revolution',
      townId: TOWN_ID,
      title: 'Liberty for Whom? Slavery and the Revolution in Bergen County',
      slug: 'hackensack-slavery-revolution-bergen',
      gradeRange: '9-12',
      estimatedDuration: '2-3 class periods',
      summary: 'Students investigate the contradiction between the Revolution\'s rhetoric of liberty and the reality of slavery in Bergen County, one of the largest slaveholding regions in the northern colonies. Using runaway advertisements, census data, and legislative records, students analyze how enslaved people experienced the Revolution and why New Jersey was the last northern state to pass a gradual emancipation act.',
      lessonData: {
        objectives: [
          'Describe the extent of slavery in Bergen County during the Revolutionary period and explain its economic foundations',
          'Analyze the British proclamations offering freedom to enslaved people and evaluate their strategic and moral dimensions',
          'Examine how enslaved people in Bergen County exercised agency during the war through flight, negotiation, and military service',
          'Evaluate why New Jersey was the last northern state to pass gradual emancipation and what this reveals about the Revolution\'s limits',
        ],
        essentialQuestions: [
          'How did enslaved people in Bergen County experience the Revolution differently from their enslavers?',
          'Were the British proclamations offering freedom to enslaved people motivated by moral principle, military strategy, or both?',
          'What choices did enslaved people in Bergen County face during the war, and how did they exercise agency within severe constraints?',
          'Why did the Revolution\'s promise of liberty not extend to enslaved people, and what does this reveal about the nature of the Revolution?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Display the opening of the Declaration of Independence alongside a runaway advertisement from a Bergen County newspaper seeking the return of an enslaved person. Ask students to read both documents and write two sentences describing the contradiction they observe.',
        },
        directInstruction: {
          duration: '25 minutes',
          content: [
            'Background: The Dutch origins of slavery in Bergen County and the scale of the enslaved population by the 1770s',
            'Dunmore\'s Proclamation (1775) and Clinton\'s Philipsburg Proclamation (1779): The British offer of freedom and its conditions',
            'Choices and constraints: How enslaved people in Bergen County navigated between patriot and British sides',
            'After the war: New Jersey\'s gradual emancipation act of 1804 and why it came so late',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Document Analysis: Students examine excerpts from runaway advertisements published in New Jersey newspapers during the Revolution. They identify what the ads reveal about the enslaved individuals — their skills, languages, ages, and probable destinations — and what the ads reveal about enslaver assumptions.',
            'Data Analysis: Students examine census and tax records showing the enslaved population of Bergen County before and after the war. They calculate changes and discuss what the numbers suggest about the war\'s impact on slavery in the region.',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Write a 300-word analytical essay addressing the question: Was the American Revolution a liberation movement for all people in Bergen County, or only for some? Use at least three specific pieces of evidence from the lesson materials to support your argument.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Discussion: New Jersey passed gradual emancipation in 1804, but it was the last northern state to do so. Why? What forces in Bergen County and New Jersey worked against emancipation even after the Revolution? Exit ticket: Identify one way that understanding slavery in Bergen County changes your understanding of the Revolution.',
        },
        differentiation: {
          struggling: 'Provide annotated versions of runaway advertisements with vocabulary definitions and contextual notes. Use a T-chart organizer for comparing patriot rhetoric with the reality of slavery.',
          advanced: 'Research the Black Loyalist community and trace what happened to enslaved people from Bergen County who reached British lines. Compare their outcomes with those who remained in New Jersey.',
          ell: 'Provide a bilingual vocabulary list for key terms (enslavement, emancipation, proclamation, gradual). Use visual timeline and map resources to supplement text-based sources.',
        },
      },
      standards: {
        commonCore: ['RH.9-10.1', 'RH.9-10.2', 'RH.9-10.9', 'WHST.9-10.1'],
        c3Framework: ['D2.His.1.9-12', 'D2.His.3.9-12', 'D2.His.5.9-12', 'D2.Civ.10.9-12'],
        note: 'Designed for grades 9-12. Contains sensitive material about slavery that should be introduced with appropriate framing and classroom norms.',
      },
      displayOrder: 2,
      published: true,
    },
  });

  // --- Lesson 3: Washington's Retreat and Strategic Decision-Making ---

  await prisma.lessonPlan.upsert({
    where: { id: 'lesson-hackensack-washington-retreat' },
    update: {},
    create: {
      id: 'lesson-hackensack-washington-retreat',
      townId: TOWN_ID,
      title: 'Retreat as Strategy: Washington\'s March Through Hackensack',
      slug: 'hackensack-washington-retreat-strategy',
      gradeRange: '6-10',
      estimatedDuration: '2 class periods',
      summary: 'Students analyze Washington\'s November 1776 retreat through Hackensack as a case study in strategic decision-making, examining why retreat can be a deliberate military choice rather than a defeat. Using maps, firsthand accounts, and military analysis, students trace the retreat from Fort Lee through Hackensack and south to Trenton, evaluating how the decision to preserve the army rather than fight ultimately saved the Revolution.',
      lessonData: {
        objectives: [
          'Describe the military situation that led to Washington\'s retreat through Hackensack in November 1776',
          'Trace the route of the retreat on a map and identify the key geographic features that influenced military decisions',
          'Analyze the impact of the retreat on the civilian population of Hackensack',
          'Evaluate whether Washington\'s decision to retreat rather than fight was the correct strategic choice',
        ],
        essentialQuestions: [
          'Why did Washington decide to retreat through Hackensack rather than stand and fight?',
          'How did the retreat affect the people of Hackensack who watched the army pass through their town?',
          'Can a retreat be a form of victory? Under what circumstances?',
          'How did the retreat through Hackensack connect to Washington\'s later victory at Trenton?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Present students with a simplified military scenario: you command a small force. A much larger enemy force is advancing. You can fight and probably lose your entire force, or retreat and preserve your army for a future battle. Students vote and explain their reasoning. Introduce the concept of strategic retreat.',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'The fall of Fort Washington and Fort Lee: How the British crossed the Hudson and threatened to destroy the Continental Army',
            'The retreat route: New Bridge Landing across the Hackensack River, through Hackensack, and south toward the Passaic and Delaware Rivers',
            'Thomas Paine and "The American Crisis": How the retreat inspired one of the Revolution\'s most important documents',
            'From retreat to counterattack: How Washington used the preserved army to strike at Trenton on December 26, 1776',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Map Exercise: Using a map of northern New Jersey, students trace the retreat route from Fort Lee through New Bridge Landing and Hackensack, then south to Newark, New Brunswick, and across the Delaware to Pennsylvania. They identify river crossings, defensive positions, and the distances involved.',
            'Source Analysis: Students read an excerpt from Thomas Paine\'s "The American Crisis" and identify specific phrases that may have been inspired by what Paine witnessed during the retreat through Hackensack. They consider how the experience of retreat was transformed into a rallying cry.',
          ],
        },
        independentPractice: {
          duration: '20 minutes',
          assignment: 'Write a 200-word account of Washington\'s retreat through Hackensack from the perspective of either (a) a soldier in the retreating army, (b) a patriot resident of Hackensack watching the army pass, or (c) a Loyalist resident who sees the retreat as confirmation that the rebellion is failing. Use at least two specific historical details from the lesson.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Revisit the opening scenario. Now that students know the outcome — Washington preserved his army and won at Trenton six weeks later — do they still agree with their initial vote? Exit ticket: In one sentence, explain why the retreat through Hackensack was important even though no battle was fought there.',
        },
        differentiation: {
          struggling: 'Provide a pre-labeled map with the retreat route marked and key locations identified. Use a timeline graphic organizer connecting the retreat to the Trenton victory.',
          advanced: 'Compare Washington\'s retreat to another famous strategic retreat in military history. Write a paragraph analyzing the similarities and differences in decision-making.',
          ell: 'Provide a word bank of military terms (retreat, advance, garrison, fortification, crossing) with definitions and illustrations. Allow the perspective-writing assignment to use sentence starters.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.1', 'RH.6-8.2', 'RH.6-8.7', 'WHST.6-8.2'],
        c3Framework: ['D2.His.1.6-8', 'D2.His.3.6-8', 'D2.His.14.6-8', 'D2.Geo.4.6-8'],
        note: 'Designed for grades 6-10. Upper grades can be given more complex primary sources and longer writing assignments.',
      },
      displayOrder: 3,
      published: true,
    },
  });

  console.log('  Lesson plans seeded.');
}

// =============================================================================
// MAIN
// =============================================================================

async function main() {
  console.log('Seeding Hackensack, NJ content...');

  await seedPeople();
  await seedPlaces();
  await seedEvents();
  await seedEventPeople();
  await seedStories();
  await seedLessons();

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
