import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const SALEM_TOWN_ID = 'us-ma-salem';

// =============================================================================
// PEOPLE
// =============================================================================

async function seedPeople() {
  console.log('  Seeding people...');

  // --- 1. Elias Hasket Derby ---

  await prisma.person.upsert({
    where: { id: 'person-salem-elias-hasket-derby' },
    update: {
      bioLong: `Elias Hasket Derby was born on August 16, 1739, in Salem, Massachusetts, into one of the town's most prominent merchant families. His father, Captain Richard Derby, had built a thriving transatlantic trade from Salem's wharves, and Elias inherited both the family business and a deep understanding of maritime commerce. By the early 1770s, Derby had expanded the family's trading network across the Atlantic and into the Caribbean, making him one of the wealthiest men in Essex County.

When the Revolution began, Derby committed his fortune and his fleet to the patriot cause with a decisiveness that was rare even among sympathetic merchants. He outfitted privateers at his own expense, commissioning armed vessels to prey on British merchant shipping. His ships captured dozens of British prizes during the war, bringing valuable cargoes into Salem Harbor and helping to sustain the colonial economy at a time when legitimate trade had been strangled by the British blockade. The profits from privateering were enormous, but so were the risks — Derby lost ships as well as gaining prizes, and every vessel that sailed carried the possibility of total loss.

Derby's most famous contribution came when he dispatched his son, Captain John Derby, aboard the fast schooner Quero in April 1775 to carry news of the Battles of Lexington and Concord to England. The Quero arrived in London before the official British dispatches, allowing the American version of events to shape public opinion in Parliament and the London press. This act of information warfare demonstrated Derby's understanding that the Revolution would be fought in counting houses and newspapers as well as on battlefields.

After the war, Derby pivoted to the East India trade with extraordinary success. His ships were among the first American vessels to trade directly with China, India, and the East Indies, opening routes that would make Salem one of the wealthiest ports in the new nation. By the time of his death in 1799, Derby was widely considered the richest man in America, with a fortune estimated at over one million dollars — a staggering sum for the era. His wealth transformed Salem, funding the construction of grand Federal-style mansions, the expansion of the waterfront, and the civic institutions that defined the town's golden age.

WHY HE MATTERS TO SALEM

Elias Hasket Derby is the single most important figure in Salem's Revolutionary and post-Revolutionary history. His decision to convert his merchant fleet into a privateering force made Salem the most effective naval weapon the colonies possessed outside of the Continental Navy. His dispatch of the Quero with news of Lexington and Concord was an act of strategic brilliance that shaped the international narrative of the Revolution. And his post-war creation of the East India trade transformed Salem from a regional port into a global commercial power. Derby Wharf, which still extends into Salem Harbor as part of the Salem Maritime National Historic Site, bears his name and stands as a physical testament to his legacy. The Custom House where Nathaniel Hawthorne later worked processed the duties on cargoes that Derby's ships had pioneered.

- 1739: Born August 16 in Salem, Massachusetts, into the prominent Derby merchant family
- 1775-1783: Outfitted and financed privateers that captured dozens of British prizes during the Revolution
- 1775: Dispatched the schooner Quero to carry news of Lexington and Concord to England
- 1785-1799: Pioneered American trade with China, India, and the East Indies from Salem
- 1799: Died September 8 in Salem, widely regarded as the richest man in America

SOURCES
- Peabody, Robert E. "The Merchant Venturers of Old Salem." Houghton Mifflin, 1912.
- Morison, Samuel Eliot. "The Maritime History of Massachusetts, 1783-1860." Houghton Mifflin, 1921.
- Phillips, James Duncan. "Salem in the Eighteenth Century." Houghton Mifflin, 1937.`,
    },
    create: {
      id: 'person-salem-elias-hasket-derby',
      name: 'Elias Hasket Derby',
      roles: ['Merchant', 'Privateer Financier', 'Shipping Magnate'],
      bioShort: 'Salem merchant and privateer financier (1739-1799) who outfitted armed vessels during the Revolution, dispatched news of Lexington to England, and pioneered the East India trade that made Salem one of America\'s wealthiest ports.',
      bioLong: `Elias Hasket Derby was born on August 16, 1739, in Salem, Massachusetts, into one of the town's most prominent merchant families. His father, Captain Richard Derby, had built a thriving transatlantic trade from Salem's wharves, and Elias inherited both the family business and a deep understanding of maritime commerce. By the early 1770s, Derby had expanded the family's trading network across the Atlantic and into the Caribbean, making him one of the wealthiest men in Essex County.

When the Revolution began, Derby committed his fortune and his fleet to the patriot cause with a decisiveness that was rare even among sympathetic merchants. He outfitted privateers at his own expense, commissioning armed vessels to prey on British merchant shipping. His ships captured dozens of British prizes during the war, bringing valuable cargoes into Salem Harbor and helping to sustain the colonial economy at a time when legitimate trade had been strangled by the British blockade. The profits from privateering were enormous, but so were the risks — Derby lost ships as well as gaining prizes, and every vessel that sailed carried the possibility of total loss.

Derby's most famous contribution came when he dispatched his son, Captain John Derby, aboard the fast schooner Quero in April 1775 to carry news of the Battles of Lexington and Concord to England. The Quero arrived in London before the official British dispatches, allowing the American version of events to shape public opinion in Parliament and the London press. This act of information warfare demonstrated Derby's understanding that the Revolution would be fought in counting houses and newspapers as well as on battlefields.

After the war, Derby pivoted to the East India trade with extraordinary success. His ships were among the first American vessels to trade directly with China, India, and the East Indies, opening routes that would make Salem one of the wealthiest ports in the new nation. By the time of his death in 1799, Derby was widely considered the richest man in America, with a fortune estimated at over one million dollars — a staggering sum for the era. His wealth transformed Salem, funding the construction of grand Federal-style mansions, the expansion of the waterfront, and the civic institutions that defined the town's golden age.

WHY HE MATTERS TO SALEM

Elias Hasket Derby is the single most important figure in Salem's Revolutionary and post-Revolutionary history. His decision to convert his merchant fleet into a privateering force made Salem the most effective naval weapon the colonies possessed outside of the Continental Navy. His dispatch of the Quero with news of Lexington and Concord was an act of strategic brilliance that shaped the international narrative of the Revolution. And his post-war creation of the East India trade transformed Salem from a regional port into a global commercial power. Derby Wharf, which still extends into Salem Harbor as part of the Salem Maritime National Historic Site, bears his name and stands as a physical testament to his legacy. The Custom House where Nathaniel Hawthorne later worked processed the duties on cargoes that Derby's ships had pioneered.

- 1739: Born August 16 in Salem, Massachusetts, into the prominent Derby merchant family
- 1775-1783: Outfitted and financed privateers that captured dozens of British prizes during the Revolution
- 1775: Dispatched the schooner Quero to carry news of Lexington and Concord to England
- 1785-1799: Pioneered American trade with China, India, and the East Indies from Salem
- 1799: Died September 8 in Salem, widely regarded as the richest man in America

SOURCES
- Peabody, Robert E. "The Merchant Venturers of Old Salem." Houghton Mifflin, 1912.
- Morison, Samuel Eliot. "The Maritime History of Massachusetts, 1783-1860." Houghton Mifflin, 1921.
- Phillips, James Duncan. "Salem in the Eighteenth Century." Houghton Mifflin, 1937.`,
      birthYear: 1739,
      deathYear: 1799,
      verificationStatus: 'VERIFIED',
    },
  });

  // --- 2. Timothy Pickering ---

  await prisma.person.upsert({
    where: { id: 'person-salem-timothy-pickering' },
    update: {
      bioLong: `Timothy Pickering was born on July 17, 1745, in Salem, Massachusetts, and graduated from Harvard College in 1763. He practiced law in Salem and became deeply involved in the political and military life of Essex County as tensions with Britain escalated. Pickering was elected colonel of the First Essex County militia regiment, a position that placed him at the center of Salem's military preparations in the years before the Revolution.

Pickering's most significant early contribution to the patriot cause was his authorship of "An Easy Plan of Discipline for a Militia," published in 1775. This manual became one of the most widely used training guides for colonial militia forces, and George Washington himself endorsed it for use by the Continental Army. The manual reflected Pickering's meticulous, systematic temperament — he believed that citizen-soldiers could be made effective through clear, practical instruction rather than the rigid European drill that many American officers attempted to impose.

When the alarm of April 19, 1775, reached Salem, Pickering mustered his regiment and marched toward Lexington, though his column arrived too late to participate in the fighting along Battle Road. He subsequently served in a variety of military and administrative roles during the war, including a stint as Adjutant General of the Continental Army and later as a member of the Board of War. His organizational talents were better suited to administration than battlefield command, and he made his greatest wartime contributions behind the scenes.

After the Revolution, Pickering's career took him to the highest levels of national government. He served as Postmaster General under Washington, then as Secretary of War, and finally as Secretary of State under both Washington and John Adams. His tenure as Secretary of State was marked by fierce partisanship — he was a committed Federalist who clashed repeatedly with Adams over foreign policy, particularly relations with France. Adams eventually dismissed him, one of the very few cabinet secretaries to be fired by a president. Pickering later served as a U.S. Senator and Representative from Massachusetts.

WHY HE MATTERS TO SALEM

Timothy Pickering represents the intellectual and administrative dimension of Salem's contribution to the Revolution. While the Derby family provided ships and capital, Pickering provided the organizational framework that turned Essex County's farmers and tradesmen into an effective fighting force. His militia manual influenced military training across the colonies, and his subsequent career in national government brought Salem-bred competence to the highest offices in the land. Pickering's trajectory from Salem militia colonel to Secretary of State illustrates how the Revolution created pathways from local prominence to national leadership.

- 1745: Born July 17 in Salem, Massachusetts
- 1763: Graduated from Harvard College
- 1775: Published "An Easy Plan of Discipline for a Militia," widely adopted by colonial forces
- 1775: Led Essex County militia toward Lexington on April 19
- 1791-1795: Served as Postmaster General, then Secretary of War under Washington
- 1795-1800: Served as Secretary of State under Washington and Adams; dismissed by Adams
- 1829: Died January 29 in Salem at age 83

SOURCES
- Clarfield, Gerard H. "Timothy Pickering and the American Republic." University of Pittsburgh Press, 1980.
- Phillips, James Duncan. "Salem in the Eighteenth Century." Houghton Mifflin, 1937.
- Pickering, Octavius, and Charles W. Upham. "The Life of Timothy Pickering." Little, Brown, 1867-1873.`,
    },
    create: {
      id: 'person-salem-timothy-pickering',
      name: 'Timothy Pickering',
      roles: ['Militia Colonel', 'Secretary of State', 'Author'],
      bioShort: 'Salem militia colonel and statesman (1745-1829) who authored an influential militia training manual, led Essex County troops in 1775, and later served as Secretary of State under Washington and Adams.',
      bioLong: `Timothy Pickering was born on July 17, 1745, in Salem, Massachusetts, and graduated from Harvard College in 1763. He practiced law in Salem and became deeply involved in the political and military life of Essex County as tensions with Britain escalated. Pickering was elected colonel of the First Essex County militia regiment, a position that placed him at the center of Salem's military preparations in the years before the Revolution.

Pickering's most significant early contribution to the patriot cause was his authorship of "An Easy Plan of Discipline for a Militia," published in 1775. This manual became one of the most widely used training guides for colonial militia forces, and George Washington himself endorsed it for use by the Continental Army. The manual reflected Pickering's meticulous, systematic temperament — he believed that citizen-soldiers could be made effective through clear, practical instruction rather than the rigid European drill that many American officers attempted to impose.

When the alarm of April 19, 1775, reached Salem, Pickering mustered his regiment and marched toward Lexington, though his column arrived too late to participate in the fighting along Battle Road. He subsequently served in a variety of military and administrative roles during the war, including a stint as Adjutant General of the Continental Army and later as a member of the Board of War. His organizational talents were better suited to administration than battlefield command, and he made his greatest wartime contributions behind the scenes.

After the Revolution, Pickering's career took him to the highest levels of national government. He served as Postmaster General under Washington, then as Secretary of War, and finally as Secretary of State under both Washington and John Adams. His tenure as Secretary of State was marked by fierce partisanship — he was a committed Federalist who clashed repeatedly with Adams over foreign policy, particularly relations with France. Adams eventually dismissed him, one of the very few cabinet secretaries to be fired by a president. Pickering later served as a U.S. Senator and Representative from Massachusetts.

WHY HE MATTERS TO SALEM

Timothy Pickering represents the intellectual and administrative dimension of Salem's contribution to the Revolution. While the Derby family provided ships and capital, Pickering provided the organizational framework that turned Essex County's farmers and tradesmen into an effective fighting force. His militia manual influenced military training across the colonies, and his subsequent career in national government brought Salem-bred competence to the highest offices in the land. Pickering's trajectory from Salem militia colonel to Secretary of State illustrates how the Revolution created pathways from local prominence to national leadership.

- 1745: Born July 17 in Salem, Massachusetts
- 1763: Graduated from Harvard College
- 1775: Published "An Easy Plan of Discipline for a Militia," widely adopted by colonial forces
- 1775: Led Essex County militia toward Lexington on April 19
- 1791-1795: Served as Postmaster General, then Secretary of War under Washington
- 1795-1800: Served as Secretary of State under Washington and Adams; dismissed by Adams
- 1829: Died January 29 in Salem at age 83

SOURCES
- Clarfield, Gerard H. "Timothy Pickering and the American Republic." University of Pittsburgh Press, 1980.
- Phillips, James Duncan. "Salem in the Eighteenth Century." Houghton Mifflin, 1937.
- Pickering, Octavius, and Charles W. Upham. "The Life of Timothy Pickering." Little, Brown, 1867-1873.`,
      birthYear: 1745,
      deathYear: 1829,
      verificationStatus: 'VERIFIED',
    },
  });

  // --- 3. Richard Derby Jr. ---

  await prisma.person.upsert({
    where: { id: 'person-salem-richard-derby-jr' },
    update: {
      bioLong: `Richard Derby Jr. was born in 1712 in Salem, Massachusetts, and rose to become one of the most successful sea captains and merchants in colonial New England. The patriarch of the Derby merchant dynasty, he built his fortune through the Atlantic trade, commanding his own vessels in his younger years before transitioning to the role of merchant-owner, directing a fleet of ships from Salem's wharves. By the 1760s, Derby was one of the wealthiest men in Essex County, with extensive commercial connections in the West Indies, Europe, and along the American coast.

As political tensions with Britain intensified in the 1770s, Derby emerged as one of Salem's most outspoken patriots. He was elected to the Salem Committee of Safety, which coordinated the town's resistance to British authority, and served on the Essex County convention that endorsed the Continental Congress. Derby's political activism was inseparable from his commercial interests — the Navigation Acts, the Stamp Act, the Townshend Duties, and the Intolerable Acts all threatened the maritime trade on which his fortune depended. But his commitment to the patriot cause went beyond economic calculation; he put his ships, his money, and his reputation on the line when many merchants of comparable wealth chose caution or loyalism.

Derby's most dramatic contribution to the Revolution came on February 26, 1775, when Colonel Alexander Leslie marched a regiment of British regulars from Marblehead to Salem to seize military supplies reportedly stored in the town. Derby was among the Salem leaders who organized the resistance at the North Bridge over the North River, where citizens raised the drawbridge and confronted Leslie's troops. The standoff — Leslie's Retreat — ended without bloodfire when a compromise was reached, but it demonstrated Salem's willingness to resist British military force nearly two months before Lexington and Concord.

Richard Derby Jr. died in 1783, the year the Treaty of Paris formally ended the war. He lived to see American independence achieved but not the full flowering of the maritime empire his sons would build in the decades that followed.

WHY HE MATTERS TO SALEM

Richard Derby Jr. was the bridge between Salem's colonial merchant tradition and its Revolutionary generation. He trained his sons — Elias Hasket Derby, John Derby, and Richard Derby III — in the maritime trade, giving them the skills and the capital that would prove decisive when the war came. His service on the Committee of Safety placed him at the center of Salem's political resistance, and his participation in Leslie's Retreat demonstrated that Salem's merchants were prepared to back their political convictions with physical action. The Derby family's wharf, which Richard built and his sons expanded, became the launching point for both the privateering campaign and the post-war East India trade.

- 1712: Born in Salem, Massachusetts
- 1740s-1760s: Built one of Salem's largest merchant fleets through Atlantic and Caribbean trade
- 1774: Served on the Salem Committee of Safety and Essex County convention
- 1775: Participated in resistance at the North Bridge during Leslie's Retreat, February 26
- 1783: Died in Salem, having lived to see American independence

SOURCES
- Phillips, James Duncan. "Salem in the Eighteenth Century." Houghton Mifflin, 1937.
- Peabody, Robert E. "The Merchant Venturers of Old Salem." Houghton Mifflin, 1912.
- Webber, C.H., and W.S. Nevins. "Old Naumkeag: An Historical Sketch of the City of Salem." A.A. Smith, 1877.`,
    },
    create: {
      id: 'person-salem-richard-derby-jr',
      name: 'Richard Derby Jr.',
      roles: ['Merchant', 'Sea Captain', 'Committee of Safety'],
      bioShort: 'Salem merchant and patriot leader (1712-1783) who served on the Committee of Safety, participated in Leslie\'s Retreat, and founded the Derby maritime dynasty that financed Salem\'s Revolutionary privateering campaign.',
      bioLong: `Richard Derby Jr. was born in 1712 in Salem, Massachusetts, and rose to become one of the most successful sea captains and merchants in colonial New England. The patriarch of the Derby merchant dynasty, he built his fortune through the Atlantic trade, commanding his own vessels in his younger years before transitioning to the role of merchant-owner, directing a fleet of ships from Salem's wharves. By the 1760s, Derby was one of the wealthiest men in Essex County, with extensive commercial connections in the West Indies, Europe, and along the American coast.

As political tensions with Britain intensified in the 1770s, Derby emerged as one of Salem's most outspoken patriots. He was elected to the Salem Committee of Safety, which coordinated the town's resistance to British authority, and served on the Essex County convention that endorsed the Continental Congress. Derby's political activism was inseparable from his commercial interests — the Navigation Acts, the Stamp Act, the Townshend Duties, and the Intolerable Acts all threatened the maritime trade on which his fortune depended. But his commitment to the patriot cause went beyond economic calculation; he put his ships, his money, and his reputation on the line when many merchants of comparable wealth chose caution or loyalism.

Derby's most dramatic contribution to the Revolution came on February 26, 1775, when Colonel Alexander Leslie marched a regiment of British regulars from Marblehead to Salem to seize military supplies reportedly stored in the town. Derby was among the Salem leaders who organized the resistance at the North Bridge over the North River, where citizens raised the drawbridge and confronted Leslie's troops. The standoff — Leslie's Retreat — ended without bloodfire when a compromise was reached, but it demonstrated Salem's willingness to resist British military force nearly two months before Lexington and Concord.

Richard Derby Jr. died in 1783, the year the Treaty of Paris formally ended the war. He lived to see American independence achieved but not the full flowering of the maritime empire his sons would build in the decades that followed.

WHY HE MATTERS TO SALEM

Richard Derby Jr. was the bridge between Salem's colonial merchant tradition and its Revolutionary generation. He trained his sons — Elias Hasket Derby, John Derby, and Richard Derby III — in the maritime trade, giving them the skills and the capital that would prove decisive when the war came. His service on the Committee of Safety placed him at the center of Salem's political resistance, and his participation in Leslie's Retreat demonstrated that Salem's merchants were prepared to back their political convictions with physical action. The Derby family's wharf, which Richard built and his sons expanded, became the launching point for both the privateering campaign and the post-war East India trade.

- 1712: Born in Salem, Massachusetts
- 1740s-1760s: Built one of Salem's largest merchant fleets through Atlantic and Caribbean trade
- 1774: Served on the Salem Committee of Safety and Essex County convention
- 1775: Participated in resistance at the North Bridge during Leslie's Retreat, February 26
- 1783: Died in Salem, having lived to see American independence

SOURCES
- Phillips, James Duncan. "Salem in the Eighteenth Century." Houghton Mifflin, 1937.
- Peabody, Robert E. "The Merchant Venturers of Old Salem." Houghton Mifflin, 1912.
- Webber, C.H., and W.S. Nevins. "Old Naumkeag: An Historical Sketch of the City of Salem." A.A. Smith, 1877.`,
      birthYear: 1712,
      deathYear: 1783,
      verificationStatus: 'VERIFIED',
    },
  });

  // --- 4. Captain John Derby ---

  await prisma.person.upsert({
    where: { id: 'person-salem-john-derby' },
    update: {
      bioLong: `John Derby was born around 1741 in Salem, Massachusetts, the son of Richard Derby Jr. and brother of Elias Hasket Derby. Like his father and brother, he was raised in the maritime trade, going to sea as a young man and rising quickly to command his own vessels. John was known as one of the fastest and most skilled captains sailing out of Salem, with a reputation for daring that made him an ideal choice for the most dangerous missions of the Revolution.

John Derby's place in history was secured on April 28, 1775, when his father and brother dispatched him aboard the fast schooner Quero to carry news of the Battles of Lexington and Concord to England. The mission was a calculated act of information warfare. The Derby family understood that whichever version of events — American or British — reached London first would shape Parliament's response and European public opinion. Derby sailed the Quero across the Atlantic in the remarkable time of just twenty-nine days, arriving at the Isle of Wight on May 28, 1775. He immediately traveled to London with depositions and accounts that presented the American version of April 19.

The Quero beat the official British dispatches carried by Captain William Brown aboard HMS Sukey by nearly two weeks. When Brown arrived with General Gage's report, the American version had already been published in London newspapers and debated in Parliament. The impact was significant: the American narrative of peaceful farmers fired upon by British regulars without provocation gained traction before the British government could present its own account. Benjamin Franklin, who was still in London, made effective use of the depositions Derby had carried.

After his mission to England, John Derby continued to serve the patriot cause at sea, commanding privateers and merchant vessels during the war. He was a capable captain but never achieved the commercial fame of his brother Elias, partly because Elias's genius lay in the counting house while John's lay on the quarterdeck.

WHY HE MATTERS TO SALEM

Captain John Derby's Atlantic crossing aboard the Quero was one of the most consequential individual acts of the entire Revolution. By ensuring that the American version of Lexington and Concord reached London first, he shaped the political battlefield in a way that no military victory could have matched at that early stage. The mission demonstrated the strategic sophistication of Salem's merchant community — they understood that the Revolution was a contest for legitimacy as much as territory, and they used their maritime capabilities to wage that contest. John Derby's voyage connected Salem directly to the international dimension of the Revolution and proved that a fast ship and a bold captain could be as valuable as a regiment of soldiers.

- c.1741: Born in Salem, Massachusetts, son of Richard Derby Jr.
- 1775: Sailed the schooner Quero to England with news of Lexington and Concord, arriving May 28
- 1775: Delivered American depositions to London before British official dispatches arrived
- 1775-1783: Commanded privateers and merchant vessels during the Revolution
- After 1783: Continued maritime career in Salem

SOURCES
- Morison, Samuel Eliot. "The Maritime History of Massachusetts, 1783-1860." Houghton Mifflin, 1921.
- Phillips, James Duncan. "Salem in the Eighteenth Century." Houghton Mifflin, 1937.
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.`,
    },
    create: {
      id: 'person-salem-john-derby',
      name: 'Captain John Derby',
      roles: ['Sea Captain', 'Privateer', 'Messenger'],
      bioShort: 'Salem sea captain (c.1741-after 1783) who sailed the schooner Quero to England in 1775 carrying news of Lexington and Concord, ensuring the American version of events reached London before British official dispatches.',
      bioLong: `John Derby was born around 1741 in Salem, Massachusetts, the son of Richard Derby Jr. and brother of Elias Hasket Derby. Like his father and brother, he was raised in the maritime trade, going to sea as a young man and rising quickly to command his own vessels. John was known as one of the fastest and most skilled captains sailing out of Salem, with a reputation for daring that made him an ideal choice for the most dangerous missions of the Revolution.

John Derby's place in history was secured on April 28, 1775, when his father and brother dispatched him aboard the fast schooner Quero to carry news of the Battles of Lexington and Concord to England. The mission was a calculated act of information warfare. The Derby family understood that whichever version of events — American or British — reached London first would shape Parliament's response and European public opinion. Derby sailed the Quero across the Atlantic in the remarkable time of just twenty-nine days, arriving at the Isle of Wight on May 28, 1775. He immediately traveled to London with depositions and accounts that presented the American version of April 19.

The Quero beat the official British dispatches carried by Captain William Brown aboard HMS Sukey by nearly two weeks. When Brown arrived with General Gage's report, the American version had already been published in London newspapers and debated in Parliament. The impact was significant: the American narrative of peaceful farmers fired upon by British regulars without provocation gained traction before the British government could present its own account. Benjamin Franklin, who was still in London, made effective use of the depositions Derby had carried.

After his mission to England, John Derby continued to serve the patriot cause at sea, commanding privateers and merchant vessels during the war. He was a capable captain but never achieved the commercial fame of his brother Elias, partly because Elias's genius lay in the counting house while John's lay on the quarterdeck.

WHY HE MATTERS TO SALEM

Captain John Derby's Atlantic crossing aboard the Quero was one of the most consequential individual acts of the entire Revolution. By ensuring that the American version of Lexington and Concord reached London first, he shaped the political battlefield in a way that no military victory could have matched at that early stage. The mission demonstrated the strategic sophistication of Salem's merchant community — they understood that the Revolution was a contest for legitimacy as much as territory, and they used their maritime capabilities to wage that contest. John Derby's voyage connected Salem directly to the international dimension of the Revolution and proved that a fast ship and a bold captain could be as valuable as a regiment of soldiers.

- c.1741: Born in Salem, Massachusetts, son of Richard Derby Jr.
- 1775: Sailed the schooner Quero to England with news of Lexington and Concord, arriving May 28
- 1775: Delivered American depositions to London before British official dispatches arrived
- 1775-1783: Commanded privateers and merchant vessels during the Revolution
- After 1783: Continued maritime career in Salem

SOURCES
- Morison, Samuel Eliot. "The Maritime History of Massachusetts, 1783-1860." Houghton Mifflin, 1921.
- Phillips, James Duncan. "Salem in the Eighteenth Century." Houghton Mifflin, 1937.
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.`,
      birthYear: 1741,
      deathYear: 1812,
      verificationStatus: 'VERIFIED',
    },
  });

  // --- 5. Colonel Alexander Leslie ---

  await prisma.person.upsert({
    where: { id: 'person-salem-alexander-leslie' },
    update: {
      bioLong: `Alexander Leslie was born around 1731 in Scotland and pursued a military career in the British Army, rising to the rank of lieutenant colonel in the 64th Regiment of Foot. He was stationed in Massachusetts as part of the British garrison in the years leading up to the Revolution, and his name became permanently linked to Salem through the confrontation known as Leslie's Retreat on February 26, 1775.

In late February 1775, General Thomas Gage in Boston received intelligence that the patriots in Salem were stockpiling cannon and military supplies, reportedly at a forge north of the North River. Gage ordered Leslie to march a detachment of the 64th Regiment from Castle William in Boston Harbor to Salem by a covert route through Marblehead, seize the supplies, and return. The operation was intended to be swift and quiet — a demonstration that the British could enforce their authority anywhere in Massachusetts.

Leslie landed his approximately 240 troops at Marblehead on the afternoon of February 26 and marched them north toward Salem. But the patriots' intelligence network was as effective as Gage's, and Salem received warning of the approaching column. When Leslie's men reached the North Bridge over the North River, they found the drawbridge raised and a crowd of Salem citizens assembled on the far side. Among the leaders of the resistance were members of the Derby family and other prominent merchants.

The confrontation lasted several hours. Leslie threatened to fire on the crowd; the Salem men held firm. At one point, citizens scuttled gondolas on the near side of the river to prevent the troops from crossing by boat. A local nurse, Sarah Tarrant, reportedly taunted the soldiers from a window. Eventually, Reverend Thomas Barnard negotiated a compromise: Leslie would be allowed to cross the bridge and march a short distance into the town to satisfy his orders, but would find no supplies and would immediately return. The face-saving arrangement allowed both sides to claim they had not backed down, and Leslie marched his men back to Marblehead without firing a shot.

Leslie went on to serve throughout the Revolutionary War with distinction. He commanded British forces at several engagements and eventually rose to the rank of brigadier general. He bore no particular animosity toward Salem — he was a professional soldier executing orders — but his name became synonymous with the British attempt to disarm the Massachusetts countryside, an attempt that failed at Salem seven weeks before it failed more catastrophically at Lexington and Concord.

WHY HE MATTERS TO SALEM

Alexander Leslie is the antagonist in Salem's most dramatic pre-war confrontation. Leslie's Retreat — as the patriots immediately named it, emphasizing the British colonel's failure — was the first armed standoff between British troops and organized colonial resistance in Massachusetts. It predated the more famous confrontation at Lexington by nearly two months and demonstrated that communities outside Boston were prepared to physically resist British military operations. For Salem, Leslie's Retreat is a source of civic pride: the town faced down the British Army without a shot being fired, through a combination of advance warning, physical obstruction, and shrewd negotiation. Leslie himself was a competent and honorable officer caught in an impossible political situation — much like Major Pitcairn would be on Lexington Green seven weeks later.

- c.1731: Born in Scotland
- 1775: Led the 64th Regiment to Salem on February 26 to seize military supplies
- 1775: Confronted by Salem citizens at the North Bridge; forced to retreat without seizing supplies
- 1775-1783: Continued British military service during the Revolution
- 1794: Died in Scotland

SOURCES
- Phillips, James Duncan. "Salem in the Eighteenth Century." Houghton Mifflin, 1937.
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Felt, Joseph B. "Annals of Salem." W. & S.B. Ives, 1845.`,
    },
    create: {
      id: 'person-salem-alexander-leslie',
      name: 'Colonel Alexander Leslie',
      roles: ['British Officer', 'Regimental Commander'],
      bioShort: 'British colonel (c.1731-1794) who led 240 troops to Salem on February 26, 1775, to seize patriot military supplies, only to be turned back at the North Bridge in the confrontation known as Leslie\'s Retreat.',
      bioLong: `Alexander Leslie was born around 1731 in Scotland and pursued a military career in the British Army, rising to the rank of lieutenant colonel in the 64th Regiment of Foot. He was stationed in Massachusetts as part of the British garrison in the years leading up to the Revolution, and his name became permanently linked to Salem through the confrontation known as Leslie's Retreat on February 26, 1775.

In late February 1775, General Thomas Gage in Boston received intelligence that the patriots in Salem were stockpiling cannon and military supplies, reportedly at a forge north of the North River. Gage ordered Leslie to march a detachment of the 64th Regiment from Castle William in Boston Harbor to Salem by a covert route through Marblehead, seize the supplies, and return. The operation was intended to be swift and quiet — a demonstration that the British could enforce their authority anywhere in Massachusetts.

Leslie landed his approximately 240 troops at Marblehead on the afternoon of February 26 and marched them north toward Salem. But the patriots' intelligence network was as effective as Gage's, and Salem received warning of the approaching column. When Leslie's men reached the North Bridge over the North River, they found the drawbridge raised and a crowd of Salem citizens assembled on the far side. Among the leaders of the resistance were members of the Derby family and other prominent merchants.

The confrontation lasted several hours. Leslie threatened to fire on the crowd; the Salem men held firm. At one point, citizens scuttled gondolas on the near side of the river to prevent the troops from crossing by boat. A local nurse, Sarah Tarrant, reportedly taunted the soldiers from a window. Eventually, Reverend Thomas Barnard negotiated a compromise: Leslie would be allowed to cross the bridge and march a short distance into the town to satisfy his orders, but would find no supplies and would immediately return. The face-saving arrangement allowed both sides to claim they had not backed down, and Leslie marched his men back to Marblehead without firing a shot.

Leslie went on to serve throughout the Revolutionary War with distinction. He commanded British forces at several engagements and eventually rose to the rank of brigadier general. He bore no particular animosity toward Salem — he was a professional soldier executing orders — but his name became synonymous with the British attempt to disarm the Massachusetts countryside, an attempt that failed at Salem seven weeks before it failed more catastrophically at Lexington and Concord.

WHY HE MATTERS TO SALEM

Alexander Leslie is the antagonist in Salem's most dramatic pre-war confrontation. Leslie's Retreat — as the patriots immediately named it, emphasizing the British colonel's failure — was the first armed standoff between British troops and organized colonial resistance in Massachusetts. It predated the more famous confrontation at Lexington by nearly two months and demonstrated that communities outside Boston were prepared to physically resist British military operations. For Salem, Leslie's Retreat is a source of civic pride: the town faced down the British Army without a shot being fired, through a combination of advance warning, physical obstruction, and shrewd negotiation. Leslie himself was a competent and honorable officer caught in an impossible political situation — much like Major Pitcairn would be on Lexington Green seven weeks later.

- c.1731: Born in Scotland
- 1775: Led the 64th Regiment to Salem on February 26 to seize military supplies
- 1775: Confronted by Salem citizens at the North Bridge; forced to retreat without seizing supplies
- 1775-1783: Continued British military service during the Revolution
- 1794: Died in Scotland

SOURCES
- Phillips, James Duncan. "Salem in the Eighteenth Century." Houghton Mifflin, 1937.
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Felt, Joseph B. "Annals of Salem." W. & S.B. Ives, 1845.`,
      birthYear: 1731,
      deathYear: 1794,
      verificationStatus: 'VERIFIED',
    },
  });

  // --- 6. Nathaniel Bowditch ---

  await prisma.person.upsert({
    where: { id: 'person-salem-nathaniel-bowditch' },
    update: {
      bioLong: `Nathaniel Bowditch was born on March 26, 1773, in Salem, Massachusetts, into a family that had fallen on hard times. His father, Habakkuk Bowditch, was a cooper whose business had been ruined by the disruptions of the Revolutionary War. Young Nathaniel's formal education ended at age ten when he was apprenticed to a ship chandler's shop, but his intellectual hunger was insatiable. He taught himself algebra, geometry, Latin, and French using books from a library that had been seized from a Loyalist privateer during the Revolution — a fitting origin for a mind that would revolutionize the science of navigation.

Bowditch went to sea from Salem beginning in 1795, making five major voyages as a clerk and supercargo aboard merchantmen trading with the East Indies and the Pacific. These voyages were the direct product of the maritime empire that the Derby family and other Salem merchants had built in the wake of the Revolution — the trade routes that Elias Hasket Derby pioneered in the 1780s and 1790s were the routes on which Bowditch sailed and the context in which his genius flowered. On each voyage, Bowditch corrected errors in the standard navigational tables of the day, eventually identifying over eight thousand mistakes in John Hamilton Moore's widely used "Practical Navigator."

In 1802, Bowditch published "The New American Practical Navigator," which quickly became the indispensable reference for mariners worldwide. The book, universally known as "Bowditch," went through edition after edition and is still published by the United States government today, more than two centuries after its first appearance. It was the most important contribution to navigational science since the invention of the marine chronometer.

Bowditch's later career took him into insurance, banking, and the management of the Essex Fire and Marine Insurance Company and later the Massachusetts Hospital Life Insurance Company. He was elected to the American Academy of Arts and Sciences and numerous international scientific societies. He translated Pierre-Simon Laplace's monumental "Mecanique Celeste" into English, annotating it with over five thousand corrections and explanations — an intellectual feat that astonished the scientific world.

WHY HE MATTERS TO SALEM

Nathaniel Bowditch is the intellectual crown of Salem's maritime tradition. Born during the Revolution and shaped by the maritime economy that the Revolution created, he transformed the practical knowledge of Salem's sea captains into a scientific discipline that changed navigation worldwide. His "Practical Navigator" was born from the same wharves and counting houses that launched the Derby privateers and the East India traders — it was the product of a town that lived by the sea and understood that precision at sea meant the difference between profit and catastrophe, between life and death. Bowditch proved that Salem's contribution to American civilization went beyond commerce and politics to encompass science and learning of the highest order.

- 1773: Born March 26 in Salem, Massachusetts
- 1783: Apprenticed at age ten to a ship chandler after family's financial ruin during the Revolution
- 1795-1803: Made five major voyages from Salem, correcting thousands of navigational errors
- 1802: Published "The New American Practical Navigator," still in use today
- 1838: Died March 16 in Boston at age 65

SOURCES
- Bowditch, Nathaniel Ingersoll. "Memoir of Nathaniel Bowditch." Charles C. Little and James Brown, 1840.
- Berry, Robert Elton. "Yankee Stargazer: The Life of Nathaniel Bowditch." Whittlesey House, 1941.
- Morison, Samuel Eliot. "The Maritime History of Massachusetts, 1783-1860." Houghton Mifflin, 1921.`,
    },
    create: {
      id: 'person-salem-nathaniel-bowditch',
      name: 'Nathaniel Bowditch',
      roles: ['Mathematician', 'Navigator', 'Author'],
      bioShort: 'Salem mathematician and navigator (1773-1838) who published "The New American Practical Navigator" in 1802, transforming maritime navigation worldwide and representing the intellectual pinnacle of Salem\'s seafaring tradition.',
      bioLong: `Nathaniel Bowditch was born on March 26, 1773, in Salem, Massachusetts, into a family that had fallen on hard times. His father, Habakkuk Bowditch, was a cooper whose business had been ruined by the disruptions of the Revolutionary War. Young Nathaniel's formal education ended at age ten when he was apprenticed to a ship chandler's shop, but his intellectual hunger was insatiable. He taught himself algebra, geometry, Latin, and French using books from a library that had been seized from a Loyalist privateer during the Revolution — a fitting origin for a mind that would revolutionize the science of navigation.

Bowditch went to sea from Salem beginning in 1795, making five major voyages as a clerk and supercargo aboard merchantmen trading with the East Indies and the Pacific. These voyages were the direct product of the maritime empire that the Derby family and other Salem merchants had built in the wake of the Revolution — the trade routes that Elias Hasket Derby pioneered in the 1780s and 1790s were the routes on which Bowditch sailed and the context in which his genius flowered. On each voyage, Bowditch corrected errors in the standard navigational tables of the day, eventually identifying over eight thousand mistakes in John Hamilton Moore's widely used "Practical Navigator."

In 1802, Bowditch published "The New American Practical Navigator," which quickly became the indispensable reference for mariners worldwide. The book, universally known as "Bowditch," went through edition after edition and is still published by the United States government today, more than two centuries after its first appearance. It was the most important contribution to navigational science since the invention of the marine chronometer.

Bowditch's later career took him into insurance, banking, and the management of the Essex Fire and Marine Insurance Company and later the Massachusetts Hospital Life Insurance Company. He was elected to the American Academy of Arts and Sciences and numerous international scientific societies. He translated Pierre-Simon Laplace's monumental "Mecanique Celeste" into English, annotating it with over five thousand corrections and explanations — an intellectual feat that astonished the scientific world.

WHY HE MATTERS TO SALEM

Nathaniel Bowditch is the intellectual crown of Salem's maritime tradition. Born during the Revolution and shaped by the maritime economy that the Revolution created, he transformed the practical knowledge of Salem's sea captains into a scientific discipline that changed navigation worldwide. His "Practical Navigator" was born from the same wharves and counting houses that launched the Derby privateers and the East India traders — it was the product of a town that lived by the sea and understood that precision at sea meant the difference between profit and catastrophe, between life and death. Bowditch proved that Salem's contribution to American civilization went beyond commerce and politics to encompass science and learning of the highest order.

- 1773: Born March 26 in Salem, Massachusetts
- 1783: Apprenticed at age ten to a ship chandler after family's financial ruin during the Revolution
- 1795-1803: Made five major voyages from Salem, correcting thousands of navigational errors
- 1802: Published "The New American Practical Navigator," still in use today
- 1838: Died March 16 in Boston at age 65

SOURCES
- Bowditch, Nathaniel Ingersoll. "Memoir of Nathaniel Bowditch." Charles C. Little and James Brown, 1840.
- Berry, Robert Elton. "Yankee Stargazer: The Life of Nathaniel Bowditch." Whittlesey House, 1941.
- Morison, Samuel Eliot. "The Maritime History of Massachusetts, 1783-1860." Houghton Mifflin, 1921.`,
      birthYear: 1773,
      deathYear: 1838,
      verificationStatus: 'VERIFIED',
    },
  });

  console.log('  People seeded.');
}

