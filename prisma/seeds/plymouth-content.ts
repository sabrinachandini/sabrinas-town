import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const PLYMOUTH_TOWN_ID = 'us-ma-plymouth';

// =============================================================================
// PEOPLE
// =============================================================================

async function seedPeople() {
  console.log('  Seeding people...');

  await prisma.person.upsert({
    where: { id: 'person-plymouth-james-warren' },
    update: {
      bioLong: `James Warren was born on September 28, 1726, in Plymouth, Massachusetts, into one of the colony's most established families. His great-grandfather Richard Warren had arrived on the Mayflower in 1620, and the family had maintained a prominent position in Plymouth affairs for over a century. James graduated from Harvard College in 1745 and returned to Plymouth to manage the family farm in nearby Clifford (now part of East Freetown) while immersing himself in local politics. He served as a selectman of Plymouth and was elected to the Massachusetts General Court in 1766, where he quickly aligned himself with the patriot faction opposing British revenue measures.

Warren's political career accelerated in the crisis years of the 1770s. He was elected to the Massachusetts Provincial Congress when the colonial legislature reconstituted itself in defiance of the Massachusetts Government Act, and in 1775 he succeeded Dr. Joseph Warren (no relation) as president of that body following Joseph Warren's death at the Battle of Bunker Hill. As president of the Provincial Congress, James Warren bore responsibility for organizing Massachusetts's war effort during a period of extreme uncertainty, coordinating militia movements, supply procurement, and communications with the Continental Congress in Philadelphia. He served simultaneously as paymaster general of the Continental Army's forces in Massachusetts, a thankless position that required him to manage chronic shortages of funds and supplies.

Despite his considerable service, Warren's political career was marked by a stubborn independence that limited his advancement. He refused appointment to the Continental Navy Board in 1776, declined a commission as major general of militia, and clashed repeatedly with John Hancock and other Massachusetts leaders over questions of rank, precedent, and principle. His wife Mercy's sharp pen made additional enemies among the political establishment. By the 1780s, Warren had retreated from public life to his Plymouth farm, bitter at what he saw as the corruption and self-dealing of the new republic's leaders. He opposed the federal Constitution of 1787, believing it concentrated too much power in a distant central government. He died in Plymouth on November 28, 1808, largely forgotten by the nation he had helped create.

WHY HE MATTERS TO PLYMOUTH

James Warren was Plymouth's most consequential political leader during the American Revolution. As president of the Provincial Congress, he held the highest civilian office in rebel Massachusetts at a moment when the colony was effectively at war with the British Empire. He organized Plymouth's militia response to the Lexington Alarm, managed the logistical demands of siege warfare, and kept the machinery of colonial government running when it might easily have collapsed. His refusal to compromise his republican principles, even when it cost him political advancement, embodied the austere civic virtue that Plymouth's founders had claimed as their legacy. That he died in obscurity while more politically flexible men rose to fame and fortune is itself a commentary on the gap between revolutionary ideals and post-revolutionary reality.

- 1726: Born September 28 in Plymouth, Massachusetts
- 1766: Elected to the Massachusetts General Court
- 1775: Became president of the Massachusetts Provincial Congress after the death of Dr. Joseph Warren
- 1776: Served as paymaster general of Continental Army forces in Massachusetts
- 1808: Died November 28 in Plymouth, Massachusetts, at age 82

SOURCES
- Zagarri, Rosemarie. "A Woman's Dilemma: Mercy Otis Warren and the American Revolution." Wiley-Blackwell, 1995.
- Brown, Richard D. "Revolutionary Politics in Massachusetts: The Boston Committee of Correspondence and the Towns, 1772-1774." Harvard University Press, 1970.
- Massachusetts Historical Society. "Warren-Adams Letters, 1743-1814." 2 vols. Boston, 1917-1925.`,
    },
    create: {
      id: 'person-plymouth-james-warren',
      name: 'James Warren',
      roles: ['Politician', 'Farmer', 'President of Provincial Congress', 'Paymaster General'],
      bioShort: 'Plymouth politician (1726-1808) who served as president of the Massachusetts Provincial Congress and paymaster general of Continental Army forces, organizing the colony\'s war effort from Plymouth.',
      bioLong: `James Warren was born on September 28, 1726, in Plymouth, Massachusetts, into one of the colony's most established families. His great-grandfather Richard Warren had arrived on the Mayflower in 1620, and the family had maintained a prominent position in Plymouth affairs for over a century. James graduated from Harvard College in 1745 and returned to Plymouth to manage the family farm in nearby Clifford (now part of East Freetown) while immersing himself in local politics. He served as a selectman of Plymouth and was elected to the Massachusetts General Court in 1766, where he quickly aligned himself with the patriot faction opposing British revenue measures.

Warren's political career accelerated in the crisis years of the 1770s. He was elected to the Massachusetts Provincial Congress when the colonial legislature reconstituted itself in defiance of the Massachusetts Government Act, and in 1775 he succeeded Dr. Joseph Warren (no relation) as president of that body following Joseph Warren's death at the Battle of Bunker Hill. As president of the Provincial Congress, James Warren bore responsibility for organizing Massachusetts's war effort during a period of extreme uncertainty, coordinating militia movements, supply procurement, and communications with the Continental Congress in Philadelphia. He served simultaneously as paymaster general of the Continental Army's forces in Massachusetts, a thankless position that required him to manage chronic shortages of funds and supplies.

Despite his considerable service, Warren's political career was marked by a stubborn independence that limited his advancement. He refused appointment to the Continental Navy Board in 1776, declined a commission as major general of militia, and clashed repeatedly with John Hancock and other Massachusetts leaders over questions of rank, precedent, and principle. His wife Mercy's sharp pen made additional enemies among the political establishment. By the 1780s, Warren had retreated from public life to his Plymouth farm, bitter at what he saw as the corruption and self-dealing of the new republic's leaders. He opposed the federal Constitution of 1787, believing it concentrated too much power in a distant central government. He died in Plymouth on November 28, 1808, largely forgotten by the nation he had helped create.

WHY HE MATTERS TO PLYMOUTH

James Warren was Plymouth's most consequential political leader during the American Revolution. As president of the Provincial Congress, he held the highest civilian office in rebel Massachusetts at a moment when the colony was effectively at war with the British Empire. He organized Plymouth's militia response to the Lexington Alarm, managed the logistical demands of siege warfare, and kept the machinery of colonial government running when it might easily have collapsed. His refusal to compromise his republican principles, even when it cost him political advancement, embodied the austere civic virtue that Plymouth's founders had claimed as their legacy. That he died in obscurity while more politically flexible men rose to fame and fortune is itself a commentary on the gap between revolutionary ideals and post-revolutionary reality.

- 1726: Born September 28 in Plymouth, Massachusetts
- 1766: Elected to the Massachusetts General Court
- 1775: Became president of the Massachusetts Provincial Congress after the death of Dr. Joseph Warren
- 1776: Served as paymaster general of Continental Army forces in Massachusetts
- 1808: Died November 28 in Plymouth, Massachusetts, at age 82

SOURCES
- Zagarri, Rosemarie. "A Woman's Dilemma: Mercy Otis Warren and the American Revolution." Wiley-Blackwell, 1995.
- Brown, Richard D. "Revolutionary Politics in Massachusetts: The Boston Committee of Correspondence and the Towns, 1772-1774." Harvard University Press, 1970.
- Massachusetts Historical Society. "Warren-Adams Letters, 1743-1814." 2 vols. Boston, 1917-1925.`,
      birthYear: 1726,
      deathYear: 1808,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-plymouth-mercy-otis-warren' },
    update: {
      bioLong: `Mercy Otis Warren was born on September 14, 1728, in Barnstable, Massachusetts, the third of thirteen children of Colonel James Otis Sr. and Mary Allyne Otis. Her father was a prominent attorney, judge, and political figure on Cape Cod, and her brother James Otis Jr. would become one of the earliest and most vocal opponents of British authority in Massachusetts. Though girls of her era were denied formal schooling, Mercy was permitted to study alongside her brother James under the tutelage of their uncle, Reverend Jonathan Russell, where she absorbed classical literature, philosophy, and history. In 1754, at the age of twenty-six, she married James Warren of Plymouth, a Harvard-educated farmer and politician descended from Mayflower passenger Richard Warren.

The Warren home in Plymouth became one of the most important political salons in revolutionary Massachusetts. Mercy and James hosted Samuel Adams, John Adams, Abigail Adams, John Hancock, and other patriot leaders who traveled the road between Boston and the South Shore. Their dinner table was a place where political strategy was debated, alliances were formed, and the case for resistance was refined. Mercy's position in Plymouth gave her a vantage point distinct from that of the Boston radicals: she understood the revolution not only as a crisis of urban merchants and artisans but as a movement rooted in the town meeting traditions and covenant theology of the small communities that formed the backbone of Massachusetts.

Between 1772 and 1775, Warren published a series of satirical plays that attacked the royal government with devastating wit. "The Adulateur" (1772) and "The Defeat" (1773) caricatured Governor Thomas Hutchinson and the Loyalist establishment, while "The Group" (1775) savaged the mandamus councillors appointed under the Massachusetts Government Act. These works were published anonymously or under pseudonyms in Boston newspapers and pamphlets, and they circulated widely throughout the colonies. Warren also maintained an extensive political correspondence with Abigail Adams, John Adams, and other leaders, and her letters reveal a mind that was incisive, independent, and unsparing in its judgments.

After the war, Warren devoted herself to her most ambitious project: a comprehensive history of the American Revolution. Published in 1805 as "History of the Rise, Progress and Termination of the American Revolution," the three-volume work was the only contemporaneous history written by someone who had been an active participant in the events described. The work provoked a bitter and public quarrel with John Adams, who objected to Warren's characterization of his political vanity and monarchical tendencies. The friendship was eventually repaired, but the dispute revealed the deep fault lines within the revolutionary generation over the meaning of their own revolution. Warren died in Plymouth on October 19, 1814, at the age of eighty-six.

WHY SHE MATTERS TO PLYMOUTH

Mercy Otis Warren was Plymouth's most important intellectual voice during the Revolution. While her husband James held political and military office, Mercy wielded influence through the written word, producing propaganda, political commentary, and ultimately the most comprehensive insider history of the revolutionary period. Her Plymouth home was where much of the revolution's strategy was debated and refined, and her perspective was shaped by Plymouth's distinct identity as a community that traced its political traditions back to the Mayflower Compact of 1620. She understood the Revolution as a continuation of that compact tradition — a reassertion of the right of communities to govern themselves by consent. Her history ensured that Plymouth's role in the revolutionary story would not be forgotten, and her career demonstrated that women could shape the political destiny of a nation even when barred from formal participation.

- 1728: Born September 14 in Barnstable, Massachusetts
- 1754: Married James Warren of Plymouth
- 1772: Published "The Adulateur," satirizing Governor Hutchinson
- 1775: Published "The Group," attacking Loyalist politicians
- 1805: Published three-volume "History of the Rise, Progress and Termination of the American Revolution"
- 1814: Died October 19 in Plymouth, Massachusetts, at age 86

SOURCES
- Zagarri, Rosemarie. "A Woman's Dilemma: Mercy Otis Warren and the American Revolution." Wiley-Blackwell, 1995.
- Richards, Jeffrey H. "Mercy Otis Warren." Twayne Publishers, 1995.
- Stuart, Nancy Rubin. "The Muse of the Revolution: The Secret Pen of Mercy Otis Warren and the Founding of a Nation." Beacon Press, 2008.`,
    },
    create: {
      id: 'person-plymouth-mercy-otis-warren',
      name: 'Mercy Otis Warren',
      roles: ['Political Writer', 'Historian', 'Satirist', 'Poet'],
      bioShort: 'Political writer and historian (1728-1814) who authored satirical plays against British authority and wrote the only contemporary insider history of the American Revolution, all from her home in Plymouth.',
      bioLong: `Mercy Otis Warren was born on September 14, 1728, in Barnstable, Massachusetts, the third of thirteen children of Colonel James Otis Sr. and Mary Allyne Otis. Her father was a prominent attorney, judge, and political figure on Cape Cod, and her brother James Otis Jr. would become one of the earliest and most vocal opponents of British authority in Massachusetts. Though girls of her era were denied formal schooling, Mercy was permitted to study alongside her brother James under the tutelage of their uncle, Reverend Jonathan Russell, where she absorbed classical literature, philosophy, and history. In 1754, at the age of twenty-six, she married James Warren of Plymouth, a Harvard-educated farmer and politician descended from Mayflower passenger Richard Warren.

The Warren home in Plymouth became one of the most important political salons in revolutionary Massachusetts. Mercy and James hosted Samuel Adams, John Adams, Abigail Adams, John Hancock, and other patriot leaders who traveled the road between Boston and the South Shore. Their dinner table was a place where political strategy was debated, alliances were formed, and the case for resistance was refined. Mercy's position in Plymouth gave her a vantage point distinct from that of the Boston radicals: she understood the revolution not only as a crisis of urban merchants and artisans but as a movement rooted in the town meeting traditions and covenant theology of the small communities that formed the backbone of Massachusetts.

Between 1772 and 1775, Warren published a series of satirical plays that attacked the royal government with devastating wit. "The Adulateur" (1772) and "The Defeat" (1773) caricatured Governor Thomas Hutchinson and the Loyalist establishment, while "The Group" (1775) savaged the mandamus councillors appointed under the Massachusetts Government Act. These works were published anonymously or under pseudonyms in Boston newspapers and pamphlets, and they circulated widely throughout the colonies. Warren also maintained an extensive political correspondence with Abigail Adams, John Adams, and other leaders, and her letters reveal a mind that was incisive, independent, and unsparing in its judgments.

After the war, Warren devoted herself to her most ambitious project: a comprehensive history of the American Revolution. Published in 1805 as "History of the Rise, Progress and Termination of the American Revolution," the three-volume work was the only contemporaneous history written by someone who had been an active participant in the events described. The work provoked a bitter and public quarrel with John Adams, who objected to Warren's characterization of his political vanity and monarchical tendencies. The friendship was eventually repaired, but the dispute revealed the deep fault lines within the revolutionary generation over the meaning of their own revolution. Warren died in Plymouth on October 19, 1814, at the age of eighty-six.

WHY SHE MATTERS TO PLYMOUTH

Mercy Otis Warren was Plymouth's most important intellectual voice during the Revolution. While her husband James held political and military office, Mercy wielded influence through the written word, producing propaganda, political commentary, and ultimately the most comprehensive insider history of the revolutionary period. Her Plymouth home was where much of the revolution's strategy was debated and refined, and her perspective was shaped by Plymouth's distinct identity as a community that traced its political traditions back to the Mayflower Compact of 1620. She understood the Revolution as a continuation of that compact tradition — a reassertion of the right of communities to govern themselves by consent. Her history ensured that Plymouth's role in the revolutionary story would not be forgotten, and her career demonstrated that women could shape the political destiny of a nation even when barred from formal participation.

- 1728: Born September 14 in Barnstable, Massachusetts
- 1754: Married James Warren of Plymouth
- 1772: Published "The Adulateur," satirizing Governor Hutchinson
- 1775: Published "The Group," attacking Loyalist politicians
- 1805: Published three-volume "History of the Rise, Progress and Termination of the American Revolution"
- 1814: Died October 19 in Plymouth, Massachusetts, at age 86

SOURCES
- Zagarri, Rosemarie. "A Woman's Dilemma: Mercy Otis Warren and the American Revolution." Wiley-Blackwell, 1995.
- Richards, Jeffrey H. "Mercy Otis Warren." Twayne Publishers, 1995.
- Stuart, Nancy Rubin. "The Muse of the Revolution: The Secret Pen of Mercy Otis Warren and the Founding of a Nation." Beacon Press, 2008.`,
      birthYear: 1728,
      deathYear: 1814,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-plymouth-edward-winslow-jr' },
    update: {
      bioLong: `Edward Winslow Jr. was born in 1746 in Plymouth, Massachusetts, into what was arguably the town's most distinguished family. He was a direct descendant of Edward Winslow, who had arrived on the Mayflower in 1620 and served three times as governor of Plymouth Colony. The Winslow family had occupied positions of prominence in Plymouth for over a century, and young Edward inherited both the family name and the expectation of public service. He graduated from Harvard College in 1765 and studied law, establishing a practice in Plymouth that served the county's mercantile and landowning elite.

As the political crisis between the colonies and Britain intensified in the early 1770s, Winslow found himself increasingly at odds with the prevailing sentiment in Plymouth. He was appointed as a mandamus councillor under the Massachusetts Government Act of 1774, one of the crown-appointed officials who were to replace the elected council. This appointment placed him squarely in the Loyalist camp. When patriot mobs began forcing mandamus councillors to resign throughout Massachusetts, Winslow came under intense pressure. Crowds gathered at his Plymouth home, and threats were made against his person and property.

Winslow ultimately chose loyalty to the crown over the revolutionary cause that most of his Plymouth neighbors embraced. He departed Plymouth for Boston and eventually evacuated to Halifax, Nova Scotia, with the British forces in March 1776. From Halifax, he moved to New York, where he served as muster master general of Loyalist forces, responsible for organizing and supplying the Provincial regiments that fought alongside the British army. After the war, Winslow settled in New Brunswick, Canada, where he became one of the leading figures in the new Loyalist colony, serving on the provincial council and helping to establish the institutions of what he and his fellow exiles hoped would be a more orderly and loyal version of the society they had lost.

WHY HE MATTERS TO PLYMOUTH

Edward Winslow Jr. represents the human cost of revolution within a community. His family's roots in Plymouth were as deep as any — deeper than most of the patriots who drove him out. His departure illustrated that the Revolution was not simply a contest between Americans and Britons but a civil war that divided towns, congregations, and families. The Winslow family's exile from Plymouth severed a connection that stretched back to the Mayflower itself, demonstrating that even the most ancient lineages offered no protection from the political storms of the 1770s. His story complicates the simple narrative of unanimous patriot resistance and reminds us that Plymouth's revolutionary generation included people who believed, sincerely, that loyalty to the established order was the more honorable course.

- 1746: Born in Plymouth, Massachusetts
- 1765: Graduated from Harvard College
- 1774: Appointed mandamus councillor under the Massachusetts Government Act
- 1776: Evacuated from Boston to Halifax with British forces
- 1815: Died in Fredericton, New Brunswick, Canada

SOURCES
- Jasanoff, Maya. "Liberty's Exiles: American Loyalists in the Revolutionary World." Alfred A. Knopf, 2011.
- Winslow, D. Kenelm. "Mayflower Heritage." Mayflower Families Through Five Generations, Vol. 18. General Society of Mayflower Descendants, 1997.
- Wright, Esmond. "The Loyalists of Massachusetts and the Other Side of the American Revolution." Macmillan, 1965.`,
    },
    create: {
      id: 'person-plymouth-edward-winslow-jr',
      name: 'Edward Winslow Jr.',
      roles: ['Loyalist', 'Lawyer', 'Mandamus Councillor', 'Muster Master General'],
      bioShort: 'Plymouth Loyalist (1746-1815) descended from Mayflower passengers, who served as a mandamus councillor and was driven from his ancestral home, eventually helping to found Loyalist New Brunswick.',
      bioLong: `Edward Winslow Jr. was born in 1746 in Plymouth, Massachusetts, into what was arguably the town's most distinguished family. He was a direct descendant of Edward Winslow, who had arrived on the Mayflower in 1620 and served three times as governor of Plymouth Colony. The Winslow family had occupied positions of prominence in Plymouth for over a century, and young Edward inherited both the family name and the expectation of public service. He graduated from Harvard College in 1765 and studied law, establishing a practice in Plymouth that served the county's mercantile and landowning elite.

As the political crisis between the colonies and Britain intensified in the early 1770s, Winslow found himself increasingly at odds with the prevailing sentiment in Plymouth. He was appointed as a mandamus councillor under the Massachusetts Government Act of 1774, one of the crown-appointed officials who were to replace the elected council. This appointment placed him squarely in the Loyalist camp. When patriot mobs began forcing mandamus councillors to resign throughout Massachusetts, Winslow came under intense pressure. Crowds gathered at his Plymouth home, and threats were made against his person and property.

Winslow ultimately chose loyalty to the crown over the revolutionary cause that most of his Plymouth neighbors embraced. He departed Plymouth for Boston and eventually evacuated to Halifax, Nova Scotia, with the British forces in March 1776. From Halifax, he moved to New York, where he served as muster master general of Loyalist forces, responsible for organizing and supplying the Provincial regiments that fought alongside the British army. After the war, Winslow settled in New Brunswick, Canada, where he became one of the leading figures in the new Loyalist colony, serving on the provincial council and helping to establish the institutions of what he and his fellow exiles hoped would be a more orderly and loyal version of the society they had lost.

WHY HE MATTERS TO PLYMOUTH

Edward Winslow Jr. represents the human cost of revolution within a community. His family's roots in Plymouth were as deep as any — deeper than most of the patriots who drove him out. His departure illustrated that the Revolution was not simply a contest between Americans and Britons but a civil war that divided towns, congregations, and families. The Winslow family's exile from Plymouth severed a connection that stretched back to the Mayflower itself, demonstrating that even the most ancient lineages offered no protection from the political storms of the 1770s. His story complicates the simple narrative of unanimous patriot resistance and reminds us that Plymouth's revolutionary generation included people who believed, sincerely, that loyalty to the established order was the more honorable course.

- 1746: Born in Plymouth, Massachusetts
- 1765: Graduated from Harvard College
- 1774: Appointed mandamus councillor under the Massachusetts Government Act
- 1776: Evacuated from Boston to Halifax with British forces
- 1815: Died in Fredericton, New Brunswick, Canada

SOURCES
- Jasanoff, Maya. "Liberty's Exiles: American Loyalists in the Revolutionary World." Alfred A. Knopf, 2011.
- Winslow, D. Kenelm. "Mayflower Heritage." Mayflower Families Through Five Generations, Vol. 18. General Society of Mayflower Descendants, 1997.
- Wright, Esmond. "The Loyalists of Massachusetts and the Other Side of the American Revolution." Macmillan, 1965.`,
      birthYear: 1746,
      deathYear: 1815,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-plymouth-theophilus-cotton' },
    update: {
      bioLong: `Theophilus Cotton was born in 1737 in Plymouth, Massachusetts, into a family with deep roots in the colony's religious life. He was a descendant of the prominent Cotton clerical dynasty of Massachusetts, which included the influential ministers John Cotton and Cotton Mather. Theophilus was educated at Harvard College, graduating in 1759, and was ordained as a Congregational minister. He served as pastor of a church in Plymouth County, where he combined his pastoral duties with an increasingly active role in the patriot cause.

Cotton's significance lies in the role he played as a bridge between Plymouth's religious traditions and its revolutionary politics. In the Congregational churches of New England, the minister occupied a position of enormous cultural authority, and Cotton used his pulpit to frame resistance to British authority in explicitly theological terms. He preached that tyranny was a sin against the covenant between God and his people, that the duty to resist unjust authority was grounded in Scripture, and that the liberties the colonists defended were not merely political rights but divine endowments. This theology of resistance had deep roots in Plymouth's Separatist and Pilgrim heritage, and Cotton's sermons connected the revolutionary struggle of the 1770s to the original vision of the Plymouth settlers.

Cotton served on Plymouth's Committee of Correspondence and was active in organizing local support for the patriot cause. He participated in the Provincial Congress and used his network of ministerial contacts throughout Plymouth County to coordinate resistance activities. When the war began, he served as a chaplain to militia forces, ministering to soldiers from Plymouth and the surrounding towns. His combination of spiritual authority and political activism made him one of the most effective mobilizers of patriot sentiment in the Plymouth region.

WHY HE MATTERS TO PLYMOUTH

Theophilus Cotton represented the fusion of religious conviction and political resistance that was central to Plymouth's revolutionary identity. In a community that traced its origins to the Pilgrim Separatists of 1620, the minister's endorsement of revolution carried unique weight. Cotton's preaching helped Plymouth's residents understand the Revolution not as a break with their traditions but as a fulfillment of them — a reassertion of the covenant principles on which their community had been founded. His role illustrates how the American Revolution in small New England towns was driven not only by economic grievances and political theory but by a theological conviction that liberty was sacred and that defending it was a Christian duty.

- 1737: Born in Plymouth, Massachusetts
- 1759: Graduated from Harvard College
- 1772: Active on Plymouth's Committee of Correspondence
- 1774: Participated in the Massachusetts Provincial Congress
- 1775: Served as chaplain to Plymouth County militia forces
- 1808: Died in Plymouth, Massachusetts

SOURCES
- Stout, Harry S. "The New England Soul: Preaching and Religious Culture in Colonial New England." Oxford University Press, 1986.
- Shipton, Clifford K. "Sibley's Harvard Graduates." Vol. 14. Massachusetts Historical Society, 1968.
- Thacher, James. "History of the Town of Plymouth, from its First Settlement in 1620, to the Present Time." Marsh, Capen & Lyon, 1835.`,
    },
    create: {
      id: 'person-plymouth-theophilus-cotton',
      name: 'Theophilus Cotton',
      roles: ['Clergyman', 'Patriot', 'Chaplain', 'Committee of Correspondence Member'],
      bioShort: 'Plymouth Congregational minister (1737-1808) who used his pulpit to frame resistance to British authority in theological terms and served on Plymouth\'s Committee of Correspondence and as militia chaplain.',
      bioLong: `Theophilus Cotton was born in 1737 in Plymouth, Massachusetts, into a family with deep roots in the colony's religious life. He was a descendant of the prominent Cotton clerical dynasty of Massachusetts, which included the influential ministers John Cotton and Cotton Mather. Theophilus was educated at Harvard College, graduating in 1759, and was ordained as a Congregational minister. He served as pastor of a church in Plymouth County, where he combined his pastoral duties with an increasingly active role in the patriot cause.

Cotton's significance lies in the role he played as a bridge between Plymouth's religious traditions and its revolutionary politics. In the Congregational churches of New England, the minister occupied a position of enormous cultural authority, and Cotton used his pulpit to frame resistance to British authority in explicitly theological terms. He preached that tyranny was a sin against the covenant between God and his people, that the duty to resist unjust authority was grounded in Scripture, and that the liberties the colonists defended were not merely political rights but divine endowments. This theology of resistance had deep roots in Plymouth's Separatist and Pilgrim heritage, and Cotton's sermons connected the revolutionary struggle of the 1770s to the original vision of the Plymouth settlers.

Cotton served on Plymouth's Committee of Correspondence and was active in organizing local support for the patriot cause. He participated in the Provincial Congress and used his network of ministerial contacts throughout Plymouth County to coordinate resistance activities. When the war began, he served as a chaplain to militia forces, ministering to soldiers from Plymouth and the surrounding towns. His combination of spiritual authority and political activism made him one of the most effective mobilizers of patriot sentiment in the Plymouth region.

WHY HE MATTERS TO PLYMOUTH

Theophilus Cotton represented the fusion of religious conviction and political resistance that was central to Plymouth's revolutionary identity. In a community that traced its origins to the Pilgrim Separatists of 1620, the minister's endorsement of revolution carried unique weight. Cotton's preaching helped Plymouth's residents understand the Revolution not as a break with their traditions but as a fulfillment of them — a reassertion of the covenant principles on which their community had been founded. His role illustrates how the American Revolution in small New England towns was driven not only by economic grievances and political theory but by a theological conviction that liberty was sacred and that defending it was a Christian duty.

- 1737: Born in Plymouth, Massachusetts
- 1759: Graduated from Harvard College
- 1772: Active on Plymouth's Committee of Correspondence
- 1774: Participated in the Massachusetts Provincial Congress
- 1775: Served as chaplain to Plymouth County militia forces
- 1808: Died in Plymouth, Massachusetts

SOURCES
- Stout, Harry S. "The New England Soul: Preaching and Religious Culture in Colonial New England." Oxford University Press, 1986.
- Shipton, Clifford K. "Sibley's Harvard Graduates." Vol. 14. Massachusetts Historical Society, 1968.
- Thacher, James. "History of the Town of Plymouth, from its First Settlement in 1620, to the Present Time." Marsh, Capen & Lyon, 1835.`,
      birthYear: 1737,
      deathYear: 1808,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-plymouth-nathaniel-goodwin' },
    update: {
      bioLong: `Nathaniel Goodwin was born around 1725 in Plymouth, Massachusetts. He was a farmer and local officeholder whose family had been settled in the Plymouth area since the early colonial period. Like many men of his generation in Plymouth, Goodwin participated in town affairs as a selectman before the revolutionary crisis drew him into more consequential political roles. He was a practical, community-minded man rather than a political theorist, and his service during the Revolution reflects the essential role played by local leaders who translated the grand ideals of the patriot cause into the daily work of governance and defense.

Goodwin's most significant contribution came through his service on Plymouth's Committee of Safety, the body responsible for coordinating the town's defensive preparations and maintaining order during the turbulent period between the passage of the Coercive Acts in 1774 and the outbreak of fighting in April 1775. The Committee of Safety was the executive arm of the patriot movement at the local level, charged with organizing militia musters, stockpiling arms and ammunition, identifying and monitoring Loyalist sympathizers, and ensuring that the resolutions of the Provincial Congress were carried out. Goodwin served as one of the committee's most active members, attending meetings regularly and taking on the logistical work of preparing Plymouth for the possibility of armed conflict.

When the Lexington Alarm reached Plymouth on April 19, 1775, Goodwin was among those who helped organize the town's militia response. Plymouth's minutemen and militia companies mobilized rapidly and marched toward Boston, joining the thousands of men from across eastern Massachusetts who converged on the Cambridge area to lay siege to the British garrison. Goodwin continued to serve on local committees throughout the war, managing supply requisitions and coordinating Plymouth's contributions to the Continental Army.

WHY HE MATTERS TO PLYMOUTH

Nathaniel Goodwin represents the broad middle layer of the American Revolution — the local committeemen, selectmen, and militia organizers who made the revolution function at the community level. While the Warrens provided intellectual and political leadership, men like Goodwin provided the organizational sinew that held Plymouth's patriot effort together. His service on the Committee of Safety meant that he bore direct responsibility for the security and preparedness of his community during a period of genuine danger, and he discharged that responsibility with steady competence. His story is the story of hundreds of Plymouth men whose contributions were indispensable but rarely recorded.

- c.1725: Born in Plymouth, Massachusetts
- 1774: Appointed to Plymouth's Committee of Safety
- 1775: Helped organize Plymouth's militia response to the Lexington Alarm
- 1776-1783: Continued service on local patriot committees throughout the war
- c.1800: Died in Plymouth, Massachusetts

SOURCES
- Thacher, James. "History of the Town of Plymouth, from its First Settlement in 1620, to the Present Time." Marsh, Capen & Lyon, 1835.
- Brown, Richard D. "Revolutionary Politics in Massachusetts: The Boston Committee of Correspondence and the Towns, 1772-1774." Harvard University Press, 1970.
- Plymouth County Registry of Deeds and Probate Records. Various entries, 1760-1800.`,
    },
    create: {
      id: 'person-plymouth-nathaniel-goodwin',
      name: 'Nathaniel Goodwin',
      roles: ['Farmer', 'Committee of Safety Member', 'Selectman'],
      bioShort: 'Plymouth farmer and local officeholder (c.1725-c.1800) who served on the Committee of Safety, organizing the town\'s defensive preparations and militia response during the Revolution.',
      bioLong: `Nathaniel Goodwin was born around 1725 in Plymouth, Massachusetts. He was a farmer and local officeholder whose family had been settled in the Plymouth area since the early colonial period. Like many men of his generation in Plymouth, Goodwin participated in town affairs as a selectman before the revolutionary crisis drew him into more consequential political roles. He was a practical, community-minded man rather than a political theorist, and his service during the Revolution reflects the essential role played by local leaders who translated the grand ideals of the patriot cause into the daily work of governance and defense.

Goodwin's most significant contribution came through his service on Plymouth's Committee of Safety, the body responsible for coordinating the town's defensive preparations and maintaining order during the turbulent period between the passage of the Coercive Acts in 1774 and the outbreak of fighting in April 1775. The Committee of Safety was the executive arm of the patriot movement at the local level, charged with organizing militia musters, stockpiling arms and ammunition, identifying and monitoring Loyalist sympathizers, and ensuring that the resolutions of the Provincial Congress were carried out. Goodwin served as one of the committee's most active members, attending meetings regularly and taking on the logistical work of preparing Plymouth for the possibility of armed conflict.

When the Lexington Alarm reached Plymouth on April 19, 1775, Goodwin was among those who helped organize the town's militia response. Plymouth's minutemen and militia companies mobilized rapidly and marched toward Boston, joining the thousands of men from across eastern Massachusetts who converged on the Cambridge area to lay siege to the British garrison. Goodwin continued to serve on local committees throughout the war, managing supply requisitions and coordinating Plymouth's contributions to the Continental Army.

WHY HE MATTERS TO PLYMOUTH

Nathaniel Goodwin represents the broad middle layer of the American Revolution — the local committeemen, selectmen, and militia organizers who made the revolution function at the community level. While the Warrens provided intellectual and political leadership, men like Goodwin provided the organizational sinew that held Plymouth's patriot effort together. His service on the Committee of Safety meant that he bore direct responsibility for the security and preparedness of his community during a period of genuine danger, and he discharged that responsibility with steady competence. His story is the story of hundreds of Plymouth men whose contributions were indispensable but rarely recorded.

- c.1725: Born in Plymouth, Massachusetts
- 1774: Appointed to Plymouth's Committee of Safety
- 1775: Helped organize Plymouth's militia response to the Lexington Alarm
- 1776-1783: Continued service on local patriot committees throughout the war
- c.1800: Died in Plymouth, Massachusetts

SOURCES
- Thacher, James. "History of the Town of Plymouth, from its First Settlement in 1620, to the Present Time." Marsh, Capen & Lyon, 1835.
- Brown, Richard D. "Revolutionary Politics in Massachusetts: The Boston Committee of Correspondence and the Towns, 1772-1774." Harvard University Press, 1970.
- Plymouth County Registry of Deeds and Probate Records. Various entries, 1760-1800.`,
      birthYear: 1725,
      deathYear: 1800,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-plymouth-george-watson' },
    update: {
      bioLong: `George Watson was born around 1718 in Plymouth, Massachusetts, into one of the town's leading mercantile families. The Watsons had been established in Plymouth since the late seventeenth century and had built their fortune through coastal trade, shipbuilding, and the general commerce that sustained Plymouth as a minor port. George Watson expanded the family business through trade connections along the New England coast and with the West Indies, becoming one of Plymouth's wealthiest and most respected citizens. He served repeatedly as a selectman and represented Plymouth in the Massachusetts General Court.

Watson's political significance grew as the crisis with Britain deepened. He was appointed to Plymouth's Committee of Correspondence in 1772, when committees were being established throughout Massachusetts at the urging of Samuel Adams's Boston Committee. The Committee of Correspondence served as the nervous system of the patriot movement, allowing towns to coordinate their responses to British actions and to present a united front. Watson's prominence as a merchant gave the Plymouth committee credibility with the town's business community, and his participation signaled that resistance to British authority was not merely the project of hotheads and agitators but had the support of Plymouth's economic establishment.

Watson also served on the Committee of Safety and was active in organizing Plymouth's contributions to the war effort after 1775. His merchant connections proved valuable in procuring supplies for militia forces, and his financial resources helped sustain Plymouth's war contributions during the lean years when hard currency was scarce and the Continental dollar was depreciating rapidly. Watson's willingness to commit his personal wealth and business reputation to the patriot cause reflected a pattern seen throughout New England: the revolution succeeded in part because established men of property were willing to risk everything for the principle of self-governance.

WHY HE MATTERS TO PLYMOUTH

George Watson demonstrated that Plymouth's revolution was not driven solely by ideologues and agitators but had the support of the town's mercantile class. His participation on the Committees of Correspondence and Safety gave those bodies the weight of Plymouth's business establishment. His willingness to use his commercial networks for the patriot cause showed that the revolution required not only political courage but economic sacrifice. Watson's story illustrates the breadth of the revolutionary coalition in Plymouth, which united ministers, farmers, politicians, and merchants in common cause.

- c.1718: Born in Plymouth, Massachusetts
- 1772: Appointed to Plymouth's Committee of Correspondence
- 1774: Served on Plymouth's Committee of Safety
- 1775-1783: Active in organizing war supplies and financial contributions
- c.1800: Died in Plymouth, Massachusetts

SOURCES
- Thacher, James. "History of the Town of Plymouth, from its First Settlement in 1620, to the Present Time." Marsh, Capen & Lyon, 1835.
- Brown, Richard D. "Revolutionary Politics in Massachusetts: The Boston Committee of Correspondence and the Towns, 1772-1774." Harvard University Press, 1970.
- Davis, William T. "Ancient Landmarks of Plymouth." A. Williams and Co., 1883.`,
    },
    create: {
      id: 'person-plymouth-george-watson',
      name: 'George Watson',
      roles: ['Merchant', 'Committee of Correspondence Member', 'Committee of Safety Member', 'Selectman'],
      bioShort: 'Plymouth merchant (c.1718-c.1800) who served on the Committees of Correspondence and Safety, lending the weight of the town\'s business establishment to the patriot cause.',
      bioLong: `George Watson was born around 1718 in Plymouth, Massachusetts, into one of the town's leading mercantile families. The Watsons had been established in Plymouth since the late seventeenth century and had built their fortune through coastal trade, shipbuilding, and the general commerce that sustained Plymouth as a minor port. George Watson expanded the family business through trade connections along the New England coast and with the West Indies, becoming one of Plymouth's wealthiest and most respected citizens. He served repeatedly as a selectman and represented Plymouth in the Massachusetts General Court.

Watson's political significance grew as the crisis with Britain deepened. He was appointed to Plymouth's Committee of Correspondence in 1772, when committees were being established throughout Massachusetts at the urging of Samuel Adams's Boston Committee. The Committee of Correspondence served as the nervous system of the patriot movement, allowing towns to coordinate their responses to British actions and to present a united front. Watson's prominence as a merchant gave the Plymouth committee credibility with the town's business community, and his participation signaled that resistance to British authority was not merely the project of hotheads and agitators but had the support of Plymouth's economic establishment.

Watson also served on the Committee of Safety and was active in organizing Plymouth's contributions to the war effort after 1775. His merchant connections proved valuable in procuring supplies for militia forces, and his financial resources helped sustain Plymouth's war contributions during the lean years when hard currency was scarce and the Continental dollar was depreciating rapidly. Watson's willingness to commit his personal wealth and business reputation to the patriot cause reflected a pattern seen throughout New England: the revolution succeeded in part because established men of property were willing to risk everything for the principle of self-governance.

WHY HE MATTERS TO PLYMOUTH

George Watson demonstrated that Plymouth's revolution was not driven solely by ideologues and agitators but had the support of the town's mercantile class. His participation on the Committees of Correspondence and Safety gave those bodies the weight of Plymouth's business establishment. His willingness to use his commercial networks for the patriot cause showed that the revolution required not only political courage but economic sacrifice. Watson's story illustrates the breadth of the revolutionary coalition in Plymouth, which united ministers, farmers, politicians, and merchants in common cause.

- c.1718: Born in Plymouth, Massachusetts
- 1772: Appointed to Plymouth's Committee of Correspondence
- 1774: Served on Plymouth's Committee of Safety
- 1775-1783: Active in organizing war supplies and financial contributions
- c.1800: Died in Plymouth, Massachusetts

SOURCES
- Thacher, James. "History of the Town of Plymouth, from its First Settlement in 1620, to the Present Time." Marsh, Capen & Lyon, 1835.
- Brown, Richard D. "Revolutionary Politics in Massachusetts: The Boston Committee of Correspondence and the Towns, 1772-1774." Harvard University Press, 1970.
- Davis, William T. "Ancient Landmarks of Plymouth." A. Williams and Co., 1883.`,
      birthYear: 1718,
      deathYear: 1800,
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
    where: { id: 'plymouth-pilgrim-hall-museum' },
    update: { slug: 'pilgrim-hall-museum', description: 'Pilgrim Hall Museum, founded in 1824, is the oldest continuously operating public museum in the United States. Located on Court Street in downtown Plymouth, it houses the largest collection of Pilgrim-era artifacts in the world, including possessions of Mayflower passengers, Native American objects, and documents spanning Plymouth\'s history from 1620 through the Revolutionary period.', historicalNote: 'Pilgrim Hall Museum was established by the Pilgrim Society, which had been founded in 1820 to preserve the heritage of Plymouth Colony. The granite building, designed by Alexander Parris (the architect of Quincy Market in Boston), opened its doors in 1824. Its collection includes the only known portrait painted of a Mayflower passenger (Edward Winslow, 1651), the sword of Myles Standish, the cradle of Peregrine White (the first English child born in New England), and Governor William Bradford\'s Bible.\n\nDuring the Revolutionary era, Plymouth\'s identity as the landing place of the Pilgrims was already being consciously cultivated as a source of political meaning. Patriots invoked the Mayflower Compact as a precedent for self-governance and pointed to Plymouth Rock as a symbol of the founding liberty that British tyranny now threatened. The museum\'s collection reflects this layered history, preserving artifacts from both the founding era and the revolutionary period that drew so heavily on founding mythology.\n\nToday the museum offers exhibits that trace Plymouth\'s entire history, from Wampanoag habitation through the colonial period, the Revolution, and beyond. Its research library contains manuscripts, maps, and genealogical records essential to the study of Plymouth\'s past.' },
    create: { id: 'plymouth-pilgrim-hall-museum', townId: PLYMOUTH_TOWN_ID, name: 'Pilgrim Hall Museum', slug: 'pilgrim-hall-museum', placeType: 'MUSEUM', description: 'Pilgrim Hall Museum, founded in 1824, is the oldest continuously operating public museum in the United States. Located on Court Street in downtown Plymouth, it houses the largest collection of Pilgrim-era artifacts in the world, including possessions of Mayflower passengers, Native American objects, and documents spanning Plymouth\'s history from 1620 through the Revolutionary period.', historicalNote: 'Pilgrim Hall Museum was established by the Pilgrim Society, which had been founded in 1820 to preserve the heritage of Plymouth Colony. The granite building, designed by Alexander Parris (the architect of Quincy Market in Boston), opened its doors in 1824. Its collection includes the only known portrait painted of a Mayflower passenger (Edward Winslow, 1651), the sword of Myles Standish, the cradle of Peregrine White (the first English child born in New England), and Governor William Bradford\'s Bible.\n\nDuring the Revolutionary era, Plymouth\'s identity as the landing place of the Pilgrims was already being consciously cultivated as a source of political meaning. Patriots invoked the Mayflower Compact as a precedent for self-governance and pointed to Plymouth Rock as a symbol of the founding liberty that British tyranny now threatened. The museum\'s collection reflects this layered history, preserving artifacts from both the founding era and the revolutionary period that drew so heavily on founding mythology.\n\nToday the museum offers exhibits that trace Plymouth\'s entire history, from Wampanoag habitation through the colonial period, the Revolution, and beyond. Its research library contains manuscripts, maps, and genealogical records essential to the study of Plymouth\'s past.', address: '75 Court St, Plymouth, MA 02360', hours: 'Daily 9:30am-4:30pm (seasonal)', admission: '$15 adults', website: 'https://www.pilgrimhall.org', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'plymouth-burial-hill' },
    update: { slug: 'burial-hill', description: 'Burial Hill is Plymouth\'s oldest cemetery, situated on a prominent hill overlooking the harbor. The site served as the location of the original Pilgrim fort and meeting house in the 1620s and became a burial ground in the following decades. It contains the graves of many of Plymouth\'s founding families and Revolutionary-era residents.', historicalNote: 'Burial Hill occupies the site where the Plymouth colonists built their first fort and watchtower in 1621-1622. The elevated position provided a commanding view of Plymouth Harbor and the surrounding countryside, making it the natural defensive position for the small settlement. The first meeting house was also built here, and the hill served as the center of Plymouth\'s civic and religious life for its earliest decades.\n\nAs the town expanded down toward the waterfront, Burial Hill transitioned into a cemetery. It contains gravestones dating from the mid-seventeenth century onward, including markers for descendants of Mayflower passengers and participants in the American Revolution. During the Revolutionary period, the hill\'s height made it a strategic observation point for watching harbor activity, and Plymouth\'s militia used the site for training musters.\n\nThe cemetery\'s carved headstones are significant examples of colonial funerary art, featuring winged death\'s heads, cherubs, and willow-and-urn motifs that trace the evolution of New England attitudes toward death and the afterlife. The Governor William Bradford marker, placed in 1835, commemorates the longtime leader of Plymouth Colony whose journal remains the primary source for the colony\'s early history.' },
    create: { id: 'plymouth-burial-hill', townId: PLYMOUTH_TOWN_ID, name: 'Burial Hill', slug: 'burial-hill', placeType: 'CEMETERY', description: 'Burial Hill is Plymouth\'s oldest cemetery, situated on a prominent hill overlooking the harbor. The site served as the location of the original Pilgrim fort and meeting house in the 1620s and became a burial ground in the following decades. It contains the graves of many of Plymouth\'s founding families and Revolutionary-era residents.', historicalNote: 'Burial Hill occupies the site where the Plymouth colonists built their first fort and watchtower in 1621-1622. The elevated position provided a commanding view of Plymouth Harbor and the surrounding countryside, making it the natural defensive position for the small settlement. The first meeting house was also built here, and the hill served as the center of Plymouth\'s civic and religious life for its earliest decades.\n\nAs the town expanded down toward the waterfront, Burial Hill transitioned into a cemetery. It contains gravestones dating from the mid-seventeenth century onward, including markers for descendants of Mayflower passengers and participants in the American Revolution. During the Revolutionary period, the hill\'s height made it a strategic observation point for watching harbor activity, and Plymouth\'s militia used the site for training musters.\n\nThe cemetery\'s carved headstones are significant examples of colonial funerary art, featuring winged death\'s heads, cherubs, and willow-and-urn motifs that trace the evolution of New England attitudes toward death and the afterlife. The Governor William Bradford marker, placed in 1835, commemorates the longtime leader of Plymouth Colony whose journal remains the primary source for the colony\'s early history.', address: 'Burial Hill, School St, Plymouth, MA 02360', hours: 'Dawn to dusk', admission: 'Free', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'plymouth-plimoth-patuxet' },
    update: { slug: 'plimoth-patuxet', description: 'Plimoth Patuxet Museums is a living history museum that recreates both the 1627 English settlement of Plymouth Colony and the Wampanoag homeland of Patuxet. The museum uses costumed role-players and historically accurate reconstructions to bring the seventeenth century to life.', historicalNote: 'Originally founded in 1947 as Plimoth Plantation, the museum was renamed Plimoth Patuxet in 2020 to acknowledge the Wampanoag people who had inhabited the site long before English arrival. The museum occupies a site on the Eel River, approximately 2.5 miles south of Plymouth Rock, and includes a reconstructed English village, a Wampanoag homesite staffed by members of the Wampanoag Nation, and the Mayflower II replica ship at the Plymouth waterfront.\n\nThe English village recreates daily life in 1627 Plymouth, with costumed interpreters portraying actual historical residents and speaking in period dialect. The Wampanoag homesite is staffed by Native people who speak from their own cultural perspective rather than playing roles, offering visitors a dual narrative of the colonial encounter. This approach makes Plimoth Patuxet one of the most thoughtful and balanced presentations of early American history available anywhere.\n\nWhile the museum focuses on the 1620s, its interpretive framework inevitably raises questions about the political ideals — self-governance, covenant community, religious liberty — that Plymouth\'s founders articulated and that their descendants invoked during the American Revolution. The museum provides essential context for understanding how Plymouth\'s founding mythology shaped its revolutionary identity.' },
    create: { id: 'plymouth-plimoth-patuxet', townId: PLYMOUTH_TOWN_ID, name: 'Plimoth Patuxet Museums', slug: 'plimoth-patuxet', placeType: 'MUSEUM', description: 'Plimoth Patuxet Museums is a living history museum that recreates both the 1627 English settlement of Plymouth Colony and the Wampanoag homeland of Patuxet. The museum uses costumed role-players and historically accurate reconstructions to bring the seventeenth century to life.', historicalNote: 'Originally founded in 1947 as Plimoth Plantation, the museum was renamed Plimoth Patuxet in 2020 to acknowledge the Wampanoag people who had inhabited the site long before English arrival. The museum occupies a site on the Eel River, approximately 2.5 miles south of Plymouth Rock, and includes a reconstructed English village, a Wampanoag homesite staffed by members of the Wampanoag Nation, and the Mayflower II replica ship at the Plymouth waterfront.\n\nThe English village recreates daily life in 1627 Plymouth, with costumed interpreters portraying actual historical residents and speaking in period dialect. The Wampanoag homesite is staffed by Native people who speak from their own cultural perspective rather than playing roles, offering visitors a dual narrative of the colonial encounter. This approach makes Plimoth Patuxet one of the most thoughtful and balanced presentations of early American history available anywhere.\n\nWhile the museum focuses on the 1620s, its interpretive framework inevitably raises questions about the political ideals — self-governance, covenant community, religious liberty — that Plymouth\'s founders articulated and that their descendants invoked during the American Revolution. The museum provides essential context for understanding how Plymouth\'s founding mythology shaped its revolutionary identity.', address: '137 Warren Ave, Plymouth, MA 02360', hours: 'Daily 9am-5pm (seasonal, March-November)', admission: '$42 adults', website: 'https://www.plimoth.org', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'plymouth-court-house' },
    update: { slug: 'plymouth-county-courthouse', description: 'The Plymouth County Courthouse site on Court Street marks the location where the colonial court sat during the eighteenth century. It was the focal point of Plymouth\'s 1774 court closure, when patriots forced the royal court to suspend operations in defiance of the Massachusetts Government Act.', historicalNote: 'The Plymouth County Courthouse was the seat of justice for Plymouth County throughout the colonial period. The building on Court Street served both as a courthouse and as a gathering place for town meetings and political assemblies. In September 1774, following the passage of the Massachusetts Government Act — which stripped the colony of its charter rights and placed the courts under royal control — patriot leaders in Plymouth organized a mass demonstration to prevent the courts from sitting under the new royal authority.\n\nThe court closure was part of a coordinated movement across Massachusetts. In Worcester, Springfield, Great Barrington, and Plymouth, crowds of armed citizens surrounded courthouses and forced judges to declare that they would not sit under the authority of the Government Act. In Plymouth, the action was led by the town\'s Committee of Safety and supported by militia companies from Plymouth and surrounding towns. The closure effectively ended royal authority in Plymouth County months before the fighting began at Lexington and Concord.\n\nThe original colonial courthouse no longer stands. The present-day Plymouth County courthouse complex occupies a site nearby, and the area remains the civic center of Plymouth.' },
    create: { id: 'plymouth-court-house', townId: PLYMOUTH_TOWN_ID, name: 'Plymouth County Courthouse Site', slug: 'plymouth-county-courthouse', placeType: 'GOVERNMENT', description: 'The Plymouth County Courthouse site on Court Street marks the location where the colonial court sat during the eighteenth century. It was the focal point of Plymouth\'s 1774 court closure, when patriots forced the royal court to suspend operations in defiance of the Massachusetts Government Act.', historicalNote: 'The Plymouth County Courthouse was the seat of justice for Plymouth County throughout the colonial period. The building on Court Street served both as a courthouse and as a gathering place for town meetings and political assemblies. In September 1774, following the passage of the Massachusetts Government Act — which stripped the colony of its charter rights and placed the courts under royal control — patriot leaders in Plymouth organized a mass demonstration to prevent the courts from sitting under the new royal authority.\n\nThe court closure was part of a coordinated movement across Massachusetts. In Worcester, Springfield, Great Barrington, and Plymouth, crowds of armed citizens surrounded courthouses and forced judges to declare that they would not sit under the authority of the Government Act. In Plymouth, the action was led by the town\'s Committee of Safety and supported by militia companies from Plymouth and surrounding towns. The closure effectively ended royal authority in Plymouth County months before the fighting began at Lexington and Concord.\n\nThe original colonial courthouse no longer stands. The present-day Plymouth County courthouse complex occupies a site nearby, and the area remains the civic center of Plymouth.', address: 'Court St, Plymouth, MA 02360', hours: 'Exterior always accessible', admission: 'Free' },
  });

  await prisma.place.upsert({
    where: { id: 'plymouth-cole-hill' },
    update: { slug: 'coles-hill', description: 'Cole\'s Hill is a grassy hillside overlooking Plymouth Harbor and Plymouth Rock. It is the site where the Pilgrims secretly buried their dead during the devastating first winter of 1620-1621, and it now serves as a memorial landscape and gathering place.', historicalNote: 'During the first winter at Plymouth, nearly half of the Mayflower passengers died from disease, exposure, and malnutrition. Governor William Bradford recorded that the survivors buried the dead on this hillside, deliberately leveling the graves and planting corn over them to conceal the colony\'s weakened state from the neighboring Wampanoag. The hill thus carries a somber significance as a mass burial site that predates the more formal cemetery at Burial Hill.\n\nIn 1774, as revolutionary sentiment intensified, patriot orators used Cole\'s Hill as a gathering point for speeches and rallies that connected Plymouth\'s founding sacrifice to the current struggle against British tyranny. The location\'s proximity to Plymouth Rock — visible from the hillside — reinforced the symbolic link between the Pilgrims\' quest for liberty and the patriots\' resistance to parliamentary overreach.\n\nToday Cole\'s Hill features a sarcophagus containing bones unearthed during construction work in 1855, believed to be remains of Pilgrims who died in the first winter. A statue of Massasoit, the Wampanoag leader who negotiated the peace treaty with the Plymouth colonists, stands on the hill. Each year on Thanksgiving, the United American Indians of New England hold a National Day of Mourning ceremony on Cole\'s Hill to commemorate the impact of European colonization on Native peoples.' },
    create: { id: 'plymouth-cole-hill', townId: PLYMOUTH_TOWN_ID, name: 'Cole\'s Hill', slug: 'coles-hill', placeType: 'LANDMARK', description: 'Cole\'s Hill is a grassy hillside overlooking Plymouth Harbor and Plymouth Rock. It is the site where the Pilgrims secretly buried their dead during the devastating first winter of 1620-1621, and it now serves as a memorial landscape and gathering place.', historicalNote: 'During the first winter at Plymouth, nearly half of the Mayflower passengers died from disease, exposure, and malnutrition. Governor William Bradford recorded that the survivors buried the dead on this hillside, deliberately leveling the graves and planting corn over them to conceal the colony\'s weakened state from the neighboring Wampanoag. The hill thus carries a somber significance as a mass burial site that predates the more formal cemetery at Burial Hill.\n\nIn 1774, as revolutionary sentiment intensified, patriot orators used Cole\'s Hill as a gathering point for speeches and rallies that connected Plymouth\'s founding sacrifice to the current struggle against British tyranny. The location\'s proximity to Plymouth Rock — visible from the hillside — reinforced the symbolic link between the Pilgrims\' quest for liberty and the patriots\' resistance to parliamentary overreach.\n\nToday Cole\'s Hill features a sarcophagus containing bones unearthed during construction work in 1855, believed to be remains of Pilgrims who died in the first winter. A statue of Massasoit, the Wampanoag leader who negotiated the peace treaty with the Plymouth colonists, stands on the hill. Each year on Thanksgiving, the United American Indians of New England hold a National Day of Mourning ceremony on Cole\'s Hill to commemorate the impact of European colonization on Native peoples.', address: 'Water St, Plymouth, MA 02360', hours: 'Always accessible', admission: 'Free', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'plymouth-spooner-house' },
    update: { slug: 'spooner-house', description: 'The Spooner House, built around 1749 on North Street, is one of Plymouth\'s best-preserved colonial homes. It was occupied by the Spooner family for over two centuries and reflects the domestic life of a prosperous Plymouth family during the Revolutionary era.', historicalNote: 'The Spooner House was built by Deacon Ephraim Spooner, a prominent Plymouth citizen who served on the town\'s Committee of Correspondence during the revolutionary crisis. The house is a well-preserved example of mid-eighteenth-century New England domestic architecture, with its original floorplan, paneling, and many period furnishings intact. The Spooner family lived in the house continuously from 1749 until 1954, when it was donated to the Plymouth Antiquarian Society.\n\nDeacon Spooner was an active patriot who participated in the organizational work that prepared Plymouth for revolution. His home on North Street placed him in the heart of Plymouth\'s residential district, within walking distance of the courthouse, the waterfront, and the town meeting house. The house offers visitors a window into the daily life of the kind of solid, respectable family that formed the backbone of the revolutionary movement — not the firebrands and propagandists who made the headlines, but the deacons, selectmen, and householders who sustained the movement at the local level.\n\nThe Plymouth Antiquarian Society maintains the house as a museum, with rooms furnished to reflect different periods of the family\'s two-century occupancy.' },
    create: { id: 'plymouth-spooner-house', townId: PLYMOUTH_TOWN_ID, name: 'Spooner House', slug: 'spooner-house', placeType: 'HISTORIC_HOUSE', description: 'The Spooner House, built around 1749 on North Street, is one of Plymouth\'s best-preserved colonial homes. It was occupied by the Spooner family for over two centuries and reflects the domestic life of a prosperous Plymouth family during the Revolutionary era.', historicalNote: 'The Spooner House was built by Deacon Ephraim Spooner, a prominent Plymouth citizen who served on the town\'s Committee of Correspondence during the revolutionary crisis. The house is a well-preserved example of mid-eighteenth-century New England domestic architecture, with its original floorplan, paneling, and many period furnishings intact. The Spooner family lived in the house continuously from 1749 until 1954, when it was donated to the Plymouth Antiquarian Society.\n\nDeacon Spooner was an active patriot who participated in the organizational work that prepared Plymouth for revolution. His home on North Street placed him in the heart of Plymouth\'s residential district, within walking distance of the courthouse, the waterfront, and the town meeting house. The house offers visitors a window into the daily life of the kind of solid, respectable family that formed the backbone of the revolutionary movement — not the firebrands and propagandists who made the headlines, but the deacons, selectmen, and householders who sustained the movement at the local level.\n\nThe Plymouth Antiquarian Society maintains the house as a museum, with rooms furnished to reflect different periods of the family\'s two-century occupancy.', address: '27 North St, Plymouth, MA 02360', hours: 'June-September, Thu-Sat 12-5pm', admission: '$8 adults', website: 'https://www.plymouthantiquariansociety.org' },
  });

  await prisma.place.upsert({
    where: { id: 'plymouth-leyden-street' },
    update: { slug: 'leyden-street', description: 'Leyden Street, running from the waterfront up the hill toward Burial Hill, is the oldest continuously occupied street in New England. It was the main thoroughfare of the original Plymouth settlement, laid out in 1620 along the path the Pilgrims walked from their landing place to the hilltop fort.', historicalNote: 'Leyden Street takes its name from the city of Leiden (historically anglicized as Leyden) in the Netherlands, where the Pilgrim Separatists lived for roughly a decade before their voyage to America. The street was the spine of the original Plymouth settlement: the colonists divided their house lots along this path, with each family receiving a narrow strip of land stretching from the street to the surrounding fields.\n\nBy the time of the Revolution, Leyden Street had been built and rebuilt many times, and the original Pilgrim structures were long gone. But the street\'s identity as the oldest in New England was already recognized, and it carried a symbolic weight that patriot leaders invoked. Walking up Leyden Street from the harbor meant retracing the steps of the original settlers, a journey that revolutionary-era Plymouth residents could make daily and that connected their own political struggles to the foundational narrative of the colony.\n\nToday Leyden Street is a quiet residential road in the center of Plymouth, running one block from Water Street up to Town Square. Modern houses line the street, and a granite marker identifies it as the first street in New England. The street ends at the base of Burial Hill, where the original fort and meeting house once stood.' },
    create: { id: 'plymouth-leyden-street', townId: PLYMOUTH_TOWN_ID, name: 'Leyden Street', slug: 'leyden-street', placeType: 'LANDMARK', description: 'Leyden Street, running from the waterfront up the hill toward Burial Hill, is the oldest continuously occupied street in New England. It was the main thoroughfare of the original Plymouth settlement, laid out in 1620 along the path the Pilgrims walked from their landing place to the hilltop fort.', historicalNote: 'Leyden Street takes its name from the city of Leiden (historically anglicized as Leyden) in the Netherlands, where the Pilgrim Separatists lived for roughly a decade before their voyage to America. The street was the spine of the original Plymouth settlement: the colonists divided their house lots along this path, with each family receiving a narrow strip of land stretching from the street to the surrounding fields.\n\nBy the time of the Revolution, Leyden Street had been built and rebuilt many times, and the original Pilgrim structures were long gone. But the street\'s identity as the oldest in New England was already recognized, and it carried a symbolic weight that patriot leaders invoked. Walking up Leyden Street from the harbor meant retracing the steps of the original settlers, a journey that revolutionary-era Plymouth residents could make daily and that connected their own political struggles to the foundational narrative of the colony.\n\nToday Leyden Street is a quiet residential road in the center of Plymouth, running one block from Water Street up to Town Square. Modern houses line the street, and a granite marker identifies it as the first street in New England. The street ends at the base of Burial Hill, where the original fort and meeting house once stood.', address: 'Leyden St, Plymouth, MA 02360', hours: 'Always accessible', admission: 'Free' },
  });

  await prisma.place.upsert({
    where: { id: 'plymouth-jenny-grist-mill' },
    update: { slug: 'jenney-grist-mill', description: 'The Jenney Grist Mill is a reconstruction of the original grist mill built by John Jenney in 1636, the first in Plymouth Colony. Located on Spring Lane along the Town Brook, the working mill demonstrates seventeenth-century grain processing technology.', historicalNote: 'John Jenney established the original grist mill on the Town Brook in 1636, using the stream\'s power to grind corn into meal for the Plymouth colonists. The mill was an essential piece of infrastructure for the young colony, and the Town Brook provided reliable water power that sustained milling operations for centuries. The present reconstruction, built in 1970 and renovated in subsequent years, occupies a site near the original mill location and uses a working waterwheel to grind corn.\n\nDuring the Revolutionary era, the Town Brook mills continued to serve Plymouth\'s agricultural economy. Grain milling was one of the basic economic activities that sustained small New England towns, and control of mills was a matter of local significance. The Jenney Mill site connects visitors to the economic foundation that underlay Plymouth\'s political life — the farming, milling, and trading that occupied most of the town\'s residents and that gave them a material stake in the question of who governed them and how.\n\nThe mill today operates as a museum and educational site, offering demonstrations of corn grinding and exhibits on early colonial industry. The Town Brook, which runs through the Jenney Pond and past the mill, is also significant as one of the oldest industrial waterways in North America and as a habitat for the annual herring run.' },
    create: { id: 'plymouth-jenny-grist-mill', townId: PLYMOUTH_TOWN_ID, name: 'Jenney Grist Mill', slug: 'jenney-grist-mill', placeType: 'LANDMARK', description: 'The Jenney Grist Mill is a reconstruction of the original grist mill built by John Jenney in 1636, the first in Plymouth Colony. Located on Spring Lane along the Town Brook, the working mill demonstrates seventeenth-century grain processing technology.', historicalNote: 'John Jenney established the original grist mill on the Town Brook in 1636, using the stream\'s power to grind corn into meal for the Plymouth colonists. The mill was an essential piece of infrastructure for the young colony, and the Town Brook provided reliable water power that sustained milling operations for centuries. The present reconstruction, built in 1970 and renovated in subsequent years, occupies a site near the original mill location and uses a working waterwheel to grind corn.\n\nDuring the Revolutionary era, the Town Brook mills continued to serve Plymouth\'s agricultural economy. Grain milling was one of the basic economic activities that sustained small New England towns, and control of mills was a matter of local significance. The Jenney Mill site connects visitors to the economic foundation that underlay Plymouth\'s political life — the farming, milling, and trading that occupied most of the town\'s residents and that gave them a material stake in the question of who governed them and how.\n\nThe mill today operates as a museum and educational site, offering demonstrations of corn grinding and exhibits on early colonial industry. The Town Brook, which runs through the Jenney Pond and past the mill, is also significant as one of the oldest industrial waterways in North America and as a habitat for the annual herring run.', address: '6 Spring Ln, Plymouth, MA 02360', hours: 'Seasonal, check website', admission: 'Free' },
  });

  await prisma.place.upsert({
    where: { id: 'plymouth-national-monument' },
    update: { slug: 'national-monument-forefathers', description: 'The National Monument to the Forefathers, standing 81 feet tall on Allerton Street, is the largest solid granite monument in the world. Completed in 1889, it commemorates the Pilgrim founders of Plymouth Colony and the principles they represented: faith, morality, law, education, and liberty.', historicalNote: 'The monument was conceived in 1820 during the bicentennial celebration of the Pilgrims\' landing and was originally intended to be 150 feet tall, which would have made it the tallest monument in the country. Funding difficulties reduced the final height to 81 feet, but it remains an imposing presence on the Plymouth skyline. The central figure, "Faith," stands atop a buttressed pedestal, with four seated figures below representing Morality, Education, Law, and Liberty. Each seated figure is flanked by smaller relief panels depicting scenes and virtues.\n\nThe monument\'s iconographic program reflects the nineteenth-century understanding of Plymouth\'s significance: the Pilgrims were seen as the founders of a political tradition rooted in faith, education, and self-governance that found its fullest expression in the American Republic. The figure of "Liberty" is particularly relevant to the revolutionary story, as it embodies the principle that Plymouth\'s founders and their revolutionary-era descendants both claimed as their guiding star.\n\nThe monument sits in a small park with views of Plymouth Harbor. Despite its size and significance, it is less visited than Plymouth Rock, and its quiet setting allows for contemplative engagement with the ideas it represents.' },
    create: { id: 'plymouth-national-monument', townId: PLYMOUTH_TOWN_ID, name: 'National Monument to the Forefathers', slug: 'national-monument-forefathers', placeType: 'MONUMENT', description: 'The National Monument to the Forefathers, standing 81 feet tall on Allerton Street, is the largest solid granite monument in the world. Completed in 1889, it commemorates the Pilgrim founders of Plymouth Colony and the principles they represented: faith, morality, law, education, and liberty.', historicalNote: 'The monument was conceived in 1820 during the bicentennial celebration of the Pilgrims\' landing and was originally intended to be 150 feet tall, which would have made it the tallest monument in the country. Funding difficulties reduced the final height to 81 feet, but it remains an imposing presence on the Plymouth skyline. The central figure, "Faith," stands atop a buttressed pedestal, with four seated figures below representing Morality, Education, Law, and Liberty. Each seated figure is flanked by smaller relief panels depicting scenes and virtues.\n\nThe monument\'s iconographic program reflects the nineteenth-century understanding of Plymouth\'s significance: the Pilgrims were seen as the founders of a political tradition rooted in faith, education, and self-governance that found its fullest expression in the American Republic. The figure of "Liberty" is particularly relevant to the revolutionary story, as it embodies the principle that Plymouth\'s founders and their revolutionary-era descendants both claimed as their guiding star.\n\nThe monument sits in a small park with views of Plymouth Harbor. Despite its size and significance, it is less visited than Plymouth Rock, and its quiet setting allows for contemplative engagement with the ideas it represents.', address: 'Allerton St, Plymouth, MA 02360', hours: 'Always accessible', admission: 'Free', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'plymouth-rock' },
    update: { slug: 'plymouth-rock', description: 'Plymouth Rock is the traditional site of the Pilgrims\' first landing in December 1620. Now sheltered beneath a granite portico on the Plymouth waterfront, the rock has become one of the most recognized symbols of American beginnings and was invoked during the Revolution as an emblem of the founding liberty that patriots sought to defend.', historicalNote: 'The identification of Plymouth Rock as the Pilgrims\' landing site dates not to 1620 but to 1741, when Elder Thomas Faunce, then ninety-four years old, identified the rock based on what he said his father and other first-generation settlers had told him. No contemporary account of the 1620 landing mentions a specific rock. The story\'s power, however, has transcended questions of historical accuracy.\n\nDuring the Revolutionary era, Plymouth Rock became a potent political symbol. In 1774, a group of Plymouth patriots attempted to move the rock from the waterfront to the town meeting house as an act of revolutionary symbolism. The rock split during the move, and the top portion was hauled to the town square while the bottom remained at the shore — a division that later commentators found metaphorically apt. The rock was reunited in 1880 and placed under its current canopy at the waterfront.\n\nThe rock has been chipped, carved, and reduced over the centuries by souvenir hunters and well-meaning preservation efforts. What remains is considerably smaller than the original boulder. Today it sits at sea level beneath a neoclassical portico designed by McKim, Mead & White in 1920. It is protected by the Commonwealth of Massachusetts and is visited by more than one million people each year.' },
    create: { id: 'plymouth-rock', townId: PLYMOUTH_TOWN_ID, name: 'Plymouth Rock', slug: 'plymouth-rock', placeType: 'MONUMENT', description: 'Plymouth Rock is the traditional site of the Pilgrims\' first landing in December 1620. Now sheltered beneath a granite portico on the Plymouth waterfront, the rock has become one of the most recognized symbols of American beginnings and was invoked during the Revolution as an emblem of the founding liberty that patriots sought to defend.', historicalNote: 'The identification of Plymouth Rock as the Pilgrims\' landing site dates not to 1620 but to 1741, when Elder Thomas Faunce, then ninety-four years old, identified the rock based on what he said his father and other first-generation settlers had told him. No contemporary account of the 1620 landing mentions a specific rock. The story\'s power, however, has transcended questions of historical accuracy.\n\nDuring the Revolutionary era, Plymouth Rock became a potent political symbol. In 1774, a group of Plymouth patriots attempted to move the rock from the waterfront to the town meeting house as an act of revolutionary symbolism. The rock split during the move, and the top portion was hauled to the town square while the bottom remained at the shore — a division that later commentators found metaphorically apt. The rock was reunited in 1880 and placed under its current canopy at the waterfront.\n\nThe rock has been chipped, carved, and reduced over the centuries by souvenir hunters and well-meaning preservation efforts. What remains is considerably smaller than the original boulder. Today it sits at sea level beneath a neoclassical portico designed by McKim, Mead & White in 1920. It is protected by the Commonwealth of Massachusetts and is visited by more than one million people each year.', address: '79 Water St, Plymouth, MA 02360', hours: 'Always accessible', admission: 'Free', website: 'https://www.nps.gov/places/plymouth-rock.htm', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'plymouth-mayflower-ii' },
    update: { slug: 'mayflower-ii', description: 'Mayflower II is a full-scale reproduction of the seventeenth-century merchant vessel that carried the Pilgrims to Plymouth in 1620. Built in England and sailed across the Atlantic in 1957, the ship is berthed at State Pier in Plymouth Harbor and is operated by Plimoth Patuxet Museums.', historicalNote: 'Mayflower II was built in 1955-1956 at the Upham Shipyard in Brixham, Devon, England, as a gift from the British people to the United States. The ship was designed by naval architect William A. Baker based on research into early seventeenth-century merchant vessels, since no plans or detailed descriptions of the original Mayflower survive. In 1957, the replica sailed from Plymouth, England, to Plymouth, Massachusetts, in fifty-three days under the command of Captain Alan Villiers, retracing the approximate route of the 1620 voyage.\n\nThe ship provides visitors with a vivid understanding of the scale and conditions of the original crossing. At approximately 106 feet in length and 25 feet at its widest beam, the Mayflower was expected to carry 102 passengers plus crew for sixty-six days at sea in cramped, dark, and frequently storm-tossed conditions. Walking the deck and descending into the between-decks space where the passengers lived conveys the physical reality of the Pilgrim experience more effectively than any written description.\n\nMayflower II underwent a comprehensive, multi-year restoration completed in 2020 for the 400th anniversary of the Pilgrims\' landing. The restoration replaced much of the ship\'s hull planking, rigging, and structural timbers, ensuring the vessel\'s preservation for future generations. The ship is staffed by costumed interpreters from Plimoth Patuxet Museums.' },
    create: { id: 'plymouth-mayflower-ii', townId: PLYMOUTH_TOWN_ID, name: 'Mayflower II', slug: 'mayflower-ii', placeType: 'LANDMARK', description: 'Mayflower II is a full-scale reproduction of the seventeenth-century merchant vessel that carried the Pilgrims to Plymouth in 1620. Built in England and sailed across the Atlantic in 1957, the ship is berthed at State Pier in Plymouth Harbor and is operated by Plimoth Patuxet Museums.', historicalNote: 'Mayflower II was built in 1955-1956 at the Upham Shipyard in Brixham, Devon, England, as a gift from the British people to the United States. The ship was designed by naval architect William A. Baker based on research into early seventeenth-century merchant vessels, since no plans or detailed descriptions of the original Mayflower survive. In 1957, the replica sailed from Plymouth, England, to Plymouth, Massachusetts, in fifty-three days under the command of Captain Alan Villiers, retracing the approximate route of the 1620 voyage.\n\nThe ship provides visitors with a vivid understanding of the scale and conditions of the original crossing. At approximately 106 feet in length and 25 feet at its widest beam, the Mayflower was expected to carry 102 passengers plus crew for sixty-six days at sea in cramped, dark, and frequently storm-tossed conditions. Walking the deck and descending into the between-decks space where the passengers lived conveys the physical reality of the Pilgrim experience more effectively than any written description.\n\nMayflower II underwent a comprehensive, multi-year restoration completed in 2020 for the 400th anniversary of the Pilgrims\' landing. The restoration replaced much of the ship\'s hull planking, rigging, and structural timbers, ensuring the vessel\'s preservation for future generations. The ship is staffed by costumed interpreters from Plimoth Patuxet Museums.', address: 'State Pier, Plymouth, MA 02360', hours: 'Daily 9am-5pm (seasonal)', admission: 'Included with Plimoth Patuxet admission', website: 'https://www.plimoth.org/what-see-do/mayflower-ii', featured: true },
  });

  console.log('  Places seeded.');
}

// =============================================================================
// EVENTS
// =============================================================================

async function seedEvents() {
  console.log('  Seeding events...');

  // Existing 12 events — update with slugs and summaries

  await prisma.event.upsert({
    where: { id: 'event-plymouth-warren-history' },
    update: { slug: 'warren-revolutionary-plays', summary: `Between 1772 and 1775, Mercy Otis Warren of Plymouth published a series of satirical plays that constituted some of the most effective political propaganda produced in pre-Revolutionary Massachusetts. "The Adulateur" (1772) was a thinly veiled attack on Royal Governor Thomas Hutchinson, portraying him as the tyrannical "Rapatio" and the Massachusetts patriots as noble defenders of liberty. "The Defeat" (1773) continued the assault on Hutchinson and the Loyalist establishment, while "The Group" (1775) savaged the mandamus councillors appointed under the Massachusetts Government Act as venal and cowardly tools of tyranny.

Warren wrote from her home in Plymouth, where she and her husband James hosted a stream of patriot leaders including Samuel Adams, John Adams, and John Hancock. Her plays were published anonymously or under pseudonyms in Boston newspapers, particularly the Massachusetts Spy and the Boston Gazette, and were reprinted as pamphlets that circulated widely throughout the colonies. Though women were excluded from formal political participation, Warren demonstrated that the pen could be wielded as effectively as the ballot or the musket.

The significance of Warren's literary campaign extended beyond its immediate political impact. Her works helped establish a tradition of American political satire and demonstrated that resistance to British authority took many forms — not only in the streets and meeting houses but in the pages of newspapers and on the stages of the imagination. Her later three-volume "History of the Rise, Progress and Termination of the American Revolution" (1805) cemented her reputation as one of the most important chroniclers of the founding era.` },
    create: { id: 'event-plymouth-warren-history', townId: PLYMOUTH_TOWN_ID, name: 'Mercy Otis Warren Publishes Revolutionary Satirical Plays', slug: 'warren-revolutionary-plays', startDate: new Date('1772-03-26'), datePrecision: 'YEAR', summary: `Between 1772 and 1775, Mercy Otis Warren of Plymouth published a series of satirical plays that constituted some of the most effective political propaganda produced in pre-Revolutionary Massachusetts. "The Adulateur" (1772) was a thinly veiled attack on Royal Governor Thomas Hutchinson, portraying him as the tyrannical "Rapatio" and the Massachusetts patriots as noble defenders of liberty. "The Defeat" (1773) continued the assault on Hutchinson and the Loyalist establishment, while "The Group" (1775) savaged the mandamus councillors appointed under the Massachusetts Government Act as venal and cowardly tools of tyranny.

Warren wrote from her home in Plymouth, where she and her husband James hosted a stream of patriot leaders including Samuel Adams, John Adams, and John Hancock. Her plays were published anonymously or under pseudonyms in Boston newspapers, particularly the Massachusetts Spy and the Boston Gazette, and were reprinted as pamphlets that circulated widely throughout the colonies. Though women were excluded from formal political participation, Warren demonstrated that the pen could be wielded as effectively as the ballot or the musket.

The significance of Warren's literary campaign extended beyond its immediate political impact. Her works helped establish a tradition of American political satire and demonstrated that resistance to British authority took many forms — not only in the streets and meeting houses but in the pages of newspapers and on the stages of the imagination. Her later three-volume "History of the Rise, Progress and Termination of the American Revolution" (1805) cemented her reputation as one of the most important chroniclers of the founding era.`, significanceWeight: 80 },
  });

  await prisma.event.upsert({
    where: { id: 'event-plymouth-tea-protest' },
    update: { slug: 'plymouth-tea-protest', summary: `In December 1773, as news of Boston's Tea Party electrified Massachusetts, Plymouth residents organized their own act of resistance against the Tea Act. Though the details of Plymouth's tea protest were less dramatic than Boston's — Plymouth had no tea ships to board — the town's patriots made clear that they stood in solidarity with Boston and would not tolerate the importation of dutied tea into their community.

Plymouth's Committee of Correspondence coordinated the town's response, drafting resolves that condemned the Tea Act as an unconstitutional imposition and pledged that no tea subject to the parliamentary duty would be consumed, sold, or harbored in Plymouth. The resolves were adopted at a town meeting and circulated to neighboring communities. Merchants who possessed stocks of tea were pressured to destroy or return them, and social pressure was brought to bear on any household suspected of violating the boycott.

The Plymouth tea protest illustrated a crucial dynamic of the revolutionary movement: the revolution was not confined to Boston but spread through a network of communities that amplified and reinforced each other's resistance. Plymouth's action demonstrated that a small town forty miles south of Boston could mobilize its citizenry, adopt binding political resolves, and enforce them through community pressure — all without direction from any central authority. This capacity for coordinated local action was the foundation on which the revolution was built.` },
    create: { id: 'event-plymouth-tea-protest', townId: PLYMOUTH_TOWN_ID, name: 'Plymouth Tea Protest', slug: 'plymouth-tea-protest', startDate: new Date('1773-12-20'), datePrecision: 'MONTH', summary: `In December 1773, as news of Boston's Tea Party electrified Massachusetts, Plymouth residents organized their own act of resistance against the Tea Act. Though the details of Plymouth's tea protest were less dramatic than Boston's — Plymouth had no tea ships to board — the town's patriots made clear that they stood in solidarity with Boston and would not tolerate the importation of dutied tea into their community.

Plymouth's Committee of Correspondence coordinated the town's response, drafting resolves that condemned the Tea Act as an unconstitutional imposition and pledged that no tea subject to the parliamentary duty would be consumed, sold, or harbored in Plymouth. The resolves were adopted at a town meeting and circulated to neighboring communities. Merchants who possessed stocks of tea were pressured to destroy or return them, and social pressure was brought to bear on any household suspected of violating the boycott.

The Plymouth tea protest illustrated a crucial dynamic of the revolutionary movement: the revolution was not confined to Boston but spread through a network of communities that amplified and reinforced each other's resistance. Plymouth's action demonstrated that a small town forty miles south of Boston could mobilize its citizenry, adopt binding political resolves, and enforce them through community pressure — all without direction from any central authority. This capacity for coordinated local action was the foundation on which the revolution was built.`, significanceWeight: 65 },
  });

  await prisma.event.upsert({
    where: { id: 'event-plymouth-liberty-pole' },
    update: { slug: 'liberty-pole-erected', summary: `In 1774, Plymouth patriots erected a liberty pole in the town center as a public symbol of their defiance of British authority. Liberty poles were a common form of revolutionary symbolism throughout the American colonies, drawing on both classical Roman imagery (the pileus, or cap of liberty, placed atop a pole to signify freedom from servitude) and contemporary European radical traditions. The raising of a liberty pole was a deliberate act of political theater, intended to demonstrate the community's commitment to the patriot cause and to provide a rallying point for public gatherings and demonstrations.

Plymouth's liberty pole was erected near the town meeting house, in the civic heart of the community. Its placement was strategic: it stood as a visible marker of patriot sentiment in the place where Plymouth's citizens gathered to conduct their public business. The pole served as a focal point for the political meetings, militia musters, and public celebrations that intensified as the crisis with Britain deepened through 1774 and into 1775.

The liberty pole also carried a specific message for Plymouth. In a town that traced its origins to the Pilgrims' quest for religious and political freedom, the pole was a declaration that the current generation was prepared to defend the liberties their ancestors had sought. The symbol connected Plymouth's revolutionary present to its founding mythology, reinforcing the narrative that resistance to British tyranny was not a radical departure but a continuation of the principles on which the community had been built.` },
    create: { id: 'event-plymouth-liberty-pole', townId: PLYMOUTH_TOWN_ID, name: 'Liberty Pole Erected', slug: 'liberty-pole-erected', startDate: new Date('1774-07-01'), datePrecision: 'YEAR', summary: `In 1774, Plymouth patriots erected a liberty pole in the town center as a public symbol of their defiance of British authority. Liberty poles were a common form of revolutionary symbolism throughout the American colonies, drawing on both classical Roman imagery (the pileus, or cap of liberty, placed atop a pole to signify freedom from servitude) and contemporary European radical traditions. The raising of a liberty pole was a deliberate act of political theater, intended to demonstrate the community's commitment to the patriot cause and to provide a rallying point for public gatherings and demonstrations.

Plymouth's liberty pole was erected near the town meeting house, in the civic heart of the community. Its placement was strategic: it stood as a visible marker of patriot sentiment in the place where Plymouth's citizens gathered to conduct their public business. The pole served as a focal point for the political meetings, militia musters, and public celebrations that intensified as the crisis with Britain deepened through 1774 and into 1775.

The liberty pole also carried a specific message for Plymouth. In a town that traced its origins to the Pilgrims' quest for religious and political freedom, the pole was a declaration that the current generation was prepared to defend the liberties their ancestors had sought. The symbol connected Plymouth's revolutionary present to its founding mythology, reinforcing the narrative that resistance to British tyranny was not a radical departure but a continuation of the principles on which the community had been built.`, significanceWeight: 55 },
  });

  await prisma.event.upsert({
    where: { id: 'event-plymouth-court-closure' },
    update: { slug: 'plymouth-court-closure', summary: `In September 1774, Plymouth County patriots organized a mass demonstration to prevent the royal courts from sitting under the authority of the Massachusetts Government Act. The Government Act, one of the four Coercive Acts passed by Parliament in response to the Boston Tea Party, stripped Massachusetts of its charter rights, made the governor's council appointive rather than elected, and placed the courts under direct royal control. Across Massachusetts, patriots responded by forcibly closing the courts, effectively ending royal authority at the county level.

In Plymouth, the court closure was a carefully organized act of civil disobedience. The Committee of Safety coordinated with militia companies and town leaders to assemble a large crowd at the courthouse. When the judges attempted to convene under the new royal authority, they were confronted by armed citizens who demanded that they refuse to sit. The judges, recognizing that they could not function without the consent of the community, agreed to suspend operations. The closure was peaceful but unambiguous: the people of Plymouth County would not accept courts that derived their authority from Parliament rather than from the consent of the governed.

The Plymouth court closure was part of a colony-wide pattern that effectively dissolved royal government in Massachusetts months before the first shots were fired at Lexington and Concord. By shutting down the courts, the patriots demonstrated that they could not only protest British authority but replace it with their own institutions of governance — a revolutionary act in the most literal sense.` },
    create: { id: 'event-plymouth-court-closure', townId: PLYMOUTH_TOWN_ID, name: 'Plymouth County Court Closure', slug: 'plymouth-court-closure', startDate: new Date('1774-09-27'), datePrecision: 'MONTH', summary: `In September 1774, Plymouth County patriots organized a mass demonstration to prevent the royal courts from sitting under the authority of the Massachusetts Government Act. The Government Act, one of the four Coercive Acts passed by Parliament in response to the Boston Tea Party, stripped Massachusetts of its charter rights, made the governor's council appointive rather than elected, and placed the courts under direct royal control. Across Massachusetts, patriots responded by forcibly closing the courts, effectively ending royal authority at the county level.

In Plymouth, the court closure was a carefully organized act of civil disobedience. The Committee of Safety coordinated with militia companies and town leaders to assemble a large crowd at the courthouse. When the judges attempted to convene under the new royal authority, they were confronted by armed citizens who demanded that they refuse to sit. The judges, recognizing that they could not function without the consent of the community, agreed to suspend operations. The closure was peaceful but unambiguous: the people of Plymouth County would not accept courts that derived their authority from Parliament rather than from the consent of the governed.

The Plymouth court closure was part of a colony-wide pattern that effectively dissolved royal government in Massachusetts months before the first shots were fired at Lexington and Concord. By shutting down the courts, the patriots demonstrated that they could not only protest British authority but replace it with their own institutions of governance — a revolutionary act in the most literal sense.`, significanceWeight: 78 },
  });

  await prisma.event.upsert({
    where: { id: 'event-plymouth-committee-safety' },
    update: { slug: 'committee-of-safety-organized', summary: `In 1774, Plymouth organized its Committee of Safety, the body that would serve as the town's executive authority during the revolutionary crisis. Committees of Safety were established throughout Massachusetts in response to the dissolution of regular government under the Coercive Acts. They served as the local arm of the patriot movement, responsible for militia organization, arms procurement, intelligence gathering, and the enforcement of patriot resolves.

Plymouth's Committee of Safety included some of the town's most prominent citizens, among them James Warren, George Watson, Nathaniel Goodwin, and other established leaders. The committee's composition reflected the breadth of the revolutionary coalition in Plymouth: it included politicians, merchants, farmers, and churchmen united in their opposition to British authority. The committee met regularly, often at private homes or in the town meeting house, and its decisions carried the weight of communal authority.

The Committee of Safety's most critical responsibilities came in the months between the passage of the Coercive Acts and the outbreak of fighting at Lexington and Concord. During this period, the committee organized militia training, stockpiled arms and powder, monitored Loyalist sympathizers, and maintained communications with the Provincial Congress and with committees in neighboring towns. When the Lexington Alarm reached Plymouth on April 19, 1775, the committee's months of preparation bore fruit in a rapid and effective militia mobilization. The committee continued to function throughout the war, managing Plymouth's contributions to the Continental Army and maintaining order on the home front.` },
    create: { id: 'event-plymouth-committee-safety', townId: PLYMOUTH_TOWN_ID, name: 'Plymouth Committee of Safety Organized', slug: 'committee-of-safety-organized', startDate: new Date('1774-09-01'), datePrecision: 'YEAR', summary: `In 1774, Plymouth organized its Committee of Safety, the body that would serve as the town's executive authority during the revolutionary crisis. Committees of Safety were established throughout Massachusetts in response to the dissolution of regular government under the Coercive Acts. They served as the local arm of the patriot movement, responsible for militia organization, arms procurement, intelligence gathering, and the enforcement of patriot resolves.

Plymouth's Committee of Safety included some of the town's most prominent citizens, among them James Warren, George Watson, Nathaniel Goodwin, and other established leaders. The committee's composition reflected the breadth of the revolutionary coalition in Plymouth: it included politicians, merchants, farmers, and churchmen united in their opposition to British authority. The committee met regularly, often at private homes or in the town meeting house, and its decisions carried the weight of communal authority.

The Committee of Safety's most critical responsibilities came in the months between the passage of the Coercive Acts and the outbreak of fighting at Lexington and Concord. During this period, the committee organized militia training, stockpiled arms and powder, monitored Loyalist sympathizers, and maintained communications with the Provincial Congress and with committees in neighboring towns. When the Lexington Alarm reached Plymouth on April 19, 1775, the committee's months of preparation bore fruit in a rapid and effective militia mobilization. The committee continued to function throughout the war, managing Plymouth's contributions to the Continental Army and maintaining order on the home front.`, significanceWeight: 72 },
  });

  await prisma.event.upsert({
    where: { id: 'event-plymouth-provincial-congress-delegates' },
    update: { slug: 'provincial-congress-delegates', summary: `In October 1774, Plymouth sent delegates to the Massachusetts Provincial Congress, the extralegal legislative body that replaced the dissolved General Court. The Provincial Congress, which first met in Concord and later in Cambridge, represented a decisive step toward self-governance: it was a legislature created by the towns themselves, without royal authorization, to manage the colony's affairs during the constitutional crisis precipitated by the Coercive Acts.

Plymouth's delegates to the Provincial Congress included James Warren, who would eventually serve as its president. The town's participation in the Provincial Congress was consistent with its long tradition of self-governance through town meetings — a tradition that Plymouth's residents traced back to the Mayflower Compact of 1620. By sending delegates to the Provincial Congress, Plymouth was not merely joining a protest movement but participating in the creation of a new political order.

The Provincial Congress assumed increasing governmental authority as the crisis deepened. It authorized the collection of taxes, organized militia companies, appointed military officers, and established committees to manage procurement and intelligence. When fighting broke out at Lexington and Concord in April 1775, the Provincial Congress became the de facto government of Massachusetts, directing the military response and managing the siege of Boston. Plymouth's delegation played an important role in these proceedings, with James Warren eventually assuming the presidency of the body and the position of paymaster general of the army.` },
    create: { id: 'event-plymouth-provincial-congress-delegates', townId: PLYMOUTH_TOWN_ID, name: 'Plymouth Sends Delegates to Provincial Congress', slug: 'provincial-congress-delegates', startDate: new Date('1774-10-07'), datePrecision: 'MONTH', summary: `In October 1774, Plymouth sent delegates to the Massachusetts Provincial Congress, the extralegal legislative body that replaced the dissolved General Court. The Provincial Congress, which first met in Concord and later in Cambridge, represented a decisive step toward self-governance: it was a legislature created by the towns themselves, without royal authorization, to manage the colony's affairs during the constitutional crisis precipitated by the Coercive Acts.

Plymouth's delegates to the Provincial Congress included James Warren, who would eventually serve as its president. The town's participation in the Provincial Congress was consistent with its long tradition of self-governance through town meetings — a tradition that Plymouth's residents traced back to the Mayflower Compact of 1620. By sending delegates to the Provincial Congress, Plymouth was not merely joining a protest movement but participating in the creation of a new political order.

The Provincial Congress assumed increasing governmental authority as the crisis deepened. It authorized the collection of taxes, organized militia companies, appointed military officers, and established committees to manage procurement and intelligence. When fighting broke out at Lexington and Concord in April 1775, the Provincial Congress became the de facto government of Massachusetts, directing the military response and managing the siege of Boston. Plymouth's delegation played an important role in these proceedings, with James Warren eventually assuming the presidency of the body and the position of paymaster general of the army.`, significanceWeight: 75 },
  });

  await prisma.event.upsert({
    where: { id: 'event-plymouth-rock-rededication' },
    update: { slug: 'plymouth-rock-symbol-liberty', summary: `In 1774, as revolutionary sentiment reached its peak in Plymouth, a group of patriots attempted to move Plymouth Rock from the waterfront to the town meeting house as a symbolic act of revolutionary dedication. The rock, which tradition identified as the landing place of the Pilgrims in 1620, had already become a potent symbol of American origins and the founding principles of self-governance. By moving it to the seat of civic authority, Plymouth's patriots sought to physically connect the town's founding mythology to the current struggle against British tyranny.

The attempt did not go as planned. As the rock was being raised with oxen and tackle, it split in two. The upper portion was successfully transported to the town square, while the lower half remained embedded at the waterfront. Later observers found symbolic meaning in the split: the rock, like the British Empire, had been divided. The upper half remained at the town meeting house for decades, a tangible symbol of Plymouth's claim to be the birthplace of American liberty.

The episode reveals how Plymouth's revolutionary generation consciously invoked and reshaped the town's founding narrative to serve the purposes of the present. The Pilgrims had not been seeking political independence — they had been seeking religious freedom and economic opportunity. But by the 1770s, the Pilgrim story had been reinterpreted as a narrative of liberty and self-governance, with Plymouth Rock as its central icon. This act of historical reimagination gave Plymouth's revolution a mythic dimension that few other communities could claim.` },
    create: { id: 'event-plymouth-rock-rededication', townId: PLYMOUTH_TOWN_ID, name: 'Plymouth Rock Invoked as Symbol of Liberty', slug: 'plymouth-rock-symbol-liberty', startDate: new Date('1774-12-01'), datePrecision: 'YEAR', summary: `In 1774, as revolutionary sentiment reached its peak in Plymouth, a group of patriots attempted to move Plymouth Rock from the waterfront to the town meeting house as a symbolic act of revolutionary dedication. The rock, which tradition identified as the landing place of the Pilgrims in 1620, had already become a potent symbol of American origins and the founding principles of self-governance. By moving it to the seat of civic authority, Plymouth's patriots sought to physically connect the town's founding mythology to the current struggle against British tyranny.

The attempt did not go as planned. As the rock was being raised with oxen and tackle, it split in two. The upper portion was successfully transported to the town square, while the lower half remained embedded at the waterfront. Later observers found symbolic meaning in the split: the rock, like the British Empire, had been divided. The upper half remained at the town meeting house for decades, a tangible symbol of Plymouth's claim to be the birthplace of American liberty.

The episode reveals how Plymouth's revolutionary generation consciously invoked and reshaped the town's founding narrative to serve the purposes of the present. The Pilgrims had not been seeking political independence — they had been seeking religious freedom and economic opportunity. But by the 1770s, the Pilgrim story had been reinterpreted as a narrative of liberty and self-governance, with Plymouth Rock as its central icon. This act of historical reimagination gave Plymouth's revolution a mythic dimension that few other communities could claim.`, significanceWeight: 70 },
  });

  await prisma.event.upsert({
    where: { id: 'event-plymouth-lexington-response' },
    update: { slug: 'lexington-alarm-response', summary: `On April 19, 1775, when word reached Plymouth that British regulars had fired on militia at Lexington Green, the town mobilized with a speed that reflected months of preparation by the Committee of Safety. Express riders carried the alarm south from Watertown and Cambridge, reaching Plymouth by mid-morning. Within hours, Plymouth's minutemen and militia companies had assembled, armed, and begun the forty-mile march north toward Boston.

Plymouth's militia response to the Lexington Alarm was part of the largest spontaneous military mobilization in colonial American history. Across eastern Massachusetts, thousands of men dropped their tools, grabbed their muskets, and marched toward Cambridge and the surrounding towns to besiege the British garrison in Boston. Plymouth's companies joined this converging force, taking up positions in the siege lines that would surround Boston for the next eleven months.

The speed of Plymouth's mobilization was a testament to the organizational work of the Committee of Safety. Militia muster rolls had been updated, arms and ammunition had been stockpiled, and routes of march had been planned in advance. The alarm system — a relay of riders and signals connecting the towns of eastern Massachusetts — had been tested and refined over the preceding months. When the moment came, Plymouth was ready. The town's response to the Lexington Alarm transformed the revolutionary movement from a political contest into an armed conflict, and Plymouth's men were among the first to take the field.` },
    create: { id: 'event-plymouth-lexington-response', townId: PLYMOUTH_TOWN_ID, name: 'Plymouth Militia Responds to Lexington Alarm', slug: 'lexington-alarm-response', startDate: new Date('1775-04-19'), datePrecision: 'DAY', summary: `On April 19, 1775, when word reached Plymouth that British regulars had fired on militia at Lexington Green, the town mobilized with a speed that reflected months of preparation by the Committee of Safety. Express riders carried the alarm south from Watertown and Cambridge, reaching Plymouth by mid-morning. Within hours, Plymouth's minutemen and militia companies had assembled, armed, and begun the forty-mile march north toward Boston.

Plymouth's militia response to the Lexington Alarm was part of the largest spontaneous military mobilization in colonial American history. Across eastern Massachusetts, thousands of men dropped their tools, grabbed their muskets, and marched toward Cambridge and the surrounding towns to besiege the British garrison in Boston. Plymouth's companies joined this converging force, taking up positions in the siege lines that would surround Boston for the next eleven months.

The speed of Plymouth's mobilization was a testament to the organizational work of the Committee of Safety. Militia muster rolls had been updated, arms and ammunition had been stockpiled, and routes of march had been planned in advance. The alarm system — a relay of riders and signals connecting the towns of eastern Massachusetts — had been tested and refined over the preceding months. When the moment came, Plymouth was ready. The town's response to the Lexington Alarm transformed the revolutionary movement from a political contest into an armed conflict, and Plymouth's men were among the first to take the field.`, significanceWeight: 85 },
  });

  await prisma.event.upsert({
    where: { id: 'event-plymouth-militia-march' },
    update: { slug: 'militia-march-to-boston', summary: `Following the Lexington Alarm in April 1775, Plymouth militia companies marched north to join the siege of Boston. The march covered approximately forty miles over roads that ran through Duxbury, Marshfield, Scituate, and Hingham before reaching the encampments south of Boston. Plymouth's men joined a growing force of New England militia that would eventually number between 15,000 and 20,000, ringing the city and trapping the British garrison inside.

The march to Boston required Plymouth's militia to sustain themselves on the road with provisions hastily gathered from the town's stores. The Committee of Safety organized supply carts to follow the column, and arrangements were made with towns along the route to provide food and shelter. The logistical challenge of moving and sustaining armed men over long distances would become a defining problem of the war, and Plymouth's initial experience foreshadowed the supply difficulties that would plague the Continental Army for years.

Plymouth's militia served in the siege lines around Boston through the spring and into the summer of 1775. Some men returned home after their initial service terms expired, while others reenlisted or were reorganized into Continental Army units. The experience of the siege — the tedium, the disease, the discomfort of camp life — tested the resolve of Plymouth's citizen soldiers and introduced them to the realities of military service that were far removed from the romanticized militia musters of peacetime.` },
    create: { id: 'event-plymouth-militia-march', townId: PLYMOUTH_TOWN_ID, name: 'Plymouth Militia March to Boston', slug: 'militia-march-to-boston', startDate: new Date('1775-04-20'), datePrecision: 'DAY', summary: `Following the Lexington Alarm in April 1775, Plymouth militia companies marched north to join the siege of Boston. The march covered approximately forty miles over roads that ran through Duxbury, Marshfield, Scituate, and Hingham before reaching the encampments south of Boston. Plymouth's men joined a growing force of New England militia that would eventually number between 15,000 and 20,000, ringing the city and trapping the British garrison inside.

The march to Boston required Plymouth's militia to sustain themselves on the road with provisions hastily gathered from the town's stores. The Committee of Safety organized supply carts to follow the column, and arrangements were made with towns along the route to provide food and shelter. The logistical challenge of moving and sustaining armed men over long distances would become a defining problem of the war, and Plymouth's initial experience foreshadowed the supply difficulties that would plague the Continental Army for years.

Plymouth's militia served in the siege lines around Boston through the spring and into the summer of 1775. Some men returned home after their initial service terms expired, while others reenlisted or were reorganized into Continental Army units. The experience of the siege — the tedium, the disease, the discomfort of camp life — tested the resolve of Plymouth's citizen soldiers and introduced them to the realities of military service that were far removed from the romanticized militia musters of peacetime.`, significanceWeight: 75 },
  });

  await prisma.event.upsert({
    where: { id: 'event-plymouth-loyalist-crisis' },
    update: { slug: 'loyalist-exodus', summary: `Throughout 1774 and 1775, Plymouth experienced the painful departure of its Loyalist residents — men and women who chose allegiance to the British crown over the revolutionary cause embraced by the majority of their neighbors. The most prominent Loyalist departure was that of Edward Winslow Jr., a direct descendant of Mayflower passenger Edward Winslow and a mandamus councillor appointed under the Massachusetts Government Act. Winslow's departure severed a connection to Plymouth's founding that stretched back 150 years.

The Loyalist exodus from Plymouth was not a single dramatic event but a gradual process of social pressure, intimidation, and personal decision. Patriots visited suspected Loyalists at their homes to demand declarations of support for the patriot cause. Those who refused were subjected to public shaming, economic boycotts, and in some cases threats of violence. Property belonging to prominent Loyalists was confiscated under laws passed by the Provincial Congress and later the state legislature. Some Loyalists left voluntarily, recognizing that their position in Plymouth had become untenable; others were effectively driven out.

The Loyalist crisis revealed the revolutionary movement's capacity for coercion as well as its ideals of liberty. The departures left gaps in Plymouth's social fabric — empty houses, abandoned businesses, broken friendships, and divided families. The confiscated properties were redistributed or sold, and the Loyalists' names were gradually erased from Plymouth's collective memory. Their story is an essential counterpoint to the triumphant narrative of patriot resistance, a reminder that the revolution was also a civil conflict with real human costs.` },
    create: { id: 'event-plymouth-loyalist-crisis', townId: PLYMOUTH_TOWN_ID, name: 'Loyalist Exodus from Plymouth', slug: 'loyalist-exodus', startDate: new Date('1774-08-01'), datePrecision: 'YEAR', summary: `Throughout 1774 and 1775, Plymouth experienced the painful departure of its Loyalist residents — men and women who chose allegiance to the British crown over the revolutionary cause embraced by the majority of their neighbors. The most prominent Loyalist departure was that of Edward Winslow Jr., a direct descendant of Mayflower passenger Edward Winslow and a mandamus councillor appointed under the Massachusetts Government Act. Winslow's departure severed a connection to Plymouth's founding that stretched back 150 years.

The Loyalist exodus from Plymouth was not a single dramatic event but a gradual process of social pressure, intimidation, and personal decision. Patriots visited suspected Loyalists at their homes to demand declarations of support for the patriot cause. Those who refused were subjected to public shaming, economic boycotts, and in some cases threats of violence. Property belonging to prominent Loyalists was confiscated under laws passed by the Provincial Congress and later the state legislature. Some Loyalists left voluntarily, recognizing that their position in Plymouth had become untenable; others were effectively driven out.

The Loyalist crisis revealed the revolutionary movement's capacity for coercion as well as its ideals of liberty. The departures left gaps in Plymouth's social fabric — empty houses, abandoned businesses, broken friendships, and divided families. The confiscated properties were redistributed or sold, and the Loyalists' names were gradually erased from Plymouth's collective memory. Their story is an essential counterpoint to the triumphant narrative of patriot resistance, a reminder that the revolution was also a civil conflict with real human costs.`, significanceWeight: 68 },
  });

  await prisma.event.upsert({
    where: { id: 'event-plymouth-harbor-defense' },
    update: { slug: 'harbor-defense-organized', summary: `In 1775 and 1776, Plymouth organized the defense of its harbor against the threat of British naval attack. Plymouth Harbor, while less strategically significant than Boston's, was vulnerable to raids by Royal Navy vessels operating along the Massachusetts coast. The British had used their naval superiority to shell and burn coastal towns, including Falmouth (now Portland, Maine) in October 1775, and Plymouth's residents had good reason to fear a similar attack.

The harbor defense effort was coordinated by the Committee of Safety and involved multiple measures. Small fortifications were constructed at strategic points along the harbor entrance. Local vessels were organized into a rudimentary coastal patrol. Militia units trained in the use of artillery, and cannons were positioned to cover the approaches to the harbor. The town also organized a system of lookouts and signals to provide early warning of approaching British ships.

Plymouth's harbor defense was never tested by a major British assault, but the defensive preparations were not wasted effort. The fortifications and patrol system provided a measure of security that allowed the town to continue its economic activities — fishing, coastal trade, and supply of the Continental Army — without constant fear of attack. More importantly, the defense effort maintained the town's sense of engagement with the war, ensuring that Plymouth's contribution to the revolution was not limited to the men it sent to fight elsewhere but included the collective effort of the entire community to defend its own shores.` },
    create: { id: 'event-plymouth-harbor-defense', townId: PLYMOUTH_TOWN_ID, name: 'Plymouth Harbor Defense Organized', slug: 'harbor-defense-organized', startDate: new Date('1775-06-01'), datePrecision: 'YEAR', summary: `In 1775 and 1776, Plymouth organized the defense of its harbor against the threat of British naval attack. Plymouth Harbor, while less strategically significant than Boston's, was vulnerable to raids by Royal Navy vessels operating along the Massachusetts coast. The British had used their naval superiority to shell and burn coastal towns, including Falmouth (now Portland, Maine) in October 1775, and Plymouth's residents had good reason to fear a similar attack.

The harbor defense effort was coordinated by the Committee of Safety and involved multiple measures. Small fortifications were constructed at strategic points along the harbor entrance. Local vessels were organized into a rudimentary coastal patrol. Militia units trained in the use of artillery, and cannons were positioned to cover the approaches to the harbor. The town also organized a system of lookouts and signals to provide early warning of approaching British ships.

Plymouth's harbor defense was never tested by a major British assault, but the defensive preparations were not wasted effort. The fortifications and patrol system provided a measure of security that allowed the town to continue its economic activities — fishing, coastal trade, and supply of the Continental Army — without constant fear of attack. More importantly, the defense effort maintained the town's sense of engagement with the war, ensuring that Plymouth's contribution to the revolution was not limited to the men it sent to fight elsewhere but included the collective effort of the entire community to defend its own shores.`, significanceWeight: 60 },
  });

  await prisma.event.upsert({
    where: { id: 'event-plymouth-continental-army-recruitment' },
    update: { slug: 'continental-army-recruitment', summary: `Throughout 1775 and 1776, Plymouth County was the site of intensive recruitment for the Continental Army. As the initial enthusiasm of the Lexington Alarm faded and the realities of a protracted war became apparent, the Continental Congress and the Massachusetts Provincial Congress faced the challenge of building a professional army from the militia forces that had assembled spontaneously in April 1775. Plymouth, as the county seat, served as a regional hub for recruitment, mustering, and supply operations.

James Warren, in his capacity as paymaster general, played a central role in the recruitment effort from Plymouth. The challenge was formidable: militia enlistments were typically for short terms, and many men who had marched to Boston in April returned home when their service periods expired. Replacing them required continuous recruitment, often at terms that were unattractive — low pay, uncertain supplies, and the prospect of years away from farms and families that depended on their labor.

Plymouth County's contribution to the Continental Army was significant relative to its population. Men from Plymouth and the surrounding towns served in regiments throughout the war, from the siege of Boston through the campaigns in New York, New Jersey, and the South. The recruitment effort required the sustained cooperation of town selectmen, committees of safety, and the provincial government, and it imposed real hardships on the families and communities that sent their men to war. The county's contribution in men, supplies, and money was a testament to the depth of commitment to the patriot cause in the Plymouth region.` },
    create: { id: 'event-plymouth-continental-army-recruitment', townId: PLYMOUTH_TOWN_ID, name: 'Plymouth County Continental Army Recruitment', slug: 'continental-army-recruitment', startDate: new Date('1775-07-01'), datePrecision: 'YEAR', summary: `Throughout 1775 and 1776, Plymouth County was the site of intensive recruitment for the Continental Army. As the initial enthusiasm of the Lexington Alarm faded and the realities of a protracted war became apparent, the Continental Congress and the Massachusetts Provincial Congress faced the challenge of building a professional army from the militia forces that had assembled spontaneously in April 1775. Plymouth, as the county seat, served as a regional hub for recruitment, mustering, and supply operations.

James Warren, in his capacity as paymaster general, played a central role in the recruitment effort from Plymouth. The challenge was formidable: militia enlistments were typically for short terms, and many men who had marched to Boston in April returned home when their service periods expired. Replacing them required continuous recruitment, often at terms that were unattractive — low pay, uncertain supplies, and the prospect of years away from farms and families that depended on their labor.

Plymouth County's contribution to the Continental Army was significant relative to its population. Men from Plymouth and the surrounding towns served in regiments throughout the war, from the siege of Boston through the campaigns in New York, New Jersey, and the South. The recruitment effort required the sustained cooperation of town selectmen, committees of safety, and the provincial government, and it imposed real hardships on the families and communities that sent their men to war. The county's contribution in men, supplies, and money was a testament to the depth of commitment to the patriot cause in the Plymouth region.`, significanceWeight: 70 },
  });

  // 4 new events to reach 16

  await prisma.event.upsert({
    where: { id: 'event-plymouth-committee-correspondence' },
    update: { slug: 'committee-of-correspondence-formed', summary: `In late 1772, following the example set by Samuel Adams's Boston Committee of Correspondence, Plymouth established its own Committee of Correspondence to coordinate political resistance with other Massachusetts towns. The Boston Committee had issued a circular letter to every town in the colony, inviting them to establish similar committees and to share their views on British violations of colonial rights. Plymouth was among the first towns to respond, forming a committee that included George Watson, James Warren, and other leading citizens.

Plymouth's Committee of Correspondence served as the town's primary organ of political communication during the pre-revolutionary crisis. It drafted resolves expressing the town's position on British revenue measures, the quartering of troops, and the independence of the colonial judiciary. These resolves were circulated to other committees throughout Massachusetts and beyond, contributing to the emerging consensus that British policy was systematically threatening colonial liberties. The committee also received and distributed intelligence from Boston, keeping Plymouth's residents informed of developments in the imperial crisis.

The Committee of Correspondence was a revolutionary innovation in political organization. By creating a permanent network of communication between towns, the committees enabled coordinated action without a central authority — a decentralized model of resistance that proved remarkably effective. Plymouth's active participation in this network ensured that the town's voice was heard in the colonial debate and that its residents were prepared for the escalation that would come in 1774 and 1775.` },
    create: { id: 'event-plymouth-committee-correspondence', townId: PLYMOUTH_TOWN_ID, name: 'Plymouth Committee of Correspondence Formed', slug: 'committee-of-correspondence-formed', startDate: new Date('1772-12-01'), datePrecision: 'MONTH', summary: `In late 1772, following the example set by Samuel Adams's Boston Committee of Correspondence, Plymouth established its own Committee of Correspondence to coordinate political resistance with other Massachusetts towns. The Boston Committee had issued a circular letter to every town in the colony, inviting them to establish similar committees and to share their views on British violations of colonial rights. Plymouth was among the first towns to respond, forming a committee that included George Watson, James Warren, and other leading citizens.

Plymouth's Committee of Correspondence served as the town's primary organ of political communication during the pre-revolutionary crisis. It drafted resolves expressing the town's position on British revenue measures, the quartering of troops, and the independence of the colonial judiciary. These resolves were circulated to other committees throughout Massachusetts and beyond, contributing to the emerging consensus that British policy was systematically threatening colonial liberties. The committee also received and distributed intelligence from Boston, keeping Plymouth's residents informed of developments in the imperial crisis.

The Committee of Correspondence was a revolutionary innovation in political organization. By creating a permanent network of communication between towns, the committees enabled coordinated action without a central authority — a decentralized model of resistance that proved remarkably effective. Plymouth's active participation in this network ensured that the town's voice was heard in the colonial debate and that its residents were prepared for the escalation that would come in 1774 and 1775.`, significanceWeight: 72 },
  });

  await prisma.event.upsert({
    where: { id: 'event-plymouth-non-importation' },
    update: { slug: 'non-importation-agreement', summary: `In 1768 and again in 1774, Plymouth merchants and residents adopted non-importation agreements pledging to boycott British goods until Parliament repealed its oppressive revenue measures. These agreements were a central tactic of colonial resistance, using economic pressure to force British concessions. In Plymouth, the agreements were adopted at town meetings and enforced through community pressure, with committees appointed to inspect incoming goods and to identify and publicize violators.

The non-importation agreements required genuine economic sacrifice from Plymouth's residents. British manufactured goods — cloth, hardware, ceramics, glass — were staples of colonial life, and finding domestic alternatives was often difficult and expensive. Women played a crucial role in the boycott, organizing spinning bees to produce homespun cloth and substituting domestic products for imported ones. The agreements also affected Plymouth's merchants, who lost profitable trade connections and had to restructure their businesses around the new economic reality.

Plymouth's participation in non-importation demonstrated the town's willingness to bear material costs for political principles. The boycotts were most effective when they were broadly adopted, and Plymouth's compliance strengthened the colony-wide effort. The experience of collective economic sacrifice also reinforced community solidarity and prepared Plymouth's residents for the greater sacrifices that the war would demand.` },
    create: { id: 'event-plymouth-non-importation', townId: PLYMOUTH_TOWN_ID, name: 'Plymouth Adopts Non-Importation Agreement', slug: 'non-importation-agreement', startDate: new Date('1768-08-01'), datePrecision: 'YEAR', summary: `In 1768 and again in 1774, Plymouth merchants and residents adopted non-importation agreements pledging to boycott British goods until Parliament repealed its oppressive revenue measures. These agreements were a central tactic of colonial resistance, using economic pressure to force British concessions. In Plymouth, the agreements were adopted at town meetings and enforced through community pressure, with committees appointed to inspect incoming goods and to identify and publicize violators.

The non-importation agreements required genuine economic sacrifice from Plymouth's residents. British manufactured goods — cloth, hardware, ceramics, glass — were staples of colonial life, and finding domestic alternatives was often difficult and expensive. Women played a crucial role in the boycott, organizing spinning bees to produce homespun cloth and substituting domestic products for imported ones. The agreements also affected Plymouth's merchants, who lost profitable trade connections and had to restructure their businesses around the new economic reality.

Plymouth's participation in non-importation demonstrated the town's willingness to bear material costs for political principles. The boycotts were most effective when they were broadly adopted, and Plymouth's compliance strengthened the colony-wide effort. The experience of collective economic sacrifice also reinforced community solidarity and prepared Plymouth's residents for the greater sacrifices that the war would demand.`, significanceWeight: 62 },
  });

  await prisma.event.upsert({
    where: { id: 'event-plymouth-powder-alarm-response' },
    update: { slug: 'powder-alarm-response', summary: `On September 1, 1774, British soldiers under General Thomas Gage seized gunpowder stored in the provincial powder house in Somerville, northwest of Boston. False rumors that the British had also fired on colonists spread rapidly through the countryside, triggering a spontaneous military mobilization that brought as many as 20,000 armed men toward Boston within two days. Plymouth received the alarm and began mustering its militia before the rumors were corrected.

The Powder Alarm was a dress rehearsal for the Lexington Alarm seven months later. It demonstrated both the effectiveness of the colonial alarm system and the depth of popular willingness to take up arms in defense of what were seen as fundamental rights. In Plymouth, the response revealed the Committee of Safety's organizational capacity and the readiness of the town's militia to march on short notice. Though the mobilization stood down when the truth became known, the experience reinforced the lesson that the patriot network could generate a massive armed response within hours.

The Powder Alarm also had important political consequences. General Gage, shocked by the scale and speed of the colonial response, pulled his forces back into Boston and began fortifying the city. The patriots, for their part, accelerated their preparations for armed conflict, stockpiling powder and ammunition in locations outside the reach of British raids. In Plymouth, the Powder Alarm heightened the sense of urgency and confirmed the Committee of Safety's decision to organize the town's defenses on a war footing.` },
    create: { id: 'event-plymouth-powder-alarm-response', townId: PLYMOUTH_TOWN_ID, name: 'Plymouth Responds to the Powder Alarm', slug: 'powder-alarm-response', startDate: new Date('1774-09-01'), datePrecision: 'DAY', summary: `On September 1, 1774, British soldiers under General Thomas Gage seized gunpowder stored in the provincial powder house in Somerville, northwest of Boston. False rumors that the British had also fired on colonists spread rapidly through the countryside, triggering a spontaneous military mobilization that brought as many as 20,000 armed men toward Boston within two days. Plymouth received the alarm and began mustering its militia before the rumors were corrected.

The Powder Alarm was a dress rehearsal for the Lexington Alarm seven months later. It demonstrated both the effectiveness of the colonial alarm system and the depth of popular willingness to take up arms in defense of what were seen as fundamental rights. In Plymouth, the response revealed the Committee of Safety's organizational capacity and the readiness of the town's militia to march on short notice. Though the mobilization stood down when the truth became known, the experience reinforced the lesson that the patriot network could generate a massive armed response within hours.

The Powder Alarm also had important political consequences. General Gage, shocked by the scale and speed of the colonial response, pulled his forces back into Boston and began fortifying the city. The patriots, for their part, accelerated their preparations for armed conflict, stockpiling powder and ammunition in locations outside the reach of British raids. In Plymouth, the Powder Alarm heightened the sense of urgency and confirmed the Committee of Safety's decision to organize the town's defenses on a war footing.`, significanceWeight: 65 },
  });

  await prisma.event.upsert({
    where: { id: 'event-plymouth-wartime-supply' },
    update: { slug: 'wartime-supply-contributions', summary: `Throughout the Revolutionary War, Plymouth served as a supply source for the Continental Army, contributing food, clothing, and materiel drawn from the town's agricultural and maritime economy. The supply effort was coordinated by local committees working under the direction of the Massachusetts state government and the Continental Congress, and it placed significant demands on a community whose economy was already strained by the disruptions of war.

Plymouth's agricultural output — grain, livestock, salt pork, and preserved fish — was channeled to army supply depots through a system of requisitions and purchases. The town's location on the coast also made it a useful point for the movement of supplies by water, allowing goods to be shipped to army encampments more efficiently than by overland routes. Plymouth's shipbuilders and maritime workers contributed to the construction and maintenance of vessels used for supply transport and coastal defense.

The supply effort imposed real hardships on Plymouth's civilian population. Requisitions sometimes left families short of provisions for their own use, and the depreciating Continental currency meant that farmers and merchants who sold goods to the army often received less in real value than their products were worth. Despite these difficulties, Plymouth sustained its contributions throughout the war, a testament to the community's commitment to the cause and to the organizational capacity of its local leaders. The unglamorous work of feeding and equipping an army was as essential to the revolution's success as any battlefield victory.` },
    create: { id: 'event-plymouth-wartime-supply', townId: PLYMOUTH_TOWN_ID, name: 'Plymouth Wartime Supply Contributions', slug: 'wartime-supply-contributions', startDate: new Date('1775-06-01'), datePrecision: 'YEAR', summary: `Throughout the Revolutionary War, Plymouth served as a supply source for the Continental Army, contributing food, clothing, and materiel drawn from the town's agricultural and maritime economy. The supply effort was coordinated by local committees working under the direction of the Massachusetts state government and the Continental Congress, and it placed significant demands on a community whose economy was already strained by the disruptions of war.

Plymouth's agricultural output — grain, livestock, salt pork, and preserved fish — was channeled to army supply depots through a system of requisitions and purchases. The town's location on the coast also made it a useful point for the movement of supplies by water, allowing goods to be shipped to army encampments more efficiently than by overland routes. Plymouth's shipbuilders and maritime workers contributed to the construction and maintenance of vessels used for supply transport and coastal defense.

The supply effort imposed real hardships on Plymouth's civilian population. Requisitions sometimes left families short of provisions for their own use, and the depreciating Continental currency meant that farmers and merchants who sold goods to the army often received less in real value than their products were worth. Despite these difficulties, Plymouth sustained its contributions throughout the war, a testament to the community's commitment to the cause and to the organizational capacity of its local leaders. The unglamorous work of feeding and equipping an army was as essential to the revolution's success as any battlefield victory.`, significanceWeight: 58 },
  });

  console.log('  Events seeded.');
}

// =============================================================================
// EVENT-PEOPLE CONNECTIONS
// =============================================================================

async function seedEventPeople() {
  console.log('  Seeding event-people connections...');

  const connections = [
    { eventId: 'event-plymouth-warren-history', personId: 'person-plymouth-mercy-otis-warren', roleInEvent: 'Author of satirical plays' },
    { eventId: 'event-plymouth-warren-history', personId: 'person-plymouth-james-warren', roleInEvent: 'Political supporter and husband of Mercy' },
    { eventId: 'event-plymouth-tea-protest', personId: 'person-plymouth-george-watson', roleInEvent: 'Committee of Correspondence organizer' },
    { eventId: 'event-plymouth-tea-protest', personId: 'person-plymouth-james-warren', roleInEvent: 'Political leader coordinating protest' },
    { eventId: 'event-plymouth-court-closure', personId: 'person-plymouth-nathaniel-goodwin', roleInEvent: 'Committee of Safety organizer' },
    { eventId: 'event-plymouth-court-closure', personId: 'person-plymouth-james-warren', roleInEvent: 'Political leader' },
    { eventId: 'event-plymouth-committee-safety', personId: 'person-plymouth-james-warren', roleInEvent: 'Committee member and leader' },
    { eventId: 'event-plymouth-committee-safety', personId: 'person-plymouth-nathaniel-goodwin', roleInEvent: 'Committee member' },
    { eventId: 'event-plymouth-committee-safety', personId: 'person-plymouth-george-watson', roleInEvent: 'Committee member' },
    { eventId: 'event-plymouth-provincial-congress-delegates', personId: 'person-plymouth-james-warren', roleInEvent: 'Delegate and later president of Provincial Congress' },
    { eventId: 'event-plymouth-rock-rededication', personId: 'person-plymouth-james-warren', roleInEvent: 'Patriot leader involved in the symbolic act' },
    { eventId: 'event-plymouth-lexington-response', personId: 'person-plymouth-nathaniel-goodwin', roleInEvent: 'Organized militia mobilization' },
    { eventId: 'event-plymouth-lexington-response', personId: 'person-plymouth-james-warren', roleInEvent: 'Directed Plymouth\'s response as political leader' },
    { eventId: 'event-plymouth-militia-march', personId: 'person-plymouth-theophilus-cotton', roleInEvent: 'Chaplain to militia forces' },
    { eventId: 'event-plymouth-loyalist-crisis', personId: 'person-plymouth-edward-winslow-jr', roleInEvent: 'Prominent Loyalist who departed Plymouth' },
    { eventId: 'event-plymouth-harbor-defense', personId: 'person-plymouth-nathaniel-goodwin', roleInEvent: 'Committee of Safety coordinator' },
    { eventId: 'event-plymouth-continental-army-recruitment', personId: 'person-plymouth-james-warren', roleInEvent: 'Paymaster general overseeing recruitment' },
    { eventId: 'event-plymouth-committee-correspondence', personId: 'person-plymouth-george-watson', roleInEvent: 'Committee member' },
    { eventId: 'event-plymouth-committee-correspondence', personId: 'person-plymouth-james-warren', roleInEvent: 'Committee member' },
    { eventId: 'event-plymouth-liberty-pole', personId: 'person-plymouth-theophilus-cotton', roleInEvent: 'Offered prayers and spiritual sanction at the raising' },
    { eventId: 'event-plymouth-non-importation', personId: 'person-plymouth-george-watson', roleInEvent: 'Merchant who enforced the agreement' },
    { eventId: 'event-plymouth-powder-alarm-response', personId: 'person-plymouth-nathaniel-goodwin', roleInEvent: 'Helped muster militia response' },
    { eventId: 'event-plymouth-wartime-supply', personId: 'person-plymouth-james-warren', roleInEvent: 'Paymaster general coordinating supply' },
    { eventId: 'event-plymouth-wartime-supply', personId: 'person-plymouth-george-watson', roleInEvent: 'Merchant facilitating supply procurement' },
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

  // Existing story 1 — update
  await prisma.story.upsert({
    where: { id: 'story-plymouth-mercy-warren' },
    update: {
      slug: 'woman-who-wrote-the-revolution',
      textVersion: `I have been asked many times why a woman would take up the pen in matters of politics, and my answer has always been the same: because the crisis demanded every voice that could speak, and because silence in the face of tyranny is a form of consent. I did not choose to write about the revolution — the revolution chose me, as it chose everyone who lived through those years with their eyes open and their conscience awake.

My husband James and I made our home in Plymouth, in the old Warren house that looked out toward the harbor. From that house, we could see the ships that came and went, the fishing boats and the merchantmen and, in the later years, the warships of the Royal Navy patrolling the coast. Plymouth was not Boston — we did not have the mobs, the soldiers quartered in our streets, the nightly confrontations between civilians and redcoats. But we had something that Boston did not: we had the memory of the Mayflower, the story of our founders, and the conviction that the liberties they had sought were the same liberties that Parliament was now determined to destroy.

Our home became a meeting place for the men who were shaping the resistance. Samuel Adams came, and his cousin John, and Mr. Hancock, and Dr. Warren, and others whose names are less well known but whose courage was no less. I listened to their debates, their plans, their arguments. I watched them weigh the costs of defiance against the costs of submission. And I recognized that the story of what they were doing needed to be told — not in the dry language of petitions and resolves, but in a form that would make people feel the urgency and the justice of the cause.

I turned to the theater. My plays were not meant for the stage — they were meant for the page, for the newspapers and pamphlets that circulated through the colony like blood through a body. In "The Adulateur," I gave Governor Hutchinson the name Rapatio and made him speak the language of a tyrant: vain, calculating, indifferent to the suffering of the people he governed. The satire was not subtle, nor was it meant to be. It was a weapon, and I wielded it as deliberately as any man wielded a musket.

"The Group" was published in 1775, just weeks before the fighting began at Lexington. It attacked the mandamus councillors — the men who had accepted crown appointments to replace the elected council — as cowards and sycophants. I knew some of these men personally. Edward Winslow, whose family had been in Plymouth since the first landing, was among them. It gave me no pleasure to write against a neighbor, but he had chosen his side, and I had chosen mine.

People ask whether I was afraid. Of course I was afraid. I published anonymously because I had to — not only because a woman's name on a political pamphlet would have invited ridicule, but because the consequences of being identified as the author of seditious writings were real. The British government imprisoned publishers and writers. They burned books and shut down presses. My brother James had been beaten so badly by customs agents that his mind never fully recovered. I knew what the crown could do to those who opposed it.

But fear is not the same as silence. I wrote because I believed that the cause was just, because I believed that the principles of self-governance that our Plymouth forebears had carried across the Atlantic were worth defending, and because I believed that history would vindicate us. After the war, I spent years writing my History — three volumes that told the story of the revolution as I had witnessed it, with all its nobility and all its imperfections. Mr. Adams was displeased with some of what I wrote about him. I regret the breach in our friendship, but I do not regret the words. A historian's first obligation is to the truth, not to the vanity of great men.

I am old now, and the revolution is a generation past. Young people speak of it as though it were inevitable, as though the outcome was foreordained. It was not. There were moments when everything hung in the balance, when the whole enterprise might have collapsed under the weight of division, exhaustion, and fear. That it did not collapse is a testament to the ordinary people — the farmers, the ministers, the merchants, and yes, the women — who held it together through sheer force of conviction. I wrote their story because someone had to, and because from my window in Plymouth, I could see both the harbor where the Mayflower had landed and the future that we were trying to build.`,
    },
    create: {
      id: 'story-plymouth-mercy-warren',
      townId: PLYMOUTH_TOWN_ID,
      title: 'The Woman Who Wrote the Revolution',
      slug: 'woman-who-wrote-the-revolution',
      storyType: 'HISTORICAL_VOICE',
      subjectPersonId: 'person-plymouth-mercy-otis-warren',
      verificationStatus: 'VERIFIED',
      textVersion: `I have been asked many times why a woman would take up the pen in matters of politics, and my answer has always been the same: because the crisis demanded every voice that could speak, and because silence in the face of tyranny is a form of consent. I did not choose to write about the revolution — the revolution chose me, as it chose everyone who lived through those years with their eyes open and their conscience awake.

My husband James and I made our home in Plymouth, in the old Warren house that looked out toward the harbor. From that house, we could see the ships that came and went, the fishing boats and the merchantmen and, in the later years, the warships of the Royal Navy patrolling the coast. Plymouth was not Boston — we did not have the mobs, the soldiers quartered in our streets, the nightly confrontations between civilians and redcoats. But we had something that Boston did not: we had the memory of the Mayflower, the story of our founders, and the conviction that the liberties they had sought were the same liberties that Parliament was now determined to destroy.

Our home became a meeting place for the men who were shaping the resistance. Samuel Adams came, and his cousin John, and Mr. Hancock, and Dr. Warren, and others whose names are less well known but whose courage was no less. I listened to their debates, their plans, their arguments. I watched them weigh the costs of defiance against the costs of submission. And I recognized that the story of what they were doing needed to be told — not in the dry language of petitions and resolves, but in a form that would make people feel the urgency and the justice of the cause.

I turned to the theater. My plays were not meant for the stage — they were meant for the page, for the newspapers and pamphlets that circulated through the colony like blood through a body. In "The Adulateur," I gave Governor Hutchinson the name Rapatio and made him speak the language of a tyrant: vain, calculating, indifferent to the suffering of the people he governed. The satire was not subtle, nor was it meant to be. It was a weapon, and I wielded it as deliberately as any man wielded a musket.

"The Group" was published in 1775, just weeks before the fighting began at Lexington. It attacked the mandamus councillors — the men who had accepted crown appointments to replace the elected council — as cowards and sycophants. I knew some of these men personally. Edward Winslow, whose family had been in Plymouth since the first landing, was among them. It gave me no pleasure to write against a neighbor, but he had chosen his side, and I had chosen mine.

People ask whether I was afraid. Of course I was afraid. I published anonymously because I had to — not only because a woman's name on a political pamphlet would have invited ridicule, but because the consequences of being identified as the author of seditious writings were real. The British government imprisoned publishers and writers. They burned books and shut down presses. My brother James had been beaten so badly by customs agents that his mind never fully recovered. I knew what the crown could do to those who opposed it.

But fear is not the same as silence. I wrote because I believed that the cause was just, because I believed that the principles of self-governance that our Plymouth forebears had carried across the Atlantic were worth defending, and because I believed that history would vindicate us. After the war, I spent years writing my History — three volumes that told the story of the revolution as I had witnessed it, with all its nobility and all its imperfections. Mr. Adams was displeased with some of what I wrote about him. I regret the breach in our friendship, but I do not regret the words. A historian's first obligation is to the truth, not to the vanity of great men.

I am old now, and the revolution is a generation past. Young people speak of it as though it were inevitable, as though the outcome was foreordained. It was not. There were moments when everything hung in the balance, when the whole enterprise might have collapsed under the weight of division, exhaustion, and fear. That it did not collapse is a testament to the ordinary people — the farmers, the ministers, the merchants, and yes, the women — who held it together through sheer force of conviction. I wrote their story because someone had to, and because from my window in Plymouth, I could see both the harbor where the Mayflower had landed and the future that we were trying to build.`,
      tags: ['plymouth', 'revolution', 'mercy-otis-warren', 'women', 'propaganda', 'literature'],
    },
  });

  // Existing story 2 — update
  await prisma.story.upsert({
    where: { id: 'story-plymouth-modern-pilgrim-revolution' },
    update: {
      slug: 'from-pilgrims-to-patriots',
      textVersion: `Most people who come to Plymouth want to see Plymouth Rock and hear about the Pilgrims. They walk down to the waterfront, peer under the granite canopy at the rock, take a photo, and check it off their list. They might visit Plimoth Patuxet, watch the costumed interpreters, and board the Mayflower II. Then they leave, believing they have seen what Plymouth has to offer. They have missed half the story.

The half they miss is the revolution. Plymouth's role in the American Revolution is not well known — it lacks the dramatic set pieces of Boston's Tea Party or Lexington's battle on the green. There were no shots fired in Plymouth, no famous midnight rides, no iconic confrontations between redcoats and citizens. But what happened in Plymouth between 1772 and 1776 was in many ways more representative of how the revolution actually unfolded across most of America: through committee meetings, town votes, militia musters, economic boycotts, and the quiet determination of ordinary people to govern themselves.

The connection between Plymouth's Pilgrim founding and its revolutionary identity is not accidental. By the 1770s, Plymouth's residents had already spent a century and a half cultivating the story of the Mayflower Compact as a foundational document of self-governance. When the Coercive Acts threatened to strip Massachusetts of its charter rights, Plymouth's patriots did not see this as a new crisis — they saw it as the latest assault on principles their ancestors had carried across the Atlantic in 1620. The Mayflower Compact, which established governance by consent of the governed, was invoked alongside John Locke and the English Bill of Rights as a precedent for resistance.

The most visible symbol of this connection was the 1774 attempt to move Plymouth Rock from the waterfront to the town meeting house. A group of patriots hitched the rock to oxen and tried to haul it up the hill. The rock split in two — an accident that was immediately read as a metaphor for the breaking of the bond between the colonies and the crown. The upper half was carried to the town square, where it sat for decades as a revolutionary monument. The lower half stayed at the shore. They were not reunited until 1880.

James and Mercy Otis Warren were at the center of Plymouth's revolutionary activity. James served in the Massachusetts General Court, then in the Provincial Congress, eventually becoming its president after Dr. Joseph Warren was killed at Bunker Hill. Mercy wrote satirical plays that savaged the royal governor and the Loyalist establishment, publishing them anonymously in Boston newspapers. Their home was a political salon where Samuel Adams, John Adams, John Hancock, and other patriot leaders gathered to plan and debate. The revolution in Plymouth was organized in living rooms and at dinner tables as much as in formal assemblies.

Plymouth also experienced the revolution as a civil conflict. Edward Winslow Jr., whose ancestor had been a Mayflower passenger and three-time governor of Plymouth Colony, chose the Loyalist side. He was appointed a mandamus councillor and eventually fled Plymouth for British-held Boston, then Halifax, and finally New Brunswick. His departure was a wrenching event for a community that took its Pilgrim heritage seriously — the Winslows had been in Plymouth since the very beginning, and their loss was a reminder that the revolution divided not just colonies from empire but neighbors from neighbors.

When the Lexington Alarm reached Plymouth on April 19, 1775, the town was ready. The Committee of Safety had organized militia musters, stockpiled arms, and planned routes of march. Plymouth's minutemen set out on the forty-mile march to Boston within hours. They joined the thousands of militia who converged on the Cambridge area to besiege the British, and they served in the siege lines through the spring and summer.

Today, visitors to Plymouth can trace this revolutionary history through the town's landscapes. Burial Hill, where the Pilgrims built their first fort, served as a militia muster ground and observation post. The courthouse site on Court Street was where the royal courts were forcibly shut down in 1774. Cole's Hill, overlooking the harbor, was a gathering point for patriot rallies. The National Monument to the Forefathers, though built in the nineteenth century, encodes the revolutionary-era understanding of Plymouth's founding principles in its allegorical figures of Faith, Morality, Education, Law, and Liberty.

The story of Plymouth's revolution is not a story of dramatic confrontation. It is a story of a community that drew on its deepest traditions to justify and sustain an act of collective defiance. It is the story of town meetings and committee sessions, of women who wrote propaganda and men who marched forty miles with muskets they had loaded themselves. It is, in many ways, the most American of stories — a story not of heroes on horseback but of citizens who decided, together, that they would govern themselves.`,
    },
    create: {
      id: 'story-plymouth-modern-pilgrim-revolution',
      townId: PLYMOUTH_TOWN_ID,
      title: 'From Pilgrims to Patriots',
      slug: 'from-pilgrims-to-patriots',
      storyType: 'MODERN_VOICE',
      narratorName: 'Plymouth Historical Commission',
      narratorRole: 'Town of Plymouth',
      verificationStatus: 'VERIFIED',
      textVersion: `Most people who come to Plymouth want to see Plymouth Rock and hear about the Pilgrims. They walk down to the waterfront, peer under the granite canopy at the rock, take a photo, and check it off their list. They might visit Plimoth Patuxet, watch the costumed interpreters, and board the Mayflower II. Then they leave, believing they have seen what Plymouth has to offer. They have missed half the story.

The half they miss is the revolution. Plymouth's role in the American Revolution is not well known — it lacks the dramatic set pieces of Boston's Tea Party or Lexington's battle on the green. There were no shots fired in Plymouth, no famous midnight rides, no iconic confrontations between redcoats and citizens. But what happened in Plymouth between 1772 and 1776 was in many ways more representative of how the revolution actually unfolded across most of America: through committee meetings, town votes, militia musters, economic boycotts, and the quiet determination of ordinary people to govern themselves.

The connection between Plymouth's Pilgrim founding and its revolutionary identity is not accidental. By the 1770s, Plymouth's residents had already spent a century and a half cultivating the story of the Mayflower Compact as a foundational document of self-governance. When the Coercive Acts threatened to strip Massachusetts of its charter rights, Plymouth's patriots did not see this as a new crisis — they saw it as the latest assault on principles their ancestors had carried across the Atlantic in 1620. The Mayflower Compact, which established governance by consent of the governed, was invoked alongside John Locke and the English Bill of Rights as a precedent for resistance.

The most visible symbol of this connection was the 1774 attempt to move Plymouth Rock from the waterfront to the town meeting house. A group of patriots hitched the rock to oxen and tried to haul it up the hill. The rock split in two — an accident that was immediately read as a metaphor for the breaking of the bond between the colonies and the crown. The upper half was carried to the town square, where it sat for decades as a revolutionary monument. The lower half stayed at the shore. They were not reunited until 1880.

James and Mercy Otis Warren were at the center of Plymouth's revolutionary activity. James served in the Massachusetts General Court, then in the Provincial Congress, eventually becoming its president after Dr. Joseph Warren was killed at Bunker Hill. Mercy wrote satirical plays that savaged the royal governor and the Loyalist establishment, publishing them anonymously in Boston newspapers. Their home was a political salon where Samuel Adams, John Adams, John Hancock, and other patriot leaders gathered to plan and debate. The revolution in Plymouth was organized in living rooms and at dinner tables as much as in formal assemblies.

Plymouth also experienced the revolution as a civil conflict. Edward Winslow Jr., whose ancestor had been a Mayflower passenger and three-time governor of Plymouth Colony, chose the Loyalist side. He was appointed a mandamus councillor and eventually fled Plymouth for British-held Boston, then Halifax, and finally New Brunswick. His departure was a wrenching event for a community that took its Pilgrim heritage seriously — the Winslows had been in Plymouth since the very beginning, and their loss was a reminder that the revolution divided not just colonies from empire but neighbors from neighbors.

When the Lexington Alarm reached Plymouth on April 19, 1775, the town was ready. The Committee of Safety had organized militia musters, stockpiled arms, and planned routes of march. Plymouth's minutemen set out on the forty-mile march to Boston within hours. They joined the thousands of militia who converged on the Cambridge area to besiege the British, and they served in the siege lines through the spring and summer.

Today, visitors to Plymouth can trace this revolutionary history through the town's landscapes. Burial Hill, where the Pilgrims built their first fort, served as a militia muster ground and observation post. The courthouse site on Court Street was where the royal courts were forcibly shut down in 1774. Cole's Hill, overlooking the harbor, was a gathering point for patriot rallies. The National Monument to the Forefathers, though built in the nineteenth century, encodes the revolutionary-era understanding of Plymouth's founding principles in its allegorical figures of Faith, Morality, Education, Law, and Liberty.

The story of Plymouth's revolution is not a story of dramatic confrontation. It is a story of a community that drew on its deepest traditions to justify and sustain an act of collective defiance. It is the story of town meetings and committee sessions, of women who wrote propaganda and men who marched forty miles with muskets they had loaded themselves. It is, in many ways, the most American of stories — a story not of heroes on horseback but of citizens who decided, together, that they would govern themselves.`,
      tags: ['plymouth', 'revolution', 'pilgrims', 'mayflower-compact', 'self-governance'],
    },
  });

  // New story 3
  await prisma.story.upsert({
    where: { id: 'story-plymouth-winslow-exile' },
    update: {
      slug: 'the-loyalist-son-of-plymouth',
      textVersion: `The last time I saw Plymouth was from the deck of a ship in Boston Harbor, in March of 1776. The British fleet was departing — eleven thousand soldiers, a thousand civilians, and everything we could carry loaded into over a hundred vessels. I could not see Plymouth from Boston, of course, but I looked south across the gray water and thought of the house where I had grown up, the streets I had walked, the burial ground on the hill where my ancestors rested. I was thirty years old, and I was leaving everything I had ever known.

My family had been in Plymouth since the beginning. My great-great-great-grandfather Edward Winslow arrived on the Mayflower in 1620. He served three times as governor of Plymouth Colony. His portrait — the only one painted from life of any Mayflower passenger — hung in our home. I grew up knowing that the Winslow name meant something in Plymouth, that our family had helped build the town from nothing, had negotiated the peace with Massasoit, had governed through the hardest years of the colony's existence.

I graduated from Harvard in 1765 and returned to Plymouth to practice law. The town was already beginning to divide over the question of British authority. I understood the grievances — the taxes, the quartering of troops, the closing of the port of Boston — but I could not bring myself to believe that the answer was to overthrow the established order. I believed in the British constitution. I believed that grievances could be addressed through legal channels. I believed that the mob violence I saw in Boston — the tarring and feathering, the burning of effigies, the destruction of property — was not liberty but anarchy.

When the Massachusetts Government Act was passed in 1774, I was appointed to the new council. I accepted the appointment because I believed that governance required order, and that order required men willing to serve. I did not foresee how completely the ground would shift beneath my feet. Within weeks, armed crowds were appearing at the homes of councillors across Massachusetts, demanding their resignations. In Plymouth, where my family had lived for a hundred and fifty years, men I had known my whole life came to my door and told me that I was no longer welcome in my own town.

I left for Boston, where the British garrison provided a measure of safety. Mercy Warren — my neighbor, the wife of James Warren — published a play called "The Group" that held up the mandamus councillors to ridicule and contempt. I recognized myself in her caricatures. She was a brilliant woman and a formidable one, and her pen was sharp enough to draw blood. I did not blame her — she believed in her cause as I believed in mine — but the wound was real.

In Boston, I served the crown as best I could. I helped organize and supply the Loyalist regiments — men like me who had chosen the other side of the divide. When the evacuation came, I had no choice but to go. To stay was to face confiscation, imprisonment, or worse. I sailed to Halifax, then to New York, and after the war ended, I settled in New Brunswick, where many of us tried to build a new life in a loyal colony.

I never returned to Plymouth. The state of Massachusetts confiscated my property, as it confiscated the property of all who had been declared enemies of the republic. My family name, which had been honored in Plymouth for over a century and a half, was erased from the town's roll of worthy citizens. In New Brunswick, I served on the provincial council and helped establish the institutions of a colony that we hoped would embody the values of order, loyalty, and lawful governance that the revolutionaries had rejected.

I do not expect sympathy. History is written by the victors, and the victors have written me out of Plymouth's story. But I would ask those who read this to consider that the revolution was not a contest between heroes and villains. It was a civil war, fought between people who had lived as neighbors, worshipped in the same churches, and buried their dead on the same hillside. I lost my home, my country, and my place in the story of the community my family had helped to found. That, too, is part of what the revolution meant.`,
    },
    create: {
      id: 'story-plymouth-winslow-exile',
      townId: PLYMOUTH_TOWN_ID,
      title: 'The Loyalist Son of Plymouth',
      slug: 'the-loyalist-son-of-plymouth',
      storyType: 'HISTORICAL_VOICE',
      subjectPersonId: 'person-plymouth-edward-winslow-jr',
      verificationStatus: 'VERIFIED',
      textVersion: `The last time I saw Plymouth was from the deck of a ship in Boston Harbor, in March of 1776. The British fleet was departing — eleven thousand soldiers, a thousand civilians, and everything we could carry loaded into over a hundred vessels. I could not see Plymouth from Boston, of course, but I looked south across the gray water and thought of the house where I had grown up, the streets I had walked, the burial ground on the hill where my ancestors rested. I was thirty years old, and I was leaving everything I had ever known.

My family had been in Plymouth since the beginning. My great-great-great-grandfather Edward Winslow arrived on the Mayflower in 1620. He served three times as governor of Plymouth Colony. His portrait — the only one painted from life of any Mayflower passenger — hung in our home. I grew up knowing that the Winslow name meant something in Plymouth, that our family had helped build the town from nothing, had negotiated the peace with Massasoit, had governed through the hardest years of the colony's existence.

I graduated from Harvard in 1765 and returned to Plymouth to practice law. The town was already beginning to divide over the question of British authority. I understood the grievances — the taxes, the quartering of troops, the closing of the port of Boston — but I could not bring myself to believe that the answer was to overthrow the established order. I believed in the British constitution. I believed that grievances could be addressed through legal channels. I believed that the mob violence I saw in Boston — the tarring and feathering, the burning of effigies, the destruction of property — was not liberty but anarchy.

When the Massachusetts Government Act was passed in 1774, I was appointed to the new council. I accepted the appointment because I believed that governance required order, and that order required men willing to serve. I did not foresee how completely the ground would shift beneath my feet. Within weeks, armed crowds were appearing at the homes of councillors across Massachusetts, demanding their resignations. In Plymouth, where my family had lived for a hundred and fifty years, men I had known my whole life came to my door and told me that I was no longer welcome in my own town.

I left for Boston, where the British garrison provided a measure of safety. Mercy Warren — my neighbor, the wife of James Warren — published a play called "The Group" that held up the mandamus councillors to ridicule and contempt. I recognized myself in her caricatures. She was a brilliant woman and a formidable one, and her pen was sharp enough to draw blood. I did not blame her — she believed in her cause as I believed in mine — but the wound was real.

In Boston, I served the crown as best I could. I helped organize and supply the Loyalist regiments — men like me who had chosen the other side of the divide. When the evacuation came, I had no choice but to go. To stay was to face confiscation, imprisonment, or worse. I sailed to Halifax, then to New York, and after the war ended, I settled in New Brunswick, where many of us tried to build a new life in a loyal colony.

I never returned to Plymouth. The state of Massachusetts confiscated my property, as it confiscated the property of all who had been declared enemies of the republic. My family name, which had been honored in Plymouth for over a century and a half, was erased from the town's roll of worthy citizens. In New Brunswick, I served on the provincial council and helped establish the institutions of a colony that we hoped would embody the values of order, loyalty, and lawful governance that the revolutionaries had rejected.

I do not expect sympathy. History is written by the victors, and the victors have written me out of Plymouth's story. But I would ask those who read this to consider that the revolution was not a contest between heroes and villains. It was a civil war, fought between people who had lived as neighbors, worshipped in the same churches, and buried their dead on the same hillside. I lost my home, my country, and my place in the story of the community my family had helped to found. That, too, is part of what the revolution meant.`,
      tags: ['plymouth', 'revolution', 'loyalist', 'edward-winslow', 'exile', 'civil-war'],
    },
  });

  // New story 4
  await prisma.story.upsert({
    where: { id: 'story-plymouth-rock-splitting' },
    update: {
      slug: 'the-rock-that-split',
      textVersion: `There is a rock on the Plymouth waterfront that Americans have been arguing about for 250 years. It is not a large rock — what remains of it could fit comfortably in the bed of a pickup truck. It bears the carved date "1620" and sits at sea level beneath a classical stone canopy, where tourists peer down at it and wonder, quietly or aloud, whether this is really all there is. The honest answer is that the rock is both less and more than it appears.

Less, because the historical evidence for Plymouth Rock as the Pilgrims' landing site is thin. No account written by the Plymouth colonists mentions a rock. The identification dates to 1741, when a ninety-four-year-old church elder named Thomas Faunce was carried in a chair to the waterfront and pointed to a specific boulder, saying that his father had told him it was where the passengers first stepped ashore. Faunce may have been right. He may also have been a very old man telling a story he had heard decades earlier, filtered through the imperfect medium of memory.

More, because what happened to the rock after 1741 tells us something important about how Americans have used their founding stories. By the 1770s, Plymouth Rock had become a symbol of American origins — not just Plymouth's origins but the nation's. When the crisis with Britain came, Plymouth's patriots recognized the rock's symbolic potential and decided to put it to use.

In 1774, a group of patriots led by Colonel Theophilus Cotton and other members of the Committee of Safety organized an effort to move the rock from the waterfront to the town meeting house. The plan was straightforward: hitch the rock to a team of twenty oxen, drag it up the hill, and install it at the seat of civic authority as a permanent symbol of the connection between Plymouth's founding principles and the current struggle for self-governance. The rock would be a declaration carved not in words but in granite: the liberties the Pilgrims had sought were the same liberties the patriots now defended.

The plan went wrong almost immediately. As the oxen strained and the tackle tightened, the rock split. The upper portion separated from the lower half, which remained embedded in the ground at the waterfront. The patriots were undaunted — they hauled the upper half up the hill and deposited it in the town square, where it remained for nearly a century, gradually becoming chipped and worn as souvenir hunters carved off pieces.

The splitting of Plymouth Rock was an accident, but it was an accident that acquired meaning almost instantly. The division of the rock was read as a metaphor for the division of the British Empire — the sundering of old bonds that could never be fully restored. When the two halves were finally reunited in 1880, cemented together at the waterfront and placed under a protective canopy, the reunification was similarly interpreted: the nation, divided by civil war and reconstruction, was being made whole again. The rock has been a mirror for American self-understanding, reflecting back whatever meaning each generation has needed to find.

Today Plymouth Rock sits behind an iron fence at sea level, inscribed with "1620" in characters that were carved in the nineteenth century, not the seventeenth. The tide washes over it. Visitors drop coins and flowers. Some are moved; others are disappointed by its modest size. But the rock's significance was never really about its physical dimensions. It was about the story a community told itself about where it came from and what it stood for — a story that proved powerful enough to fuel a revolution.

The rock that split in 1774 was not just a piece of granite. It was an act of historical imagination, a community's attempt to make its past physically present in its moment of crisis. When Plymouth's patriots hauled that broken rock up the hill to the meeting house, they were declaring that the principles of the Mayflower Compact — consent, self-governance, covenant community — were worth fighting for. The rock split, as all symbols eventually do under the weight of the meanings we load onto them. But the idea it represented held together.`,
    },
    create: {
      id: 'story-plymouth-rock-splitting',
      townId: PLYMOUTH_TOWN_ID,
      title: 'The Rock That Split',
      slug: 'the-rock-that-split',
      storyType: 'MODERN_VOICE',
      narratorName: 'Pilgrim Hall Museum',
      narratorRole: 'Museum Historical Interpretation',
      verificationStatus: 'VERIFIED',
      textVersion: `There is a rock on the Plymouth waterfront that Americans have been arguing about for 250 years. It is not a large rock — what remains of it could fit comfortably in the bed of a pickup truck. It bears the carved date "1620" and sits at sea level beneath a classical stone canopy, where tourists peer down at it and wonder, quietly or aloud, whether this is really all there is. The honest answer is that the rock is both less and more than it appears.

Less, because the historical evidence for Plymouth Rock as the Pilgrims' landing site is thin. No account written by the Plymouth colonists mentions a rock. The identification dates to 1741, when a ninety-four-year-old church elder named Thomas Faunce was carried in a chair to the waterfront and pointed to a specific boulder, saying that his father had told him it was where the passengers first stepped ashore. Faunce may have been right. He may also have been a very old man telling a story he had heard decades earlier, filtered through the imperfect medium of memory.

More, because what happened to the rock after 1741 tells us something important about how Americans have used their founding stories. By the 1770s, Plymouth Rock had become a symbol of American origins — not just Plymouth's origins but the nation's. When the crisis with Britain came, Plymouth's patriots recognized the rock's symbolic potential and decided to put it to use.

In 1774, a group of patriots led by Colonel Theophilus Cotton and other members of the Committee of Safety organized an effort to move the rock from the waterfront to the town meeting house. The plan was straightforward: hitch the rock to a team of twenty oxen, drag it up the hill, and install it at the seat of civic authority as a permanent symbol of the connection between Plymouth's founding principles and the current struggle for self-governance. The rock would be a declaration carved not in words but in granite: the liberties the Pilgrims had sought were the same liberties the patriots now defended.

The plan went wrong almost immediately. As the oxen strained and the tackle tightened, the rock split. The upper portion separated from the lower half, which remained embedded in the ground at the waterfront. The patriots were undaunted — they hauled the upper half up the hill and deposited it in the town square, where it remained for nearly a century, gradually becoming chipped and worn as souvenir hunters carved off pieces.

The splitting of Plymouth Rock was an accident, but it was an accident that acquired meaning almost instantly. The division of the rock was read as a metaphor for the division of the British Empire — the sundering of old bonds that could never be fully restored. When the two halves were finally reunited in 1880, cemented together at the waterfront and placed under a protective canopy, the reunification was similarly interpreted: the nation, divided by civil war and reconstruction, was being made whole again. The rock has been a mirror for American self-understanding, reflecting back whatever meaning each generation has needed to find.

Today Plymouth Rock sits behind an iron fence at sea level, inscribed with "1620" in characters that were carved in the nineteenth century, not the seventeenth. The tide washes over it. Visitors drop coins and flowers. Some are moved; others are disappointed by its modest size. But the rock's significance was never really about its physical dimensions. It was about the story a community told itself about where it came from and what it stood for — a story that proved powerful enough to fuel a revolution.

The rock that split in 1774 was not just a piece of granite. It was an act of historical imagination, a community's attempt to make its past physically present in its moment of crisis. When Plymouth's patriots hauled that broken rock up the hill to the meeting house, they were declaring that the principles of the Mayflower Compact — consent, self-governance, covenant community — were worth fighting for. The rock split, as all symbols eventually do under the weight of the meanings we load onto them. But the idea it represented held together.`,
      tags: ['plymouth', 'revolution', 'plymouth-rock', 'symbolism', 'founding-mythology'],
    },
  });

  console.log('  Stories seeded.');
}

// =============================================================================
// LESSONS
// =============================================================================

async function seedLessons() {
  console.log('  Seeding lesson plans...');

  // Existing lesson 1 — update
  await prisma.lessonPlan.upsert({
    where: { id: 'cmm2s5ojn00dtp5g79j6v85ul' },
    update: {
      slug: 'pilgrims-to-patriots-lesson',
      summary: 'Students trace the intellectual and political line from the Mayflower Compact of 1620 to Plymouth\'s revolutionary resistance in the 1770s, examining how a founding mythology was reinterpreted to serve the purposes of revolution. The lesson explores how communities use their origin stories to justify political action.',
      lessonData: {
        objectives: [
          'Analyze the text of the Mayflower Compact and identify its core principles of self-governance',
          'Explain how Plymouth\'s founding story was reinterpreted during the revolutionary era',
          'Evaluate the role of historical mythology in shaping political identity',
          'Compare Plymouth\'s revolutionary experience to that of larger towns like Boston',
        ],
        essentialQuestions: [
          'How did Plymouth\'s Pilgrim heritage shape its response to the revolutionary crisis?',
          'Is it legitimate to reinterpret historical events to serve present political purposes?',
          'What was the significance of the 1774 attempt to move Plymouth Rock?',
          'How did the revolution unfold differently in a small town like Plymouth compared to a city like Boston?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Display images of Plymouth Rock and the Mayflower Compact side by side. Ask students: What do these two objects have in common? What story do they tell about America? Record student responses and revisit at the end of the lesson.',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'The Mayflower Compact: text, context, and significance as a founding document',
            'Plymouth\'s political identity by the 1770s: how the Pilgrim story was cultivated over 150 years',
            'Key events in Plymouth\'s revolution: Committee of Correspondence, court closure, militia mobilization',
            'The Warrens of Plymouth: James and Mercy Otis Warren as political and intellectual leaders',
            'The splitting of Plymouth Rock in 1774: symbolism and meaning',
          ],
        },
        guidedPractice: {
          duration: '25 minutes',
          activities: [
            'Document Comparison: Students read excerpts from the Mayflower Compact alongside Plymouth\'s 1774 resolves against the Coercive Acts. Identify shared language, shared principles, and differences in tone and purpose.',
            'Symbol Analysis: In small groups, analyze the 1774 Plymouth Rock moving as a symbolic act. What message were the patriots sending? How does this compare to other revolutionary symbols (Liberty Tree, liberty poles, tea destruction)?',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Write a 400-word essay answering one of the following: (1) How did Plymouth\'s Pilgrim heritage strengthen or complicate its revolutionary identity? OR (2) Was the Mayflower Compact truly a precedent for the American Revolution, or were the patriots reading their own ideas into an older document? Support your argument with specific evidence.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Return to the warm-up images. Ask students: Has your understanding of what Plymouth Rock and the Mayflower Compact represent changed? How do communities use their origin stories? Exit ticket: Name one way Plymouth\'s revolutionary experience was similar to Boston\'s and one way it was different.',
        },
        differentiation: {
          struggling: 'Provide a simplified version of the Mayflower Compact with key terms defined. Offer a sentence-starter template for the essay. Use a Venn diagram for the document comparison.',
          advanced: 'Research how Plymouth Rock has been used as a symbol in later American movements (abolition, women\'s suffrage, immigration debates). Write a second essay analyzing one of these later uses.',
          ell: 'Pre-teach vocabulary: compact, covenant, self-governance, resolve, mythology. Provide bilingual glossary. Pair with fluent English speaker for group work.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.1', 'RH.6-8.2', 'RH.6-8.6', 'WHST.6-8.1'],
        c3Framework: ['D2.His.1.6-8', 'D2.His.5.6-8', 'D2.His.14.6-8', 'D2.Civ.1.6-8'],
        note: 'Aligned to Common Core literacy standards for history/social studies and the C3 Framework. Adaptable for grades 6-8.',
      },
    },
    create: {
      id: 'cmm2s5ojn00dtp5g79j6v85ul',
      townId: PLYMOUTH_TOWN_ID,
      title: 'From Pilgrims to Patriots: Plymouth\'s Journey from Founding Myth to Revolution',
      slug: 'pilgrims-to-patriots-lesson',
      gradeRange: '6-8',
      estimatedDuration: '2-3 class periods',
      summary: 'Students trace the intellectual and political line from the Mayflower Compact of 1620 to Plymouth\'s revolutionary resistance in the 1770s, examining how a founding mythology was reinterpreted to serve the purposes of revolution. The lesson explores how communities use their origin stories to justify political action.',
      lessonData: {
        objectives: [
          'Analyze the text of the Mayflower Compact and identify its core principles of self-governance',
          'Explain how Plymouth\'s founding story was reinterpreted during the revolutionary era',
          'Evaluate the role of historical mythology in shaping political identity',
          'Compare Plymouth\'s revolutionary experience to that of larger towns like Boston',
        ],
        essentialQuestions: [
          'How did Plymouth\'s Pilgrim heritage shape its response to the revolutionary crisis?',
          'Is it legitimate to reinterpret historical events to serve present political purposes?',
          'What was the significance of the 1774 attempt to move Plymouth Rock?',
          'How did the revolution unfold differently in a small town like Plymouth compared to a city like Boston?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Display images of Plymouth Rock and the Mayflower Compact side by side. Ask students: What do these two objects have in common? What story do they tell about America? Record student responses and revisit at the end of the lesson.',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'The Mayflower Compact: text, context, and significance as a founding document',
            'Plymouth\'s political identity by the 1770s: how the Pilgrim story was cultivated over 150 years',
            'Key events in Plymouth\'s revolution: Committee of Correspondence, court closure, militia mobilization',
            'The Warrens of Plymouth: James and Mercy Otis Warren as political and intellectual leaders',
            'The splitting of Plymouth Rock in 1774: symbolism and meaning',
          ],
        },
        guidedPractice: {
          duration: '25 minutes',
          activities: [
            'Document Comparison: Students read excerpts from the Mayflower Compact alongside Plymouth\'s 1774 resolves against the Coercive Acts. Identify shared language, shared principles, and differences in tone and purpose.',
            'Symbol Analysis: In small groups, analyze the 1774 Plymouth Rock moving as a symbolic act. What message were the patriots sending? How does this compare to other revolutionary symbols (Liberty Tree, liberty poles, tea destruction)?',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Write a 400-word essay answering one of the following: (1) How did Plymouth\'s Pilgrim heritage strengthen or complicate its revolutionary identity? OR (2) Was the Mayflower Compact truly a precedent for the American Revolution, or were the patriots reading their own ideas into an older document? Support your argument with specific evidence.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Return to the warm-up images. Ask students: Has your understanding of what Plymouth Rock and the Mayflower Compact represent changed? How do communities use their origin stories? Exit ticket: Name one way Plymouth\'s revolutionary experience was similar to Boston\'s and one way it was different.',
        },
        differentiation: {
          struggling: 'Provide a simplified version of the Mayflower Compact with key terms defined. Offer a sentence-starter template for the essay. Use a Venn diagram for the document comparison.',
          advanced: 'Research how Plymouth Rock has been used as a symbol in later American movements (abolition, women\'s suffrage, immigration debates). Write a second essay analyzing one of these later uses.',
          ell: 'Pre-teach vocabulary: compact, covenant, self-governance, resolve, mythology. Provide bilingual glossary. Pair with fluent English speaker for group work.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.1', 'RH.6-8.2', 'RH.6-8.6', 'WHST.6-8.1'],
        c3Framework: ['D2.His.1.6-8', 'D2.His.5.6-8', 'D2.His.14.6-8', 'D2.Civ.1.6-8'],
        note: 'Aligned to Common Core literacy standards for history/social studies and the C3 Framework. Adaptable for grades 6-8.',
      },
    },
  });

  // Existing lesson 2 — update
  await prisma.lessonPlan.upsert({
    where: { id: 'cmm2s5ok400dup5g7abx2ct1b' },
    update: {
      slug: 'covenant-and-revolution-lesson',
      summary: 'Students analyze how Plymouth\'s covenant theology — rooted in the Separatist tradition and formalized in the Mayflower Compact — provided an intellectual framework for revolutionary resistance. The lesson examines the relationship between religious and political thought in eighteenth-century New England.',
      lessonData: {
        objectives: [
          'Explain the concept of covenant theology and its roots in Plymouth\'s Separatist tradition',
          'Analyze how religious ideas informed political resistance in Revolutionary-era Plymouth',
          'Evaluate the role of clergymen like Theophilus Cotton in mobilizing patriot sentiment',
          'Compare covenant-based arguments for revolution with Enlightenment-based arguments',
        ],
        essentialQuestions: [
          'How did Plymouth\'s religious heritage shape its political identity?',
          'What role did the clergy play in legitimizing the revolution?',
          'Is there a meaningful difference between saying "we have a right to resist tyranny" and "we have a duty to resist tyranny"?',
          'How did covenant theology interact with Enlightenment political thought in shaping the revolutionary argument?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Present two statements: (A) "Government derives its authority from the consent of the governed" (Locke/Declaration of Independence) and (B) "When rulers violate the covenant with the people, the people are released from obedience" (covenant theology). Ask students: Are these saying the same thing? What is different about each?',
        },
        directInstruction: {
          duration: '25 minutes',
          content: [
            'Plymouth\'s Separatist origins: the theology of the covenant and its political implications',
            'The Mayflower Compact as a covenantal document: mutual agreement, voluntary submission, governance by consent',
            'The evolution of covenant thinking through 150 years of Plymouth history',
            'Revolutionary-era sermons: how ministers framed resistance as a religious duty',
            'Mercy Otis Warren\'s integration of covenant language and Enlightenment principles',
            'Comparison: Locke\'s social contract vs. the Puritan covenant',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Source Analysis: Students read excerpts from (1) the Mayflower Compact, (2) a revolutionary-era sermon on resistance to tyranny, and (3) a passage from Locke\'s Second Treatise. For each, identify the source of governmental authority and the justification for resistance.',
            'Debate Preparation: Divide students into two groups. One argues that the American Revolution was primarily motivated by religious/covenantal ideas; the other argues it was primarily motivated by Enlightenment/secular ideas. Each group prepares using Plymouth-specific evidence.',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Write a 500-word analytical essay: How did covenant theology and Enlightenment political philosophy work together (or in tension) in Plymouth\'s revolutionary movement? Use at least three specific examples from Plymouth\'s history, including at least one primary source reference.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Structured debate: Each group presents its strongest argument (2 minutes per side) followed by rebuttals (1 minute per side). Class votes on which argument was more convincing. Discuss: Must we choose between these two interpretations, or can both be true? Exit ticket: In one sentence, explain how Plymouth\'s Separatist heritage contributed to its revolutionary resistance.',
        },
        differentiation: {
          struggling: 'Provide annotated versions of the primary sources with key terms defined in the margins. Offer a graphic organizer that maps the similarities and differences between covenant and social contract theory.',
          advanced: 'Research the concept of "civil religion" and analyze whether Plymouth\'s revolutionary rhetoric constitutes an early example. Write a comparative essay connecting Plymouth\'s covenant politics to later American movements.',
          ell: 'Pre-teach vocabulary: covenant, theology, consent, Enlightenment, social contract, tyranny, Separatist. Provide simplified paraphrases of primary source excerpts alongside the originals.',
        },
      },
      standards: {
        commonCore: ['RH.9-10.1', 'RH.9-10.2', 'RH.9-10.6', 'RH.9-10.9', 'WHST.9-10.1'],
        c3Framework: ['D2.His.1.9-12', 'D2.His.4.9-12', 'D2.His.5.9-12', 'D2.Civ.1.9-12'],
        note: 'Designed for grades 9-12. Requires familiarity with basic Reformation history and Enlightenment political philosophy.',
      },
    },
    create: {
      id: 'cmm2s5ok400dup5g7abx2ct1b',
      townId: PLYMOUTH_TOWN_ID,
      title: 'Covenant and Revolution: Plymouth\'s Political Identity from 1620 to 1776',
      slug: 'covenant-and-revolution-lesson',
      gradeRange: '9-12',
      estimatedDuration: '3-4 class periods',
      summary: 'Students analyze how Plymouth\'s covenant theology — rooted in the Separatist tradition and formalized in the Mayflower Compact — provided an intellectual framework for revolutionary resistance. The lesson examines the relationship between religious and political thought in eighteenth-century New England.',
      lessonData: {
        objectives: [
          'Explain the concept of covenant theology and its roots in Plymouth\'s Separatist tradition',
          'Analyze how religious ideas informed political resistance in Revolutionary-era Plymouth',
          'Evaluate the role of clergymen like Theophilus Cotton in mobilizing patriot sentiment',
          'Compare covenant-based arguments for revolution with Enlightenment-based arguments',
        ],
        essentialQuestions: [
          'How did Plymouth\'s religious heritage shape its political identity?',
          'What role did the clergy play in legitimizing the revolution?',
          'Is there a meaningful difference between saying "we have a right to resist tyranny" and "we have a duty to resist tyranny"?',
          'How did covenant theology interact with Enlightenment political thought in shaping the revolutionary argument?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Present two statements: (A) "Government derives its authority from the consent of the governed" (Locke/Declaration of Independence) and (B) "When rulers violate the covenant with the people, the people are released from obedience" (covenant theology). Ask students: Are these saying the same thing? What is different about each?',
        },
        directInstruction: {
          duration: '25 minutes',
          content: [
            'Plymouth\'s Separatist origins: the theology of the covenant and its political implications',
            'The Mayflower Compact as a covenantal document: mutual agreement, voluntary submission, governance by consent',
            'The evolution of covenant thinking through 150 years of Plymouth history',
            'Revolutionary-era sermons: how ministers framed resistance as a religious duty',
            'Mercy Otis Warren\'s integration of covenant language and Enlightenment principles',
            'Comparison: Locke\'s social contract vs. the Puritan covenant',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Source Analysis: Students read excerpts from (1) the Mayflower Compact, (2) a revolutionary-era sermon on resistance to tyranny, and (3) a passage from Locke\'s Second Treatise. For each, identify the source of governmental authority and the justification for resistance.',
            'Debate Preparation: Divide students into two groups. One argues that the American Revolution was primarily motivated by religious/covenantal ideas; the other argues it was primarily motivated by Enlightenment/secular ideas. Each group prepares using Plymouth-specific evidence.',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Write a 500-word analytical essay: How did covenant theology and Enlightenment political philosophy work together (or in tension) in Plymouth\'s revolutionary movement? Use at least three specific examples from Plymouth\'s history, including at least one primary source reference.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Structured debate: Each group presents its strongest argument (2 minutes per side) followed by rebuttals (1 minute per side). Class votes on which argument was more convincing. Discuss: Must we choose between these two interpretations, or can both be true? Exit ticket: In one sentence, explain how Plymouth\'s Separatist heritage contributed to its revolutionary resistance.',
        },
        differentiation: {
          struggling: 'Provide annotated versions of the primary sources with key terms defined in the margins. Offer a graphic organizer that maps the similarities and differences between covenant and social contract theory.',
          advanced: 'Research the concept of "civil religion" and analyze whether Plymouth\'s revolutionary rhetoric constitutes an early example. Write a comparative essay connecting Plymouth\'s covenant politics to later American movements.',
          ell: 'Pre-teach vocabulary: covenant, theology, consent, Enlightenment, social contract, tyranny, Separatist. Provide simplified paraphrases of primary source excerpts alongside the originals.',
        },
      },
      standards: {
        commonCore: ['RH.9-10.1', 'RH.9-10.2', 'RH.9-10.6', 'RH.9-10.9', 'WHST.9-10.1'],
        c3Framework: ['D2.His.1.9-12', 'D2.His.4.9-12', 'D2.His.5.9-12', 'D2.Civ.1.9-12'],
        note: 'Designed for grades 9-12. Requires familiarity with basic Reformation history and Enlightenment political philosophy.',
      },
    },
  });

  // New lesson 3
  await prisma.lessonPlan.upsert({
    where: { id: 'plymouth-lesson-loyalist-perspectives' },
    update: {
      slug: 'loyalist-perspectives-lesson',
      summary: 'Students examine the American Revolution from the Loyalist perspective, using the case of Edward Winslow Jr. of Plymouth — a descendant of Mayflower passengers who chose the crown over the patriot cause. The lesson challenges students to understand both sides of a civil conflict and to evaluate the costs of revolution.',
      lessonData: {
        objectives: [
          'Explain why some colonists chose to remain loyal to the British crown',
          'Analyze the social, economic, and personal costs of the Loyalist experience',
          'Evaluate the revolution as a civil conflict that divided communities and families',
          'Construct evidence-based arguments about whether the treatment of Loyalists was justified',
        ],
        essentialQuestions: [
          'Why did some Americans oppose the revolution?',
          'Was the treatment of Loyalists by patriot communities justified by the circumstances of war?',
          'How does the Loyalist perspective complicate the standard narrative of the American Revolution?',
          'What does the story of Edward Winslow Jr. reveal about the personal costs of political conviction?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Present a scenario: Your community is deeply divided over a political issue. Your family has lived there for generations. Most of your neighbors have taken one side, but you believe the other side is right. What do you do? Discuss: What factors would influence your decision? Then introduce the Loyalist dilemma in Revolutionary Plymouth.',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'Who were the Loyalists? Demographics, motivations, and regional patterns',
            'Edward Winslow Jr. of Plymouth: family background, Harvard education, legal career, mandamus council appointment',
            'The pressure campaign against Loyalists: social ostracism, economic boycotts, property confiscation, threats of violence',
            'The Loyalist exodus: from Plymouth to Boston to Halifax to New Brunswick',
            'Post-war consequences: confiscation acts, permanent exile, the founding of Loyalist communities in Canada',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Perspective-Taking Exercise: Students read accounts from both Loyalist and patriot perspectives about the same events (court closures, mob actions against Loyalists, property confiscation). Complete a T-chart comparing how each side interpreted these events.',
            'Case Study Discussion: In small groups, analyze the specific case of Edward Winslow Jr. What were his options in 1774? What were the likely consequences of each option? Was his decision understandable given his circumstances?',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Choose one: (1) Write a letter from Edward Winslow Jr. to a Plymouth friend explaining his decision to leave. Use at least three historical facts. OR (2) Write a 400-word argumentative essay: Was the patriot treatment of Loyalists a necessary cost of revolution or a betrayal of the principles of liberty? Use evidence from Plymouth\'s history.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Class discussion: Can a revolution for liberty justify denying liberty to dissenters? How does the Loyalist story change our understanding of what the American Revolution was? Exit ticket: Name one thing about the Loyalist experience that surprised you and explain why.',
        },
        differentiation: {
          struggling: 'Provide a character profile of Edward Winslow Jr. with key facts highlighted. Offer sentence starters for the letter or essay. Use a simplified timeline of Loyalist experiences in Plymouth.',
          advanced: 'Research Loyalist communities in New Brunswick or Nova Scotia. Compare the political institutions they created with those of the new United States. Write a comparative analysis.',
          ell: 'Pre-teach vocabulary: Loyalist, mandamus, confiscation, exile, ostracism, civil war. Provide bilingual glossary and simplified source excerpts.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.1', 'RH.6-8.6', 'RH.6-8.9', 'WHST.6-8.1'],
        c3Framework: ['D2.His.1.6-8', 'D2.His.4.6-8', 'D2.His.6.6-8', 'D2.Civ.10.6-8'],
        note: 'Adaptable for grades 6-12. Upper grades can engage more deeply with primary sources and the ethical dimensions of the Loyalist question.',
      },
    },
    create: {
      id: 'plymouth-lesson-loyalist-perspectives',
      townId: PLYMOUTH_TOWN_ID,
      title: 'The Other Side: Loyalist Perspectives in Revolutionary Plymouth',
      slug: 'loyalist-perspectives-lesson',
      gradeRange: '6-12',
      estimatedDuration: '2-3 class periods',
      summary: 'Students examine the American Revolution from the Loyalist perspective, using the case of Edward Winslow Jr. of Plymouth — a descendant of Mayflower passengers who chose the crown over the patriot cause. The lesson challenges students to understand both sides of a civil conflict and to evaluate the costs of revolution.',
      lessonData: {
        objectives: [
          'Explain why some colonists chose to remain loyal to the British crown',
          'Analyze the social, economic, and personal costs of the Loyalist experience',
          'Evaluate the revolution as a civil conflict that divided communities and families',
          'Construct evidence-based arguments about whether the treatment of Loyalists was justified',
        ],
        essentialQuestions: [
          'Why did some Americans oppose the revolution?',
          'Was the treatment of Loyalists by patriot communities justified by the circumstances of war?',
          'How does the Loyalist perspective complicate the standard narrative of the American Revolution?',
          'What does the story of Edward Winslow Jr. reveal about the personal costs of political conviction?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Present a scenario: Your community is deeply divided over a political issue. Your family has lived there for generations. Most of your neighbors have taken one side, but you believe the other side is right. What do you do? Discuss: What factors would influence your decision? Then introduce the Loyalist dilemma in Revolutionary Plymouth.',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'Who were the Loyalists? Demographics, motivations, and regional patterns',
            'Edward Winslow Jr. of Plymouth: family background, Harvard education, legal career, mandamus council appointment',
            'The pressure campaign against Loyalists: social ostracism, economic boycotts, property confiscation, threats of violence',
            'The Loyalist exodus: from Plymouth to Boston to Halifax to New Brunswick',
            'Post-war consequences: confiscation acts, permanent exile, the founding of Loyalist communities in Canada',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Perspective-Taking Exercise: Students read accounts from both Loyalist and patriot perspectives about the same events (court closures, mob actions against Loyalists, property confiscation). Complete a T-chart comparing how each side interpreted these events.',
            'Case Study Discussion: In small groups, analyze the specific case of Edward Winslow Jr. What were his options in 1774? What were the likely consequences of each option? Was his decision understandable given his circumstances?',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Choose one: (1) Write a letter from Edward Winslow Jr. to a Plymouth friend explaining his decision to leave. Use at least three historical facts. OR (2) Write a 400-word argumentative essay: Was the patriot treatment of Loyalists a necessary cost of revolution or a betrayal of the principles of liberty? Use evidence from Plymouth\'s history.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Class discussion: Can a revolution for liberty justify denying liberty to dissenters? How does the Loyalist story change our understanding of what the American Revolution was? Exit ticket: Name one thing about the Loyalist experience that surprised you and explain why.',
        },
        differentiation: {
          struggling: 'Provide a character profile of Edward Winslow Jr. with key facts highlighted. Offer sentence starters for the letter or essay. Use a simplified timeline of Loyalist experiences in Plymouth.',
          advanced: 'Research Loyalist communities in New Brunswick or Nova Scotia. Compare the political institutions they created with those of the new United States. Write a comparative analysis.',
          ell: 'Pre-teach vocabulary: Loyalist, mandamus, confiscation, exile, ostracism, civil war. Provide bilingual glossary and simplified source excerpts.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.1', 'RH.6-8.6', 'RH.6-8.9', 'WHST.6-8.1'],
        c3Framework: ['D2.His.1.6-8', 'D2.His.4.6-8', 'D2.His.6.6-8', 'D2.Civ.10.6-8'],
        note: 'Adaptable for grades 6-12. Upper grades can engage more deeply with primary sources and the ethical dimensions of the Loyalist question.',
      },
    },
  });

  console.log('  Lesson plans seeded.');
}

// =============================================================================
// MAIN
// =============================================================================

async function main() {
  console.log('Seeding Plymouth content...');

  await seedPeople();
  await seedPlaces();
  await seedEvents();
  await seedEventPeople();
  await seedStories();
  await seedLessons();

  console.log('Plymouth content seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
