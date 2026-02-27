import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const TOWN_ID = 'us-nj-trenton';

// =============================================================================
// PEOPLE
// =============================================================================

async function seedPeople() {
  console.log('  Seeding people...');

  // --- UPSERT 8 EXISTING PEOPLE WITH bioLong ---

  await prisma.person.upsert({
    where: { id: 'person-trenton-john-rall' },
    update: {
      bioLong: `Johann Gottlieb Rall was born around 1726 in Hesse-Cassel, a German principality that supplemented its treasury by renting trained soldiers to foreign powers. Rall entered military service as a young man and served in the Seven Years' War, gaining combat experience that established his reputation as an aggressive and capable field officer. By the 1770s he held the rank of colonel and commanded a regiment of Hessian grenadiers, elite infantry distinguished by their tall brass-fronted caps and their role as shock troops in battle formations.

Rall arrived in North America in August 1776 as part of the large Hessian contingent hired by the British Crown to suppress the American rebellion. He and his regiment participated in the Battle of Long Island in August 1776 and the subsequent campaign that drove Washington's army across New Jersey. Rall's regiment earned a fearsome reputation during the assault on Fort Washington in November 1776, where his grenadiers stormed the fortifications and helped capture nearly 3,000 American soldiers. After the fall of Fort Washington, Rall was assigned to command the Hessian garrison at Trenton, New Jersey, a post he took up in early December 1776.

At Trenton, Rall commanded approximately 1,400 Hessian soldiers from three regiments. He has often been characterized as complacent during his time there, but the historical record is more complex. Rall did request reinforcements and reported to his superiors that his position was exposed. He conducted regular patrols and responded to several American probing attacks in the weeks before December 26. However, he declined to construct fortifications around the town, reportedly preferring to rely on aggressive counterattacks rather than defensive works. On the morning of December 26, 1776, Washington's forces attacked Trenton in a surprise assault. Rall, roused from sleep, attempted to organize a counterattack but was mortally wounded by musket fire during the fighting. He died later that evening.

WHY HE MATTERS TO TRENTON

Johann Rall's command of the Hessian garrison at Trenton placed him at the center of one of the war's turning points. His decisions — to forego fortifications, to keep his regiments quartered in the town rather than establishing defensive outposts — shaped the conditions that made Washington's surprise attack possible. His death in the battle and the surrender of nearly his entire garrison transformed Trenton from an obscure river town into a symbol of American resilience. The Hessian defeat at Trenton shattered the myth of German military invincibility and demonstrated that professional European soldiers could be beaten by the Continental Army.

- c.1726: Born in Hesse-Cassel, Germany
- 1776 (August): Arrived in North America with Hessian forces
- 1776 (November 16): Led assault on Fort Washington, New York
- 1776 (December): Took command of the Hessian garrison at Trenton
- 1776 (December 26): Mortally wounded during the Battle of Trenton; died that evening

SOURCES
- Fischer, David Hackett. "Washington's Crossing." Oxford University Press, 2004.
- Atwood, Rodney. "The Hessians: Mercenaries from Hessen-Kassel in the American Revolution." Cambridge University Press, 1980.
- Stryker, William S. "The Battles of Trenton and Princeton." Houghton Mifflin, 1898.`,
    },
    create: {
      id: 'person-trenton-john-rall',
      name: 'Johann Rall',
      roles: ['Hessian Colonel', 'Garrison Commander'],
      bioShort: 'Hessian colonel (c.1726-1776) who commanded the garrison at Trenton and was killed during Washington\'s surprise attack on December 26, 1776.',
      bioLong: `Johann Gottlieb Rall was born around 1726 in Hesse-Cassel, a German principality that supplemented its treasury by renting trained soldiers to foreign powers. Rall entered military service as a young man and served in the Seven Years' War, gaining combat experience that established his reputation as an aggressive and capable field officer. By the 1770s he held the rank of colonel and commanded a regiment of Hessian grenadiers, elite infantry distinguished by their tall brass-fronted caps and their role as shock troops in battle formations.

Rall arrived in North America in August 1776 as part of the large Hessian contingent hired by the British Crown to suppress the American rebellion. He and his regiment participated in the Battle of Long Island in August 1776 and the subsequent campaign that drove Washington's army across New Jersey. Rall's regiment earned a fearsome reputation during the assault on Fort Washington in November 1776, where his grenadiers stormed the fortifications and helped capture nearly 3,000 American soldiers. After the fall of Fort Washington, Rall was assigned to command the Hessian garrison at Trenton, New Jersey, a post he took up in early December 1776.

At Trenton, Rall commanded approximately 1,400 Hessian soldiers from three regiments. He has often been characterized as complacent during his time there, but the historical record is more complex. Rall did request reinforcements and reported to his superiors that his position was exposed. He conducted regular patrols and responded to several American probing attacks in the weeks before December 26. However, he declined to construct fortifications around the town, reportedly preferring to rely on aggressive counterattacks rather than defensive works. On the morning of December 26, 1776, Washington's forces attacked Trenton in a surprise assault. Rall, roused from sleep, attempted to organize a counterattack but was mortally wounded by musket fire during the fighting. He died later that evening.

WHY HE MATTERS TO TRENTON

Johann Rall's command of the Hessian garrison at Trenton placed him at the center of one of the war's turning points. His decisions — to forego fortifications, to keep his regiments quartered in the town rather than establishing defensive outposts — shaped the conditions that made Washington's surprise attack possible. His death in the battle and the surrender of nearly his entire garrison transformed Trenton from an obscure river town into a symbol of American resilience. The Hessian defeat at Trenton shattered the myth of German military invincibility and demonstrated that professional European soldiers could be beaten by the Continental Army.

- c.1726: Born in Hesse-Cassel, Germany
- 1776 (August): Arrived in North America with Hessian forces
- 1776 (November 16): Led assault on Fort Washington, New York
- 1776 (December): Took command of the Hessian garrison at Trenton
- 1776 (December 26): Mortally wounded during the Battle of Trenton; died that evening

SOURCES
- Fischer, David Hackett. "Washington's Crossing." Oxford University Press, 2004.
- Atwood, Rodney. "The Hessians: Mercenaries from Hessen-Kassel in the American Revolution." Cambridge University Press, 1980.
- Stryker, William S. "The Battles of Trenton and Princeton." Houghton Mifflin, 1898.`,
      birthYear: 1726,
      deathYear: 1776,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-trenton-john-glover' },
    update: {
      bioLong: `John Glover was born on November 5, 1732, in Salem, Massachusetts, and grew up in the fishing port of Marblehead. He became a successful merchant and ship owner, operating a fleet of fishing and trading vessels out of Marblehead Harbor. By the time of the Revolution, Glover was one of the town's leading citizens and a colonel in the local militia. When the war began, he organized the 14th Continental Regiment, composed almost entirely of Marblehead fishermen and sailors — men whose maritime skills would prove invaluable to the Continental Army.

Glover's regiment first demonstrated its unique capabilities during the evacuation of Long Island on August 29-30, 1776. After Washington's army was trapped on Brooklyn Heights following the Battle of Long Island, Glover's Marblehead men rowed approximately 9,000 soldiers across the East River to Manhattan in a single night, using every available watercraft. The operation was carried out in darkness, rain, and fog, and not a single soldier was lost. Without Glover's sailors, the Continental Army would have been destroyed on Long Island before the war was a year old.

Four months later, on the night of December 25-26, 1776, Glover's regiment performed an even more difficult feat: ferrying Washington's army across the ice-choked Delaware River for the attack on Trenton. The crossing took place in a nor'easter, with sleet, snow, and chunks of ice threatening to overturn the boats. Glover's fishermen managed the Durham boats and ferries that transported approximately 2,400 soldiers, 18 artillery pieces, and horses across the river in darkness. The crossing ran several hours behind schedule, but Glover's men completed it without losing a single soldier to the river.

WHY HE MATTERS TO TRENTON

John Glover made the Battle of Trenton possible. Without his Marblehead mariners, Washington's army could not have crossed the Delaware River on December 25, 1776. The skill required to navigate heavy, flat-bottomed Durham boats through ice floes in a winter storm was not military training — it was the everyday competence of New England fishermen applied to a desperate military situation. Glover's contribution illustrates how the Revolution depended not only on generals and politicians but on the practical skills of ordinary working people.

- 1732: Born November 5 in Salem, Massachusetts
- 1775: Organized the 14th Continental Regiment from Marblehead fishermen
- 1776 (August 29-30): Led the evacuation of Long Island across the East River
- 1776 (December 25-26): Managed the Delaware River crossing for the Trenton attack
- 1797: Died January 30 in Marblehead, Massachusetts

SOURCES
- Billias, George Athan. "General John Glover and His Marblehead Mariners." Henry Holt, 1960.
- Fischer, David Hackett. "Washington's Crossing." Oxford University Press, 2004.
- Upham, George B. "General John Glover of Marblehead." Essex Institute Historical Collections, 1921.`,
    },
    create: {
      id: 'person-trenton-john-glover',
      name: 'John Glover',
      roles: ['Continental Army General', 'Marblehead Mariner', 'Merchant'],
      bioShort: 'Marblehead fisherman and Continental Army officer (1732-1797) whose regiment of mariners ferried Washington\'s army across the Delaware River for the attack on Trenton.',
      bioLong: `John Glover was born on November 5, 1732, in Salem, Massachusetts, and grew up in the fishing port of Marblehead. He became a successful merchant and ship owner, operating a fleet of fishing and trading vessels out of Marblehead Harbor. By the time of the Revolution, Glover was one of the town's leading citizens and a colonel in the local militia. When the war began, he organized the 14th Continental Regiment, composed almost entirely of Marblehead fishermen and sailors — men whose maritime skills would prove invaluable to the Continental Army.

Glover's regiment first demonstrated its unique capabilities during the evacuation of Long Island on August 29-30, 1776. After Washington's army was trapped on Brooklyn Heights following the Battle of Long Island, Glover's Marblehead men rowed approximately 9,000 soldiers across the East River to Manhattan in a single night, using every available watercraft. The operation was carried out in darkness, rain, and fog, and not a single soldier was lost. Without Glover's sailors, the Continental Army would have been destroyed on Long Island before the war was a year old.

Four months later, on the night of December 25-26, 1776, Glover's regiment performed an even more difficult feat: ferrying Washington's army across the ice-choked Delaware River for the attack on Trenton. The crossing took place in a nor'easter, with sleet, snow, and chunks of ice threatening to overturn the boats. Glover's fishermen managed the Durham boats and ferries that transported approximately 2,400 soldiers, 18 artillery pieces, and horses across the river in darkness. The crossing ran several hours behind schedule, but Glover's men completed it without losing a single soldier to the river.

WHY HE MATTERS TO TRENTON

John Glover made the Battle of Trenton possible. Without his Marblehead mariners, Washington's army could not have crossed the Delaware River on December 25, 1776. The skill required to navigate heavy, flat-bottomed Durham boats through ice floes in a winter storm was not military training — it was the everyday competence of New England fishermen applied to a desperate military situation. Glover's contribution illustrates how the Revolution depended not only on generals and politicians but on the practical skills of ordinary working people.

- 1732: Born November 5 in Salem, Massachusetts
- 1775: Organized the 14th Continental Regiment from Marblehead fishermen
- 1776 (August 29-30): Led the evacuation of Long Island across the East River
- 1776 (December 25-26): Managed the Delaware River crossing for the Trenton attack
- 1797: Died January 30 in Marblehead, Massachusetts

SOURCES
- Billias, George Athan. "General John Glover and His Marblehead Mariners." Henry Holt, 1960.
- Fischer, David Hackett. "Washington's Crossing." Oxford University Press, 2004.
- Upham, George B. "General John Glover of Marblehead." Essex Institute Historical Collections, 1921.`,
      birthYear: 1732,
      deathYear: 1797,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-trenton-henry-knox' },
    update: {
      bioLong: `Henry Knox was born on July 25, 1750, in Boston, Massachusetts. His father abandoned the family when Henry was young, and he left school at age twelve to work in a bookshop to support his mother. He eventually opened his own bookstore, the London Book-Store, on Cornhill Street in Boston, where he developed an extensive knowledge of military science by reading the European treatises on artillery, fortification, and engineering that he sold. This self-education would prove decisive for the Revolution: Knox became one of the Continental Army's foremost experts on artillery despite having no formal military training.

Knox came to Washington's attention during the Siege of Boston in 1775, when he proposed an audacious plan to transport captured British cannons from Fort Ticonderoga in upstate New York to the heights around Boston — a distance of roughly 300 miles through the winter wilderness. Washington approved the plan, and Knox executed it between November 1775 and January 1776, moving approximately 60 tons of artillery by ox-drawn sledges over frozen lakes and through the Berkshire Mountains. The cannons, emplaced on Dorchester Heights, forced the British evacuation of Boston in March 1776.

During the Trenton campaign, Knox was responsible for the artillery that proved decisive in the battle. He supervised the transport of eighteen cannons across the Delaware River on the night of December 25-26, 1776, and then positioned them to command the streets of Trenton. The American artillery fired grapeshot and canister down King and Queen Streets, preventing the Hessians from forming organized defensive lines. Knox's guns turned a surprise attack into a decisive victory. He continued to serve as Washington's chief of artillery throughout the war and was later appointed the first Secretary of War under the Constitution.

WHY HE MATTERS TO TRENTON

Henry Knox's artillery was the decisive weapon at the Battle of Trenton. The eighteen cannons he transported across the Delaware and positioned at the heads of Trenton's main streets made it impossible for the Hessians to mount an effective counterattack. His men fired continuously during the battle, raking the streets with grapeshot while American infantry closed in from multiple directions. Knox demonstrated that artillery could be used not just in sieges but as a mobile weapon in offensive operations — a lesson he had taught himself from books in a Boston bookshop.

- 1750: Born July 25 in Boston, Massachusetts
- 1775-1776: Transported cannons from Fort Ticonderoga to Boston
- 1776 (December 25-26): Supervised artillery transport across the Delaware River
- 1776 (December 26): Commanded artillery at the Battle of Trenton
- 1806: Died October 25 in Thomaston, Maine

SOURCES
- Puls, Mark. "Henry Knox: Visionary General of the American Revolution." Palgrave Macmillan, 2008.
- Fischer, David Hackett. "Washington's Crossing." Oxford University Press, 2004.
- Brooks, Noah. "Henry Knox: A Soldier of the Revolution." G.P. Putnam's Sons, 1900.`,
    },
    create: {
      id: 'person-trenton-henry-knox',
      name: 'Henry Knox',
      roles: ['Chief of Artillery', 'Continental Army General', 'Secretary of War'],
      bioShort: 'Self-taught artillerist (1750-1806) who commanded the Continental Army\'s artillery at Trenton and later served as the first Secretary of War.',
      bioLong: `Henry Knox was born on July 25, 1750, in Boston, Massachusetts. His father abandoned the family when Henry was young, and he left school at age twelve to work in a bookshop to support his mother. He eventually opened his own bookstore, the London Book-Store, on Cornhill Street in Boston, where he developed an extensive knowledge of military science by reading the European treatises on artillery, fortification, and engineering that he sold. This self-education would prove decisive for the Revolution: Knox became one of the Continental Army's foremost experts on artillery despite having no formal military training.

Knox came to Washington's attention during the Siege of Boston in 1775, when he proposed an audacious plan to transport captured British cannons from Fort Ticonderoga in upstate New York to the heights around Boston — a distance of roughly 300 miles through the winter wilderness. Washington approved the plan, and Knox executed it between November 1775 and January 1776, moving approximately 60 tons of artillery by ox-drawn sledges over frozen lakes and through the Berkshire Mountains. The cannons, emplaced on Dorchester Heights, forced the British evacuation of Boston in March 1776.

During the Trenton campaign, Knox was responsible for the artillery that proved decisive in the battle. He supervised the transport of eighteen cannons across the Delaware River on the night of December 25-26, 1776, and then positioned them to command the streets of Trenton. The American artillery fired grapeshot and canister down King and Queen Streets, preventing the Hessians from forming organized defensive lines. Knox's guns turned a surprise attack into a decisive victory. He continued to serve as Washington's chief of artillery throughout the war and was later appointed the first Secretary of War under the Constitution.

WHY HE MATTERS TO TRENTON

Henry Knox's artillery was the decisive weapon at the Battle of Trenton. The eighteen cannons he transported across the Delaware and positioned at the heads of Trenton's main streets made it impossible for the Hessians to mount an effective counterattack. His men fired continuously during the battle, raking the streets with grapeshot while American infantry closed in from multiple directions. Knox demonstrated that artillery could be used not just in sieges but as a mobile weapon in offensive operations — a lesson he had taught himself from books in a Boston bookshop.

- 1750: Born July 25 in Boston, Massachusetts
- 1775-1776: Transported cannons from Fort Ticonderoga to Boston
- 1776 (December 25-26): Supervised artillery transport across the Delaware River
- 1776 (December 26): Commanded artillery at the Battle of Trenton
- 1806: Died October 25 in Thomaston, Maine

SOURCES
- Puls, Mark. "Henry Knox: Visionary General of the American Revolution." Palgrave Macmillan, 2008.
- Fischer, David Hackett. "Washington's Crossing." Oxford University Press, 2004.
- Brooks, Noah. "Henry Knox: A Soldier of the Revolution." G.P. Putnam's Sons, 1900.`,
      birthYear: 1750,
      deathYear: 1806,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-trenton-james-monroe' },
    update: {
      bioLong: `James Monroe was born on April 28, 1758, in Westmoreland County, Virginia. He enrolled at the College of William and Mary in 1774 but left in 1776 to join the Continental Army as a lieutenant in the 3rd Virginia Regiment. Monroe was eighteen years old when he marched north to join Washington's retreating army in the autumn of 1776. He arrived in time for the desperate campaign that would define his early military career and shape his political life.

During the Battle of Trenton on December 26, 1776, Monroe served under Captain William Washington (a distant cousin of the commanding general) in an advance party tasked with seizing a Hessian artillery position on King Street. As the Americans charged the Hessian guns, Monroe was struck in the left shoulder by a musket ball that severed an artery. He would have bled to death on the street had it not been for Dr. John Riker, a local physician who happened to be present and who clamped the artery, saving Monroe's life. The wound was severe enough to end Monroe's participation in the battle and required months of recovery.

Monroe recovered and returned to service, fighting at Brandywine, Germantown, and Monmouth. He served as a military aide to Lord Stirling and as an intelligence officer under Washington's direction. After the war, Monroe studied law under Thomas Jefferson and entered Virginia politics. He served as a U.S. Senator, Minister to France, Governor of Virginia, Secretary of State and Secretary of War simultaneously under Madison, and finally as the fifth President of the United States from 1817 to 1825. His presidency is remembered for the Era of Good Feelings and the Monroe Doctrine.

WHY HE MATTERS TO TRENTON

James Monroe nearly died on the streets of Trenton at age eighteen. The musket ball that struck him on King Street came within inches of ending a life that would span decades of public service, including the presidency. Monroe's presence at Trenton illustrates the youth of the Continental Army's officer corps — many of the men who would lead the new republic through its first half-century were barely out of adolescence during the Revolution. His wounding at Trenton became a defining moment of his biography, a credential of sacrifice that he carried into every subsequent political campaign.

- 1758: Born April 28 in Westmoreland County, Virginia
- 1776 (December 26): Wounded at the Battle of Trenton while capturing Hessian artillery
- 1817-1825: Served as the fifth President of the United States
- 1823: Issued the Monroe Doctrine
- 1831: Died July 4 in New York City

SOURCES
- Unger, Harlow Giles. "The Last Founding Father: James Monroe and a Nation's Call to Greatness." Da Capo Press, 2009.
- Ammon, Harry. "James Monroe: The Quest for National Identity." University Press of Virginia, 1990.
- Fischer, David Hackett. "Washington's Crossing." Oxford University Press, 2004.`,
    },
    create: {
      id: 'person-trenton-james-monroe',
      name: 'James Monroe',
      roles: ['Continental Army Lieutenant', 'Future President', 'Diplomat'],
      bioShort: 'Virginia lieutenant (1758-1831) wounded at the Battle of Trenton who went on to serve as the fifth President of the United States.',
      bioLong: `James Monroe was born on April 28, 1758, in Westmoreland County, Virginia. He enrolled at the College of William and Mary in 1774 but left in 1776 to join the Continental Army as a lieutenant in the 3rd Virginia Regiment. Monroe was eighteen years old when he marched north to join Washington's retreating army in the autumn of 1776. He arrived in time for the desperate campaign that would define his early military career and shape his political life.

During the Battle of Trenton on December 26, 1776, Monroe served under Captain William Washington (a distant cousin of the commanding general) in an advance party tasked with seizing a Hessian artillery position on King Street. As the Americans charged the Hessian guns, Monroe was struck in the left shoulder by a musket ball that severed an artery. He would have bled to death on the street had it not been for Dr. John Riker, a local physician who happened to be present and who clamped the artery, saving Monroe's life. The wound was severe enough to end Monroe's participation in the battle and required months of recovery.

Monroe recovered and returned to service, fighting at Brandywine, Germantown, and Monmouth. He served as a military aide to Lord Stirling and as an intelligence officer under Washington's direction. After the war, Monroe studied law under Thomas Jefferson and entered Virginia politics. He served as a U.S. Senator, Minister to France, Governor of Virginia, Secretary of State and Secretary of War simultaneously under Madison, and finally as the fifth President of the United States from 1817 to 1825. His presidency is remembered for the Era of Good Feelings and the Monroe Doctrine.

WHY HE MATTERS TO TRENTON

James Monroe nearly died on the streets of Trenton at age eighteen. The musket ball that struck him on King Street came within inches of ending a life that would span decades of public service, including the presidency. Monroe's presence at Trenton illustrates the youth of the Continental Army's officer corps — many of the men who would lead the new republic through its first half-century were barely out of adolescence during the Revolution. His wounding at Trenton became a defining moment of his biography, a credential of sacrifice that he carried into every subsequent political campaign.

- 1758: Born April 28 in Westmoreland County, Virginia
- 1776 (December 26): Wounded at the Battle of Trenton while capturing Hessian artillery
- 1817-1825: Served as the fifth President of the United States
- 1823: Issued the Monroe Doctrine
- 1831: Died July 4 in New York City

SOURCES
- Unger, Harlow Giles. "The Last Founding Father: James Monroe and a Nation's Call to Greatness." Da Capo Press, 2009.
- Ammon, Harry. "James Monroe: The Quest for National Identity." University Press of Virginia, 1990.
- Fischer, David Hackett. "Washington's Crossing." Oxford University Press, 2004.`,
      birthYear: 1758,
      deathYear: 1831,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-trenton-john-honeyman' },
    update: {
      bioLong: `John Honeyman was born around 1729 in Armagh, Ireland. He served in the British Army during the French and Indian War, reportedly as part of the unit that carried the body of General James Wolfe from the battlefield at Quebec in 1759. After the war, Honeyman settled in Griggstown, New Jersey, where he worked as a weaver and cattle dealer. When the Revolution began, Honeyman appeared to side with the British, a stance that made him deeply unpopular among his patriot neighbors. His Loyalist sympathies, however, may have been a carefully constructed cover arranged with George Washington himself.

According to a tradition supported by circumstantial evidence and later family testimony, Honeyman served as a spy for Washington during the critical weeks before the Battle of Trenton. Operating under the guise of a Loyalist cattle dealer and butcher, Honeyman moved freely between American and British-Hessian lines, ostensibly selling provisions to the Hessian garrison at Trenton. In this capacity, he was able to observe the garrison's strength, disposition, routines, and defenses. Tradition holds that Honeyman allowed himself to be captured by American scouts shortly before the attack and was brought to Washington, to whom he reported directly on conditions in Trenton.

The exact nature and extent of Honeyman's espionage remains debated among historians. No contemporary documentary evidence definitively confirms his role as a spy, and the story rests partly on family oral tradition and a letter purportedly written by Washington granting Honeyman protection. Some historians, including David Hackett Fischer, treat the Honeyman story with caution while acknowledging that Washington did employ intelligence operatives in the Trenton campaign. What is clear is that Washington possessed detailed knowledge of the Hessian garrison's disposition before the attack, and that some of that intelligence came from human sources operating near Trenton.

WHY HE MATTERS TO TRENTON

The Honeyman tradition speaks to the essential role of intelligence in the Trenton campaign. Whether Honeyman was Washington's agent or one of several sources, the story captures a truth about how the battle was won: not by force alone but by careful reconnaissance and deception. Washington's decision to attack Trenton was informed by detailed knowledge of the garrison's vulnerabilities — knowledge that could only have come from observers on the ground. Honeyman's story also illustrates the personal dangers faced by intelligence operatives during the Revolution, who risked execution from both sides.

- c.1729: Born in Armagh, Ireland
- 1759: Reportedly served at the Battle of Quebec during the French and Indian War
- 1776 (December): Allegedly gathered intelligence on the Hessian garrison at Trenton
- 1776 (December 22-23): According to tradition, captured and debriefed by Washington
- 1822: Died in Lamington, New Jersey

SOURCES
- Fischer, David Hackett. "Washington's Crossing." Oxford University Press, 2004.
- Van Doren, Carl. "Secret History of the American Revolution." Viking Press, 1941.
- Bakeless, John. "Turncoats, Traitors, and Heroes: Espionage in the American Revolution." J.B. Lippincott, 1959.`,
    },
    create: {
      id: 'person-trenton-john-honeyman',
      name: 'John Honeyman',
      roles: ['Alleged Spy', 'Cattle Dealer', 'Weaver'],
      bioShort: 'Irish-born cattle dealer (c.1729-1822) who, according to tradition, served as a spy for Washington and provided intelligence on the Hessian garrison at Trenton.',
      bioLong: `John Honeyman was born around 1729 in Armagh, Ireland. He served in the British Army during the French and Indian War, reportedly as part of the unit that carried the body of General James Wolfe from the battlefield at Quebec in 1759. After the war, Honeyman settled in Griggstown, New Jersey, where he worked as a weaver and cattle dealer. When the Revolution began, Honeyman appeared to side with the British, a stance that made him deeply unpopular among his patriot neighbors. His Loyalist sympathies, however, may have been a carefully constructed cover arranged with George Washington himself.

According to a tradition supported by circumstantial evidence and later family testimony, Honeyman served as a spy for Washington during the critical weeks before the Battle of Trenton. Operating under the guise of a Loyalist cattle dealer and butcher, Honeyman moved freely between American and British-Hessian lines, ostensibly selling provisions to the Hessian garrison at Trenton. In this capacity, he was able to observe the garrison's strength, disposition, routines, and defenses. Tradition holds that Honeyman allowed himself to be captured by American scouts shortly before the attack and was brought to Washington, to whom he reported directly on conditions in Trenton.

The exact nature and extent of Honeyman's espionage remains debated among historians. No contemporary documentary evidence definitively confirms his role as a spy, and the story rests partly on family oral tradition and a letter purportedly written by Washington granting Honeyman protection. Some historians, including David Hackett Fischer, treat the Honeyman story with caution while acknowledging that Washington did employ intelligence operatives in the Trenton campaign. What is clear is that Washington possessed detailed knowledge of the Hessian garrison's disposition before the attack, and that some of that intelligence came from human sources operating near Trenton.

WHY HE MATTERS TO TRENTON

The Honeyman tradition speaks to the essential role of intelligence in the Trenton campaign. Whether Honeyman was Washington's agent or one of several sources, the story captures a truth about how the battle was won: not by force alone but by careful reconnaissance and deception. Washington's decision to attack Trenton was informed by detailed knowledge of the garrison's vulnerabilities — knowledge that could only have come from observers on the ground. Honeyman's story also illustrates the personal dangers faced by intelligence operatives during the Revolution, who risked execution from both sides.

- c.1729: Born in Armagh, Ireland
- 1759: Reportedly served at the Battle of Quebec during the French and Indian War
- 1776 (December): Allegedly gathered intelligence on the Hessian garrison at Trenton
- 1776 (December 22-23): According to tradition, captured and debriefed by Washington
- 1822: Died in Lamington, New Jersey

SOURCES
- Fischer, David Hackett. "Washington's Crossing." Oxford University Press, 2004.
- Van Doren, Carl. "Secret History of the American Revolution." Viking Press, 1941.
- Bakeless, John. "Turncoats, Traitors, and Heroes: Espionage in the American Revolution." J.B. Lippincott, 1959.`,
      birthYear: 1729,
      deathYear: 1822,
      verificationStatus: 'ANECDOTAL',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-trenton-alexander-hamilton' },
    update: {
      bioLong: `Alexander Hamilton was born on January 11, 1755 (or 1757, the year is disputed), on the island of Nevis in the British West Indies. Orphaned and largely self-educated, he arrived in New York in 1773 to attend King's College (now Columbia University). When the Revolution began, Hamilton joined a New York militia company and quickly attracted attention for his intelligence and energy. In March 1776, he was appointed captain of a New York Provincial Company of Artillery, a unit he trained and equipped with funds he helped raise.

Hamilton and his artillery company participated in the battles of Long Island, Harlem Heights, White Plains, and the retreat across New Jersey in the autumn of 1776. By December, the twenty-one-year-old captain and his men were part of Washington's battered army encamped along the Pennsylvania side of the Delaware River. During the crossing on December 25-26, Hamilton's company was among the units that brought their guns across the river. At the Battle of Trenton, Hamilton positioned his two cannons at the junction of King and Queen Streets, where they commanded a critical intersection and poured fire into the Hessian formations attempting to organize a counterattack.

Hamilton's performance at Trenton and the subsequent Battle of Princeton in January 1777 brought him to Washington's direct attention. In March 1777, Washington appointed Hamilton as his aide-de-camp with the rank of lieutenant colonel. In this role, Hamilton became one of Washington's most trusted staff officers, drafting correspondence, managing logistics, and serving as a diplomatic intermediary. After the war, Hamilton became the first Secretary of the Treasury, architect of the federal financial system, co-author of the Federalist Papers, and one of the primary shapers of the American constitutional order. He was killed in a duel with Aaron Burr on July 12, 1804.

WHY HE MATTERS TO TRENTON

The Battle of Trenton was a proving ground for Alexander Hamilton. At twenty-one, commanding a small artillery company in a desperate attack, he demonstrated the tactical skill and personal courage that would bring him to Washington's attention and launch one of the most consequential careers in American history. His cannons at the King and Queen Street intersection helped seal the Hessian defeat. Trenton was the beginning of the relationship between Hamilton and Washington that would shape the founding of the republic.

- 1755 or 1757: Born January 11 on Nevis, British West Indies
- 1776 (March): Commissioned captain of a New York artillery company
- 1776 (December 26): Commanded artillery at the Battle of Trenton
- 1777 (January 3): Fought at the Battle of Princeton
- 1804: Died July 12 in New York after a duel with Aaron Burr

SOURCES
- Chernow, Ron. "Alexander Hamilton." Penguin Press, 2004.
- Fischer, David Hackett. "Washington's Crossing." Oxford University Press, 2004.
- Mitchell, Broadus. "Alexander Hamilton: Youth to Maturity, 1755-1788." Macmillan, 1957.`,
    },
    create: {
      id: 'person-trenton-alexander-hamilton',
      name: 'Alexander Hamilton',
      roles: ['Artillery Captain', 'Aide-de-Camp', 'Secretary of the Treasury'],
      bioShort: 'Artillery captain (1755/57-1804) who commanded cannons at the Battle of Trenton and later became the first Secretary of the Treasury.',
      bioLong: `Alexander Hamilton was born on January 11, 1755 (or 1757, the year is disputed), on the island of Nevis in the British West Indies. Orphaned and largely self-educated, he arrived in New York in 1773 to attend King's College (now Columbia University). When the Revolution began, Hamilton joined a New York militia company and quickly attracted attention for his intelligence and energy. In March 1776, he was appointed captain of a New York Provincial Company of Artillery, a unit he trained and equipped with funds he helped raise.

Hamilton and his artillery company participated in the battles of Long Island, Harlem Heights, White Plains, and the retreat across New Jersey in the autumn of 1776. By December, the twenty-one-year-old captain and his men were part of Washington's battered army encamped along the Pennsylvania side of the Delaware River. During the crossing on December 25-26, Hamilton's company was among the units that brought their guns across the river. At the Battle of Trenton, Hamilton positioned his two cannons at the junction of King and Queen Streets, where they commanded a critical intersection and poured fire into the Hessian formations attempting to organize a counterattack.

Hamilton's performance at Trenton and the subsequent Battle of Princeton in January 1777 brought him to Washington's direct attention. In March 1777, Washington appointed Hamilton as his aide-de-camp with the rank of lieutenant colonel. In this role, Hamilton became one of Washington's most trusted staff officers, drafting correspondence, managing logistics, and serving as a diplomatic intermediary. After the war, Hamilton became the first Secretary of the Treasury, architect of the federal financial system, co-author of the Federalist Papers, and one of the primary shapers of the American constitutional order. He was killed in a duel with Aaron Burr on July 12, 1804.

WHY HE MATTERS TO TRENTON

The Battle of Trenton was a proving ground for Alexander Hamilton. At twenty-one, commanding a small artillery company in a desperate attack, he demonstrated the tactical skill and personal courage that would bring him to Washington's attention and launch one of the most consequential careers in American history. His cannons at the King and Queen Street intersection helped seal the Hessian defeat. Trenton was the beginning of the relationship between Hamilton and Washington that would shape the founding of the republic.

- 1755 or 1757: Born January 11 on Nevis, British West Indies
- 1776 (March): Commissioned captain of a New York artillery company
- 1776 (December 26): Commanded artillery at the Battle of Trenton
- 1777 (January 3): Fought at the Battle of Princeton
- 1804: Died July 12 in New York after a duel with Aaron Burr

SOURCES
- Chernow, Ron. "Alexander Hamilton." Penguin Press, 2004.
- Fischer, David Hackett. "Washington's Crossing." Oxford University Press, 2004.
- Mitchell, Broadus. "Alexander Hamilton: Youth to Maturity, 1755-1788." Macmillan, 1957.`,
      birthYear: 1755,
      deathYear: 1804,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-trenton-phillis-levenworth' },
    update: {
      bioLong: `Phillis was an enslaved woman living in Trenton, New Jersey, during the Revolutionary War. The documentary record for her life, like that of most enslaved people in eighteenth-century New Jersey, is fragmentary. She appears in local records associated with a Trenton household, though the precise details of her daily existence — her age, her origins, her family connections — are largely unrecoverable from the surviving documents. What is known is that she was present in Trenton during the Hessian occupation and the battle of December 26, 1776, making her a witness to events that would reshape the course of the war.

New Jersey had a significant enslaved population during the Revolutionary era. The 1790 census recorded over 11,000 enslaved people in the state, and Trenton, as a prosperous river town and the seat of Hunterdon County's court system, was home to numerous slaveholding households. Enslaved people in New Jersey performed agricultural labor, domestic service, and skilled trades. They lived under a legal system that denied them basic rights while simultaneously being surrounded by revolutionary rhetoric about liberty and equality.

The Hessian occupation of Trenton in December 1776 placed enslaved people like Phillis in a particularly precarious position. The Hessian soldiers requisitioned food, fuel, and labor from local households, including those where enslaved people lived and worked. During the battle itself, civilians of all conditions sheltered in cellars and homes as musket fire and cannon shot tore through the streets. The experience of the battle was not one of liberation for enslaved residents — the Continental Army that won at Trenton included both slaveholders and soldiers from slaveholding states, and the Revolution's promise of liberty would not extend to enslaved Black people in New Jersey for decades.

WHY SHE MATTERS TO TRENTON

Phillis represents the enslaved people whose labor sustained the communities where the Revolution was fought and whose experiences have been largely excluded from traditional narratives of the war. The Battle of Trenton is typically told as a story of generals, soldiers, and strategy, but it took place in a town where enslaved people lived and worked. Their presence complicates the narrative of a war fought for liberty. New Jersey did not pass a gradual emancipation law until 1804, and the last enslaved people in the state were not freed until the Thirteenth Amendment in 1865. Remembering Phillis means acknowledging that the Revolution's promise of freedom was not universal.

- Dates of birth and death unknown
- Documented as an enslaved woman in Trenton during the Revolution
- Present during the Hessian occupation and Battle of Trenton, December 1776
- New Jersey did not begin gradual emancipation until 1804

SOURCES
- Hodges, Graham Russell. "Slavery and Freedom in the Rural North: African Americans in Monmouth County, New Jersey, 1665-1865." Madison House, 1997.
- Gigantino, James J. II. "The Ragged Road to Abolition: Slavery and Freedom in New Jersey, 1775-1865." University of Pennsylvania Press, 2015.
- Wright, Giles R. "Afro-Americans in New Jersey: A Short History." New Jersey Historical Commission, 1988.`,
    },
    create: {
      id: 'person-trenton-phillis-levenworth',
      name: 'Phillis',
      roles: ['Enslaved Woman', 'Civilian Witness'],
      bioShort: 'Enslaved woman living in Trenton during the Revolutionary War who witnessed the Hessian occupation and Battle of Trenton.',
      bioLong: `Phillis was an enslaved woman living in Trenton, New Jersey, during the Revolutionary War. The documentary record for her life, like that of most enslaved people in eighteenth-century New Jersey, is fragmentary. She appears in local records associated with a Trenton household, though the precise details of her daily existence — her age, her origins, her family connections — are largely unrecoverable from the surviving documents. What is known is that she was present in Trenton during the Hessian occupation and the battle of December 26, 1776, making her a witness to events that would reshape the course of the war.

New Jersey had a significant enslaved population during the Revolutionary era. The 1790 census recorded over 11,000 enslaved people in the state, and Trenton, as a prosperous river town and the seat of Hunterdon County's court system, was home to numerous slaveholding households. Enslaved people in New Jersey performed agricultural labor, domestic service, and skilled trades. They lived under a legal system that denied them basic rights while simultaneously being surrounded by revolutionary rhetoric about liberty and equality.

The Hessian occupation of Trenton in December 1776 placed enslaved people like Phillis in a particularly precarious position. The Hessian soldiers requisitioned food, fuel, and labor from local households, including those where enslaved people lived and worked. During the battle itself, civilians of all conditions sheltered in cellars and homes as musket fire and cannon shot tore through the streets. The experience of the battle was not one of liberation for enslaved residents — the Continental Army that won at Trenton included both slaveholders and soldiers from slaveholding states, and the Revolution's promise of liberty would not extend to enslaved Black people in New Jersey for decades.

WHY SHE MATTERS TO TRENTON

Phillis represents the enslaved people whose labor sustained the communities where the Revolution was fought and whose experiences have been largely excluded from traditional narratives of the war. The Battle of Trenton is typically told as a story of generals, soldiers, and strategy, but it took place in a town where enslaved people lived and worked. Their presence complicates the narrative of a war fought for liberty. New Jersey did not pass a gradual emancipation law until 1804, and the last enslaved people in the state were not freed until the Thirteenth Amendment in 1865. Remembering Phillis means acknowledging that the Revolution's promise of freedom was not universal.

- Dates of birth and death unknown
- Documented as an enslaved woman in Trenton during the Revolution
- Present during the Hessian occupation and Battle of Trenton, December 1776
- New Jersey did not begin gradual emancipation until 1804

SOURCES
- Hodges, Graham Russell. "Slavery and Freedom in the Rural North: African Americans in Monmouth County, New Jersey, 1665-1865." Madison House, 1997.
- Gigantino, James J. II. "The Ragged Road to Abolition: Slavery and Freedom in New Jersey, 1775-1865." University of Pennsylvania Press, 2015.
- Wright, Giles R. "Afro-Americans in New Jersey: A Short History." New Jersey Historical Commission, 1988.`,
      verificationStatus: 'ORAL_TRADITION',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-trenton-abraham-hunt' },
    update: {
      bioLong: `Abraham Hunt was born around 1740 in Trenton, New Jersey, and became one of the town's wealthiest and most prominent citizens. He was a successful merchant and landowner whose business interests included trade along the Delaware River and supplying goods to the surrounding agricultural region. Hunt served on Trenton's local governing committees and was known as a shrewd businessman who maintained extensive contacts on both sides of the political divide during the Revolution. His large home on King Street was one of the notable residences in Trenton during the 1770s.

During the Hessian occupation of Trenton in December 1776, Hunt appears in the historical record in a complicated role. According to multiple accounts, Hunt hosted Colonel Rall and Hessian officers for social gatherings, including the evening of December 25, 1776 — the night before the American attack. Some historians have speculated that Hunt deliberately kept Rall occupied and at ease on the evening before the battle, as part of a patriot scheme to ensure the Hessians were unprepared. Others note that Hunt, as Trenton's leading citizen, would naturally have been expected to entertain the occupying garrison's commander regardless of his personal sympathies.

Hunt's true allegiance during the occupation remains ambiguous in the documentary record. He was not prosecuted as a Loyalist after the battle, which suggests either that he was genuinely sympathetic to the patriot cause or that his cooperation with the Hessians was understood as pragmatic survival rather than ideological commitment. After the war, Hunt continued to prosper as a merchant and civic leader in Trenton. He served in various local offices and remained a fixture of Trenton's business community until his death around 1802.

WHY HE MATTERS TO TRENTON

Abraham Hunt embodies the ambiguous position of civilians living under military occupation. As Trenton's leading merchant, he had to navigate between the demands of the Hessian garrison and whatever private loyalties he held. Whether he was a secret patriot who helped keep Rall off guard on Christmas night, a pragmatic businessman who cooperated with whoever held power, or simply a man trying to survive, Hunt's story captures the impossible choices that occupation forced on ordinary people. His experience reminds us that the Revolution was not only a military conflict but a crisis that played out in drawing rooms, counting houses, and dinner tables.

- c.1740: Born in Trenton, New Jersey
- 1776 (December): Hosted Hessian officers, including Colonel Rall, during the occupation
- 1776 (December 25): According to tradition, entertained Rall on the evening before the battle
- c.1802: Died in Trenton, New Jersey

SOURCES
- Fischer, David Hackett. "Washington's Crossing." Oxford University Press, 2004.
- Stryker, William S. "The Battles of Trenton and Princeton." Houghton Mifflin, 1898.
- Dwyer, William M. "The Day Is Ours!: November 1776-January 1777: An Inside View of the Battles of Trenton and Princeton." Viking Press, 1983.`,
    },
    create: {
      id: 'person-trenton-abraham-hunt',
      name: 'Abraham Hunt',
      roles: ['Merchant', 'Civic Leader', 'Trenton Resident'],
      bioShort: 'Trenton merchant (c.1740-c.1802) who hosted Hessian officers during the occupation and whose role on the eve of the battle remains debated.',
      bioLong: `Abraham Hunt was born around 1740 in Trenton, New Jersey, and became one of the town's wealthiest and most prominent citizens. He was a successful merchant and landowner whose business interests included trade along the Delaware River and supplying goods to the surrounding agricultural region. Hunt served on Trenton's local governing committees and was known as a shrewd businessman who maintained extensive contacts on both sides of the political divide during the Revolution. His large home on King Street was one of the notable residences in Trenton during the 1770s.

During the Hessian occupation of Trenton in December 1776, Hunt appears in the historical record in a complicated role. According to multiple accounts, Hunt hosted Colonel Rall and Hessian officers for social gatherings, including the evening of December 25, 1776 — the night before the American attack. Some historians have speculated that Hunt deliberately kept Rall occupied and at ease on the evening before the battle, as part of a patriot scheme to ensure the Hessians were unprepared. Others note that Hunt, as Trenton's leading citizen, would naturally have been expected to entertain the occupying garrison's commander regardless of his personal sympathies.

Hunt's true allegiance during the occupation remains ambiguous in the documentary record. He was not prosecuted as a Loyalist after the battle, which suggests either that he was genuinely sympathetic to the patriot cause or that his cooperation with the Hessians was understood as pragmatic survival rather than ideological commitment. After the war, Hunt continued to prosper as a merchant and civic leader in Trenton. He served in various local offices and remained a fixture of Trenton's business community until his death around 1802.

WHY HE MATTERS TO TRENTON

Abraham Hunt embodies the ambiguous position of civilians living under military occupation. As Trenton's leading merchant, he had to navigate between the demands of the Hessian garrison and whatever private loyalties he held. Whether he was a secret patriot who helped keep Rall off guard on Christmas night, a pragmatic businessman who cooperated with whoever held power, or simply a man trying to survive, Hunt's story captures the impossible choices that occupation forced on ordinary people. His experience reminds us that the Revolution was not only a military conflict but a crisis that played out in drawing rooms, counting houses, and dinner tables.

- c.1740: Born in Trenton, New Jersey
- 1776 (December): Hosted Hessian officers, including Colonel Rall, during the occupation
- 1776 (December 25): According to tradition, entertained Rall on the evening before the battle
- c.1802: Died in Trenton, New Jersey

SOURCES
- Fischer, David Hackett. "Washington's Crossing." Oxford University Press, 2004.
- Stryker, William S. "The Battles of Trenton and Princeton." Houghton Mifflin, 1898.
- Dwyer, William M. "The Day Is Ours!: November 1776-January 1777: An Inside View of the Battles of Trenton and Princeton." Viking Press, 1983.`,
      birthYear: 1740,
      deathYear: 1802,
      verificationStatus: 'VERIFIED',
    },
  });

  // --- 7 NEW PEOPLE ---

  await prisma.person.upsert({
    where: { id: 'person-trenton-george-washington' },
    update: {},
    create: {
      id: 'person-trenton-george-washington',
      name: 'George Washington',
      roles: ['Commander-in-Chief', 'Continental Army General', 'Future President'],
      bioShort: 'Commander-in-Chief of the Continental Army (1732-1799) who planned and led the crossing of the Delaware and the attack on Trenton.',
      bioLong: `George Washington was born on February 22, 1732, in Westmoreland County, Virginia, into a prosperous planter family. His early military career during the French and Indian War gave him experience in frontier warfare and command, though it also exposed the limitations of colonial military organization. He married Martha Dandridge Custis in 1759 and managed his Mount Vernon estate while serving in the Virginia House of Burgesses. In June 1775, the Second Continental Congress appointed him Commander-in-Chief of the Continental Army, a position he accepted without pay.

By December 1776, Washington's army was in crisis. A series of devastating defeats — Long Island, Kip's Bay, Fort Washington, Fort Lee — had driven the Continental Army across New Jersey in a headlong retreat. Enlistments were expiring at the end of the year, and many soldiers, demoralized and poorly supplied, were simply walking away. Thomas Paine's "The American Crisis," published on December 19, captured the desperation of the moment. Washington recognized that without a military victory, the Revolution might collapse before the new year.

Washington conceived and executed the attack on Trenton with characteristic boldness. He divided his forces into three columns for a coordinated crossing of the Delaware River on Christmas night, though only his own column completed the crossing. Despite arriving hours behind schedule and losing the element of total darkness, Washington pressed the attack. The resulting victory at Trenton on December 26, followed by the Second Battle of Trenton on January 2 and the victory at Princeton on January 3, 1777, reversed the momentum of the war and preserved the Continental Army as a fighting force.

WHY HE MATTERS TO TRENTON

Trenton was Washington's masterpiece as a tactician and his defining moment as a leader. With his army disintegrating around him, he conceived an operation of extraordinary risk — a nighttime river crossing in a winter storm followed by a dawn attack on a professional garrison — and executed it through force of will. The victory at Trenton did not win the war, but it ensured the war would continue. Washington's decision to attack, when every rational calculation favored retreat or surrender, is the reason Trenton occupies the place it does in American memory.

- 1732: Born February 22 in Westmoreland County, Virginia
- 1775: Appointed Commander-in-Chief of the Continental Army
- 1776 (December 25-26): Led the crossing of the Delaware and the attack on Trenton
- 1789-1797: Served as the first President of the United States
- 1799: Died December 14 at Mount Vernon, Virginia

SOURCES
- Fischer, David Hackett. "Washington's Crossing." Oxford University Press, 2004.
- Chernow, Ron. "Washington: A Life." Penguin Press, 2010.
- Lengel, Edward G. "General George Washington: A Military Life." Random House, 2005.`,
      birthYear: 1732,
      deathYear: 1799,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-trenton-nathanael-greene' },
    update: {},
    create: {
      id: 'person-trenton-nathanael-greene',
      name: 'Nathanael Greene',
      roles: ['Continental Army General', 'Division Commander'],
      bioShort: 'Continental Army general (1742-1786) who commanded one of the two main assault columns during the attack on Trenton.',
      bioLong: `Nathanael Greene was born on August 7, 1742, in Potowomut, Rhode Island, into a prosperous Quaker family. Despite his pacifist upbringing, Greene developed a fascination with military affairs and was expelled from his Quaker meeting for attending a military parade. He educated himself in military science through extensive reading and organized a local militia company in 1774. When the war began in 1775, the Rhode Island Assembly appointed Greene a brigadier general — an extraordinary jump from private citizen to general officer that reflected both his political connections and the colony's desperate need for leaders.

Greene proved himself one of Washington's ablest subordinates. He commanded troops at the Siege of Boston, the battles around New York in 1776, and the retreat across New Jersey. Despite the debacle at Fort Washington in November 1776, where Greene had advised Washington to hold the position, resulting in the capture of nearly 3,000 troops, Washington retained confidence in Greene's judgment and ability.

At Trenton, Greene commanded one of the two main assault columns. His division approached the town from the north along the Pennington Road while General John Sullivan's division attacked from the west along the River Road. Greene's column arrived at its objective on schedule and executed a disciplined attack that drove the Hessians from the northern end of the town toward Sullivan's advancing forces, trapping the garrison between the two American columns. Greene later served as Quartermaster General and commanded the Southern Department, where his campaign against Cornwallis in 1780-1781 was instrumental in forcing the British into Yorktown.

WHY HE MATTERS TO TRENTON

Nathanael Greene's column delivered the primary blow at the Battle of Trenton. Attacking from the north, his division seized the high ground, positioned artillery to command the town's streets, and drove the Hessians into a pocket where they were forced to surrender. Greene's ability to keep his troops organized and on schedule during a night march through a winter storm demonstrated the kind of leadership that would later make him indispensable in the Southern campaigns. At Trenton, he showed that American officers could plan and execute complex tactical operations.

- 1742: Born August 7 in Potowomut, Rhode Island
- 1775: Appointed brigadier general of Rhode Island forces
- 1776 (December 26): Commanded the northern assault column at Trenton
- 1780-1781: Led the Southern campaign against Cornwallis
- 1786: Died June 19 at Mulberry Grove plantation, Georgia

SOURCES
- Golway, Terry. "Washington's General: Nathanael Greene and the Triumph of the American Revolution." Henry Holt, 2005.
- Carbone, Gerald M. "Nathanael Greene: A Biography of the American Revolution." Palgrave Macmillan, 2008.
- Fischer, David Hackett. "Washington's Crossing." Oxford University Press, 2004.`,
      birthYear: 1742,
      deathYear: 1786,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-trenton-john-sullivan' },
    update: {},
    create: {
      id: 'person-trenton-john-sullivan',
      name: 'John Sullivan',
      roles: ['Continental Army General', 'Division Commander', 'Governor'],
      bioShort: 'Continental Army general (1740-1795) who commanded the southern assault column at the Battle of Trenton.',
      bioLong: `John Sullivan was born on February 17, 1740, in Somersworth, New Hampshire. He studied law under Samuel Livermore and established a successful practice in Durham, New Hampshire. Sullivan was elected to the First Continental Congress in 1774 and joined the Continental Army when the war began, receiving a commission as brigadier general. He saw action at the Siege of Boston and the ill-fated invasion of Canada in 1776, where he briefly commanded American forces before the retreat from Quebec.

Sullivan's role at Trenton was critical. He commanded one of the two main assault columns, advancing along the River Road from the west to attack the southern portion of the town. His division's task was to seal off the Hessian garrison's escape route across the Assunpink Creek bridge. Despite the challenging conditions — the nor'easter had soaked many of his soldiers' muskets, rendering them inoperable — Sullivan pressed the attack with bayonets and close-quarters fighting. He reportedly sent a message to Washington during the battle informing him that his men's weapons were too wet to fire; Washington's response was to press on with the bayonet.

After Trenton, Sullivan continued to serve in the Continental Army, fighting at Brandywine, Germantown, and the Battle of Rhode Island. In 1779, Washington assigned him to lead a punitive expedition against the Iroquois Confederacy in western New York, a campaign that devastated Iroquois settlements. After the war, Sullivan served three terms as president (governor) of New Hampshire and was a delegate to the state's ratifying convention for the Constitution.

WHY HE MATTERS TO TRENTON

John Sullivan's column completed the encirclement that made the Battle of Trenton a victory rather than a skirmish. By sealing the southern escape routes and driving the Hessians north into Greene's advancing forces, Sullivan's division ensured that the garrison could not retreat across the Assunpink Creek to safety. His willingness to attack with bayonets when his men's firearms were disabled by the storm demonstrated the aggressive spirit that Washington demanded of his subordinates at Trenton.

- 1740: Born February 17 in Somersworth, New Hampshire
- 1774: Elected delegate to the First Continental Congress
- 1776 (December 26): Commanded the southern assault column at Trenton
- 1779: Led the Sullivan Expedition against the Iroquois
- 1795: Died January 23 in Durham, New Hampshire

SOURCES
- Whittemore, Charles P. "A General of the Revolution: John Sullivan of New Hampshire." Columbia University Press, 1961.
- Fischer, David Hackett. "Washington's Crossing." Oxford University Press, 2004.
- Amory, Thomas C. "The Military Services and Public Life of Major-General John Sullivan." Wiggin and Lunt, 1868.`,
      birthYear: 1740,
      deathYear: 1795,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-trenton-william-washington' },
    update: {},
    create: {
      id: 'person-trenton-william-washington',
      name: 'William Washington',
      roles: ['Continental Army Captain', 'Cavalry Officer'],
      bioShort: 'Continental Army officer (1752-1810) who led the advance party that seized the Hessian artillery position at Trenton and was wounded in the assault.',
      bioLong: `William Washington was born on February 28, 1752, in Stafford County, Virginia. He was a distant cousin of George Washington and initially studied for the ministry before the Revolution redirected his ambitions to military service. He was commissioned as a captain in the 3rd Virginia Regiment in 1776 and marched north to join the Continental Army during its darkest hours.

At the Battle of Trenton on December 26, 1776, Captain William Washington commanded the advance guard that led the attack on the Hessian artillery position at the head of King Street. Washington and his lieutenant, James Monroe, charged the Hessian gun emplacements before the garrison could organize a defense. Both men were wounded in the assault — Washington in the hands and Monroe in the shoulder — but their action prevented the Hessians from using their own artillery against the attacking Americans. The capture of the Hessian guns in the opening minutes of the battle was a critical factor in the American victory.

After recovering from his wounds, Washington transferred to the cavalry and proved to be a gifted mounted officer. He fought at Cowpens in January 1781, where his cavalry charge helped win a decisive victory, and at Eutaw Springs in September 1781, where he was captured after his horse was shot from under him. He spent the rest of the war as a prisoner. After the war, he settled in South Carolina, married Jane Riley Elliott, and served in the state legislature.

WHY HE MATTERS TO TRENTON

William Washington's charge at the head of King Street was the opening blow of the Battle of Trenton. By seizing the Hessian artillery before it could be turned against the American advance, Washington and his small party removed the garrison's most effective defensive weapon within the first minutes of the fight. His courage and that of his men, including the young James Monroe, set the aggressive tone for the entire battle.

- 1752: Born February 28 in Stafford County, Virginia
- 1776 (December 26): Led the advance assault and was wounded at Trenton
- 1781 (January 17): Led a cavalry charge at the Battle of Cowpens
- 1781 (September 8): Captured at the Battle of Eutaw Springs
- 1810: Died March 6 in Charleston, South Carolina

SOURCES
- Fischer, David Hackett. "Washington's Crossing." Oxford University Press, 2004.
- Buchanan, John. "The Road to Guilford Courthouse: The American Revolution in the Carolinas." Wiley, 1997.
- Stryker, William S. "The Battles of Trenton and Princeton." Houghton Mifflin, 1898.`,
      birthYear: 1752,
      deathYear: 1810,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-trenton-john-cadwalader' },
    update: {},
    create: {
      id: 'person-trenton-john-cadwalader',
      name: 'John Cadwalader',
      roles: ['Continental Army General', 'Philadelphia Militia Commander'],
      bioShort: 'Philadelphia militia general (1742-1786) whose column was unable to cross the Delaware on December 25 but later fought at the Second Battle of Trenton and Princeton.',
      bioLong: `John Cadwalader was born on January 10, 1742, in Philadelphia, Pennsylvania, into one of the city's most prominent families. He was educated at the College of Philadelphia (now the University of Pennsylvania) and became a successful merchant. When the war began, Cadwalader was appointed a brigadier general of the Philadelphia Associators, a militia unit that included many of the city's leading citizens. His social standing and organizational abilities made him an effective recruiter and commander.

Washington's plan for the Trenton attack called for three simultaneous river crossings. The main force under Washington would cross at McConkey's Ferry and attack Trenton from the north. General James Ewing's militia would cross at Trenton Ferry to block the Hessian retreat. Cadwalader's column would cross at Dunk's Ferry, south of Trenton, to attack the British garrison at Bordentown and prevent reinforcements from reaching Trenton. On the night of December 25-26, Cadwalader attempted the crossing but was unable to get his artillery across due to the heavy ice. He landed some infantry on the New Jersey shore but, judging the attack impossible without artillery support, recalled them to Pennsylvania.

When Cadwalader learned the next day that Washington had successfully attacked Trenton, he was mortified by his failure and immediately organized a second crossing. His force crossed on December 27 and advanced toward Bordentown, where the British garrison had already retreated. Cadwalader's troops then joined Washington's army for the Second Battle of Trenton on January 2 and the Battle of Princeton on January 3, 1777, where they fought effectively.

WHY HE MATTERS TO TRENTON

John Cadwalader's failed crossing illustrates both the difficulty of Washington's plan and the contingency that shaped the battle's outcome. Washington's attack succeeded despite the failure of two of his three columns to cross the river, a testament to the quality of the troops and leadership in Washington's own column. Cadwalader's subsequent determination to cross and join the fight contributed to the broader "Ten Crucial Days" campaign that followed the initial victory at Trenton.

- 1742: Born January 10 in Philadelphia, Pennsylvania
- 1776 (December 25-26): Failed to complete the Delaware River crossing at Dunk's Ferry
- 1776 (December 27): Successfully crossed the Delaware with his column
- 1777 (January 2-3): Fought at the Second Battle of Trenton and Princeton
- 1786: Died February 10 in Shrewsbury, Kent County, Maryland

SOURCES
- Fischer, David Hackett. "Washington's Crossing." Oxford University Press, 2004.
- Stryker, William S. "The Battles of Trenton and Princeton." Houghton Mifflin, 1898.
- Rosenfeld, Richard N. "American Aurora: A Democratic-Republican Returns." St. Martin's Press, 1997.`,
      birthYear: 1742,
      deathYear: 1786,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-trenton-john-stark' },
    update: {},
    create: {
      id: 'person-trenton-john-stark',
      name: 'John Stark',
      roles: ['Continental Army Colonel', 'New Hampshire Militia Leader'],
      bioShort: 'New Hampshire soldier (1728-1822) who led his regiment in the vanguard of the attack at Trenton and later won the Battle of Bennington.',
      bioLong: `John Stark was born on August 28, 1728, in Londonderry, New Hampshire. As a young man he was captured by Abenaki warriors and held for several months before being ransomed. He served as a ranger under Robert Rogers during the French and Indian War, gaining extensive experience in frontier warfare and small-unit tactics. When the Revolution began, Stark was among the first to answer the call, leading a regiment of New Hampshire men to the Siege of Boston and fighting at Bunker Hill, where his troops held the rail fence against repeated British assaults.

At Trenton, Stark's regiment served in the vanguard of the attack. His New Hampshire men were among the first to enter the town on the morning of December 26, 1776, and they fought house-to-house as the Hessians attempted to organize resistance. Stark's frontier-hardened troops were well suited to the close-quarters fighting that characterized the Battle of Trenton, and their aggressive advance helped prevent the Hessians from forming a coherent defensive line.

Stark later resigned from the Continental Army in a dispute over promotions but returned to service as a brigadier general of the New Hampshire militia. In August 1777, he won the Battle of Bennington, a victory that helped set the stage for the British defeat at Saratoga. He is credited with the rallying cry that became New Hampshire's state motto. Stark lived to age 94, the last surviving American general of the Revolution.

WHY HE MATTERS TO TRENTON

John Stark and his New Hampshire regiment represented the tough, experienced frontier soldiers who formed the backbone of Washington's assault force at Trenton. These were men who had fought at Bunker Hill and survived the retreat across New Jersey. Their ability to fight in close quarters and in adverse conditions was essential to the success of the surprise attack. Stark's presence at Trenton connects the battle to the broader tradition of New England militia service that sustained the Continental Army during its darkest period.

- 1728: Born August 28 in Londonderry, New Hampshire
- 1775: Led New Hampshire troops at Bunker Hill
- 1776 (December 26): Led the vanguard of the attack at Trenton
- 1777 (August 16): Won the Battle of Bennington
- 1822: Died May 8 in Manchester, New Hampshire, at age 93

SOURCES
- Moore, Howard Parker. "A Life of General John Stark of New Hampshire." Published by the author, 1949.
- Fischer, David Hackett. "Washington's Crossing." Oxford University Press, 2004.
- Calvert, Monte. "The New Hampshire Grants and General John Stark." Vermont Historical Society, 1977.`,
      birthYear: 1728,
      deathYear: 1822,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-trenton-dr-john-riker' },
    update: {},
    create: {
      id: 'person-trenton-dr-john-riker',
      name: 'Dr. John Riker',
      roles: ['Physician', 'Trenton Civilian'],
      bioShort: 'Trenton physician who saved the life of James Monroe at the Battle of Trenton by clamping a severed artery in his shoulder.',
      bioLong: `Dr. John Riker was a physician practicing in Trenton, New Jersey, at the time of the Revolution. The details of his early life are not well documented, but he was established in the Trenton area and known as a competent medical practitioner. On the morning of December 26, 1776, Riker became a participant in history when he administered emergency medical treatment to Lieutenant James Monroe, who had been shot through the shoulder while assaulting a Hessian artillery position on King Street.

Monroe's wound was life-threatening. The musket ball had severed an artery, and he was losing blood rapidly. Military surgeons were not immediately available at the point of contact, but Riker, who was present in the town during the battle, reached Monroe and clamped the damaged artery, stanching the bleeding and preventing Monroe from bleeding to death on the street. The procedure required both medical knowledge and steady nerves, performed as it was during an active battle with musket fire and cannon shot echoing through Trenton's streets.

Riker's intervention saved the life of a man who would go on to serve as the fifth President of the United States. The incident highlights the role of civilian medical practitioners during Revolutionary War battles, when military medical infrastructure was rudimentary and the presence of a trained physician at the right moment could mean the difference between life and death.

WHY HE MATTERS TO TRENTON

Dr. Riker's presence on the streets of Trenton during the battle and his quick action in treating James Monroe illustrate the civilian dimension of Revolutionary War combat. Battles were fought in and around towns where people lived and worked, and local residents often found themselves providing aid to the wounded. Riker's medical skill, applied in the chaos of battle, altered the course of American political history. He represents the many unnamed civilians whose actions during the Revolution had consequences far beyond what they could have imagined at the time.

- Birth and death dates not precisely documented
- Practiced medicine in the Trenton, New Jersey, area
- 1776 (December 26): Saved James Monroe's life by clamping a severed artery during the Battle of Trenton

SOURCES
- Fischer, David Hackett. "Washington's Crossing." Oxford University Press, 2004.
- Unger, Harlow Giles. "The Last Founding Father: James Monroe and a Nation's Call to Greatness." Da Capo Press, 2009.
- Stryker, William S. "The Battles of Trenton and Princeton." Houghton Mifflin, 1898.`,
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
    where: { id: 'old-barracks-museum-trenton' },
    update: {},
    create: {
      id: 'old-barracks-museum-trenton',
      name: 'Old Barracks Museum',
      slug: 'old-barracks-museum',
      placeType: 'MUSEUM',
      description: 'The Old Barracks, built in 1758 to house British soldiers during the French and Indian War, is the only surviving colonial barracks in New Jersey. The stone building served as quarters for Hessian soldiers during their occupation of Trenton in December 1776 and was the scene of fighting during the Battle of Trenton on December 26, 1776. Today it operates as a museum interpreting the military history of Trenton and the Revolution.',
      historicalNote: 'The barracks were constructed by the colony of New Jersey in 1758 after local residents protested the quartering of British soldiers in private homes during the French and Indian War. The U-shaped stone building could house approximately 300 soldiers. During the Hessian occupation of December 1776, troops from Colonel Rall\'s brigade were quartered here and in houses throughout Trenton. When Washington\'s forces attacked on the morning of December 26, fighting swept through and around the barracks as Hessian soldiers scrambled to form defensive lines. After the Revolution, the building served as a residence, boarding house, and at one point nearly faced demolition before being preserved in the early twentieth century.',
      lat: 40.2196,
      lng: -74.7705,
      address: '101 Barrack Street, Trenton, NJ 08608',
      hours: 'Wednesday-Saturday 10am-5pm, Sunday 1pm-5pm',
      admission: '$10 adults, $8 seniors/students, free for children under 5',
      website: 'https://www.barracks.org',
      displayOrder: 1,
      featured: true,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'washington-crossing-state-park-nj' },
    update: {},
    create: {
      id: 'washington-crossing-state-park-nj',
      name: 'Washington Crossing State Park (New Jersey)',
      slug: 'washington-crossing-state-park-nj',
      placeType: 'LANDMARK',
      description: 'Washington Crossing State Park marks the New Jersey landing site where Washington\'s army came ashore after crossing the Delaware River on the night of December 25-26, 1776. The park encompasses the Johnson Ferry House, an eighteenth-century farmhouse that served as a staging point for the army, and includes a visitor center with exhibits on the crossing and the Trenton campaign.',
      historicalNote: 'The Continental Army landed on the New Jersey shore at Johnson\'s Ferry, approximately nine miles north of Trenton. After disembarking, the soldiers assembled and began the march south toward Trenton along two roads — the Pennington Road and the River Road — arriving at the outskirts of the town around 8:00 AM on December 26. The Johnson Ferry House, which still stands in the park, was used by officers to coordinate the army\'s movements after the landing. The park preserves the landscape over which the army marched on that winter night.',
      lat: 40.2974,
      lng: -74.8726,
      address: '355 Washington Crossing-Pennington Road, Titusville, NJ 08560',
      hours: 'Park grounds open daily dawn to dusk; Visitor Center hours vary by season',
      admission: 'Free (parking fee $5 weekdays, $7 weekends in summer)',
      website: 'https://www.state.nj.us/dep/parksandforests/parks/washcros.html',
      displayOrder: 2,
      featured: true,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'washington-crossing-state-park-pa' },
    update: {},
    create: {
      id: 'washington-crossing-state-park-pa',
      name: 'Washington Crossing Historic Park (Pennsylvania)',
      slug: 'washington-crossing-historic-park-pa',
      placeType: 'LANDMARK',
      description: 'Washington Crossing Historic Park on the Pennsylvania side of the Delaware River preserves the embarkation point where Washington\'s army launched its crossing on Christmas night 1776. The park includes McConkey\'s Ferry Inn, where Washington and his officers finalized plans for the crossing, and hosts an annual Christmas Day reenactment of the crossing.',
      historicalNote: 'The Continental Army assembled at McConkey\'s Ferry (now Washington Crossing, Pennsylvania) on December 25, 1776. The crossing began at approximately 6:00 PM and was not completed until approximately 3:00 AM on December 26, running several hours behind schedule due to the nor\'easter and heavy ice in the river. Durham boats — large, flat-bottomed cargo vessels designed for navigating the Delaware — were used to ferry troops, while flat-bottomed ferries carried artillery and horses. John Glover\'s Marblehead regiment managed the boats. McConkey\'s Ferry Inn served as a command post where Washington and his generals coordinated the operation.',
      lat: 40.2962,
      lng: -74.8719,
      address: '1112 River Road, Washington Crossing, PA 18977',
      hours: 'Tuesday-Saturday 10am-5pm, Sunday 12pm-5pm',
      admission: '$10 adults, $8 seniors, $6 youth ages 3-11',
      website: 'https://www.washingtoncrossingpark.org',
      displayOrder: 3,
      featured: true,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'trenton-battle-monument' },
    update: {},
    create: {
      id: 'trenton-battle-monument',
      name: 'Trenton Battle Monument',
      slug: 'trenton-battle-monument',
      placeType: 'MONUMENT',
      description: 'The Trenton Battle Monument is a 150-foot granite column topped by a statue of George Washington, erected in 1893 at the intersection of North Broad Street, North Warren Street, Brunswick Avenue, Princeton Avenue, and Pennington Avenue. The monument stands at the point known as "Five Points," where Washington\'s artillery was positioned at the beginning of the Battle of Trenton.',
      historicalNote: 'The monument marks the approximate position where Henry Knox\'s artillery opened fire on the morning of December 26, 1776. Washington\'s forces approached Trenton along the Pennington Road and split into two columns at this point, with one column proceeding down King Street (now Warren Street) and the other down Queen Street (now Broad Street). The artillery positioned here fired down both streets, preventing the Hessians from forming organized resistance. An observation deck at the top of the monument provides views of the battlefield and the surrounding city.',
      lat: 40.2245,
      lng: -74.7746,
      address: 'N Broad Street & Warren Street, Trenton, NJ 08618',
      hours: 'Grounds always accessible; observation deck open seasonally, Wednesday-Sunday',
      admission: 'Free',
      website: 'https://www.nj.gov/dep/parksandforests/parks/trentonbattlemonument.html',
      displayOrder: 4,
      featured: true,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'new-jersey-state-house-trenton' },
    update: {},
    create: {
      id: 'new-jersey-state-house-trenton',
      name: 'New Jersey State House',
      slug: 'nj-state-house',
      placeType: 'GOVERNMENT',
      description: 'The New Jersey State House in Trenton has been the seat of the state legislature since 1792 and is the second-oldest state capitol building in continuous use in the United States. The building stands in the heart of Trenton\'s government district, near the site where the Continental Congress met briefly in 1784 when Trenton served as the temporary national capital.',
      historicalNote: 'Trenton became the state capital of New Jersey in 1790, partly because of the town\'s association with the revolutionary victory of 1776. The current State House incorporates portions of the original 1792 structure, though it has been expanded and renovated multiple times. In November and December 1784, the Continental Congress met at the French Arms Tavern in Trenton, briefly making the town the capital of the United States. The location of the State House in Trenton is a direct legacy of the town\'s revolutionary significance.',
      lat: 40.2206,
      lng: -74.7699,
      address: '125 W State Street, Trenton, NJ 08608',
      hours: 'Tours available by appointment; call for current schedule',
      admission: 'Free',
      website: 'https://www.njleg.state.nj.us',
      displayOrder: 5,
      featured: false,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'assunpink-creek-bridge-site' },
    update: {},
    create: {
      id: 'assunpink-creek-bridge-site',
      name: 'Assunpink Creek Bridge Site',
      slug: 'assunpink-creek-bridge',
      placeType: 'BATTLEFIELD',
      description: 'The site of the Assunpink Creek bridge in Trenton marks where the Second Battle of Trenton was fought on January 2, 1777. American forces defended the bridge and the creek fording points against repeated British assaults led by Lord Cornwallis, preventing the British from crossing and destroying Washington\'s army.',
      historicalNote: 'After the first Battle of Trenton on December 26, 1776, Washington re-crossed the Delaware into Pennsylvania. He returned to Trenton on January 2, 1777, positioning his army behind the Assunpink Creek with the bridge as the key defensive position. That afternoon, Cornwallis attacked with approximately 5,500 troops, launching three assaults on the bridge, all of which were repulsed by American artillery and infantry fire. The Assunpink defense, sometimes called the Second Battle of Trenton, secured Washington\'s position and set the stage for his famous overnight march to Princeton on January 2-3, 1777.',
      lat: 40.2180,
      lng: -74.7665,
      address: 'South Broad Street at the Assunpink Creek, Trenton, NJ 08608',
      hours: 'Always accessible (outdoor site)',
      admission: 'Free',
      displayOrder: 6,
      featured: true,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'mill-hill-park-trenton' },
    update: {},
    create: {
      id: 'mill-hill-park-trenton',
      name: 'Mill Hill Park',
      slug: 'mill-hill-park',
      placeType: 'LANDMARK',
      description: 'Mill Hill Park sits on elevated ground south of the Assunpink Creek in Trenton and was the site where Washington positioned his army during the Second Battle of Trenton on January 2, 1777. The park offers a vantage point over the creek crossing and the battlefield landscape.',
      historicalNote: 'On January 2, 1777, Washington arranged his forces along the high ground south of the Assunpink Creek, with the creek serving as a natural defensive barrier. From Mill Hill, the Americans could observe and fire upon any British attempt to cross the creek. After successfully defending the position against Cornwallis\'s attacks, Washington used the darkness to slip his army east and march to Princeton, leaving campfires burning to deceive the British. The park today preserves a portion of this defensive terrain.',
      lat: 40.2162,
      lng: -74.7640,
      address: 'Mercer Street and Jackson Street, Trenton, NJ 08611',
      hours: 'Dawn to dusk daily',
      admission: 'Free',
      displayOrder: 7,
      featured: false,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'first-presbyterian-church-trenton' },
    update: {},
    create: {
      id: 'first-presbyterian-church-trenton',
      name: 'First Presbyterian Church of Trenton',
      slug: 'first-presbyterian-church',
      placeType: 'CHURCH',
      description: 'The First Presbyterian Church of Trenton, established in 1726, played a role in the revolutionary period as a gathering point for Trenton\'s patriot community. The church building that stood during the Revolution was used as a hospital after the Battle of Trenton, treating both American and Hessian wounded.',
      historicalNote: 'The Presbyterian congregation in Trenton was established in 1726, and the church became a center of patriot sentiment during the revolutionary crisis. After the Battle of Trenton on December 26, 1776, the church building was converted into a field hospital where wounded soldiers from both sides received medical care. The current church building dates from a later period but stands near the site of the revolutionary-era structure. The congregation\'s records from the period provide documentation of civilian life in Trenton during the occupation and battle.',
      lat: 40.2209,
      lng: -74.7676,
      address: '120 East State Street, Trenton, NJ 08608',
      hours: 'Open for services; contact for tour availability',
      admission: 'Free',
      displayOrder: 8,
      featured: false,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'st-michaels-church-trenton' },
    update: {},
    create: {
      id: 'st-michaels-church-trenton',
      name: 'St. Michael\'s Episcopal Church',
      slug: 'st-michaels-episcopal-church',
      placeType: 'CHURCH',
      description: 'St. Michael\'s Episcopal Church, founded in 1703, is one of Trenton\'s oldest religious institutions. During the Revolution, the Anglican congregation included both patriots and Loyalists, reflecting the divided loyalties that characterized many communities in New Jersey.',
      historicalNote: 'The original St. Michael\'s Church building stood on Warren Street during the Revolution and was in the path of the fighting on December 26, 1776. The church cemetery contains graves from the colonial and revolutionary periods. The Anglican/Episcopal congregation\'s divided loyalties during the Revolution mirrored the broader divisions in New Jersey society, where the war was often experienced as a civil conflict between neighbors.',
      lat: 40.2195,
      lng: -74.7700,
      address: '140 North Warren Street, Trenton, NJ 08608',
      hours: 'Open for services; contact for tour availability',
      admission: 'Free',
      displayOrder: 9,
      featured: false,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'eagles-nest-washington-hq' },
    update: {},
    create: {
      id: 'eagles-nest-washington-hq',
      name: 'The Eagle Tavern Site (Washington\'s Trenton Headquarters)',
      slug: 'eagle-tavern-site',
      placeType: 'HISTORIC_HOUSE',
      description: 'The site of the Eagle Tavern, where Washington reportedly established his temporary headquarters after the Battle of Trenton on December 26, 1776. The original tavern no longer stands, but the location is marked in Trenton\'s downtown area.',
      historicalNote: 'After the Battle of Trenton, Washington used several buildings in the town as temporary headquarters while consolidating his victory and deciding on next steps. Taverns served as command posts throughout the Revolution because they offered large rooms for meetings, stabling for horses, and food and drink for officers. The Eagle Tavern was one of Trenton\'s principal inns during the colonial period.',
      lat: 40.2200,
      lng: -74.7710,
      address: 'Approximate location: King Street (now Warren Street), Trenton, NJ 08608',
      hours: 'Marker accessible at all times',
      admission: 'Free',
      displayOrder: 10,
      featured: false,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'nj-state-museum-trenton' },
    update: {},
    create: {
      id: 'nj-state-museum-trenton',
      name: 'New Jersey State Museum',
      slug: 'nj-state-museum',
      placeType: 'MUSEUM',
      description: 'The New Jersey State Museum in Trenton houses collections spanning fine art, cultural history, natural science, and archaeology. Its history galleries include artifacts and exhibits related to New Jersey\'s role in the Revolution, including the Trenton and Princeton campaigns.',
      historicalNote: 'The museum\'s collections include Revolutionary War artifacts recovered from the Trenton area, including weaponry, uniforms, and personal items from both American and Hessian soldiers. The exhibits contextualize the Battle of Trenton within the broader story of New Jersey\'s role as a contested borderland during the Revolution, where armies marched back and forth and civilians endured repeated occupations.',
      lat: 40.2201,
      lng: -74.7718,
      address: '205 West State Street, Trenton, NJ 08625',
      hours: 'Tuesday-Sunday 9am-4:45pm',
      admission: 'Free',
      website: 'https://www.nj.gov/state/museum/',
      displayOrder: 11,
      featured: false,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'johnson-ferry-house-trenton' },
    update: {},
    create: {
      id: 'johnson-ferry-house-trenton',
      name: 'Johnson Ferry House',
      slug: 'johnson-ferry-house',
      placeType: 'HISTORIC_HOUSE',
      description: 'The Johnson Ferry House is a colonial-era farmhouse located within Washington Crossing State Park in New Jersey. The house served as a staging point for the Continental Army after it crossed the Delaware River on December 25-26, 1776.',
      historicalNote: 'The Johnson Ferry House was a working farmstead adjacent to the ferry landing where Washington\'s army came ashore on the New Jersey side of the Delaware. Officers used the house to coordinate troop movements and plan the march to Trenton. The house is furnished with period items and interpreted to reflect its appearance at the time of the crossing. It is one of the few surviving structures directly associated with the events of December 25-26, 1776.',
      lat: 40.2973,
      lng: -74.8710,
      address: 'Washington Crossing State Park, 355 Washington Crossing-Pennington Road, Titusville, NJ 08560',
      hours: 'Open seasonally; check park website for schedule',
      admission: 'Included with park visit',
      displayOrder: 12,
      featured: false,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'rall-hq-trenton' },
    update: {},
    create: {
      id: 'rall-hq-trenton',
      name: 'Colonel Rall Headquarters Site (Stacy Potts House)',
      slug: 'rall-headquarters-site',
      placeType: 'HISTORIC_HOUSE',
      description: 'The Stacy Potts House on King Street (now Warren Street) served as Colonel Johann Rall\'s headquarters during the Hessian occupation of Trenton in December 1776. Rall was sleeping in this house when the American attack began on the morning of December 26.',
      historicalNote: 'Colonel Rall commandeered the Stacy Potts House as his personal quarters during the occupation. According to multiple accounts, Rall was asleep in the house on the morning of December 26 when the sound of musket fire alerted him to the attack. He emerged to organize his troops but was unable to establish a coherent defensive position before being mortally wounded. The house was later demolished, but the site is historically significant as the location where the Hessian commander was caught off guard.',
      lat: 40.2210,
      lng: -74.7695,
      address: 'Approximate location: Warren Street near State Street, Trenton, NJ 08608',
      hours: 'Marker accessible at all times',
      admission: 'Free',
      displayOrder: 13,
      featured: false,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'trent-house-trenton' },
    update: {},
    create: {
      id: 'trent-house-trenton',
      name: 'William Trent House (Trent House Museum)',
      slug: 'trent-house-museum',
      placeType: 'HISTORIC_HOUSE',
      description: 'The William Trent House, built in 1719, is the oldest building in Trenton and is named after the city\'s founder, William Trent. During the Revolution, the house served as the residence of Dr. William Bryant and was in the vicinity of the fighting on December 26, 1776.',
      historicalNote: 'William Trent, a wealthy Philadelphia merchant, established his plantation and built this brick house on the banks of the Delaware River in 1719. The settlement that grew around it took his name. By the time of the Revolution, the house had passed through several owners and was located at the southern edge of the town, near the Assunpink Creek. The house survived the battles of 1776-1777 and was later acquired by the city of Trenton for preservation as a museum.',
      lat: 40.2170,
      lng: -74.7587,
      address: '15 Market Street, Trenton, NJ 08611',
      hours: 'Wednesday-Saturday 12:30pm-4pm',
      admission: '$5 adults, $3 seniors/students',
      website: 'https://www.trentonhistory.org',
      displayOrder: 14,
      featured: false,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'trenton-city-museum-ellarslie' },
    update: {},
    create: {
      id: 'trenton-city-museum-ellarslie',
      name: 'Trenton City Museum at Ellarslie',
      slug: 'trenton-city-museum-ellarslie',
      placeType: 'MUSEUM',
      description: 'The Trenton City Museum, housed in the Ellarslie Mansion in Cadwalader Park, features exhibits on Trenton\'s history from the colonial period to the present, including material related to the Revolutionary War battles fought in the area.',
      historicalNote: 'While the Ellarslie Mansion itself dates to the 1840s, the museum\'s collections include artifacts and interpretive materials covering Trenton\'s colonial and revolutionary periods. The museum provides context for understanding how the Battle of Trenton fits within the broader history of the city and the region.',
      lat: 40.2260,
      lng: -74.7830,
      address: 'Cadwalader Park, Parkside Avenue, Trenton, NJ 08618',
      hours: 'Tuesday-Saturday 11am-3pm, Sunday 1pm-3pm',
      admission: 'Free (suggested donation)',
      website: 'https://www.ellarslie.org',
      displayOrder: 15,
      featured: false,
      town: { connect: { id: TOWN_ID } },
    },
  });

  console.log('  Places seeded.');
}

// =============================================================================
// EVENTS
// =============================================================================

async function seedEvents() {
  console.log('  Seeding events...');

  // --- UPSERT 8 EXISTING EVENTS WITH SLUGS ---

  await prisma.event.upsert({
    where: { id: 'event-trenton-battle-1776' },
    update: { slug: 'battle-of-trenton-1776' },
    create: { id: 'event-trenton-battle-1776', townId: TOWN_ID, name: 'Battle of Trenton', slug: 'battle-of-trenton-1776', startDate: new Date('1776-12-26'), datePrecision: 'DAY', summary: `On the morning of December 26, 1776, General George Washington's Continental Army attacked the Hessian garrison at Trenton, New Jersey, after crossing the Delaware River during a nor'easter on Christmas night. The attack achieved complete tactical surprise. Washington's approximately 2,400 troops struck at about 8:00 AM, approaching from the north along the Pennington Road and from the west along the River Road. American artillery commanded the town's main streets while infantry closed in from multiple directions.\n\nThe battle lasted approximately 45 minutes. Colonel Johann Rall, the Hessian commander, was mortally wounded while trying to organize a counterattack. His three regiments — the Rall, Knyphausen, and Lossberg regiments — were either killed, wounded, or captured. American casualties were minimal: no soldiers were killed in the fighting itself, though two froze to death on the march and several were wounded, including Lieutenant James Monroe and Captain William Washington.\n\nThe victory at Trenton was a strategic and psychological turning point. It came at a moment when the Revolution appeared to be collapsing — enlistments were expiring, morale was shattered, and public support was eroding. The capture of nearly 900 Hessian prisoners and the seizure of their weapons, ammunition, and supplies reinvigorated the American cause. Trenton demonstrated that Washington could plan and execute complex operations and that the Continental Army could defeat professional European soldiers.`, significanceWeight: 98 },
  });

  await prisma.event.upsert({
    where: { id: 'event-trenton-delaware-crossing' },
    update: { slug: 'delaware-crossing-1776' },
    create: { id: 'event-trenton-delaware-crossing', townId: TOWN_ID, name: 'Crossing of the Delaware River', slug: 'delaware-crossing-1776', startDate: new Date('1776-12-25'), endDate: new Date('1776-12-26'), datePrecision: 'DAY', summary: `On the night of December 25-26, 1776, Washington's army crossed the ice-choked Delaware River from Pennsylvania to New Jersey at McConkey's Ferry. The crossing was conducted in three columns: the main force under Washington at McConkey's Ferry, General James Ewing's militia at Trenton Ferry, and General John Cadwalader's column at Dunk's Ferry. Only Washington's column completed the crossing — Ewing and Cadwalader were turned back by the ice.\n\nThe crossing began at approximately 6:00 PM on December 25 and was not completed until approximately 3:00 AM on December 26, running three hours behind schedule. John Glover's Marblehead regiment of fishermen managed the boats — primarily Durham boats, large flat-bottomed cargo vessels designed for the Delaware. The crossing was conducted in a nor'easter, with sleet, snow, and bitter wind lashing the troops. Approximately 2,400 soldiers, 18 artillery pieces, and horses were ferried across without losing a single soldier to the river.\n\nThe crossing itself was a remarkable feat of logistics and discipline. The army that crossed was exhausted, cold, and poorly equipped — many soldiers lacked shoes and wrapped their feet in rags. That they completed the crossing at all, in the conditions they faced, testified to the determination of both the officers and enlisted men. Emanuel Leutze's 1851 painting of the crossing, while not historically accurate in its details, captured the symbolic power of the event.`, significanceWeight: 97 },
  });

  await prisma.event.upsert({
    where: { id: 'event-trenton-hessian-occupation' },
    update: { slug: 'hessian-occupation-trenton-1776' },
    create: { id: 'event-trenton-hessian-occupation', townId: TOWN_ID, name: 'Hessian Occupation of Trenton', slug: 'hessian-occupation-trenton-1776', startDate: new Date('1776-12-14'), endDate: new Date('1776-12-26'), datePrecision: 'DAY', summary: `In early December 1776, Hessian forces under Colonel Johann Rall occupied Trenton as part of the British chain of outposts extending across New Jersey. The garrison consisted of approximately 1,400 troops from three Hessian regiments. The Hessians commandeered houses, churches, and public buildings for quarters, requisitioned food and supplies from residents, and established patrols around the town.\n\nThe occupation placed Trenton's civilian population under military control. Residents were subjected to searches, curfews, and the seizure of property. Hessian soldiers, far from home and stationed in a hostile countryside, experienced frequent harassment from New Jersey militia who raided outposts and ambushed patrols. Colonel Rall reported to his superiors that his position was exposed and requested reinforcements, but he did not construct the fortifications that might have made the garrison more defensible.\n\nThe occupation lasted approximately twelve days, ending with the American attack on December 26. During that period, the Hessians experienced constant low-level conflict with local militia and were forced to maintain a state of heightened alertness that exhausted the garrison. The conditions of the occupation — the harassment, the cold, the isolation — contributed to the vulnerability that Washington exploited in his surprise attack.`, significanceWeight: 75 },
  });

  await prisma.event.upsert({
    where: { id: 'event-trenton-second-battle' },
    update: { slug: 'second-battle-of-trenton-1777' },
    create: { id: 'event-trenton-second-battle', townId: TOWN_ID, name: 'Second Battle of Trenton (Battle of the Assunpink Creek)', slug: 'second-battle-of-trenton-1777', startDate: new Date('1777-01-02'), datePrecision: 'DAY', summary: `On January 2, 1777, British forces under Lord Cornwallis attacked Washington's army at Trenton in what is known as the Second Battle of Trenton or the Battle of the Assunpink Creek. Washington had re-crossed the Delaware and positioned his army behind the Assunpink Creek, with the bridge over the creek as the primary defensive position. Cornwallis arrived with approximately 5,500 troops and launched three assaults on the bridge, all of which were repulsed by American artillery and infantry fire.\n\nThe American defense of the Assunpink Creek bridge demonstrated the growing tactical competence of the Continental Army. Knox's artillery, positioned on the high ground south of the creek, poured devastating fire into the British columns as they attempted to cross. The fighting was intense but the American position held. According to tradition, Cornwallis decided to delay a final assault until the following morning, reportedly declaring that he would "bag the old fox" in the morning.\n\nDuring the night, Washington executed one of the war's most brilliant maneuvers. Leaving campfires burning to deceive the British, he marched his army east on the Quaker Bridge Road and then north to Princeton, where on January 3 he attacked and defeated the British garrison. The Second Battle of Trenton and the subsequent victory at Princeton completed the "Ten Crucial Days" that saved the Revolution.`, significanceWeight: 88 },
  });

  await prisma.event.upsert({
    where: { id: 'event-trenton-continental-retreat' },
    update: { slug: 'continental-retreat-across-nj-1776' },
    create: { id: 'event-trenton-continental-retreat', townId: TOWN_ID, name: 'Continental Army Retreat Across New Jersey', slug: 'continental-retreat-across-nj-1776', startDate: new Date('1776-11-20'), endDate: new Date('1776-12-08'), datePrecision: 'DAY', summary: `Following the fall of Fort Lee on November 20, 1776, Washington's army began a desperate retreat across New Jersey, pursued by British and Hessian forces under Lord Cornwallis. The retreating army marched through Newark, New Brunswick, Princeton, and Trenton, losing men to desertion and expiring enlistments at every stop. By the time Washington reached the Delaware River at Trenton in early December, his army had dwindled from approximately 5,000 to fewer than 3,000 effective soldiers.\n\nThe retreat was a military disaster and a political crisis. As the Continental Army passed through New Jersey towns, many residents concluded that the Revolution was over. Loyalists emerged openly, and thousands of civilians took British offers of amnesty. The New Jersey militia largely dissolved. Thomas Paine, who marched with the army, described the situation in "The American Crisis," writing that "these are the times that try men's souls."\n\nWashington's one critical decision during the retreat was to secure all the boats on the Delaware River for miles in both directions, preventing the British from crossing into Pennsylvania. This decision preserved the river as a barrier and gave the army time to reorganize. The retreat brought Washington's army to Trenton, where the strategic possibilities of a counterattack began to take shape.`, significanceWeight: 82 },
  });

  await prisma.event.upsert({
    where: { id: 'event-trenton-old-barracks-construction' },
    update: { slug: 'old-barracks-construction-1758' },
    create: { id: 'event-trenton-old-barracks-construction', townId: TOWN_ID, name: 'Construction of the Old Barracks', slug: 'old-barracks-construction-1758', startDate: new Date('1758-01-01'), datePrecision: 'YEAR', summary: `In 1758, the colony of New Jersey constructed barracks in five towns — Trenton, New Brunswick, Perth Amboy, Burlington, and Elizabeth — to house British soldiers during the French and Indian War. The barracks were built in response to civilian complaints about the quartering of soldiers in private homes, a grievance that would later be enshrined in the Third Amendment to the United States Constitution.\n\nThe Trenton Barracks, built of local stone in a U-shaped plan, could accommodate approximately 300 soldiers. The building served its original purpose during the French and Indian War and was later used during the Revolution by Hessian troops garrisoning the town. The barracks are significant both as a physical artifact of colonial military infrastructure and as a tangible reminder of the quartering controversy that contributed to revolutionary sentiment.\n\nOf the five barracks built in New Jersey, only the Trenton structure survives. Its preservation makes it a uniquely valuable resource for understanding the physical conditions of eighteenth-century military life and the relationship between civilian communities and the armies that passed through them.`, significanceWeight: 55 },
  });

  await prisma.event.upsert({
    where: { id: 'event-trenton-enlistment-crisis' },
    update: { slug: 'enlistment-crisis-december-1776' },
    create: { id: 'event-trenton-enlistment-crisis', townId: TOWN_ID, name: 'Enlistment Crisis of December 1776', slug: 'enlistment-crisis-december-1776', startDate: new Date('1776-12-31'), datePrecision: 'DAY', summary: `At the end of December 1776, the Continental Army faced a crisis of survival. The enlistments of the majority of Washington's soldiers were set to expire on December 31, and most soldiers, having endured months of defeat, retreat, and deprivation, had no intention of re-enlisting. Without a successful action to restore morale and demonstrate that the war could be won, the army would literally dissolve with the new year.\n\nThe crisis was both military and political. Congress had retreated from Philadelphia to Baltimore, fearing a British capture of the capital. Public support for the Revolution was eroding rapidly, particularly in New Jersey, where British and Hessian forces appeared to have established permanent control. Washington understood that he needed a victory not just to maintain his army but to sustain the political will necessary to continue the war.\n\nThe victory at Trenton on December 26 addressed the enlistment crisis directly. After the battle, Washington personally appealed to his soldiers to extend their enlistments for six weeks, offering a bounty of ten dollars. According to multiple accounts, the troops initially hesitated, but after the appeal, a significant number agreed to stay. The re-enlistment, combined with fresh militia reinforcements, gave Washington enough troops to continue offensive operations into January 1777.`, significanceWeight: 80 },
  });

  await prisma.event.upsert({
    where: { id: 'event-trenton-spy-network' },
    update: { slug: 'trenton-spy-network-1776' },
    create: { id: 'event-trenton-spy-network', townId: TOWN_ID, name: 'Intelligence Operations Before Trenton', slug: 'trenton-spy-network-1776', startDate: new Date('1776-12-01'), endDate: new Date('1776-12-25'), datePrecision: 'RANGE', summary: `In the weeks before the attack on Trenton, Washington conducted a systematic intelligence-gathering operation to assess the Hessian garrison's strength, dispositions, and vulnerabilities. He employed multiple agents and sources, including local civilians, scouts, and possibly John Honeyman, a cattle dealer whose role as a spy is supported by tradition though not fully confirmed by documentary evidence.\n\nWashington's intelligence efforts yielded detailed information about the size of the garrison, the layout of the town, the daily routines of the Hessian troops, and the absence of fortifications. He knew that the garrison was exhausted from constant militia harassment, that Rall had not constructed redoubts despite orders from his superiors, and that the Hessian outposts could be avoided. This intelligence allowed Washington to plan an attack with a high probability of success.\n\nThe intelligence operations before Trenton illustrate Washington's growing sophistication as a military commander. After the disasters of the New York campaign, where poor intelligence had contributed to several defeats, Washington invested heavily in espionage and reconnaissance. The Trenton campaign marked the beginning of a more professional approach to military intelligence that would serve the Continental Army for the remainder of the war.`, significanceWeight: 70 },
  });

  // --- 17 NEW EVENTS ---

  await prisma.event.upsert({
    where: { id: 'event-trenton-american-crisis-published' },
    update: {},
    create: { id: 'event-trenton-american-crisis-published', townId: TOWN_ID, name: 'Publication of "The American Crisis"', slug: 'american-crisis-published-1776', startDate: new Date('1776-12-19'), datePrecision: 'DAY', summary: `On December 19, 1776, Thomas Paine published the first pamphlet of "The American Crisis" in Philadelphia. Written during the Continental Army's retreat across New Jersey, the pamphlet opened with the famous lines about "the times that try men's souls" and distinguished between "the summer soldier and the sunshine patriot" and those who would stand firm in the face of adversity.\n\nWashington ordered the pamphlet read aloud to his troops on December 23, three days before the attack on Trenton. The timing was deliberate — Paine's words were intended to steel the soldiers for the desperate operation ahead. The effect on morale, while difficult to measure precisely, was significant. Soldiers who had endured weeks of defeat and retreat heard an articulate defense of their cause and a reminder that the struggle was worth continuing.\n\n"The American Crisis" was a companion piece to the Battle of Trenton. Together, Paine's words and Washington's actions transformed the darkest moment of the Revolution into a turning point. The pamphlet went through multiple printings and was distributed throughout the colonies, helping to rebuild public support at a moment when it had nearly vanished.`, significanceWeight: 78 },
  });

  await prisma.event.upsert({
    where: { id: 'event-trenton-march-to-trenton' },
    update: {},
    create: { id: 'event-trenton-march-to-trenton', townId: TOWN_ID, name: 'Night March from the Delaware to Trenton', slug: 'night-march-to-trenton-1776', startDate: new Date('1776-12-26'), datePrecision: 'DAY', summary: `After completing the Delaware River crossing by approximately 3:00 AM on December 26, 1776, Washington's army began a nine-mile march south to Trenton. The army divided into two columns at a fork in the road known as Birmingham: General Greene's column took the Pennington Road to approach Trenton from the north, while General Sullivan's column took the River Road to approach from the west.\n\nThe march was conducted through a continuing nor'easter, with sleet and snow driving into the soldiers' faces. Many men marched without shoes, and bloodstains from their feet marked the road. The army was three hours behind schedule, meaning the attack would come after dawn rather than in the pre-dawn darkness Washington had planned. Despite this, Washington decided to press the attack rather than withdraw.\n\nThe discipline of the march was remarkable. Approximately 2,400 exhausted, freezing soldiers covered nine miles over icy roads in formation, arriving at their attack positions within minutes of each other. The synchronization of the two columns — despite the weather, the terrain, and the physical condition of the troops — was a testament to the leadership of Washington, Greene, Sullivan, and their subordinate officers.`, significanceWeight: 80 },
  });

  await prisma.event.upsert({
    where: { id: 'event-trenton-hessian-surrender' },
    update: {},
    create: { id: 'event-trenton-hessian-surrender', townId: TOWN_ID, name: 'Hessian Surrender at Trenton', slug: 'hessian-surrender-trenton-1776', startDate: new Date('1776-12-26'), datePrecision: 'DAY', summary: `Approximately 45 minutes after the first shots were fired, the surviving Hessian forces at Trenton surrendered to Washington's army. With Colonel Rall mortally wounded and their lines broken, the Hessian regiments were driven into an open field east of the town, where they were surrounded and compelled to lay down their arms.\n\nThe American forces captured approximately 896 Hessian soldiers, along with their muskets, bayonets, cartridge boxes, artillery pieces, ammunition, and regimental colors. Approximately 22 Hessians were killed and 83 wounded. Several hundred Hessians escaped south across the Assunpink Creek bridge before it could be sealed off. American casualties were remarkably light — no soldiers were killed in the actual fighting, though several were wounded and two soldiers froze to death on the march.\n\nThe captured Hessians were marched to Philadelphia, where they were paraded through the streets. The sight of nearly 900 professional soldiers being led as prisoners by the supposedly defeated Continental Army had an enormous psychological impact on the American public and on Congress. The surrender demonstrated in visible, tangible terms that the war was not lost.`, significanceWeight: 85 },
  });

  await prisma.event.upsert({
    where: { id: 'event-trenton-rall-death' },
    update: {},
    create: { id: 'event-trenton-rall-death', townId: TOWN_ID, name: 'Death of Colonel Rall', slug: 'death-of-colonel-rall-1776', startDate: new Date('1776-12-26'), datePrecision: 'DAY', summary: `During the Battle of Trenton on December 26, 1776, Colonel Johann Rall was mortally wounded while attempting to organize a counterattack against Washington's forces. Rall had been roused from sleep by the sound of the American assault and emerged from his headquarters to rally his troops. He attempted to lead his grenadier regiment in a charge against the American positions but was struck by musket balls and fell from his horse.\n\nRall was carried to a nearby church, where he received medical attention but could not be saved. According to tradition, Washington visited the dying colonel, and Rall asked for mercy for his soldiers. He died later that evening. He was buried in the churchyard of either the First Presbyterian Church or the Friends Meeting House in Trenton, though the exact location of his grave is no longer known.\n\nRall's death and the surrender of his garrison sent shockwaves through the British command. The loss of an entire brigade to a surprise attack undermined confidence in the chain of outposts that the British had established across New Jersey and forced a reassessment of the campaign strategy.`, significanceWeight: 72 },
  });

  await prisma.event.upsert({
    where: { id: 'event-trenton-washington-recrosses-delaware' },
    update: {},
    create: { id: 'event-trenton-washington-recrosses-delaware', townId: TOWN_ID, name: 'Washington Re-crosses the Delaware', slug: 'washington-recrosses-delaware-1776', startDate: new Date('1776-12-26'), endDate: new Date('1776-12-27'), datePrecision: 'DAY', summary: `After the victory at Trenton on December 26, 1776, Washington made the controversial decision to withdraw his army back across the Delaware River to Pennsylvania rather than hold Trenton. The decision was driven by practical considerations: many of his soldiers were exhausted from the all-night march and the battle, some of the captured Hessian rum had been consumed by troops, and the expected supporting columns under Ewing and Cadwalader had not crossed.\n\nThe recrossing was completed on the night of December 26-27, with the army bringing its prisoners, captured weapons, and supplies back to the Pennsylvania camp. Washington's critics later questioned why he did not press his advantage, but the decision reflected a cautious assessment of his army's capabilities. With fewer than 2,400 troops, many in poor condition, Washington judged that holding an exposed position in New Jersey without reinforcements was too risky.\n\nThe withdrawal was temporary. Within days, Washington planned a return to New Jersey, re-crossing the Delaware on December 29-30 and establishing his army in Trenton. The brief withdrawal allowed time for reinforcements to arrive, including Cadwalader's column and militia units inspired by the victory.`, significanceWeight: 65 },
  });

  await prisma.event.upsert({
    where: { id: 'event-trenton-re-enlistment-appeal' },
    update: {},
    create: { id: 'event-trenton-re-enlistment-appeal', townId: TOWN_ID, name: 'Washington\'s Re-enlistment Appeal', slug: 'reenlistment-appeal-1776', startDate: new Date('1776-12-30'), datePrecision: 'DAY', summary: `On December 30, 1776, with his army's enlistments expiring the following day, Washington personally appealed to his soldiers to extend their service for six additional weeks. The appeal was made to troops assembled in formation after the army had returned to Trenton. Washington offered a bounty of ten dollars for each soldier who would stay.\n\nAccording to accounts from soldiers present, the initial response was silence. The men were exhausted, sick, and far from home. Many had served the full term of their enlistment under brutal conditions. Then, one by one and in small groups, soldiers stepped forward to re-enlist. The exact numbers vary by source, but a substantial portion of the army agreed to continue serving, providing Washington with the core of troops he needed for the operations that followed.\n\nThe re-enlistment was a pivotal moment. Without it, Washington's army would have dissolved on January 1, 1777, and the victory at Trenton would have been an isolated success with no strategic follow-through. The soldiers' decision to stay — made voluntarily, in full knowledge of what they were facing — was an act of commitment that enabled the victories at Second Trenton and Princeton.`, significanceWeight: 82 },
  });

  await prisma.event.upsert({
    where: { id: 'event-trenton-cornwallis-march' },
    update: {},
    create: { id: 'event-trenton-cornwallis-march', townId: TOWN_ID, name: 'Cornwallis\'s March to Trenton', slug: 'cornwallis-march-to-trenton-1777', startDate: new Date('1777-01-02'), datePrecision: 'DAY', summary: `On January 2, 1777, Lord Cornwallis marched south from Princeton with approximately 5,500 British and Hessian troops to attack Washington's army at Trenton. Cornwallis had been recalled from a planned return to England after the American victory at Trenton on December 26 and was determined to crush Washington's force and end the campaign.\n\nAmerican delaying forces under Colonel Edward Hand slowed Cornwallis's advance along the road from Princeton, buying Washington time to position his army behind the Assunpink Creek. The British column did not reach Trenton until late afternoon, arriving in fading light. Cornwallis launched immediate assaults on the Assunpink Creek bridge but was repulsed each time by concentrated American fire.\n\nCornwallis's decision to wait until morning to resume the attack has been debated by historians ever since. His quartermaster general, Sir William Erskine, reportedly urged an immediate night attack, warning that Washington would escape. Cornwallis, confident that Washington was trapped between the creek and the river, chose to wait. By dawn, Washington and his army had vanished, having slipped away to Princeton under cover of darkness.`, significanceWeight: 78 },
  });

  await prisma.event.upsert({
    where: { id: 'event-trenton-night-march-princeton' },
    update: {},
    create: { id: 'event-trenton-night-march-princeton', townId: TOWN_ID, name: 'Night March from Trenton to Princeton', slug: 'night-march-trenton-to-princeton-1777', startDate: new Date('1777-01-02'), endDate: new Date('1777-01-03'), datePrecision: 'DAY', summary: `On the night of January 2-3, 1777, Washington executed one of the war's most daring maneuvers. With Cornwallis's army camped on the opposite bank of the Assunpink Creek preparing for a morning assault, Washington left his campfires burning, wrapped his artillery wheels in rags to muffle the noise, and marched his entire army east along the Quaker Bridge Road and then north to Princeton.\n\nThe march was conducted in freezing conditions over roads that had turned to mud during the previous day's thaw and then refrozen into a rough surface. The army covered approximately twelve miles during the night, arriving in the vicinity of Princeton at dawn on January 3. The march required extreme discipline — any noise or light might have alerted the British sentries across the creek.\n\nThe night march from Trenton to Princeton was a masterpiece of deception and maneuver. By abandoning Trenton without a fight, Washington avoided a pitched battle he could not win, and by striking Princeton, he placed his army on Cornwallis's supply line and forced the British to retreat from most of New Jersey. The "Ten Crucial Days" between December 25, 1776, and January 3, 1777, transformed the strategic situation of the war.`, significanceWeight: 85 },
  });

  await prisma.event.upsert({
    where: { id: 'event-trenton-battle-princeton' },
    update: {},
    create: { id: 'event-trenton-battle-princeton', townId: TOWN_ID, name: 'Battle of Princeton', slug: 'battle-of-princeton-from-trenton-1777', startDate: new Date('1777-01-03'), datePrecision: 'DAY', summary: `On the morning of January 3, 1777, Washington's army, having marched from Trenton overnight, encountered a British brigade under Lieutenant Colonel Charles Mawhood near Princeton. The battle began when Mawhood's advance guard clashed with an American detachment under General Hugh Mercer. Mercer was mortally wounded in the fighting, and his troops were pushed back.\n\nWashington rode to the front to rally the retreating soldiers, personally leading a counterattack that drove the British from the field. Cadwalader's Philadelphia militia and other American units joined the assault, overwhelming the British position. The remaining British soldiers retreated into Nassau Hall at the College of New Jersey (now Princeton University), where they surrendered after American artillery fired on the building.\n\nThe victory at Princeton completed the "Ten Crucial Days" campaign that began with the crossing of the Delaware. Together with Trenton, Princeton demonstrated Washington's ability to seize the initiative and forced the British to abandon most of their posts in New Jersey, withdrawing to the area around New Brunswick and Perth Amboy. The campaign saved the Revolution at its lowest point.`, significanceWeight: 90 },
  });

  await prisma.event.upsert({
    where: { id: 'event-trenton-militia-harassment' },
    update: {},
    create: { id: 'event-trenton-militia-harassment', townId: TOWN_ID, name: 'New Jersey Militia Harassment of Hessian Outposts', slug: 'nj-militia-harassment-1776', startDate: new Date('1776-12-14'), endDate: new Date('1776-12-25'), datePrecision: 'RANGE', summary: `Throughout the Hessian occupation of Trenton in December 1776, New Jersey militia units conducted a campaign of harassment against the garrison, staging raids, ambushes, and probing attacks that kept the Hessians in a constant state of alert. The militia operated from the surrounding countryside, striking at outposts and patrols before melting back into the landscape.\n\nThe harassment had a cumulative effect on the Hessian garrison's readiness. Colonel Rall reported to his superiors that his troops were being attacked almost daily and that the garrison was exhausted from maintaining round-the-clock vigilance. On December 23, a party of approximately 30 American soldiers raided a Hessian outpost, and on December 25 — the morning before the main attack — there were additional alarms. These constant provocations dulled the Hessians' responsiveness: by Christmas night, many soldiers had been on alert so frequently that the garrison may have been slower to react when the real attack came.\n\nThe militia harassment before Trenton illustrates the critical role that irregular forces played in the Revolution. While the Continental Army provided the striking power, the militia created the conditions — exhaustion, uncertainty, disrupted routines — that made the regular army's success possible.`, significanceWeight: 68 },
  });

  await prisma.event.upsert({
    where: { id: 'event-trenton-congress-flees-philadelphia' },
    update: {},
    create: { id: 'event-trenton-congress-flees-philadelphia', townId: TOWN_ID, name: 'Continental Congress Flees Philadelphia', slug: 'congress-flees-philadelphia-1776', startDate: new Date('1776-12-12'), datePrecision: 'DAY', summary: `On December 12, 1776, the Continental Congress fled Philadelphia for Baltimore, Maryland, fearing that the advancing British army would capture the city and the delegates. The flight of Congress was a visible sign of the Revolution's near-collapse and underscored the urgency of Washington's need for a military victory.\n\nBefore departing, Congress passed a resolution granting Washington extraordinary powers for six months, effectively making him a military dictator for the duration of the emergency. This grant of authority — unprecedented in American history — reflected the desperate circumstances and Congress's recognition that only Washington could save the situation. The resolution gave him power to raise troops, requisition supplies, and arrest anyone suspected of aiding the enemy.\n\nThe flight of Congress and the grant of emergency powers set the stage for the Trenton campaign. Washington understood that he was operating not just as a military commander but as the last functioning authority of the American cause. His decision to attack Trenton was made in this context — as a political act as much as a military one, designed to demonstrate that the Revolution was still viable.`, significanceWeight: 72 },
  });

  await prisma.event.upsert({
    where: { id: 'event-trenton-fort-washington-fall' },
    update: {},
    create: { id: 'event-trenton-fort-washington-fall', townId: TOWN_ID, name: 'Fall of Fort Washington', slug: 'fall-of-fort-washington-1776', startDate: new Date('1776-11-16'), datePrecision: 'DAY', summary: `On November 16, 1776, British and Hessian forces stormed Fort Washington on the northern tip of Manhattan, capturing approximately 2,800 American soldiers along with artillery, ammunition, and supplies. The fall of the fort was the beginning of the chain of disasters that led to the retreat across New Jersey and the crisis that culminated at Trenton.\n\nColonel Rall's Hessian regiment played a prominent role in the assault on Fort Washington, scaling the heights under fire and earning a reputation for ferocity. The same regiment that captured Fort Washington would garrison Trenton six weeks later, and its commander would die in the town he had been sent to hold.\n\nThe loss of Fort Washington was devastating to American morale and military capability. The captured soldiers represented a significant portion of Washington's army, and the weapons and supplies lost could not easily be replaced. The disaster forced Washington into the retreat that brought him to the Delaware River and ultimately to the desperate decision to attack Trenton.`, significanceWeight: 75 },
  });

  await prisma.event.upsert({
    where: { id: 'event-trenton-fall-fort-lee' },
    update: {},
    create: { id: 'event-trenton-fall-fort-lee', townId: TOWN_ID, name: 'Fall of Fort Lee', slug: 'fall-of-fort-lee-trenton-context-1776', startDate: new Date('1776-11-20'), datePrecision: 'DAY', summary: `On November 20, 1776, Cornwallis led approximately 4,000 troops across the Hudson River and up the Palisades to attack Fort Lee, the American position on the New Jersey side of the river opposite Fort Washington. Washington, alerted to the crossing, ordered an evacuation but the army was forced to abandon most of its supplies, tents, and artillery in the hasty retreat.\n\nThe fall of Fort Lee began the long retreat across New Jersey. Washington's army, already demoralized by the loss of Fort Washington four days earlier, marched south and west through Newark, New Brunswick, and Princeton, with Cornwallis pursuing close behind. At each town, soldiers deserted and militia dispersed, shrinking the army's strength. The loss of Fort Lee and the subsequent retreat created the conditions that made the Trenton campaign necessary.\n\nThe fall of the two forts and the retreat across New Jersey demonstrated the vulnerability of the Continental Army in conventional operations against the British. The lesson Washington drew from the experience — that he needed to fight on his own terms, using surprise and maneuver rather than static defense — informed his planning for the Trenton attack.`, significanceWeight: 72 },
  });

  await prisma.event.upsert({
    where: { id: 'event-trenton-hessian-prisoners-march' },
    update: {},
    create: { id: 'event-trenton-hessian-prisoners-march', townId: TOWN_ID, name: 'Hessian Prisoners Marched Through Philadelphia', slug: 'hessian-prisoners-march-1776', startDate: new Date('1776-12-31'), datePrecision: 'DAY', summary: `Following the Battle of Trenton, approximately 896 Hessian prisoners were marched from Trenton through the streets of Philadelphia. The procession was a deliberate demonstration of the American victory, designed to boost civilian morale and demonstrate to Congress and the public that the Continental Army was capable of defeating professional soldiers.\n\nThe sight of nearly 900 uniformed prisoners of war — professional soldiers who had been widely feared — marching under guard through the streets of the American capital made a profound impression on the population. The Hessians had been portrayed as fearsome mercenaries, and their capture undermined the sense of British military invincibility that had settled over the colonies after the defeats of 1776.\n\nThe prisoners were eventually distributed to camps in Pennsylvania and Virginia. Many of the captured Hessians eventually settled in America rather than returning to Germany, and their descendants became part of the American population. The march through Philadelphia was both a military processing of prisoners and a political event that helped restore public confidence in the Revolution.`, significanceWeight: 62 },
  });

  await prisma.event.upsert({
    where: { id: 'event-trenton-continental-congress-1784' },
    update: {},
    create: { id: 'event-trenton-continental-congress-1784', townId: TOWN_ID, name: 'Continental Congress Meets in Trenton', slug: 'continental-congress-trenton-1784', startDate: new Date('1784-11-01'), endDate: new Date('1784-12-24'), datePrecision: 'RANGE', summary: `In November and December 1784, the Continental Congress met in Trenton, making the town the temporary capital of the United States. The Congress convened at the French Arms Tavern on South Broad Street, conducting national business for approximately two months before relocating to New York.\n\nTrenton's selection as a meeting place for Congress reflected its central geographic location between the northern and southern states, as well as its association with the revolutionary victory of 1776. The Congress considered proposals to establish a permanent national capital, and Trenton was among the sites discussed, though the eventual decision favored a new city on the Potomac River.\n\nThe brief period when Trenton served as the national capital is often overlooked but connects the town's revolutionary military history to the broader story of the founding of the republic. The decision to meet in Trenton acknowledged the town's symbolic importance and its practical location as a crossroads between the major population centers of the early United States.`, significanceWeight: 58 },
  });

  await prisma.event.upsert({
    where: { id: 'event-trenton-washington-arch-1789' },
    update: {},
    create: { id: 'event-trenton-washington-arch-1789', townId: TOWN_ID, name: 'Washington\'s Triumphal Arch at Trenton', slug: 'washington-triumphal-arch-1789', startDate: new Date('1789-04-21'), datePrecision: 'DAY', summary: `On April 21, 1789, George Washington passed through Trenton on his way to his inauguration as the first President of the United States in New York City. The citizens of Trenton erected a triumphal arch over the bridge at the Assunpink Creek — the same bridge where Washington's army had repulsed Cornwallis's attacks in January 1777 — bearing the inscription "The Defender of the Mothers Will Be the Protector of the Daughters."\n\nThirteen young girls dressed in white, representing the thirteen states, strewed flowers before Washington as he crossed the bridge. Washington himself recorded the event, noting his emotional response to the welcome in a town where he had fought thirteen years earlier. The celebration at Trenton was one of the most elaborate of the many receptions Washington received on his inaugural journey.\n\nThe triumphal arch ceremony connected Trenton's wartime past to the new republic's future. The women and girls who honored Washington were deliberately invoking the memory of the battle while expressing confidence in the new government he would lead. The event illustrates how Trenton's revolutionary significance was already being woven into national mythology within years of the events themselves.`, significanceWeight: 60 },
  });

  await prisma.event.upsert({
    where: { id: 'event-trenton-nj-gradual-emancipation' },
    update: {},
    create: { id: 'event-trenton-nj-gradual-emancipation', townId: TOWN_ID, name: 'New Jersey Gradual Emancipation Act', slug: 'nj-gradual-emancipation-1804', startDate: new Date('1804-02-15'), datePrecision: 'DAY', summary: `On February 15, 1804, the New Jersey legislature, meeting in Trenton, passed An Act for the Gradual Abolition of Slavery. The law provided that children born to enslaved women after July 4, 1804, would be free, though they were required to serve an apprenticeship — males until age 25, females until age 21 — effectively prolonging their bondage under another name.\n\nNew Jersey was the last northern state to adopt gradual emancipation legislation. The law's passage in the state capital reflected the tension between the revolutionary ideals of liberty and the economic interests of slaveholders, who maintained considerable political power in New Jersey. The gradual nature of the law meant that some people remained enslaved in New Jersey until the passage of the Thirteenth Amendment in 1865.\n\nThe Gradual Emancipation Act connects Trenton's revolutionary history to the long struggle for Black freedom. The Revolution's promise of liberty, articulated in documents debated and celebrated in Trenton, was not extended to the enslaved people who lived and worked in the town. The gap between revolutionary rhetoric and the reality of slavery in New Jersey is an essential part of Trenton's history.`, significanceWeight: 65 },
  });

  console.log('  Events seeded.');
}

// =============================================================================
// EVENT-PEOPLE CONNECTIONS
// =============================================================================

async function seedEventPeople() {
  console.log('  Seeding event-people connections...');

  const connections = [
    // Battle of Trenton
    { eventId: 'event-trenton-battle-1776', personId: 'person-trenton-george-washington', roleInEvent: 'Commander-in-Chief; planned and led the attack' },
    { eventId: 'event-trenton-battle-1776', personId: 'person-trenton-john-rall', roleInEvent: 'Hessian garrison commander; mortally wounded' },
    { eventId: 'event-trenton-battle-1776', personId: 'person-trenton-henry-knox', roleInEvent: 'Chief of Artillery; commanded the guns that dominated Trenton\'s streets' },
    { eventId: 'event-trenton-battle-1776', personId: 'person-trenton-alexander-hamilton', roleInEvent: 'Artillery captain; positioned cannons at King and Queen Street junction' },
    { eventId: 'event-trenton-battle-1776', personId: 'person-trenton-james-monroe', roleInEvent: 'Lieutenant; wounded while capturing Hessian artillery on King Street' },
    { eventId: 'event-trenton-battle-1776', personId: 'person-trenton-nathanael-greene', roleInEvent: 'Division commander; led the northern assault column' },
    { eventId: 'event-trenton-battle-1776', personId: 'person-trenton-john-sullivan', roleInEvent: 'Division commander; led the western assault column along the River Road' },
    { eventId: 'event-trenton-battle-1776', personId: 'person-trenton-john-stark', roleInEvent: 'Regiment commander; led the vanguard of the attack' },
    { eventId: 'event-trenton-battle-1776', personId: 'person-trenton-william-washington', roleInEvent: 'Advance guard commander; wounded capturing Hessian guns' },
    { eventId: 'event-trenton-battle-1776', personId: 'person-trenton-dr-john-riker', roleInEvent: 'Civilian physician; saved James Monroe\'s life during the battle' },

    // Delaware Crossing
    { eventId: 'event-trenton-delaware-crossing', personId: 'person-trenton-george-washington', roleInEvent: 'Commander-in-Chief; directed the crossing operation' },
    { eventId: 'event-trenton-delaware-crossing', personId: 'person-trenton-john-glover', roleInEvent: 'Commanded the Marblehead mariners who managed the boats' },
    { eventId: 'event-trenton-delaware-crossing', personId: 'person-trenton-henry-knox', roleInEvent: 'Supervised the transport of 18 artillery pieces across the river' },
    { eventId: 'event-trenton-delaware-crossing', personId: 'person-trenton-john-cadwalader', roleInEvent: 'Commanded the southern column; unable to complete crossing due to ice' },

    // Hessian Occupation
    { eventId: 'event-trenton-hessian-occupation', personId: 'person-trenton-john-rall', roleInEvent: 'Garrison commander' },
    { eventId: 'event-trenton-hessian-occupation', personId: 'person-trenton-abraham-hunt', roleInEvent: 'Leading Trenton citizen who hosted Hessian officers' },
    { eventId: 'event-trenton-hessian-occupation', personId: 'person-trenton-phillis-levenworth', roleInEvent: 'Enslaved civilian witness to the occupation' },

    // Second Battle of Trenton
    { eventId: 'event-trenton-second-battle', personId: 'person-trenton-george-washington', roleInEvent: 'Commander-in-Chief; directed the defense of the Assunpink Creek' },
    { eventId: 'event-trenton-second-battle', personId: 'person-trenton-henry-knox', roleInEvent: 'Commanded artillery defending the creek bridge' },
    { eventId: 'event-trenton-second-battle', personId: 'person-trenton-john-cadwalader', roleInEvent: 'Commanded Philadelphia militia supporting the defense' },

    // Intelligence Operations
    { eventId: 'event-trenton-spy-network', personId: 'person-trenton-john-honeyman', roleInEvent: 'Alleged spy who provided intelligence on the Hessian garrison' },
    { eventId: 'event-trenton-spy-network', personId: 'person-trenton-george-washington', roleInEvent: 'Directed intelligence-gathering operations' },

    // Continental Retreat
    { eventId: 'event-trenton-continental-retreat', personId: 'person-trenton-george-washington', roleInEvent: 'Commander-in-Chief; led the retreat and secured boats on the Delaware' },
    { eventId: 'event-trenton-continental-retreat', personId: 'person-trenton-nathanael-greene', roleInEvent: 'Division commander during the retreat' },

    // Enlistment Crisis
    { eventId: 'event-trenton-enlistment-crisis', personId: 'person-trenton-george-washington', roleInEvent: 'Made personal appeal to troops to extend enlistments' },

    // Re-enlistment Appeal
    { eventId: 'event-trenton-re-enlistment-appeal', personId: 'person-trenton-george-washington', roleInEvent: 'Personally appealed to soldiers; offered ten-dollar bounty' },

    // Night March to Princeton
    { eventId: 'event-trenton-night-march-princeton', personId: 'person-trenton-george-washington', roleInEvent: 'Conceived and directed the overnight march' },
    { eventId: 'event-trenton-night-march-princeton', personId: 'person-trenton-henry-knox', roleInEvent: 'Supervised the movement of artillery with muffled wheels' },

    // Battle of Princeton
    { eventId: 'event-trenton-battle-princeton', personId: 'person-trenton-george-washington', roleInEvent: 'Commander-in-Chief; personally rallied troops during the battle' },
    { eventId: 'event-trenton-battle-princeton', personId: 'person-trenton-alexander-hamilton', roleInEvent: 'Artillery officer; fired on Nassau Hall' },
    { eventId: 'event-trenton-battle-princeton', personId: 'person-trenton-john-cadwalader', roleInEvent: 'Led Philadelphia militia in the attack' },

    // Fall of Fort Washington
    { eventId: 'event-trenton-fort-washington-fall', personId: 'person-trenton-john-rall', roleInEvent: 'Led Hessian assault on the fort' },
    { eventId: 'event-trenton-fort-washington-fall', personId: 'person-trenton-nathanael-greene', roleInEvent: 'Advised holding the fort; overruled events' },

    // Hessian Surrender
    { eventId: 'event-trenton-hessian-surrender', personId: 'person-trenton-george-washington', roleInEvent: 'Accepted the Hessian surrender' },
    { eventId: 'event-trenton-hessian-surrender', personId: 'person-trenton-john-rall', roleInEvent: 'Mortally wounded; his troops surrendered' },

    // Cornwallis March
    { eventId: 'event-trenton-cornwallis-march', personId: 'person-trenton-george-washington', roleInEvent: 'Directed the American defense and subsequent escape' },
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

  // 2 existing stories: story-trenton-hessian-perspective, story-trenton-modern-barracks
  // Need 4 new stories for 6 total

  await prisma.story.upsert({
    where: { id: 'story-trenton-crossing-glover' },
    update: {},
    create: {
      id: 'story-trenton-crossing-glover',
      townId: TOWN_ID,
      title: 'Ice, Wind, and the Delaware',
      slug: 'crossing-the-delaware-glover',
      storyType: 'HISTORICAL_VOICE',
      subjectPersonId: 'person-trenton-john-glover',
      verificationStatus: 'VERIFIED',
      textVersion: `The river was a nightmare. I had seen heavy seas off the Grand Banks and ice in Marblehead Harbor in the worst winters, but the Delaware on Christmas night 1776 was something else entirely. The current ran fast, swollen by days of rain and snowmelt, and the surface was choked with slabs of ice — some the size of tabletops, others as big as a fishing dory — grinding against each other with a sound like breaking timbers.

My men knew boats. That was why we were there. The Marblehead regiment was not a typical infantry unit. We were fishermen, sailors, and watermen from the Massachusetts coast, men who had handled oars and sails since childhood. General Washington needed us for this one thing: to move his army across a river that no ordinary soldiers could have crossed.

The boats were Durham boats, mostly — flat-bottomed freight vessels built for carrying iron ore and grain down the Delaware. They were forty to sixty feet long, pointed at both ends, and drew only a few inches of water when loaded. In calm conditions, they were easy enough to handle. In the ice and wind of that Christmas night, they required every ounce of skill my men possessed.

We began the crossing at about six in the evening. The plan called for the entire army — some 2,400 men, plus artillery, horses, and ammunition — to be across by midnight, leaving time for a night march to Trenton and a pre-dawn attack. The plan was already behind schedule before we started, and conditions made every trip across the river slower than the last.

The ice was the worst of it. Slabs jammed against the boats as we pushed into the current, threatening to crush the hulls or spin the vessels broadside. My men used poles and oars to fend off the larger pieces, sometimes standing in the bow and shoving ice aside with their hands. The wind drove sleet into our faces. The soldiers we were ferrying sat in the bottoms of the boats, wet and freezing, clutching their muskets and trying not to move.

Colonel Knox stood on the Pennsylvania bank, his great bulk visible even in the darkness, bellowing orders and encouragement as each boat loaded and pushed off. He was responsible for getting the artillery across — eighteen cannons, each weighing a thousand pounds or more, loaded onto boats that were already riding low in the water. It was Knox's guns that would win the battle, but first they had to survive the river.

Trip after trip, boat after boat, my men rowed and poled their way across and back. The crossing took far longer than planned — it was nearly three in the morning before the last units were on the New Jersey shore. We had lost our chance at a pre-dawn attack. Washington consulted briefly with his officers and made the decision to press on regardless.

Not a single soldier was lost to the river. Not one boat was swamped, not one cannon was dropped. In conditions that would have been dangerous for experienced watermen in daylight, my fishermen moved an army in darkness. When I think about what the men from Marblehead did that night, I think about all the mornings they had rowed out to the fishing grounds in winter storms, all the times they had hauled nets in freezing spray. The skills that saved the Revolution on December 25, 1776, were the same skills that put cod on Boston tables. The war was won by working men.`,
      tags: ['trenton', 'delaware-crossing', 'john-glover', 'marblehead', 'durham-boats'],
    },
  });

  await prisma.story.upsert({
    where: { id: 'story-trenton-civilian-battle' },
    update: {},
    create: {
      id: 'story-trenton-civilian-battle',
      townId: TOWN_ID,
      title: 'Thunder on King Street',
      slug: 'civilian-account-battle-trenton',
      storyType: 'HISTORICAL_VOICE',
      verificationStatus: 'VERIFIED',
      textVersion: `I was in the cellar when the shooting started. The sound of muskets woke us before dawn on December 26 — sharp cracks in the cold air, then the deeper boom of cannon. My mother pulled me and my brother down the stairs and into the cellar, where we crouched behind barrels of cider and sacks of flour, listening to the battle rage through the streets above us.

For twelve days we had lived under the Hessians. They were not cruel, for the most part, but they were occupiers. They took what they needed — food, firewood, blankets — and left receipts that we knew would never be honored. The officers were quartered in the larger houses along King Street and Queen Street. The common soldiers were packed into the barracks and into any building with a roof. They were far from home, in a country they did not understand, surrounded by people who spoke a language they could not follow.

The Hessians celebrated Christmas on the 25th. We could hear singing from the barracks, and the officers gathered at Mr. Hunt's house for dinner. By evening, the town was quiet except for the sentries stamping their feet in the cold. The snow and sleet that had begun in the afternoon grew heavier through the night. I remember thinking that at least the storm would keep things quiet.

Then the guns. The first shots came from the north end of town, near the head of King Street. Within minutes, cannon were firing — a sound I had never heard so close, a concussion you feel in your chest, not just your ears. The cannonballs struck houses, tore through walls, and sent splinters flying. Musket fire rattled from every direction. We could hear men shouting in German and English, the clatter of horses, the crash of doors being kicked open.

I wanted to look, but my mother held me down. Through the cellar window, which was at street level, I could see boots — Hessian boots running past, then Continental soldiers in their ragged clothes. A cannonball struck a building across the street and the wall collapsed in a cloud of dust and stone. I heard a man screaming, whether American or Hessian I could not tell.

The battle was over faster than I expected. The shooting tapered off, replaced by shouting, the sound of many men moving, and then the unmistakable noise of weapons being stacked — metal on metal, a ringing sound. When we finally came up from the cellar, the streets were full of Continental soldiers and Hessian prisoners. The prisoners stood in ranks, their hands empty, their faces blank with shock. Some were wounded, blood soaking through their blue coats.

I saw Colonel Rall being carried on a door, his uniform dark with blood. I saw young soldiers — American boys no older than my brother — standing with muskets they had clearly never fired, staring at the prisoners as if they could not believe what had happened. The snow on King Street was trampled into mud, streaked with blood and gunpowder, littered with cartridge papers and broken glass.

My mother went to the church, which had been turned into a hospital. She helped tend the wounded — American and Hessian alike. The surgeons worked through the day, and the cries of wounded men could be heard from the street. By evening, the Americans had gathered their prisoners and their captured weapons and were preparing to leave. The battle had lasted less than an hour, but Trenton would never be the same.

We were civilians caught in the middle of a war we had not chosen but could not escape. The Revolution fought for liberty, but on December 26, 1776, liberty was the last thing on our minds. We were thinking about survival — about keeping our homes standing, our families alive, and our cellar stocked with enough food to see us through a winter that was only beginning.`,
      tags: ['trenton', 'civilian-perspective', 'battle-of-trenton', 'occupation', 'december-1776'],
    },
  });

  await prisma.story.upsert({
    where: { id: 'story-trenton-hamilton-artillery' },
    update: {},
    create: {
      id: 'story-trenton-hamilton-artillery',
      townId: TOWN_ID,
      title: 'The Guns at the Crossroads',
      slug: 'hamilton-artillery-trenton',
      storyType: 'HISTORICAL_VOICE',
      subjectPersonId: 'person-trenton-alexander-hamilton',
      verificationStatus: 'VERIFIED',
      textVersion: `I was twenty-one years old and commanding two six-pound cannons at the junction of King and Queen Streets in Trenton, New Jersey. It was the morning of December 26, 1776, and my guns were the hinge on which the battle turned.

We had crossed the Delaware the night before in conditions that tested every man in the army. My artillery company — the New York Provincial Company of Artillery — had been with the army since the retreat from New York, and we had learned through hard experience how to move guns in bad conditions. But the crossing challenged even veteran artillerists. The Durham boats sat low in the water under the weight of the cannons, and the ice threatened to crush the hulls. Colonel Knox supervised the operation with his usual energy, his voice carrying over the wind and the grinding of the ice.

After the crossing, we marched nine miles through the storm. The guns had to be dragged on their carriages over icy roads, the wheels slipping and the horses struggling for purchase. The men of my company walked alongside the guns, steadying them on the downhill stretches and pushing on the uphills. By the time we reached the outskirts of Trenton, we were wet through, frozen, and exhausted. But the guns were ready.

General Washington's plan placed the artillery at the heads of Trenton's two main streets. Knox's guns dominated King Street from the north, while my company and others were positioned at the intersection of King and Queen Streets. The idea was simple: if we could command the streets with artillery, the Hessians would be unable to form their regiments into fighting formations. European infantry depended on precise drill and massed formations. Take away their ability to form up, and you take away their strength.

When the attack began, my men loaded canister and grapeshot — tin cans filled with musket balls that turned the cannons into enormous shotguns. We fired down the length of the streets, each discharge scattering a cloud of lead balls into any group of soldiers attempting to assemble. The effect was devastating. The Hessians could not form lines, could not bring their own artillery into action, could not mount the organized counterattack that their training demanded.

I stood behind my guns and directed the fire, adjusting the elevation and timing to maximize the effect. The street filled with smoke, and the concussion of each discharge shook the buildings on either side. Between rounds, I could see Hessian soldiers running from house to house, officers on horseback trying to rally their men, and American infantry closing in from the side streets. The combination of artillery fire from the street heads and infantry pressure from the flanks was more than the garrison could withstand.

The battle lasted less than an hour. My guns fired continuously throughout, and by the end the barrels were hot enough to singe wet gloves. When the Hessians surrendered, I felt a mixture of elation and exhaustion that I had never experienced before. We had done something extraordinary. A ragged army of hungry, freezing men had crossed a frozen river in a storm and defeated a garrison of professional soldiers.

I did not know then that the morning at Trenton would bring me to General Washington's attention, that within months I would be serving as his aide-de-camp, that the war would lead me to a life in government and finance. On December 26, 1776, I was a young captain standing behind his guns in the snow, watching the smoke clear over the streets of a small New Jersey town where the Revolution had just been saved.`,
      tags: ['trenton', 'alexander-hamilton', 'artillery', 'battle-of-trenton', 'ten-crucial-days'],
    },
  });

  await prisma.story.upsert({
    where: { id: 'story-trenton-enslaved-witness' },
    update: {},
    create: {
      id: 'story-trenton-enslaved-witness',
      townId: TOWN_ID,
      title: 'Liberty for Whom?',
      slug: 'enslaved-witness-trenton',
      storyType: 'HISTORICAL_VOICE',
      subjectPersonId: 'person-trenton-phillis-levenworth',
      verificationStatus: 'ORAL_TRADITION',
      textVersion: `The soldiers came and the soldiers went, and through it all we worked. We hauled water and split wood and cleaned hearths and cooked food, for the Hessians first and then for the Americans, and the work was the same regardless of which army claimed the town.

When the Hessians arrived in December, they took over the houses and they took what they pleased. They did not ask. They pointed at what they wanted — a ham, a blanket, a chair for firewood — and we brought it. The officers were quartered in the fine houses along King Street, and their servants — men in uniforms who were as far from their homes as I was from any place I might call my own — cooked their meals and tended their horses. We were invisible to them, or nearly so. A Black woman carrying a basket of laundry through a town full of foreign soldiers attracted no notice. We moved through the occupation like shadows.

I heard the battle from the kitchen. The sound of cannons shook the walls and rattled the pots hanging from the ceiling beams. The firing came from every direction, and there was nowhere to go that was safe. I pressed myself against the wall of the kitchen and waited. The fighting moved through the streets like a storm, and then it was over.

When the shooting stopped, the American soldiers filled the town. They were ragged and hungry, many of them barefoot despite the snow. They called out to each other in triumph, whooping and laughing with the relief of men who had expected to die and had not. They were fighting for liberty. I heard the word on their lips, in their songs, in the speeches their officers made. Liberty. Freedom. The rights of man.

I wondered whose liberty they meant. I was not free. I was not consulted about this war, not asked to choose sides, not promised anything by either army. The men who wrote the Declaration of Independence owned people like me. The general who led the attack on Trenton owned people like me. The soldiers who celebrated their victory in the streets of Trenton would go home to towns where people like me were bought and sold.

I do not say this to diminish what they did. The Battle of Trenton mattered. The survival of the army mattered. The cause of independence mattered, even if its promise was not kept for everyone. But the story of Trenton is incomplete without the people who were there but are not remembered — the enslaved women and men who cooked the food, carried the water, cleaned the blood from the floors, and watched the soldiers celebrate a freedom that did not include them.

New Jersey would not begin to end slavery until 1804, and even then the process was gradual and grudging. The last enslaved people in the state were not freed until 1865, when the Thirteenth Amendment made the question moot. The Revolution's promise of liberty took nearly a century to reach the people who needed it most.

I was in Trenton when the battle was fought. I was there when the Hessians surrendered and when the Americans cheered. I was there, and I was not free. That is also part of this story.`,
      tags: ['trenton', 'slavery', 'revolution', 'civilian-perspective', 'phillis', 'new-jersey'],
    },
  });

  console.log('  Stories seeded.');
}

// =============================================================================
// LESSON PLANS
// =============================================================================

async function seedLessons() {
  console.log('  Seeding lesson plans...');

  await prisma.lessonPlan.upsert({
    where: { id: 'trenton-lesson-crossing-delaware' },
    update: {
      slug: 'crossing-delaware-lesson',
      summary: 'Students analyze the logistics, risks, and decision-making behind Washington\'s crossing of the Delaware River, using primary sources and maps to understand how the operation was planned and executed under extreme conditions.',
      lessonData: {
        objectives: [
          'Analyze the strategic context that led Washington to plan the attack on Trenton',
          'Evaluate the logistical challenges of the Delaware River crossing',
          'Assess the role of leadership and decision-making in military operations',
          'Use primary source maps and accounts to reconstruct the crossing',
        ],
        essentialQuestions: [
          'Why did Washington decide to attack Trenton when his army was in such poor condition?',
          'What skills and resources made the river crossing possible?',
          'How did the failure of two of the three crossing columns affect the outcome?',
          'What does the crossing reveal about the relationship between leadership and luck in warfare?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Show students Emanuel Leutze\'s 1851 painting of Washington Crossing the Delaware. Ask them to identify three details that seem heroic or dramatic. Then provide a list of historical inaccuracies in the painting (wrong flag, wrong boat type, wrong time of day, Washington standing). Discuss why the painter might have made these choices.',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'The military situation in December 1776: defeats at Long Island, Fort Washington, Fort Lee; the retreat across New Jersey',
            'Washington\'s plan: three-column crossing, timing, objectives',
            'The conditions: nor\'easter, ice, darkness, exhausted troops',
            'The role of John Glover\'s Marblehead regiment and the Durham boats',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Map Exercise: Using a topographical map of the Delaware River crossing area, students trace the routes of the three columns and identify the challenges each faced',
            'Primary Source Analysis: Students read excerpts from soldiers\' diaries and letters describing the crossing and identify common themes (cold, fear, determination)',
            'Decision Tree: Students create a decision tree showing the choices Washington faced at key moments (to cross or not, to attack after losing surprise, to press on with only one column)',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Write a 250-word briefing paper from the perspective of one of Washington\'s staff officers, explaining to General Washington why the crossing should or should not proceed given the conditions. Use at least three specific historical details to support your recommendation.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Class discussion: How do we balance military necessity against human cost? Was Washington justified in ordering the crossing given the conditions his soldiers faced? Exit ticket: Identify one factor that made the crossing succeed and one that could have caused it to fail.',
        },
        differentiation: {
          struggling: 'Provide a pre-filled decision tree template with some choices already filled in. Offer sentence starters for the briefing paper.',
          advanced: 'Compare Washington\'s crossing to another famous military river crossing in history (e.g., Caesar crossing the Rubicon, D-Day beach landings). Write a comparison essay.',
          ell: 'Provide a visual glossary with images for key terms (Durham boat, nor\'easter, artillery, infantry). Use paired reading for primary sources.',
        },
      },
      standards: {
        commonCore: ['RH.9-10.1', 'RH.9-10.2', 'RH.9-10.7', 'WHST.9-10.1'],
        c3Framework: ['D2.His.1.9-12', 'D2.His.3.9-12', 'D2.His.5.9-12', 'D2.Geo.2.9-12'],
        note: 'Aligned to Common Core literacy standards for history/social studies and C3 Framework for historical thinking and geographic reasoning.',
      },
    },
    create: {
      id: 'trenton-lesson-crossing-delaware',
      townId: TOWN_ID,
      title: 'Washington\'s Crossing: Logistics, Leadership, and Risk',
      slug: 'crossing-delaware-lesson',
      gradeRange: '8-12',
      estimatedDuration: '2-3 class periods',
      summary: 'Students analyze the logistics, risks, and decision-making behind Washington\'s crossing of the Delaware River, using primary sources and maps to understand how the operation was planned and executed under extreme conditions.',
      lessonData: {
        objectives: [
          'Analyze the strategic context that led Washington to plan the attack on Trenton',
          'Evaluate the logistical challenges of the Delaware River crossing',
          'Assess the role of leadership and decision-making in military operations',
          'Use primary source maps and accounts to reconstruct the crossing',
        ],
        essentialQuestions: [
          'Why did Washington decide to attack Trenton when his army was in such poor condition?',
          'What skills and resources made the river crossing possible?',
          'How did the failure of two of the three crossing columns affect the outcome?',
          'What does the crossing reveal about the relationship between leadership and luck in warfare?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Show students Emanuel Leutze\'s 1851 painting of Washington Crossing the Delaware. Ask them to identify three details that seem heroic or dramatic. Then provide a list of historical inaccuracies in the painting (wrong flag, wrong boat type, wrong time of day, Washington standing). Discuss why the painter might have made these choices.',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'The military situation in December 1776: defeats at Long Island, Fort Washington, Fort Lee; the retreat across New Jersey',
            'Washington\'s plan: three-column crossing, timing, objectives',
            'The conditions: nor\'easter, ice, darkness, exhausted troops',
            'The role of John Glover\'s Marblehead regiment and the Durham boats',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Map Exercise: Using a topographical map of the Delaware River crossing area, students trace the routes of the three columns and identify the challenges each faced',
            'Primary Source Analysis: Students read excerpts from soldiers\' diaries and letters describing the crossing and identify common themes (cold, fear, determination)',
            'Decision Tree: Students create a decision tree showing the choices Washington faced at key moments (to cross or not, to attack after losing surprise, to press on with only one column)',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Write a 250-word briefing paper from the perspective of one of Washington\'s staff officers, explaining to General Washington why the crossing should or should not proceed given the conditions. Use at least three specific historical details to support your recommendation.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Class discussion: How do we balance military necessity against human cost? Was Washington justified in ordering the crossing given the conditions his soldiers faced? Exit ticket: Identify one factor that made the crossing succeed and one that could have caused it to fail.',
        },
        differentiation: {
          struggling: 'Provide a pre-filled decision tree template with some choices already filled in. Offer sentence starters for the briefing paper.',
          advanced: 'Compare Washington\'s crossing to another famous military river crossing in history (e.g., Caesar crossing the Rubicon, D-Day beach landings). Write a comparison essay.',
          ell: 'Provide a visual glossary with images for key terms (Durham boat, nor\'easter, artillery, infantry). Use paired reading for primary sources.',
        },
      },
      standards: {
        commonCore: ['RH.9-10.1', 'RH.9-10.2', 'RH.9-10.7', 'WHST.9-10.1'],
        c3Framework: ['D2.His.1.9-12', 'D2.His.3.9-12', 'D2.His.5.9-12', 'D2.Geo.2.9-12'],
        note: 'Aligned to Common Core literacy standards for history/social studies and C3 Framework for historical thinking and geographic reasoning.',
      },
    },
  });

  await prisma.lessonPlan.upsert({
    where: { id: 'trenton-lesson-hessians' },
    update: {
      slug: 'hessian-soldiers-lesson',
      summary: 'Students examine the Hessian experience in the American Revolution — who they were, why they fought, and how their presence shaped the conflict — challenging the simplistic "mercenary" narrative with primary sources from Hessian soldiers and officers.',
      lessonData: {
        objectives: [
          'Explain why German states provided soldiers to the British Crown',
          'Analyze Hessian soldiers\' perspectives using primary source letters and diaries',
          'Evaluate the accuracy of the term "mercenary" as applied to Hessian soldiers',
          'Assess how the Hessian presence affected American public opinion and the Revolutionary cause',
        ],
        essentialQuestions: [
          'Were the Hessians mercenaries, or were they something more complex?',
          'How did Hessian soldiers experience the American Revolution?',
          'Why did the use of foreign soldiers anger American colonists?',
          'What happened to the Hessian prisoners captured at Trenton?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Ask students to write a definition of "mercenary." Then read the actual arrangements between the British Crown and the Landgrave of Hesse-Cassel. Were the Hessian soldiers mercenaries by the students\' definitions? Discuss the complexity of the term.',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'The system of subsidies: how German princes rented soldiers to foreign powers',
            'The Hessian soldiers: their training, discipline, equipment, and daily life',
            'The Hessian experience in America: language barriers, unfamiliar terrain, civilian hostility',
            'The Battle of Trenton from the Hessian perspective: the garrison, the occupation, the defeat',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Primary Source Workshop: Students read translated excerpts from Hessian soldiers\' letters home and identify themes of homesickness, confusion about the American cause, and observations about American society',
            'Role Reversal: Small groups present the events at Trenton from the perspective of a Hessian grenadier, a Hessian officer, and a Hessian musician',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Write a letter home from a captured Hessian soldier after the Battle of Trenton. The letter must include at least three historically accurate details about the battle, the capture, or the conditions of imprisonment. The letter should reflect the soldier\'s perspective without modern hindsight.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Discussion: Many captured Hessians eventually settled in America rather than returning to Germany. Why might they have made that choice? What does that tell us about the difference between soldiers and the governments they serve? Exit ticket: Was it fair for the Declaration of Independence to criticize King George for using "foreign mercenaries"?',
        },
        differentiation: {
          struggling: 'Provide a template for the letter with sentence starters. Pre-annotate primary sources with vocabulary definitions.',
          advanced: 'Research the "subsidy treaty" system and write an analytical essay comparing it to modern military contracting.',
          ell: 'Pair Hessian primary sources with visual aids (maps, illustrations of uniforms). Provide translated key phrases.',
        },
      },
      standards: {
        commonCore: ['RH.9-10.1', 'RH.9-10.6', 'RH.9-10.9', 'WHST.9-10.2'],
        c3Framework: ['D2.His.4.9-12', 'D2.His.6.9-12', 'D2.His.14.9-12'],
        note: 'Aligned to Common Core literacy standards and C3 Framework for multiple perspectives and sourcing.',
      },
    },
    create: {
      id: 'trenton-lesson-hessians',
      townId: TOWN_ID,
      title: 'The Hessians: Soldiers, Not Stereotypes',
      slug: 'hessian-soldiers-lesson',
      gradeRange: '9-12',
      estimatedDuration: '2 class periods',
      summary: 'Students examine the Hessian experience in the American Revolution — who they were, why they fought, and how their presence shaped the conflict — challenging the simplistic "mercenary" narrative with primary sources from Hessian soldiers and officers.',
      lessonData: {
        objectives: [
          'Explain why German states provided soldiers to the British Crown',
          'Analyze Hessian soldiers\' perspectives using primary source letters and diaries',
          'Evaluate the accuracy of the term "mercenary" as applied to Hessian soldiers',
          'Assess how the Hessian presence affected American public opinion and the Revolutionary cause',
        ],
        essentialQuestions: [
          'Were the Hessians mercenaries, or were they something more complex?',
          'How did Hessian soldiers experience the American Revolution?',
          'Why did the use of foreign soldiers anger American colonists?',
          'What happened to the Hessian prisoners captured at Trenton?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Ask students to write a definition of "mercenary." Then read the actual arrangements between the British Crown and the Landgrave of Hesse-Cassel. Were the Hessian soldiers mercenaries by the students\' definitions? Discuss the complexity of the term.',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'The system of subsidies: how German princes rented soldiers to foreign powers',
            'The Hessian soldiers: their training, discipline, equipment, and daily life',
            'The Hessian experience in America: language barriers, unfamiliar terrain, civilian hostility',
            'The Battle of Trenton from the Hessian perspective: the garrison, the occupation, the defeat',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Primary Source Workshop: Students read translated excerpts from Hessian soldiers\' letters home and identify themes of homesickness, confusion about the American cause, and observations about American society',
            'Role Reversal: Small groups present the events at Trenton from the perspective of a Hessian grenadier, a Hessian officer, and a Hessian musician',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Write a letter home from a captured Hessian soldier after the Battle of Trenton. The letter must include at least three historically accurate details about the battle, the capture, or the conditions of imprisonment. The letter should reflect the soldier\'s perspective without modern hindsight.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Discussion: Many captured Hessians eventually settled in America rather than returning to Germany. Why might they have made that choice? What does that tell us about the difference between soldiers and the governments they serve? Exit ticket: Was it fair for the Declaration of Independence to criticize King George for using "foreign mercenaries"?',
        },
        differentiation: {
          struggling: 'Provide a template for the letter with sentence starters. Pre-annotate primary sources with vocabulary definitions.',
          advanced: 'Research the "subsidy treaty" system and write an analytical essay comparing it to modern military contracting.',
          ell: 'Pair Hessian primary sources with visual aids (maps, illustrations of uniforms). Provide translated key phrases.',
        },
      },
      standards: {
        commonCore: ['RH.9-10.1', 'RH.9-10.6', 'RH.9-10.9', 'WHST.9-10.2'],
        c3Framework: ['D2.His.4.9-12', 'D2.His.6.9-12', 'D2.His.14.9-12'],
        note: 'Aligned to Common Core literacy standards and C3 Framework for multiple perspectives and sourcing.',
      },
    },
  });

  await prisma.lessonPlan.upsert({
    where: { id: 'trenton-lesson-turning-points' },
    update: {
      slug: 'turning-points-lesson',
      summary: 'Students evaluate whether the Battle of Trenton qualifies as a "turning point" in the American Revolution by defining criteria for turning points and applying them to the evidence, comparing Trenton to other candidates for this designation.',
      lessonData: {
        objectives: [
          'Define and apply criteria for identifying historical turning points',
          'Analyze the military, political, and psychological impact of the Battle of Trenton',
          'Compare Trenton to other events commonly identified as turning points in the Revolution',
          'Construct an evidence-based argument about historical significance',
        ],
        essentialQuestions: [
          'What makes an event a "turning point" rather than just an important event?',
          'Did the Battle of Trenton change the outcome of the Revolution, or would the Americans have won anyway?',
          'How do we measure the significance of a single battle within a longer war?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Ask students to identify a turning point in their own lives — a moment when things could have gone either way. What criteria did they use to identify it? As a class, develop a working definition of "turning point" with specific criteria (e.g., things were different before and after, the outcome was not inevitable, alternatives existed).',
        },
        directInstruction: {
          duration: '15 minutes',
          content: [
            'The state of the Revolution before Trenton: military defeats, political collapse, expiring enlistments',
            'What changed after Trenton: re-enlistments, restored morale, British withdrawal from most of New Jersey',
            'The counterfactual: what would likely have happened without the Trenton victory',
          ],
        },
        guidedPractice: {
          duration: '35 minutes',
          activities: [
            'Turning Point Criteria Application: Using the criteria developed in the warm-up, students work in pairs to evaluate whether Trenton meets each criterion, citing specific evidence',
            'Comparative Analysis: Groups are assigned one of three "turning point candidates" (Trenton, Saratoga, Yorktown) and prepare a three-minute argument for why their event was the true turning point',
            'Class Debate: Groups present their arguments and the class votes, then discusses what the exercise reveals about how we assign significance to historical events',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Write a 300-word argumentative paragraph taking a position on whether the Battle of Trenton was a turning point in the American Revolution. Your paragraph must include a claim, at least three pieces of evidence, and a counterargument that you address.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Reflection: Do all historians agree on what constitutes a turning point? Why might different historians emphasize different events? How does the concept of "turning point" simplify the complexity of historical causation? Exit ticket: Name one way Trenton changed the Revolution and one way it did not.',
        },
        differentiation: {
          struggling: 'Provide an evidence organizer with pre-selected quotes and facts. Offer a paragraph template with claim, evidence, and counterargument sections.',
          advanced: 'Write a full essay comparing Trenton and Saratoga as turning points, evaluating which had a greater long-term impact.',
          ell: 'Create a word wall with key vocabulary (turning point, counterfactual, morale, enlistment). Use graphic organizers for the comparative analysis.',
        },
      },
      standards: {
        commonCore: ['RH.9-10.1', 'RH.9-10.2', 'WHST.9-10.1', 'WHST.9-10.9'],
        c3Framework: ['D2.His.1.9-12', 'D2.His.2.9-12', 'D2.His.3.9-12', 'D2.His.14.9-12'],
        note: 'Aligned to Common Core argumentation standards and C3 Framework for historical causation and significance.',
      },
    },
    create: {
      id: 'trenton-lesson-turning-points',
      townId: TOWN_ID,
      title: 'Turning Point or Lucky Break? Evaluating the Battle of Trenton',
      slug: 'turning-points-lesson',
      gradeRange: '9-12',
      estimatedDuration: '2 class periods',
      summary: 'Students evaluate whether the Battle of Trenton qualifies as a "turning point" in the American Revolution by defining criteria for turning points and applying them to the evidence, comparing Trenton to other candidates for this designation.',
      lessonData: {
        objectives: [
          'Define and apply criteria for identifying historical turning points',
          'Analyze the military, political, and psychological impact of the Battle of Trenton',
          'Compare Trenton to other events commonly identified as turning points in the Revolution',
          'Construct an evidence-based argument about historical significance',
        ],
        essentialQuestions: [
          'What makes an event a "turning point" rather than just an important event?',
          'Did the Battle of Trenton change the outcome of the Revolution, or would the Americans have won anyway?',
          'How do we measure the significance of a single battle within a longer war?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Ask students to identify a turning point in their own lives — a moment when things could have gone either way. What criteria did they use to identify it? As a class, develop a working definition of "turning point" with specific criteria (e.g., things were different before and after, the outcome was not inevitable, alternatives existed).',
        },
        directInstruction: {
          duration: '15 minutes',
          content: [
            'The state of the Revolution before Trenton: military defeats, political collapse, expiring enlistments',
            'What changed after Trenton: re-enlistments, restored morale, British withdrawal from most of New Jersey',
            'The counterfactual: what would likely have happened without the Trenton victory',
          ],
        },
        guidedPractice: {
          duration: '35 minutes',
          activities: [
            'Turning Point Criteria Application: Using the criteria developed in the warm-up, students work in pairs to evaluate whether Trenton meets each criterion, citing specific evidence',
            'Comparative Analysis: Groups are assigned one of three "turning point candidates" (Trenton, Saratoga, Yorktown) and prepare a three-minute argument for why their event was the true turning point',
            'Class Debate: Groups present their arguments and the class votes, then discusses what the exercise reveals about how we assign significance to historical events',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Write a 300-word argumentative paragraph taking a position on whether the Battle of Trenton was a turning point in the American Revolution. Your paragraph must include a claim, at least three pieces of evidence, and a counterargument that you address.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Reflection: Do all historians agree on what constitutes a turning point? Why might different historians emphasize different events? How does the concept of "turning point" simplify the complexity of historical causation? Exit ticket: Name one way Trenton changed the Revolution and one way it did not.',
        },
        differentiation: {
          struggling: 'Provide an evidence organizer with pre-selected quotes and facts. Offer a paragraph template with claim, evidence, and counterargument sections.',
          advanced: 'Write a full essay comparing Trenton and Saratoga as turning points, evaluating which had a greater long-term impact.',
          ell: 'Create a word wall with key vocabulary (turning point, counterfactual, morale, enlistment). Use graphic organizers for the comparative analysis.',
        },
      },
      standards: {
        commonCore: ['RH.9-10.1', 'RH.9-10.2', 'WHST.9-10.1', 'WHST.9-10.9'],
        c3Framework: ['D2.His.1.9-12', 'D2.His.2.9-12', 'D2.His.3.9-12', 'D2.His.14.9-12'],
        note: 'Aligned to Common Core argumentation standards and C3 Framework for historical causation and significance.',
      },
    },
  });

  await prisma.lessonPlan.upsert({
    where: { id: 'trenton-lesson-slavery-revolution' },
    update: {
      slug: 'slavery-and-revolution-lesson',
      summary: 'Students examine the contradiction between the American Revolution\'s ideals of liberty and the reality of slavery in New Jersey, using Trenton as a case study to explore how enslaved people experienced the Revolution and how long it took for the promise of freedom to be extended to all.',
      lessonData: {
        objectives: [
          'Describe the conditions of slavery in Revolutionary-era New Jersey',
          'Analyze the gap between revolutionary rhetoric about liberty and the reality of slavery',
          'Trace the path from the Revolution to New Jersey\'s Gradual Emancipation Act of 1804',
          'Evaluate primary sources related to slavery and freedom in the revolutionary period',
        ],
        essentialQuestions: [
          'How did enslaved people in Trenton experience the Revolution?',
          'Why did a revolution fought for liberty fail to end slavery?',
          'How did enslaved people respond to the revolutionary rhetoric of freedom?',
          'Why was New Jersey the last northern state to adopt emancipation legislation?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Read the opening of the Declaration of Independence ("all men are created equal"). Then share the 1790 census data showing 11,000+ enslaved people in New Jersey. Ask students to write a response: How do you reconcile these two facts?',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'Slavery in New Jersey: numbers, legal status, types of labor, regional distribution',
            'Enslaved people in Trenton during the Revolution: domestic service, agricultural labor, proximity to the battle',
            'The Revolution\'s impact: British offers of freedom, Black soldiers in the Continental Army, the gap between rhetoric and reality',
            'The long road to emancipation: New Jersey\'s Gradual Emancipation Act of 1804 and its limitations',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Source Analysis: Students examine three documents — the Declaration of Independence, a New Jersey slave advertisement from the 1770s, and the text of the 1804 Gradual Emancipation Act — and identify the contradictions between them',
            'Timeline Construction: Students create a timeline from 1776 to 1865 showing the steps (and delays) in ending slavery in New Jersey, annotating each entry with a brief explanation',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Write a 300-word response to the question: "Was the American Revolution a revolution for everyone?" Use specific evidence from the lesson about slavery in New Jersey and the experience of enslaved people in Trenton to support your argument.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Class discussion: When we celebrate the Battle of Trenton, whose story are we telling? Whose story is being left out? How can we tell a more complete story without diminishing the significance of the battle? Exit ticket: Name one thing you learned today that changes how you think about the American Revolution.',
        },
        differentiation: {
          struggling: 'Provide a Venn diagram comparing revolutionary ideals and the reality of slavery. Offer a pre-organized evidence chart for the writing assignment.',
          advanced: 'Research the case of Colonel Tye, a formerly enslaved Black Loyalist who fought for the British in New Jersey, and write a profile of his experience.',
          ell: 'Provide simplified versions of primary source documents alongside originals. Create a visual timeline template with images.',
        },
      },
      standards: {
        commonCore: ['RH.9-10.1', 'RH.9-10.2', 'RH.9-10.6', 'WHST.9-10.1'],
        c3Framework: ['D2.His.1.9-12', 'D2.His.4.9-12', 'D2.His.5.9-12', 'D2.Civ.10.9-12'],
        note: 'Aligned to Common Core literacy standards and C3 Framework for civic ideals and practices.',
      },
    },
    create: {
      id: 'trenton-lesson-slavery-revolution',
      townId: TOWN_ID,
      title: 'Liberty for Whom? Slavery and the Revolution in New Jersey',
      slug: 'slavery-and-revolution-lesson',
      gradeRange: '8-12',
      estimatedDuration: '2 class periods',
      summary: 'Students examine the contradiction between the American Revolution\'s ideals of liberty and the reality of slavery in New Jersey, using Trenton as a case study to explore how enslaved people experienced the Revolution and how long it took for the promise of freedom to be extended to all.',
      lessonData: {
        objectives: [
          'Describe the conditions of slavery in Revolutionary-era New Jersey',
          'Analyze the gap between revolutionary rhetoric about liberty and the reality of slavery',
          'Trace the path from the Revolution to New Jersey\'s Gradual Emancipation Act of 1804',
          'Evaluate primary sources related to slavery and freedom in the revolutionary period',
        ],
        essentialQuestions: [
          'How did enslaved people in Trenton experience the Revolution?',
          'Why did a revolution fought for liberty fail to end slavery?',
          'How did enslaved people respond to the revolutionary rhetoric of freedom?',
          'Why was New Jersey the last northern state to adopt emancipation legislation?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Read the opening of the Declaration of Independence ("all men are created equal"). Then share the 1790 census data showing 11,000+ enslaved people in New Jersey. Ask students to write a response: How do you reconcile these two facts?',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'Slavery in New Jersey: numbers, legal status, types of labor, regional distribution',
            'Enslaved people in Trenton during the Revolution: domestic service, agricultural labor, proximity to the battle',
            'The Revolution\'s impact: British offers of freedom, Black soldiers in the Continental Army, the gap between rhetoric and reality',
            'The long road to emancipation: New Jersey\'s Gradual Emancipation Act of 1804 and its limitations',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Source Analysis: Students examine three documents — the Declaration of Independence, a New Jersey slave advertisement from the 1770s, and the text of the 1804 Gradual Emancipation Act — and identify the contradictions between them',
            'Timeline Construction: Students create a timeline from 1776 to 1865 showing the steps (and delays) in ending slavery in New Jersey, annotating each entry with a brief explanation',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Write a 300-word response to the question: "Was the American Revolution a revolution for everyone?" Use specific evidence from the lesson about slavery in New Jersey and the experience of enslaved people in Trenton to support your argument.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Class discussion: When we celebrate the Battle of Trenton, whose story are we telling? Whose story is being left out? How can we tell a more complete story without diminishing the significance of the battle? Exit ticket: Name one thing you learned today that changes how you think about the American Revolution.',
        },
        differentiation: {
          struggling: 'Provide a Venn diagram comparing revolutionary ideals and the reality of slavery. Offer a pre-organized evidence chart for the writing assignment.',
          advanced: 'Research the case of Colonel Tye, a formerly enslaved Black Loyalist who fought for the British in New Jersey, and write a profile of his experience.',
          ell: 'Provide simplified versions of primary source documents alongside originals. Create a visual timeline template with images.',
        },
      },
      standards: {
        commonCore: ['RH.9-10.1', 'RH.9-10.2', 'RH.9-10.6', 'WHST.9-10.1'],
        c3Framework: ['D2.His.1.9-12', 'D2.His.4.9-12', 'D2.His.5.9-12', 'D2.Civ.10.9-12'],
        note: 'Aligned to Common Core literacy standards and C3 Framework for civic ideals and practices.',
      },
    },
  });

  await prisma.lessonPlan.upsert({
    where: { id: 'trenton-lesson-ten-crucial-days' },
    update: {
      slug: 'ten-crucial-days-lesson',
      summary: 'Students trace the "Ten Crucial Days" from December 25, 1776, to January 3, 1777 — the crossing, the First Battle of Trenton, the re-enlistment crisis, the Second Battle of Trenton, and the Battle of Princeton — analyzing how a series of connected decisions and events saved the American Revolution.',
      lessonData: {
        objectives: [
          'Sequence the key events of the Ten Crucial Days campaign',
          'Analyze the connections between military decisions and political outcomes',
          'Evaluate Washington\'s leadership through the lens of adaptive decision-making',
          'Assess the cumulative impact of the campaign on the course of the war',
        ],
        essentialQuestions: [
          'How did Washington adapt his plans as circumstances changed during the Ten Crucial Days?',
          'What was the relationship between military victory and political survival during this period?',
          'Could any single event during the Ten Crucial Days have ended the Revolution?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Present students with a stripped-down timeline: Dec 25 = crossing, Dec 26 = Trenton, Jan 2 = Second Trenton, Jan 3 = Princeton. Ask: What do you think happened between these dates? Why did Washington keep fighting instead of resting after the first victory?',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'Day-by-day chronology of the Ten Crucial Days',
            'Washington\'s evolving strategy: from a single raid to a sustained campaign',
            'The re-enlistment crisis and its resolution',
            'The night march to Princeton: deception as a military tool',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Campaign Map: Students plot the movements of Washington\'s army on a map for each day of the campaign, tracking positions, battles, and marches',
            'What-If Analysis: Groups are assigned a specific moment in the campaign and analyze what would have happened if Washington had made a different decision (e.g., not re-crossing to NJ, not marching to Princeton)',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Choose one of the Ten Crucial Days and write a 250-word analysis of why that day was critical to the campaign\'s success. Explain what happened, what alternatives existed, and what the consequences of failure would have been.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Class synthesis: Each student shares their chosen day and the class builds a collective argument for which day was the single most crucial. Discuss: Is it possible to isolate one day, or do the Ten Crucial Days only work as a sequence? Exit ticket: Define "campaign" in military terms and explain why the Ten Crucial Days qualify.',
        },
        differentiation: {
          struggling: 'Provide a pre-drawn map template with key locations marked. Offer a structured organizer for the what-if analysis.',
          advanced: 'Compare the Ten Crucial Days to another famous short military campaign (e.g., the Six-Day War, the Hundred Days). Write a comparative analysis.',
          ell: 'Create a bilingual timeline with key events in both English and the student\'s home language. Use visual map exercises to reduce language barriers.',
        },
      },
      standards: {
        commonCore: ['RH.9-10.1', 'RH.9-10.2', 'RH.9-10.3', 'WHST.9-10.1'],
        c3Framework: ['D2.His.1.9-12', 'D2.His.2.9-12', 'D2.His.3.9-12', 'D2.Geo.2.9-12'],
        note: 'Aligned to Common Core standards for key ideas and details and C3 Framework for chronological reasoning and geographic reasoning.',
      },
    },
    create: {
      id: 'trenton-lesson-ten-crucial-days',
      townId: TOWN_ID,
      title: 'The Ten Crucial Days: From Desperation to Victory',
      slug: 'ten-crucial-days-lesson',
      gradeRange: '6-12 (adaptable)',
      estimatedDuration: '3-4 class periods',
      summary: 'Students trace the "Ten Crucial Days" from December 25, 1776, to January 3, 1777 — the crossing, the First Battle of Trenton, the re-enlistment crisis, the Second Battle of Trenton, and the Battle of Princeton — analyzing how a series of connected decisions and events saved the American Revolution.',
      lessonData: {
        objectives: [
          'Sequence the key events of the Ten Crucial Days campaign',
          'Analyze the connections between military decisions and political outcomes',
          'Evaluate Washington\'s leadership through the lens of adaptive decision-making',
          'Assess the cumulative impact of the campaign on the course of the war',
        ],
        essentialQuestions: [
          'How did Washington adapt his plans as circumstances changed during the Ten Crucial Days?',
          'What was the relationship between military victory and political survival during this period?',
          'Could any single event during the Ten Crucial Days have ended the Revolution?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Present students with a stripped-down timeline: Dec 25 = crossing, Dec 26 = Trenton, Jan 2 = Second Trenton, Jan 3 = Princeton. Ask: What do you think happened between these dates? Why did Washington keep fighting instead of resting after the first victory?',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'Day-by-day chronology of the Ten Crucial Days',
            'Washington\'s evolving strategy: from a single raid to a sustained campaign',
            'The re-enlistment crisis and its resolution',
            'The night march to Princeton: deception as a military tool',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Campaign Map: Students plot the movements of Washington\'s army on a map for each day of the campaign, tracking positions, battles, and marches',
            'What-If Analysis: Groups are assigned a specific moment in the campaign and analyze what would have happened if Washington had made a different decision (e.g., not re-crossing to NJ, not marching to Princeton)',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Choose one of the Ten Crucial Days and write a 250-word analysis of why that day was critical to the campaign\'s success. Explain what happened, what alternatives existed, and what the consequences of failure would have been.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Class synthesis: Each student shares their chosen day and the class builds a collective argument for which day was the single most crucial. Discuss: Is it possible to isolate one day, or do the Ten Crucial Days only work as a sequence? Exit ticket: Define "campaign" in military terms and explain why the Ten Crucial Days qualify.',
        },
        differentiation: {
          struggling: 'Provide a pre-drawn map template with key locations marked. Offer a structured organizer for the what-if analysis.',
          advanced: 'Compare the Ten Crucial Days to another famous short military campaign (e.g., the Six-Day War, the Hundred Days). Write a comparative analysis.',
          ell: 'Create a bilingual timeline with key events in both English and the student\'s home language. Use visual map exercises to reduce language barriers.',
        },
      },
      standards: {
        commonCore: ['RH.9-10.1', 'RH.9-10.2', 'RH.9-10.3', 'WHST.9-10.1'],
        c3Framework: ['D2.His.1.9-12', 'D2.His.2.9-12', 'D2.His.3.9-12', 'D2.Geo.2.9-12'],
        note: 'Aligned to Common Core standards for key ideas and details and C3 Framework for chronological reasoning and geographic reasoning.',
      },
    },
  });

  console.log('  Lesson plans seeded.');
}

// =============================================================================
// MAIN
// =============================================================================

async function main() {
  console.log('Seeding Trenton, NJ content...');

  await seedPeople();
  await seedPlaces();
  await seedEvents();
  await seedEventPeople();
  await seedStories();
  await seedLessons();

  console.log('Trenton, NJ content seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
