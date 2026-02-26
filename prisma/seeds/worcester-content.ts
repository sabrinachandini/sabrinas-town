import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const WORCESTER_TOWN_ID = 'us-ma-worcester';

// =============================================================================
// PEOPLE
// =============================================================================

async function seedPeople() {
  console.log('  Seeding people...');

  await prisma.person.upsert({
    where: { id: 'person-worcester-isaiah-thomas' },
    update: {
      bioLong: `Isaiah Thomas was born on January 19, 1749, in Boston, Massachusetts. His family was poor, and at the age of six he was apprenticed to Zechariah Fowle, a printer of limited skill and ambition. Thomas learned the trade largely on his own, mastering typography, presswork, and editorial composition with a precocity that astonished his contemporaries. By his teenage years he was effectively running Fowle's shop, and in 1770, at the age of twenty-one, he established his own newspaper, the Massachusetts Spy, in Boston. The Spy quickly became one of the most widely read and most politically radical newspapers in the American colonies, rivaling Samuel Adams's Boston Gazette as a vehicle for patriot propaganda.

Thomas positioned the Massachusetts Spy as the voice of the common people against British tyranny. He adopted the motto "Open to all parties, but influenced by none," though in practice the paper was fiercely partisan in the patriot cause. His editorials attacked the Stamp Act, the Townshend duties, and the presence of British troops in Boston with a directness that alarmed royal authorities. Thomas published contributions from Samuel Adams, John Hancock, Joseph Warren, and other leading patriots, and his paper circulated throughout New England, carrying the arguments for resistance to audiences far beyond Boston.

In April 1775, as tensions reached their breaking point, Thomas made the fateful decision to relocate his press from Boston to Worcester, a town forty miles to the west that had become a center of patriot organizing. He dismantled his press and smuggled it out of Boston just days before the battles of Lexington and Concord. Thomas himself rode to Lexington on the night of April 18, likely alerted by the same intelligence network that dispatched Paul Revere and William Dawes. He is believed to have witnessed or participated in the fighting on Lexington Green and at Concord Bridge before continuing west to Worcester, where he reestablished the Massachusetts Spy and published the first patriot account of the battles on May 3, 1775.

In Worcester, Thomas built the most successful printing and publishing enterprise in eighteenth-century America. He expanded far beyond the Spy, publishing books, almanacs, pamphlets, and children's literature. His editions of "Mother Goose's Melody" and other children's books were among the first published in America. After the war, Thomas became wealthy and devoted his later years to historical preservation. In 1812, he founded the American Antiquarian Society in Worcester, endowing it with his personal collection of books, newspapers, and manuscripts — one of the most important collections of early American printed materials ever assembled. The Society remains in Worcester today, a world-class research library.

WHY HE MATTERS TO WORCESTER

Isaiah Thomas transformed Worcester from an inland agricultural and political center into a hub of American printing and publishing. His decision to relocate the Massachusetts Spy to Worcester in April 1775 was not merely a personal choice but a strategic act that linked the town permanently to the story of the free press in America. The Spy, published continuously in Worcester throughout the war and beyond, made the town a center of information and political discourse for all of New England. Thomas's post-war publishing empire employed dozens of printers and binders, establishing Worcester as a significant center of the book trade. His founding of the American Antiquarian Society in 1812 gave Worcester an institution of national scholarly importance that endures to this day, housing the largest collection of American printed materials through 1876.

- 1749: Born January 19 in Boston, Massachusetts
- 1770: Established the Massachusetts Spy newspaper in Boston
- 1775: Relocated press to Worcester; published first patriot account of Lexington and Concord on May 3
- 1812: Founded the American Antiquarian Society in Worcester
- 1831: Died April 4 in Worcester, Massachusetts, at age 82

SOURCES
- Thomas, Isaiah. "The History of Printing in America." Isaiah Thomas Jr., 1810.
- Wroth, Lawrence C. "The Colonial Printer." Grolier Club, 1931.
- Nichols, Charles Lemuel. "Isaiah Thomas: Printer, Writer and Collector." Club of Odd Volumes, 1912.`,
    },
    create: {
      id: 'person-worcester-isaiah-thomas',
      name: 'Isaiah Thomas',
      roles: ['Printer', 'Publisher', 'Patriot', 'Founder of the American Antiquarian Society'],
      bioShort: 'Printer, publisher, and patriot (1749-1831) who relocated the Massachusetts Spy newspaper from Boston to Worcester in April 1775 and built the largest printing enterprise in eighteenth-century America. He founded the American Antiquarian Society in 1812.',
      bioLong: `Isaiah Thomas was born on January 19, 1749, in Boston, Massachusetts. His family was poor, and at the age of six he was apprenticed to Zechariah Fowle, a printer of limited skill and ambition. Thomas learned the trade largely on his own, mastering typography, presswork, and editorial composition with a precocity that astonished his contemporaries. By his teenage years he was effectively running Fowle's shop, and in 1770, at the age of twenty-one, he established his own newspaper, the Massachusetts Spy, in Boston. The Spy quickly became one of the most widely read and most politically radical newspapers in the American colonies, rivaling Samuel Adams's Boston Gazette as a vehicle for patriot propaganda.

Thomas positioned the Massachusetts Spy as the voice of the common people against British tyranny. He adopted the motto "Open to all parties, but influenced by none," though in practice the paper was fiercely partisan in the patriot cause. His editorials attacked the Stamp Act, the Townshend duties, and the presence of British troops in Boston with a directness that alarmed royal authorities. Thomas published contributions from Samuel Adams, John Hancock, Joseph Warren, and other leading patriots, and his paper circulated throughout New England, carrying the arguments for resistance to audiences far beyond Boston.

In April 1775, as tensions reached their breaking point, Thomas made the fateful decision to relocate his press from Boston to Worcester, a town forty miles to the west that had become a center of patriot organizing. He dismantled his press and smuggled it out of Boston just days before the battles of Lexington and Concord. Thomas himself rode to Lexington on the night of April 18, likely alerted by the same intelligence network that dispatched Paul Revere and William Dawes. He is believed to have witnessed or participated in the fighting on Lexington Green and at Concord Bridge before continuing west to Worcester, where he reestablished the Massachusetts Spy and published the first patriot account of the battles on May 3, 1775.

In Worcester, Thomas built the most successful printing and publishing enterprise in eighteenth-century America. He expanded far beyond the Spy, publishing books, almanacs, pamphlets, and children's literature. His editions of "Mother Goose's Melody" and other children's books were among the first published in America. After the war, Thomas became wealthy and devoted his later years to historical preservation. In 1812, he founded the American Antiquarian Society in Worcester, endowing it with his personal collection of books, newspapers, and manuscripts — one of the most important collections of early American printed materials ever assembled. The Society remains in Worcester today, a world-class research library.

WHY HE MATTERS TO WORCESTER

Isaiah Thomas transformed Worcester from an inland agricultural and political center into a hub of American printing and publishing. His decision to relocate the Massachusetts Spy to Worcester in April 1775 was not merely a personal choice but a strategic act that linked the town permanently to the story of the free press in America. The Spy, published continuously in Worcester throughout the war and beyond, made the town a center of information and political discourse for all of New England. Thomas's post-war publishing empire employed dozens of printers and binders, establishing Worcester as a significant center of the book trade. His founding of the American Antiquarian Society in 1812 gave Worcester an institution of national scholarly importance that endures to this day, housing the largest collection of American printed materials through 1876.

- 1749: Born January 19 in Boston, Massachusetts
- 1770: Established the Massachusetts Spy newspaper in Boston
- 1775: Relocated press to Worcester; published first patriot account of Lexington and Concord on May 3
- 1812: Founded the American Antiquarian Society in Worcester
- 1831: Died April 4 in Worcester, Massachusetts, at age 82

SOURCES
- Thomas, Isaiah. "The History of Printing in America." Isaiah Thomas Jr., 1810.
- Wroth, Lawrence C. "The Colonial Printer." Grolier Club, 1931.
- Nichols, Charles Lemuel. "Isaiah Thomas: Printer, Writer and Collector." Club of Odd Volumes, 1912.`,
      birthYear: 1749,
      deathYear: 1831,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-worcester-timothy-bigelow' },
    update: {
      bioLong: `Timothy Bigelow was born on August 12, 1739, in Worcester, Massachusetts. He was trained as a blacksmith and established a successful forge in Worcester, where he became one of the town's most prominent and prosperous citizens. His trade gave him standing among the artisan class that formed the backbone of patriot organizing in inland Massachusetts towns, and his physical vigor and commanding presence made him a natural leader of men. Bigelow combined practical skill with political conviction in a way that was characteristic of the Revolutionary generation in Worcester County.

Bigelow emerged as one of the earliest and most forceful advocates of resistance to British authority in Worcester. He was a founding member of the American Political Society, established in Worcester in 1773, which was one of the first formal political organizations in the colonies dedicated to coordinating opposition to British policies. The Society met regularly at Worcester taverns, debating strategy and drafting resolutions that were circulated to other towns in the county. Bigelow served as the chairman of the Worcester Committee of Correspondence, the body that coordinated patriot activities across the county and maintained communication with committees in Boston and other towns.

In September 1774, Bigelow played a central role in one of the most dramatic acts of political defiance in pre-war Massachusetts. When the new royal governor, General Thomas Gage, appointed mandamus councillors to replace the elected council under the Massachusetts Government Act, Worcester's patriots organized a massive demonstration. On September 6, 1774, Bigelow led a crowd of several thousand militia and citizens who forced Timothy Paine, Worcester's appointed mandamus councillor, to publicly renounce his commission and pledge not to serve. This was part of a coordinated series of actions across Massachusetts that effectively nullified the Massachusetts Government Act months before any shots were fired.

When the Lexington Alarm reached Worcester on April 19, 1775, Bigelow mustered the militia and led them on the march east. He subsequently served as a colonel in the Continental Army, commanding the 15th Massachusetts Regiment. He saw action in several engagements and endured the terrible winter at Valley Forge with Washington's army in 1777-1778. After the war, Bigelow returned to Worcester but never fully recovered his pre-war prosperity. He died on March 31, 1790, at the age of fifty.

WHY HE MATTERS TO WORCESTER

Timothy Bigelow was the central figure in Worcester's transformation from a rural county seat into a hotbed of Revolutionary organizing. As chairman of the Committee of Correspondence, he coordinated the political resistance that made Worcester County one of the most radical regions in pre-war Massachusetts. His leadership of the September 1774 demonstration that forced Timothy Paine to renounce his royal commission was one of the earliest successful acts of popular defiance against the Massachusetts Government Act, establishing a model that other towns followed. Bigelow embodied the artisan-patriot tradition that drove the Revolution in inland Massachusetts — a working blacksmith who became a political organizer, militia leader, and Continental Army colonel.

- 1739: Born August 12 in Worcester, Massachusetts
- 1773: Founding member of the American Political Society
- 1774: Chairman of the Worcester Committee of Correspondence; led crowd that forced Timothy Paine to resign
- 1775: Led Worcester militia in response to Lexington Alarm; commissioned colonel in Continental Army
- 1790: Died March 31 in Worcester, Massachusetts, at age 50

SOURCES
- Nutt, Charles. "History of Worcester and Its People." Lewis Historical Publishing Company, 1919.
- Lincoln, William. "History of Worcester, Massachusetts, from Its Earliest Settlement to September 1836." Charles Hersey, 1862.
- Ray, Roger Allan. "The American Political Society and the Transformation of Worcester, Massachusetts, 1763-1776." PhD diss., Clark University, 1972.`,
    },
    create: {
      id: 'person-worcester-timothy-bigelow',
      name: 'Timothy Bigelow',
      roles: ['Blacksmith', 'Militia Colonel', 'Committee of Correspondence Chairman', 'Political Organizer'],
      bioShort: 'Blacksmith, militia leader, and patriot organizer (1739-1790) who chaired the Worcester Committee of Correspondence and led the 1774 demonstration that forced the mandamus councillor Timothy Paine to resign, one of the boldest acts of defiance before the Revolution.',
      bioLong: `Timothy Bigelow was born on August 12, 1739, in Worcester, Massachusetts. He was trained as a blacksmith and established a successful forge in Worcester, where he became one of the town's most prominent and prosperous citizens. His trade gave him standing among the artisan class that formed the backbone of patriot organizing in inland Massachusetts towns, and his physical vigor and commanding presence made him a natural leader of men. Bigelow combined practical skill with political conviction in a way that was characteristic of the Revolutionary generation in Worcester County.

Bigelow emerged as one of the earliest and most forceful advocates of resistance to British authority in Worcester. He was a founding member of the American Political Society, established in Worcester in 1773, which was one of the first formal political organizations in the colonies dedicated to coordinating opposition to British policies. The Society met regularly at Worcester taverns, debating strategy and drafting resolutions that were circulated to other towns in the county. Bigelow served as the chairman of the Worcester Committee of Correspondence, the body that coordinated patriot activities across the county and maintained communication with committees in Boston and other towns.

In September 1774, Bigelow played a central role in one of the most dramatic acts of political defiance in pre-war Massachusetts. When the new royal governor, General Thomas Gage, appointed mandamus councillors to replace the elected council under the Massachusetts Government Act, Worcester's patriots organized a massive demonstration. On September 6, 1774, Bigelow led a crowd of several thousand militia and citizens who forced Timothy Paine, Worcester's appointed mandamus councillor, to publicly renounce his commission and pledge not to serve. This was part of a coordinated series of actions across Massachusetts that effectively nullified the Massachusetts Government Act months before any shots were fired.

When the Lexington Alarm reached Worcester on April 19, 1775, Bigelow mustered the militia and led them on the march east. He subsequently served as a colonel in the Continental Army, commanding the 15th Massachusetts Regiment. He saw action in several engagements and endured the terrible winter at Valley Forge with Washington's army in 1777-1778. After the war, Bigelow returned to Worcester but never fully recovered his pre-war prosperity. He died on March 31, 1790, at the age of fifty.

WHY HE MATTERS TO WORCESTER

Timothy Bigelow was the central figure in Worcester's transformation from a rural county seat into a hotbed of Revolutionary organizing. As chairman of the Committee of Correspondence, he coordinated the political resistance that made Worcester County one of the most radical regions in pre-war Massachusetts. His leadership of the September 1774 demonstration that forced Timothy Paine to renounce his royal commission was one of the earliest successful acts of popular defiance against the Massachusetts Government Act, establishing a model that other towns followed. Bigelow embodied the artisan-patriot tradition that drove the Revolution in inland Massachusetts — a working blacksmith who became a political organizer, militia leader, and Continental Army colonel.

- 1739: Born August 12 in Worcester, Massachusetts
- 1773: Founding member of the American Political Society
- 1774: Chairman of the Worcester Committee of Correspondence; led crowd that forced Timothy Paine to resign
- 1775: Led Worcester militia in response to Lexington Alarm; commissioned colonel in Continental Army
- 1790: Died March 31 in Worcester, Massachusetts, at age 50

SOURCES
- Nutt, Charles. "History of Worcester and Its People." Lewis Historical Publishing Company, 1919.
- Lincoln, William. "History of Worcester, Massachusetts, from Its Earliest Settlement to September 1836." Charles Hersey, 1862.
- Ray, Roger Allan. "The American Political Society and the Transformation of Worcester, Massachusetts, 1763-1776." PhD diss., Clark University, 1972.`,
      birthYear: 1739,
      deathYear: 1790,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-worcester-timothy-paine' },
    update: {
      bioLong: `Timothy Paine was born in 1730 in Worcester, Massachusetts, into one of the town's most prominent and wealthy families. The Paines had been among the leading families of Worcester County for generations, holding positions of civic authority and accumulating substantial landholdings. Timothy Paine inherited this status and expanded it, serving as a justice of the peace, a judge of the Court of Common Pleas, and a member of the Governor's Council. He was educated, affluent, and deeply connected to the existing structures of royal authority in Massachusetts — qualities that made him a natural choice for royal appointment and an equally natural target of patriot resentment.

In 1774, when Parliament passed the Massachusetts Government Act in response to the Boston Tea Party, the law stripped Massachusetts of its elected council and authorized the royal governor to appoint a new council of "mandamus councillors" who would serve at the pleasure of the Crown. General Thomas Gage, the new governor, selected thirty-six prominent Massachusetts men for these positions, and Timothy Paine was chosen to represent Worcester County. The appointment was intended to reassert royal authority over a colony that was rapidly slipping out of British control. Instead, it provoked a furious backlash.

On September 6, 1774, a crowd estimated at several thousand — drawn from Worcester and surrounding towns — gathered on the Worcester Common and demanded that Paine appear before them. Led by Timothy Bigelow and other members of the Committee of Correspondence, the crowd forced Paine to walk between two lines of armed militia in a ritualized public humiliation. Paine was compelled to read aloud a prepared statement renouncing his commission and pledging never to serve as a mandamus councillor. The scene was repeated across Massachusetts as other mandamus councillors were similarly confronted and forced to resign. Of the thirty-six men appointed, most resigned under duress; several fled to the protection of British troops in Boston.

Paine's humiliation was a pivotal moment in Worcester's Revolutionary history. It demonstrated that royal authority in the countryside had collapsed entirely, months before Lexington and Concord. Paine himself was not physically harmed, but his political and social standing in Worcester was destroyed. He remained in the area during the war, a diminished figure stripped of the authority his family had held for generations. He died in 1793.

WHY HE MATTERS TO WORCESTER

Timothy Paine represents the Loyalist experience in Worcester — the story of those who found themselves on the losing side of the Revolution. His forced resignation as mandamus councillor on September 6, 1774, was one of the most significant pre-war confrontations in Massachusetts, demonstrating that royal government had effectively ceased to function outside of Boston. The event showed that the Revolution in Worcester was driven not just by abstract principles but by concrete local conflicts between established elites like the Paines and the rising class of artisan-patriots led by men like Timothy Bigelow. Paine's fate illustrated the personal costs of political loyalty in a revolutionary moment.

- 1730: Born in Worcester, Massachusetts
- 1774: Appointed mandamus councillor by Governor Gage; forced to resign on September 6 by crowd of thousands
- 1774-1783: Remained in Worcester area with diminished status during the Revolutionary War
- 1793: Died in Worcester, Massachusetts

SOURCES
- Nutt, Charles. "History of Worcester and Its People." Lewis Historical Publishing Company, 1919.
- Lincoln, William. "History of Worcester, Massachusetts, from Its Earliest Settlement to September 1836." Charles Hersey, 1862.
- Raphael, Ray. "The First American Revolution: Before Lexington and Concord." The New Press, 2002.`,
    },
    create: {
      id: 'person-worcester-timothy-paine',
      name: 'Timothy Paine',
      roles: ['Loyalist', 'Mandamus Councillor', 'Judge', 'Landowner'],
      bioShort: 'Loyalist judge and mandamus councillor (1730-1793) who was forced to publicly renounce his royal commission before thousands of armed militia on the Worcester Common on September 6, 1774, in one of the most dramatic confrontations of the pre-Revolutionary period.',
      bioLong: `Timothy Paine was born in 1730 in Worcester, Massachusetts, into one of the town's most prominent and wealthy families. The Paines had been among the leading families of Worcester County for generations, holding positions of civic authority and accumulating substantial landholdings. Timothy Paine inherited this status and expanded it, serving as a justice of the peace, a judge of the Court of Common Pleas, and a member of the Governor's Council. He was educated, affluent, and deeply connected to the existing structures of royal authority in Massachusetts — qualities that made him a natural choice for royal appointment and an equally natural target of patriot resentment.

In 1774, when Parliament passed the Massachusetts Government Act in response to the Boston Tea Party, the law stripped Massachusetts of its elected council and authorized the royal governor to appoint a new council of "mandamus councillors" who would serve at the pleasure of the Crown. General Thomas Gage, the new governor, selected thirty-six prominent Massachusetts men for these positions, and Timothy Paine was chosen to represent Worcester County. The appointment was intended to reassert royal authority over a colony that was rapidly slipping out of British control. Instead, it provoked a furious backlash.

On September 6, 1774, a crowd estimated at several thousand — drawn from Worcester and surrounding towns — gathered on the Worcester Common and demanded that Paine appear before them. Led by Timothy Bigelow and other members of the Committee of Correspondence, the crowd forced Paine to walk between two lines of armed militia in a ritualized public humiliation. Paine was compelled to read aloud a prepared statement renouncing his commission and pledging never to serve as a mandamus councillor. The scene was repeated across Massachusetts as other mandamus councillors were similarly confronted and forced to resign. Of the thirty-six men appointed, most resigned under duress; several fled to the protection of British troops in Boston.

Paine's humiliation was a pivotal moment in Worcester's Revolutionary history. It demonstrated that royal authority in the countryside had collapsed entirely, months before Lexington and Concord. Paine himself was not physically harmed, but his political and social standing in Worcester was destroyed. He remained in the area during the war, a diminished figure stripped of the authority his family had held for generations. He died in 1793.

WHY HE MATTERS TO WORCESTER

Timothy Paine represents the Loyalist experience in Worcester — the story of those who found themselves on the losing side of the Revolution. His forced resignation as mandamus councillor on September 6, 1774, was one of the most significant pre-war confrontations in Massachusetts, demonstrating that royal government had effectively ceased to function outside of Boston. The event showed that the Revolution in Worcester was driven not just by abstract principles but by concrete local conflicts between established elites like the Paines and the rising class of artisan-patriots led by men like Timothy Bigelow. Paine's fate illustrated the personal costs of political loyalty in a revolutionary moment.

- 1730: Born in Worcester, Massachusetts
- 1774: Appointed mandamus councillor by Governor Gage; forced to resign on September 6 by crowd of thousands
- 1774-1783: Remained in Worcester area with diminished status during the Revolutionary War
- 1793: Died in Worcester, Massachusetts

SOURCES
- Nutt, Charles. "History of Worcester and Its People." Lewis Historical Publishing Company, 1919.
- Lincoln, William. "History of Worcester, Massachusetts, from Its Earliest Settlement to September 1836." Charles Hersey, 1862.
- Raphael, Ray. "The First American Revolution: Before Lexington and Concord." The New Press, 2002.`,
      birthYear: 1730,
      deathYear: 1793,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-worcester-ephraim-doolittle' },
    update: {
      bioLong: `Ephraim Doolittle was born in 1723 in Petersham, Massachusetts, in the hill country of Worcester County. He served in the French and Indian War, gaining military experience that would prove essential when the conflict with Britain turned violent two decades later. Doolittle settled in Worcester County and became a farmer and civic leader, respected for his military background and his steady temperament. By the early 1770s, he had risen to the rank of colonel in the Worcester County militia, a position that placed him at the center of military preparations as tensions with Britain escalated.

When the patriot movement in Worcester County began organizing in earnest in 1774, Doolittle's military experience made him indispensable. The Worcester County Convention, which met in August 1774, relied on militia commanders like Doolittle to translate political resolutions into military readiness. The convention resolved that the militia should be reorganized and trained, and Doolittle oversaw the drilling and equipping of companies across the county. He ensured that Worcester County's militia was prepared to respond quickly to any outbreak of hostilities.

On April 19, 1775, when the Lexington Alarm reached Worcester County, Doolittle's preparations proved their worth. He mustered his regiment and led them on the march east toward Cambridge, where the militia from across Massachusetts was converging to besiege the British garrison in Boston. Doolittle's regiment arrived in time to join the siege lines, and he commanded them during the early months of the investment of Boston. He was among the senior militia officers present at the Battle of Bunker Hill on June 17, 1775, where his regiment was positioned in the American lines on the Charlestown peninsula.

Doolittle served throughout the early years of the war, but his advanced age — he was fifty-two at the outbreak of hostilities — limited his ability to sustain extended field service. He returned to Worcester County, where he continued to support the war effort through local organizing and supply activities. He died in 1791.

WHY HE MATTERS TO WORCESTER

Ephraim Doolittle was the military backbone of Worcester County's Revolutionary preparations. While political organizers like Timothy Bigelow and Samuel Curtis coordinated the ideological resistance, Doolittle ensured that the militia was trained, equipped, and ready to fight. His experience from the French and Indian War gave the Worcester County militia a level of professional preparation that many other county forces lacked. His rapid response to the Lexington Alarm and his leadership at Bunker Hill demonstrated that Worcester County's contribution to the war was not merely political but military — the county sent disciplined, well-led troops to the critical early engagements of the conflict.

- 1723: Born in Petersham, Massachusetts
- 1754-1763: Served in the French and Indian War
- 1774: Commanded Worcester County militia; oversaw military reorganization
- 1775: Led regiment in response to Lexington Alarm; present at Battle of Bunker Hill
- 1791: Died in Worcester County, Massachusetts

SOURCES
- Lincoln, William. "History of Worcester, Massachusetts, from Its Earliest Settlement to September 1836." Charles Hersey, 1862.
- Martyn, Charles. "The Life of Artemas Ward." A. Ward, 1921.
- Massachusetts Soldiers and Sailors of the Revolutionary War. Secretary of the Commonwealth, 1896-1908.`,
    },
    create: {
      id: 'person-worcester-ephraim-doolittle',
      name: 'Ephraim Doolittle',
      roles: ['Militia Colonel', 'Farmer', 'French and Indian War Veteran'],
      bioShort: 'Militia colonel and French and Indian War veteran (1723-1791) who commanded Worcester County militia forces, led the march to Cambridge after the Lexington Alarm, and served at the Battle of Bunker Hill.',
      bioLong: `Ephraim Doolittle was born in 1723 in Petersham, Massachusetts, in the hill country of Worcester County. He served in the French and Indian War, gaining military experience that would prove essential when the conflict with Britain turned violent two decades later. Doolittle settled in Worcester County and became a farmer and civic leader, respected for his military background and his steady temperament. By the early 1770s, he had risen to the rank of colonel in the Worcester County militia, a position that placed him at the center of military preparations as tensions with Britain escalated.

When the patriot movement in Worcester County began organizing in earnest in 1774, Doolittle's military experience made him indispensable. The Worcester County Convention, which met in August 1774, relied on militia commanders like Doolittle to translate political resolutions into military readiness. The convention resolved that the militia should be reorganized and trained, and Doolittle oversaw the drilling and equipping of companies across the county. He ensured that Worcester County's militia was prepared to respond quickly to any outbreak of hostilities.

On April 19, 1775, when the Lexington Alarm reached Worcester County, Doolittle's preparations proved their worth. He mustered his regiment and led them on the march east toward Cambridge, where the militia from across Massachusetts was converging to besiege the British garrison in Boston. Doolittle's regiment arrived in time to join the siege lines, and he commanded them during the early months of the investment of Boston. He was among the senior militia officers present at the Battle of Bunker Hill on June 17, 1775, where his regiment was positioned in the American lines on the Charlestown peninsula.

Doolittle served throughout the early years of the war, but his advanced age — he was fifty-two at the outbreak of hostilities — limited his ability to sustain extended field service. He returned to Worcester County, where he continued to support the war effort through local organizing and supply activities. He died in 1791.

WHY HE MATTERS TO WORCESTER

Ephraim Doolittle was the military backbone of Worcester County's Revolutionary preparations. While political organizers like Timothy Bigelow and Samuel Curtis coordinated the ideological resistance, Doolittle ensured that the militia was trained, equipped, and ready to fight. His experience from the French and Indian War gave the Worcester County militia a level of professional preparation that many other county forces lacked. His rapid response to the Lexington Alarm and his leadership at Bunker Hill demonstrated that Worcester County's contribution to the war was not merely political but military — the county sent disciplined, well-led troops to the critical early engagements of the conflict.

- 1723: Born in Petersham, Massachusetts
- 1754-1763: Served in the French and Indian War
- 1774: Commanded Worcester County militia; oversaw military reorganization
- 1775: Led regiment in response to Lexington Alarm; present at Battle of Bunker Hill
- 1791: Died in Worcester County, Massachusetts

SOURCES
- Lincoln, William. "History of Worcester, Massachusetts, from Its Earliest Settlement to September 1836." Charles Hersey, 1862.
- Martyn, Charles. "The Life of Artemas Ward." A. Ward, 1921.
- Massachusetts Soldiers and Sailors of the Revolutionary War. Secretary of the Commonwealth, 1896-1908.`,
      birthYear: 1723,
      deathYear: 1791,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-worcester-mary-stearns' },
    update: {
      bioLong: `Mary Stearns was born around 1740 in Worcester County, Massachusetts. She married into one of the prominent patriot families of Worcester, and her life during the Revolutionary period illustrates the essential but often unrecorded contributions of women to the cause of American independence. While her husband and the other men of Worcester's patriot leadership attended conventions, drilled with the militia, and eventually marched to war, Mary Stearns and the women of Worcester sustained the households, farms, and community networks that made the men's political and military activities possible.

During the critical years of 1774 and 1775, when Worcester's men were consumed by political organizing, militia training, and the escalating confrontation with royal authority, the women of the town assumed responsibilities that went far beyond their traditional domestic roles. They managed farms and businesses, organized supplies for the militia, and maintained the communication networks that linked patriot families across the county. Mary Stearns was among the women who organized the collection and preparation of supplies — food, clothing, bandages, and ammunition — that the Worcester militia carried when they marched east in response to the Lexington Alarm in April 1775.

The women of Worcester also participated in acts of political resistance. They enforced non-importation agreements by refusing to purchase British goods and by producing homespun cloth to replace imported textiles. Spinning bees — public gatherings where women spun thread and wove cloth as both a practical and symbolic act of economic resistance — were held in Worcester and throughout the county. These events were reported in Isaiah Thomas's Massachusetts Spy, which recognized the women's economic resistance as a vital component of the patriot cause.

After the men marched to war, women like Mary Stearns bore the full burden of maintaining their communities. They ran the farms that produced the food that fed both their families and the army. They cared for the sick and wounded who returned from the fighting. They raised the children who would be the first generation of Americans born into an independent republic. Their contributions were rarely documented in the official records of the Revolution, but the war could not have been sustained without them.

WHY SHE MATTERS TO WORCESTER

Mary Stearns represents the women of Worcester whose labor and sacrifice sustained the Revolution on the home front. While history has preserved the names and deeds of the men who organized committees, led militia companies, and served in the Continental Army, the women who made their service possible have largely been forgotten. Stearns and the women of Worcester managed farms, organized supplies, enforced economic boycotts, and maintained their communities through years of war and deprivation. Their story is essential to understanding the Revolution as it was actually lived — not merely as a series of political debates and military engagements, but as a total mobilization of communities in which women bore enormous burdens with little recognition.

- c.1740: Born in Worcester County, Massachusetts
- 1774: Organized supplies and supported militia preparations in Worcester
- 1775: Helped provision the militia for the march to Lexington and Cambridge
- 1775-1783: Managed household and farm while men served in the Continental Army
- c.1810: Died in Worcester County, Massachusetts

SOURCES
- Kerber, Linda K. "Women of the Republic: Intellect and Ideology in Revolutionary America." University of North Carolina Press, 1980.
- Norton, Mary Beth. "Liberty's Daughters: The Revolutionary Experience of American Women, 1750-1800." Little, Brown and Company, 1980.
- Lincoln, William. "History of Worcester, Massachusetts, from Its Earliest Settlement to September 1836." Charles Hersey, 1862.`,
    },
    create: {
      id: 'person-worcester-mary-stearns',
      name: 'Mary Stearns',
      roles: ['Patriot', 'Home Front Organizer', 'Supply Coordinator'],
      bioShort: 'Patriot woman of Worcester (c.1740-c.1810) who organized supplies for the militia, enforced non-importation agreements, and sustained the community while men served in the Continental Army, representing the essential but often unrecognized contributions of women to the Revolution.',
      bioLong: `Mary Stearns was born around 1740 in Worcester County, Massachusetts. She married into one of the prominent patriot families of Worcester, and her life during the Revolutionary period illustrates the essential but often unrecorded contributions of women to the cause of American independence. While her husband and the other men of Worcester's patriot leadership attended conventions, drilled with the militia, and eventually marched to war, Mary Stearns and the women of Worcester sustained the households, farms, and community networks that made the men's political and military activities possible.

During the critical years of 1774 and 1775, when Worcester's men were consumed by political organizing, militia training, and the escalating confrontation with royal authority, the women of the town assumed responsibilities that went far beyond their traditional domestic roles. They managed farms and businesses, organized supplies for the militia, and maintained the communication networks that linked patriot families across the county. Mary Stearns was among the women who organized the collection and preparation of supplies — food, clothing, bandages, and ammunition — that the Worcester militia carried when they marched east in response to the Lexington Alarm in April 1775.

The women of Worcester also participated in acts of political resistance. They enforced non-importation agreements by refusing to purchase British goods and by producing homespun cloth to replace imported textiles. Spinning bees — public gatherings where women spun thread and wove cloth as both a practical and symbolic act of economic resistance — were held in Worcester and throughout the county. These events were reported in Isaiah Thomas's Massachusetts Spy, which recognized the women's economic resistance as a vital component of the patriot cause.

After the men marched to war, women like Mary Stearns bore the full burden of maintaining their communities. They ran the farms that produced the food that fed both their families and the army. They cared for the sick and wounded who returned from the fighting. They raised the children who would be the first generation of Americans born into an independent republic. Their contributions were rarely documented in the official records of the Revolution, but the war could not have been sustained without them.

WHY SHE MATTERS TO WORCESTER

Mary Stearns represents the women of Worcester whose labor and sacrifice sustained the Revolution on the home front. While history has preserved the names and deeds of the men who organized committees, led militia companies, and served in the Continental Army, the women who made their service possible have largely been forgotten. Stearns and the women of Worcester managed farms, organized supplies, enforced economic boycotts, and maintained their communities through years of war and deprivation. Their story is essential to understanding the Revolution as it was actually lived — not merely as a series of political debates and military engagements, but as a total mobilization of communities in which women bore enormous burdens with little recognition.

- c.1740: Born in Worcester County, Massachusetts
- 1774: Organized supplies and supported militia preparations in Worcester
- 1775: Helped provision the militia for the march to Lexington and Cambridge
- 1775-1783: Managed household and farm while men served in the Continental Army
- c.1810: Died in Worcester County, Massachusetts

SOURCES
- Kerber, Linda K. "Women of the Republic: Intellect and Ideology in Revolutionary America." University of North Carolina Press, 1980.
- Norton, Mary Beth. "Liberty's Daughters: The Revolutionary Experience of American Women, 1750-1800." Little, Brown and Company, 1980.
- Lincoln, William. "History of Worcester, Massachusetts, from Its Earliest Settlement to September 1836." Charles Hersey, 1862.`,
      birthYear: 1740,
      deathYear: 1810,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-worcester-samuel-curtis' },
    update: {
      bioLong: `Samuel Curtis was born around 1735 in Worcester, Massachusetts. He was a farmer and civic leader who became one of the principal organizers of the patriot movement in Worcester County during the years leading up to the American Revolution. Curtis served on the Worcester Committee of Correspondence alongside Timothy Bigelow, and he played a key role in coordinating the political conventions and public demonstrations that made Worcester County one of the most radical regions in pre-war Massachusetts.

Curtis was a member of the American Political Society, the organization founded in Worcester in 1773 that served as a coordinating body for patriot activities in the county. The Society, which included blacksmiths, farmers, tavern keepers, and other tradesmen, met regularly to discuss political strategy, draft resolutions, and plan collective action. Curtis's role was that of an organizer and strategist rather than an orator or military commander — he worked behind the scenes to build the networks of communication and cooperation that connected patriot activists across dozens of towns.

In the summer and fall of 1774, Curtis was instrumental in organizing the Worcester County conventions that challenged royal authority. These conventions — which brought together delegates from every town in the county — produced some of the most radical resolutions issued anywhere in the colonies before independence. The August 1774 convention resolved that the Massachusetts Government Act was unconstitutional and should not be obeyed. The September convention organized the demonstration that forced Timothy Paine to resign as mandamus councillor. Curtis helped draft the resolves that these conventions produced and ensured that they were circulated to committees of correspondence throughout Massachusetts.

Curtis also served on the committee that organized Worcester's response to the Lexington Alarm in April 1775. He helped coordinate the mustering and provisioning of militia companies and ensured that the town's political infrastructure continued to function while the militia marched east. After the war, Curtis continued to serve in local government, helping to shape the political institutions of the new republic in Worcester County.

WHY HE MATTERS TO WORCESTER

Samuel Curtis was the organizational engine behind Worcester's patriot movement. While Timothy Bigelow was the public face of resistance and Ephraim Doolittle commanded the militia, Curtis built the political infrastructure — the committee networks, the convention system, the communication chains — that made coordinated action possible across an entire county. His work exemplifies the Revolution as an organizational achievement, not merely a series of dramatic confrontations. The Worcester County conventions that Curtis helped organize produced resolves that influenced the broader Massachusetts resistance and contributed to the ideological framework of the independence movement.

- c.1735: Born in Worcester, Massachusetts
- 1773: Member of the American Political Society
- 1774: Organized Worcester County conventions; helped draft radical resolves
- 1775: Coordinated Worcester's response to the Lexington Alarm
- c.1800: Died in Worcester, Massachusetts

SOURCES
- Lincoln, William. "History of Worcester, Massachusetts, from Its Earliest Settlement to September 1836." Charles Hersey, 1862.
- Nutt, Charles. "History of Worcester and Its People." Lewis Historical Publishing Company, 1919.
- Ray, Roger Allan. "The American Political Society and the Transformation of Worcester, Massachusetts, 1763-1776." PhD diss., Clark University, 1972.`,
    },
    create: {
      id: 'person-worcester-samuel-curtis',
      name: 'Samuel Curtis',
      roles: ['Farmer', 'Committee of Correspondence Member', 'Political Organizer'],
      bioShort: 'Farmer and patriot organizer (c.1735-c.1800) who served on the Worcester Committee of Correspondence and helped organize the county conventions of 1774 that produced some of the most radical pre-Revolutionary resolves in Massachusetts.',
      bioLong: `Samuel Curtis was born around 1735 in Worcester, Massachusetts. He was a farmer and civic leader who became one of the principal organizers of the patriot movement in Worcester County during the years leading up to the American Revolution. Curtis served on the Worcester Committee of Correspondence alongside Timothy Bigelow, and he played a key role in coordinating the political conventions and public demonstrations that made Worcester County one of the most radical regions in pre-war Massachusetts.

Curtis was a member of the American Political Society, the organization founded in Worcester in 1773 that served as a coordinating body for patriot activities in the county. The Society, which included blacksmiths, farmers, tavern keepers, and other tradesmen, met regularly to discuss political strategy, draft resolutions, and plan collective action. Curtis's role was that of an organizer and strategist rather than an orator or military commander — he worked behind the scenes to build the networks of communication and cooperation that connected patriot activists across dozens of towns.

In the summer and fall of 1774, Curtis was instrumental in organizing the Worcester County conventions that challenged royal authority. These conventions — which brought together delegates from every town in the county — produced some of the most radical resolutions issued anywhere in the colonies before independence. The August 1774 convention resolved that the Massachusetts Government Act was unconstitutional and should not be obeyed. The September convention organized the demonstration that forced Timothy Paine to resign as mandamus councillor. Curtis helped draft the resolves that these conventions produced and ensured that they were circulated to committees of correspondence throughout Massachusetts.

Curtis also served on the committee that organized Worcester's response to the Lexington Alarm in April 1775. He helped coordinate the mustering and provisioning of militia companies and ensured that the town's political infrastructure continued to function while the militia marched east. After the war, Curtis continued to serve in local government, helping to shape the political institutions of the new republic in Worcester County.

WHY HE MATTERS TO WORCESTER

Samuel Curtis was the organizational engine behind Worcester's patriot movement. While Timothy Bigelow was the public face of resistance and Ephraim Doolittle commanded the militia, Curtis built the political infrastructure — the committee networks, the convention system, the communication chains — that made coordinated action possible across an entire county. His work exemplifies the Revolution as an organizational achievement, not merely a series of dramatic confrontations. The Worcester County conventions that Curtis helped organize produced resolves that influenced the broader Massachusetts resistance and contributed to the ideological framework of the independence movement.

- c.1735: Born in Worcester, Massachusetts
- 1773: Member of the American Political Society
- 1774: Organized Worcester County conventions; helped draft radical resolves
- 1775: Coordinated Worcester's response to the Lexington Alarm
- c.1800: Died in Worcester, Massachusetts

SOURCES
- Lincoln, William. "History of Worcester, Massachusetts, from Its Earliest Settlement to September 1836." Charles Hersey, 1862.
- Nutt, Charles. "History of Worcester and Its People." Lewis Historical Publishing Company, 1919.
- Ray, Roger Allan. "The American Political Society and the Transformation of Worcester, Massachusetts, 1763-1776." PhD diss., Clark University, 1972.`,
      birthYear: 1735,
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
    where: { id: 'worcester-common' },
    update: { slug: 'worcester-common', description: 'The Worcester Common is the historic public green at the heart of downtown Worcester, bounded by Main Street, Front Street, and Franklin Street. It has served as the civic center of Worcester since the town\'s founding in 1684 and was the site of the most dramatic political confrontations of the Revolutionary period.', historicalNote: 'The Worcester Common was the stage for some of the boldest acts of political defiance in pre-Revolutionary Massachusetts. On September 6, 1774, several thousand armed militia and citizens gathered on the Common to force mandamus councillor Timothy Paine to publicly renounce his royal commission — one of the first successful challenges to the Massachusetts Government Act anywhere in the colony. The Common also served as the mustering ground for Worcester\'s militia companies, including the force that marched east in response to the Lexington Alarm on April 19, 1775.\n\nBefore the war, the Common was the site of town meetings where Worcester\'s citizens debated and voted on resolutions opposing British taxation and trade restrictions. The American Political Society, founded in 1773, held public rallies on the Common. Isaiah Thomas\'s Massachusetts Spy was read aloud here, spreading patriot arguments to those who could not read or afford a subscription.\n\nToday the Worcester Common retains its function as a public gathering space in the center of the city. The surrounding streets still follow the colonial layout, and the Common\'s open expanse provides a tangible connection to the thousands who gathered here to challenge the authority of the British Crown.' },
    create: { id: 'worcester-common', townId: WORCESTER_TOWN_ID, name: 'Worcester Common', slug: 'worcester-common', placeType: 'LANDMARK', description: 'The Worcester Common is the historic public green at the heart of downtown Worcester, bounded by Main Street, Front Street, and Franklin Street. It has served as the civic center of Worcester since the town\'s founding in 1684 and was the site of the most dramatic political confrontations of the Revolutionary period.', historicalNote: 'The Worcester Common was the stage for some of the boldest acts of political defiance in pre-Revolutionary Massachusetts. On September 6, 1774, several thousand armed militia and citizens gathered on the Common to force mandamus councillor Timothy Paine to publicly renounce his royal commission — one of the first successful challenges to the Massachusetts Government Act anywhere in the colony. The Common also served as the mustering ground for Worcester\'s militia companies, including the force that marched east in response to the Lexington Alarm on April 19, 1775.\n\nBefore the war, the Common was the site of town meetings where Worcester\'s citizens debated and voted on resolutions opposing British taxation and trade restrictions. The American Political Society, founded in 1773, held public rallies on the Common. Isaiah Thomas\'s Massachusetts Spy was read aloud here, spreading patriot arguments to those who could not read or afford a subscription.\n\nToday the Worcester Common retains its function as a public gathering space in the center of the city. The surrounding streets still follow the colonial layout, and the Common\'s open expanse provides a tangible connection to the thousands who gathered here to challenge the authority of the British Crown.', address: 'Worcester Common, Main Street, Worcester, MA 01608', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'worcester-city-hall' },
    update: { slug: 'worcester-city-hall', description: 'Worcester City Hall is the seat of municipal government, located on Main Street overlooking the Common. The current building, completed in 1898, stands near the site where colonial-era town meetings were held and where Worcester\'s patriots organized their resistance to British authority.', historicalNote: 'The site of Worcester City Hall has been associated with civic governance since the colonial period. The original meeting house, where town meetings were held throughout the eighteenth century, stood near the present location. These town meetings were the primary vehicle through which Worcester\'s citizens debated and enacted their response to British policies — voting on non-importation resolutions, electing members of the Committee of Correspondence, and organizing militia companies.\n\nThe town meeting system was itself one of the institutions that the Massachusetts Government Act of 1774 sought to restrict, limiting towns to one meeting per year without the governor\'s permission. Worcester\'s patriots defied this restriction, continuing to meet as needed and declaring the Government Act void. The tradition of local self-governance that was defended on this site became a foundational principle of American democracy.\n\nThe current City Hall, a grand Romanesque Revival building, reflects Worcester\'s growth into a major industrial city in the nineteenth century. Its location overlooking the Common maintains the connection between civic authority and the public green that has defined Worcester\'s civic landscape for over three centuries.' },
    create: { id: 'worcester-city-hall', townId: WORCESTER_TOWN_ID, name: 'Worcester City Hall', slug: 'worcester-city-hall', placeType: 'GOVERNMENT', description: 'Worcester City Hall is the seat of municipal government, located on Main Street overlooking the Common. The current building, completed in 1898, stands near the site where colonial-era town meetings were held and where Worcester\'s patriots organized their resistance to British authority.', historicalNote: 'The site of Worcester City Hall has been associated with civic governance since the colonial period. The original meeting house, where town meetings were held throughout the eighteenth century, stood near the present location. These town meetings were the primary vehicle through which Worcester\'s citizens debated and enacted their response to British policies — voting on non-importation resolutions, electing members of the Committee of Correspondence, and organizing militia companies.\n\nThe town meeting system was itself one of the institutions that the Massachusetts Government Act of 1774 sought to restrict, limiting towns to one meeting per year without the governor\'s permission. Worcester\'s patriots defied this restriction, continuing to meet as needed and declaring the Government Act void. The tradition of local self-governance that was defended on this site became a foundational principle of American democracy.\n\nThe current City Hall, a grand Romanesque Revival building, reflects Worcester\'s growth into a major industrial city in the nineteenth century. Its location overlooking the Common maintains the connection between civic authority and the public green that has defined Worcester\'s civic landscape for over three centuries.', address: '455 Main St, Worcester, MA 01608', featured: false },
  });

  await prisma.place.upsert({
    where: { id: 'worcester-art-museum' },
    update: { slug: 'worcester-art-museum', description: 'The Worcester Art Museum, founded in 1896, is one of the largest art museums in New England. Its collections span 5,000 years of art and include American paintings and decorative arts from the colonial and Revolutionary periods that provide visual context for Worcester\'s eighteenth-century history.', historicalNote: 'While the Worcester Art Museum postdates the Revolutionary period by more than a century, its collections include important artifacts and artworks related to Worcester\'s colonial and Revolutionary history. American paintings, prints, and decorative arts from the eighteenth century illuminate the material culture of the period — the furniture, silverware, textiles, and portraiture that reflected the values and aspirations of families like the Paines, the Bigelows, and the other leading families of Revolutionary-era Worcester.\n\nThe museum also holds prints and engravings that document the events of the Revolution, including works by or attributed to Paul Revere and other printmakers whose images shaped public understanding of the conflict. These visual materials complement the written and printed records preserved at the American Antiquarian Society, providing a fuller picture of how the Revolution was experienced and represented.\n\nThe museum\'s location in Worcester reflects the city\'s evolution from a Revolutionary-era county seat into a center of culture and education in the nineteenth and twentieth centuries.' },
    create: { id: 'worcester-art-museum', townId: WORCESTER_TOWN_ID, name: 'Worcester Art Museum', slug: 'worcester-art-museum', placeType: 'MUSEUM', description: 'The Worcester Art Museum, founded in 1896, is one of the largest art museums in New England. Its collections span 5,000 years of art and include American paintings and decorative arts from the colonial and Revolutionary periods that provide visual context for Worcester\'s eighteenth-century history.', historicalNote: 'While the Worcester Art Museum postdates the Revolutionary period by more than a century, its collections include important artifacts and artworks related to Worcester\'s colonial and Revolutionary history. American paintings, prints, and decorative arts from the eighteenth century illuminate the material culture of the period — the furniture, silverware, textiles, and portraiture that reflected the values and aspirations of families like the Paines, the Bigelows, and the other leading families of Revolutionary-era Worcester.\n\nThe museum also holds prints and engravings that document the events of the Revolution, including works by or attributed to Paul Revere and other printmakers whose images shaped public understanding of the conflict. These visual materials complement the written and printed records preserved at the American Antiquarian Society, providing a fuller picture of how the Revolution was experienced and represented.\n\nThe museum\'s location in Worcester reflects the city\'s evolution from a Revolutionary-era county seat into a center of culture and education in the nineteenth and twentieth centuries.', address: '55 Salisbury St, Worcester, MA 01609', hours: 'Wed-Sun 10am-4pm', admission: '$18 adults', website: 'https://www.worcesterart.org', featured: false },
  });

  await prisma.place.upsert({
    where: { id: 'worcester-salisbury-mansion' },
    update: { slug: 'worcester-salisbury-mansion', description: 'The Salisbury Mansion is an eighteenth-century house museum operated by the Worcester Historical Museum. Built in 1772 by Stephen Salisbury I, a prosperous merchant, the mansion has been restored to reflect life in Worcester during the Federal period and is the only historic house museum in downtown Worcester.', historicalNote: 'Stephen Salisbury I arrived in Worcester around 1767 and established himself as one of the town\'s most successful merchants. He built this imposing Georgian-style house in 1772, just as tensions with Britain were escalating. The Salisbury family navigated the Revolution with commercial acumen, maintaining their business interests while supporting the patriot cause. The house, originally located on Main Street, was one of the finest residences in Revolutionary-era Worcester and reflected the prosperity that trade brought to the inland town.\n\nThe mansion provides a window into the material world of Worcester during the era of the Revolution and the early Republic. Its furnishings, architecture, and household goods illustrate the daily life of a prosperous family in an inland Massachusetts town — a world of imported textiles, locally made furniture, and the constant tension between British commercial goods and the non-importation agreements that patriots enforced.\n\nThe house was moved to its present location in 1929 and restored by the Worcester Historical Museum. It is the only surviving eighteenth-century house museum in downtown Worcester and offers visitors a direct encounter with the domestic architecture and material culture of the Revolutionary period.' },
    create: { id: 'worcester-salisbury-mansion', townId: WORCESTER_TOWN_ID, name: 'Salisbury Mansion', slug: 'worcester-salisbury-mansion', placeType: 'MUSEUM', description: 'The Salisbury Mansion is an eighteenth-century house museum operated by the Worcester Historical Museum. Built in 1772 by Stephen Salisbury I, a prosperous merchant, the mansion has been restored to reflect life in Worcester during the Federal period and is the only historic house museum in downtown Worcester.', historicalNote: 'Stephen Salisbury I arrived in Worcester around 1767 and established himself as one of the town\'s most successful merchants. He built this imposing Georgian-style house in 1772, just as tensions with Britain were escalating. The Salisbury family navigated the Revolution with commercial acumen, maintaining their business interests while supporting the patriot cause. The house, originally located on Main Street, was one of the finest residences in Revolutionary-era Worcester and reflected the prosperity that trade brought to the inland town.\n\nThe mansion provides a window into the material world of Worcester during the era of the Revolution and the early Republic. Its furnishings, architecture, and household goods illustrate the daily life of a prosperous family in an inland Massachusetts town — a world of imported textiles, locally made furniture, and the constant tension between British commercial goods and the non-importation agreements that patriots enforced.\n\nThe house was moved to its present location in 1929 and restored by the Worcester Historical Museum. It is the only surviving eighteenth-century house museum in downtown Worcester and offers visitors a direct encounter with the domestic architecture and material culture of the Revolutionary period.', address: '40 Highland St, Worcester, MA 01609', hours: 'Thu-Sat 12pm-4pm', admission: '$10 adults', website: 'https://www.worcesterhistory.org', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'worcester-old-south-church' },
    update: { slug: 'worcester-old-south-church', description: 'The Old South Church in Worcester, originally known as the South Meeting House, was one of the principal gathering places for patriot activities during the Revolutionary period. The current church building is not the original colonial structure, but the congregation dates to Worcester\'s earliest years.', historicalNote: 'The South Meeting House served as one of Worcester\'s primary venues for town meetings and political assemblies during the Revolutionary era. In the eighteenth century, meeting houses served dual purposes — as houses of worship on Sundays and as civic assembly halls during the week. It was in meeting houses like this one that Worcester\'s citizens debated the Stamp Act, organized committees of correspondence, and voted on the resolutions that defined their resistance to British authority.\n\nThe meeting house was also the site of religious services that reinforced patriot sentiment. Congregational ministers in Worcester, like their counterparts across New England, preached sermons that drew connections between resistance to tyranny and religious duty. The pulpit was a powerful platform for shaping public opinion, and the ministers who occupied it helped frame the Revolution as a moral cause as well as a political one.\n\nThe Old South Church congregation has maintained a continuous presence in Worcester since the colonial period, representing one of the oldest threads of community identity in the city.' },
    create: { id: 'worcester-old-south-church', townId: WORCESTER_TOWN_ID, name: 'Old South Church', slug: 'worcester-old-south-church', placeType: 'CHURCH', description: 'The Old South Church in Worcester, originally known as the South Meeting House, was one of the principal gathering places for patriot activities during the Revolutionary period. The current church building is not the original colonial structure, but the congregation dates to Worcester\'s earliest years.', historicalNote: 'The South Meeting House served as one of Worcester\'s primary venues for town meetings and political assemblies during the Revolutionary era. In the eighteenth century, meeting houses served dual purposes — as houses of worship on Sundays and as civic assembly halls during the week. It was in meeting houses like this one that Worcester\'s citizens debated the Stamp Act, organized committees of correspondence, and voted on the resolutions that defined their resistance to British authority.\n\nThe meeting house was also the site of religious services that reinforced patriot sentiment. Congregational ministers in Worcester, like their counterparts across New England, preached sermons that drew connections between resistance to tyranny and religious duty. The pulpit was a powerful platform for shaping public opinion, and the ministers who occupied it helped frame the Revolution as a moral cause as well as a political one.\n\nThe Old South Church congregation has maintained a continuous presence in Worcester since the colonial period, representing one of the oldest threads of community identity in the city.', address: '25 Main St, Worcester, MA 01608', featured: false },
  });

  await prisma.place.upsert({
    where: { id: 'worcester-rural-cemetery' },
    update: { slug: 'worcester-rural-cemetery', description: 'The Worcester Rural Cemetery, established in 1838, is a large garden cemetery in the rural cemetery tradition. It contains the graves of many prominent Worcester citizens, including Revolutionary War veterans and civic leaders who shaped the town\'s history.', historicalNote: 'The Worcester Rural Cemetery was designed in the landscape tradition inspired by Mount Auburn Cemetery in Cambridge, Massachusetts. While it postdates the Revolutionary period by more than sixty years, the cemetery became the final resting place for descendants of Revolutionary-era families and for some relocated colonial-era graves. Monuments and grave markers in the older sections reference military service in the Revolution and the early Republic.\n\nThe cemetery also contains the grave of Timothy Bigelow, the blacksmith and militia colonel who was one of Worcester\'s most important Revolutionary leaders. His monument reflects the community\'s recognition of his service, though Bigelow died in relative poverty in 1790, his health and finances broken by his years of wartime service.\n\nFor visitors interested in Worcester\'s Revolutionary history, the cemetery provides a contemplative space where the personal costs of the Revolution — the shortened lives, the broken fortunes, the families disrupted — are inscribed in stone.' },
    create: { id: 'worcester-rural-cemetery', townId: WORCESTER_TOWN_ID, name: 'Worcester Rural Cemetery', slug: 'worcester-rural-cemetery', placeType: 'CEMETERY', description: 'The Worcester Rural Cemetery, established in 1838, is a large garden cemetery in the rural cemetery tradition. It contains the graves of many prominent Worcester citizens, including Revolutionary War veterans and civic leaders who shaped the town\'s history.', historicalNote: 'The Worcester Rural Cemetery was designed in the landscape tradition inspired by Mount Auburn Cemetery in Cambridge, Massachusetts. While it postdates the Revolutionary period by more than sixty years, the cemetery became the final resting place for descendants of Revolutionary-era families and for some relocated colonial-era graves. Monuments and grave markers in the older sections reference military service in the Revolution and the early Republic.\n\nThe cemetery also contains the grave of Timothy Bigelow, the blacksmith and militia colonel who was one of Worcester\'s most important Revolutionary leaders. His monument reflects the community\'s recognition of his service, though Bigelow died in relative poverty in 1790, his health and finances broken by his years of wartime service.\n\nFor visitors interested in Worcester\'s Revolutionary history, the cemetery provides a contemplative space where the personal costs of the Revolution — the shortened lives, the broken fortunes, the families disrupted — are inscribed in stone.', address: '180 Grove St, Worcester, MA 01605', hours: 'Daily dawn to dusk', admission: 'Free', featured: false },
  });

  await prisma.place.upsert({
    where: { id: 'worcester-mechanics-hall' },
    update: { slug: 'worcester-mechanics-hall', description: 'Mechanics Hall is a historic concert and event venue in downtown Worcester, built in 1857 by the Worcester County Mechanics Association. It is one of the finest pre-Civil War concert halls in the United States and reflects Worcester\'s tradition of civic organization that traces back to the Revolutionary period.', historicalNote: 'While Mechanics Hall was built nearly a century after the Revolution, the institution that created it — the Worcester County Mechanics Association — descended from the tradition of artisan organizing that was central to the Revolutionary movement in Worcester. Blacksmiths like Timothy Bigelow, printers like Isaiah Thomas, and other skilled tradesmen formed the core of the patriot movement, and their culture of association and mutual aid evolved into the mechanics\' institutes and improvement societies of the nineteenth century.\n\nThe hall\'s emphasis on education, public assembly, and civic engagement echoes the values that the American Political Society promoted in the 1770s. The building itself, with its soaring performance hall and public meeting spaces, represents the fulfillment of the democratic ideals that Worcester\'s artisan-patriots championed — the belief that working people deserved institutions of culture and learning.\n\nMechanics Hall continues to host concerts, lectures, and civic events, maintaining the tradition of public assembly that began on the Worcester Common in the years before the Revolution.' },
    create: { id: 'worcester-mechanics-hall', townId: WORCESTER_TOWN_ID, name: 'Mechanics Hall', slug: 'worcester-mechanics-hall', placeType: 'LANDMARK', description: 'Mechanics Hall is a historic concert and event venue in downtown Worcester, built in 1857 by the Worcester County Mechanics Association. It is one of the finest pre-Civil War concert halls in the United States and reflects Worcester\'s tradition of civic organization that traces back to the Revolutionary period.', historicalNote: 'While Mechanics Hall was built nearly a century after the Revolution, the institution that created it — the Worcester County Mechanics Association — descended from the tradition of artisan organizing that was central to the Revolutionary movement in Worcester. Blacksmiths like Timothy Bigelow, printers like Isaiah Thomas, and other skilled tradesmen formed the core of the patriot movement, and their culture of association and mutual aid evolved into the mechanics\' institutes and improvement societies of the nineteenth century.\n\nThe hall\'s emphasis on education, public assembly, and civic engagement echoes the values that the American Political Society promoted in the 1770s. The building itself, with its soaring performance hall and public meeting spaces, represents the fulfillment of the democratic ideals that Worcester\'s artisan-patriots championed — the belief that working people deserved institutions of culture and learning.\n\nMechanics Hall continues to host concerts, lectures, and civic events, maintaining the tradition of public assembly that began on the Worcester Common in the years before the Revolution.', address: '321 Main St, Worcester, MA 01608', website: 'https://www.mechanicshall.org', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'worcester-lincoln-square' },
    update: { slug: 'worcester-lincoln-square', description: 'Lincoln Square is a historic intersection and public space in Worcester where Main Street meets Lincoln Street and Highland Street. The square was a crossroads during the colonial period and served as a key transit point in the road network that connected Worcester to Boston and the western counties.', historicalNote: 'Lincoln Square sits at what was historically one of the most important crossroads in Worcester. The roads converging here connected the town to Boston to the east, Springfield and the Connecticut Valley to the west, and the hill towns of northern Worcester County to the north. During the Revolutionary period, this crossroads was the route through which express riders carried news and instructions between the Committee of Correspondence in Worcester and patriot organizations in other towns.\n\nThe Lexington Alarm reached Worcester via riders who came through this intersection on April 19, 1775. Militia companies from surrounding towns passed through here as they converged on the Common for mustering. After the war, the crossroads continued to serve as Worcester\'s primary transportation hub, and the growth of the city in the nineteenth century was shaped by the road network that radiated from this point.\n\nToday Lincoln Square remains a busy intersection surrounded by commercial and institutional buildings. The original road alignments are preserved in the modern street pattern, providing a direct connection to the colonial-era transportation network that made Worcester a communications hub during the Revolution.' },
    create: { id: 'worcester-lincoln-square', townId: WORCESTER_TOWN_ID, name: 'Lincoln Square', slug: 'worcester-lincoln-square', placeType: 'LANDMARK', description: 'Lincoln Square is a historic intersection and public space in Worcester where Main Street meets Lincoln Street and Highland Street. The square was a crossroads during the colonial period and served as a key transit point in the road network that connected Worcester to Boston and the western counties.', historicalNote: 'Lincoln Square sits at what was historically one of the most important crossroads in Worcester. The roads converging here connected the town to Boston to the east, Springfield and the Connecticut Valley to the west, and the hill towns of northern Worcester County to the north. During the Revolutionary period, this crossroads was the route through which express riders carried news and instructions between the Committee of Correspondence in Worcester and patriot organizations in other towns.\n\nThe Lexington Alarm reached Worcester via riders who came through this intersection on April 19, 1775. Militia companies from surrounding towns passed through here as they converged on the Common for mustering. After the war, the crossroads continued to serve as Worcester\'s primary transportation hub, and the growth of the city in the nineteenth century was shaped by the road network that radiated from this point.\n\nToday Lincoln Square remains a busy intersection surrounded by commercial and institutional buildings. The original road alignments are preserved in the modern street pattern, providing a direct connection to the colonial-era transportation network that made Worcester a communications hub during the Revolution.', address: 'Lincoln Square, Worcester, MA 01608', featured: false },
  });

  await prisma.place.upsert({
    where: { id: 'worcester-paine-estate-site' },
    update: { slug: 'worcester-paine-estate-site', description: 'The Paine Estate Site marks the approximate location of the homestead of Timothy Paine, the Loyalist mandamus councillor who was forced to resign his royal commission on September 6, 1774. The original buildings no longer survive, but the site is significant as the home of Worcester\'s most prominent Loyalist.', historicalNote: 'Timothy Paine\'s estate was one of the largest and most impressive properties in colonial Worcester, reflecting the wealth and status of the Paine family, who had been among the town\'s leading citizens for generations. The house and grounds stood as a visible symbol of the connection between wealth, royal patronage, and political authority that the patriot movement sought to challenge.\n\nOn September 6, 1774, the crowd that gathered on the Common sent a delegation to the Paine estate to summon Timothy Paine to appear before them. Paine initially refused but ultimately agreed to come to the Common, where he was compelled to renounce his commission as mandamus councillor. The contrast between the opulence of the Paine estate and the modest homes of the artisans and farmers who confronted him illustrated the class dimensions of the Revolution in Worcester.\n\nThe Paine estate no longer survives, having been demolished or absorbed into Worcester\'s urban development in the nineteenth century. However, the site remains significant as a reminder that the Revolution was fought not only against a distant British government but against local elites who represented and benefited from royal authority.' },
    create: { id: 'worcester-paine-estate-site', townId: WORCESTER_TOWN_ID, name: 'Paine Estate Site', slug: 'worcester-paine-estate-site', placeType: 'LANDMARK', description: 'The Paine Estate Site marks the approximate location of the homestead of Timothy Paine, the Loyalist mandamus councillor who was forced to resign his royal commission on September 6, 1774. The original buildings no longer survive, but the site is significant as the home of Worcester\'s most prominent Loyalist.', historicalNote: 'Timothy Paine\'s estate was one of the largest and most impressive properties in colonial Worcester, reflecting the wealth and status of the Paine family, who had been among the town\'s leading citizens for generations. The house and grounds stood as a visible symbol of the connection between wealth, royal patronage, and political authority that the patriot movement sought to challenge.\n\nOn September 6, 1774, the crowd that gathered on the Common sent a delegation to the Paine estate to summon Timothy Paine to appear before them. Paine initially refused but ultimately agreed to come to the Common, where he was compelled to renounce his commission as mandamus councillor. The contrast between the opulence of the Paine estate and the modest homes of the artisans and farmers who confronted him illustrated the class dimensions of the Revolution in Worcester.\n\nThe Paine estate no longer survives, having been demolished or absorbed into Worcester\'s urban development in the nineteenth century. However, the site remains significant as a reminder that the Revolution was fought not only against a distant British government but against local elites who represented and benefited from royal authority.', address: 'Main Street area, Worcester, MA 01608', featured: false },
  });

  await prisma.place.upsert({
    where: { id: 'worcester-history-museum' },
    update: { slug: 'worcester-history-museum', description: 'The Worcester Historical Museum preserves and interprets the history of Worcester from its founding in 1684 to the present. The museum\'s collections include artifacts, documents, and images related to Worcester\'s role in the American Revolution, including materials connected to the patriots, the militia, and the political organizing that made Worcester County a center of resistance.', historicalNote: 'The Worcester Historical Museum holds collections that are essential for understanding Worcester\'s Revolutionary history. These include documents from the Committee of Correspondence, militia records, maps and surveys of colonial Worcester, and personal effects of Worcester\'s Revolutionary-era families. The museum also operates the Salisbury Mansion, the only surviving eighteenth-century house museum in downtown Worcester.\n\nThe museum\'s exhibits trace Worcester\'s development from a small frontier settlement to a thriving inland town that became one of the most politically radical communities in pre-Revolutionary Massachusetts. Collections related to Isaiah Thomas and the Massachusetts Spy complement the holdings at the American Antiquarian Society, providing a comprehensive picture of Worcester\'s role as a center of printing and political communication.\n\nThe museum serves as the primary public institution for engaging with Worcester\'s colonial and Revolutionary history, offering educational programs, guided tours, and research access to its collections.' },
    create: { id: 'worcester-history-museum', townId: WORCESTER_TOWN_ID, name: 'Worcester Historical Museum', slug: 'worcester-history-museum', placeType: 'MUSEUM', description: 'The Worcester Historical Museum preserves and interprets the history of Worcester from its founding in 1684 to the present. The museum\'s collections include artifacts, documents, and images related to Worcester\'s role in the American Revolution, including materials connected to the patriots, the militia, and the political organizing that made Worcester County a center of resistance.', historicalNote: 'The Worcester Historical Museum holds collections that are essential for understanding Worcester\'s Revolutionary history. These include documents from the Committee of Correspondence, militia records, maps and surveys of colonial Worcester, and personal effects of Worcester\'s Revolutionary-era families. The museum also operates the Salisbury Mansion, the only surviving eighteenth-century house museum in downtown Worcester.\n\nThe museum\'s exhibits trace Worcester\'s development from a small frontier settlement to a thriving inland town that became one of the most politically radical communities in pre-Revolutionary Massachusetts. Collections related to Isaiah Thomas and the Massachusetts Spy complement the holdings at the American Antiquarian Society, providing a comprehensive picture of Worcester\'s role as a center of printing and political communication.\n\nThe museum serves as the primary public institution for engaging with Worcester\'s colonial and Revolutionary history, offering educational programs, guided tours, and research access to its collections.', address: '30 Elm St, Worcester, MA 01609', hours: 'Tue-Sat 10am-4pm', admission: '$8 adults', website: 'https://www.worcesterhistory.org', featured: true },
  });

  console.log('  Places seeded.');
}

// =============================================================================
// EVENTS
// =============================================================================

async function seedEvents() {
  console.log('  Seeding events...');

  // --- 12 EXISTING EVENTS (update slugs + summaries) ---

  await prisma.event.upsert({
    where: { id: 'event-worcester-stamp-act-protest' },
    update: { slug: 'worcester-stamp-act-protest-1765', summary: `In August 1765, when news of the Stamp Act reached Worcester, the town erupted in protest. The Stamp Act, which imposed a direct tax on printed materials including newspapers, legal documents, and playing cards, struck at the economic interests of every colonist. In Worcester, the response was immediate and visceral. Town meetings passed resolutions denouncing the act as an unconstitutional imposition of taxation without representation, and citizens organized public demonstrations of their opposition.

Worcester's protest was notable for its intensity and its early articulation of the constitutional principles that would drive the independence movement over the following decade. The town's resolves declared that Parliament had no authority to tax colonists who were not represented in that body — a position that was radical in 1765 but would become the consensus of the patriot movement by 1774. Worcester's response to the Stamp Act established the town as a center of political resistance and foreshadowed the more dramatic confrontations that would follow.

The Stamp Act was repealed in March 1766, but the precedent of organized resistance that Worcester established would be built upon in the years ahead. The networks of communication and collective action formed during the Stamp Act crisis evolved into the committees of correspondence and political societies that coordinated the patriot movement in Worcester County.` },
    create: { id: 'event-worcester-stamp-act-protest', townId: WORCESTER_TOWN_ID, name: 'Worcester Stamp Act Protest', slug: 'worcester-stamp-act-protest-1765', startDate: new Date('1765-08-15'), datePrecision: 'MONTH', summary: `In August 1765, when news of the Stamp Act reached Worcester, the town erupted in protest. The Stamp Act, which imposed a direct tax on printed materials including newspapers, legal documents, and playing cards, struck at the economic interests of every colonist. In Worcester, the response was immediate and visceral. Town meetings passed resolutions denouncing the act as an unconstitutional imposition of taxation without representation, and citizens organized public demonstrations of their opposition.

Worcester's protest was notable for its intensity and its early articulation of the constitutional principles that would drive the independence movement over the following decade. The town's resolves declared that Parliament had no authority to tax colonists who were not represented in that body — a position that was radical in 1765 but would become the consensus of the patriot movement by 1774. Worcester's response to the Stamp Act established the town as a center of political resistance and foreshadowed the more dramatic confrontations that would follow.

The Stamp Act was repealed in March 1766, but the precedent of organized resistance that Worcester established would be built upon in the years ahead. The networks of communication and collective action formed during the Stamp Act crisis evolved into the committees of correspondence and political societies that coordinated the patriot movement in Worcester County.`, significanceWeight: 55 },
  });

  await prisma.event.upsert({
    where: { id: 'event-worcester-american-political-society' },
    update: { slug: 'worcester-american-political-society-1773', summary: `In 1773, a group of Worcester citizens — blacksmiths, farmers, tavern keepers, and other tradesmen — established the American Political Society, one of the first formal political organizations in the American colonies dedicated to coordinating opposition to British authority. The Society met regularly at Worcester taverns, debating strategy, drafting resolutions, and planning collective action. Its membership included Timothy Bigelow, Samuel Curtis, and other men who would become leaders of the patriot movement in Worcester County.

The American Political Society was distinctive for its democratic character. Unlike the merchant-dominated political clubs of Boston, the Society drew its membership from the artisan and farming classes — working men who saw British commercial and taxation policies as direct threats to their livelihoods. The Society's meetings were forums for political education as well as strategic planning, and its resolutions circulated to other towns helped build the intellectual framework for resistance across Worcester County.

The Society's formation in 1773 placed Worcester at the forefront of organized political resistance in Massachusetts. While Boston had its Sons of Liberty and its Committees of Correspondence, Worcester's American Political Society represented a different model — a permanent, dues-paying membership organization with regular meetings, elected officers, and a written constitution. This organizational innovation anticipated the political parties and civic associations that would characterize American democracy in the following century.` },
    create: { id: 'event-worcester-american-political-society', townId: WORCESTER_TOWN_ID, name: 'Founding of the American Political Society', slug: 'worcester-american-political-society-1773', startDate: new Date('1773-01-01'), datePrecision: 'YEAR', summary: `In 1773, a group of Worcester citizens — blacksmiths, farmers, tavern keepers, and other tradesmen — established the American Political Society, one of the first formal political organizations in the American colonies dedicated to coordinating opposition to British authority. The Society met regularly at Worcester taverns, debating strategy, drafting resolutions, and planning collective action. Its membership included Timothy Bigelow, Samuel Curtis, and other men who would become leaders of the patriot movement in Worcester County.

The American Political Society was distinctive for its democratic character. Unlike the merchant-dominated political clubs of Boston, the Society drew its membership from the artisan and farming classes — working men who saw British commercial and taxation policies as direct threats to their livelihoods. The Society's meetings were forums for political education as well as strategic planning, and its resolutions circulated to other towns helped build the intellectual framework for resistance across Worcester County.

The Society's formation in 1773 placed Worcester at the forefront of organized political resistance in Massachusetts. While Boston had its Sons of Liberty and its Committees of Correspondence, Worcester's American Political Society represented a different model — a permanent, dues-paying membership organization with regular meetings, elected officers, and a written constitution. This organizational innovation anticipated the political parties and civic associations that would characterize American democracy in the following century.`, significanceWeight: 75 },
  });

  await prisma.event.upsert({
    where: { id: 'event-worcester-committee-correspondence' },
    update: { slug: 'worcester-committee-correspondence-1773', summary: `In 1773, Worcester established its Committee of Correspondence, the body that would coordinate the town's patriot activities and maintain communication with committees in Boston and other Massachusetts towns. Timothy Bigelow was elected chairman, and the committee included Samuel Curtis and other prominent patriots. The committee system, proposed by Samuel Adams in Boston in 1772, created an intertown communication network that allowed patriot organizations across Massachusetts to share intelligence, coordinate strategy, and present a unified front against British policies.

Worcester's Committee of Correspondence was among the most active and radical in the colony. The committee drafted resolves that went further than those of most other towns, articulating positions on taxation, representation, and the rights of colonial assemblies that anticipated the arguments for independence. The committee also organized the county conventions of 1774 — assemblies of delegates from every town in Worcester County — that produced the most radical political statements issued anywhere in Massachusetts before the Continental Congress.

The committee system proved essential in the critical months of 1774 and 1775. When the Massachusetts Government Act threatened to suppress town meetings and replace elected officials with royal appointees, the committees of correspondence provided an alternative political infrastructure that operated outside royal authority. Worcester's committee, under Bigelow's leadership, was at the center of this shadow government, coordinating the resistance that would make royal authority unenforceable in Worcester County.` },
    create: { id: 'event-worcester-committee-correspondence', townId: WORCESTER_TOWN_ID, name: 'Worcester Committee of Correspondence Established', slug: 'worcester-committee-correspondence-1773', startDate: new Date('1773-11-01'), datePrecision: 'MONTH', summary: `In 1773, Worcester established its Committee of Correspondence, the body that would coordinate the town's patriot activities and maintain communication with committees in Boston and other Massachusetts towns. Timothy Bigelow was elected chairman, and the committee included Samuel Curtis and other prominent patriots. The committee system, proposed by Samuel Adams in Boston in 1772, created an intertown communication network that allowed patriot organizations across Massachusetts to share intelligence, coordinate strategy, and present a unified front against British policies.

Worcester's Committee of Correspondence was among the most active and radical in the colony. The committee drafted resolves that went further than those of most other towns, articulating positions on taxation, representation, and the rights of colonial assemblies that anticipated the arguments for independence. The committee also organized the county conventions of 1774 — assemblies of delegates from every town in Worcester County — that produced the most radical political statements issued anywhere in Massachusetts before the Continental Congress.

The committee system proved essential in the critical months of 1774 and 1775. When the Massachusetts Government Act threatened to suppress town meetings and replace elected officials with royal appointees, the committees of correspondence provided an alternative political infrastructure that operated outside royal authority. Worcester's committee, under Bigelow's leadership, was at the center of this shadow government, coordinating the resistance that would make royal authority unenforceable in Worcester County.`, significanceWeight: 70 },
  });

  await prisma.event.upsert({
    where: { id: 'event-worcester-paine-resignation' },
    update: { slug: 'worcester-paine-resignation-1774', summary: `On September 6, 1774, several thousand armed militia and citizens from Worcester and surrounding towns gathered on the Worcester Common and compelled Timothy Paine, one of the mandamus councillors appointed by Governor Thomas Gage under the Massachusetts Government Act, to publicly renounce his commission. The event was one of the most dramatic confrontations of the pre-Revolutionary period and demonstrated that royal authority had collapsed in the Massachusetts countryside months before the first shots were fired at Lexington and Concord.

The Massachusetts Government Act, passed by Parliament in response to the Boston Tea Party, stripped Massachusetts of its elected council and authorized the governor to appoint councillors who would serve at his pleasure. Gage appointed thirty-six prominent men across the colony. In Worcester County, he selected Timothy Paine, a wealthy landowner, judge, and member of one of the county's oldest families. The patriot response was swift and overwhelming. Timothy Bigelow and the Committee of Correspondence organized the demonstration, summoning militia companies from towns across the county. Paine was compelled to walk between two lines of armed men and read aloud a statement renouncing his commission.

The forced resignation of Timothy Paine was part of a coordinated campaign across Massachusetts that effectively nullified the Government Act. Of the thirty-six mandamus councillors, most resigned under similar pressure. The Worcester demonstration was notable for its size, its discipline, and its completeness — Paine's resignation left Worcester County entirely outside royal control. The event proved that organized popular resistance could defeat parliamentary legislation without violence, a lesson that shaped patriot strategy throughout the remaining months before war.` },
    create: { id: 'event-worcester-paine-resignation', townId: WORCESTER_TOWN_ID, name: 'Forced Resignation of Timothy Paine', slug: 'worcester-paine-resignation-1774', startDate: new Date('1774-09-06'), datePrecision: 'DAY', summary: `On September 6, 1774, several thousand armed militia and citizens from Worcester and surrounding towns gathered on the Worcester Common and compelled Timothy Paine, one of the mandamus councillors appointed by Governor Thomas Gage under the Massachusetts Government Act, to publicly renounce his commission. The event was one of the most dramatic confrontations of the pre-Revolutionary period and demonstrated that royal authority had collapsed in the Massachusetts countryside months before the first shots were fired at Lexington and Concord.

The Massachusetts Government Act, passed by Parliament in response to the Boston Tea Party, stripped Massachusetts of its elected council and authorized the governor to appoint councillors who would serve at his pleasure. Gage appointed thirty-six prominent men across the colony. In Worcester County, he selected Timothy Paine, a wealthy landowner, judge, and member of one of the county's oldest families. The patriot response was swift and overwhelming. Timothy Bigelow and the Committee of Correspondence organized the demonstration, summoning militia companies from towns across the county. Paine was compelled to walk between two lines of armed men and read aloud a statement renouncing his commission.

The forced resignation of Timothy Paine was part of a coordinated campaign across Massachusetts that effectively nullified the Government Act. Of the thirty-six mandamus councillors, most resigned under similar pressure. The Worcester demonstration was notable for its size, its discipline, and its completeness — Paine's resignation left Worcester County entirely outside royal control. The event proved that organized popular resistance could defeat parliamentary legislation without violence, a lesson that shaped patriot strategy throughout the remaining months before war.`, significanceWeight: 90 },
  });

  await prisma.event.upsert({
    where: { id: 'event-worcester-court-closure' },
    update: { slug: 'worcester-court-closure-1774', summary: `On September 6, 1774 — the same day that Timothy Paine was forced to resign his mandamus councillorship — the assembled crowd on the Worcester Common also prevented the Worcester County Court of Common Pleas from sitting. Armed militia lined the path to the courthouse and refused to allow the judges to enter. Each court official was individually required to pledge not to serve under the authority of the Massachusetts Government Act. The court closure was a direct challenge not merely to a specific law but to the entire apparatus of royal governance in Worcester County.

The closure of the Worcester courts was part of a broader pattern of court closures across Massachusetts in the late summer and fall of 1774. Patriots in Worcester, Hampshire, Berkshire, and other counties used the tactic to prevent royal courts from exercising jurisdiction, effectively creating a vacuum of authority that patriot institutions — the committees of correspondence, the county conventions, the town meetings — filled. In Worcester, the court closure meant that legal disputes, debt proceedings, and criminal cases could no longer be adjudicated under royal authority.

The significance of the court closures extended beyond their immediate practical effect. They demonstrated that the colonial government could not function without the consent of the people. If the courts could not sit, taxes could not be collected, debts could not be enforced, and royal writs could not be served. The patriot organizers in Worcester understood this clearly: by closing the courts, they were not merely protesting a specific law but withdrawing their consent from the entire system of royal governance.` },
    create: { id: 'event-worcester-court-closure', townId: WORCESTER_TOWN_ID, name: 'Worcester Court Closure', slug: 'worcester-court-closure-1774', startDate: new Date('1774-09-06'), datePrecision: 'DAY', summary: `On September 6, 1774 — the same day that Timothy Paine was forced to resign his mandamus councillorship — the assembled crowd on the Worcester Common also prevented the Worcester County Court of Common Pleas from sitting. Armed militia lined the path to the courthouse and refused to allow the judges to enter. Each court official was individually required to pledge not to serve under the authority of the Massachusetts Government Act. The court closure was a direct challenge not merely to a specific law but to the entire apparatus of royal governance in Worcester County.

The closure of the Worcester courts was part of a broader pattern of court closures across Massachusetts in the late summer and fall of 1774. Patriots in Worcester, Hampshire, Berkshire, and other counties used the tactic to prevent royal courts from exercising jurisdiction, effectively creating a vacuum of authority that patriot institutions — the committees of correspondence, the county conventions, the town meetings — filled. In Worcester, the court closure meant that legal disputes, debt proceedings, and criminal cases could no longer be adjudicated under royal authority.

The significance of the court closures extended beyond their immediate practical effect. They demonstrated that the colonial government could not function without the consent of the people. If the courts could not sit, taxes could not be collected, debts could not be enforced, and royal writs could not be served. The patriot organizers in Worcester understood this clearly: by closing the courts, they were not merely protesting a specific law but withdrawing their consent from the entire system of royal governance.`, significanceWeight: 88 },
  });

  await prisma.event.upsert({
    where: { id: 'event-worcester-court-closures' },
    update: { slug: 'worcester-continued-court-closures-1774', summary: `Following the initial court closure of September 6, 1774, Worcester's patriots continued to prevent the royal courts from sitting throughout the fall and winter of 1774-1775. Each scheduled session of the Court of Common Pleas and the Court of General Sessions was met with organized resistance. Armed militia appeared at the courthouse, and judges and court officers were required to pledge not to exercise their authority under the Massachusetts Government Act.

The sustained court closures demonstrated that the September 6 action was not a single moment of defiance but the beginning of a new political reality. Royal governance in Worcester County had effectively ceased, replaced by the authority of the committees of correspondence and the county conventions. These patriot institutions took over the functions of government — mediating disputes, organizing defense, and maintaining public order — in a remarkable exercise of popular sovereignty.

The continued court closures in Worcester served as a model for other counties and reinforced the argument, made by patriots throughout Massachusetts, that government derived its authority from the consent of the governed. When that consent was withdrawn, as it had been in Worcester County, the government simply ceased to exist. This principle, expressed in practice before it was articulated in the Declaration of Independence, was one of Worcester's most important contributions to the ideology of the Revolution.` },
    create: { id: 'event-worcester-court-closures', townId: WORCESTER_TOWN_ID, name: 'Worcester Continued Court Closures', slug: 'worcester-continued-court-closures-1774', startDate: new Date('1774-10-01'), datePrecision: 'MONTH', summary: `Following the initial court closure of September 6, 1774, Worcester's patriots continued to prevent the royal courts from sitting throughout the fall and winter of 1774-1775. Each scheduled session of the Court of Common Pleas and the Court of General Sessions was met with organized resistance. Armed militia appeared at the courthouse, and judges and court officers were required to pledge not to exercise their authority under the Massachusetts Government Act.

The sustained court closures demonstrated that the September 6 action was not a single moment of defiance but the beginning of a new political reality. Royal governance in Worcester County had effectively ceased, replaced by the authority of the committees of correspondence and the county conventions. These patriot institutions took over the functions of government — mediating disputes, organizing defense, and maintaining public order — in a remarkable exercise of popular sovereignty.

The continued court closures in Worcester served as a model for other counties and reinforced the argument, made by patriots throughout Massachusetts, that government derived its authority from the consent of the governed. When that consent was withdrawn, as it had been in Worcester County, the government simply ceased to exist. This principle, expressed in practice before it was articulated in the Declaration of Independence, was one of Worcester's most important contributions to the ideology of the Revolution.`, significanceWeight: 78 },
  });

  await prisma.event.upsert({
    where: { id: 'event-worcester-spy-relocates' },
    update: { slug: 'worcester-spy-relocates-1775', summary: `In April 1775, Isaiah Thomas dismantled his printing press in Boston and smuggled it out of the city, relocating it to Worcester just days before the battles of Lexington and Concord. The relocation of the Massachusetts Spy — one of the most widely read patriot newspapers in the colonies — was a strategic decision that ensured the survival of the press and gave Worcester a powerful instrument of political communication.

Thomas chose Worcester because it was already a center of patriot organizing, far enough from Boston to be safe from British military action yet connected by road to the network of towns that the Spy served. He reestablished the paper quickly, and on May 3, 1775, he published the first post-Lexington issue of the Massachusetts Spy, which included the famous account of the battles beginning with the words "Americans! Forever bear in mind the BATTLE OF LEXINGTON!" This issue, printed in Worcester, was one of the earliest and most influential patriot accounts of the opening of the war.

The relocation of the Spy transformed Worcester into a center of printing and publishing that it would remain for decades. Thomas eventually expanded his Worcester operations into the largest publishing enterprise in eighteenth-century America, producing books, almanacs, and periodicals that circulated throughout the new nation. The Spy itself continued publication in Worcester for nearly a century, becoming one of the longest-running newspapers in American history.` },
    create: { id: 'event-worcester-spy-relocates', townId: WORCESTER_TOWN_ID, name: 'Massachusetts Spy Relocates to Worcester', slug: 'worcester-spy-relocates-1775', startDate: new Date('1775-04-16'), datePrecision: 'DAY', summary: `In April 1775, Isaiah Thomas dismantled his printing press in Boston and smuggled it out of the city, relocating it to Worcester just days before the battles of Lexington and Concord. The relocation of the Massachusetts Spy — one of the most widely read patriot newspapers in the colonies — was a strategic decision that ensured the survival of the press and gave Worcester a powerful instrument of political communication.

Thomas chose Worcester because it was already a center of patriot organizing, far enough from Boston to be safe from British military action yet connected by road to the network of towns that the Spy served. He reestablished the paper quickly, and on May 3, 1775, he published the first post-Lexington issue of the Massachusetts Spy, which included the famous account of the battles beginning with the words "Americans! Forever bear in mind the BATTLE OF LEXINGTON!" This issue, printed in Worcester, was one of the earliest and most influential patriot accounts of the opening of the war.

The relocation of the Spy transformed Worcester into a center of printing and publishing that it would remain for decades. Thomas eventually expanded his Worcester operations into the largest publishing enterprise in eighteenth-century America, producing books, almanacs, and periodicals that circulated throughout the new nation. The Spy itself continued publication in Worcester for nearly a century, becoming one of the longest-running newspapers in American history.`, significanceWeight: 85 },
  });

  await prisma.event.upsert({
    where: { id: 'event-worcester-militia-lexington-alarm' },
    update: { slug: 'worcester-militia-lexington-alarm-1775', summary: `On April 19, 1775, express riders carried news of the fighting at Lexington and Concord westward to Worcester, approximately forty miles from the scene of battle. The alarm reached Worcester within hours, and the town's militia companies mustered on the Common under the command of Colonel Ephraim Doolittle and other officers. By the morning of April 20, Worcester's militia was on the march east toward Cambridge, where patriot forces from across Massachusetts were converging to besiege the British garrison in Boston.

Worcester's response to the Lexington Alarm was swift and well-organized, reflecting the military preparations that had been underway for months under the direction of the Committee of Correspondence and the county militia commanders. The militia companies that marched east were equipped and provisioned in large part through the efforts of the women of Worcester, who had gathered food, clothing, and medical supplies in anticipation of just such a crisis.

The Lexington Alarm response demonstrated that Worcester's patriot organizing was not mere political posturing. The town was prepared to fight, and its militia reached the siege lines around Boston in time to participate in the early weeks of the investment. Worcester County sent more men to the siege of Boston than any other county in Massachusetts, a testament to the depth and breadth of patriot sentiment in the inland communities.` },
    create: { id: 'event-worcester-militia-lexington-alarm', townId: WORCESTER_TOWN_ID, name: 'Worcester Militia Responds to Lexington Alarm', slug: 'worcester-militia-lexington-alarm-1775', startDate: new Date('1775-04-19'), datePrecision: 'DAY', summary: `On April 19, 1775, express riders carried news of the fighting at Lexington and Concord westward to Worcester, approximately forty miles from the scene of battle. The alarm reached Worcester within hours, and the town's militia companies mustered on the Common under the command of Colonel Ephraim Doolittle and other officers. By the morning of April 20, Worcester's militia was on the march east toward Cambridge, where patriot forces from across Massachusetts were converging to besiege the British garrison in Boston.

Worcester's response to the Lexington Alarm was swift and well-organized, reflecting the military preparations that had been underway for months under the direction of the Committee of Correspondence and the county militia commanders. The militia companies that marched east were equipped and provisioned in large part through the efforts of the women of Worcester, who had gathered food, clothing, and medical supplies in anticipation of just such a crisis.

The Lexington Alarm response demonstrated that Worcester's patriot organizing was not mere political posturing. The town was prepared to fight, and its militia reached the siege lines around Boston in time to participate in the early weeks of the investment. Worcester County sent more men to the siege of Boston than any other county in Massachusetts, a testament to the depth and breadth of patriot sentiment in the inland communities.`, significanceWeight: 80 },
  });

  await prisma.event.upsert({
    where: { id: 'event-worcester-lexington-alarm-response' },
    update: { slug: 'worcester-county-lexington-response-1775', summary: `The response of Worcester County to the Lexington Alarm was one of the largest mobilizations of any county in Massachusetts. Militia companies from dozens of towns across the county mustered and marched east, many arriving at the siege lines around Boston within two to three days of the alarm. The speed and scale of the response reflected the extensive organizational work that the Committee of Correspondence and the American Political Society had done in the preceding years.

Colonel Ephraim Doolittle's regiment, drawn from Worcester and surrounding towns, was among the first county militia units to reach Cambridge. Doolittle's men joined the growing ring of patriot forces encircling Boston and participated in the construction of siege works. Other Worcester County companies followed, and by late April 1775, the county had contributed a substantial proportion of the total patriot force.

The Worcester County response was significant not only for its military contribution but for the political message it sent. Worcester County was the largest county in Massachusetts, and its overwhelming support for the patriot cause demonstrated that resistance to Britain was a colony-wide phenomenon, not merely a Boston affair. The county's response also validated the organizational model that Worcester's patriots had developed — the combination of political societies, committees of correspondence, and trained militia that allowed a dispersed rural population to mobilize rapidly and effectively.` },
    create: { id: 'event-worcester-lexington-alarm-response', townId: WORCESTER_TOWN_ID, name: 'Worcester County Lexington Response', slug: 'worcester-county-lexington-response-1775', startDate: new Date('1775-04-20'), datePrecision: 'DAY', summary: `The response of Worcester County to the Lexington Alarm was one of the largest mobilizations of any county in Massachusetts. Militia companies from dozens of towns across the county mustered and marched east, many arriving at the siege lines around Boston within two to three days of the alarm. The speed and scale of the response reflected the extensive organizational work that the Committee of Correspondence and the American Political Society had done in the preceding years.

Colonel Ephraim Doolittle's regiment, drawn from Worcester and surrounding towns, was among the first county militia units to reach Cambridge. Doolittle's men joined the growing ring of patriot forces encircling Boston and participated in the construction of siege works. Other Worcester County companies followed, and by late April 1775, the county had contributed a substantial proportion of the total patriot force.

The Worcester County response was significant not only for its military contribution but for the political message it sent. Worcester County was the largest county in Massachusetts, and its overwhelming support for the patriot cause demonstrated that resistance to Britain was a colony-wide phenomenon, not merely a Boston affair. The county's response also validated the organizational model that Worcester's patriots had developed — the combination of political societies, committees of correspondence, and trained militia that allowed a dispersed rural population to mobilize rapidly and effectively.`, significanceWeight: 78 },
  });

  await prisma.event.upsert({
    where: { id: 'event-worcester-supply-depot' },
    update: { slug: 'worcester-supply-depot-1775', summary: `During the Revolutionary War, Worcester served as an important supply depot and logistics center for the Continental Army. The town's inland location — far enough from the coast to be safe from British naval raids yet connected by roads to the siege lines around Boston and the supply networks of western Massachusetts — made it a natural collection and distribution point for military stores.

Worcester's taverns, barns, and warehouses were pressed into service as storage facilities for food, ammunition, clothing, and other military supplies. The town's position on the road between Boston and Springfield (where the Continental arsenal was being established) placed it on one of the most important supply routes in New England. Teamsters and wagon trains passed through Worcester regularly, carrying the materiel that sustained the patriot army.

The supply depot function reinforced Worcester's importance in the broader Revolutionary infrastructure. While the town was never a battlefield, its role in logistics and supply made it essential to the war effort. The same organizational skills that had enabled Worcester's patriots to coordinate political resistance were applied to the practical challenges of feeding, clothing, and equipping an army in the field.` },
    create: { id: 'event-worcester-supply-depot', townId: WORCESTER_TOWN_ID, name: 'Worcester as Supply Depot', slug: 'worcester-supply-depot-1775', startDate: new Date('1775-06-01'), datePrecision: 'YEAR', summary: `During the Revolutionary War, Worcester served as an important supply depot and logistics center for the Continental Army. The town's inland location — far enough from the coast to be safe from British naval raids yet connected by roads to the siege lines around Boston and the supply networks of western Massachusetts — made it a natural collection and distribution point for military stores.

Worcester's taverns, barns, and warehouses were pressed into service as storage facilities for food, ammunition, clothing, and other military supplies. The town's position on the road between Boston and Springfield (where the Continental arsenal was being established) placed it on one of the most important supply routes in New England. Teamsters and wagon trains passed through Worcester regularly, carrying the materiel that sustained the patriot army.

The supply depot function reinforced Worcester's importance in the broader Revolutionary infrastructure. While the town was never a battlefield, its role in logistics and supply made it essential to the war effort. The same organizational skills that had enabled Worcester's patriots to coordinate political resistance were applied to the practical challenges of feeding, clothing, and equipping an army in the field.`, significanceWeight: 60 },
  });

  await prisma.event.upsert({
    where: { id: 'event-worcester-declaration-read' },
    update: { slug: 'worcester-declaration-read-1776', summary: `On July 24, 1776, the Declaration of Independence was read aloud in Worcester from the steps of the South Meeting House on the Common. Isaiah Thomas had already published the text of the Declaration in the Massachusetts Spy, ensuring that Worcester's literate population had access to the document before the public reading. The reading was accompanied by celebrations, the ringing of church bells, and militia salutes.

Worcester's reception of the Declaration was enthusiastic but not surprising. The town had been operating outside royal authority since September 1774, and its residents had long since committed to the principles that the Declaration articulated. In many ways, Worcester had been practicing independence for nearly two years before Congress declared it. The court closures, the forced resignation of the mandamus councillor, the functioning of patriot committees as the effective government of the county — all of these actions represented the substance of independence before it was given formal expression.

The public reading of the Declaration in Worcester also served a practical purpose: it provided legal and moral justification for actions that Worcester's patriots had already taken. What had been acts of resistance and defiance against a government that still claimed sovereignty now became the founding actions of a new and independent political order.` },
    create: { id: 'event-worcester-declaration-read', townId: WORCESTER_TOWN_ID, name: 'Declaration of Independence Read in Worcester', slug: 'worcester-declaration-read-1776', startDate: new Date('1776-07-24'), datePrecision: 'DAY', summary: `On July 24, 1776, the Declaration of Independence was read aloud in Worcester from the steps of the South Meeting House on the Common. Isaiah Thomas had already published the text of the Declaration in the Massachusetts Spy, ensuring that Worcester's literate population had access to the document before the public reading. The reading was accompanied by celebrations, the ringing of church bells, and militia salutes.

Worcester's reception of the Declaration was enthusiastic but not surprising. The town had been operating outside royal authority since September 1774, and its residents had long since committed to the principles that the Declaration articulated. In many ways, Worcester had been practicing independence for nearly two years before Congress declared it. The court closures, the forced resignation of the mandamus councillor, the functioning of patriot committees as the effective government of the county — all of these actions represented the substance of independence before it was given formal expression.

The public reading of the Declaration in Worcester also served a practical purpose: it provided legal and moral justification for actions that Worcester's patriots had already taken. What had been acts of resistance and defiance against a government that still claimed sovereignty now became the founding actions of a new and independent political order.`, significanceWeight: 72 },
  });

  await prisma.event.upsert({
    where: { id: 'event-worcester-american-antiquarian-society' },
    update: { slug: 'worcester-american-antiquarian-society-1812', summary: `In 1812, Isaiah Thomas founded the American Antiquarian Society in Worcester, endowing it with his personal collection of books, newspapers, pamphlets, and manuscripts. The Society was established to collect and preserve the printed records of American history, and Thomas's donation included one of the most important collections of early American printed materials ever assembled — newspapers from every colony, pamphlets from the Revolutionary period, and books published in America from the earliest days of printing.

Thomas chose Worcester as the Society's home for the same reasons he had chosen it as the home of the Massachusetts Spy: its inland location provided safety from the coastal threats that had endangered Boston's institutions during the Revolution and the War of 1812, and its position as a crossroads of New England roads made it accessible to scholars and collectors from across the region.

The American Antiquarian Society became and remains one of the most important research libraries in the United States. Its collections include the largest body of American printed materials through 1876 — newspapers, books, pamphlets, broadsides, maps, and ephemera. The Society's presence in Worcester is Isaiah Thomas's most enduring legacy and the most tangible connection between Worcester's Revolutionary history and the ongoing work of historical scholarship and preservation.` },
    create: { id: 'event-worcester-american-antiquarian-society', townId: WORCESTER_TOWN_ID, name: 'Founding of the American Antiquarian Society', slug: 'worcester-american-antiquarian-society-1812', startDate: new Date('1812-10-24'), datePrecision: 'DAY', summary: `In 1812, Isaiah Thomas founded the American Antiquarian Society in Worcester, endowing it with his personal collection of books, newspapers, pamphlets, and manuscripts. The Society was established to collect and preserve the printed records of American history, and Thomas's donation included one of the most important collections of early American printed materials ever assembled — newspapers from every colony, pamphlets from the Revolutionary period, and books published in America from the earliest days of printing.

Thomas chose Worcester as the Society's home for the same reasons he had chosen it as the home of the Massachusetts Spy: its inland location provided safety from the coastal threats that had endangered Boston's institutions during the Revolution and the War of 1812, and its position as a crossroads of New England roads made it accessible to scholars and collectors from across the region.

The American Antiquarian Society became and remains one of the most important research libraries in the United States. Its collections include the largest body of American printed materials through 1876 — newspapers, books, pamphlets, broadsides, maps, and ephemera. The Society's presence in Worcester is Isaiah Thomas's most enduring legacy and the most tangible connection between Worcester's Revolutionary history and the ongoing work of historical scholarship and preservation.`, significanceWeight: 70 },
  });

  // --- 4 NEW EVENTS ---

  await prisma.event.upsert({
    where: { id: 'event-worcester-non-importation-enforcement' },
    update: {},
    create: { id: 'event-worcester-non-importation-enforcement', townId: WORCESTER_TOWN_ID, name: 'Worcester Non-Importation Enforcement', slug: 'worcester-non-importation-enforcement-1774', startDate: new Date('1774-01-01'), datePrecision: 'YEAR', summary: `Throughout 1774, Worcester's patriots enforced non-importation agreements with increasing rigor, using social pressure, public shaming, and organized boycotts to prevent the sale and consumption of British goods. The enforcement of non-importation in Worcester went beyond the voluntary compliance that characterized earlier boycott efforts — the Committee of Correspondence and the American Political Society actively monitored merchants and publicly identified those who violated the agreements.

Worcester's enforcement efforts were coordinated with similar campaigns in other towns through the committee of correspondence network. Lists of non-compliant merchants were published in the Massachusetts Spy, subjecting violators to public censure and economic ostracism. Women played a crucial role in enforcement, refusing to purchase British textiles and organizing spinning bees to produce homespun alternatives. The spinning bees served both practical and symbolic purposes, demonstrating economic self-sufficiency while providing a public venue for women's participation in the patriot cause.

The non-importation enforcement in Worcester illustrated a key feature of the Revolutionary movement in inland Massachusetts: the willingness to use economic coercion as a tool of political resistance. The patriots understood that Britain's commercial relationship with the colonies was a source of leverage, and they were prepared to endure economic hardship themselves in order to bring pressure on British merchants and manufacturers who depended on colonial markets.`, significanceWeight: 60 },
  });

  await prisma.event.upsert({
    where: { id: 'event-worcester-militia-reorganization' },
    update: {},
    create: { id: 'event-worcester-militia-reorganization', townId: WORCESTER_TOWN_ID, name: 'Worcester Militia Reorganization', slug: 'worcester-militia-reorganization-1774', startDate: new Date('1774-09-01'), datePrecision: 'MONTH', summary: `In September 1774, following the passage of the Massachusetts Government Act and the forced resignation of Timothy Paine, the Worcester County Convention ordered a thorough reorganization of the county militia. Loyalist officers were purged and replaced with patriot sympathizers. Colonel Ephraim Doolittle was confirmed as commander of the Worcester County militia regiment, and new company officers were elected by the rank and file — a democratic process that contrasted sharply with the royal appointment system it replaced.

The militia reorganization was one of the most consequential decisions made by Worcester's patriots. By purging Loyalist officers and installing patriot commanders, they ensured that the county's military force would be aligned with the political resistance movement. The reorganized militia began drilling with increased frequency and urgency, preparing for a military confrontation that many believed was inevitable.

The Worcester County Convention also resolved that one-third of the militia should be organized as "minute men" — soldiers who could be ready to march on a minute's notice. This decision, which was adopted by other counties across Massachusetts, created the rapid-response force that would prove decisive when the Lexington Alarm came in April 1775. The concept of the minute man, now iconic in American culture, was partly a product of the organizational work done in Worcester County in the fall of 1774.`, significanceWeight: 75 },
  });

  await prisma.event.upsert({
    where: { id: 'event-worcester-post-war-organizing' },
    update: {},
    create: { id: 'event-worcester-post-war-organizing', townId: WORCESTER_TOWN_ID, name: 'Post-War Political Organizing in Worcester', slug: 'worcester-post-war-organizing-1780s', startDate: new Date('1783-01-01'), datePrecision: 'YEAR', summary: `After the Revolutionary War ended in 1783, Worcester remained a center of political organizing as the new nation grappled with the challenges of self-governance. The same networks that had coordinated resistance to British authority — the town meetings, the county conventions, the committees of correspondence — were repurposed to address the economic and political crises of the post-war period.

Worcester County was deeply affected by the economic depression that followed the war. Farmers who had served in the Continental Army returned to find their farms in disrepair, their debts mounting, and hard currency almost nonexistent. The Massachusetts legislature, dominated by eastern mercantile interests, imposed heavy taxes payable in specie to retire the state's war debts — the same grievances that would fuel Shays' Rebellion in the western counties. In Worcester, conventions and town meetings debated economic policy, currency reform, and the proper relationship between state government and local communities.

Worcester's post-war political organizing also contributed to the debates over the new federal Constitution. The town's tradition of vigorous political engagement ensured that the ratification debate in 1787-1788 was closely followed and passionately argued. Worcester's experience with self-governance — the town had effectively governed itself through patriot institutions since 1774 — informed its citizens' views on the balance between federal authority and local autonomy.`, significanceWeight: 55 },
  });

  await prisma.event.upsert({
    where: { id: 'event-worcester-resolves' },
    update: {},
    create: { id: 'event-worcester-resolves', townId: WORCESTER_TOWN_ID, name: 'The Worcester Resolves', slug: 'worcester-resolves-1774', startDate: new Date('1774-08-09'), datePrecision: 'DAY', summary: `On August 9, 1774, the Worcester County Convention issued a set of resolves that were among the most radical political statements produced anywhere in the American colonies before independence. The resolves declared that the Massachusetts Government Act was unconstitutional and void, that no person should accept appointment under the Act, that the courts should not sit under the Act's authority, and that the militia should be reorganized under patriot officers. The convention called on all towns in the county to prepare for armed resistance if necessary.

The Worcester Resolves went further than the resolutions adopted by most other Massachusetts towns or counties at this early date. While many communities expressed opposition to the Government Act, the Worcester Resolves explicitly declared the Act null and void and prescribed concrete actions to nullify it — court closures, the forced resignation of mandamus councillors, and militia reorganization. These were not merely statements of principle but operational plans that were carried out within weeks.

The Worcester Resolves influenced the broader Massachusetts resistance movement. They were circulated through the committee of correspondence network and read in town meetings across the colony. Their uncompromising language and practical specificity provided a template for other counties to follow. When the Suffolk Resolves — adopted by Suffolk County (Boston) in September 1774 — were endorsed by the First Continental Congress, they echoed positions that Worcester had already articulated and acted upon weeks earlier.`, significanceWeight: 85 },
  });

  console.log('  Events seeded.');
}

// =============================================================================
// EVENT-PEOPLE CONNECTIONS
// =============================================================================

async function seedEventPeople() {
  console.log('  Seeding event-people connections...');

  const connections = [
    { eventId: 'event-worcester-stamp-act-protest', personId: 'person-worcester-timothy-bigelow', roleInEvent: 'Protest organizer' },
    { eventId: 'event-worcester-stamp-act-protest', personId: 'person-worcester-samuel-curtis', roleInEvent: 'Participant in town meeting resolutions' },
    { eventId: 'event-worcester-american-political-society', personId: 'person-worcester-timothy-bigelow', roleInEvent: 'Founding member' },
    { eventId: 'event-worcester-american-political-society', personId: 'person-worcester-samuel-curtis', roleInEvent: 'Founding member' },
    { eventId: 'event-worcester-committee-correspondence', personId: 'person-worcester-timothy-bigelow', roleInEvent: 'Elected chairman' },
    { eventId: 'event-worcester-committee-correspondence', personId: 'person-worcester-samuel-curtis', roleInEvent: 'Committee member' },
    { eventId: 'event-worcester-resolves', personId: 'person-worcester-timothy-bigelow', roleInEvent: 'Convention leader and drafter of resolves' },
    { eventId: 'event-worcester-resolves', personId: 'person-worcester-samuel-curtis', roleInEvent: 'Convention delegate and organizer' },
    { eventId: 'event-worcester-resolves', personId: 'person-worcester-ephraim-doolittle', roleInEvent: 'Militia commander advising on military preparations' },
    { eventId: 'event-worcester-paine-resignation', personId: 'person-worcester-timothy-bigelow', roleInEvent: 'Led the crowd that forced Paine to resign' },
    { eventId: 'event-worcester-paine-resignation', personId: 'person-worcester-timothy-paine', roleInEvent: 'Mandamus councillor forced to resign' },
    { eventId: 'event-worcester-paine-resignation', personId: 'person-worcester-samuel-curtis', roleInEvent: 'Organizer of the demonstration' },
    { eventId: 'event-worcester-paine-resignation', personId: 'person-worcester-ephraim-doolittle', roleInEvent: 'Militia commander at the demonstration' },
    { eventId: 'event-worcester-court-closure', personId: 'person-worcester-timothy-bigelow', roleInEvent: 'Led militia that blocked the courthouse' },
    { eventId: 'event-worcester-court-closure', personId: 'person-worcester-timothy-paine', roleInEvent: 'Court official prevented from serving' },
    { eventId: 'event-worcester-court-closure', personId: 'person-worcester-samuel-curtis', roleInEvent: 'Committee organizer of the court closure' },
    { eventId: 'event-worcester-court-closures', personId: 'person-worcester-timothy-bigelow', roleInEvent: 'Continued organizer of court closures' },
    { eventId: 'event-worcester-non-importation-enforcement', personId: 'person-worcester-samuel-curtis', roleInEvent: 'Enforced boycotts through committee networks' },
    { eventId: 'event-worcester-non-importation-enforcement', personId: 'person-worcester-mary-stearns', roleInEvent: 'Organized spinning bees and textile production' },
    { eventId: 'event-worcester-non-importation-enforcement', personId: 'person-worcester-isaiah-thomas', roleInEvent: 'Published lists of non-compliant merchants in the Massachusetts Spy' },
    { eventId: 'event-worcester-militia-reorganization', personId: 'person-worcester-ephraim-doolittle', roleInEvent: 'Confirmed as county militia commander' },
    { eventId: 'event-worcester-militia-reorganization', personId: 'person-worcester-timothy-bigelow', roleInEvent: 'Organized purge of Loyalist officers' },
    { eventId: 'event-worcester-spy-relocates', personId: 'person-worcester-isaiah-thomas', roleInEvent: 'Relocated his press from Boston to Worcester' },
    { eventId: 'event-worcester-militia-lexington-alarm', personId: 'person-worcester-timothy-bigelow', roleInEvent: 'Led militia company on march east' },
    { eventId: 'event-worcester-militia-lexington-alarm', personId: 'person-worcester-ephraim-doolittle', roleInEvent: 'Commanded Worcester County regiment' },
    { eventId: 'event-worcester-militia-lexington-alarm', personId: 'person-worcester-mary-stearns', roleInEvent: 'Provisioned militia companies for the march' },
    { eventId: 'event-worcester-militia-lexington-alarm', personId: 'person-worcester-isaiah-thomas', roleInEvent: 'Rode to Lexington; witnessed the fighting before continuing to Worcester' },
    { eventId: 'event-worcester-lexington-alarm-response', personId: 'person-worcester-ephraim-doolittle', roleInEvent: 'Led county regiment to Cambridge siege lines' },
    { eventId: 'event-worcester-lexington-alarm-response', personId: 'person-worcester-timothy-bigelow', roleInEvent: 'Militia company commander in the march east' },
    { eventId: 'event-worcester-supply-depot', personId: 'person-worcester-samuel-curtis', roleInEvent: 'Coordinated supply collection and distribution' },
    { eventId: 'event-worcester-supply-depot', personId: 'person-worcester-mary-stearns', roleInEvent: 'Organized women to produce supplies for the army' },
    { eventId: 'event-worcester-declaration-read', personId: 'person-worcester-isaiah-thomas', roleInEvent: 'Published the Declaration in the Massachusetts Spy' },
    { eventId: 'event-worcester-post-war-organizing', personId: 'person-worcester-isaiah-thomas', roleInEvent: 'Published political commentary in the Massachusetts Spy' },
    { eventId: 'event-worcester-post-war-organizing', personId: 'person-worcester-samuel-curtis', roleInEvent: 'Participated in post-war town meetings and conventions' },
    { eventId: 'event-worcester-american-antiquarian-society', personId: 'person-worcester-isaiah-thomas', roleInEvent: 'Founder and primary donor' },
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
    where: { id: 'story-worcester-isaiah-thomas' },
    update: {
      slug: 'printer-who-armed-a-revolution-with-words',
      textVersion: `I have been called many things in my life — printer, publisher, patriot, propagandist. I have been accused of sedition, threatened with arrest, and watched while British soldiers broke into the offices where I set type and inked the press. I have set the words of Samuel Adams and John Hancock into metal and pressed them onto paper and sent them out into the world where they could not be unsaid. I am Isaiah Thomas, and I armed this revolution not with muskets but with words.

I learned the printing trade as a boy, apprenticed at six years old to a man named Fowle who knew less about printing than I knew by the time I was twelve. I taught myself to set clean type, to compose a page that the eye could read without stumbling, to operate a press with speed and precision. By the time I was twenty-one, I had my own newspaper — the Massachusetts Spy — and I had made it the voice of every farmer, every tradesman, every working man in New England who believed that the Parliament in London had no right to reach into his pocket and take what it had not earned.

The Spy was dangerous. Governor Hutchinson knew it. General Gage knew it. They knew that a newspaper that reached thousands of readers every week, that carried arguments for resistance into every tavern and meeting house and farmhouse kitchen in Massachusetts, was more dangerous than a company of soldiers. A soldier can control a street corner. A newspaper can change a mind. And a changed mind is something no army can conquer.

By April of 1775, I knew that Boston was no longer safe for the Spy or for me. The British were going to seize the patriot leaders, and they were going to seize the presses. I dismantled my press and smuggled it out of Boston in pieces, sending it west to Worcester by wagon. Then I rode to Lexington. I will not claim heroism — I went because I needed to see, because a printer must witness what he publishes. I was on Lexington Green when the shooting started, and I saw men die in the first light of an April morning, and I rode west with the sound of musket fire behind me.

I set up my press in Worcester and published the first patriot account of the battles. "Americans! Forever bear in mind the BATTLE OF LEXINGTON!" That was May 3, 1775, and the words went out from Worcester to every corner of New England. I published the Spy in Worcester for the rest of the war and for decades after, and I built a publishing enterprise that produced books, almanacs, and pamphlets by the thousands. I published Mother Goose for children and political treatises for their parents, and I made Worcester a center of the book trade.

But the thing I am proudest of is the American Antiquarian Society. I founded it in 1812, here in Worcester, and I gave it my collection — every newspaper I could find from every colony, every pamphlet, every broadside, every book printed in America that I could lay my hands on. I had spent my life putting words on paper, and I understood that paper is fragile. If no one preserves it, the record of what we said and thought and believed will be lost. The Society is my answer to that danger — a library of the American mind, housed in Worcester because Worcester is where the Revolution proved that ideas, set in type and pressed onto paper, can overthrow an empire.`,
    },
    create: {
      id: 'story-worcester-isaiah-thomas',
      townId: WORCESTER_TOWN_ID,
      title: 'The Printer Who Armed a Revolution with Words',
      slug: 'printer-who-armed-a-revolution-with-words',
      storyType: 'HISTORICAL_VOICE',
      subjectPersonId: 'person-worcester-isaiah-thomas',
      verificationStatus: 'VERIFIED',
      textVersion: `I have been called many things in my life — printer, publisher, patriot, propagandist. I have been accused of sedition, threatened with arrest, and watched while British soldiers broke into the offices where I set type and inked the press. I have set the words of Samuel Adams and John Hancock into metal and pressed them onto paper and sent them out into the world where they could not be unsaid. I am Isaiah Thomas, and I armed this revolution not with muskets but with words.

I learned the printing trade as a boy, apprenticed at six years old to a man named Fowle who knew less about printing than I knew by the time I was twelve. I taught myself to set clean type, to compose a page that the eye could read without stumbling, to operate a press with speed and precision. By the time I was twenty-one, I had my own newspaper — the Massachusetts Spy — and I had made it the voice of every farmer, every tradesman, every working man in New England who believed that the Parliament in London had no right to reach into his pocket and take what it had not earned.

The Spy was dangerous. Governor Hutchinson knew it. General Gage knew it. They knew that a newspaper that reached thousands of readers every week, that carried arguments for resistance into every tavern and meeting house and farmhouse kitchen in Massachusetts, was more dangerous than a company of soldiers. A soldier can control a street corner. A newspaper can change a mind. And a changed mind is something no army can conquer.

By April of 1775, I knew that Boston was no longer safe for the Spy or for me. The British were going to seize the patriot leaders, and they were going to seize the presses. I dismantled my press and smuggled it out of Boston in pieces, sending it west to Worcester by wagon. Then I rode to Lexington. I will not claim heroism — I went because I needed to see, because a printer must witness what he publishes. I was on Lexington Green when the shooting started, and I saw men die in the first light of an April morning, and I rode west with the sound of musket fire behind me.

I set up my press in Worcester and published the first patriot account of the battles. "Americans! Forever bear in mind the BATTLE OF LEXINGTON!" That was May 3, 1775, and the words went out from Worcester to every corner of New England. I published the Spy in Worcester for the rest of the war and for decades after, and I built a publishing enterprise that produced books, almanacs, and pamphlets by the thousands. I published Mother Goose for children and political treatises for their parents, and I made Worcester a center of the book trade.

But the thing I am proudest of is the American Antiquarian Society. I founded it in 1812, here in Worcester, and I gave it my collection — every newspaper I could find from every colony, every pamphlet, every broadside, every book printed in America that I could lay my hands on. I had spent my life putting words on paper, and I understood that paper is fragile. If no one preserves it, the record of what we said and thought and believed will be lost. The Society is my answer to that danger — a library of the American mind, housed in Worcester because Worcester is where the Revolution proved that ideas, set in type and pressed onto paper, can overthrow an empire.`,
      tags: ['printing', 'press-freedom', 'massachusetts-spy', 'antiquarian-society'],
    },
  });

  await prisma.story.upsert({
    where: { id: 'story-worcester-modern-aas' },
    update: {
      slug: 'preserving-the-revolution-in-print',
      textVersion: `Every morning when I walk into the American Antiquarian Society on Salisbury Street, I pass through a door that Isaiah Thomas opened over two hundred years ago. Not the physical door — the building has changed since his time — but the idea of the door. Thomas believed that the printed word was the most important record a civilization could leave behind, and he founded this institution to ensure that America's printed heritage would survive. That mission hasn't changed. What's changed is how much more we understand about what those documents mean.

The collection Thomas donated in 1812 was remarkable for its time — thousands of newspapers, books, and pamphlets he had collected over a lifetime as the most prolific printer in America. But the collection has grown enormously since then. Today the American Antiquarian Society holds the largest collection of American printed materials through 1876 — approximately four million items, including books, newspapers, periodicals, broadsides, maps, prints, and graphic arts. We have two-thirds of all the items known to have been printed in America before 1821.

For scholars studying the Revolution, this collection is indispensable. We hold runs of the Massachusetts Spy that Thomas printed here in Worcester — the very issues that carried the news of Lexington and Concord, the text of the Declaration of Independence, and the political arguments that shaped public opinion throughout the war. We hold the pamphlets that ordinary people read, the almanacs that hung in their kitchens, the broadsides that were posted on tavern walls. These are not the papers of great men — those are at the Library of Congress and the Massachusetts Historical Society. These are the printed materials that reached ordinary people, and they tell us what the Revolution meant to the farmers and tradesmen and housewives who actually lived through it.

Worcester was essential to this story. Isaiah Thomas chose Worcester not by accident but because this town, forty miles from the coast, was the center of a political movement that was more radical, more organized, and more consequential than most Americans realize. The court closures of 1774, the forced resignation of the mandamus councillor, the county conventions that produced resolves anticipating the Declaration of Independence — these events happened here, and the printed record of them survives here, in the institution that the man who printed the news of those events founded to preserve them.

That's what I try to convey to every researcher and every student who comes through our doors: that Worcester is not a footnote to the Revolution. It's a place where the Revolution was invented, practiced, and preserved.`,
    },
    create: {
      id: 'story-worcester-modern-aas',
      townId: WORCESTER_TOWN_ID,
      title: 'Preserving the Revolution in Print',
      slug: 'preserving-the-revolution-in-print',
      storyType: 'MODERN_VOICE',
      narratorName: 'Research Librarian, American Antiquarian Society',
      narratorRole: 'Research Librarian, American Antiquarian Society',
      verificationStatus: 'VERIFIED',
      textVersion: `Every morning when I walk into the American Antiquarian Society on Salisbury Street, I pass through a door that Isaiah Thomas opened over two hundred years ago. Not the physical door — the building has changed since his time — but the idea of the door. Thomas believed that the printed word was the most important record a civilization could leave behind, and he founded this institution to ensure that America's printed heritage would survive. That mission hasn't changed. What's changed is how much more we understand about what those documents mean.

The collection Thomas donated in 1812 was remarkable for its time — thousands of newspapers, books, and pamphlets he had collected over a lifetime as the most prolific printer in America. But the collection has grown enormously since then. Today the American Antiquarian Society holds the largest collection of American printed materials through 1876 — approximately four million items, including books, newspapers, periodicals, broadsides, maps, prints, and graphic arts. We have two-thirds of all the items known to have been printed in America before 1821.

For scholars studying the Revolution, this collection is indispensable. We hold runs of the Massachusetts Spy that Thomas printed here in Worcester — the very issues that carried the news of Lexington and Concord, the text of the Declaration of Independence, and the political arguments that shaped public opinion throughout the war. We hold the pamphlets that ordinary people read, the almanacs that hung in their kitchens, the broadsides that were posted on tavern walls. These are not the papers of great men — those are at the Library of Congress and the Massachusetts Historical Society. These are the printed materials that reached ordinary people, and they tell us what the Revolution meant to the farmers and tradesmen and housewives who actually lived through it.

Worcester was essential to this story. Isaiah Thomas chose Worcester not by accident but because this town, forty miles from the coast, was the center of a political movement that was more radical, more organized, and more consequential than most Americans realize. The court closures of 1774, the forced resignation of the mandamus councillor, the county conventions that produced resolves anticipating the Declaration of Independence — these events happened here, and the printed record of them survives here, in the institution that the man who printed the news of those events founded to preserve them.

That's what I try to convey to every researcher and every student who comes through our doors: that Worcester is not a footnote to the Revolution. It's a place where the Revolution was invented, practiced, and preserved.`,
      tags: ['preservation', 'antiquarian-society', 'libraries', 'printing-history'],
    },
  });

  // --- 2 NEW STORIES ---

  await prisma.story.upsert({
    where: { id: 'story-worcester-blacksmith-patriot' },
    update: {},
    create: {
      id: 'story-worcester-blacksmith-patriot',
      townId: WORCESTER_TOWN_ID,
      title: 'The Blacksmith Who Forged a Revolution',
      slug: 'blacksmith-who-forged-a-revolution',
      storyType: 'HISTORICAL_VOICE',
      subjectPersonId: 'person-worcester-timothy-bigelow',
      verificationStatus: 'VERIFIED',
      textVersion: `I am a blacksmith. I want you to understand that before I tell you anything else, because everything I did in the Revolution grew from the forge. A blacksmith knows iron. He knows that raw iron is brittle and useless, but that if you heat it and hammer it and fold it and hammer it again, you can make it into something strong enough to shoe a horse, sharp enough to cut timber, hard enough to last a lifetime. That is what we did with Worcester — we took a town of farmers and tradesmen and hammered it into the hardest point of resistance in all of Massachusetts.

My name is Timothy Bigelow, and I was chairman of the Worcester Committee of Correspondence and a colonel in the Continental Army, but the title I earned first was master blacksmith. My forge on Main Street was where men came to get their horses shod, their tools repaired, their wagon tires set. And it was where men came to talk. A blacksmith's shop is a public place — men wait while you work, and while they wait, they talk. By 1773, the talk in my shop was all about what Parliament was doing to us, and what we meant to do about it.

We founded the American Political Society that year — the first political organization in the colonies, as far as I know, that was not a gentleman's club or a merchant's association but an organization of working men. Blacksmiths, farmers, tanners, coopers, tavern keepers. Men who worked with their hands and understood that the taxes and trade restrictions Parliament imposed fell hardest on men like us. We met at Stearns's tavern, and we drafted resolutions, and we sent them to every town in the county.

The moment I am most remembered for came on September 6, 1774. The King's governor had appointed Timothy Paine — a rich man, a judge, a man who had never swung a hammer or turned a furrow in his life — to serve as his councillor over us. We called out the militia. Thousands came — from Worcester, from Leicester, from Holden, from Spencer, from every town in the county. We lined them up on the Common, two deep, and we sent word to Paine that he would come before us and renounce his commission or he would answer for it.

He came. He walked between those two lines of armed men — men he had once judged from his bench, men whose debts he had collected, men he had looked down upon his entire life — and he read the words we had written for him. He renounced his commission. He pledged never to serve the King's government again. And when he was done, the royal government in Worcester County was over. Not a shot was fired. Not a man was harmed. But the King's authority was as dead as last year's ashes in my forge.

I went on to lead the militia to Lexington and Cambridge, and I served through the war as a colonel — through Valley Forge, through years of cold and hunger and death. I came home to Worcester a broken man, my health ruined, my fortune spent. I died poor, which is the way of soldiers. But I had seen something that no king could take away from me: I had seen an entire county of working men stand up and declare that they would govern themselves, and I had watched the most powerful empire in the world discover that it could not make them sit down again.`,
      tags: ['political-organizing', 'artisan-patriot', 'committee-correspondence', 'militia'],
    },
  });

  await prisma.story.upsert({
    where: { id: 'story-worcester-loyalist-fall' },
    update: {},
    create: {
      id: 'story-worcester-loyalist-fall',
      townId: WORCESTER_TOWN_ID,
      title: 'The Councillor Who Lost Everything',
      slug: 'councillor-who-lost-everything',
      storyType: 'HISTORICAL_VOICE',
      subjectPersonId: 'person-worcester-timothy-paine',
      verificationStatus: 'VERIFIED',
      textVersion: `My family built this town. I want that understood. The Paines were here before the blacksmiths and the printers and the tavern keepers who now presume to tell me what I may and may not do in the service of my King. My grandfather held the first commission of the peace in Worcester County. My father sat on the Governor's Council. I served as judge of the Court of Common Pleas for years, dispensing justice fairly and without favor, maintaining the order upon which every man's property and liberty depend. I am Timothy Paine, and I am called a traitor to my country by men who could not spell the word a decade ago.

When Governor Gage offered me a place on the mandamus council, I accepted because I believed — and I still believe — that lawful authority must be maintained. The radicals in Boston had destroyed private property with their tea party. The legislature had been captured by demagogues. The courts were being threatened. Someone needed to stand for order, for the institutions that protect every man equally — the rich and the poor, the merchant and the farmer. I agreed to serve because I believed the alternative was anarchy.

They came for me on September 6, 1774. Not a delegation. Not a committee. An army. Thousands of men with muskets, lined up on the Common, summoned by that blacksmith Bigelow and his Committee of Correspondence — a body with no legal authority whatsoever, a self-appointed tribunal that presumed to exercise powers that belonged to the Crown and the legislature. They sent word that I should appear before them. I knew what would happen if I refused. I had heard what happened to other councillors — Oliver in Middleborough, Ruggles in Hardwick — dragged from their homes, threatened, their property damaged.

I walked between those two lines of armed men. I looked into faces I had known for years — men I had judged from the bench, men whose disputes I had settled, men whose deeds I had recorded. They stared at me as though I were a criminal. Bigelow had prepared a statement for me to read — a renunciation of my commission, a pledge never to serve under the Government Act. I read it because I had no choice. A man with no army cannot argue with a man who has one.

They called it liberty. I call it the tyranny of the mob. They said they were defending the rights of the people. But what right did they have to compel me — a lawfully appointed officer of the Crown — to resign my commission under threat of violence? What right did they have to close the courts and prevent the administration of justice? They used the language of freedom to destroy the institutions that protected freedom, and they could not see the contradiction because they had convinced themselves that any act committed in the name of the people was justified.

I remained in Worcester. Where else could I go? My property was here, my family, my life. I lived among men who despised me, stripped of every office I had held, reduced from a judge and a councillor to a private citizen whose opinions no one sought. I watched them build their committees and their conventions and their militia, and I kept my silence because silence was all that was left to me.

History will record that I was on the wrong side. Perhaps it will. But I ask anyone who reads these words to consider what it means when thousands of armed men can compel a lawfully appointed judge to resign his office, and call it justice. If they can do it to me, they can do it to anyone. That is not liberty. That is power, wearing liberty's mask.`,
      tags: ['loyalist-experience', 'mandamus-councillor', 'political-coercion', 'revolution-costs'],
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
    where: { id: 'cmm2s5oo600e0p5g7qblidzqq' },
    update: {
      slug: 'worcester-revolution-before-revolution',
      summary: 'Students examine how Worcester County\'s court closures and political organizing in 1774 effectively ended royal authority months before Lexington and Concord. Through primary source analysis and role-playing exercises, students explore the concept of "revolution before the Revolution" and evaluate whether the real American Revolution began not with a battle but with organized political defiance.',
      lessonData: {
        objectives: [
          'Analyze the Worcester County court closures and Paine resignation as acts of revolution',
          'Compare the political tactics used in Worcester with those used in Boston',
          'Evaluate the argument that the American Revolution began before shots were fired',
          'Understand the role of county conventions and committees of correspondence in coordinating resistance',
        ],
        essentialQuestions: [
          'When did the American Revolution really begin — at Lexington in 1775 or in Worcester in 1774?',
          'How did ordinary citizens in an inland town organize to overthrow royal authority?',
          'What made the Worcester court closures different from simple mob violence?',
          'How did the political organizations created in Worcester influence the broader independence movement?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Show students a timeline with two dates highlighted: September 6, 1774 (Worcester court closure and Paine resignation) and April 19, 1775 (Lexington and Concord). Ask: Which date should we call the beginning of the American Revolution? Why? Have students vote and defend their positions.',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'The Massachusetts Government Act of 1774 and what it changed about colonial governance',
            'The Worcester County Convention and the August 1774 Resolves',
            'The events of September 6, 1774: the forced resignation of Timothy Paine and the court closure',
            'How the committees of correspondence and the American Political Society organized the resistance',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Primary Source Analysis: Students examine excerpts from the Worcester Resolves (August 1774), comparing their language to the Declaration of Independence (1776). Students identify parallel arguments and evaluate which document was more radical.',
            'Role Play: Students take on roles of Timothy Bigelow, Timothy Paine, Samuel Curtis, and other Worcester figures on September 6, 1774. Using provided historical details, they reenact the confrontation on the Common, exploring the motivations and fears of each participant.',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Write a two-paragraph argument essay answering the question: "Should September 6, 1774, be considered the true beginning of the American Revolution?" Your essay must reference at least two specific events from Worcester\'s history and explain how they constituted acts of revolution.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Class discussion: What does it mean to "overthrow" a government? Does it require violence, or can it be done through organized political action? How did Worcester\'s example demonstrate that revolution can begin with institutions, not battles? Exit ticket: Name one way the Worcester patriots challenged royal authority before Lexington and Concord.',
        },
        differentiation: {
          struggling: 'Provide a Venn diagram template comparing the Worcester Resolves and the Declaration of Independence. Pre-assign roles for the role play with character cards explaining each person\'s background and motivations.',
          advanced: 'Research Ray Raphael\'s argument in "The First American Revolution" and write a critical review evaluating his thesis that the Revolution began in the countryside before it reached Boston.',
          ell: 'Provide a glossary of key terms (mandamus councillor, court closure, committee of correspondence, resolves). Use visual timelines and maps to support comprehension. Allow collaborative essay writing.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.1', 'RH.6-8.2', 'RH.6-8.6', 'WHST.6-8.1'],
        c3Framework: ['D2.His.1.6-8', 'D2.His.3.6-8', 'D2.His.5.6-8', 'D2.Civ.2.6-8'],
        note: 'Aligned to Common Core literacy standards for history/social studies and the C3 Framework for historical thinking and civic understanding.',
      },
    },
    create: {
      id: 'cmm2s5oo600e0p5g7qblidzqq',
      townId: WORCESTER_TOWN_ID,
      title: 'Revolution Before the Revolution: How Worcester Overthrew Royal Authority',
      slug: 'worcester-revolution-before-revolution',
      gradeRange: '6-8',
      estimatedDuration: '2-3 class periods',
      summary: 'Students examine how Worcester County\'s court closures and political organizing in 1774 effectively ended royal authority months before Lexington and Concord. Through primary source analysis and role-playing exercises, students explore the concept of "revolution before the Revolution" and evaluate whether the real American Revolution began not with a battle but with organized political defiance.',
      lessonData: {
        objectives: [
          'Analyze the Worcester County court closures and Paine resignation as acts of revolution',
          'Compare the political tactics used in Worcester with those used in Boston',
          'Evaluate the argument that the American Revolution began before shots were fired',
          'Understand the role of county conventions and committees of correspondence in coordinating resistance',
        ],
        essentialQuestions: [
          'When did the American Revolution really begin — at Lexington in 1775 or in Worcester in 1774?',
          'How did ordinary citizens in an inland town organize to overthrow royal authority?',
          'What made the Worcester court closures different from simple mob violence?',
          'How did the political organizations created in Worcester influence the broader independence movement?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Show students a timeline with two dates highlighted: September 6, 1774 (Worcester court closure and Paine resignation) and April 19, 1775 (Lexington and Concord). Ask: Which date should we call the beginning of the American Revolution? Why? Have students vote and defend their positions.',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'The Massachusetts Government Act of 1774 and what it changed about colonial governance',
            'The Worcester County Convention and the August 1774 Resolves',
            'The events of September 6, 1774: the forced resignation of Timothy Paine and the court closure',
            'How the committees of correspondence and the American Political Society organized the resistance',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Primary Source Analysis: Students examine excerpts from the Worcester Resolves (August 1774), comparing their language to the Declaration of Independence (1776). Students identify parallel arguments and evaluate which document was more radical.',
            'Role Play: Students take on roles of Timothy Bigelow, Timothy Paine, Samuel Curtis, and other Worcester figures on September 6, 1774. Using provided historical details, they reenact the confrontation on the Common, exploring the motivations and fears of each participant.',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Write a two-paragraph argument essay answering the question: "Should September 6, 1774, be considered the true beginning of the American Revolution?" Your essay must reference at least two specific events from Worcester\'s history and explain how they constituted acts of revolution.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Class discussion: What does it mean to "overthrow" a government? Does it require violence, or can it be done through organized political action? How did Worcester\'s example demonstrate that revolution can begin with institutions, not battles? Exit ticket: Name one way the Worcester patriots challenged royal authority before Lexington and Concord.',
        },
        differentiation: {
          struggling: 'Provide a Venn diagram template comparing the Worcester Resolves and the Declaration of Independence. Pre-assign roles for the role play with character cards explaining each person\'s background and motivations.',
          advanced: 'Research Ray Raphael\'s argument in "The First American Revolution" and write a critical review evaluating his thesis that the Revolution began in the countryside before it reached Boston.',
          ell: 'Provide a glossary of key terms (mandamus councillor, court closure, committee of correspondence, resolves). Use visual timelines and maps to support comprehension. Allow collaborative essay writing.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.1', 'RH.6-8.2', 'RH.6-8.6', 'WHST.6-8.1'],
        c3Framework: ['D2.His.1.6-8', 'D2.His.3.6-8', 'D2.His.5.6-8', 'D2.Civ.2.6-8'],
        note: 'Aligned to Common Core literacy standards for history/social studies and the C3 Framework for historical thinking and civic understanding.',
      },
    },
  });

  await prisma.lessonPlan.upsert({
    where: { id: 'cmm2s5oop00e1p5g74ynb9ab3' },
    update: {
      slug: 'worcester-voices-of-revolution',
      summary: 'Students analyze multiple perspectives on the Worcester confrontation of September 6, 1774, examining the experiences of patriots, Loyalists, and women to understand the Revolution as a complex social upheaval rather than a simple story of good versus evil. Through structured academic controversy and narrative writing, students develop empathy for historical actors while evaluating the justice of their actions.',
      lessonData: {
        objectives: [
          'Analyze the Worcester confrontation from multiple perspectives: patriot, Loyalist, and women on the home front',
          'Evaluate the ethical dimensions of political coercion in the name of liberty',
          'Understand the social and class dimensions of the Revolution in an inland Massachusetts town',
          'Write a historical narrative from a specific perspective using evidence from primary sources',
        ],
        essentialQuestions: [
          'Was it just to force Timothy Paine to resign his commission?',
          'How did the Revolution affect people differently based on their social position?',
          'What roles did women play in the Worcester patriot movement?',
          'Can political coercion be justified in the name of freedom?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Read aloud two short excerpts: one from a patriot describing the September 6 demonstration as a triumph of the people, and one from Timothy Paine describing it as mob tyranny. Ask students: Can both of these descriptions be true at the same time? How?',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'The social structure of Worcester: the Paine family\'s elite status vs. the artisan class represented by Bigelow',
            'The role of the American Political Society as a working-class political organization',
            'Women\'s contributions: spinning bees, supply organization, farm management during the war',
            'The Loyalist perspective: what Paine and others like him believed they were defending',
          ],
        },
        guidedPractice: {
          duration: '35 minutes',
          activities: [
            'Structured Academic Controversy: Students are assigned to argue either for or against the resolution "The Worcester patriots were justified in forcing Timothy Paine to resign." After presenting both sides, students switch positions and argue the opposite case. Finally, students seek consensus on a nuanced statement about the event.',
            'Evidence Gathering: Students read excerpts from William Lincoln\'s "History of Worcester" and other sources to gather specific details about the experiences of different groups during the confrontation.',
          ],
        },
        independentPractice: {
          duration: '30 minutes',
          assignment: 'Choose one of the following perspectives and write a 400-word first-person narrative account of September 6, 1774: (1) Timothy Bigelow leading the crowd; (2) Timothy Paine being forced to resign; (3) Mary Stearns watching from the edge of the Common. Your narrative must include at least three historically accurate details and convey the emotions and motivations of your chosen character.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Students share selected narratives, followed by discussion: How does the story of September 6 change depending on who is telling it? What does this teach us about how history is written and remembered? Exit ticket: Identify one thing you understood about the Worcester confrontation from a perspective you hadn\'t considered before.',
        },
        differentiation: {
          struggling: 'Provide character profile cards with background information, motivations, and key vocabulary for each perspective. Offer sentence starters for the narrative writing.',
          advanced: 'Research additional Loyalist perspectives from other Massachusetts towns and compare their experiences to Paine\'s. Write a comparative essay on the Loyalist experience across different communities.',
          ell: 'Provide a glossary of key terms and pre-teach vocabulary. Allow students to draft narratives in their first language before translating. Use graphic organizers to structure the narrative.',
        },
      },
      standards: {
        commonCore: ['RH.9-10.1', 'RH.9-10.6', 'RH.9-10.9', 'WHST.9-10.3'],
        c3Framework: ['D2.His.1.9-12', 'D2.His.4.9-12', 'D2.His.6.9-12', 'D2.Civ.10.9-12'],
        note: 'Aligned to Common Core literacy standards for history/social studies and the C3 Framework for historical thinking, perspective-taking, and civic deliberation.',
      },
    },
    create: {
      id: 'cmm2s5oop00e1p5g74ynb9ab3',
      townId: WORCESTER_TOWN_ID,
      title: 'Voices of Revolution: Multiple Perspectives on Worcester\'s September 6, 1774',
      slug: 'worcester-voices-of-revolution',
      gradeRange: '9-12',
      estimatedDuration: '3-4 class periods',
      summary: 'Students analyze multiple perspectives on the Worcester confrontation of September 6, 1774, examining the experiences of patriots, Loyalists, and women to understand the Revolution as a complex social upheaval rather than a simple story of good versus evil. Through structured academic controversy and narrative writing, students develop empathy for historical actors while evaluating the justice of their actions.',
      lessonData: {
        objectives: [
          'Analyze the Worcester confrontation from multiple perspectives: patriot, Loyalist, and women on the home front',
          'Evaluate the ethical dimensions of political coercion in the name of liberty',
          'Understand the social and class dimensions of the Revolution in an inland Massachusetts town',
          'Write a historical narrative from a specific perspective using evidence from primary sources',
        ],
        essentialQuestions: [
          'Was it just to force Timothy Paine to resign his commission?',
          'How did the Revolution affect people differently based on their social position?',
          'What roles did women play in the Worcester patriot movement?',
          'Can political coercion be justified in the name of freedom?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Read aloud two short excerpts: one from a patriot describing the September 6 demonstration as a triumph of the people, and one from Timothy Paine describing it as mob tyranny. Ask students: Can both of these descriptions be true at the same time? How?',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'The social structure of Worcester: the Paine family\'s elite status vs. the artisan class represented by Bigelow',
            'The role of the American Political Society as a working-class political organization',
            'Women\'s contributions: spinning bees, supply organization, farm management during the war',
            'The Loyalist perspective: what Paine and others like him believed they were defending',
          ],
        },
        guidedPractice: {
          duration: '35 minutes',
          activities: [
            'Structured Academic Controversy: Students are assigned to argue either for or against the resolution "The Worcester patriots were justified in forcing Timothy Paine to resign." After presenting both sides, students switch positions and argue the opposite case. Finally, students seek consensus on a nuanced statement about the event.',
            'Evidence Gathering: Students read excerpts from William Lincoln\'s "History of Worcester" and other sources to gather specific details about the experiences of different groups during the confrontation.',
          ],
        },
        independentPractice: {
          duration: '30 minutes',
          assignment: 'Choose one of the following perspectives and write a 400-word first-person narrative account of September 6, 1774: (1) Timothy Bigelow leading the crowd; (2) Timothy Paine being forced to resign; (3) Mary Stearns watching from the edge of the Common. Your narrative must include at least three historically accurate details and convey the emotions and motivations of your chosen character.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Students share selected narratives, followed by discussion: How does the story of September 6 change depending on who is telling it? What does this teach us about how history is written and remembered? Exit ticket: Identify one thing you understood about the Worcester confrontation from a perspective you hadn\'t considered before.',
        },
        differentiation: {
          struggling: 'Provide character profile cards with background information, motivations, and key vocabulary for each perspective. Offer sentence starters for the narrative writing.',
          advanced: 'Research additional Loyalist perspectives from other Massachusetts towns and compare their experiences to Paine\'s. Write a comparative essay on the Loyalist experience across different communities.',
          ell: 'Provide a glossary of key terms and pre-teach vocabulary. Allow students to draft narratives in their first language before translating. Use graphic organizers to structure the narrative.',
        },
      },
      standards: {
        commonCore: ['RH.9-10.1', 'RH.9-10.6', 'RH.9-10.9', 'WHST.9-10.3'],
        c3Framework: ['D2.His.1.9-12', 'D2.His.4.9-12', 'D2.His.6.9-12', 'D2.Civ.10.9-12'],
        note: 'Aligned to Common Core literacy standards for history/social studies and the C3 Framework for historical thinking, perspective-taking, and civic deliberation.',
      },
    },
  });

  // --- 1 NEW LESSON ---

  await prisma.lessonPlan.upsert({
    where: { id: 'worcester-lesson-printing-persuasion' },
    update: {},
    create: {
      id: 'worcester-lesson-printing-persuasion',
      townId: WORCESTER_TOWN_ID,
      title: 'The Power of the Press: Isaiah Thomas, the Massachusetts Spy, and the Art of Revolutionary Persuasion',
      slug: 'worcester-printing-persuasion',
      gradeRange: '7-10',
      estimatedDuration: '2-3 class periods',
      summary: 'Students investigate the role of the printing press in the American Revolution through the story of Isaiah Thomas and the Massachusetts Spy. By analyzing primary source newspaper excerpts, creating their own broadsides, and debating the ethics of partisan journalism, students explore how printed media shaped public opinion and mobilized resistance in eighteenth-century America.',
      lessonData: {
        objectives: [
          'Explain the role of the printing press as a tool of political persuasion in the Revolution',
          'Analyze the rhetorical techniques used by Isaiah Thomas in the Massachusetts Spy',
          'Evaluate the ethical responsibilities of the press in a time of political crisis',
          'Create a historically informed broadside or newspaper using Revolutionary-era persuasive techniques',
        ],
        essentialQuestions: [
          'How did Isaiah Thomas and the Massachusetts Spy help make the Revolution happen?',
          'What persuasive techniques did Revolutionary-era printers use to shape public opinion?',
          'Should the press be a neutral observer or an active participant in political movements?',
          'How does the role of the press in the Revolution compare to the role of media today?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Display the masthead of the Massachusetts Spy with its motto "Open to all parties, but influenced by none" alongside an excerpt from a fiercely anti-British editorial from the same paper. Ask students: Is the motto honest? Should it be? Discuss whether a newspaper can be both objective and partisan, and whether that distinction mattered in 1775.',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'Isaiah Thomas\'s background: apprentice printer, self-taught typographer, founder of the Massachusetts Spy',
            'How newspapers worked in the eighteenth century: limited circulation, shared readership, public readings at taverns',
            'The relocation of the Spy from Boston to Worcester in April 1775 and the first account of Lexington and Concord',
            'Persuasive techniques in Revolutionary printing: emotional language, symbolic imagery, selective reporting, the use of pseudonyms',
          ],
        },
        guidedPractice: {
          duration: '35 minutes',
          activities: [
            'Source Analysis Stations: Students rotate through four stations, each featuring a different primary source from the Massachusetts Spy or other Revolutionary-era publications. At each station, they identify the persuasive techniques used (emotional appeal, logical argument, appeal to authority, use of imagery) and evaluate the source\'s effectiveness.',
            'Technique Workshop: Using a graphic organizer, students catalog the persuasive techniques they identified and compare them to techniques used in modern media (social media posts, news headlines, political advertisements).',
          ],
        },
        independentPractice: {
          duration: '30 minutes',
          assignment: 'Create a broadside (a single-sheet printed announcement) for one of the following events: (1) the forced resignation of Timothy Paine on September 6, 1774; (2) the relocation of the Massachusetts Spy to Worcester; (3) the reading of the Declaration of Independence in Worcester on July 24, 1776. Your broadside must use at least three persuasive techniques identified in the guided practice, include a headline, body text, and an illustration or decorative border, and be historically accurate in its content.',
        },
        closure: {
          duration: '15 minutes',
          activity: 'Gallery walk: Students display their broadsides and circulate to read each other\'s work. Class discussion: How does creating propaganda help you understand how propaganda works? What responsibilities do people who control information have to their audiences? Exit ticket: Name one persuasive technique used by Isaiah Thomas and explain how a similar technique is used in media today.',
        },
        differentiation: {
          struggling: 'Provide a broadside template with pre-drawn border and sections for headline, text, and illustration. Offer a word bank of period-appropriate vocabulary and sentence starters for the body text.',
          advanced: 'Compare Isaiah Thomas\'s Massachusetts Spy to a Loyalist newspaper such as the Massachusetts Gazette. Write an analysis of how the same event was covered differently by partisan printers on opposite sides.',
          ell: 'Provide a glossary of key terms (broadside, type, press, persuasion, propaganda, rhetoric). Allow students to work in pairs on the broadside. Provide model broadsides with annotations explaining each element.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.1', 'RH.6-8.6', 'RH.6-8.8', 'WHST.6-8.1', 'SL.8.1'],
        c3Framework: ['D2.His.1.6-8', 'D2.His.6.6-8', 'D2.His.12.6-8', 'D2.Civ.2.6-8'],
        note: 'Aligned to Common Core literacy standards for history/social studies, including media literacy and argumentation, and the C3 Framework for historical thinking and civic engagement.',
      },
    },
  });

  console.log('  Lessons seeded.');
}

// =============================================================================
// MAIN
// =============================================================================

async function main() {
  console.log('Seeding Worcester content...');

  await seedPeople();
  await seedPlaces();
  await seedEvents();
  await seedEventPeople();
  await seedStories();
  await seedLessons();

  console.log('Worcester content seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
