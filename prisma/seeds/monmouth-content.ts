import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const TOWN_ID = 'us-nj-monmouth';

// =============================================================================
// PEOPLE
// =============================================================================

async function seedPeople() {
  console.log('  Seeding people...');

  // --- 8 EXISTING PEOPLE (update bioLong) ---

  await prisma.person.upsert({
    where: { id: 'person-monmouth-molly-pitcher' },
    update: {
      bioLong: `The woman known as Molly Pitcher is most commonly identified by historians as Mary Ludwig Hays McCauley, born on October 13, 1754, near Trenton, New Jersey. She grew up in a rural household of modest means and worked as a domestic servant in Carlisle, Pennsylvania, where she married William Hays, a barber who enlisted as a gunner in the Pennsylvania State Regiment of Artillery in 1777. Mary followed her husband to the Continental Army camp at Valley Forge during the winter of 1777-1778, joining the large community of women who accompanied the army as camp followers — washing, cooking, nursing the sick, and performing essential labor that kept the army functioning.

At the Battle of Monmouth on June 28, 1778, Mary Hays carried water to the artillery crews and infantrymen fighting in extreme heat that reached approximately 100 degrees Fahrenheit. Soldiers suffering from heat exhaustion and thirst called for water throughout the day, and the women who carried pitchers and buckets to the front lines performed a dangerous and critical service. According to pension records, depositions, and accounts gathered in the decades following the battle, Mary Hays also took her husband's place at the cannon when he collapsed from the heat, helping to sponge, load, and fire the gun for the remainder of the engagement.

The historical evidence for Mary Hays's actions at Monmouth rests on several sources, including pension petitions, a 1786 act of the Pennsylvania legislature granting her an annual stipend for her wartime service, and testimonies from soldiers who served at the battle. The pension records describe her as having "attended an artillery piece at the Battle of Monmouth" and having been recognized by General Washington on the field. However, the popular legend of "Molly Pitcher" has blended Mary Hays's story with those of other women who served at Monmouth and other engagements, creating a composite figure that is partly historical and partly mythological.

After the war, Mary Hays returned to Carlisle, where her husband William died around 1789. She married John McCauley, a veteran, and lived in Carlisle until her death on January 22, 1832, at the age of 77. The Pennsylvania legislature's recognition of her service — at a time when women's military contributions were rarely acknowledged in official records — is significant evidence of the genuineness of her actions at Monmouth.

WHY SHE MATTERS TO MONMOUTH

Mary Ludwig Hays McCauley, the historical figure behind the Molly Pitcher legend, represents the essential but often overlooked role that women played in the Continental Army. At Monmouth, where the extreme heat made water-carrying a matter of life and death, and where the artillery duel between American and British guns was sustained for hours, the contributions of women like Hays were critical to the army's ability to stay in the field. Her story — grounded in pension records and legislative recognition rather than mere folklore — challenges the conventional narrative that the Revolution was fought entirely by men and highlights the ways in which women's labor sustained the military effort.

- 1754: Born October 13 near Trenton, New Jersey
- 1769: Married William Hays in Carlisle, Pennsylvania
- 1777-1778: Accompanied the army to Valley Forge as a camp follower
- 1778: Carried water and manned an artillery piece at the Battle of Monmouth, June 28
- 1786: Pennsylvania legislature granted her a pension for wartime service
- 1832: Died January 22 in Carlisle, Pennsylvania, at age 77

SOURCES
- Mayer, Holly A. "Belonging to the Army: Camp Followers and Community during the American Revolution." University of South Carolina Press, 1996.
- Raphael, Ray. "Founding Myths: Stories That Hide Our Patriotic Past." New Press, 2004.
- Landis, John B. "A Short History of Molly Pitcher, the Heroine of the Battle of Monmouth." Carlisle, PA: Cornman Printing Co., 1905.
- National Park Service. "Monmouth Battlefield State Park: Molly Pitcher." Interpretive materials and pension record transcriptions.`,
    },
    create: {
      id: 'person-monmouth-molly-pitcher',
      name: 'Molly Pitcher (Mary Ludwig Hays McCauley)',
      roles: ['Camp Follower', 'Artillery Crew Member', 'Water Bearer'],
      bioShort: 'Woman identified as the historical Molly Pitcher (1754-1832) who carried water and manned a cannon at the Battle of Monmouth on June 28, 1778, receiving a Pennsylvania legislative pension for her wartime service.',
      bioLong: `The woman known as Molly Pitcher is most commonly identified by historians as Mary Ludwig Hays McCauley, born on October 13, 1754, near Trenton, New Jersey. She grew up in a rural household of modest means and worked as a domestic servant in Carlisle, Pennsylvania, where she married William Hays, a barber who enlisted as a gunner in the Pennsylvania State Regiment of Artillery in 1777. Mary followed her husband to the Continental Army camp at Valley Forge during the winter of 1777-1778, joining the large community of women who accompanied the army as camp followers — washing, cooking, nursing the sick, and performing essential labor that kept the army functioning.

At the Battle of Monmouth on June 28, 1778, Mary Hays carried water to the artillery crews and infantrymen fighting in extreme heat that reached approximately 100 degrees Fahrenheit. Soldiers suffering from heat exhaustion and thirst called for water throughout the day, and the women who carried pitchers and buckets to the front lines performed a dangerous and critical service. According to pension records, depositions, and accounts gathered in the decades following the battle, Mary Hays also took her husband's place at the cannon when he collapsed from the heat, helping to sponge, load, and fire the gun for the remainder of the engagement.

The historical evidence for Mary Hays's actions at Monmouth rests on several sources, including pension petitions, a 1786 act of the Pennsylvania legislature granting her an annual stipend for her wartime service, and testimonies from soldiers who served at the battle. The pension records describe her as having "attended an artillery piece at the Battle of Monmouth" and having been recognized by General Washington on the field. However, the popular legend of "Molly Pitcher" has blended Mary Hays's story with those of other women who served at Monmouth and other engagements, creating a composite figure that is partly historical and partly mythological.

After the war, Mary Hays returned to Carlisle, where her husband William died around 1789. She married John McCauley, a veteran, and lived in Carlisle until her death on January 22, 1832, at the age of 77. The Pennsylvania legislature's recognition of her service — at a time when women's military contributions were rarely acknowledged in official records — is significant evidence of the genuineness of her actions at Monmouth.

WHY SHE MATTERS TO MONMOUTH

Mary Ludwig Hays McCauley, the historical figure behind the Molly Pitcher legend, represents the essential but often overlooked role that women played in the Continental Army. At Monmouth, where the extreme heat made water-carrying a matter of life and death, and where the artillery duel between American and British guns was sustained for hours, the contributions of women like Hays were critical to the army's ability to stay in the field. Her story — grounded in pension records and legislative recognition rather than mere folklore — challenges the conventional narrative that the Revolution was fought entirely by men and highlights the ways in which women's labor sustained the military effort.

- 1754: Born October 13 near Trenton, New Jersey
- 1769: Married William Hays in Carlisle, Pennsylvania
- 1777-1778: Accompanied the army to Valley Forge as a camp follower
- 1778: Carried water and manned an artillery piece at the Battle of Monmouth, June 28
- 1786: Pennsylvania legislature granted her a pension for wartime service
- 1832: Died January 22 in Carlisle, Pennsylvania, at age 77

SOURCES
- Mayer, Holly A. "Belonging to the Army: Camp Followers and Community during the American Revolution." University of South Carolina Press, 1996.
- Raphael, Ray. "Founding Myths: Stories That Hide Our Patriotic Past." New Press, 2004.
- Landis, John B. "A Short History of Molly Pitcher, the Heroine of the Battle of Monmouth." Carlisle, PA: Cornman Printing Co., 1905.
- National Park Service. "Monmouth Battlefield State Park: Molly Pitcher." Interpretive materials and pension record transcriptions.`,
      birthYear: 1754,
      deathYear: 1832,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-monmouth-charles-lee' },
    update: {
      bioLong: `Charles Lee was born on February 6, 1732, in Dernhall, Cheshire, England, to Colonel John Lee and Isabella Bunbury. He was commissioned as an ensign in the 55th Regiment of Foot at age fourteen and served in the French and Indian War in North America, where he fought at the Battle of Fort Ticonderoga in 1758 and was adopted by the Mohawk people, who gave him the name Ounewaterika, meaning "Boiling Water" — a reference to his volatile temperament. Lee subsequently served in Portugal and Poland, earning a reputation as a capable if irascible officer. He settled in Virginia in 1773 and became an early advocate of American independence, publishing pamphlets arguing that colonial militia could defeat British regulars.

When the Continental Congress formed the army in 1775, Lee's extensive European military experience made him a natural candidate for high command. He was appointed major general, second in rank only to George Washington. However, Lee's relationship with Washington was marked by barely concealed rivalry. Lee believed himself the superior military mind and cultivated allies in Congress who shared that assessment. In December 1776, Lee was captured by a British patrol at Basking Ridge, New Jersey, while separated from his command — an incident that raised questions about his judgment and possibly his loyalties.

Lee was exchanged in 1778 and returned to the Continental Army just before the Battle of Monmouth. Washington gave Lee command of the advance force — approximately 5,000 troops — tasked with striking the British rear guard as Clinton's army marched across New Jersey. On the morning of June 28, 1778, Lee advanced against the British near Monmouth Court House but then ordered a retreat without fully engaging the enemy. The retreat was disorganized and threatened to become a rout. Washington encountered Lee's retreating troops, confronted Lee on the field, and assumed direct command, stabilizing the American line and turning the battle into a sustained engagement.

Lee was court-martialed on charges of disobedience, misbehavior before the enemy, and disrespect to the commander-in-chief. He was found guilty on all counts and suspended from command for one year. Lee never returned to active service. He spent his remaining years writing bitter letters attacking Washington and was eventually dismissed from the army by Congress in 1780. He died on October 2, 1782, in Philadelphia at the age of 50.

WHY HE MATTERS TO MONMOUTH

Charles Lee's unauthorized retreat at Monmouth was the pivotal crisis of the battle. His decision to pull back without orders — and the controversy over whether it was born of incompetence, cowardice, or deliberate sabotage — created the emergency that Washington had to resolve by personally riding to the front and rallying the retreating troops. The confrontation between Washington and Lee on the Monmouth battlefield became one of the defining moments of Washington's generalship: the commander-in-chief asserting control over a disobedient subordinate in the heat of combat. Lee's court-martial ended the factional challenge to Washington's authority within the officer corps and consolidated Washington's leadership for the remainder of the war.

- 1732: Born February 6 in Dernhall, Cheshire, England
- 1755-1763: Served in the French and Indian War; adopted by the Mohawk
- 1775: Appointed major general in the Continental Army
- 1776: Captured by the British at Basking Ridge, New Jersey
- 1778: Commanded the advance at Monmouth; retreated without orders; confronted by Washington; court-martialed
- 1782: Died October 2 in Philadelphia at age 50

SOURCES
- Alden, John R. "General Charles Lee: Traitor or Patriot?" Louisiana State University Press, 1951.
- Lender, Mark Edward and Stone, Garry Wheeler. "Fatal Sunday: George Washington, the Monmouth Campaign, and the Politics of Battle." University of Oklahoma Press, 2016.
- Papas, Phillip. "Renegade Revolutionary: The Life of General Charles Lee." New York University Press, 2014.`,
    },
    create: {
      id: 'person-monmouth-charles-lee',
      name: 'Charles Lee',
      roles: ['Continental Army Major General', 'British Army Veteran', 'Military Theorist'],
      bioShort: 'Continental Army major general (1732-1782) whose unauthorized retreat at the Battle of Monmouth provoked a confrontation with Washington, resulting in a court-martial that ended Lee\'s military career.',
      bioLong: `Charles Lee was born on February 6, 1732, in Dernhall, Cheshire, England, to Colonel John Lee and Isabella Bunbury. He was commissioned as an ensign in the 55th Regiment of Foot at age fourteen and served in the French and Indian War in North America, where he fought at the Battle of Fort Ticonderoga in 1758 and was adopted by the Mohawk people, who gave him the name Ounewaterika, meaning "Boiling Water" — a reference to his volatile temperament. Lee subsequently served in Portugal and Poland, earning a reputation as a capable if irascible officer. He settled in Virginia in 1773 and became an early advocate of American independence, publishing pamphlets arguing that colonial militia could defeat British regulars.

When the Continental Congress formed the army in 1775, Lee's extensive European military experience made him a natural candidate for high command. He was appointed major general, second in rank only to George Washington. However, Lee's relationship with Washington was marked by barely concealed rivalry. Lee believed himself the superior military mind and cultivated allies in Congress who shared that assessment. In December 1776, Lee was captured by a British patrol at Basking Ridge, New Jersey, while separated from his command — an incident that raised questions about his judgment and possibly his loyalties.

Lee was exchanged in 1778 and returned to the Continental Army just before the Battle of Monmouth. Washington gave Lee command of the advance force — approximately 5,000 troops — tasked with striking the British rear guard as Clinton's army marched across New Jersey. On the morning of June 28, 1778, Lee advanced against the British near Monmouth Court House but then ordered a retreat without fully engaging the enemy. The retreat was disorganized and threatened to become a rout. Washington encountered Lee's retreating troops, confronted Lee on the field, and assumed direct command, stabilizing the American line and turning the battle into a sustained engagement.

Lee was court-martialed on charges of disobedience, misbehavior before the enemy, and disrespect to the commander-in-chief. He was found guilty on all counts and suspended from command for one year. Lee never returned to active service. He spent his remaining years writing bitter letters attacking Washington and was eventually dismissed from the army by Congress in 1780. He died on October 2, 1782, in Philadelphia at the age of 50.

WHY HE MATTERS TO MONMOUTH

Charles Lee's unauthorized retreat at Monmouth was the pivotal crisis of the battle. His decision to pull back without orders — and the controversy over whether it was born of incompetence, cowardice, or deliberate sabotage — created the emergency that Washington had to resolve by personally riding to the front and rallying the retreating troops. The confrontation between Washington and Lee on the Monmouth battlefield became one of the defining moments of Washington's generalship: the commander-in-chief asserting control over a disobedient subordinate in the heat of combat. Lee's court-martial ended the factional challenge to Washington's authority within the officer corps and consolidated Washington's leadership for the remainder of the war.

- 1732: Born February 6 in Dernhall, Cheshire, England
- 1755-1763: Served in the French and Indian War; adopted by the Mohawk
- 1775: Appointed major general in the Continental Army
- 1776: Captured by the British at Basking Ridge, New Jersey
- 1778: Commanded the advance at Monmouth; retreated without orders; confronted by Washington; court-martialed
- 1782: Died October 2 in Philadelphia at age 50

SOURCES
- Alden, John R. "General Charles Lee: Traitor or Patriot?" Louisiana State University Press, 1951.
- Lender, Mark Edward and Stone, Garry Wheeler. "Fatal Sunday: George Washington, the Monmouth Campaign, and the Politics of Battle." University of Oklahoma Press, 2016.
- Papas, Phillip. "Renegade Revolutionary: The Life of General Charles Lee." New York University Press, 2014.`,
      birthYear: 1732,
      deathYear: 1782,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-monmouth-henry-clinton' },
    update: {
      bioLong: `Henry Clinton was born on April 16, 1730, into a prominent English military and political family. His father, Admiral George Clinton, served as colonial governor of New York from 1743 to 1753, and young Henry spent part of his childhood in the colony, giving him some familiarity with North America. He was commissioned in the Coldstream Guards and saw extensive service in the Seven Years' War in Germany, where he was wounded at the Battle of Johannisberg in 1762 and developed a reputation as a competent tactical officer.

Clinton arrived in Boston in May 1775 as one of three major generals — alongside William Howe and John Burgoyne — sent to reinforce General Thomas Gage. He played a secondary role at the Battle of Bunker Hill, where he led reinforcements to the British assault force. Clinton participated in the failed attack on Charleston, South Carolina, in 1776 and served under Howe during the Philadelphia campaign of 1777. In February 1778, Clinton succeeded Howe as commander-in-chief of British forces in North America.

Clinton's first major challenge as commander-in-chief was the evacuation of Philadelphia following the French alliance with the United States. Ordered to consolidate forces in New York, Clinton had to march approximately 12,000 troops, along with a massive baggage train of over 1,500 wagons, across New Jersey in the summer heat. The march, which began on June 18, 1778, was slowed by the enormous supply train, the sandy roads, and the extreme heat. Clinton's army stretched out over twelve miles of road, making it vulnerable to attack.

At Monmouth on June 28, Clinton's rear guard under Cornwallis was engaged by the American advance force. When Lee's initial attack faltered and Washington stabilized the American line, Clinton committed his best troops — including elite grenadier and Guards battalions — to a series of counterattacks. The fighting was fierce but inconclusive. That night, Clinton withdrew his army and continued the march to Sandy Hook, where the British were evacuated by ship to New York. Clinton would remain commander-in-chief until 1782, overseeing a war that shifted increasingly to the southern theater.

WHY HE MATTERS TO MONMOUTH

Henry Clinton commanded the British forces whose march across New Jersey precipitated the Battle of Monmouth. His decision-making during the battle — committing elite troops to counterattacks against Washington's reformed line — demonstrated the changed nature of the conflict. The Continental Army that Clinton faced at Monmouth was a fundamentally different force from the one the British had dispersed at earlier engagements. Clinton's inability to break Washington's line, and his decision to withdraw during the night, marked the last major engagement in the northern theater and signaled that the British could no longer operate freely in the interior of the middle states.

- 1730: Born April 16 in England
- 1775: Arrived in Boston; participated at Bunker Hill
- 1778: Succeeded Howe as commander-in-chief; ordered evacuation of Philadelphia
- 1778: Commanded British forces at the Battle of Monmouth, June 28; withdrew to New York
- 1782: Replaced by Sir Guy Carleton as commander-in-chief
- 1795: Died December 23 in England at age 65

SOURCES
- Willcox, William B. "Portrait of a General: Sir Henry Clinton in the War of Independence." Alfred A. Knopf, 1964.
- Lender, Mark Edward and Stone, Garry Wheeler. "Fatal Sunday: George Washington, the Monmouth Campaign, and the Politics of Battle." University of Oklahoma Press, 2016.
- O'Shaughnessy, Andrew Jackson. "The Men Who Lost America: British Leadership, the American Revolution, and the Fate of the Empire." Yale University Press, 2013.`,
    },
    create: {
      id: 'person-monmouth-henry-clinton',
      name: 'Sir Henry Clinton',
      roles: ['British Commander-in-Chief', 'Major General', 'Colonial Governor\'s Son'],
      bioShort: 'Commander-in-chief of British forces in North America (1730-1795) who led the march across New Jersey and commanded the British at the Battle of Monmouth on June 28, 1778.',
      bioLong: `Henry Clinton was born on April 16, 1730, into a prominent English military and political family. His father, Admiral George Clinton, served as colonial governor of New York from 1743 to 1753, and young Henry spent part of his childhood in the colony, giving him some familiarity with North America. He was commissioned in the Coldstream Guards and saw extensive service in the Seven Years' War in Germany, where he was wounded at the Battle of Johannisberg in 1762 and developed a reputation as a competent tactical officer.

Clinton arrived in Boston in May 1775 as one of three major generals — alongside William Howe and John Burgoyne — sent to reinforce General Thomas Gage. He played a secondary role at the Battle of Bunker Hill, where he led reinforcements to the British assault force. Clinton participated in the failed attack on Charleston, South Carolina, in 1776 and served under Howe during the Philadelphia campaign of 1777. In February 1778, Clinton succeeded Howe as commander-in-chief of British forces in North America.

Clinton's first major challenge as commander-in-chief was the evacuation of Philadelphia following the French alliance with the United States. Ordered to consolidate forces in New York, Clinton had to march approximately 12,000 troops, along with a massive baggage train of over 1,500 wagons, across New Jersey in the summer heat. The march, which began on June 18, 1778, was slowed by the enormous supply train, the sandy roads, and the extreme heat. Clinton's army stretched out over twelve miles of road, making it vulnerable to attack.

At Monmouth on June 28, Clinton's rear guard under Cornwallis was engaged by the American advance force. When Lee's initial attack faltered and Washington stabilized the American line, Clinton committed his best troops — including elite grenadier and Guards battalions — to a series of counterattacks. The fighting was fierce but inconclusive. That night, Clinton withdrew his army and continued the march to Sandy Hook, where the British were evacuated by ship to New York. Clinton would remain commander-in-chief until 1782, overseeing a war that shifted increasingly to the southern theater.

WHY HE MATTERS TO MONMOUTH

Henry Clinton commanded the British forces whose march across New Jersey precipitated the Battle of Monmouth. His decision-making during the battle — committing elite troops to counterattacks against Washington's reformed line — demonstrated the changed nature of the conflict. The Continental Army that Clinton faced at Monmouth was a fundamentally different force from the one the British had dispersed at earlier engagements. Clinton's inability to break Washington's line, and his decision to withdraw during the night, marked the last major engagement in the northern theater and signaled that the British could no longer operate freely in the interior of the middle states.

- 1730: Born April 16 in England
- 1775: Arrived in Boston; participated at Bunker Hill
- 1778: Succeeded Howe as commander-in-chief; ordered evacuation of Philadelphia
- 1778: Commanded British forces at the Battle of Monmouth, June 28; withdrew to New York
- 1782: Replaced by Sir Guy Carleton as commander-in-chief
- 1795: Died December 23 in England at age 65

SOURCES
- Willcox, William B. "Portrait of a General: Sir Henry Clinton in the War of Independence." Alfred A. Knopf, 1964.
- Lender, Mark Edward and Stone, Garry Wheeler. "Fatal Sunday: George Washington, the Monmouth Campaign, and the Politics of Battle." University of Oklahoma Press, 2016.
- O'Shaughnessy, Andrew Jackson. "The Men Who Lost America: British Leadership, the American Revolution, and the Fate of the Empire." Yale University Press, 2013.`,
      birthYear: 1730,
      deathYear: 1795,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-monmouth-anthony-wayne' },
    update: {
      bioLong: `Anthony Wayne was born on January 1, 1745, in Easttown Township, Chester County, Pennsylvania. He attended his uncle's private academy and the College of Philadelphia, where he studied mathematics and surveying. Before the war, Wayne worked as a surveyor and tanner, managing his family's tannery. His forceful personality and aggressive temperament earned him the nickname "Mad Anthony" — though the name referred more to his audacious tactical style than to any instability.

Wayne was commissioned as a colonel of the 4th Pennsylvania Battalion in January 1776 and saw his first major action during the failed invasion of Canada. He commanded at Ticonderoga in 1776-1777 before joining Washington's main army. Wayne fought at Brandywine and Germantown in the fall of 1777, and in October 1777 his troops were surprised in a British night bayonet attack at Paoli that killed or wounded over 200 Americans — an event known as the Paoli Massacre that Wayne avenged two years later at Stony Point.

At Valley Forge during the winter of 1777-1778, Wayne's brigade underwent the rigorous training program implemented by Baron von Steuben. Wayne embraced the new drill enthusiastically, recognizing that European-style discipline would enable the aggressive offensive tactics he favored. At the Battle of Monmouth, Wayne commanded a forward brigade that was part of Lee's advance force. When Lee ordered the retreat, Wayne's troops were among those most hotly engaged with the British and most exposed by the withdrawal. Wayne conducted a fighting retreat, maintaining unit cohesion under fire. When Washington arrived and stabilized the line, Wayne's brigade formed part of the new defensive position near the Hedgerow and the West Morass, where they repulsed repeated British attacks.

Wayne continued to serve with distinction throughout the war, capturing the British fort at Stony Point in 1779 in a midnight bayonet assault and suppressing the Pennsylvania Line Mutiny in 1781. After the war, he served in Congress and later commanded the Legion of the United States in the Northwest Indian War, winning the Battle of Fallen Timbers in 1794. He died on December 15, 1796, at age 51 in Erie, Pennsylvania.

WHY HE MATTERS TO MONMOUTH

Anthony Wayne's performance at Monmouth demonstrated the transformation that Valley Forge had wrought in the Continental Army's officer corps. Wayne's ability to conduct an orderly fighting retreat when Lee's advance collapsed — and then to anchor the new defensive line that Washington established — showed that American officers could now manage their troops under the pressure of close-range combat with British regulars. Wayne's brigade absorbed multiple British counterattacks without breaking, a feat that would have been unthinkable for the same troops a year earlier. His actions at the Hedgerow position were among the most tactically significant of the entire engagement.

- 1745: Born January 1 in Easttown Township, Chester County, Pennsylvania
- 1776: Commanded 4th Pennsylvania Battalion in the Canada campaign
- 1777: Fought at Brandywine and Germantown; survived the Paoli Massacre
- 1777-1778: Trained under Steuben at Valley Forge
- 1778: Commanded a forward brigade at Monmouth; anchored the defensive line after Lee's retreat
- 1779: Led the bayonet assault on Stony Point
- 1796: Died December 15 in Erie, Pennsylvania, at age 51

SOURCES
- Nelson, Paul David. "Anthony Wayne: Soldier of the Early Republic." Indiana University Press, 1985.
- Lender, Mark Edward and Stone, Garry Wheeler. "Fatal Sunday: George Washington, the Monmouth Campaign, and the Politics of Battle." University of Oklahoma Press, 2016.
- Treese, Lorett. "The Storm Gathering: The Penn Family and the American Revolution." Penn State University Press, 1992.`,
    },
    create: {
      id: 'person-monmouth-anthony-wayne',
      name: 'Anthony Wayne',
      roles: ['Continental Army Brigadier General', 'Surveyor', 'Politician'],
      bioShort: 'Continental Army brigadier general (1745-1796) known as "Mad Anthony" who commanded a forward brigade at Monmouth, conducting a fighting retreat under Lee and then anchoring Washington\'s reformed defensive line.',
      bioLong: `Anthony Wayne was born on January 1, 1745, in Easttown Township, Chester County, Pennsylvania. He attended his uncle's private academy and the College of Philadelphia, where he studied mathematics and surveying. Before the war, Wayne worked as a surveyor and tanner, managing his family's tannery. His forceful personality and aggressive temperament earned him the nickname "Mad Anthony" — though the name referred more to his audacious tactical style than to any instability.

Wayne was commissioned as a colonel of the 4th Pennsylvania Battalion in January 1776 and saw his first major action during the failed invasion of Canada. He commanded at Ticonderoga in 1776-1777 before joining Washington's main army. Wayne fought at Brandywine and Germantown in the fall of 1777, and in October 1777 his troops were surprised in a British night bayonet attack at Paoli that killed or wounded over 200 Americans — an event known as the Paoli Massacre that Wayne avenged two years later at Stony Point.

At Valley Forge during the winter of 1777-1778, Wayne's brigade underwent the rigorous training program implemented by Baron von Steuben. Wayne embraced the new drill enthusiastically, recognizing that European-style discipline would enable the aggressive offensive tactics he favored. At the Battle of Monmouth, Wayne commanded a forward brigade that was part of Lee's advance force. When Lee ordered the retreat, Wayne's troops were among those most hotly engaged with the British and most exposed by the withdrawal. Wayne conducted a fighting retreat, maintaining unit cohesion under fire. When Washington arrived and stabilized the line, Wayne's brigade formed part of the new defensive position near the Hedgerow and the West Morass, where they repulsed repeated British attacks.

Wayne continued to serve with distinction throughout the war, capturing the British fort at Stony Point in 1779 in a midnight bayonet assault and suppressing the Pennsylvania Line Mutiny in 1781. After the war, he served in Congress and later commanded the Legion of the United States in the Northwest Indian War, winning the Battle of Fallen Timbers in 1794. He died on December 15, 1796, at age 51 in Erie, Pennsylvania.

WHY HE MATTERS TO MONMOUTH

Anthony Wayne's performance at Monmouth demonstrated the transformation that Valley Forge had wrought in the Continental Army's officer corps. Wayne's ability to conduct an orderly fighting retreat when Lee's advance collapsed — and then to anchor the new defensive line that Washington established — showed that American officers could now manage their troops under the pressure of close-range combat with British regulars. Wayne's brigade absorbed multiple British counterattacks without breaking, a feat that would have been unthinkable for the same troops a year earlier. His actions at the Hedgerow position were among the most tactically significant of the entire engagement.

- 1745: Born January 1 in Easttown Township, Chester County, Pennsylvania
- 1776: Commanded 4th Pennsylvania Battalion in the Canada campaign
- 1777: Fought at Brandywine and Germantown; survived the Paoli Massacre
- 1777-1778: Trained under Steuben at Valley Forge
- 1778: Commanded a forward brigade at Monmouth; anchored the defensive line after Lee's retreat
- 1779: Led the bayonet assault on Stony Point
- 1796: Died December 15 in Erie, Pennsylvania, at age 51

SOURCES
- Nelson, Paul David. "Anthony Wayne: Soldier of the Early Republic." Indiana University Press, 1985.
- Lender, Mark Edward and Stone, Garry Wheeler. "Fatal Sunday: George Washington, the Monmouth Campaign, and the Politics of Battle." University of Oklahoma Press, 2016.
- Treese, Lorett. "The Storm Gathering: The Penn Family and the American Revolution." Penn State University Press, 1992.`,
      birthYear: 1745,
      deathYear: 1796,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-monmouth-charles-cornwallis' },
    update: {
      bioLong: `Charles Cornwallis, 1st Marquess Cornwallis, was born on December 31, 1738, in Grosvenor Square, London, to the 1st Earl Cornwallis. He was educated at Eton and the Military Academy at Turin, Italy, and was commissioned as an ensign in the 1st Foot Guards at age eighteen. He served in the Seven Years' War in Germany, fighting at the Battle of Minden in 1759 and several other engagements. By the outbreak of the American Revolution, Cornwallis was a lieutenant general with significant combat experience and a seat in the House of Lords, where he had notably voted against the Stamp Act — one of the few peers to oppose the taxation policies that precipitated the colonial crisis.

Cornwallis arrived in America in 1776 and served under Howe during the New York campaign. He distinguished himself as an aggressive field commander, pursuing Washington's retreating army across New Jersey in late 1776. Cornwallis commanded the British force defeated at Princeton in January 1777 and served at Brandywine and the capture of Philadelphia. When Clinton succeeded Howe as commander-in-chief in 1778, Cornwallis remained as second-in-command, a position he held during the evacuation of Philadelphia and the march across New Jersey.

At the Battle of Monmouth, Cornwallis commanded the British rear guard — the portion of Clinton's army most directly exposed to American attack. His command included some of the finest troops in the British army: the Brigade of Guards, grenadier battalions, and light infantry companies. When the American advance force attacked on the morning of June 28, Cornwallis's troops bore the brunt of the initial contact. After Lee's retreat and Washington's reorganization, Cornwallis led a series of determined counterattacks against the American positions near the Hedgerow and along the West Morass. These attacks were repulsed, and as evening approached, the fighting subsided into an artillery duel.

Cornwallis would later command British forces in the southern campaign, winning victories at Camden and Guilford Courthouse before his army was trapped at Yorktown, Virginia, where he surrendered on October 19, 1781, effectively ending the war. After the war, Cornwallis served as Governor-General of India and Lord Lieutenant of Ireland, dying on October 5, 1805, at age 66.

WHY HE MATTERS TO MONMOUTH

Cornwallis commanded the British rear guard that bore the full weight of the American attack at Monmouth. His experienced troops — the Guards, the grenadiers, the light infantry — represented the elite of the British army, and their inability to break the American line demonstrated how profoundly the Continental Army had changed since Valley Forge. Cornwallis's counterattacks at the Hedgerow and the West Morass were launched by some of the most formidable combat units in the world, yet they were turned back by American troops who held their ground, maintained formation, and delivered disciplined volleys. The battle was Cornwallis's first encounter with the reformed Continental Army, and it foreshadowed the difficulties he would face in the southern campaign that ended at Yorktown.

- 1738: Born December 31 in London, England
- 1776: Arrived in America; served in the New York campaign
- 1777: Fought at Brandywine and during the Philadelphia campaign
- 1778: Commanded the British rear guard at the Battle of Monmouth, June 28
- 1781: Surrendered at Yorktown, Virginia, October 19
- 1805: Died October 5 in Ghazipur, India, at age 66

SOURCES
- Wickwire, Franklin and Mary. "Cornwallis: The American Adventure." Houghton Mifflin, 1970.
- Lender, Mark Edward and Stone, Garry Wheeler. "Fatal Sunday: George Washington, the Monmouth Campaign, and the Politics of Battle." University of Oklahoma Press, 2016.
- O'Shaughnessy, Andrew Jackson. "The Men Who Lost America: British Leadership, the American Revolution, and the Fate of the Empire." Yale University Press, 2013.`,
    },
    create: {
      id: 'person-monmouth-charles-cornwallis',
      name: 'Charles Cornwallis',
      roles: ['British Lieutenant General', 'Peer', 'Colonial Administrator'],
      bioShort: 'British lieutenant general (1738-1805) who commanded the rear guard at the Battle of Monmouth and led counterattacks against Washington\'s reformed line, later surrendering at Yorktown in 1781.',
      bioLong: `Charles Cornwallis, 1st Marquess Cornwallis, was born on December 31, 1738, in Grosvenor Square, London, to the 1st Earl Cornwallis. He was educated at Eton and the Military Academy at Turin, Italy, and was commissioned as an ensign in the 1st Foot Guards at age eighteen. He served in the Seven Years' War in Germany, fighting at the Battle of Minden in 1759 and several other engagements. By the outbreak of the American Revolution, Cornwallis was a lieutenant general with significant combat experience and a seat in the House of Lords, where he had notably voted against the Stamp Act — one of the few peers to oppose the taxation policies that precipitated the colonial crisis.

Cornwallis arrived in America in 1776 and served under Howe during the New York campaign. He distinguished himself as an aggressive field commander, pursuing Washington's retreating army across New Jersey in late 1776. Cornwallis commanded the British force defeated at Princeton in January 1777 and served at Brandywine and the capture of Philadelphia. When Clinton succeeded Howe as commander-in-chief in 1778, Cornwallis remained as second-in-command, a position he held during the evacuation of Philadelphia and the march across New Jersey.

At the Battle of Monmouth, Cornwallis commanded the British rear guard — the portion of Clinton's army most directly exposed to American attack. His command included some of the finest troops in the British army: the Brigade of Guards, grenadier battalions, and light infantry companies. When the American advance force attacked on the morning of June 28, Cornwallis's troops bore the brunt of the initial contact. After Lee's retreat and Washington's reorganization, Cornwallis led a series of determined counterattacks against the American positions near the Hedgerow and along the West Morass. These attacks were repulsed, and as evening approached, the fighting subsided into an artillery duel.

Cornwallis would later command British forces in the southern campaign, winning victories at Camden and Guilford Courthouse before his army was trapped at Yorktown, Virginia, where he surrendered on October 19, 1781, effectively ending the war. After the war, Cornwallis served as Governor-General of India and Lord Lieutenant of Ireland, dying on October 5, 1805, at age 66.

WHY HE MATTERS TO MONMOUTH

Cornwallis commanded the British rear guard that bore the full weight of the American attack at Monmouth. His experienced troops — the Guards, the grenadiers, the light infantry — represented the elite of the British army, and their inability to break the American line demonstrated how profoundly the Continental Army had changed since Valley Forge. Cornwallis's counterattacks at the Hedgerow and the West Morass were launched by some of the most formidable combat units in the world, yet they were turned back by American troops who held their ground, maintained formation, and delivered disciplined volleys. The battle was Cornwallis's first encounter with the reformed Continental Army, and it foreshadowed the difficulties he would face in the southern campaign that ended at Yorktown.

- 1738: Born December 31 in London, England
- 1776: Arrived in America; served in the New York campaign
- 1777: Fought at Brandywine and during the Philadelphia campaign
- 1778: Commanded the British rear guard at the Battle of Monmouth, June 28
- 1781: Surrendered at Yorktown, Virginia, October 19
- 1805: Died October 5 in Ghazipur, India, at age 66

SOURCES
- Wickwire, Franklin and Mary. "Cornwallis: The American Adventure." Houghton Mifflin, 1970.
- Lender, Mark Edward and Stone, Garry Wheeler. "Fatal Sunday: George Washington, the Monmouth Campaign, and the Politics of Battle." University of Oklahoma Press, 2016.
- O'Shaughnessy, Andrew Jackson. "The Men Who Lost America: British Leadership, the American Revolution, and the Fate of the Empire." Yale University Press, 2013.`,
      birthYear: 1738,
      deathYear: 1805,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-monmouth-lafayette' },
    update: {
      bioLong: `Marie-Joseph Paul Yves Roch Gilbert du Motier, Marquis de Lafayette, was born on September 6, 1757, at the Chateau de Chavaniac in Auvergne, France. Orphaned at thirteen after inheriting a vast fortune, Lafayette was drawn to the American cause as a nineteen-year-old French nobleman seeking glory and inspired by Enlightenment ideals of liberty. He purchased a ship, La Victoire, and sailed to America in defiance of King Louis XVI's orders, arriving in June 1777. Congress appointed him a major general at Washington's request, though initially without a command. Lafayette was wounded at the Battle of Brandywine in September 1777, where a musket ball struck his leg — an injury he bore without complaint and which cemented his bond with Washington.

During the winter at Valley Forge, Lafayette shared the hardships of the Continental Army and formed a close relationship with Washington that both men described in familial terms. Washington, who had no surviving sons, treated Lafayette as a protege, while Lafayette regarded Washington with deep filial loyalty. Lafayette's presence at Valley Forge was also diplomatically significant: as a French nobleman of high standing, his continued commitment to the American cause helped maintain pressure on the French government to formalize the alliance that was concluded in February 1778.

At the Battle of Monmouth, Lafayette initially commanded the American advance force before ceding command to Charles Lee, who outranked him and demanded the assignment. Lafayette served under Lee during the initial approach to the British rear guard and was among the officers who witnessed Lee's controversial retreat. After Washington intervened and reformed the line, Lafayette helped rally the troops and participated in the sustained engagement that followed. His conduct at Monmouth reinforced his standing with Washington and the army.

Lafayette returned to France in 1779 and helped secure additional French military and naval support for the American cause. He returned to America in 1780 and commanded forces in Virginia during the Yorktown campaign of 1781, helping to trap Cornwallis's army. After the war, Lafayette was a leading figure in the early stages of the French Revolution before being imprisoned during the Reign of Terror. He made a triumphal return to America in 1824-1825, visiting all 24 states. He died on May 20, 1834, in Paris at age 76.

WHY HE MATTERS TO MONMOUTH

Lafayette's role at Monmouth illustrates both the promise and the politics of the Continental Army's command structure. His willingness to yield the advance command to Lee — despite reservations about Lee's reliability — reflected the deference to rank that constrained American operations. When Lee's retreat threatened the army, Lafayette's steadiness under fire and his loyalty to Washington helped stabilize the situation. Lafayette's presence at Monmouth also carried symbolic weight: a French nobleman fighting alongside American troops just months after France had formally allied with the United States, embodying the international dimensions of the American struggle for independence.

- 1757: Born September 6 at Chateau de Chavaniac, Auvergne, France
- 1777: Arrived in America; appointed major general; wounded at Brandywine
- 1777-1778: Wintered at Valley Forge with the Continental Army
- 1778: Initially commanded advance force at Monmouth before ceding to Lee; fought in the battle on June 28
- 1781: Commanded American forces in Virginia during the Yorktown campaign
- 1834: Died May 20 in Paris, France, at age 76

SOURCES
- Unger, Harlow Giles. "Lafayette." John Wiley & Sons, 2002.
- Gaines, James R. "For Liberty and Glory: Washington, Lafayette, and Their Revolutions." W.W. Norton, 2007.
- Lender, Mark Edward and Stone, Garry Wheeler. "Fatal Sunday: George Washington, the Monmouth Campaign, and the Politics of Battle." University of Oklahoma Press, 2016.`,
    },
    create: {
      id: 'person-monmouth-lafayette',
      name: 'Marquis de Lafayette',
      roles: ['Continental Army Major General', 'French Nobleman', 'Diplomat'],
      bioShort: 'French nobleman and Continental Army major general (1757-1834) who initially commanded the advance force at Monmouth before ceding to Lee, and who helped stabilize the American line after Lee\'s retreat.',
      bioLong: `Marie-Joseph Paul Yves Roch Gilbert du Motier, Marquis de Lafayette, was born on September 6, 1757, at the Chateau de Chavaniac in Auvergne, France. Orphaned at thirteen after inheriting a vast fortune, Lafayette was drawn to the American cause as a nineteen-year-old French nobleman seeking glory and inspired by Enlightenment ideals of liberty. He purchased a ship, La Victoire, and sailed to America in defiance of King Louis XVI's orders, arriving in June 1777. Congress appointed him a major general at Washington's request, though initially without a command. Lafayette was wounded at the Battle of Brandywine in September 1777, where a musket ball struck his leg — an injury he bore without complaint and which cemented his bond with Washington.

During the winter at Valley Forge, Lafayette shared the hardships of the Continental Army and formed a close relationship with Washington that both men described in familial terms. Washington, who had no surviving sons, treated Lafayette as a protege, while Lafayette regarded Washington with deep filial loyalty. Lafayette's presence at Valley Forge was also diplomatically significant: as a French nobleman of high standing, his continued commitment to the American cause helped maintain pressure on the French government to formalize the alliance that was concluded in February 1778.

At the Battle of Monmouth, Lafayette initially commanded the American advance force before ceding command to Charles Lee, who outranked him and demanded the assignment. Lafayette served under Lee during the initial approach to the British rear guard and was among the officers who witnessed Lee's controversial retreat. After Washington intervened and reformed the line, Lafayette helped rally the troops and participated in the sustained engagement that followed. His conduct at Monmouth reinforced his standing with Washington and the army.

Lafayette returned to France in 1779 and helped secure additional French military and naval support for the American cause. He returned to America in 1780 and commanded forces in Virginia during the Yorktown campaign of 1781, helping to trap Cornwallis's army. After the war, Lafayette was a leading figure in the early stages of the French Revolution before being imprisoned during the Reign of Terror. He made a triumphal return to America in 1824-1825, visiting all 24 states. He died on May 20, 1834, in Paris at age 76.

WHY HE MATTERS TO MONMOUTH

Lafayette's role at Monmouth illustrates both the promise and the politics of the Continental Army's command structure. His willingness to yield the advance command to Lee — despite reservations about Lee's reliability — reflected the deference to rank that constrained American operations. When Lee's retreat threatened the army, Lafayette's steadiness under fire and his loyalty to Washington helped stabilize the situation. Lafayette's presence at Monmouth also carried symbolic weight: a French nobleman fighting alongside American troops just months after France had formally allied with the United States, embodying the international dimensions of the American struggle for independence.

- 1757: Born September 6 at Chateau de Chavaniac, Auvergne, France
- 1777: Arrived in America; appointed major general; wounded at Brandywine
- 1777-1778: Wintered at Valley Forge with the Continental Army
- 1778: Initially commanded advance force at Monmouth before ceding to Lee; fought in the battle on June 28
- 1781: Commanded American forces in Virginia during the Yorktown campaign
- 1834: Died May 20 in Paris, France, at age 76

SOURCES
- Unger, Harlow Giles. "Lafayette." John Wiley & Sons, 2002.
- Gaines, James R. "For Liberty and Glory: Washington, Lafayette, and Their Revolutions." W.W. Norton, 2007.
- Lender, Mark Edward and Stone, Garry Wheeler. "Fatal Sunday: George Washington, the Monmouth Campaign, and the Politics of Battle." University of Oklahoma Press, 2016.`,
      birthYear: 1757,
      deathYear: 1834,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-monmouth-margaret-corbin' },
    update: {
      bioLong: `Margaret Cochran Corbin was born on November 12, 1751, in Franklin County, Pennsylvania. Her father was killed and her mother captured in a Native American raid when Margaret was five years old; she and her brother were raised by an uncle. In 1772, she married John Corbin, a Virginia farmer, and when he enlisted in the Continental Army's 1st Company of Pennsylvania Artillery in 1775, Margaret accompanied him as a camp follower, performing the cooking, laundering, and nursing duties that women in the army's support community routinely provided.

On November 16, 1776, during the British assault on Fort Washington in northern Manhattan, John Corbin was killed while manning a cannon. Margaret immediately took his place at the gun, loading and firing alongside the remaining crew members until she was severely wounded by grapeshot that tore through her left arm, chest, and jaw. Her arm was nearly severed and she was permanently disabled. When Fort Washington fell, Margaret was captured along with the surviving garrison but was paroled due to her wounds.

Corbin's service preceded the Battle of Monmouth by nearly two years, but her story is inextricably linked to the broader narrative of women's participation in artillery service during the Revolution — the same tradition that produced the Molly Pitcher legend at Monmouth. In 1779, the Continental Congress awarded Margaret Corbin a lifetime soldier's half-pension, making her the first woman in American history to receive a military pension. The resolution explicitly recognized her for having "heroically filled the post of her husband" after his death in battle.

After the war, Corbin lived in Westmoreland County, Pennsylvania, in difficult circumstances, her wounds making it impossible for her to support herself independently. She died around 1800, at approximately age 48. In 1926, her remains were reinterred at the West Point Cemetery, where a monument marks her grave.

WHY SHE MATTERS TO MONMOUTH

Margaret Corbin's story is part of the documented history of women who served at artillery pieces during the Revolution, the same tradition embodied by Molly Pitcher at Monmouth. Corbin's case is distinguished by the Congressional recognition she received — the 1779 pension resolution is the earliest official acknowledgment of a woman's combat service in American military history. Her story, alongside Mary Hays McCauley's at Monmouth, demonstrates that women's participation in combat was not a single exceptional incident but a pattern that occurred at multiple engagements throughout the war. Monmouth's Molly Pitcher legend is better understood when placed alongside Corbin's documented service at Fort Washington.

- 1751: Born November 12 in Franklin County, Pennsylvania
- 1776: Replaced her husband at a cannon during the Battle of Fort Washington, November 16; severely wounded
- 1779: Awarded a lifetime soldier's half-pension by the Continental Congress
- c.1800: Died in Westmoreland County, Pennsylvania, at approximately age 48
- 1926: Remains reinterred at West Point Cemetery

SOURCES
- Mayer, Holly A. "Belonging to the Army: Camp Followers and Community during the American Revolution." University of South Carolina Press, 1996.
- Hall, Edward Hagaman. "Margaret Corbin: Heroine of the Battle of Fort Washington." American Scenic and Historic Preservation Society, 1932.
- National Park Service. "Fort Washington and Margaret Corbin." Interpretive materials and Congressional pension records.`,
    },
    create: {
      id: 'person-monmouth-margaret-corbin',
      name: 'Margaret Corbin',
      roles: ['Camp Follower', 'Artillery Crew Member', 'Pension Recipient'],
      bioShort: 'Continental Army camp follower (1751-c.1800) who replaced her husband at a cannon at Fort Washington in 1776 and became the first woman to receive a military pension from Congress, part of the same tradition of women artillerists that produced Molly Pitcher at Monmouth.',
      bioLong: `Margaret Cochran Corbin was born on November 12, 1751, in Franklin County, Pennsylvania. Her father was killed and her mother captured in a Native American raid when Margaret was five years old; she and her brother were raised by an uncle. In 1772, she married John Corbin, a Virginia farmer, and when he enlisted in the Continental Army's 1st Company of Pennsylvania Artillery in 1775, Margaret accompanied him as a camp follower, performing the cooking, laundering, and nursing duties that women in the army's support community routinely provided.

On November 16, 1776, during the British assault on Fort Washington in northern Manhattan, John Corbin was killed while manning a cannon. Margaret immediately took his place at the gun, loading and firing alongside the remaining crew members until she was severely wounded by grapeshot that tore through her left arm, chest, and jaw. Her arm was nearly severed and she was permanently disabled. When Fort Washington fell, Margaret was captured along with the surviving garrison but was paroled due to her wounds.

Corbin's service preceded the Battle of Monmouth by nearly two years, but her story is inextricably linked to the broader narrative of women's participation in artillery service during the Revolution — the same tradition that produced the Molly Pitcher legend at Monmouth. In 1779, the Continental Congress awarded Margaret Corbin a lifetime soldier's half-pension, making her the first woman in American history to receive a military pension. The resolution explicitly recognized her for having "heroically filled the post of her husband" after his death in battle.

After the war, Corbin lived in Westmoreland County, Pennsylvania, in difficult circumstances, her wounds making it impossible for her to support herself independently. She died around 1800, at approximately age 48. In 1926, her remains were reinterred at the West Point Cemetery, where a monument marks her grave.

WHY SHE MATTERS TO MONMOUTH

Margaret Corbin's story is part of the documented history of women who served at artillery pieces during the Revolution, the same tradition embodied by Molly Pitcher at Monmouth. Corbin's case is distinguished by the Congressional recognition she received — the 1779 pension resolution is the earliest official acknowledgment of a woman's combat service in American military history. Her story, alongside Mary Hays McCauley's at Monmouth, demonstrates that women's participation in combat was not a single exceptional incident but a pattern that occurred at multiple engagements throughout the war. Monmouth's Molly Pitcher legend is better understood when placed alongside Corbin's documented service at Fort Washington.

- 1751: Born November 12 in Franklin County, Pennsylvania
- 1776: Replaced her husband at a cannon during the Battle of Fort Washington, November 16; severely wounded
- 1779: Awarded a lifetime soldier's half-pension by the Continental Congress
- c.1800: Died in Westmoreland County, Pennsylvania, at approximately age 48
- 1926: Remains reinterred at West Point Cemetery

SOURCES
- Mayer, Holly A. "Belonging to the Army: Camp Followers and Community during the American Revolution." University of South Carolina Press, 1996.
- Hall, Edward Hagaman. "Margaret Corbin: Heroine of the Battle of Fort Washington." American Scenic and Historic Preservation Society, 1932.
- National Park Service. "Fort Washington and Margaret Corbin." Interpretive materials and Congressional pension records.`,
      birthYear: 1751,
      deathYear: 1800,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-monmouth-steuben' },
    update: {
      bioLong: `Friedrich Wilhelm August Heinrich Ferdinand von Steuben was born on September 17, 1730, in Magdeburg, Prussia. He served as an officer in the Prussian army under Frederick the Great during the Seven Years' War, rising to the rank of captain and serving on the general staff. After the war, Steuben fell into financial difficulties and sought employment abroad. With the help of Benjamin Franklin and Silas Deane in Paris, Steuben was presented to Congress as a former lieutenant general — an exaggeration of his actual rank — and arrived at Valley Forge on February 23, 1778, offering his services as a military instructor.

What Steuben found at Valley Forge was an army that had courage and determination but lacked the basic tactical skills needed to stand against British regulars in sustained combat. Soldiers drilled inconsistently, units used different manual-of-arms procedures, and the army had no standardized system of march, formation, or battlefield maneuver. Steuben set about correcting these deficiencies with a systematic training program that began with a model company of 100 selected soldiers whom he drilled personally. Steuben spoke limited English and gave his commands in French and German, relying on translators — most notably his aide, Captain Benjamin Walker, and the French-speaking Alexander Hamilton — to convey his instructions.

Steuben's training program was revolutionary in several respects. He simplified the manual of arms, reducing the number of steps required to load and fire a musket. He taught soldiers to march in column and deploy into line of battle quickly and in good order. He established a uniform system of camp sanitation that reduced disease. He wrote the "Regulations for the Order and Discipline of the Troops of the United States" — commonly known as the Blue Book — which became the Continental Army's official drill manual and remained in use until the War of 1812. Most importantly, Steuben insisted that officers drill alongside their men and take responsibility for the welfare of their soldiers, breaking down the social distance that had separated the American officer class from the enlisted ranks.

The Battle of Monmouth, fought just four months after Steuben's arrival, was the first major test of his training program. The Continental Army's performance — its ability to conduct an orderly retreat under Lee, reform into a new defensive line under Washington, execute disciplined volleys, maneuver under fire, and sustain a full day of combat against British regulars — demonstrated that Steuben's methods had fundamentally transformed the army's fighting capabilities.

WHY HE MATTERS TO MONMOUTH

Baron von Steuben's training at Valley Forge made the Battle of Monmouth possible. Without the drill, discipline, and tactical skills he instilled in the Continental Army during the winter and spring of 1778, Washington's troops could not have withstood the British counterattacks on June 28 or maintained cohesion during Lee's retreat. Monmouth was the proving ground for everything Steuben had taught: the soldiers' ability to load and fire in coordinated volleys, to wheel from column into line, to stand firm under bayonet charges, and to fight as disciplined units rather than as loose aggregations of individuals. The battle validated Steuben's training program and confirmed that the Continental Army had become a professional fighting force capable of meeting European regulars on equal terms.

- 1730: Born September 17 in Magdeburg, Prussia
- 1756-1763: Served in the Prussian army under Frederick the Great during the Seven Years' War
- 1778: Arrived at Valley Forge on February 23; began training program
- 1778: Observed the results of his training at the Battle of Monmouth, June 28
- 1779: Published the "Blue Book" drill manual
- 1794: Died November 28 near Remsen, New York, at age 64

SOURCES
- Lockhart, Paul. "The Drillmaster of Valley Forge: The Baron de Steuben and the Making of the American Army." Smithsonian Books/Collins, 2008.
- Palmer, John McAuley. "General von Steuben." Yale University Press, 1937.
- Lender, Mark Edward and Stone, Garry Wheeler. "Fatal Sunday: George Washington, the Monmouth Campaign, and the Politics of Battle." University of Oklahoma Press, 2016.`,
    },
    create: {
      id: 'person-monmouth-steuben',
      name: 'Baron von Steuben',
      roles: ['Continental Army Inspector General', 'Prussian Officer', 'Military Instructor'],
      bioShort: 'Prussian military officer (1730-1794) who transformed the Continental Army through systematic training at Valley Forge, creating the disciplined force that proved itself at the Battle of Monmouth four months later.',
      bioLong: `Friedrich Wilhelm August Heinrich Ferdinand von Steuben was born on September 17, 1730, in Magdeburg, Prussia. He served as an officer in the Prussian army under Frederick the Great during the Seven Years' War, rising to the rank of captain and serving on the general staff. After the war, Steuben fell into financial difficulties and sought employment abroad. With the help of Benjamin Franklin and Silas Deane in Paris, Steuben was presented to Congress as a former lieutenant general — an exaggeration of his actual rank — and arrived at Valley Forge on February 23, 1778, offering his services as a military instructor.

What Steuben found at Valley Forge was an army that had courage and determination but lacked the basic tactical skills needed to stand against British regulars in sustained combat. Soldiers drilled inconsistently, units used different manual-of-arms procedures, and the army had no standardized system of march, formation, or battlefield maneuver. Steuben set about correcting these deficiencies with a systematic training program that began with a model company of 100 selected soldiers whom he drilled personally. Steuben spoke limited English and gave his commands in French and German, relying on translators — most notably his aide, Captain Benjamin Walker, and the French-speaking Alexander Hamilton — to convey his instructions.

Steuben's training program was revolutionary in several respects. He simplified the manual of arms, reducing the number of steps required to load and fire a musket. He taught soldiers to march in column and deploy into line of battle quickly and in good order. He established a uniform system of camp sanitation that reduced disease. He wrote the "Regulations for the Order and Discipline of the Troops of the United States" — commonly known as the Blue Book — which became the Continental Army's official drill manual and remained in use until the War of 1812. Most importantly, Steuben insisted that officers drill alongside their men and take responsibility for the welfare of their soldiers, breaking down the social distance that had separated the American officer class from the enlisted ranks.

The Battle of Monmouth, fought just four months after Steuben's arrival, was the first major test of his training program. The Continental Army's performance — its ability to conduct an orderly retreat under Lee, reform into a new defensive line under Washington, execute disciplined volleys, maneuver under fire, and sustain a full day of combat against British regulars — demonstrated that Steuben's methods had fundamentally transformed the army's fighting capabilities.

WHY HE MATTERS TO MONMOUTH

Baron von Steuben's training at Valley Forge made the Battle of Monmouth possible. Without the drill, discipline, and tactical skills he instilled in the Continental Army during the winter and spring of 1778, Washington's troops could not have withstood the British counterattacks on June 28 or maintained cohesion during Lee's retreat. Monmouth was the proving ground for everything Steuben had taught: the soldiers' ability to load and fire in coordinated volleys, to wheel from column into line, to stand firm under bayonet charges, and to fight as disciplined units rather than as loose aggregations of individuals. The battle validated Steuben's training program and confirmed that the Continental Army had become a professional fighting force capable of meeting European regulars on equal terms.

- 1730: Born September 17 in Magdeburg, Prussia
- 1756-1763: Served in the Prussian army under Frederick the Great during the Seven Years' War
- 1778: Arrived at Valley Forge on February 23; began training program
- 1778: Observed the results of his training at the Battle of Monmouth, June 28
- 1779: Published the "Blue Book" drill manual
- 1794: Died November 28 near Remsen, New York, at age 64

SOURCES
- Lockhart, Paul. "The Drillmaster of Valley Forge: The Baron de Steuben and the Making of the American Army." Smithsonian Books/Collins, 2008.
- Palmer, John McAuley. "General von Steuben." Yale University Press, 1937.
- Lender, Mark Edward and Stone, Garry Wheeler. "Fatal Sunday: George Washington, the Monmouth Campaign, and the Politics of Battle." University of Oklahoma Press, 2016.`,
      birthYear: 1730,
      deathYear: 1794,
      verificationStatus: 'VERIFIED',
    },
  });

  // --- 2 NEW PEOPLE ---

  await prisma.person.upsert({
    where: { id: 'person-monmouth-george-washington' },
    update: {},
    create: {
      id: 'person-monmouth-george-washington',
      name: 'George Washington',
      roles: ['Commander-in-Chief', 'Continental Army General', 'Planter'],
      bioShort: 'Commander-in-chief of the Continental Army (1732-1799) who personally intervened at the Battle of Monmouth to halt Lee\'s retreat, reformed the American line, and directed the sustained engagement that demonstrated the army\'s transformation.',
      bioLong: `George Washington was born on February 22, 1732, in Westmoreland County, Virginia, into a prosperous planter family. His early military experience came during the French and Indian War, where he served as a Virginia militia officer and participated in Braddock's disastrous expedition against Fort Duquesne in 1755. Washington learned from these experiences the limitations of militia forces and the importance of discipline and logistics — lessons that would shape his approach to commanding the Continental Army two decades later.

Appointed commander-in-chief by Congress in June 1775, Washington spent the next three years learning how to manage an army that was chronically short of men, money, supplies, and training. The defeats at Long Island, White Plains, and Fort Washington in 1776, followed by the desperate gambles at Trenton and Princeton, taught Washington that the Continental Army could not match the British in conventional battle. The defeats at Brandywine and Germantown in 1777 reinforced this lesson. The winter at Valley Forge, despite its miseries, proved to be the turning point: Steuben's training program gave Washington, for the first time, an army capable of fighting in the European style.

The Battle of Monmouth on June 28, 1778, was Washington's opportunity to test this reformed army. When Charles Lee's advance force retreated in disorder, Washington rode forward and encountered the retreating troops. His personal intervention — riding among the confused soldiers, directing units into position, establishing a new defensive line — was the decisive moment of the battle. Washington placed artillery on commanding ground, positioned infantry behind natural defensive features, and directed a coordinated defense that absorbed repeated British attacks. The battle lasted from mid-morning until dark, with neither side giving ground in the afternoon engagement.

Washington's conduct at Monmouth demonstrated a level of tactical competence and personal leadership that he had not shown in earlier battles. The army he directed on June 28 executed complex maneuvers under fire — forming line from column, conducting fighting retreats, wheeling artillery into position — that would have been impossible for the same troops twelve months earlier. Monmouth confirmed that Washington now commanded a professional army, and it silenced the critics in Congress who had questioned his fitness for command during the dark months of 1777-1778.

WHY HE MATTERS TO MONMOUTH

Washington's personal intervention at Monmouth transformed a potential disaster into a demonstration of American military capability. His decision to ride to the front, confront Lee, and personally reorganize the retreating troops was the single act that saved the battle. More broadly, Monmouth validated Washington's strategy of building a professional army rather than relying on militia enthusiasm. The army that held its ground against the British at Monmouth was the army Washington had been trying to build since 1775 — disciplined, trained, led by competent officers, and capable of sustained combat. Monmouth was Washington's vindication as a military commander and the proof that his vision of a professional Continental Army could work.

- 1732: Born February 22 in Westmoreland County, Virginia
- 1775: Appointed commander-in-chief of the Continental Army
- 1776-1777: Led the army through defeats at New York, victories at Trenton and Princeton, and defeats at Brandywine and Germantown
- 1777-1778: Commanded the army at Valley Forge; oversaw Steuben's training program
- 1778: Personally intervened at the Battle of Monmouth, June 28; reformed the army's line and directed the sustained engagement
- 1799: Died December 14 at Mount Vernon, Virginia, at age 67

SOURCES
- Chernow, Ron. "Washington: A Life." Penguin Press, 2010.
- Lender, Mark Edward and Stone, Garry Wheeler. "Fatal Sunday: George Washington, the Monmouth Campaign, and the Politics of Battle." University of Oklahoma Press, 2016.
- Lengel, Edward G. "General George Washington: A Military Life." Random House, 2005.`,
      birthYear: 1732,
      deathYear: 1799,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-monmouth-alexander-hamilton' },
    update: {},
    create: {
      id: 'person-monmouth-alexander-hamilton',
      name: 'Alexander Hamilton',
      roles: ['Continental Army Lieutenant Colonel', 'Aide-de-Camp', 'Artillery Officer'],
      bioShort: 'Continental Army officer and Washington\'s aide-de-camp (1755/1757-1804) who fought at the Battle of Monmouth, rallying troops during Lee\'s retreat and having his horse shot from under him during the engagement.',
      bioLong: `Alexander Hamilton was born on January 11, in either 1755 or 1757 (the year is disputed), on the island of Nevis in the British West Indies. Orphaned as a youth, he was sent to New York in 1773 for his education and quickly became drawn into the revolutionary movement. Hamilton organized an artillery company in 1776 and commanded it with distinction during the New York and New Jersey campaigns, catching Washington's attention with his intelligence and organizational ability. In March 1777, Washington appointed Hamilton as his aide-de-camp with the rank of lieutenant colonel. Hamilton served as Washington's primary staff officer, handling correspondence, drafting orders, and serving as a translator for French-speaking officers.

At Valley Forge, Hamilton was instrumental in Steuben's training program, serving as a translator between Steuben, who spoke French and German, and the English-speaking officers and troops. Hamilton's fluency in French made him an essential intermediary, and his administrative skills helped systematize the training program's implementation across the army. He also continued his staff work for Washington, managing the complex logistics and correspondence required to keep the army functioning.

At the Battle of Monmouth, Hamilton's role extended beyond staff duties. When Lee's advance force retreated, Hamilton rode forward with Washington and was in the thick of the fighting. His horse was shot from under him during the engagement, and Hamilton sustained injuries but continued to participate in the battle. He helped rally retreating troops and directed units into the defensive positions that Washington was establishing. Hamilton's performance at Monmouth was characteristic of his fierce energy and physical courage — qualities that would later lead him to command an infantry assault at Yorktown.

Hamilton's post-war career as the first Secretary of the Treasury, principal author of the Federalist Papers, and architect of the American financial system made him one of the most consequential figures of the founding era. He was killed in a duel with Aaron Burr on July 12, 1804, at age 47 or 49.

WHY HE MATTERS TO MONMOUTH

Hamilton's role at Monmouth encapsulates the multiple dimensions of his service to the Revolution. As Washington's aide, he was at the center of the command decisions that shaped the battle. As a former artillery officer, he understood the tactical significance of the artillery positions that Washington established to anchor the new defensive line. As a participant in the fighting, he demonstrated the personal courage that earned him the respect of soldiers and officers alike. Hamilton's actions at Monmouth — translating Steuben's training into battlefield reality, riding at Washington's side during the crisis, rallying troops under fire — illustrate how the Revolution was won by individuals who combined intellectual ability with physical daring.

- 1755 or 1757: Born January 11 on Nevis, British West Indies
- 1776: Commanded an artillery company during the New York and New Jersey campaigns
- 1777: Appointed aide-de-camp to Washington
- 1778: Served as translator for Steuben at Valley Forge; fought at Monmouth on June 28, horse shot from under him
- 1781: Led an infantry assault at the Battle of Yorktown
- 1804: Killed in a duel with Aaron Burr on July 12 in Weehawken, New Jersey

SOURCES
- Chernow, Ron. "Alexander Hamilton." Penguin Press, 2004.
- Lender, Mark Edward and Stone, Garry Wheeler. "Fatal Sunday: George Washington, the Monmouth Campaign, and the Politics of Battle." University of Oklahoma Press, 2016.
- Fleming, Thomas. "The Intimate Lives of the Founding Fathers." Smithsonian Books, 2009.`,
      birthYear: 1755,
      deathYear: 1804,
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
    where: { id: 'monmouth-battlefield-park' },
    update: {},
    create: {
      id: 'monmouth-battlefield-park',
      name: 'Monmouth Battlefield State Park',
      slug: 'monmouth-battlefield-park',
      placeType: 'BATTLEFIELD',
      description: 'Monmouth Battlefield State Park preserves the site of the Battle of Monmouth, fought on June 28, 1778, across approximately 1,800 acres of fields, orchards, hedgerows, and wetlands in Manalapan Township, New Jersey. The park encompasses the primary engagement areas where Washington reformed the Continental Army line after Lee\'s retreat and where sustained fighting continued until nightfall.',
      historicalNote: 'The battlefield landscape retains much of its 18th-century character. The open agricultural fields that witnessed the heaviest fighting — the area around the Hedgerow, the Parsonage, and the West Morass — remain largely unobstructed. The park preserves the terrain features that shaped the battle: the ravines and marshy ground that channeled troop movements, the ridgelines that provided artillery positions, and the hedgerows that served as defensive lines. The Visitor Center houses exhibits on the battle, the Monmouth campaign, and the significance of Valley Forge training. Annual reenactments and interpretive programs are held on the anniversary of the battle.',
      lat: 40.2750,
      lng: -74.3080,
      address: '16 Business Route 33, Manalapan, NJ 07726',
      hours: 'Park: Dawn to dusk daily. Visitor Center: Wed-Sun 9am-4pm (seasonal)',
      admission: 'Free',
      website: 'https://www.state.nj.us/dep/parksandforests/parks/monbat.html',
      displayOrder: 1,
      featured: true,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'monmouth-craig-house' },
    update: {},
    create: {
      id: 'monmouth-craig-house',
      name: 'Craig House (Owl Nest)',
      slug: 'craig-house',
      placeType: 'HISTORIC_HOUSE',
      description: 'The Craig House, also known as Owl Nest, is a colonial-era farmhouse within Monmouth Battlefield State Park. The house served as a field hospital during the Battle of Monmouth and is one of several surviving structures from the period of the engagement.',
      historicalNote: 'During the Battle of Monmouth, the Craig House and its outbuildings were used to shelter wounded soldiers from both armies. The farmstead sat near the center of the battlefield, and its proximity to the fighting meant that casualties were brought to the house throughout the day. The extreme heat of June 28, 1778 — with temperatures approaching 100 degrees Fahrenheit — made the need for shelter and water particularly urgent. The Craig House is one of the few surviving structures that witnessed the battle, and its preservation provides visitors with a tangible connection to the events of that day. The house has been restored and is open for guided tours during special events.',
      lat: 40.2735,
      lng: -74.3055,
      address: 'Within Monmouth Battlefield State Park, Manalapan, NJ 07726',
      hours: 'Open during special events and guided tours',
      admission: 'Free',
      displayOrder: 2,
      featured: false,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'monmouth-hedgerow-position' },
    update: {},
    create: {
      id: 'monmouth-hedgerow-position',
      name: 'The Hedgerow',
      slug: 'hedgerow-position',
      placeType: 'BATTLEFIELD',
      description: 'The Hedgerow was a fence line and tree row within the Monmouth battlefield that served as a critical defensive position for the Continental Army during the afternoon engagement on June 28, 1778. Anthony Wayne\'s brigade and other units used this terrain feature to anchor their defense against repeated British counterattacks.',
      historicalNote: 'After Washington reformed the American line following Lee\'s retreat, the Hedgerow became one of the anchoring positions of the new defensive line. Wayne\'s troops, along with other Continental units, used the cover provided by the fence line and vegetation to deliver disciplined volleys into advancing British formations. The British launched several determined assaults against this position, including attacks by grenadier battalions and the Brigade of Guards — elite formations that had rarely been stopped by American troops in earlier engagements. The Hedgerow\'s defense was one of the most significant tactical achievements of the battle, demonstrating the effectiveness of Steuben\'s training program. Today, interpretive markers along the park\'s trail system identify the Hedgerow position and explain its role in the battle.',
      lat: 40.2742,
      lng: -74.3090,
      address: 'Within Monmouth Battlefield State Park, Manalapan, NJ 07726',
      hours: 'Dawn to dusk daily',
      admission: 'Free',
      displayOrder: 3,
      featured: true,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'monmouth-molly-pitcher-spring' },
    update: {},
    create: {
      id: 'monmouth-molly-pitcher-spring',
      name: 'Molly Pitcher Spring',
      slug: 'molly-pitcher-spring',
      placeType: 'LANDMARK',
      description: 'Molly Pitcher Spring is a natural spring within Monmouth Battlefield State Park traditionally associated with the water source used by Mary Ludwig Hays McCauley — the historical Molly Pitcher — to carry water to soldiers and artillery crews during the battle. An interpretive marker identifies the site.',
      historicalNote: 'The spring is located near the area where American artillery was positioned during the engagement. According to tradition, Mary Hays carried water from this spring to the troops and cannon crews suffering in the extreme heat of June 28, 1778. While the specific identification of this spring as the one Molly Pitcher used cannot be definitively confirmed, natural springs in the battlefield area were certainly essential water sources during the battle, when heat exhaustion was a significant cause of casualties on both sides. The spring serves as a focal point for interpreting the role of women in the Continental Army and the Molly Pitcher legend. A monument near the spring commemorates the contributions of women during the battle.',
      lat: 40.2758,
      lng: -74.3072,
      address: 'Within Monmouth Battlefield State Park, Manalapan, NJ 07726',
      hours: 'Dawn to dusk daily',
      admission: 'Free',
      displayOrder: 4,
      featured: true,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'monmouth-old-tennent-church' },
    update: {},
    create: {
      id: 'monmouth-old-tennent-church',
      name: 'Old Tennent Church',
      slug: 'old-tennent-church',
      placeType: 'CHURCH',
      description: 'Old Tennent Church is a colonial-era Presbyterian church built in 1751, located adjacent to Monmouth Battlefield State Park. The church served as a field hospital during the Battle of Monmouth, and its cemetery contains the graves of soldiers who died in the engagement.',
      historicalNote: 'Old Tennent Church was built by the congregation of the Tennent Presbyterian Church, named for the Reverend William Tennent, a leading figure in the Great Awakening. The white clapboard building, with its distinctive steeple and box pews, has been in continuous use since its construction. During the Battle of Monmouth, the church was converted into a hospital for wounded soldiers, and bullet holes from the battle are still visible in the walls. The adjacent cemetery contains graves of Continental Army soldiers killed in the battle, including Lieutenant Colonel Henry Monckton of the British 2nd Grenadier Battalion, one of the highest-ranking British officers killed at Monmouth. The church is listed on the National Register of Historic Places and continues to hold regular services.',
      lat: 40.2780,
      lng: -74.3120,
      address: '448 Tennent Road, Manalapan, NJ 07726',
      hours: 'Sunday services; tours by appointment',
      admission: 'Free',
      website: 'https://www.oldtennent.org',
      displayOrder: 5,
      featured: true,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'monmouth-county-historical-association' },
    update: {},
    create: {
      id: 'monmouth-county-historical-association',
      name: 'Monmouth County Historical Association',
      slug: 'monmouth-county-historical-association',
      placeType: 'MUSEUM',
      description: 'The Monmouth County Historical Association, located in Freehold, New Jersey, houses collections related to the history of Monmouth County from the colonial period through the 20th century, including significant holdings related to the Battle of Monmouth and the Revolutionary War in New Jersey.',
      historicalNote: 'Founded in 1898, the Historical Association preserves and interprets the history of Monmouth County, with a particular emphasis on the Revolutionary period. The museum\'s collections include arms, uniforms, personal effects, documents, and maps from the Battle of Monmouth. The association also maintains a research library with primary source materials related to the battle and the wider Revolutionary War experience in central New Jersey. The museum\'s exhibits place the Battle of Monmouth within the broader context of the New Jersey campaigns, explaining how the state\'s geographic position between New York and Philadelphia made it a persistent theater of conflict throughout the war.',
      lat: 40.2601,
      lng: -74.2735,
      address: '70 Court Street, Freehold, NJ 07728',
      hours: 'Tues-Sat 10am-4pm',
      admission: '$5 adults, $3 seniors and students',
      website: 'https://monmouthhistory.org',
      displayOrder: 6,
      featured: false,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'monmouth-courthouse-freehold' },
    update: {},
    create: {
      id: 'monmouth-courthouse-freehold',
      name: 'Monmouth Court House (Freehold)',
      slug: 'monmouth-court-house',
      placeType: 'GOVERNMENT',
      description: 'The town of Freehold, known in the 18th century as Monmouth Court House, was the county seat and the community closest to the battlefield. The village gave its name to the battle and was the geographic center around which the engagement unfolded.',
      historicalNote: 'Monmouth Court House was a small agricultural village centered on the county courthouse in 1778. The British army passed through and near the village during its march across New Jersey, and the village\'s roads, buildings, and surrounding farmland became part of the battlefield on June 28. The courthouse itself served as a reference point for the commanders of both armies. After the battle, the village was left with damaged buildings, trampled fields, and scattered debris from the engagement. The current Monmouth County Courthouse in Freehold, while not the 18th-century structure, occupies the same general area and continues the civic function that gave the village its colonial-era name.',
      lat: 40.2596,
      lng: -74.2740,
      address: 'Main Street, Freehold, NJ 07728',
      hours: 'Business hours (public building)',
      admission: 'Free',
      displayOrder: 7,
      featured: false,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'monmouth-molly-pitcher-monument' },
    update: {},
    create: {
      id: 'monmouth-molly-pitcher-monument',
      name: 'Molly Pitcher Monument',
      slug: 'molly-pitcher-monument',
      placeType: 'MONUMENT',
      description: 'A monument within Monmouth Battlefield State Park commemorating the contributions of Mary Ludwig Hays McCauley and other women who served during the Battle of Monmouth. The monument stands near the artillery positions where Hays reportedly took her husband\'s place at a cannon.',
      historicalNote: 'The Molly Pitcher Monument was erected to honor the women who supported the Continental Army at Monmouth. The monument\'s location near the American artillery positions reflects the traditional account of Mary Hays carrying water to the gun crews and taking her husband\'s place when he was incapacitated by the heat. The monument serves as a focal point for discussions about women\'s roles in the Revolution — not only the exceptional acts of individuals like Hays and Margaret Corbin, but the broader contributions of the camp follower community that cooked, laundered, nursed, and maintained the army\'s daily operations. The monument is a stop on the park\'s interpretive trail.',
      lat: 40.2748,
      lng: -74.3065,
      address: 'Within Monmouth Battlefield State Park, Manalapan, NJ 07726',
      hours: 'Dawn to dusk daily',
      admission: 'Free',
      displayOrder: 8,
      featured: false,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'monmouth-west-morass' },
    update: {},
    create: {
      id: 'monmouth-west-morass',
      name: 'West Morass',
      slug: 'west-morass',
      placeType: 'BATTLEFIELD',
      description: 'The West Morass is a marshy depression within Monmouth Battlefield State Park that played a critical role in shaping the battle on June 28, 1778. This wetland area channeled troop movements and served as a natural defensive feature that both armies had to contend with.',
      historicalNote: 'The West Morass was one of the defining terrain features of the Battle of Monmouth. The marshy ground, fed by streams and springs, created a natural barrier that funneled troop movements and made direct frontal assault difficult. Washington used the morass as an anchor for his reformed defensive line, positioning troops so that the wetland protected one flank. British counterattacks had to navigate around or through the marshy ground, disrupting their formations and exposing them to American artillery and musket fire. The morass remains a visible landscape feature within the state park, and interpretive materials explain how the terrain influenced the tactical decisions of both commanders. The preservation of this wetland is essential to understanding why the battle unfolded as it did.',
      lat: 40.2730,
      lng: -74.3100,
      address: 'Within Monmouth Battlefield State Park, Manalapan, NJ 07726',
      hours: 'Dawn to dusk daily',
      admission: 'Free',
      displayOrder: 9,
      featured: false,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'monmouth-cobb-house' },
    update: {},
    create: {
      id: 'monmouth-cobb-house',
      name: 'Cobb House',
      slug: 'cobb-house',
      placeType: 'HISTORIC_HOUSE',
      description: 'The Cobb House is a colonial-era farmhouse within Monmouth Battlefield State Park that survived the battle and provides a tangible example of the rural architecture and agricultural landscape through which the engagement was fought.',
      historicalNote: 'The Cobb House and the Rhea-Applegate House are among the surviving 18th-century structures within the battlefield. These farmhouses and their associated outbuildings, fences, orchards, and cultivated fields constituted the landscape through which the armies fought on June 28, 1778. The farms around Monmouth Court House were modest operations typical of central New Jersey agriculture — mixed-use properties growing grain, keeping livestock, and producing food for local consumption and limited market sale. The battle destroyed or damaged crops, fences, and buildings across dozens of farms, imposing an economic burden on the local population that was one of the hidden costs of the Revolutionary War. The Cobb House has been preserved and is interpreted as part of the battlefield landscape.',
      lat: 40.2718,
      lng: -74.3040,
      address: 'Within Monmouth Battlefield State Park, Manalapan, NJ 07726',
      hours: 'Open during special events and guided tours',
      admission: 'Free',
      displayOrder: 10,
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

  // --- 8 EXISTING EVENTS (update with slugs) ---

  await prisma.event.upsert({
    where: { id: 'event-monmouth-battle-1778' },
    update: { slug: 'battle-of-monmouth-1778' },
    create: { id: 'event-monmouth-battle-1778', townId: TOWN_ID, name: 'Battle of Monmouth', slug: 'battle-of-monmouth-1778', startDate: new Date('1778-06-28'), datePrecision: 'DAY', summary: 'The Battle of Monmouth, fought on June 28, 1778, near Monmouth Court House (modern Freehold), New Jersey, was the largest single-day engagement of the American Revolution and the first major test of the Continental Army after Baron von Steuben\'s training program at Valley Forge. The battle began when an American advance force under General Charles Lee attacked the rear guard of Sir Henry Clinton\'s British army as it marched across New Jersey from Philadelphia to New York. Lee\'s initial advance devolved into a disorganized retreat, prompting General George Washington to ride forward, confront Lee, and personally reform the American line. The fighting that followed lasted until nightfall, with the Continental Army holding its ground against repeated British counterattacks by elite formations including the Brigade of Guards and grenadier battalions. The British withdrew during the night and continued their march to Sandy Hook. Casualties were roughly equal, with approximately 350-500 killed or wounded on each side, though heat exhaustion caused additional losses that are difficult to quantify. The battle demonstrated that the Continental Army had become a professional fighting force capable of sustained combat against British regulars.', significanceWeight: 95 },
  });

  await prisma.event.upsert({
    where: { id: 'event-monmouth-lee-court-martial' },
    update: { slug: 'lee-court-martial-1778' },
    create: { id: 'event-monmouth-lee-court-martial', townId: TOWN_ID, name: 'Court-Martial of Charles Lee', slug: 'lee-court-martial-1778', startDate: new Date('1778-07-04'), datePrecision: 'MONTH', summary: 'Following the Battle of Monmouth, General Charles Lee was court-martialed on three charges: disobedience of orders by not attacking the enemy as directed, misbehavior before the enemy by making an unnecessary and disorderly retreat, and disrespect to the commander-in-chief in two letters written after the battle. The court-martial convened in July 1778 and found Lee guilty on all counts, suspending him from command for twelve months. Lee never returned to active service and was eventually dismissed by Congress in 1780. The court-martial resolved the factional tensions within the Continental Army\'s senior leadership and consolidated Washington\'s authority as commander-in-chief.', significanceWeight: 70 },
  });

  await prisma.event.upsert({
    where: { id: 'event-monmouth-molly-pitcher-legend' },
    update: { slug: 'molly-pitcher-at-monmouth-1778' },
    create: { id: 'event-monmouth-molly-pitcher-legend', townId: TOWN_ID, name: 'Molly Pitcher at the Battle of Monmouth', slug: 'molly-pitcher-at-monmouth-1778', startDate: new Date('1778-06-28'), datePrecision: 'DAY', summary: 'During the Battle of Monmouth on June 28, 1778, Mary Ludwig Hays McCauley — later known as Molly Pitcher — carried water to artillery crews and soldiers suffering in the extreme heat. When her husband William Hays collapsed from heat exhaustion while serving a cannon, Mary took his place, helping to sponge, load, and fire the gun. Pension records and a 1786 Pennsylvania legislative act recognizing her wartime service provide documentary evidence for her actions. The Molly Pitcher legend has grown beyond the historical Mary Hays to encompass other women who served at Monmouth and throughout the war, becoming a symbol of women\'s contributions to the Revolution.', significanceWeight: 75 },
  });

  await prisma.event.upsert({
    where: { id: 'event-monmouth-washington-lee-confrontation' },
    update: { slug: 'washington-lee-confrontation-1778' },
    create: { id: 'event-monmouth-washington-lee-confrontation', townId: TOWN_ID, name: 'Washington-Lee Confrontation on the Battlefield', slug: 'washington-lee-confrontation-1778', startDate: new Date('1778-06-28'), datePrecision: 'DAY', summary: 'During the Battle of Monmouth, as Charles Lee\'s advance force retreated in disorder toward the main army, Washington rode forward and encountered Lee on the road near the West Morass. The confrontation between the two generals — Washington demanding to know the reason for the retreat, Lee offering confused explanations — was witnessed by multiple officers and became one of the defining moments of the battle. Washington relieved Lee of command, personally took charge of the retreating troops, and directed them into a new defensive line. The incident demonstrated Washington\'s decisiveness under pressure and his willingness to override subordinate commanders who failed to execute orders. The confrontation led directly to Lee\'s court-martial and dismissal.', significanceWeight: 80 },
  });

  await prisma.event.upsert({
    where: { id: 'event-monmouth-valley-forge-training' },
    update: { slug: 'valley-forge-training-1778' },
    create: { id: 'event-monmouth-valley-forge-training', townId: TOWN_ID, name: 'Valley Forge Training Under Steuben', slug: 'valley-forge-training-1778', startDate: new Date('1778-02-23'), endDate: new Date('1778-06-19'), datePrecision: 'MONTH', summary: 'Beginning in February 1778, Baron von Steuben implemented a systematic training program at Valley Forge that transformed the Continental Army from a collection of poorly drilled militia-like units into a disciplined fighting force. Steuben simplified the manual of arms, standardized drill procedures, taught soldiers to maneuver from column into line, and established uniform sanitation practices. He trained a model company personally, then had those soldiers train their units, cascading the instruction throughout the army. The training program produced the army that fought at Monmouth four months later — troops who could execute coordinated volleys, wheel under fire, conduct orderly retreats, and sustain prolonged combat against British regulars.', significanceWeight: 85 },
  });

  await prisma.event.upsert({
    where: { id: 'event-monmouth-british-march-philadelphia' },
    update: { slug: 'british-evacuation-philadelphia-1778' },
    create: { id: 'event-monmouth-british-march-philadelphia', townId: TOWN_ID, name: 'British Evacuation of Philadelphia', slug: 'british-evacuation-philadelphia-1778', startDate: new Date('1778-06-18'), datePrecision: 'DAY', summary: 'On June 18, 1778, Sir Henry Clinton began the evacuation of the British army from Philadelphia, marching approximately 12,000 troops and a massive baggage train of over 1,500 wagons across New Jersey toward the British base at New York. The evacuation was ordered after France\'s alliance with the United States changed the strategic calculus: the British needed to consolidate their forces and prepare for a potential French naval attack. Clinton\'s route across New Jersey — through Haddonfield, Mount Holly, Allentown, and toward Sandy Hook — stretched his army over twelve miles of road and made it vulnerable to attack. Washington\'s Continental Army, having broken camp at Valley Forge, pursued Clinton across the state, setting the stage for the engagement at Monmouth Court House.', significanceWeight: 75 },
  });

  await prisma.event.upsert({
    where: { id: 'event-monmouth-heatstroke-casualties' },
    update: { slug: 'heatstroke-casualties-monmouth-1778' },
    create: { id: 'event-monmouth-heatstroke-casualties', townId: TOWN_ID, name: 'Heatstroke Casualties at Monmouth', slug: 'heatstroke-casualties-monmouth-1778', startDate: new Date('1778-06-28'), datePrecision: 'DAY', summary: 'The Battle of Monmouth was fought on one of the hottest days of the summer of 1778, with temperatures reaching approximately 100 degrees Fahrenheit. Heat exhaustion and heatstroke caused significant casualties on both sides, with soldiers collapsing from the extreme temperatures even without enemy contact. British soldiers, carrying heavy packs and wearing wool uniforms, were particularly affected during the march across New Jersey in the days before the battle. The heat casualties at Monmouth highlight the environmental dimensions of 18th-century warfare and the critical importance of water supply. The women who carried water to the troops — including Mary Hays McCauley — performed a service that was literally life-saving.', significanceWeight: 55 },
  });

  await prisma.event.upsert({
    where: { id: 'event-monmouth-british-night-withdrawal' },
    update: { slug: 'british-night-withdrawal-monmouth-1778' },
    create: { id: 'event-monmouth-british-night-withdrawal', townId: TOWN_ID, name: 'British Night Withdrawal After Monmouth', slug: 'british-night-withdrawal-monmouth-1778', startDate: new Date('1778-06-29'), datePrecision: 'DAY', summary: 'During the night of June 28-29, 1778, after a full day of fighting at Monmouth, Sir Henry Clinton withdrew his army from the battlefield and continued the march toward Sandy Hook, where the British would be evacuated by the Royal Navy to New York. Washington, whose troops were exhausted from the battle and the heat, did not pursue. Clinton\'s withdrawal left the battlefield to the Americans, allowing Washington to claim a tactical victory. The British reached Sandy Hook on June 30 and were transported to New York City by July 5. The withdrawal marked the end of major British military operations in the northern states; thereafter, the war shifted primarily to the southern theater.', significanceWeight: 65 },
  });

  // --- 12 NEW EVENTS ---

  await prisma.event.upsert({
    where: { id: 'event-monmouth-french-alliance-1778' },
    update: {},
    create: { id: 'event-monmouth-french-alliance-1778', townId: TOWN_ID, name: 'Franco-American Alliance Announced', slug: 'franco-american-alliance-1778', startDate: new Date('1778-02-06'), datePrecision: 'DAY', summary: 'On February 6, 1778, France and the United States signed the Treaty of Alliance and the Treaty of Amity and Commerce in Paris, formalizing French entry into the war on the American side. News of the alliance reached the Continental Army at Valley Forge in May 1778 and fundamentally altered the strategic landscape. The British government, now facing war with France as well as the American colonies, ordered the evacuation of Philadelphia to consolidate forces in New York — the decision that set the stage for the Monmouth campaign. The alliance also boosted Continental Army morale at a critical moment, and Lafayette\'s presence in the army took on additional significance as the embodiment of the Franco-American partnership.', significanceWeight: 80 },
  });

  await prisma.event.upsert({
    where: { id: 'event-monmouth-army-leaves-valley-forge' },
    update: {},
    create: { id: 'event-monmouth-army-leaves-valley-forge', townId: TOWN_ID, name: 'Continental Army Departs Valley Forge', slug: 'army-departs-valley-forge-1778', startDate: new Date('1778-06-19'), datePrecision: 'DAY', summary: 'On June 19, 1778, the Continental Army broke camp at Valley Forge and began its pursuit of Clinton\'s British army across New Jersey. The army that marched out of Valley Forge was a fundamentally different force from the one that had limped into camp six months earlier. Steuben\'s training had produced soldiers who could march in formation, deploy from column to line efficiently, execute coordinated musket volleys, and maintain unit cohesion under fire. Washington divided his army into two wings and marched eastward through New Jersey, seeking an opportunity to strike Clinton\'s stretched-out column. The pursuit covered approximately 60 miles over nine days before the armies engaged at Monmouth Court House.', significanceWeight: 65 },
  });

  await prisma.event.upsert({
    where: { id: 'event-monmouth-war-council-hopewell' },
    update: {},
    create: { id: 'event-monmouth-war-council-hopewell', townId: TOWN_ID, name: 'War Council at Hopewell', slug: 'war-council-hopewell-1778', startDate: new Date('1778-06-24'), datePrecision: 'DAY', summary: 'On June 24, 1778, Washington convened a council of war at Hopewell, New Jersey, to debate whether to engage Clinton\'s army during its march across the state. The council was sharply divided. Charles Lee argued against a major engagement, warning that the Continental Army should not risk a general action against the British. Others, including Anthony Wayne, Lafayette, and Nathanael Greene, urged Washington to attack Clinton\'s vulnerable baggage train and rear guard. Washington chose a middle course: he ordered an advance force of approximately 5,000 troops to strike the British rear guard while keeping the main army in reserve. The decision to attack — and the debate that preceded it — revealed the tensions within the Continental officer corps that would erupt during the battle itself.', significanceWeight: 60 },
  });

  await prisma.event.upsert({
    where: { id: 'event-monmouth-lee-advance-command' },
    update: {},
    create: { id: 'event-monmouth-lee-advance-command', townId: TOWN_ID, name: 'Lee Demands Advance Command', slug: 'lee-demands-advance-command-1778', startDate: new Date('1778-06-27'), datePrecision: 'DAY', summary: 'Washington initially assigned command of the advance force to Lafayette, who was eager for the assignment and began moving toward the British on June 25. However, Charles Lee — who had initially declined the advance command, calling it beneath his rank — reversed his position when he realized the force had been enlarged to approximately 5,000 troops, making it a significant independent command. Lee demanded the assignment on the basis of seniority, and Washington reluctantly transferred command to him on June 27, the day before the battle. Lafayette acquiesced, though several officers expressed concern about Lee\'s reliability. Lee\'s assumption of the advance command set the stage for the confusion and retreat that nearly turned the battle into a disaster.', significanceWeight: 60 },
  });

  await prisma.event.upsert({
    where: { id: 'event-monmouth-lees-retreat' },
    update: {},
    create: { id: 'event-monmouth-lees-retreat', townId: TOWN_ID, name: 'Lee\'s Retreat at Monmouth', slug: 'lees-retreat-monmouth-1778', startDate: new Date('1778-06-28'), datePrecision: 'DAY', summary: 'On the morning of June 28, 1778, Lee\'s advance force of approximately 5,000 troops engaged the British rear guard near Monmouth Court House. The initial approach was confused, with Lee issuing contradictory orders and failing to establish a coherent plan of attack. When the British turned to counterattack, Lee ordered a retreat without fully engaging the enemy. The retreat was disorganized and threatened to become a rout, with units falling back in confusion across the fields and ravines west of the courthouse. The retreat covered approximately three miles before Washington encountered the retreating troops and halted the withdrawal. Lee\'s failure to press the attack and his unauthorized retreat remain among the most debated episodes of the Revolution.', significanceWeight: 75 },
  });

  await prisma.event.upsert({
    where: { id: 'event-monmouth-washington-reforms-line' },
    update: {},
    create: { id: 'event-monmouth-washington-reforms-line', townId: TOWN_ID, name: 'Washington Reforms the American Line', slug: 'washington-reforms-line-1778', startDate: new Date('1778-06-28'), datePrecision: 'DAY', summary: 'After confronting Lee and halting the retreat, Washington personally directed the formation of a new defensive line using the terrain features of the battlefield — the Hedgerow, the West Morass, and the ridgelines that provided commanding positions for artillery. Washington positioned Wayne\'s brigade behind the Hedgerow, placed artillery on Comb\'s Hill and other elevated positions, and organized the remaining troops from Lee\'s retreating force into a coherent defensive formation. The speed and effectiveness with which the army reformed under fire — a complex tactical operation that required troops to halt their retreat, face about, form line, and prepare to receive an attack — was a direct product of Steuben\'s training at Valley Forge.', significanceWeight: 80 },
  });

  await prisma.event.upsert({
    where: { id: 'event-monmouth-artillery-duel' },
    update: {},
    create: { id: 'event-monmouth-artillery-duel', townId: TOWN_ID, name: 'Artillery Duel at Monmouth', slug: 'artillery-duel-monmouth-1778', startDate: new Date('1778-06-28'), datePrecision: 'DAY', summary: 'The Battle of Monmouth featured one of the most sustained artillery exchanges of the entire Revolution. Henry Knox, commanding the Continental artillery, placed guns on Comb\'s Hill and other elevated positions along the reformed American line, creating interlocking fields of fire that the British had to cross to reach the American infantry. The American guns — many of them French-supplied pieces that had arrived with the alliance — exchanged fire with British artillery throughout the afternoon. The effectiveness of the American artillery, served by crews trained under Knox and Steuben, was a marked improvement over earlier engagements and contributed significantly to the repulse of British counterattacks. The artillery duel demonstrated that the Continental Army could now match the British in this critical arm of warfare.', significanceWeight: 65 },
  });

  await prisma.event.upsert({
    where: { id: 'event-monmouth-british-grenadier-attack' },
    update: {},
    create: { id: 'event-monmouth-british-grenadier-attack', townId: TOWN_ID, name: 'British Grenadier Attacks Repulsed', slug: 'british-grenadier-attacks-1778', startDate: new Date('1778-06-28'), datePrecision: 'DAY', summary: 'During the afternoon engagement at Monmouth, British grenadier battalions and the Brigade of Guards launched repeated attacks against the American defensive positions at the Hedgerow and along the reformed line. These were among the finest troops in the British army — tall, experienced soldiers selected for their size and aggressiveness, equipped with bayonets and trained in shock tactics. The grenadier attacks were intended to break the American line through disciplined volleys followed by bayonet charges. At the Hedgerow, Wayne\'s brigade and supporting Continental units met these attacks with disciplined fire, repulsing multiple assaults. The failure of the British elite troops to break the American line was one of the most significant tactical outcomes of the battle and demonstrated the transformation wrought by Steuben\'s training.', significanceWeight: 70 },
  });

  await prisma.event.upsert({
    where: { id: 'event-monmouth-combs-hill-artillery' },
    update: {},
    create: { id: 'event-monmouth-combs-hill-artillery', townId: TOWN_ID, name: 'American Artillery on Comb\'s Hill', slug: 'combs-hill-artillery-1778', startDate: new Date('1778-06-28'), datePrecision: 'DAY', summary: 'Washington positioned Continental artillery on Comb\'s Hill, a prominent elevation on the battlefield, where the guns commanded the approaches to the American defensive line. The artillery on Comb\'s Hill played a decisive role in repulsing British counterattacks by delivering enfilading fire into the flanks of advancing British formations. The placement of guns on this terrain feature demonstrated Washington\'s growing tactical sophistication and his understanding of how to use terrain and artillery together to create a defensive position that compensated for the Continental Army\'s remaining weaknesses in close-quarters infantry combat. Knox\'s gunners on Comb\'s Hill served their pieces throughout the afternoon engagement.', significanceWeight: 60 },
  });

  await prisma.event.upsert({
    where: { id: 'event-monmouth-new-jersey-militia-support' },
    update: {},
    create: { id: 'event-monmouth-new-jersey-militia-support', townId: TOWN_ID, name: 'New Jersey Militia Harasses British March', slug: 'nj-militia-harasses-british-1778', startDate: new Date('1778-06-18'), endDate: new Date('1778-06-28'), datePrecision: 'RANGE', summary: 'As Clinton\'s British army marched across New Jersey from Philadelphia in June 1778, New Jersey militia units under General Philemon Dickinson harassed the column, destroying bridges, blocking roads, removing or poisoning wells, and skirmishing with British foragers and flanking parties. The militia actions slowed Clinton\'s march, limited the British ability to gather intelligence about Washington\'s approaching army, and degraded British morale by keeping the troops under constant low-level threat. The militia\'s contribution, while not decisive in itself, shaped the conditions under which the Battle of Monmouth was fought: Clinton\'s army arrived at Monmouth Court House tired, hot, and harassed, while Washington\'s army had gained time to position itself for attack.', significanceWeight: 55 },
  });

  await prisma.event.upsert({
    where: { id: 'event-monmouth-steuben-blue-book' },
    update: {},
    create: { id: 'event-monmouth-steuben-blue-book', townId: TOWN_ID, name: 'Steuben\'s Blue Book Published', slug: 'steuben-blue-book-1779', startDate: new Date('1779-03-29'), datePrecision: 'MONTH', summary: 'In 1779, Baron von Steuben published the "Regulations for the Order and Discipline of the Troops of the United States," commonly known as the Blue Book. The manual codified the training methods Steuben had developed at Valley Forge and tested at Monmouth, establishing a uniform system of drill, march, camp organization, and battlefield tactics for the Continental Army. The Blue Book simplified the manual of arms, standardized commands, and — critically — required officers to take direct responsibility for the training, welfare, and discipline of their soldiers. The manual remained the official drill guide of the U.S. Army until the War of 1812. Its publication made permanent the transformation that Monmouth had proven in battle.', significanceWeight: 60 },
  });

  await prisma.event.upsert({
    where: { id: 'event-monmouth-hamilton-horse-shot' },
    update: {},
    create: { id: 'event-monmouth-hamilton-horse-shot', townId: TOWN_ID, name: 'Hamilton\'s Horse Shot at Monmouth', slug: 'hamilton-horse-shot-monmouth-1778', startDate: new Date('1778-06-28'), datePrecision: 'DAY', summary: 'During the Battle of Monmouth, Alexander Hamilton — serving as Washington\'s aide-de-camp — rode forward with the commander-in-chief to rally the retreating troops and direct the formation of the new defensive line. During the engagement, Hamilton\'s horse was shot from under him, and Hamilton was reportedly injured in the fall but continued to participate in the battle. Hamilton\'s actions at Monmouth were characteristic of his aggressive temperament and desire for combat glory — a desire that would be fulfilled at Yorktown in 1781 when he led an infantry assault on a British redoubt. His conduct at Monmouth reinforced his close relationship with Washington and demonstrated the physical courage that complemented his intellectual abilities.', significanceWeight: 50 },
  });

  console.log('  Events seeded.');
}

// =============================================================================
// EVENT-PEOPLE CONNECTIONS
// =============================================================================

async function seedEventPeople() {
  console.log('  Seeding event-people connections...');

  const connections = [
    // Battle of Monmouth
    { eventId: 'event-monmouth-battle-1778', personId: 'person-monmouth-george-washington', roleInEvent: 'Commander-in-chief; reformed the American line after Lee\'s retreat' },
    { eventId: 'event-monmouth-battle-1778', personId: 'person-monmouth-charles-lee', roleInEvent: 'Commander of the advance force; ordered unauthorized retreat' },
    { eventId: 'event-monmouth-battle-1778', personId: 'person-monmouth-henry-clinton', roleInEvent: 'Commander-in-chief of British forces' },
    { eventId: 'event-monmouth-battle-1778', personId: 'person-monmouth-charles-cornwallis', roleInEvent: 'Commander of the British rear guard' },
    { eventId: 'event-monmouth-battle-1778', personId: 'person-monmouth-anthony-wayne', roleInEvent: 'Commanded a forward brigade; defended the Hedgerow position' },
    { eventId: 'event-monmouth-battle-1778', personId: 'person-monmouth-lafayette', roleInEvent: 'Served under Lee; helped rally troops after the retreat' },
    { eventId: 'event-monmouth-battle-1778', personId: 'person-monmouth-alexander-hamilton', roleInEvent: 'Aide-de-camp to Washington; horse shot from under him' },

    // Lee Court-Martial
    { eventId: 'event-monmouth-lee-court-martial', personId: 'person-monmouth-charles-lee', roleInEvent: 'Defendant; found guilty on all charges' },
    { eventId: 'event-monmouth-lee-court-martial', personId: 'person-monmouth-george-washington', roleInEvent: 'Commanding general who ordered the court-martial' },
    { eventId: 'event-monmouth-lee-court-martial', personId: 'person-monmouth-anthony-wayne', roleInEvent: 'Witness who testified about Lee\'s retreat' },

    // Molly Pitcher
    { eventId: 'event-monmouth-molly-pitcher-legend', personId: 'person-monmouth-molly-pitcher', roleInEvent: 'Carried water and manned a cannon during the battle' },

    // Washington-Lee Confrontation
    { eventId: 'event-monmouth-washington-lee-confrontation', personId: 'person-monmouth-george-washington', roleInEvent: 'Confronted Lee and assumed direct command' },
    { eventId: 'event-monmouth-washington-lee-confrontation', personId: 'person-monmouth-charles-lee', roleInEvent: 'Confronted by Washington over the unauthorized retreat' },
    { eventId: 'event-monmouth-washington-lee-confrontation', personId: 'person-monmouth-lafayette', roleInEvent: 'Witness to the confrontation' },

    // Valley Forge Training
    { eventId: 'event-monmouth-valley-forge-training', personId: 'person-monmouth-steuben', roleInEvent: 'Designed and led the training program' },
    { eventId: 'event-monmouth-valley-forge-training', personId: 'person-monmouth-george-washington', roleInEvent: 'Authorized and supported the training program' },
    { eventId: 'event-monmouth-valley-forge-training', personId: 'person-monmouth-alexander-hamilton', roleInEvent: 'Translator between Steuben and English-speaking officers' },
    { eventId: 'event-monmouth-valley-forge-training', personId: 'person-monmouth-lafayette', roleInEvent: 'Participated in training; shared hardships of Valley Forge' },
    { eventId: 'event-monmouth-valley-forge-training', personId: 'person-monmouth-anthony-wayne', roleInEvent: 'Brigade commander who embraced the training program' },

    // British Evacuation of Philadelphia
    { eventId: 'event-monmouth-british-march-philadelphia', personId: 'person-monmouth-henry-clinton', roleInEvent: 'Commanded the evacuation and march across New Jersey' },
    { eventId: 'event-monmouth-british-march-philadelphia', personId: 'person-monmouth-charles-cornwallis', roleInEvent: 'Second-in-command during the march' },

    // Heatstroke Casualties
    { eventId: 'event-monmouth-heatstroke-casualties', personId: 'person-monmouth-molly-pitcher', roleInEvent: 'Carried water to troops and artillery crews in extreme heat' },

    // British Night Withdrawal
    { eventId: 'event-monmouth-british-night-withdrawal', personId: 'person-monmouth-henry-clinton', roleInEvent: 'Ordered the night withdrawal to Sandy Hook' },
    { eventId: 'event-monmouth-british-night-withdrawal', personId: 'person-monmouth-charles-cornwallis', roleInEvent: 'Participated in rear guard during the withdrawal' },

    // War Council at Hopewell
    { eventId: 'event-monmouth-war-council-hopewell', personId: 'person-monmouth-george-washington', roleInEvent: 'Presided over the council of war' },
    { eventId: 'event-monmouth-war-council-hopewell', personId: 'person-monmouth-charles-lee', roleInEvent: 'Argued against a major engagement' },
    { eventId: 'event-monmouth-war-council-hopewell', personId: 'person-monmouth-anthony-wayne', roleInEvent: 'Advocated for attacking the British' },
    { eventId: 'event-monmouth-war-council-hopewell', personId: 'person-monmouth-lafayette', roleInEvent: 'Supported attacking the British rear guard' },
    { eventId: 'event-monmouth-war-council-hopewell', personId: 'person-monmouth-steuben', roleInEvent: 'Attended the council; supported offensive action' },

    // Lee Demands Advance Command
    { eventId: 'event-monmouth-lee-advance-command', personId: 'person-monmouth-charles-lee', roleInEvent: 'Demanded command of the advance force based on seniority' },
    { eventId: 'event-monmouth-lee-advance-command', personId: 'person-monmouth-lafayette', roleInEvent: 'Original advance force commander who yielded to Lee' },
    { eventId: 'event-monmouth-lee-advance-command', personId: 'person-monmouth-george-washington', roleInEvent: 'Reluctantly transferred command to Lee' },

    // Lee's Retreat
    { eventId: 'event-monmouth-lees-retreat', personId: 'person-monmouth-charles-lee', roleInEvent: 'Ordered the retreat without fully engaging' },
    { eventId: 'event-monmouth-lees-retreat', personId: 'person-monmouth-anthony-wayne', roleInEvent: 'Conducted a fighting retreat under Lee\'s orders' },
    { eventId: 'event-monmouth-lees-retreat', personId: 'person-monmouth-lafayette', roleInEvent: 'Attempted to maintain order during the retreat' },

    // Washington Reforms Line
    { eventId: 'event-monmouth-washington-reforms-line', personId: 'person-monmouth-george-washington', roleInEvent: 'Personally directed formation of the new defensive line' },
    { eventId: 'event-monmouth-washington-reforms-line', personId: 'person-monmouth-anthony-wayne', roleInEvent: 'Positioned behind the Hedgerow to anchor the defense' },
    { eventId: 'event-monmouth-washington-reforms-line', personId: 'person-monmouth-alexander-hamilton', roleInEvent: 'Helped rally troops and direct units into position' },

    // Artillery Duel
    { eventId: 'event-monmouth-artillery-duel', personId: 'person-monmouth-george-washington', roleInEvent: 'Directed artillery placement along the defensive line' },

    // British Grenadier Attacks
    { eventId: 'event-monmouth-british-grenadier-attack', personId: 'person-monmouth-charles-cornwallis', roleInEvent: 'Commanded grenadier and Guards counterattacks' },
    { eventId: 'event-monmouth-british-grenadier-attack', personId: 'person-monmouth-anthony-wayne', roleInEvent: 'Defended the Hedgerow against British elite troops' },

    // Hamilton Horse Shot
    { eventId: 'event-monmouth-hamilton-horse-shot', personId: 'person-monmouth-alexander-hamilton', roleInEvent: 'Had horse shot from under him during the battle' },
    { eventId: 'event-monmouth-hamilton-horse-shot', personId: 'person-monmouth-george-washington', roleInEvent: 'Commander whom Hamilton served as aide-de-camp' },

    // Steuben Blue Book
    { eventId: 'event-monmouth-steuben-blue-book', personId: 'person-monmouth-steuben', roleInEvent: 'Author of the regulations manual' },
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

  // --- 3 NEW STORIES ---

  await prisma.story.upsert({
    where: { slug: 'water-carrier-of-monmouth' },
    update: {},
    create: {
      townId: TOWN_ID,
      title: 'The Water Carrier of Monmouth',
      slug: 'water-carrier-of-monmouth',
      storyType: 'HISTORICAL_VOICE',
      subjectPersonId: 'person-monmouth-molly-pitcher',
      verificationStatus: 'VERIFIED',
      textVersion: `I followed the army because my husband went, and a wife who could work was needed as much as a soldier who could fire. That is not how the stories tell it — they make it sound as though I wandered onto a battlefield out of devotion or madness. The truth is simpler. The army could not function without the women who washed, cooked, mended, nursed, and carried. We were part of the army. We drew partial rations. We were subject to the army's discipline. We marched when the army marched and halted when it halted.

At Valley Forge, the winter was as hard for us as for the soldiers, though our suffering has attracted less attention from the historians. We lived in the huts alongside the men, sharing the cold and the hunger. My husband William was a gunner in the Pennsylvania artillery, and I made myself useful where I could — carrying water, tending fires, nursing the sick. When the Prussian drillmaster arrived and began his training, the whole camp changed. The soldiers drilled from morning until dark, and there was a sense of purpose that had been missing during the worst months of winter.

When the army marched out of Valley Forge in June, I marched with it. We crossed New Jersey in heat that pressed down on the column like a weight. The roads were sandy and the dust choked us. By the time we reached the area around Monmouth Court House, men were falling out of the ranks from the heat alone, before any shot had been fired.

On the morning of June 28, the guns went forward and the fighting began. I carried water from a spring to the artillery battery where William served his cannon. The pitchers were heavy and the distance was not short, and every trip I made across that ground was through air that smelled of powder smoke and was filled with the sound of cannon and musket fire. The men called for water constantly — their throats were raw from the cartridge paper they tore with their teeth, and the heat was killing them as surely as the British fire.

William collapsed at his gun in the afternoon. Whether it was the heat or exhaustion or both, he went down and could not rise. I had watched him sponge and load that cannon enough times to know the motions. I took the rammer and the sponge from his hands and went to work. The other men on the crew did not question it — they needed hands, and mine were available. We loaded and fired, loaded and fired, the gun bucking back with each discharge, the smoke so thick I could barely see the target.

An officer rode past at some point — I was told later it was General Washington himself — and I am told he acknowledged what I was doing. I do not remember the details of that moment. What I remember is the work: the weight of the rammer, the heat of the barrel, the sound of the shot leaving the gun. I remember that when the firing finally stopped and the British pulled back in the darkness, I was still standing at the cannon, and William was being carried to the surgeon.

After the war, the Pennsylvania legislature gave me a small pension. The document says I attended an artillery piece at the Battle of Monmouth. That is accurate. The stories that came later — the stories about Molly Pitcher — are partly about me and partly about other women who did similar work at Monmouth and at other battles. I do not begrudge the legend, but I want it understood that what I did was not extraordinary in the way the stories suggest. Women served throughout the war, at every encampment and every battle. I happened to serve at a cannon on a day when someone noticed. The others served just as faithfully, and their names are mostly forgotten.

I lived the rest of my life in Carlisle, Pennsylvania. William died a few years after the war, and I married again. I was not wealthy and I was not celebrated in my own time. The pension helped, but it was a soldier's half-pay, and a soldier's half-pay does not go far. I died in 1832, an old woman in a small town, and it was only later that the story of Molly Pitcher grew into something larger than the life I actually lived. I carried water. I fired a cannon. I did what was needed. That is all.`,
      tags: ['monmouth', 'molly-pitcher', 'women-in-revolution', 'artillery', 'camp-followers', 'valley-forge'],
    },
  });

  await prisma.story.upsert({
    where: { slug: 'the-drillmaster-and-the-proving-ground' },
    update: {},
    create: {
      townId: TOWN_ID,
      title: 'The Drillmaster and the Proving Ground',
      slug: 'the-drillmaster-and-the-proving-ground',
      storyType: 'HISTORICAL_VOICE',
      subjectPersonId: 'person-monmouth-steuben',
      verificationStatus: 'VERIFIED',
      textVersion: `When I arrived at Valley Forge in February of 1778, I found an army that possessed bravery in abundance and discipline almost not at all. The soldiers were willing to fight — that was never in question. But they could not form a line of battle without confusion, could not march from one position to another without losing their formation, could not load and fire their muskets in coordinated volleys. They had fought as individuals, as clusters, as communities of men from the same town. They had not fought as an army.

I had served Frederick the Great. I had seen what disciplined troops could accomplish: how a well-drilled battalion could wheel from column into line in a matter of minutes, how a coordinated volley could break an enemy formation, how the bayonet, properly used, could drive an opponent from the field. The American soldiers were not lacking in courage — I had never seen men endure such privation with such patience. What they lacked was a system.

I began with a hundred men, selected from different regiments, and I drilled them myself on the parade ground at Valley Forge. My English was poor — it remained poor throughout my time in America — and I relied on translators, particularly the young Colonel Hamilton, who spoke French, and my aide Captain Walker. I would demonstrate the movements, barking instructions in French and German and occasionally in English words I had memorized, and the translators would relay my meaning. When the translation failed, I would seize a musket and show them what I wanted with my own hands.

The men responded. They were farmers and tradesmen, not professional soldiers, but they were intelligent men who could see the purpose behind the drill. I simplified the manual of arms. The British procedure required many more steps than were necessary; I reduced the movements to their essentials. I taught them to form from column into line — the single maneuver that mattered most in battle, because an army that could not deploy from a marching formation into a fighting formation was vulnerable every time it encountered the enemy. I taught them the bayonet — not as a last resort but as a weapon, to be used aggressively after the volley.

Within weeks, the model company was transformed. I sent those men back to their regiments with instructions to teach what they had learned, and the training cascaded through the army. By May, the entire Continental Army was drilling under the system I had devised. The soldiers stood straighter. They moved together. They began to look like an army.

But drill on a parade ground and performance in battle are not the same thing. I knew this better than anyone. The test would come when the British brought their bayonets and their discipline to a field where the outcome was uncertain, and we would discover whether the men I had trained could hold their ground.

The test came at Monmouth on June 28, 1778. I was not in tactical command — that was Washington's prerogative — but I was on the field, and I watched what happened with the eye of a professional soldier. When Lee's advance collapsed and the troops fell back in confusion, I saw the moment that could have become a disaster. And then I saw Washington ride forward and halt the retreat, and I saw the army — my army, if I may call it so — reform itself into a defensive line under fire.

They did it. They wheeled from column into line. They dressed their ranks. They loaded and fired in volleys, not as individuals. They held their ground when the British grenadiers and Guards came at them — the finest shock troops in Europe — and they did not break. The hedgerow position held. The artillery, served with precision, broke up the British formations before they could close. By the time darkness fell and the firing died away, the Continental Army had stood toe to toe with the British army for a full day of sustained combat and had given no ground.

I do not claim sole credit for what happened at Monmouth. The courage was the soldiers' own. Washington's leadership in the crisis was decisive. The junior officers who held their men together during Lee's retreat and then reformed them under fire showed competence that could not be taught in four months of drill. But the system worked. The drill worked. The training that I brought from Prussia, adapted for American conditions and American soldiers, had produced an army that could fight. That is what Monmouth proved, and that is what I carried with me for the rest of my life.`,
      tags: ['monmouth', 'valley-forge', 'steuben', 'training', 'military-discipline', 'continental-army'],
    },
  });

  await prisma.story.upsert({
    where: { slug: 'monmouth-battlefield-today' },
    update: {},
    create: {
      townId: TOWN_ID,
      title: 'The Proving Ground: Monmouth Battlefield Today',
      slug: 'monmouth-battlefield-today',
      storyType: 'MODERN_VOICE',
      verificationStatus: 'VERIFIED',
      textVersion: `The fields at Monmouth look much as they did in 1778. This is both the park's strength and its challenge. Unlike many Revolutionary War sites, which have been absorbed by suburban development or overlaid with monuments and visitor infrastructure, Monmouth Battlefield State Park preserves a landscape that a soldier from Washington's army would largely recognize: open agricultural fields, hedgerows, ravines, and patches of marshy ground stretching across nearly 1,800 acres of central New Jersey.

Walk the trail system on a June afternoon and the heat reminds you why this battle was different from the others. The sun presses down on the open fields, and within an hour you are drinking water constantly, seeking shade whenever it appears. Now imagine carrying a ten-pound musket, wearing wool, marching for miles before the first shot, and fighting for twelve hours. The heatstroke casualties at Monmouth were not incidental to the battle — they were a central feature of it.

The landscape tells the tactical story better than any map. Stand at the Hedgerow and look across the field toward the British approach route. The ground is open, with slight undulations that would have provided some cover to advancing troops but not enough to shield them from disciplined volley fire. The West Morass is still visible as a depression in the terrain, wet and soft even in summer. You can see why Washington chose to anchor his reformed line here: the morass protected one flank, and the Hedgerow provided cover for infantry. The elevated positions where Knox placed his artillery command the ground in front of the line, creating overlapping fields of fire.

Comb's Hill, where the American guns were positioned, offers a panoramic view of the battlefield. From this vantage point, you can see the full sweep of the engagement: the fields where Lee's advance force initially engaged the British, the road along which the retreat unfolded, the terrain features that Washington used to reform the line, and the ground across which the British grenadiers launched their counterattacks. The interpretive markers along the trail identify each phase of the battle and explain how the terrain shaped the fighting.

Old Tennent Church, adjacent to the park, still bears the marks of the battle — musket ball holes in its walls. The cemetery contains graves of soldiers from both armies. The white clapboard church, built in 1751, is one of the few structures on the battlefield that was present on the day of the fighting. Walking through the cemetery on a summer afternoon, reading the weathered inscriptions on the headstones, you are standing among the men who fought here.

The park's Visitor Center houses exhibits that place Monmouth within the broader story of the Revolution. The emphasis, appropriately, is on the transformation of the Continental Army. Monmouth was the proving ground for the changes wrought at Valley Forge — the place where Steuben's training, Washington's leadership, and the soldiers' courage were tested against the finest army in the world and found sufficient. The exhibits include artifacts from the battle, maps of the engagement, and information about the people who fought here, from generals to the women who carried water under fire.

What makes Monmouth's story distinctive is what it demonstrates about the Continental Army's evolution. The army that retreated across New Jersey in 1776, pursued by Cornwallis, losing men to desertion and despair, was a different organism from the army that stood its ground against the same commander's troops at Monmouth eighteen months later. The difference was not just training, though training was essential. It was confidence — the knowledge, earned through drill and discipline, that they could stand against British regulars and hold their ground.

Today, Monmouth Battlefield State Park is maintained by the New Jersey Division of Parks and Forestry. Annual reenactments on the anniversary of the battle draw participants and spectators from across the region. The park offers guided walks, educational programs, and special events that interpret the battle and its significance. The challenge for the park, as for all battlefields, is to communicate the reality of what happened on these quiet fields — the noise, the smoke, the heat, the fear, and the determination that made this place a turning point in American military history.`,
      tags: ['monmouth', 'battlefield-park', 'modern-interpretation', 'preservation', 'tourism', 'new-jersey'],
    },
  });

  console.log('  Stories seeded.');
}

// =============================================================================
// LESSONS
// =============================================================================

async function seedLessons() {
  console.log('  Seeding lesson plans...');

  await prisma.lessonPlan.upsert({
    where: { slug: 'monmouth-valley-forge-proving-ground' },
    update: {},
    create: {
      townId: TOWN_ID,
      title: 'From Valley Forge to Monmouth: The Proving Ground',
      slug: 'monmouth-valley-forge-proving-ground',
      gradeRange: '6-8',
      estimatedDuration: '2-3 class periods',
      summary: 'Students investigate how Baron von Steuben\'s training program at Valley Forge transformed the Continental Army, using the Battle of Monmouth as the evidence for that transformation. Through primary source analysis, map activities, and structured comparison, students evaluate what changed and why it mattered.',
      lessonData: {
        objectives: [
          'Describe the condition of the Continental Army before and after Valley Forge',
          'Explain how Steuben\'s training methods improved the army\'s fighting capability',
          'Analyze the Battle of Monmouth as evidence of the army\'s transformation',
          'Evaluate the relationship between training, discipline, and battlefield performance',
        ],
        essentialQuestions: [
          'What did the Continental Army lack before Valley Forge, and how did Steuben address those deficiencies?',
          'How did the Battle of Monmouth demonstrate that the Continental Army had changed?',
          'Why is professional military training important for an army, even one fighting for a cause its soldiers believe in?',
          'What role do individuals play in transforming institutions?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Show students two descriptions of the same army: one from the winter at Valley Forge (hungry, poorly clothed, unable to drill) and one from the Battle of Monmouth (executing coordinated volleys, holding ground against British regulars). Ask students to identify what changed and brainstorm how such a transformation might occur in just four months. Record hypotheses on the board.',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'The condition of the Continental Army entering Valley Forge in December 1777: defeats at Brandywine and Germantown, lack of standardized training, poor camp sanitation, disease',
            'Steuben\'s background and arrival at Valley Forge in February 1778',
            'The training program: model company, simplified manual of arms, column-to-line deployment, bayonet drill, officer responsibilities',
            'The march from Valley Forge to Monmouth: a transformed army pursuing the British across New Jersey',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Before-and-After Chart: Students create a two-column chart comparing the Continental Army before Valley Forge and at Monmouth, using provided primary source excerpts (diary entries, officer reports, British observations).',
            'Battlefield Map Analysis: Students examine a map of the Battle of Monmouth and identify the tactical maneuvers the army executed — reforming after Lee\'s retreat, establishing a defensive line, delivering coordinated volleys, conducting an artillery duel. They mark which of these would have been impossible without Steuben\'s training.',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Write a report from Baron von Steuben to the Continental Congress describing what happened at the Battle of Monmouth and explaining how the training at Valley Forge contributed to the army\'s performance. Your report must reference at least three specific moments from the battle and connect each one to a specific aspect of the training program.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Class discussion: Can you think of other examples in history or current events where training and preparation made the difference between success and failure? How does the Valley Forge-to-Monmouth story relate to preparation in students\' own lives? Exit ticket: Name two specific skills Steuben taught and explain how each was used at Monmouth.',
        },
        differentiation: {
          struggling: 'Provide a pre-filled template for the report with sentence starters. Offer a simplified map with labeled positions. Reduce the number of required battle moments to two.',
          advanced: 'Compare Steuben\'s training methods to modern military basic training. What principles are similar? What has changed? Research and present findings to the class.',
          ell: 'Provide a glossary of military terms (volley, column, line, deploy, drill, manual of arms). Use illustrated diagrams showing column-to-line deployment. Allow paired work on the report.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.1', 'RH.6-8.2', 'RH.6-8.7', 'WHST.6-8.2'],
        c3Framework: ['D2.His.1.6-8', 'D2.His.3.6-8', 'D2.His.14.6-8'],
        note: 'Aligned to Common Core literacy standards for history/social studies and the C3 Framework for historical thinking and evidence-based analysis.',
      },
      displayOrder: 1,
      published: true,
    },
  });

  await prisma.lessonPlan.upsert({
    where: { slug: 'monmouth-women-in-revolution' },
    update: {},
    create: {
      townId: TOWN_ID,
      title: 'Women at War: Molly Pitcher, Margaret Corbin, and the Camp Followers of Monmouth',
      slug: 'monmouth-women-in-revolution',
      gradeRange: '7-10',
      estimatedDuration: '2-3 class periods',
      summary: 'Students examine the roles of women in the Continental Army through the lens of the Battle of Monmouth, distinguishing between historical evidence and popular legend in the Molly Pitcher story and evaluating the broader contributions of camp followers to the army\'s operations.',
      lessonData: {
        objectives: [
          'Distinguish between the historical Mary Hays McCauley and the legendary Molly Pitcher',
          'Describe the roles of camp followers in the Continental Army',
          'Analyze primary sources related to women\'s military service during the Revolution',
          'Evaluate why women\'s contributions to the Revolution have often been overlooked or mythologized',
        ],
        essentialQuestions: [
          'What is the difference between the historical Molly Pitcher and the legendary one, and why does the distinction matter?',
          'What roles did women play in the Continental Army, and why were these roles essential?',
          'How do legends and myths about historical figures help or hinder our understanding of the past?',
          'Why have women\'s contributions to the American Revolution received less historical attention than men\'s?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Present students with two images of Molly Pitcher: a romanticized 19th-century illustration showing a heroic figure at a cannon, and a description from pension records documenting Mary Hays McCauley\'s actual service. Ask students: Which tells us more about what really happened? Why might the two portrayals be so different?',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'The historical evidence for Mary Hays McCauley: pension records, Pennsylvania legislative act of 1786, soldier testimonies',
            'Margaret Corbin at Fort Washington: documented combat service and the first military pension for a woman',
            'The camp follower community: roles, regulations, and daily life for women who accompanied the army',
            'How the Molly Pitcher legend evolved: from specific historical individuals to a composite heroic figure',
          ],
        },
        guidedPractice: {
          duration: '35 minutes',
          activities: [
            'Source Analysis: Students examine excerpts from Mary Hays McCauley\'s pension records, the Pennsylvania legislative act, and Margaret Corbin\'s Congressional pension resolution. They complete a sourcing worksheet for each document, identifying what the source tells us, what it does not tell us, and what questions remain.',
            'Myth vs. History: In small groups, students create a Venn diagram comparing the legendary Molly Pitcher with the historical Mary Hays McCauley. They identify where fact and legend overlap and where they diverge, and discuss why the legend took the shape it did.',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Write a 400-word essay answering the question: "Should we celebrate the legend of Molly Pitcher or the history of Mary Hays McCauley?" Your essay must use evidence from at least two primary sources, address the value and the limitations of legends in historical memory, and take a clear position with supporting reasoning.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Discuss: What other historical figures might be part legend and part history? How can we tell the difference? Why do societies create legends about their past? Exit ticket: Name one thing the Molly Pitcher legend gets right and one thing it distorts about women\'s roles in the Revolution.',
        },
        differentiation: {
          struggling: 'Provide annotated primary sources with vocabulary support. Offer a graphic organizer for the essay with thesis, evidence, and conclusion sections pre-labeled.',
          advanced: 'Research Deborah Sampson, who disguised herself as a man to serve in the Continental Army. Compare her story to Molly Pitcher\'s. What do the differences reveal about how women\'s military service was perceived?',
          ell: 'Provide a glossary of key terms (pension, legislature, camp follower, artillery, deposition). Allow collaborative essay drafting. Provide primary source excerpts in simplified English with original passages available for reference.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.1', 'RH.6-8.2', 'RH.6-8.6', 'RH.6-8.8', 'WHST.6-8.1'],
        c3Framework: ['D2.His.1.6-8', 'D2.His.6.6-8', 'D2.His.11.6-8', 'D2.His.16.6-8'],
        note: 'Aligned to Common Core literacy standards for history/social studies and the C3 Framework for historical thinking, sourcing, and argumentation.',
      },
      displayOrder: 2,
      published: true,
    },
  });

  await prisma.lessonPlan.upsert({
    where: { slug: 'monmouth-command-crisis-leadership' },
    update: {},
    create: {
      townId: TOWN_ID,
      title: 'Command Crisis: Leadership and Decision-Making at the Battle of Monmouth',
      slug: 'monmouth-command-crisis-leadership',
      gradeRange: '9-12',
      estimatedDuration: '3-4 class periods',
      summary: 'Students analyze the leadership decisions that shaped the Battle of Monmouth — from the war council at Hopewell through Lee\'s retreat and Washington\'s intervention — as a case study in military command, institutional authority, and crisis decision-making.',
      lessonData: {
        objectives: [
          'Analyze the chain of command decisions that led to the crisis at Monmouth',
          'Evaluate Charles Lee\'s actions using multiple primary source perspectives',
          'Assess Washington\'s crisis leadership in reforming the army under fire',
          'Apply principles of leadership and decision-making to historical situations',
        ],
        essentialQuestions: [
          'Was Charles Lee\'s retreat a reasonable tactical decision, an act of incompetence, or something else?',
          'What qualities of leadership did Washington demonstrate in the crisis at Monmouth?',
          'How do institutional structures — chains of command, seniority, war councils — affect decision-making in crisis situations?',
          'What can modern leaders learn from the command decisions at Monmouth?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Present a scenario: You are a general commanding 5,000 troops ordered to attack the rear guard of a superior enemy force. As you advance, the enemy turns stronger than expected. Your orders say to attack, but you believe attack will fail. What do you do? Students write their response, then pair-share. Reveal that this was essentially Lee\'s situation at Monmouth and preview the lesson.',
        },
        directInstruction: {
          duration: '25 minutes',
          content: [
            'The war council at Hopewell: the debate over whether to engage Clinton\'s army, the arguments on each side, and Washington\'s compromise decision',
            'The command confusion: Lafayette\'s initial appointment, Lee\'s demand for command, Washington\'s reluctant transfer of authority',
            'Lee\'s advance and retreat: the sequence of events on the morning of June 28, including Lee\'s contradictory orders and the disorganized withdrawal',
            'Washington\'s intervention: confronting Lee, reforming the line, directing the sustained defense',
            'The aftermath: Lee\'s court-martial, the charges, the verdict, and the implications for military authority',
          ],
        },
        guidedPractice: {
          duration: '40 minutes',
          activities: [
            'Decision Point Analysis: Students receive a timeline of the battle with five critical decision points highlighted. At each point, they analyze the options available to the commander, the information he had, the decision he made, and the consequences. Students work in groups, with each group taking a different perspective (Washington, Lee, Cornwallis, Wayne, Lafayette).',
            'Mock Court-Martial: Using excerpts from the actual court-martial proceedings, students prepare prosecution and defense arguments for Charles Lee. The prosecution must prove that Lee\'s retreat was unauthorized and harmful; the defense must show that Lee\'s actions were reasonable given the tactical situation.',
          ],
        },
        independentPractice: {
          duration: '30 minutes',
          assignment: 'Write a 600-word analytical essay evaluating George Washington\'s leadership at the Battle of Monmouth. Your essay must address at least three specific decisions Washington made (before, during, and after the battle), analyze the factors that influenced each decision, assess the outcomes, and draw a broader conclusion about what Monmouth reveals about effective crisis leadership. Use evidence from primary sources and the day\'s discussion.',
        },
        closure: {
          duration: '15 minutes',
          activity: 'Structured class discussion: What makes a good leader in a crisis? Students identify principles of effective leadership demonstrated at Monmouth and connect them to modern examples. Can students identify a time when they or someone they know had to take charge in a difficult situation? Exit ticket: Identify the decision at Monmouth you believe was most important and explain why.',
        },
        differentiation: {
          struggling: 'Provide a pre-organized timeline with decision points already identified and context notes for each. Offer sentence starters for the essay. Simplify primary source excerpts.',
          advanced: 'Compare Washington\'s crisis leadership at Monmouth to another historical or contemporary example of leadership under pressure. Write a comparative analysis identifying common principles and key differences.',
          ell: 'Provide a glossary of command and military terms. Allow collaborative work on the mock court-martial. Provide essay framework with guided questions for each paragraph.',
        },
      },
      standards: {
        commonCore: ['RH.9-10.1', 'RH.9-10.2', 'RH.9-10.6', 'RH.9-10.9', 'WHST.9-10.1'],
        c3Framework: ['D2.His.1.9-12', 'D2.His.3.9-12', 'D2.His.5.9-12', 'D2.His.14.9-12', 'D2.Civ.3.9-12'],
        note: 'Aligned to Common Core literacy standards for history/social studies and the C3 Framework for historical thinking, civic reasoning, and evidence-based argumentation.',
      },
      displayOrder: 3,
      published: true,
    },
  });

  await prisma.lessonPlan.upsert({
    where: { slug: 'monmouth-battlefield-landscape-history' },
    update: {},
    create: {
      townId: TOWN_ID,
      title: 'Reading the Battlefield: Landscape, Terrain, and Tactics at Monmouth',
      slug: 'monmouth-battlefield-landscape-history',
      gradeRange: '5-8',
      estimatedDuration: '2 class periods',
      summary: 'Students learn to read a battlefield landscape by analyzing how terrain features at Monmouth — hedgerows, ravines, marshes, and hills — shaped the tactical decisions of both armies. Students develop skills in geographic analysis and understand how environment influences historical events.',
      lessonData: {
        objectives: [
          'Identify the key terrain features of the Monmouth battlefield',
          'Explain how terrain influenced the tactical decisions of both commanders',
          'Analyze a topographic or aerial map to predict how terrain would affect troop movements',
          'Connect geographic analysis to historical outcomes',
        ],
        essentialQuestions: [
          'How did the physical landscape at Monmouth shape the battle?',
          'Why did Washington choose specific terrain features for his defensive line?',
          'How does understanding geography help us understand history?',
          'What can a landscape tell us about events that happened there centuries ago?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Show students an aerial photograph of Monmouth Battlefield State Park alongside a tactical map of the battle. Ask them to match terrain features in the photograph to positions marked on the battle map. Discuss: How much has the landscape changed in nearly 250 years? What features would a soldier from 1778 recognize?',
        },
        directInstruction: {
          duration: '15 minutes',
          content: [
            'Introduction to battlefield terrain analysis: what to look for (elevation, water features, vegetation, roads)',
            'Key terrain at Monmouth: the Hedgerow, the West Morass, Comb\'s Hill, the ravines',
            'How Washington used terrain to create his defensive line after Lee\'s retreat',
            'How the morasses and ravines channeled British attacks into kill zones',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Terrain Analysis Exercise: Students receive a simplified topographic map of the Monmouth battlefield with contour lines, water features, and vegetation marked. Working in pairs, they identify the best positions for defense, the routes an attacking army would use, and the natural obstacles that would impede movement. They then compare their analysis to the actual positions used during the battle.',
            'Environment and History: Students examine how weather (the extreme heat) and water sources (the springs that supplied both armies) affected the battle. They plot water sources on the map and discuss how access to water influenced troop positions and the experience of individual soldiers.',
          ],
        },
        independentPractice: {
          duration: '20 minutes',
          assignment: 'Create an annotated battlefield map showing at least five terrain features at Monmouth. For each feature, write a brief explanation (2-3 sentences) of how that terrain affected the battle. Include at least one feature related to water, one related to elevation, and one related to vegetation or man-made structures.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Students present their annotated maps to a partner and explain their analysis. Whole-class discussion: How does reading a landscape differ from reading a book? What does the landscape tell us that written sources might not? Exit ticket: Name one terrain feature at Monmouth and explain how it affected the outcome of the battle.',
        },
        differentiation: {
          struggling: 'Provide a partially annotated map with three features already identified. Reduce the required number of annotations to three. Offer vocabulary cards for terrain terms.',
          advanced: 'Compare the terrain at Monmouth to another Revolutionary War battlefield (such as Bunker Hill or Saratoga). How did different landscapes produce different tactical challenges?',
          ell: 'Provide a visual glossary of terrain terms with photographs. Allow annotations in students\' first language with English translations. Pair with a bilingual partner.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.7', 'WHST.6-8.2', 'RST.6-8.7'],
        c3Framework: ['D2.Geo.2.6-8', 'D2.Geo.4.6-8', 'D2.His.1.6-8'],
        note: 'Aligned to Common Core literacy standards and the C3 Framework for geographic reasoning and historical analysis.',
      },
      displayOrder: 4,
      published: true,
    },
  });

  console.log('  Lesson plans seeded.');
}

// =============================================================================
// MAIN
// =============================================================================

async function main() {
  console.log('Seeding Monmouth, NJ content...');

  await seedPeople();
  await seedPlaces();
  await seedEvents();
  await seedEventPeople();
  await seedStories();
  await seedLessons();

  console.log('Monmouth, NJ content seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
