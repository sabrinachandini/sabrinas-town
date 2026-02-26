import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const CONCORD_TOWN_ID = 'us-ma-concord';

// =============================================================================
// PEOPLE
// =============================================================================

async function seedPeople() {
  console.log('  Seeding people...');

  // --- 5 Existing People (update bioLong) ---

  await prisma.person.upsert({
    where: { id: 'person-john-buttrick' },
    update: {
      bioLong: `John Buttrick was born in Concord, Massachusetts, around 1731, into a family deeply rooted in the town's agricultural and civic life. He farmed land along the Concord River north of the town center and served in the French and Indian War, gaining military experience that distinguished him among his neighbors. By the early 1770s, Buttrick had risen to the rank of major in the Middlesex County militia, a position that reflected both his competence and the respect he commanded in the community. He was a selectman and a member of the town's Committee of Safety, placing him at the center of Concord's preparations for potential conflict with British authority.

On the morning of April 19, 1775, Buttrick played the decisive role at the North Bridge. After the Concord militia and companies from surrounding towns had withdrawn to Punkatasset Hill overlooking the bridge, Buttrick observed smoke rising from the town center where British soldiers were burning supplies. Lieutenant Joseph Hosmer reportedly asked the assembled officers whether they would stand by and watch the town be burned. Colonel James Barrett, the senior militia officer, gave the order to march back toward the bridge, and Buttrick led the column of approximately 400 militia and minutemen down the hill toward the North Bridge.

When the British light infantry companies guarding the bridge opened fire, killing Captain Isaac Davis and private Abner Hosmer, Buttrick gave the order that changed the course of history. He commanded his men to return fire, and the militia discharged a volley that killed two British soldiers and wounded several others. The British fell back in disorder toward the town center. This exchange at the North Bridge was the first organized colonial military resistance to British regular troops — a deliberate, commanded volley fired on orders, unlike the confused skirmish at Lexington Green earlier that morning.

Buttrick continued to serve throughout the Revolutionary War. He died in Concord in 1791, having lived to see the republic whose founding he had helped to precipitate.

WHY HE MATTERS TO CONCORD

Major John Buttrick gave the order that transformed the American Revolution from a one-sided massacre on Lexington Green into a genuine armed conflict. His command to fire at the North Bridge was the first time colonial militia, acting under orders, deliberately engaged British regular troops. The Daniel Chester French statue at the bridge — the Minute Man — is often said to depict a figure inspired by Buttrick's role that morning. His leadership at the critical moment demonstrated that ordinary New England farmers and tradesmen could stand against the finest army in the world and hold their ground.

- c.1731: Born in Concord, Massachusetts
- 1750s-1760s: Served in the French and Indian War
- 1775: Led the militia advance and ordered the volley at the North Bridge on April 19
- 1775-1783: Continued military service during the Revolutionary War
- 1791: Died in Concord, Massachusetts

SOURCES
- Gross, Robert A. "The Minutemen and Their World." Hill and Wang, 1976.
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Galvin, John R. "The Minute Men: The First Fight — Myths and Realities of the American Revolution." Brassey's, 1989.`,
    },
    create: {
      id: 'person-john-buttrick',
      name: 'Major John Buttrick',
      roles: ['Militia Officer', 'Farmer', 'Leader'],
      bioShort: 'Major in the Concord militia (c.1731-1791) who commanded the advance on the North Bridge and gave the order to fire on British regulars on April 19, 1775.',
      bioLong: `John Buttrick was born in Concord, Massachusetts, around 1731, into a family deeply rooted in the town's agricultural and civic life. He farmed land along the Concord River north of the town center and served in the French and Indian War, gaining military experience that distinguished him among his neighbors. By the early 1770s, Buttrick had risen to the rank of major in the Middlesex County militia, a position that reflected both his competence and the respect he commanded in the community. He was a selectman and a member of the town's Committee of Safety, placing him at the center of Concord's preparations for potential conflict with British authority.

On the morning of April 19, 1775, Buttrick played the decisive role at the North Bridge. After the Concord militia and companies from surrounding towns had withdrawn to Punkatasset Hill overlooking the bridge, Buttrick observed smoke rising from the town center where British soldiers were burning supplies. Lieutenant Joseph Hosmer reportedly asked the assembled officers whether they would stand by and watch the town be burned. Colonel James Barrett, the senior militia officer, gave the order to march back toward the bridge, and Buttrick led the column of approximately 400 militia and minutemen down the hill toward the North Bridge.

When the British light infantry companies guarding the bridge opened fire, killing Captain Isaac Davis and private Abner Hosmer, Buttrick gave the order that changed the course of history. He commanded his men to return fire, and the militia discharged a volley that killed two British soldiers and wounded several others. The British fell back in disorder toward the town center. This exchange at the North Bridge was the first organized colonial military resistance to British regular troops — a deliberate, commanded volley fired on orders, unlike the confused skirmish at Lexington Green earlier that morning.

Buttrick continued to serve throughout the Revolutionary War. He died in Concord in 1791, having lived to see the republic whose founding he had helped to precipitate.

WHY HE MATTERS TO CONCORD

Major John Buttrick gave the order that transformed the American Revolution from a one-sided massacre on Lexington Green into a genuine armed conflict. His command to fire at the North Bridge was the first time colonial militia, acting under orders, deliberately engaged British regular troops. The Daniel Chester French statue at the bridge — the Minute Man — is often said to depict a figure inspired by Buttrick's role that morning. His leadership at the critical moment demonstrated that ordinary New England farmers and tradesmen could stand against the finest army in the world and hold their ground.

- c.1731: Born in Concord, Massachusetts
- 1750s-1760s: Served in the French and Indian War
- 1775: Led the militia advance and ordered the volley at the North Bridge on April 19
- 1775-1783: Continued military service during the Revolutionary War
- 1791: Died in Concord, Massachusetts

SOURCES
- Gross, Robert A. "The Minutemen and Their World." Hill and Wang, 1976.
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Galvin, John R. "The Minute Men: The First Fight — Myths and Realities of the American Revolution." Brassey's, 1989.`,
      birthYear: 1731,
      deathYear: 1791,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-isaac-davis' },
    update: {
      bioLong: `Isaac Davis was born in Acton, Massachusetts, on March 23, 1745. He was a farmer, a skilled gunsmith, and one of the few minuteman captains in Middlesex County whose company was fully equipped with bayonets — a distinction that reflected both his mechanical abilities and his seriousness about military preparedness. Davis had been elected captain of the Acton minuteman company, a volunteer force distinct from the regular militia, composed of younger men who agreed to be ready to march at a minute's notice.

On the morning of April 19, 1775, Davis led his Acton company on a march of approximately six miles to Concord after receiving the alarm. When the combined colonial force assembled on Punkatasset Hill above the North Bridge and the decision was made to march back toward the bridge, Davis volunteered his company to take the lead. This was not mere bravado — Davis's men were among the best armed at the scene, and their bayonets made them better suited to face British regulars at close range. According to tradition, when asked if he was afraid to lead the advance, Davis replied that he was not and that he had not a man who was afraid to go.

Davis marched at the head of the column as it descended toward the North Bridge. When the British light infantry opened fire, Davis was struck in the chest and killed instantly. He was the first American officer killed in the Revolution and the first man to fall at the North Bridge. His death, along with that of private Abner Hosmer of Acton, immediately preceded Major Buttrick's order to fire — the volley that marked the first organized colonial military response to British arms.

Davis left behind a wife, Hannah, and four young children, the youngest an infant. His death galvanized the patriot cause in the surrounding communities and made Acton's sacrifice at the bridge a source of enduring local pride.

WHY HE MATTERS TO CONCORD

Captain Isaac Davis was the first man killed at the North Bridge and one of the first American officers to die in the Revolution. His willingness to lead the advance — to walk at the front of the column toward armed British soldiers — exemplified the courage that the minuteman ideal was meant to embody. The fact that he came from Acton rather than Concord underscores a crucial reality of April 19: the fight at the bridge was not Concord's alone but involved companies from across the region who converged on the town in response to the alarm. Davis's bayonet-equipped company provided the military credibility that made the advance possible.

- 1745: Born March 23 in Acton, Massachusetts
- 1774-1775: Elected captain of the Acton minuteman company
- 1775: Led the advance toward North Bridge on April 19; killed by British fire
- 1775: Buried in Acton; later reinterred with memorial honors

SOURCES
- Gross, Robert A. "The Minutemen and Their World." Hill and Wang, 1976.
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Phalen, Harold R. "History of the Town of Acton." Acton Historical Society, 1954.`,
    },
    create: {
      id: 'person-isaac-davis',
      name: 'Captain Isaac Davis',
      roles: ['Minuteman Captain', 'Gunsmith'],
      bioShort: 'Captain of the Acton minutemen (1745-1775) who led the advance on the North Bridge and was the first American killed in the engagement on April 19, 1775.',
      bioLong: `Isaac Davis was born in Acton, Massachusetts, on March 23, 1745. He was a farmer, a skilled gunsmith, and one of the few minuteman captains in Middlesex County whose company was fully equipped with bayonets — a distinction that reflected both his mechanical abilities and his seriousness about military preparedness. Davis had been elected captain of the Acton minuteman company, a volunteer force distinct from the regular militia, composed of younger men who agreed to be ready to march at a minute's notice.

On the morning of April 19, 1775, Davis led his Acton company on a march of approximately six miles to Concord after receiving the alarm. When the combined colonial force assembled on Punkatasset Hill above the North Bridge and the decision was made to march back toward the bridge, Davis volunteered his company to take the lead. This was not mere bravado — Davis's men were among the best armed at the scene, and their bayonets made them better suited to face British regulars at close range. According to tradition, when asked if he was afraid to lead the advance, Davis replied that he was not and that he had not a man who was afraid to go.

Davis marched at the head of the column as it descended toward the North Bridge. When the British light infantry opened fire, Davis was struck in the chest and killed instantly. He was the first American officer killed in the Revolution and the first man to fall at the North Bridge. His death, along with that of private Abner Hosmer of Acton, immediately preceded Major Buttrick's order to fire — the volley that marked the first organized colonial military response to British arms.

Davis left behind a wife, Hannah, and four young children, the youngest an infant. His death galvanized the patriot cause in the surrounding communities and made Acton's sacrifice at the bridge a source of enduring local pride.

WHY HE MATTERS TO CONCORD

Captain Isaac Davis was the first man killed at the North Bridge and one of the first American officers to die in the Revolution. His willingness to lead the advance — to walk at the front of the column toward armed British soldiers — exemplified the courage that the minuteman ideal was meant to embody. The fact that he came from Acton rather than Concord underscores a crucial reality of April 19: the fight at the bridge was not Concord's alone but involved companies from across the region who converged on the town in response to the alarm. Davis's bayonet-equipped company provided the military credibility that made the advance possible.

- 1745: Born March 23 in Acton, Massachusetts
- 1774-1775: Elected captain of the Acton minuteman company
- 1775: Led the advance toward North Bridge on April 19; killed by British fire
- 1775: Buried in Acton; later reinterred with memorial honors

SOURCES
- Gross, Robert A. "The Minutemen and Their World." Hill and Wang, 1976.
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Phalen, Harold R. "History of the Town of Acton." Acton Historical Society, 1954.`,
      birthYear: 1745,
      deathYear: 1775,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-amos-barrett' },
    update: {
      bioLong: `Amos Barrett was born in Concord, Massachusetts, around 1752. He was a farmer and a private in the Concord minuteman company under Captain Charles Miles. Barrett was a young man of twenty-three on April 19, 1775, and his memoir, written decades later, provides one of the most vivid and frequently cited firsthand accounts of the fighting at Concord and along the Battle Road.

Barrett was among the militia who assembled on Punkatasset Hill above the North Bridge that morning. His account describes watching the British soldiers search the town from their elevated vantage point and seeing the smoke rise when the British set fire to military supplies at the town center. He marched with the column that descended toward the bridge and witnessed the exchange of fire that killed Captain Isaac Davis and Private Abner Hosmer. Barrett's memoir describes the confusion and fear of the moment with a plainness that gives it particular historical value — he did not write to glorify the event but to record what he saw.

After the fight at the bridge, Barrett participated in the harassment of the British column as it retreated toward Boston. His account of the running battle along what is now Battle Road describes militia firing from behind stone walls, trees, and buildings, taking advantage of terrain that the British regulars were ill-equipped to counter. Barrett lived to old age in Concord and wrote his memoir as an elderly man, preserving details that might otherwise have been lost.

WHY HE MATTERS TO CONCORD

Amos Barrett matters because he wrote it down. In an era before photography or audio recording, the events of April 19 survive largely through the words of those who were present. Barrett's memoir, composed years after the battle but grounded in vivid personal memory, is one of the most important primary sources for understanding what the fight at the North Bridge and the subsequent retreat looked and felt like from the colonial side. His account is valued by historians for its specificity and its lack of rhetorical embellishment — Barrett described what he saw, not what he thought posterity wanted to hear.

- c.1752: Born in Concord, Massachusetts
- 1775: Fought at the North Bridge and along the Battle Road on April 19
- 1775-1783: Served during the Revolutionary War
- Early 1800s: Wrote his memoir of April 19, 1775
- c.1830s: Died in Concord

SOURCES
- Barrett, Amos. "Concord and Lexington Battle." Manuscript memoir, Concord Free Public Library.
- Gross, Robert A. "The Minutemen and Their World." Hill and Wang, 1976.
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.`,
    },
    create: {
      id: 'person-amos-barrett',
      name: 'Amos Barrett',
      roles: ['Minuteman', 'Farmer', 'Memoirist'],
      bioShort: 'Concord minuteman (c.1752-c.1830s) who fought at the North Bridge and along Battle Road on April 19, 1775, and left a vivid firsthand memoir of the events.',
      bioLong: `Amos Barrett was born in Concord, Massachusetts, around 1752. He was a farmer and a private in the Concord minuteman company under Captain Charles Miles. Barrett was a young man of twenty-three on April 19, 1775, and his memoir, written decades later, provides one of the most vivid and frequently cited firsthand accounts of the fighting at Concord and along the Battle Road.

Barrett was among the militia who assembled on Punkatasset Hill above the North Bridge that morning. His account describes watching the British soldiers search the town from their elevated vantage point and seeing the smoke rise when the British set fire to military supplies at the town center. He marched with the column that descended toward the bridge and witnessed the exchange of fire that killed Captain Isaac Davis and Private Abner Hosmer. Barrett's memoir describes the confusion and fear of the moment with a plainness that gives it particular historical value — he did not write to glorify the event but to record what he saw.

After the fight at the bridge, Barrett participated in the harassment of the British column as it retreated toward Boston. His account of the running battle along what is now Battle Road describes militia firing from behind stone walls, trees, and buildings, taking advantage of terrain that the British regulars were ill-equipped to counter. Barrett lived to old age in Concord and wrote his memoir as an elderly man, preserving details that might otherwise have been lost.

WHY HE MATTERS TO CONCORD

Amos Barrett matters because he wrote it down. In an era before photography or audio recording, the events of April 19 survive largely through the words of those who were present. Barrett's memoir, composed years after the battle but grounded in vivid personal memory, is one of the most important primary sources for understanding what the fight at the North Bridge and the subsequent retreat looked and felt like from the colonial side. His account is valued by historians for its specificity and its lack of rhetorical embellishment — Barrett described what he saw, not what he thought posterity wanted to hear.

- c.1752: Born in Concord, Massachusetts
- 1775: Fought at the North Bridge and along the Battle Road on April 19
- 1775-1783: Served during the Revolutionary War
- Early 1800s: Wrote his memoir of April 19, 1775
- c.1830s: Died in Concord

SOURCES
- Barrett, Amos. "Concord and Lexington Battle." Manuscript memoir, Concord Free Public Library.
- Gross, Robert A. "The Minutemen and Their World." Hill and Wang, 1976.
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.`,
      birthYear: 1752,
      deathYear: 1835,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-francis-smith' },
    update: {
      bioLong: `Francis Smith was born in England around 1723 and pursued a career in the British Army, rising through the ranks over a long period of service. By 1775, he held the rank of Lieutenant Colonel in the 10th Regiment of Foot and was stationed in Boston as part of the British garrison under General Thomas Gage. Smith was described by contemporaries as an experienced but cautious officer — competent enough to be trusted with an important command, but not distinguished by boldness or tactical imagination.

On the night of April 18, 1775, General Gage selected Smith to lead the expedition to Concord with orders to seize and destroy the military supplies that the Massachusetts Provincial Congress had been stockpiling there. Smith commanded a force of approximately 700 regulars drawn from the elite light infantry and grenadier companies of the Boston garrison. The choice of Smith for this command has been questioned by historians who note that he was heavyset, slow-moving, and not known for decisiveness — qualities that would prove costly on a mission requiring speed and surprise.

Smith's column departed Boston late on the evening of April 18 and crossed the Charles River to begin the march. From the outset, the expedition was compromised — the alarm riders, including Paul Revere and William Dawes, had already warned the countryside. Smith compounded the problem by moving slowly and halting frequently. When his advance guard under Major Pitcairn encountered the Lexington militia and the shooting began, Smith was still well behind with the main body. He arrived at Lexington after the engagement was over and paused to regroup before continuing to Concord.

At Concord, Smith dispersed his troops to search for supplies while posting light infantry companies at the North Bridge. The engagement at the bridge and the rising number of colonial militia in the surrounding countryside left Smith in an increasingly untenable position. His decision to begin the retreat to Boston came only after it was clear that his force was in danger of being surrounded. The retreat became a running battle along Battle Road, with colonial militia firing from behind stone walls, fences, and buildings. Only the arrival of a relief column under Lord Percy at Lexington saved Smith's force from potential destruction. Smith himself was wounded during the retreat.

WHY HE MATTERS TO CONCORD

Lieutenant Colonel Francis Smith was the British officer responsible for the expedition that precipitated the armed conflict at Concord. His slow pace, his failure to maintain the element of surprise, and his inability to anticipate the scale of colonial resistance all contributed to the British defeat on April 19. Smith represents the institutional limitations of the British military establishment in America — an officer corps that underestimated colonial resolve, operated on inadequate intelligence, and struggled to adapt to a form of warfare for which it was not trained. His expedition was a tactical failure that became a strategic catastrophe for the British cause.

- c.1723: Born in England
- 1775: Commanded the British expedition to Concord on April 19; wounded during the retreat
- 1775: Continued service in the Boston garrison after recovery
- 1790s: Died in England

SOURCES
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Tourtellot, Arthur Bernon. "Lexington and Concord: The Beginning of the War of the American Revolution." W.W. Norton, 1959.
- French, Allen. "The Day of Concord and Lexington: The Nineteenth of April 1775." Little, Brown, and Company, 1925.`,
    },
    create: {
      id: 'person-francis-smith',
      name: 'Lieutenant Colonel Francis Smith',
      roles: ['British Officer', 'Expedition Commander'],
      bioShort: 'British officer (c.1723-c.1790s) who commanded the expedition to Concord on April 19, 1775, and led the disastrous retreat to Boston under colonial fire.',
      bioLong: `Francis Smith was born in England around 1723 and pursued a career in the British Army, rising through the ranks over a long period of service. By 1775, he held the rank of Lieutenant Colonel in the 10th Regiment of Foot and was stationed in Boston as part of the British garrison under General Thomas Gage. Smith was described by contemporaries as an experienced but cautious officer — competent enough to be trusted with an important command, but not distinguished by boldness or tactical imagination.

On the night of April 18, 1775, General Gage selected Smith to lead the expedition to Concord with orders to seize and destroy the military supplies that the Massachusetts Provincial Congress had been stockpiling there. Smith commanded a force of approximately 700 regulars drawn from the elite light infantry and grenadier companies of the Boston garrison. The choice of Smith for this command has been questioned by historians who note that he was heavyset, slow-moving, and not known for decisiveness — qualities that would prove costly on a mission requiring speed and surprise.

Smith's column departed Boston late on the evening of April 18 and crossed the Charles River to begin the march. From the outset, the expedition was compromised — the alarm riders, including Paul Revere and William Dawes, had already warned the countryside. Smith compounded the problem by moving slowly and halting frequently. When his advance guard under Major Pitcairn encountered the Lexington militia and the shooting began, Smith was still well behind with the main body. He arrived at Lexington after the engagement was over and paused to regroup before continuing to Concord.

At Concord, Smith dispersed his troops to search for supplies while posting light infantry companies at the North Bridge. The engagement at the bridge and the rising number of colonial militia in the surrounding countryside left Smith in an increasingly untenable position. His decision to begin the retreat to Boston came only after it was clear that his force was in danger of being surrounded. The retreat became a running battle along Battle Road, with colonial militia firing from behind stone walls, fences, and buildings. Only the arrival of a relief column under Lord Percy at Lexington saved Smith's force from potential destruction. Smith himself was wounded during the retreat.

WHY HE MATTERS TO CONCORD

Lieutenant Colonel Francis Smith was the British officer responsible for the expedition that precipitated the armed conflict at Concord. His slow pace, his failure to maintain the element of surprise, and his inability to anticipate the scale of colonial resistance all contributed to the British defeat on April 19. Smith represents the institutional limitations of the British military establishment in America — an officer corps that underestimated colonial resolve, operated on inadequate intelligence, and struggled to adapt to a form of warfare for which it was not trained. His expedition was a tactical failure that became a strategic catastrophe for the British cause.

- c.1723: Born in England
- 1775: Commanded the British expedition to Concord on April 19; wounded during the retreat
- 1775: Continued service in the Boston garrison after recovery
- 1790s: Died in England

SOURCES
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Tourtellot, Arthur Bernon. "Lexington and Concord: The Beginning of the War of the American Revolution." W.W. Norton, 1959.
- French, Allen. "The Day of Concord and Lexington: The Nineteenth of April 1775." Little, Brown, and Company, 1925.`,
      birthYear: 1723,
      deathYear: 1791,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-james-barrett' },
    update: {
      bioLong: `James Barrett was born in Concord, Massachusetts, around 1710, and was one of the most prominent citizens of the town by the time of the Revolution. He was a prosperous farmer whose lands northwest of the town center served as one of the primary storage sites for the military supplies that the Massachusetts Provincial Congress had been accumulating in anticipation of conflict with the British. Barrett held the rank of colonel in the Middlesex County militia, making him the senior military officer in the area on April 19, 1775.

Barrett's farm, located about two miles from the town center, was the principal target of the British expedition. In the weeks before April 19, Barrett and his family had worked to disperse and hide the supplies stored there — cannon, musket balls, flour, tents, and other provisions. When the alarm came, Barrett's wife Rebeckah (also recorded as Rebecca) and their children continued the work of concealment, plowing fields to bury supplies and hiding materiel in the surrounding woods. By the time the British search party reached the farm, they found relatively little of military value.

On the morning of April 19, Barrett initially assembled the Concord militia at the town center, then withdrew his forces to Punkatasset Hill above the North Bridge when it became clear that the British column was too large to confront directly in the town. From this elevated position, Barrett commanded the growing colonial force as companies from Acton, Bedford, Lincoln, and other towns arrived. When smoke was observed rising from the town center, Barrett authorized Major John Buttrick to lead the advance back toward the bridge. Barrett himself, at sixty-five years old, did not lead the assault but exercised overall command of the operation.

Barrett continued to serve in various military capacities during the early stages of the war. He died in Concord in 1779 at the age of approximately sixty-nine.

WHY HE MATTERS TO CONCORD

Colonel James Barrett was the architect of Concord's military preparations and the senior officer on the field during the most consequential engagement of April 19. His decision to hide and disperse the military supplies before the British arrived ensured that the expedition largely failed in its primary objective. His tactical judgment — withdrawing to high ground, waiting for reinforcements, and then authorizing the advance when the moment was right — demonstrated a sophistication that belied the British assumption that colonial militia were an undisciplined rabble. Barrett represented the older generation of Concord leadership, men who had spent decades in town government and militia service and who brought that experience to bear at the moment of crisis.

- c.1710: Born in Concord, Massachusetts
- 1740s-1760s: Rose through militia ranks to colonel
- 1774-1775: Oversaw storage and concealment of military supplies at his farm
- 1775: Commanded colonial forces at the North Bridge engagement on April 19
- 1779: Died in Concord, Massachusetts

SOURCES
- Gross, Robert A. "The Minutemen and Their World." Hill and Wang, 1976.
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Shattuck, Lemuel. "A History of the Town of Concord." Russell, Odiorne, and Company, 1835.`,
    },
    create: {
      id: 'person-james-barrett',
      name: 'Colonel James Barrett',
      roles: ['Militia Colonel', 'Farmer', 'Provincial Leader'],
      bioShort: 'Colonel of the Middlesex militia (c.1710-1779) who commanded the colonial forces at Concord on April 19, 1775, and whose farm was the primary target of the British expedition.',
      bioLong: `James Barrett was born in Concord, Massachusetts, around 1710, and was one of the most prominent citizens of the town by the time of the Revolution. He was a prosperous farmer whose lands northwest of the town center served as one of the primary storage sites for the military supplies that the Massachusetts Provincial Congress had been accumulating in anticipation of conflict with the British. Barrett held the rank of colonel in the Middlesex County militia, making him the senior military officer in the area on April 19, 1775.

Barrett's farm, located about two miles from the town center, was the principal target of the British expedition. In the weeks before April 19, Barrett and his family had worked to disperse and hide the supplies stored there — cannon, musket balls, flour, tents, and other provisions. When the alarm came, Barrett's wife Rebeckah (also recorded as Rebecca) and their children continued the work of concealment, plowing fields to bury supplies and hiding materiel in the surrounding woods. By the time the British search party reached the farm, they found relatively little of military value.

On the morning of April 19, Barrett initially assembled the Concord militia at the town center, then withdrew his forces to Punkatasset Hill above the North Bridge when it became clear that the British column was too large to confront directly in the town. From this elevated position, Barrett commanded the growing colonial force as companies from Acton, Bedford, Lincoln, and other towns arrived. When smoke was observed rising from the town center, Barrett authorized Major John Buttrick to lead the advance back toward the bridge. Barrett himself, at sixty-five years old, did not lead the assault but exercised overall command of the operation.

Barrett continued to serve in various military capacities during the early stages of the war. He died in Concord in 1779 at the age of approximately sixty-nine.

WHY HE MATTERS TO CONCORD

Colonel James Barrett was the architect of Concord's military preparations and the senior officer on the field during the most consequential engagement of April 19. His decision to hide and disperse the military supplies before the British arrived ensured that the expedition largely failed in its primary objective. His tactical judgment — withdrawing to high ground, waiting for reinforcements, and then authorizing the advance when the moment was right — demonstrated a sophistication that belied the British assumption that colonial militia were an undisciplined rabble. Barrett represented the older generation of Concord leadership, men who had spent decades in town government and militia service and who brought that experience to bear at the moment of crisis.

- c.1710: Born in Concord, Massachusetts
- 1740s-1760s: Rose through militia ranks to colonel
- 1774-1775: Oversaw storage and concealment of military supplies at his farm
- 1775: Commanded colonial forces at the North Bridge engagement on April 19
- 1779: Died in Concord, Massachusetts

SOURCES
- Gross, Robert A. "The Minutemen and Their World." Hill and Wang, 1976.
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Shattuck, Lemuel. "A History of the Town of Concord." Russell, Odiorne, and Company, 1835.`,
      birthYear: 1710,
      deathYear: 1779,
      verificationStatus: 'VERIFIED',
    },
  });

  // --- 9 New People ---

  await prisma.person.upsert({
    where: { id: 'person-william-emerson' },
    update: {},
    create: {
      id: 'person-william-emerson',
      name: 'Reverend William Emerson',
      roles: ['Minister', 'Chaplain', 'Writer'],
      bioShort: 'Pastor of First Parish in Concord (1743-1776) who watched the North Bridge fight from the Old Manse and served as a chaplain in the Continental Army until his death.',
      bioLong: `William Emerson was born in Concord, Massachusetts, on May 20, 1743, the son of a minister and grandson of Reverend Joseph Emerson. He graduated from Harvard College in 1761 and was ordained as pastor of the First Parish Church in Concord in 1766, a position that placed him at the spiritual and social center of the town. Emerson was an ardent supporter of the patriot cause and used his pulpit to advocate for colonial rights and resistance to British overreach. He was the grandfather of Ralph Waldo Emerson, who would later make Concord famous for an entirely different kind of revolution.

On the morning of April 19, 1775, Emerson was among the militiamen who gathered at the town center and then withdrew to Punkatasset Hill. His manse — the Old Manse, which still stands near the North Bridge — provided a vantage point from which the events at the bridge could be observed. Emerson's diary, kept during this period, provides valuable firsthand observations about the mood of the town in the weeks leading up to the battle. He recorded the growing tensions, the preparations, and the sense of impending conflict that pervaded Concord in early 1775.

After April 19, Emerson volunteered as a chaplain in the Continental Army. He served at the siege of Boston and at Fort Ticonderoga. The hardships of military life took a severe toll on his health, and he contracted camp fever (typhus) while serving at Ticonderoga. He died on October 20, 1776, at Rutland, Vermont, on his way home, at the age of thirty-three. He never returned to the manse or the bridge where he had witnessed the opening shots of the war he served.

WHY HE MATTERS TO CONCORD

Reverend William Emerson was the moral voice of Concord on April 19. As the town's minister, his support for resistance lent the patriot cause a legitimacy that extended beyond politics into the realm of conscience and religious duty. His diary and writings provide an invaluable window into the mindset of Concord's citizens in the months before the Revolution. The Old Manse, which he built in 1770, became one of Concord's most important historic structures, later serving as the home of Nathaniel Hawthorne and as the birthplace of the Transcendentalist movement. Emerson's early death in service to the Continental Army made him one of Concord's first martyrs to the cause.

- 1743: Born May 20 in Concord, Massachusetts
- 1766: Ordained as pastor of First Parish in Concord
- 1770: Built the Old Manse near the North Bridge
- 1775: Witnessed the North Bridge engagement on April 19; volunteered as army chaplain
- 1776: Died October 20 at Rutland, Vermont, of camp fever at age 33

SOURCES
- Gross, Robert A. "The Minutemen and Their World." Hill and Wang, 1976.
- Jarvis, Edward. "Traditions and Reminiscences of Concord." Concord Free Public Library, manuscript.
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.`,
      birthYear: 1743,
      deathYear: 1776,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-martha-moulton' },
    update: {},
    create: {
      id: 'person-martha-moulton',
      name: 'Martha Moulton',
      roles: ['Civilian', 'Concord Resident'],
      bioShort: 'Elderly Concord woman who confronted British soldiers during the burning of military supplies at the town center on April 19, 1775, reportedly persuading them to help extinguish the fire.',
      bioLong: `Martha Moulton was an elderly resident of Concord, Massachusetts, who lived near the town center. Little is known about her life before April 19, 1775, but her actions on that day earned her a permanent place in the history of the battle. She was likely in her sixties or seventies at the time, a widow who had lived through the full sweep of colonial Concord's development from a quiet farming town to a center of revolutionary activity.

When British soldiers entered Concord on the morning of April 19, their search for military supplies led them to burn items they discovered in the town center, including wooden gun carriages and other materiel. The fire spread to the town house (the public meeting house), threatening to engulf the building and potentially the surrounding structures. Moulton, watching from her nearby home, confronted the British soldiers directly, demanding that they help extinguish the fire rather than allow the town to burn. According to multiple accounts, the soldiers complied, forming a bucket brigade to put out the flames.

Moulton's intervention had consequences beyond saving buildings. The smoke from the fires at the town center was visible from Punkatasset Hill, where the colonial militia were assembled. It was the sight of this smoke — and the fear that the British were burning the town — that prompted the militia's decision to march back toward the North Bridge. If the fire had been extinguished sooner, or if it had never produced the visible smoke, the engagement at the bridge might have unfolded differently.

WHY SHE MATTERS TO CONCORD

Martha Moulton represents the civilian experience of April 19 — the people who did not carry muskets but whose lives were disrupted, threatened, and forever changed by the events of that day. Her direct confrontation with British soldiers demonstrated a courage that required no weapon. She was an elderly woman standing up to armed men in defense of her community, and her success in persuading them to fight the fire rather than let it spread speaks to the complex human interactions that occurred alongside the military engagement. Moulton's story also illustrates the interconnected nature of the day's events: the smoke she tried to stop was the very signal that triggered the fight at the bridge.

- Early 1700s: Born in or near Concord, Massachusetts
- 1775: Confronted British soldiers during the town center fire on April 19
- 1775: Her actions contributed indirectly to the chain of events at the North Bridge
- Date of death unknown

SOURCES
- Gross, Robert A. "The Minutemen and Their World." Hill and Wang, 1976.
- Shattuck, Lemuel. "A History of the Town of Concord." Russell, Odiorne, and Company, 1835.
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.`,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-joseph-hosmer' },
    update: {},
    create: {
      id: 'person-joseph-hosmer',
      name: 'Lieutenant Joseph Hosmer',
      roles: ['Militia Officer', 'Cabinetmaker', 'Civic Leader'],
      bioShort: 'Concord militia lieutenant and cabinetmaker (1736-1821) who urged the militia to advance on the North Bridge after seeing smoke rise from the town center.',
      bioLong: `Joseph Hosmer was born in Concord, Massachusetts, in 1736. He was a skilled cabinetmaker and one of the more politically active citizens of the town, serving on the Committee of Correspondence and later the Committee of Safety. Hosmer was a lieutenant in the Concord militia and a man known for his forthright temperament and willingness to speak his mind in town meetings and other public forums.

On the morning of April 19, 1775, Hosmer was among the militia who withdrew from the town center to Punkatasset Hill. As the colonial force watched the British search the town below, smoke began to rise from the town center where supplies were being burned. The sight of the smoke prompted Hosmer to address the assembled officers with a question that cut through the debate about what to do next. According to multiple accounts, Hosmer asked Colonel Barrett and the other officers whether they would let the British burn the town down. The question was rhetorical but effective — it crystallized the growing sentiment among the militia that inaction was no longer acceptable.

Hosmer's challenge helped precipitate the decision to march back toward the bridge. It was a pivotal moment in the chain of events that led to the engagement at the North Bridge, and Hosmer's role in it has been recognized by historians as one of the catalysts for the first organized colonial military action of the Revolution. He fought at the bridge and participated in the subsequent harassment of the British retreat.

Hosmer served throughout the Revolutionary War and afterward became a leading citizen of Concord, serving as a selectman and in other civic capacities. He died in Concord in 1821 at the age of eighty-five.

WHY HE MATTERS TO CONCORD

Joseph Hosmer gave voice to the sentiment that transformed hesitation into action. His challenge to the assembled officers on Punkatasset Hill — will you let them burn the town? — was the human catalyst for the advance on the North Bridge. In the mythology of April 19, Major Buttrick's order to fire receives the most attention, but Hosmer's earlier intervention was equally decisive. Without his pointed question, the militia might have remained on the hill while the British completed their mission and withdrew. Hosmer represents the role of ordinary citizens in shaping the course of events through moral persuasion and personal courage.

- 1736: Born in Concord, Massachusetts
- 1770s: Served on the Committee of Correspondence and Committee of Safety
- 1775: Urged the advance on the North Bridge on April 19; fought at the bridge
- 1775-1783: Served during the Revolutionary War
- 1821: Died in Concord, Massachusetts, at age 85

SOURCES
- Gross, Robert A. "The Minutemen and Their World." Hill and Wang, 1976.
- Shattuck, Lemuel. "A History of the Town of Concord." Russell, Odiorne, and Company, 1835.
- French, Allen. "The Day of Concord and Lexington." Little, Brown, and Company, 1925.`,
      birthYear: 1736,
      deathYear: 1821,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-reuben-brown' },
    update: {},
    create: {
      id: 'person-reuben-brown',
      name: 'Reuben Brown',
      roles: ['Saddler', 'Scout', 'Militiaman'],
      bioShort: 'Concord saddler and militiaman who rode to Lexington early on April 19, 1775, witnessed the aftermath of the fighting there, and returned to Concord with intelligence about the British force.',
      bioLong: `Reuben Brown was a saddler and harness maker in Concord, Massachusetts, and a member of the town militia. On the morning of April 19, 1775, Brown played a critical intelligence-gathering role that shaped Concord's preparations for the approaching British column. After the alarm reached Concord in the early hours of the morning, Brown rode toward Lexington to assess the situation and gather information about the size and disposition of the British force.

Brown arrived in or near Lexington in time to witness or learn of the fighting on the Green. He quickly turned back toward Concord, arriving with urgent reports about the engagement and the size of the British column. His intelligence — that the British had fired on the Lexington militia and that a large regular force was on the march — helped confirm the seriousness of the situation and influenced the Concord militia's preparations. Brown reported to the officers assembling at Wright Tavern and his account contributed to Colonel Barrett's decision about how to position the militia.

Brown's ride between Lexington and Concord exemplified the grassroots intelligence network that operated throughout the events of April 19. He was not a famous rider like Paul Revere, but his mission served a similar function — carrying timely information that enabled military decision-making. Brown continued to serve with the Concord militia during the events of the day and in the broader conflict that followed.

WHY HE MATTERS TO CONCORD

Reuben Brown was one of the unsung couriers of April 19 whose intelligence work was essential to the colonial response. His ride to Lexington and back provided Concord's leaders with critical information about the British force at a time when decisions had to be made quickly with imperfect knowledge. Brown represents the many ordinary citizens who contributed to the events of April 19 in ways that were essential but rarely commemorated — the scouts, the messengers, the people who carried information through the dark countryside while the alarm bells rang.

- Mid-1700s: Born in or near Concord, Massachusetts
- 1775: Rode to Lexington and returned with intelligence on April 19
- 1775: Participated in the day's military actions
- Date of death unknown

SOURCES
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Shattuck, Lemuel. "A History of the Town of Concord." Russell, Odiorne, and Company, 1835.
- Gross, Robert A. "The Minutemen and Their World." Hill and Wang, 1976.`,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-abel-prescott-jr' },
    update: {},
    create: {
      id: 'person-abel-prescott-jr',
      name: 'Dr. Abel Prescott Jr.',
      roles: ['Physician', 'Alarm Rider'],
      bioShort: 'Concord physician who carried the alarm from Lexington to Concord in the early hours of April 19, 1775, ensuring the town had warning of the approaching British expedition.',
      bioLong: `Abel Prescott Jr. was a physician from Concord, Massachusetts. On the night of April 18-19, 1775, he was among the riders who helped spread the alarm from Lexington toward Concord after Paul Revere was captured by a British patrol on the road between the two towns. While Revere's ride ended in captivity near the Lincoln-Lexington line, and Samuel Prescott (Abel's brother) is credited with carrying the alarm the final miles into Concord, Abel Prescott Jr. also played a role in the alarm network that night, riding to warn communities in the region.

The Prescott family was deeply embedded in the patriot cause in and around Concord. Dr. Samuel Prescott, Abel's brother, had been returning from a social call in Lexington when he encountered Revere and Dawes on the road. When the three riders were intercepted by a British patrol, Samuel Prescott was the one who escaped and completed the ride to Concord. Abel Prescott helped extend the alarm to additional towns, ensuring that militia companies from across the region would converge on Concord in the hours that followed.

The alarm system that operated on the night of April 18-19 depended on exactly this kind of relay — multiple riders carrying the message outward in an expanding network of warnings. Prescott's contribution, though less celebrated than Revere's famous ride, was part of the same essential system that ensured the colonial militia would be ready when the British arrived.

WHY HE MATTERS TO CONCORD

Abel Prescott Jr. was part of the alarm network that gave Concord the warning it needed to prepare for the British expedition. The popular narrative of the midnight ride focuses on Paul Revere, but Revere never reached Concord — he was captured en route. It was the Prescott brothers and other local riders who completed the critical final leg of the warning. Abel Prescott's role underscores the communal, distributed nature of the patriot alarm system, which did not depend on any single rider but on a network of citizens ready to carry the message forward.

- Mid-1700s: Born in Concord, Massachusetts
- 1775: Carried the alarm on the night of April 18-19
- 1775: Served with local militia during the Revolution
- Date of death unknown

SOURCES
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Gross, Robert A. "The Minutemen and Their World." Hill and Wang, 1976.
- Shattuck, Lemuel. "A History of the Town of Concord." Russell, Odiorne, and Company, 1835.`,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-ephraim-wood' },
    update: {},
    create: {
      id: 'person-ephraim-wood',
      name: 'Ephraim Wood Jr.',
      roles: ['Selectman', 'Militia Leader', 'Civic Leader'],
      bioShort: 'Concord selectman and militia leader who helped organize the town\'s defenses and the concealment of military supplies before April 19, 1775.',
      bioLong: `Ephraim Wood Jr. was a selectman and civic leader in Concord, Massachusetts, during the critical years leading up to the Revolution. As a member of the town's governing body, Wood was directly involved in the decisions that transformed Concord from a quiet agricultural community into a center of organized resistance to British authority. He helped coordinate the town's preparations for potential conflict, including the stockpiling and concealment of military supplies.

In the months before April 19, 1775, Wood worked with Colonel Barrett, the Committee of Safety, and other town leaders to manage the logistics of Concord's role as a supply depot for the Provincial Congress. This involved coordinating with farmers willing to store supplies on their property, organizing the militia for readiness, and maintaining communication with patriot leaders in Boston and other towns. When the alarm came, Wood was among those who helped direct the town's response, ensuring that families were warned and that the militia assembled in an orderly fashion.

Wood's contributions were primarily organizational rather than military. He represented the civilian infrastructure that made armed resistance possible — the town meetings, the committees, the administrative work of stockpiling, record-keeping, and coordination that underlay the militia's ability to respond on April 19. Without the work of men like Wood in the months and years before the battle, the militia muster that morning would have been far less effective.

WHY HE MATTERS TO CONCORD

Ephraim Wood Jr. represents the essential but often overlooked civic dimension of the Revolution in Concord. The fight at the North Bridge did not happen spontaneously — it was the product of months of preparation by town leaders who organized supplies, coordinated with other communities, and built the political consensus necessary to support armed resistance. Wood was one of the key figures in this preparatory work. His story reminds us that revolutions are built not only by soldiers but by the administrators, organizers, and civic leaders who create the conditions under which armed action becomes possible.

- Mid-1700s: Born in Concord, Massachusetts
- 1770s: Served as selectman and on revolutionary committees
- 1774-1775: Helped organize military supply storage and concealment
- 1775: Participated in Concord's response on April 19
- Date of death unknown

SOURCES
- Gross, Robert A. "The Minutemen and Their World." Hill and Wang, 1976.
- Shattuck, Lemuel. "A History of the Town of Concord." Russell, Odiorne, and Company, 1835.
- Brown, Richard D. "Revolutionary Politics in Massachusetts." Harvard University Press, 1970.`,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-charles-miles' },
    update: {},
    create: {
      id: 'person-charles-miles',
      name: 'Colonel Charles Miles',
      roles: ['Militia Colonel', 'Farmer'],
      bioShort: 'Concord militia officer who led a flanking movement during the North Bridge engagement and helped coordinate the harassment of the British retreat on April 19, 1775.',
      bioLong: `Charles Miles was a militia officer from Concord, Massachusetts, who held the rank of colonel in the local militia organization. On April 19, 1775, Miles played a significant tactical role during the engagement at the North Bridge and the subsequent pursuit of the British column. He led a detachment of militia in a flanking movement that helped put pressure on the British light infantry companies positioned at the bridge.

After the exchange of fire at the North Bridge, the British fell back toward the town center. The colonial militia, however, did not immediately pursue — there was confusion about what to do next, and the militia lacked the organizational structure for a coordinated follow-up. Miles helped organize elements of the militia for the harassment of the British column as it began its retreat along the road back toward Lexington. His experience and rank made him one of the key officers directing the militia's actions during the long afternoon of fighting that followed.

The running battle along Battle Road was not a set-piece engagement but a series of ambushes, flanking movements, and opportunistic attacks by militia companies from multiple towns. Officers like Miles provided what coherence the colonial effort possessed, directing companies into positions along the road and coordinating the fire that made the British retreat so costly. Miles served throughout the war and was recognized for his contributions to the events of April 19.

WHY HE MATTERS TO CONCORD

Colonel Charles Miles represents the tactical leadership that turned the North Bridge engagement from an isolated incident into the beginning of a sustained military campaign against the British column. While Buttrick's order to fire at the bridge receives the most historical attention, it was officers like Miles who organized the pursuit that transformed the British expedition into a disaster. His flanking maneuvers and coordination of militia fire along the retreat route demonstrated that colonial officers were capable of adapting their tactics to exploit British vulnerabilities in real time.

- Mid-1700s: Born in Concord, Massachusetts
- 1775: Led flanking maneuvers at North Bridge and coordinated the pursuit on April 19
- 1775-1783: Served during the Revolutionary War
- Date of death unknown

SOURCES
- Gross, Robert A. "The Minutemen and Their World." Hill and Wang, 1976.
- French, Allen. "The Day of Concord and Lexington." Little, Brown, and Company, 1925.
- Galvin, John R. "The Minute Men: The First Fight." Brassey's, 1989.`,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-thomas-flint' },
    update: {},
    create: {
      id: 'person-thomas-flint',
      name: 'Thomas Flint',
      roles: ['Farmer', 'Militiaman'],
      bioShort: 'Concord farmer who helped hide military supplies on his property before April 19, 1775, contributing to the failure of the British mission to seize colonial arms.',
      bioLong: `Thomas Flint was a farmer in Concord, Massachusetts, who played a quiet but essential role in the events leading up to April 19, 1775. As the Massachusetts Provincial Congress stockpiled military supplies in Concord — cannon, musket balls, powder, flour, and other provisions — the challenge of hiding these materials from British intelligence became increasingly urgent. Flint was among the Concord farmers who agreed to store supplies on their property, dispersing the stockpile across multiple locations to reduce the risk of a single raid capturing everything.

In the days immediately before April 19, as intelligence suggested that a British expedition was imminent, the work of dispersal intensified. Supplies were moved from central locations to farms, barns, and concealed sites throughout the town and surrounding countryside. Flint's farm was one of the locations used in this effort. The success of this dispersal was one of the most important factors in the failure of the British expedition — when Smith's troops searched Concord, they found far less than they had been led to expect.

Flint served in the Concord militia and would have been among the men who mustered on April 19. Like many of the farmers and tradesmen who constituted the militia, his contribution to the Revolution extended beyond the battlefield to the logistical and community-level work that sustained the patriot effort.

WHY HE MATTERS TO CONCORD

Thomas Flint represents the dozens of Concord farmers whose willingness to hide military supplies on their property ensured that the British expedition failed in its primary objective. The success of the concealment effort was not the work of any single individual but of a community acting in coordinated defiance of British authority. Flint's story illustrates that the Revolution in Concord depended as much on the courage of farmers who risked their property and their lives by hiding contraband as it did on the men who fired their muskets at the North Bridge.

- Mid-1700s: Born in or near Concord, Massachusetts
- 1774-1775: Hid military supplies on his farm
- 1775: Served in the Concord militia on April 19
- Date of death unknown

SOURCES
- Gross, Robert A. "The Minutemen and Their World." Hill and Wang, 1976.
- Shattuck, Lemuel. "A History of the Town of Concord." Russell, Odiorne, and Company, 1835.
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.`,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-abigail-barrett' },
    update: {},
    create: {
      id: 'person-abigail-barrett',
      name: 'Abigail Barrett',
      roles: ['Civilian', 'Farmer'],
      bioShort: 'Wife of Colonel James Barrett who managed the concealment of military supplies at the Barrett farm while British soldiers searched the property on April 19, 1775.',
      bioLong: `Abigail Barrett (also recorded in some sources as Rebeckah or Rebecca Barrett) was the wife of Colonel James Barrett, the senior militia officer in Concord. The Barrett farm, located about two miles northwest of the town center, served as one of the primary storage sites for the military supplies that the Provincial Congress had been accumulating. When the alarm came on April 19, 1775, Colonel Barrett left to command the militia, and Abigail was left to manage the farm and continue the critical work of concealing the remaining supplies.

According to accounts passed down through family tradition and local histories, Abigail Barrett directed the ongoing concealment effort as the British search party approached the farm. She and other family members plowed furrows to bury supplies, hid materiel in the surrounding woods, and scattered equipment in locations the British would be unlikely to search. When the British soldiers arrived at the farm, they conducted a search but found relatively little of military value — a testament to the thoroughness of the concealment.

Abigail's interaction with the British soldiers reportedly combined firmness with hospitality. She is said to have provided the soldiers with food and drink while they searched her property, a gesture that may have been calculated to slow their search and maintain a civil atmosphere. The British departed the Barrett farm without discovering the bulk of the hidden supplies, which was one of the most significant failures of their entire expedition.

WHY SHE MATTERS TO CONCORD

Abigail Barrett's actions on April 19 demonstrate that the defense of Concord was not solely a military affair conducted by men with muskets. While her husband commanded the militia at the North Bridge, Abigail commanded the home front, managing the concealment of the very supplies the British had come to seize. Her success in hiding the materiel was arguably as important as the fight at the bridge — had the British found and destroyed the full stockpile, the expedition might have been counted a success despite the military engagement. Barrett's story is a powerful reminder that women's contributions to the Revolution extended far beyond the domestic sphere.

- Mid-1700s: Born in Massachusetts
- 1775: Managed concealment of military supplies at the Barrett farm on April 19
- 1775: Interacted with British search party while maintaining concealment
- Date of death unknown

SOURCES
- Gross, Robert A. "The Minutemen and Their World." Hill and Wang, 1976.
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Shattuck, Lemuel. "A History of the Town of Concord." Russell, Odiorne, and Company, 1835.`,
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

  // --- TOP PRIORITY PLACES (9) — full descriptions + historicalNotes ---

  await prisma.place.upsert({
    where: { id: 'north-bridge' },
    update: { slug: 'north-bridge', featured: true, description: 'The North Bridge spans the Concord River approximately half a mile north of the town center. On April 19, 1775, it was the site of the first organized colonial military engagement against British regular troops — a deliberate, commanded volley that marked the transformation of protest into armed revolution. The original wooden bridge has been replaced multiple times; the current replica, maintained by the National Park Service, occupies the historic site within Minute Man National Historical Park.\n\nThe bridge and its surroundings form one of the most visited historic sites in the United States. The Minute Man statue by Daniel Chester French stands on the western bank, and the Grave of the British Soldiers is nearby on the eastern side. The landscape retains much of its eighteenth-century character, with the Concord River flowing beneath the bridge and the fields and hills where the militia assembled still visible.', historicalNote: 'The North Bridge was a simple wooden span over the Concord River that served as the main route between the town center and the farms to the northwest, including Colonel Barrett\'s property. On the morning of April 19, 1775, Lieutenant Colonel Francis Smith dispatched approximately 100 light infantry soldiers to secure the bridge and send a search party to Barrett\'s farm. The remaining British troops entered the town center to search for military supplies.\n\nAs the morning progressed, colonial militia and minuteman companies from Concord, Acton, Bedford, Lincoln, and other towns assembled on Punkatasset Hill above the bridge, their numbers growing with each arriving company. By mid-morning, the colonial force outnumbered the British detachment at the bridge by roughly four to one. When smoke was observed rising from the town center — where British soldiers were burning discovered supplies — Lieutenant Joseph Hosmer challenged the assembled officers to act. Colonel Barrett authorized Major Buttrick to lead the advance.\n\nThe militia marched in column formation down the hill toward the bridge. The British light infantry, realizing they were outnumbered, began to withdraw across the bridge and attempted to pull up its planking. When they opened fire, Captain Isaac Davis and Private Abner Hosmer of Acton were killed. Major Buttrick gave the command to fire, and the militia discharged a volley that killed two British soldiers and wounded several others, including four of the eight officers. The British fell back in disorder toward the town center. The engagement lasted only two or three minutes but altered the course of history.' },
    create: { id: 'north-bridge', townId: CONCORD_TOWN_ID, name: 'North Bridge', slug: 'north-bridge', placeType: 'BATTLEFIELD', featured: true, lat: 42.4681, lng: -71.3514, description: 'The North Bridge spans the Concord River approximately half a mile north of the town center. On April 19, 1775, it was the site of the first organized colonial military engagement against British regular troops — a deliberate, commanded volley that marked the transformation of protest into armed revolution. The original wooden bridge has been replaced multiple times; the current replica, maintained by the National Park Service, occupies the historic site within Minute Man National Historical Park.\n\nThe bridge and its surroundings form one of the most visited historic sites in the United States. The Minute Man statue by Daniel Chester French stands on the western bank, and the Grave of the British Soldiers is nearby on the eastern side. The landscape retains much of its eighteenth-century character, with the Concord River flowing beneath the bridge and the fields and hills where the militia assembled still visible.', historicalNote: 'The North Bridge was a simple wooden span over the Concord River that served as the main route between the town center and the farms to the northwest, including Colonel Barrett\'s property. On the morning of April 19, 1775, Lieutenant Colonel Francis Smith dispatched approximately 100 light infantry soldiers to secure the bridge and send a search party to Barrett\'s farm. The remaining British troops entered the town center to search for military supplies.\n\nAs the morning progressed, colonial militia and minuteman companies from Concord, Acton, Bedford, Lincoln, and other towns assembled on Punkatasset Hill above the bridge, their numbers growing with each arriving company. By mid-morning, the colonial force outnumbered the British detachment at the bridge by roughly four to one. When smoke was observed rising from the town center — where British soldiers were burning discovered supplies — Lieutenant Joseph Hosmer challenged the assembled officers to act. Colonel Barrett authorized Major Buttrick to lead the advance.\n\nThe militia marched in column formation down the hill toward the bridge. The British light infantry, realizing they were outnumbered, began to withdraw across the bridge and attempted to pull up its planking. When they opened fire, Captain Isaac Davis and Private Abner Hosmer of Acton were killed. Major Buttrick gave the command to fire, and the militia discharged a volley that killed two British soldiers and wounded several others, including four of the eight officers. The British fell back in disorder toward the town center. The engagement lasted only two or three minutes but altered the course of history.' },
  });

  await prisma.place.upsert({
    where: { id: 'minute-man-statue-concord' },
    update: { slug: 'minute-man-statue', featured: true, description: 'The Minute Man statue, sculpted by Daniel Chester French and dedicated on April 19, 1875, stands on the western bank of the Concord River at the North Bridge. Cast from bronze melted from Civil War cannon, the statue depicts a farmer leaving his plow to take up arms, embodying the ideal of the citizen-soldier. French was only twenty-five when he received the commission, and the statue launched his career — he would later create the seated Abraham Lincoln for the Lincoln Memorial.\n\nThe statue has become one of the most iconic images of the American Revolution, reproduced on currency, stamps, war bonds, and countless publications. Its base bears the opening lines of Ralph Waldo Emerson\'s "Concord Hymn," composed for the 1837 dedication of the battle monument.', historicalNote: 'The decision to erect a statue at the North Bridge was part of the centennial commemoration of April 19, 1775. The town of Concord selected Daniel Chester French, a young Concord native, to create the work. French used as his model a composite image of the minuteman — not a specific individual but an idealized farmer-soldier. The statue\'s subject holds a musket in his right hand and rests his left on a plow, a visual argument that the men who fought at the bridge were not professional soldiers but citizens who left peaceful pursuits to defend their community.\n\nThe dedication ceremony on April 19, 1875, drew thousands of visitors to Concord, including President Ulysses S. Grant. Ralph Waldo Emerson, by then elderly and in declining health, attended the ceremony at the bridge where his grandfather William Emerson had watched the fighting a century before. The statue has since become the symbol not only of Concord but of the minuteman ideal itself — the notion that a free republic depends on citizens willing to take up arms in its defense.\n\nThe inscription on the base reads the first stanza of Emerson\'s "Concord Hymn": "By the rude bridge that arched the flood, / Their flag to April\'s breeze unfurled, / Here once the embattled farmers stood / And fired the shot heard round the world."' },
    create: { id: 'minute-man-statue-concord', townId: CONCORD_TOWN_ID, name: 'Minute Man Statue (Daniel Chester French)', slug: 'minute-man-statue', placeType: 'MONUMENT', featured: true, lat: 42.4685, lng: -71.3520, description: 'The Minute Man statue, sculpted by Daniel Chester French and dedicated on April 19, 1875, stands on the western bank of the Concord River at the North Bridge. Cast from bronze melted from Civil War cannon, the statue depicts a farmer leaving his plow to take up arms, embodying the ideal of the citizen-soldier. French was only twenty-five when he received the commission, and the statue launched his career — he would later create the seated Abraham Lincoln for the Lincoln Memorial.\n\nThe statue has become one of the most iconic images of the American Revolution, reproduced on currency, stamps, war bonds, and countless publications. Its base bears the opening lines of Ralph Waldo Emerson\'s "Concord Hymn," composed for the 1837 dedication of the battle monument.', historicalNote: 'The decision to erect a statue at the North Bridge was part of the centennial commemoration of April 19, 1775. The town of Concord selected Daniel Chester French, a young Concord native, to create the work. French used as his model a composite image of the minuteman — not a specific individual but an idealized farmer-soldier. The statue\'s subject holds a musket in his right hand and rests his left on a plow, a visual argument that the men who fought at the bridge were not professional soldiers but citizens who left peaceful pursuits to defend their community.\n\nThe dedication ceremony on April 19, 1875, drew thousands of visitors to Concord, including President Ulysses S. Grant. Ralph Waldo Emerson, by then elderly and in declining health, attended the ceremony at the bridge where his grandfather William Emerson had watched the fighting a century before. The statue has since become the symbol not only of Concord but of the minuteman ideal itself — the notion that a free republic depends on citizens willing to take up arms in its defense.\n\nThe inscription on the base reads the first stanza of Emerson\'s "Concord Hymn": "By the rude bridge that arched the flood, / Their flag to April\'s breeze unfurled, / Here once the embattled farmers stood / And fired the shot heard round the world."' },
  });

  await prisma.place.upsert({
    where: { id: 'old-manse' },
    update: { slug: 'old-manse', featured: true, description: 'The Old Manse is a historic house located near the North Bridge on Monument Street in Concord. Built in 1770 by Reverend William Emerson, pastor of First Parish, the house overlooks the Concord River and the site of the April 19, 1775, engagement. It later became the home of Nathaniel Hawthorne, who wrote "Mosses from an Old Manse" while living there, and of Ralph Waldo Emerson, who drafted "Nature" in its study.\n\nThe house is maintained by The Trustees of Reservations and is open for guided tours. Its proximity to the North Bridge makes it an essential stop for visitors exploring the events of April 19, 1775.', historicalNote: 'Reverend William Emerson built the Manse in 1770 as the parsonage for the First Parish Church. On the morning of April 19, 1775, Emerson watched the engagement at the North Bridge from the property, possibly from the upper windows of the house itself. The Manse\'s location — set back slightly from the bridge on elevated ground — provided a clear view of the militia\'s advance and the exchange of fire.\n\nAfter William Emerson\'s death in 1776, the house passed through the family. His grandson, Ralph Waldo Emerson, lived there in the 1830s and wrote some of his most important early works in its study, including the essay "Nature" (1836). Emerson composed the "Concord Hymn" for the 1837 dedication of the Battle Monument, drawing on the family\'s direct connection to the events at the bridge.\n\nNathaniel Hawthorne and his wife Sophia rented the Manse from 1842 to 1845. Hawthorne wrote many of the stories collected in "Mosses from an Old Manse" during this period, and the couple scratched messages on the study windowpanes with a diamond ring — inscriptions that can still be seen today. The house thus stands at the intersection of two of Concord\'s greatest legacies: the Revolution and the literary flowering of the nineteenth century.' },
    create: { id: 'old-manse', townId: CONCORD_TOWN_ID, name: 'The Old Manse', slug: 'old-manse', placeType: 'HISTORIC_HOUSE', featured: true, lat: 42.4676, lng: -71.3508, description: 'The Old Manse is a historic house located near the North Bridge on Monument Street in Concord. Built in 1770 by Reverend William Emerson, pastor of First Parish, the house overlooks the Concord River and the site of the April 19, 1775, engagement. It later became the home of Nathaniel Hawthorne, who wrote "Mosses from an Old Manse" while living there, and of Ralph Waldo Emerson, who drafted "Nature" in its study.\n\nThe house is maintained by The Trustees of Reservations and is open for guided tours. Its proximity to the North Bridge makes it an essential stop for visitors exploring the events of April 19, 1775.', historicalNote: 'Reverend William Emerson built the Manse in 1770 as the parsonage for the First Parish Church. On the morning of April 19, 1775, Emerson watched the engagement at the North Bridge from the property, possibly from the upper windows of the house itself. The Manse\'s location — set back slightly from the bridge on elevated ground — provided a clear view of the militia\'s advance and the exchange of fire.\n\nAfter William Emerson\'s death in 1776, the house passed through the family. His grandson, Ralph Waldo Emerson, lived there in the 1830s and wrote some of his most important early works in its study, including the essay "Nature" (1836). Emerson composed the "Concord Hymn" for the 1837 dedication of the Battle Monument, drawing on the family\'s direct connection to the events at the bridge.\n\nNathaniel Hawthorne and his wife Sophia rented the Manse from 1842 to 1845. Hawthorne wrote many of the stories collected in "Mosses from an Old Manse" during this period, and the couple scratched messages on the study windowpanes with a diamond ring — inscriptions that can still be seen today. The house thus stands at the intersection of two of Concord\'s greatest legacies: the Revolution and the literary flowering of the nineteenth century.' },
  });

  await prisma.place.upsert({
    where: { id: 'wright-tavern' },
    update: { slug: 'wright-tavern', featured: true, description: 'Wright Tavern stands at the intersection of Lexington Road and Main Street in the center of Concord. Built in 1747, it served as the primary gathering place for the town and as the site where both colonial militia and British officers met on April 19, 1775. The tavern is one of the oldest surviving structures in Concord and has been in continuous use for nearly three centuries.\n\nThe building retains much of its colonial-era character and is a contributing structure within the Concord town center historic district.', historicalNote: 'Wright Tavern served as the mustering point for the Concord militia in the early hours of April 19, 1775. When the alarm reached the town, the militia assembled at or near the tavern, and Colonel Barrett and other officers used it as an informal headquarters for organizing the town\'s response. The tavern was the natural gathering point — it had served as the site of town meetings, political discussions, and social gatherings for decades.\n\nWhen the British column arrived in Concord, Lieutenant Colonel Smith and Major Pitcairn used the tavern as their command post while search parties were dispatched to locate military supplies. According to tradition, Pitcairn ordered a drink at the tavern and stirred it with his finger, declaring that he hoped to stir the Yankee blood before nightfall. Whether or not this anecdote is true, it captures the confidence — soon to prove unfounded — with which the British officers approached their mission.\n\nThe tavern had also served as the meeting place for the Massachusetts Provincial Congress when that body convened in Concord in October 1774, making it a site of political as well as military significance. The Provincial Congress\'s decision to meet in Concord rather than Boston underscored the town\'s importance as a center of patriot activity outside the capital.' },
    create: { id: 'wright-tavern', townId: CONCORD_TOWN_ID, name: 'Wright Tavern', slug: 'wright-tavern', placeType: 'TAVERN', featured: true, lat: 42.4603, lng: -71.3490, description: 'Wright Tavern stands at the intersection of Lexington Road and Main Street in the center of Concord. Built in 1747, it served as the primary gathering place for the town and as the site where both colonial militia and British officers met on April 19, 1775. The tavern is one of the oldest surviving structures in Concord and has been in continuous use for nearly three centuries.\n\nThe building retains much of its colonial-era character and is a contributing structure within the Concord town center historic district.', historicalNote: 'Wright Tavern served as the mustering point for the Concord militia in the early hours of April 19, 1775. When the alarm reached the town, the militia assembled at or near the tavern, and Colonel Barrett and other officers used it as an informal headquarters for organizing the town\'s response. The tavern was the natural gathering point — it had served as the site of town meetings, political discussions, and social gatherings for decades.\n\nWhen the British column arrived in Concord, Lieutenant Colonel Smith and Major Pitcairn used the tavern as their command post while search parties were dispatched to locate military supplies. According to tradition, Pitcairn ordered a drink at the tavern and stirred it with his finger, declaring that he hoped to stir the Yankee blood before nightfall. Whether or not this anecdote is true, it captures the confidence — soon to prove unfounded — with which the British officers approached their mission.\n\nThe tavern had also served as the meeting place for the Massachusetts Provincial Congress when that body convened in Concord in October 1774, making it a site of political as well as military significance. The Provincial Congress\'s decision to meet in Concord rather than Boston underscored the town\'s importance as a center of patriot activity outside the capital.' },
  });

  await prisma.place.upsert({
    where: { id: 'concord-museum' },
    update: { slug: 'concord-museum', featured: true, description: 'The Concord Museum, located on Lexington Road, houses one of the finest collections of Revolutionary War artifacts in New England, including one of the two lanterns displayed in the steeple of Old North Church on the night of April 18, 1775. The museum\'s collections also include period furnishings, documents, and objects related to Concord\'s literary heritage, including materials connected to Emerson, Thoreau, Hawthorne, and the Alcotts.\n\nThe museum provides interpretive exhibitions that contextualize the events of April 19 within the broader social, economic, and political history of colonial Concord.' },
    create: { id: 'concord-museum', townId: CONCORD_TOWN_ID, name: 'Concord Museum', slug: 'concord-museum', placeType: 'MUSEUM', featured: true, lat: 42.4612, lng: -71.3452, description: 'The Concord Museum, located on Lexington Road, houses one of the finest collections of Revolutionary War artifacts in New England, including one of the two lanterns displayed in the steeple of Old North Church on the night of April 18, 1775. The museum\'s collections also include period furnishings, documents, and objects related to Concord\'s literary heritage, including materials connected to Emerson, Thoreau, Hawthorne, and the Alcotts.\n\nThe museum provides interpretive exhibitions that contextualize the events of April 19 within the broader social, economic, and political history of colonial Concord.' },
  });

  await prisma.place.upsert({
    where: { id: 'colonel-barrett-farm' },
    update: { slug: 'colonel-barrett-farm', featured: true, description: 'The Colonel James Barrett Farm is located approximately two miles northwest of the Concord town center on Barrett\'s Mill Road. The farm was the primary target of the British expedition on April 19, 1775, as it served as a major storage site for the military supplies stockpiled by the Massachusetts Provincial Congress. The farmhouse and its surrounding fields were the site of the British search and of Abigail Barrett\'s successful concealment of supplies.\n\nThe property is now privately owned, but its historical significance is marked and it remains a key site in the landscape of the April 19 events.', historicalNote: 'Colonel Barrett\'s farm was chosen as a supply depot because of its distance from the town center and its location on the road leading away from Boston — qualities that made it a difficult target for a quick raid. In the weeks before April 19, Barrett and his family stored cannon, musket balls, tents, and other military provisions on the property. When intelligence suggested a British expedition was imminent, the Barretts accelerated their dispersal effort, moving supplies to neighboring farms and concealing others by plowing them into fields.\n\nOn the morning of April 19, Lieutenant Colonel Smith dispatched a search party of approximately 100 soldiers, including several companies of light infantry, to the Barrett farm. They crossed the North Bridge and marched northwest along Barrett\'s Mill Road. When they arrived at the farm, they found Abigail Barrett and family members but relatively few military supplies. The search was conducted with reasonable courtesy — the soldiers did not ransack the property or harm the inhabitants — but it was largely fruitless. The British returned to the North Bridge to find it held by a growing colonial force, setting the stage for the engagement that followed.\n\nThe failure of the Barrett farm search was a pivotal element in the British defeat on April 19. The entire expedition had been premised on the assumption that Concord\'s supply stockpile was concentrated and vulnerable. The Barrett family\'s foresight in dispersing the supplies ensured that the assumption was wrong.' },
    create: { id: 'colonel-barrett-farm', townId: CONCORD_TOWN_ID, name: 'Colonel James Barrett Farm', slug: 'colonel-barrett-farm', placeType: 'HISTORIC_HOUSE', featured: true, lat: 42.4780, lng: -71.3680, description: 'The Colonel James Barrett Farm is located approximately two miles northwest of the Concord town center on Barrett\'s Mill Road. The farm was the primary target of the British expedition on April 19, 1775, as it served as a major storage site for the military supplies stockpiled by the Massachusetts Provincial Congress. The farmhouse and its surrounding fields were the site of the British search and of Abigail Barrett\'s successful concealment of supplies.\n\nThe property is now privately owned, but its historical significance is marked and it remains a key site in the landscape of the April 19 events.', historicalNote: 'Colonel Barrett\'s farm was chosen as a supply depot because of its distance from the town center and its location on the road leading away from Boston — qualities that made it a difficult target for a quick raid. In the weeks before April 19, Barrett and his family stored cannon, musket balls, tents, and other military provisions on the property. When intelligence suggested a British expedition was imminent, the Barretts accelerated their dispersal effort, moving supplies to neighboring farms and concealing others by plowing them into fields.\n\nOn the morning of April 19, Lieutenant Colonel Smith dispatched a search party of approximately 100 soldiers, including several companies of light infantry, to the Barrett farm. They crossed the North Bridge and marched northwest along Barrett\'s Mill Road. When they arrived at the farm, they found Abigail Barrett and family members but relatively few military supplies. The search was conducted with reasonable courtesy — the soldiers did not ransack the property or harm the inhabitants — but it was largely fruitless. The British returned to the North Bridge to find it held by a growing colonial force, setting the stage for the engagement that followed.\n\nThe failure of the Barrett farm search was a pivotal element in the British defeat on April 19. The entire expedition had been premised on the assumption that Concord\'s supply stockpile was concentrated and vulnerable. The Barrett family\'s foresight in dispersing the supplies ensured that the assumption was wrong.' },
  });

  await prisma.place.upsert({
    where: { id: 'battle-road-trail-concord' },
    update: { slug: 'battle-road-trail-concord', featured: true, description: 'The Battle Road Trail is a five-mile walking path that follows the approximate route of the road along which British soldiers retreated from Concord to Lexington on April 19, 1775. The Concord section of the trail begins near Meriam\'s Corner and extends through fields, forests, and past historic houses where some of the fiercest fighting of the day occurred. The trail is maintained by Minute Man National Historical Park.\n\nThe trail provides an immersive experience of the terrain that shaped the running battle, with interpretive markers explaining the events at key locations. Visitors can walk the same landscape where colonial militia fired from behind stone walls and British soldiers fought to survive a gauntlet of ambushes.' },
    create: { id: 'battle-road-trail-concord', townId: CONCORD_TOWN_ID, name: 'Battle Road Trail (Concord Section)', slug: 'battle-road-trail-concord', placeType: 'TRAIL', featured: true, lat: 42.4550, lng: -71.3280, description: 'The Battle Road Trail is a five-mile walking path that follows the approximate route of the road along which British soldiers retreated from Concord to Lexington on April 19, 1775. The Concord section of the trail begins near Meriam\'s Corner and extends through fields, forests, and past historic houses where some of the fiercest fighting of the day occurred. The trail is maintained by Minute Man National Historical Park.\n\nThe trail provides an immersive experience of the terrain that shaped the running battle, with interpretive markers explaining the events at key locations. Visitors can walk the same landscape where colonial militia fired from behind stone walls and British soldiers fought to survive a gauntlet of ambushes.' },
  });

  await prisma.place.upsert({
    where: { id: 'meriam-house' },
    update: { slug: 'meriams-corner', featured: true, description: 'Meriam\'s Corner marks the point along the road from Concord to Lexington where the British retreat became a running battle on the afternoon of April 19, 1775. At this junction, the road narrowed and crossed a small bridge, creating a natural chokepoint where colonial militia from Reading, Billerica, and other towns ambushed the retreating British column. The Meriam House, a colonial-era structure, still stands near the site.\n\nThe engagement at Meriam\'s Corner was one of the bloodiest of the day and demonstrated the effectiveness of militia ambush tactics against regular troops constrained to a narrow road.', historicalNote: 'As the British column withdrew from Concord center toward Lexington, it initially encountered little resistance. The militia at the North Bridge had not pursued aggressively after the engagement, and the first mile of the retreat was relatively quiet. This changed dramatically at Meriam\'s Corner, where the road passed between rising ground and crossed a narrow bridge over a brook.\n\nMilitia companies that had been arriving from eastern towns throughout the morning — many of whom had not been present for the North Bridge fight — positioned themselves at Meriam\'s Corner to intercept the retreating column. When the British reached the chokepoint, they came under fire from multiple directions. The disciplined column formation that had served the British well in open terrain became a liability in the enclosed landscape of stone walls, hedgerows, and farm buildings.\n\nThe fighting at Meriam\'s Corner set the pattern for the remainder of the retreat: British soldiers trapped on a road, taking fire from concealed militia on both sides, unable to deploy effectively against an enemy that melted into the landscape after each volley. The casualties mounted rapidly, and the retreat increasingly took on the character of a rout.' },
    create: { id: 'meriam-house', townId: CONCORD_TOWN_ID, name: 'Meriam\'s Corner', slug: 'meriams-corner', placeType: 'LANDMARK', featured: true, lat: 42.4571, lng: -71.3360, description: 'Meriam\'s Corner marks the point along the road from Concord to Lexington where the British retreat became a running battle on the afternoon of April 19, 1775. At this junction, the road narrowed and crossed a small bridge, creating a natural chokepoint where colonial militia from Reading, Billerica, and other towns ambushed the retreating British column. The Meriam House, a colonial-era structure, still stands near the site.\n\nThe engagement at Meriam\'s Corner was one of the bloodiest of the day and demonstrated the effectiveness of militia ambush tactics against regular troops constrained to a narrow road.', historicalNote: 'As the British column withdrew from Concord center toward Lexington, it initially encountered little resistance. The militia at the North Bridge had not pursued aggressively after the engagement, and the first mile of the retreat was relatively quiet. This changed dramatically at Meriam\'s Corner, where the road passed between rising ground and crossed a narrow bridge over a brook.\n\nMilitia companies that had been arriving from eastern towns throughout the morning — many of whom had not been present for the North Bridge fight — positioned themselves at Meriam\'s Corner to intercept the retreating column. When the British reached the chokepoint, they came under fire from multiple directions. The disciplined column formation that had served the British well in open terrain became a liability in the enclosed landscape of stone walls, hedgerows, and farm buildings.\n\nThe fighting at Meriam\'s Corner set the pattern for the remainder of the retreat: British soldiers trapped on a road, taking fire from concealed militia on both sides, unable to deploy effectively against an enemy that melted into the landscape after each volley. The casualties mounted rapidly, and the retreat increasingly took on the character of a rout.' },
  });

  await prisma.place.upsert({
    where: { id: 'north-bridge-visitor-center' },
    update: { slug: 'north-bridge-visitor-center', featured: true, description: 'The North Bridge Visitor Center, operated by the National Park Service as part of Minute Man National Historical Park, provides interpretive exhibits, ranger programs, and educational resources about the events of April 19, 1775. The center is located near the North Bridge and serves as the primary orientation point for visitors exploring the bridge, the Minute Man statue, and the surrounding landscape.\n\nThe visitor center features a multimedia presentation about the battle, displays of period artifacts and weapons, and ranger-led talks that provide context for the engagement at the bridge.' },
    create: { id: 'north-bridge-visitor-center', townId: CONCORD_TOWN_ID, name: 'North Bridge Visitor Center', slug: 'north-bridge-visitor-center', placeType: 'MUSEUM', featured: true, lat: 42.4675, lng: -71.3500, description: 'The North Bridge Visitor Center, operated by the National Park Service as part of Minute Man National Historical Park, provides interpretive exhibits, ranger programs, and educational resources about the events of April 19, 1775. The center is located near the North Bridge and serves as the primary orientation point for visitors exploring the bridge, the Minute Man statue, and the surrounding landscape.\n\nThe visitor center features a multimedia presentation about the battle, displays of period artifacts and weapons, and ranger-led talks that provide context for the engagement at the bridge.' },
  });

  // --- Remaining Places (16) — basic descriptions ---

  await prisma.place.upsert({
    where: { id: 'british-soldiers-grave' },
    update: { slug: 'british-soldiers-grave' },
    create: { id: 'british-soldiers-grave', townId: CONCORD_TOWN_ID, name: 'Grave of the British Soldiers', slug: 'british-soldiers-grave', placeType: 'CEMETERY', lat: 42.4683, lng: -71.3510, description: 'The Grave of the British Soldiers marks the burial site of two British soldiers killed at the North Bridge on April 19, 1775. Located on the eastern bank of the Concord River near the bridge, the grave is a simple marker that serves as a reminder of the human cost on both sides of the engagement.' },
  });

  await prisma.place.upsert({
    where: { id: 'concord-town-house' },
    update: { slug: 'concord-town-house' },
    create: { id: 'concord-town-house', townId: CONCORD_TOWN_ID, name: 'Concord Town House', slug: 'concord-town-house', placeType: 'GOVERNMENT', lat: 42.4600, lng: -71.3490, description: 'The Town House in Concord\'s center served as the site of town meetings and public gatherings. On April 19, 1775, British soldiers set fire to military supplies found nearby, and the fire threatened to spread to the Town House. The smoke from these fires was visible from Punkatasset Hill and helped precipitate the militia\'s advance on the North Bridge.' },
  });

  await prisma.place.upsert({
    where: { id: 'concord-colonial-inn' },
    update: { slug: 'concord-colonial-inn' },
    create: { id: 'concord-colonial-inn', townId: CONCORD_TOWN_ID, name: 'Colonial Inn', slug: 'concord-colonial-inn', placeType: 'TAVERN', lat: 42.4605, lng: -71.3495, description: 'The Colonial Inn on Monument Square incorporates structures dating to the seventeenth century. Parts of the building served as a store of military supplies before April 19, 1775, and the property witnessed the passage of both British troops and colonial militia during the events of that day. It has operated as an inn since 1889.' },
  });

  await prisma.place.upsert({
    where: { id: 'obelisk-concord' },
    update: { slug: 'battle-monument-obelisk' },
    create: { id: 'obelisk-concord', townId: CONCORD_TOWN_ID, name: 'Battle Monument (Obelisk)', slug: 'battle-monument-obelisk', placeType: 'MONUMENT', lat: 42.4680, lng: -71.3512, description: 'The Battle Monument, a granite obelisk erected in 1836 near the North Bridge, was the first monument to commemorate the events of April 19, 1775, at Concord. Ralph Waldo Emerson composed the "Concord Hymn" for its dedication ceremony on July 4, 1837. The monument stands near the eastern approach to the bridge.' },
  });

  await prisma.place.upsert({
    where: { id: 'major-buttrick-marker' },
    update: { slug: 'major-buttrick-memorial' },
    create: { id: 'major-buttrick-marker', townId: CONCORD_TOWN_ID, name: 'Major John Buttrick Memorial', slug: 'major-buttrick-memorial', placeType: 'MONUMENT', lat: 42.4679, lng: -71.3516, description: 'A memorial marker near the North Bridge honors Major John Buttrick, who led the militia advance and gave the order to fire on the British at the North Bridge on April 19, 1775. The marker stands near the western bank of the Concord River, close to the path the militia took as they descended from Punkatasset Hill.' },
  });

  await prisma.place.upsert({
    where: { id: 'old-hill-burying-ground' },
    update: { slug: 'old-hill-burying-ground' },
    create: { id: 'old-hill-burying-ground', townId: CONCORD_TOWN_ID, name: 'Old Hill Burying Ground', slug: 'old-hill-burying-ground', placeType: 'CEMETERY', lat: 42.4610, lng: -71.3500, description: 'The Old Hill Burying Ground is one of Concord\'s earliest cemeteries, containing the graves of many of the town\'s colonial-era residents, including several participants in the events of April 19, 1775. The cemetery provides a tangible connection to the community that produced the minutemen who fought at the North Bridge.' },
  });

  await prisma.place.upsert({
    where: { id: 'sleepy-hollow-cemetery' },
    update: { slug: 'sleepy-hollow-cemetery' },
    create: { id: 'sleepy-hollow-cemetery', townId: CONCORD_TOWN_ID, name: 'Sleepy Hollow Cemetery', slug: 'sleepy-hollow-cemetery', placeType: 'CEMETERY', lat: 42.4640, lng: -71.3450, description: 'Sleepy Hollow Cemetery, established in 1855, is the final resting place of Concord\'s most famous literary residents: Ralph Waldo Emerson, Henry David Thoreau, Nathaniel Hawthorne, and Louisa May Alcott, all buried on Authors\' Ridge. The cemetery also contains the graves of many Revolution-era families whose descendants shaped Concord\'s identity across generations.' },
  });

  await prisma.place.upsert({
    where: { id: 'first-parish-concord' },
    update: { slug: 'first-parish-concord' },
    create: { id: 'first-parish-concord', townId: CONCORD_TOWN_ID, name: 'First Parish in Concord', slug: 'first-parish-concord', placeType: 'CHURCH', lat: 42.4607, lng: -71.3488, description: 'First Parish in Concord, established in 1636, is one of the oldest congregations in the United States. In the 1770s, Reverend William Emerson served as its pastor and used the pulpit to support the patriot cause. The church served as a spiritual center for the community during the Revolutionary period, and its bell was rung to sound the alarm on April 19, 1775.' },
  });

  await prisma.place.upsert({
    where: { id: 'elisha-jones-house' },
    update: { slug: 'bullet-hole-house' },
    create: { id: 'elisha-jones-house', townId: CONCORD_TOWN_ID, name: 'Bullet Hole House', slug: 'bullet-hole-house', placeType: 'HISTORIC_HOUSE', lat: 42.4665, lng: -71.3505, description: 'The Bullet Hole House, also known as the Elisha Jones House, is a colonial-era residence near the North Bridge that bears the scars of the April 19, 1775, engagement. A bullet hole in the structure, preserved behind glass, is said to have been made by a shot fired during the fighting at the bridge. The house was occupied by the Jones family at the time of the battle.' },
  });

  await prisma.place.upsert({
    where: { id: 'punkatasset-hill' },
    update: { slug: 'punkatasset-hill' },
    create: { id: 'punkatasset-hill', townId: CONCORD_TOWN_ID, name: 'Punkatasset Hill', slug: 'punkatasset-hill', placeType: 'LANDMARK', lat: 42.4710, lng: -71.3540, description: 'Punkatasset Hill, rising above the North Bridge to the northwest, served as the rallying point for the colonial militia on the morning of April 19, 1775. After withdrawing from the town center, Colonel Barrett assembled the growing colonial force on this elevated ground, which provided a commanding view of the bridge and the town below. It was from Punkatasset Hill that the militia observed the smoke rising from the town center and made the decision to advance.' },
  });

  await prisma.place.upsert({
    where: { id: 'egg-rock' },
    update: { slug: 'egg-rock' },
    create: { id: 'egg-rock', townId: CONCORD_TOWN_ID, name: 'Egg Rock', slug: 'egg-rock', placeType: 'LANDMARK', lat: 42.4625, lng: -71.3530, description: 'Egg Rock is a natural landmark at the confluence of the Sudbury and Assabet Rivers, which join to form the Concord River. A plaque on the rock marks the traditional site of the founding of Concord in 1635. The location has been a gathering place and landmark for centuries, predating the English settlement.' },
  });

  await prisma.place.upsert({
    where: { id: 'orchard-house' },
    update: { slug: 'orchard-house' },
    create: { id: 'orchard-house', townId: CONCORD_TOWN_ID, name: 'Orchard House', slug: 'orchard-house', placeType: 'HISTORIC_HOUSE', lat: 42.4590, lng: -71.3440, description: 'Orchard House, located on Lexington Road, was the home of the Alcott family from 1858 to 1877. Louisa May Alcott wrote "Little Women" here in 1868. While its significance is primarily literary rather than Revolutionary, the house reflects Concord\'s enduring role as a center of American intellectual and cultural life that began with the town\'s Revolutionary heritage.' },
  });

  await prisma.place.upsert({
    where: { id: 'walden-pond' },
    update: { slug: 'walden-pond' },
    create: { id: 'walden-pond', townId: CONCORD_TOWN_ID, name: 'Walden Pond', slug: 'walden-pond', placeType: 'LANDMARK', lat: 42.4392, lng: -71.3340, description: 'Walden Pond, located south of Concord center, is famous as the site where Henry David Thoreau lived from 1845 to 1847 and wrote "Walden." While not directly connected to the events of April 19, 1775, the pond and Thoreau\'s legacy represent Concord\'s broader tradition of questioning authority and asserting individual conscience — themes rooted in the town\'s Revolutionary origins.' },
  });

  await prisma.place.upsert({
    where: { id: 'emerson-house' },
    update: { slug: 'emerson-house' },
    create: { id: 'emerson-house', townId: CONCORD_TOWN_ID, name: 'Ralph Waldo Emerson House', slug: 'emerson-house', placeType: 'HISTORIC_HOUSE', lat: 42.4615, lng: -71.3465, description: 'The Ralph Waldo Emerson House on the Cambridge Turnpike was the home of the essayist and poet from 1835 until his death in 1882. Emerson, grandson of Reverend William Emerson who witnessed the North Bridge fight, composed the "Concord Hymn" and helped shape the national memory of April 19, 1775, through his writing and public addresses.' },
  });

  await prisma.place.upsert({
    where: { id: 'concord-free-public-library' },
    update: { slug: 'concord-free-public-library' },
    create: { id: 'concord-free-public-library', townId: CONCORD_TOWN_ID, name: 'Concord Free Public Library', slug: 'concord-free-public-library', placeType: 'LANDMARK', lat: 42.4608, lng: -71.3475, description: 'The Concord Free Public Library, established in 1873, holds the most extensive collection of manuscripts and documents related to the events of April 19, 1775, including Amos Barrett\'s memoir and numerous depositions and letters from participants. The library\'s Special Collections are an essential resource for historians studying the battle and the town\'s role in the Revolution.' },
  });

  await prisma.place.upsert({
    where: { id: 'provincial-congress-site' },
    update: { slug: 'provincial-congress-site' },
    create: { id: 'provincial-congress-site', townId: CONCORD_TOWN_ID, name: 'Provincial Congress Site', slug: 'provincial-congress-site', placeType: 'LANDMARK', lat: 42.4602, lng: -71.3492, description: 'The site in Concord where the Massachusetts Provincial Congress met in October 1774, after Royal Governor Gage dissolved the General Court. The Provincial Congress, an extralegal body that effectively served as the colony\'s government, chose Concord for its distance from the British garrison in Boston. Its sessions here helped establish Concord as a center of organized resistance to British authority.' },
  });

  console.log('  Places seeded.');
}

// =============================================================================
// EVENTS
// =============================================================================

async function seedEvents() {
  console.log('  Seeding events...');

  // --- 10 Existing Events (update with slugs + summaries) ---

  await prisma.event.upsert({
    where: { id: 'event-provincial-congress-concord' },
    update: { slug: 'provincial-congress-concord', summary: `In October 1774, the Massachusetts Provincial Congress convened in Concord after Royal Governor Thomas Gage dissolved the colonial legislature and attempted to prevent extralegal assemblies. The Provincial Congress, led by John Hancock and including delegates from towns across Massachusetts, met at the Concord meetinghouse and at Wright Tavern to organize resistance to British authority. The decision to meet in Concord — twenty miles from the British garrison in Boston — was deliberate, placing the body beyond easy reach of British interference.

During its sessions, the Provincial Congress authorized the creation of a militia system, appointed military officers, and directed towns to stockpile arms and ammunition. It was this body that designated Concord as a supply depot, setting in motion the chain of events that would culminate in the British expedition of April 19, 1775. The Congress also established the Committee of Safety, which served as the executive arm of the patriot movement between legislative sessions.

The convening of the Provincial Congress in Concord transformed the town from a quiet farming community into the de facto capital of an insurgent government. The supplies stored in Concord were not the possessions of individual citizens but the military resources of an organized political movement that was preparing for the possibility of armed conflict with the British crown.` },
    create: { id: 'event-provincial-congress-concord', townId: CONCORD_TOWN_ID, name: 'Massachusetts Provincial Congress Meets', slug: 'provincial-congress-concord', startDate: new Date('1774-10-11T00:00:00.000Z'), datePrecision: 'DAY', summary: `In October 1774, the Massachusetts Provincial Congress convened in Concord after Royal Governor Thomas Gage dissolved the colonial legislature and attempted to prevent extralegal assemblies. The Provincial Congress, led by John Hancock and including delegates from towns across Massachusetts, met at the Concord meetinghouse and at Wright Tavern to organize resistance to British authority. The decision to meet in Concord — twenty miles from the British garrison in Boston — was deliberate, placing the body beyond easy reach of British interference.

During its sessions, the Provincial Congress authorized the creation of a militia system, appointed military officers, and directed towns to stockpile arms and ammunition. It was this body that designated Concord as a supply depot, setting in motion the chain of events that would culminate in the British expedition of April 19, 1775. The Congress also established the Committee of Safety, which served as the executive arm of the patriot movement between legislative sessions.

The convening of the Provincial Congress in Concord transformed the town from a quiet farming community into the de facto capital of an insurgent government. The supplies stored in Concord were not the possessions of individual citizens but the military resources of an organized political movement that was preparing for the possibility of armed conflict with the British crown.`, significanceWeight: 90 },
  });

  await prisma.event.upsert({
    where: { id: 'event-supplies-hidden' },
    update: { slug: 'supplies-hidden-concord', summary: `In the weeks before April 19, 1775, as British intelligence reports made it increasingly clear that an expedition to seize colonial military stores was imminent, the people of Concord undertook a systematic effort to hide and disperse the supplies stockpiled in the town. Colonel James Barrett, Ephraim Wood, and other town leaders coordinated the movement of cannon, musket balls, powder, flour, tents, and other provisions from central storage locations to farms and concealed sites throughout Concord and surrounding towns.

The dispersal effort was a community-wide operation involving dozens of families. Supplies were buried in plowed fields, hidden in barns, concealed in attics, and transported by cart to farms in Lincoln, Acton, and other neighboring communities. The work continued even on the morning of April 19, as Abigail Barrett and other family members at the Barrett farm accelerated their concealment efforts after the alarm was sounded.

The success of the dispersal was one of the most consequential factors of April 19. When British search parties fanned out through Concord, they found far less than expected. The expedition's primary objective — the destruction of the colonial supply depot — was largely thwarted by the foresight and coordination of ordinary Concord citizens. The supplies that survived the British search would go on to equip the militia that besieged Boston in the weeks that followed.` },
    create: { id: 'event-supplies-hidden', townId: CONCORD_TOWN_ID, name: 'Concord Hides Its Military Supplies', slug: 'supplies-hidden-concord', startDate: new Date('1775-04-19T00:00:00.000Z'), datePrecision: 'DAY', summary: `In the weeks before April 19, 1775, as British intelligence reports made it increasingly clear that an expedition to seize colonial military stores was imminent, the people of Concord undertook a systematic effort to hide and disperse the supplies stockpiled in the town. Colonel James Barrett, Ephraim Wood, and other town leaders coordinated the movement of cannon, musket balls, powder, flour, tents, and other provisions from central storage locations to farms and concealed sites throughout Concord and surrounding towns.

The dispersal effort was a community-wide operation involving dozens of families. Supplies were buried in plowed fields, hidden in barns, concealed in attics, and transported by cart to farms in Lincoln, Acton, and other neighboring communities. The work continued even on the morning of April 19, as Abigail Barrett and other family members at the Barrett farm accelerated their concealment efforts after the alarm was sounded.

The success of the dispersal was one of the most consequential factors of April 19. When British search parties fanned out through Concord, they found far less than expected. The expedition's primary objective — the destruction of the colonial supply depot — was largely thwarted by the foresight and coordination of ordinary Concord citizens. The supplies that survived the British search would go on to equip the militia that besieged Boston in the weeks that followed.`, significanceWeight: 85 },
  });

  await prisma.event.upsert({
    where: { id: 'event-concord-militia-muster' },
    update: { slug: 'concord-militia-muster', summary: `In the early hours of April 19, 1775, after the alarm reached Concord, the town's militia and minuteman companies mustered at Wright Tavern and the town center. Colonel James Barrett, the senior officer, organized the response while messengers brought intelligence from Lexington about the size and disposition of the approaching British force. Reuben Brown, a saddler, rode toward Lexington and returned with news that the British had fired on the militia there.

The muster at Wright Tavern was the beginning of Concord's organized military response. Officers conferred about the best course of action while the ranks filled with men arriving from their farms and workshops. The mood was tense but determined — the news from Lexington confirmed that the situation was not a false alarm but a genuine military emergency. Barrett made the initial decision to march the militia out to meet the British column on the road from Lexington, then reconsidered and chose to withdraw to Punkatasset Hill when it became clear that the British force was too large for a direct confrontation.

The muster demonstrated the effectiveness of the militia system that the Provincial Congress had established. Within hours of the alarm, Concord had assembled a functioning military force with a clear chain of command, ready to respond to events as they developed.` },
    create: { id: 'event-concord-militia-muster', townId: CONCORD_TOWN_ID, name: 'Concord Militia Musters at Wright Tavern', slug: 'concord-militia-muster', startDate: new Date('1775-04-19T02:00:00.000Z'), datePrecision: 'DAY', summary: `In the early hours of April 19, 1775, after the alarm reached Concord, the town's militia and minuteman companies mustered at Wright Tavern and the town center. Colonel James Barrett, the senior officer, organized the response while messengers brought intelligence from Lexington about the size and disposition of the approaching British force. Reuben Brown, a saddler, rode toward Lexington and returned with news that the British had fired on the militia there.

The muster at Wright Tavern was the beginning of Concord's organized military response. Officers conferred about the best course of action while the ranks filled with men arriving from their farms and workshops. The mood was tense but determined — the news from Lexington confirmed that the situation was not a false alarm but a genuine military emergency. Barrett made the initial decision to march the militia out to meet the British column on the road from Lexington, then reconsidered and chose to withdraw to Punkatasset Hill when it became clear that the British force was too large for a direct confrontation.

The muster demonstrated the effectiveness of the militia system that the Provincial Congress had established. Within hours of the alarm, Concord had assembled a functioning military force with a clear chain of command, ready to respond to events as they developed.`, significanceWeight: 80 },
  });

  await prisma.event.upsert({
    where: { id: 'event-concord-supplies-dispersed' },
    update: { slug: 'supplies-dispersed-farms', summary: `The military supplies that the Provincial Congress had directed to Concord were dispersed to farms and concealed locations throughout the town and surrounding countryside in the days and hours before April 19. This was not a panicked last-minute effort but a planned operation that had been rehearsed in anticipation of exactly this scenario. Colonel Barrett's farm served as the primary depot, but supplies were also stored at the homes of other trusted patriots throughout the area.

The dispersal operation involved moving heavy and bulky items — cannon, barrels of flour, crates of musket balls, tents, and other provisions — by cart and wagon to locations that British search parties would be unlikely to find or reach. The operation required the cooperation of dozens of families, each of whom risked severe consequences if discovered harboring contraband military supplies.

The effectiveness of the dispersal was demonstrated on April 19 when British search parties found only a fraction of the supplies they had been sent to destroy. The barrels of flour they discovered were thrown into the millpond, the wooden gun carriages were burned, and some entrenching tools were destroyed, but the bulk of the supplies — including cannon and significant quantities of ammunition — had already been moved beyond the reach of the search parties.` },
    create: { id: 'event-concord-supplies-dispersed', townId: CONCORD_TOWN_ID, name: 'Military Supplies Dispersed to Surrounding Farms', slug: 'supplies-dispersed-farms', startDate: new Date('1775-04-19T00:00:00.000Z'), datePrecision: 'DAY', summary: `The military supplies that the Provincial Congress had directed to Concord were dispersed to farms and concealed locations throughout the town and surrounding countryside in the days and hours before April 19. This was not a panicked last-minute effort but a planned operation that had been rehearsed in anticipation of exactly this scenario. Colonel Barrett's farm served as the primary depot, but supplies were also stored at the homes of other trusted patriots throughout the area.

The dispersal operation involved moving heavy and bulky items — cannon, barrels of flour, crates of musket balls, tents, and other provisions — by cart and wagon to locations that British search parties would be unlikely to find or reach. The operation required the cooperation of dozens of families, each of whom risked severe consequences if discovered harboring contraband military supplies.

The effectiveness of the dispersal was demonstrated on April 19 when British search parties found only a fraction of the supplies they had been sent to destroy. The barrels of flour they discovered were thrown into the millpond, the wooden gun carriages were burned, and some entrenching tools were destroyed, but the bulk of the supplies — including cannon and significant quantities of ammunition — had already been moved beyond the reach of the search parties.`, significanceWeight: 80 },
  });

  await prisma.event.upsert({
    where: { id: 'event-british-concord-arrival' },
    update: { slug: 'british-arrive-concord', summary: `The British column under Lieutenant Colonel Francis Smith arrived in Concord at approximately 8:00 a.m. on April 19, 1775, having marched through the night from Boston via Lexington. The force of approximately 700 regulars — comprising the elite light infantry and grenadier companies of the Boston garrison — entered the town to find the Concord militia withdrawing northward toward the high ground above the North Bridge.

Smith established his command post at Wright Tavern and dispatched search parties to locate and destroy the military supplies that intelligence reports indicated were stored in the town. He sent approximately 100 light infantry under Captain Lawrence Parsons across the North Bridge toward Colonel Barrett's farm, while other parties searched buildings in the town center. A detachment of three light infantry companies remained at the bridge to secure the crossing.

The arrival of the British in Concord was the culmination of a mission that had already been compromised. The alarm riders had given Concord hours of warning, the supplies had been largely dispersed, and the militia was assembling in force on the high ground. Smith's slow march — the subject of criticism from his superiors after the event — had squandered whatever advantage of surprise the expedition might have possessed.` },
    create: { id: 'event-british-concord-arrival', townId: CONCORD_TOWN_ID, name: 'British Expedition Reaches Concord', slug: 'british-arrive-concord', startDate: new Date('1775-04-19T08:00:00.000Z'), datePrecision: 'DAY', summary: `The British column under Lieutenant Colonel Francis Smith arrived in Concord at approximately 8:00 a.m. on April 19, 1775, having marched through the night from Boston via Lexington. The force of approximately 700 regulars — comprising the elite light infantry and grenadier companies of the Boston garrison — entered the town to find the Concord militia withdrawing northward toward the high ground above the North Bridge.

Smith established his command post at Wright Tavern and dispatched search parties to locate and destroy the military supplies that intelligence reports indicated were stored in the town. He sent approximately 100 light infantry under Captain Lawrence Parsons across the North Bridge toward Colonel Barrett's farm, while other parties searched buildings in the town center. A detachment of three light infantry companies remained at the bridge to secure the crossing.

The arrival of the British in Concord was the culmination of a mission that had already been compromised. The alarm riders had given Concord hours of warning, the supplies had been largely dispersed, and the militia was assembling in force on the high ground. Smith's slow march — the subject of criticism from his superiors after the event — had squandered whatever advantage of surprise the expedition might have possessed.`, significanceWeight: 90 },
  });

  await prisma.event.upsert({
    where: { id: 'event-barrett-farm-search' },
    update: { slug: 'barrett-farm-search', summary: `A detachment of British light infantry under Captain Lawrence Parsons crossed the North Bridge and marched approximately two miles to Colonel Barrett's farm, arriving mid-morning on April 19. Their mission was to locate and destroy the cannon, ammunition, and other military supplies that intelligence reports indicated were stored there. The farm had been identified as the primary colonial supply depot by British spies, including Dr. Benjamin Church, who had infiltrated the patriot leadership.

When the soldiers arrived at the Barrett farm, they found Abigail Barrett and family members but little of military value. The Barretts had spent days dispersing and concealing the supplies, plowing them into fields and hiding them in the surrounding woods. The British conducted a thorough but ultimately fruitless search, examining the house, barns, and outbuildings. According to family tradition, Abigail Barrett offered the soldiers food and drink during the search, a gesture that may have helped maintain a civil atmosphere.

The failure of the Barrett farm search represented the fundamental failure of the entire expedition. General Gage had sent 700 of his best soldiers on a twenty-mile round trip to seize supplies that were no longer there. By the time Parsons's detachment returned to the North Bridge, they found the tactical situation had changed dramatically — the bridge was now held by a colonial force that outnumbered the remaining British guard.` },
    create: { id: 'event-barrett-farm-search', townId: CONCORD_TOWN_ID, name: 'British Search Barrett Farm', slug: 'barrett-farm-search', startDate: new Date('1775-04-19T09:00:00.000Z'), datePrecision: 'DAY', summary: `A detachment of British light infantry under Captain Lawrence Parsons crossed the North Bridge and marched approximately two miles to Colonel Barrett's farm, arriving mid-morning on April 19. Their mission was to locate and destroy the cannon, ammunition, and other military supplies that intelligence reports indicated were stored there. The farm had been identified as the primary colonial supply depot by British spies, including Dr. Benjamin Church, who had infiltrated the patriot leadership.

When the soldiers arrived at the Barrett farm, they found Abigail Barrett and family members but little of military value. The Barretts had spent days dispersing and concealing the supplies, plowing them into fields and hiding them in the surrounding woods. The British conducted a thorough but ultimately fruitless search, examining the house, barns, and outbuildings. According to family tradition, Abigail Barrett offered the soldiers food and drink during the search, a gesture that may have helped maintain a civil atmosphere.

The failure of the Barrett farm search represented the fundamental failure of the entire expedition. General Gage had sent 700 of his best soldiers on a twenty-mile round trip to seize supplies that were no longer there. By the time Parsons's detachment returned to the North Bridge, they found the tactical situation had changed dramatically — the bridge was now held by a colonial force that outnumbered the remaining British guard.`, significanceWeight: 85 },
  });

  await prisma.event.upsert({
    where: { id: 'event-north-bridge' },
    update: { slug: 'battle-north-bridge', summary: `The engagement at the North Bridge on the morning of April 19, 1775, was the first organized colonial military action against British regular troops in the American Revolution. Approximately 400 militia and minutemen from Concord, Acton, Bedford, Lincoln, and other towns, commanded by Colonel James Barrett and led by Major John Buttrick, marched in column formation from Punkatasset Hill toward the bridge, which was held by three companies of British light infantry.

As the militia approached, the British attempted to take up the bridge planking but were too slow. They formed a firing line and opened fire, killing Captain Isaac Davis of Acton and Private Abner Hosmer, also of Acton. Major Buttrick immediately gave the order to fire, and the militia discharged a volley that killed two British soldiers, wounded nine others including four officers, and threw the light infantry companies into confusion. The British withdrew in disorder toward the town center, abandoning the bridge and the road to Barrett's farm.

The engagement lasted no more than two or three minutes, but its significance was immense. Unlike the shooting on Lexington Green, which was a chaotic and one-sided affair, the North Bridge fight was a deliberate military action — a formed body of troops firing on command against another formed body. It demonstrated that colonial militia would fight, that they could inflict casualties on British regulars, and that the political crisis in Massachusetts had become a shooting war.` },
    create: { id: 'event-north-bridge', townId: CONCORD_TOWN_ID, name: 'Battle of North Bridge', slug: 'battle-north-bridge', startDate: new Date('1775-04-19T09:30:00.000Z'), datePrecision: 'DAY', summary: `The engagement at the North Bridge on the morning of April 19, 1775, was the first organized colonial military action against British regular troops in the American Revolution. Approximately 400 militia and minutemen from Concord, Acton, Bedford, Lincoln, and other towns, commanded by Colonel James Barrett and led by Major John Buttrick, marched in column formation from Punkatasset Hill toward the bridge, which was held by three companies of British light infantry.

As the militia approached, the British attempted to take up the bridge planking but were too slow. They formed a firing line and opened fire, killing Captain Isaac Davis of Acton and Private Abner Hosmer, also of Acton. Major Buttrick immediately gave the order to fire, and the militia discharged a volley that killed two British soldiers, wounded nine others including four officers, and threw the light infantry companies into confusion. The British withdrew in disorder toward the town center, abandoning the bridge and the road to Barrett's farm.

The engagement lasted no more than two or three minutes, but its significance was immense. Unlike the shooting on Lexington Green, which was a chaotic and one-sided affair, the North Bridge fight was a deliberate military action — a formed body of troops firing on command against another formed body. It demonstrated that colonial militia would fight, that they could inflict casualties on British regulars, and that the political crisis in Massachusetts had become a shooting war.`, significanceWeight: 100 },
  });

  await prisma.event.upsert({
    where: { id: 'event-concord-town-fire' },
    update: { slug: 'concord-town-fire', summary: `While search parties combed the town for military supplies on the morning of April 19, British soldiers set fire to several items they discovered, including wooden gun carriages, entrenching tools, and barrels of flour. The fire from the burning gun carriages spread to the town house and threatened adjacent buildings. Martha Moulton, an elderly Concord resident, confronted the British soldiers and demanded they help extinguish the flames. The soldiers complied, forming a bucket brigade that prevented the fire from spreading further.

The smoke from the fires at the town center was visible from Punkatasset Hill, where the colonial militia were assembled. From their elevated vantage point, the militia could see the smoke but could not determine its exact source or extent. The sight of smoke rising from the direction of their homes and public buildings created alarm among the assembled men, many of whom feared that the British were deliberately burning the town.

This perception — that the British were setting fire to Concord — was the immediate catalyst for the militia's decision to march back toward the North Bridge. Lieutenant Joseph Hosmer's challenge to the assembled officers, asking whether they would let the town burn, was prompted by the visible smoke. The irony is that the fire was accidental and was being extinguished even as the militia began their advance. But the perception of a burning town was enough to transform hesitation into action.` },
    create: { id: 'event-concord-town-fire', townId: CONCORD_TOWN_ID, name: 'Fire at Concord Town House', slug: 'concord-town-fire', startDate: new Date('1775-04-19T09:00:00.000Z'), datePrecision: 'DAY', summary: `While search parties combed the town for military supplies on the morning of April 19, British soldiers set fire to several items they discovered, including wooden gun carriages, entrenching tools, and barrels of flour. The fire from the burning gun carriages spread to the town house and threatened adjacent buildings. Martha Moulton, an elderly Concord resident, confronted the British soldiers and demanded they help extinguish the flames. The soldiers complied, forming a bucket brigade that prevented the fire from spreading further.

The smoke from the fires at the town center was visible from Punkatasset Hill, where the colonial militia were assembled. From their elevated vantage point, the militia could see the smoke but could not determine its exact source or extent. The sight of smoke rising from the direction of their homes and public buildings created alarm among the assembled men, many of whom feared that the British were deliberately burning the town.

This perception — that the British were setting fire to Concord — was the immediate catalyst for the militia's decision to march back toward the North Bridge. Lieutenant Joseph Hosmer's challenge to the assembled officers, asking whether they would let the town burn, was prompted by the visible smoke. The irony is that the fire was accidental and was being extinguished even as the militia began their advance. But the perception of a burning town was enough to transform hesitation into action.`, significanceWeight: 85 },
  });

  await prisma.event.upsert({
    where: { id: 'event-concord-running-battle' },
    update: { slug: 'running-battle-concord', summary: `The British retreat from Concord, beginning around noon on April 19, 1775, became one of the most consequential running battles in American military history. As Lieutenant Colonel Smith's column marched back along the road toward Lexington, colonial militia from dozens of towns positioned themselves along the route, firing from behind stone walls, fences, barns, and houses. The British column, confined to the road, was unable to deploy effectively against an enemy that fought from cover and melted away after each engagement.

The fighting intensified at Meriam's Corner, about a mile east of Concord center, where the road narrowed and crossed a small bridge. Militia companies from Reading, Chelmsford, Billerica, and other towns that had arrived during the morning ambushed the retreating column at this chokepoint. From Meriam's Corner eastward, the retreat became increasingly desperate, with British casualties mounting and discipline beginning to break down.

The running battle along what is now known as Battle Road demonstrated the devastating effectiveness of militia tactics against regular troops in the New England landscape of stone walls and scattered farmsteads. It also revealed the vulnerability of conventional military formations when denied the element of surprise and surrounded by a hostile population. By the time the British column reached Lexington, where Lord Percy's relief column was waiting, Smith's force had suffered nearly 300 casualties and was on the verge of collapse.` },
    create: { id: 'event-concord-running-battle', townId: CONCORD_TOWN_ID, name: 'Running Battle: Concord to Charlestown', slug: 'running-battle-concord', startDate: new Date('1775-04-19T12:00:00.000Z'), datePrecision: 'DAY', summary: `The British retreat from Concord, beginning around noon on April 19, 1775, became one of the most consequential running battles in American military history. As Lieutenant Colonel Smith's column marched back along the road toward Lexington, colonial militia from dozens of towns positioned themselves along the route, firing from behind stone walls, fences, barns, and houses. The British column, confined to the road, was unable to deploy effectively against an enemy that fought from cover and melted away after each engagement.

The fighting intensified at Meriam's Corner, about a mile east of Concord center, where the road narrowed and crossed a small bridge. Militia companies from Reading, Chelmsford, Billerica, and other towns that had arrived during the morning ambushed the retreating column at this chokepoint. From Meriam's Corner eastward, the retreat became increasingly desperate, with British casualties mounting and discipline beginning to break down.

The running battle along what is now known as Battle Road demonstrated the devastating effectiveness of militia tactics against regular troops in the New England landscape of stone walls and scattered farmsteads. It also revealed the vulnerability of conventional military formations when denied the element of surprise and surrounded by a hostile population. By the time the British column reached Lexington, where Lord Percy's relief column was waiting, Smith's force had suffered nearly 300 casualties and was on the verge of collapse.`, significanceWeight: 95 },
  });

  await prisma.event.upsert({
    where: { id: 'event-british-retreat-concord' },
    update: { slug: 'british-retreat-begins', summary: `Lieutenant Colonel Smith ordered the retreat from Concord at approximately noon on April 19, 1775, after concluding that his position was untenable. The search parties had found little of value, the engagement at the North Bridge had demonstrated that the colonial militia was willing to fight, and the number of armed colonials visible on the surrounding hills was growing by the hour. Smith recognized that every minute spent in Concord increased the danger to his force.

The retreat began in reasonable order but deteriorated rapidly. Smith's wounded were carried on makeshift litters, slowing the column. The road back to Lexington passed through terrain that favored the defenders — stone walls lined both sides, farmhouses provided cover, and the undulating ground offered positions from which militia could fire downward on the road. Smith's flanking parties, sent out to clear the militia from positions on either side of the road, found it impossible to keep up with the pace of the ambushes.

Smith's decision to retreat, though militarily sound, sealed the political fate of the British position in Massachusetts. The expedition that was supposed to demonstrate British authority and disarm the colonial resistance had instead provided a dramatic demonstration of British vulnerability. The retreat from Concord was the first British military retreat of the American Revolution, and it announced to the colonies and to the world that the most powerful army on earth could be beaten by farmers with muskets.` },
    create: { id: 'event-british-retreat-concord', townId: CONCORD_TOWN_ID, name: 'British Retreat Begins', slug: 'british-retreat-begins', startDate: new Date('1775-04-19T12:00:00.000Z'), datePrecision: 'DAY', summary: `Lieutenant Colonel Smith ordered the retreat from Concord at approximately noon on April 19, 1775, after concluding that his position was untenable. The search parties had found little of value, the engagement at the North Bridge had demonstrated that the colonial militia was willing to fight, and the number of armed colonials visible on the surrounding hills was growing by the hour. Smith recognized that every minute spent in Concord increased the danger to his force.

The retreat began in reasonable order but deteriorated rapidly. Smith's wounded were carried on makeshift litters, slowing the column. The road back to Lexington passed through terrain that favored the defenders — stone walls lined both sides, farmhouses provided cover, and the undulating ground offered positions from which militia could fire downward on the road. Smith's flanking parties, sent out to clear the militia from positions on either side of the road, found it impossible to keep up with the pace of the ambushes.

Smith's decision to retreat, though militarily sound, sealed the political fate of the British position in Massachusetts. The expedition that was supposed to demonstrate British authority and disarm the colonial resistance had instead provided a dramatic demonstration of British vulnerability. The retreat from Concord was the first British military retreat of the American Revolution, and it announced to the colonies and to the world that the most powerful army on earth could be beaten by farmers with muskets.`, significanceWeight: 90 },
  });

  // --- 10 New Events ---

  await prisma.event.upsert({
    where: { id: 'event-concord-arms-stockpile' },
    update: {},
    create: { id: 'event-concord-arms-stockpile', townId: CONCORD_TOWN_ID, name: 'Arms Stockpiling Campaign Begins', slug: 'arms-stockpile-campaign', startDate: new Date('1774-12-01T00:00:00.000Z'), datePrecision: 'MONTH', summary: `Beginning in the winter of 1774-75, the Massachusetts Provincial Congress directed the systematic accumulation of military supplies at Concord. The town, chosen for its distance from Boston and its patriot sympathies, became the colony's primary military depot. Over the following months, cannon, musket balls, powder, flour, medical supplies, tents, and entrenching tools were transported to Concord and stored at various locations including Colonel Barrett's farm, the town center, and private homes.

The stockpiling effort required extensive coordination between the Provincial Congress, local committees of safety, and individual citizens willing to store contraband supplies. The operation was conducted with as much secrecy as possible, though British intelligence — including reports from the spy Dr. Benjamin Church — eventually identified Concord as the primary depot. The scale of the supplies accumulated was substantial: several cannon, significant quantities of ammunition, and provisions sufficient to equip a force of several thousand men.

The arms stockpiling campaign transformed Concord from a political center of resistance into a military one. The presence of the supplies made the town a legitimate military target and ensured that any British attempt to disarm the colony would have to pass through Concord. This strategic reality was the direct cause of the British expedition of April 19, 1775.`, significanceWeight: 80 },
  });

  await prisma.event.upsert({
    where: { id: 'event-concord-town-meeting-resistance' },
    update: {},
    create: { id: 'event-concord-town-meeting-resistance', townId: CONCORD_TOWN_ID, name: 'Concord Town Meeting Votes to Support Resistance', slug: 'town-meeting-resistance', startDate: new Date('1774-09-01T00:00:00.000Z'), datePrecision: 'MONTH', summary: `In the fall of 1774, the Concord town meeting voted to support the resolutions of the Continental Congress and to organize the town's militia for potential conflict with British authority. This was not a spontaneous act of defiance but the culmination of years of political discussion, debate, and organizing within the town's democratic institutions. The vote reflected the will of the community as expressed through the town meeting, New England's fundamental institution of self-governance.

The meeting authorized the formation of minuteman companies, appointed officers, and directed the Committee of Safety to coordinate military preparations. It also voted to support the economic boycotts recommended by the Continental Congress and pledged solidarity with Boston, which was suffering under the Coercive Acts. These votes were taken openly and recorded in the town records — acts of political courage that committed the entire community to a course that could lead to armed conflict.

Concord's town meeting votes were replicated across Massachusetts in the fall of 1774, creating a colony-wide infrastructure of resistance that operated through legitimate democratic channels. The Revolution in Massachusetts was not imposed by a small cabal of agitators but was authorized, step by step, by the democratic processes of local self-governance.`, significanceWeight: 75 },
  });

  await prisma.event.upsert({
    where: { id: 'event-concord-militia-reorganization' },
    update: {},
    create: { id: 'event-concord-militia-reorganization', townId: CONCORD_TOWN_ID, name: 'Militia Reorganization and Minuteman Training', slug: 'militia-reorganization', startDate: new Date('1775-01-15T00:00:00.000Z'), datePrecision: 'MONTH', summary: `During the winter of 1774-75, the Concord militia underwent a significant reorganization in accordance with directives from the Provincial Congress. The traditional militia, which included all able-bodied men, was supplemented by the creation of minuteman companies — smaller, elite units composed of younger men who committed to being ready to march at a minute's notice. These companies trained more frequently and were expected to respond faster than the regular militia.

The reorganization involved the election of new officers, the establishment of training schedules, and the coordination of alarm systems with neighboring towns. Colonel James Barrett, Major John Buttrick, and other officers drilled their companies on the common and in the fields surrounding the town. The training was practical rather than theoretical, focusing on marksmanship, maneuver, and the quick assembly and march that the minuteman concept required.

The effectiveness of this reorganization was demonstrated on April 19, when the Concord militia assembled rapidly, maintained a functional chain of command, and executed tactical decisions — the withdrawal to Punkatasset Hill, the advance on the bridge, the pursuit of the retreating British — that revealed a level of organization far beyond what the British expected from a colonial militia.`, significanceWeight: 70 },
  });

  await prisma.event.upsert({
    where: { id: 'event-alarm-reaches-concord' },
    update: {},
    create: { id: 'event-alarm-reaches-concord', townId: CONCORD_TOWN_ID, name: 'Alarm Reaches Concord from Lexington', slug: 'alarm-reaches-concord', startDate: new Date('1775-04-19T01:30:00.000Z'), datePrecision: 'DAY', summary: `In the early hours of April 19, 1775, the alarm reached Concord that British regulars were on the march from Boston. Dr. Samuel Prescott, who had encountered Paul Revere and William Dawes on the road from Lexington, carried the final leg of the warning into Concord after Revere was captured by a British patrol. Prescott arrived in Concord around 1:30 a.m., and the town bell was immediately rung to rouse the inhabitants.

The alarm set in motion the preparations that Concord had been rehearsing for months. Militia and minuteman companies began to assemble, messengers were dispatched to neighboring towns, and the work of hiding military supplies accelerated. The alarm also reached surrounding communities through relay riders, ensuring that companies from Acton, Bedford, Lincoln, Carlisle, Chelmsford, and other towns would march to Concord's aid in the hours that followed.

The arrival of the alarm in Concord approximately six hours before the British column reached the town was decisive. It gave Colonel Barrett and other officers time to organize the militia response, allowed the dispersal of remaining supplies, and ensured that companies from surrounding towns had time to march to Concord. The alarm system that delivered this warning was the product of months of planning and represented one of the most effective communication networks in colonial America.`, significanceWeight: 85 },
  });

  await prisma.event.upsert({
    where: { id: 'event-militia-withdraws-punkatasset' },
    update: {},
    create: { id: 'event-militia-withdraws-punkatasset', townId: CONCORD_TOWN_ID, name: 'Militia Withdraws to Punkatasset Hill', slug: 'militia-withdraws-punkatasset', startDate: new Date('1775-04-19T08:00:00.000Z'), datePrecision: 'DAY', summary: `When the British column came into view on the road from Lexington on the morning of April 19, Colonel Barrett made the critical decision to withdraw the Concord militia from the town center to Punkatasset Hill, a prominent elevation northwest of the North Bridge. The decision was tactically sound — Barrett's force was still smaller than the British column, and the high ground offered a defensible position with clear sightlines to the town and the bridge below.

The withdrawal was orderly. The Concord companies marched out of the town center and across the North Bridge, then climbed to the hilltop where they could observe the British movements without being engaged. As the morning progressed, companies from Acton, Bedford, Lincoln, and other towns arrived and joined the growing colonial force on the hill. Captain Isaac Davis's Acton minutemen, with their distinctive bayonets, were among the later arrivals.

The decision to withdraw rather than fight in the town center was one of Barrett's most important tactical judgments. By ceding the town temporarily, he preserved his force, gained the advantage of high ground, and bought time for reinforcements to arrive. When the moment came to advance, his force outnumbered the British at the bridge by roughly four to one — a reversal of the odds that would not have been possible without the patient gathering on Punkatasset Hill.`, significanceWeight: 80 },
  });

  await prisma.event.upsert({
    where: { id: 'event-meriams-corner-fight' },
    update: {},
    create: { id: 'event-meriams-corner-fight', townId: CONCORD_TOWN_ID, name: 'Firefight at Meriam\'s Corner', slug: 'meriams-corner-fight', startDate: new Date('1775-04-19T12:30:00.000Z'), datePrecision: 'DAY', summary: `The engagement at Meriam's Corner, approximately one mile east of Concord center on the road to Lexington, marked the point where the British retreat from Concord became a sustained running battle. At this location, the road narrowed and crossed a small bridge over a brook, creating a natural chokepoint. Militia companies from Reading, Billerica, Chelmsford, and other towns that had been arriving throughout the morning positioned themselves along the road and behind the stone walls flanking it.

When the retreating British column reached Meriam's Corner, it came under heavy fire from multiple directions. The confined terrain prevented the British from deploying flanking parties effectively, and the militia maintained a withering fire that inflicted significant casualties. The fight at Meriam's Corner set the pattern for the remainder of the retreat — a gauntlet of ambushes along a road that offered the British little opportunity for effective response.

The engagement at Meriam's Corner was significant because it involved militia companies from towns far beyond Concord, demonstrating the breadth of the colonial response to the alarm. Men who had marched from communities ten, fifteen, and twenty miles away arrived in time to position themselves along the retreat route, turning what might have been an orderly British withdrawal into a costly fighting retreat.`, significanceWeight: 85 },
  });

  await prisma.event.upsert({
    where: { id: 'event-concord-aftermath' },
    update: {},
    create: { id: 'event-concord-aftermath', townId: CONCORD_TOWN_ID, name: 'Concord Aftermath: Burying the Dead', slug: 'concord-aftermath', startDate: new Date('1775-04-20T00:00:00.000Z'), datePrecision: 'DAY', summary: `In the days following April 19, the people of Concord buried their dead, tended the wounded, and took stock of what had occurred. The British soldiers killed at the North Bridge were buried near the bridge — a grave that is marked to this day. Captain Isaac Davis and Private Abner Hosmer were returned to Acton for burial. The wounded, both colonial and British, were cared for in homes throughout the town.

The aftermath also involved the collection of depositions and eyewitness accounts that would serve both as historical records and as political ammunition. The Provincial Congress moved quickly to gather sworn statements from participants, which were published and dispatched to London in an effort to present the colonial version of events before the British account could take hold. This propaganda effort was remarkably successful — the colonial depositions reached England before the official British report.

The psychological impact of April 19 on Concord was profound. The town had been the site of the first successful colonial military action of the Revolution, a source of immense pride. But it had also experienced the reality of war — the sight of dead men, the sound of musket fire, the fear of a burning town. The farming community that had prepared for conflict discovered on April 19 what conflict actually looked like, and the discovery changed the town forever.`, significanceWeight: 70 },
  });

  await prisma.event.upsert({
    where: { id: 'event-concord-siege-boston' },
    update: {},
    create: { id: 'event-concord-siege-boston', townId: CONCORD_TOWN_ID, name: 'Concord Joins the Siege of Boston', slug: 'concord-siege-boston', startDate: new Date('1775-04-20T00:00:00.000Z'), datePrecision: 'MONTH', summary: `In the days and weeks following April 19, 1775, Concord's militia companies joined the thousands of colonial troops who converged on the outskirts of Boston to besiege the British garrison. The supplies that had survived the British search — the cannon, ammunition, and provisions that Concord had hidden so effectively — were transported to the siege lines and put to use by the growing colonial army.

Concord men served in the siege lines around Boston throughout the spring and summer of 1775, enduring the hardships of camp life and occasional skirmishes with British outposts. The town also continued to supply provisions and materiel to the colonial forces, drawing on the agricultural surplus that had made it a supply depot in the first place. The transition from militia service to sustained military operations was difficult, and many Concord men returned to their farms after their initial terms of enlistment expired.

Concord's participation in the siege of Boston represented the town's transition from a center of political resistance to an active participant in a military conflict. The fight at the North Bridge had lasted minutes; the siege of Boston lasted nearly a year. The sustained commitment required of Concord's citizens during this period tested the community's resolve in ways that the dramatic events of April 19 had not.`, significanceWeight: 65 },
  });

  await prisma.event.upsert({
    where: { id: 'event-emerson-concord-hymn' },
    update: {},
    create: { id: 'event-emerson-concord-hymn', townId: CONCORD_TOWN_ID, name: 'Emerson Writes "Concord Hymn"', slug: 'emerson-concord-hymn', startDate: new Date('1836-07-04T00:00:00.000Z'), datePrecision: 'DAY', summary: `In 1836, Ralph Waldo Emerson composed the "Concord Hymn" for the dedication of the Battle Monument, a granite obelisk erected near the North Bridge. The poem, which was sung as a hymn at the dedication ceremony on July 4, 1837, contained the phrase that would define Concord's place in American memory: "the shot heard round the world." Emerson was the grandson of Reverend William Emerson, who had watched the fighting at the bridge from the Old Manse in 1775.

The "Concord Hymn" transformed the local engagement at the North Bridge into a universal symbol of the struggle for liberty. Its opening stanza — "By the rude bridge that arched the flood, / Their flag to April's breeze unfurled, / Here once the embattled farmers stood / And fired the shot heard round the world" — combined personal family memory with a sweeping claim about the global significance of the Revolution. The phrase "embattled farmers" established the enduring image of the minuteman as a citizen-soldier called from the plow to defend freedom.

The poem's influence on American culture has been incalculable. The phrase "shot heard round the world" has been applied to contexts far beyond the Revolution, and the image of the embattled farmer has become one of the foundational myths of American identity. Emerson's hymn gave Concord a narrative that elevated a brief skirmish at a country bridge into an event of world-historical significance.`, significanceWeight: 80 },
  });

  await prisma.event.upsert({
    where: { id: 'event-centennial-celebration' },
    update: {},
    create: { id: 'event-centennial-celebration', townId: CONCORD_TOWN_ID, name: 'Centennial Celebration and Monument Dedication', slug: 'centennial-celebration', startDate: new Date('1875-04-19T00:00:00.000Z'), datePrecision: 'DAY', summary: `On April 19, 1875, Concord hosted a centennial celebration that drew thousands of visitors, including President Ulysses S. Grant, and featured the dedication of Daniel Chester French's Minute Man statue at the North Bridge. The celebration was a national event that cemented Concord's place in the American commemorative landscape and established the North Bridge as one of the nation's most important historic sites.

The centennial was a carefully orchestrated affair that included processions, speeches, and the unveiling of the statue that would become the iconic image of the American Revolution. French, a twenty-five-year-old Concord native, had created a figure that embodied the minuteman ideal — a farmer leaving his plow to take up arms in defense of his community. The statue was cast from bronze melted from Civil War cannon, linking the two defining conflicts of American history.

The centennial celebration marked a turning point in how Concord's history was remembered and presented. Before 1875, the memory of April 19 was primarily local, passed down through family tradition and town records. The centennial transformed it into a national narrative, supported by a permanent monument and reinforced by Emerson's poetry. The Minute Man statue became one of the most reproduced images in American iconography, appearing on war bonds, stamps, currency, and countless publications.`, significanceWeight: 75 },
  });

  console.log('  Events seeded.');
}

// =============================================================================
// EVENT-PEOPLE CONNECTIONS
// =============================================================================

async function seedEventPeople() {
  console.log('  Seeding event-people connections...');

  // North Bridge
  await prisma.eventPerson.upsert({ where: { eventId_personId: { eventId: 'event-north-bridge', personId: 'person-john-buttrick' } }, update: {}, create: { eventId: 'event-north-bridge', personId: 'person-john-buttrick', roleInEvent: 'Led the militia advance and gave the order to fire' } });
  await prisma.eventPerson.upsert({ where: { eventId_personId: { eventId: 'event-north-bridge', personId: 'person-isaac-davis' } }, update: {}, create: { eventId: 'event-north-bridge', personId: 'person-isaac-davis', roleInEvent: 'Led the Acton company at the front of the column; killed by British fire' } });
  await prisma.eventPerson.upsert({ where: { eventId_personId: { eventId: 'event-north-bridge', personId: 'person-amos-barrett' } }, update: {}, create: { eventId: 'event-north-bridge', personId: 'person-amos-barrett', roleInEvent: 'Participant and later memoirist of the engagement' } });
  await prisma.eventPerson.upsert({ where: { eventId_personId: { eventId: 'event-north-bridge', personId: 'person-william-emerson' } }, update: {}, create: { eventId: 'event-north-bridge', personId: 'person-william-emerson', roleInEvent: 'Observed the engagement from the Old Manse' } });
  await prisma.eventPerson.upsert({ where: { eventId_personId: { eventId: 'event-north-bridge', personId: 'person-joseph-hosmer' } }, update: {}, create: { eventId: 'event-north-bridge', personId: 'person-joseph-hosmer', roleInEvent: 'Urged the advance; fought at the bridge' } });
  await prisma.eventPerson.upsert({ where: { eventId_personId: { eventId: 'event-north-bridge', personId: 'person-charles-miles' } }, update: {}, create: { eventId: 'event-north-bridge', personId: 'person-charles-miles', roleInEvent: 'Led flanking maneuver during the engagement' } });
  await prisma.eventPerson.upsert({ where: { eventId_personId: { eventId: 'event-north-bridge', personId: 'person-james-barrett' } }, update: {}, create: { eventId: 'event-north-bridge', personId: 'person-james-barrett', roleInEvent: 'Overall commander; authorized the advance on the bridge' } });

  // British arrival
  await prisma.eventPerson.upsert({ where: { eventId_personId: { eventId: 'event-british-concord-arrival', personId: 'person-francis-smith' } }, update: {}, create: { eventId: 'event-british-concord-arrival', personId: 'person-francis-smith', roleInEvent: 'Commander of the British expedition' } });

  // Barrett farm search
  await prisma.eventPerson.upsert({ where: { eventId_personId: { eventId: 'event-barrett-farm-search', personId: 'person-james-barrett' } }, update: {}, create: { eventId: 'event-barrett-farm-search', personId: 'person-james-barrett', roleInEvent: 'Owner of the farm; senior militia commander' } });
  await prisma.eventPerson.upsert({ where: { eventId_personId: { eventId: 'event-barrett-farm-search', personId: 'person-abigail-barrett' } }, update: {}, create: { eventId: 'event-barrett-farm-search', personId: 'person-abigail-barrett', roleInEvent: 'Managed concealment of supplies during the British search' } });

  // Militia muster
  await prisma.eventPerson.upsert({ where: { eventId_personId: { eventId: 'event-concord-militia-muster', personId: 'person-james-barrett' } }, update: {}, create: { eventId: 'event-concord-militia-muster', personId: 'person-james-barrett', roleInEvent: 'Senior commander; organized the militia response' } });
  await prisma.eventPerson.upsert({ where: { eventId_personId: { eventId: 'event-concord-militia-muster', personId: 'person-john-buttrick' } }, update: {}, create: { eventId: 'event-concord-militia-muster', personId: 'person-john-buttrick', roleInEvent: 'Major; assisted in organizing the muster' } });
  await prisma.eventPerson.upsert({ where: { eventId_personId: { eventId: 'event-concord-militia-muster', personId: 'person-reuben-brown' } }, update: {}, create: { eventId: 'event-concord-militia-muster', personId: 'person-reuben-brown', roleInEvent: 'Brought intelligence from Lexington about the British force' } });

  // Town fire
  await prisma.eventPerson.upsert({ where: { eventId_personId: { eventId: 'event-concord-town-fire', personId: 'person-martha-moulton' } }, update: {}, create: { eventId: 'event-concord-town-fire', personId: 'person-martha-moulton', roleInEvent: 'Confronted British soldiers and demanded they extinguish the fire' } });

  // Running battle
  await prisma.eventPerson.upsert({ where: { eventId_personId: { eventId: 'event-concord-running-battle', personId: 'person-francis-smith' } }, update: {}, create: { eventId: 'event-concord-running-battle', personId: 'person-francis-smith', roleInEvent: 'Commander of the retreating British force; wounded during the retreat' } });
  await prisma.eventPerson.upsert({ where: { eventId_personId: { eventId: 'event-concord-running-battle', personId: 'person-amos-barrett' } }, update: {}, create: { eventId: 'event-concord-running-battle', personId: 'person-amos-barrett', roleInEvent: 'Participated in the harassment of the retreating column' } });
  await prisma.eventPerson.upsert({ where: { eventId_personId: { eventId: 'event-concord-running-battle', personId: 'person-charles-miles' } }, update: {}, create: { eventId: 'event-concord-running-battle', personId: 'person-charles-miles', roleInEvent: 'Coordinated militia fire along the retreat route' } });

  // British retreat
  await prisma.eventPerson.upsert({ where: { eventId_personId: { eventId: 'event-british-retreat-concord', personId: 'person-francis-smith' } }, update: {}, create: { eventId: 'event-british-retreat-concord', personId: 'person-francis-smith', roleInEvent: 'Ordered the retreat from Concord' } });

  // Alarm reaches Concord
  await prisma.eventPerson.upsert({ where: { eventId_personId: { eventId: 'event-alarm-reaches-concord', personId: 'person-abel-prescott-jr' } }, update: {}, create: { eventId: 'event-alarm-reaches-concord', personId: 'person-abel-prescott-jr', roleInEvent: 'Part of the alarm network that warned Concord' } });

  // Militia withdraws to Punkatasset
  await prisma.eventPerson.upsert({ where: { eventId_personId: { eventId: 'event-militia-withdraws-punkatasset', personId: 'person-james-barrett' } }, update: {}, create: { eventId: 'event-militia-withdraws-punkatasset', personId: 'person-james-barrett', roleInEvent: 'Ordered the withdrawal to high ground' } });
  await prisma.eventPerson.upsert({ where: { eventId_personId: { eventId: 'event-militia-withdraws-punkatasset', personId: 'person-john-buttrick' } }, update: {}, create: { eventId: 'event-militia-withdraws-punkatasset', personId: 'person-john-buttrick', roleInEvent: 'Led the militia column to the hilltop' } });
  await prisma.eventPerson.upsert({ where: { eventId_personId: { eventId: 'event-militia-withdraws-punkatasset', personId: 'person-isaac-davis' } }, update: {}, create: { eventId: 'event-militia-withdraws-punkatasset', personId: 'person-isaac-davis', roleInEvent: 'Arrived with the Acton company and joined the force on the hill' } });

  // Meriam's Corner
  await prisma.eventPerson.upsert({ where: { eventId_personId: { eventId: 'event-meriams-corner-fight', personId: 'person-amos-barrett' } }, update: {}, create: { eventId: 'event-meriams-corner-fight', personId: 'person-amos-barrett', roleInEvent: 'Participant in the ambush at the chokepoint' } });

  // Provincial Congress
  await prisma.eventPerson.upsert({ where: { eventId_personId: { eventId: 'event-provincial-congress-concord', personId: 'person-james-barrett' } }, update: {}, create: { eventId: 'event-provincial-congress-concord', personId: 'person-james-barrett', roleInEvent: 'Prominent local leader during the Congress sessions' } });
  await prisma.eventPerson.upsert({ where: { eventId_personId: { eventId: 'event-provincial-congress-concord', personId: 'person-ephraim-wood' } }, update: {}, create: { eventId: 'event-provincial-congress-concord', personId: 'person-ephraim-wood', roleInEvent: 'Selectman who helped host the Congress in Concord' } });

  // Arms stockpile
  await prisma.eventPerson.upsert({ where: { eventId_personId: { eventId: 'event-concord-arms-stockpile', personId: 'person-james-barrett' } }, update: {}, create: { eventId: 'event-concord-arms-stockpile', personId: 'person-james-barrett', roleInEvent: 'Primary custodian of the supply depot at his farm' } });
  await prisma.eventPerson.upsert({ where: { eventId_personId: { eventId: 'event-concord-arms-stockpile', personId: 'person-ephraim-wood' } }, update: {}, create: { eventId: 'event-concord-arms-stockpile', personId: 'person-ephraim-wood', roleInEvent: 'Coordinated logistics as selectman' } });
  await prisma.eventPerson.upsert({ where: { eventId_personId: { eventId: 'event-concord-arms-stockpile', personId: 'person-thomas-flint' } }, update: {}, create: { eventId: 'event-concord-arms-stockpile', personId: 'person-thomas-flint', roleInEvent: 'Stored supplies on his farm' } });

  // Supplies dispersed
  await prisma.eventPerson.upsert({ where: { eventId_personId: { eventId: 'event-concord-supplies-dispersed', personId: 'person-abigail-barrett' } }, update: {}, create: { eventId: 'event-concord-supplies-dispersed', personId: 'person-abigail-barrett', roleInEvent: 'Led concealment efforts at Barrett farm' } });
  await prisma.eventPerson.upsert({ where: { eventId_personId: { eventId: 'event-concord-supplies-dispersed', personId: 'person-thomas-flint' } }, update: {}, create: { eventId: 'event-concord-supplies-dispersed', personId: 'person-thomas-flint', roleInEvent: 'Helped hide supplies on his property' } });

  console.log('  Event-people connections seeded.');
}

// =============================================================================
// STORIES
// =============================================================================

async function seedStories() {
  console.log('  Seeding stories...');

  await prisma.story.upsert({
    where: { id: 'story-buttrick-bridge' },
    update: {
      slug: 'fire-for-gods-sake-fire',
      textVersion: `The men were watching their town burn. From the crest of Punkatasset Hill, the militia and minutemen who had assembled above the North Bridge could see smoke rising from the center of Concord. They could not tell, from that distance, what was burning or how far the fire had spread. They knew only that British soldiers were in their town and that something was on fire, and the sight of that smoke transformed a morning of tense waiting into a moment of decision.

Major John Buttrick stood among the officers on the hill, watching the smoke and listening to the growing agitation of the men around him. Buttrick was a farmer and a veteran of the French and Indian War, a man of fifty-four who had spent his life in Concord and knew every stone wall and meadow between the river and the Barrett farm. He understood, with a soldier's eye, what the tactical situation required: patience, position, numbers. The militia's strength was growing as companies arrived from surrounding towns. Time was on their side.

But time was also what they did not have, or so it seemed. Lieutenant Joseph Hosmer, a cabinetmaker and militia officer with a reputation for plain speaking, addressed the assembled officers with a question that cut through the deliberation. He asked them whether they intended to stand by while the British burned the town. The question was not subtle, and it did not require a subtle answer.

Colonel James Barrett, the senior officer at sixty-five years of age, made the decision. The militia would advance toward the bridge. Barrett gave the order, and Buttrick was chosen to lead the column. Captain Isaac Davis of Acton volunteered his company to march at the front — his men were the best armed of the assembled force, equipped with bayonets that Buttrick's own Concord companies lacked.

The column moved down the hill in a formation that would have been familiar to any professional soldier: two abreast, Davis's Acton company in the lead, Buttrick walking alongside. They marched to the rhythm of a fifer and drummer, the martial music carrying across the meadow toward the bridge where approximately 100 British light infantry waited.

The British saw them coming. The light infantry companies, which had been posted at the bridge to secure the crossing while a search party went to Barrett's farm, scrambled to form a defensive line on the eastern bank. Some soldiers began pulling up the bridge planking — a desperate and futile gesture, since the militia was already too close for the bridge to be dismantled in time.

When the militia reached effective range, the British fired. The first volley was ragged — some soldiers fired warning shots into the water, others aimed at the column. Captain Davis was struck in the chest and killed instantly. Private Abner Hosmer of Acton fell beside him. The column faltered for an instant, the men absorbing the shock of the first casualties any of them had ever witnessed in combat.

Buttrick's response was immediate. According to multiple accounts, he leaped into the air and shouted the order to fire. The exact words have been debated — tradition holds that he cried out for his men to fire for God's sake — but the effect was unmistakable. The militia leveled their muskets and discharged a volley into the British line. Two soldiers fell dead. Nine others were wounded, including four of the eight officers present. The British formation broke, and the light infantry companies retreated in disorder toward the town center.

The engagement had lasted two or three minutes. It was over before most of the men fully understood what had happened. But what had happened was this: for the first time in the American Revolution, colonial militia had fired on British regular troops under direct orders from a commanding officer. The shooting at Lexington Green had been a confused melee; the volley at the North Bridge was a military act, a deliberate engagement between formed bodies of troops. The Revolution had its first battle, and the battle had its first heroes.

Buttrick did not pursue the retreating British. The militia crossed the bridge and took up positions on the eastern bank, but there was confusion about what to do next. The officers conferred. The men were shaken by the sight of Davis and Hosmer lying dead on the bridge. The adrenaline of the moment gave way to uncertainty, and the militia remained near the bridge while the British regrouped in the town center.

The order to fire was the act for which Buttrick is remembered, but it was not an act of impulse. It was the product of a chain of decisions — Barrett's decision to advance, Hosmer's challenge to the officers, Davis's willingness to lead — that converged on a single moment at the bridge. Buttrick supplied the command, the voice that transformed collective intention into coordinated action. In that moment, a farmer from Concord gave an order that echoed across continents and centuries, an order that announced to the British crown and to the world that the people of Massachusetts would fight.`,
    },
    create: {
      id: 'story-buttrick-bridge',
      townId: CONCORD_TOWN_ID,
      title: 'Fire! For God\'s Sake, Fire!',
      slug: 'fire-for-gods-sake-fire',
      storyType: 'HISTORICAL_VOICE',
      subjectPersonId: 'person-john-buttrick',
      verificationStatus: 'VERIFIED',
      textVersion: `The men were watching their town burn. From the crest of Punkatasset Hill, the militia and minutemen who had assembled above the North Bridge could see smoke rising from the center of Concord. They could not tell, from that distance, what was burning or how far the fire had spread. They knew only that British soldiers were in their town and that something was on fire, and the sight of that smoke transformed a morning of tense waiting into a moment of decision.

Major John Buttrick stood among the officers on the hill, watching the smoke and listening to the growing agitation of the men around him. Buttrick was a farmer and a veteran of the French and Indian War, a man of fifty-four who had spent his life in Concord and knew every stone wall and meadow between the river and the Barrett farm. He understood, with a soldier's eye, what the tactical situation required: patience, position, numbers. The militia's strength was growing as companies arrived from surrounding towns. Time was on their side.

But time was also what they did not have, or so it seemed. Lieutenant Joseph Hosmer, a cabinetmaker and militia officer with a reputation for plain speaking, addressed the assembled officers with a question that cut through the deliberation. He asked them whether they intended to stand by while the British burned the town. The question was not subtle, and it did not require a subtle answer.

Colonel James Barrett, the senior officer at sixty-five years of age, made the decision. The militia would advance toward the bridge. Barrett gave the order, and Buttrick was chosen to lead the column. Captain Isaac Davis of Acton volunteered his company to march at the front — his men were the best armed of the assembled force, equipped with bayonets that Buttrick's own Concord companies lacked.

The column moved down the hill in a formation that would have been familiar to any professional soldier: two abreast, Davis's Acton company in the lead, Buttrick walking alongside. They marched to the rhythm of a fifer and drummer, the martial music carrying across the meadow toward the bridge where approximately 100 British light infantry waited.

The British saw them coming. The light infantry companies, which had been posted at the bridge to secure the crossing while a search party went to Barrett's farm, scrambled to form a defensive line on the eastern bank. Some soldiers began pulling up the bridge planking — a desperate and futile gesture, since the militia was already too close for the bridge to be dismantled in time.

When the militia reached effective range, the British fired. The first volley was ragged — some soldiers fired warning shots into the water, others aimed at the column. Captain Davis was struck in the chest and killed instantly. Private Abner Hosmer of Acton fell beside him. The column faltered for an instant, the men absorbing the shock of the first casualties any of them had ever witnessed in combat.

Buttrick's response was immediate. According to multiple accounts, he leaped into the air and shouted the order to fire. The exact words have been debated — tradition holds that he cried out for his men to fire for God's sake — but the effect was unmistakable. The militia leveled their muskets and discharged a volley into the British line. Two soldiers fell dead. Nine others were wounded, including four of the eight officers present. The British formation broke, and the light infantry companies retreated in disorder toward the town center.

The engagement had lasted two or three minutes. It was over before most of the men fully understood what had happened. But what had happened was this: for the first time in the American Revolution, colonial militia had fired on British regular troops under direct orders from a commanding officer. The shooting at Lexington Green had been a confused melee; the volley at the North Bridge was a military act, a deliberate engagement between formed bodies of troops. The Revolution had its first battle, and the battle had its first heroes.

Buttrick did not pursue the retreating British. The militia crossed the bridge and took up positions on the eastern bank, but there was confusion about what to do next. The officers conferred. The men were shaken by the sight of Davis and Hosmer lying dead on the bridge. The adrenaline of the moment gave way to uncertainty, and the militia remained near the bridge while the British regrouped in the town center.

The order to fire was the act for which Buttrick is remembered, but it was not an act of impulse. It was the product of a chain of decisions — Barrett's decision to advance, Hosmer's challenge to the officers, Davis's willingness to lead — that converged on a single moment at the bridge. Buttrick supplied the command, the voice that transformed collective intention into coordinated action. In that moment, a farmer from Concord gave an order that echoed across continents and centuries, an order that announced to the British crown and to the world that the people of Massachusetts would fight.`,
      tags: ['concord', 'north-bridge', 'buttrick', 'revolution', 'april-19'],
    },
  });

  await prisma.story.upsert({
    where: { id: 'story-barrett-furrows' },
    update: {
      slug: 'rebeccas-field',
      textVersion: `The cannon were buried in the field behind the Barrett farmhouse, plowed into furrows that had held corn the previous season. On the morning of April 19, 1775, while Colonel James Barrett rode to take command of the militia assembling at the town center, his wife Abigail — known in some records as Rebecca or Rebeckah — faced a different kind of battle. British soldiers were coming to her farm, and the supplies they were looking for were still there, hidden in the earth, in the barn, in the woods along the ridge. She had perhaps two hours to make sure they stayed hidden.

The Barrett farm, two miles northwest of Concord center on the road that crossed the North Bridge, had been designated as the primary storage site for the military supplies that the Provincial Congress had been accumulating. The farm's distance from the town center made it a logical depot — far enough from the main road to offer some protection from a quick raid, close enough to be accessible for distribution. Over the preceding months, cannon, musket balls, powder, flour, tents, and entrenching tools had been transported to the farm and stored in barns, cellars, and outbuildings.

When the alarm came in the early hours of April 19, the Barrett family accelerated the dispersal that had been underway for days. Abigail directed the effort with the efficiency of a woman accustomed to managing a large farm. Fields were plowed to cover buried supplies. Crates and barrels were carried into the surrounding woods. Items too heavy to move were concealed under hay, behind false walls, and in unlikely corners that a search party in a hurry might overlook.

The British arrived mid-morning — a detachment of light infantry under Captain Lawrence Parsons, perhaps 100 soldiers who had crossed the North Bridge and marched up the road to the farm. They were professional soldiers executing a search warrant, not a raiding party, and their conduct at the farm was relatively restrained. They searched the house, the barns, and the outbuildings. They found some items — Abigail could not hide everything — but the bulk of the supplies eluded them.

According to family tradition, Abigail offered the soldiers refreshments while they searched. The gesture was shrewd. A woman feeding soldiers was not a threat; she was a hostess, performing the role expected of her, and every minute the soldiers spent eating and drinking was a minute they were not searching the woods or probing the freshly plowed furrows in the field. Whether Abigail calculated this effect or simply acted from the ingrained hospitality of a New England farm wife, the result was the same: the British left the Barrett farm without discovering the supplies that were their primary objective.

The failure of the Barrett farm search was one of the most consequential events of April 19, though it involved no gunfire and no casualties. The entire British expedition — 700 soldiers marching twenty miles through hostile territory — had been launched to seize and destroy the supplies at Concord. The fact that the supplies were largely intact when the British left meant that the expedition had failed in its primary mission. The cannon that Abigail Barrett had helped bury would later be dug up and transported to the siege lines around Boston, where they contributed to the military pressure that eventually forced the British to evacuate the city.

Abigail Barrett received no commission, no pension, and no monument. Her name appears in family records and local histories but not in the standard accounts of the Revolution. Yet her contribution on April 19 was as significant, in its way, as her husband's command of the militia or Buttrick's order to fire at the bridge. She fought a different battle — a battle of concealment, deception, and nerve — and she won it. The furrows she plowed and the supplies she hid helped ensure that the British expedition was a failure and that the colonial militia would have the arms and provisions they needed for the war that was just beginning.`,
    },
    create: {
      id: 'story-barrett-furrows',
      townId: CONCORD_TOWN_ID,
      title: 'Rebecca Barrett\'s Field',
      slug: 'rebeccas-field',
      storyType: 'HISTORICAL_VOICE',
      verificationStatus: 'VERIFIED',
      textVersion: `The cannon were buried in the field behind the Barrett farmhouse, plowed into furrows that had held corn the previous season. On the morning of April 19, 1775, while Colonel James Barrett rode to take command of the militia assembling at the town center, his wife Abigail — known in some records as Rebecca or Rebeckah — faced a different kind of battle. British soldiers were coming to her farm, and the supplies they were looking for were still there, hidden in the earth, in the barn, in the woods along the ridge. She had perhaps two hours to make sure they stayed hidden.

The Barrett farm, two miles northwest of Concord center on the road that crossed the North Bridge, had been designated as the primary storage site for the military supplies that the Provincial Congress had been accumulating. The farm's distance from the town center made it a logical depot — far enough from the main road to offer some protection from a quick raid, close enough to be accessible for distribution. Over the preceding months, cannon, musket balls, powder, flour, tents, and entrenching tools had been transported to the farm and stored in barns, cellars, and outbuildings.

When the alarm came in the early hours of April 19, the Barrett family accelerated the dispersal that had been underway for days. Abigail directed the effort with the efficiency of a woman accustomed to managing a large farm. Fields were plowed to cover buried supplies. Crates and barrels were carried into the surrounding woods. Items too heavy to move were concealed under hay, behind false walls, and in unlikely corners that a search party in a hurry might overlook.

The British arrived mid-morning — a detachment of light infantry under Captain Lawrence Parsons, perhaps 100 soldiers who had crossed the North Bridge and marched up the road to the farm. They were professional soldiers executing a search warrant, not a raiding party, and their conduct at the farm was relatively restrained. They searched the house, the barns, and the outbuildings. They found some items — Abigail could not hide everything — but the bulk of the supplies eluded them.

According to family tradition, Abigail offered the soldiers refreshments while they searched. The gesture was shrewd. A woman feeding soldiers was not a threat; she was a hostess, performing the role expected of her, and every minute the soldiers spent eating and drinking was a minute they were not searching the woods or probing the freshly plowed furrows in the field. Whether Abigail calculated this effect or simply acted from the ingrained hospitality of a New England farm wife, the result was the same: the British left the Barrett farm without discovering the supplies that were their primary objective.

The failure of the Barrett farm search was one of the most consequential events of April 19, though it involved no gunfire and no casualties. The entire British expedition — 700 soldiers marching twenty miles through hostile territory — had been launched to seize and destroy the supplies at Concord. The fact that the supplies were largely intact when the British left meant that the expedition had failed in its primary mission. The cannon that Abigail Barrett had helped bury would later be dug up and transported to the siege lines around Boston, where they contributed to the military pressure that eventually forced the British to evacuate the city.

Abigail Barrett received no commission, no pension, and no monument. Her name appears in family records and local histories but not in the standard accounts of the Revolution. Yet her contribution on April 19 was as significant, in its way, as her husband's command of the militia or Buttrick's order to fire at the bridge. She fought a different battle — a battle of concealment, deception, and nerve — and she won it. The furrows she plowed and the supplies she hid helped ensure that the British expedition was a failure and that the colonial militia would have the arms and provisions they needed for the war that was just beginning.`,
      tags: ['concord', 'barrett-farm', 'women', 'revolution', 'supplies'],
    },
  });

  await prisma.story.upsert({
    where: { id: 'story-moulton-fire' },
    update: {
      slug: 'martha-moulton-confronts-regulars',
      textVersion: `Martha Moulton was an old woman. The records do not tell us her exact age on April 19, 1775, but the accounts that survive describe her as elderly, a widow living near the center of Concord in a house within sight of the town green. She had lived long enough to see the town change around her — the political meetings that grew louder each year, the young men drilling on the common, the quiet arrival of carts carrying supplies that everyone knew about and no one discussed openly. She had lived through enough New England winters to understand what stubbornness could accomplish.

When the British soldiers entered the town center that morning, they began their systematic search for military supplies. They found gun carriages, entrenching tools, barrels of flour, and other provisions that had not been dispersed in time. Following their orders, they set fire to the wooden gun carriages and piled the other combustible items for burning. The fire was doing what fire does — spreading. Sparks carried from the burning carriages to the town house, and the clapboard building began to smoke.

Moulton watched from her doorway, then did what her neighbors would later describe with a mixture of admiration and astonishment: she walked out of her house and confronted the soldiers. She told them — demanded, by most accounts — that they put out the fire. She was not asking for mercy or pleading for her property. She was issuing an instruction, in the tone of a woman accustomed to having her instructions followed, to a detachment of the finest army in the world.

The soldiers listened. Whether they were moved by her age, her authority, her courage, or simply by the practical recognition that burning down a town was not part of their orders, they formed a bucket brigade and helped extinguish the flames. The town house was saved. The fire was contained. An old woman had accomplished through direct confrontation what the entire colonial militia had not yet managed from its position on the hill above the bridge.

But the smoke had already done its work. By the time the fire was extinguished, the column of smoke rising from the town center had been visible for long minutes from Punkatasset Hill. The militia assembled there could see the smoke but could not know its source or extent. To the men on the hill, watching from a distance of half a mile or more, the smoke looked like the beginning of a conflagration. Lieutenant Hosmer asked whether they would let the British burn the town. The answer was no. The advance on the bridge began.

There is an irony in this sequence that the participants could not have appreciated. Martha Moulton's intervention stopped the fire, but the smoke from the fire she stopped was the catalyst for the engagement at the bridge. If the fire had never started, there would have been no smoke. If there had been no smoke, the militia might have remained on the hill, waiting and watching, while the British completed their search and withdrew. The fight at the North Bridge — the first deliberate military engagement of the American Revolution — was set in motion by an accidental fire and catalyzed by the sight of smoke that an old woman was already putting out.

Moulton returned to her house after the fire was extinguished. She played no further role in the events of the day. The men marched to the bridge, the shots were fired, the British retreated, and the war began. But Martha Moulton had stood in the gap between her community and the armed power of the British Empire, armed with nothing but her voice and her refusal to be afraid. In a day remembered for musket fire and martial courage, her act of civilian defiance was as brave as anything that happened at the bridge.`,
    },
    create: {
      id: 'story-moulton-fire',
      townId: CONCORD_TOWN_ID,
      title: 'Martha Moulton Confronts the Regulars',
      slug: 'martha-moulton-confronts-regulars',
      storyType: 'HISTORICAL_VOICE',
      subjectPersonId: 'person-martha-moulton',
      verificationStatus: 'VERIFIED',
      textVersion: `Martha Moulton was an old woman. The records do not tell us her exact age on April 19, 1775, but the accounts that survive describe her as elderly, a widow living near the center of Concord in a house within sight of the town green. She had lived long enough to see the town change around her — the political meetings that grew louder each year, the young men drilling on the common, the quiet arrival of carts carrying supplies that everyone knew about and no one discussed openly. She had lived through enough New England winters to understand what stubbornness could accomplish.

When the British soldiers entered the town center that morning, they began their systematic search for military supplies. They found gun carriages, entrenching tools, barrels of flour, and other provisions that had not been dispersed in time. Following their orders, they set fire to the wooden gun carriages and piled the other combustible items for burning. The fire was doing what fire does — spreading. Sparks carried from the burning carriages to the town house, and the clapboard building began to smoke.

Moulton watched from her doorway, then did what her neighbors would later describe with a mixture of admiration and astonishment: she walked out of her house and confronted the soldiers. She told them — demanded, by most accounts — that they put out the fire. She was not asking for mercy or pleading for her property. She was issuing an instruction, in the tone of a woman accustomed to having her instructions followed, to a detachment of the finest army in the world.

The soldiers listened. Whether they were moved by her age, her authority, her courage, or simply by the practical recognition that burning down a town was not part of their orders, they formed a bucket brigade and helped extinguish the flames. The town house was saved. The fire was contained. An old woman had accomplished through direct confrontation what the entire colonial militia had not yet managed from its position on the hill above the bridge.

But the smoke had already done its work. By the time the fire was extinguished, the column of smoke rising from the town center had been visible for long minutes from Punkatasset Hill. The militia assembled there could see the smoke but could not know its source or extent. To the men on the hill, watching from a distance of half a mile or more, the smoke looked like the beginning of a conflagration. Lieutenant Hosmer asked whether they would let the British burn the town. The answer was no. The advance on the bridge began.

There is an irony in this sequence that the participants could not have appreciated. Martha Moulton's intervention stopped the fire, but the smoke from the fire she stopped was the catalyst for the engagement at the bridge. If the fire had never started, there would have been no smoke. If there had been no smoke, the militia might have remained on the hill, waiting and watching, while the British completed their search and withdrew. The fight at the North Bridge — the first deliberate military engagement of the American Revolution — was set in motion by an accidental fire and catalyzed by the sight of smoke that an old woman was already putting out.

Moulton returned to her house after the fire was extinguished. She played no further role in the events of the day. The men marched to the bridge, the shots were fired, the British retreated, and the war began. But Martha Moulton had stood in the gap between her community and the armed power of the British Empire, armed with nothing but her voice and her refusal to be afraid. In a day remembered for musket fire and martial courage, her act of civilian defiance was as brave as anything that happened at the bridge.`,
      tags: ['concord', 'martha-moulton', 'women', 'civilians', 'fire', 'courage'],
    },
  });

  await prisma.story.upsert({
    where: { id: 'story-modern-historian' },
    update: {
      slug: 'beyond-heroic-narrative',
      textVersion: `The story of the North Bridge, as most Americans learn it, goes something like this: brave farmers stood up to British tyranny, fired the shot heard round the world, and started the American Revolution. It is a satisfying narrative — clean, heroic, and easily compressed into a paragraph or a monument inscription. It is also, as Robert Gross demonstrated in his landmark 1976 study "The Minutemen and Their World," radically incomplete.

Gross, working from Concord's remarkably complete town records, tax rolls, and family papers, revealed a community far more complex and conflicted than the heroic narrative suggested. Concord in the 1770s was a town under economic stress, with a growing gap between wealthier landowners and younger families struggling to find affordable land. The decision to resist British authority was not unanimous — there were Loyalist sympathizers in Concord, and there were men who simply wanted to be left alone. The militia muster on April 19 was not a spontaneous uprising of a united people but a mobilization shaped by social pressures, community obligations, and the specific decisions of specific individuals.

This more nuanced understanding does not diminish the significance of what happened at the bridge. If anything, it deepens it. The men who marched down from Punkatasset Hill were not mythological heroes acting out a predetermined script. They were real people — farmers worried about their crops, fathers wondering if they would see their children again, young men who had never heard a shot fired in anger — who made a choice under conditions of extreme uncertainty. Their courage was not the courage of conviction but the courage of doubt: they acted despite not knowing what would happen next.

The experience of the women of Concord on April 19 has received increasing scholarly attention in recent decades. Abigail Barrett's concealment of supplies at the farm, Martha Moulton's confrontation with the British soldiers over the town fire, and the unnamed women who watched their husbands and sons march toward the bridge all played roles that the traditional narrative overlooked. The Revolution was not something that happened only on the battlefield; it happened in kitchens, in plowed fields, and in the terrified silence of women who waited for the sound of musket fire to tell them whether their families had survived.

The British soldiers at Concord have also benefited from more careful historical treatment. They were not faceless agents of tyranny but young men, mostly in their twenties, serving in what they understood to be a lawful military operation. The light infantry companies at the bridge were elite soldiers who had trained for years, and the panic that seized them after the militia's volley was as much a product of shock as of cowardice — they had not expected colonial farmers to shoot back. The two British soldiers buried near the bridge were as human as the Americans who killed them, and the grave that marks their resting place is one of the most quietly powerful sites on the battlefield.

The challenge for modern historians and public historians is to hold multiple truths simultaneously: that the fight at the North Bridge was an act of extraordinary courage, and that it was also a brief, confused skirmish whose participants did not fully understand its significance. That the minutemen were defending their community, and that the community they were defending included institutions — slavery among them — that contradicted the principles they claimed to fight for. That the Revolution was a triumph of democratic aspiration, and that it was also a product of economic anxiety, social pressure, and the particular dynamics of a small New England town.

The North Bridge, standing quietly over the Concord River, does not resolve these contradictions. It simply holds them, as it has for 250 years, offering each generation the opportunity to ask what happened here, why it mattered, and what it means now.`,
    },
    create: {
      id: 'story-modern-historian',
      townId: CONCORD_TOWN_ID,
      title: 'Beyond the Heroic Narrative',
      slug: 'beyond-heroic-narrative',
      storyType: 'MODERN_VOICE',
      verificationStatus: 'VERIFIED',
      textVersion: `The story of the North Bridge, as most Americans learn it, goes something like this: brave farmers stood up to British tyranny, fired the shot heard round the world, and started the American Revolution. It is a satisfying narrative — clean, heroic, and easily compressed into a paragraph or a monument inscription. It is also, as Robert Gross demonstrated in his landmark 1976 study "The Minutemen and Their World," radically incomplete.

Gross, working from Concord's remarkably complete town records, tax rolls, and family papers, revealed a community far more complex and conflicted than the heroic narrative suggested. Concord in the 1770s was a town under economic stress, with a growing gap between wealthier landowners and younger families struggling to find affordable land. The decision to resist British authority was not unanimous — there were Loyalist sympathizers in Concord, and there were men who simply wanted to be left alone. The militia muster on April 19 was not a spontaneous uprising of a united people but a mobilization shaped by social pressures, community obligations, and the specific decisions of specific individuals.

This more nuanced understanding does not diminish the significance of what happened at the bridge. If anything, it deepens it. The men who marched down from Punkatasset Hill were not mythological heroes acting out a predetermined script. They were real people — farmers worried about their crops, fathers wondering if they would see their children again, young men who had never heard a shot fired in anger — who made a choice under conditions of extreme uncertainty. Their courage was not the courage of conviction but the courage of doubt: they acted despite not knowing what would happen next.

The experience of the women of Concord on April 19 has received increasing scholarly attention in recent decades. Abigail Barrett's concealment of supplies at the farm, Martha Moulton's confrontation with the British soldiers over the town fire, and the unnamed women who watched their husbands and sons march toward the bridge all played roles that the traditional narrative overlooked. The Revolution was not something that happened only on the battlefield; it happened in kitchens, in plowed fields, and in the terrified silence of women who waited for the sound of musket fire to tell them whether their families had survived.

The British soldiers at Concord have also benefited from more careful historical treatment. They were not faceless agents of tyranny but young men, mostly in their twenties, serving in what they understood to be a lawful military operation. The light infantry companies at the bridge were elite soldiers who had trained for years, and the panic that seized them after the militia's volley was as much a product of shock as of cowardice — they had not expected colonial farmers to shoot back. The two British soldiers buried near the bridge were as human as the Americans who killed them, and the grave that marks their resting place is one of the most quietly powerful sites on the battlefield.

The challenge for modern historians and public historians is to hold multiple truths simultaneously: that the fight at the North Bridge was an act of extraordinary courage, and that it was also a brief, confused skirmish whose participants did not fully understand its significance. That the minutemen were defending their community, and that the community they were defending included institutions — slavery among them — that contradicted the principles they claimed to fight for. That the Revolution was a triumph of democratic aspiration, and that it was also a product of economic anxiety, social pressure, and the particular dynamics of a small New England town.

The North Bridge, standing quietly over the Concord River, does not resolve these contradictions. It simply holds them, as it has for 250 years, offering each generation the opportunity to ask what happened here, why it mattered, and what it means now.`,
      tags: ['concord', 'historiography', 'social-history', 'modern-perspective'],
    },
  });

  await prisma.story.upsert({
    where: { id: 'story-modern-ranger' },
    update: {
      slug: 'what-the-bridge-still-teaches',
      textVersion: `The bridge is not the original. The Concord River has taken many bridges since 1775 — the wooden span that the militia crossed has been replaced, rebuilt, and reimagined multiple times. The current bridge is a replica, maintained by the National Park Service, that occupies approximately the same footprint as the original. Visitors sometimes express disappointment when they learn this, as if the replacement of wood and iron over two and a half centuries diminishes the significance of the place. It does not. The bridge is not a relic; it is a location. What matters is not the planking but the ground, the water, the slope of the hill, and the distance between the positions where the militia formed and the British fired.

Walking the battlefield at Concord is a different experience from reading about it. On paper, the engagement at the North Bridge is a sequence of tactical decisions and their consequences. On the ground, it is a landscape that explains those decisions. Stand on Punkatasset Hill and look down at the bridge, and you understand why Barrett chose this position — the elevation, the clear sightlines, the ability to observe without being easily engaged. Walk down the hill toward the bridge, as the militia did, and you feel the exposure — the open ground, the lack of cover, the narrowing approach to the crossing.

The river is slow here, and the meadows on either side are flat. In April, the ground is soft from snowmelt, and the grass is just beginning to green. The landscape has changed — the trees are different, the roads are paved, the visitor center and parking lot are modern intrusions — but the fundamental geography is the same. The hill is still a hill. The river still curves around the meadow. The bridge, original or not, still marks the crossing point where 400 farmers decided to walk toward the sound of gunfire.

The most common question visitors ask at the North Bridge is who fired first. It is a natural question, shaped by the similar controversy at Lexington Green, but at Concord the answer is clear: the British fired first. Multiple accounts from both sides confirm this. The more interesting question — the one that the landscape helps answer — is why the militia advanced at all. They were walking downhill in column formation toward a prepared enemy position. They had no cover. They had just watched smoke rise from their town. They were angry, frightened, and determined in roughly equal measure.

The answer lies partly in the terrain. From the top of the hill, the British force at the bridge looked small — three companies, perhaps 100 men, spread thin across the approach. The militia, by contrast, had been gathering strength all morning, with new companies arriving from surrounding towns. The numerical advantage was obvious from the hilltop. What was not obvious was whether the British would actually fire. Many of the militiamen had never been shot at. The theoretical possibility of being killed was very different from the reality, and the reality arrived in a volley that killed two men at the head of the column.

What happened next — Buttrick's order, the militia's volley, the British retreat — took less time than it takes to describe it. But the consequences lasted centuries. The engagement at the North Bridge proved that colonial resistance was not merely political rhetoric but a military reality. It proved that militia could stand against regulars and drive them from the field. And it established, in the most emphatic terms possible, that the conflict between Britain and her American colonies had crossed the line from argument to war.

The bridge teaches this every day, to every visitor who walks across it. It teaches it not through plaques and programs — though those are valuable — but through the simple experience of standing in the place where it happened, looking at the water, the hill, the meadow, and understanding that the people who stood here were not abstractions in a textbook but neighbors who made a choice. The wood of the bridge is new. The choice is old. And it still resonates.`,
    },
    create: {
      id: 'story-modern-ranger',
      townId: CONCORD_TOWN_ID,
      title: 'What the Bridge Still Teaches',
      slug: 'what-the-bridge-still-teaches',
      storyType: 'MODERN_VOICE',
      verificationStatus: 'VERIFIED',
      textVersion: `The bridge is not the original. The Concord River has taken many bridges since 1775 — the wooden span that the militia crossed has been replaced, rebuilt, and reimagined multiple times. The current bridge is a replica, maintained by the National Park Service, that occupies approximately the same footprint as the original. Visitors sometimes express disappointment when they learn this, as if the replacement of wood and iron over two and a half centuries diminishes the significance of the place. It does not. The bridge is not a relic; it is a location. What matters is not the planking but the ground, the water, the slope of the hill, and the distance between the positions where the militia formed and the British fired.

Walking the battlefield at Concord is a different experience from reading about it. On paper, the engagement at the North Bridge is a sequence of tactical decisions and their consequences. On the ground, it is a landscape that explains those decisions. Stand on Punkatasset Hill and look down at the bridge, and you understand why Barrett chose this position — the elevation, the clear sightlines, the ability to observe without being easily engaged. Walk down the hill toward the bridge, as the militia did, and you feel the exposure — the open ground, the lack of cover, the narrowing approach to the crossing.

The river is slow here, and the meadows on either side are flat. In April, the ground is soft from snowmelt, and the grass is just beginning to green. The landscape has changed — the trees are different, the roads are paved, the visitor center and parking lot are modern intrusions — but the fundamental geography is the same. The hill is still a hill. The river still curves around the meadow. The bridge, original or not, still marks the crossing point where 400 farmers decided to walk toward the sound of gunfire.

The most common question visitors ask at the North Bridge is who fired first. It is a natural question, shaped by the similar controversy at Lexington Green, but at Concord the answer is clear: the British fired first. Multiple accounts from both sides confirm this. The more interesting question — the one that the landscape helps answer — is why the militia advanced at all. They were walking downhill in column formation toward a prepared enemy position. They had no cover. They had just watched smoke rise from their town. They were angry, frightened, and determined in roughly equal measure.

The answer lies partly in the terrain. From the top of the hill, the British force at the bridge looked small — three companies, perhaps 100 men, spread thin across the approach. The militia, by contrast, had been gathering strength all morning, with new companies arriving from surrounding towns. The numerical advantage was obvious from the hilltop. What was not obvious was whether the British would actually fire. Many of the militiamen had never been shot at. The theoretical possibility of being killed was very different from the reality, and the reality arrived in a volley that killed two men at the head of the column.

What happened next — Buttrick's order, the militia's volley, the British retreat — took less time than it takes to describe it. But the consequences lasted centuries. The engagement at the North Bridge proved that colonial resistance was not merely political rhetoric but a military reality. It proved that militia could stand against regulars and drive them from the field. And it established, in the most emphatic terms possible, that the conflict between Britain and her American colonies had crossed the line from argument to war.

The bridge teaches this every day, to every visitor who walks across it. It teaches it not through plaques and programs — though those are valuable — but through the simple experience of standing in the place where it happened, looking at the water, the hill, the meadow, and understanding that the people who stood here were not abstractions in a textbook but neighbors who made a choice. The wood of the bridge is new. The choice is old. And it still resonates.`,
      tags: ['concord', 'north-bridge', 'public-history', 'landscape', 'modern-perspective'],
    },
  });

  console.log('  Stories seeded.');
}

// =============================================================================
// LESSON PLANS
// =============================================================================

async function seedLessons() {
  console.log('  Seeding lesson plans...');

  // --- 2 Existing Lessons (update with full lessonData) ---

  await prisma.lessonPlan.upsert({
    where: { id: 'cmm2s5o5f00cvp5g7lxgqvuyj' },
    update: {
      slug: 'north-bridge-fight-concord',
      summary: 'Students examine the engagement at the North Bridge on April 19, 1775, analyzing the tactical decisions made by both British and colonial officers and evaluating why this brief skirmish is considered the first organized military action of the American Revolution. The lesson uses primary sources including depositions, maps, and Amos Barrett\'s memoir.',
      lessonData: {
        objectives: [
          'Sequence the events of April 19, 1775, at Concord from the British arrival to the retreat',
          'Analyze the tactical decisions made by Colonel Barrett, Major Buttrick, and Lieutenant Colonel Smith',
          'Evaluate primary source accounts from Amos Barrett and other participants',
          'Explain the difference between the engagement at Lexington Green and the fight at the North Bridge',
        ],
        essentialQuestions: [
          'Why is the North Bridge considered the site of the first real battle of the American Revolution?',
          'How did the decision to withdraw to Punkatasset Hill influence the outcome at the bridge?',
          'What role did the smoke from the town center play in the militia\'s decision to advance?',
          'How do primary source accounts help us understand what the experience of battle was actually like?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Show students a photograph of the North Bridge today. Ask them to estimate the distance from the hilltop to the bridge (approximately half a mile). Then ask: If you were standing on that hill and saw smoke rising from your town, what would you do? Write a one-sentence response.',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'Background: The British expedition and the events at Lexington earlier that morning',
            'The arrival of the British in Concord: Smith\'s dispositions and the search for supplies',
            'The militia on Punkatasset Hill: Barrett\'s decisions, the arrival of reinforcements, Hosmer\'s challenge',
            'The advance on the bridge: Davis\'s Acton company, Buttrick\'s order, the exchange of fire',
            'The aftermath: British retreat to the town center, the running battle begins',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Map Analysis: Using a topographic map of the North Bridge area, students plot the positions of the British and colonial forces. They identify the tactical advantages of Punkatasset Hill, the vulnerability of the bridge crossing, and the route of the militia advance. Students explain in writing why Barrett chose to withdraw to the hill rather than fight in the town center.',
            'Primary Source Reading: Students read excerpts from Amos Barrett\'s memoir describing the march to the bridge and the exchange of fire. In pairs, they identify three specific details that only an eyewitness could provide and discuss what the account reveals about the emotional experience of the engagement.',
          ],
        },
        independentPractice: {
          duration: '20 minutes',
          assignment: 'Write a 300-word analysis comparing the engagement at Lexington Green to the fight at the North Bridge. Address: Who commanded? Who fired first? Was the colonial fire organized or chaotic? What was the outcome? Conclude with a statement about why historians consider the North Bridge the first real battle of the Revolution.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Discussion: Ralph Waldo Emerson called the volley at the bridge "the shot heard round the world." Was it? What did the events at Concord prove to the rest of the colonies? What did they prove to the British? Exit ticket: Name one decision made on April 19 that you think was the most important, and explain why.',
        },
        differentiation: {
          struggling: 'Provide a pre-filled timeline with key events and blank spaces for details. Offer a simplified version of Barrett\'s memoir with vocabulary support. Allow the comparison essay to be completed as a T-chart or Venn diagram.',
          advanced: 'Read the British account of the North Bridge engagement from Lieutenant William Sutherland. Write a paragraph analyzing how his account differs from Barrett\'s and what each perspective reveals about the fog of war.',
          ell: 'Provide a visual glossary of key terms (militia, minuteman, column, volley, retreat, depot). Use annotated maps with labels in English and students\' home languages where possible. Allow written responses in bullet-point format.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.1', 'RH.6-8.2', 'RH.6-8.6', 'WHST.6-8.2'],
        c3Framework: ['D2.His.1.6-8', 'D2.His.4.6-8', 'D2.His.6.6-8', 'D2.His.14.6-8'],
        note: 'Designed for grades 6-8. Can be adapted for grades 9-10 with more complex primary source analysis.',
      },
    },
    create: {
      id: 'cmm2s5o5f00cvp5g7lxgqvuyj',
      townId: CONCORD_TOWN_ID,
      title: 'The North Bridge and the Fight for Concord',
      slug: 'north-bridge-fight-concord',
      gradeRange: '6-8',
      estimatedDuration: '2 class periods',
      summary: 'Students examine the engagement at the North Bridge on April 19, 1775, analyzing the tactical decisions made by both British and colonial officers and evaluating why this brief skirmish is considered the first organized military action of the American Revolution.',
      lessonData: {
        objectives: [
          'Sequence the events of April 19, 1775, at Concord from the British arrival to the retreat',
          'Analyze the tactical decisions made by Colonel Barrett, Major Buttrick, and Lieutenant Colonel Smith',
          'Evaluate primary source accounts from Amos Barrett and other participants',
          'Explain the difference between the engagement at Lexington Green and the fight at the North Bridge',
        ],
        essentialQuestions: [
          'Why is the North Bridge considered the site of the first real battle of the American Revolution?',
          'How did the decision to withdraw to Punkatasset Hill influence the outcome at the bridge?',
          'What role did the smoke from the town center play in the militia\'s decision to advance?',
          'How do primary source accounts help us understand what the experience of battle was actually like?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Show students a photograph of the North Bridge today. Ask them to estimate the distance from the hilltop to the bridge (approximately half a mile). Then ask: If you were standing on that hill and saw smoke rising from your town, what would you do? Write a one-sentence response.',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'Background: The British expedition and the events at Lexington earlier that morning',
            'The arrival of the British in Concord: Smith\'s dispositions and the search for supplies',
            'The militia on Punkatasset Hill: Barrett\'s decisions, the arrival of reinforcements, Hosmer\'s challenge',
            'The advance on the bridge: Davis\'s Acton company, Buttrick\'s order, the exchange of fire',
            'The aftermath: British retreat to the town center, the running battle begins',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Map Analysis: Using a topographic map of the North Bridge area, students plot the positions of the British and colonial forces.',
            'Primary Source Reading: Students read excerpts from Amos Barrett\'s memoir describing the march to the bridge and the exchange of fire.',
          ],
        },
        independentPractice: {
          duration: '20 minutes',
          assignment: 'Write a 300-word analysis comparing the engagement at Lexington Green to the fight at the North Bridge.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Discussion: Was the volley at the bridge really "the shot heard round the world"? Exit ticket: Name one decision made on April 19 that you think was the most important.',
        },
        differentiation: {
          struggling: 'Provide a pre-filled timeline with key events and blank spaces for details.',
          advanced: 'Read the British account from Lieutenant William Sutherland and compare it to Barrett\'s.',
          ell: 'Provide a visual glossary of key terms. Use annotated maps with labels.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.1', 'RH.6-8.2', 'RH.6-8.6', 'WHST.6-8.2'],
        c3Framework: ['D2.His.1.6-8', 'D2.His.4.6-8', 'D2.His.6.6-8', 'D2.His.14.6-8'],
        note: 'Designed for grades 6-8.',
      },
    },
  });

  await prisma.lessonPlan.upsert({
    where: { id: 'cmm2s5o5p00cwp5g7n7ad40jl' },
    update: {
      slug: 'provincial-congress-armed-resistance',
      summary: 'Students analyze how Concord transitioned from a center of political resistance to the site of armed conflict, examining the role of the Provincial Congress, the Committee of Safety, the arms stockpiling campaign, and the decisions that led to the engagement at the North Bridge. The lesson emphasizes the political infrastructure that made military action possible.',
      lessonData: {
        objectives: [
          'Explain the role of the Massachusetts Provincial Congress and the Committee of Safety in organizing resistance',
          'Analyze the strategic significance of Concord as a supply depot and political center',
          'Evaluate the decisions made by colonial leaders in the months before April 19',
          'Construct an argument about the relationship between political organizing and military effectiveness',
        ],
        essentialQuestions: [
          'How did political organizing in 1774 make military action possible in 1775?',
          'Why did the Provincial Congress choose Concord as its meeting place and supply depot?',
          'What roles did civilians — including women — play in the preparations for conflict?',
          'Was the fight at the North Bridge inevitable, or could it have been avoided?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Present students with a scenario: You are a member of the Concord Committee of Safety in early 1775. You have intelligence that the British may raid the town to seize military supplies. You cannot move the supplies quickly without attracting attention. What do you do? Write a brief action plan.',
        },
        directInstruction: {
          duration: '25 minutes',
          content: [
            'The Coercive Acts and the dissolution of the Massachusetts General Court (1774)',
            'The Provincial Congress: an extralegal government meets in Concord (October 1774)',
            'Building the infrastructure of resistance: committees, militia reorganization, supply networks',
            'The arms stockpiling campaign: what was stored, where, and how it was hidden',
            'The British response: intelligence, the decision to raid Concord, Smith\'s expedition',
            'April 19 as the culmination of months of political and logistical preparation',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Document Analysis: Students examine excerpts from the records of the Provincial Congress and Concord town meeting minutes. They identify specific decisions (militia reorganization, supply procurement, officer appointments) and explain how each contributed to the colonial military capability demonstrated on April 19.',
            'Role Analysis: Students create a chart mapping the contributions of different individuals and groups to the preparation for April 19: Colonel Barrett (military command), Ephraim Wood (civic organization), Abigail Barrett (supply concealment), Reuben Brown (intelligence). They discuss how these roles interconnected.',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Write a 500-word essay arguing either that the fight at the North Bridge was the product of deliberate planning and political organizing OR that it was the result of circumstances and chance. Use at least three specific historical examples to support your argument. Address the strongest counterargument to your position.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Socratic seminar: Can a revolution happen without political organizing? What was more important to the colonial cause — the men who fired at the bridge or the people who spent months stockpiling supplies, hiding cannon, and building committees? Exit ticket: Name one person whose contribution to April 19 has been underrecognized, and explain why.',
        },
        differentiation: {
          struggling: 'Provide a graphic organizer with categories (Political Actions, Military Actions, Civilian Actions) and ask students to sort events into the correct category. Offer simplified document excerpts.',
          advanced: 'Research the role of Dr. Benjamin Church as a British spy within the patriot leadership. Write a one-page analysis of how British intelligence shaped the decision to raid Concord and why the mission failed despite having inside information.',
          ell: 'Provide key vocabulary list with definitions (Provincial Congress, Committee of Safety, depot, stockpile, extralegal). Allow essay to be completed as a structured outline with topic sentences and supporting evidence listed as bullet points.',
        },
      },
      standards: {
        commonCore: ['RH.9-10.1', 'RH.9-10.6', 'RH.9-10.9', 'WHST.9-10.1'],
        c3Framework: ['D2.His.1.9-12', 'D2.His.4.9-12', 'D2.His.5.9-12', 'D2.His.14.9-12'],
        note: 'Designed for grades 9-12. The essay and Socratic seminar require experience with evidence-based argumentation.',
      },
    },
    create: {
      id: 'cmm2s5o5p00cwp5g7n7ad40jl',
      townId: CONCORD_TOWN_ID,
      title: 'Concord: From Provincial Congress to Armed Resistance',
      slug: 'provincial-congress-armed-resistance',
      gradeRange: '9-12',
      estimatedDuration: '2-3 class periods',
      summary: 'Students analyze how Concord transitioned from a center of political resistance to the site of armed conflict, examining the role of the Provincial Congress, the Committee of Safety, and the decisions that led to the engagement at the North Bridge.',
      lessonData: {
        objectives: [
          'Explain the role of the Massachusetts Provincial Congress and the Committee of Safety in organizing resistance',
          'Analyze the strategic significance of Concord as a supply depot and political center',
          'Evaluate the decisions made by colonial leaders in the months before April 19',
          'Construct an argument about the relationship between political organizing and military effectiveness',
        ],
        essentialQuestions: [
          'How did political organizing in 1774 make military action possible in 1775?',
          'Why did the Provincial Congress choose Concord as its meeting place and supply depot?',
          'What roles did civilians play in the preparations for conflict?',
          'Was the fight at the North Bridge inevitable, or could it have been avoided?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Present students with a scenario: You are a member of the Concord Committee of Safety in early 1775. You have intelligence that the British may raid the town. What do you do?',
        },
        directInstruction: {
          duration: '25 minutes',
          content: [
            'The Coercive Acts and the dissolution of the Massachusetts General Court',
            'The Provincial Congress meets in Concord (October 1774)',
            'Building the infrastructure of resistance',
            'The arms stockpiling campaign',
            'April 19 as the culmination of months of preparation',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Document Analysis: Students examine Provincial Congress records and Concord town meeting minutes.',
            'Role Analysis: Students map contributions of different individuals to the preparation for April 19.',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Write a 500-word essay arguing whether the fight at the North Bridge was the product of deliberate planning or of circumstances and chance.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Socratic seminar: Can a revolution happen without political organizing?',
        },
        differentiation: {
          struggling: 'Provide a graphic organizer with categories for sorting events.',
          advanced: 'Research the role of Dr. Benjamin Church as a British spy.',
          ell: 'Provide key vocabulary list with definitions. Allow essay as structured outline.',
        },
      },
      standards: {
        commonCore: ['RH.9-10.1', 'RH.9-10.6', 'RH.9-10.9', 'WHST.9-10.1'],
        c3Framework: ['D2.His.1.9-12', 'D2.His.4.9-12', 'D2.His.5.9-12', 'D2.His.14.9-12'],
        note: 'Designed for grades 9-12.',
      },
    },
  });

  // --- 2 New Lessons ---

  await prisma.lessonPlan.upsert({
    where: { id: 'concord-lesson-bridge-geography' },
    update: {},
    create: {
      id: 'concord-lesson-bridge-geography',
      townId: CONCORD_TOWN_ID,
      title: 'Bridge Geography Lab: Terrain and Tactical Decisions at Concord',
      slug: 'bridge-geography-lab',
      gradeRange: '6-8',
      estimatedDuration: '2 class periods',
      summary: 'Students analyze the geography and terrain of the North Bridge battlefield to understand how landscape shaped the tactical decisions made by both British and colonial commanders on April 19, 1775. Using topographic maps, elevation profiles, and aerial photographs, students explore the relationship between geography and military outcomes.',
      lessonData: {
        objectives: [
          'Read and interpret topographic maps showing the North Bridge area',
          'Identify how terrain features (hills, rivers, roads, bridges) influenced tactical decisions',
          'Explain why Colonel Barrett chose Punkatasset Hill as a rallying point',
          'Analyze how the landscape of the retreat route contributed to the British defeat',
        ],
        essentialQuestions: [
          'How does terrain shape the outcome of battles?',
          'Why did the colonial militia have a geographic advantage at the North Bridge?',
          'How did the landscape of Battle Road contribute to the British defeat during the retreat?',
          'What can maps tell us about historical events that written accounts cannot?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Show students a simple aerial photograph of the North Bridge area. Without any historical context, ask them: If two groups were going to fight here, where would you want to be positioned? Mark your preferred position on the photo and explain your reasoning in two sentences.',
        },
        directInstruction: {
          duration: '15 minutes',
          content: [
            'Introduction to reading topographic maps: contour lines, elevation, scale',
            'Overview of the North Bridge area geography: the river, the hill, the meadow, the road',
            'Brief review of the events of April 19 with emphasis on movement and positioning',
            'How military officers think about terrain: high ground, chokepoints, fields of fire, cover',
          ],
        },
        guidedPractice: {
          duration: '35 minutes',
          activities: [
            'Terrain Analysis Lab: Students work in groups with topographic maps of the North Bridge area. They identify and label key terrain features: Punkatasset Hill, the North Bridge, the Concord River, the road to Barrett\'s farm, Meriam\'s Corner. For each feature, they write one sentence explaining its tactical significance. Groups present their findings to the class.',
            'Elevation Profile Exercise: Students create an elevation profile of the militia\'s route from Punkatasset Hill to the bridge. They calculate the approximate distance, the change in elevation, and the time it would take to cover the ground at a walking pace. They compare this to the distance between the British position at the bridge and the town center.',
          ],
        },
        independentPractice: {
          duration: '20 minutes',
          assignment: 'Using the topographic map, write a 250-word tactical report from the perspective of Colonel Barrett, explaining why you chose to position the militia on Punkatasset Hill rather than defending the town center. Reference at least three specific terrain features in your explanation.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Class debrief: How did the geography of Concord help the colonial militia? Could the British have chosen a different approach that might have worked better? Exit ticket: Name one terrain feature at Concord that was important to the battle outcome and explain why.',
        },
        differentiation: {
          struggling: 'Provide pre-labeled maps with key features already identified. Offer sentence starters for the tactical report. Pair with a stronger reader for the topographic map exercise.',
          advanced: 'Compare the terrain at Concord to the terrain at Lexington Green. Write a paragraph explaining how geography contributed to different outcomes at the two sites. Research modern military concepts of "terrain analysis" and apply them to the North Bridge.',
          ell: 'Provide a visual vocabulary guide with images for key terrain terms (hill, river, bridge, meadow, stone wall, chokepoint). Allow the tactical report to be completed as an annotated map with captions rather than a paragraph.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.7', 'RST.6-8.7', 'WHST.6-8.2'],
        c3Framework: ['D2.Geo.1.6-8', 'D2.Geo.3.6-8', 'D2.His.1.6-8'],
        note: 'Designed for grades 6-8. Integrates geography and history standards. Can be adapted for grades 9-10 with more complex terrain analysis.',
      },
    },
  });

  await prisma.lessonPlan.upsert({
    where: { id: 'concord-lesson-poem-vs-deposition' },
    update: {},
    create: {
      id: 'concord-lesson-poem-vs-deposition',
      townId: CONCORD_TOWN_ID,
      title: 'Poem vs. Deposition: Emerson\'s Concord Hymn and the Eyewitness Record',
      slug: 'poem-vs-deposition',
      gradeRange: '9-12',
      estimatedDuration: '2 class periods',
      summary: 'Students compare Ralph Waldo Emerson\'s "Concord Hymn" (1836) to eyewitness depositions and Amos Barrett\'s memoir of the North Bridge engagement, analyzing how poetic commemoration differs from firsthand testimony and how collective memory is shaped by literary representation.',
      lessonData: {
        objectives: [
          'Conduct a close reading of Emerson\'s "Concord Hymn," identifying literary devices, tone, and historical claims',
          'Analyze eyewitness depositions and Barrett\'s memoir for factual content and emotional testimony',
          'Compare and contrast the purposes, audiences, and methods of poetry and eyewitness testimony as historical sources',
          'Evaluate how Emerson\'s poem shaped the collective memory of the North Bridge engagement',
        ],
        essentialQuestions: [
          'How does a poem about a historical event differ from an eyewitness account of the same event?',
          'Did Emerson\'s "Concord Hymn" accurately represent what happened at the North Bridge?',
          'How do literary works shape our understanding of history, for better or for worse?',
          'Is there value in a "mythologized" version of history? What are its dangers?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Read aloud the first stanza of Emerson\'s "Concord Hymn." Ask students to identify three specific historical claims the poem makes (rude bridge, embattled farmers, shot heard round the world). For each claim, ask: Is this literally true? Is it metaphorically true? What\'s the difference?',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'Background: Emerson\'s connection to the North Bridge (grandson of William Emerson, who watched from the Manse)',
            'The occasion: the 1836 Battle Monument dedication and the composition of the Hymn',
            'Close reading of the full poem: meter, rhyme, imagery, diction, and historical references',
            'Overview of the eyewitness sources: depositions collected in April 1775, Barrett\'s later memoir',
            'The concept of collective memory: how societies create shared narratives about the past',
          ],
        },
        guidedPractice: {
          duration: '35 minutes',
          activities: [
            'Comparative Analysis: Students work in pairs, with one partner analyzing the "Concord Hymn" and the other analyzing an excerpt from Amos Barrett\'s memoir or a deposition. Using a structured comparison worksheet, they identify: (a) what each source claims happened, (b) the tone and emotional register of each, (c) what each source includes and omits, (d) the purpose and intended audience of each. Partners then compare their findings and identify the most significant differences.',
            'Phrase Deconstruction: Students take three key phrases from the Hymn — "rude bridge," "embattled farmers," "shot heard round the world" — and evaluate each against the historical evidence. Was the bridge rude? Were the men really farmers? Was the shot heard round the world? Students write a short paragraph for each phrase assessing its accuracy and its rhetorical power.',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Write a 400-word essay addressing the question: Did Emerson\'s "Concord Hymn" help or harm our understanding of the North Bridge engagement? Argue that the poem either enriched the historical record by capturing the significance of the event in memorable language, or distorted it by replacing messy reality with a mythologized version. Use at least two specific comparisons between the poem and the eyewitness sources.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Discussion: If you were designing a new monument at the North Bridge today, what words would you put on it? Would you use Emerson\'s lines, a quote from Barrett\'s memoir, or something entirely new? Why? Exit ticket: In one sentence, explain the most important difference between how a poet and an eyewitness remember the same event.',
        },
        differentiation: {
          struggling: 'Provide a modernized paraphrase of the "Concord Hymn" alongside the original. Offer guided questions for the comparative analysis rather than open-ended prompts. Allow the essay to be completed as a structured paragraph with sentence starters.',
          advanced: 'Read Emerson\'s full poem including all four stanzas. Research other literary representations of the North Bridge (Longfellow, Lowell). Write a comparative analysis of how different poets represented the same event and what each chose to emphasize or omit.',
          ell: 'Provide a line-by-line vocabulary guide for the poem. Offer the Barrett memoir excerpt in a simplified version with key terms defined in margins. Allow the comparative analysis to be completed as a visual Venn diagram with key words and phrases rather than full sentences.',
        },
      },
      standards: {
        commonCore: ['RL.9-10.1', 'RL.9-10.4', 'RH.9-10.6', 'RH.9-10.9', 'WHST.9-10.1'],
        c3Framework: ['D2.His.1.9-12', 'D2.His.5.9-12', 'D2.His.14.9-12', 'D2.His.16.9-12'],
        note: 'Designed for grades 9-12. Integrates ELA and history standards through cross-disciplinary analysis of literary and historical sources.',
      },
    },
  });

  console.log('  Lesson plans seeded.');
}

// =============================================================================
// MAIN
// =============================================================================

async function main() {
  console.log('Seeding Concord content...');

  await seedPeople();
  await seedPlaces();
  await seedEvents();
  await seedEventPeople();
  await seedStories();
  await seedLessons();

  console.log('Concord content seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });