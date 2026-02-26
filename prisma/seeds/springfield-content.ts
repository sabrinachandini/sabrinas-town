import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const SPRINGFIELD_TOWN_ID = 'us-ma-springfield';

// =============================================================================
// PEOPLE
// =============================================================================

async function seedPeople() {
  console.log('  Seeding people...');

  await prisma.person.upsert({
    where: { id: 'person-springfield-henry-knox' },
    update: {
      bioLong: `Henry Knox was born on July 25, 1750, in Boston, Massachusetts, the seventh of ten sons of William and Mary Knox. His father, a shipmaster, abandoned the family when Henry was nine, forcing the boy to leave the Boston Latin School and take work at a bookshop to support his mother. He was employed by Nicholas Bowes at Wharton and Bowes, booksellers, and eventually opened his own bookstore, the London Book-Store, in 1771. His voracious reading in military history, engineering, and fortification would prove more valuable than any formal education. In 1774, he married Lucy Flucker, the daughter of Thomas Flucker, the Royal Secretary of Massachusetts — a union that placed Knox on the opposite side of the coming conflict from his in-laws, who were committed Loyalists.

Knox first saw action at the Battle of Bunker Hill in June 1775, where he served as a volunteer and demonstrated practical knowledge of artillery. His expertise attracted the attention of General George Washington, who appointed him colonel of the Continental Regiment of Artillery in November 1775. Knox immediately proposed an audacious plan: to retrieve the heavy cannons captured by Ethan Allen at Fort Ticonderoga and transport them overland to the siege lines around Boston. Between November 1775 and January 1776, Knox and his men hauled approximately sixty tons of artillery — including cannons, mortars, and howitzers — across nearly 300 miles of frozen wilderness, over rivers and mountains, in what became known as the Noble Train of Artillery.

Knox's connection to Springfield began early in the war and deepened over the following decade. Springfield sat on the Connecticut River at the intersection of critical supply routes, and Knox recognized its strategic importance for manufacturing and logistics. In 1777, Congress authorized the establishment of a federal armory at Springfield, in part on Knox's recommendation. Knox inspected the Springfield facility multiple times during the war, overseeing its development from a repair depot and storage magazine into a manufacturing center. After the war, as the nation's first Secretary of War under President Washington from 1789 to 1794, Knox expanded the Springfield Armory into one of the two national armories (the other being Harpers Ferry), establishing its role as the primary center of American weapons development and production that it would hold for nearly two centuries.

WHY HE MATTERS TO SPRINGFIELD

Henry Knox was the driving force behind Springfield's transformation from a Connecticut River town into a center of American military manufacturing. His recognition of Springfield's geographic advantages — its position on the river, its distance from the coast (protecting it from naval attack), its proximity to iron deposits and water power — shaped decisions that defined the city's economic identity for two hundred years. The Springfield Armory, which Knox championed and developed, became the longest-operating armory in American history, producing weapons from the Revolution through the Cold War. Knox's vision linked Springfield permanently to the story of American national defense.

- 1750: Born July 25 in Boston, Massachusetts
- 1775-1776: Transported cannons from Fort Ticonderoga to Boston, passing through Springfield
- 1777: Recommended Springfield as site for federal armory
- 1785: Inspected Springfield Armory and oversaw expansion plans
- 1806: Died October 25 at his estate in Thomaston, Maine, at age 56

SOURCES
- Puls, Mark. "Henry Knox: Visionary General of the American Revolution." Palgrave Macmillan, 2008.
- Brooks, Victor. "The Boston Campaign: April 1775–March 1776." Combined Publishing, 1999.
- Deyrup, Felicia Johnson. "Arms Makers of the Connecticut Valley." Smith College Studies in History, Vol. 33, 1948.`,
    },
    create: {
      id: 'person-springfield-henry-knox',
      name: 'Henry Knox',
      roles: ['Continental Army Officer', 'Secretary of War', 'Bookseller', 'Artillery Commander'],
      bioShort: 'Continental Army artillery commander and first Secretary of War (1750-1806) who championed the establishment and development of the Springfield Armory as a national weapons manufacturing center.',
      bioLong: `Henry Knox was born on July 25, 1750, in Boston, Massachusetts, the seventh of ten sons of William and Mary Knox. His father, a shipmaster, abandoned the family when Henry was nine, forcing the boy to leave the Boston Latin School and take work at a bookshop to support his mother. He was employed by Nicholas Bowes at Wharton and Bowes, booksellers, and eventually opened his own bookstore, the London Book-Store, in 1771. His voracious reading in military history, engineering, and fortification would prove more valuable than any formal education. In 1774, he married Lucy Flucker, the daughter of Thomas Flucker, the Royal Secretary of Massachusetts — a union that placed Knox on the opposite side of the coming conflict from his in-laws, who were committed Loyalists.

Knox first saw action at the Battle of Bunker Hill in June 1775, where he served as a volunteer and demonstrated practical knowledge of artillery. His expertise attracted the attention of General George Washington, who appointed him colonel of the Continental Regiment of Artillery in November 1775. Knox immediately proposed an audacious plan: to retrieve the heavy cannons captured by Ethan Allen at Fort Ticonderoga and transport them overland to the siege lines around Boston. Between November 1775 and January 1776, Knox and his men hauled approximately sixty tons of artillery — including cannons, mortars, and howitzers — across nearly 300 miles of frozen wilderness, over rivers and mountains, in what became known as the Noble Train of Artillery.

Knox's connection to Springfield began early in the war and deepened over the following decade. Springfield sat on the Connecticut River at the intersection of critical supply routes, and Knox recognized its strategic importance for manufacturing and logistics. In 1777, Congress authorized the establishment of a federal armory at Springfield, in part on Knox's recommendation. Knox inspected the Springfield facility multiple times during the war, overseeing its development from a repair depot and storage magazine into a manufacturing center. After the war, as the nation's first Secretary of War under President Washington from 1789 to 1794, Knox expanded the Springfield Armory into one of the two national armories (the other being Harpers Ferry), establishing its role as the primary center of American weapons development and production that it would hold for nearly two centuries.

WHY HE MATTERS TO SPRINGFIELD

Henry Knox was the driving force behind Springfield's transformation from a Connecticut River town into a center of American military manufacturing. His recognition of Springfield's geographic advantages — its position on the river, its distance from the coast (protecting it from naval attack), its proximity to iron deposits and water power — shaped decisions that defined the city's economic identity for two hundred years. The Springfield Armory, which Knox championed and developed, became the longest-operating armory in American history, producing weapons from the Revolution through the Cold War. Knox's vision linked Springfield permanently to the story of American national defense.

- 1750: Born July 25 in Boston, Massachusetts
- 1775-1776: Transported cannons from Fort Ticonderoga to Boston, passing through Springfield
- 1777: Recommended Springfield as site for federal armory
- 1785: Inspected Springfield Armory and oversaw expansion plans
- 1806: Died October 25 at his estate in Thomaston, Maine, at age 56

SOURCES
- Puls, Mark. "Henry Knox: Visionary General of the American Revolution." Palgrave Macmillan, 2008.
- Brooks, Victor. "The Boston Campaign: April 1775–March 1776." Combined Publishing, 1999.
- Deyrup, Felicia Johnson. "Arms Makers of the Connecticut Valley." Smith College Studies in History, Vol. 33, 1948.`,
      birthYear: 1750,
      deathYear: 1806,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-springfield-daniel-shays' },
    update: {
      bioLong: `Daniel Shays was born around 1747 in Hopkinton, Massachusetts, into a family of modest means. Little is known about his early life or education. When the Revolutionary War broke out, Shays enlisted as a private in the militia and served with distinction at Bunker Hill, Ticonderoga, Saratoga, and Stony Point. He rose to the rank of captain in the 5th Massachusetts Regiment. The Marquis de Lafayette reportedly presented Shays with an ornamental sword in recognition of his bravery — a sword that Shays later sold out of financial desperation, a detail that encapsulates the plight of many Continental veterans.

After the war, Shays returned to farming in Pelham, Massachusetts, in the hills east of the Connecticut River valley. Like thousands of other veterans, he found himself caught in an economic crisis. The Massachusetts legislature, dominated by Boston mercantile interests, imposed heavy taxes payable in hard currency to retire the state's war debts. Hard currency was almost nonexistent in the rural western counties, where most transactions were conducted through barter or promissory notes. Farmers who could not pay their taxes or private debts faced foreclosure on their land and livestock, imprisonment for debt, or both. The courts in Hampshire and Worcester counties became instruments of dispossession, issuing hundreds of judgments against debtors who had no means to pay.

In the summer and fall of 1786, Shays became one of several leaders of an armed insurgency that sought to close the courts and prevent further debt proceedings. The movement, which would bear his name though he was not its sole or even its original leader, drew on the same rhetoric of liberty and resistance to unjust authority that had fueled the Revolution. In January 1787, Shays led approximately 1,200 men in an assault on the federal arsenal at Springfield, hoping to seize weapons that would strengthen the insurgents' position. The attack was repulsed by militia under General William Shepard, who fired cannon into the advancing column, killing four and scattering the rest. Shays fled to Vermont and was eventually pardoned in 1788.

WHY HE MATTERS TO SPRINGFIELD

Daniel Shays's assault on the Springfield arsenal in January 1787 was the defining crisis of the post-Revolutionary period and had consequences far beyond western Massachusetts. The inability of the national government under the Articles of Confederation to respond to the rebellion — Congress could not raise troops or funds to suppress it — became the most powerful argument for a stronger federal constitution. Delegates to the Constitutional Convention in Philadelphia in 1787, including George Washington and James Madison, cited Shays' Rebellion explicitly as proof that the Articles were inadequate. Springfield, as the site of the most dramatic confrontation, became the place where the shortcomings of America's first system of government were laid bare.

- c.1747: Born in Hopkinton, Massachusetts
- 1775: Fought at the Battle of Bunker Hill as a militiaman
- 1777: Served at Saratoga; rose to rank of captain
- 1787: Led assault on the Springfield federal arsenal on January 25; repulsed by militia
- 1825: Died September 29 in Sparta, New York, in poverty at approximately age 78

SOURCES
- Richards, Leonard L. "Shays's Rebellion: The American Revolution's Final Battle." University of Pennsylvania Press, 2002.
- Szatmary, David P. "Shays' Rebellion: The Making of an Agrarian Insurrection." University of Massachusetts Press, 1980.
- Taylor, Robert J. "Western Massachusetts in the Revolution." Brown University Press, 1954.`,
    },
    create: {
      id: 'person-springfield-daniel-shays',
      name: 'Daniel Shays',
      roles: ['Farmer', 'Continental Army Captain', 'Rebellion Leader'],
      bioShort: 'Farmer and Continental Army veteran (c.1747-1825) who led the 1787 assault on the Springfield federal arsenal, an event that exposed the weaknesses of the Articles of Confederation and spurred the creation of the U.S. Constitution.',
      bioLong: `Daniel Shays was born around 1747 in Hopkinton, Massachusetts, into a family of modest means. Little is known about his early life or education. When the Revolutionary War broke out, Shays enlisted as a private in the militia and served with distinction at Bunker Hill, Ticonderoga, Saratoga, and Stony Point. He rose to the rank of captain in the 5th Massachusetts Regiment. The Marquis de Lafayette reportedly presented Shays with an ornamental sword in recognition of his bravery — a sword that Shays later sold out of financial desperation, a detail that encapsulates the plight of many Continental veterans.

After the war, Shays returned to farming in Pelham, Massachusetts, in the hills east of the Connecticut River valley. Like thousands of other veterans, he found himself caught in an economic crisis. The Massachusetts legislature, dominated by Boston mercantile interests, imposed heavy taxes payable in hard currency to retire the state's war debts. Hard currency was almost nonexistent in the rural western counties, where most transactions were conducted through barter or promissory notes. Farmers who could not pay their taxes or private debts faced foreclosure on their land and livestock, imprisonment for debt, or both. The courts in Hampshire and Worcester counties became instruments of dispossession, issuing hundreds of judgments against debtors who had no means to pay.

In the summer and fall of 1786, Shays became one of several leaders of an armed insurgency that sought to close the courts and prevent further debt proceedings. The movement, which would bear his name though he was not its sole or even its original leader, drew on the same rhetoric of liberty and resistance to unjust authority that had fueled the Revolution. In January 1787, Shays led approximately 1,200 men in an assault on the federal arsenal at Springfield, hoping to seize weapons that would strengthen the insurgents' position. The attack was repulsed by militia under General William Shepard, who fired cannon into the advancing column, killing four and scattering the rest. Shays fled to Vermont and was eventually pardoned in 1788.

WHY HE MATTERS TO SPRINGFIELD

Daniel Shays's assault on the Springfield arsenal in January 1787 was the defining crisis of the post-Revolutionary period and had consequences far beyond western Massachusetts. The inability of the national government under the Articles of Confederation to respond to the rebellion — Congress could not raise troops or funds to suppress it — became the most powerful argument for a stronger federal constitution. Delegates to the Constitutional Convention in Philadelphia in 1787, including George Washington and James Madison, cited Shays' Rebellion explicitly as proof that the Articles were inadequate. Springfield, as the site of the most dramatic confrontation, became the place where the shortcomings of America's first system of government were laid bare.

- c.1747: Born in Hopkinton, Massachusetts
- 1775: Fought at the Battle of Bunker Hill as a militiaman
- 1777: Served at Saratoga; rose to rank of captain
- 1787: Led assault on the Springfield federal arsenal on January 25; repulsed by militia
- 1825: Died September 29 in Sparta, New York, in poverty at approximately age 78

SOURCES
- Richards, Leonard L. "Shays's Rebellion: The American Revolution's Final Battle." University of Pennsylvania Press, 2002.
- Szatmary, David P. "Shays' Rebellion: The Making of an Agrarian Insurrection." University of Massachusetts Press, 1980.
- Taylor, Robert J. "Western Massachusetts in the Revolution." Brown University Press, 1954.`,
      birthYear: 1747,
      deathYear: 1825,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-springfield-luke-day' },
    update: {
      bioLong: `Luke Day was born around 1743 in West Springfield, Massachusetts, on the western bank of the Connecticut River directly across from Springfield. He served as a captain in the Continental Army during the Revolutionary War, seeing action in several engagements. After the war, he returned to farming in West Springfield, where he became enmeshed in the same economic crisis that afflicted veterans and farmers throughout western Massachusetts. The combination of crushing taxes, scarce currency, and aggressive debt collection through the courts drove Day, like many of his neighbors, toward open resistance.

Day emerged as one of the principal leaders of the insurgency in the Connecticut River valley, operating largely independently of Daniel Shays, who organized forces in the hill towns to the east. Day's militia concentrated in West Springfield and the towns along the western bank of the river. He was a forceful and impulsive leader whose actions sometimes complicated the coordination of the broader rebellion. In late 1786, Day led armed men to close the Hampshire County courts in Northampton, preventing them from issuing further debt judgments against farmers.

The critical moment of Day's involvement came in January 1787, when the insurgent leaders planned a coordinated assault on the federal arsenal in Springfield. Day was supposed to join his forces with Shays's column for the attack on January 25, but he sent a message to Shays requesting a one-day postponement — a message that was intercepted by General William Shepard's forces. Shays, unaware that Day would not arrive as planned, attacked the arsenal without Day's reinforcements and was repulsed by cannon fire. Whether Day's delay was the result of genuine logistical difficulties or a failure of nerve remains debated by historians. After the rout, Day was captured in February 1787, tried, and sentenced to death, but was eventually pardoned in 1788.

WHY HE MATTERS TO SPRINGFIELD

Luke Day's role in Shays' Rebellion illustrates the geographic and social dimensions of the crisis that engulfed Springfield. The Connecticut River, which divided Springfield from West Springfield, also divided the insurgent forces at the crucial moment. Day's failure to coordinate with Shays on January 25, 1787, was arguably the tactical factor that doomed the assault on the arsenal. His story also underscores that the rebellion was not the work of a single leader but a broad movement of indebted farmers and veterans spread across dozens of towns in western Massachusetts, unified by shared economic grievance but often hampered by poor communication and divided command.

- c.1743: Born in West Springfield, Massachusetts
- 1775-1783: Served as captain in the Continental Army during the Revolutionary War
- 1786: Led insurgents in closing the Hampshire County courts in Northampton
- 1787: Failed to coordinate with Shays for the January 25 assault on the Springfield arsenal
- 1801: Died in West Springfield, Massachusetts

SOURCES
- Richards, Leonard L. "Shays's Rebellion: The American Revolution's Final Battle." University of Pennsylvania Press, 2002.
- Szatmary, David P. "Shays' Rebellion: The Making of an Agrarian Insurrection." University of Massachusetts Press, 1980.
- Holland, Josiah Gilbert. "History of Western Massachusetts." Samuel Bowles & Company, 1855.`,
    },
    create: {
      id: 'person-springfield-luke-day',
      name: 'Luke Day',
      roles: ['Farmer', 'Continental Army Captain', 'Rebellion Leader'],
      bioShort: 'Farmer and Continental Army veteran (c.1743-1801) who led insurgent forces in West Springfield during Shays\' Rebellion but failed to coordinate with Shays for the assault on the Springfield arsenal in January 1787.',
      bioLong: `Luke Day was born around 1743 in West Springfield, Massachusetts, on the western bank of the Connecticut River directly across from Springfield. He served as a captain in the Continental Army during the Revolutionary War, seeing action in several engagements. After the war, he returned to farming in West Springfield, where he became enmeshed in the same economic crisis that afflicted veterans and farmers throughout western Massachusetts. The combination of crushing taxes, scarce currency, and aggressive debt collection through the courts drove Day, like many of his neighbors, toward open resistance.

Day emerged as one of the principal leaders of the insurgency in the Connecticut River valley, operating largely independently of Daniel Shays, who organized forces in the hill towns to the east. Day's militia concentrated in West Springfield and the towns along the western bank of the river. He was a forceful and impulsive leader whose actions sometimes complicated the coordination of the broader rebellion. In late 1786, Day led armed men to close the Hampshire County courts in Northampton, preventing them from issuing further debt judgments against farmers.

The critical moment of Day's involvement came in January 1787, when the insurgent leaders planned a coordinated assault on the federal arsenal in Springfield. Day was supposed to join his forces with Shays's column for the attack on January 25, but he sent a message to Shays requesting a one-day postponement — a message that was intercepted by General William Shepard's forces. Shays, unaware that Day would not arrive as planned, attacked the arsenal without Day's reinforcements and was repulsed by cannon fire. Whether Day's delay was the result of genuine logistical difficulties or a failure of nerve remains debated by historians. After the rout, Day was captured in February 1787, tried, and sentenced to death, but was eventually pardoned in 1788.

WHY HE MATTERS TO SPRINGFIELD

Luke Day's role in Shays' Rebellion illustrates the geographic and social dimensions of the crisis that engulfed Springfield. The Connecticut River, which divided Springfield from West Springfield, also divided the insurgent forces at the crucial moment. Day's failure to coordinate with Shays on January 25, 1787, was arguably the tactical factor that doomed the assault on the arsenal. His story also underscores that the rebellion was not the work of a single leader but a broad movement of indebted farmers and veterans spread across dozens of towns in western Massachusetts, unified by shared economic grievance but often hampered by poor communication and divided command.

- c.1743: Born in West Springfield, Massachusetts
- 1775-1783: Served as captain in the Continental Army during the Revolutionary War
- 1786: Led insurgents in closing the Hampshire County courts in Northampton
- 1787: Failed to coordinate with Shays for the January 25 assault on the Springfield arsenal
- 1801: Died in West Springfield, Massachusetts

SOURCES
- Richards, Leonard L. "Shays's Rebellion: The American Revolution's Final Battle." University of Pennsylvania Press, 2002.
- Szatmary, David P. "Shays' Rebellion: The Making of an Agrarian Insurrection." University of Massachusetts Press, 1980.
- Holland, Josiah Gilbert. "History of Western Massachusetts." Samuel Bowles & Company, 1855.`,
      birthYear: 1743,
      deathYear: 1801,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-springfield-david-ames' },
    update: {
      bioLong: `David Ames was born in 1758 in Bridgewater, Massachusetts. He served in the Continental Army during the Revolutionary War and gained experience in ordnance and manufacturing that would shape his postwar career. After the war, Ames became involved in the operations at the Springfield Armory during its formative years. He was appointed superintendent of the Springfield Armory in 1794 by Secretary of War Henry Knox, a position he held until 1802. Under his leadership, the armory transitioned from a primarily repair-oriented depot into a facility capable of manufacturing complete muskets from raw materials.

Ames oversaw the armory during a period of critical development. When he took charge, the facility employed a small number of armorers working with relatively primitive methods, producing weapons slowly and inconsistently. Ames introduced organizational reforms, established quality standards, and began the process of systematizing production. Under his tenure, the armory began producing the Model 1795 musket, the first standardized military firearm manufactured in the United States. This weapon, based on the French Charleville musket pattern, represented the beginning of American arms manufacturing as an organized industrial enterprise rather than a collection of individual craftsmen.

Ames also navigated the political complexities of running a federal installation in a region still marked by the tensions of Shays' Rebellion. He managed relationships with local suppliers, recruited skilled workers from the Connecticut Valley's metalworking communities, and maintained the armory's operations through changes in presidential administration. His tenure established the administrative patterns and manufacturing practices that his successors would refine and expand throughout the nineteenth century.

WHY HE MATTERS TO SPRINGFIELD

David Ames was the superintendent who transformed the Springfield Armory from an idea into a functioning manufacturing enterprise. The armory under his leadership produced the first standardized American military muskets, establishing Springfield as the birthplace of American industrial arms production. His organizational innovations laid the groundwork for the system of interchangeable parts and precision manufacturing that later superintendents would develop into what became known as the American System of Manufacturing. The economic ecosystem that the armory created under Ames's leadership — networks of suppliers, skilled metalworkers, and support industries — shaped Springfield's economy and identity for generations.

- 1758: Born in Bridgewater, Massachusetts
- 1775-1783: Served in the Continental Army during the Revolutionary War
- 1794: Appointed superintendent of the Springfield Armory by Secretary of War Henry Knox
- 1795: Oversaw production of the Model 1795 musket, the first standardized U.S. military firearm
- 1802: Departed as superintendent of the Springfield Armory

SOURCES
- Deyrup, Felicia Johnson. "Arms Makers of the Connecticut Valley." Smith College Studies in History, Vol. 33, 1948.
- Riling, Ray. "The Powder Flask Book." Robert Halter, 1953.
- Springfield Armory National Historic Site. "A Brief History of the Springfield Armory." National Park Service, 2023.`,
    },
    create: {
      id: 'person-springfield-david-ames',
      name: 'David Ames',
      roles: ['Continental Army Veteran', 'Armory Superintendent', 'Manufacturing Pioneer'],
      bioShort: 'Continental Army veteran and armory superintendent (1758-1847) who oversaw the production of the first standardized U.S. military musket at Springfield Armory, launching American industrial arms manufacturing.',
      bioLong: `David Ames was born in 1758 in Bridgewater, Massachusetts. He served in the Continental Army during the Revolutionary War and gained experience in ordnance and manufacturing that would shape his postwar career. After the war, Ames became involved in the operations at the Springfield Armory during its formative years. He was appointed superintendent of the Springfield Armory in 1794 by Secretary of War Henry Knox, a position he held until 1802. Under his leadership, the armory transitioned from a primarily repair-oriented depot into a facility capable of manufacturing complete muskets from raw materials.

Ames oversaw the armory during a period of critical development. When he took charge, the facility employed a small number of armorers working with relatively primitive methods, producing weapons slowly and inconsistently. Ames introduced organizational reforms, established quality standards, and began the process of systematizing production. Under his tenure, the armory began producing the Model 1795 musket, the first standardized military firearm manufactured in the United States. This weapon, based on the French Charleville musket pattern, represented the beginning of American arms manufacturing as an organized industrial enterprise rather than a collection of individual craftsmen.

Ames also navigated the political complexities of running a federal installation in a region still marked by the tensions of Shays' Rebellion. He managed relationships with local suppliers, recruited skilled workers from the Connecticut Valley's metalworking communities, and maintained the armory's operations through changes in presidential administration. His tenure established the administrative patterns and manufacturing practices that his successors would refine and expand throughout the nineteenth century.

WHY HE MATTERS TO SPRINGFIELD

David Ames was the superintendent who transformed the Springfield Armory from an idea into a functioning manufacturing enterprise. The armory under his leadership produced the first standardized American military muskets, establishing Springfield as the birthplace of American industrial arms production. His organizational innovations laid the groundwork for the system of interchangeable parts and precision manufacturing that later superintendents would develop into what became known as the American System of Manufacturing. The economic ecosystem that the armory created under Ames's leadership — networks of suppliers, skilled metalworkers, and support industries — shaped Springfield's economy and identity for generations.

- 1758: Born in Bridgewater, Massachusetts
- 1775-1783: Served in the Continental Army during the Revolutionary War
- 1794: Appointed superintendent of the Springfield Armory by Secretary of War Henry Knox
- 1795: Oversaw production of the Model 1795 musket, the first standardized U.S. military firearm
- 1802: Departed as superintendent of the Springfield Armory

SOURCES
- Deyrup, Felicia Johnson. "Arms Makers of the Connecticut Valley." Smith College Studies in History, Vol. 33, 1948.
- Riling, Ray. "The Powder Flask Book." Robert Halter, 1953.
- Springfield Armory National Historic Site. "A Brief History of the Springfield Armory." National Park Service, 2023.`,
      birthYear: 1758,
      deathYear: 1847,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-springfield-william-shepard' },
    update: {
      bioLong: `William Shepard was born on December 1, 1737, in Westfield, Massachusetts, a town approximately ten miles west of Springfield. He grew up on a farm and received a basic education before enlisting in the provincial militia during the French and Indian War, where he served at the siege of Louisburg in 1758 and gained his first military experience. When the Revolutionary War began, Shepard was among the first to respond, marching with his company to Cambridge after the battles of Lexington and Concord in April 1775. He served at the Battle of Bunker Hill, was wounded in action, and subsequently rose through the ranks of the Continental Army.

Shepard served throughout the war with consistent distinction. He commanded the 3rd Massachusetts Regiment and later the 4th Massachusetts Regiment, participating in the battles of Long Island, Trenton, Saratoga, and Monmouth, among others. He was promoted to brigadier general of the Massachusetts militia after the war. His record of sustained combat service across nearly the entire war was unusual even among senior officers, and it earned him respect throughout western Massachusetts.

In January 1787, Shepard commanded the militia force that defended the federal arsenal at Springfield against Daniel Shays's insurgents. On January 25, when Shays's column of approximately 1,200 men advanced on the arsenal from the east, Shepard first fired warning shots over their heads. When the column continued to advance, Shepard ordered his artillery to fire directly into the ranks, killing four men and wounding twenty. The insurgents broke and fled. Shepard's decision to use lethal force against fellow veterans and citizens was controversial but effective. He had acted without explicit authorization from the state government, which was still debating how to respond to the rebellion, and his willingness to fire on the insurgents drew both praise and criticism.

WHY HE MATTERS TO SPRINGFIELD

William Shepard was the man who held the Springfield arsenal in the most critical moment of its early history. His defense of the armory in January 1787 preserved the federal weapons stockpile, broke the military power of the insurgency, and ensured that Springfield remained the site of an expanding national armory rather than a captured rebel arsenal. Shepard's decision to fire on the Shaysites was the act that transformed the rebellion from a political crisis into a military defeat, and it forced the question that led to the Constitutional Convention: if the federal government could not protect its own arsenals, what purpose did it serve?

- 1737: Born December 1 in Westfield, Massachusetts
- 1775: Fought at the Battle of Bunker Hill; wounded in action
- 1777: Served at the Battle of Saratoga
- 1787: Defended the Springfield arsenal against Shays's insurgents on January 25
- 1817: Died November 16 in Westfield, Massachusetts, at age 79

SOURCES
- Richards, Leonard L. "Shays's Rebellion: The American Revolution's Final Battle." University of Pennsylvania Press, 2002.
- Minot, George Richards. "The History of the Insurrections in Massachusetts." James W. Burditt, 1810.
- Lockwood, John H. "Westfield and Its Historic Influences." Published by the author, 1922.`,
    },
    create: {
      id: 'person-springfield-william-shepard',
      name: 'William Shepard',
      roles: ['Militia General', 'Continental Army Officer', 'Farmer', 'Congressman'],
      bioShort: 'Militia general and Continental Army veteran (1737-1817) who defended the Springfield federal arsenal against Daniel Shays\'s insurgents in January 1787, using cannon fire to repulse the assault.',
      bioLong: `William Shepard was born on December 1, 1737, in Westfield, Massachusetts, a town approximately ten miles west of Springfield. He grew up on a farm and received a basic education before enlisting in the provincial militia during the French and Indian War, where he served at the siege of Louisburg in 1758 and gained his first military experience. When the Revolutionary War began, Shepard was among the first to respond, marching with his company to Cambridge after the battles of Lexington and Concord in April 1775. He served at the Battle of Bunker Hill, was wounded in action, and subsequently rose through the ranks of the Continental Army.

Shepard served throughout the war with consistent distinction. He commanded the 3rd Massachusetts Regiment and later the 4th Massachusetts Regiment, participating in the battles of Long Island, Trenton, Saratoga, and Monmouth, among others. He was promoted to brigadier general of the Massachusetts militia after the war. His record of sustained combat service across nearly the entire war was unusual even among senior officers, and it earned him respect throughout western Massachusetts.

In January 1787, Shepard commanded the militia force that defended the federal arsenal at Springfield against Daniel Shays's insurgents. On January 25, when Shays's column of approximately 1,200 men advanced on the arsenal from the east, Shepard first fired warning shots over their heads. When the column continued to advance, Shepard ordered his artillery to fire directly into the ranks, killing four men and wounding twenty. The insurgents broke and fled. Shepard's decision to use lethal force against fellow veterans and citizens was controversial but effective. He had acted without explicit authorization from the state government, which was still debating how to respond to the rebellion, and his willingness to fire on the insurgents drew both praise and criticism.

WHY HE MATTERS TO SPRINGFIELD

William Shepard was the man who held the Springfield arsenal in the most critical moment of its early history. His defense of the armory in January 1787 preserved the federal weapons stockpile, broke the military power of the insurgency, and ensured that Springfield remained the site of an expanding national armory rather than a captured rebel arsenal. Shepard's decision to fire on the Shaysites was the act that transformed the rebellion from a political crisis into a military defeat, and it forced the question that led to the Constitutional Convention: if the federal government could not protect its own arsenals, what purpose did it serve?

- 1737: Born December 1 in Westfield, Massachusetts
- 1775: Fought at the Battle of Bunker Hill; wounded in action
- 1777: Served at the Battle of Saratoga
- 1787: Defended the Springfield arsenal against Shays's insurgents on January 25
- 1817: Died November 16 in Westfield, Massachusetts, at age 79

SOURCES
- Richards, Leonard L. "Shays's Rebellion: The American Revolution's Final Battle." University of Pennsylvania Press, 2002.
- Minot, George Richards. "The History of the Insurrections in Massachusetts." James W. Burditt, 1810.
- Lockwood, John H. "Westfield and Its Historic Influences." Published by the author, 1922.`,
      birthYear: 1737,
      deathYear: 1817,
      verificationStatus: 'VERIFIED',
    },
  });

  console.log('  People seeded.');
}

// =============================================================================
// PLACES
// =============================================================================

async function seedPlaces() {
  console.log('  Seeding places...');

  await prisma.place.upsert({
    where: { id: 'springfield-armory-grounds' },
    update: { slug: 'armory-green', description: 'The Springfield Armory Green is the open parade ground at the center of the Springfield Armory complex, surrounded by historic arsenal buildings. The green served as the marshaling area for weapons production and military assembly from the Revolutionary period through the twentieth century.', historicalNote: 'The Armory Green has been the symbolic heart of the Springfield Armory since its establishment in 1777. During the Revolutionary War, the open ground was used for drilling militia, inspecting weapons, and organizing supply convoys heading to Continental Army camps. The green was the site of the January 25, 1787, confrontation during Shays\' Rebellion, when General William Shepard\'s militia fired cannon across the open ground at Daniel Shays\'s advancing column.\n\nThe buildings surrounding the green evolved over two centuries, from simple wooden magazines and workshops in the 1770s and 1780s to the brick arsenals and administrative buildings erected in the early nineteenth century. The Main Arsenal, a long brick building on the north side, became the primary storage facility for finished weapons. The green was also the site of regular inspections by military officials, including visits by George Washington and Henry Knox.\n\nToday the Armory Green is part of the Springfield Armory National Historic Site administered by the National Park Service. The open ground retains its historic character and provides the setting for the surrounding museum buildings, which house one of the world\'s largest collections of historic firearms.' },
    create: { id: 'springfield-armory-grounds', townId: SPRINGFIELD_TOWN_ID, name: 'Springfield Armory Green', slug: 'armory-green', placeType: 'LANDMARK', description: 'The Springfield Armory Green is the open parade ground at the center of the Springfield Armory complex, surrounded by historic arsenal buildings. The green served as the marshaling area for weapons production and military assembly from the Revolutionary period through the twentieth century.', historicalNote: 'The Armory Green has been the symbolic heart of the Springfield Armory since its establishment in 1777. During the Revolutionary War, the open ground was used for drilling militia, inspecting weapons, and organizing supply convoys heading to Continental Army camps. The green was the site of the January 25, 1787, confrontation during Shays\' Rebellion, when General William Shepard\'s militia fired cannon across the open ground at Daniel Shays\'s advancing column.\n\nThe buildings surrounding the green evolved over two centuries, from simple wooden magazines and workshops in the 1770s and 1780s to the brick arsenals and administrative buildings erected in the early nineteenth century. The Main Arsenal, a long brick building on the north side, became the primary storage facility for finished weapons. The green was also the site of regular inspections by military officials, including visits by George Washington and Henry Knox.\n\nToday the Armory Green is part of the Springfield Armory National Historic Site administered by the National Park Service. The open ground retains its historic character and provides the setting for the surrounding museum buildings, which house one of the world\'s largest collections of historic firearms.', address: 'One Armory Square, Springfield, MA 01105', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'springfield-court-square' },
    update: { slug: 'court-square', description: 'Court Square is the historic civic center of Springfield, located at the intersection of Main Street and Court Street. It has served as the site of government buildings, public gatherings, and legal proceedings since the town\'s founding in 1636.', historicalNote: 'Court Square was the political heart of Springfield from the colonial period and the site of some of the most consequential events of the Revolutionary era in western Massachusetts. The Hampshire County Courthouse, located on the square, was the target of insurgent actions during Shays\' Rebellion in 1786, when armed farmers attempted to prevent the court from sitting and issuing debt judgments against delinquent taxpayers.\n\nThe court closures of 1786 were among the earliest and most provocative acts of the rebellion. Armed men surrounded the courthouse and physically prevented judges from entering, arguing that the courts had become instruments of oppression rather than justice. These actions echoed the tactics used against British courts before the Revolution, a parallel that both the insurgents and their critics recognized. The square also served as a gathering point for militia during the Revolutionary War, and it was from Court Square that Springfield\'s militia companies departed in response to the Lexington Alarm in April 1775.\n\nThe current Court Square retains its function as a civic center, surrounded by government buildings, churches, and commercial structures. The First Church of Christ, one of the oldest congregations in Springfield, faces the square.' },
    create: { id: 'springfield-court-square', townId: SPRINGFIELD_TOWN_ID, name: 'Court Square', slug: 'court-square', placeType: 'LANDMARK', description: 'Court Square is the historic civic center of Springfield, located at the intersection of Main Street and Court Street. It has served as the site of government buildings, public gatherings, and legal proceedings since the town\'s founding in 1636.', historicalNote: 'Court Square was the political heart of Springfield from the colonial period and the site of some of the most consequential events of the Revolutionary era in western Massachusetts. The Hampshire County Courthouse, located on the square, was the target of insurgent actions during Shays\' Rebellion in 1786, when armed farmers attempted to prevent the court from sitting and issuing debt judgments against delinquent taxpayers.\n\nThe court closures of 1786 were among the earliest and most provocative acts of the rebellion. Armed men surrounded the courthouse and physically prevented judges from entering, arguing that the courts had become instruments of oppression rather than justice. These actions echoed the tactics used against British courts before the Revolution, a parallel that both the insurgents and their critics recognized. The square also served as a gathering point for militia during the Revolutionary War, and it was from Court Square that Springfield\'s militia companies departed in response to the Lexington Alarm in April 1775.\n\nThe current Court Square retains its function as a civic center, surrounded by government buildings, churches, and commercial structures. The First Church of Christ, one of the oldest congregations in Springfield, faces the square.', address: 'Court Square, Springfield, MA 01103', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'springfield-first-church' },
    update: { slug: 'first-church-of-christ', description: 'The First Church of Christ in Springfield, founded in 1637, is one of the oldest congregations in western Massachusetts. The church served as the spiritual and community center of Springfield from its founding through the Revolutionary period.', historicalNote: 'The First Church of Christ was established just one year after Springfield\'s founding by William Pynchon in 1636, making it one of the earliest Puritan congregations in the Connecticut River valley. The church served not merely as a house of worship but as the primary meeting place for town governance throughout the colonial period. Town meetings were held in the meeting house, and the minister occupied a position of civic as well as spiritual authority.\n\nDuring the Revolutionary period, the church served as a rallying point for patriot sentiment in Springfield. Sermons delivered from the pulpit addressed the moral dimensions of resistance to British authority, and the meeting house was used for assemblies that organized Springfield\'s response to the escalating crisis. After the Lexington Alarm in April 1775, the congregation supported the militia companies that marched east.\n\nThe current church building on Court Square is not the original colonial structure, which was replaced multiple times due to fire and deterioration. However, the congregation\'s continuous presence on or near Court Square since 1637 represents one of the longest unbroken threads in Springfield\'s history.' },
    create: { id: 'springfield-first-church', townId: SPRINGFIELD_TOWN_ID, name: 'First Church of Christ', slug: 'first-church-of-christ', placeType: 'CHURCH', description: 'The First Church of Christ in Springfield, founded in 1637, is one of the oldest congregations in western Massachusetts. The church served as the spiritual and community center of Springfield from its founding through the Revolutionary period.', historicalNote: 'The First Church of Christ was established just one year after Springfield\'s founding by William Pynchon in 1636, making it one of the earliest Puritan congregations in the Connecticut River valley. The church served not merely as a house of worship but as the primary meeting place for town governance throughout the colonial period. Town meetings were held in the meeting house, and the minister occupied a position of civic as well as spiritual authority.\n\nDuring the Revolutionary period, the church served as a rallying point for patriot sentiment in Springfield. Sermons delivered from the pulpit addressed the moral dimensions of resistance to British authority, and the meeting house was used for assemblies that organized Springfield\'s response to the escalating crisis. After the Lexington Alarm in April 1775, the congregation supported the militia companies that marched east.\n\nThe current church building on Court Square is not the original colonial structure, which was replaced multiple times due to fire and deterioration. However, the congregation\'s continuous presence on or near Court Square since 1637 represents one of the longest unbroken threads in Springfield\'s history.', address: 'Court Square, Springfield, MA 01103', featured: false },
  });

  await prisma.place.upsert({
    where: { id: 'springfield-museums' },
    update: { slug: 'springfield-museums', description: 'The Springfield Museums complex comprises five museums on a shared campus in downtown Springfield, including the Springfield Science Museum, the Michele and Donald D\'Amour Museum of Fine Arts, the Lyman and Merrie Wood Museum of Springfield History, the George Walter Vincent Smith Art Museum, and the Amazing World of Dr. Seuss Museum.', historicalNote: 'The Lyman and Merrie Wood Museum of Springfield History, part of the Springfield Museums complex, houses significant collections related to Springfield\'s role in the Revolutionary War and the early Republic. Exhibits include artifacts from the Springfield Armory, materials related to Shays\' Rebellion, and documents tracing Springfield\'s development as a Connecticut River valley community from its 1636 founding through the industrial era.\n\nThe museum campus occupies land in the heart of downtown Springfield that has been central to the city\'s civic life since the colonial period. The collections preserve firearms, tools, documents, and personal effects that tell the story of the armorers, farmers, soldiers, and citizens who shaped Springfield during and after the Revolution.\n\nThe broader Springfield Museums complex, while primarily focused on art, science, and the legacy of Springfield native Theodor Geisel (Dr. Seuss), provides essential context for understanding how Springfield evolved from a frontier settlement to a Revolutionary supply depot to an industrial powerhouse.' },
    create: { id: 'springfield-museums', townId: SPRINGFIELD_TOWN_ID, name: 'Springfield Museums', slug: 'springfield-museums', placeType: 'MUSEUM', description: 'The Springfield Museums complex comprises five museums on a shared campus in downtown Springfield, including the Springfield Science Museum, the Michele and Donald D\'Amour Museum of Fine Arts, the Lyman and Merrie Wood Museum of Springfield History, the George Walter Vincent Smith Art Museum, and the Amazing World of Dr. Seuss Museum.', historicalNote: 'The Lyman and Merrie Wood Museum of Springfield History, part of the Springfield Museums complex, houses significant collections related to Springfield\'s role in the Revolutionary War and the early Republic. Exhibits include artifacts from the Springfield Armory, materials related to Shays\' Rebellion, and documents tracing Springfield\'s development as a Connecticut River valley community from its 1636 founding through the industrial era.\n\nThe museum campus occupies land in the heart of downtown Springfield that has been central to the city\'s civic life since the colonial period. The collections preserve firearms, tools, documents, and personal effects that tell the story of the armorers, farmers, soldiers, and citizens who shaped Springfield during and after the Revolution.\n\nThe broader Springfield Museums complex, while primarily focused on art, science, and the legacy of Springfield native Theodor Geisel (Dr. Seuss), provides essential context for understanding how Springfield evolved from a frontier settlement to a Revolutionary supply depot to an industrial powerhouse.', address: '21 Edwards St, Springfield, MA 01103', hours: 'Tues-Sat 10am-5pm, Sun 11am-5pm', admission: '$25 adults', website: 'https://springfieldmuseums.org', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'springfield-connecticut-river-walk' },
    update: { slug: 'connecticut-riverwalk', description: 'The Connecticut Riverwalk and Bikeway is a paved path running along the Connecticut River in downtown Springfield, offering views of the river that was the lifeline of the town\'s economy and strategic significance from its 1636 founding through the Revolutionary era.', historicalNote: 'The Connecticut River was the defining geographic feature of Springfield\'s history. The town was founded by William Pynchon in 1636 at a location where the river was navigable and the surrounding land fertile. During the Revolutionary War, the river served as a critical transportation corridor, carrying supplies downstream to Continental Army positions and connecting Springfield to the network of Connecticut Valley towns that formed the economic backbone of western New England.\n\nThe river also played a role in Shays\' Rebellion. The Connecticut River divided Springfield from West Springfield, separating Daniel Shays\'s forces on the east bank from Luke Day\'s forces on the west. The difficulty of coordinating across the river contributed to the failure of the January 1787 assault on the arsenal. Henry Knox specifically chose Springfield as an armory site in part because the river provided both transportation for raw materials and water power for manufacturing.\n\nThe modern Riverwalk follows a path that would have been familiar to the boatmen, traders, and soldiers who used the river during the eighteenth century. While the riverfront has been extensively developed, the river itself — its width, its current, its seasonal flooding — remains essentially unchanged.' },
    create: { id: 'springfield-connecticut-river-walk', townId: SPRINGFIELD_TOWN_ID, name: 'Connecticut Riverwalk and Bikeway', slug: 'connecticut-riverwalk', placeType: 'TRAIL', description: 'The Connecticut Riverwalk and Bikeway is a paved path running along the Connecticut River in downtown Springfield, offering views of the river that was the lifeline of the town\'s economy and strategic significance from its 1636 founding through the Revolutionary era.', historicalNote: 'The Connecticut River was the defining geographic feature of Springfield\'s history. The town was founded by William Pynchon in 1636 at a location where the river was navigable and the surrounding land fertile. During the Revolutionary War, the river served as a critical transportation corridor, carrying supplies downstream to Continental Army positions and connecting Springfield to the network of Connecticut Valley towns that formed the economic backbone of western New England.\n\nThe river also played a role in Shays\' Rebellion. The Connecticut River divided Springfield from West Springfield, separating Daniel Shays\'s forces on the east bank from Luke Day\'s forces on the west. The difficulty of coordinating across the river contributed to the failure of the January 1787 assault on the arsenal. Henry Knox specifically chose Springfield as an armory site in part because the river provided both transportation for raw materials and water power for manufacturing.\n\nThe modern Riverwalk follows a path that would have been familiar to the boatmen, traders, and soldiers who used the river during the eighteenth century. While the riverfront has been extensively developed, the river itself — its width, its current, its seasonal flooding — remains essentially unchanged.', address: 'West Columbus Ave, Springfield, MA 01105', hours: 'Dawn to dusk', admission: 'Free', featured: false },
  });

  await prisma.place.upsert({
    where: { id: 'springfield-old-first-church-cemetery' },
    update: { slug: 'old-first-church-cemetery', description: 'The Old First Church Cemetery, also known as the Peach Street Cemetery, is one of Springfield\'s oldest burial grounds, containing graves dating to the seventeenth century. It holds the remains of some of Springfield\'s earliest settlers and Revolutionary-era citizens.', historicalNote: 'The Old First Church Cemetery served as the primary burial ground for Springfield\'s earliest inhabitants, including members of the founding families who settled the town under William Pynchon in 1636. The cemetery contains graves spanning over three centuries, with the oldest surviving headstones dating to the late 1600s.\n\nAmong those buried here are soldiers who served in the Colonial and Revolutionary wars, including militia members who responded to the Lexington Alarm in 1775 and men who served in the Continental Army. The weathered slate headstones, carved with the winged skulls, urns, and willows typical of New England funerary art, provide a tangible connection to the people who lived through Springfield\'s formative era.\n\nThe cemetery\'s location near the original town center reflects the colonial practice of burying the dead close to the meeting house and the center of community life. As Springfield grew, newer cemeteries were established, but the Old First Church Cemetery remained a marker of the town\'s origins.' },
    create: { id: 'springfield-old-first-church-cemetery', townId: SPRINGFIELD_TOWN_ID, name: 'Old First Church Cemetery', slug: 'old-first-church-cemetery', placeType: 'CEMETERY', description: 'The Old First Church Cemetery, also known as the Peach Street Cemetery, is one of Springfield\'s oldest burial grounds, containing graves dating to the seventeenth century. It holds the remains of some of Springfield\'s earliest settlers and Revolutionary-era citizens.', historicalNote: 'The Old First Church Cemetery served as the primary burial ground for Springfield\'s earliest inhabitants, including members of the founding families who settled the town under William Pynchon in 1636. The cemetery contains graves spanning over three centuries, with the oldest surviving headstones dating to the late 1600s.\n\nAmong those buried here are soldiers who served in the Colonial and Revolutionary wars, including militia members who responded to the Lexington Alarm in 1775 and men who served in the Continental Army. The weathered slate headstones, carved with the winged skulls, urns, and willows typical of New England funerary art, provide a tangible connection to the people who lived through Springfield\'s formative era.\n\nThe cemetery\'s location near the original town center reflects the colonial practice of burying the dead close to the meeting house and the center of community life. As Springfield grew, newer cemeteries were established, but the Old First Church Cemetery remained a marker of the town\'s origins.', address: 'Peach Street, Springfield, MA 01104', hours: 'Dawn to dusk', admission: 'Free', featured: false },
  });

  await prisma.place.upsert({
    where: { id: 'springfield-stearns-square' },
    update: { slug: 'stearns-square', description: 'Stearns Square is a small public square in downtown Springfield at the intersection of Worthington and Bridge streets. Named for prominent local citizen Chester W. Stearns, the square sits in what was the commercial district during the colonial and early Republic periods.', historicalNote: 'The area now known as Stearns Square was part of Springfield\'s commercial core during the Revolutionary era. The intersection of roads leading to the Connecticut River ferry crossing, the road north to Northampton, and the road east to the hill towns made this area a natural gathering point for travelers and traders. During the Revolutionary War, Springfield\'s taverns and shops in this district served soldiers, supply teamsters, and government agents passing through the town.\n\nThe square\'s location near the river crossing also gave it strategic significance during Shays\' Rebellion. The roads converging here connected the armory on the hill to the river crossing and the routes into West Springfield, where Luke Day\'s insurgent forces were based. Control of this crossroads was essential to controlling movement between the two banks of the Connecticut River.\n\nToday Stearns Square is a small urban park surrounded by restaurants and businesses. Its colonial-era significance as a transportation hub is preserved in the convergence of streets that still follow the paths laid out in the seventeenth and eighteenth centuries.' },
    create: { id: 'springfield-stearns-square', townId: SPRINGFIELD_TOWN_ID, name: 'Stearns Square', slug: 'stearns-square', placeType: 'LANDMARK', description: 'Stearns Square is a small public square in downtown Springfield at the intersection of Worthington and Bridge streets. Named for prominent local citizen Chester W. Stearns, the square sits in what was the commercial district during the colonial and early Republic periods.', historicalNote: 'The area now known as Stearns Square was part of Springfield\'s commercial core during the Revolutionary era. The intersection of roads leading to the Connecticut River ferry crossing, the road north to Northampton, and the road east to the hill towns made this area a natural gathering point for travelers and traders. During the Revolutionary War, Springfield\'s taverns and shops in this district served soldiers, supply teamsters, and government agents passing through the town.\n\nThe square\'s location near the river crossing also gave it strategic significance during Shays\' Rebellion. The roads converging here connected the armory on the hill to the river crossing and the routes into West Springfield, where Luke Day\'s insurgent forces were based. Control of this crossroads was essential to controlling movement between the two banks of the Connecticut River.\n\nToday Stearns Square is a small urban park surrounded by restaurants and businesses. Its colonial-era significance as a transportation hub is preserved in the convergence of streets that still follow the paths laid out in the seventeenth and eighteenth centuries.', address: 'Worthington St & Bridge St, Springfield, MA 01103', hours: 'Always accessible', admission: 'Free', featured: false },
  });

  await prisma.place.upsert({
    where: { id: 'springfield-mattoon-street' },
    update: { slug: 'mattoon-street-historic-district', description: 'The Mattoon Street Historic District is a block of Victorian-era row houses in downtown Springfield, representing one of the best-preserved examples of nineteenth-century residential architecture in western Massachusetts. The street sits on land that was part of Springfield\'s original settlement pattern.', historicalNote: 'While the current Mattoon Street row houses date to the 1870s and 1880s, the land on which they sit was part of Springfield\'s original town layout. During the Revolutionary era, this area was on the edge of the settled town, between the commercial center near Court Square and the armory grounds on the hill to the east. The street is named after Ebenezer Mattoon, a Continental Army officer from Springfield who served in the Revolution and later became a prominent local citizen.\n\nMattoon himself was a veteran of the war who rose to the rank of lieutenant colonel. After the war, he was involved in the political life of Springfield and Hampshire County. The naming of the street in his honor reflects the deep connection between military service and civic identity in post-Revolutionary Springfield, where the armory and its associated community of veterans and craftsmen shaped the town\'s social structure.\n\nThe Mattoon Street Historic District today is valued for its Victorian architecture, but its name and location connect it to the Revolutionary generation that established Springfield\'s identity as a military and manufacturing center.' },
    create: { id: 'springfield-mattoon-street', townId: SPRINGFIELD_TOWN_ID, name: 'Mattoon Street Historic District', slug: 'mattoon-street-historic-district', placeType: 'LANDMARK', description: 'The Mattoon Street Historic District is a block of Victorian-era row houses in downtown Springfield, representing one of the best-preserved examples of nineteenth-century residential architecture in western Massachusetts. The street sits on land that was part of Springfield\'s original settlement pattern.', historicalNote: 'While the current Mattoon Street row houses date to the 1870s and 1880s, the land on which they sit was part of Springfield\'s original town layout. During the Revolutionary era, this area was on the edge of the settled town, between the commercial center near Court Square and the armory grounds on the hill to the east. The street is named after Ebenezer Mattoon, a Continental Army officer from Springfield who served in the Revolution and later became a prominent local citizen.\n\nMattoon himself was a veteran of the war who rose to the rank of lieutenant colonel. After the war, he was involved in the political life of Springfield and Hampshire County. The naming of the street in his honor reflects the deep connection between military service and civic identity in post-Revolutionary Springfield, where the armory and its associated community of veterans and craftsmen shaped the town\'s social structure.\n\nThe Mattoon Street Historic District today is valued for its Victorian architecture, but its name and location connect it to the Revolutionary generation that established Springfield\'s identity as a military and manufacturing center.', address: 'Mattoon Street, Springfield, MA 01105', hours: 'Always accessible (outdoor)', admission: 'Free', featured: false },
  });

  await prisma.place.upsert({
    where: { id: 'springfield-armory-nhs' },
    update: { slug: 'springfield-armory-nhs', description: 'The Springfield Armory National Historic Site, administered by the National Park Service, preserves the site of America\'s first national armory. The museum houses one of the world\'s largest collections of historic military firearms, spanning from the Revolutionary War through the twentieth century.', historicalNote: 'The Springfield Armory was established in 1777 as a storage depot and repair facility for Continental Army weapons. Over the following two centuries, it evolved into one of the most important manufacturing centers in American history. The armory produced the weapons that armed the United States military from the Revolution through the Vietnam War, including the Model 1795 musket, the Springfield Model 1861 rifle-musket (the primary Union infantry weapon of the Civil War), and the M1 Garand (the standard U.S. infantry rifle of World War II).\n\nThe armory complex grew from a few wooden buildings in the 1770s to a vast industrial campus. The Main Arsenal, built in 1847, now houses the museum\'s firearms collection, which was famously described by Henry Wadsworth Longfellow in his 1843 poem "The Arsenal at Springfield." The poem, written after Longfellow visited the armory and saw thousands of muskets stacked in rows, became one of the most well-known antiwar poems of the nineteenth century.\n\nThe armory closed in 1968 and was designated a National Historic Site in 1974. The National Park Service maintains the museum and grounds, which include the Armory Green, the Main Arsenal, the Commanding Officer\'s Quarters, and several other historic buildings. The collection includes over 10,000 firearms and is considered one of the most significant collections of American military technology in the world.' },
    create: { id: 'springfield-armory-nhs', townId: SPRINGFIELD_TOWN_ID, name: 'Springfield Armory National Historic Site', slug: 'springfield-armory-nhs', placeType: 'MUSEUM', description: 'The Springfield Armory National Historic Site, administered by the National Park Service, preserves the site of America\'s first national armory. The museum houses one of the world\'s largest collections of historic military firearms, spanning from the Revolutionary War through the twentieth century.', historicalNote: 'The Springfield Armory was established in 1777 as a storage depot and repair facility for Continental Army weapons. Over the following two centuries, it evolved into one of the most important manufacturing centers in American history. The armory produced the weapons that armed the United States military from the Revolution through the Vietnam War, including the Model 1795 musket, the Springfield Model 1861 rifle-musket (the primary Union infantry weapon of the Civil War), and the M1 Garand (the standard U.S. infantry rifle of World War II).\n\nThe armory complex grew from a few wooden buildings in the 1770s to a vast industrial campus. The Main Arsenal, built in 1847, now houses the museum\'s firearms collection, which was famously described by Henry Wadsworth Longfellow in his 1843 poem "The Arsenal at Springfield." The poem, written after Longfellow visited the armory and saw thousands of muskets stacked in rows, became one of the most well-known antiwar poems of the nineteenth century.\n\nThe armory closed in 1968 and was designated a National Historic Site in 1974. The National Park Service maintains the museum and grounds, which include the Armory Green, the Main Arsenal, the Commanding Officer\'s Quarters, and several other historic buildings. The collection includes over 10,000 firearms and is considered one of the most significant collections of American military technology in the world.', address: 'One Armory Square, Suite 2, Springfield, MA 01105', hours: 'Wed-Sun 9:30am-4pm', admission: 'Free', website: 'https://www.nps.gov/spar', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'springfield-cemetery' },
    update: { slug: 'springfield-cemetery', description: 'Springfield Cemetery, established in 1841, is a large rural-style cemetery on Maple Street that serves as the final resting place of many prominent Springfield citizens, including veterans of the Revolutionary War and later conflicts.', historicalNote: 'Springfield Cemetery was designed in the rural cemetery movement tradition, influenced by Mount Auburn Cemetery in Cambridge, Massachusetts. While it postdates the Revolutionary period by over sixty years, it became the burial site of some relocated Revolutionary-era graves and later generations of families connected to the armory and the founding of the city.\n\nThe cemetery contains the graves of soldiers, armorers, and civic leaders whose lives were shaped by Springfield\'s Revolutionary heritage. The ornate Victorian monuments and carefully landscaped grounds reflect the prosperity that the armory and its associated industries brought to Springfield in the nineteenth century. The cemetery also includes sections dedicated to veterans of multiple wars, providing a continuous record of Springfield\'s military connections from the founding era through the modern period.\n\nFor visitors interested in Springfield\'s Revolutionary history, the cemetery offers context for understanding how the town\'s eighteenth-century origins evolved into a nineteenth-century industrial city. The gravestones and monuments tell stories of families who maintained connections to the armory across multiple generations.' },
    create: { id: 'springfield-cemetery', townId: SPRINGFIELD_TOWN_ID, name: 'Springfield Cemetery', slug: 'springfield-cemetery', placeType: 'CEMETERY', description: 'Springfield Cemetery, established in 1841, is a large rural-style cemetery on Maple Street that serves as the final resting place of many prominent Springfield citizens, including veterans of the Revolutionary War and later conflicts.', historicalNote: 'Springfield Cemetery was designed in the rural cemetery movement tradition, influenced by Mount Auburn Cemetery in Cambridge, Massachusetts. While it postdates the Revolutionary period by over sixty years, it became the burial site of some relocated Revolutionary-era graves and later generations of families connected to the armory and the founding of the city.\n\nThe cemetery contains the graves of soldiers, armorers, and civic leaders whose lives were shaped by Springfield\'s Revolutionary heritage. The ornate Victorian monuments and carefully landscaped grounds reflect the prosperity that the armory and its associated industries brought to Springfield in the nineteenth century. The cemetery also includes sections dedicated to veterans of multiple wars, providing a continuous record of Springfield\'s military connections from the founding era through the modern period.\n\nFor visitors interested in Springfield\'s Revolutionary history, the cemetery offers context for understanding how the town\'s eighteenth-century origins evolved into a nineteenth-century industrial city. The gravestones and monuments tell stories of families who maintained connections to the armory across multiple generations.', address: '171 Maple St, Springfield, MA 01105', hours: 'Daily 8am-4:30pm', admission: 'Free', featured: false },
  });

  console.log('  Places seeded.');
}

// =============================================================================
// EVENTS
// =============================================================================

async function seedEvents() {
  console.log('  Seeding events...');

  // --- 10 EXISTING EVENTS (update slugs + summaries) ---

  await prisma.event.upsert({
    where: { id: 'event-springfield-court-closures' },
    update: { slug: 'springfield-court-closures-1786', summary: `In the late summer and fall of 1786, armed groups of farmers and veterans in western Massachusetts began forcibly closing the county courts to prevent judges from issuing debt judgments and foreclosure orders. The court closures in Springfield and Northampton were among the most significant of these actions. On August 29, 1786, approximately 1,500 armed men surrounded the Hampshire County Courthouse in Northampton, preventing the Court of Common Pleas from sitting. Similar actions followed in Springfield, where insurgents blocked the court proceedings that had been systematically dispossessing farmers of their land and livestock.

The court closures were not spontaneous acts of violence but deliberate political tactics drawn from the playbook of the American Revolution. Before the war, patriots had closed British courts and prevented royal officials from exercising authority. The insurgents of 1786 employed the same methods against institutions they believed had been captured by creditor interests. They argued that the courts, by enforcing debt collection in scarce hard currency against farmers who had no access to specie, had ceased to function as instruments of justice and become tools of oppression.

The closures sent shockwaves through the Massachusetts political establishment in Boston. Governor James Bowdoin and the legislature initially attempted to address the crisis through modest reforms, suspending certain debt proceedings and offering partial tax relief. But these measures were too little and too late to satisfy the insurgents, and the political situation continued to deteriorate through the fall of 1786, setting the stage for the armed confrontation at the Springfield arsenal in January 1787.` },
    create: { id: 'event-springfield-court-closures', townId: SPRINGFIELD_TOWN_ID, name: 'Springfield Court Closures', slug: 'springfield-court-closures-1786', startDate: new Date('1786-08-29'), datePrecision: 'MONTH', summary: `In the late summer and fall of 1786, armed groups of farmers and veterans in western Massachusetts began forcibly closing the county courts to prevent judges from issuing debt judgments and foreclosure orders. The court closures in Springfield and Northampton were among the most significant of these actions. On August 29, 1786, approximately 1,500 armed men surrounded the Hampshire County Courthouse in Northampton, preventing the Court of Common Pleas from sitting. Similar actions followed in Springfield, where insurgents blocked the court proceedings that had been systematically dispossessing farmers of their land and livestock.

The court closures were not spontaneous acts of violence but deliberate political tactics drawn from the playbook of the American Revolution. Before the war, patriots had closed British courts and prevented royal officials from exercising authority. The insurgents of 1786 employed the same methods against institutions they believed had been captured by creditor interests. They argued that the courts, by enforcing debt collection in scarce hard currency against farmers who had no access to specie, had ceased to function as instruments of justice and become tools of oppression.

The closures sent shockwaves through the Massachusetts political establishment in Boston. Governor James Bowdoin and the legislature initially attempted to address the crisis through modest reforms, suspending certain debt proceedings and offering partial tax relief. But these measures were too little and too late to satisfy the insurgents, and the political situation continued to deteriorate through the fall of 1786, setting the stage for the armed confrontation at the Springfield arsenal in January 1787.`, significanceWeight: 75 },
  });

  await prisma.event.upsert({
    where: { id: 'event-springfield-lexington-alarm-response' },
    update: { slug: 'springfield-lexington-alarm-1775', summary: `On April 19, 1775, when news of the fighting at Lexington and Concord reached Springfield, the town's militia companies mustered and marched east to join the gathering patriot forces around Boston. Springfield, located approximately 100 miles west of Boston, received the alarm within roughly 24 to 36 hours through the relay system of express riders that carried the news across Massachusetts. The response was swift and nearly unanimous.

Springfield's militia companies were among the many western Massachusetts units that converged on the Boston area in the days following Lexington and Concord. The march east was significant not only for the military reinforcement it provided but for the political statement it made: towns deep in the interior, far from the immediate conflict with British authority in Boston, were willing to take up arms in solidarity with the coastal patriots. Springfield's response demonstrated that the resistance was not merely a Boston affair but a colony-wide mobilization.

The Lexington Alarm response also revealed Springfield's logistical importance. As militia companies from western Massachusetts passed through the town, Springfield served as a natural staging and supply point. The town's position on the Connecticut River and at the junction of major roads east, west, and north made it a hub through which men, supplies, and information flowed. This experience foreshadowed Springfield's later role as a major supply depot and armory site during the war.` },
    create: { id: 'event-springfield-lexington-alarm-response', townId: SPRINGFIELD_TOWN_ID, name: 'Springfield Responds to Lexington', slug: 'springfield-lexington-alarm-1775', startDate: new Date('1775-04-20'), datePrecision: 'DAY', summary: `On April 19, 1775, when news of the fighting at Lexington and Concord reached Springfield, the town's militia companies mustered and marched east to join the gathering patriot forces around Boston. Springfield, located approximately 100 miles west of Boston, received the alarm within roughly 24 to 36 hours through the relay system of express riders that carried the news across Massachusetts. The response was swift and nearly unanimous.

Springfield's militia companies were among the many western Massachusetts units that converged on the Boston area in the days following Lexington and Concord. The march east was significant not only for the military reinforcement it provided but for the political statement it made: towns deep in the interior, far from the immediate conflict with British authority in Boston, were willing to take up arms in solidarity with the coastal patriots. Springfield's response demonstrated that the resistance was not merely a Boston affair but a colony-wide mobilization.

The Lexington Alarm response also revealed Springfield's logistical importance. As militia companies from western Massachusetts passed through the town, Springfield served as a natural staging and supply point. The town's position on the Connecticut River and at the junction of major roads east, west, and north made it a hub through which men, supplies, and information flowed. This experience foreshadowed Springfield's later role as a major supply depot and armory site during the war.`, significanceWeight: 65 },
  });

  await prisma.event.upsert({
    where: { id: 'event-springfield-continental-army-supply' },
    update: { slug: 'springfield-continental-supply-1775', summary: `Beginning in 1775, Springfield emerged as a critical supply route and staging area for the Continental Army. The town's location on the Connecticut River, at the crossroads of major roads running east to Boston, north to New Hampshire and Vermont, south to Connecticut, and west to the Berkshires, made it a natural logistics hub. Supplies flowing from the agricultural regions of the Connecticut Valley — grain, cattle, hay, and timber — were collected and forwarded through Springfield to the Continental forces besieging Boston and later to armies operating throughout New England and New York.

The Continental Congress and the Massachusetts Provincial Congress both recognized Springfield's strategic value early in the conflict. Powder, lead, and other military stores were gathered at Springfield for distribution. The town's existing infrastructure — its river landing, its roads, its warehouses and barns — was pressed into military service. Local residents were employed as teamsters, storekeepers, and laborers supporting the supply effort.

Springfield's role as a supply center also attracted the attention of military planners who saw the town's potential for weapons manufacturing. The combination of water power from the Mill River, skilled metalworkers in the Connecticut Valley, and a secure interior location far from the vulnerable coastline made Springfield an ideal site for a permanent military manufactory. The supply depot function of the early war years laid the groundwork for the armory that would define Springfield's identity for the next two centuries.` },
    create: { id: 'event-springfield-continental-army-supply', townId: SPRINGFIELD_TOWN_ID, name: 'Springfield as Continental Supply Route', slug: 'springfield-continental-supply-1775', startDate: new Date('1775-06-01'), datePrecision: 'YEAR', summary: `Beginning in 1775, Springfield emerged as a critical supply route and staging area for the Continental Army. The town's location on the Connecticut River, at the crossroads of major roads running east to Boston, north to New Hampshire and Vermont, south to Connecticut, and west to the Berkshires, made it a natural logistics hub. Supplies flowing from the agricultural regions of the Connecticut Valley — grain, cattle, hay, and timber — were collected and forwarded through Springfield to the Continental forces besieging Boston and later to armies operating throughout New England and New York.

The Continental Congress and the Massachusetts Provincial Congress both recognized Springfield's strategic value early in the conflict. Powder, lead, and other military stores were gathered at Springfield for distribution. The town's existing infrastructure — its river landing, its roads, its warehouses and barns — was pressed into military service. Local residents were employed as teamsters, storekeepers, and laborers supporting the supply effort.

Springfield's role as a supply center also attracted the attention of military planners who saw the town's potential for weapons manufacturing. The combination of water power from the Mill River, skilled metalworkers in the Connecticut Valley, and a secure interior location far from the vulnerable coastline made Springfield an ideal site for a permanent military manufactory. The supply depot function of the early war years laid the groundwork for the armory that would define Springfield's identity for the next two centuries.`, significanceWeight: 70 },
  });

  await prisma.event.upsert({
    where: { id: 'event-springfield-knox-supply-route' },
    update: { slug: 'springfield-knox-supply-depot-1775', summary: `In the winter of 1775-1776, Henry Knox's legendary transport of cannons from Fort Ticonderoga to the siege lines around Boston passed through or near Springfield, utilizing the Connecticut River valley as a critical segment of the route. Knox's Noble Train of Artillery moved approximately sixty tons of heavy ordnance — cannons, mortars, howitzers, and ammunition — across nearly 300 miles of frozen terrain. Springfield, as the most significant town on the Connecticut River in western Massachusetts, served as a waypoint and supply depot for this extraordinary logistical operation.

The Knox expedition demonstrated Springfield's value as a military logistics center. The town provided rest, resupply, and fresh draft animals for the column as it moved through the valley. Local residents assisted with the transport, contributing oxen, sledges, and labor. The route followed the frozen Connecticut River and the roads along its banks, terrain that Knox's teamsters navigated through deep snow and bitter cold.

Knox's passage through the Springfield area reinforced the town's strategic importance in the minds of military planners. The same geographic advantages that made Springfield useful as a waypoint for the artillery train — its river access, its road network, its position in the interior — would lead Knox and others to advocate for establishing a permanent military facility there. The Noble Train of Artillery was one of the most celebrated feats of the Revolution, and Springfield's role in supporting it connected the town to the war's most dramatic logistical achievement.` },
    create: { id: 'event-springfield-knox-supply-route', townId: SPRINGFIELD_TOWN_ID, name: 'Springfield as Supply Depot', slug: 'springfield-knox-supply-depot-1775', startDate: new Date('1775-12-01'), datePrecision: 'MONTH', summary: `In the winter of 1775-1776, Henry Knox's legendary transport of cannons from Fort Ticonderoga to the siege lines around Boston passed through or near Springfield, utilizing the Connecticut River valley as a critical segment of the route. Knox's Noble Train of Artillery moved approximately sixty tons of heavy ordnance — cannons, mortars, howitzers, and ammunition — across nearly 300 miles of frozen terrain. Springfield, as the most significant town on the Connecticut River in western Massachusetts, served as a waypoint and supply depot for this extraordinary logistical operation.

The Knox expedition demonstrated Springfield's value as a military logistics center. The town provided rest, resupply, and fresh draft animals for the column as it moved through the valley. Local residents assisted with the transport, contributing oxen, sledges, and labor. The route followed the frozen Connecticut River and the roads along its banks, terrain that Knox's teamsters navigated through deep snow and bitter cold.

Knox's passage through the Springfield area reinforced the town's strategic importance in the minds of military planners. The same geographic advantages that made Springfield useful as a waypoint for the artillery train — its river access, its road network, its position in the interior — would lead Knox and others to advocate for establishing a permanent military facility there. The Noble Train of Artillery was one of the most celebrated feats of the Revolution, and Springfield's role in supporting it connected the town to the war's most dramatic logistical achievement.`, significanceWeight: 72 },
  });

  await prisma.event.upsert({
    where: { id: 'event-springfield-armory-established' },
    update: { slug: 'springfield-armory-established-1777', summary: `In 1777, the Continental Congress authorized the establishment of a military arsenal and laboratory at Springfield, Massachusetts, formalizing a role that the town had been filling informally since the start of the war. The initial facility was modest: a collection of buildings on elevated ground east of the town center, chosen for its defensible position and proximity to transportation routes. The early armory functioned primarily as a storage depot for weapons, ammunition, and military supplies, and as a repair shop where damaged muskets and artillery pieces could be restored to service.

The decision to locate the armory at Springfield reflected the recommendations of Henry Knox and other military leaders who recognized the town's geographic advantages. Springfield was far enough from the coast to be safe from British naval raids, connected to major transportation routes via the Connecticut River and overland roads, and surrounded by communities with metalworking traditions that could supply skilled labor. The Mill River, which flowed through the town, provided water power for manufacturing operations.

The establishment of the armory transformed Springfield from a prosperous agricultural town into a military-industrial center. Workers, soldiers, and government officials associated with the armory swelled the population. Local blacksmiths, carpenters, and other craftsmen found steady employment servicing military needs. The armory's presence also made Springfield a target, as the events of Shays' Rebellion would demonstrate a decade later. The 1777 establishment was the beginning of a relationship between Springfield and the American military that would endure for nearly two centuries.` },
    create: { id: 'event-springfield-armory-established', townId: SPRINGFIELD_TOWN_ID, name: 'Springfield Armory Established', slug: 'springfield-armory-established-1777', startDate: new Date('1777-01-01'), datePrecision: 'YEAR', summary: `In 1777, the Continental Congress authorized the establishment of a military arsenal and laboratory at Springfield, Massachusetts, formalizing a role that the town had been filling informally since the start of the war. The initial facility was modest: a collection of buildings on elevated ground east of the town center, chosen for its defensible position and proximity to transportation routes. The early armory functioned primarily as a storage depot for weapons, ammunition, and military supplies, and as a repair shop where damaged muskets and artillery pieces could be restored to service.

The decision to locate the armory at Springfield reflected the recommendations of Henry Knox and other military leaders who recognized the town's geographic advantages. Springfield was far enough from the coast to be safe from British naval raids, connected to major transportation routes via the Connecticut River and overland roads, and surrounded by communities with metalworking traditions that could supply skilled labor. The Mill River, which flowed through the town, provided water power for manufacturing operations.

The establishment of the armory transformed Springfield from a prosperous agricultural town into a military-industrial center. Workers, soldiers, and government officials associated with the armory swelled the population. Local blacksmiths, carpenters, and other craftsmen found steady employment servicing military needs. The armory's presence also made Springfield a target, as the events of Shays' Rebellion would demonstrate a decade later. The 1777 establishment was the beginning of a relationship between Springfield and the American military that would endure for nearly two centuries.`, significanceWeight: 90 },
  });

  await prisma.event.upsert({
    where: { id: 'event-springfield-knox-visit' },
    update: { slug: 'springfield-knox-inspection-1785', summary: `In 1785, Henry Knox, then serving as Secretary of War under the Articles of Confederation, inspected the Springfield Armory as part of his efforts to assess and improve the nation's military infrastructure. Knox found the facility in a state of partial development: it had served effectively as a storage depot and repair center during the war, but it lacked the capacity for large-scale weapons manufacturing. His inspection led to recommendations for expanding the armory's capabilities and workforce.

Knox's visit was part of a broader effort to establish a permanent national military establishment in the uncertain postwar period. The Continental Army had been largely disbanded, and the new nation's military resources were scattered and poorly maintained. Knox believed that a system of national armories, capable of producing standardized weapons, was essential to the country's defense. Springfield, with its existing infrastructure and strategic location, was his preferred site for the primary armory.

The 1785 inspection also revealed the tensions between national military needs and local economic conditions. Western Massachusetts was in the grip of the economic crisis that would soon erupt into Shays' Rebellion. The farmers and veterans in the towns surrounding Springfield were being crushed by debt and taxation even as the federal government was investing in the armory on the hill above their town. Knox's plans for a national weapons manufactory proceeded against a backdrop of deepening local despair, a juxtaposition that would become violently apparent within two years.` },
    create: { id: 'event-springfield-knox-visit', townId: SPRINGFIELD_TOWN_ID, name: 'Henry Knox Inspects Springfield', slug: 'springfield-knox-inspection-1785', startDate: new Date('1785-01-01'), datePrecision: 'YEAR', summary: `In 1785, Henry Knox, then serving as Secretary of War under the Articles of Confederation, inspected the Springfield Armory as part of his efforts to assess and improve the nation's military infrastructure. Knox found the facility in a state of partial development: it had served effectively as a storage depot and repair center during the war, but it lacked the capacity for large-scale weapons manufacturing. His inspection led to recommendations for expanding the armory's capabilities and workforce.

Knox's visit was part of a broader effort to establish a permanent national military establishment in the uncertain postwar period. The Continental Army had been largely disbanded, and the new nation's military resources were scattered and poorly maintained. Knox believed that a system of national armories, capable of producing standardized weapons, was essential to the country's defense. Springfield, with its existing infrastructure and strategic location, was his preferred site for the primary armory.

The 1785 inspection also revealed the tensions between national military needs and local economic conditions. Western Massachusetts was in the grip of the economic crisis that would soon erupt into Shays' Rebellion. The farmers and veterans in the towns surrounding Springfield were being crushed by debt and taxation even as the federal government was investing in the armory on the hill above their town. Knox's plans for a national weapons manufactory proceeded against a backdrop of deepening local despair, a juxtaposition that would become violently apparent within two years.`, significanceWeight: 60 },
  });

  await prisma.event.upsert({
    where: { id: 'event-springfield-musket-production' },
    update: { slug: 'springfield-first-muskets-1795', summary: `In 1795, the Springfield Armory began production of the Model 1795 musket, the first standardized military firearm manufactured in the United States. The weapon was based on the French Charleville musket pattern, which American soldiers had used during the Revolutionary War thanks to French military assistance. Under superintendent David Ames, the armory assembled a workforce of skilled armorers and began the painstaking process of producing complete muskets from raw materials — iron, steel, and walnut — on site.

The Model 1795 represented a critical milestone in American manufacturing. Before its production, the United States had depended on foreign-made weapons or the output of small private gunsmiths who produced weapons individually, with no standardization of parts or quality. The Springfield Armory's production of the Model 1795 marked the beginning of systematic, government-directed arms manufacturing in America. Each musket was built to common specifications, though true interchangeability of parts would not be achieved until later decades.

The commencement of musket production transformed the armory from a storage and repair facility into a true manufactory and validated Henry Knox's vision for Springfield. The armory's manufacturing operations created a demand for skilled labor that attracted workers from throughout the Connecticut Valley and beyond, establishing the community of armorers and craftsmen that would make Springfield one of America's most important industrial centers. The techniques developed at Springfield in the late 1790s and early 1800s contributed to what historians would later call the American System of Manufacturing.` },
    create: { id: 'event-springfield-musket-production', townId: SPRINGFIELD_TOWN_ID, name: 'First Muskets Produced at Springfield', slug: 'springfield-first-muskets-1795', startDate: new Date('1795-01-01'), datePrecision: 'YEAR', summary: `In 1795, the Springfield Armory began production of the Model 1795 musket, the first standardized military firearm manufactured in the United States. The weapon was based on the French Charleville musket pattern, which American soldiers had used during the Revolutionary War thanks to French military assistance. Under superintendent David Ames, the armory assembled a workforce of skilled armorers and began the painstaking process of producing complete muskets from raw materials — iron, steel, and walnut — on site.

The Model 1795 represented a critical milestone in American manufacturing. Before its production, the United States had depended on foreign-made weapons or the output of small private gunsmiths who produced weapons individually, with no standardization of parts or quality. The Springfield Armory's production of the Model 1795 marked the beginning of systematic, government-directed arms manufacturing in America. Each musket was built to common specifications, though true interchangeability of parts would not be achieved until later decades.

The commencement of musket production transformed the armory from a storage and repair facility into a true manufactory and validated Henry Knox's vision for Springfield. The armory's manufacturing operations created a demand for skilled labor that attracted workers from throughout the Connecticut Valley and beyond, establishing the community of armorers and craftsmen that would make Springfield one of America's most important industrial centers. The techniques developed at Springfield in the late 1790s and early 1800s contributed to what historians would later call the American System of Manufacturing.`, significanceWeight: 85 },
  });

  await prisma.event.upsert({
    where: { id: 'event-springfield-shays-rebellion-begins' },
    update: { slug: 'shays-rebellion-begins-1786', summary: `In the summer of 1786, the economic crisis in western Massachusetts escalated from political protest into armed insurrection. Farmers and veterans, crushed by heavy taxes payable only in scarce hard currency and facing foreclosure, imprisonment for debt, or both, began organizing into armed bands to close the courts and prevent further legal proceedings against debtors. The movement drew on the rhetoric and tactics of the American Revolution, with participants arguing that they were resisting an oppressive government just as they had resisted British tyranny a decade earlier.

The unrest was not the work of a single leader or a coordinated conspiracy but a spontaneous uprising across dozens of towns in western and central Massachusetts. Daniel Shays of Pelham, Luke Day of West Springfield, and Eli Parsons of Adams were among the most prominent figures, but the movement was broadly based among the rural population. Veterans who had served in the Continental Army without adequate pay were especially bitter, seeing the government they had fought to create now seizing their farms and jailing them for debts.

The rebellion's origins lay in structural problems of the postwar economy. The Massachusetts legislature had imposed taxes to pay off the state's war debts, but the taxes were payable in hard currency that barely existed in the rural counties. Merchants in Boston held most of the state's specie, and rural communities relied on barter and credit. The courts, by enforcing debt judgments in hard currency, effectively transferred wealth from the countryside to Boston creditors. The insurgents saw the court system not as an impartial arbiter but as a weapon aimed at their communities.` },
    create: { id: 'event-springfield-shays-rebellion-begins', townId: SPRINGFIELD_TOWN_ID, name: 'Shays\' Rebellion: Western Massachusetts Unrest', slug: 'shays-rebellion-begins-1786', startDate: new Date('1786-08-01'), datePrecision: 'MONTH', summary: `In the summer of 1786, the economic crisis in western Massachusetts escalated from political protest into armed insurrection. Farmers and veterans, crushed by heavy taxes payable only in scarce hard currency and facing foreclosure, imprisonment for debt, or both, began organizing into armed bands to close the courts and prevent further legal proceedings against debtors. The movement drew on the rhetoric and tactics of the American Revolution, with participants arguing that they were resisting an oppressive government just as they had resisted British tyranny a decade earlier.

The unrest was not the work of a single leader or a coordinated conspiracy but a spontaneous uprising across dozens of towns in western and central Massachusetts. Daniel Shays of Pelham, Luke Day of West Springfield, and Eli Parsons of Adams were among the most prominent figures, but the movement was broadly based among the rural population. Veterans who had served in the Continental Army without adequate pay were especially bitter, seeing the government they had fought to create now seizing their farms and jailing them for debts.

The rebellion's origins lay in structural problems of the postwar economy. The Massachusetts legislature had imposed taxes to pay off the state's war debts, but the taxes were payable in hard currency that barely existed in the rural counties. Merchants in Boston held most of the state's specie, and rural communities relied on barter and credit. The courts, by enforcing debt judgments in hard currency, effectively transferred wealth from the countryside to Boston creditors. The insurgents saw the court system not as an impartial arbiter but as a weapon aimed at their communities.`, significanceWeight: 80 },
  });

  await prisma.event.upsert({
    where: { id: 'event-springfield-shays-rebellion' },
    update: { slug: 'shays-rebellion-springfield-1787', summary: `On January 25, 1787, Daniel Shays led a column of approximately 1,200 armed insurgents toward the federal arsenal at Springfield, intending to seize the weapons stored there. The arsenal contained thousands of muskets, cannons, and stores of ammunition — a prize that would have dramatically strengthened the rebellion's military position. General William Shepard, commanding roughly 1,200 militia loyal to the state government, had fortified positions around the arsenal and waited.

The assault was supposed to be a coordinated three-pronged attack. Shays was to advance from the east, Luke Day from the west across the Connecticut River, and Eli Parsons from the north. But Day sent a message to Shays requesting a one-day postponement, and the message was intercepted by Shepard's forces. Shays, unaware that Day would not arrive, advanced as planned. Shepard first fired two warning rounds of cannon over the heads of the approaching column. When the insurgents continued to advance, Shepard ordered his artillery to fire directly into the ranks. The grapeshot and canister killed four men and wounded twenty others. The column broke and fled eastward toward Ludlow and Pelham.

The rout at Springfield was the military turning point of Shays' Rebellion. The insurgents never again mounted a significant offensive operation. General Benjamin Lincoln arrived with a state militia force funded by Boston merchants and pursued the scattered rebels through the hill towns of western Massachusetts during February 1787, effectively ending the armed phase of the rebellion. Most participants were eventually pardoned, though some, including Shays, fled to Vermont and other states.` },
    create: { id: 'event-springfield-shays-rebellion', townId: SPRINGFIELD_TOWN_ID, name: 'Shays\' Rebellion at the Arsenal', slug: 'shays-rebellion-springfield-1787', startDate: new Date('1787-01-25'), datePrecision: 'DAY', summary: `On January 25, 1787, Daniel Shays led a column of approximately 1,200 armed insurgents toward the federal arsenal at Springfield, intending to seize the weapons stored there. The arsenal contained thousands of muskets, cannons, and stores of ammunition — a prize that would have dramatically strengthened the rebellion's military position. General William Shepard, commanding roughly 1,200 militia loyal to the state government, had fortified positions around the arsenal and waited.

The assault was supposed to be a coordinated three-pronged attack. Shays was to advance from the east, Luke Day from the west across the Connecticut River, and Eli Parsons from the north. But Day sent a message to Shays requesting a one-day postponement, and the message was intercepted by Shepard's forces. Shays, unaware that Day would not arrive, advanced as planned. Shepard first fired two warning rounds of cannon over the heads of the approaching column. When the insurgents continued to advance, Shepard ordered his artillery to fire directly into the ranks. The grapeshot and canister killed four men and wounded twenty others. The column broke and fled eastward toward Ludlow and Pelham.

The rout at Springfield was the military turning point of Shays' Rebellion. The insurgents never again mounted a significant offensive operation. General Benjamin Lincoln arrived with a state militia force funded by Boston merchants and pursued the scattered rebels through the hill towns of western Massachusetts during February 1787, effectively ending the armed phase of the rebellion. Most participants were eventually pardoned, though some, including Shays, fled to Vermont and other states.`, significanceWeight: 95 },
  });

  await prisma.event.upsert({
    where: { id: 'event-springfield-shays-rebellion-armory' },
    update: { slug: 'shays-rebellion-armory-assault-1787', summary: `The assault on the Springfield Armory on January 25, 1787, was the climactic military event of Shays' Rebellion and one of the most consequential moments in the history of the early American republic. The federal arsenal at Springfield contained approximately 7,000 muskets, 1,300 barrels of gunpowder, and significant stores of shot and shell. The insurgents' plan to seize these weapons reflected their understanding that without arms, their movement could not sustain itself against the organized forces of the state government.

The four men killed in the cannon fire — Ezekiel Root, Ariel Webster, Jabez Spicer, and John Hunter — were all veterans of the Revolutionary War. The bitter irony that men who had fought for American independence were now being killed by American cannon, at an arsenal they had helped to establish, was not lost on contemporaries. The event raised fundamental questions about the nature of republican government, the rights of citizens to resist unjust laws, and the limits of popular sovereignty that would be debated at the Constitutional Convention months later.

The failed assault's most lasting consequence was its impact on the movement for a new constitution. George Washington, alarmed by reports from Springfield, wrote that the rebellion demonstrated the need for a stronger national government. James Madison used the crisis to build support for the Philadelphia Convention. Henry Knox, whose armory had been the target, became one of the most vocal advocates for constitutional reform. Without the shock of Springfield, the political momentum for replacing the Articles of Confederation might never have built to the point where the Constitution became possible.` },
    create: { id: 'event-springfield-shays-rebellion-armory', townId: SPRINGFIELD_TOWN_ID, name: 'Shays\' Rebellion: Assault on the Armory', slug: 'shays-rebellion-armory-assault-1787', startDate: new Date('1787-01-25'), datePrecision: 'DAY', summary: `The assault on the Springfield Armory on January 25, 1787, was the climactic military event of Shays' Rebellion and one of the most consequential moments in the history of the early American republic. The federal arsenal at Springfield contained approximately 7,000 muskets, 1,300 barrels of gunpowder, and significant stores of shot and shell. The insurgents' plan to seize these weapons reflected their understanding that without arms, their movement could not sustain itself against the organized forces of the state government.

The four men killed in the cannon fire — Ezekiel Root, Ariel Webster, Jabez Spicer, and John Hunter — were all veterans of the Revolutionary War. The bitter irony that men who had fought for American independence were now being killed by American cannon, at an arsenal they had helped to establish, was not lost on contemporaries. The event raised fundamental questions about the nature of republican government, the rights of citizens to resist unjust laws, and the limits of popular sovereignty that would be debated at the Constitutional Convention months later.

The failed assault's most lasting consequence was its impact on the movement for a new constitution. George Washington, alarmed by reports from Springfield, wrote that the rebellion demonstrated the need for a stronger national government. James Madison used the crisis to build support for the Philadelphia Convention. Henry Knox, whose armory had been the target, became one of the most vocal advocates for constitutional reform. Without the shock of Springfield, the political momentum for replacing the Articles of Confederation might never have built to the point where the Constitution became possible.`, significanceWeight: 95 },
  });

  // --- 6 NEW EVENTS ---

  await prisma.event.upsert({
    where: { id: 'event-springfield-pynchon-founding' },
    update: { slug: 'springfield-founding-1636', summary: `In 1636, William Pynchon, a fur trader and magistrate from Roxbury, Massachusetts, led a group of English settlers to establish a plantation on the east bank of the Connecticut River at a site the Agawam people called Agawam. The settlement, initially called Agawam, was renamed Springfield in 1640 after Pynchon's hometown in Essex, England. The location was chosen for its fertile intervale land, its position at the head of navigation on the Connecticut River, and its proximity to Native trade networks.

Pynchon established Springfield as a commercial venture centered on the fur trade with the Agawam, Nonotuck, and other Native peoples of the Connecticut Valley. The town's economy depended on the exchange of English manufactured goods — cloth, metal tools, and wampum — for beaver pelts, which were shipped down the river and across the Atlantic. This trade made Pynchon one of the wealthiest men in New England and established Springfield as the commercial hub of the upper Connecticut Valley.

The founding of Springfield placed an English settlement deep in the interior of New England, far from the coastal towns of the Massachusetts Bay Colony. This geographic isolation shaped the town's character throughout the colonial period and into the Revolution. Springfield's residents developed a self-reliance and independence that distinguished them from their coastal counterparts, a quality that would manifest both in their enthusiastic support for the patriot cause and, a decade later, in their willingness to take up arms against the state government itself during Shays' Rebellion.` },
    create: { id: 'event-springfield-pynchon-founding', townId: SPRINGFIELD_TOWN_ID, name: 'Founding of Springfield', slug: 'springfield-founding-1636', startDate: new Date('1636-05-14'), datePrecision: 'YEAR', summary: `In 1636, William Pynchon, a fur trader and magistrate from Roxbury, Massachusetts, led a group of English settlers to establish a plantation on the east bank of the Connecticut River at a site the Agawam people called Agawam. The settlement, initially called Agawam, was renamed Springfield in 1640 after Pynchon's hometown in Essex, England. The location was chosen for its fertile intervale land, its position at the head of navigation on the Connecticut River, and its proximity to Native trade networks.

Pynchon established Springfield as a commercial venture centered on the fur trade with the Agawam, Nonotuck, and other Native peoples of the Connecticut Valley. The town's economy depended on the exchange of English manufactured goods — cloth, metal tools, and wampum — for beaver pelts, which were shipped down the river and across the Atlantic. This trade made Pynchon one of the wealthiest men in New England and established Springfield as the commercial hub of the upper Connecticut Valley.

The founding of Springfield placed an English settlement deep in the interior of New England, far from the coastal towns of the Massachusetts Bay Colony. This geographic isolation shaped the town's character throughout the colonial period and into the Revolution. Springfield's residents developed a self-reliance and independence that distinguished them from their coastal counterparts, a quality that would manifest both in their enthusiastic support for the patriot cause and, a decade later, in their willingness to take up arms against the state government itself during Shays' Rebellion.`, significanceWeight: 55 },
  });

  await prisma.event.upsert({
    where: { id: 'event-springfield-lincoln-pursuit' },
    update: { slug: 'springfield-lincoln-pursuit-1787', summary: `In late January and February 1787, following the failed assault on the Springfield arsenal, General Benjamin Lincoln led a force of approximately 3,000 militia — funded by contributions from Boston merchants rather than by the state treasury — in pursuit of Daniel Shays and the scattered insurgents. Lincoln's campaign through western Massachusetts was a rapid and relentless operation conducted in the depth of winter, designed to break the rebellion's remaining military capacity before it could regroup.

Lincoln's force marched from Boston to Springfield in early February, arriving at the armory and reinforcing General Shepard's garrison. From Springfield, Lincoln pursued Shays's retreating forces eastward into the hill towns. On the night of February 3, Lincoln conducted a forced march through a snowstorm to Petersham, where Shays had gathered approximately 150 remaining followers. The surprise dawn attack caught the insurgents unprepared, scattering them into the woods and effectively ending the organized military phase of the rebellion.

The Lincoln pursuit demonstrated both the strengths and weaknesses of the government under the Articles of Confederation. Congress had been unable to raise a federal force to suppress the rebellion; the army that restored order was a state militia financed by private subscription from wealthy Bostonians. This ad hoc arrangement — in which public order depended on the willingness of private citizens to fund military operations — reinforced the argument that the national government needed the power to maintain a standing force and to intervene in domestic disturbances.` },
    create: { id: 'event-springfield-lincoln-pursuit', townId: SPRINGFIELD_TOWN_ID, name: 'Lincoln\'s Pursuit of the Insurgents', slug: 'springfield-lincoln-pursuit-1787', startDate: new Date('1787-02-01'), datePrecision: 'MONTH', summary: `In late January and February 1787, following the failed assault on the Springfield arsenal, General Benjamin Lincoln led a force of approximately 3,000 militia — funded by contributions from Boston merchants rather than by the state treasury — in pursuit of Daniel Shays and the scattered insurgents. Lincoln's campaign through western Massachusetts was a rapid and relentless operation conducted in the depth of winter, designed to break the rebellion's remaining military capacity before it could regroup.

Lincoln's force marched from Boston to Springfield in early February, arriving at the armory and reinforcing General Shepard's garrison. From Springfield, Lincoln pursued Shays's retreating forces eastward into the hill towns. On the night of February 3, Lincoln conducted a forced march through a snowstorm to Petersham, where Shays had gathered approximately 150 remaining followers. The surprise dawn attack caught the insurgents unprepared, scattering them into the woods and effectively ending the organized military phase of the rebellion.

The Lincoln pursuit demonstrated both the strengths and weaknesses of the government under the Articles of Confederation. Congress had been unable to raise a federal force to suppress the rebellion; the army that restored order was a state militia financed by private subscription from wealthy Bostonians. This ad hoc arrangement — in which public order depended on the willingness of private citizens to fund military operations — reinforced the argument that the national government needed the power to maintain a standing force and to intervene in domestic disturbances.`, significanceWeight: 70 },
  });

  await prisma.event.upsert({
    where: { id: 'event-springfield-armory-expansion-1794' },
    update: { slug: 'springfield-armory-expansion-1794', summary: `In 1794, President George Washington signed legislation formally establishing the Springfield Armory and the Harpers Ferry Armory as the two national armories of the United States. The act authorized the expenditure of federal funds for construction, equipment, and workforce at both sites and placed them under the direction of the Secretary of War. For Springfield, this legislation transformed what had been a wartime depot into a permanent federal manufacturing facility and committed the national government to the long-term development of the site.

The expansion under the 1794 act was overseen by David Ames, who was appointed superintendent that year. Ames hired skilled armorers, acquired tools and machinery, and began organizing the workforce for systematic musket production. New buildings were constructed, including workshops, storage magazines, and housing for workers. The armory grounds on the hill east of the town center were enlarged and improved, establishing the physical footprint that would define the site for the next century and a half.

The 1794 expansion was significant beyond Springfield. It established the principle that the federal government would maintain its own manufacturing capacity for military weapons rather than relying entirely on private contractors. This decision had lasting implications for American industrial policy, military readiness, and the relationship between government and manufacturing. The Springfield Armory, along with Harpers Ferry, became the proving ground for innovations in manufacturing technique — including the drive toward interchangeable parts — that would transform American industry in the nineteenth century.` },
    create: { id: 'event-springfield-armory-expansion-1794', townId: SPRINGFIELD_TOWN_ID, name: 'Springfield Armory Federal Expansion', slug: 'springfield-armory-expansion-1794', startDate: new Date('1794-04-02'), datePrecision: 'YEAR', summary: `In 1794, President George Washington signed legislation formally establishing the Springfield Armory and the Harpers Ferry Armory as the two national armories of the United States. The act authorized the expenditure of federal funds for construction, equipment, and workforce at both sites and placed them under the direction of the Secretary of War. For Springfield, this legislation transformed what had been a wartime depot into a permanent federal manufacturing facility and committed the national government to the long-term development of the site.

The expansion under the 1794 act was overseen by David Ames, who was appointed superintendent that year. Ames hired skilled armorers, acquired tools and machinery, and began organizing the workforce for systematic musket production. New buildings were constructed, including workshops, storage magazines, and housing for workers. The armory grounds on the hill east of the town center were enlarged and improved, establishing the physical footprint that would define the site for the next century and a half.

The 1794 expansion was significant beyond Springfield. It established the principle that the federal government would maintain its own manufacturing capacity for military weapons rather than relying entirely on private contractors. This decision had lasting implications for American industrial policy, military readiness, and the relationship between government and manufacturing. The Springfield Armory, along with Harpers Ferry, became the proving ground for innovations in manufacturing technique — including the drive toward interchangeable parts — that would transform American industry in the nineteenth century.`, significanceWeight: 82 },
  });

  await prisma.event.upsert({
    where: { id: 'event-springfield-washington-visit-1789' },
    update: { slug: 'springfield-washington-visit-1789', summary: `In October 1789, President George Washington visited Springfield as part of a tour through New England, inspecting the armory and meeting with local officials. Washington's visit underscored the national importance that the new federal government placed on the Springfield facility. The president examined the armory grounds, reviewed the weapons in storage, and discussed plans for expanding production capacity with the site's managers.

Washington's New England tour was partly a ceremonial exercise in national unity — the new president showing himself to the people of the republic — and partly a practical fact-finding mission. Washington had a deep personal understanding of the importance of reliable weapons supply, having endured chronic shortages throughout the Revolutionary War. His visit to Springfield reflected his conviction that the nation's military infrastructure needed to be strengthened and that the armory system was central to that effort.

The presidential visit also carried symbolic weight for Springfield's residents. The town that had been the site of a domestic insurrection just two years earlier now received the president of the United States, who came to affirm the armory's importance to the nation. Washington's presence signaled that the federal government under the new Constitution would invest in Springfield's future and that the armory would grow rather than shrink. For a community still recovering from the disruptions of Shays' Rebellion, the visit provided reassurance and a sense of purpose.` },
    create: { id: 'event-springfield-washington-visit-1789', townId: SPRINGFIELD_TOWN_ID, name: 'Washington Visits Springfield Armory', slug: 'springfield-washington-visit-1789', startDate: new Date('1789-10-21'), datePrecision: 'DAY', summary: `In October 1789, President George Washington visited Springfield as part of a tour through New England, inspecting the armory and meeting with local officials. Washington's visit underscored the national importance that the new federal government placed on the Springfield facility. The president examined the armory grounds, reviewed the weapons in storage, and discussed plans for expanding production capacity with the site's managers.

Washington's New England tour was partly a ceremonial exercise in national unity — the new president showing himself to the people of the republic — and partly a practical fact-finding mission. Washington had a deep personal understanding of the importance of reliable weapons supply, having endured chronic shortages throughout the Revolutionary War. His visit to Springfield reflected his conviction that the nation's military infrastructure needed to be strengthened and that the armory system was central to that effort.

The presidential visit also carried symbolic weight for Springfield's residents. The town that had been the site of a domestic insurrection just two years earlier now received the president of the United States, who came to affirm the armory's importance to the nation. Washington's presence signaled that the federal government under the new Constitution would invest in Springfield's future and that the armory would grow rather than shrink. For a community still recovering from the disruptions of Shays' Rebellion, the visit provided reassurance and a sense of purpose.`, significanceWeight: 60 },
  });

  await prisma.event.upsert({
    where: { id: 'event-springfield-constitutional-impact' },
    update: { slug: 'springfield-constitutional-impact-1787', summary: `The events at Springfield in January 1787 reverberated directly into the Constitutional Convention that opened in Philadelphia in May of that year. Delegates arrived at Independence Hall with the fresh memory of an armed insurrection that the national government had been powerless to suppress. The inability of Congress under the Articles of Confederation to raise troops or funds to defend the Springfield arsenal became one of the most frequently cited examples of the Articles' inadequacy.

George Washington, in his correspondence about the rebellion, expressed alarm that the new republic might descend into anarchy. James Madison used the crisis to persuade reluctant delegates that a fundamental restructuring of the national government was necessary. Henry Knox, whose armory had been the target, provided detailed reports to Washington and others on the rebellion's causes and the government's impotent response. The Springfield crisis gave the nationalists — those who favored a stronger central government — their most compelling argument.

The Constitution that emerged from the Philadelphia Convention addressed the weaknesses exposed by Springfield directly. Article I, Section 8 granted Congress the power to call forth the militia to suppress insurrections. Article IV, Section 4 guaranteed each state a republican form of government and protection against domestic violence. The creation of a standing federal military establishment, with the power to tax to support it, was a direct response to the lesson of Springfield: that a government that cannot defend its own arsenals cannot endure. Springfield, in this sense, was the crucible in which the argument for the Constitution was forged.` },
    create: { id: 'event-springfield-constitutional-impact', townId: SPRINGFIELD_TOWN_ID, name: 'Springfield\'s Impact on the Constitutional Convention', slug: 'springfield-constitutional-impact-1787', startDate: new Date('1787-05-25'), datePrecision: 'MONTH', summary: `The events at Springfield in January 1787 reverberated directly into the Constitutional Convention that opened in Philadelphia in May of that year. Delegates arrived at Independence Hall with the fresh memory of an armed insurrection that the national government had been powerless to suppress. The inability of Congress under the Articles of Confederation to raise troops or funds to defend the Springfield arsenal became one of the most frequently cited examples of the Articles' inadequacy.

George Washington, in his correspondence about the rebellion, expressed alarm that the new republic might descend into anarchy. James Madison used the crisis to persuade reluctant delegates that a fundamental restructuring of the national government was necessary. Henry Knox, whose armory had been the target, provided detailed reports to Washington and others on the rebellion's causes and the government's impotent response. The Springfield crisis gave the nationalists — those who favored a stronger central government — their most compelling argument.

The Constitution that emerged from the Philadelphia Convention addressed the weaknesses exposed by Springfield directly. Article I, Section 8 granted Congress the power to call forth the militia to suppress insurrections. Article IV, Section 4 guaranteed each state a republican form of government and protection against domestic violence. The creation of a standing federal military establishment, with the power to tax to support it, was a direct response to the lesson of Springfield: that a government that cannot defend its own arsenals cannot endure. Springfield, in this sense, was the crucible in which the argument for the Constitution was forged.`, significanceWeight: 88 },
  });

  await prisma.event.upsert({
    where: { id: 'event-springfield-longfellow-arsenal' },
    update: { slug: 'springfield-longfellow-arsenal-1843', summary: `In 1843, the poet Henry Wadsworth Longfellow visited the Springfield Armory with his wife Fanny and was struck by the sight of thousands of muskets stored in racks in the Main Arsenal. The visit inspired his poem "The Arsenal at Springfield," published in 1844, which transformed row upon row of muskets into a metaphor for the futility and horror of war. The poem became one of the most widely read antiwar works of the nineteenth century and associated the Springfield Armory permanently with the tension between military necessity and the human cost of armed conflict.

Longfellow's poem imagined the stacked muskets as a giant organ whose pipes would produce not music but the sounds of suffering and death from battlefields across history. The poem argued that the resources devoted to weapons production could be better spent on peaceful enterprises and asked whether humanity would ever learn to settle disputes without violence. Fanny Longfellow, who had urged her husband to write the poem, was herself a committed pacifist, and the work reflected the couple's shared convictions.

The poem's significance extends beyond literature. It established a tradition of viewing the Springfield Armory not merely as a factory but as a symbol — of American military power, of industrial ingenuity, and of the moral questions that accompany the production of weapons. When the National Park Service took over the armory site in the 1970s, Longfellow's poem became a central interpretive theme. Visitors today encounter the poem alongside the firearms collection, invited to consider the same questions that Longfellow posed: what does it mean to build a nation's security on the manufacture of instruments of death?` },
    create: { id: 'event-springfield-longfellow-arsenal', townId: SPRINGFIELD_TOWN_ID, name: 'Longfellow Visits the Arsenal', slug: 'springfield-longfellow-arsenal-1843', startDate: new Date('1843-01-01'), datePrecision: 'YEAR', summary: `In 1843, the poet Henry Wadsworth Longfellow visited the Springfield Armory with his wife Fanny and was struck by the sight of thousands of muskets stored in racks in the Main Arsenal. The visit inspired his poem "The Arsenal at Springfield," published in 1844, which transformed row upon row of muskets into a metaphor for the futility and horror of war. The poem became one of the most widely read antiwar works of the nineteenth century and associated the Springfield Armory permanently with the tension between military necessity and the human cost of armed conflict.

Longfellow's poem imagined the stacked muskets as a giant organ whose pipes would produce not music but the sounds of suffering and death from battlefields across history. The poem argued that the resources devoted to weapons production could be better spent on peaceful enterprises and asked whether humanity would ever learn to settle disputes without violence. Fanny Longfellow, who had urged her husband to write the poem, was herself a committed pacifist, and the work reflected the couple's shared convictions.

The poem's significance extends beyond literature. It established a tradition of viewing the Springfield Armory not merely as a factory but as a symbol — of American military power, of industrial ingenuity, and of the moral questions that accompany the production of weapons. When the National Park Service took over the armory site in the 1970s, Longfellow's poem became a central interpretive theme. Visitors today encounter the poem alongside the firearms collection, invited to consider the same questions that Longfellow posed: what does it mean to build a nation's security on the manufacture of instruments of death?`, significanceWeight: 50 },
  });

  console.log('  Events seeded.');
}

// =============================================================================
// EVENT-PEOPLE CONNECTIONS
// =============================================================================

async function seedEventPeople() {
  console.log('  Seeding event-people connections...');

  const connections = [
    { eventId: 'event-springfield-knox-supply-route', personId: 'person-springfield-henry-knox', roleInEvent: 'Commander of the Noble Train of Artillery' },
    { eventId: 'event-springfield-knox-visit', personId: 'person-springfield-henry-knox', roleInEvent: 'Secretary of War inspecting the armory' },
    { eventId: 'event-springfield-armory-established', personId: 'person-springfield-henry-knox', roleInEvent: 'Advocate for armory establishment' },
    { eventId: 'event-springfield-armory-expansion-1794', personId: 'person-springfield-henry-knox', roleInEvent: 'Secretary of War overseeing expansion' },
    { eventId: 'event-springfield-armory-expansion-1794', personId: 'person-springfield-david-ames', roleInEvent: 'Appointed superintendent' },
    { eventId: 'event-springfield-musket-production', personId: 'person-springfield-david-ames', roleInEvent: 'Superintendent overseeing first musket production' },
    { eventId: 'event-springfield-shays-rebellion-begins', personId: 'person-springfield-daniel-shays', roleInEvent: 'Insurgent leader in eastern hill towns' },
    { eventId: 'event-springfield-shays-rebellion-begins', personId: 'person-springfield-luke-day', roleInEvent: 'Insurgent leader in West Springfield' },
    { eventId: 'event-springfield-court-closures', personId: 'person-springfield-daniel-shays', roleInEvent: 'Led armed men to close courts' },
    { eventId: 'event-springfield-court-closures', personId: 'person-springfield-luke-day', roleInEvent: 'Led court closure actions in Northampton' },
    { eventId: 'event-springfield-shays-rebellion', personId: 'person-springfield-daniel-shays', roleInEvent: 'Commander of the assault column' },
    { eventId: 'event-springfield-shays-rebellion', personId: 'person-springfield-william-shepard', roleInEvent: 'Militia commander defending the arsenal' },
    { eventId: 'event-springfield-shays-rebellion', personId: 'person-springfield-luke-day', roleInEvent: 'Failed to arrive with reinforcements from West Springfield' },
    { eventId: 'event-springfield-shays-rebellion-armory', personId: 'person-springfield-daniel-shays', roleInEvent: 'Led the assault on the armory' },
    { eventId: 'event-springfield-shays-rebellion-armory', personId: 'person-springfield-william-shepard', roleInEvent: 'Ordered cannon fire to repulse the assault' },
    { eventId: 'event-springfield-shays-rebellion-armory', personId: 'person-springfield-luke-day', roleInEvent: 'Absent due to postponement message' },
    { eventId: 'event-springfield-constitutional-impact', personId: 'person-springfield-henry-knox', roleInEvent: 'Reported on rebellion to Washington and advocated for constitutional reform' },
    { eventId: 'event-springfield-lincoln-pursuit', personId: 'person-springfield-daniel-shays', roleInEvent: 'Fled eastward; pursued into hill towns' },
    { eventId: 'event-springfield-lincoln-pursuit', personId: 'person-springfield-william-shepard', roleInEvent: 'Garrisoned at Springfield awaiting reinforcements' },
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
// STORIES
// =============================================================================

async function seedStories() {
  console.log('  Seeding stories...');

  // --- 2 EXISTING STORIES (update) ---

  await prisma.story.upsert({
    where: { id: 'story-springfield-shays' },
    update: {
      slug: 'veteran-who-marched-on-the-armory',
      textVersion: `I served my country. I want that understood before anything else is said about me. I stood on Breed's Hill in June of 1775 when the British came up the slope in their red lines, and I held my ground until the powder gave out and we fell back with bayonets coming at us through the smoke. I fought at Ticonderoga. I was at Saratoga when Burgoyne's army came apart and the tide of the whole war turned. I rose to the rank of captain in the 5th Massachusetts Regiment, and the Marquis de Lafayette gave me a sword for my service, a beautiful thing with an engraved blade that I was proud to wear.

I sold that sword. I sold it because I could not feed my family without the money it brought, and that fact tells you everything you need to know about what the Revolution did for the men who fought it. We were promised pay. We received certificates — paper promises from a government that had no money to honor them. We went home to farms that had gone to seed while we were away fighting, and we found that the taxes levied to pay the state's war debts were due in hard currency that did not exist in our communities. We had no specie. The merchants in Boston had it, and the courts were happy to seize our land and livestock when we could not produce coins we had never possessed.

I did not set out to lead a rebellion. I went to the town meetings where men like myself — veterans, farmers, men who had risked everything for the promise of liberty — spoke about what was being done to us. The courts in Hampshire County were issuing judgment after judgment against men who owed debts they could not pay in the currency demanded. Farms were being sold at auction for a fraction of their worth. Men were being jailed for debt, taken from their families and locked up for the crime of being poor in a country they had bled to create. The petitions we sent to Boston were ignored. The legislature, controlled by the merchants and creditors who held our notes, offered nothing.

We closed the courts. We marched to Northampton and Springfield and told the judges they would not sit. We used the same methods the patriots had used against the British courts before the Revolution. We believed we were exercising the same right of resistance that the Declaration of Independence proclaimed — that when a government becomes destructive of the people's rights, the people have the right to alter or abolish it. We were told this was treason. But what the merchants and their allies in Boston were doing to us was the same kind of tyranny we had fought to overthrow.

By January of 1787, the situation had become desperate. Governor Bowdoin was raising an army to march against us, funded not by the state but by the same Boston merchants who held our debts. We decided that if we could seize the weapons at the Springfield arsenal, we would be in a position to negotiate from strength rather than weakness. There were thousands of muskets in that arsenal, and cannons, and powder. If we had those weapons, the government would have to listen.

The plan was simple. Luke Day would bring his men from West Springfield to join my column, and together we would approach the arsenal from two directions. But Day sent a message saying he needed one more day, and that message was captured by General Shepard's men. I did not know Day would not come. On January 25, I led my men up the road toward the arsenal. Shepard's militia was drawn up behind the buildings with artillery pointed at us. I believed they would not fire on fellow citizens, fellow veterans. I was wrong.

The first two cannon shots went over our heads. I thought it was a warning and kept the column moving. The third volley came directly into us. I heard the grapeshot tearing through the ranks, heard men screaming, saw men I had fought beside fall in the snow. Four of my men were killed. Twenty more were wounded. We broke and ran. There was nothing else to do. I had led them into a slaughter.

I fled to Vermont and then to New York. I was sentenced to death in absentia but eventually pardoned. I never returned to Massachusetts as a man of consequence. I lived out my years in poverty, on the far side of a line that history drew between those who served the Revolution and those whom the Revolution failed to serve. The men who died at the arsenal that day — Ezekiel Root, Ariel Webster, Jabez Spicer, John Hunter — had all fought in the same war I fought. They died not at the hands of the British but at the hands of their own countrymen, killed by cannon fired from an arsenal they had helped to fill.

I do not ask for sympathy. I ask only that the truth be told: that the men who marched on Springfield were not bandits or anarchists but citizens who had exhausted every peaceful means of seeking justice and found every door closed. The rebellion failed, and perhaps it deserved to fail. But the grievances that drove it were real, and the Constitution that followed was written, in part, because what happened at Springfield proved that a nation which ignores the suffering of its own people cannot stand.`,
    },
    create: {
      id: 'story-springfield-shays',
      townId: SPRINGFIELD_TOWN_ID,
      title: 'The Veteran Who Marched on the Armory',
      slug: 'veteran-who-marched-on-the-armory',
      storyType: 'HISTORICAL_VOICE',
      subjectPersonId: 'person-springfield-daniel-shays',
      verificationStatus: 'VERIFIED',
      textVersion: `I served my country. I want that understood before anything else is said about me. I stood on Breed's Hill in June of 1775 when the British came up the slope in their red lines, and I held my ground until the powder gave out and we fell back with bayonets coming at us through the smoke. I fought at Ticonderoga. I was at Saratoga when Burgoyne's army came apart and the tide of the whole war turned. I rose to the rank of captain in the 5th Massachusetts Regiment, and the Marquis de Lafayette gave me a sword for my service, a beautiful thing with an engraved blade that I was proud to wear.

I sold that sword. I sold it because I could not feed my family without the money it brought, and that fact tells you everything you need to know about what the Revolution did for the men who fought it. We were promised pay. We received certificates — paper promises from a government that had no money to honor them. We went home to farms that had gone to seed while we were away fighting, and we found that the taxes levied to pay the state's war debts were due in hard currency that did not exist in our communities. We had no specie. The merchants in Boston had it, and the courts were happy to seize our land and livestock when we could not produce coins we had never possessed.

I did not set out to lead a rebellion. I went to the town meetings where men like myself — veterans, farmers, men who had risked everything for the promise of liberty — spoke about what was being done to us. The courts in Hampshire County were issuing judgment after judgment against men who owed debts they could not pay in the currency demanded. Farms were being sold at auction for a fraction of their worth. Men were being jailed for debt, taken from their families and locked up for the crime of being poor in a country they had bled to create. The petitions we sent to Boston were ignored. The legislature, controlled by the merchants and creditors who held our notes, offered nothing.

We closed the courts. We marched to Northampton and Springfield and told the judges they would not sit. We used the same methods the patriots had used against the British courts before the Revolution. We believed we were exercising the same right of resistance that the Declaration of Independence proclaimed — that when a government becomes destructive of the people's rights, the people have the right to alter or abolish it. We were told this was treason. But what the merchants and their allies in Boston were doing to us was the same kind of tyranny we had fought to overthrow.

By January of 1787, the situation had become desperate. Governor Bowdoin was raising an army to march against us, funded not by the state but by the same Boston merchants who held our debts. We decided that if we could seize the weapons at the Springfield arsenal, we would be in a position to negotiate from strength rather than weakness. There were thousands of muskets in that arsenal, and cannons, and powder. If we had those weapons, the government would have to listen.

The plan was simple. Luke Day would bring his men from West Springfield to join my column, and together we would approach the arsenal from two directions. But Day sent a message saying he needed one more day, and that message was captured by General Shepard's men. I did not know Day would not come. On January 25, I led my men up the road toward the arsenal. Shepard's militia was drawn up behind the buildings with artillery pointed at us. I believed they would not fire on fellow citizens, fellow veterans. I was wrong.

The first two cannon shots went over our heads. I thought it was a warning and kept the column moving. The third volley came directly into us. I heard the grapeshot tearing through the ranks, heard men screaming, saw men I had fought beside fall in the snow. Four of my men were killed. Twenty more were wounded. We broke and ran. There was nothing else to do. I had led them into a slaughter.

I fled to Vermont and then to New York. I was sentenced to death in absentia but eventually pardoned. I never returned to Massachusetts as a man of consequence. I lived out my years in poverty, on the far side of a line that history drew between those who served the Revolution and those whom the Revolution failed to serve. The men who died at the arsenal that day — Ezekiel Root, Ariel Webster, Jabez Spicer, John Hunter — had all fought in the same war I fought. They died not at the hands of the British but at the hands of their own countrymen, killed by cannon fired from an arsenal they had helped to fill.

I do not ask for sympathy. I ask only that the truth be told: that the men who marched on Springfield were not bandits or anarchists but citizens who had exhausted every peaceful means of seeking justice and found every door closed. The rebellion failed, and perhaps it deserved to fail. But the grievances that drove it were real, and the Constitution that followed was written, in part, because what happened at Springfield proved that a nation which ignores the suffering of its own people cannot stand.`,
      tags: ['springfield', 'shays-rebellion', 'daniel-shays', 'arsenal', 'veterans', 'constitution'],
    },
  });

  await prisma.story.upsert({
    where: { id: 'story-springfield-modern-armory' },
    update: {
      slug: 'arsenal-of-democracy',
      textVersion: `The Springfield Armory closed in 1968. The decision, made by Secretary of Defense Robert McNamara as part of a broader consolidation of military facilities, ended 191 years of continuous weapons production on the hill above the Connecticut River. When the last workers walked out and the gates closed, Springfield lost not just a factory but the institution that had defined the city's identity since the Revolution.

Walking the grounds today, administered by the National Park Service since 1974, you encounter a landscape layered with two centuries of American history. The Armory Green, where militia drilled in the 1770s and where Shepard's cannon repulsed Shays's insurgents in 1787, is a quiet lawn surrounded by brick buildings. The Main Arsenal, built in 1847, houses the museum's firearms collection — over 10,000 weapons arranged in the same vertical racks that inspired Longfellow's poem. The visitor enters through a door and confronts rows of muskets, rifles, and carbines extending to the far wall, organ pipes of wood and steel.

The collection tells a story of relentless innovation. The Model 1795 musket, Springfield's first product, was a flintlock smoothbore that a skilled armorer could produce at a rate of perhaps one per week. By the Civil War, the armory was producing the Springfield Model 1861 rifle-musket — a percussion cap weapon with a rifled barrel accurate at 500 yards — at a rate of over 1,000 per day. The M1 Garand, the standard infantry rifle of World War II, was designed and first manufactured here. Each weapon in the collection represents not just a technical achievement but a moment in the ongoing American debate about military preparedness, industrial capacity, and the relationship between a democratic society and the instruments of war.

The armory's impact on Springfield extended far beyond the factory gates. The demand for precision metalwork created a skilled workforce that attracted related industries. The techniques of interchangeable parts and gauged manufacturing, refined at the armory in the early nineteenth century, spread to other manufacturers and contributed to the industrial transformation of the Connecticut Valley. The city's economy, its social structure, its educational institutions, and its physical landscape were all shaped by the armory's presence.

But the armory's story is not simply a celebration of American ingenuity. The weapons produced here were used in every American war from the Revolution to Vietnam, including wars of continental expansion against Native peoples and the Civil War that killed over 600,000 Americans. Longfellow understood this when he visited in 1843 and saw not just industrial achievement but the accumulated potential for human suffering stored in those racks. The National Park Service's interpretation of the site takes this dual nature seriously, presenting the armory as both a source of pride and a prompt for reflection.

The closure in 1968 devastated Springfield economically. The armory had been the city's largest employer, and its loss contributed to a decades-long decline. The conversion of the site to a national park preserved the buildings and the collection but could not replace the economic engine that had driven the city since the Revolution. Today, Springfield's relationship to its armory history is complex: the site is a source of civic identity and tourist revenue, but also a reminder of what was lost when the nation no longer needed what Springfield had spent two centuries learning to make.

Standing on the Armory Green, looking across at the Main Arsenal where the muskets stand in their silent rows, you are standing at a place where the American experiment was tested and defined multiple times. Here, a nation decided to build its own weapons rather than depend on foreign powers. Here, veterans who had won independence marched against the government they had created. Here, the crisis that led to the Constitution reached its most violent expression. Here, for nearly two hundred years, Americans turned iron and wood and steel into the tools of national defense. The story of the Springfield Armory is the story of the United States, with all its contradictions intact.`,
    },
    create: {
      id: 'story-springfield-modern-armory',
      townId: SPRINGFIELD_TOWN_ID,
      title: 'The Arsenal of Democracy',
      slug: 'arsenal-of-democracy',
      storyType: 'MODERN_VOICE',
      verificationStatus: 'VERIFIED',
      textVersion: `The Springfield Armory closed in 1968. The decision, made by Secretary of Defense Robert McNamara as part of a broader consolidation of military facilities, ended 191 years of continuous weapons production on the hill above the Connecticut River. When the last workers walked out and the gates closed, Springfield lost not just a factory but the institution that had defined the city's identity since the Revolution.

Walking the grounds today, administered by the National Park Service since 1974, you encounter a landscape layered with two centuries of American history. The Armory Green, where militia drilled in the 1770s and where Shepard's cannon repulsed Shays's insurgents in 1787, is a quiet lawn surrounded by brick buildings. The Main Arsenal, built in 1847, houses the museum's firearms collection — over 10,000 weapons arranged in the same vertical racks that inspired Longfellow's poem. The visitor enters through a door and confronts rows of muskets, rifles, and carbines extending to the far wall, organ pipes of wood and steel.

The collection tells a story of relentless innovation. The Model 1795 musket, Springfield's first product, was a flintlock smoothbore that a skilled armorer could produce at a rate of perhaps one per week. By the Civil War, the armory was producing the Springfield Model 1861 rifle-musket — a percussion cap weapon with a rifled barrel accurate at 500 yards — at a rate of over 1,000 per day. The M1 Garand, the standard infantry rifle of World War II, was designed and first manufactured here. Each weapon in the collection represents not just a technical achievement but a moment in the ongoing American debate about military preparedness, industrial capacity, and the relationship between a democratic society and the instruments of war.

The armory's impact on Springfield extended far beyond the factory gates. The demand for precision metalwork created a skilled workforce that attracted related industries. The techniques of interchangeable parts and gauged manufacturing, refined at the armory in the early nineteenth century, spread to other manufacturers and contributed to the industrial transformation of the Connecticut Valley. The city's economy, its social structure, its educational institutions, and its physical landscape were all shaped by the armory's presence.

But the armory's story is not simply a celebration of American ingenuity. The weapons produced here were used in every American war from the Revolution to Vietnam, including wars of continental expansion against Native peoples and the Civil War that killed over 600,000 Americans. Longfellow understood this when he visited in 1843 and saw not just industrial achievement but the accumulated potential for human suffering stored in those racks. The National Park Service's interpretation of the site takes this dual nature seriously, presenting the armory as both a source of pride and a prompt for reflection.

The closure in 1968 devastated Springfield economically. The armory had been the city's largest employer, and its loss contributed to a decades-long decline. The conversion of the site to a national park preserved the buildings and the collection but could not replace the economic engine that had driven the city since the Revolution. Today, Springfield's relationship to its armory history is complex: the site is a source of civic identity and tourist revenue, but also a reminder of what was lost when the nation no longer needed what Springfield had spent two centuries learning to make.

Standing on the Armory Green, looking across at the Main Arsenal where the muskets stand in their silent rows, you are standing at a place where the American experiment was tested and defined multiple times. Here, a nation decided to build its own weapons rather than depend on foreign powers. Here, veterans who had won independence marched against the government they had created. Here, the crisis that led to the Constitution reached its most violent expression. Here, for nearly two hundred years, Americans turned iron and wood and steel into the tools of national defense. The story of the Springfield Armory is the story of the United States, with all its contradictions intact.`,
      tags: ['springfield', 'armory', 'national-park', 'manufacturing', 'longfellow', 'modern'],
    },
  });

  // --- 2 NEW STORIES ---

  await prisma.story.upsert({
    where: { id: 'story-springfield-shepard-defense' },
    update: {
      slug: 'the-general-who-held-the-arsenal',
      textVersion: `The morning of January 25, 1787, was cold. The kind of cold that settles into the Connecticut River valley in deep winter and does not lift — a cold that stiffens the fingers and makes metal burn to the touch. I had been at the arsenal for days, watching the roads, reading the reports from scouts and sympathizers in the hill towns. I knew they were coming. Daniel Shays had gathered his men in Wilbraham and was moving west toward Springfield. Luke Day had his forces across the river in West Springfield. Eli Parsons was assembling men to the north. Three columns, converging on the arsenal from three directions.

I had roughly 1,200 militia under my command, men drawn from the Hampshire County towns who had answered the call to defend the government's property. Many of them knew the men marching against us. They were neighbors, fellow church members, in some cases relatives. The Connecticut Valley is not a large place, and a rebellion in such a country is a family quarrel as much as a political one. I positioned my men behind the arsenal buildings, with artillery covering the eastern approach — the road from Wilbraham along which Shays would come.

I had sent a message to Shays, asking him to disperse. I had received no reply. I had also received intelligence that Day had sent Shays a message asking for a one-day postponement. My scouts had intercepted it. Shays did not know that Day would not come. I knew, and I kept that knowledge to myself. If Shays attacked without Day's reinforcements, we would face only one column instead of three.

The column appeared in the late afternoon, perhaps 1,200 men marching in a rough formation along the road. They were armed, mostly with muskets, some with pitchforks and clubs. I recognized some of them. Veterans. Men who had served in the same war I had served in, who had marched to the same drum and stood in the same lines and bled from the same enemy's fire. Now they were marching toward me, and I had cannon loaded with grapeshot pointed at them.

I gave the order to fire two rounds over their heads. The cannon roared and the shots passed above the column. They kept coming. I gave the order to fire into the ranks. I did not hesitate, though I knew what I was doing and who I was doing it to. The grapeshot tore into the column at close range. Men fell. I saw them fall. Four died on the ground in front of the arsenal — Ezekiel Root, Ariel Webster, Jabez Spicer, John Hunter — and twenty more were wounded. The rest broke and ran eastward, leaving their dead and wounded in the snow.

There was no pursuit. I held my position at the arsenal and waited for reinforcements. General Lincoln arrived from Boston some days later with a larger force and took up the pursuit of the scattered insurgents. My work was done. I had held the arsenal.

I have been both praised and condemned for what I did that day. Those who supported the government called me a defender of order and law. Those who sympathized with the rebellion called me a butcher who turned cannon on his own people. Both descriptions contain truth. I fired on American citizens because I believed that if the arsenal fell, the rebellion would become a full-scale civil war, and the fragile republic we had fought to create would be destroyed before it had properly begun. I was not certain I was right. I am still not certain. But I gave the order, and four men died, and the arsenal held, and the rebellion broke.

The men who fell that day were not my enemies. They were men driven to desperation by a government that had failed them. Their grievances were real. But the remedy they sought — the seizure of a federal arsenal by armed force — would have set a precedent that no republic could survive. If every group of citizens who believed themselves unjustly treated could take up arms and seize government property, there would be no government at all, only the rule of whoever had the most muskets. I believed that then and I believe it now.

What I did not know, standing on that cold ground with the smoke clearing and the wounded crying out, was that the events of that afternoon would help reshape the nation. The failure at Springfield, the government's inability to respond, the spectacle of American veterans killing American veterans at an American arsenal — all of this fed directly into the argument for a new constitution, a stronger government, a republic capable of defending itself and addressing the grievances of its citizens before they became rebellions. If there is meaning in what happened at the Springfield arsenal, it lies there: in the recognition that a government must be both strong enough to maintain order and just enough that its citizens never feel compelled to rebel.`,
    },
    create: {
      id: 'story-springfield-shepard-defense',
      townId: SPRINGFIELD_TOWN_ID,
      title: 'The General Who Held the Arsenal',
      slug: 'the-general-who-held-the-arsenal',
      storyType: 'HISTORICAL_VOICE',
      subjectPersonId: 'person-springfield-william-shepard',
      verificationStatus: 'VERIFIED',
      textVersion: `The morning of January 25, 1787, was cold. The kind of cold that settles into the Connecticut River valley in deep winter and does not lift — a cold that stiffens the fingers and makes metal burn to the touch. I had been at the arsenal for days, watching the roads, reading the reports from scouts and sympathizers in the hill towns. I knew they were coming. Daniel Shays had gathered his men in Wilbraham and was moving west toward Springfield. Luke Day had his forces across the river in West Springfield. Eli Parsons was assembling men to the north. Three columns, converging on the arsenal from three directions.

I had roughly 1,200 militia under my command, men drawn from the Hampshire County towns who had answered the call to defend the government's property. Many of them knew the men marching against us. They were neighbors, fellow church members, in some cases relatives. The Connecticut Valley is not a large place, and a rebellion in such a country is a family quarrel as much as a political one. I positioned my men behind the arsenal buildings, with artillery covering the eastern approach — the road from Wilbraham along which Shays would come.

I had sent a message to Shays, asking him to disperse. I had received no reply. I had also received intelligence that Day had sent Shays a message asking for a one-day postponement. My scouts had intercepted it. Shays did not know that Day would not come. I knew, and I kept that knowledge to myself. If Shays attacked without Day's reinforcements, we would face only one column instead of three.

The column appeared in the late afternoon, perhaps 1,200 men marching in a rough formation along the road. They were armed, mostly with muskets, some with pitchforks and clubs. I recognized some of them. Veterans. Men who had served in the same war I had served in, who had marched to the same drum and stood in the same lines and bled from the same enemy's fire. Now they were marching toward me, and I had cannon loaded with grapeshot pointed at them.

I gave the order to fire two rounds over their heads. The cannon roared and the shots passed above the column. They kept coming. I gave the order to fire into the ranks. I did not hesitate, though I knew what I was doing and who I was doing it to. The grapeshot tore into the column at close range. Men fell. I saw them fall. Four died on the ground in front of the arsenal — Ezekiel Root, Ariel Webster, Jabez Spicer, John Hunter — and twenty more were wounded. The rest broke and ran eastward, leaving their dead and wounded in the snow.

There was no pursuit. I held my position at the arsenal and waited for reinforcements. General Lincoln arrived from Boston some days later with a larger force and took up the pursuit of the scattered insurgents. My work was done. I had held the arsenal.

I have been both praised and condemned for what I did that day. Those who supported the government called me a defender of order and law. Those who sympathized with the rebellion called me a butcher who turned cannon on his own people. Both descriptions contain truth. I fired on American citizens because I believed that if the arsenal fell, the rebellion would become a full-scale civil war, and the fragile republic we had fought to create would be destroyed before it had properly begun. I was not certain I was right. I am still not certain. But I gave the order, and four men died, and the arsenal held, and the rebellion broke.

The men who fell that day were not my enemies. They were men driven to desperation by a government that had failed them. Their grievances were real. But the remedy they sought — the seizure of a federal arsenal by armed force — would have set a precedent that no republic could survive. If every group of citizens who believed themselves unjustly treated could take up arms and seize government property, there would be no government at all, only the rule of whoever had the most muskets. I believed that then and I believe it now.

What I did not know, standing on that cold ground with the smoke clearing and the wounded crying out, was that the events of that afternoon would help reshape the nation. The failure at Springfield, the government's inability to respond, the spectacle of American veterans killing American veterans at an American arsenal — all of this fed directly into the argument for a new constitution, a stronger government, a republic capable of defending itself and addressing the grievances of its citizens before they became rebellions. If there is meaning in what happened at the Springfield arsenal, it lies there: in the recognition that a government must be both strong enough to maintain order and just enough that its citizens never feel compelled to rebel.`,
      tags: ['springfield', 'shays-rebellion', 'william-shepard', 'arsenal', 'militia', 'constitution'],
    },
  });

  await prisma.story.upsert({
    where: { id: 'story-springfield-armory-worker' },
    update: {
      slug: 'the-first-musket',
      textVersion: `The Springfield Armory in 1795 was not the vast industrial complex it would later become. It was a collection of workshops on a hill, staffed by a few dozen men who were attempting something that had never been done in the United States: the systematic manufacture of complete military muskets from raw materials to finished weapons. David Ames, the superintendent, had been appointed by Secretary of War Henry Knox the previous year and was charged with transforming a storage depot into a manufactory.

The challenge was immense. A musket is not a simple instrument. The Model 1795, based on the French Charleville pattern that American soldiers had used during the war, consisted of dozens of components: the barrel, the lock mechanism, the stock, the bayonet, the ramrod, each requiring different materials and different skills to produce. The barrel alone demanded a metalworker who could take a flat iron bar, forge it around a mandrel, weld the seam, bore the interior to a uniform diameter, and proof-test it without the barrel splitting. A single flawed barrel could kill the man who fired it.

Ames recruited armorers from the Connecticut Valley's metalworking communities — men who had learned their craft in the small shops of Deerfield, Northampton, Greenfield, and the surrounding towns. These were not factory workers in any modern sense. They were artisans, each responsible for producing complete components or even complete weapons. The idea of breaking the manufacturing process into specialized, repeatable steps — what would later be called the American System of Manufacturing — was in its earliest infancy. At Springfield in 1795, the work was still largely done by individual craftsmen using hand tools, water-powered trip hammers, and their own accumulated knowledge of iron and steel.

The first muskets that came off the line were not perfect. They were functional, serviceable weapons, but each one was slightly different from every other. The parts were hand-fitted, not interchangeable. If a lock broke in the field, the soldier could not simply swap in a replacement from another musket; a skilled armorer would need to fit the new part by hand. The dream of interchangeable parts — weapons assembled from components so precisely made that any part would fit any weapon — was still decades away. But the fact that the Springfield Armory was producing complete muskets at all was a milestone.

The significance of what happened at Springfield in 1795 goes beyond the weapons themselves. The establishment of government-directed manufacturing set a precedent for federal involvement in industrial production that would shape American economic policy for two centuries. The techniques refined at Springfield spread to private manufacturers and to the other national armory at Harpers Ferry. The workforce that assembled at Springfield became a community of skilled artisans whose knowledge was passed down through generations, creating a culture of precision manufacturing in the Connecticut Valley that would eventually produce not just weapons but the machine tools, gauges, and manufacturing processes that powered American industrialization.

The Model 1795 musket is not a famous weapon. It does not have the romantic association of the Kentucky long rifle or the historical weight of the Springfield Model 1861 that armed the Union in the Civil War. But it was the first — the first standardized military firearm manufactured by the United States government, the proof that a young republic could produce its own instruments of defense rather than depending on foreign suppliers. Every weapon that the Springfield Armory produced over the next 173 years descended from that first effort in 1795, when a handful of craftsmen on a hill above the Connecticut River began the work that would make Springfield the armory of the nation.`,
    },
    create: {
      id: 'story-springfield-armory-worker',
      townId: SPRINGFIELD_TOWN_ID,
      title: 'The First Musket',
      slug: 'the-first-musket',
      storyType: 'MODERN_VOICE',
      verificationStatus: 'VERIFIED',
      textVersion: `The Springfield Armory in 1795 was not the vast industrial complex it would later become. It was a collection of workshops on a hill, staffed by a few dozen men who were attempting something that had never been done in the United States: the systematic manufacture of complete military muskets from raw materials to finished weapons. David Ames, the superintendent, had been appointed by Secretary of War Henry Knox the previous year and was charged with transforming a storage depot into a manufactory.

The challenge was immense. A musket is not a simple instrument. The Model 1795, based on the French Charleville pattern that American soldiers had used during the war, consisted of dozens of components: the barrel, the lock mechanism, the stock, the bayonet, the ramrod, each requiring different materials and different skills to produce. The barrel alone demanded a metalworker who could take a flat iron bar, forge it around a mandrel, weld the seam, bore the interior to a uniform diameter, and proof-test it without the barrel splitting. A single flawed barrel could kill the man who fired it.

Ames recruited armorers from the Connecticut Valley's metalworking communities — men who had learned their craft in the small shops of Deerfield, Northampton, Greenfield, and the surrounding towns. These were not factory workers in any modern sense. They were artisans, each responsible for producing complete components or even complete weapons. The idea of breaking the manufacturing process into specialized, repeatable steps — what would later be called the American System of Manufacturing — was in its earliest infancy. At Springfield in 1795, the work was still largely done by individual craftsmen using hand tools, water-powered trip hammers, and their own accumulated knowledge of iron and steel.

The first muskets that came off the line were not perfect. They were functional, serviceable weapons, but each one was slightly different from every other. The parts were hand-fitted, not interchangeable. If a lock broke in the field, the soldier could not simply swap in a replacement from another musket; a skilled armorer would need to fit the new part by hand. The dream of interchangeable parts — weapons assembled from components so precisely made that any part would fit any weapon — was still decades away. But the fact that the Springfield Armory was producing complete muskets at all was a milestone.

The significance of what happened at Springfield in 1795 goes beyond the weapons themselves. The establishment of government-directed manufacturing set a precedent for federal involvement in industrial production that would shape American economic policy for two centuries. The techniques refined at Springfield spread to private manufacturers and to the other national armory at Harpers Ferry. The workforce that assembled at Springfield became a community of skilled artisans whose knowledge was passed down through generations, creating a culture of precision manufacturing in the Connecticut Valley that would eventually produce not just weapons but the machine tools, gauges, and manufacturing processes that powered American industrialization.

The Model 1795 musket is not a famous weapon. It does not have the romantic association of the Kentucky long rifle or the historical weight of the Springfield Model 1861 that armed the Union in the Civil War. But it was the first — the first standardized military firearm manufactured by the United States government, the proof that a young republic could produce its own instruments of defense rather than depending on foreign suppliers. Every weapon that the Springfield Armory produced over the next 173 years descended from that first effort in 1795, when a handful of craftsmen on a hill above the Connecticut River began the work that would make Springfield the armory of the nation.`,
      tags: ['springfield', 'armory', 'manufacturing', 'model-1795', 'david-ames', 'industry'],
    },
  });

  console.log('  Stories seeded.');
}

// =============================================================================
// LESSONS
// =============================================================================

async function seedLessons() {
  console.log('  Seeding lesson plans...');

  // --- 2 EXISTING LESSONS (update) ---

  await prisma.lessonPlan.upsert({
    where: { id: 'cmm2s5os700e7p5g76ikfmzua' },
    update: {
      slug: 'springfield-armory-forging-revolution',
      summary: 'Students investigate how the Springfield Armory grew from a wartime storage depot into America\'s first national weapons manufactory. Through primary source analysis and hands-on activities, students explore the connections between geography, technology, and military strategy that made Springfield essential to the Revolutionary cause and the early Republic.',
      lessonData: {
        objectives: [
          'Explain why Springfield was chosen as the site for a national armory',
          'Analyze the relationship between geography, natural resources, and military strategy',
          'Describe how the armory transformed Springfield from an agricultural town to a manufacturing center',
          'Evaluate the significance of standardized weapons manufacturing for the new nation',
        ],
        essentialQuestions: [
          'Why did the Continental Congress choose Springfield for a military arsenal?',
          'How did the Connecticut River and local resources shape Springfield\'s military role?',
          'What does the armory\'s development tell us about the challenges facing the new nation?',
          'How did the decisions made in the 1770s and 1790s shape Springfield for the next two centuries?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Display a map of Massachusetts showing Springfield, Boston, and the Connecticut River. Ask students: If you were a military commander in 1777 and needed to build a weapons factory, where would you put it and why? Have students discuss in pairs before sharing out. Then reveal that Springfield was the actual choice and preview the reasons.',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'Springfield\'s geographic advantages: the Connecticut River for transport, distance from the coast for safety, water power from the Mill River, proximity to iron deposits and skilled metalworkers',
            'The progression from supply depot (1775) to storage magazine (1777) to repair facility to full manufactory (1794-1795)',
            'Henry Knox\'s role in advocating for the armory and David Ames\'s work as superintendent',
            'The Model 1795 musket: what it was, how it was made, and why it mattered',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Map Activity: Students receive a topographic map of the Springfield area and identify features that made it strategically valuable (river, elevation, road network, distance from coast). They annotate the map with labels explaining each advantage.',
            'Manufacturing Timeline: In small groups, students create a visual timeline showing the armory\'s evolution from 1775 to 1800, using provided primary source excerpts and images.',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Write a one-page letter from Henry Knox to George Washington recommending Springfield as the site for a national armory. Your letter must include at least three specific geographic or strategic reasons for the choice, reference the town\'s wartime experience, and address at least one potential objection (such as cost or distance from the capital).',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Class discussion: How do the decisions about where to build things — factories, military bases, government buildings — shape communities for generations? Can students think of modern examples? Exit ticket: Name two reasons Springfield was chosen for the armory and explain which you think was most important.',
        },
        differentiation: {
          struggling: 'Provide a letter template with sentence starters and a word bank of geographic terms. Pre-label the map with key features.',
          advanced: 'Compare Springfield\'s selection to the choice of Harpers Ferry as the second national armory. What were the similarities and differences in the geographic reasoning?',
          ell: 'Provide a glossary of key terms (armory, arsenal, manufactory, depot, standardized). Use labeled diagrams of musket components alongside text descriptions.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.1', 'RH.6-8.7', 'WHST.6-8.1', 'WHST.6-8.2'],
        c3Framework: ['D2.His.1.6-8', 'D2.His.3.6-8', 'D2.Geo.4.6-8', 'D2.Eco.1.6-8'],
        note: 'Aligned to Common Core literacy standards for history/social studies and the C3 Framework for historical thinking and geographic reasoning.',
      },
    },
    create: {
      id: 'cmm2s5os700e7p5g76ikfmzua',
      townId: SPRINGFIELD_TOWN_ID,
      title: 'The Springfield Armory: Forging a Revolution from Iron and Will',
      slug: 'springfield-armory-forging-revolution',
      gradeRange: '6-8',
      estimatedDuration: '2-3 class periods',
      summary: 'Students investigate how the Springfield Armory grew from a wartime storage depot into America\'s first national weapons manufactory. Through primary source analysis and hands-on activities, students explore the connections between geography, technology, and military strategy that made Springfield essential to the Revolutionary cause and the early Republic.',
      lessonData: {
        objectives: [
          'Explain why Springfield was chosen as the site for a national armory',
          'Analyze the relationship between geography, natural resources, and military strategy',
          'Describe how the armory transformed Springfield from an agricultural town to a manufacturing center',
          'Evaluate the significance of standardized weapons manufacturing for the new nation',
        ],
        essentialQuestions: [
          'Why did the Continental Congress choose Springfield for a military arsenal?',
          'How did the Connecticut River and local resources shape Springfield\'s military role?',
          'What does the armory\'s development tell us about the challenges facing the new nation?',
          'How did the decisions made in the 1770s and 1790s shape Springfield for the next two centuries?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Display a map of Massachusetts showing Springfield, Boston, and the Connecticut River. Ask students: If you were a military commander in 1777 and needed to build a weapons factory, where would you put it and why? Have students discuss in pairs before sharing out. Then reveal that Springfield was the actual choice and preview the reasons.',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'Springfield\'s geographic advantages: the Connecticut River for transport, distance from the coast for safety, water power from the Mill River, proximity to iron deposits and skilled metalworkers',
            'The progression from supply depot (1775) to storage magazine (1777) to repair facility to full manufactory (1794-1795)',
            'Henry Knox\'s role in advocating for the armory and David Ames\'s work as superintendent',
            'The Model 1795 musket: what it was, how it was made, and why it mattered',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Map Activity: Students receive a topographic map of the Springfield area and identify features that made it strategically valuable (river, elevation, road network, distance from coast). They annotate the map with labels explaining each advantage.',
            'Manufacturing Timeline: In small groups, students create a visual timeline showing the armory\'s evolution from 1775 to 1800, using provided primary source excerpts and images.',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Write a one-page letter from Henry Knox to George Washington recommending Springfield as the site for a national armory. Your letter must include at least three specific geographic or strategic reasons for the choice, reference the town\'s wartime experience, and address at least one potential objection (such as cost or distance from the capital).',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Class discussion: How do the decisions about where to build things — factories, military bases, government buildings — shape communities for generations? Can students think of modern examples? Exit ticket: Name two reasons Springfield was chosen for the armory and explain which you think was most important.',
        },
        differentiation: {
          struggling: 'Provide a letter template with sentence starters and a word bank of geographic terms. Pre-label the map with key features.',
          advanced: 'Compare Springfield\'s selection to the choice of Harpers Ferry as the second national armory. What were the similarities and differences in the geographic reasoning?',
          ell: 'Provide a glossary of key terms (armory, arsenal, manufactory, depot, standardized). Use labeled diagrams of musket components alongside text descriptions.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.1', 'RH.6-8.7', 'WHST.6-8.1', 'WHST.6-8.2'],
        c3Framework: ['D2.His.1.6-8', 'D2.His.3.6-8', 'D2.Geo.4.6-8', 'D2.Eco.1.6-8'],
        note: 'Aligned to Common Core literacy standards for history/social studies and the C3 Framework for historical thinking and geographic reasoning.',
      },
    },
  });

  await prisma.lessonPlan.upsert({
    where: { id: 'cmm2s5osr00e8p5g7alseqffi' },
    update: {
      slug: 'springfield-arsenal-crucible-crisis',
      summary: 'Students examine Shays\' Rebellion as a case study in the tensions between economic justice, political authority, and constitutional design. Through analysis of primary sources from both sides of the conflict, students evaluate whether the rebellion was a justified act of resistance or a dangerous threat to republican government, and they trace its direct impact on the creation of the U.S. Constitution.',
      lessonData: {
        objectives: [
          'Analyze the economic causes of Shays\' Rebellion in the context of postwar Massachusetts',
          'Evaluate the arguments of both the insurgents and the government defenders',
          'Trace the direct connection between the Springfield arsenal crisis and the Constitutional Convention',
          'Assess the tension between the right of revolution and the need for stable government',
        ],
        essentialQuestions: [
          'Were the Shaysites justified in taking up arms against the Massachusetts government?',
          'How did the events at Springfield expose the weaknesses of the Articles of Confederation?',
          'Is there a meaningful difference between the patriot resistance of 1775 and Shays\' Rebellion of 1786?',
          'How did the crisis at Springfield shape the Constitution that we live under today?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Present students with two unlabeled quotes — one from the Declaration of Independence about the right to alter or abolish government, and one from Daniel Shays defending the rebellion. Ask students to identify which is which and discuss: if we accept the first, must we accept the second? Why or why not?',
        },
        directInstruction: {
          duration: '25 minutes',
          content: [
            'The postwar economic crisis: heavy taxation, scarce currency, debt imprisonment, and the east-west divide in Massachusetts politics',
            'The court closures of 1786: tactics, participants, and the government\'s response',
            'The assault on the Springfield arsenal: January 25, 1787 — the plan, the miscommunication with Luke Day, Shepard\'s defense, the rout',
            'The constitutional aftermath: how Washington, Madison, Knox, and others used the Springfield crisis to build support for the Philadelphia Convention',
          ],
        },
        guidedPractice: {
          duration: '35 minutes',
          activities: [
            'Primary Source Stations: Students rotate through four stations, each with a different primary source — (1) a petition from western Massachusetts farmers to the legislature, (2) Governor Bowdoin\'s proclamation against the insurgents, (3) a letter from Henry Knox to George Washington about the rebellion, (4) a newspaper editorial defending the rebels. At each station, students complete a sourcing and analysis worksheet.',
            'Debate Preparation: Based on the primary sources, students prepare arguments for a structured classroom debate on the resolution: "The Shaysites were justified in marching on the Springfield arsenal."',
          ],
        },
        independentPractice: {
          duration: '30 minutes',
          assignment: 'Write a 500-word analytical essay answering the question: "Was Shays\' Rebellion a second American Revolution or a threat to the first one?" Your essay must reference at least three specific primary sources, address both sides of the argument, and explain how the events at Springfield influenced the creation of the Constitution. Cite specific constitutional provisions (Article I Section 8, Article IV Section 4) that address the weaknesses exposed by the rebellion.',
        },
        closure: {
          duration: '15 minutes',
          activity: 'Structured classroom debate on the resolution, followed by a debrief discussion: How do modern democracies handle situations where citizens feel their government has become unresponsive to their needs? What peaceful mechanisms exist that did not exist in 1786? Exit ticket: Identify one specific provision of the Constitution that was influenced by Shays\' Rebellion and explain the connection.',
        },
        differentiation: {
          struggling: 'Provide a graphic organizer for the essay with sections for thesis, evidence for each side, and conclusion. Pre-annotate primary sources with marginal notes explaining key vocabulary.',
          advanced: 'Research and compare Shays\' Rebellion to the Whiskey Rebellion of 1794. How did the federal government\'s response differ under the Constitution versus the Articles of Confederation? Write a comparative analysis.',
          ell: 'Provide a glossary of key terms (insurrection, arsenal, Articles of Confederation, Constitution, specie, foreclosure). Allow collaborative essay drafting with a partner. Provide translated primary source summaries where available.',
        },
      },
      standards: {
        commonCore: ['RH.9-10.1', 'RH.9-10.2', 'RH.9-10.6', 'RH.9-10.9', 'WHST.9-10.1'],
        c3Framework: ['D2.His.1.9-12', 'D2.His.4.9-12', 'D2.His.5.9-12', 'D2.His.14.9-12', 'D2.Civ.3.9-12'],
        note: 'Aligned to Common Core literacy standards for history/social studies and the C3 Framework for historical thinking, civic understanding, and evidence-based argumentation.',
      },
    },
    create: {
      id: 'cmm2s5osr00e8p5g7alseqffi',
      townId: SPRINGFIELD_TOWN_ID,
      title: 'Arsenal of Revolution, Crucible of Crisis: Springfield and the Unfinished Revolution',
      slug: 'springfield-arsenal-crucible-crisis',
      gradeRange: '9-12',
      estimatedDuration: '3-4 class periods',
      summary: 'Students examine Shays\' Rebellion as a case study in the tensions between economic justice, political authority, and constitutional design. Through analysis of primary sources from both sides of the conflict, students evaluate whether the rebellion was a justified act of resistance or a dangerous threat to republican government, and they trace its direct impact on the creation of the U.S. Constitution.',
      lessonData: {
        objectives: [
          'Analyze the economic causes of Shays\' Rebellion in the context of postwar Massachusetts',
          'Evaluate the arguments of both the insurgents and the government defenders',
          'Trace the direct connection between the Springfield arsenal crisis and the Constitutional Convention',
          'Assess the tension between the right of revolution and the need for stable government',
        ],
        essentialQuestions: [
          'Were the Shaysites justified in taking up arms against the Massachusetts government?',
          'How did the events at Springfield expose the weaknesses of the Articles of Confederation?',
          'Is there a meaningful difference between the patriot resistance of 1775 and Shays\' Rebellion of 1786?',
          'How did the crisis at Springfield shape the Constitution that we live under today?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Present students with two unlabeled quotes — one from the Declaration of Independence about the right to alter or abolish government, and one from Daniel Shays defending the rebellion. Ask students to identify which is which and discuss: if we accept the first, must we accept the second? Why or why not?',
        },
        directInstruction: {
          duration: '25 minutes',
          content: [
            'The postwar economic crisis: heavy taxation, scarce currency, debt imprisonment, and the east-west divide in Massachusetts politics',
            'The court closures of 1786: tactics, participants, and the government\'s response',
            'The assault on the Springfield arsenal: January 25, 1787 — the plan, the miscommunication with Luke Day, Shepard\'s defense, the rout',
            'The constitutional aftermath: how Washington, Madison, Knox, and others used the Springfield crisis to build support for the Philadelphia Convention',
          ],
        },
        guidedPractice: {
          duration: '35 minutes',
          activities: [
            'Primary Source Stations: Students rotate through four stations, each with a different primary source — (1) a petition from western Massachusetts farmers to the legislature, (2) Governor Bowdoin\'s proclamation against the insurgents, (3) a letter from Henry Knox to George Washington about the rebellion, (4) a newspaper editorial defending the rebels. At each station, students complete a sourcing and analysis worksheet.',
            'Debate Preparation: Based on the primary sources, students prepare arguments for a structured classroom debate on the resolution: "The Shaysites were justified in marching on the Springfield arsenal."',
          ],
        },
        independentPractice: {
          duration: '30 minutes',
          assignment: 'Write a 500-word analytical essay answering the question: "Was Shays\' Rebellion a second American Revolution or a threat to the first one?" Your essay must reference at least three specific primary sources, address both sides of the argument, and explain how the events at Springfield influenced the creation of the Constitution. Cite specific constitutional provisions (Article I Section 8, Article IV Section 4) that address the weaknesses exposed by the rebellion.',
        },
        closure: {
          duration: '15 minutes',
          activity: 'Structured classroom debate on the resolution, followed by a debrief discussion: How do modern democracies handle situations where citizens feel their government has become unresponsive to their needs? What peaceful mechanisms exist that did not exist in 1786? Exit ticket: Identify one specific provision of the Constitution that was influenced by Shays\' Rebellion and explain the connection.',
        },
        differentiation: {
          struggling: 'Provide a graphic organizer for the essay with sections for thesis, evidence for each side, and conclusion. Pre-annotate primary sources with marginal notes explaining key vocabulary.',
          advanced: 'Research and compare Shays\' Rebellion to the Whiskey Rebellion of 1794. How did the federal government\'s response differ under the Constitution versus the Articles of Confederation? Write a comparative analysis.',
          ell: 'Provide a glossary of key terms (insurrection, arsenal, Articles of Confederation, Constitution, specie, foreclosure). Allow collaborative essay drafting with a partner. Provide translated primary source summaries where available.',
        },
      },
      standards: {
        commonCore: ['RH.9-10.1', 'RH.9-10.2', 'RH.9-10.6', 'RH.9-10.9', 'WHST.9-10.1'],
        c3Framework: ['D2.His.1.9-12', 'D2.His.4.9-12', 'D2.His.5.9-12', 'D2.His.14.9-12', 'D2.Civ.3.9-12'],
        note: 'Aligned to Common Core literacy standards for history/social studies and the C3 Framework for historical thinking, civic understanding, and evidence-based argumentation.',
      },
    },
  });

  // --- 1 NEW LESSON ---

  await prisma.lessonPlan.upsert({
    where: { id: 'springfield-lesson-revolution-rebellion' },
    update: {
      slug: 'springfield-revolution-to-rebellion',
      summary: 'Students trace Springfield\'s arc from patriot stronghold to site of domestic insurrection, examining how the same principles of liberty and resistance that justified the Revolution were invoked by Shays\' rebels a decade later. This lesson is designed for younger students and uses storytelling, role-play, and visual activities to make the complex political questions accessible.',
      lessonData: {
        objectives: [
          'Describe Springfield\'s role as a supply center and armory site during the Revolutionary War',
          'Explain why farmers and veterans in western Massachusetts were angry after the war',
          'Retell the events of January 25, 1787, at the Springfield arsenal in their own words',
          'Discuss whether there is a difference between fighting for freedom and breaking the law',
        ],
        essentialQuestions: [
          'Why was Springfield important to the American army during the Revolution?',
          'What happened to the soldiers after they came home from the war?',
          'Why did Daniel Shays and his followers march on the arsenal?',
          'When is it right to stand up against your own government?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Read aloud a short scenario: A farmer comes home from war. He has not been paid. The government is taking his farm because he cannot pay his taxes. He has tried asking for help but no one will listen. Ask students: What would you do? Record responses on the board. Explain that this was a real situation in Springfield in the 1780s.',
        },
        directInstruction: {
          duration: '15 minutes',
          content: [
            'Springfield during the Revolution: where weapons were stored and repaired, where militia gathered, a town that helped win the war',
            'After the war: soldiers come home to find farms in trouble, taxes they cannot pay, courts taking their property',
            'Daniel Shays and his neighbors decide to fight back — first by closing the courts, then by trying to take the weapons at the arsenal',
            'January 25, 1787: the march, the cannon fire, the four men who died',
          ],
        },
        guidedPractice: {
          duration: '25 minutes',
          activities: [
            'Story Mapping: Students create a four-panel comic strip or storyboard showing the key events: (1) Springfield during the war, (2) farmers struggling after the war, (3) the march on the arsenal, (4) the aftermath. Each panel includes a caption explaining what happened.',
            'Two Sides Activity: The class divides into two groups. One group lists reasons why Shays was right to rebel. The other lists reasons why General Shepard was right to defend the arsenal. Groups share their lists, and the class discusses which arguments are strongest.',
          ],
        },
        independentPractice: {
          duration: '20 minutes',
          assignment: 'Choose to be either Daniel Shays or William Shepard. Write a diary entry for the evening of January 25, 1787 — the night after the confrontation at the arsenal. Describe what happened, how you feel about it, and what you think will happen next. Your entry must include at least three facts from the lesson.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Think-Pair-Share: Was Daniel Shays a hero or a troublemaker? Could there be a way he was both? Discuss how the same person can be seen differently depending on your point of view. Exit ticket: Write one sentence explaining why the events at Springfield mattered for the future of the United States.',
        },
        differentiation: {
          struggling: 'Provide a storyboard template with key images already sketched. Offer sentence starters for the diary entry. Work with a partner on the Two Sides Activity.',
          advanced: 'Research what happened to Daniel Shays after the rebellion. Write a second diary entry from five years later reflecting on what he did.',
          ell: 'Provide a picture glossary with key vocabulary (armory, arsenal, rebellion, taxes, militia). Allow the diary entry to be partially illustrated. Pair with a fluent speaker for the Two Sides Activity.',
        },
      },
      standards: {
        commonCore: ['RI.5.1', 'RI.5.3', 'RI.5.6', 'W.5.3', 'SL.5.1'],
        c3Framework: ['D2.His.3.3-5', 'D2.His.5.3-5', 'D2.Civ.2.3-5', 'D2.Eco.1.3-5'],
        note: 'Aligned to Common Core ELA standards for grade 5 and the C3 Framework for historical thinking and civic reasoning at the elementary level.',
      },
    },
    create: {
      id: 'springfield-lesson-revolution-rebellion',
      townId: SPRINGFIELD_TOWN_ID,
      title: 'From Revolution to Rebellion: Springfield\'s Two Fights for Justice',
      slug: 'springfield-revolution-to-rebellion',
      gradeRange: '4-6',
      estimatedDuration: '2 class periods',
      summary: 'Students trace Springfield\'s arc from patriot stronghold to site of domestic insurrection, examining how the same principles of liberty and resistance that justified the Revolution were invoked by Shays\' rebels a decade later. This lesson is designed for younger students and uses storytelling, role-play, and visual activities to make the complex political questions accessible.',
      lessonData: {
        objectives: [
          'Describe Springfield\'s role as a supply center and armory site during the Revolutionary War',
          'Explain why farmers and veterans in western Massachusetts were angry after the war',
          'Retell the events of January 25, 1787, at the Springfield arsenal in their own words',
          'Discuss whether there is a difference between fighting for freedom and breaking the law',
        ],
        essentialQuestions: [
          'Why was Springfield important to the American army during the Revolution?',
          'What happened to the soldiers after they came home from the war?',
          'Why did Daniel Shays and his followers march on the arsenal?',
          'When is it right to stand up against your own government?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Read aloud a short scenario: A farmer comes home from war. He has not been paid. The government is taking his farm because he cannot pay his taxes. He has tried asking for help but no one will listen. Ask students: What would you do? Record responses on the board. Explain that this was a real situation in Springfield in the 1780s.',
        },
        directInstruction: {
          duration: '15 minutes',
          content: [
            'Springfield during the Revolution: where weapons were stored and repaired, where militia gathered, a town that helped win the war',
            'After the war: soldiers come home to find farms in trouble, taxes they cannot pay, courts taking their property',
            'Daniel Shays and his neighbors decide to fight back — first by closing the courts, then by trying to take the weapons at the arsenal',
            'January 25, 1787: the march, the cannon fire, the four men who died',
          ],
        },
        guidedPractice: {
          duration: '25 minutes',
          activities: [
            'Story Mapping: Students create a four-panel comic strip or storyboard showing the key events: (1) Springfield during the war, (2) farmers struggling after the war, (3) the march on the arsenal, (4) the aftermath. Each panel includes a caption explaining what happened.',
            'Two Sides Activity: The class divides into two groups. One group lists reasons why Shays was right to rebel. The other lists reasons why General Shepard was right to defend the arsenal. Groups share their lists, and the class discusses which arguments are strongest.',
          ],
        },
        independentPractice: {
          duration: '20 minutes',
          assignment: 'Choose to be either Daniel Shays or William Shepard. Write a diary entry for the evening of January 25, 1787 — the night after the confrontation at the arsenal. Describe what happened, how you feel about it, and what you think will happen next. Your entry must include at least three facts from the lesson.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Think-Pair-Share: Was Daniel Shays a hero or a troublemaker? Could there be a way he was both? Discuss how the same person can be seen differently depending on your point of view. Exit ticket: Write one sentence explaining why the events at Springfield mattered for the future of the United States.',
        },
        differentiation: {
          struggling: 'Provide a storyboard template with key images already sketched. Offer sentence starters for the diary entry. Work with a partner on the Two Sides Activity.',
          advanced: 'Research what happened to Daniel Shays after the rebellion. Write a second diary entry from five years later reflecting on what he did.',
          ell: 'Provide a picture glossary with key vocabulary (armory, arsenal, rebellion, taxes, militia). Allow the diary entry to be partially illustrated. Pair with a fluent speaker for the Two Sides Activity.',
        },
      },
      standards: {
        commonCore: ['RI.5.1', 'RI.5.3', 'RI.5.6', 'W.5.3', 'SL.5.1'],
        c3Framework: ['D2.His.3.3-5', 'D2.His.5.3-5', 'D2.Civ.2.3-5', 'D2.Eco.1.3-5'],
        note: 'Aligned to Common Core ELA standards for grade 5 and the C3 Framework for historical thinking and civic reasoning at the elementary level.',
      },
    },
  });

  console.log('  Lessons seeded.');
}

// =============================================================================
// MAIN
// =============================================================================

async function main() {
  console.log('Seeding Springfield content...');

  await seedPeople();
  await seedPlaces();
  await seedEvents();
  await seedEventPeople();
  await seedStories();
  await seedLessons();

  console.log('Springfield content seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
