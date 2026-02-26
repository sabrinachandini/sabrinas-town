import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const BOSTON_TOWN_ID = 'us-ma-boston';

// =============================================================================
// PEOPLE
// =============================================================================

async function seedPeople() {
  console.log('  Seeding people...');

  await prisma.person.upsert({
    where: { id: 'mercy-otis-warren' },
    update: {
      bioLong: `Mercy Otis Warren was born on September 14, 1728, in Barnstable, Massachusetts, into a family steeped in colonial politics. Her father, Colonel James Otis Sr., was a prominent attorney and judge, and her brother James Otis Jr. would become one of the earliest firebrands of the patriot cause. Though denied formal education as a woman, Mercy was permitted to study alongside her brother under the tutelage of their uncle, Reverend Jonathan Russell, absorbing classical literature, history, and political philosophy. In 1754 she married James Warren, a Plymouth farmer and politician who would serve as President of the Massachusetts Provincial Congress. Their home became a gathering place for revolutionary leaders including Samuel Adams, John Adams, and John Hancock.

Warren deployed her literary talents as a weapon against British tyranny at a time when women were excluded from formal political participation. Between 1772 and 1775, she published a series of satirical plays — including "The Adulateur" (1772), "The Defeat" (1773), and "The Group" (1775) — that lampooned Royal Governor Thomas Hutchinson and Loyalist officials. Published anonymously or under pseudonyms, these works circulated widely in Boston and helped shape public opinion against crown authority. Her correspondence with Abigail Adams, John Adams, and other patriot leaders reveals a mind deeply engaged with questions of liberty, governance, and the rights of citizens.

Her most ambitious work, "History of the Rise, Progress and Termination of the American Revolution," was published in three volumes in 1805. It remains the only contemporaneous history of the Revolution written by a participant observer and stands as one of the earliest major historical works published by an American woman. The work provoked a bitter quarrel with John Adams, who objected to her characterization of his political ambitions, though the two eventually reconciled. Warren's history offered pointed commentary on the dangers of concentrated power and the importance of civic virtue.

WHY SHE MATTERS TO BOSTON

Mercy Otis Warren gave voice to the revolutionary movement through the written word when direct political action was closed to her by her sex. Her satirical plays were among the most effective pieces of propaganda produced in pre-Revolutionary Boston, read aloud in taverns and reprinted in newspapers throughout the colonies. She demonstrated that the Revolution was not solely the province of soldiers and statesmen but was shaped equally by writers, thinkers, and women who operated outside the formal corridors of power. Her insistence on republican virtue and her warnings against aristocratic tendencies in the new republic remain relevant to American political discourse.

- 1728: Born September 14 in Barnstable, Massachusetts
- 1772: Published "The Adulateur," satirizing Governor Hutchinson
- 1775: Published "The Group," attacking Loyalist politicians
- 1805: Published three-volume "History of the Rise, Progress and Termination of the American Revolution"
- 1814: Died October 19 in Plymouth, Massachusetts, at age 86

SOURCES
- Zagarri, Rosemarie. "A Woman's Dilemma: Mercy Otis Warren and the American Revolution." Wiley-Blackwell, 1995.
- Richards, Jeffrey H. "Mercy Otis Warren." Twayne Publishers, 1995.
- Warren, Mercy Otis. "History of the Rise, Progress and Termination of the American Revolution." 1805. Liberty Fund reprint, 1988.`,
    },
    create: {
      id: 'mercy-otis-warren',
      name: 'Mercy Otis Warren',
      roles: ['Political Writer', 'Historian', 'Satirist', 'Poet'],
      bioShort: 'Political writer and historian (1728-1814) who authored satirical plays attacking British authority and wrote one of the earliest histories of the American Revolution.',
      bioLong: `Mercy Otis Warren was born on September 14, 1728, in Barnstable, Massachusetts, into a family steeped in colonial politics. Her father, Colonel James Otis Sr., was a prominent attorney and judge, and her brother James Otis Jr. would become one of the earliest firebrands of the patriot cause. Though denied formal education as a woman, Mercy was permitted to study alongside her brother under the tutelage of their uncle, Reverend Jonathan Russell, absorbing classical literature, history, and political philosophy. In 1754 she married James Warren, a Plymouth farmer and politician who would serve as President of the Massachusetts Provincial Congress. Their home became a gathering place for revolutionary leaders including Samuel Adams, John Adams, and John Hancock.

Warren deployed her literary talents as a weapon against British tyranny at a time when women were excluded from formal political participation. Between 1772 and 1775, she published a series of satirical plays — including "The Adulateur" (1772), "The Defeat" (1773), and "The Group" (1775) — that lampooned Royal Governor Thomas Hutchinson and Loyalist officials. Published anonymously or under pseudonyms, these works circulated widely in Boston and helped shape public opinion against crown authority. Her correspondence with Abigail Adams, John Adams, and other patriot leaders reveals a mind deeply engaged with questions of liberty, governance, and the rights of citizens.

Her most ambitious work, "History of the Rise, Progress and Termination of the American Revolution," was published in three volumes in 1805. It remains the only contemporaneous history of the Revolution written by a participant observer and stands as one of the earliest major historical works published by an American woman. The work provoked a bitter quarrel with John Adams, who objected to her characterization of his political ambitions, though the two eventually reconciled. Warren's history offered pointed commentary on the dangers of concentrated power and the importance of civic virtue.

WHY SHE MATTERS TO BOSTON

Mercy Otis Warren gave voice to the revolutionary movement through the written word when direct political action was closed to her by her sex. Her satirical plays were among the most effective pieces of propaganda produced in pre-Revolutionary Boston, read aloud in taverns and reprinted in newspapers throughout the colonies. She demonstrated that the Revolution was not solely the province of soldiers and statesmen but was shaped equally by writers, thinkers, and women who operated outside the formal corridors of power. Her insistence on republican virtue and her warnings against aristocratic tendencies in the new republic remain relevant to American political discourse.

- 1728: Born September 14 in Barnstable, Massachusetts
- 1772: Published "The Adulateur," satirizing Governor Hutchinson
- 1775: Published "The Group," attacking Loyalist politicians
- 1805: Published three-volume "History of the Rise, Progress and Termination of the American Revolution"
- 1814: Died October 19 in Plymouth, Massachusetts, at age 86

SOURCES
- Zagarri, Rosemarie. "A Woman's Dilemma: Mercy Otis Warren and the American Revolution." Wiley-Blackwell, 1995.
- Richards, Jeffrey H. "Mercy Otis Warren." Twayne Publishers, 1995.
- Warren, Mercy Otis. "History of the Rise, Progress and Termination of the American Revolution." 1805. Liberty Fund reprint, 1988.`,
      birthYear: 1728,
      deathYear: 1814,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'samuel-adams' },
    update: {
      bioLong: `Samuel Adams was born on September 27, 1722, in Boston, Massachusetts, into a prosperous family of Puritan merchants and brewers. He graduated from Harvard College in 1740 and earned a master's degree in 1743, but proved a poor businessman, losing both his own inheritance and funds entrusted to him by his father. His failures in commerce, however, freed him to pursue his true vocation: political organizing. By the early 1760s, Adams had established himself as one of the most effective grassroots political operatives in colonial America, writing for newspapers under dozens of pseudonyms, building networks of artisans and tradesmen, and turning Boston's town meetings into engines of resistance.

Adams was the principal architect of organized opposition to British authority in Massachusetts. He played a central role in the resistance to the Stamp Act of 1765, helped draft the Massachusetts Circular Letter of 1768, and in November 1772 founded the Boston Committee of Correspondence, which became the model for similar committees throughout the colonies. When the Tea Act of 1773 threatened to establish a precedent for parliamentary taxation, Adams orchestrated the mass meetings at Old South Meeting House that culminated in the Boston Tea Party on December 16, 1773. His ability to coordinate between elite merchants like John Hancock and working-class mechanics and laborers gave the patriot movement a breadth no other organizer could match.

After the passage of the Coercive Acts in 1774, Adams represented Massachusetts at the First and Second Continental Congresses. He was among the earliest advocates for complete independence from Britain and signed the Declaration of Independence in August 1776. In 1794, he was elected Governor of Massachusetts, serving until 1797. He died on October 2, 1803, at the age of 81.

WHY HE MATTERS TO BOSTON

Samuel Adams was the indispensable organizer of the American Revolution in Boston. While others contributed eloquence, wealth, or military leadership, Adams provided the organizational infrastructure that transformed scattered grievances into a coordinated movement. He built the committees, drafted the resolves, managed the town meetings, and cultivated the network of tavern keepers, printers, and craftsmen that formed the backbone of resistance. Without his decades of patient political work in Boston, the dramatic events of the 1770s — the Massacre response, the Tea Party, the mobilization after Lexington — would not have unfolded as they did.

- 1722: Born September 27 in Boston, Massachusetts
- 1765: Led resistance to the Stamp Act in Boston
- 1772: Founded the Boston Committee of Correspondence on November 2
- 1773: Orchestrated the meetings leading to the Boston Tea Party on December 16
- 1776: Signed the Declaration of Independence

SOURCES
- Alexander, John K. "Samuel Adams: America's Revolutionary Politician." Rowman & Littlefield, 2002.
- Stoll, Ira. "Samuel Adams: A Life." Free Press, 2008.
- Maier, Pauline. "From Resistance to Revolution: Colonial Radicals and the Development of American Opposition to Britain, 1765-1776." Alfred A. Knopf, 1972.`,
    },
    create: {
      id: 'samuel-adams',
      name: 'Samuel Adams',
      roles: ['Political Organizer', 'Agitator', 'Brewer', 'Governor'],
      bioShort: 'Political organizer and agitator (1722-1803) who founded the Committees of Correspondence, orchestrated the Boston Tea Party, and signed the Declaration of Independence.',
      bioLong: `Samuel Adams was born on September 27, 1722, in Boston, Massachusetts, into a prosperous family of Puritan merchants and brewers. He graduated from Harvard College in 1740 and earned a master's degree in 1743, but proved a poor businessman, losing both his own inheritance and funds entrusted to him by his father. His failures in commerce, however, freed him to pursue his true vocation: political organizing. By the early 1760s, Adams had established himself as one of the most effective grassroots political operatives in colonial America, writing for newspapers under dozens of pseudonyms, building networks of artisans and tradesmen, and turning Boston's town meetings into engines of resistance.

Adams was the principal architect of organized opposition to British authority in Massachusetts. He played a central role in the resistance to the Stamp Act of 1765, helped draft the Massachusetts Circular Letter of 1768, and in November 1772 founded the Boston Committee of Correspondence, which became the model for similar committees throughout the colonies. When the Tea Act of 1773 threatened to establish a precedent for parliamentary taxation, Adams orchestrated the mass meetings at Old South Meeting House that culminated in the Boston Tea Party on December 16, 1773. His ability to coordinate between elite merchants like John Hancock and working-class mechanics and laborers gave the patriot movement a breadth no other organizer could match.

After the passage of the Coercive Acts in 1774, Adams represented Massachusetts at the First and Second Continental Congresses. He was among the earliest advocates for complete independence from Britain and signed the Declaration of Independence in August 1776. In 1794, he was elected Governor of Massachusetts, serving until 1797. He died on October 2, 1803, at the age of 81.

WHY HE MATTERS TO BOSTON

Samuel Adams was the indispensable organizer of the American Revolution in Boston. While others contributed eloquence, wealth, or military leadership, Adams provided the organizational infrastructure that transformed scattered grievances into a coordinated movement. He built the committees, drafted the resolves, managed the town meetings, and cultivated the network of tavern keepers, printers, and craftsmen that formed the backbone of resistance. Without his decades of patient political work in Boston, the dramatic events of the 1770s — the Massacre response, the Tea Party, the mobilization after Lexington — would not have unfolded as they did.

- 1722: Born September 27 in Boston, Massachusetts
- 1765: Led resistance to the Stamp Act in Boston
- 1772: Founded the Boston Committee of Correspondence on November 2
- 1773: Orchestrated the meetings leading to the Boston Tea Party on December 16
- 1776: Signed the Declaration of Independence

SOURCES
- Alexander, John K. "Samuel Adams: America's Revolutionary Politician." Rowman & Littlefield, 2002.
- Stoll, Ira. "Samuel Adams: A Life." Free Press, 2008.
- Maier, Pauline. "From Resistance to Revolution: Colonial Radicals and the Development of American Opposition to Britain, 1765-1776." Alfred A. Knopf, 1972.`,
      birthYear: 1722,
      deathYear: 1803,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'crispus-attucks' },
    update: {
      bioLong: `Crispus Attucks was born around 1723, most likely in Framingham, Massachusetts. Historical evidence suggests he was of mixed African and Wampanoag Native American heritage and may have been enslaved by Deacon William Brown of Framingham. A 1750 advertisement in the Boston Gazette describes a runaway slave matching Attucks's description, indicating he escaped bondage and spent roughly twenty years as a free man working as a sailor and rope maker in and around Boston's wharves. Little is known with certainty about his life between his escape and the night of March 5, 1770, but maritime records suggest he worked on whaling vessels sailing out of Boston and Nantucket.

On the evening of March 5, 1770, tensions between Boston civilians and the British soldiers garrisoned in the city reached a breaking point. A crowd gathered near the Custom House on King Street, taunting a lone sentry. When a squad of soldiers under Captain Thomas Preston arrived to relieve the sentry, the confrontation escalated. Attucks was among a group of sailors and laborers who pressed toward the soldiers. According to multiple witness accounts given at the subsequent trial, Attucks was at the front of the crowd when the soldiers opened fire. He was struck by two musket balls and killed instantly, becoming the first person to die in what patriot propagandists would swiftly name the Boston Massacre. Four others — Samuel Gray, James Caldwell, Samuel Maverick, and Patrick Carr — also died.

The significance of Attucks's death was immediately recognized and deliberately amplified. Samuel Adams and other patriot leaders organized an elaborate public funeral for the five victims on March 8, with an estimated ten thousand mourners — nearly two-thirds of Boston's population — attending. Paul Revere's famous engraving of the Massacre, though not historically accurate in its details, helped cement the event in public memory. In the trial that followed, John Adams defended the soldiers, securing acquittals for most, and characterized the crowd as a dangerous mob. The tension between Adams's legal defense and the patriot narrative of innocent martyrdom would persist for generations.

WHY HE MATTERS TO BOSTON

Crispus Attucks occupies a unique and contested place in Boston's revolutionary history. As a man of African and Native American descent who was likely formerly enslaved, he embodies the contradictions at the heart of the American struggle for liberty. Abolitionists in the nineteenth century embraced Attucks as a symbol, and in 1888 a monument to the Boston Massacre victims, with Attucks at its center, was erected on Boston Common. His story forces a confrontation with the question of who the Revolution was for and whose sacrifices have been remembered or forgotten. He was the first to fall, and that fact carries weight that transcends the specific circumstances of a chaotic night on King Street.

- c.1723: Born, likely in Framingham, Massachusetts, of African and Wampanoag heritage
- 1750: Escaped from slavery; advertisement placed in Boston Gazette
- 1750-1770: Worked as a sailor and rope maker in the Boston area
- 1770: Killed on March 5 in the Boston Massacre, the first casualty
- 1888: Crispus Attucks monument dedicated on Boston Common

SOURCES
- Hinderaker, Eric. "Boston's Massacre." Harvard University Press, 2017.
- Kachun, Mitch. "First Martyr of Liberty: Crispus Attucks in American Memory." Oxford University Press, 2017.
- Zobel, Hiller B. "The Boston Massacre." W.W. Norton, 1970.`,
    },
    create: {
      id: 'crispus-attucks',
      name: 'Crispus Attucks',
      roles: ['Sailor', 'Rope Maker', 'Patriot Martyr'],
      bioShort: 'Sailor and former slave (c.1723-1770) who was the first person killed in the Boston Massacre, becoming a symbol of patriot sacrifice and the cost of liberty.',
      bioLong: `Crispus Attucks was born around 1723, most likely in Framingham, Massachusetts. Historical evidence suggests he was of mixed African and Wampanoag Native American heritage and may have been enslaved by Deacon William Brown of Framingham. A 1750 advertisement in the Boston Gazette describes a runaway slave matching Attucks's description, indicating he escaped bondage and spent roughly twenty years as a free man working as a sailor and rope maker in and around Boston's wharves. Little is known with certainty about his life between his escape and the night of March 5, 1770, but maritime records suggest he worked on whaling vessels sailing out of Boston and Nantucket.

On the evening of March 5, 1770, tensions between Boston civilians and the British soldiers garrisoned in the city reached a breaking point. A crowd gathered near the Custom House on King Street, taunting a lone sentry. When a squad of soldiers under Captain Thomas Preston arrived to relieve the sentry, the confrontation escalated. Attucks was among a group of sailors and laborers who pressed toward the soldiers. According to multiple witness accounts given at the subsequent trial, Attucks was at the front of the crowd when the soldiers opened fire. He was struck by two musket balls and killed instantly, becoming the first person to die in what patriot propagandists would swiftly name the Boston Massacre. Four others — Samuel Gray, James Caldwell, Samuel Maverick, and Patrick Carr — also died.

The significance of Attucks's death was immediately recognized and deliberately amplified. Samuel Adams and other patriot leaders organized an elaborate public funeral for the five victims on March 8, with an estimated ten thousand mourners — nearly two-thirds of Boston's population — attending. Paul Revere's famous engraving of the Massacre, though not historically accurate in its details, helped cement the event in public memory. In the trial that followed, John Adams defended the soldiers, securing acquittals for most, and characterized the crowd as a dangerous mob. The tension between Adams's legal defense and the patriot narrative of innocent martyrdom would persist for generations.

WHY HE MATTERS TO BOSTON

Crispus Attucks occupies a unique and contested place in Boston's revolutionary history. As a man of African and Native American descent who was likely formerly enslaved, he embodies the contradictions at the heart of the American struggle for liberty. Abolitionists in the nineteenth century embraced Attucks as a symbol, and in 1888 a monument to the Boston Massacre victims, with Attucks at its center, was erected on Boston Common. His story forces a confrontation with the question of who the Revolution was for and whose sacrifices have been remembered or forgotten. He was the first to fall, and that fact carries weight that transcends the specific circumstances of a chaotic night on King Street.

- c.1723: Born, likely in Framingham, Massachusetts, of African and Wampanoag heritage
- 1750: Escaped from slavery; advertisement placed in Boston Gazette
- 1750-1770: Worked as a sailor and rope maker in the Boston area
- 1770: Killed on March 5 in the Boston Massacre, the first casualty
- 1888: Crispus Attucks monument dedicated on Boston Common

SOURCES
- Hinderaker, Eric. "Boston's Massacre." Harvard University Press, 2017.
- Kachun, Mitch. "First Martyr of Liberty: Crispus Attucks in American Memory." Oxford University Press, 2017.
- Zobel, Hiller B. "The Boston Massacre." W.W. Norton, 1970.`,
      birthYear: 1723,
      deathYear: 1770,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'phillis-wheatley' },
    update: {
      bioLong: `Phillis Wheatley was born around 1753 in West Africa, likely in present-day Senegal or Gambia. She was captured, enslaved, and transported to Boston aboard the slave ship Phillis in 1761, arriving at age seven or eight. She was purchased by John Wheatley, a prosperous tailor, as a personal servant for his wife Susanna. The Wheatley family recognized the child's extraordinary intellect and, unusually for the time, provided her with an education. Within sixteen months of her arrival, she could read English fluently. She went on to study Latin, Greek, geography, history, and the Bible, and began writing poetry by age twelve.

In 1773, Wheatley published "Poems on Various Subjects, Religious and Moral" in London, becoming the first African American and one of the first American women to publish a book of poetry. The publication required an attestation of authenticity: eighteen prominent Boston men, including John Hancock and Governor Thomas Hutchinson, signed a preface testifying that an enslaved African woman had indeed written the poems. Wheatley traveled to London to oversee the publication, where she was celebrated in literary circles. Shortly after her return to Boston, the Wheatleys granted her freedom, though she remained in their household until Susanna's death in 1774.

Wheatley's poetry engaged directly with themes of liberty, faith, and the contradiction of a slaveholding society fighting for freedom. Her 1774 letter to the Mohegan minister Samson Occom, published widely in New England newspapers, argued explicitly that the love of freedom was innate to all human beings and that the exercise of slavery by those claiming to champion liberty was an inexcusable hypocrisy. After the deaths of her patrons and her marriage to John Peters, a free Black man, Wheatley struggled in poverty. She died on December 5, 1784, at approximately age thirty-one, in obscurity. Her infant son died hours later.

WHY SHE MATTERS TO BOSTON

Phillis Wheatley's life and work lay bare the central contradiction of revolutionary Boston: a city that proclaimed liberty as a God-given right while holding human beings in bondage. Her poetry was not merely a literary achievement but a political act, demonstrating through its very existence that Africans possessed the same intellectual capacities as Europeans. Her presence in Boston's revolutionary circles — she corresponded with George Washington, who received her at his Cambridge headquarters in 1776 — forced contemporaries to confront questions about race, freedom, and equality that the new republic would spend centuries attempting to resolve.

- c.1753: Born in West Africa
- 1761: Arrived in Boston aboard the slave ship Phillis; purchased by John Wheatley
- 1773: Published "Poems on Various Subjects, Religious and Moral" in London
- 1774: Granted freedom; published letter to Samson Occom arguing against slavery
- 1784: Died December 5 in Boston in poverty at approximately age 31

SOURCES
- Carretta, Vincent. "Phillis Wheatley: Biography of a Genius in Bondage." University of Georgia Press, 2011.
- Gates, Henry Louis Jr. "The Trials of Phillis Wheatley: America's First Black Poet and Her Encounters with the Founding Fathers." Basic Civitas Books, 2003.
- Wheatley, Phillis. "Complete Writings." Edited by Vincent Carretta, Penguin Classics, 2001.`,
    },
    create: {
      id: 'phillis-wheatley',
      name: 'Phillis Wheatley',
      roles: ['Poet', 'Enslaved Person', 'Author'],
      bioShort: 'Enslaved poet (c.1753-1784) who became the first published African American woman, using her verse to argue for liberty while she herself lived in bondage.',
      bioLong: `Phillis Wheatley was born around 1753 in West Africa, likely in present-day Senegal or Gambia. She was captured, enslaved, and transported to Boston aboard the slave ship Phillis in 1761, arriving at age seven or eight. She was purchased by John Wheatley, a prosperous tailor, as a personal servant for his wife Susanna. The Wheatley family recognized the child's extraordinary intellect and, unusually for the time, provided her with an education. Within sixteen months of her arrival, she could read English fluently. She went on to study Latin, Greek, geography, history, and the Bible, and began writing poetry by age twelve.

In 1773, Wheatley published "Poems on Various Subjects, Religious and Moral" in London, becoming the first African American and one of the first American women to publish a book of poetry. The publication required an attestation of authenticity: eighteen prominent Boston men, including John Hancock and Governor Thomas Hutchinson, signed a preface testifying that an enslaved African woman had indeed written the poems. Wheatley traveled to London to oversee the publication, where she was celebrated in literary circles. Shortly after her return to Boston, the Wheatleys granted her freedom, though she remained in their household until Susanna's death in 1774.

Wheatley's poetry engaged directly with themes of liberty, faith, and the contradiction of a slaveholding society fighting for freedom. Her 1774 letter to the Mohegan minister Samson Occom, published widely in New England newspapers, argued explicitly that the love of freedom was innate to all human beings and that the exercise of slavery by those claiming to champion liberty was an inexcusable hypocrisy. After the deaths of her patrons and her marriage to John Peters, a free Black man, Wheatley struggled in poverty. She died on December 5, 1784, at approximately age thirty-one, in obscurity. Her infant son died hours later.

WHY SHE MATTERS TO BOSTON

Phillis Wheatley's life and work lay bare the central contradiction of revolutionary Boston: a city that proclaimed liberty as a God-given right while holding human beings in bondage. Her poetry was not merely a literary achievement but a political act, demonstrating through its very existence that Africans possessed the same intellectual capacities as Europeans. Her presence in Boston's revolutionary circles — she corresponded with George Washington, who received her at his Cambridge headquarters in 1776 — forced contemporaries to confront questions about race, freedom, and equality that the new republic would spend centuries attempting to resolve.

- c.1753: Born in West Africa
- 1761: Arrived in Boston aboard the slave ship Phillis; purchased by John Wheatley
- 1773: Published "Poems on Various Subjects, Religious and Moral" in London
- 1774: Granted freedom; published letter to Samson Occom arguing against slavery
- 1784: Died December 5 in Boston in poverty at approximately age 31

SOURCES
- Carretta, Vincent. "Phillis Wheatley: Biography of a Genius in Bondage." University of Georgia Press, 2011.
- Gates, Henry Louis Jr. "The Trials of Phillis Wheatley: America's First Black Poet and Her Encounters with the Founding Fathers." Basic Civitas Books, 2003.
- Wheatley, Phillis. "Complete Writings." Edited by Vincent Carretta, Penguin Classics, 2001.`,
      birthYear: 1753,
      deathYear: 1784,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'john-adams' },
    update: {
      bioLong: `John Adams was born on October 30, 1735, in Braintree (now Quincy), Massachusetts. He graduated from Harvard College in 1755 and was admitted to the Boston bar in 1758. His early legal career established him as one of the most capable attorneys in Massachusetts, and his 1765 essay "A Dissertation on the Canon and Feudal Law" marked his entry into the political debates surrounding parliamentary taxation. Adams was a man of fierce intellect, volcanic temper, and unyielding principle — qualities that would make him indispensable to the Revolution and simultaneously difficult as a colleague.

Adams's most courageous act in Boston came in the aftermath of the Boston Massacre of March 5, 1770. Despite his patriot sympathies, he agreed to serve as defense counsel for Captain Thomas Preston and the British soldiers accused of murder. In a trial held in October and December 1770, Adams argued that the soldiers had acted in self-defense against a threatening mob. His defense secured acquittals for Preston and six of the eight soldiers; two were convicted of manslaughter and branded on the thumb. Adams's willingness to defend unpopular clients in the service of the rule of law, even at the cost of his popularity, stands as one of the defining moments of pre-Revolutionary Boston.

As a delegate to the Continental Congress from 1774 onward, Adams became the leading advocate for independence, working tirelessly behind the scenes to build consensus among reluctant delegates. He nominated George Washington as commander of the Continental Army and served on the committee to draft the Declaration of Independence, which he championed on the floor of Congress. He later served as the first American minister to Great Britain, as the first Vice President under Washington, and as the second President of the United States from 1797 to 1801. He died on July 4, 1826 — the fiftieth anniversary of the Declaration — within hours of Thomas Jefferson.

WHY HE MATTERS TO BOSTON

John Adams embodied the legal and intellectual foundations of the Revolution in Boston. While Samuel Adams organized the streets and Paul Revere carried the messages, John Adams built the constitutional arguments. His defense of the Massacre soldiers demonstrated that the patriot cause was grounded not in mob passion but in a principled commitment to the rule of law. His later work on the Massachusetts Constitution of 1780, which remains the oldest functioning written constitution in the world, drew directly from his years of legal and political work in Boston.

- 1735: Born October 30 in Braintree, Massachusetts
- 1770: Defended British soldiers after the Boston Massacre
- 1774: Elected delegate to the First Continental Congress
- 1776: Championed the Declaration of Independence in Congress
- 1826: Died July 4 in Quincy, Massachusetts, on the 50th anniversary of the Declaration

SOURCES
- McCullough, David. "John Adams." Simon & Schuster, 2001.
- Ellis, Joseph J. "Passionate Sage: The Character and Legacy of John Adams." W.W. Norton, 1993.
- Howe, John R. "The Changing Political Thought of John Adams." Princeton University Press, 1966.`,
    },
    create: {
      id: 'john-adams',
      name: 'John Adams',
      roles: ['Lawyer', 'Statesman', 'President', 'Diplomat'],
      bioShort: 'Lawyer and statesman (1735-1826) who defended British soldiers after the Massacre, championed independence in Congress, and served as the 2nd President.',
      bioLong: `John Adams was born on October 30, 1735, in Braintree (now Quincy), Massachusetts. He graduated from Harvard College in 1755 and was admitted to the Boston bar in 1758. His early legal career established him as one of the most capable attorneys in Massachusetts, and his 1765 essay "A Dissertation on the Canon and Feudal Law" marked his entry into the political debates surrounding parliamentary taxation. Adams was a man of fierce intellect, volcanic temper, and unyielding principle — qualities that would make him indispensable to the Revolution and simultaneously difficult as a colleague.

Adams's most courageous act in Boston came in the aftermath of the Boston Massacre of March 5, 1770. Despite his patriot sympathies, he agreed to serve as defense counsel for Captain Thomas Preston and the British soldiers accused of murder. In a trial held in October and December 1770, Adams argued that the soldiers had acted in self-defense against a threatening mob. His defense secured acquittals for Preston and six of the eight soldiers; two were convicted of manslaughter and branded on the thumb. Adams's willingness to defend unpopular clients in the service of the rule of law, even at the cost of his popularity, stands as one of the defining moments of pre-Revolutionary Boston.

As a delegate to the Continental Congress from 1774 onward, Adams became the leading advocate for independence, working tirelessly behind the scenes to build consensus among reluctant delegates. He nominated George Washington as commander of the Continental Army and served on the committee to draft the Declaration of Independence, which he championed on the floor of Congress. He later served as the first American minister to Great Britain, as the first Vice President under Washington, and as the second President of the United States from 1797 to 1801. He died on July 4, 1826 — the fiftieth anniversary of the Declaration — within hours of Thomas Jefferson.

WHY HE MATTERS TO BOSTON

John Adams embodied the legal and intellectual foundations of the Revolution in Boston. While Samuel Adams organized the streets and Paul Revere carried the messages, John Adams built the constitutional arguments. His defense of the Massacre soldiers demonstrated that the patriot cause was grounded not in mob passion but in a principled commitment to the rule of law. His later work on the Massachusetts Constitution of 1780, which remains the oldest functioning written constitution in the world, drew directly from his years of legal and political work in Boston.

- 1735: Born October 30 in Braintree, Massachusetts
- 1770: Defended British soldiers after the Boston Massacre
- 1774: Elected delegate to the First Continental Congress
- 1776: Championed the Declaration of Independence in Congress
- 1826: Died July 4 in Quincy, Massachusetts, on the 50th anniversary of the Declaration

SOURCES
- McCullough, David. "John Adams." Simon & Schuster, 2001.
- Ellis, Joseph J. "Passionate Sage: The Character and Legacy of John Adams." W.W. Norton, 1993.
- Howe, John R. "The Changing Political Thought of John Adams." Princeton University Press, 1966.`,
      birthYear: 1735,
      deathYear: 1826,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'abigail-adams' },
    update: {
      bioLong: `Abigail Smith Adams was born on November 22, 1744, in Weymouth, Massachusetts, the daughter of Reverend William Smith, a Congregationalist minister, and Elizabeth Quincy Smith, who came from one of the colony's most prominent families. Like most women of her era, Abigail received no formal schooling, but she educated herself extensively through her father's library and through the intellectual circles her family moved in. In 1764 she married John Adams, beginning one of the most remarkable political partnerships in American history. Their correspondence, spanning more than a thousand letters over the course of their marriage, provides an unparalleled window into the private deliberations and personal costs of the Revolution.

During the years when John was away at the Continental Congress in Philadelphia, Abigail managed the family farm in Braintree, raised their children, and dealt with wartime shortages, disease, and the constant threat of British military action. She watched the Battle of Bunker Hill from Penn's Hill near her home in June 1775, describing the distant thunder of cannon and the columns of smoke rising over Charlestown. Her March 31, 1776, letter to John — in which she urged him and the Continental Congress to "remember the ladies" in the new code of laws they were writing — has become one of the most quoted documents in American women's history. She argued that women should not be bound by laws in which they had no voice, a position radical for its time.

Beyond her famous plea for women's rights, Abigail's letters reveal a keen political mind that analyzed military strategy, debated constitutional theory, and assessed the characters of the leading figures of the era with sharp insight. She served as an informal advisor to her husband throughout his career as diplomat, Vice President, and President. She was also an early and forceful opponent of slavery, writing to John in 1774 that she wished most sincerely there was not a slave in the province. She died on October 28, 1818, at age 73.

WHY SHE MATTERS TO BOSTON

Abigail Adams represents the revolutionary experience as lived by the women of Massachusetts — the wives, mothers, and daughters who sustained farms and households, endured deprivation, and contributed political insight while being denied formal participation in the governments their sacrifices helped create. Her letters from the Boston area during the siege and its aftermath provide some of the most vivid eyewitness accounts of the Revolution's impact on civilian life. Her advocacy for women's education and legal rights, though unheeded in her lifetime, planted seeds that would bear fruit in later movements for equality.

- 1744: Born November 22 in Weymouth, Massachusetts
- 1764: Married John Adams on October 25
- 1775: Witnessed the Battle of Bunker Hill from Penn's Hill, Braintree
- 1776: Wrote the "Remember the Ladies" letter to John on March 31
- 1818: Died October 28 in Quincy, Massachusetts, at age 73

SOURCES
- Holton, Woody. "Abigail Adams: A Life." Free Press, 2009.
- Gelles, Edith B. "Portia: The World of Abigail Adams." Indiana University Press, 1992.
- Adams Family Correspondence. Edited by L.H. Butterfield et al., Harvard University Press, 1963-present.`,
    },
    create: {
      id: 'abigail-adams',
      name: 'Abigail Adams',
      roles: ['Political Advisor', 'Correspondent', 'First Lady', 'Advocate'],
      bioShort: 'Political advisor and prolific correspondent (1744-1818) who urged the Founders to "Remember the Ladies" and provided unparalleled accounts of revolutionary Boston.',
      bioLong: `Abigail Smith Adams was born on November 22, 1744, in Weymouth, Massachusetts, the daughter of Reverend William Smith, a Congregationalist minister, and Elizabeth Quincy Smith, who came from one of the colony's most prominent families. Like most women of her era, Abigail received no formal schooling, but she educated herself extensively through her father's library and through the intellectual circles her family moved in. In 1764 she married John Adams, beginning one of the most remarkable political partnerships in American history. Their correspondence, spanning more than a thousand letters over the course of their marriage, provides an unparalleled window into the private deliberations and personal costs of the Revolution.

During the years when John was away at the Continental Congress in Philadelphia, Abigail managed the family farm in Braintree, raised their children, and dealt with wartime shortages, disease, and the constant threat of British military action. She watched the Battle of Bunker Hill from Penn's Hill near her home in June 1775, describing the distant thunder of cannon and the columns of smoke rising over Charlestown. Her March 31, 1776, letter to John — in which she urged him and the Continental Congress to "remember the ladies" in the new code of laws they were writing — has become one of the most quoted documents in American women's history. She argued that women should not be bound by laws in which they had no voice, a position radical for its time.

Beyond her famous plea for women's rights, Abigail's letters reveal a keen political mind that analyzed military strategy, debated constitutional theory, and assessed the characters of the leading figures of the era with sharp insight. She served as an informal advisor to her husband throughout his career as diplomat, Vice President, and President. She was also an early and forceful opponent of slavery, writing to John in 1774 that she wished most sincerely there was not a slave in the province. She died on October 28, 1818, at age 73.

WHY SHE MATTERS TO BOSTON

Abigail Adams represents the revolutionary experience as lived by the women of Massachusetts — the wives, mothers, and daughters who sustained farms and households, endured deprivation, and contributed political insight while being denied formal participation in the governments their sacrifices helped create. Her letters from the Boston area during the siege and its aftermath provide some of the most vivid eyewitness accounts of the Revolution's impact on civilian life. Her advocacy for women's education and legal rights, though unheeded in her lifetime, planted seeds that would bear fruit in later movements for equality.

- 1744: Born November 22 in Weymouth, Massachusetts
- 1764: Married John Adams on October 25
- 1775: Witnessed the Battle of Bunker Hill from Penn's Hill, Braintree
- 1776: Wrote the "Remember the Ladies" letter to John on March 31
- 1818: Died October 28 in Quincy, Massachusetts, at age 73

SOURCES
- Holton, Woody. "Abigail Adams: A Life." Free Press, 2009.
- Gelles, Edith B. "Portia: The World of Abigail Adams." Indiana University Press, 1992.
- Adams Family Correspondence. Edited by L.H. Butterfield et al., Harvard University Press, 1963-present.`,
      birthYear: 1744,
      deathYear: 1818,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'paul-revere' },
    update: {
      bioLong: `Paul Revere was born on January 1, 1735, in Boston's North End, the son of Apollos Rivoire, a French Huguenot silversmith who had anglicized his name. Revere learned the silversmith's trade from his father and by the early 1760s had established himself as one of Boston's finest craftsmen, producing not only silver teapots, bowls, and flatware but also copper engravings, bookplates, and dental devices. His shop on Clark's Wharf placed him at the center of Boston's artisan community — the mechanics, shipbuilders, rope makers, and printers who formed the working-class backbone of the patriot movement.

Revere's value to the revolutionary cause extended far beyond his famous midnight ride. He served as the principal courier and intelligence operative for the Boston patriot network throughout the 1770s. He was a member of the Sons of Liberty, participated in the Boston Tea Party on December 16, 1773, and created the influential engraving of the Boston Massacre that became one of the most effective pieces of propaganda in colonial America. He rode express to Philadelphia in 1773 to carry news of the Tea Party and again in September 1774 to deliver the Suffolk Resolves to the Continental Congress. His network of riders and informants monitored British troop movements and relayed intelligence between patriot leaders.

The ride for which he is most remembered took place on the night of April 18, 1775. Dispatched by Dr. Joseph Warren, Revere crossed the Charles River by rowboat, evading the British warship HMS Somerset, and rode through Medford, Menotomy (Arlington), and on to Lexington, where he warned Samuel Adams and John Hancock that British regulars were marching to arrest them and seize the colonial arms cache at Concord. Revere was captured by a British patrol between Lexington and Concord but was later released. After the war, he became a successful industrialist, operating a copper rolling mill in Canton, Massachusetts, that supplied copper sheathing for the hull of the USS Constitution and the dome of the Massachusetts State House. He died on May 10, 1818, at age 83.

WHY HE MATTERS TO BOSTON

Paul Revere was the connective tissue of revolutionary Boston. As a silversmith, he moved easily between the merchant elite and the working artisans. As a courier, he physically linked the leaders and cells of the patriot network across Massachusetts and beyond. As an engraver, he created images that shaped public opinion. His midnight ride, immortalized by Longfellow's 1861 poem, became the defining narrative of Boston's role in launching the Revolution. But it was his years of unglamorous organizational work — carrying messages, gathering intelligence, attending committee meetings — that truly made him indispensable.

- 1735: Born January 1 in Boston's North End
- 1770: Created the engraving of the Boston Massacre
- 1773: Participated in the Boston Tea Party on December 16
- 1775: Made the midnight ride from Boston on April 18
- 1818: Died May 10 in Boston at age 83

SOURCES
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Triber, Jayne E. "A True Republican: The Life of Paul Revere." University of Massachusetts Press, 1998.
- Revere, Paul. Three accounts of the midnight ride, Massachusetts Historical Society.`,
    },
    create: {
      id: 'paul-revere',
      name: 'Paul Revere',
      roles: ['Silversmith', 'Messenger', 'Engraver', 'Patriot'],
      bioShort: 'Silversmith and patriot messenger (1735-1818) whose midnight ride on April 18, 1775, warned colonial leaders of the British advance and became a symbol of American resolve.',
      bioLong: `Paul Revere was born on January 1, 1735, in Boston's North End, the son of Apollos Rivoire, a French Huguenot silversmith who had anglicized his name. Revere learned the silversmith's trade from his father and by the early 1760s had established himself as one of Boston's finest craftsmen, producing not only silver teapots, bowls, and flatware but also copper engravings, bookplates, and dental devices. His shop on Clark's Wharf placed him at the center of Boston's artisan community — the mechanics, shipbuilders, rope makers, and printers who formed the working-class backbone of the patriot movement.

Revere's value to the revolutionary cause extended far beyond his famous midnight ride. He served as the principal courier and intelligence operative for the Boston patriot network throughout the 1770s. He was a member of the Sons of Liberty, participated in the Boston Tea Party on December 16, 1773, and created the influential engraving of the Boston Massacre that became one of the most effective pieces of propaganda in colonial America. He rode express to Philadelphia in 1773 to carry news of the Tea Party and again in September 1774 to deliver the Suffolk Resolves to the Continental Congress. His network of riders and informants monitored British troop movements and relayed intelligence between patriot leaders.

The ride for which he is most remembered took place on the night of April 18, 1775. Dispatched by Dr. Joseph Warren, Revere crossed the Charles River by rowboat, evading the British warship HMS Somerset, and rode through Medford, Menotomy (Arlington), and on to Lexington, where he warned Samuel Adams and John Hancock that British regulars were marching to arrest them and seize the colonial arms cache at Concord. Revere was captured by a British patrol between Lexington and Concord but was later released. After the war, he became a successful industrialist, operating a copper rolling mill in Canton, Massachusetts, that supplied copper sheathing for the hull of the USS Constitution and the dome of the Massachusetts State House. He died on May 10, 1818, at age 83.

WHY HE MATTERS TO BOSTON

Paul Revere was the connective tissue of revolutionary Boston. As a silversmith, he moved easily between the merchant elite and the working artisans. As a courier, he physically linked the leaders and cells of the patriot network across Massachusetts and beyond. As an engraver, he created images that shaped public opinion. His midnight ride, immortalized by Longfellow's 1861 poem, became the defining narrative of Boston's role in launching the Revolution. But it was his years of unglamorous organizational work — carrying messages, gathering intelligence, attending committee meetings — that truly made him indispensable.

- 1735: Born January 1 in Boston's North End
- 1770: Created the engraving of the Boston Massacre
- 1773: Participated in the Boston Tea Party on December 16
- 1775: Made the midnight ride from Boston on April 18
- 1818: Died May 10 in Boston at age 83

SOURCES
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Triber, Jayne E. "A True Republican: The Life of Paul Revere." University of Massachusetts Press, 1998.
- Revere, Paul. Three accounts of the midnight ride, Massachusetts Historical Society.`,
      birthYear: 1735,
      deathYear: 1818,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'john-hancock' },
    update: {
      bioLong: `John Hancock was born on January 23, 1737, in Braintree, Massachusetts. After his father's death in 1744, he was adopted by his uncle Thomas Hancock, one of the wealthiest merchants in Boston. John inherited the business and the fortune upon Thomas's death in 1764, becoming at age twenty-seven one of the richest men in the colonies. His wealth made him a prominent target for British revenue enforcement and simultaneously gave the patriot movement a patron whose resources could fund resistance. His elegant mansion on Beacon Hill, overlooking Boston Common, was one of the finest homes in the city.

Hancock's political radicalization accelerated in 1768 when his sloop Liberty was seized by customs officials on charges of smuggling Madeira wine. The Liberty Affair provoked riots in Boston and became a rallying point for opposition to the Townshend Acts. Hancock was represented by John Adams in the ensuing legal proceedings. By 1770, Hancock was serving in the Massachusetts General Court and had become one of the most visible faces of the patriot cause, his wealth and social standing lending respectability to a movement that the crown portrayed as the work of rabble-rousers. He was elected President of the Massachusetts Provincial Congress in 1774 and presided over the body that organized the colony's military preparations.

As President of the Second Continental Congress, Hancock was the first to sign the Declaration of Independence on August 2, 1776. His large, bold signature became legendary. He served nine terms as Governor of Massachusetts between 1780 and 1793, making him one of the most important political figures in the early republic. He used his influence and popularity to help secure Massachusetts's ratification of the federal Constitution in 1788. He died in office on October 8, 1793.

WHY HE MATTERS TO BOSTON

John Hancock provided the financial and social capital that allowed the revolutionary movement in Boston to operate. His wealth funded patriot activities, his warehouses and ships facilitated communication, and his social prominence gave the cause credibility with moderate colonists who might otherwise have dismissed it as the work of demagogues. The Liberty Affair made his name synonymous with resistance to arbitrary British taxation. His signing of the Declaration made his name a byword for bold commitment to a cause.

- 1737: Born January 23 in Braintree, Massachusetts
- 1768: Sloop Liberty seized by customs officials, sparking riots
- 1774: Elected President of the Massachusetts Provincial Congress
- 1776: First to sign the Declaration of Independence on August 2
- 1793: Died October 8 in Quincy, Massachusetts, while serving as Governor

SOURCES
- Unger, Harlow Giles. "John Hancock: Merchant King and American Patriot." John Wiley & Sons, 2000.
- Fowler, William M. Jr. "The Baron of Beacon Hill: A Biography of John Hancock." Houghton Mifflin, 1980.
- Baxter, W.T. "The House of Hancock: Business in Boston, 1724-1775." Harvard University Press, 1945.`,
    },
    create: {
      id: 'john-hancock',
      name: 'John Hancock',
      roles: ['Merchant', 'Statesman', 'Governor', 'Patriot'],
      bioShort: 'Wealthy merchant and patriot (1737-1793) who was the first to sign the Declaration of Independence and served as President of the Continental Congress and Governor of Massachusetts.',
      bioLong: `John Hancock was born on January 23, 1737, in Braintree, Massachusetts. After his father's death in 1744, he was adopted by his uncle Thomas Hancock, one of the wealthiest merchants in Boston. John inherited the business and the fortune upon Thomas's death in 1764, becoming at age twenty-seven one of the richest men in the colonies. His wealth made him a prominent target for British revenue enforcement and simultaneously gave the patriot movement a patron whose resources could fund resistance. His elegant mansion on Beacon Hill, overlooking Boston Common, was one of the finest homes in the city.

Hancock's political radicalization accelerated in 1768 when his sloop Liberty was seized by customs officials on charges of smuggling Madeira wine. The Liberty Affair provoked riots in Boston and became a rallying point for opposition to the Townshend Acts. Hancock was represented by John Adams in the ensuing legal proceedings. By 1770, Hancock was serving in the Massachusetts General Court and had become one of the most visible faces of the patriot cause, his wealth and social standing lending respectability to a movement that the crown portrayed as the work of rabble-rousers. He was elected President of the Massachusetts Provincial Congress in 1774 and presided over the body that organized the colony's military preparations.

As President of the Second Continental Congress, Hancock was the first to sign the Declaration of Independence on August 2, 1776. His large, bold signature became legendary. He served nine terms as Governor of Massachusetts between 1780 and 1793, making him one of the most important political figures in the early republic. He used his influence and popularity to help secure Massachusetts's ratification of the federal Constitution in 1788. He died in office on October 8, 1793.

WHY HE MATTERS TO BOSTON

John Hancock provided the financial and social capital that allowed the revolutionary movement in Boston to operate. His wealth funded patriot activities, his warehouses and ships facilitated communication, and his social prominence gave the cause credibility with moderate colonists who might otherwise have dismissed it as the work of demagogues. The Liberty Affair made his name synonymous with resistance to arbitrary British taxation. His signing of the Declaration made his name a byword for bold commitment to a cause.

- 1737: Born January 23 in Braintree, Massachusetts
- 1768: Sloop Liberty seized by customs officials, sparking riots
- 1774: Elected President of the Massachusetts Provincial Congress
- 1776: First to sign the Declaration of Independence on August 2
- 1793: Died October 8 in Quincy, Massachusetts, while serving as Governor

SOURCES
- Unger, Harlow Giles. "John Hancock: Merchant King and American Patriot." John Wiley & Sons, 2000.
- Fowler, William M. Jr. "The Baron of Beacon Hill: A Biography of John Hancock." Houghton Mifflin, 1980.
- Baxter, W.T. "The House of Hancock: Business in Boston, 1724-1775." Harvard University Press, 1945.`,
      birthYear: 1737,
      deathYear: 1793,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'thomas-hutchinson' },
    update: {
      bioLong: `Thomas Hutchinson was born on September 9, 1711, in Boston, into one of the colony's oldest and most distinguished families — he was a direct descendant of Anne Hutchinson, who had been banished from Massachusetts Bay in 1638 for religious dissent. He graduated from Harvard College in 1727, entered the family mercantile business, and rose steadily through Massachusetts politics, serving in the General Court, as speaker of the House, as lieutenant governor, and finally as the last civilian royal governor of the colony from 1771 to 1774. He was widely regarded as the most learned and capable administrator in colonial Massachusetts, and his multivolume "History of the Colony and Province of Massachusetts Bay" remains an essential primary source.

Hutchinson was a moderate and pragmatic man who genuinely believed that the colonies' best interests lay within the British imperial system. He personally opposed the Stamp Act of 1765 and lobbied for its repeal, yet his position as the crown's representative in Boston made him the lightning rod for popular fury. On August 26, 1765, a mob attacked and ransacked his elegant North End mansion, destroying his furniture, scattering his papers, and drinking his wine cellar dry. The attack, which Hutchinson described in anguished detail, was one of the most violent episodes of the Stamp Act crisis. He rebuilt, but the episode marked the beginning of his transformation from respected public servant to despised symbol of British authority.

The publication of Hutchinson's private letters in 1773, obtained by Benjamin Franklin and delivered to Samuel Adams, proved his political undoing. The letters, which seemed to advocate restricting colonial liberties, were printed in Boston newspapers and used to paint Hutchinson as a traitor to his own people. He was recalled to London in 1774, replaced by the military governor General Thomas Gage. Hutchinson spent the rest of his life in exile, never returning to the Massachusetts he had served for decades. He died in London on June 3, 1780, a broken man who had lost everything — his home, his reputation, and his country.

WHY HE MATTERS TO BOSTON

Thomas Hutchinson is essential to understanding revolutionary Boston because he represents the other side — the Loyalist perspective that is too often reduced to caricature. He was not a tyrant but a conscientious public servant caught between an empire that refused to compromise and a populace that demanded rights the imperial system could not accommodate. His story reveals that the Revolution was also a civil war, dividing families, friendships, and communities. Understanding Hutchinson's perspective — his genuine horror at mob violence, his belief in constitutional order, his love for a Massachusetts that ultimately rejected him — deepens our understanding of the Revolution's true costs.

- 1711: Born September 9 in Boston, Massachusetts
- 1765: Mansion destroyed by Stamp Act mob on August 26
- 1771: Appointed Royal Governor of Massachusetts
- 1773: Private letters published, destroying his political standing
- 1780: Died June 3 in London, in exile

SOURCES
- Bailyn, Bernard. "The Ordeal of Thomas Hutchinson." Harvard University Press, 1974.
- Hutchinson, Thomas. "The History of the Colony and Province of Massachusetts Bay." Edited by Lawrence Shaw Mayo, Harvard University Press, 1936.
- Walmsley, Andrew Stephen. "Thomas Hutchinson and the Origins of the American Revolution." New York University Press, 1999.`,
    },
    create: {
      id: 'thomas-hutchinson',
      name: 'Thomas Hutchinson',
      roles: ['Royal Governor', 'Historian', 'Loyalist', 'Politician'],
      bioShort: 'Royal Governor of Massachusetts (1711-1780) whose mansion was destroyed by a mob and who was driven into exile — representing the Loyalist perspective on the Revolution.',
      bioLong: `Thomas Hutchinson was born on September 9, 1711, in Boston, into one of the colony's oldest and most distinguished families — he was a direct descendant of Anne Hutchinson, who had been banished from Massachusetts Bay in 1638 for religious dissent. He graduated from Harvard College in 1727, entered the family mercantile business, and rose steadily through Massachusetts politics, serving in the General Court, as speaker of the House, as lieutenant governor, and finally as the last civilian royal governor of the colony from 1771 to 1774. He was widely regarded as the most learned and capable administrator in colonial Massachusetts, and his multivolume "History of the Colony and Province of Massachusetts Bay" remains an essential primary source.

Hutchinson was a moderate and pragmatic man who genuinely believed that the colonies' best interests lay within the British imperial system. He personally opposed the Stamp Act of 1765 and lobbied for its repeal, yet his position as the crown's representative in Boston made him the lightning rod for popular fury. On August 26, 1765, a mob attacked and ransacked his elegant North End mansion, destroying his furniture, scattering his papers, and drinking his wine cellar dry. The attack, which Hutchinson described in anguished detail, was one of the most violent episodes of the Stamp Act crisis. He rebuilt, but the episode marked the beginning of his transformation from respected public servant to despised symbol of British authority.

The publication of Hutchinson's private letters in 1773, obtained by Benjamin Franklin and delivered to Samuel Adams, proved his political undoing. The letters, which seemed to advocate restricting colonial liberties, were printed in Boston newspapers and used to paint Hutchinson as a traitor to his own people. He was recalled to London in 1774, replaced by the military governor General Thomas Gage. Hutchinson spent the rest of his life in exile, never returning to the Massachusetts he had served for decades. He died in London on June 3, 1780, a broken man who had lost everything — his home, his reputation, and his country.

WHY HE MATTERS TO BOSTON

Thomas Hutchinson is essential to understanding revolutionary Boston because he represents the other side — the Loyalist perspective that is too often reduced to caricature. He was not a tyrant but a conscientious public servant caught between an empire that refused to compromise and a populace that demanded rights the imperial system could not accommodate. His story reveals that the Revolution was also a civil war, dividing families, friendships, and communities. Understanding Hutchinson's perspective — his genuine horror at mob violence, his belief in constitutional order, his love for a Massachusetts that ultimately rejected him — deepens our understanding of the Revolution's true costs.

- 1711: Born September 9 in Boston, Massachusetts
- 1765: Mansion destroyed by Stamp Act mob on August 26
- 1771: Appointed Royal Governor of Massachusetts
- 1773: Private letters published, destroying his political standing
- 1780: Died June 3 in London, in exile

SOURCES
- Bailyn, Bernard. "The Ordeal of Thomas Hutchinson." Harvard University Press, 1974.
- Hutchinson, Thomas. "The History of the Colony and Province of Massachusetts Bay." Edited by Lawrence Shaw Mayo, Harvard University Press, 1936.
- Walmsley, Andrew Stephen. "Thomas Hutchinson and the Origins of the American Revolution." New York University Press, 1999.`,
      birthYear: 1711,
      deathYear: 1780,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'james-otis' },
    update: {
      bioLong: `James Otis Jr. was born on February 5, 1725, in West Barnstable, Massachusetts, the eldest son of Colonel James Otis Sr., a prominent lawyer and politician. He graduated from Harvard College in 1743 and established himself as one of the most brilliant attorneys in the colony. In 1761, Otis delivered the argument that John Adams would later identify as the spark that lit the Revolution: his five-hour oration before the Massachusetts Superior Court against the Writs of Assistance — general search warrants that allowed customs officials to enter any home or business without specific cause. Otis argued that the writs violated the fundamental rights of Englishmen and that any act of Parliament that contravened natural law was void.

Though the court ultimately ruled against him, Otis's argument electrified Boston. His phrase "taxation without representation is tyranny" — while its exact attribution is debated by historians — became the rallying cry of the colonial resistance movement. Otis was elected to the Massachusetts General Court and became one of the most vocal opponents of British revenue measures. He authored influential pamphlets, including "The Rights of the British Colonies Asserted and Proved" (1764), which laid out the constitutional arguments against parliamentary taxation. In these writings, Otis also made remarkably progressive arguments about the natural rights of all people regardless of race, asserting that colonists of African descent were equally entitled to freedom.

In September 1769, Otis was attacked in a coffeehouse by John Robinson, a customs commissioner, and severely beaten on the head. The injury left him with periodic mental instability that gradually worsened, effectively ending his political career. For the last fourteen years of his life, he suffered episodes of confusion and erratic behavior, cared for by his family. According to family tradition, Otis had expressed a wish to be killed by a bolt of lightning, and on May 23, 1783, he was struck and killed by lightning while standing in the doorway of a friend's house in Andover, Massachusetts.

WHY HE MATTERS TO BOSTON

James Otis fired the opening intellectual salvo of the American Revolution in a Boston courtroom in February 1761, more than a decade before the shots at Lexington and Concord. His arguments against the Writs of Assistance established the constitutional framework that other patriot leaders would build upon for the next fifteen years. His tragic decline — the result of political violence — serves as a reminder of the personal costs exacted by the struggle. John Adams, who was present at the 1761 argument, wrote decades later that on that day the child Independence was born.

- 1725: Born February 5 in West Barnstable, Massachusetts
- 1761: Argued against Writs of Assistance before the Massachusetts Superior Court
- 1764: Published "The Rights of the British Colonies Asserted and Proved"
- 1769: Severely beaten by customs official John Robinson in September
- 1783: Killed by lightning strike on May 23 in Andover, Massachusetts

SOURCES
- Waters, John J. and Schutz, John A. "Patriot Royal: The Career of James Otis." Colonial Society of Massachusetts, 1967.
- Tudor, William. "The Life of James Otis of Massachusetts." Wells and Lilly, 1823.
- Galvin, John R. "Three Men of Boston." Thomas Y. Crowell, 1976.`,
    },
    create: {
      id: 'james-otis',
      name: 'James Otis',
      roles: ['Lawyer', 'Patriot', 'Pamphleteer', 'Orator'],
      bioShort: 'Lawyer and patriot (1725-1783) who argued against Writs of Assistance and coined the phrase "taxation without representation is tyranny," igniting the constitutional debate.',
      bioLong: `James Otis Jr. was born on February 5, 1725, in West Barnstable, Massachusetts, the eldest son of Colonel James Otis Sr., a prominent lawyer and politician. He graduated from Harvard College in 1743 and established himself as one of the most brilliant attorneys in the colony. In 1761, Otis delivered the argument that John Adams would later identify as the spark that lit the Revolution: his five-hour oration before the Massachusetts Superior Court against the Writs of Assistance — general search warrants that allowed customs officials to enter any home or business without specific cause. Otis argued that the writs violated the fundamental rights of Englishmen and that any act of Parliament that contravened natural law was void.

Though the court ultimately ruled against him, Otis's argument electrified Boston. His phrase "taxation without representation is tyranny" — while its exact attribution is debated by historians — became the rallying cry of the colonial resistance movement. Otis was elected to the Massachusetts General Court and became one of the most vocal opponents of British revenue measures. He authored influential pamphlets, including "The Rights of the British Colonies Asserted and Proved" (1764), which laid out the constitutional arguments against parliamentary taxation. In these writings, Otis also made remarkably progressive arguments about the natural rights of all people regardless of race, asserting that colonists of African descent were equally entitled to freedom.

In September 1769, Otis was attacked in a coffeehouse by John Robinson, a customs commissioner, and severely beaten on the head. The injury left him with periodic mental instability that gradually worsened, effectively ending his political career. For the last fourteen years of his life, he suffered episodes of confusion and erratic behavior, cared for by his family. According to family tradition, Otis had expressed a wish to be killed by a bolt of lightning, and on May 23, 1783, he was struck and killed by lightning while standing in the doorway of a friend's house in Andover, Massachusetts.

WHY HE MATTERS TO BOSTON

James Otis fired the opening intellectual salvo of the American Revolution in a Boston courtroom in February 1761, more than a decade before the shots at Lexington and Concord. His arguments against the Writs of Assistance established the constitutional framework that other patriot leaders would build upon for the next fifteen years. His tragic decline — the result of political violence — serves as a reminder of the personal costs exacted by the struggle. John Adams, who was present at the 1761 argument, wrote decades later that on that day the child Independence was born.

- 1725: Born February 5 in West Barnstable, Massachusetts
- 1761: Argued against Writs of Assistance before the Massachusetts Superior Court
- 1764: Published "The Rights of the British Colonies Asserted and Proved"
- 1769: Severely beaten by customs official John Robinson in September
- 1783: Killed by lightning strike on May 23 in Andover, Massachusetts

SOURCES
- Waters, John J. and Schutz, John A. "Patriot Royal: The Career of James Otis." Colonial Society of Massachusetts, 1967.
- Tudor, William. "The Life of James Otis of Massachusetts." Wells and Lilly, 1823.
- Galvin, John R. "Three Men of Boston." Thomas Y. Crowell, 1976.`,
      birthYear: 1725,
      deathYear: 1783,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'joseph-warren' },
    update: {
      bioLong: `Joseph Warren was born on June 11, 1741, in Roxbury, Massachusetts. He graduated from Harvard College in 1759 and became one of Boston's most successful physicians, building a practice that served both wealthy merchants and working-class families. His medical career gave him access to all levels of Boston society, and he used those connections to become one of the most important patriot leaders in Massachusetts. By the early 1770s, Warren was a central member of the inner circle that included Samuel Adams, John Adams, John Hancock, and Paul Revere.

Warren's political activities intensified after the Boston Massacre, for which he delivered powerful oration speeches at the annual commemoration ceremonies in 1772 and 1775. He was a primary author of the Suffolk Resolves, adopted in September 1774, which declared the Coercive Acts unconstitutional and called for armed resistance if necessary. When the Continental Congress endorsed the Suffolk Resolves, it was a major step toward open conflict. Warren served as President of the Massachusetts Provincial Congress and effectively functioned as the civilian head of the colony's revolutionary government during the critical months of early 1775.

On the night of April 18, 1775, it was Warren who dispatched Paul Revere and William Dawes on their midnight rides to warn of the British march on Lexington and Concord. Warren had intelligence from a network of informants within the British command, and his timely order ensured that the colonial militia was ready. Two months later, on June 17, 1775, Warren joined the patriot forces at the Battle of Bunker Hill as a volunteer, having been commissioned as a major general just days earlier. Despite his rank, he fought as a common soldier in the redoubt on Breed's Hill. He was killed during the British final assault, shot in the head at close range. He was thirty-four years old.

WHY HE MATTERS TO BOSTON

Joseph Warren was the indispensable leader of Boston's revolutionary movement in its most critical phase. Had he survived Bunker Hill, his intelligence, political skill, and personal courage would likely have placed him alongside Washington, Adams, and Jefferson in the first rank of the Founders. His death transformed him into a martyr and galvanized patriot resolve throughout the colonies. It was Warren who sent Revere on the ride, Warren who wrote the Suffolk Resolves, and Warren who held the revolutionary government together in the chaos of early 1775. His sacrifice at Bunker Hill made the cost of independence viscerally real.

- 1741: Born June 11 in Roxbury, Massachusetts
- 1772: Delivered the Boston Massacre oration on March 5
- 1774: Authored the Suffolk Resolves, adopted September 9
- 1775: Dispatched Paul Revere on the midnight ride, April 18
- 1775: Killed at the Battle of Bunker Hill on June 17

SOURCES
- Forman, Samuel A. "Dr. Joseph Warren: The Boston Tea Party, Bunker Hill, and the Birth of American Liberty." Pelican Publishing, 2012.
- Frothingham, Richard. "Life and Times of Joseph Warren." Little, Brown and Company, 1865.
- Philbrick, Nathaniel. "Bunker Hill: A City, A Siege, A Revolution." Viking, 2013.`,
    },
    create: {
      id: 'joseph-warren',
      name: 'Joseph Warren',
      roles: ['Doctor', 'Patriot Leader', 'Major General', 'Martyr'],
      bioShort: 'Physician and patriot leader (1741-1775) who sent Revere on the midnight ride, authored the Suffolk Resolves, and was killed at the Battle of Bunker Hill.',
      bioLong: `Joseph Warren was born on June 11, 1741, in Roxbury, Massachusetts. He graduated from Harvard College in 1759 and became one of Boston's most successful physicians, building a practice that served both wealthy merchants and working-class families. His medical career gave him access to all levels of Boston society, and he used those connections to become one of the most important patriot leaders in Massachusetts. By the early 1770s, Warren was a central member of the inner circle that included Samuel Adams, John Adams, John Hancock, and Paul Revere.

Warren's political activities intensified after the Boston Massacre, for which he delivered powerful oration speeches at the annual commemoration ceremonies in 1772 and 1775. He was a primary author of the Suffolk Resolves, adopted in September 1774, which declared the Coercive Acts unconstitutional and called for armed resistance if necessary. When the Continental Congress endorsed the Suffolk Resolves, it was a major step toward open conflict. Warren served as President of the Massachusetts Provincial Congress and effectively functioned as the civilian head of the colony's revolutionary government during the critical months of early 1775.

On the night of April 18, 1775, it was Warren who dispatched Paul Revere and William Dawes on their midnight rides to warn of the British march on Lexington and Concord. Warren had intelligence from a network of informants within the British command, and his timely order ensured that the colonial militia was ready. Two months later, on June 17, 1775, Warren joined the patriot forces at the Battle of Bunker Hill as a volunteer, having been commissioned as a major general just days earlier. Despite his rank, he fought as a common soldier in the redoubt on Breed's Hill. He was killed during the British final assault, shot in the head at close range. He was thirty-four years old.

WHY HE MATTERS TO BOSTON

Joseph Warren was the indispensable leader of Boston's revolutionary movement in its most critical phase. Had he survived Bunker Hill, his intelligence, political skill, and personal courage would likely have placed him alongside Washington, Adams, and Jefferson in the first rank of the Founders. His death transformed him into a martyr and galvanized patriot resolve throughout the colonies. It was Warren who sent Revere on the ride, Warren who wrote the Suffolk Resolves, and Warren who held the revolutionary government together in the chaos of early 1775. His sacrifice at Bunker Hill made the cost of independence viscerally real.

- 1741: Born June 11 in Roxbury, Massachusetts
- 1772: Delivered the Boston Massacre oration on March 5
- 1774: Authored the Suffolk Resolves, adopted September 9
- 1775: Dispatched Paul Revere on the midnight ride, April 18
- 1775: Killed at the Battle of Bunker Hill on June 17

SOURCES
- Forman, Samuel A. "Dr. Joseph Warren: The Boston Tea Party, Bunker Hill, and the Birth of American Liberty." Pelican Publishing, 2012.
- Frothingham, Richard. "Life and Times of Joseph Warren." Little, Brown and Company, 1865.
- Philbrick, Nathaniel. "Bunker Hill: A City, A Siege, A Revolution." Viking, 2013.`,
      birthYear: 1741,
      deathYear: 1775,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'prince-hall' },
    update: {
      bioLong: `Prince Hall was born around 1735, though the details of his early life remain a subject of scholarly debate. Some historians believe he was born in Barbados and came to Boston as a young man; others argue he was born in the colonies. What is certain is that by the 1770s, Hall was a free Black man living and working in Boston as a leather dresser. He was a property owner, a taxpayer, and a member of the Reverend Andrew Croswell's Congregationalist church. During the Revolution, Hall and other free Black men from Boston served in the Continental Army, and Hall himself is believed to have fought at the Battle of Bunker Hill in June 1775.

Hall's most enduring legacy was his establishment of African American Freemasonry. On March 6, 1775 — just weeks before the battles of Lexington and Concord — Hall and fourteen other free Black men were initiated into Lodge No. 441 of the Grand Lodge of Ireland by members of a British military lodge attached to the 38th Regiment of Foot stationed in Boston. After the British evacuation in 1776, Hall organized African Lodge No. 1, which operated under a limited permit. In 1784, he applied directly to the Grand Lodge of England for a full charter, which was granted in 1787, establishing African Lodge No. 459 — the first lodge of Black Freemasons in America. This lodge became the foundation of what is now known as Prince Hall Freemasonry, which today comprises thousands of lodges worldwide.

Beyond his Masonic work, Hall was one of Boston's most persistent advocates for the rights of free Black people. In January 1777, he petitioned the Massachusetts legislature for the abolition of slavery, one of the earliest such petitions in American history. In 1787, he petitioned the legislature for equal access to public education for Black children. In 1788, he protested the kidnapping of free Black Bostonians who were being seized and sold into slavery in the Caribbean. Hall used the language of the Revolution — natural rights, liberty, equality — to demand that its promises be extended to all Americans.

WHY HE MATTERS TO BOSTON

Prince Hall exposed the gap between the Revolution's ideals and its practice. While Boston's patriot leaders proclaimed that all men were created equal, Hall had to petition for the most basic rights on behalf of Boston's free Black community. His founding of the African Lodge created an institution of mutual aid, education, and civic engagement that served Black communities for generations. His petitions to the Massachusetts legislature are among the earliest documents in the American civil rights tradition. Hall's Boston was not just the city of Adams and Hancock but also a city of enslaved and free Black people who fought for the Revolution's promises to apply to them as well.

- c.1735: Born, possibly in Barbados or the American colonies
- 1775: Initiated into Masonic Lodge No. 441 on March 6
- 1777: Petitioned the Massachusetts legislature for abolition of slavery
- 1787: Received charter from the Grand Lodge of England for African Lodge No. 459
- 1807: Died December 4 in Boston, Massachusetts

SOURCES
- Walkes, Joseph A. Jr. "Black Square and Compass: 200 Years of Prince Hall Freemasonry." Macoy Publishing, 1979.
- Kantrowitz, Stephen. "More Than Freedom: Fighting for Black Citizenship in a White Republic, 1829-1889." Penguin Press, 2012.
- Kaplan, Sidney and Kaplan, Emma Nogrady. "The Black Presence in the Era of the American Revolution." University of Massachusetts Press, 1989.`,
    },
    create: {
      id: 'prince-hall',
      name: 'Prince Hall',
      roles: ['Abolitionist', 'Freemason Founder', 'Civic Leader', 'Veteran'],
      bioShort: 'Abolitionist and civic leader (c.1735-1807) who founded the first Black Masonic lodge in America and petitioned for the rights of free Black people in revolutionary Boston.',
      bioLong: `Prince Hall was born around 1735, though the details of his early life remain a subject of scholarly debate. Some historians believe he was born in Barbados and came to Boston as a young man; others argue he was born in the colonies. What is certain is that by the 1770s, Hall was a free Black man living and working in Boston as a leather dresser. He was a property owner, a taxpayer, and a member of the Reverend Andrew Croswell's Congregationalist church. During the Revolution, Hall and other free Black men from Boston served in the Continental Army, and Hall himself is believed to have fought at the Battle of Bunker Hill in June 1775.

Hall's most enduring legacy was his establishment of African American Freemasonry. On March 6, 1775 — just weeks before the battles of Lexington and Concord — Hall and fourteen other free Black men were initiated into Lodge No. 441 of the Grand Lodge of Ireland by members of a British military lodge attached to the 38th Regiment of Foot stationed in Boston. After the British evacuation in 1776, Hall organized African Lodge No. 1, which operated under a limited permit. In 1784, he applied directly to the Grand Lodge of England for a full charter, which was granted in 1787, establishing African Lodge No. 459 — the first lodge of Black Freemasons in America. This lodge became the foundation of what is now known as Prince Hall Freemasonry, which today comprises thousands of lodges worldwide.

Beyond his Masonic work, Hall was one of Boston's most persistent advocates for the rights of free Black people. In January 1777, he petitioned the Massachusetts legislature for the abolition of slavery, one of the earliest such petitions in American history. In 1787, he petitioned the legislature for equal access to public education for Black children. In 1788, he protested the kidnapping of free Black Bostonians who were being seized and sold into slavery in the Caribbean. Hall used the language of the Revolution — natural rights, liberty, equality — to demand that its promises be extended to all Americans.

WHY HE MATTERS TO BOSTON

Prince Hall exposed the gap between the Revolution's ideals and its practice. While Boston's patriot leaders proclaimed that all men were created equal, Hall had to petition for the most basic rights on behalf of Boston's free Black community. His founding of the African Lodge created an institution of mutual aid, education, and civic engagement that served Black communities for generations. His petitions to the Massachusetts legislature are among the earliest documents in the American civil rights tradition. Hall's Boston was not just the city of Adams and Hancock but also a city of enslaved and free Black people who fought for the Revolution's promises to apply to them as well.

- c.1735: Born, possibly in Barbados or the American colonies
- 1775: Initiated into Masonic Lodge No. 441 on March 6
- 1777: Petitioned the Massachusetts legislature for abolition of slavery
- 1787: Received charter from the Grand Lodge of England for African Lodge No. 459
- 1807: Died December 4 in Boston, Massachusetts

SOURCES
- Walkes, Joseph A. Jr. "Black Square and Compass: 200 Years of Prince Hall Freemasonry." Macoy Publishing, 1979.
- Kantrowitz, Stephen. "More Than Freedom: Fighting for Black Citizenship in a White Republic, 1829-1889." Penguin Press, 2012.
- Kaplan, Sidney and Kaplan, Emma Nogrady. "The Black Presence in the Era of the American Revolution." University of Massachusetts Press, 1989.`,
      birthYear: 1735,
      deathYear: 1807,
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
    where: { id: 'boston-old-state-house' },
    update: { slug: 'old-state-house', description: 'The Old State House, built in 1713, is the oldest surviving public building in Boston and served as the seat of the Massachusetts colonial government. It stands at the head of State Street (formerly King Street), where some of the most dramatic events of the Revolution unfolded directly outside its walls.', historicalNote: 'The Old State House was the center of political life in colonial Boston. It housed the Massachusetts General Court, the Governor\'s Council, and the colony\'s courts. From its balcony, the Declaration of Independence was first read to Bostonians on July 18, 1776, and it was from the same balcony that royal proclamations had previously been announced.\n\nThe building witnessed pivotal moments in the run-up to revolution. James Otis argued against the Writs of Assistance in the Council Chamber in February 1761. The Boston Massacre occurred directly in front of the building on March 5, 1770, when British soldiers fired into a crowd of colonists, killing five. The circle of cobblestones in the street below marks the approximate site of the shooting.\n\nAfter the Revolution, the building served as the Massachusetts State House until 1798, when the new State House on Beacon Hill was completed. It later served as commercial space and nearly faced demolition before being preserved. Today it operates as a museum run by the Bostonian Society, housing exhibits on Boston\'s role in the American Revolution.' },
    create: { id: 'boston-old-state-house', townId: BOSTON_TOWN_ID, name: 'Old State House', slug: 'old-state-house', placeType: 'GOVERNMENT', description: 'The Old State House, built in 1713, is the oldest surviving public building in Boston and served as the seat of the Massachusetts colonial government. It stands at the head of State Street (formerly King Street), where some of the most dramatic events of the Revolution unfolded directly outside its walls.', historicalNote: 'The Old State House was the center of political life in colonial Boston. It housed the Massachusetts General Court, the Governor\'s Council, and the colony\'s courts. From its balcony, the Declaration of Independence was first read to Bostonians on July 18, 1776, and it was from the same balcony that royal proclamations had previously been announced.\n\nThe building witnessed pivotal moments in the run-up to revolution. James Otis argued against the Writs of Assistance in the Council Chamber in February 1761. The Boston Massacre occurred directly in front of the building on March 5, 1770, when British soldiers fired into a crowd of colonists, killing five. The circle of cobblestones in the street below marks the approximate site of the shooting.\n\nAfter the Revolution, the building served as the Massachusetts State House until 1798, when the new State House on Beacon Hill was completed. It later served as commercial space and nearly faced demolition before being preserved. Today it operates as a museum run by the Bostonian Society, housing exhibits on Boston\'s role in the American Revolution.', address: '206 Washington St, Boston, MA 02109', hours: 'Daily 10am-5pm', admission: '$10 adults', website: 'https://www.bostonhistory.org/old-state-house', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'boston-faneuil-hall' },
    update: { slug: 'faneuil-hall', description: 'Faneuil Hall, built in 1742 and expanded in 1805, has been called the "Cradle of Liberty" for the revolutionary meetings held within its walls. The Great Hall on the second floor hosted the town meetings where Boston\'s citizens debated their response to British taxation.', historicalNote: 'Faneuil Hall was donated to the town of Boston by merchant Peter Faneuil and served as both a marketplace on the ground floor and a public meeting hall above. It was in this hall that Samuel Adams, James Otis, and other patriot leaders rallied citizens against the Stamp Act in 1765, the Townshend Acts in 1767, and the Tea Act in 1773. The hall\'s town meetings were the primary vehicle through which Boston\'s citizens organized collective resistance to British policy.\n\nThe meetings held here were not mere rallies but formal exercises in democratic self-governance. Citizens debated, voted, and issued official resolves that were communicated to the colonial legislature, to Parliament, and to other colonies. The hall was where the Non-Importation Agreement of 1768 was debated and where the response to the Coercive Acts was organized in 1774.\n\nThe building was expanded to its current size by architect Charles Bulfinch in 1805. It continues to serve as a meeting place and marketplace. The Great Hall, with its rows of wooden benches and portraits of revolutionary leaders, remains open to the public as part of the Freedom Trail and Boston National Historical Park.' },
    create: { id: 'boston-faneuil-hall', townId: BOSTON_TOWN_ID, name: 'Faneuil Hall', slug: 'faneuil-hall', placeType: 'GOVERNMENT', description: 'Faneuil Hall, built in 1742 and expanded in 1805, has been called the "Cradle of Liberty" for the revolutionary meetings held within its walls. The Great Hall on the second floor hosted the town meetings where Boston\'s citizens debated their response to British taxation.', historicalNote: 'Faneuil Hall was donated to the town of Boston by merchant Peter Faneuil and served as both a marketplace on the ground floor and a public meeting hall above. It was in this hall that Samuel Adams, James Otis, and other patriot leaders rallied citizens against the Stamp Act in 1765, the Townshend Acts in 1767, and the Tea Act in 1773. The hall\'s town meetings were the primary vehicle through which Boston\'s citizens organized collective resistance to British policy.\n\nThe meetings held here were not mere rallies but formal exercises in democratic self-governance. Citizens debated, voted, and issued official resolves that were communicated to the colonial legislature, to Parliament, and to other colonies. The hall was where the Non-Importation Agreement of 1768 was debated and where the response to the Coercive Acts was organized in 1774.\n\nThe building was expanded to its current size by architect Charles Bulfinch in 1805. It continues to serve as a meeting place and marketplace. The Great Hall, with its rows of wooden benches and portraits of revolutionary leaders, remains open to the public as part of the Freedom Trail and Boston National Historical Park.', address: '1 Faneuil Hall Square, Boston, MA 02109', hours: 'Daily 10am-5pm (ground floor open until 10pm)', admission: 'Free (Great Hall)', website: 'https://www.nps.gov/bost/learn/historyculture/fh.htm', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'boston-old-north-church' },
    update: { slug: 'old-north-church', description: 'Old North Church (officially Christ Church in the City of Boston), built in 1723, is Boston\'s oldest surviving church building. It is famous as the location from which two lanterns were hung on the night of April 18, 1775, to signal that British troops were departing Boston by sea.', historicalNote: 'On the evening of April 18, 1775, sexton Robert Newman climbed the steeple of Old North Church and briefly displayed two lanterns — the signal that British regulars were crossing the Charles River by boat rather than marching out over Boston Neck. This signal, arranged by Paul Revere with the church\'s cooperation, alerted patriot riders on the Charlestown shore and initiated the alarm system that warned Lexington and Concord of the approaching British column.\n\nThe church itself was an Anglican (Church of England) congregation, and many of its members were Loyalists. Its role in the lantern signal was therefore an act of considerable courage by those parishioners who sympathized with the patriot cause. The tall steeple, at 191 feet the highest point in the North End, made it the ideal location for a signal visible across the harbor.\n\nThe church has been in continuous use since 1723 and retains its original box pews, where families once sat in private enclosures during services. The brass chandeliers, first lit on Christmas Day 1724, are the oldest in the nation. Visitors can see the pew where General Thomas Gage, the British military governor, once worshipped.' },
    create: { id: 'boston-old-north-church', townId: BOSTON_TOWN_ID, name: 'Old North Church', slug: 'old-north-church', placeType: 'CHURCH', description: 'Old North Church (officially Christ Church in the City of Boston), built in 1723, is Boston\'s oldest surviving church building. It is famous as the location from which two lanterns were hung on the night of April 18, 1775, to signal that British troops were departing Boston by sea.', historicalNote: 'On the evening of April 18, 1775, sexton Robert Newman climbed the steeple of Old North Church and briefly displayed two lanterns — the signal that British regulars were crossing the Charles River by boat rather than marching out over Boston Neck. This signal, arranged by Paul Revere with the church\'s cooperation, alerted patriot riders on the Charlestown shore and initiated the alarm system that warned Lexington and Concord of the approaching British column.\n\nThe church itself was an Anglican (Church of England) congregation, and many of its members were Loyalists. Its role in the lantern signal was therefore an act of considerable courage by those parishioners who sympathized with the patriot cause. The tall steeple, at 191 feet the highest point in the North End, made it the ideal location for a signal visible across the harbor.\n\nThe church has been in continuous use since 1723 and retains its original box pews, where families once sat in private enclosures during services. The brass chandeliers, first lit on Christmas Day 1724, are the oldest in the nation. Visitors can see the pew where General Thomas Gage, the British military governor, once worshipped.', address: '193 Salem St, Boston, MA 02113', hours: 'Daily 10am-4pm (seasonal)', admission: '$5 suggested donation', website: 'https://www.oldnorth.com', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'boston-common' },
    update: { slug: 'boston-common', description: 'Boston Common, established in 1634, is the oldest public park in the United States. During the colonial era, it served as common grazing land, a military training ground, and the site of public gatherings, punishments, and encampments.', historicalNote: 'Boston Common played a central role in the Revolutionary period as both a military staging ground and a public gathering space. British troops encamped on the Common from October 1768, when regiments were sent to enforce the Townshend Acts, until the British evacuation in March 1776. The sight of redcoats drilling on the Common was a daily reminder of the occupation and a source of constant friction with Boston\'s civilians.\n\nThe Common was also the site of public executions and punishments. During the colonial era, an elm tree on the Common served as the "Liberty Tree," where patriots hung effigies of stamp distributors in 1765 and held rallies against British authority. The original Liberty Tree was cut down by British soldiers in August 1775 during the siege. The Common also bordered the residences of several prominent Bostonians, including John Hancock\'s mansion on Beacon Hill.\n\nToday the Common encompasses approximately 50 acres in the heart of downtown Boston. The Crispus Attucks monument, erected in 1888, stands on the Tremont Street side, commemorating the victims of the Boston Massacre. The Central Burying Ground, dating to 1756, contains graves from the Revolutionary era.' },
    create: { id: 'boston-common', townId: BOSTON_TOWN_ID, name: 'Boston Common', slug: 'boston-common', placeType: 'LANDMARK', description: 'Boston Common, established in 1634, is the oldest public park in the United States. During the colonial era, it served as common grazing land, a military training ground, and the site of public gatherings, punishments, and encampments.', historicalNote: 'Boston Common played a central role in the Revolutionary period as both a military staging ground and a public gathering space. British troops encamped on the Common from October 1768, when regiments were sent to enforce the Townshend Acts, until the British evacuation in March 1776. The sight of redcoats drilling on the Common was a daily reminder of the occupation and a source of constant friction with Boston\'s civilians.\n\nThe Common was also the site of public executions and punishments. During the colonial era, an elm tree on the Common served as the "Liberty Tree," where patriots hung effigies of stamp distributors in 1765 and held rallies against British authority. The original Liberty Tree was cut down by British soldiers in August 1775 during the siege. The Common also bordered the residences of several prominent Bostonians, including John Hancock\'s mansion on Beacon Hill.\n\nToday the Common encompasses approximately 50 acres in the heart of downtown Boston. The Crispus Attucks monument, erected in 1888, stands on the Tremont Street side, commemorating the victims of the Boston Massacre. The Central Burying Ground, dating to 1756, contains graves from the Revolutionary era.', address: '139 Tremont St, Boston, MA 02111', hours: 'Open 24 hours', admission: 'Free', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'boston-massacre-site' },
    update: { slug: 'boston-massacre-site', description: 'A circle of cobblestones embedded in the sidewalk on State Street marks the approximate location where British soldiers fired into a crowd of colonists on March 5, 1770, killing five and wounding six others in what became known as the Boston Massacre.', historicalNote: 'The Boston Massacre occurred on the evening of March 5, 1770, in front of the Custom House on King Street (now State Street). Tensions had been building between Boston civilians and the roughly 2,000 British soldiers garrisoned in the city since October 1768. The confrontation began when a lone sentry, Private Hugh White, was taunted by a group of apprentices. A crowd gathered, and Captain Thomas Preston led a squad of soldiers to relieve the sentry.\n\nAs the crowd pressed in, throwing snowballs, oyster shells, and chunks of ice, the soldiers opened fire. Crispus Attucks, a sailor of African and Native American descent, was killed first. Samuel Gray, James Caldwell, and Samuel Maverick died at the scene or shortly after. Patrick Carr died two weeks later. The event was immediately seized upon by patriot propagandists — Samuel Adams organized the response, Paul Revere created his famous engraving, and annual commemorations kept the memory alive.\n\nJohn Adams defended the soldiers at trial, securing acquittals for most. The massacre became a powerful symbol of British tyranny and a rallying point for the independence movement. The site, now surrounded by modern buildings, is marked by a simple stone circle in the pavement, easily missed by passersby who do not know its significance.' },
    create: { id: 'boston-massacre-site', townId: BOSTON_TOWN_ID, name: 'Boston Massacre Site', slug: 'boston-massacre-site', placeType: 'MONUMENT', description: 'A circle of cobblestones embedded in the sidewalk on State Street marks the approximate location where British soldiers fired into a crowd of colonists on March 5, 1770, killing five and wounding six others in what became known as the Boston Massacre.', historicalNote: 'The Boston Massacre occurred on the evening of March 5, 1770, in front of the Custom House on King Street (now State Street). Tensions had been building between Boston civilians and the roughly 2,000 British soldiers garrisoned in the city since October 1768. The confrontation began when a lone sentry, Private Hugh White, was taunted by a group of apprentices. A crowd gathered, and Captain Thomas Preston led a squad of soldiers to relieve the sentry.\n\nAs the crowd pressed in, throwing snowballs, oyster shells, and chunks of ice, the soldiers opened fire. Crispus Attucks, a sailor of African and Native American descent, was killed first. Samuel Gray, James Caldwell, and Samuel Maverick died at the scene or shortly after. Patrick Carr died two weeks later. The event was immediately seized upon by patriot propagandists — Samuel Adams organized the response, Paul Revere created his famous engraving, and annual commemorations kept the memory alive.\n\nJohn Adams defended the soldiers at trial, securing acquittals for most. The massacre became a powerful symbol of British tyranny and a rallying point for the independence movement. The site, now surrounded by modern buildings, is marked by a simple stone circle in the pavement, easily missed by passersby who do not know its significance.', address: 'State St & Congress St, Boston, MA 02109', hours: 'Always accessible', admission: 'Free', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'boston-griffins-wharf' },
    update: { slug: 'griffins-wharf', description: 'Griffin\'s Wharf was the site where, on the night of December 16, 1773, colonists disguised as Mohawk Indians boarded three ships and dumped 342 chests of East India Company tea into Boston Harbor in the act of defiance known as the Boston Tea Party.', historicalNote: 'Griffin\'s Wharf, located along what is now the Congress Street Bridge area, was a commercial dock in colonial Boston. On the evening of December 16, 1773, after a mass meeting at Old South Meeting House failed to resolve the standoff over tea shipments, approximately 100 to 150 men — many loosely disguised as Mohawk Indians with soot-blackened faces — marched to the wharf where three tea ships (the Dartmouth, the Eleanor, and the Beaver) were moored.\n\nOver the course of approximately three hours, the men systematically broke open 342 chests of East India Company tea and dumped the contents into the harbor. The action was remarkably disciplined: no other cargo was touched, no property beyond the tea was damaged, and a padlock broken during the operation was replaced the next day. The tea destroyed was valued at approximately 10,000 pounds sterling — roughly 1.7 million dollars in modern terms.\n\nThe original wharf no longer exists; landfill projects in the nineteenth century extended Boston\'s shoreline well beyond its colonial boundaries. The approximate site is now inland, near the intersection of Atlantic Avenue and Congress Street. The Boston Tea Party Ships and Museum, located on the Congress Street Bridge nearby, offers a reconstruction of the event.' },
    create: { id: 'boston-griffins-wharf', townId: BOSTON_TOWN_ID, name: "Griffin's Wharf (Tea Party Site)", slug: 'griffins-wharf', placeType: 'LANDMARK', description: 'Griffin\'s Wharf was the site where, on the night of December 16, 1773, colonists disguised as Mohawk Indians boarded three ships and dumped 342 chests of East India Company tea into Boston Harbor in the act of defiance known as the Boston Tea Party.', historicalNote: 'Griffin\'s Wharf, located along what is now the Congress Street Bridge area, was a commercial dock in colonial Boston. On the evening of December 16, 1773, after a mass meeting at Old South Meeting House failed to resolve the standoff over tea shipments, approximately 100 to 150 men — many loosely disguised as Mohawk Indians with soot-blackened faces — marched to the wharf where three tea ships (the Dartmouth, the Eleanor, and the Beaver) were moored.\n\nOver the course of approximately three hours, the men systematically broke open 342 chests of East India Company tea and dumped the contents into the harbor. The action was remarkably disciplined: no other cargo was touched, no property beyond the tea was damaged, and a padlock broken during the operation was replaced the next day. The tea destroyed was valued at approximately 10,000 pounds sterling — roughly 1.7 million dollars in modern terms.\n\nThe original wharf no longer exists; landfill projects in the nineteenth century extended Boston\'s shoreline well beyond its colonial boundaries. The approximate site is now inland, near the intersection of Atlantic Avenue and Congress Street. The Boston Tea Party Ships and Museum, located on the Congress Street Bridge nearby, offers a reconstruction of the event.', address: 'Congress St Bridge area, Boston, MA', hours: 'Always accessible (outdoor)', admission: 'Free', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'boston-dorchester-heights' },
    update: { slug: 'dorchester-heights', description: 'Dorchester Heights is a hilltop fortification site in South Boston where, on the night of March 4, 1776, Continental Army forces placed cannons overlooking Boston Harbor, forcing the British to evacuate the city.', historicalNote: 'The fortification of Dorchester Heights on the night of March 4-5, 1776, was the decisive military action of the Siege of Boston. General George Washington ordered Colonel Henry Knox to transport cannons captured at Fort Ticonderoga across nearly 300 miles of winter terrain to the Boston area. Once these heavy guns were in place on the heights overlooking the harbor, the British position became untenable.\n\nUnder cover of darkness, approximately 2,000 Continental soldiers hauled the cannons and prefabricated fortifications to the hilltop. By dawn on March 5, the British awoke to find a formidable defensive position commanding their fleet and the city. British General William Howe initially planned an assault but was deterred by a storm and the strength of the American position. On March 17, 1776 — celebrated in Boston as Evacuation Day — the British fleet sailed out of Boston Harbor with approximately 11,000 troops and 1,000 Loyalist civilians.\n\nThe marble monument at Thomas Park in South Boston, erected in 1902, marks the site. The park offers views of the harbor and downtown skyline, though the surrounding neighborhood has changed dramatically since the eighteenth century.' },
    create: { id: 'boston-dorchester-heights', townId: BOSTON_TOWN_ID, name: 'Dorchester Heights', slug: 'dorchester-heights', placeType: 'MONUMENT', description: 'Dorchester Heights is a hilltop fortification site in South Boston where, on the night of March 4, 1776, Continental Army forces placed cannons overlooking Boston Harbor, forcing the British to evacuate the city.', historicalNote: 'The fortification of Dorchester Heights on the night of March 4-5, 1776, was the decisive military action of the Siege of Boston. General George Washington ordered Colonel Henry Knox to transport cannons captured at Fort Ticonderoga across nearly 300 miles of winter terrain to the Boston area. Once these heavy guns were in place on the heights overlooking the harbor, the British position became untenable.\n\nUnder cover of darkness, approximately 2,000 Continental soldiers hauled the cannons and prefabricated fortifications to the hilltop. By dawn on March 5, the British awoke to find a formidable defensive position commanding their fleet and the city. British General William Howe initially planned an assault but was deterred by a storm and the strength of the American position. On March 17, 1776 — celebrated in Boston as Evacuation Day — the British fleet sailed out of Boston Harbor with approximately 11,000 troops and 1,000 Loyalist civilians.\n\nThe marble monument at Thomas Park in South Boston, erected in 1902, marks the site. The park offers views of the harbor and downtown skyline, though the surrounding neighborhood has changed dramatically since the eighteenth century.', address: 'Thomas Park, South Boston, MA 02127', hours: 'Dawn to dusk', admission: 'Free', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'boston-bunker-hill' },
    update: { slug: 'bunker-hill', description: 'The Bunker Hill Monument, a 221-foot granite obelisk in Charlestown, commemorates the Battle of Bunker Hill fought on June 17, 1775 — the first major battle of the American Revolution and one of the bloodiest engagements of the entire war.', historicalNote: 'The Battle of Bunker Hill was actually fought primarily on neighboring Breed\'s Hill, where colonial forces had constructed a redoubt overnight on June 16-17, 1775. The fortification threatened British positions in Boston and the harbor. British General William Howe ordered a frontal assault up the hill with approximately 2,200 regulars against roughly 1,500 entrenched colonials.\n\nThe British launched three assaults. In the first two, colonial forces held their fire until the British were within close range, then delivered devastating volleys that cut down advancing regulars in rows. The colonial defenders, running low on ammunition and powder, were finally overrun on the third assault. The British took the hill but at staggering cost: over 1,000 British casualties, including 226 killed, against approximately 450 colonial casualties. Among the American dead was Dr. Joseph Warren, the president of the Massachusetts Provincial Congress.\n\nThe current monument, completed in 1843, stands at the site of the colonial redoubt. Visitors can climb 294 steps to the top for panoramic views of Boston. A small museum at the base tells the story of the battle. The monument was funded in part by a campaign led by Daniel Webster and the Marquis de Lafayette.' },
    create: { id: 'boston-bunker-hill', townId: BOSTON_TOWN_ID, name: 'Bunker Hill Monument', slug: 'bunker-hill', placeType: 'MONUMENT', description: 'The Bunker Hill Monument, a 221-foot granite obelisk in Charlestown, commemorates the Battle of Bunker Hill fought on June 17, 1775 — the first major battle of the American Revolution and one of the bloodiest engagements of the entire war.', historicalNote: 'The Battle of Bunker Hill was actually fought primarily on neighboring Breed\'s Hill, where colonial forces had constructed a redoubt overnight on June 16-17, 1775. The fortification threatened British positions in Boston and the harbor. British General William Howe ordered a frontal assault up the hill with approximately 2,200 regulars against roughly 1,500 entrenched colonials.\n\nThe British launched three assaults. In the first two, colonial forces held their fire until the British were within close range, then delivered devastating volleys that cut down advancing regulars in rows. The colonial defenders, running low on ammunition and powder, were finally overrun on the third assault. The British took the hill but at staggering cost: over 1,000 British casualties, including 226 killed, against approximately 450 colonial casualties. Among the American dead was Dr. Joseph Warren, the president of the Massachusetts Provincial Congress.\n\nThe current monument, completed in 1843, stands at the site of the colonial redoubt. Visitors can climb 294 steps to the top for panoramic views of Boston. A small museum at the base tells the story of the battle. The monument was funded in part by a campaign led by Daniel Webster and the Marquis de Lafayette.', address: 'Monument Sq, Charlestown, MA 02129', hours: 'Daily 9am-5pm (climb seasonal)', admission: 'Free', website: 'https://www.nps.gov/bost/learn/historyculture/bhm.htm', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'boston-kings-chapel' },
    update: { slug: 'kings-chapel', description: 'King\'s Chapel, founded in 1686, was the first Anglican church in Boston and served as the principal church of the royal governors and British officials. The current granite building, completed in 1754, stands on Tremont Street adjacent to the King\'s Chapel Burying Ground.', historicalNote: 'King\'s Chapel was established by order of King James II in 1686 as part of the Dominion of New England, and the original wooden structure was erected over the objections of Boston\'s Puritan majority, who were forced to share their own meeting house with Anglican services. The current stone building, designed by Peter Harrison, was built around and over the original wooden church, which was then dismantled and removed through the windows.\n\nAs the church of the royal establishment, King\'s Chapel attracted the colony\'s political elite and British officials. Governor Thomas Hutchinson worshipped here, as did many Loyalist families. After the Revolution and the departure of the Loyalists, the remaining congregation reorganized as the first Unitarian church in America in 1785, rejecting the Trinity and adopting a liturgy that eliminated references to the Anglican hierarchy.\n\nThe adjacent King\'s Chapel Burying Ground, established in 1630, is the oldest burying ground in Boston. It contains the graves of John Winthrop, the first governor of the Massachusetts Bay Colony, and several other figures from the colonial period.' },
    create: { id: 'boston-kings-chapel', townId: BOSTON_TOWN_ID, name: "King's Chapel", slug: 'kings-chapel', placeType: 'CHURCH', description: 'King\'s Chapel, founded in 1686, was the first Anglican church in Boston and served as the principal church of the royal governors and British officials. The current granite building, completed in 1754, stands on Tremont Street adjacent to the King\'s Chapel Burying Ground.', historicalNote: 'King\'s Chapel was established by order of King James II in 1686 as part of the Dominion of New England, and the original wooden structure was erected over the objections of Boston\'s Puritan majority, who were forced to share their own meeting house with Anglican services. The current stone building, designed by Peter Harrison, was built around and over the original wooden church, which was then dismantled and removed through the windows.\n\nAs the church of the royal establishment, King\'s Chapel attracted the colony\'s political elite and British officials. Governor Thomas Hutchinson worshipped here, as did many Loyalist families. After the Revolution and the departure of the Loyalists, the remaining congregation reorganized as the first Unitarian church in America in 1785, rejecting the Trinity and adopting a liturgy that eliminated references to the Anglican hierarchy.\n\nThe adjacent King\'s Chapel Burying Ground, established in 1630, is the oldest burying ground in Boston. It contains the graves of John Winthrop, the first governor of the Massachusetts Bay Colony, and several other figures from the colonial period.', address: '58 Tremont St, Boston, MA 02108', hours: 'Sat-Wed 10am-4pm', admission: 'Suggested donation', website: 'https://www.kings-chapel.org', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'boston-green-dragon' },
    update: { slug: 'green-dragon-tavern', description: 'The Green Dragon Tavern, located on Union Street in Boston\'s North End, was known as the "Headquarters of the Revolution" for the secret meetings held there by the Sons of Liberty, the Boston Committee of Safety, and other patriot organizations.', historicalNote: 'The original Green Dragon Tavern stood at 84 Union Street and served as the most important meeting place for Boston\'s revolutionary conspirators from the 1760s through the 1770s. The Sons of Liberty, the Loyal Nine, the North End Caucus, and the Boston Committee of Safety all met in its upstairs rooms. It was here that Paul Revere\'s intelligence network — a group of thirty mechanics and tradesmen who monitored British troop movements — gathered to share information.\n\nThe tavern\'s role in the Tea Party was central: it was at the Green Dragon that the final plans for the December 16, 1773, action were reportedly laid. In the weeks before Lexington and Concord, the tavern served as a clearinghouse for intelligence about British military preparations. Joseph Warren, Paul Revere, and other patriot leaders used it as an informal headquarters from which to coordinate the colony\'s defensive preparations.\n\nThe original building was demolished in 1854. The current establishment at 11 Marshall Street, while not the original structure, carries on the name and commemorates the tavern\'s revolutionary heritage. A bronze plaque marks the approximate site of the original building on Union Street.' },
    create: { id: 'boston-green-dragon', townId: BOSTON_TOWN_ID, name: 'Green Dragon Tavern', slug: 'green-dragon-tavern', placeType: 'TAVERN', description: 'The Green Dragon Tavern, located on Union Street in Boston\'s North End, was known as the "Headquarters of the Revolution" for the secret meetings held there by the Sons of Liberty, the Boston Committee of Safety, and other patriot organizations.', historicalNote: 'The original Green Dragon Tavern stood at 84 Union Street and served as the most important meeting place for Boston\'s revolutionary conspirators from the 1760s through the 1770s. The Sons of Liberty, the Loyal Nine, the North End Caucus, and the Boston Committee of Safety all met in its upstairs rooms. It was here that Paul Revere\'s intelligence network — a group of thirty mechanics and tradesmen who monitored British troop movements — gathered to share information.\n\nThe tavern\'s role in the Tea Party was central: it was at the Green Dragon that the final plans for the December 16, 1773, action were reportedly laid. In the weeks before Lexington and Concord, the tavern served as a clearinghouse for intelligence about British military preparations. Joseph Warren, Paul Revere, and other patriot leaders used it as an informal headquarters from which to coordinate the colony\'s defensive preparations.\n\nThe original building was demolished in 1854. The current establishment at 11 Marshall Street, while not the original structure, carries on the name and commemorates the tavern\'s revolutionary heritage. A bronze plaque marks the approximate site of the original building on Union Street.', address: '11 Marshall St, Boston, MA 02108', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'boston-old-south-meeting' },
    update: { slug: 'old-south-meeting-house', description: 'Old South Meeting House, built in 1729, was the largest building in colonial Boston and the site of the mass meetings that led directly to the Boston Tea Party. It could hold over 5,000 people and served as the town\'s primary venue for large public assemblies.', historicalNote: 'Old South Meeting House was a Puritan meeting house that also served as the venue for the largest public gatherings in colonial Boston, since Faneuil Hall could not accommodate the crowds that assembled during the political crises of the 1770s. The building\'s most famous moment came on December 16, 1773, when over 5,000 citizens — more than a third of Boston\'s population — packed into the meeting house to demand that the tea ships be sent back to England without paying the duty.\n\nWhen word arrived that Governor Hutchinson had refused to grant the ships clearance to leave, Samuel Adams reportedly declared that the meeting could do nothing more to save the country. This was apparently the signal for the crowd to stream out of the building and down to Griffin\'s Wharf, where the Tea Party commenced. The building also hosted the annual Boston Massacre commemorations, where orators including Joseph Warren and John Hancock delivered speeches keeping the memory of the 1770 killings alive.\n\nDuring the British occupation of Boston (1775-1776), British soldiers stripped the interior and used the building as a riding school for cavalry horses. After the war, the meeting house was restored to its original function. Today it operates as a museum and civic space on the Freedom Trail.' },
    create: { id: 'boston-old-south-meeting', townId: BOSTON_TOWN_ID, name: 'Old South Meeting House', slug: 'old-south-meeting-house', placeType: 'CHURCH', description: 'Old South Meeting House, built in 1729, was the largest building in colonial Boston and the site of the mass meetings that led directly to the Boston Tea Party. It could hold over 5,000 people and served as the town\'s primary venue for large public assemblies.', historicalNote: 'Old South Meeting House was a Puritan meeting house that also served as the venue for the largest public gatherings in colonial Boston, since Faneuil Hall could not accommodate the crowds that assembled during the political crises of the 1770s. The building\'s most famous moment came on December 16, 1773, when over 5,000 citizens — more than a third of Boston\'s population — packed into the meeting house to demand that the tea ships be sent back to England without paying the duty.\n\nWhen word arrived that Governor Hutchinson had refused to grant the ships clearance to leave, Samuel Adams reportedly declared that the meeting could do nothing more to save the country. This was apparently the signal for the crowd to stream out of the building and down to Griffin\'s Wharf, where the Tea Party commenced. The building also hosted the annual Boston Massacre commemorations, where orators including Joseph Warren and John Hancock delivered speeches keeping the memory of the 1770 killings alive.\n\nDuring the British occupation of Boston (1775-1776), British soldiers stripped the interior and used the building as a riding school for cavalry horses. After the war, the meeting house was restored to its original function. Today it operates as a museum and civic space on the Freedom Trail.', address: '310 Washington St, Boston, MA 02108', hours: 'Daily 10am-4pm (seasonal)', admission: '$8 adults', website: 'https://www.osmh.org', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'boston-tea-party-museum' },
    update: { slug: 'tea-party-site', description: 'The Boston Tea Party Ships and Museum is a floating museum on the Congress Street Bridge that recreates the December 16, 1773, destruction of tea. It features replica ships, interactive exhibits, and live reenactments.', historicalNote: 'The museum is located near the approximate site of Griffin\'s Wharf, where the original Tea Party took place. The harbor\'s shoreline has been significantly altered by landfill since the eighteenth century, so the museum sits roughly where the original wharf extended into the water. The museum features full-scale replicas of two of the three tea ships — the Beaver and the Eleanor — which visitors can board.\n\nThe collection includes one of only two known surviving tea chests from the original event, known as the Robinson Half Chest. The interactive exhibits explore the economic, political, and social forces that led to the Tea Party, including the role of the East India Company, the mechanics of the Tea Act, and the network of patriot organizers who planned the action. Live actors portray historical figures and lead visitors through a reenactment of the events of December 16, 1773.\n\nThe museum opened in its current form in 2012 after a fire destroyed a previous museum on the site in 2001. It serves as both a tourist attraction and an educational center, offering programs for school groups and special events related to the revolutionary history of Boston Harbor.' },
    create: { id: 'boston-tea-party-museum', townId: BOSTON_TOWN_ID, name: 'Boston Tea Party Ships & Museum', slug: 'tea-party-site', placeType: 'MUSEUM', description: 'The Boston Tea Party Ships and Museum is a floating museum on the Congress Street Bridge that recreates the December 16, 1773, destruction of tea. It features replica ships, interactive exhibits, and live reenactments.', historicalNote: 'The museum is located near the approximate site of Griffin\'s Wharf, where the original Tea Party took place. The harbor\'s shoreline has been significantly altered by landfill since the eighteenth century, so the museum sits roughly where the original wharf extended into the water. The museum features full-scale replicas of two of the three tea ships — the Beaver and the Eleanor — which visitors can board.\n\nThe collection includes one of only two known surviving tea chests from the original event, known as the Robinson Half Chest. The interactive exhibits explore the economic, political, and social forces that led to the Tea Party, including the role of the East India Company, the mechanics of the Tea Act, and the network of patriot organizers who planned the action. Live actors portray historical figures and lead visitors through a reenactment of the events of December 16, 1773.\n\nThe museum opened in its current form in 2012 after a fire destroyed a previous museum on the site in 2001. It serves as both a tourist attraction and an educational center, offering programs for school groups and special events related to the revolutionary history of Boston Harbor.', address: '306 Congress St, Boston, MA 02210', hours: 'Daily 10am-5pm', admission: '$32.99 adults', website: 'https://www.bostonteapartyship.com', featured: true },
  });

  console.log('  Places seeded.');
}

// =============================================================================
// EVENTS
// =============================================================================

async function seedEvents() {
  console.log('  Seeding events...');

  await prisma.event.upsert({
    where: { id: 'boston-massacre-1770' },
    update: { slug: 'boston-massacre-1770', summary: `On the evening of March 5, 1770, a confrontation between Boston civilians and British soldiers garrisoned in the city erupted into violence on King Street, in front of the Custom House. A crowd of several hundred colonists, angered by months of friction with the military occupation, surrounded a squad of soldiers under Captain Thomas Preston. When the soldiers opened fire, five civilians were killed: Crispus Attucks, Samuel Gray, James Caldwell, Samuel Maverick, and Patrick Carr.\n\nThe immediate aftermath was explosive. Samuel Adams and other patriot leaders organized a massive public funeral for the victims on March 8, attended by an estimated 10,000 mourners. Paul Revere produced an engraving of the event that, while not entirely accurate, became one of the most effective pieces of propaganda in colonial America. The image depicted disciplined soldiers firing in unison on unarmed civilians, a portrayal that inflamed public opinion throughout the colonies.\n\nJohn Adams agreed to defend the soldiers at trial, a decision that demonstrated his commitment to the rule of law even at the cost of personal popularity. He secured acquittals for Preston and six soldiers, while two others were convicted of manslaughter. The annual commemorations of the Massacre, held every March 5 until 1783, kept the memory alive and served as rallying points for the patriot cause. The Massacre demonstrated that the presence of a standing army among a civilian population was inherently dangerous and helped build the case for independence.` },
    create: { id: 'boston-massacre-1770', townId: BOSTON_TOWN_ID, name: 'Boston Massacre', slug: 'boston-massacre-1770', startDate: new Date('1770-03-05'), datePrecision: 'DAY', summary: `On the evening of March 5, 1770, a confrontation between Boston civilians and British soldiers garrisoned in the city erupted into violence on King Street, in front of the Custom House. A crowd of several hundred colonists, angered by months of friction with the military occupation, surrounded a squad of soldiers under Captain Thomas Preston. When the soldiers opened fire, five civilians were killed: Crispus Attucks, Samuel Gray, James Caldwell, Samuel Maverick, and Patrick Carr.\n\nThe immediate aftermath was explosive. Samuel Adams and other patriot leaders organized a massive public funeral for the victims on March 8, attended by an estimated 10,000 mourners. Paul Revere produced an engraving of the event that, while not entirely accurate, became one of the most effective pieces of propaganda in colonial America. The image depicted disciplined soldiers firing in unison on unarmed civilians, a portrayal that inflamed public opinion throughout the colonies.\n\nJohn Adams agreed to defend the soldiers at trial, a decision that demonstrated his commitment to the rule of law even at the cost of personal popularity. He secured acquittals for Preston and six soldiers, while two others were convicted of manslaughter. The annual commemorations of the Massacre, held every March 5 until 1783, kept the memory alive and served as rallying points for the patriot cause. The Massacre demonstrated that the presence of a standing army among a civilian population was inherently dangerous and helped build the case for independence.`, significanceWeight: 95 },
  });

  await prisma.event.upsert({
    where: { id: 'boston-tea-party-1773' },
    update: { slug: 'tea-party-1773', summary: `On the night of December 16, 1773, approximately 100 to 150 men, many crudely disguised as Mohawk Indians, boarded three ships at Griffin's Wharf and systematically destroyed 342 chests of East India Company tea by dumping them into Boston Harbor. The action was the culmination of weeks of political maneuvering. When three tea ships arrived in late November and early December, patriot leaders demanded they be sent back to England without paying the import duty. Governor Thomas Hutchinson refused to grant clearance for the ships to leave, creating a standoff.\n\nA mass meeting at Old South Meeting House on December 16, attended by over 5,000 people, made a final appeal to Hutchinson. When his refusal was confirmed, the crowd moved to the wharf. The destruction of the tea, valued at approximately 10,000 pounds sterling, was carried out with remarkable discipline. Samuel Adams was the primary organizer, John Hancock helped finance the operation, and Paul Revere was among the participants. The action was deliberately designed as a symbolic protest against the principle of taxation without representation.\n\nThe British government's response was swift and severe. Parliament passed the Coercive Acts in 1774, closing Boston's port, revoking the Massachusetts charter, and imposing military government. These punitive measures, which the colonists called the Intolerable Acts, backfired spectacularly: instead of isolating Boston, they united the colonies in opposition and led directly to the convening of the First Continental Congress in September 1774.` },
    create: { id: 'boston-tea-party-1773', townId: BOSTON_TOWN_ID, name: 'Boston Tea Party', slug: 'tea-party-1773', startDate: new Date('1773-12-16'), datePrecision: 'DAY', summary: `On the night of December 16, 1773, approximately 100 to 150 men, many crudely disguised as Mohawk Indians, boarded three ships at Griffin's Wharf and systematically destroyed 342 chests of East India Company tea by dumping them into Boston Harbor. The action was the culmination of weeks of political maneuvering. When three tea ships arrived in late November and early December, patriot leaders demanded they be sent back to England without paying the import duty. Governor Thomas Hutchinson refused to grant clearance for the ships to leave, creating a standoff.\n\nA mass meeting at Old South Meeting House on December 16, attended by over 5,000 people, made a final appeal to Hutchinson. When his refusal was confirmed, the crowd moved to the wharf. The destruction of the tea, valued at approximately 10,000 pounds sterling, was carried out with remarkable discipline. Samuel Adams was the primary organizer, John Hancock helped finance the operation, and Paul Revere was among the participants. The action was deliberately designed as a symbolic protest against the principle of taxation without representation.\n\nThe British government's response was swift and severe. Parliament passed the Coercive Acts in 1774, closing Boston's port, revoking the Massachusetts charter, and imposing military government. These punitive measures, which the colonists called the Intolerable Acts, backfired spectacularly: instead of isolating Boston, they united the colonies in opposition and led directly to the convening of the First Continental Congress in September 1774.`, significanceWeight: 98 },
  });

  await prisma.event.upsert({
    where: { id: 'boston-port-act-1774' },
    update: { slug: 'port-act-1774', summary: `The Boston Port Act, which took effect on June 1, 1774, closed the port of Boston to all commercial shipping until the East India Company was compensated for the tea destroyed in the Boston Tea Party and until the king was satisfied that order had been restored. The act was the first of the four Coercive Acts passed by Parliament in response to the Tea Party, and its impact on Boston was immediate and devastating.\n\nBoston was a maritime city whose economy depended almost entirely on its harbor. The closure threw thousands of sailors, dock workers, merchants, and tradespeople out of work. Ships were diverted to Salem, and the customs house was moved to Plymouth. The act was enforced by the Royal Navy, which blockaded the harbor. Only food and firewood were permitted through, and even these required special permits from the customs commissioner.\n\nRather than breaking Boston's resistance, the Port Act generated an outpouring of solidarity from the other colonies. Towns throughout New England, Virginia, and the Carolinas sent food, money, and supplies to sustain Boston's population. The act demonstrated to many colonists that what Parliament could do to Boston, it could do to any port in America, transforming a local dispute into a continental cause.` },
    create: { id: 'boston-port-act-1774', townId: BOSTON_TOWN_ID, name: 'Boston Port Act', slug: 'port-act-1774', startDate: new Date('1774-06-01'), datePrecision: 'DAY', summary: `The Boston Port Act, which took effect on June 1, 1774, closed the port of Boston to all commercial shipping until the East India Company was compensated for the tea destroyed in the Boston Tea Party and until the king was satisfied that order had been restored. The act was the first of the four Coercive Acts passed by Parliament in response to the Tea Party, and its impact on Boston was immediate and devastating.\n\nBoston was a maritime city whose economy depended almost entirely on its harbor. The closure threw thousands of sailors, dock workers, merchants, and tradespeople out of work. Ships were diverted to Salem, and the customs house was moved to Plymouth. The act was enforced by the Royal Navy, which blockaded the harbor. Only food and firewood were permitted through, and even these required special permits from the customs commissioner.\n\nRather than breaking Boston's resistance, the Port Act generated an outpouring of solidarity from the other colonies. Towns throughout New England, Virginia, and the Carolinas sent food, money, and supplies to sustain Boston's population. The act demonstrated to many colonists that what Parliament could do to Boston, it could do to any port in America, transforming a local dispute into a continental cause.`, significanceWeight: 85 },
  });

  await prisma.event.upsert({
    where: { id: 'suffolk-resolves-1774' },
    update: { slug: 'suffolk-resolves-1774', summary: `The Suffolk Resolves were adopted on September 9, 1774, at a convention of delegates from the towns of Suffolk County, Massachusetts, meeting in Milton. Drafted primarily by Dr. Joseph Warren, the resolves declared the Coercive Acts unconstitutional, urged Massachusetts to form its own government and collect taxes independently of the crown, called for a boycott of British imports, and advised the people to arm themselves and form militias.\n\nPaul Revere carried the resolves on horseback to the First Continental Congress in Philadelphia, covering the distance in approximately six days. On September 17, the Congress endorsed the Suffolk Resolves, a momentous decision that effectively placed the assembled colonies in support of Massachusetts's defiance. The endorsement meant that if Britain used force to impose the Coercive Acts, the other colonies would stand with Massachusetts.\n\nThe Suffolk Resolves represented a critical escalation in the colonial crisis. By calling for armed resistance and the formation of independent government, they moved the conflict beyond petitions and protests into the realm of potential military confrontation. They also demonstrated the effectiveness of the communication networks — including the Committees of Correspondence and express riders like Revere — that the patriots had built over the preceding years.` },
    create: { id: 'suffolk-resolves-1774', townId: BOSTON_TOWN_ID, name: 'Suffolk Resolves', slug: 'suffolk-resolves-1774', startDate: new Date('1774-09-09'), datePrecision: 'DAY', summary: `The Suffolk Resolves were adopted on September 9, 1774, at a convention of delegates from the towns of Suffolk County, Massachusetts, meeting in Milton. Drafted primarily by Dr. Joseph Warren, the resolves declared the Coercive Acts unconstitutional, urged Massachusetts to form its own government and collect taxes independently of the crown, called for a boycott of British imports, and advised the people to arm themselves and form militias.\n\nPaul Revere carried the resolves on horseback to the First Continental Congress in Philadelphia, covering the distance in approximately six days. On September 17, the Congress endorsed the Suffolk Resolves, a momentous decision that effectively placed the assembled colonies in support of Massachusetts's defiance. The endorsement meant that if Britain used force to impose the Coercive Acts, the other colonies would stand with Massachusetts.\n\nThe Suffolk Resolves represented a critical escalation in the colonial crisis. By calling for armed resistance and the formation of independent government, they moved the conflict beyond petitions and protests into the realm of potential military confrontation. They also demonstrated the effectiveness of the communication networks — including the Committees of Correspondence and express riders like Revere — that the patriots had built over the preceding years.`, significanceWeight: 80 },
  });

  await prisma.event.upsert({
    where: { id: 'siege-of-boston-1775' },
    update: { slug: 'siege-of-boston-1775', summary: `The Siege of Boston lasted from April 19, 1775, when militia forces from across New England converged on the city after the battles of Lexington and Concord, until March 17, 1776, when the British evacuated by sea. For nearly eleven months, approximately 15,000 to 20,000 colonial militia and Continental Army troops surrounded the city while roughly 6,500 British regulars and several thousand Loyalist civilians were trapped inside.\n\nThe siege transformed Boston from a prosperous port city into a besieged garrison. Food and fuel became scarce as supply lines were cut. The civilian population, which had numbered about 17,000 before the siege, shrank to roughly 3,000 as residents fled or were expelled. British soldiers dismantled buildings for firewood and stripped the Old South Meeting House for use as a riding school. Disease, particularly dysentery and smallpox, ravaged both the military and civilian populations.\n\nThe siege was broken when General George Washington ordered the fortification of Dorchester Heights on the night of March 4, 1776, using cannons transported from Fort Ticonderoga by Colonel Henry Knox. The commanding position of the heights over the harbor made the British position untenable. General William Howe negotiated an informal agreement to evacuate without destroying the city, and on March 17, the British fleet departed with approximately 11,000 troops and 1,000 Loyalists, ending eight years of British military presence in Boston.` },
    create: { id: 'siege-of-boston-1775', townId: BOSTON_TOWN_ID, name: 'Siege of Boston', slug: 'siege-of-boston-1775', startDate: new Date('1775-04-19'), endDate: new Date('1776-03-17'), datePrecision: 'DAY', summary: `The Siege of Boston lasted from April 19, 1775, when militia forces from across New England converged on the city after the battles of Lexington and Concord, until March 17, 1776, when the British evacuated by sea. For nearly eleven months, approximately 15,000 to 20,000 colonial militia and Continental Army troops surrounded the city while roughly 6,500 British regulars and several thousand Loyalist civilians were trapped inside.\n\nThe siege transformed Boston from a prosperous port city into a besieged garrison. Food and fuel became scarce as supply lines were cut. The civilian population, which had numbered about 17,000 before the siege, shrank to roughly 3,000 as residents fled or were expelled. British soldiers dismantled buildings for firewood and stripped the Old South Meeting House for use as a riding school. Disease, particularly dysentery and smallpox, ravaged both the military and civilian populations.\n\nThe siege was broken when General George Washington ordered the fortification of Dorchester Heights on the night of March 4, 1776, using cannons transported from Fort Ticonderoga by Colonel Henry Knox. The commanding position of the heights over the harbor made the British position untenable. General William Howe negotiated an informal agreement to evacuate without destroying the city, and on March 17, the British fleet departed with approximately 11,000 troops and 1,000 Loyalists, ending eight years of British military presence in Boston.`, significanceWeight: 90 },
  });

  await prisma.event.upsert({
    where: { id: 'evacuation-day-1776' },
    update: { slug: 'evacuation-day-1776', summary: `On March 17, 1776, the British military evacuated Boston after an eleven-month siege. The departure was precipitated by General Washington's fortification of Dorchester Heights on March 4-5, which placed Continental Army cannons in a commanding position overlooking the harbor and the city. British General William Howe recognized that the position was untenable and negotiated an informal agreement: the British would leave without destroying the city, and the Americans would not fire on the departing fleet.\n\nThe evacuation was a massive logistical operation. Approximately 11,000 British troops and 1,000 Loyalist civilians boarded over 120 ships in the harbor. Many Loyalists left behind homes, businesses, and everything they could not carry. The fleet sailed initially to Halifax, Nova Scotia. The departure marked the permanent end of British military control over Boston and was the first major strategic victory for the Continental Army.\n\nMarch 17 is still celebrated as Evacuation Day in Suffolk County, Massachusetts, a local holiday that conveniently coincides with St. Patrick's Day. The holiday commemorates both the military achievement and the restoration of self-governance to Boston's citizens, who had lived under military occupation since October 1768.` },
    create: { id: 'evacuation-day-1776', townId: BOSTON_TOWN_ID, name: 'British Evacuation of Boston', slug: 'evacuation-day-1776', startDate: new Date('1776-03-17'), datePrecision: 'DAY', summary: `On March 17, 1776, the British military evacuated Boston after an eleven-month siege. The departure was precipitated by General Washington's fortification of Dorchester Heights on March 4-5, which placed Continental Army cannons in a commanding position overlooking the harbor and the city. British General William Howe recognized that the position was untenable and negotiated an informal agreement: the British would leave without destroying the city, and the Americans would not fire on the departing fleet.\n\nThe evacuation was a massive logistical operation. Approximately 11,000 British troops and 1,000 Loyalist civilians boarded over 120 ships in the harbor. Many Loyalists left behind homes, businesses, and everything they could not carry. The fleet sailed initially to Halifax, Nova Scotia. The departure marked the permanent end of British military control over Boston and was the first major strategic victory for the Continental Army.\n\nMarch 17 is still celebrated as Evacuation Day in Suffolk County, Massachusetts, a local holiday that conveniently coincides with St. Patrick's Day. The holiday commemorates both the military achievement and the restoration of self-governance to Boston's citizens, who had lived under military occupation since October 1768.`, significanceWeight: 88 },
  });

  await prisma.event.upsert({
    where: { id: 'stamp-act-riots-1765' },
    update: { slug: 'stamp-act-riots-1765', summary: `On August 14, 1765, a Boston mob hanged an effigy of Andrew Oliver, the designated stamp distributor for Massachusetts, from the Liberty Tree on Boston Common. That evening, the crowd destroyed a building Oliver owned on Kilby Street and then marched to his home, where they beheaded the effigy, broke windows, and demolished his garden. Oliver resigned his commission the next day. Twelve days later, on August 26, a larger and more destructive mob attacked the mansion of Lieutenant Governor Thomas Hutchinson, destroying the interior and scattering his papers and manuscripts.\n\nThe Stamp Act, passed by Parliament in March 1765, imposed a direct tax on printed materials in the colonies — newspapers, legal documents, playing cards, and other items. It was the first attempt by Parliament to levy an internal tax on the colonies, and it provoked furious opposition across British America. In Boston, resistance was organized by the Loyal Nine, a group of merchants and artisans that included Samuel Adams, who mobilized the town's working people against the act.\n\nThe violence of the Boston riots alarmed even some patriot leaders, and subsequent acts of resistance were generally more disciplined. But the Stamp Act crisis established the pattern of colonial resistance — economic boycotts, public demonstrations, destruction of property, and the intimidation of crown officials — that would be repeated with increasing intensity over the next decade.` },
    create: { id: 'stamp-act-riots-1765', townId: BOSTON_TOWN_ID, name: 'Stamp Act Riots in Boston', slug: 'stamp-act-riots-1765', startDate: new Date('1765-08-14'), datePrecision: 'DAY', summary: `On August 14, 1765, a Boston mob hanged an effigy of Andrew Oliver, the designated stamp distributor for Massachusetts, from the Liberty Tree on Boston Common. That evening, the crowd destroyed a building Oliver owned on Kilby Street and then marched to his home, where they beheaded the effigy, broke windows, and demolished his garden. Oliver resigned his commission the next day. Twelve days later, on August 26, a larger and more destructive mob attacked the mansion of Lieutenant Governor Thomas Hutchinson, destroying the interior and scattering his papers and manuscripts.\n\nThe Stamp Act, passed by Parliament in March 1765, imposed a direct tax on printed materials in the colonies — newspapers, legal documents, playing cards, and other items. It was the first attempt by Parliament to levy an internal tax on the colonies, and it provoked furious opposition across British America. In Boston, resistance was organized by the Loyal Nine, a group of merchants and artisans that included Samuel Adams, who mobilized the town's working people against the act.\n\nThe violence of the Boston riots alarmed even some patriot leaders, and subsequent acts of resistance were generally more disciplined. But the Stamp Act crisis established the pattern of colonial resistance — economic boycotts, public demonstrations, destruction of property, and the intimidation of crown officials — that would be repeated with increasing intensity over the next decade.`, significanceWeight: 82 },
  });

  await prisma.event.upsert({
    where: { id: 'townshend-acts-1767' },
    update: { slug: 'townshend-acts-1767', summary: `The Townshend Acts, passed by Parliament in June and July 1767, imposed duties on glass, lead, paint, paper, and tea imported into the colonies. Boston became the epicenter of resistance. The Massachusetts Circular Letter, drafted by Samuel Adams and James Otis and approved by the General Court in February 1768, urged the other colonies to coordinate their opposition. When the British government demanded that Massachusetts rescind the letter, the General Court refused by a vote of 92 to 17, and the "Glorious 92" became celebrated as heroes.\n\nThe resistance took economic form as well: Boston merchants organized a Non-Importation Agreement in August 1768, pledging not to import British goods until the duties were repealed. Women played a significant role in this boycott, organizing spinning bees to produce homespun cloth and publicly shaming merchants who violated the agreement. The Daughters of Liberty, as they styled themselves, demonstrated that economic resistance required the participation of the entire community.\n\nThe Townshend Acts also led to the establishment of the American Board of Customs Commissioners in Boston, which aggressively enforced trade regulations and enraged the population. The seizure of John Hancock's sloop Liberty in June 1768, the resulting riots, and the subsequent decision to send British troops to Boston in October 1768 all flowed from the confrontation over the Townshend duties.` },
    create: { id: 'townshend-acts-1767', townId: BOSTON_TOWN_ID, name: 'Townshend Acts Resistance', slug: 'townshend-acts-1767', startDate: new Date('1767-11-20'), datePrecision: 'DAY', summary: `The Townshend Acts, passed by Parliament in June and July 1767, imposed duties on glass, lead, paint, paper, and tea imported into the colonies. Boston became the epicenter of resistance. The Massachusetts Circular Letter, drafted by Samuel Adams and James Otis and approved by the General Court in February 1768, urged the other colonies to coordinate their opposition. When the British government demanded that Massachusetts rescind the letter, the General Court refused by a vote of 92 to 17, and the "Glorious 92" became celebrated as heroes.\n\nThe resistance took economic form as well: Boston merchants organized a Non-Importation Agreement in August 1768, pledging not to import British goods until the duties were repealed. Women played a significant role in this boycott, organizing spinning bees to produce homespun cloth and publicly shaming merchants who violated the agreement. The Daughters of Liberty, as they styled themselves, demonstrated that economic resistance required the participation of the entire community.\n\nThe Townshend Acts also led to the establishment of the American Board of Customs Commissioners in Boston, which aggressively enforced trade regulations and enraged the population. The seizure of John Hancock's sloop Liberty in June 1768, the resulting riots, and the subsequent decision to send British troops to Boston in October 1768 all flowed from the confrontation over the Townshend duties.`, significanceWeight: 75 },
  });

  await prisma.event.upsert({
    where: { id: 'writs-of-assistance-1761' },
    update: { slug: 'writs-of-assistance-1761', summary: `In February 1761, the Massachusetts Superior Court heard arguments on the legality of Writs of Assistance — general search warrants that allowed customs officials to enter and search any home, warehouse, or ship without specific cause or prior notice. James Otis Jr., who had resigned his position as advocate general of the Admiralty Court to argue against the writs, delivered a five-hour oration that John Adams, who was present as a young law student, later called the spark that ignited the American Revolution.\n\nOtis argued that the writs violated the fundamental rights of Englishmen, that no act of Parliament could override natural law, and that a court had the power — indeed the duty — to void any statute that contravened the constitution. These arguments laid the groundwork for the constitutional principles of judicial review and limited government that would later be enshrined in the American system. Though the court ultimately ruled in favor of the writs, Otis's arguments electrified the Boston legal and political community.\n\nThe case was significant beyond its immediate legal impact. It established the constitutional framework for colonial resistance, moving the debate from practical objections to specific taxes toward fundamental questions about the nature of governmental authority and individual rights. Otis's argument that there were limits on what Parliament could lawfully do became the intellectual foundation of the American Revolution.` },
    create: { id: 'writs-of-assistance-1761', townId: BOSTON_TOWN_ID, name: 'Writs of Assistance Case', slug: 'writs-of-assistance-1761', startDate: new Date('1761-02-24'), datePrecision: 'DAY', summary: `In February 1761, the Massachusetts Superior Court heard arguments on the legality of Writs of Assistance — general search warrants that allowed customs officials to enter and search any home, warehouse, or ship without specific cause or prior notice. James Otis Jr., who had resigned his position as advocate general of the Admiralty Court to argue against the writs, delivered a five-hour oration that John Adams, who was present as a young law student, later called the spark that ignited the American Revolution.\n\nOtis argued that the writs violated the fundamental rights of Englishmen, that no act of Parliament could override natural law, and that a court had the power — indeed the duty — to void any statute that contravened the constitution. These arguments laid the groundwork for the constitutional principles of judicial review and limited government that would later be enshrined in the American system. Though the court ultimately ruled in favor of the writs, Otis's arguments electrified the Boston legal and political community.\n\nThe case was significant beyond its immediate legal impact. It established the constitutional framework for colonial resistance, moving the debate from practical objections to specific taxes toward fundamental questions about the nature of governmental authority and individual rights. Otis's argument that there were limits on what Parliament could lawfully do became the intellectual foundation of the American Revolution.`, significanceWeight: 78 },
  });

  await prisma.event.upsert({
    where: { id: 'liberty-affair-1768' },
    update: { slug: 'liberty-affair-1768', summary: `On June 10, 1768, customs officials seized John Hancock's sloop Liberty at Hancock's Wharf, alleging that Hancock had unloaded a cargo of Madeira wine without paying the required duties. The seizure provoked a riot. A crowd of several thousand attacked the customs commissioners, beating some and driving others to take refuge on the British warship Romney in the harbor. The customs officials' houses were vandalized, and one commissioner's pleasure boat was dragged to Boston Common and burned.\n\nThe Liberty Affair was significant on multiple levels. It demonstrated the depth of popular anger at British revenue enforcement in Boston, and it made John Hancock — already one of the city's wealthiest men — into a popular hero. John Adams represented Hancock in the subsequent admiralty court proceedings, which dragged on for months before the charges were dropped. The case highlighted the colonists' objection to admiralty courts, which tried cases without juries.\n\nThe violence of the Liberty riots was one of the immediate provocations for the British government's decision to send troops to Boston. In October 1768, two regiments of British regulars landed in the city to enforce order, beginning the military occupation that would culminate in the Boston Massacre less than two years later.` },
    create: { id: 'liberty-affair-1768', townId: BOSTON_TOWN_ID, name: 'Liberty Affair', slug: 'liberty-affair-1768', startDate: new Date('1768-06-10'), datePrecision: 'DAY', summary: `On June 10, 1768, customs officials seized John Hancock's sloop Liberty at Hancock's Wharf, alleging that Hancock had unloaded a cargo of Madeira wine without paying the required duties. The seizure provoked a riot. A crowd of several thousand attacked the customs commissioners, beating some and driving others to take refuge on the British warship Romney in the harbor. The customs officials' houses were vandalized, and one commissioner's pleasure boat was dragged to Boston Common and burned.\n\nThe Liberty Affair was significant on multiple levels. It demonstrated the depth of popular anger at British revenue enforcement in Boston, and it made John Hancock — already one of the city's wealthiest men — into a popular hero. John Adams represented Hancock in the subsequent admiralty court proceedings, which dragged on for months before the charges were dropped. The case highlighted the colonists' objection to admiralty courts, which tried cases without juries.\n\nThe violence of the Liberty riots was one of the immediate provocations for the British government's decision to send troops to Boston. In October 1768, two regiments of British regulars landed in the city to enforce order, beginning the military occupation that would culminate in the Boston Massacre less than two years later.`, significanceWeight: 70 },
  });

  await prisma.event.upsert({
    where: { id: 'troops-arrive-1768' },
    update: { slug: 'troops-arrive-1768', summary: `On October 1, 1768, two regiments of British regulars — the 14th and 29th Regiments of Foot, totaling approximately 1,000 soldiers — landed in Boston from transports that had sailed from Halifax. They were joined within weeks by two additional regiments from Ireland. The troops were sent at the request of the American Board of Customs Commissioners, who reported that they could not enforce trade regulations without military support.\n\nThe arrival of the soldiers transformed daily life in Boston. Troops were quartered in public buildings, including Faneuil Hall, and later in tents on Boston Common. The presence of armed soldiers in a civilian city created constant friction: soldiers competed with local laborers for part-time work, confrontations between soldiers and civilians were frequent, and the sound of military drums and the sight of scarlet coats became sources of resentment. The Journal of the Times, a series of newspaper articles likely written by Samuel Adams and his associates, documented alleged outrages committed by the soldiers and circulated throughout the colonies.\n\nThe military occupation lasted nearly eight years, from October 1768 until the British evacuation in March 1776. It produced the Boston Massacre, deepened the colonists' distrust of standing armies, and provided the patriot movement with a powerful grievance that resonated across all thirteen colonies.` },
    create: { id: 'troops-arrive-1768', townId: BOSTON_TOWN_ID, name: 'British Troops Arrive in Boston', slug: 'troops-arrive-1768', startDate: new Date('1768-10-01'), datePrecision: 'DAY', summary: `On October 1, 1768, two regiments of British regulars — the 14th and 29th Regiments of Foot, totaling approximately 1,000 soldiers — landed in Boston from transports that had sailed from Halifax. They were joined within weeks by two additional regiments from Ireland. The troops were sent at the request of the American Board of Customs Commissioners, who reported that they could not enforce trade regulations without military support.\n\nThe arrival of the soldiers transformed daily life in Boston. Troops were quartered in public buildings, including Faneuil Hall, and later in tents on Boston Common. The presence of armed soldiers in a civilian city created constant friction: soldiers competed with local laborers for part-time work, confrontations between soldiers and civilians were frequent, and the sound of military drums and the sight of scarlet coats became sources of resentment. The Journal of the Times, a series of newspaper articles likely written by Samuel Adams and his associates, documented alleged outrages committed by the soldiers and circulated throughout the colonies.\n\nThe military occupation lasted nearly eight years, from October 1768 until the British evacuation in March 1776. It produced the Boston Massacre, deepened the colonists' distrust of standing armies, and provided the patriot movement with a powerful grievance that resonated across all thirteen colonies.`, significanceWeight: 77 },
  });

  await prisma.event.upsert({
    where: { id: 'non-importation-1768' },
    update: { slug: 'non-importation-1768', summary: `In August 1768, Boston merchants agreed to a Non-Importation Agreement, pledging not to import most British goods until the Townshend Acts were repealed. The agreement was modeled on the successful boycotts that had helped defeat the Stamp Act in 1766 and was designed to put economic pressure on British manufacturers and merchants, who would in turn lobby Parliament for repeal.\n\nThe boycott required enforcement, and patriot leaders organized committees to inspect merchants' inventories and publicly shame those who violated the agreement. The names of violators were published in newspapers and posted in public places. Women played a crucial role in the boycott, forming groups of Daughters of Liberty who organized spinning bees to produce homespun cloth as an alternative to imported British textiles. The boycott was both an economic weapon and a demonstration of collective self-discipline.\n\nThe Non-Importation Agreement was partially successful: British exports to the colonies dropped significantly, and Parliament repealed most of the Townshend duties in 1770 — though it retained the tax on tea as a symbol of its right to tax the colonies. The boycott experience taught the colonists valuable lessons in economic coordination and collective action that they would apply again during the Continental Association of 1774.` },
    create: { id: 'non-importation-1768', townId: BOSTON_TOWN_ID, name: 'Non-Importation Agreement', slug: 'non-importation-1768', startDate: new Date('1768-08-01'), datePrecision: 'DAY', summary: `In August 1768, Boston merchants agreed to a Non-Importation Agreement, pledging not to import most British goods until the Townshend Acts were repealed. The agreement was modeled on the successful boycotts that had helped defeat the Stamp Act in 1766 and was designed to put economic pressure on British manufacturers and merchants, who would in turn lobby Parliament for repeal.\n\nThe boycott required enforcement, and patriot leaders organized committees to inspect merchants' inventories and publicly shame those who violated the agreement. The names of violators were published in newspapers and posted in public places. Women played a crucial role in the boycott, forming groups of Daughters of Liberty who organized spinning bees to produce homespun cloth as an alternative to imported British textiles. The boycott was both an economic weapon and a demonstration of collective self-discipline.\n\nThe Non-Importation Agreement was partially successful: British exports to the colonies dropped significantly, and Parliament repealed most of the Townshend duties in 1770 — though it retained the tax on tea as a symbol of its right to tax the colonies. The boycott experience taught the colonists valuable lessons in economic coordination and collective action that they would apply again during the Continental Association of 1774.`, significanceWeight: 68 },
  });

  await prisma.event.upsert({
    where: { id: 'committee-correspondence-1772' },
    update: { slug: 'committee-correspondence-1772', summary: `On November 2, 1772, at a Boston town meeting, Samuel Adams proposed the creation of a Committee of Correspondence — a standing body charged with communicating Boston's position on colonial rights to the other towns of Massachusetts and to the world. The committee, with Adams, Joseph Warren, and James Otis among its twenty-one members, became the model for similar committees established throughout the colonies and formed the communications backbone of the revolutionary movement.\n\nThe immediate provocation was the announcement that Massachusetts judges would henceforth be paid by the crown rather than the colonial legislature, which threatened the independence of the judiciary. Adams saw the issue as an opportunity to reignite resistance during a period of relative calm following the partial repeal of the Townshend Acts. The Committee of Correspondence produced a document known as the "Boston Pamphlet," which articulated the colonists' rights and grievances and was distributed to every town in the colony.\n\nThe system of Committees of Correspondence that grew from the Boston model became the de facto political organization of the colonial resistance. By 1774, every colony had established a corresponding committee, creating an intercolonial network that could coordinate responses to British actions, share intelligence, and build consensus for collective action. The committees were, in effect, the precursor to the Continental Congress.` },
    create: { id: 'committee-correspondence-1772', townId: BOSTON_TOWN_ID, name: 'Committee of Correspondence Formed', slug: 'committee-correspondence-1772', startDate: new Date('1772-11-02'), datePrecision: 'DAY', summary: `On November 2, 1772, at a Boston town meeting, Samuel Adams proposed the creation of a Committee of Correspondence — a standing body charged with communicating Boston's position on colonial rights to the other towns of Massachusetts and to the world. The committee, with Adams, Joseph Warren, and James Otis among its twenty-one members, became the model for similar committees established throughout the colonies and formed the communications backbone of the revolutionary movement.\n\nThe immediate provocation was the announcement that Massachusetts judges would henceforth be paid by the crown rather than the colonial legislature, which threatened the independence of the judiciary. Adams saw the issue as an opportunity to reignite resistance during a period of relative calm following the partial repeal of the Townshend Acts. The Committee of Correspondence produced a document known as the "Boston Pamphlet," which articulated the colonists' rights and grievances and was distributed to every town in the colony.\n\nThe system of Committees of Correspondence that grew from the Boston model became the de facto political organization of the colonial resistance. By 1774, every colony had established a corresponding committee, creating an intercolonial network that could coordinate responses to British actions, share intelligence, and build consensus for collective action. The committees were, in effect, the precursor to the Continental Congress.`, significanceWeight: 83 },
  });

  await prisma.event.upsert({
    where: { id: 'old-south-meeting-1773' },
    update: { slug: 'old-south-meeting-1773', summary: `On December 16, 1773, over 5,000 people — more than a third of Boston's population — crammed into Old South Meeting House for the final meeting of the tea crisis. For three weeks, the patriot leadership had demanded that the three tea ships in the harbor be sent back to England without paying the import duty. Governor Hutchinson refused to grant clearance. The twenty-day deadline, after which customs officials could seize the tea and sell it, was about to expire.\n\nThe meeting sent a final delegation to Hutchinson at his country home in Milton. When the messenger returned with Hutchinson's refusal, Samuel Adams reportedly announced that the meeting could do nothing more to save the country. This was the signal. The crowd streamed out of the meeting house and marched to Griffin's Wharf, where the Tea Party commenced. The meeting at Old South was thus the direct precursor to the most famous act of political protest in American history.\n\nThe use of Old South Meeting House for this purpose was itself significant. By conducting the protest through formal town meeting procedures — with a moderator, recorded votes, and official resolutions — the patriots gave their actions a veneer of democratic legitimacy that distinguished them from mere mob violence. The meeting demonstrated the colonists' commitment to self-governance even as they prepared to destroy private property in defiance of the law.` },
    create: { id: 'old-south-meeting-1773', townId: BOSTON_TOWN_ID, name: 'Old South Meeting House Rally', slug: 'old-south-meeting-1773', startDate: new Date('1773-12-16'), datePrecision: 'DAY', summary: `On December 16, 1773, over 5,000 people — more than a third of Boston's population — crammed into Old South Meeting House for the final meeting of the tea crisis. For three weeks, the patriot leadership had demanded that the three tea ships in the harbor be sent back to England without paying the import duty. Governor Hutchinson refused to grant clearance. The twenty-day deadline, after which customs officials could seize the tea and sell it, was about to expire.\n\nThe meeting sent a final delegation to Hutchinson at his country home in Milton. When the messenger returned with Hutchinson's refusal, Samuel Adams reportedly announced that the meeting could do nothing more to save the country. This was the signal. The crowd streamed out of the meeting house and marched to Griffin's Wharf, where the Tea Party commenced. The meeting at Old South was thus the direct precursor to the most famous act of political protest in American history.\n\nThe use of Old South Meeting House for this purpose was itself significant. By conducting the protest through formal town meeting procedures — with a moderator, recorded votes, and official resolutions — the patriots gave their actions a veneer of democratic legitimacy that distinguished them from mere mob violence. The meeting demonstrated the colonists' commitment to self-governance even as they prepared to destroy private property in defiance of the law.`, significanceWeight: 80 },
  });

  await prisma.event.upsert({
    where: { id: 'coercive-acts-response-1774' },
    update: { slug: 'coercive-acts-response-1774', summary: `When news of the Coercive Acts reached Boston in May 1774, the response was a mix of outrage and organized resistance. The acts closed Boston's port, revoked the Massachusetts charter, and imposed military governance under General Thomas Gage. Boston's Committee of Correspondence, led by Samuel Adams, immediately sent circular letters to the other colonies calling for a unified response. The Boston town meeting voted to propose an immediate intercolonial boycott of British goods.\n\nThe response from the other colonies exceeded Boston's expectations. Virginia's House of Burgesses declared a day of fasting and prayer. Charleston, South Carolina, sent rice. Connecticut sent sheep. Towns across New England pledged money and supplies. The outpouring of solidarity demonstrated that Parliament had miscalculated: rather than punishing Boston into submission, the Coercive Acts had transformed the city into a symbol of colonial resistance and united the colonies as never before.\n\nThe crisis also accelerated the formation of the First Continental Congress, which convened in Philadelphia in September 1774. Massachusetts sent Samuel Adams, John Adams, Thomas Cushing, and Robert Treat Paine as delegates. The Congress endorsed the Suffolk Resolves, established the Continental Association to enforce a trade boycott, and laid the groundwork for armed resistance if negotiations failed.` },
    create: { id: 'coercive-acts-response-1774', townId: BOSTON_TOWN_ID, name: 'Response to Coercive Acts', slug: 'coercive-acts-response-1774', startDate: new Date('1774-05-13'), datePrecision: 'DAY', summary: `When news of the Coercive Acts reached Boston in May 1774, the response was a mix of outrage and organized resistance. The acts closed Boston's port, revoked the Massachusetts charter, and imposed military governance under General Thomas Gage. Boston's Committee of Correspondence, led by Samuel Adams, immediately sent circular letters to the other colonies calling for a unified response. The Boston town meeting voted to propose an immediate intercolonial boycott of British goods.\n\nThe response from the other colonies exceeded Boston's expectations. Virginia's House of Burgesses declared a day of fasting and prayer. Charleston, South Carolina, sent rice. Connecticut sent sheep. Towns across New England pledged money and supplies. The outpouring of solidarity demonstrated that Parliament had miscalculated: rather than punishing Boston into submission, the Coercive Acts had transformed the city into a symbol of colonial resistance and united the colonies as never before.\n\nThe crisis also accelerated the formation of the First Continental Congress, which convened in Philadelphia in September 1774. Massachusetts sent Samuel Adams, John Adams, Thomas Cushing, and Robert Treat Paine as delegates. The Congress endorsed the Suffolk Resolves, established the Continental Association to enforce a trade boycott, and laid the groundwork for armed resistance if negotiations failed.`, significanceWeight: 76 },
  });

  await prisma.event.upsert({
    where: { id: 'midnight-ride-1775' },
    update: { slug: 'midnight-ride-1775', summary: `On the night of April 18, 1775, Dr. Joseph Warren received intelligence that British regulars were preparing to march from Boston to Lexington and Concord. Warren dispatched two riders: Paul Revere, who crossed the Charles River by rowboat and rode through Medford and Menotomy (Arlington) to Lexington, and William Dawes, who took the longer land route through Roxbury and Brookline. Revere had arranged for the sexton of Old North Church to hang two lanterns in the steeple — the signal to patriots in Charlestown that the British were crossing by water.\n\nRevere reached Lexington around midnight and warned Samuel Adams and John Hancock, who were staying at the home of Reverend Jonas Clark. He was joined by Dawes and Dr. Samuel Prescott, and the three rode on toward Concord. Revere was captured by a British patrol between Lexington and Concord, but Prescott escaped and carried the warning to Concord. Dawes turned back after being thrown from his horse.\n\nThe ride was the culmination of the intelligence network that Revere and Warren had built over the preceding months. It activated a system of riders and alarm signals that spread the warning across eastern Massachusetts, ensuring that militia companies from dozens of towns mustered in time to confront the British column. The battles of Lexington and Concord the following morning marked the beginning of armed conflict between Britain and the colonies.` },
    create: { id: 'midnight-ride-1775', townId: BOSTON_TOWN_ID, name: "Paul Revere's Midnight Ride (from Boston)", slug: 'midnight-ride-1775', startDate: new Date('1775-04-18'), datePrecision: 'DAY', summary: `On the night of April 18, 1775, Dr. Joseph Warren received intelligence that British regulars were preparing to march from Boston to Lexington and Concord. Warren dispatched two riders: Paul Revere, who crossed the Charles River by rowboat and rode through Medford and Menotomy (Arlington) to Lexington, and William Dawes, who took the longer land route through Roxbury and Brookline. Revere had arranged for the sexton of Old North Church to hang two lanterns in the steeple — the signal to patriots in Charlestown that the British were crossing by water.\n\nRevere reached Lexington around midnight and warned Samuel Adams and John Hancock, who were staying at the home of Reverend Jonas Clark. He was joined by Dawes and Dr. Samuel Prescott, and the three rode on toward Concord. Revere was captured by a British patrol between Lexington and Concord, but Prescott escaped and carried the warning to Concord. Dawes turned back after being thrown from his horse.\n\nThe ride was the culmination of the intelligence network that Revere and Warren had built over the preceding months. It activated a system of riders and alarm signals that spread the warning across eastern Massachusetts, ensuring that militia companies from dozens of towns mustered in time to confront the British column. The battles of Lexington and Concord the following morning marked the beginning of armed conflict between Britain and the colonies.`, significanceWeight: 92 },
  });

  await prisma.event.upsert({
    where: { id: 'battle-bunker-hill-1775' },
    update: { slug: 'battle-bunker-hill-1775', summary: `On June 17, 1775, British forces assaulted colonial positions on Breed's Hill in Charlestown, across the harbor from Boston, in the first major pitched battle of the American Revolution. Colonial forces had fortified the hill overnight on June 16-17, constructing a redoubt and breastworks that threatened the British fleet in the harbor. British General William Howe ordered a frontal assault with approximately 2,200 regulars.\n\nThe battle consisted of three British assaults. During the first two, the entrenched colonials held their fire until the British were within close range, then unleashed devastating volleys that cut down the advancing regulars in appalling numbers. The colonial defenders, commanded by Colonel William Prescott and reinforced by units under General Israel Putnam, repelled the first two assaults. On the third assault, with the colonials running out of ammunition, the British overran the redoubt in fierce hand-to-hand fighting.\n\nThe British won the hill but at catastrophic cost: over 1,000 casualties, including 226 killed, representing nearly half their assault force. Colonial losses were approximately 450, including Dr. Joseph Warren, who was killed in the final assault. The battle demonstrated that untrained colonial militia could stand against British regulars in open combat and gave an enormous boost to patriot morale throughout the colonies. British General Henry Clinton later wrote that another such victory would have surely destroyed the British Army.` },
    create: { id: 'battle-bunker-hill-1775', townId: BOSTON_TOWN_ID, name: 'Battle of Bunker Hill', slug: 'battle-bunker-hill-1775', startDate: new Date('1775-06-17'), datePrecision: 'DAY', summary: `On June 17, 1775, British forces assaulted colonial positions on Breed's Hill in Charlestown, across the harbor from Boston, in the first major pitched battle of the American Revolution. Colonial forces had fortified the hill overnight on June 16-17, constructing a redoubt and breastworks that threatened the British fleet in the harbor. British General William Howe ordered a frontal assault with approximately 2,200 regulars.\n\nThe battle consisted of three British assaults. During the first two, the entrenched colonials held their fire until the British were within close range, then unleashed devastating volleys that cut down the advancing regulars in appalling numbers. The colonial defenders, commanded by Colonel William Prescott and reinforced by units under General Israel Putnam, repelled the first two assaults. On the third assault, with the colonials running out of ammunition, the British overran the redoubt in fierce hand-to-hand fighting.\n\nThe British won the hill but at catastrophic cost: over 1,000 casualties, including 226 killed, representing nearly half their assault force. Colonial losses were approximately 450, including Dr. Joseph Warren, who was killed in the final assault. The battle demonstrated that untrained colonial militia could stand against British regulars in open combat and gave an enormous boost to patriot morale throughout the colonies. British General Henry Clinton later wrote that another such victory would have surely destroyed the British Army.`, significanceWeight: 93 },
  });

  await prisma.event.upsert({
    where: { id: 'dorchester-heights-1776' },
    update: { slug: 'dorchester-heights-1776', summary: `On the night of March 4, 1776, General George Washington executed the plan that would end the Siege of Boston. Under cover of darkness, approximately 2,000 Continental soldiers hauled heavy cannons and prefabricated fortifications to the summit of Dorchester Heights in South Boston. The cannons — 59 pieces of artillery — had been transported from Fort Ticonderoga in New York by Colonel Henry Knox in an extraordinary winter journey covering nearly 300 miles over frozen rivers and mountain passes.\n\nBy dawn on March 5, the British awoke to find a formidable fortified position overlooking the harbor and the city. British General William Howe reportedly exclaimed that the rebels had done more work in one night than his entire army could have done in a month. He initially planned a counterattack, assembling 2,400 troops for an amphibious assault, but a severe storm on the night of March 5-6 prevented the operation, and Howe ultimately decided to evacuate rather than risk another Bunker Hill.\n\nThe fortification of Dorchester Heights was one of the most skillful military operations of the Revolution. Washington used diversionary bombardments from Roxbury and Cambridge to cover the noise of the operation and employed bales of hay as mobile fortifications. The action demonstrated Washington's ability to plan and execute complex operations and led directly to the British evacuation on March 17 — the first major American strategic victory of the war.` },
    create: { id: 'dorchester-heights-1776', townId: BOSTON_TOWN_ID, name: 'Fortification of Dorchester Heights', slug: 'dorchester-heights-1776', startDate: new Date('1776-03-04'), datePrecision: 'DAY', summary: `On the night of March 4, 1776, General George Washington executed the plan that would end the Siege of Boston. Under cover of darkness, approximately 2,000 Continental soldiers hauled heavy cannons and prefabricated fortifications to the summit of Dorchester Heights in South Boston. The cannons — 59 pieces of artillery — had been transported from Fort Ticonderoga in New York by Colonel Henry Knox in an extraordinary winter journey covering nearly 300 miles over frozen rivers and mountain passes.\n\nBy dawn on March 5, the British awoke to find a formidable fortified position overlooking the harbor and the city. British General William Howe reportedly exclaimed that the rebels had done more work in one night than his entire army could have done in a month. He initially planned a counterattack, assembling 2,400 troops for an amphibious assault, but a severe storm on the night of March 5-6 prevented the operation, and Howe ultimately decided to evacuate rather than risk another Bunker Hill.\n\nThe fortification of Dorchester Heights was one of the most skillful military operations of the Revolution. Washington used diversionary bombardments from Roxbury and Cambridge to cover the noise of the operation and employed bales of hay as mobile fortifications. The action demonstrated Washington's ability to plan and execute complex operations and led directly to the British evacuation on March 17 — the first major American strategic victory of the war.`, significanceWeight: 87 },
  });

  await prisma.event.upsert({
    where: { id: 'hutchinson-letters-1773' },
    update: { slug: 'hutchinson-letters-1773', summary: `In June 1773, private letters written by Governor Thomas Hutchinson and Lieutenant Governor Andrew Oliver were published in Boston, causing a political firestorm. The letters, which had been obtained by Benjamin Franklin in London and sent to Samuel Adams with instructions that they not be published, appeared to advocate restricting colonial liberties and reinforcing British authority. Adams and the patriot leadership decided to publish them anyway, arguing that the public had a right to know their governor's true sentiments.\n\nThe letters confirmed what many patriots had long suspected: that Hutchinson, despite his public protestations of moderation, had privately urged the British government to take a harder line against the colonies. One letter included the passage suggesting that there must be an abridgement of what are called English liberties in the colonies. Whether Hutchinson meant this as a description of reality or a policy recommendation was debated, but the patriots used the most damaging interpretation.\n\nThe publication destroyed Hutchinson's remaining credibility in Massachusetts. The General Court petitioned for his removal, and he was recalled to London in 1774. The affair also had consequences for Franklin, who was publicly humiliated before the Privy Council in London when his role in obtaining the letters was revealed. The Hutchinson Letters Affair demonstrated the power of the press as a political weapon and the extent to which the imperial crisis had eroded trust between colonial officials and the people they governed.` },
    create: { id: 'hutchinson-letters-1773', townId: BOSTON_TOWN_ID, name: 'Hutchinson Letters Affair', slug: 'hutchinson-letters-1773', startDate: new Date('1773-06-02'), datePrecision: 'DAY', summary: `In June 1773, private letters written by Governor Thomas Hutchinson and Lieutenant Governor Andrew Oliver were published in Boston, causing a political firestorm. The letters, which had been obtained by Benjamin Franklin in London and sent to Samuel Adams with instructions that they not be published, appeared to advocate restricting colonial liberties and reinforcing British authority. Adams and the patriot leadership decided to publish them anyway, arguing that the public had a right to know their governor's true sentiments.\n\nThe letters confirmed what many patriots had long suspected: that Hutchinson, despite his public protestations of moderation, had privately urged the British government to take a harder line against the colonies. One letter included the passage suggesting that there must be an abridgement of what are called English liberties in the colonies. Whether Hutchinson meant this as a description of reality or a policy recommendation was debated, but the patriots used the most damaging interpretation.\n\nThe publication destroyed Hutchinson's remaining credibility in Massachusetts. The General Court petitioned for his removal, and he was recalled to London in 1774. The affair also had consequences for Franklin, who was publicly humiliated before the Privy Council in London when his role in obtaining the letters was revealed. The Hutchinson Letters Affair demonstrated the power of the press as a political weapon and the extent to which the imperial crisis had eroded trust between colonial officials and the people they governed.`, significanceWeight: 72 },
  });

  await prisma.event.upsert({
    where: { id: 'boston-pamphlet-1772' },
    update: { slug: 'boston-pamphlet-1772', summary: `On November 20, 1772, the Boston Committee of Correspondence published "The Votes and Proceedings of the Freeholders and Other Inhabitants of the Town of Boston," commonly known as the "Boston Pamphlet." The document, primarily authored by Samuel Adams with contributions from Joseph Warren and Benjamin Church, was a comprehensive statement of colonial rights and a catalog of British violations of those rights. It was distributed to every town in Massachusetts and served as the founding document of the committee system.\n\nThe pamphlet was organized into three sections. The first, written by Adams, laid out the natural rights of the colonists, drawing on John Locke and English constitutional tradition. The second cataloged specific violations of those rights by the British government, including taxation without representation, the quartering of troops, and the interference with colonial courts. The third was a letter to the other towns of Massachusetts, inviting them to form their own committees and respond with their own statements of grievances.\n\nThe response was overwhelming. Over 150 Massachusetts towns formed committees and sent replies, many even more radical than the Boston original. Governor Hutchinson was alarmed by the groundswell and attempted to counter the pamphlet with a legalistic defense of parliamentary authority, but his arguments failed to resonate. The pamphlet and the committee system it spawned created the organizational infrastructure that would coordinate Massachusetts's response to the Coercive Acts and, ultimately, the armed resistance of 1775.` },
    create: { id: 'boston-pamphlet-1772', townId: BOSTON_TOWN_ID, name: 'The Votes and Proceedings (Boston Pamphlet)', slug: 'boston-pamphlet-1772', startDate: new Date('1772-11-20'), datePrecision: 'DAY', summary: `On November 20, 1772, the Boston Committee of Correspondence published "The Votes and Proceedings of the Freeholders and Other Inhabitants of the Town of Boston," commonly known as the "Boston Pamphlet." The document, primarily authored by Samuel Adams with contributions from Joseph Warren and Benjamin Church, was a comprehensive statement of colonial rights and a catalog of British violations of those rights. It was distributed to every town in Massachusetts and served as the founding document of the committee system.\n\nThe pamphlet was organized into three sections. The first, written by Adams, laid out the natural rights of the colonists, drawing on John Locke and English constitutional tradition. The second cataloged specific violations of those rights by the British government, including taxation without representation, the quartering of troops, and the interference with colonial courts. The third was a letter to the other towns of Massachusetts, inviting them to form their own committees and respond with their own statements of grievances.\n\nThe response was overwhelming. Over 150 Massachusetts towns formed committees and sent replies, many even more radical than the Boston original. Governor Hutchinson was alarmed by the groundswell and attempted to counter the pamphlet with a legalistic defense of parliamentary authority, but his arguments failed to resonate. The pamphlet and the committee system it spawned created the organizational infrastructure that would coordinate Massachusetts's response to the Coercive Acts and, ultimately, the armed resistance of 1775.`, significanceWeight: 70 },
  });

  console.log('  Events seeded.');
}

// =============================================================================
// EVENT-PEOPLE CONNECTIONS
// =============================================================================

async function seedEventPeople() {
  console.log('  Seeding event-people connections...');

  const connections = [
    { eventId: 'boston-massacre-1770', personId: 'crispus-attucks', roleInEvent: 'Victim — first person killed' },
    { eventId: 'boston-massacre-1770', personId: 'samuel-adams', roleInEvent: 'Organizer of political response' },
    { eventId: 'boston-massacre-1770', personId: 'john-adams', roleInEvent: 'Defense attorney for British soldiers' },
    { eventId: 'boston-tea-party-1773', personId: 'samuel-adams', roleInEvent: 'Primary organizer' },
    { eventId: 'boston-tea-party-1773', personId: 'john-hancock', roleInEvent: 'Financial supporter' },
    { eventId: 'boston-tea-party-1773', personId: 'paul-revere', roleInEvent: 'Participant' },
    { eventId: 'stamp-act-riots-1765', personId: 'samuel-adams', roleInEvent: 'Organizer of resistance' },
    { eventId: 'stamp-act-riots-1765', personId: 'james-otis', roleInEvent: 'Agitator and pamphleteer' },
    { eventId: 'writs-of-assistance-1761', personId: 'james-otis', roleInEvent: 'Arguing attorney against the writs' },
    { eventId: 'midnight-ride-1775', personId: 'paul-revere', roleInEvent: 'Rider' },
    { eventId: 'midnight-ride-1775', personId: 'joseph-warren', roleInEvent: 'Ordered the ride and dispatched riders' },
    { eventId: 'battle-bunker-hill-1775', personId: 'joseph-warren', roleInEvent: 'Killed in battle' },
    { eventId: 'siege-of-boston-1775', personId: 'john-adams', roleInEvent: 'Continental Congress delegate supporting the siege' },
    { eventId: 'committee-correspondence-1772', personId: 'samuel-adams', roleInEvent: 'Founder and primary author' },
    { eventId: 'liberty-affair-1768', personId: 'john-hancock', roleInEvent: 'Owner of the seized sloop Liberty' },
    { eventId: 'evacuation-day-1776', personId: 'john-adams', roleInEvent: 'Continental Congress delegate' },
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

  await prisma.story.upsert({
    where: { id: 'boston-story-revere-ride' },
    update: {
      slug: 'midnight-ride',
      textVersion: `The night of April 18, 1775, was cool and clear, with a nearly full moon rising over Boston Harbor. I had been watching the British regulars for weeks, tracking their movements, counting the longboats being collected alongside the warships, noting the officers who rode out to survey the roads west of the city. My network of observers — mechanics, dock workers, stable hands — fed me scraps of intelligence that, pieced together, told a clear story: the regulars were preparing to march.

Dr. Joseph Warren summoned me to his home that evening. He had received confirmation from a source within the British command — whose identity he would not reveal even to me — that the troops would move that night. Their objectives were Lexington, where Samuel Adams and John Hancock were sheltering at the home of Reverend Jonas Clark, and Concord, where the provincial militia had stockpiled arms and ammunition. Warren asked me to ride to Lexington with the warning. He was sending William Dawes by the land route through Roxbury and Brookline as a backup, in case I was intercepted.

Before leaving, I stopped at the home of Robert Newman, the sexton of Christ Church — what people now call the Old North Church. We had arranged a signal weeks earlier: one lantern in the steeple if the British marched by land over Boston Neck, two if they crossed by water. Newman and Captain John Pulling climbed the steeple and hung two lanterns briefly — just long enough for our confederates in Charlestown to see them. The signal was a precaution: if I failed to cross the river, the Charlestown patriots would know to send their own riders.

I made my way to the waterfront with two associates, Joshua Bentley and Thomas Richardson, who rowed me across the Charles River in a small boat. The night was still. We passed within hailing distance of the HMS Somerset, a sixty-four-gun man-of-war anchored in the river, but the sentries did not spot us. On the Charlestown shore, I was met by Colonel William Conant and others who had seen the lantern signal. They provided me with a horse — a fine, large mare belonging to Deacon John Larkin.

I set out at approximately 11 o'clock, riding north through Charlestown Neck and then northwest toward Medford. Near the Charlestown Common, I spotted two British officers on horseback, lurking beneath a tree. I turned my horse sharply and rode at a gallop back toward the Medford road, outrunning one officer while the other became mired in a clay pond. From that point on, I rode hard, stopping at nearly every house along the route to spread the alarm.

In Medford, I woke Captain Isaac Hall of the Medford minutemen. The alarm began to spread from there — church bells rang, muskets were fired into the air, riders set out to carry the warning to neighboring towns. By the time I reached Lexington, around midnight, the alarm was racing outward through the countryside faster than any single rider could carry it. I found Adams and Hancock at the Clark parsonage and delivered Warren's message. Hancock wanted to stay and fight; Adams convinced him that their value was as political leaders, not soldiers.

William Dawes arrived about half an hour after me, having come by the longer route. We were joined by Dr. Samuel Prescott of Concord, a young physician who happened to be returning from a social call. The three of us rode on toward Concord together. Between Lexington and Lincoln, we encountered a British patrol. Prescott, who knew the local terrain, jumped his horse over a stone wall and escaped to carry the warning to Concord. Dawes was thrown from his horse and turned back. I was surrounded, seized, and held at gunpoint.

The British officers questioned me at length. I told them the truth — that the countryside was alarmed and that 500 militia were already assembling in Lexington. Whether they believed me or not, they were clearly unnerved. They confiscated Deacon Larkin's horse and eventually released me on foot near Lexington. I made my way back to the Clark parsonage to help Adams and Hancock finish preparations to flee, and then spent the early morning hours helping to secure a trunk of papers that Hancock had left at a tavern near the Lexington green.

By dawn on April 19, the alarm I had helped set in motion had reached dozens of towns across eastern Massachusetts. Militia companies were mustering from as far away as Worcester and New Hampshire. The system of riders, church bells, and signal guns that our network had built over the preceding months worked exactly as intended. What happened on Lexington Green and at Concord's North Bridge later that morning was the direct result of the warning that traveled faster than the British column — a warning that began with two lanterns in a church steeple and a man on a borrowed horse.`,
    },
    create: {
      id: 'boston-story-revere-ride',
      townId: BOSTON_TOWN_ID,
      title: 'The Midnight Ride',
      slug: 'midnight-ride',
      storyType: 'HISTORICAL_VOICE',
      subjectPersonId: 'paul-revere',
      verificationStatus: 'VERIFIED',
      textVersion: `The night of April 18, 1775, was cool and clear, with a nearly full moon rising over Boston Harbor. I had been watching the British regulars for weeks, tracking their movements, counting the longboats being collected alongside the warships, noting the officers who rode out to survey the roads west of the city. My network of observers — mechanics, dock workers, stable hands — fed me scraps of intelligence that, pieced together, told a clear story: the regulars were preparing to march.

Dr. Joseph Warren summoned me to his home that evening. He had received confirmation from a source within the British command — whose identity he would not reveal even to me — that the troops would move that night. Their objectives were Lexington, where Samuel Adams and John Hancock were sheltering at the home of Reverend Jonas Clark, and Concord, where the provincial militia had stockpiled arms and ammunition. Warren asked me to ride to Lexington with the warning. He was sending William Dawes by the land route through Roxbury and Brookline as a backup, in case I was intercepted.

Before leaving, I stopped at the home of Robert Newman, the sexton of Christ Church — what people now call the Old North Church. We had arranged a signal weeks earlier: one lantern in the steeple if the British marched by land over Boston Neck, two if they crossed by water. Newman and Captain John Pulling climbed the steeple and hung two lanterns briefly — just long enough for our confederates in Charlestown to see them. The signal was a precaution: if I failed to cross the river, the Charlestown patriots would know to send their own riders.

I made my way to the waterfront with two associates, Joshua Bentley and Thomas Richardson, who rowed me across the Charles River in a small boat. The night was still. We passed within hailing distance of the HMS Somerset, a sixty-four-gun man-of-war anchored in the river, but the sentries did not spot us. On the Charlestown shore, I was met by Colonel William Conant and others who had seen the lantern signal. They provided me with a horse — a fine, large mare belonging to Deacon John Larkin.

I set out at approximately 11 o'clock, riding north through Charlestown Neck and then northwest toward Medford. Near the Charlestown Common, I spotted two British officers on horseback, lurking beneath a tree. I turned my horse sharply and rode at a gallop back toward the Medford road, outrunning one officer while the other became mired in a clay pond. From that point on, I rode hard, stopping at nearly every house along the route to spread the alarm.

In Medford, I woke Captain Isaac Hall of the Medford minutemen. The alarm began to spread from there — church bells rang, muskets were fired into the air, riders set out to carry the warning to neighboring towns. By the time I reached Lexington, around midnight, the alarm was racing outward through the countryside faster than any single rider could carry it. I found Adams and Hancock at the Clark parsonage and delivered Warren's message. Hancock wanted to stay and fight; Adams convinced him that their value was as political leaders, not soldiers.

William Dawes arrived about half an hour after me, having come by the longer route. We were joined by Dr. Samuel Prescott of Concord, a young physician who happened to be returning from a social call. The three of us rode on toward Concord together. Between Lexington and Lincoln, we encountered a British patrol. Prescott, who knew the local terrain, jumped his horse over a stone wall and escaped to carry the warning to Concord. Dawes was thrown from his horse and turned back. I was surrounded, seized, and held at gunpoint.

The British officers questioned me at length. I told them the truth — that the countryside was alarmed and that 500 militia were already assembling in Lexington. Whether they believed me or not, they were clearly unnerved. They confiscated Deacon Larkin's horse and eventually released me on foot near Lexington. I made my way back to the Clark parsonage to help Adams and Hancock finish preparations to flee, and then spent the early morning hours helping to secure a trunk of papers that Hancock had left at a tavern near the Lexington green.

By dawn on April 19, the alarm I had helped set in motion had reached dozens of towns across eastern Massachusetts. Militia companies were mustering from as far away as Worcester and New Hampshire. The system of riders, church bells, and signal guns that our network had built over the preceding months worked exactly as intended. What happened on Lexington Green and at Concord's North Bridge later that morning was the direct result of the warning that traveled faster than the British column — a warning that began with two lanterns in a church steeple and a man on a borrowed horse.`,
      tags: ['boston', 'revolution', 'midnight-ride', 'paul-revere', 'lexington', 'concord'],
    },
  });

  await prisma.story.upsert({
    where: { id: 'boston-story-massacre-witness' },
    update: {
      slug: 'massacre-witness',
      textVersion: `King Street on the evening of March 5, 1770, was cold and covered in a thin layer of snow. The moon, nearly full, cast pale light over the cobblestones and the brick facade of the Custom House. I had come down from the ropewalks near the harbor, where tensions between soldiers and workers had been simmering for days. A fight between a soldier looking for part-time work and a rope maker named Samuel Gray three days earlier had set nerves on edge throughout the waterfront.

A crowd was gathering near the Custom House sentry box. The sentry, Private Hugh White, had struck a barber's apprentice named Edward Garrick with his musket for insulting a British officer. Word spread quickly through the narrow streets, and people began to converge on King Street from all directions — apprentices, sailors, dock workers, women, boys throwing snowballs. The church bells began to ring, which in Boston usually meant fire, drawing even more people into the streets.

Captain Thomas Preston marched a squad of soldiers from the main guard on Brattle Street to relieve the sentry. They formed a semicircle in front of the Custom House with their bayonets fixed. The crowd pressed closer, taunting the soldiers, daring them to fire. Chunks of ice and oyster shells were thrown. Someone struck Private Hugh Montgomery with a club, knocking him to the ground. When he regained his feet, he fired his musket into the crowd.

What happened in the next seconds remains disputed. Some witnesses said they heard the command to fire; others said they did not. What is certain is that the soldiers discharged their muskets into the crowd at close range. Crispus Attucks, a tall man of African and Native American descent who had come up from the harbor, was struck by two balls and fell dead. He was standing at the front of the crowd, near the soldiers, and was the first to die. Samuel Gray fell next, shot through the head. James Caldwell, a sailor, was hit by two balls as he stood in the middle of the street. Samuel Maverick, a seventeen-year-old apprentice, was hit by a ricocheting ball as he ran and died the next morning. Patrick Carr, an Irish immigrant, was struck in the hip and lingered for two weeks before dying.

The scene after the firing was chaos. The crowd scattered, then regrouped. Lieutenant Governor Thomas Hutchinson arrived and made his way through the crowd to the State House balcony, where he promised that justice would be done. The soldiers were withdrawn to the barracks. Through the night, armed citizens patrolled the streets, and the bodies of the dead were carried to their homes.

In the days that followed, Samuel Adams transformed the shooting into a political weapon. He organized a massive funeral for the victims on March 8, with thousands marching through the streets. Paul Revere created his engraving, which depicted the soldiers as a disciplined firing squad and the crowd as unarmed innocents. The image was not strictly accurate — the crowd had been aggressive, and the firing was chaotic rather than orderly — but it captured a deeper truth about the dangers of military occupation.

Crispus Attucks was buried in the Granary Burying Ground with the other victims. His identity — a man of color, likely a former slave, working as a common sailor — made him both the most vulnerable and the most symbolic of the dead. He had no political standing, no wealth, no connections. He was simply a man standing in a street, and he was killed for it. The blood on King Street that night belonged to ordinary working people, and that fact gave the patriot cause a moral power that no pamphlet or speech could have achieved alone.`,
    },
    create: {
      id: 'boston-story-massacre-witness',
      townId: BOSTON_TOWN_ID,
      title: 'Five Shots on King Street',
      slug: 'massacre-witness',
      storyType: 'HISTORICAL_VOICE',
      subjectPersonId: 'crispus-attucks',
      verificationStatus: 'VERIFIED',
      textVersion: `King Street on the evening of March 5, 1770, was cold and covered in a thin layer of snow. The moon, nearly full, cast pale light over the cobblestones and the brick facade of the Custom House. I had come down from the ropewalks near the harbor, where tensions between soldiers and workers had been simmering for days. A fight between a soldier looking for part-time work and a rope maker named Samuel Gray three days earlier had set nerves on edge throughout the waterfront.

A crowd was gathering near the Custom House sentry box. The sentry, Private Hugh White, had struck a barber's apprentice named Edward Garrick with his musket for insulting a British officer. Word spread quickly through the narrow streets, and people began to converge on King Street from all directions — apprentices, sailors, dock workers, women, boys throwing snowballs. The church bells began to ring, which in Boston usually meant fire, drawing even more people into the streets.

Captain Thomas Preston marched a squad of soldiers from the main guard on Brattle Street to relieve the sentry. They formed a semicircle in front of the Custom House with their bayonets fixed. The crowd pressed closer, taunting the soldiers, daring them to fire. Chunks of ice and oyster shells were thrown. Someone struck Private Hugh Montgomery with a club, knocking him to the ground. When he regained his feet, he fired his musket into the crowd.

What happened in the next seconds remains disputed. Some witnesses said they heard the command to fire; others said they did not. What is certain is that the soldiers discharged their muskets into the crowd at close range. Crispus Attucks, a tall man of African and Native American descent who had come up from the harbor, was struck by two balls and fell dead. He was standing at the front of the crowd, near the soldiers, and was the first to die. Samuel Gray fell next, shot through the head. James Caldwell, a sailor, was hit by two balls as he stood in the middle of the street. Samuel Maverick, a seventeen-year-old apprentice, was hit by a ricocheting ball as he ran and died the next morning. Patrick Carr, an Irish immigrant, was struck in the hip and lingered for two weeks before dying.

The scene after the firing was chaos. The crowd scattered, then regrouped. Lieutenant Governor Thomas Hutchinson arrived and made his way through the crowd to the State House balcony, where he promised that justice would be done. The soldiers were withdrawn to the barracks. Through the night, armed citizens patrolled the streets, and the bodies of the dead were carried to their homes.

In the days that followed, Samuel Adams transformed the shooting into a political weapon. He organized a massive funeral for the victims on March 8, with thousands marching through the streets. Paul Revere created his engraving, which depicted the soldiers as a disciplined firing squad and the crowd as unarmed innocents. The image was not strictly accurate — the crowd had been aggressive, and the firing was chaotic rather than orderly — but it captured a deeper truth about the dangers of military occupation.

Crispus Attucks was buried in the Granary Burying Ground with the other victims. His identity — a man of color, likely a former slave, working as a common sailor — made him both the most vulnerable and the most symbolic of the dead. He had no political standing, no wealth, no connections. He was simply a man standing in a street, and he was killed for it. The blood on King Street that night belonged to ordinary working people, and that fact gave the patriot cause a moral power that no pamphlet or speech could have achieved alone.`,
      tags: ['boston', 'revolution', 'boston-massacre', 'crispus-attucks', 'king-street'],
    },
  });

  await prisma.story.upsert({
    where: { id: 'boston-story-tea-party-participant' },
    update: {
      slug: 'tea-party-night',
      textVersion: `The meeting at Old South had been going on all day, the largest gathering any of us had seen. Over five thousand people packed into the meeting house and spilled into the surrounding streets. The question was simple: would the tea ships be sent back to England without paying the duty, or would we allow Parliament to establish the precedent that it could tax us at will? For three weeks, we had demanded that the ships return their cargo. For three weeks, Governor Hutchinson had refused to grant clearance.

When the messenger returned from Hutchinson's country home in Milton with the governor's final refusal, the mood in the meeting house shifted. Samuel Adams stood and spoke the words that set us in motion. The crowd began to stream out of the building and into the December darkness. We had known this moment might come. Groups of men had been quietly organizing for days, gathering at the Green Dragon Tavern and in workshops and homes across the North End and the waterfront.

We assembled at the wharf in loose companies. Some had blackened their faces with soot or coal dust; others wore blankets over their shoulders in a crude imitation of Mohawk dress. The disguises were thin — many of us recognized our neighbors despite the darkened faces — but they served their purpose: a symbolic separation between the men who entered the ships and the citizens who returned to their homes afterward.

Three ships were moored at Griffin's Wharf: the Dartmouth, the Eleanor, and the Beaver. We divided into three groups, each boarding a different vessel. The work was methodical. We ordered the ship's crews below decks, requested the keys to the cargo holds, and hauled the tea chests up from below. Each chest was broken open with hatchets and the tea emptied over the railing into the harbor. The tide was low, and the tea piled up in the shallows alongside the ships.

The work took approximately three hours. Three hundred and forty-two chests of East India Company tea were destroyed, each weighing over 400 pounds. The only sounds were the thud of hatchets, the splash of tea hitting the water, and the occasional murmur of voices. We worked in near silence. There was no drinking, no celebration, no unnecessary destruction. One man was caught trying to stuff tea into his coat lining; he was stripped of his coat and driven off the wharf. A padlock on one of the ships was broken during the operation; it was replaced the following day.

When the last chest had been emptied, we swept the decks of the ships clean and checked that no other cargo had been disturbed. We filed off the wharves and dispersed through the streets of Boston. The harbor smelled of tea for days afterward, and bits of tea washed up on the shores of Dorchester Neck. The value of the destroyed tea was estimated at ten thousand pounds sterling — a fortune.

We knew there would be consequences. We did not know how severe they would be. Within months, Parliament would close the port of Boston entirely, revoke the colony's charter, and send General Gage with additional troops to impose order. The punishment was meant to bring Boston to its knees, but it had the opposite effect: it united the colonies as nothing before had done.`,
    },
    create: {
      id: 'boston-story-tea-party-participant',
      townId: BOSTON_TOWN_ID,
      title: 'The Night We Destroyed the Tea',
      slug: 'tea-party-night',
      storyType: 'HISTORICAL_VOICE',
      verificationStatus: 'VERIFIED',
      textVersion: `The meeting at Old South had been going on all day, the largest gathering any of us had seen. Over five thousand people packed into the meeting house and spilled into the surrounding streets. The question was simple: would the tea ships be sent back to England without paying the duty, or would we allow Parliament to establish the precedent that it could tax us at will? For three weeks, we had demanded that the ships return their cargo. For three weeks, Governor Hutchinson had refused to grant clearance.

When the messenger returned from Hutchinson's country home in Milton with the governor's final refusal, the mood in the meeting house shifted. Samuel Adams stood and spoke the words that set us in motion. The crowd began to stream out of the building and into the December darkness. We had known this moment might come. Groups of men had been quietly organizing for days, gathering at the Green Dragon Tavern and in workshops and homes across the North End and the waterfront.

We assembled at the wharf in loose companies. Some had blackened their faces with soot or coal dust; others wore blankets over their shoulders in a crude imitation of Mohawk dress. The disguises were thin — many of us recognized our neighbors despite the darkened faces — but they served their purpose: a symbolic separation between the men who entered the ships and the citizens who returned to their homes afterward.

Three ships were moored at Griffin's Wharf: the Dartmouth, the Eleanor, and the Beaver. We divided into three groups, each boarding a different vessel. The work was methodical. We ordered the ship's crews below decks, requested the keys to the cargo holds, and hauled the tea chests up from below. Each chest was broken open with hatchets and the tea emptied over the railing into the harbor. The tide was low, and the tea piled up in the shallows alongside the ships.

The work took approximately three hours. Three hundred and forty-two chests of East India Company tea were destroyed, each weighing over 400 pounds. The only sounds were the thud of hatchets, the splash of tea hitting the water, and the occasional murmur of voices. We worked in near silence. There was no drinking, no celebration, no unnecessary destruction. One man was caught trying to stuff tea into his coat lining; he was stripped of his coat and driven off the wharf. A padlock on one of the ships was broken during the operation; it was replaced the following day.

When the last chest had been emptied, we swept the decks of the ships clean and checked that no other cargo had been disturbed. We filed off the wharves and dispersed through the streets of Boston. The harbor smelled of tea for days afterward, and bits of tea washed up on the shores of Dorchester Neck. The value of the destroyed tea was estimated at ten thousand pounds sterling — a fortune.

We knew there would be consequences. We did not know how severe they would be. Within months, Parliament would close the port of Boston entirely, revoke the colony's charter, and send General Gage with additional troops to impose order. The punishment was meant to bring Boston to its knees, but it had the opposite effect: it united the colonies as nothing before had done.`,
      tags: ['boston', 'revolution', 'tea-party', 'protest', 'griffins-wharf'],
    },
  });

  await prisma.story.upsert({
    where: { id: 'boston-story-abigail-letter' },
    update: {
      slug: 'remember-the-ladies',
      textVersion: `The farm demands my constant attention now that John is away in Philadelphia with the Congress. I rise before dawn to oversee the planting, manage the hired help, settle accounts with merchants in Braintree, and tutor our children in their lessons. This is the life of a woman whose husband has been called to serve the public — a life of doubled labor and halved companionship, sustained only by the letters that pass between us on the post roads.

I write to John almost daily. My letters carry news of the children — Nabby growing into a thoughtful young woman, John Quincy devouring every book I can find for him, Charles and Thomas still small enough to need constant minding. But I also write of the war that presses ever closer to our doorstep. In June of last year, I climbed Penn's Hill with young John Quincy and watched the Battle of Bunker Hill unfold across the harbor. The sound of the cannons rolled across the water like distant thunder, and the smoke from burning Charlestown rose in a great black column against the sky. The war is not an abstraction for us here. It is the sound of gunfire, the sight of militia mustering on the green, the smell of smoke on the wind.

The dysentery came through Braintree in the autumn, and I feared for the children. Our servant Patty died of it. I nursed the family through the worst of it myself, as there was no physician to be had — they were all with the army. The epidemic took my mother as well, in October. I buried her and returned to the farm and the children and the endless work of keeping a household alive in wartime.

In my letter of March 31, I urged John and his colleagues in the Congress to remember the ladies as they craft the new laws by which we shall be governed. I asked that they not put unlimited power into the hands of husbands. I reminded them that all men would be tyrants if they could, and that women, who are obliged to submit to laws in which they have no voice, have reason to demand representation. John replied with what he considered humor, suggesting that I and my female correspondents were forming our own revolution. But I was not entirely in jest, and he knew it.

The contradiction is plain enough. We fight for the principle that no person should be taxed or governed without their consent. We declare that all men are created equal and endowed with unalienable rights. Yet the women who manage the farms, weave the cloth, nurse the sick, and raise the children who will inherit this new nation have no voice in its councils and no standing in its courts. I do not ask for equality in all things — I know the customs and prejudices of our age too well. But I ask that the new republic, born in the name of liberty, not begin by placing half its citizens in bondage to the other half.

I continue to write. It is the only power I have, and I use it as deliberately as any soldier uses his musket. My letters to John shape his thinking, whether he admits it or not. My letters to Mercy Otis Warren, to my sister Mary Cranch, to others in our circle, form a network of women's intelligence that runs parallel to the men's committees and congresses. We lack the vote, we lack the law, but we do not lack influence, and we do not lack resolve.`,
    },
    create: {
      id: 'boston-story-abigail-letter',
      townId: BOSTON_TOWN_ID,
      title: 'Remember the Ladies',
      slug: 'remember-the-ladies',
      storyType: 'HISTORICAL_VOICE',
      subjectPersonId: 'abigail-adams',
      verificationStatus: 'VERIFIED',
      textVersion: `The farm demands my constant attention now that John is away in Philadelphia with the Congress. I rise before dawn to oversee the planting, manage the hired help, settle accounts with merchants in Braintree, and tutor our children in their lessons. This is the life of a woman whose husband has been called to serve the public — a life of doubled labor and halved companionship, sustained only by the letters that pass between us on the post roads.

I write to John almost daily. My letters carry news of the children — Nabby growing into a thoughtful young woman, John Quincy devouring every book I can find for him, Charles and Thomas still small enough to need constant minding. But I also write of the war that presses ever closer to our doorstep. In June of last year, I climbed Penn's Hill with young John Quincy and watched the Battle of Bunker Hill unfold across the harbor. The sound of the cannons rolled across the water like distant thunder, and the smoke from burning Charlestown rose in a great black column against the sky. The war is not an abstraction for us here. It is the sound of gunfire, the sight of militia mustering on the green, the smell of smoke on the wind.

The dysentery came through Braintree in the autumn, and I feared for the children. Our servant Patty died of it. I nursed the family through the worst of it myself, as there was no physician to be had — they were all with the army. The epidemic took my mother as well, in October. I buried her and returned to the farm and the children and the endless work of keeping a household alive in wartime.

In my letter of March 31, I urged John and his colleagues in the Congress to remember the ladies as they craft the new laws by which we shall be governed. I asked that they not put unlimited power into the hands of husbands. I reminded them that all men would be tyrants if they could, and that women, who are obliged to submit to laws in which they have no voice, have reason to demand representation. John replied with what he considered humor, suggesting that I and my female correspondents were forming our own revolution. But I was not entirely in jest, and he knew it.

The contradiction is plain enough. We fight for the principle that no person should be taxed or governed without their consent. We declare that all men are created equal and endowed with unalienable rights. Yet the women who manage the farms, weave the cloth, nurse the sick, and raise the children who will inherit this new nation have no voice in its councils and no standing in its courts. I do not ask for equality in all things — I know the customs and prejudices of our age too well. But I ask that the new republic, born in the name of liberty, not begin by placing half its citizens in bondage to the other half.

I continue to write. It is the only power I have, and I use it as deliberately as any soldier uses his musket. My letters to John shape his thinking, whether he admits it or not. My letters to Mercy Otis Warren, to my sister Mary Cranch, to others in our circle, form a network of women's intelligence that runs parallel to the men's committees and congresses. We lack the vote, we lack the law, but we do not lack influence, and we do not lack resolve.`,
      tags: ['boston', 'revolution', 'women', 'abigail-adams', 'letters', 'equality'],
    },
  });

  await prisma.story.upsert({
    where: { id: 'boston-story-wheatley-poem' },
    update: {
      slug: 'liberty-in-verse',
      textVersion: `I came to Boston in chains at the age of seven, torn from a world I can barely remember. The ship was called the Phillis, and they gave me its name as though I had none of my own. The Wheatleys purchased me on the dock — John Wheatley, the tailor, buying a small, sickly girl to serve his wife Susanna. They could not have imagined what they were buying.

Susanna Wheatley was the first to notice that I was different. Within months of my arrival, I was reading English. Within two years, I was reading Latin. The family's daughter, Mary, taught me alongside their own children, and I consumed every book in the household. I read Pope, I read Milton, I read Ovid in the original. The world of classical learning opened before me like a door that had always been there, waiting for someone to turn the handle.

I began writing verse at twelve. My poems drew on the classical forms I had absorbed — heroic couplets, elegiac stanzas, odes in the manner of Horace. The subjects were those considered proper for a young woman of letters: religion, morality, the deaths of notable persons. But even in these conventional poems, something else was at work. When I wrote of freedom, of the soul's yearning for liberty, I was not speaking only in theological abstractions. I was an enslaved woman writing about chains, and every reader who cared to see it could read the double meaning.

In 1773, my book was published in London — "Poems on Various Subjects, Religious and Moral." No American printer would touch it. An enslaved African woman writing poetry was, to most white colonists, an impossibility or an affront. Before the book could be published, eighteen prominent men of Boston — including Governor Hutchinson and John Hancock — had to examine me and sign an attestation that I had truly written the poems myself. I sat before them and answered their questions, proving my authorship through recitation and discussion. That I had to prove my humanity in order to publish my art is a fact I carry with me still.

The poems found an audience in London. I traveled there to oversee the publication, and I was received in literary and aristocratic circles with a respect I could never have found in Boston. The Countess of Huntingdon sponsored the edition. I was invited to meet King George III, though the meeting did not take place. When I returned to Boston, the Wheatleys granted me my freedom, though freedom for a Black woman in Boston meant something quite different from freedom for the white men who proclaimed it from every pulpit and tavern.

I wrote to the Reverend Samson Occom, a Mohegan minister, a letter that was published in newspapers throughout New England. In it, I spoke plainly: the love of freedom is innate to every human soul. Those who cry loudest for liberty while holding their fellow creatures in bondage are guilty of a hypocrisy that the God of justice cannot overlook. The letter was my most direct political statement, and it earned me both admiration and hostility in a city preparing to go to war over the principle of liberty.

After the deaths of the Wheatleys, my circumstances declined sharply. I married John Peters, a free Black man, but we struggled in poverty. The war disrupted what little patronage I had. I worked as a scrubwoman to support my family. My last child and I died within hours of each other in December 1784, in a boarding house in Boston. I was thirty-one. The city that had marveled at my talent let me die in obscurity. But the words remain.`,
    },
    create: {
      id: 'boston-story-wheatley-poem',
      townId: BOSTON_TOWN_ID,
      title: 'Liberty in Verse',
      slug: 'liberty-in-verse',
      storyType: 'HISTORICAL_VOICE',
      subjectPersonId: 'phillis-wheatley',
      verificationStatus: 'VERIFIED',
      textVersion: `I came to Boston in chains at the age of seven, torn from a world I can barely remember. The ship was called the Phillis, and they gave me its name as though I had none of my own. The Wheatleys purchased me on the dock — John Wheatley, the tailor, buying a small, sickly girl to serve his wife Susanna. They could not have imagined what they were buying.

Susanna Wheatley was the first to notice that I was different. Within months of my arrival, I was reading English. Within two years, I was reading Latin. The family's daughter, Mary, taught me alongside their own children, and I consumed every book in the household. I read Pope, I read Milton, I read Ovid in the original. The world of classical learning opened before me like a door that had always been there, waiting for someone to turn the handle.

I began writing verse at twelve. My poems drew on the classical forms I had absorbed — heroic couplets, elegiac stanzas, odes in the manner of Horace. The subjects were those considered proper for a young woman of letters: religion, morality, the deaths of notable persons. But even in these conventional poems, something else was at work. When I wrote of freedom, of the soul's yearning for liberty, I was not speaking only in theological abstractions. I was an enslaved woman writing about chains, and every reader who cared to see it could read the double meaning.

In 1773, my book was published in London — "Poems on Various Subjects, Religious and Moral." No American printer would touch it. An enslaved African woman writing poetry was, to most white colonists, an impossibility or an affront. Before the book could be published, eighteen prominent men of Boston — including Governor Hutchinson and John Hancock — had to examine me and sign an attestation that I had truly written the poems myself. I sat before them and answered their questions, proving my authorship through recitation and discussion. That I had to prove my humanity in order to publish my art is a fact I carry with me still.

The poems found an audience in London. I traveled there to oversee the publication, and I was received in literary and aristocratic circles with a respect I could never have found in Boston. The Countess of Huntingdon sponsored the edition. I was invited to meet King George III, though the meeting did not take place. When I returned to Boston, the Wheatleys granted me my freedom, though freedom for a Black woman in Boston meant something quite different from freedom for the white men who proclaimed it from every pulpit and tavern.

I wrote to the Reverend Samson Occom, a Mohegan minister, a letter that was published in newspapers throughout New England. In it, I spoke plainly: the love of freedom is innate to every human soul. Those who cry loudest for liberty while holding their fellow creatures in bondage are guilty of a hypocrisy that the God of justice cannot overlook. The letter was my most direct political statement, and it earned me both admiration and hostility in a city preparing to go to war over the principle of liberty.

After the deaths of the Wheatleys, my circumstances declined sharply. I married John Peters, a free Black man, but we struggled in poverty. The war disrupted what little patronage I had. I worked as a scrubwoman to support my family. My last child and I died within hours of each other in December 1784, in a boarding house in Boston. I was thirty-one. The city that had marveled at my talent let me die in obscurity. But the words remain.`,
      tags: ['boston', 'revolution', 'poetry', 'slavery', 'phillis-wheatley', 'freedom'],
    },
  });

  await prisma.story.upsert({
    where: { id: 'boston-story-prince-hall' },
    update: {
      slug: 'african-lodge',
      textVersion: `I have lived as a free Black man in Boston for many years now, working the leather trade, paying my taxes, worshipping at the Reverend Croswell's church, and watching this city's white citizens declare their undying love of liberty while buying and selling my people at the docks. The contradiction would be amusing if it were not written in human suffering.

In March of 1775, with the city on the brink of war, I and fourteen other free Black men were initiated into the mysteries of Freemasonry. The lodge that received us was No. 441 of the Grand Lodge of Ireland, attached to the 38th Regiment of Foot then garrisoned in Boston. The white Masonic lodges of Boston had refused us. But the military lodge, perhaps more accustomed to judging men by their character than their complexion, opened its doors. We learned the rituals, took the oaths, and became brothers of the craft.

When the British evacuated Boston in March 1776, our connection to the Irish military lodge was severed. But we had our warrant, and we had our knowledge of the ritual. I organized African Lodge No. 1, and we met regularly in my home and in other locations around the city. We practiced the craft, supported one another, and began to build the institutions our community so desperately needed.

The white lodges of Massachusetts did not recognize us. They questioned our legitimacy, refused our visitors, and denied our petitions for a regular charter. So I wrote directly to the Grand Lodge of England. In 1784, I sent our petition across the Atlantic. In 1787, the charter arrived: African Lodge No. 459, under the Grand Lodge of England, with my name at the head. It was the first regular charter ever granted to a lodge of Black Freemasons, and it became the foundation of what would grow into a worldwide fraternal organization.

But Masonry was never my only work. In January 1777, I petitioned the Massachusetts legislature for the abolition of slavery. My petition was one of the earliest such documents in American history. I argued in the language that the patriots themselves had used: that freedom is the natural right of all men, that those who have been torn from their native land and held in bondage have as strong a claim to liberty as any citizen of Massachusetts. The petition was received but not acted upon.

In 1787, I petitioned again — this time for the right of Black children to attend public schools. The city had established public education but excluded Black children from the benefit. My petition pointed out that free Black citizens paid taxes that supported the schools from which their children were barred. Again, the petition was received; again, nothing changed.

In 1788, when three free Black Bostonians were kidnapped from the waterfront and transported to the Caribbean to be sold into slavery, I petitioned the legislature for their rescue and for laws to prevent such outrages in the future. This time, the legislature acted, and the three men were eventually returned.

I use the white man's own principles against him. When he speaks of liberty, I hold him to his word. When he speaks of equality, I demand that he mean it. When he speaks of justice, I present him with the evidence of injustice done to people who look like me. The African Lodge is more than a fraternal organization. It is proof that Black men can govern themselves, educate themselves, and build institutions of mutual aid and civic purpose. It is an answer to every man who claims that Africans are unfit for freedom.`,
    },
    create: {
      id: 'boston-story-prince-hall',
      townId: BOSTON_TOWN_ID,
      title: 'The African Lodge',
      slug: 'african-lodge',
      storyType: 'HISTORICAL_VOICE',
      subjectPersonId: 'prince-hall',
      verificationStatus: 'VERIFIED',
      textVersion: `I have lived as a free Black man in Boston for many years now, working the leather trade, paying my taxes, worshipping at the Reverend Croswell's church, and watching this city's white citizens declare their undying love of liberty while buying and selling my people at the docks. The contradiction would be amusing if it were not written in human suffering.

In March of 1775, with the city on the brink of war, I and fourteen other free Black men were initiated into the mysteries of Freemasonry. The lodge that received us was No. 441 of the Grand Lodge of Ireland, attached to the 38th Regiment of Foot then garrisoned in Boston. The white Masonic lodges of Boston had refused us. But the military lodge, perhaps more accustomed to judging men by their character than their complexion, opened its doors. We learned the rituals, took the oaths, and became brothers of the craft.

When the British evacuated Boston in March 1776, our connection to the Irish military lodge was severed. But we had our warrant, and we had our knowledge of the ritual. I organized African Lodge No. 1, and we met regularly in my home and in other locations around the city. We practiced the craft, supported one another, and began to build the institutions our community so desperately needed.

The white lodges of Massachusetts did not recognize us. They questioned our legitimacy, refused our visitors, and denied our petitions for a regular charter. So I wrote directly to the Grand Lodge of England. In 1784, I sent our petition across the Atlantic. In 1787, the charter arrived: African Lodge No. 459, under the Grand Lodge of England, with my name at the head. It was the first regular charter ever granted to a lodge of Black Freemasons, and it became the foundation of what would grow into a worldwide fraternal organization.

But Masonry was never my only work. In January 1777, I petitioned the Massachusetts legislature for the abolition of slavery. My petition was one of the earliest such documents in American history. I argued in the language that the patriots themselves had used: that freedom is the natural right of all men, that those who have been torn from their native land and held in bondage have as strong a claim to liberty as any citizen of Massachusetts. The petition was received but not acted upon.

In 1787, I petitioned again — this time for the right of Black children to attend public schools. The city had established public education but excluded Black children from the benefit. My petition pointed out that free Black citizens paid taxes that supported the schools from which their children were barred. Again, the petition was received; again, nothing changed.

In 1788, when three free Black Bostonians were kidnapped from the waterfront and transported to the Caribbean to be sold into slavery, I petitioned the legislature for their rescue and for laws to prevent such outrages in the future. This time, the legislature acted, and the three men were eventually returned.

I use the white man's own principles against him. When he speaks of liberty, I hold him to his word. When he speaks of equality, I demand that he mean it. When he speaks of justice, I present him with the evidence of injustice done to people who look like me. The African Lodge is more than a fraternal organization. It is proof that Black men can govern themselves, educate themselves, and build institutions of mutual aid and civic purpose. It is an answer to every man who claims that Africans are unfit for freedom.`,
      tags: ['boston', 'revolution', 'prince-hall', 'freemasonry', 'abolition', 'civil-rights'],
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
    where: { id: 'boston-lesson-massacre' },
    update: {
      slug: 'boston-massacre-lesson',
      summary: 'Students examine the Boston Massacre from multiple perspectives — patriot propagandist, British soldier, legal defender, and civilian bystander — to understand how the same event can be interpreted differently depending on point of view. The lesson uses primary sources including Paul Revere\'s engraving, trial testimony, and newspaper accounts.',
      lessonData: {
        objectives: [
          'Analyze how different perspectives shape historical narratives',
          'Compare primary source accounts of the same event',
          'Evaluate the role of propaganda in shaping public opinion',
          'Construct evidence-based arguments about the causes and significance of the Massacre',
        ],
        essentialQuestions: [
          'Was the Boston Massacre a "massacre" or an act of self-defense?',
          'How did Paul Revere\'s engraving shape public perception of the event?',
          'Why did John Adams defend the British soldiers, and what does that tell us about his values?',
          'How does the identity of Crispus Attucks complicate the patriot narrative?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Display Paul Revere\'s engraving of the Boston Massacre without context. Ask students to write three observations and one question about what they see. Then reveal that this was created as patriot propaganda and ask: how might this image differ from what actually happened?',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'Background on tensions in Boston 1768-1770: British troops quartered in the city, competition for jobs, friction between soldiers and civilians',
            'Chronology of March 5, 1770: the confrontation, the shooting, the aftermath',
            'The political response: Samuel Adams and the patriot propaganda campaign',
            'The legal response: John Adams\'s defense of the soldiers and the trial outcomes',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Document Analysis: Students work in groups with different primary sources (Revere engraving, anonymous witness testimony, Captain Preston\'s deposition, John Adams\'s closing argument) and fill out a SOAP analysis (Speaker, Occasion, Audience, Purpose)',
            'Perspective Mapping: Each group presents their source and the class maps the different perspectives on a shared timeline/diagram',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Write a 300-word newspaper editorial about the Boston Massacre from one of four assigned perspectives: (1) a patriot newspaper editor, (2) a British officer, (3) Crispus Attucks\'s shipmate, or (4) John Adams. Your editorial must use at least two specific facts from the primary sources.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Class discussion: Is there such a thing as an objective account of a historical event? How do modern events get told differently depending on the perspective of the narrator? Exit ticket: Name one thing you learned today that changed how you think about the Boston Massacre.',
        },
        differentiation: {
          struggling: 'Provide a sentence-starter template for the editorial. Pre-highlight key passages in primary sources.',
          advanced: 'Compare the Massacre to a modern event covered differently by different media outlets. Write a second editorial from the opposing perspective.',
          ell: 'Provide glossary of key terms (massacre, propaganda, deposition, acquittal). Pair with a fluent English speaker for document analysis.',
        },
      },
      standards: {
        commonCore: ['RH.9-10.1', 'RH.9-10.6', 'WHST.9-10.1', 'RH.9-10.9'],
        c3Framework: ['D2.His.1.9-12', 'D2.His.4.9-12', 'D2.His.6.9-12', 'D2.His.16.9-12'],
        note: 'Aligned to Common Core literacy standards for history/social studies and the C3 Framework for historical thinking.',
      },
    },
    create: {
      id: 'boston-lesson-massacre',
      townId: BOSTON_TOWN_ID,
      title: 'The Boston Massacre: Perspectives on Violence and Propaganda',
      slug: 'boston-massacre-lesson',
      gradeRange: '8-12',
      estimatedDuration: '2-3 class periods',
      summary: 'Students examine the Boston Massacre from multiple perspectives — patriot propagandist, British soldier, legal defender, and civilian bystander — to understand how the same event can be interpreted differently depending on point of view. The lesson uses primary sources including Paul Revere\'s engraving, trial testimony, and newspaper accounts.',
      lessonData: {
        objectives: [
          'Analyze how different perspectives shape historical narratives',
          'Compare primary source accounts of the same event',
          'Evaluate the role of propaganda in shaping public opinion',
          'Construct evidence-based arguments about the causes and significance of the Massacre',
        ],
        essentialQuestions: [
          'Was the Boston Massacre a "massacre" or an act of self-defense?',
          'How did Paul Revere\'s engraving shape public perception of the event?',
          'Why did John Adams defend the British soldiers, and what does that tell us about his values?',
          'How does the identity of Crispus Attucks complicate the patriot narrative?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Display Paul Revere\'s engraving of the Boston Massacre without context. Ask students to write three observations and one question about what they see. Then reveal that this was created as patriot propaganda and ask: how might this image differ from what actually happened?',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'Background on tensions in Boston 1768-1770: British troops quartered in the city, competition for jobs, friction between soldiers and civilians',
            'Chronology of March 5, 1770: the confrontation, the shooting, the aftermath',
            'The political response: Samuel Adams and the patriot propaganda campaign',
            'The legal response: John Adams\'s defense of the soldiers and the trial outcomes',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Document Analysis: Students work in groups with different primary sources (Revere engraving, anonymous witness testimony, Captain Preston\'s deposition, John Adams\'s closing argument) and fill out a SOAP analysis (Speaker, Occasion, Audience, Purpose)',
            'Perspective Mapping: Each group presents their source and the class maps the different perspectives on a shared timeline/diagram',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Write a 300-word newspaper editorial about the Boston Massacre from one of four assigned perspectives: (1) a patriot newspaper editor, (2) a British officer, (3) Crispus Attucks\'s shipmate, or (4) John Adams. Your editorial must use at least two specific facts from the primary sources.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Class discussion: Is there such a thing as an objective account of a historical event? How do modern events get told differently depending on the perspective of the narrator? Exit ticket: Name one thing you learned today that changed how you think about the Boston Massacre.',
        },
        differentiation: {
          struggling: 'Provide a sentence-starter template for the editorial. Pre-highlight key passages in primary sources.',
          advanced: 'Compare the Massacre to a modern event covered differently by different media outlets. Write a second editorial from the opposing perspective.',
          ell: 'Provide glossary of key terms (massacre, propaganda, deposition, acquittal). Pair with a fluent English speaker for document analysis.',
        },
      },
      standards: {
        commonCore: ['RH.9-10.1', 'RH.9-10.6', 'WHST.9-10.1', 'RH.9-10.9'],
        c3Framework: ['D2.His.1.9-12', 'D2.His.4.9-12', 'D2.His.6.9-12', 'D2.His.16.9-12'],
        note: 'Aligned to Common Core literacy standards for history/social studies and the C3 Framework for historical thinking.',
      },
    },
  });

  await prisma.lessonPlan.upsert({
    where: { id: 'boston-lesson-tea-party' },
    update: {
      slug: 'tea-party-lesson',
      summary: 'Students investigate the Boston Tea Party as an act of economic protest and civil disobedience, analyzing the political and economic conditions that led to the destruction of the tea and debating whether the action was justified.',
      lessonData: {
        objectives: [
          'Explain the economic causes of the Tea Party (Tea Act, East India Company monopoly, taxation)',
          'Evaluate the Boston Tea Party as an act of civil disobedience using criteria such as proportionality and nonviolence',
          'Analyze the British response (Coercive Acts) and its unintended consequences',
          'Connect historical acts of protest to modern examples of civil disobedience',
        ],
        essentialQuestions: [
          'When is the destruction of property a legitimate form of political protest?',
          'Why did the Tea Party provoke a harsher British response than the Boston Massacre?',
          'How did economic interests and political principles intersect in the tea crisis?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Present students with a modern scenario: a corporation is given a monopoly that will put local businesses out of work, and the government taxes the product without the community\'s consent. Ask students to brainstorm responses ranging from peaceful to destructive. Then reveal the Tea Party scenario.',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'The Tea Act of 1773: how it worked, who it benefited, why colonists objected',
            'The standoff in Boston Harbor: arrival of the tea ships, Hutchinson\'s refusal to allow them to leave',
            'The mass meetings at Old South Meeting House and the decision to act',
            'The Tea Party itself: organization, discipline, and the deliberate targeting of only the tea',
            'The Coercive Acts: Parliament\'s punitive response and its colonial consequences',
          ],
        },
        guidedPractice: {
          duration: '25 minutes',
          activities: [
            'Economic Analysis: Calculate the modern value of the destroyed tea and discuss the economic impact on different groups (East India Company, local merchants, consumers, the crown)',
            'Civil Disobedience Debate: Using a set of criteria (proportionality, targeting, public accountability, willingness to accept consequences), evaluate whether the Tea Party qualifies as civil disobedience or as political vandalism',
          ],
        },
        independentPractice: {
          duration: '20 minutes',
          assignment: 'Write a one-page position paper answering: Was the Boston Tea Party justified? Support your argument with at least three pieces of historical evidence. Consider counterarguments.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Gallery walk of student position papers. Tally class opinion: justified or unjustified? Discuss: Does the outcome (independence) retroactively justify the means? Exit ticket: Name one modern protest and explain how it is similar to or different from the Tea Party.',
        },
        differentiation: {
          struggling: 'Provide a graphic organizer for the position paper with spaces for claim, three evidence points, and counterargument. Offer simplified versions of primary sources.',
          advanced: 'Research and present on tea protests in other colonial ports (Charleston, Philadelphia, New York). Compare their approaches to Boston\'s.',
          ell: 'Pre-teach key vocabulary (monopoly, duty, civil disobedience, coercive). Provide bilingual glossary if available.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.1', 'RH.6-8.7', 'WHST.6-8.1', 'RH.9-10.2'],
        c3Framework: ['D2.Eco.1.6-8', 'D2.His.1.6-8', 'D2.His.14.6-8', 'D2.Civ.14.6-8'],
        note: 'Designed to be adaptable for grades 6-12 with varying levels of source complexity.',
      },
    },
    create: {
      id: 'boston-lesson-tea-party',
      townId: BOSTON_TOWN_ID,
      title: 'The Boston Tea Party: Economic Protest and Civil Disobedience',
      slug: 'tea-party-lesson',
      gradeRange: '6-12',
      estimatedDuration: '2 class periods',
      summary: 'Students investigate the Boston Tea Party as an act of economic protest and civil disobedience, analyzing the political and economic conditions that led to the destruction of the tea and debating whether the action was justified.',
      lessonData: {
        objectives: [
          'Explain the economic causes of the Tea Party (Tea Act, East India Company monopoly, taxation)',
          'Evaluate the Boston Tea Party as an act of civil disobedience using criteria such as proportionality and nonviolence',
          'Analyze the British response (Coercive Acts) and its unintended consequences',
          'Connect historical acts of protest to modern examples of civil disobedience',
        ],
        essentialQuestions: [
          'When is the destruction of property a legitimate form of political protest?',
          'Why did the Tea Party provoke a harsher British response than the Boston Massacre?',
          'How did economic interests and political principles intersect in the tea crisis?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Present students with a modern scenario: a corporation is given a monopoly that will put local businesses out of work, and the government taxes the product without the community\'s consent. Ask students to brainstorm responses ranging from peaceful to destructive. Then reveal the Tea Party scenario.',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'The Tea Act of 1773: how it worked, who it benefited, why colonists objected',
            'The standoff in Boston Harbor: arrival of the tea ships, Hutchinson\'s refusal to allow them to leave',
            'The mass meetings at Old South Meeting House and the decision to act',
            'The Tea Party itself: organization, discipline, and the deliberate targeting of only the tea',
            'The Coercive Acts: Parliament\'s punitive response and its colonial consequences',
          ],
        },
        guidedPractice: {
          duration: '25 minutes',
          activities: [
            'Economic Analysis: Calculate the modern value of the destroyed tea and discuss the economic impact on different groups (East India Company, local merchants, consumers, the crown)',
            'Civil Disobedience Debate: Using a set of criteria (proportionality, targeting, public accountability, willingness to accept consequences), evaluate whether the Tea Party qualifies as civil disobedience or as political vandalism',
          ],
        },
        independentPractice: {
          duration: '20 minutes',
          assignment: 'Write a one-page position paper answering: Was the Boston Tea Party justified? Support your argument with at least three pieces of historical evidence. Consider counterarguments.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Gallery walk of student position papers. Tally class opinion: justified or unjustified? Discuss: Does the outcome (independence) retroactively justify the means? Exit ticket: Name one modern protest and explain how it is similar to or different from the Tea Party.',
        },
        differentiation: {
          struggling: 'Provide a graphic organizer for the position paper with spaces for claim, three evidence points, and counterargument. Offer simplified versions of primary sources.',
          advanced: 'Research and present on tea protests in other colonial ports (Charleston, Philadelphia, New York). Compare their approaches to Boston\'s.',
          ell: 'Pre-teach key vocabulary (monopoly, duty, civil disobedience, coercive). Provide bilingual glossary if available.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.1', 'RH.6-8.7', 'WHST.6-8.1', 'RH.9-10.2'],
        c3Framework: ['D2.Eco.1.6-8', 'D2.His.1.6-8', 'D2.His.14.6-8', 'D2.Civ.14.6-8'],
        note: 'Designed to be adaptable for grades 6-12 with varying levels of source complexity.',
      },
    },
  });

  await prisma.lessonPlan.upsert({
    where: { id: 'boston-lesson-primary-sources' },
    update: {
      slug: 'primary-sources-lesson',
      summary: 'Students develop skills in reading and analyzing primary source documents from revolutionary Boston, including letters, pamphlets, legal documents, and engravings. The lesson builds from basic comprehension to critical analysis and evaluation of source reliability.',
      lessonData: {
        objectives: [
          'Distinguish between primary and secondary sources and explain the value of each',
          'Apply a structured analysis framework (sourcing, contextualization, corroboration, close reading) to primary documents',
          'Evaluate the reliability and bias of different types of primary sources',
          'Use primary sources as evidence to support historical arguments',
        ],
        essentialQuestions: [
          'Why do historians value primary sources, and what are their limitations?',
          'How do we determine if a historical source is reliable?',
          'What can primary sources tell us that textbooks cannot?',
        ],
        warmUp: {
          duration: '15 minutes',
          activity: 'Present two accounts of the same event (a patriot newspaper article and a British officer\'s report about the same incident). Ask students: which is more trustworthy, and why? Introduce the concept that all sources have perspective, and that bias does not necessarily mean a source is useless.',
        },
        directInstruction: {
          duration: '25 minutes',
          content: [
            'Types of primary sources from revolutionary Boston: letters (Adams correspondence), pamphlets (Boston Pamphlet), legal documents (writs of assistance, trial testimony), visual sources (Revere engraving), government records (town meeting minutes)',
            'The HIPP framework: Historical context, Intended audience, Purpose, Point of view',
            'Corroboration: comparing multiple sources about the same event',
            'The challenge of silences: whose voices are missing from the archive?',
          ],
        },
        guidedPractice: {
          duration: '40 minutes',
          activities: [
            'Document Stations: Students rotate through four stations, each with a different type of Boston primary source. At each station, they complete a HIPP analysis worksheet.',
            'Corroboration Exercise: Compare Samuel Adams\'s account of the Massacre, Captain Preston\'s deposition, and a neutral witness\'s testimony. Map areas of agreement and disagreement.',
            'Silent Voices Discussion: Examine what types of people are absent from the primary source record (enslaved persons, women, Native Americans, the poor). Discuss why and what we lose.',
          ],
        },
        independentPractice: {
          duration: '30 minutes',
          assignment: 'Select one primary source document from the Boston collection and write a 500-word analysis that addresses: (1) What is this document and who created it? (2) What was happening in Boston at the time? (3) What is the author\'s purpose and perspective? (4) What can this document tell us, and what can it not? (5) How does it compare to at least one other source about the same topic?',
        },
        closure: {
          duration: '15 minutes',
          activity: 'Students share their analyses in pairs, then report their most surprising finding to the class. Final discussion: How has your understanding of "truth" in history changed after working with primary sources? Exit ticket: List three questions you would ask about any primary source before using it as evidence.',
        },
        differentiation: {
          struggling: 'Provide annotated versions of primary sources with vocabulary definitions and context notes in the margins. Use shorter excerpts rather than full documents.',
          advanced: 'Locate an additional primary source related to their chosen document using online archives (Massachusetts Historical Society, Library of Congress). Compare and analyze.',
          ell: 'Provide modernized versions of documents alongside originals. Allow analysis to be completed in a graphic organizer format rather than essay form.',
        },
      },
      standards: {
        commonCore: ['RH.9-10.1', 'RH.9-10.2', 'RH.9-10.6', 'RH.9-10.8', 'RH.9-10.9'],
        c3Framework: ['D2.His.1.9-12', 'D2.His.2.9-12', 'D2.His.9.9-12', 'D2.His.12.9-12', 'D2.His.13.9-12'],
        note: 'This lesson is designed as a skills-building unit that can serve as a foundation for subsequent content-focused lessons on Boston.',
      },
    },
    create: {
      id: 'boston-lesson-primary-sources',
      townId: BOSTON_TOWN_ID,
      title: 'Reading Primary Sources: Boston\'s Revolutionary Documents',
      slug: 'primary-sources-lesson',
      gradeRange: '9-12',
      estimatedDuration: '3-4 class periods',
      summary: 'Students develop skills in reading and analyzing primary source documents from revolutionary Boston, including letters, pamphlets, legal documents, and engravings. The lesson builds from basic comprehension to critical analysis and evaluation of source reliability.',
      lessonData: {
        objectives: [
          'Distinguish between primary and secondary sources and explain the value of each',
          'Apply a structured analysis framework (sourcing, contextualization, corroboration, close reading) to primary documents',
          'Evaluate the reliability and bias of different types of primary sources',
          'Use primary sources as evidence to support historical arguments',
        ],
        essentialQuestions: [
          'Why do historians value primary sources, and what are their limitations?',
          'How do we determine if a historical source is reliable?',
          'What can primary sources tell us that textbooks cannot?',
        ],
        warmUp: {
          duration: '15 minutes',
          activity: 'Present two accounts of the same event (a patriot newspaper article and a British officer\'s report about the same incident). Ask students: which is more trustworthy, and why? Introduce the concept that all sources have perspective, and that bias does not necessarily mean a source is useless.',
        },
        directInstruction: {
          duration: '25 minutes',
          content: [
            'Types of primary sources from revolutionary Boston: letters (Adams correspondence), pamphlets (Boston Pamphlet), legal documents (writs of assistance, trial testimony), visual sources (Revere engraving), government records (town meeting minutes)',
            'The HIPP framework: Historical context, Intended audience, Purpose, Point of view',
            'Corroboration: comparing multiple sources about the same event',
            'The challenge of silences: whose voices are missing from the archive?',
          ],
        },
        guidedPractice: {
          duration: '40 minutes',
          activities: [
            'Document Stations: Students rotate through four stations, each with a different type of Boston primary source. At each station, they complete a HIPP analysis worksheet.',
            'Corroboration Exercise: Compare Samuel Adams\'s account of the Massacre, Captain Preston\'s deposition, and a neutral witness\'s testimony. Map areas of agreement and disagreement.',
            'Silent Voices Discussion: Examine what types of people are absent from the primary source record (enslaved persons, women, Native Americans, the poor). Discuss why and what we lose.',
          ],
        },
        independentPractice: {
          duration: '30 minutes',
          assignment: 'Select one primary source document from the Boston collection and write a 500-word analysis that addresses: (1) What is this document and who created it? (2) What was happening in Boston at the time? (3) What is the author\'s purpose and perspective? (4) What can this document tell us, and what can it not? (5) How does it compare to at least one other source about the same topic?',
        },
        closure: {
          duration: '15 minutes',
          activity: 'Students share their analyses in pairs, then report their most surprising finding to the class. Final discussion: How has your understanding of "truth" in history changed after working with primary sources? Exit ticket: List three questions you would ask about any primary source before using it as evidence.',
        },
        differentiation: {
          struggling: 'Provide annotated versions of primary sources with vocabulary definitions and context notes in the margins. Use shorter excerpts rather than full documents.',
          advanced: 'Locate an additional primary source related to their chosen document using online archives (Massachusetts Historical Society, Library of Congress). Compare and analyze.',
          ell: 'Provide modernized versions of documents alongside originals. Allow analysis to be completed in a graphic organizer format rather than essay form.',
        },
      },
      standards: {
        commonCore: ['RH.9-10.1', 'RH.9-10.2', 'RH.9-10.6', 'RH.9-10.8', 'RH.9-10.9'],
        c3Framework: ['D2.His.1.9-12', 'D2.His.2.9-12', 'D2.His.9.9-12', 'D2.His.12.9-12', 'D2.His.13.9-12'],
        note: 'This lesson is designed as a skills-building unit that can serve as a foundation for subsequent content-focused lessons on Boston.',
      },
    },
  });

  await prisma.lessonPlan.upsert({
    where: { id: 'boston-lesson-voices' },
    update: {
      slug: 'voices-revolution-lesson',
      summary: 'Students explore whose voices are included and excluded from the traditional narrative of the Boston Revolution, examining the experiences of Phillis Wheatley, Prince Hall, Abigail Adams, and Crispus Attucks alongside better-known figures.',
      lessonData: {
        objectives: [
          'Identify whose perspectives are typically included in and excluded from standard accounts of the Revolution',
          'Analyze primary sources from underrepresented voices (Wheatley\'s poetry, Abigail Adams\'s letters, Prince Hall\'s petitions)',
          'Evaluate how race, gender, and class shaped individuals\' experiences of the Revolution',
          'Construct a more inclusive narrative of the Boston Revolution',
        ],
        essentialQuestions: [
          'Whose revolution was it? Who benefited and who was left out?',
          'How did enslaved and free Black people in Boston experience the Revolution?',
          'What roles did women play in the Revolution beyond the domestic sphere?',
          'Why do some voices get preserved in the historical record while others are lost?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Ask students to list every person they associate with the American Revolution in Boston. Tally the results on the board. Analyze the list: How many are white men? How many are women? How many are people of color? Why does the list look the way it does?',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'The standard narrative: Adams, Hancock, Revere — who tells the story and why these figures dominate',
            'Phillis Wheatley: an enslaved poet writing about liberty in a slaveholding society',
            'Prince Hall: a free Black man demanding that the Revolution\'s promises apply to all people',
            'Abigail Adams: a woman demanding political recognition while managing a wartime household',
            'Crispus Attucks: a formerly enslaved sailor as the first casualty — symbol and complication',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Source Analysis Groups: Divide into four groups, each working with primary sources from one underrepresented figure (Wheatley\'s letter to Occom, Adams\'s "Remember the Ladies" letter, Hall\'s 1777 petition, and trial testimony about Attucks). Analyze: What does this person want? What barriers do they face? How do they use the language of the Revolution?',
            'Venn Diagram: Each group creates a Venn diagram comparing their figure\'s experience to that of a prominent white male patriot. What revolutionary ideals do they share? How do their experiences differ?',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Choose one of the four underrepresented figures and write a 400-word essay arguing for their inclusion in the standard narrative of the Boston Revolution. Use evidence from primary sources to explain what they contributed and why their perspective matters.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Each student shares one sentence from their essay with the class. Closing discussion: If we could add one of these figures to every textbook chapter on the Boston Revolution, who should it be and why? Exit ticket: How has this lesson changed your understanding of who made the Revolution?',
        },
        differentiation: {
          struggling: 'Provide pre-selected excerpts from primary sources with guided reading questions. Offer a paragraph frame for the essay with sentence starters.',
          advanced: 'Research an additional underrepresented voice from revolutionary Boston (e.g., Deborah Sampson, Elizabeth Freeman/Mum Bett) and present to the class. Consider how the Revolution\'s legacy has been contested by different groups over time.',
          ell: 'Provide modernized/simplified versions of primary source documents. Allow essay to be completed as a structured graphic organizer or storyboard if needed.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.1', 'RH.6-8.6', 'WHST.6-8.1', 'RH.9-10.6', 'WHST.9-10.1'],
        c3Framework: ['D2.His.4.6-8', 'D2.His.5.6-8', 'D2.His.6.9-12', 'D2.His.14.9-12'],
        note: 'Adaptable for grades 7-12 with varying levels of primary source complexity and writing expectations.',
      },
    },
    create: {
      id: 'boston-lesson-voices',
      townId: BOSTON_TOWN_ID,
      title: 'Voices of Revolution: Who Gets to Tell the Story?',
      slug: 'voices-revolution-lesson',
      gradeRange: '7-12',
      estimatedDuration: '2-3 class periods',
      summary: 'Students explore whose voices are included and excluded from the traditional narrative of the Boston Revolution, examining the experiences of Phillis Wheatley, Prince Hall, Abigail Adams, and Crispus Attucks alongside better-known figures.',
      lessonData: {
        objectives: [
          'Identify whose perspectives are typically included in and excluded from standard accounts of the Revolution',
          'Analyze primary sources from underrepresented voices (Wheatley\'s poetry, Abigail Adams\'s letters, Prince Hall\'s petitions)',
          'Evaluate how race, gender, and class shaped individuals\' experiences of the Revolution',
          'Construct a more inclusive narrative of the Boston Revolution',
        ],
        essentialQuestions: [
          'Whose revolution was it? Who benefited and who was left out?',
          'How did enslaved and free Black people in Boston experience the Revolution?',
          'What roles did women play in the Revolution beyond the domestic sphere?',
          'Why do some voices get preserved in the historical record while others are lost?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Ask students to list every person they associate with the American Revolution in Boston. Tally the results on the board. Analyze the list: How many are white men? How many are women? How many are people of color? Why does the list look the way it does?',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'The standard narrative: Adams, Hancock, Revere — who tells the story and why these figures dominate',
            'Phillis Wheatley: an enslaved poet writing about liberty in a slaveholding society',
            'Prince Hall: a free Black man demanding that the Revolution\'s promises apply to all people',
            'Abigail Adams: a woman demanding political recognition while managing a wartime household',
            'Crispus Attucks: a formerly enslaved sailor as the first casualty — symbol and complication',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Source Analysis Groups: Divide into four groups, each working with primary sources from one underrepresented figure (Wheatley\'s letter to Occom, Adams\'s "Remember the Ladies" letter, Hall\'s 1777 petition, and trial testimony about Attucks). Analyze: What does this person want? What barriers do they face? How do they use the language of the Revolution?',
            'Venn Diagram: Each group creates a Venn diagram comparing their figure\'s experience to that of a prominent white male patriot. What revolutionary ideals do they share? How do their experiences differ?',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Choose one of the four underrepresented figures and write a 400-word essay arguing for their inclusion in the standard narrative of the Boston Revolution. Use evidence from primary sources to explain what they contributed and why their perspective matters.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Each student shares one sentence from their essay with the class. Closing discussion: If we could add one of these figures to every textbook chapter on the Boston Revolution, who should it be and why? Exit ticket: How has this lesson changed your understanding of who made the Revolution?',
        },
        differentiation: {
          struggling: 'Provide pre-selected excerpts from primary sources with guided reading questions. Offer a paragraph frame for the essay with sentence starters.',
          advanced: 'Research an additional underrepresented voice from revolutionary Boston (e.g., Deborah Sampson, Elizabeth Freeman/Mum Bett) and present to the class. Consider how the Revolution\'s legacy has been contested by different groups over time.',
          ell: 'Provide modernized/simplified versions of primary source documents. Allow essay to be completed as a structured graphic organizer or storyboard if needed.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.1', 'RH.6-8.6', 'WHST.6-8.1', 'RH.9-10.6', 'WHST.9-10.1'],
        c3Framework: ['D2.His.4.6-8', 'D2.His.5.6-8', 'D2.His.6.9-12', 'D2.His.14.9-12'],
        note: 'Adaptable for grades 7-12 with varying levels of primary source complexity and writing expectations.',
      },
    },
  });

  console.log('  Lesson plans seeded.');
}

// =============================================================================
// MAIN
// =============================================================================

async function main() {
  console.log('Seeding Boston content...');

  await seedPeople();
  await seedPlaces();
  await seedEvents();
  await seedEventPeople();
  await seedStories();
  await seedLessons();

  console.log('Boston content seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