// =============================================================================
// PLACES (16 existing — update all with slugs + descriptions)
// =============================================================================

async function seedPlaces() {
  console.log('  Seeding places...');

  await prisma.place.upsert({
    where: { id: 'salem-custom-house' },
    update: { slug: 'salem-custom-house', featured: true, description: 'The Salem Custom House is a Federal-style brick building constructed in 1819 on Derby Street, at the heart of Salem\'s historic waterfront. It served as the federal government\'s office for collecting import duties on the cargoes that poured into Salem from ports across the globe — the tangible mechanism by which the new American republic taxed the maritime trade that Salem\'s merchants had built. The building is perhaps most famous as the workplace of Nathaniel Hawthorne, who served as Surveyor of the Port of Salem from 1846 to 1849 and described the Custom House in the introductory essay to "The Scarlet Letter."\n\nToday the Custom House is the centerpiece of the Salem Maritime National Historic Site, operated by the National Park Service. Visitors can tour the building, see Hawthorne\'s office, and examine artifacts from Salem\'s maritime trade. The Custom House sits within steps of Derby Wharf, the Derby House, and other structures that together tell the story of Salem\'s transformation from a colonial port to a global trading power.', historicalNote: 'Salem\'s customs operations date to the earliest days of the republic. The first federal tariff, enacted in 1789, required ports to collect duties on imported goods, and Salem — then one of the busiest ports in America — was a major source of customs revenue. The current Custom House replaced an earlier structure and was designed to accommodate the enormous volume of trade passing through Salem in the early nineteenth century. Cargoes of pepper, tea, silk, porcelain, and spices from Sumatra, Canton, Calcutta, and dozens of other ports were inspected and taxed here. The building\'s construction reflected the federal government\'s recognition of Salem\'s commercial importance.' },
    create: { id: 'salem-custom-house', townId: SALEM_TOWN_ID, name: 'Salem Custom House', slug: 'salem-custom-house', placeType: 'GOVERNMENT', description: 'The Salem Custom House is a Federal-style brick building constructed in 1819 on Derby Street, at the heart of Salem\'s historic waterfront. It served as the federal government\'s office for collecting import duties on the cargoes that poured into Salem from ports across the globe. The building is perhaps most famous as the workplace of Nathaniel Hawthorne, who served as Surveyor of the Port from 1846 to 1849.', lat: 42.5195, lng: -70.8863, address: '178 Derby Street, Salem, MA 01970', featured: true, historicalNote: 'Salem\'s customs operations date to the earliest days of the republic. The current Custom House replaced an earlier structure and was designed to accommodate the enormous volume of trade passing through Salem in the early nineteenth century.' },
  });

  await prisma.place.upsert({
    where: { id: 'salem-derby-wharf' },
    update: { slug: 'salem-derby-wharf', featured: true, description: 'Derby Wharf extends approximately 2,000 feet into Salem Harbor, making it one of the longest wharves in the Americas at the time of its construction. Built by the Derby family beginning in the 1760s and expanded over subsequent decades, the wharf was the launching point for Salem\'s privateering campaign during the Revolution and the base of operations for the post-war East India trade that made Salem one of the wealthiest ports in the new nation. Ships loaded with pepper from Sumatra, tea from Canton, silk from India, and hundreds of other exotic goods tied up at Derby Wharf and unloaded their cargoes for inspection at the nearby Custom House.\n\nToday, Derby Wharf is part of the Salem Maritime National Historic Site and is open to the public as a walking path extending into the harbor. Visitors can walk the full length of the wharf, passing interpretive markers that explain the trade routes and cargoes that once made this narrow strip of timber and stone one of the most commercially important pieces of real estate in America.', historicalNote: 'Derby Wharf was the physical foundation of Salem\'s maritime power. During the Revolution, privateers fitted out at the Derby family\'s expense sailed from this wharf to intercept British merchant shipping. After the war, the wharf served as the terminus for trade routes stretching to the East Indies, China, and the Pacific. The wharf\'s extraordinary length was a direct response to Salem Harbor\'s shallow waters — ships needed deep-water access, and extending the wharf was the only way to provide it.' },
    create: { id: 'salem-derby-wharf', townId: SALEM_TOWN_ID, name: 'Derby Wharf', slug: 'salem-derby-wharf', placeType: 'LANDMARK', description: 'Derby Wharf extends approximately 2,000 feet into Salem Harbor and was the launching point for Salem\'s Revolutionary privateers and post-war East India trade. It is part of the Salem Maritime National Historic Site.', lat: 42.5189, lng: -70.8845, address: 'Derby Street, Salem, MA 01970', featured: true, historicalNote: 'Derby Wharf was the physical foundation of Salem\'s maritime power during and after the Revolution.' },
  });

  await prisma.place.upsert({
    where: { id: 'salem-maritime-nhs' },
    update: { slug: 'salem-maritime-nhs', featured: true, description: 'The Salem Maritime National Historic Site, established in 1938, was the first National Historic Site in the United States. It encompasses twelve historic structures and approximately ten acres of land along Salem\'s waterfront, including Derby Wharf, the Custom House, the Derby House, the Narbonne House, the West India Goods Store, and several other buildings and wharves. Together, these structures tell the story of Salem\'s maritime trade from the colonial period through the nineteenth century, encompassing the Revolutionary-era privateering campaign, the post-war East India trade, and the eventual decline of Salem as a major port.\n\nThe site is operated by the National Park Service and offers ranger-led tours, exhibits, and educational programs. The concentration of original structures along Derby Street makes it one of the most intact colonial and Federal-era waterfronts in America.', historicalNote: 'The Salem Maritime National Historic Site preserves the physical infrastructure of a port that was central to the American Revolution and the early republic. The wharves, warehouses, and counting houses along this stretch of waterfront were where Salem\'s merchants organized the privateering campaign that crippled British commerce, where customs duties funded the new federal government, and where the East India trade generated fortunes that shaped American culture and architecture.' },
    create: { id: 'salem-maritime-nhs', townId: SALEM_TOWN_ID, name: 'Salem Maritime National Historic Site', slug: 'salem-maritime-nhs', placeType: 'MUSEUM', description: 'The first National Historic Site in the United States, encompassing twelve historic structures along Salem\'s waterfront that tell the story of Salem\'s maritime trade from the colonial period through the nineteenth century.', lat: 42.5192, lng: -70.8860, address: '160 Derby Street, Salem, MA 01970', featured: true, historicalNote: 'Established in 1938, the site preserves the physical infrastructure of a port central to the American Revolution and the early republic.' },
  });

  await prisma.place.upsert({
    where: { id: 'salem-old-town-hall' },
    update: { slug: 'salem-old-town-hall', description: 'Salem\'s Old Town Hall, built in 1816-1817 on Derby Square, is a Federal-style brick building designed by architect Charles Bulfinch. It stands on the site of the earlier Town House where Salem\'s citizens gathered during the Revolutionary period to debate resistance to British policies, vote on non-importation agreements, and organize committees of correspondence and safety. The current building, while post-Revolutionary, occupies the civic heart of Salem and continues to host public events and markets.\n\nThe ground floor of Old Town Hall has served various commercial purposes over the centuries, while the upper floor retains its function as a public meeting space. Derby Square, surrounding the building, was historically the center of Salem\'s commercial life, with shops, warehouses, and the homes of leading merchants nearby.', historicalNote: 'The site of Old Town Hall was Salem\'s political nerve center during the Revolution. Town meetings held here debated and voted on the non-importation agreements, organized responses to the Stamp Act and Townshend Acts, and elected the committees that coordinated resistance to British authority. The original Town House that stood here witnessed the political transformation of Salem from a loyal colonial port to a center of armed resistance.' },
    create: { id: 'salem-old-town-hall', townId: SALEM_TOWN_ID, name: 'Old Town Hall', slug: 'salem-old-town-hall', placeType: 'GOVERNMENT', description: 'Federal-style building on Derby Square occupying the site where Salem citizens gathered during the Revolution to debate resistance to British policies.', lat: 42.5218, lng: -70.8927, address: '32 Derby Square, Salem, MA 01970', historicalNote: 'The site was Salem\'s political nerve center during the Revolution.' },
  });

  await prisma.place.upsert({
    where: { id: 'salem-common' },
    update: { slug: 'salem-common', description: 'Salem Common is an approximately eight-acre public green in the center of the city, established in the seventeenth century as common land for grazing and public use. During the Revolutionary period, the Common served as Salem\'s primary militia training ground, where Timothy Pickering drilled the Essex County regiment and where the town\'s military preparations were conducted in the months before the outbreak of war. The Common\'s open expanse made it ideal for the formation drills, musket practice, and tactical exercises that transformed Salem\'s citizens into soldiers.\n\nToday, Salem Common is a landscaped public park surrounded by historic homes from the Federal and Victorian periods. It hosts community events, festivals, and commemorations. The Common remains one of the finest intact colonial-era public greens in New England.', historicalNote: 'Salem Common was the training ground where Colonel Timothy Pickering prepared the Essex County militia for war. The drills conducted here in 1774-1775 were informed by Pickering\'s own militia manual, which was later adopted across the colonies. When the alarm of April 19 reached Salem, it was from the Common that the militia marched toward Lexington.' },
    create: { id: 'salem-common', townId: SALEM_TOWN_ID, name: 'Salem Common', slug: 'salem-common', placeType: 'LANDMARK', description: 'An eight-acre public green that served as Salem\'s militia training ground during the Revolution and remains a civic gathering space today.', lat: 42.5265, lng: -70.8930, address: 'Washington Square, Salem, MA 01970', historicalNote: 'Timothy Pickering drilled the Essex County militia here in 1774-1775.' },
  });

  await prisma.place.upsert({
    where: { id: 'salem-first-church' },
    update: { slug: 'salem-first-church', description: 'The First Church in Salem, established in 1629, is one of the oldest continuously active Protestant congregations in North America. The current church building dates from later periods, but the congregation\'s history stretches back to the founding of Salem itself. During the Revolutionary era, the church and its ministers played a central role in shaping Salem\'s political consciousness, with sermons addressing the moral dimensions of resistance to tyranny and the duty of citizens to defend their liberties.\n\nReverend Thomas Barnard, minister of the North Church (closely associated with the First Church tradition), was instrumental in negotiating the resolution of Leslie\'s Retreat in February 1775. The church tradition in Salem, as in towns across Massachusetts, provided the moral and intellectual framework within which ordinary citizens understood their resistance to British authority as a righteous cause.', historicalNote: 'Salem\'s First Church was founded by Roger Conant and the original settlers of Naumkeag in 1629. During the Revolution, the congregation included many of Salem\'s leading patriots. The Puritan tradition of congregational governance — in which church members voted on matters of doctrine and leadership — provided a model for democratic self-governance that informed the political culture of Revolutionary Salem.' },
    create: { id: 'salem-first-church', townId: SALEM_TOWN_ID, name: 'First Church in Salem', slug: 'salem-first-church', placeType: 'CHURCH', description: 'One of the oldest Protestant congregations in North America, established in 1629, whose ministers played key roles during the Revolution.', lat: 42.5230, lng: -70.8900, address: '316 Essex Street, Salem, MA 01970', historicalNote: 'Founded in 1629 by the original settlers of Naumkeag.' },
  });

  await prisma.place.upsert({
    where: { id: 'salem-charter-street-cemetery' },
    update: { slug: 'salem-charter-street-cemetery', description: 'The Charter Street Cemetery, established in 1637, is the oldest burying ground in Salem and one of the oldest in the United States. It contains the graves of Salem\'s earliest settlers, prominent colonial officials, and Revolutionary-era figures. The cemetery\'s weathered headstones, carved with the distinctive iconography of Puritan New England — skulls, winged cherubs, and weeping willows — provide a tangible connection to the generations of Salem residents who built the town and lived through its most dramatic chapters.\n\nAmong those buried here are members of families that played central roles in the Revolution, including several of Salem\'s merchant elite. The cemetery also contains graves from the seventeenth-century witch trials era, making it a site of overlapping historical significance. Walking through Charter Street Cemetery is an encounter with the full arc of Salem\'s history, from its Puritan founding through the Revolution and beyond.', historicalNote: 'Charter Street Cemetery is the final resting place of multiple generations of Salem leaders, including Governor Simon Bradstreet, Judge John Hathorne (ancestor of Nathaniel Hawthorne), and numerous figures from the Revolutionary period. The cemetery\'s age and state of preservation make it an irreplaceable primary source for Salem\'s colonial and Revolutionary history.' },
    create: { id: 'salem-charter-street-cemetery', townId: SALEM_TOWN_ID, name: 'Charter Street Cemetery', slug: 'salem-charter-street-cemetery', placeType: 'CEMETERY', description: 'Salem\'s oldest burying ground, established in 1637, containing graves of colonial-era and Revolutionary figures.', lat: 42.5228, lng: -70.8870, address: '45 Charter Street, Salem, MA 01970', historicalNote: 'Established in 1637, the cemetery contains graves spanning nearly four centuries of Salem history.' },
  });

  await prisma.place.upsert({
    where: { id: 'salem-willows-park' },
    update: { slug: 'salem-willows-park', description: 'Salem Willows Park occupies a peninsula extending into Salem Harbor, offering views across the water toward Marblehead and the open Atlantic. The park takes its name from the willow trees that were planted in the early nineteenth century, but the site has been significant to Salem since the colonial period. The peninsula\'s position at the mouth of Salem Harbor made it a natural lookout point, and during the Revolution, it was part of the network of coastal observation posts that watched for British naval activity.\n\nToday, Salem Willows is a beloved public park and amusement area with an arcade, picnic grounds, and waterfront walks. The views from the park encompass the same harbor that Salem\'s privateers sailed from and that the East India traders returned to with their exotic cargoes.', historicalNote: 'During the Revolutionary period, the peninsula now occupied by Salem Willows Park served as a vantage point for monitoring British naval movements in Salem Harbor and Massachusetts Bay. The park\'s location at the harbor mouth meant it was one of the first places from which returning privateers and their prizes would be spotted.' },
    create: { id: 'salem-willows-park', townId: SALEM_TOWN_ID, name: 'Salem Willows Park', slug: 'salem-willows-park', placeType: 'LANDMARK', description: 'A waterfront park on a peninsula offering harbor views, historically significant as a coastal lookout during the Revolution.', lat: 42.5305, lng: -70.8680, address: '167 Fort Avenue, Salem, MA 01970', historicalNote: 'The peninsula served as a vantage point for monitoring British naval movements during the Revolution.' },
  });

  await prisma.place.upsert({
    where: { id: 'salem-pioneer-village' },
    update: { slug: 'salem-pioneer-village', description: 'Pioneer Village is a living history museum on the shore of Salem Harbor that recreates a 1630 Puritan settlement. Built in 1930 for the tercentenary of the Massachusetts Bay Colony, the village features reproductions of the types of dwellings, workshops, and gardens that Salem\'s earliest English settlers would have known. While the village depicts a period more than a century before the Revolution, it provides essential context for understanding the Puritan culture and values that shaped Salem\'s identity and informed its Revolutionary-era politics.\n\nThe village includes thatched-roof cottages, a blacksmith forge, a salt-making operation, and period gardens. Interpreters in period clothing demonstrate seventeenth-century crafts and daily life. Pioneer Village offers visitors an understanding of the deep cultural roots from which Salem\'s Revolutionary generation grew.', historicalNote: 'Pioneer Village was created in 1930 to commemorate the three hundredth anniversary of the founding of Salem (originally Naumkeag) by Governor John Endecott and the Puritan settlers. The traditions of self-governance, religious conviction, and community solidarity that these settlers established persisted through the generations and formed the cultural bedrock on which Salem\'s Revolutionary resistance was built.' },
    create: { id: 'salem-pioneer-village', townId: SALEM_TOWN_ID, name: 'Pioneer Village', slug: 'salem-pioneer-village', placeType: 'MUSEUM', description: 'A living history museum recreating a 1630 Puritan settlement, providing context for the cultural traditions that shaped Revolutionary Salem.', lat: 42.5280, lng: -70.8710, address: 'Forest River Park, Salem, MA 01970', historicalNote: 'Built in 1930 for the tercentenary of the Massachusetts Bay Colony.' },
  });

  await prisma.place.upsert({
    where: { id: 'salem-phillips-house' },
    update: { slug: 'salem-phillips-house', description: 'The Phillips House is a Federal-style mansion built in 1821 on Chestnut Street, one of the most architecturally significant streets in America. The house was home to several generations of the Phillips family and is now operated by Historic New England as a house museum. Its elegant interiors, filled with period furnishings and decorative arts, illustrate the wealth and taste of Salem\'s merchant elite in the decades following the Revolution.\n\nChestnut Street itself, where the Phillips House stands, was developed in the early nineteenth century as a showcase for the fortunes generated by Salem\'s maritime trade. The street\'s uniform Federal architecture — designed largely by architect Samuel McIntire — represents the physical transformation of Salem from a colonial port town into a city of refined wealth, a transformation made possible by the privateering fortunes of the Revolution and the East India trade that followed.', historicalNote: 'The Phillips House and Chestnut Street represent the material legacy of Salem\'s Revolutionary and post-Revolutionary maritime wealth. The fortunes that built these homes were generated on the wharves and in the counting houses of Salem\'s waterfront, beginning with the privateering campaign of 1775-1783 and continuing through the East India trade of the 1790s and early 1800s.' },
    create: { id: 'salem-phillips-house', townId: SALEM_TOWN_ID, name: 'Phillips House', slug: 'salem-phillips-house', placeType: 'HISTORIC_HOUSE', description: 'A Federal-style mansion on Chestnut Street illustrating the wealth of Salem\'s post-Revolutionary merchant elite.', lat: 42.5215, lng: -70.8975, address: '34 Chestnut Street, Salem, MA 01970', historicalNote: 'Built in 1821 on a street that showcases the fortunes generated by Salem\'s maritime trade.' },
  });

  await prisma.place.upsert({
    where: { id: 'salem-pickering-wharf' },
    update: { slug: 'salem-pickering-wharf', description: 'Pickering Wharf is a waterfront commercial area on Salem Harbor that combines shops, restaurants, and a marina on the site of one of Salem\'s historic working wharves. Named for the Pickering family — including Colonel Timothy Pickering, the militia commander and future Secretary of State — the wharf area was part of the network of piers and wharves that made Salem one of the busiest ports on the Atlantic coast during the Revolutionary and Federal periods.\n\nThe modern development of Pickering Wharf retains the waterfront character and offers views of Salem Harbor, the Friendship of Salem (a reproduction East Indiaman), and the working waterfront. It serves as a gateway to the Salem Maritime National Historic Site and provides a contemporary counterpart to the historic wharves nearby.', historicalNote: 'The Pickering Wharf area was part of Salem\'s extensive Revolutionary-era waterfront infrastructure. The wharves in this section of the harbor served fishing vessels, merchant ships, and privateers during the war years. The Pickering family, for whom the wharf is named, was prominent in Salem\'s political and military affairs throughout the Revolutionary period.' },
    create: { id: 'salem-pickering-wharf', townId: SALEM_TOWN_ID, name: 'Pickering Wharf', slug: 'salem-pickering-wharf', placeType: 'LANDMARK', description: 'A waterfront commercial area on the site of historic working wharves, named for the prominent Pickering family.', lat: 42.5195, lng: -70.8880, address: 'Pickering Wharf, Salem, MA 01970', historicalNote: 'Named for the Pickering family, prominent in Salem\'s political and military affairs during the Revolution.' },
  });

  await prisma.place.upsert({
    where: { id: 'salem-assembly-house' },
    update: { slug: 'salem-assembly-house', description: 'The Assembly House, located on Federal Street, was built in 1782 and served as Salem\'s premier social gathering place during the Federal period. Designed by Samuel McIntire, Salem\'s most celebrated architect, the building hosted dances, concerts, public meetings, and celebrations that brought together the town\'s merchant elite and civic leaders. George Washington attended a reception here during his New England tour in 1789, an event that underscored Salem\'s importance to the new nation.\n\nThe Assembly House represents the social dimension of Salem\'s post-Revolutionary prosperity. The same families that had financed privateers and organized resistance to British authority now gathered here to celebrate their new republic and the wealth it afforded them. The building\'s elegant Federal architecture, characteristic of McIntire\'s style, embodies the confidence and refinement of Salem\'s golden age.', historicalNote: 'The Assembly House was built just one year before the Treaty of Paris ended the Revolution. Its construction marked the beginning of Salem\'s transformation from a wartime port into a city of peacetime commerce and culture. President Washington\'s visit in 1789 was a signal event — it acknowledged Salem\'s contribution to independence and its continued importance to the republic.' },
    create: { id: 'salem-assembly-house', townId: SALEM_TOWN_ID, name: 'Assembly House', slug: 'salem-assembly-house', placeType: 'HISTORIC_HOUSE', description: 'Built in 1782 by Samuel McIntire, this was Salem\'s premier social gathering place, visited by George Washington in 1789.', lat: 42.5220, lng: -70.8935, address: '138 Federal Street, Salem, MA 01970', historicalNote: 'Built in 1782, the year before the Treaty of Paris, marking Salem\'s transition from wartime to peacetime prosperity.' },
  });

  await prisma.place.upsert({
    where: { id: 'salem-peabody-essex-museum' },
    update: { slug: 'salem-peabody-essex-museum', featured: true, description: 'The Peabody Essex Museum (PEM) is one of the oldest and most significant museums in the United States, tracing its origins to the East India Marine Society, founded in 1799 by Salem sea captains and merchants who had sailed beyond the Cape of Good Hope or Cape Horn. The society\'s members were required to deposit "natural and artificial curiosities" from their voyages, creating a collection that grew into one of the world\'s great repositories of maritime, Asian, and American art and artifacts.\n\nThe museum\'s collections encompass more than 1.8 million objects, including maritime art, Asian export art, American decorative arts, and ethnographic material from across the Pacific and Indian Ocean worlds. The connection to the Revolution is direct: the East India Marine Society was founded by men who had served as privateers during the war and then converted their wartime skills into peacetime trading ventures. PEM preserves and interprets the material legacy of Salem\'s maritime enterprise from the Revolution to the present.', historicalNote: 'The East India Marine Society, from which PEM descends, was the institutional expression of Salem\'s post-Revolutionary maritime ambitions. Its founding members included veterans of the privateering campaign who had redirected their vessels toward the East India trade after 1783. The collections they assembled — gathered from ports in China, India, Southeast Asia, and the Pacific — document the global reach of Salem\'s commerce and the cultural exchange it produced.' },
    create: { id: 'salem-peabody-essex-museum', townId: SALEM_TOWN_ID, name: 'Peabody Essex Museum', slug: 'salem-peabody-essex-museum', placeType: 'MUSEUM', description: 'One of the oldest museums in the United States, originating from the East India Marine Society founded by Salem sea captains in 1799.', lat: 42.5219, lng: -70.8913, address: '161 Essex Street, Salem, MA 01970', featured: true, historicalNote: 'Descends from the East India Marine Society founded in 1799 by veterans of Salem\'s privateering and trading voyages.' },
  });

  await prisma.place.upsert({
    where: { id: 'salem-house-seven-gables' },
    update: { slug: 'salem-house-seven-gables', featured: true, description: 'The House of the Seven Gables, built in 1668, is a Colonial-era mansion on Salem Harbor that inspired Nathaniel Hawthorne\'s 1851 novel of the same name. It is the oldest surviving timber-frame mansion in New England and one of the most visited historic houses in America. While the house predates the Revolution by more than a century, it embodies the deep history of Salem\'s merchant class — the same families who built fortunes in the colonial trade and later committed those fortunes to the patriot cause.\n\nThe site, operated by the House of the Seven Gables Settlement Association, includes several historic houses, period gardens, and a seaside setting that evokes Salem\'s maritime character. The association was founded in 1910 as a settlement house serving immigrant communities, adding a layer of social history to the site\'s colonial and literary significance.', historicalNote: 'The House of the Seven Gables was built by Captain John Turner, a prosperous Salem merchant. The Turner family\'s commercial activities were representative of the maritime trade that sustained Salem through the colonial period and laid the foundation for the Revolutionary-era economy. Hawthorne\'s novel, set in a fictionalized version of the house, explored themes of inherited guilt, social class, and the weight of history — themes with deep resonance in a town shaped by the witch trials, the Revolution, and the rise and fall of maritime commerce.' },
    create: { id: 'salem-house-seven-gables', townId: SALEM_TOWN_ID, name: 'House of the Seven Gables', slug: 'salem-house-seven-gables', placeType: 'HISTORIC_HOUSE', description: 'Built in 1668, the oldest surviving timber-frame mansion in New England and inspiration for Hawthorne\'s novel.', lat: 42.5205, lng: -70.8830, address: '115 Derby Street, Salem, MA 01970', featured: true, historicalNote: 'Built by Captain John Turner, representing the merchant class that would later finance the Revolution.' },
  });

  await prisma.place.upsert({
    where: { id: 'salem-witch-house' },
    update: { slug: 'salem-witch-house', description: 'The Witch House, also known as the Jonathan Corwin House, was built around 1675 and is the only structure still standing in Salem with direct connections to the witchcraft trials of 1692. Judge Jonathan Corwin, who lived here and conducted preliminary examinations of accused witches, was a member of one of Salem\'s most prominent merchant families. The house is a remarkably well-preserved example of seventeenth-century New England architecture.\n\nWhile the witch trials occurred nearly a century before the Revolution, they cast a long shadow over Salem\'s identity. By the 1770s, Salem\'s residents were acutely aware of their town\'s association with the trials, and the memory of that episode — in which authority was exercised unjustly and individuals were punished without due process — informed the Revolutionary generation\'s insistence on the rights of the accused and the limits of government power.', historicalNote: 'The Witch House connects Salem\'s seventeenth-century history to its Revolutionary legacy. The Corwin family remained prominent in Salem throughout the colonial period, and the memory of the witchcraft trials was a living presence in the town\'s culture. The Revolution\'s emphasis on individual rights, due process, and resistance to arbitrary authority can be understood in part as a response to episodes like the witch trials, in which those protections had failed catastrophically.' },
    create: { id: 'salem-witch-house', townId: SALEM_TOWN_ID, name: 'The Witch House', slug: 'salem-witch-house', placeType: 'HISTORIC_HOUSE', description: 'Built c.1675, the only standing structure connected to the 1692 witch trials, home of Judge Jonathan Corwin.', lat: 42.5233, lng: -70.8955, address: '310 Essex Street, Salem, MA 01970', historicalNote: 'The Corwin family remained prominent through the Revolution, and the memory of the trials informed Revolutionary thinking about rights and due process.' },
  });

  await prisma.place.upsert({
    where: { id: 'salem-mcintire-historic-district' },
    update: { slug: 'salem-mcintire-historic-district', description: 'The Samuel McIntire Historic District encompasses a large section of Salem\'s residential core, featuring hundreds of buildings designed or influenced by Samuel McIntire (1757-1811), Salem\'s master architect and woodcarver. The district includes Chestnut Street, Federal Street, Essex Street, and surrounding areas, and represents one of the finest concentrations of Federal-period architecture in the United States. The mansions, townhouses, and public buildings in the district were built with the fortunes generated by Salem\'s maritime trade — the privateering campaign of the Revolution and the East India trade that followed.\n\nMcIntire\'s distinctive style — characterized by elegant proportions, delicate wood carvings, and classical details — defined Salem\'s architectural identity and influenced Federal architecture throughout New England. The district was designated a National Historic Landmark in recognition of its architectural significance and its representation of the wealth and culture of America\'s early maritime republic.', historicalNote: 'The McIntire Historic District is the physical manifestation of Salem\'s Revolutionary and post-Revolutionary prosperity. Samuel McIntire designed homes for the Derby, Crowninshield, Peabody, and other merchant families whose fortunes were built on privateering and the East India trade. The district demonstrates how maritime wealth transformed a colonial port town into a city of refined architecture and culture within a single generation.' },
    create: { id: 'salem-mcintire-historic-district', townId: SALEM_TOWN_ID, name: 'McIntire Historic District', slug: 'salem-mcintire-historic-district', placeType: 'LANDMARK', description: 'A National Historic Landmark district featuring hundreds of Federal-period buildings designed by Samuel McIntire, built with maritime fortunes.', lat: 42.5222, lng: -70.8950, address: 'Chestnut Street area, Salem, MA 01970', historicalNote: 'The district represents the architectural transformation of Salem by maritime wealth from the Revolution and East India trade.' },
  });

  console.log('  Places seeded.');
}

// =============================================================================
// EVENTS (10 existing + 6 new = 16)
// =============================================================================

async function seedEvents() {
  console.log('  Seeding events...');

  // --- 10 Existing Events (update with slugs + summaries) ---

  await prisma.event.upsert({
    where: { id: 'event-salem-customs-resistance' },
    update: { slug: 'salem-customs-resistance', summary: `Salem's resistance to British customs enforcement was a sustained campaign that unfolded over the decade preceding the Revolution. As a major port, Salem was directly affected by every revenue measure Parliament imposed — the Sugar Act of 1764, the Stamp Act of 1765, the Townshend Duties of 1767, and the Tea Act of 1773. Salem's merchants, whose livelihoods depended on transatlantic trade, experienced these acts not as abstract political principles but as direct assaults on their businesses and their prosperity.

The town's response evolved from petitions and protests to organized economic resistance. Salem merchants signed non-importation agreements pledging to boycott British goods, and the community enforced these agreements through social pressure and public shaming of violators. Customs officials in Salem faced obstruction, harassment, and the quiet refusal of cooperation that made enforcement nearly impossible. The royal customs house became a symbol of British overreach, and the men who staffed it found themselves increasingly isolated in a hostile community.

Salem's customs resistance was significant because it demonstrated that opposition to British authority was not confined to Boston. While Boston's protests — the Massacre, the Tea Party — captured public attention, Salem's steady, systematic resistance to customs enforcement was equally important in undermining British commercial control. The town's merchants showed that an entire port community could render revenue laws unenforceable through coordinated non-compliance.` },
    create: { id: 'event-salem-customs-resistance', townId: SALEM_TOWN_ID, name: 'Salem Customs Resistance', slug: 'salem-customs-resistance', startDate: new Date('1764-01-01T00:00:00.000Z'), endDate: new Date('1774-12-31T00:00:00.000Z'), datePrecision: 'RANGE', summary: `Salem's resistance to British customs enforcement was a sustained campaign over the decade preceding the Revolution. The town's merchants experienced revenue acts as direct assaults on their businesses and responded with non-importation agreements and organized non-compliance that rendered British customs enforcement nearly impossible.`, significanceWeight: 70 },
  });

  await prisma.event.upsert({
    where: { id: 'event-salem-provisional-capital' },
    update: { slug: 'salem-provisional-capital', summary: `In October 1774, the Massachusetts General Court, defying Governor Thomas Gage's order to dissolve, reconvened in Salem as the Massachusetts Provincial Congress. This act of political defiance transformed Salem into the de facto capital of a colony in rebellion. The Provincial Congress, meeting in Salem and later in Concord and Cambridge, assumed the functions of government — raising militia, collecting taxes, appointing officials — that the royal government could no longer effectively perform outside of Boston.

Salem's role as the provisional capital was a direct consequence of the Intolerable Acts, which had closed Boston's port and restructured Massachusetts' government to concentrate power in the royal governor. By moving the General Court to Salem, the British government had hoped to isolate Boston's radicals, but the effect was the opposite: Salem's merchants and leaders were radicalized by the experience of hosting the legislature and witnessing firsthand the determination of the patriot movement.

The Provincial Congress's meetings in Salem established a precedent for revolutionary self-governance that would be repeated in every colony. Salem's willingness to serve as the seat of an illegal government demonstrated that the town's commitment to resistance went beyond economic protest to encompass a fundamental challenge to British political authority.` },
    create: { id: 'event-salem-provisional-capital', townId: SALEM_TOWN_ID, name: 'Salem Serves as Provisional Capital', slug: 'salem-provisional-capital', startDate: new Date('1774-10-07T00:00:00.000Z'), datePrecision: 'DAY', summary: `The Massachusetts General Court reconvened in Salem as the Provincial Congress in October 1774, defying the royal governor and transforming Salem into the de facto capital of a colony in rebellion.`, significanceWeight: 85 },
  });

  await prisma.event.upsert({
    where: { id: 'event-salem-essex-county-convention' },
    update: { slug: 'salem-essex-county-convention', summary: `In September 1774, delegates from towns across Essex County gathered in Salem for a county convention to coordinate their response to the Intolerable Acts. The convention endorsed the Continental Congress, pledged support for Boston (whose port had been closed by Parliament), and organized county-wide committees of safety and correspondence. The meeting brought together merchants, ministers, lawyers, and farmers from Ipswich, Newburyport, Marblehead, Gloucester, and dozens of other towns in a show of regional solidarity.

The Essex County Convention was one of dozens of similar meetings held across Massachusetts in the fall of 1774, but its significance was amplified by Essex County's economic importance. The county was home to some of the colony's most productive ports, and its merchants controlled a significant share of Massachusetts' maritime trade. Their endorsement of resistance sent a clear signal that the commercial establishment — not just the political radicals in Boston — was prepared to confront British authority.

Richard Derby Jr. and other prominent Salem merchants participated in the convention, lending their prestige and resources to the cause. The resolutions adopted at the convention were published and circulated throughout the colonies, contributing to the growing consensus that armed resistance might be necessary.` },
    create: { id: 'event-salem-essex-county-convention', townId: SALEM_TOWN_ID, name: 'Essex County Convention in Salem', slug: 'salem-essex-county-convention', startDate: new Date('1774-09-06T00:00:00.000Z'), datePrecision: 'DAY', summary: `Delegates from across Essex County gathered in Salem to coordinate resistance to the Intolerable Acts, endorse the Continental Congress, and organize county-wide committees of safety and correspondence.`, significanceWeight: 75 },
  });

  await prisma.event.upsert({
    where: { id: 'event-salem-leslie-retreat' },
    update: { slug: 'salem-leslie-retreat', summary: `On February 26, 1775, Colonel Alexander Leslie led approximately 240 soldiers of the 64th Regiment of Foot from Marblehead to Salem under orders from General Gage to seize military supplies reportedly stored at a forge north of the North River. The operation was intended to be a surprise, but Salem's intelligence network detected the approaching column, and by the time Leslie's troops reached the North Bridge, they found the drawbridge raised and a crowd of armed and determined citizens blocking their path.

The standoff at the North Bridge was the first direct confrontation between British regulars and organized colonial resistance in Massachusetts — it predated Lexington and Concord by nearly two months. Leslie threatened to fire; the Salem men refused to budge. Citizens on the near side of the river scuttled their own boats to prevent the troops from crossing by water. A local nurse, Sarah Tarrant, reportedly called out to the soldiers from a window, taunting them for their impotence. Joseph Whicher was slightly wounded when he blocked a soldier from entering a boat, making him arguably the first patriot injured by British troops in a military confrontation.

Eventually, Reverend Thomas Barnard negotiated a compromise: Leslie would be permitted to cross the bridge and march a token distance into the town, finding no supplies, and would then withdraw. The arrangement allowed both sides to save face — Leslie could report that he had crossed the bridge, while the Salem men could report that the British had retreated empty-handed. Leslie marched his troops back to Marblehead as darkness fell, and the "retreat" was immediately celebrated throughout the colony as evidence that British military power could be defied.

Leslie's Retreat demonstrated that the British could not operate freely in the Massachusetts countryside, that communities could organize effective resistance on short notice, and that the political crisis had reached a point where armed confrontation was likely. The lessons of February 26 were applied on April 19, when the alarm system, the militia organization, and the willingness to resist that Salem had demonstrated were replicated across dozens of towns.` },
    create: { id: 'event-salem-leslie-retreat', townId: SALEM_TOWN_ID, name: 'Leslie\'s Retreat', slug: 'salem-leslie-retreat', startDate: new Date('1775-02-26T00:00:00.000Z'), datePrecision: 'DAY', summary: `Colonel Alexander Leslie led 240 British troops to Salem to seize military supplies but was confronted at the North Bridge by armed citizens who raised the drawbridge and refused to yield. The standoff ended with a negotiated compromise, and Leslie withdrew empty-handed — the first armed confrontation between British troops and organized colonial resistance in Massachusetts.`, significanceWeight: 95 },
  });

  await prisma.event.upsert({
    where: { id: 'event-salem-militia-responds-lexington' },
    update: { slug: 'salem-militia-responds-lexington', summary: `When the alarm of April 19, 1775, reached Salem, the town's militia — drilled by Colonel Timothy Pickering and prepared by months of escalating tension — mustered and marched toward Lexington. Pickering's Essex County regiment was one of the largest militia formations to respond to the alarm, but the distance from Salem to the scene of fighting along Battle Road meant that his column arrived after the British had already retreated to the safety of the Charlestown peninsula under naval protection.

The march itself, however, was significant. It demonstrated that Salem's military preparations had been effective — the alarm system worked, the militia assembled quickly, and the regiment moved as an organized body. Pickering's men were prepared to fight, and their willingness to march twenty-five miles on a moment's notice showed that the spirit demonstrated during Leslie's Retreat two months earlier had not diminished.

The fact that Salem's militia arrived too late for the Battle Road fighting became a source of frustration for Pickering, who was criticized by some for the pace of his march. Whether the criticism was fair — the distance was considerable and the roads congested with militia from closer towns — the episode illustrated the logistical challenges of coordinating a colonial military response across multiple towns and counties.` },
    create: { id: 'event-salem-militia-responds-lexington', townId: SALEM_TOWN_ID, name: 'Salem Militia Responds to Lexington Alarm', slug: 'salem-militia-responds-lexington', startDate: new Date('1775-04-19T00:00:00.000Z'), datePrecision: 'DAY', summary: `Salem's militia under Colonel Timothy Pickering mustered and marched toward Lexington on April 19, 1775, demonstrating the effectiveness of the town's military preparations despite arriving after the British retreat.`, significanceWeight: 75 },
  });

  await prisma.event.upsert({
    where: { id: 'event-salem-quero-voyage' },
    update: { slug: 'salem-quero-voyage', summary: `On April 28, 1775, Captain John Derby sailed the fast schooner Quero from Salem Harbor carrying dispatches, depositions, and newspaper accounts of the Battles of Lexington and Concord. The mission, organized and financed by the Derby family, was an act of strategic information warfare: whichever version of events — American or British — reached London first would shape Parliament's response and European public opinion.

Derby drove the Quero across the Atlantic in just twenty-nine days, an exceptional passage that reflected both his skill as a captain and the quality of the Salem-built vessel. He arrived at the Isle of Wight on May 28, 1775, and immediately traveled to London with his dispatches. The American version of April 19 — depicting peaceful farmers attacked without provocation by British regulars — was published in London newspapers and debated in Parliament before General Gage's official report arrived nearly two weeks later.

The impact of the Quero's voyage was profound. Benjamin Franklin, who was still in London, used the American depositions to devastating effect in his arguments before Parliament. The narrative of British aggression against innocent colonials gained traction in the European press and contributed to the growing international sympathy for the American cause. The Derby family's decision to dispatch the Quero was one of the most consequential private actions of the entire Revolution, demonstrating that Salem's merchants understood the war of public opinion as clearly as they understood the war at sea.` },
    create: { id: 'event-salem-quero-voyage', townId: SALEM_TOWN_ID, name: 'Quero Carries News of Lexington to England', slug: 'salem-quero-voyage', startDate: new Date('1775-04-28T00:00:00.000Z'), datePrecision: 'DAY', summary: `Captain John Derby sailed the schooner Quero from Salem to England carrying the American account of Lexington and Concord. The Quero arrived in London before the official British dispatches, allowing the American version to shape public opinion in Parliament and the European press.`, significanceWeight: 90 },
  });

  await prisma.event.upsert({
    where: { id: 'event-salem-fortification-1775' },
    update: { slug: 'salem-fortification-1775', summary: `In the months following Lexington and Concord, Salem undertook a program of fortification to defend its harbor against potential British naval attack. The town constructed earthwork batteries at strategic points around the harbor entrance, mounted cannon on the heights overlooking the approaches, and organized a system of coastal watches to provide early warning of British warships. These preparations were essential because Salem's economic lifeline — its trade and its privateering operations — depended on keeping the harbor open.

The fortification effort drew on the resources of the entire community. Merchants contributed funds, laborers built earthworks, and the militia manned the batteries. The town also organized a system of signal fires and flags to communicate between observation posts along the coast. Salem's harbor defenses were never tested by a major British assault, but their existence deterred casual raiding and allowed the port to continue operating throughout the war.

The fortification of Salem was part of a broader pattern of coastal defense across Massachusetts. Towns from Gloucester to Plymouth built batteries and organized watches, creating a network of defenses that made the British Navy's task of controlling the New England coast enormously difficult. Salem's defenses were among the most extensive, reflecting the town's strategic importance as a privateering base.` },
    create: { id: 'event-salem-fortification-1775', townId: SALEM_TOWN_ID, name: 'Fortification of Salem Harbor', slug: 'salem-fortification-1775', startDate: new Date('1775-05-01T00:00:00.000Z'), datePrecision: 'MONTH', summary: `Salem constructed earthwork batteries and organized coastal watches to defend its harbor after Lexington, protecting its vital privateering operations and maritime trade.`, significanceWeight: 65 },
  });

  await prisma.event.upsert({
    where: { id: 'event-salem-privateering-campaign' },
    update: { slug: 'salem-privateering-campaign', summary: `Salem's privateering campaign during the Revolutionary War was one of the most significant naval operations of the conflict. Salem merchants, led by Elias Hasket Derby and other prominent families, outfitted armed vessels at their own expense, obtained letters of marque from the Continental Congress and the Massachusetts government, and sent them to sea to prey on British merchant shipping. Over the course of the war, Salem privateers captured an estimated 445 British vessels, a record that made Salem the most productive privateering port in the colonies.

The economics of privateering were straightforward but high-stakes. A successful cruise could yield profits of tens of thousands of pounds, enriching the ship's owners, captain, and crew. An unsuccessful cruise could mean the loss of ship and cargo, imprisonment of the crew, and financial ruin for the investors. The Derby family absorbed both outcomes, maintaining a fleet of privateers that operated continuously throughout the war.

Salem's privateering campaign had strategic significance far beyond its economic impact. By attacking British merchant shipping, Salem's privateers disrupted supply lines, drove up insurance rates in London, and forced the Royal Navy to divert warships from military operations to convoy duty. The campaign demonstrated that a maritime community could wage an effective naval war without a formal navy, using private enterprise and local initiative to project power across the Atlantic.` },
    create: { id: 'event-salem-privateering-campaign', townId: SALEM_TOWN_ID, name: 'Salem Privateering Campaign', slug: 'salem-privateering-campaign', startDate: new Date('1775-01-01T00:00:00.000Z'), endDate: new Date('1783-09-03T00:00:00.000Z'), datePrecision: 'RANGE', summary: `Salem privateers captured an estimated 445 British vessels during the Revolution, making Salem the most productive privateering port in the colonies. The campaign disrupted British commerce, drove up London insurance rates, and forced the Royal Navy to divert warships to convoy duty.`, significanceWeight: 95 },
  });

  await prisma.event.upsert({
    where: { id: 'event-salem-prize-court' },
    update: { slug: 'salem-prize-court', summary: `Salem's prize court, established during the Revolution, adjudicated the disposition of British vessels and cargoes captured by American privateers. When a Salem privateer brought a prize into port, the captured vessel and its goods were subject to legal proceedings in which the court determined whether the capture was lawful, assessed the value of the prize, and allocated the proceeds among the ship's owners, captain, and crew according to the terms of their agreement and the regulations of the Continental Congress.

The prize court was a critical institution because it provided the legal framework that made privateering a legitimate economic activity rather than piracy. Without the courts, privateering would have been impossible — no investor would have risked capital, no captain would have sailed, and no crew would have served without confidence that their share of the prizes would be legally protected. Salem's prize court processed hundreds of cases during the war, distributing millions of dollars in prize money that sustained the town's economy and funded further privateering ventures.

The court also served a diplomatic function. By insisting on legal proceedings and due process for captured vessels, the American prize courts demonstrated that the colonies were operating as a legitimate belligerent power with functioning legal institutions, not as a band of pirates. This distinction was essential to securing European recognition and support for the American cause.` },
    create: { id: 'event-salem-prize-court', townId: SALEM_TOWN_ID, name: 'Salem Prize Court Operations', slug: 'salem-prize-court', startDate: new Date('1775-01-01T00:00:00.000Z'), endDate: new Date('1783-12-31T00:00:00.000Z'), datePrecision: 'RANGE', summary: `Salem's prize court adjudicated hundreds of captured British vessels, providing the legal framework that made privateering legitimate and distributing millions in prize money that sustained the town's wartime economy.`, significanceWeight: 70 },
  });

  await prisma.event.upsert({
    where: { id: 'event-salem-derby-wharf-launch' },
    update: { slug: 'salem-derby-wharf-launch', summary: `Derby Wharf served as the primary launching point for Salem's privateering fleet throughout the Revolution. Ships were fitted out, armed, provisioned, and sent to sea from the wharf that Richard Derby Jr. had built and that his sons Elias Hasket Derby and John Derby managed. The wharf was a scene of constant activity during the war years: prizes were brought in and unloaded, damaged vessels were repaired, new privateers were commissioned and outfitted, and the crews who manned them were recruited and paid.

The wharf's physical infrastructure — its length, its deep-water access, its proximity to shipyards and warehouses — made it the ideal base for privateering operations. The Derby family invested continuously in the wharf's expansion and maintenance, understanding that its capacity directly determined the scale of their privateering enterprise. At the height of the war, multiple vessels could be fitting out simultaneously at the wharf, creating an assembly-line efficiency that maximized the number of privateers at sea.

Derby Wharf's role extended beyond the war itself. After 1783, the same wharfage and infrastructure that had supported the privateering campaign was redirected to the East India trade, and the wharf became the terminus for trade routes stretching to China, India, and the East Indies. The physical continuity of the wharf — from privateering base to global trading hub — mirrors the continuity of the families and skills that made both enterprises possible.` },
    create: { id: 'event-salem-derby-wharf-launch', townId: SALEM_TOWN_ID, name: 'Privateers Launch from Derby Wharf', slug: 'salem-derby-wharf-launch', startDate: new Date('1775-06-01T00:00:00.000Z'), datePrecision: 'MONTH', summary: `Derby Wharf served as the primary launching point for Salem's privateering fleet, with ships fitted out, armed, and dispatched to prey on British commerce throughout the war.`, significanceWeight: 75 },
  });

  // --- 6 New Events ---

  await prisma.event.upsert({
    where: { id: 'event-salem-non-importation' },
    update: { slug: 'salem-non-importation', summary: `In 1768, Salem merchants joined the colony-wide non-importation agreement, pledging to refuse British manufactured goods until the Townshend Duties were repealed. The agreement was a coordinated act of economic warfare — by cutting off the market for British exports, the colonists aimed to inflict enough financial pain on British merchants and manufacturers to pressure Parliament into reversing its revenue policies.

For Salem, compliance with the non-importation agreement required significant sacrifice. The town's merchants depended on the transatlantic trade for their livelihoods, and boycotting British goods meant forgoing profitable commerce and finding alternative sources for essential supplies. The agreement was enforced through social pressure: merchants who violated the boycott were publicly named, shamed, and ostracized. In some cases, their ships were refused berths at the wharves and their goods left unloaded on the docks.

The non-importation agreement succeeded in its immediate goal — the Townshend Duties were partially repealed in 1770 — but its deeper significance lay in the organizational precedent it established. Salem's merchants learned to coordinate their actions, enforce collective discipline, and sustain economic sacrifice for political ends. These skills would prove essential when the final break with Britain came in 1775.` },
    create: { id: 'event-salem-non-importation', townId: SALEM_TOWN_ID, name: 'Salem Non-Importation Agreement', slug: 'salem-non-importation', startDate: new Date('1768-08-01T00:00:00.000Z'), datePrecision: 'MONTH', summary: `Salem merchants joined the colony-wide non-importation agreement in 1768, boycotting British goods to pressure Parliament into repealing the Townshend Duties — an act of coordinated economic warfare that established organizational precedents for later resistance.`, significanceWeight: 70 },
  });

  await prisma.event.upsert({
    where: { id: 'event-salem-committee-correspondence' },
    update: { slug: 'salem-committee-correspondence', summary: `In 1773, Salem established a Committee of Correspondence to coordinate political communication with other Massachusetts towns and with the colonial assemblies of other provinces. The committee, composed of leading merchants, lawyers, and civic figures, served as Salem's official channel for sharing intelligence, coordinating strategy, and building the inter-colonial consensus that would eventually produce the Continental Congress.

Salem's Committee of Correspondence was particularly effective because the town's maritime connections gave it access to information from across the Atlantic world. Ships arriving from London, the West Indies, and other colonies brought news, pamphlets, and letters that the committee distributed to towns throughout Essex County. The committee also dispatched its own correspondence, articulating Salem's positions on the political crisis and soliciting support from other communities.

The Committee of Correspondence system, pioneered by Samuel Adams in Boston, was one of the most important organizational innovations of the pre-Revolutionary period. It created a communications network that linked hundreds of towns across the colonies into a coordinated political movement. Salem's participation in this network connected the town's maritime elite to the broader patriot cause and ensured that Salem's voice was heard in the councils of resistance.` },
    create: { id: 'event-salem-committee-correspondence', townId: SALEM_TOWN_ID, name: 'Salem Committee of Correspondence Formed', slug: 'salem-committee-correspondence', startDate: new Date('1773-03-01T00:00:00.000Z'), datePrecision: 'MONTH', summary: `Salem established a Committee of Correspondence in 1773 to coordinate political communication with other towns and colonies, leveraging the town's maritime connections to share intelligence and build inter-colonial consensus.`, significanceWeight: 70 },
  });

  await prisma.event.upsert({
    where: { id: 'event-salem-tea-resistance' },
    update: { slug: 'salem-tea-resistance', summary: `In the wake of the Boston Tea Party in December 1773, Salem joined the broader colonial resistance to the Tea Act with its own acts of defiance. Salem's town meeting voted to refuse the landing of any tea consigned under the Tea Act, and the community enforced this resolution with the same determination it had shown during the non-importation agreements. Ships carrying tea were turned away from Salem's wharves, and merchants who attempted to import or sell taxed tea were subject to public censure.

Salem's tea resistance was part of a wave of similar actions across the colonies — tea was destroyed, dumped, or refused landing in ports from Charleston to New York. But Salem's action had particular weight because of the town's commercial significance. As one of the busiest ports in Massachusetts, Salem's refusal to accept tea shipments represented a substantial loss of revenue for the East India Company and demonstrated that the resistance was not confined to Boston.

The Intolerable Acts, Parliament's punitive response to the Boston Tea Party, had a direct impact on Salem. The closure of Boston's port initially diverted some trade to Salem, but Salem's leaders recognized that accepting the diverted trade would undermine colonial solidarity. The town's decision to support Boston — by sending provisions and maintaining the boycott — reflected a commitment to principle over short-term profit.` },
    create: { id: 'event-salem-tea-resistance', townId: SALEM_TOWN_ID, name: 'Salem Tea Resistance', slug: 'salem-tea-resistance', startDate: new Date('1773-12-20T00:00:00.000Z'), datePrecision: 'MONTH', summary: `Salem refused the landing of tea under the Tea Act, turning ships away from its wharves and censuring merchants who attempted to import taxed tea — part of the colony-wide resistance that followed the Boston Tea Party.`, significanceWeight: 65 },
  });

  await prisma.event.upsert({
    where: { id: 'event-salem-embargo-enforcement' },
    update: { slug: 'salem-embargo-enforcement', summary: `Throughout the Revolutionary period, Salem enforced trade embargoes against Britain with a rigor that reflected the town's maritime expertise. The committees of safety and inspection monitored shipping in Salem Harbor, examined manifests, and prevented goods from reaching British-controlled ports. Enforcement was complicated by the realities of maritime trade — ships could easily alter their destinations once at sea — but Salem's tight-knit merchant community made evasion difficult. Captains who violated the embargo risked not only legal penalties but social ostracism in a community where reputation determined access to credit, cargoes, and crews.

The embargo enforcement demonstrated the same organizational skills that made Salem's privateering campaign so effective. The town's merchants knew every ship, every captain, and every cargo; they could detect violations that would have escaped notice in a larger or less cohesive port. The committee system provided a framework for surveillance and enforcement that was simultaneously democratic — the committees were elected by town meetings — and ruthlessly effective.

Salem's embargo enforcement contributed to the economic pressure that eventually convinced Britain to negotiate. By cutting off the flow of goods between the colonies and British ports, towns like Salem inflicted real financial damage on British merchants and manufacturers, creating a constituency in Britain itself that favored peace and accommodation.` },
    create: { id: 'event-salem-embargo-enforcement', townId: SALEM_TOWN_ID, name: 'Salem Embargo Enforcement', slug: 'salem-embargo-enforcement', startDate: new Date('1774-09-01T00:00:00.000Z'), endDate: new Date('1775-04-18T00:00:00.000Z'), datePrecision: 'RANGE', summary: `Salem's committees of safety and inspection enforced trade embargoes against Britain, monitoring shipping, examining manifests, and leveraging the town's tight-knit merchant community to prevent violations.`, significanceWeight: 60 },
  });

  await prisma.event.upsert({
    where: { id: 'event-salem-siege-boston' },
    update: { slug: 'salem-siege-boston', summary: `After Lexington and Concord, Salem contributed men, supplies, and material to the siege of Boston, which lasted from April 1775 until the British evacuation in March 1776. Salem's militia regiment, under Colonel Timothy Pickering, served in the siege lines around Boston, and Salem's merchants provided provisions, gunpowder, and naval stores to the Continental forces. The town also contributed to the naval dimension of the siege by dispatching armed vessels to intercept British supply ships attempting to reach the besieged garrison.

Salem's role in the siege demonstrated the town's capacity to sustain a prolonged military effort. Unlike the sprint of April 19, the siege was an eleven-month endurance test that required continuous logistical support. Salem's merchants, accustomed to outfitting long-distance trading voyages, applied the same skills to supplying an army. The town's waterfront infrastructure — wharves, warehouses, ropeworks, and shipyards — was redirected from commercial use to military support.

The siege also accelerated Salem's transition from merchant port to privateering base. With legitimate trade disrupted by the British blockade and the harbor's defenses in place, Salem's ship owners recognized that privateering offered both patriotic service and economic survival. The first Salem privateers began operating during the siege, launching the campaign that would make the town the most productive privateering port in the colonies.` },
    create: { id: 'event-salem-siege-boston', townId: SALEM_TOWN_ID, name: 'Salem in the Siege of Boston', slug: 'salem-siege-boston', startDate: new Date('1775-04-19T00:00:00.000Z'), endDate: new Date('1776-03-17T00:00:00.000Z'), datePrecision: 'RANGE', summary: `Salem contributed militia, supplies, and armed vessels to the siege of Boston, applying its maritime logistics expertise to sustain the Continental forces while launching the privateering campaign that would become the town's greatest contribution to the war.`, significanceWeight: 75 },
  });

  await prisma.event.upsert({
    where: { id: 'event-salem-postwar-recovery' },
    update: { slug: 'salem-postwar-maritime-recovery', summary: `The end of the Revolutionary War in 1783 presented Salem with both a crisis and an opportunity. The British markets that had sustained the colonial economy were now closed to American vessels, the West India trade was restricted, and the disruptions of war had depleted capital and destroyed ships. But Salem's merchants — many of whom had accumulated fortunes through successful privateering — possessed the capital, the ships, the crews, and the navigational expertise to seek new markets in places the British had never allowed them to trade.

Elias Hasket Derby led the charge into the East India trade, dispatching vessels to Canton, Calcutta, Bombay, Batavia, and ports across the Indian Ocean and South China Sea. Other Salem merchants followed, and within a decade the town had established trade routes that circled the globe. Salem ships carried American goods — fish, lumber, tobacco, and increasingly manufactured items — to distant markets and returned with pepper, tea, silk, porcelain, coffee, and spices that commanded enormous prices in the American and European markets.

The post-war maritime recovery transformed Salem from a substantial colonial port into one of the wealthiest cities per capita in the new nation. The fortunes generated by the East India trade funded the construction of the Federal-style mansions that line Chestnut Street, the founding of institutions like the East India Marine Society (predecessor of the Peabody Essex Museum), and the cultural flowering that produced Nathaniel Bowditch's "Practical Navigator" and, later, the literary works of Nathaniel Hawthorne. Salem's post-war recovery was among the most dramatic economic transformations of the early republic.` },
    create: { id: 'event-salem-postwar-recovery', townId: SALEM_TOWN_ID, name: 'Post-War Maritime Recovery and East India Trade', slug: 'salem-postwar-maritime-recovery', startDate: new Date('1783-09-03T00:00:00.000Z'), endDate: new Date('1800-12-31T00:00:00.000Z'), datePrecision: 'RANGE', summary: `After the Revolution, Salem merchants — enriched by privateering — pioneered American trade with China, India, and the East Indies, transforming Salem into one of the wealthiest cities per capita in the new nation and funding a cultural flowering that included the Peabody Essex Museum and Bowditch's "Practical Navigator."`, significanceWeight: 85 },
  });

  console.log('  Events seeded.');
}

// =============================================================================
// EVENT-PEOPLE CONNECTIONS
// =============================================================================

async function seedEventPeople() {
  console.log('  Seeding event-people connections...');

  const connections = [
    // Customs Resistance
    { eventId: 'event-salem-customs-resistance', personId: 'person-salem-richard-derby-jr', roleInEvent: 'Leading merchant who organized resistance to customs enforcement' },
    { eventId: 'event-salem-customs-resistance', personId: 'person-salem-elias-hasket-derby', roleInEvent: 'Merchant whose trading operations were directly affected by customs duties' },
    // Provisional Capital
    { eventId: 'event-salem-provisional-capital', personId: 'person-salem-richard-derby-jr', roleInEvent: 'Prominent Salem citizen who supported the Provincial Congress meeting in Salem' },
    { eventId: 'event-salem-provisional-capital', personId: 'person-salem-timothy-pickering', roleInEvent: 'Militia colonel who provided security context for the Provincial Congress' },
    // Essex County Convention
    { eventId: 'event-salem-essex-county-convention', personId: 'person-salem-richard-derby-jr', roleInEvent: 'Delegate who endorsed resistance resolutions and pledged support for Boston' },
    // Leslie's Retreat
    { eventId: 'event-salem-leslie-retreat', personId: 'person-salem-alexander-leslie', roleInEvent: 'Commander of the 64th Regiment who led the march to Salem and was forced to withdraw' },
    { eventId: 'event-salem-leslie-retreat', personId: 'person-salem-richard-derby-jr', roleInEvent: 'Prominent citizen who helped organize resistance at the North Bridge' },
    { eventId: 'event-salem-leslie-retreat', personId: 'person-salem-timothy-pickering', roleInEvent: 'Militia colonel who helped coordinate the town\'s military response' },
    // Militia Responds to Lexington
    { eventId: 'event-salem-militia-responds-lexington', personId: 'person-salem-timothy-pickering', roleInEvent: 'Commander of the Essex County militia regiment that marched toward Lexington' },
    // Quero Voyage
    { eventId: 'event-salem-quero-voyage', personId: 'person-salem-john-derby', roleInEvent: 'Captain who sailed the Quero to England with news of Lexington and Concord' },
    { eventId: 'event-salem-quero-voyage', personId: 'person-salem-elias-hasket-derby', roleInEvent: 'Financed and organized the dispatch of the Quero' },
    { eventId: 'event-salem-quero-voyage', personId: 'person-salem-richard-derby-jr', roleInEvent: 'Co-organizer of the Quero mission with his sons' },
    // Fortification
    { eventId: 'event-salem-fortification-1775', personId: 'person-salem-timothy-pickering', roleInEvent: 'Oversaw militia participation in harbor defense preparations' },
    { eventId: 'event-salem-fortification-1775', personId: 'person-salem-richard-derby-jr', roleInEvent: 'Contributed resources to the fortification effort' },
    // Privateering Campaign
    { eventId: 'event-salem-privateering-campaign', personId: 'person-salem-elias-hasket-derby', roleInEvent: 'Principal financier who outfitted and managed the largest privateering fleet in Salem' },
    { eventId: 'event-salem-privateering-campaign', personId: 'person-salem-john-derby', roleInEvent: 'Sea captain who commanded privateers and merchant vessels during the war' },
    { eventId: 'event-salem-privateering-campaign', personId: 'person-salem-richard-derby-jr', roleInEvent: 'Patriarch who provided initial capital and ships for the privateering enterprise' },
    // Prize Court
    { eventId: 'event-salem-prize-court', personId: 'person-salem-elias-hasket-derby', roleInEvent: 'Principal beneficiary of prize court proceedings as largest privateer owner' },
    // Derby Wharf Launch
    { eventId: 'event-salem-derby-wharf-launch', personId: 'person-salem-elias-hasket-derby', roleInEvent: 'Managed the wharf operations that outfitted and dispatched privateers' },
    { eventId: 'event-salem-derby-wharf-launch', personId: 'person-salem-john-derby', roleInEvent: 'Captain who sailed from Derby Wharf on privateering and dispatch missions' },
    // Non-Importation Agreement
    { eventId: 'event-salem-non-importation', personId: 'person-salem-richard-derby-jr', roleInEvent: 'Leading merchant who signed and enforced the non-importation agreement' },
    { eventId: 'event-salem-non-importation', personId: 'person-salem-elias-hasket-derby', roleInEvent: 'Merchant who participated in enforcing the boycott of British goods' },
    // Committee of Correspondence
    { eventId: 'event-salem-committee-correspondence', personId: 'person-salem-richard-derby-jr', roleInEvent: 'Served on the Committee of Correspondence' },
    { eventId: 'event-salem-committee-correspondence', personId: 'person-salem-timothy-pickering', roleInEvent: 'Participated in political coordination through the committee network' },
    // Tea Resistance
    { eventId: 'event-salem-tea-resistance', personId: 'person-salem-richard-derby-jr', roleInEvent: 'Supported the town meeting vote to refuse tea shipments' },
    // Embargo Enforcement
    { eventId: 'event-salem-embargo-enforcement', personId: 'person-salem-richard-derby-jr', roleInEvent: 'Committee of Safety member who monitored harbor shipping' },
    { eventId: 'event-salem-embargo-enforcement', personId: 'person-salem-elias-hasket-derby', roleInEvent: 'Merchant who complied with and helped enforce trade embargoes' },
    // Siege of Boston
    { eventId: 'event-salem-siege-boston', personId: 'person-salem-timothy-pickering', roleInEvent: 'Led the Essex County militia regiment in the siege lines around Boston' },
    { eventId: 'event-salem-siege-boston', personId: 'person-salem-elias-hasket-derby', roleInEvent: 'Provided supplies and began outfitting privateers to support the siege' },
    // Post-War Maritime Recovery
    { eventId: 'event-salem-postwar-recovery', personId: 'person-salem-elias-hasket-derby', roleInEvent: 'Pioneer of the East India trade who dispatched the first Salem vessels to Canton and Calcutta' },
    { eventId: 'event-salem-postwar-recovery', personId: 'person-salem-nathaniel-bowditch', roleInEvent: 'Navigator and mathematician who sailed Salem\'s East India routes and published the Practical Navigator' },
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
// STORIES (2 existing + 2 new = 4)
// =============================================================================

async function seedStories() {
  console.log('  Seeding stories...');

  // --- Existing Story 1: Derby Privateer (update slug + textVersion) ---

  await prisma.story.upsert({
    where: { id: 'story-salem-derby-privateer' },
    update: {
      slug: 'derby-privateer-empire',
      textVersion: `The ledger books of Elias Hasket Derby tell a story of war waged in ink and sail. Each line records a vessel dispatched, a cargo risked, a profit taken or a loss absorbed. The numbers are precise — Derby was meticulous in his accounting — but behind the columns of pounds and shillings lay the chaos of the Atlantic in wartime: storms, British warships, the constant possibility that a ship sent out would never return.

Derby was thirty-six years old when the Revolution began, already one of Salem's wealthiest merchants. His father, Richard Derby Jr., had built the family's fortune through the Atlantic trade — fish to the West Indies, rum and molasses back to New England, manufactured goods from England. Elias had expanded the business, extending the family's reach into new markets and new commodities. He knew the Atlantic trade the way a farmer knows his fields: intimately, practically, with an understanding born of decades of experience.

When the war closed the legitimate trade routes, Derby did not retreat to his counting house to wait out the storm. He converted his merchant fleet into an instrument of war. He outfitted privateers — armed vessels authorized by letters of marque to capture enemy merchant shipping — at his own expense, equipped them with cannon and gunpowder purchased on the open market, recruited captains and crews from Salem's waterfront, and sent them to sea with orders to take every British prize they could find.

The risks were enormous. A privateer was a private investment, not a government enterprise. If a ship was captured by the Royal Navy, the owner lost everything — the vessel, its armament, and any claim to compensation. Crew members captured by the British faced imprisonment under harsh conditions in prison ships or on English soil. Derby absorbed these losses alongside his successes, maintaining a fleet that operated continuously from 1775 to 1783.

The successes were spectacular. Salem privateers under Derby's sponsorship captured hundreds of British vessels over the course of the war. Cargoes of sugar, rum, manufactured goods, military supplies, and specie were brought into Salem Harbor and processed through the prize court, where their value was assessed and divided among the ship's owners, captain, and crew. A single successful cruise could yield profits sufficient to outfit two or three new privateers, creating a compounding effect that expanded Derby's fleet even as individual ships were lost.

But Derby's most brilliant stroke was not a privateer action at all. In April 1775, within days of Lexington and Concord, he and his father dispatched his brother John aboard the fast schooner Quero to carry news of the battle to England. The Quero was not armed for combat — she was armed for speed. John Derby drove her across the Atlantic in twenty-nine days, arriving in London before the official British dispatches. The American version of events — depositions from eyewitnesses describing British soldiers firing on peaceful farmers — was published in London newspapers and debated in Parliament before General Gage's account could arrive to offer a counternarrative.

The Quero's voyage was an act of information warfare as sophisticated as anything in the twentieth century. The Derby family understood that the Revolution would be won or lost not just on battlefields but in the counting houses of London, the chambers of Parliament, and the courts of Europe. By ensuring that the American narrative reached those audiences first, they shaped international opinion at a moment when it mattered most.

After the war, Derby pivoted to the East India trade with the same energy and audacity he had brought to privateering. His ships were among the first American vessels to trade directly with China, India, and the East Indies — routes that had been the exclusive preserve of the British East India Company during the colonial period. The profits were staggering. Pepper from Sumatra purchased for pennies a pound sold for dollars in the American and European markets. Tea, silk, porcelain, and spices from Canton and Calcutta commanded similar premiums. By the time of his death in 1799, Derby was widely considered the richest man in America.

The wharves he built, the ships he launched, the routes he opened, and the wealth he generated transformed Salem from a substantial colonial port into a global commercial power. Derby Wharf, which still extends into Salem Harbor, stands as a physical monument to a man who understood that a merchant's weapons — ships, information, capital, and nerve — could be as decisive as cannon and muskets in the fight for independence.`,
    },
    create: {
      id: 'story-salem-derby-privateer',
      townId: SALEM_TOWN_ID,
      title: "The Derby Privateer Empire: Salem's War at Sea",
      slug: 'derby-privateer-empire',
      storyType: 'HISTORICAL_VOICE',
      subjectPersonId: 'person-salem-elias-hasket-derby',
      verificationStatus: 'VERIFIED',
      textVersion: `The ledger books of Elias Hasket Derby tell a story of war waged in ink and sail. Each line records a vessel dispatched, a cargo risked, a profit taken or a loss absorbed. The numbers are precise — Derby was meticulous in his accounting — but behind the columns of pounds and shillings lay the chaos of the Atlantic in wartime: storms, British warships, the constant possibility that a ship sent out would never return.

Derby was thirty-six years old when the Revolution began, already one of Salem's wealthiest merchants. His father, Richard Derby Jr., had built the family's fortune through the Atlantic trade — fish to the West Indies, rum and molasses back to New England, manufactured goods from England. Elias had expanded the business, extending the family's reach into new markets and new commodities. He knew the Atlantic trade the way a farmer knows his fields: intimately, practically, with an understanding born of decades of experience.

When the war closed the legitimate trade routes, Derby did not retreat to his counting house to wait out the storm. He converted his merchant fleet into an instrument of war. He outfitted privateers — armed vessels authorized by letters of marque to capture enemy merchant shipping — at his own expense, equipped them with cannon and gunpowder purchased on the open market, recruited captains and crews from Salem's waterfront, and sent them to sea with orders to take every British prize they could find.

The risks were enormous. A privateer was a private investment, not a government enterprise. If a ship was captured by the Royal Navy, the owner lost everything — the vessel, its armament, and any claim to compensation. Crew members captured by the British faced imprisonment under harsh conditions in prison ships or on English soil. Derby absorbed these losses alongside his successes, maintaining a fleet that operated continuously from 1775 to 1783.

The successes were spectacular. Salem privateers under Derby's sponsorship captured hundreds of British vessels over the course of the war. Cargoes of sugar, rum, manufactured goods, military supplies, and specie were brought into Salem Harbor and processed through the prize court, where their value was assessed and divided among the ship's owners, captain, and crew. A single successful cruise could yield profits sufficient to outfit two or three new privateers, creating a compounding effect that expanded Derby's fleet even as individual ships were lost.

But Derby's most brilliant stroke was not a privateer action at all. In April 1775, within days of Lexington and Concord, he and his father dispatched his brother John aboard the fast schooner Quero to carry news of the battle to England. The Quero was not armed for combat — she was armed for speed. John Derby drove her across the Atlantic in twenty-nine days, arriving in London before the official British dispatches. The American version of events — depositions from eyewitnesses describing British soldiers firing on peaceful farmers — was published in London newspapers and debated in Parliament before General Gage's account could arrive to offer a counternarrative.

The Quero's voyage was an act of information warfare as sophisticated as anything in the twentieth century. The Derby family understood that the Revolution would be won or lost not just on battlefields but in the counting houses of London, the chambers of Parliament, and the courts of Europe. By ensuring that the American narrative reached those audiences first, they shaped international opinion at a moment when it mattered most.

After the war, Derby pivoted to the East India trade with the same energy and audacity he had brought to privateering. His ships were among the first American vessels to trade directly with China, India, and the East Indies — routes that had been the exclusive preserve of the British East India Company during the colonial period. The profits were staggering. Pepper from Sumatra purchased for pennies a pound sold for dollars in the American and European markets. Tea, silk, porcelain, and spices from Canton and Calcutta commanded similar premiums. By the time of his death in 1799, Derby was widely considered the richest man in America.

The wharves he built, the ships he launched, the routes he opened, and the wealth he generated transformed Salem from a substantial colonial port into a global commercial power. Derby Wharf, which still extends into Salem Harbor, stands as a physical monument to a man who understood that a merchant's weapons — ships, information, capital, and nerve — could be as decisive as cannon and muskets in the fight for independence.`,
      tags: ['salem', 'revolution', 'privateering', 'derby', 'maritime'],
    },
  });

  // --- Existing Story 2: Modern PEM (update slug + textVersion) ---

  await prisma.story.upsert({
    where: { id: 'story-salem-modern-pem' },
    update: {
      slug: 'pem-from-sea-captains-to-world-museum',
      textVersion: `The Peabody Essex Museum begins with a room full of curiosities brought home by men who had sailed to the other side of the world. In 1799, twenty-two Salem sea captains and merchants founded the East India Marine Society, establishing a requirement that would define the institution for two centuries: every member who had sailed beyond the Cape of Good Hope or Cape Horn was obliged to deposit "natural and artificial curiosities" from their voyages. The result was a cabinet of wonders — carved ivory from Canton, temple figures from Calcutta, feathered capes from the Pacific Islands, navigational instruments from a dozen maritime cultures — that grew with every returning ship.

These men were not scholars or anthropologists. They were businessmen, privateers turned traders, who had learned the sea lanes during the Revolutionary War and redirected their skills to the East India trade after 1783. Elias Hasket Derby's ships had opened the routes; the East India Marine Society's members sailed them. The curiosities they deposited were the material evidence of a commercial network that stretched from Salem to every major port in Asia, the Pacific, and the Indian Ocean.

The collection grew for decades, outstripping its original home and eventually merging with other Salem institutions to form the Peabody Museum and later the Peabody Essex Museum. By the twenty-first century, PEM had become one of the great museums of the world, with collections encompassing more than 1.8 million objects — maritime art, Asian export art, American decorative arts, photography, fashion, and architecture. The museum's 2003 expansion, designed by Moshe Safdie, signaled its ambition to be recognized not merely as a regional institution but as a global one.

But the roots are always visible. Walk through PEM's maritime galleries and you encounter the world as Salem's sea captains knew it: ship models and navigational charts, portraits of merchants in their counting houses, paintings of Salem vessels in exotic harbors. The collection of Asian export art — porcelain, textiles, lacquerware, furniture made in China and India for the Western market — documents the material culture of the trade that made Salem rich. A reconstructed interior of Yin Yu Tang, a complete Chinese house from Anhui province, sits within the museum's walls, a physical transplant of the Asian world that Salem's merchants engaged with for more than a century.

The Peabody Essex Museum is the institutional memory of Salem's maritime empire. It preserves the objects, the art, the documents, and the stories that connect a small New England port to the vast network of global trade that the Revolution made possible. Every piece in the collection traces a route back to the wharves — to the privateers who captured the capital, the captains who opened the routes, and the merchants who built the counting houses. PEM is not just a museum of beautiful things. It is the material evidence of what happens when a community wagers everything on the sea and wins.

Today, PEM attracts visitors from around the world to Salem's Essex Street. Its exhibitions range from historical maritime themes to contemporary art, fashion, and design, but the institution's identity remains anchored in the maritime heritage that gave it birth. The museum's ongoing research, acquisitions, and exhibition programs continue to expand understanding of the global networks that Salem's merchants created — networks that began with a Revolution and a fleet of armed ships, and that ultimately connected a small Massachusetts town to every corner of the globe.`,
    },
    create: {
      id: 'story-salem-modern-pem',
      townId: SALEM_TOWN_ID,
      title: 'From Sea Captains to World Museum: The Peabody Essex Story',
      slug: 'pem-from-sea-captains-to-world-museum',
      storyType: 'MODERN_VOICE',
      narratorName: 'Peabody Essex Museum',
      narratorRole: 'Cultural Institution, Salem, MA',
      verificationStatus: 'VERIFIED',
      textVersion: `The Peabody Essex Museum begins with a room full of curiosities brought home by men who had sailed to the other side of the world. In 1799, twenty-two Salem sea captains and merchants founded the East India Marine Society, establishing a requirement that would define the institution for two centuries: every member who had sailed beyond the Cape of Good Hope or Cape Horn was obliged to deposit "natural and artificial curiosities" from their voyages. The result was a cabinet of wonders — carved ivory from Canton, temple figures from Calcutta, feathered capes from the Pacific Islands, navigational instruments from a dozen maritime cultures — that grew with every returning ship.

These men were not scholars or anthropologists. They were businessmen, privateers turned traders, who had learned the sea lanes during the Revolutionary War and redirected their skills to the East India trade after 1783. Elias Hasket Derby's ships had opened the routes; the East India Marine Society's members sailed them. The curiosities they deposited were the material evidence of a commercial network that stretched from Salem to every major port in Asia, the Pacific, and the Indian Ocean.

The collection grew for decades, outstripping its original home and eventually merging with other Salem institutions to form the Peabody Museum and later the Peabody Essex Museum. By the twenty-first century, PEM had become one of the great museums of the world, with collections encompassing more than 1.8 million objects — maritime art, Asian export art, American decorative arts, photography, fashion, and architecture. The museum's 2003 expansion, designed by Moshe Safdie, signaled its ambition to be recognized not merely as a regional institution but as a global one.

But the roots are always visible. Walk through PEM's maritime galleries and you encounter the world as Salem's sea captains knew it: ship models and navigational charts, portraits of merchants in their counting houses, paintings of Salem vessels in exotic harbors. The collection of Asian export art — porcelain, textiles, lacquerware, furniture made in China and India for the Western market — documents the material culture of the trade that made Salem rich. A reconstructed interior of Yin Yu Tang, a complete Chinese house from Anhui province, sits within the museum's walls, a physical transplant of the Asian world that Salem's merchants engaged with for more than a century.

The Peabody Essex Museum is the institutional memory of Salem's maritime empire. It preserves the objects, the art, the documents, and the stories that connect a small New England port to the vast network of global trade that the Revolution made possible. Every piece in the collection traces a route back to the wharves — to the privateers who captured the capital, the captains who opened the routes, and the merchants who built the counting houses. PEM is not just a museum of beautiful things. It is the material evidence of what happens when a community wagers everything on the sea and wins.

Today, PEM attracts visitors from around the world to Salem's Essex Street. Its exhibitions range from historical maritime themes to contemporary art, fashion, and design, but the institution's identity remains anchored in the maritime heritage that gave it birth. The museum's ongoing research, acquisitions, and exhibition programs continue to expand understanding of the global networks that Salem's merchants created — networks that began with a Revolution and a fleet of armed ships, and that ultimately connected a small Massachusetts town to every corner of the globe.`,
      tags: ['salem', 'museum', 'peabody-essex', 'maritime', 'culture'],
    },
  });

  // --- New Story 3: Leslie's Retreat (Historical) ---

  await prisma.story.upsert({
    where: { id: 'story-salem-leslie-retreat' },
    update: {
      slug: 'leslie-retreat-bridge-at-salem',
      textVersion: `The bridge was up. Colonel Alexander Leslie stood on the south bank of the North River on the afternoon of February 26, 1775, staring across thirty feet of open water at a crowd of Salem citizens who had no intention of letting him pass. Behind him stood approximately 240 soldiers of the 64th Regiment of Foot, professional infantrymen trained in the disciplined warfare of the British Army. In front of him, on the far bank and on the bridge itself, stood farmers, merchants, and tradespeople — armed with muskets, pitchforks, and a stubborn determination that no amount of military discipline could easily overcome.

Leslie had sailed from Castle William in Boston Harbor that morning with clear orders from General Thomas Gage: march to Salem, seize the cannon and military stores that intelligence reports placed at a forge north of the North River, and return to Boston. The operation was supposed to be a quick, quiet demonstration that the Crown could enforce its authority anywhere in Massachusetts. Leslie had been ordered to avoid confrontation if possible, but to carry out his mission regardless.

The plan went wrong almost immediately. Leslie landed his troops at Marblehead to avoid detection, but the patriots' intelligence network — the same network that would later track the British column to Lexington and Concord — detected the movement and sent riders galloping to Salem with the warning. By the time Leslie's column marched into the town, the citizens were ready. The drawbridge over the North River had been raised, and a crowd was assembling on both banks.

Leslie ordered the bridge lowered. The Salem men refused. Leslie threatened to fire on anyone who obstructed his mission. The crowd did not move. Then came an act of defiance that would have been comic if the consequences had not been so potentially deadly: Salem citizens on the near bank of the river jumped into several gondolas — flat-bottomed boats used for harbor work — and began to scuttle them, chopping holes in the bottoms so that Leslie's men could not commandeer them to cross the river.

The standoff stretched on. Leslie was aware that every minute he delayed increased the likelihood that the militia would assemble in force and that the military stores, if they existed, would be moved. He was also aware that firing on unarmed citizens — or even armed citizens who were standing on their own property — would create exactly the kind of incident that Gage had ordered him to avoid. The political consequences of a massacre in Salem would be catastrophic.

From a window overlooking the confrontation, a woman named Sarah Tarrant called out to the soldiers. According to accounts preserved in local tradition, she taunted them: "Go home and tell your master he has sent you on a fool's errand and broken the peace of the Sabbath." It was Sunday, and the soldiers' march had interrupted church services — a fact that deepened the community's outrage. Joseph Whicher, who blocked a soldier from entering one of the gondolas, was struck or cut, making him arguably the first patriot to shed blood in a confrontation with British troops.

Eventually, Reverend Thomas Barnard of the North Church stepped forward to negotiate. The compromise he brokered was as elegant as it was absurd: Leslie would be allowed to cross the bridge, march a symbolic distance of several hundred feet into the town — far short of the forge where the supplies were supposedly stored — and then turn around and march back. This would allow Leslie to report that he had crossed the bridge and entered the town, while the Salem men could truthfully report that the British had found nothing and retreated.

The bridge was lowered. Leslie marched his men across, proceeded a short distance up the road, halted, about-faced, and marched back. The entire column retraced its steps to Marblehead and embarked for Boston. The military stores — nineteen cannon that had indeed been at the forge — had been moved to safety during the standoff.

Salem erupted in celebration. The incident was immediately christened "Leslie's Retreat" by the patriots, a name that emphasized the British failure. The news spread rapidly through the committees of correspondence, and the story was told and retold across the colonies as evidence that British military power could be defied by determined citizens.

Seven weeks later, on April 19, the British would march again — this time to Lexington and Concord. The alarm system that warned Salem of Leslie's approach worked again that morning. The militia organization that assembled at the North Bridge assembled again on village greens across Middlesex County. And the willingness to face British regulars that Salem's citizens demonstrated on February 26 was replicated by Captain John Parker's militia on Lexington Green. The bridge at Salem was the rehearsal. Lexington was the performance.`,
    },
    create: {
      id: 'story-salem-leslie-retreat',
      townId: SALEM_TOWN_ID,
      title: "The Bridge at Salem: Leslie's Retreat and the First Stand",
      slug: 'leslie-retreat-bridge-at-salem',
      storyType: 'HISTORICAL_VOICE',
      subjectPersonId: 'person-salem-alexander-leslie',
      verificationStatus: 'VERIFIED',
      textVersion: `The bridge was up. Colonel Alexander Leslie stood on the south bank of the North River on the afternoon of February 26, 1775, staring across thirty feet of open water at a crowd of Salem citizens who had no intention of letting him pass. Behind him stood approximately 240 soldiers of the 64th Regiment of Foot, professional infantrymen trained in the disciplined warfare of the British Army. In front of him, on the far bank and on the bridge itself, stood farmers, merchants, and tradespeople — armed with muskets, pitchforks, and a stubborn determination that no amount of military discipline could easily overcome.

Leslie had sailed from Castle William in Boston Harbor that morning with clear orders from General Thomas Gage: march to Salem, seize the cannon and military stores that intelligence reports placed at a forge north of the North River, and return to Boston. The operation was supposed to be a quick, quiet demonstration that the Crown could enforce its authority anywhere in Massachusetts. Leslie had been ordered to avoid confrontation if possible, but to carry out his mission regardless.

The plan went wrong almost immediately. Leslie landed his troops at Marblehead to avoid detection, but the patriots' intelligence network — the same network that would later track the British column to Lexington and Concord — detected the movement and sent riders galloping to Salem with the warning. By the time Leslie's column marched into the town, the citizens were ready. The drawbridge over the North River had been raised, and a crowd was assembling on both banks.

Leslie ordered the bridge lowered. The Salem men refused. Leslie threatened to fire on anyone who obstructed his mission. The crowd did not move. Then came an act of defiance that would have been comic if the consequences had not been so potentially deadly: Salem citizens on the near bank of the river jumped into several gondolas — flat-bottomed boats used for harbor work — and began to scuttle them, chopping holes in the bottoms so that Leslie's men could not commandeer them to cross the river.

The standoff stretched on. Leslie was aware that every minute he delayed increased the likelihood that the militia would assemble in force and that the military stores, if they existed, would be moved. He was also aware that firing on unarmed citizens — or even armed citizens who were standing on their own property — would create exactly the kind of incident that Gage had ordered him to avoid. The political consequences of a massacre in Salem would be catastrophic.

From a window overlooking the confrontation, a woman named Sarah Tarrant called out to the soldiers. According to accounts preserved in local tradition, she taunted them: "Go home and tell your master he has sent you on a fool's errand and broken the peace of the Sabbath." It was Sunday, and the soldiers' march had interrupted church services — a fact that deepened the community's outrage. Joseph Whicher, who blocked a soldier from entering one of the gondolas, was struck or cut, making him arguably the first patriot to shed blood in a confrontation with British troops.

Eventually, Reverend Thomas Barnard of the North Church stepped forward to negotiate. The compromise he brokered was as elegant as it was absurd: Leslie would be allowed to cross the bridge, march a symbolic distance of several hundred feet into the town — far short of the forge where the supplies were supposedly stored — and then turn around and march back. This would allow Leslie to report that he had crossed the bridge and entered the town, while the Salem men could truthfully report that the British had found nothing and retreated.

The bridge was lowered. Leslie marched his men across, proceeded a short distance up the road, halted, about-faced, and marched back. The entire column retraced its steps to Marblehead and embarked for Boston. The military stores — nineteen cannon that had indeed been at the forge — had been moved to safety during the standoff.

Salem erupted in celebration. The incident was immediately christened "Leslie's Retreat" by the patriots, a name that emphasized the British failure. The news spread rapidly through the committees of correspondence, and the story was told and retold across the colonies as evidence that British military power could be defied by determined citizens.

Seven weeks later, on April 19, the British would march again — this time to Lexington and Concord. The alarm system that warned Salem of Leslie's approach worked again that morning. The militia organization that assembled at the North Bridge assembled again on village greens across Middlesex County. And the willingness to face British regulars that Salem's citizens demonstrated on February 26 was replicated by Captain John Parker's militia on Lexington Green. The bridge at Salem was the rehearsal. Lexington was the performance.`,
      tags: ['salem', 'revolution', 'leslie-retreat', 'british-military', 'resistance'],
    },
  });

  // --- New Story 4: Bowditch and the Navigator (Modern connection) ---

  await prisma.story.upsert({
    where: { id: 'story-salem-bowditch-navigator' },
    update: {
      slug: 'bowditch-navigator-revolution-to-science',
      textVersion: `Every ship that sails by the stars owes something to a boy who grew up poor in Revolutionary Salem. Nathaniel Bowditch was born in 1773, the year of the Boston Tea Party, into a family that the war would break. His father, Habakkuk, was a cooper — a maker of barrels — whose business could not survive the disruptions of wartime commerce. By the time Nathaniel was ten, there was no money for school. He was apprenticed to a ship chandler's shop on Salem's waterfront, where he spent his days inventorying rope, tar, and sailcloth while his mind reached for something larger.

The chandler's shop sat in the shadow of Derby Wharf. Every day, Bowditch watched ships come and go — the same ships that Elias Hasket Derby was dispatching to Canton and Calcutta, to Sumatra and the Malabar Coast. These were the routes that the Revolution had opened, the trade that the privateering fortunes had made possible. The wharves were alive with the sounds of a town reinventing itself, converting the instruments of war into the instruments of global commerce. Young Bowditch, stuck behind a counter, absorbed it all.

He taught himself mathematics. This is stated simply, but the achievement was extraordinary. Without formal instruction beyond the age of ten, Bowditch mastered arithmetic, algebra, geometry, trigonometry, and eventually the higher mathematics of celestial navigation — the science of determining a ship's position by measuring the angles between heavenly bodies and the horizon. He learned Latin so he could read Newton's Principia. He learned French so he could read Laplace's celestial mechanics. His tools were borrowed books, some of them seized from a Loyalist privateer's library during the Revolution — knowledge captured at sea, like a prize.

In 1795, at age twenty-two, Bowditch went to sea aboard the Henry, sailing from Salem to the East Indies. Over the next eight years, he made five major voyages, and on each one he checked the navigational tables that every ship carried — the published references that captains used to determine their position at sea. The standard reference of the day was John Hamilton Moore's "Practical Navigator," and Bowditch found it riddled with errors. Not dozens of errors. Not hundreds. He found more than eight thousand mistakes — errors in calculation, errors in transcription, errors that could put a ship miles from where its captain believed it to be.

Eight thousand errors. The number is staggering. Every one represented a potential disaster — a reef struck in darkness, a landfall missed, a ship lost with all hands. Bowditch, with the precision of a mathematician and the practical judgment of a man who had felt the deck move under his feet, corrected every one.

In 1802, he published "The New American Practical Navigator," a book that replaced Moore's error-ridden guide and became the standard reference for mariners worldwide. The book, known simply as "Bowditch," has been continuously in print for more than two hundred years. The United States government publishes it to this day. It is the longest-running continuously published work in American history, and it was born on the wharves of Salem.

Bowditch's story is inseparable from Salem's Revolutionary history. The trade routes he sailed were the routes that the Derby family had opened after the war. The ships he sailed on were built in Salem's shipyards with capital generated by privateering. The library where he taught himself mathematics contained books captured by Salem's armed vessels. Even the navigational errors he corrected were a consequence of the maritime expansion that the Revolution had unleashed — as American ships ventured into waters they had never before sailed, the inadequacy of existing navigational aids became a matter of life and death.

Bowditch never fought in the Revolution — he was born too late for that. But he was the Revolution's intellectual heir. He proved that the maritime culture Salem had built — the seamanship, the enterprise, the appetite for the world beyond the horizon — could produce not only wealth but knowledge of the highest order. The boy from the chandler's shop became one of the most celebrated scientists in the world, and he did it with tools forged in a Revolution: captured books, Salem-built ships, and the trade routes of a town that had bet everything on the sea.`,
    },
    create: {
      id: 'story-salem-bowditch-navigator',
      townId: SALEM_TOWN_ID,
      title: "From Revolution to Navigation: Bowditch and Salem's Maritime Mind",
      slug: 'bowditch-navigator-revolution-to-science',
      storyType: 'MODERN_VOICE',
      narratorName: 'Salem Maritime Heritage',
      narratorRole: 'Cultural and Historical Interpretation',
      verificationStatus: 'VERIFIED',
      textVersion: `Every ship that sails by the stars owes something to a boy who grew up poor in Revolutionary Salem. Nathaniel Bowditch was born in 1773, the year of the Boston Tea Party, into a family that the war would break. His father, Habakkuk, was a cooper — a maker of barrels — whose business could not survive the disruptions of wartime commerce. By the time Nathaniel was ten, there was no money for school. He was apprenticed to a ship chandler's shop on Salem's waterfront, where he spent his days inventorying rope, tar, and sailcloth while his mind reached for something larger.

The chandler's shop sat in the shadow of Derby Wharf. Every day, Bowditch watched ships come and go — the same ships that Elias Hasket Derby was dispatching to Canton and Calcutta, to Sumatra and the Malabar Coast. These were the routes that the Revolution had opened, the trade that the privateering fortunes had made possible. The wharves were alive with the sounds of a town reinventing itself, converting the instruments of war into the instruments of global commerce. Young Bowditch, stuck behind a counter, absorbed it all.

He taught himself mathematics. This is stated simply, but the achievement was extraordinary. Without formal instruction beyond the age of ten, Bowditch mastered arithmetic, algebra, geometry, trigonometry, and eventually the higher mathematics of celestial navigation — the science of determining a ship's position by measuring the angles between heavenly bodies and the horizon. He learned Latin so he could read Newton's Principia. He learned French so he could read Laplace's celestial mechanics. His tools were borrowed books, some of them seized from a Loyalist privateer's library during the Revolution — knowledge captured at sea, like a prize.

In 1795, at age twenty-two, Bowditch went to sea aboard the Henry, sailing from Salem to the East Indies. Over the next eight years, he made five major voyages, and on each one he checked the navigational tables that every ship carried — the published references that captains used to determine their position at sea. The standard reference of the day was John Hamilton Moore's "Practical Navigator," and Bowditch found it riddled with errors. Not dozens of errors. Not hundreds. He found more than eight thousand mistakes — errors in calculation, errors in transcription, errors that could put a ship miles from where its captain believed it to be.

Eight thousand errors. The number is staggering. Every one represented a potential disaster — a reef struck in darkness, a landfall missed, a ship lost with all hands. Bowditch, with the precision of a mathematician and the practical judgment of a man who had felt the deck move under his feet, corrected every one.

In 1802, he published "The New American Practical Navigator," a book that replaced Moore's error-ridden guide and became the standard reference for mariners worldwide. The book, known simply as "Bowditch," has been continuously in print for more than two hundred years. The United States government publishes it to this day. It is the longest-running continuously published work in American history, and it was born on the wharves of Salem.

Bowditch's story is inseparable from Salem's Revolutionary history. The trade routes he sailed were the routes that the Derby family had opened after the war. The ships he sailed on were built in Salem's shipyards with capital generated by privateering. The library where he taught himself mathematics contained books captured by Salem's armed vessels. Even the navigational errors he corrected were a consequence of the maritime expansion that the Revolution had unleashed — as American ships ventured into waters they had never before sailed, the inadequacy of existing navigational aids became a matter of life and death.

Bowditch never fought in the Revolution — he was born too late for that. But he was the Revolution's intellectual heir. He proved that the maritime culture Salem had built — the seamanship, the enterprise, the appetite for the world beyond the horizon — could produce not only wealth but knowledge of the highest order. The boy from the chandler's shop became one of the most celebrated scientists in the world, and he did it with tools forged in a Revolution: captured books, Salem-built ships, and the trade routes of a town that had bet everything on the sea.`,
      tags: ['salem', 'bowditch', 'navigation', 'maritime', 'science'],
    },
  });

  console.log('  Stories seeded.');
}

// =============================================================================
// LESSONS (2 existing + 1 new = 3)
// =============================================================================

async function seedLessons() {
  console.log('  Seeding lesson plans...');

  // --- Existing Lesson 1 ---

  await prisma.lessonPlan.upsert({
    where: { id: 'cmm2s5o9l00d5p5g7nkt0bhql' },
    update: {
      slug: 'salem-privateering-maritime-war',
      summary: 'Students examine how Salem merchants converted their commercial fleet into a privateering force during the American Revolution, analyzing the economics, risks, and strategic impact of private naval warfare. The lesson uses primary sources including letters of marque, prize court records, and merchant correspondence to explore the intersection of commerce and warfare.',
      lessonData: {
        objectives: [
          'Define privateering and explain how it differed from piracy and from conventional naval warfare',
          'Analyze the economic incentives and risks that drove Salem merchants to invest in privateers',
          'Evaluate the strategic impact of Salem\'s privateering campaign on the British war effort',
          'Compare the roles of the Continental Navy and private armed vessels in the American Revolution',
        ],
        essentialQuestions: [
          'How did Salem\'s peacetime maritime skills translate into wartime advantages?',
          'What motivated private citizens to risk their fortunes on armed ships?',
          'Was privateering an effective military strategy, or was it just legalized piracy?',
          'How did the privateering campaign affect the post-war development of Salem?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Present students with a simplified balance sheet of a privateering voyage: costs of outfitting a ship, crew wages, the value of a captured cargo, and the risk of total loss. Ask them to calculate the potential profit and the potential loss. Would you invest? Write a one-sentence explanation of your decision.',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'Background: Salem\'s pre-war maritime economy and the Derby family\'s commercial empire',
            'Letters of Marque: The legal framework that distinguished privateers from pirates',
            'The privateering campaign: 445 captured vessels, the prize court system, and the distribution of profits',
            'Strategic impact: Disruption of British supply lines, insurance rate increases, and diversion of Royal Navy resources',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Primary Source Analysis: Students examine excerpts from Salem prize court records, identifying the captured vessel, its cargo, the capturing ship, and the distribution of proceeds. They calculate what each crew member would have earned.',
            'Map Exercise: Using a map of Atlantic shipping routes, students plot the areas where Salem privateers operated most actively. They consider why these locations were strategically important and how geography influenced privateering tactics.',
          ],
        },
        independentPractice: {
          duration: '20 minutes',
          assignment: 'Write a 250-word letter from the perspective of either (a) a Salem merchant explaining to a London correspondent why he has invested in privateers, or (b) a British merchant writing to Parliament about the impact of American privateers on his shipping business. Use at least three specific facts from the lesson.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Class discussion: After the war, many Salem privateers became East India traders. How did the skills and capital from the privateering campaign contribute to Salem\'s post-war prosperity? Exit ticket: Name one way that privateering was like modern business and one way it was fundamentally different.',
        },
        differentiation: {
          struggling: 'Provide a graphic organizer comparing privateering to piracy (legal status, authorization, profit distribution, consequences of capture). Simplify the prize court records with highlighted key terms.',
          advanced: 'Research the British perspective on American privateering using excerpts from Lloyd\'s of London records or Parliamentary debates. Write a paragraph comparing British and American views of privateering\'s legitimacy.',
          ell: 'Provide a visual glossary of maritime and legal terms (letter of marque, prize court, cargo manifest, convoy). Allow the letter-writing assignment to be completed as a structured template with sentence starters.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.1', 'RH.6-8.2', 'RH.6-8.7', 'WHST.6-8.1'],
        c3Framework: ['D2.His.1.6-8', 'D2.His.4.6-8', 'D2.Eco.1.6-8', 'D2.Eco.6.6-8'],
        note: 'Designed for grades 6-8. Can be adapted for grades 9-10 with more complex economic analysis.',
      },
    },
    create: {
      id: 'cmm2s5o9l00d5p5g7nkt0bhql',
      townId: SALEM_TOWN_ID,
      title: 'Privateers and Profit: Salem\'s Maritime War',
      slug: 'salem-privateering-maritime-war',
      gradeRange: '6-8',
      estimatedDuration: '2 class periods',
      summary: 'Students examine how Salem merchants converted their commercial fleet into a privateering force during the American Revolution, analyzing the economics, risks, and strategic impact of private naval warfare.',
      lessonData: {
        objectives: [
          'Define privateering and explain how it differed from piracy and from conventional naval warfare',
          'Analyze the economic incentives and risks that drove Salem merchants to invest in privateers',
          'Evaluate the strategic impact of Salem\'s privateering campaign on the British war effort',
          'Compare the roles of the Continental Navy and private armed vessels in the American Revolution',
        ],
        essentialQuestions: [
          'How did Salem\'s peacetime maritime skills translate into wartime advantages?',
          'What motivated private citizens to risk their fortunes on armed ships?',
          'Was privateering an effective military strategy, or was it just legalized piracy?',
          'How did the privateering campaign affect the post-war development of Salem?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Present students with a simplified balance sheet of a privateering voyage. Ask them to calculate the potential profit and loss. Would you invest?',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'Background: Salem\'s pre-war maritime economy and the Derby family\'s commercial empire',
            'Letters of Marque: The legal framework that distinguished privateers from pirates',
            'The privateering campaign: 445 captured vessels, the prize court system, and the distribution of profits',
            'Strategic impact: Disruption of British supply lines, insurance rate increases, and diversion of Royal Navy resources',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Primary Source Analysis: Students examine excerpts from Salem prize court records.',
            'Map Exercise: Students plot Atlantic shipping routes where Salem privateers operated.',
          ],
        },
        independentPractice: {
          duration: '20 minutes',
          assignment: 'Write a 250-word letter from the perspective of a Salem merchant or British merchant about privateering.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Discussion on how privateering skills translated to post-war East India trade.',
        },
        differentiation: {
          struggling: 'Graphic organizer comparing privateering to piracy.',
          advanced: 'Research the British perspective using Lloyd\'s of London records.',
          ell: 'Visual glossary of maritime and legal terms.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.1', 'RH.6-8.2', 'RH.6-8.7', 'WHST.6-8.1'],
        c3Framework: ['D2.His.1.6-8', 'D2.His.4.6-8', 'D2.Eco.1.6-8', 'D2.Eco.6.6-8'],
        note: 'Designed for grades 6-8.',
      },
    },
  });

  // --- Existing Lesson 2 ---

  await prisma.lessonPlan.upsert({
    where: { id: 'cmm2s5oa200d6p5g7vwfex232' },
    update: {
      slug: 'salem-leslie-retreat-first-resistance',
      summary: 'Students analyze Leslie\'s Retreat of February 26, 1775 — the first armed confrontation between British troops and organized colonial resistance in Massachusetts — examining how Salem citizens used intelligence, physical obstruction, and negotiation to prevent the seizure of military supplies. The lesson explores the event as a rehearsal for Lexington and Concord.',
      lessonData: {
        objectives: [
          'Describe the events of Leslie\'s Retreat and place them in the context of escalating tensions in Massachusetts',
          'Analyze the tactics used by Salem citizens to prevent the British from seizing military supplies',
          'Compare Leslie\'s Retreat to the events at Lexington and Concord seven weeks later',
          'Evaluate whether Leslie\'s Retreat should be considered the "first armed resistance" of the Revolution',
        ],
        essentialQuestions: [
          'Why did British General Gage send troops to Salem in February 1775?',
          'How did ordinary citizens — including women — participate in resistance to British authority?',
          'What lessons did the patriots learn from Leslie\'s Retreat that they applied on April 19?',
          'Why is Leslie\'s Retreat less well-known than the Battles of Lexington and Concord?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Show students a map of Salem\'s North River and the location of the bridge. Present the scenario: you are a Salem citizen. 240 British soldiers are marching toward your town. The bridge is the only crossing. What do you do? Write three options and explain which one you would choose.',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'Background: British intelligence about Salem\'s military supplies and Gage\'s orders to Leslie',
            'The march from Marblehead: Leslie\'s attempt at secrecy and the patriot warning system',
            'The confrontation at the bridge: raised drawbridge, scuttled boats, Sarah Tarrant\'s taunts',
            'The negotiation: Reverend Barnard\'s compromise and Leslie\'s face-saving withdrawal',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Timeline Comparison: Students create parallel timelines of Leslie\'s Retreat (Feb. 26) and the march to Lexington (April 19), identifying similarities in intelligence gathering, alarm systems, militia response, and outcome.',
            'Perspectives Exercise: Students read accounts from three perspectives — a Salem citizen, a British soldier, and the negotiator Reverend Barnard. They identify how each person viewed the same events and why their accounts differ.',
          ],
        },
        independentPractice: {
          duration: '20 minutes',
          assignment: 'Write a 250-word argument for or against the claim: "Leslie\'s Retreat, not the Battle of Lexington, was the true beginning of the American Revolution." Use at least three historical facts to support your position.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Class vote and discussion: Should Leslie\'s Retreat be taught alongside Lexington and Concord in American history classes? Why or why not? Exit ticket: What is one thing Salem\'s response to Leslie\'s march tells us about how colonial communities prepared for conflict?',
        },
        differentiation: {
          struggling: 'Provide a pre-filled timeline with key events and blank spaces for students to add details. Offer simplified reading excerpts with highlighted vocabulary.',
          advanced: 'Research other pre-Lexington confrontations (e.g., the Powder Alarm, the burning of the Gaspee) and write a paragraph arguing which event most deserved to be called the "start" of the Revolution.',
          ell: 'Provide a visual storyboard of Leslie\'s Retreat with captioned illustrations. Allow the argumentative paragraph to be completed using sentence frames.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.1', 'RH.6-8.6', 'RH.6-8.9', 'WHST.6-8.1'],
        c3Framework: ['D2.His.1.6-8', 'D2.His.3.6-8', 'D2.His.5.6-8', 'D2.His.16.6-8'],
        note: 'Designed for grades 6-8. Can be adapted for grades 9-10 with additional primary sources.',
      },
    },
    create: {
      id: 'cmm2s5oa200d6p5g7vwfex232',
      townId: SALEM_TOWN_ID,
      title: 'Leslie\'s Retreat: Salem\'s First Resistance',
      slug: 'salem-leslie-retreat-first-resistance',
      gradeRange: '6-8',
      estimatedDuration: '2 class periods',
      summary: 'Students analyze Leslie\'s Retreat — the first armed confrontation between British troops and organized colonial resistance in Massachusetts — examining how Salem citizens used intelligence, physical obstruction, and negotiation to prevent the seizure of military supplies.',
      lessonData: {
        objectives: [
          'Describe the events of Leslie\'s Retreat and place them in context',
          'Analyze tactics used by Salem citizens',
          'Compare Leslie\'s Retreat to Lexington and Concord',
          'Evaluate whether Leslie\'s Retreat should be considered the first armed resistance',
        ],
        essentialQuestions: [
          'Why did Gage send troops to Salem?',
          'How did ordinary citizens participate in resistance?',
          'What lessons were applied on April 19?',
          'Why is Leslie\'s Retreat less well-known?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Map-based scenario: 240 British soldiers approaching, one bridge to stop them.',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'British intelligence and Gage\'s orders',
            'The march from Marblehead and the patriot warning system',
            'The confrontation at the bridge',
            'Reverend Barnard\'s negotiation and Leslie\'s withdrawal',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Timeline comparison of Leslie\'s Retreat and the march to Lexington',
            'Multiple perspectives analysis exercise',
          ],
        },
        independentPractice: {
          duration: '20 minutes',
          assignment: 'Argumentative paragraph: Was Leslie\'s Retreat or Lexington the true beginning of the Revolution?',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Class vote and discussion on teaching Leslie\'s Retreat alongside Lexington.',
        },
        differentiation: {
          struggling: 'Pre-filled timeline with key events.',
          advanced: 'Research other pre-Lexington confrontations.',
          ell: 'Visual storyboard with captioned illustrations.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.1', 'RH.6-8.6', 'RH.6-8.9', 'WHST.6-8.1'],
        c3Framework: ['D2.His.1.6-8', 'D2.His.3.6-8', 'D2.His.5.6-8', 'D2.His.16.6-8'],
        note: 'Designed for grades 6-8.',
      },
    },
  });

  // --- New Lesson 3: Economics of Revolution ---

  await prisma.lessonPlan.upsert({
    where: { id: 'lesson-salem-economics-revolution' },
    update: {
      slug: 'salem-economics-revolution-trade',
      summary: 'Students investigate the economic forces that drove Salem into revolution — from the impact of British trade regulations on the town\'s merchants to the wartime shift from commerce to privateering and the post-war creation of the East India trade. The lesson uses financial records, trade data, and maps to analyze how economic interests shaped political decisions and how war created new economic opportunities.',
      lessonData: {
        objectives: [
          'Identify the key British trade regulations that affected Salem\'s maritime economy',
          'Analyze how economic grievances contributed to political radicalization in a merchant community',
          'Trace the economic transformation of Salem from colonial port to privateering base to global trading hub',
          'Evaluate the relationship between private profit and public patriotism in the Revolution',
        ],
        essentialQuestions: [
          'Were Salem\'s merchants motivated more by profit or by principle?',
          'How did the Revolution change Salem\'s economy, and who benefited most?',
          'Is it possible to separate economic interests from political ideals in the Revolution?',
          'What parallels exist between Salem\'s economic transformation and modern economic disruption?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Present students with three simplified trade scenarios: (1) A Salem merchant trading freely before 1764; (2) The same merchant after the Sugar Act increases duties; (3) The same merchant after the port of Boston is closed. Calculate the profit in each scenario. Ask: At what point would you consider breaking the law?',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'Salem\'s pre-war economy: Atlantic trade, the Derby family, and the dependence on maritime commerce',
            'British trade regulations and their impact: Sugar Act, Stamp Act, Townshend Duties, Tea Act, Intolerable Acts',
            'The economic case for revolution: How trade restrictions turned Salem\'s merchants into patriots',
            'Post-war transformation: From privateering to the East India trade — continuity of skills, capital, and enterprise',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Trade Data Analysis: Students examine simplified tables showing Salem\'s trade volume, customs revenue, and number of ships before, during, and after the Revolution. They create graphs and identify trends.',
            'Case Study — The Derby Family: Students trace the Derby family\'s economic journey from pre-war merchants to wartime privateers to post-war East India traders, identifying how each phase built on the previous one.',
          ],
        },
        independentPractice: {
          duration: '20 minutes',
          assignment: 'Create a "Salem Economic Timeline" infographic that shows how the town\'s economy changed across three periods: Colonial (pre-1775), Revolutionary (1775-1783), and Federal (1783-1800). Include at least two specific data points, events, or individuals in each period. Write a 100-word caption explaining the most significant economic change.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Discussion: Elias Hasket Derby became the richest man in America partly through war profiteering (privateering). Does that diminish his patriotism, or is there no contradiction between profit and principle? Exit ticket: Name one economic reason and one political reason why Salem supported the Revolution.',
        },
        differentiation: {
          struggling: 'Provide a pre-structured timeline template with labeled periods and prompts for each entry. Offer simplified trade data with guided questions.',
          advanced: 'Compare Salem\'s economic transformation to that of another port city (e.g., Charleston, Philadelphia). Research how the East India trade affected Salem\'s class structure and wealth distribution.',
          ell: 'Provide a visual glossary of economic terms (tariff, duty, embargo, import, export, profit, loss). Allow the infographic to be completed with labeled images rather than extended text.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.1', 'RH.6-8.7', 'WHST.6-8.2', 'WHST.6-8.7'],
        c3Framework: ['D2.Eco.1.6-8', 'D2.Eco.6.6-8', 'D2.His.1.6-8', 'D2.His.14.6-8'],
        note: 'Designed for grades 6-8. Integrates economics and history standards. Can be adapted for grades 9-12 with quantitative analysis of trade data.',
      },
    },
    create: {
      id: 'lesson-salem-economics-revolution',
      townId: SALEM_TOWN_ID,
      title: 'The Economics of Revolution: Salem\'s Maritime Transformation',
      slug: 'salem-economics-revolution-trade',
      gradeRange: '6-8',
      estimatedDuration: '2-3 class periods',
      summary: 'Students investigate the economic forces that drove Salem into revolution — from British trade regulations to privateering to the East India trade — using financial records, trade data, and maps to analyze how economic interests shaped political decisions.',
      lessonData: {
        objectives: [
          'Identify key British trade regulations affecting Salem',
          'Analyze how economic grievances contributed to political radicalization',
          'Trace Salem\'s economic transformation from colonial port to global trading hub',
          'Evaluate the relationship between private profit and public patriotism',
        ],
        essentialQuestions: [
          'Were merchants motivated by profit or principle?',
          'How did the Revolution change Salem\'s economy?',
          'Can economic interests be separated from political ideals?',
          'What modern parallels exist?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Three trade scenarios showing increasing British restrictions. Calculate profits. When would you consider breaking the law?',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'Salem\'s pre-war economy and the Derby family',
            'British trade regulations and their impact',
            'The economic case for revolution',
            'Post-war transformation: privateering to East India trade',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Trade data analysis with graphing exercise',
            'Derby family case study across three periods',
          ],
        },
        independentPractice: {
          duration: '20 minutes',
          assignment: 'Create a Salem Economic Timeline infographic across three periods with data points and a caption.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Discussion on profit vs. patriotism in privateering.',
        },
        differentiation: {
          struggling: 'Pre-structured timeline template with prompts.',
          advanced: 'Compare Salem to another port city.',
          ell: 'Visual glossary of economic terms.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.1', 'RH.6-8.7', 'WHST.6-8.2', 'WHST.6-8.7'],
        c3Framework: ['D2.Eco.1.6-8', 'D2.Eco.6.6-8', 'D2.His.1.6-8', 'D2.His.14.6-8'],
        note: 'Designed for grades 6-8. Integrates economics and history.',
      },
    },
  });

  console.log('  Lessons seeded.');
}

// =============================================================================
// MAIN
// =============================================================================

async function main() {
  console.log('Seeding Salem content...');

  await seedPeople();
  await seedPlaces();
  await seedEvents();
  await seedEventPeople();
  await seedStories();
  await seedLessons();

  console.log('Salem content seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
