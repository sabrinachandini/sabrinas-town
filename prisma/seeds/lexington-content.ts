import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const LEXINGTON_TOWN_ID = 'us-ma-lexington';

// =============================================================================
// PEOPLE
// =============================================================================

async function seedPeople() {
  console.log('  Seeding people...');

  // --- 4 Lexington-specific existing people (upsert with enriched bioLong) ---

  await prisma.person.upsert({
    where: { id: 'person-john-parker' },
    update: {
      bioLong: `John Parker was born in Lexington, Massachusetts, on July 13, 1729. He grew up on a farm in the town and served as a soldier during the French and Indian War, participating in the siege of Louisbourg in 1745 and later serving under Major Robert Rogers in campaigns along the northern frontier. These military experiences gave Parker familiarity with combat and small-unit tactics that would prove critical in April 1775. After the war, he returned to Lexington to farm and raise a family, becoming a respected member of the community.

Parker was elected captain of the Lexington militia training band, a position that reflected the trust his neighbors placed in him. By the spring of 1775, he was in poor health, suffering from what was almost certainly tuberculosis, and had only months to live. Despite his illness, he responded without hesitation when the alarm reached Lexington in the early hours of April 19. He mustered approximately 77 militiamen on the town common and waited in the pre-dawn darkness for the approaching British column of roughly 700 regulars under Lieutenant Colonel Francis Smith and Major John Pitcairn.

What happened next has been debated for 250 years. Parker formed his men on the Green, likely intending a show of defiance rather than a pitched battle against overwhelming odds. When the British column arrived, Pitcairn ordered the colonials to disperse. Parker, recognizing the impossibility of the situation, appears to have ordered his men to disperse but not to lay down their arms. A shot rang out — fired by whom, no one knows — and the British opened fire. Eight militiamen were killed and ten wounded. Parker survived and later that afternoon led his company in an ambush of the retreating British column near Fiske Hill, exacting a measure of revenge.

Parker died of tuberculosis on September 17, 1775, less than five months after the battle. He never had the opportunity to see the Revolution he helped ignite reach its conclusion.

WHY HE MATTERS TO LEXINGTON

Captain John Parker stands at the center of Lexington's identity. His decision to muster the militia on the Green — however futile in military terms — transformed an act of British enforcement into the opening confrontation of the American Revolution. The words attributed to him, ordering his men to stand their ground, have become part of American lore, though the exact phrasing is uncertain. Parker represents the ordinary citizen-soldier: a farmer, a veteran, a sick man who stood up because it was expected of him. Lexington's Minuteman statue, which stands on the Green, is modeled on Parker and has become one of the most recognized symbols of the Revolution.

- 1729: Born July 13 in Lexington, Massachusetts
- 1745-1763: Served in the French and Indian War, including the siege of Louisbourg
- 1775: Commanded the Lexington militia on April 19; led ambush of retreating British
- 1775: Died September 17 in Lexington of tuberculosis at age 46

SOURCES
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Galvin, John R. "The Minute Men: The First Fight — Myths and Realities of the American Revolution." Brassey's, 1989.
- Tourtellot, Arthur Bernon. "Lexington and Concord: The Beginning of the War of the American Revolution." W.W. Norton, 1959.`,
    },
    create: {
      id: 'person-john-parker',
      name: 'Captain John Parker',
      roles: ['Militia Captain', 'Farmer', 'Veteran'],
      bioShort: 'Captain of the Lexington militia (1729-1775) who commanded the colonial force on Lexington Green on the morning of April 19, 1775, in the opening engagement of the American Revolution.',
      bioLong: `John Parker was born in Lexington, Massachusetts, on July 13, 1729. He grew up on a farm in the town and served as a soldier during the French and Indian War, participating in the siege of Louisbourg in 1745 and later serving under Major Robert Rogers in campaigns along the northern frontier. These military experiences gave Parker familiarity with combat and small-unit tactics that would prove critical in April 1775. After the war, he returned to Lexington to farm and raise a family, becoming a respected member of the community.

Parker was elected captain of the Lexington militia training band, a position that reflected the trust his neighbors placed in him. By the spring of 1775, he was in poor health, suffering from what was almost certainly tuberculosis, and had only months to live. Despite his illness, he responded without hesitation when the alarm reached Lexington in the early hours of April 19. He mustered approximately 77 militiamen on the town common and waited in the pre-dawn darkness for the approaching British column of roughly 700 regulars under Lieutenant Colonel Francis Smith and Major John Pitcairn.

What happened next has been debated for 250 years. Parker formed his men on the Green, likely intending a show of defiance rather than a pitched battle against overwhelming odds. When the British column arrived, Pitcairn ordered the colonials to disperse. Parker, recognizing the impossibility of the situation, appears to have ordered his men to disperse but not to lay down their arms. A shot rang out — fired by whom, no one knows — and the British opened fire. Eight militiamen were killed and ten wounded. Parker survived and later that afternoon led his company in an ambush of the retreating British column near Fiske Hill, exacting a measure of revenge.

Parker died of tuberculosis on September 17, 1775, less than five months after the battle. He never had the opportunity to see the Revolution he helped ignite reach its conclusion.

WHY HE MATTERS TO LEXINGTON

Captain John Parker stands at the center of Lexington's identity. His decision to muster the militia on the Green — however futile in military terms — transformed an act of British enforcement into the opening confrontation of the American Revolution. The words attributed to him, ordering his men to stand their ground, have become part of American lore, though the exact phrasing is uncertain. Parker represents the ordinary citizen-soldier: a farmer, a veteran, a sick man who stood up because it was expected of him. Lexington's Minuteman statue, which stands on the Green, is modeled on Parker and has become one of the most recognized symbols of the Revolution.

- 1729: Born July 13 in Lexington, Massachusetts
- 1745-1763: Served in the French and Indian War, including the siege of Louisbourg
- 1775: Commanded the Lexington militia on April 19; led ambush of retreating British
- 1775: Died September 17 in Lexington of tuberculosis at age 46

SOURCES
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Galvin, John R. "The Minute Men: The First Fight — Myths and Realities of the American Revolution." Brassey's, 1989.
- Tourtellot, Arthur Bernon. "Lexington and Concord: The Beginning of the War of the American Revolution." W.W. Norton, 1959.`,
      birthYear: 1729,
      deathYear: 1775,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-jonas-parker' },
    update: {
      bioLong: `Jonas Parker was born around 1729 in Lexington, Massachusetts, and spent his life as a farmer in the town. He was a cousin of Captain John Parker and one of the older militiamen who mustered on the Green in the pre-dawn hours of April 19, 1775. Historical records describe him as a man of particular determination and defiance, and he reportedly declared that he would never run from the British.

Parker took his place in the militia line on the Green with his musket, ammunition, and a hat full of musket balls placed at his feet — a detail preserved in multiple depositions that suggests he intended to reload and continue fighting rather than retreat. When the British opened fire, Jonas Parker was hit and fell to the ground. According to eyewitness accounts, he attempted to reload his weapon while lying wounded. A British soldier ran him through with a bayonet, killing him on the spot. His death was one of the most vivid and frequently cited episodes of the engagement, illustrating both the ferocity of the British assault and the determination of the Lexington men.

Jonas Parker's death became a symbol of patriot resolve. The image of a wounded farmer trying to reload his musket while being bayoneted by a professional soldier captured the stark asymmetry of the encounter and helped galvanize colonial resistance in the days that followed. His sacrifice was memorialized in the depositions collected by the Provincial Congress within days of the battle.

WHY HE MATTERS TO LEXINGTON

Jonas Parker represents the unyielding spirit that Lexington claims as its heritage. His refusal to run, even as British regulars bore down on a vastly outnumbered militia, embodied a commitment to principle that transcended military calculation. The detail of the hat full of musket balls at his feet — an almost theatrical gesture of preparedness — has resonated through generations of retelling. He was not a commander or a politician but a farmer who stood his ground and paid the ultimate price.

- c.1729: Born in Lexington, Massachusetts
- 1775: Mustered on Lexington Green on April 19
- 1775: Killed on the Green after being shot and then bayoneted while attempting to reload
- 1775: Named in depositions collected by the Provincial Congress as a victim of British aggression

SOURCES
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Tourtellot, Arthur Bernon. "Lexington and Concord: The Beginning of the War of the American Revolution." W.W. Norton, 1959.
- Coburn, Frank Warren. "The Battle of April 19, 1775." Published by the author, Lexington, MA, 1912.`,
    },
    create: {
      id: 'person-jonas-parker',
      name: 'Jonas Parker',
      roles: ['Militiaman', 'Farmer'],
      bioShort: 'Lexington militiaman (c.1729-1775) killed on the Green on April 19, 1775, after being shot and bayoneted while attempting to reload his musket.',
      bioLong: `Jonas Parker was born around 1729 in Lexington, Massachusetts, and spent his life as a farmer in the town. He was a cousin of Captain John Parker and one of the older militiamen who mustered on the Green in the pre-dawn hours of April 19, 1775. Historical records describe him as a man of particular determination and defiance, and he reportedly declared that he would never run from the British.

Parker took his place in the militia line on the Green with his musket, ammunition, and a hat full of musket balls placed at his feet — a detail preserved in multiple depositions that suggests he intended to reload and continue fighting rather than retreat. When the British opened fire, Jonas Parker was hit and fell to the ground. According to eyewitness accounts, he attempted to reload his weapon while lying wounded. A British soldier ran him through with a bayonet, killing him on the spot. His death was one of the most vivid and frequently cited episodes of the engagement, illustrating both the ferocity of the British assault and the determination of the Lexington men.

Jonas Parker's death became a symbol of patriot resolve. The image of a wounded farmer trying to reload his musket while being bayoneted by a professional soldier captured the stark asymmetry of the encounter and helped galvanize colonial resistance in the days that followed. His sacrifice was memorialized in the depositions collected by the Provincial Congress within days of the battle.

WHY HE MATTERS TO LEXINGTON

Jonas Parker represents the unyielding spirit that Lexington claims as its heritage. His refusal to run, even as British regulars bore down on a vastly outnumbered militia, embodied a commitment to principle that transcended military calculation. The detail of the hat full of musket balls at his feet — an almost theatrical gesture of preparedness — has resonated through generations of retelling. He was not a commander or a politician but a farmer who stood his ground and paid the ultimate price.

- c.1729: Born in Lexington, Massachusetts
- 1775: Mustered on Lexington Green on April 19
- 1775: Killed on the Green after being shot and then bayoneted while attempting to reload
- 1775: Named in depositions collected by the Provincial Congress as a victim of British aggression

SOURCES
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Tourtellot, Arthur Bernon. "Lexington and Concord: The Beginning of the War of the American Revolution." W.W. Norton, 1959.
- Coburn, Frank Warren. "The Battle of April 19, 1775." Published by the author, Lexington, MA, 1912.`,
      birthYear: 1729,
      deathYear: 1775,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-jonathan-harrington' },
    update: {
      bioLong: `Jonathan Harrington was born in 1741 in Lexington, Massachusetts, where he lived and farmed throughout his life. He was a fifer and militiaman in the Lexington training band. On the morning of April 19, 1775, he was among the approximately 77 men who mustered on Lexington Green under Captain John Parker to face the approaching British column.

Harrington's death became one of the most enduring images of the battle. When the British opened fire on the Green, Harrington was struck by a musket ball. Mortally wounded, he did not die instantly. His house stood on the edge of the Green, directly across from where the militia had formed. According to multiple accounts, Harrington crawled across the grass toward his own doorstep, where his wife and son were watching the confrontation. He reached the threshold of his house and died at his wife's feet. The image of a dying man dragging himself home across the village common has become one of the most frequently retold episodes of April 19.

Harrington was one of eight Lexington men killed that morning. His story was recorded in the depositions taken in the days after the battle and has been repeated in virtually every account of the engagement since. The Harrington house, or a house on its site, still stands on the edge of the Green, serving as a tangible connection to the events of that morning.

WHY HE MATTERS TO LEXINGTON

Jonathan Harrington's death captures the human cost of the battle in a way that statistics cannot. The image of a mortally wounded man crawling home to die on his own doorstep, in full view of his family, distills the horror of that morning into a single, unforgettable scene. His story reminds visitors to the Green that the men who stood there were not abstract figures but neighbors, husbands, and fathers whose homes lined the very ground where they fell. The distance between where Harrington was shot and where he died — perhaps 100 yards across the Green — has become a measure of both his determination and his suffering.

- 1741: Born in Lexington, Massachusetts
- 1775: Mustered on Lexington Green on April 19
- 1775: Mortally wounded by British musket fire; crawled to his doorstep and died
- 1775: Named in depositions collected by the Provincial Congress

SOURCES
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Tourtellot, Arthur Bernon. "Lexington and Concord: The Beginning of the War of the American Revolution." W.W. Norton, 1959.
- Kehoe, Vincent J-R. "We Were There! April 19th, 1775." Minuteman Press, 1975.`,
    },
    create: {
      id: 'person-jonathan-harrington',
      name: 'Jonathan Harrington',
      roles: ['Militiaman', 'Farmer'],
      bioShort: 'Lexington militiaman (1741-1775) who was mortally wounded on the Green and crawled to die on his own doorstep in view of his wife and son.',
      bioLong: `Jonathan Harrington was born in 1741 in Lexington, Massachusetts, where he lived and farmed throughout his life. He was a fifer and militiaman in the Lexington training band. On the morning of April 19, 1775, he was among the approximately 77 men who mustered on Lexington Green under Captain John Parker to face the approaching British column.

Harrington's death became one of the most enduring images of the battle. When the British opened fire on the Green, Harrington was struck by a musket ball. Mortally wounded, he did not die instantly. His house stood on the edge of the Green, directly across from where the militia had formed. According to multiple accounts, Harrington crawled across the grass toward his own doorstep, where his wife and son were watching the confrontation. He reached the threshold of his house and died at his wife's feet. The image of a dying man dragging himself home across the village common has become one of the most frequently retold episodes of April 19.

Harrington was one of eight Lexington men killed that morning. His story was recorded in the depositions taken in the days after the battle and has been repeated in virtually every account of the engagement since. The Harrington house, or a house on its site, still stands on the edge of the Green, serving as a tangible connection to the events of that morning.

WHY HE MATTERS TO LEXINGTON

Jonathan Harrington's death captures the human cost of the battle in a way that statistics cannot. The image of a mortally wounded man crawling home to die on his own doorstep, in full view of his family, distills the horror of that morning into a single, unforgettable scene. His story reminds visitors to the Green that the men who stood there were not abstract figures but neighbors, husbands, and fathers whose homes lined the very ground where they fell. The distance between where Harrington was shot and where he died — perhaps 100 yards across the Green — has become a measure of both his determination and his suffering.

- 1741: Born in Lexington, Massachusetts
- 1775: Mustered on Lexington Green on April 19
- 1775: Mortally wounded by British musket fire; crawled to his doorstep and died
- 1775: Named in depositions collected by the Provincial Congress

SOURCES
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Tourtellot, Arthur Bernon. "Lexington and Concord: The Beginning of the War of the American Revolution." W.W. Norton, 1959.
- Kehoe, Vincent J-R. "We Were There! April 19th, 1775." Minuteman Press, 1975.`,
      birthYear: 1741,
      deathYear: 1775,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-prince-estabrook' },
    update: {
      bioLong: `Prince Estabrook was an enslaved African American man living in Lexington, Massachusetts, in the household of Benjamin Estabrook. The details of his early life are largely lost to the historical record, as was typical for enslaved people in colonial New England. What is known is that he was a member of the Lexington militia training band — an unusual but not unheard-of status for an enslaved man in Massachusetts — and that he mustered on Lexington Green on the morning of April 19, 1775, alongside his free white neighbors.

When the British opened fire on the Green, Estabrook was wounded. He was identified in the depositions collected by the Provincial Congress as one of the casualties, recorded as "a Negro Man" who was wounded in the engagement. His name appears in the muster rolls and in subsequent pension records. Estabrook survived his wounds and went on to serve in the Continental Army during the war, eventually gaining his freedom. Records indicate he enlisted for several additional terms of service during the conflict.

Estabrook's presence on the Green raises profound questions about the meaning of the Revolution for those who were not free. He fought in a battle for liberty while he himself was held in bondage. His willingness to serve — and the militia's willingness to have him in their ranks — speaks to the complex social realities of colonial Lexington, where the line between enslaved and free was sometimes permeable in ways that formal law did not acknowledge. After the war, Massachusetts effectively abolished slavery through a series of court decisions in the 1780s, but Estabrook's service predated those rulings by nearly a decade.

WHY HE MATTERS TO LEXINGTON

Prince Estabrook is a figure of enormous symbolic importance to Lexington's history. He was the first Black American wounded in the American Revolution, and his presence on the Green on April 19 compels a reckoning with the contradictions at the heart of the patriot cause. The men who gathered on the Green that morning spoke of liberty and the rights of Englishmen, yet at least one among them was enslaved. Estabrook's story has received increasing attention in recent decades as historians have worked to recover the experiences of African Americans in the Revolution. A historical marker on the Green now commemorates his service, an acknowledgment that was a long time coming.

- c.1740s: Born, likely in Massachusetts; enslaved in the household of Benjamin Estabrook
- 1775: Wounded on Lexington Green on April 19, becoming the first Black American casualty of the Revolution
- 1775-1783: Served in the Continental Army during the Revolutionary War
- c.1783: Gained freedom, likely through military service and the gradual abolition of slavery in Massachusetts

SOURCES
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Nell, William Cooper. "The Colored Patriots of the American Revolution." Robert F. Wallcut, 1855.
- Quintal, George Jr. "Patriots of Color: A Peculiar Beauty and Merit — African Americans and Native Americans at Battle Road and Bunker Hill." National Park Service, 2004.`,
    },
    create: {
      id: 'person-prince-estabrook',
      name: 'Prince Estabrook',
      roles: ['Enslaved Person', 'Militiaman', 'Soldier'],
      bioShort: 'Enslaved African American militiaman (c.1740s-after 1783) who was wounded on Lexington Green on April 19, 1775, becoming the first Black American casualty of the Revolution.',
      bioLong: `Prince Estabrook was an enslaved African American man living in Lexington, Massachusetts, in the household of Benjamin Estabrook. The details of his early life are largely lost to the historical record, as was typical for enslaved people in colonial New England. What is known is that he was a member of the Lexington militia training band — an unusual but not unheard-of status for an enslaved man in Massachusetts — and that he mustered on Lexington Green on the morning of April 19, 1775, alongside his free white neighbors.

When the British opened fire on the Green, Estabrook was wounded. He was identified in the depositions collected by the Provincial Congress as one of the casualties, recorded as "a Negro Man" who was wounded in the engagement. His name appears in the muster rolls and in subsequent pension records. Estabrook survived his wounds and went on to serve in the Continental Army during the war, eventually gaining his freedom. Records indicate he enlisted for several additional terms of service during the conflict.

Estabrook's presence on the Green raises profound questions about the meaning of the Revolution for those who were not free. He fought in a battle for liberty while he himself was held in bondage. His willingness to serve — and the militia's willingness to have him in their ranks — speaks to the complex social realities of colonial Lexington, where the line between enslaved and free was sometimes permeable in ways that formal law did not acknowledge. After the war, Massachusetts effectively abolished slavery through a series of court decisions in the 1780s, but Estabrook's service predated those rulings by nearly a decade.

WHY HE MATTERS TO LEXINGTON

Prince Estabrook is a figure of enormous symbolic importance to Lexington's history. He was the first Black American wounded in the American Revolution, and his presence on the Green on April 19 compels a reckoning with the contradictions at the heart of the patriot cause. The men who gathered on the Green that morning spoke of liberty and the rights of Englishmen, yet at least one among them was enslaved. Estabrook's story has received increasing attention in recent decades as historians have worked to recover the experiences of African Americans in the Revolution. A historical marker on the Green now commemorates his service, an acknowledgment that was a long time coming.

- c.1740s: Born, likely in Massachusetts; enslaved in the household of Benjamin Estabrook
- 1775: Wounded on Lexington Green on April 19, becoming the first Black American casualty of the Revolution
- 1775-1783: Served in the Continental Army during the Revolutionary War
- c.1783: Gained freedom, likely through military service and the gradual abolition of slavery in Massachusetts

SOURCES
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Nell, William Cooper. "The Colored Patriots of the American Revolution." Robert F. Wallcut, 1855.
- Quintal, George Jr. "Patriots of Color: A Peculiar Beauty and Merit — African Americans and Native Americans at Battle Road and Bunker Hill." National Park Service, 2004.`,
      birthYear: 1740,
      deathYear: 1830,
      verificationStatus: 'VERIFIED',
    },
  });

  // --- 8 New Lexington people ---

  await prisma.person.upsert({
    where: { id: 'person-jonas-clarke' },
    update: {
      bioLong: `Jonas Clarke was born on December 25, 1730, in Newton, Massachusetts. He graduated from Harvard College in 1752 and was ordained as the minister of the First Parish Church in Lexington in 1755, a position he held for fifty years until his death. Clarke was not only the spiritual leader of the town but its most influential intellectual and political figure. His parsonage, located about a quarter mile from the Green along the road toward Bedford, became one of the most important sites in the prelude to the Revolution.

Clarke was a prolific writer who composed sermons, political tracts, and correspondence that articulated the patriot position to his congregation and beyond. He served on Lexington's Committee of Safety and was instrumental in shaping the town's political stance against British authority. His close relationships with Samuel Adams and John Hancock brought these leading figures of the independence movement to Lexington repeatedly in the early 1770s, and it was at Clarke's parsonage that Adams and Hancock were staying on the night of April 18-19, 1775, when Paul Revere arrived with his warning.

On the night of the alarm, Clarke initially resisted admitting Revere, who arrived after midnight demanding entry. A sentry posted by Hancock's relatives, Sergeant William Munroe, told Revere not to make so much noise, to which Revere famously replied that the noise would soon be something more alarming than his voice. Clarke admitted Revere once his identity and message were confirmed. In the hours that followed, the Clarke parsonage became the nerve center of the Lexington response, with Adams and Hancock debating whether to stay and fight or flee.

WHY HE MATTERS TO LEXINGTON

Jonas Clarke was the intellectual and moral backbone of revolutionary Lexington. For two decades before the battle, he shaped the political consciousness of the town through his sermons, which blended Calvinist theology with Whig political philosophy. His parsonage was the meeting point where the great currents of the Revolution converged on the night of April 18 — Revere's ride, Adams's politics, Hancock's prestige, and the local militia's resolve. Clarke continued to serve as Lexington's minister and conscience for decades after the war, dying in 1805 as one of the last surviving links to the town's revolutionary generation.

- 1730: Born December 25 in Newton, Massachusetts
- 1752: Graduated from Harvard College
- 1755: Ordained as minister of the First Parish Church, Lexington
- 1775: Hosted Adams and Hancock at his parsonage on the night of April 18-19
- 1805: Died November 15 in Lexington, having served as minister for 50 years

SOURCES
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Hudson, Charles. "History of the Town of Lexington." Houghton Mifflin, 1913.
- Phinney, Elias. "History of the Battle at Lexington." Phelps and Farnham, 1825.`,
    },
    create: {
      id: 'person-jonas-clarke',
      name: 'Jonas Clarke',
      roles: ['Minister', 'Political Leader', 'Writer'],
      bioShort: 'Minister of the First Parish Church in Lexington (1730-1805) who hosted Adams and Hancock at his parsonage and shaped the town\'s political resistance through fifty years of sermons.',
      bioLong: `Jonas Clarke was born on December 25, 1730, in Newton, Massachusetts. He graduated from Harvard College in 1752 and was ordained as the minister of the First Parish Church in Lexington in 1755, a position he held for fifty years until his death. Clarke was not only the spiritual leader of the town but its most influential intellectual and political figure. His parsonage, located about a quarter mile from the Green along the road toward Bedford, became one of the most important sites in the prelude to the Revolution.

Clarke was a prolific writer who composed sermons, political tracts, and correspondence that articulated the patriot position to his congregation and beyond. He served on Lexington's Committee of Safety and was instrumental in shaping the town's political stance against British authority. His close relationships with Samuel Adams and John Hancock brought these leading figures of the independence movement to Lexington repeatedly in the early 1770s, and it was at Clarke's parsonage that Adams and Hancock were staying on the night of April 18-19, 1775, when Paul Revere arrived with his warning.

On the night of the alarm, Clarke initially resisted admitting Revere, who arrived after midnight demanding entry. A sentry posted by Hancock's relatives, Sergeant William Munroe, told Revere not to make so much noise, to which Revere famously replied that the noise would soon be something more alarming than his voice. Clarke admitted Revere once his identity and message were confirmed. In the hours that followed, the Clarke parsonage became the nerve center of the Lexington response, with Adams and Hancock debating whether to stay and fight or flee.

WHY HE MATTERS TO LEXINGTON

Jonas Clarke was the intellectual and moral backbone of revolutionary Lexington. For two decades before the battle, he shaped the political consciousness of the town through his sermons, which blended Calvinist theology with Whig political philosophy. His parsonage was the meeting point where the great currents of the Revolution converged on the night of April 18 — Revere's ride, Adams's politics, Hancock's prestige, and the local militia's resolve. Clarke continued to serve as Lexington's minister and conscience for decades after the war, dying in 1805 as one of the last surviving links to the town's revolutionary generation.

- 1730: Born December 25 in Newton, Massachusetts
- 1752: Graduated from Harvard College
- 1755: Ordained as minister of the First Parish Church, Lexington
- 1775: Hosted Adams and Hancock at his parsonage on the night of April 18-19
- 1805: Died November 15 in Lexington, having served as minister for 50 years

SOURCES
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Hudson, Charles. "History of the Town of Lexington." Houghton Mifflin, 1913.
- Phinney, Elias. "History of the Battle at Lexington." Phelps and Farnham, 1825.`,
      birthYear: 1730,
      deathYear: 1805,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-william-dawes' },
    update: {
      bioLong: `William Dawes was born on April 6, 1745, in Boston, Massachusetts. He was a tanner by trade who lived in the North End and was active in the patriot movement. On the night of April 18, 1775, Dr. Joseph Warren dispatched Dawes on the same mission as Paul Revere — to ride to Lexington and warn Samuel Adams and John Hancock of the approaching British column — but by a different route. While Revere crossed the Charles River by boat and rode through Charlestown, Dawes took the longer land route through Boston Neck, Roxbury, Brookline, and Cambridge.

Dawes's route was more dangerous in one respect: he had to pass through the British checkpoint at Boston Neck, the narrow isthmus connecting Boston to the mainland. He succeeded, likely by blending in with soldiers or farmers known to the sentries, and rode the roughly seventeen miles to Lexington. He arrived at the Clarke parsonage approximately thirty minutes after Revere, around 12:30 a.m. on April 19. The two riders then set out together for Concord, joined by Dr. Samuel Prescott, to carry the alarm further west.

Between Lexington and Lincoln, the three riders encountered a British mounted patrol. Revere was captured, Prescott escaped over a stone wall, and Dawes turned his horse and galloped back toward Lexington. In the confusion, he was thrown from his horse and lost his watch and his mount. He made his way back to Lexington on foot and eventually returned to Boston. Unlike Revere, Dawes received little recognition in his lifetime or for many decades afterward, a disparity made permanent by Henry Wadsworth Longfellow's 1861 poem, which mentioned only Revere.

WHY HE MATTERS TO LEXINGTON

William Dawes was the insurance policy that ensured the warning would reach Lexington. Warren's decision to send two riders by different routes was a calculated redundancy — if one was captured, the other might get through. That both arrived demonstrated the effectiveness of the patriot intelligence network. Dawes's relative obscurity in popular memory is itself a historical lesson: fame often depends not on the deed but on who writes the poem. His contribution to the events of April 19 was equal in importance to Revere's, even if history has not treated it equally.

- 1745: Born April 6 in Boston, Massachusetts
- 1775: Rode from Boston through Roxbury and Cambridge to warn Lexington on April 18-19
- 1775: Escaped from British patrol between Lexington and Concord; thrown from horse
- 1799: Died February 25 in Boston at age 53

SOURCES
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Holland, Henry W. "William Dawes and His Ride with Paul Revere." John Wilson and Son, 1878.
- Tourtellot, Arthur Bernon. "Lexington and Concord: The Beginning of the War of the American Revolution." W.W. Norton, 1959.`,
    },
    create: {
      id: 'person-william-dawes',
      name: 'William Dawes',
      roles: ['Tanner', 'Messenger', 'Patriot'],
      bioShort: 'Boston tanner and patriot messenger (1745-1799) who rode the land route to Lexington on April 18, 1775, carrying the same warning as Paul Revere but by a different path.',
      bioLong: `William Dawes was born on April 6, 1745, in Boston, Massachusetts. He was a tanner by trade who lived in the North End and was active in the patriot movement. On the night of April 18, 1775, Dr. Joseph Warren dispatched Dawes on the same mission as Paul Revere — to ride to Lexington and warn Samuel Adams and John Hancock of the approaching British column — but by a different route. While Revere crossed the Charles River by boat and rode through Charlestown, Dawes took the longer land route through Boston Neck, Roxbury, Brookline, and Cambridge.

Dawes's route was more dangerous in one respect: he had to pass through the British checkpoint at Boston Neck, the narrow isthmus connecting Boston to the mainland. He succeeded, likely by blending in with soldiers or farmers known to the sentries, and rode the roughly seventeen miles to Lexington. He arrived at the Clarke parsonage approximately thirty minutes after Revere, around 12:30 a.m. on April 19. The two riders then set out together for Concord, joined by Dr. Samuel Prescott, to carry the alarm further west.

Between Lexington and Lincoln, the three riders encountered a British mounted patrol. Revere was captured, Prescott escaped over a stone wall, and Dawes turned his horse and galloped back toward Lexington. In the confusion, he was thrown from his horse and lost his watch and his mount. He made his way back to Lexington on foot and eventually returned to Boston. Unlike Revere, Dawes received little recognition in his lifetime or for many decades afterward, a disparity made permanent by Henry Wadsworth Longfellow's 1861 poem, which mentioned only Revere.

WHY HE MATTERS TO LEXINGTON

William Dawes was the insurance policy that ensured the warning would reach Lexington. Warren's decision to send two riders by different routes was a calculated redundancy — if one was captured, the other might get through. That both arrived demonstrated the effectiveness of the patriot intelligence network. Dawes's relative obscurity in popular memory is itself a historical lesson: fame often depends not on the deed but on who writes the poem. His contribution to the events of April 19 was equal in importance to Revere's, even if history has not treated it equally.

- 1745: Born April 6 in Boston, Massachusetts
- 1775: Rode from Boston through Roxbury and Cambridge to warn Lexington on April 18-19
- 1775: Escaped from British patrol between Lexington and Concord; thrown from horse
- 1799: Died February 25 in Boston at age 53

SOURCES
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Holland, Henry W. "William Dawes and His Ride with Paul Revere." John Wilson and Son, 1878.
- Tourtellot, Arthur Bernon. "Lexington and Concord: The Beginning of the War of the American Revolution." W.W. Norton, 1959.`,
      birthYear: 1745,
      deathYear: 1799,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-samuel-prescott' },
    update: {
      bioLong: `Samuel Prescott was born on August 19, 1751, in Concord, Massachusetts, the son of Dr. Abel Prescott, a prominent physician. He followed his father into the medical profession and practiced in Concord. On the night of April 18, 1775, Prescott happened to be in Lexington, apparently returning from a social visit to a young woman in the town. He encountered Paul Revere and William Dawes as they were riding from Lexington toward Concord to extend the alarm, and joined them on the road.

The chance meeting proved critical. Between Lexington and Lincoln, the three riders were stopped by a British mounted patrol. Revere was captured and Dawes was unhorsed, but Prescott, who knew the local terrain intimately, jumped his horse over a low stone wall and escaped into the darkness. He rode on to Concord alone, arriving in time to raise the alarm. His warning gave the Concord militia and minutemen the time they needed to muster, hide their military stores, and prepare the defense that would result in the confrontation at the North Bridge.

Without Prescott's completion of the ride, the British might have reached Concord's supply caches before they could be dispersed. His knowledge of the local landscape — the fields, walls, and back roads of the area between Lexington and Concord — was what saved the mission. After the events of April 19, Prescott served as a surgeon in the Continental Army. He was captured at some point during the war, and the circumstances of his death remain uncertain; he is believed to have died in a British prison in Halifax, Nova Scotia, around 1777.

WHY HE MATTERS TO LEXINGTON

Samuel Prescott is the forgotten rider of April 18-19, yet he was the one who actually completed the mission to Concord. His chance presence in Lexington that night — visiting a sweetheart, according to tradition — was one of those accidents of history that altered the course of events. Without his warning, the Concord militia would not have been prepared, and the engagement at the North Bridge might not have happened as it did. His story links Lexington and Concord in the chain of alarm that made the day's events possible.

- 1751: Born August 19 in Concord, Massachusetts
- 1775: Joined Revere and Dawes on the road from Lexington to Concord on April 18-19
- 1775: Escaped British patrol and completed the ride to Concord, raising the alarm
- c.1777: Believed to have died in British captivity in Halifax, Nova Scotia

SOURCES
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Gross, Robert A. "The Minutemen and Their World." Hill and Wang, 1976.
- Tourtellot, Arthur Bernon. "Lexington and Concord: The Beginning of the War of the American Revolution." W.W. Norton, 1959.`,
    },
    create: {
      id: 'person-samuel-prescott',
      name: 'Samuel Prescott',
      roles: ['Physician', 'Messenger', 'Patriot'],
      bioShort: 'Concord physician (1751-c.1777) who joined Revere and Dawes on the road from Lexington and was the only rider to reach Concord with the alarm on April 19, 1775.',
      bioLong: `Samuel Prescott was born on August 19, 1751, in Concord, Massachusetts, the son of Dr. Abel Prescott, a prominent physician. He followed his father into the medical profession and practiced in Concord. On the night of April 18, 1775, Prescott happened to be in Lexington, apparently returning from a social visit to a young woman in the town. He encountered Paul Revere and William Dawes as they were riding from Lexington toward Concord to extend the alarm, and joined them on the road.

The chance meeting proved critical. Between Lexington and Lincoln, the three riders were stopped by a British mounted patrol. Revere was captured and Dawes was unhorsed, but Prescott, who knew the local terrain intimately, jumped his horse over a low stone wall and escaped into the darkness. He rode on to Concord alone, arriving in time to raise the alarm. His warning gave the Concord militia and minutemen the time they needed to muster, hide their military stores, and prepare the defense that would result in the confrontation at the North Bridge.

Without Prescott's completion of the ride, the British might have reached Concord's supply caches before they could be dispersed. His knowledge of the local landscape — the fields, walls, and back roads of the area between Lexington and Concord — was what saved the mission. After the events of April 19, Prescott served as a surgeon in the Continental Army. He was captured at some point during the war, and the circumstances of his death remain uncertain; he is believed to have died in a British prison in Halifax, Nova Scotia, around 1777.

WHY HE MATTERS TO LEXINGTON

Samuel Prescott is the forgotten rider of April 18-19, yet he was the one who actually completed the mission to Concord. His chance presence in Lexington that night — visiting a sweetheart, according to tradition — was one of those accidents of history that altered the course of events. Without his warning, the Concord militia would not have been prepared, and the engagement at the North Bridge might not have happened as it did. His story links Lexington and Concord in the chain of alarm that made the day's events possible.

- 1751: Born August 19 in Concord, Massachusetts
- 1775: Joined Revere and Dawes on the road from Lexington to Concord on April 18-19
- 1775: Escaped British patrol and completed the ride to Concord, raising the alarm
- c.1777: Believed to have died in British captivity in Halifax, Nova Scotia

SOURCES
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Gross, Robert A. "The Minutemen and Their World." Hill and Wang, 1976.
- Tourtellot, Arthur Bernon. "Lexington and Concord: The Beginning of the War of the American Revolution." W.W. Norton, 1959.`,
      birthYear: 1751,
      deathYear: 1777,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-ebenezer-munroe' },
    update: {
      bioLong: `Ebenezer Munroe was born around 1752 in Lexington, Massachusetts, into one of the town's most prominent families. The Munroes were deeply woven into Lexington's civic and military life, and Ebenezer served as a sergeant in the Lexington militia under Captain John Parker. His role as a non-commissioned officer meant he was responsible for drilling the men, maintaining discipline, and ensuring readiness — duties that took on urgent significance in the tense months before April 1775.

On the night of April 18, Munroe was posted as a sentry outside the Clarke parsonage, where Adams and Hancock were staying. When Paul Revere arrived after midnight, banging on the door and shouting his warning, it was Munroe who told him not to make so much noise, as the family had retired for the night. Revere's sharp reply about the noise that was coming became one of the memorable exchanges of the evening. After the alarm was confirmed, Munroe participated in mustering the militia and took his position on the Green.

Munroe survived the engagement on the Green and was among the Lexington men who reassembled later in the day to ambush the retreating British column. His depositions about the events of April 19 provide some of the most detailed eyewitness accounts of what happened that morning. He continued to serve throughout the Revolutionary War and returned to Lexington after the conflict, where he remained a respected member of the community for decades.

WHY HE MATTERS TO LEXINGTON

Ebenezer Munroe was the reliable backbone of the Lexington militia — the sergeant who kept the company functioning while Captain Parker made the large decisions. His presence at the Clarke parsonage on the night of the alarm places him at the intersection of the ride and the muster, making him a witness to both phases of the night's events. His depositions are among the most important primary sources for understanding what happened on the Green, and his exchange with Revere at the parsonage door has become one of the iconic moments of April 18.

- c.1752: Born in Lexington, Massachusetts
- 1775: Served as sentry at Clarke parsonage on the night of April 18; confronted Paul Revere
- 1775: Fought on Lexington Green and during the British retreat on April 19
- 1775: Provided depositions about the battle to the Provincial Congress
- After 1783: Returned to Lexington after the war

SOURCES
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Hudson, Charles. "History of the Town of Lexington." Houghton Mifflin, 1913.
- Coburn, Frank Warren. "The Battle of April 19, 1775." Published by the author, Lexington, MA, 1912.`,
    },
    create: {
      id: 'person-ebenezer-munroe',
      name: 'Ebenezer Munroe',
      roles: ['Militia Sergeant', 'Farmer', 'Sentry'],
      bioShort: 'Sergeant of the Lexington militia (c.1752-after 1783) who served as sentry at the Clarke parsonage the night of the alarm and fought on the Green on April 19, 1775.',
      bioLong: `Ebenezer Munroe was born around 1752 in Lexington, Massachusetts, into one of the town's most prominent families. The Munroes were deeply woven into Lexington's civic and military life, and Ebenezer served as a sergeant in the Lexington militia under Captain John Parker. His role as a non-commissioned officer meant he was responsible for drilling the men, maintaining discipline, and ensuring readiness — duties that took on urgent significance in the tense months before April 1775.

On the night of April 18, Munroe was posted as a sentry outside the Clarke parsonage, where Adams and Hancock were staying. When Paul Revere arrived after midnight, banging on the door and shouting his warning, it was Munroe who told him not to make so much noise, as the family had retired for the night. Revere's sharp reply about the noise that was coming became one of the memorable exchanges of the evening. After the alarm was confirmed, Munroe participated in mustering the militia and took his position on the Green.

Munroe survived the engagement on the Green and was among the Lexington men who reassembled later in the day to ambush the retreating British column. His depositions about the events of April 19 provide some of the most detailed eyewitness accounts of what happened that morning. He continued to serve throughout the Revolutionary War and returned to Lexington after the conflict, where he remained a respected member of the community for decades.

WHY HE MATTERS TO LEXINGTON

Ebenezer Munroe was the reliable backbone of the Lexington militia — the sergeant who kept the company functioning while Captain Parker made the large decisions. His presence at the Clarke parsonage on the night of the alarm places him at the intersection of the ride and the muster, making him a witness to both phases of the night's events. His depositions are among the most important primary sources for understanding what happened on the Green, and his exchange with Revere at the parsonage door has become one of the iconic moments of April 18.

- c.1752: Born in Lexington, Massachusetts
- 1775: Served as sentry at Clarke parsonage on the night of April 18; confronted Paul Revere
- 1775: Fought on Lexington Green and during the British retreat on April 19
- 1775: Provided depositions about the battle to the Provincial Congress
- After 1783: Returned to Lexington after the war

SOURCES
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Hudson, Charles. "History of the Town of Lexington." Houghton Mifflin, 1913.
- Coburn, Frank Warren. "The Battle of April 19, 1775." Published by the author, Lexington, MA, 1912.`,
      birthYear: 1752,
      deathYear: 1825,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-robert-munroe' },
    update: {
      bioLong: `Robert Munroe was born around 1710 in Scotland, making him approximately sixty-five years old on the morning of April 19, 1775 — the oldest man killed on Lexington Green. Munroe had served as a soldier during the French and Indian War and had reportedly fought at the siege of Louisbourg in 1745, the same campaign in which the much younger John Parker also served. By 1775, he was a veteran of three decades of colonial military service and one of the most experienced soldiers in Lexington.

Despite his age and the fact that younger men filled the militia's active rolls, Munroe insisted on mustering with the company on the Green. His presence that morning was a statement of defiance and duty that reflected the communal nature of the militia system — men of all ages answered the call. When the British opened fire, Munroe was among those killed. His death, at such an advanced age and after a lifetime of military service to the crown and then the colony, underscored the breadth of Lexington's sacrifice.

Munroe was buried in the Old Burying Ground in Lexington, where his gravestone can still be seen. The stone, worn by centuries of New England weather, stands as one of the tangible connections between the present and the morning of April 19. His name appears on the Revolutionary Monument on the Green, alongside the other seven men killed that day.

WHY HE MATTERS TO LEXINGTON

Robert Munroe's presence on the Green demonstrates that the militia was not merely a company of young hotheads but a cross-section of the entire community. At sixty-five, Munroe had no military obligation to muster, yet he came. His Scottish birth and his prior service in the French and Indian War connect Lexington's story to the broader currents of the British Empire — a man who had once fought for the crown now stood against it. His gravestone in the Old Burying Ground is among the most visited memorials in Lexington.

- c.1710: Born in Scotland
- 1745: Served at the siege of Louisbourg during the French and Indian War
- 1775: Killed on Lexington Green on April 19 as the oldest casualty of the battle
- 1775: Buried in the Old Burying Ground, Lexington

SOURCES
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Hudson, Charles. "History of the Town of Lexington." Houghton Mifflin, 1913.
- Coburn, Frank Warren. "The Battle of April 19, 1775." Published by the author, Lexington, MA, 1912.`,
    },
    create: {
      id: 'person-robert-munroe',
      name: 'Robert Munroe',
      roles: ['Militiaman', 'Veteran', 'Farmer'],
      bioShort: 'Scottish-born veteran (c.1710-1775) who was the oldest man killed on Lexington Green on April 19, 1775, having previously served at the siege of Louisbourg in the French and Indian War.',
      bioLong: `Robert Munroe was born around 1710 in Scotland, making him approximately sixty-five years old on the morning of April 19, 1775 — the oldest man killed on Lexington Green. Munroe had served as a soldier during the French and Indian War and had reportedly fought at the siege of Louisbourg in 1745, the same campaign in which the much younger John Parker also served. By 1775, he was a veteran of three decades of colonial military service and one of the most experienced soldiers in Lexington.

Despite his age and the fact that younger men filled the militia's active rolls, Munroe insisted on mustering with the company on the Green. His presence that morning was a statement of defiance and duty that reflected the communal nature of the militia system — men of all ages answered the call. When the British opened fire, Munroe was among those killed. His death, at such an advanced age and after a lifetime of military service to the crown and then the colony, underscored the breadth of Lexington's sacrifice.

Munroe was buried in the Old Burying Ground in Lexington, where his gravestone can still be seen. The stone, worn by centuries of New England weather, stands as one of the tangible connections between the present and the morning of April 19. His name appears on the Revolutionary Monument on the Green, alongside the other seven men killed that day.

WHY HE MATTERS TO LEXINGTON

Robert Munroe's presence on the Green demonstrates that the militia was not merely a company of young hotheads but a cross-section of the entire community. At sixty-five, Munroe had no military obligation to muster, yet he came. His Scottish birth and his prior service in the French and Indian War connect Lexington's story to the broader currents of the British Empire — a man who had once fought for the crown now stood against it. His gravestone in the Old Burying Ground is among the most visited memorials in Lexington.

- c.1710: Born in Scotland
- 1745: Served at the siege of Louisbourg during the French and Indian War
- 1775: Killed on Lexington Green on April 19 as the oldest casualty of the battle
- 1775: Buried in the Old Burying Ground, Lexington

SOURCES
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Hudson, Charles. "History of the Town of Lexington." Houghton Mifflin, 1913.
- Coburn, Frank Warren. "The Battle of April 19, 1775." Published by the author, Lexington, MA, 1912.`,
      birthYear: 1710,
      deathYear: 1775,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-sylvanus-wood' },
    update: {
      bioLong: `Sylvanus Wood was born around 1750 in Woburn, Massachusetts, and was a young man of approximately twenty-five when the events of April 19, 1775, unfolded. He was not a Lexington resident but was present in the area on the morning of the battle, having responded to the alarm that spread through the Middlesex County towns during the night. His principal significance to the historical record lies in the detailed deposition he provided about the events on Lexington Green, which became one of the most important eyewitness accounts of who fired first.

Wood's deposition, given under oath, described the scene on the Green as the British column arrived. He recounted seeing the British officers riding ahead of the column and ordering the militia to disperse, followed by the first shots and the chaotic volley that killed and wounded the Lexington men. His account was particularly valuable because he claimed to have had a clear view of the action and described the sequence of events in considerable detail. He stated that the British fired first, a claim that supported the colonial narrative and contradicted British assertions that the colonials had initiated the firing.

Wood went on to serve in the Continental Army during the Revolution. He lived to an advanced age and in 1826, more than fifty years after the battle, provided an additional detailed account of the events to historian Elias Phinney, which was published and became a key source for subsequent historians. His longevity made him one of the last surviving eyewitnesses to the opening shots of the Revolution.

WHY HE MATTERS TO LEXINGTON

Sylvanus Wood's importance is as a witness. In the immediate aftermath of April 19, the question of who fired first became a matter of intense propaganda warfare between the colonial and British sides. The Provincial Congress collected depositions from Wood and others specifically to establish that the British had fired first and without provocation. Wood's account, given under oath and later elaborated in his 1826 narrative, became a cornerstone of the colonial case. His testimony reminds us that history depends on those who were there and who left a record.

- c.1750: Born in Woburn, Massachusetts
- 1775: Present at Lexington Green on April 19; witnessed the battle
- 1775: Provided deposition to the Provincial Congress about events on the Green
- 1826: Gave detailed narrative account to historian Elias Phinney
- c.1840: Died at an advanced age as one of the last surviving witnesses

SOURCES
- Phinney, Elias. "History of the Battle at Lexington." Phelps and Farnham, 1825.
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Tourtellot, Arthur Bernon. "Lexington and Concord: The Beginning of the War of the American Revolution." W.W. Norton, 1959.`,
    },
    create: {
      id: 'person-sylvanus-wood',
      name: 'Sylvanus Wood',
      roles: ['Witness', 'Soldier', 'Deponent'],
      bioShort: 'Woburn resident (c.1750-c.1840) who witnessed the battle on Lexington Green and left one of the most detailed depositions about who fired first on April 19, 1775.',
      bioLong: `Sylvanus Wood was born around 1750 in Woburn, Massachusetts, and was a young man of approximately twenty-five when the events of April 19, 1775, unfolded. He was not a Lexington resident but was present in the area on the morning of the battle, having responded to the alarm that spread through the Middlesex County towns during the night. His principal significance to the historical record lies in the detailed deposition he provided about the events on Lexington Green, which became one of the most important eyewitness accounts of who fired first.

Wood's deposition, given under oath, described the scene on the Green as the British column arrived. He recounted seeing the British officers riding ahead of the column and ordering the militia to disperse, followed by the first shots and the chaotic volley that killed and wounded the Lexington men. His account was particularly valuable because he claimed to have had a clear view of the action and described the sequence of events in considerable detail. He stated that the British fired first, a claim that supported the colonial narrative and contradicted British assertions that the colonials had initiated the firing.

Wood went on to serve in the Continental Army during the Revolution. He lived to an advanced age and in 1826, more than fifty years after the battle, provided an additional detailed account of the events to historian Elias Phinney, which was published and became a key source for subsequent historians. His longevity made him one of the last surviving eyewitnesses to the opening shots of the Revolution.

WHY HE MATTERS TO LEXINGTON

Sylvanus Wood's importance is as a witness. In the immediate aftermath of April 19, the question of who fired first became a matter of intense propaganda warfare between the colonial and British sides. The Provincial Congress collected depositions from Wood and others specifically to establish that the British had fired first and without provocation. Wood's account, given under oath and later elaborated in his 1826 narrative, became a cornerstone of the colonial case. His testimony reminds us that history depends on those who were there and who left a record.

- c.1750: Born in Woburn, Massachusetts
- 1775: Present at Lexington Green on April 19; witnessed the battle
- 1775: Provided deposition to the Provincial Congress about events on the Green
- 1826: Gave detailed narrative account to historian Elias Phinney
- c.1840: Died at an advanced age as one of the last surviving witnesses

SOURCES
- Phinney, Elias. "History of the Battle at Lexington." Phelps and Farnham, 1825.
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Tourtellot, Arthur Bernon. "Lexington and Concord: The Beginning of the War of the American Revolution." W.W. Norton, 1959.`,
      birthYear: 1750,
      deathYear: 1840,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-dorothy-quincy' },
    update: {
      bioLong: `Dorothy Quincy was born on May 10, 1747, in Boston, Massachusetts, the daughter of Edmund Quincy, a wealthy merchant and magistrate. She was engaged to John Hancock, one of the wealthiest men in Massachusetts and a leading figure in the patriot movement. In April 1775, Quincy was staying at the Clarke parsonage in Lexington along with Hancock, who had been attending sessions of the Provincial Congress in nearby Concord.

On the night of April 18-19, Quincy was awakened by the commotion of Paul Revere's arrival at the parsonage. In the hours that followed, she witnessed the frantic debate between Hancock and Adams over whether Hancock should stay and fight or flee to safety. Hancock, characteristically theatrical, wanted to take up arms and join the militia on the Green. Adams insisted that Hancock's value lay in his political leadership, not in being shot on a village common. Quincy and Hancock's aunt, Lydia Hancock, added their voices to the argument for departure.

Quincy and the Hancock party eventually fled Lexington by carriage in the pre-dawn darkness, heading northwest toward the town of Woburn. As their carriage moved through the countryside, Quincy could hear the distant sound of musket fire from the Green behind them. She later married Hancock on August 28, 1775, and became one of the most prominent women in Massachusetts society during and after the Revolution. After Hancock's death in 1793, she remarried Captain James Scott and lived until 1830, dying at the age of eighty-three.

WHY SHE MATTERS TO LEXINGTON

Dorothy Quincy was an eyewitness to the domestic drama that unfolded at the Clarke parsonage on the night of the alarm — a scene that is often overshadowed by the military events on the Green but is essential to understanding the full story of April 18-19. Her presence at the parsonage, along with Hancock's aunt, reminds us that the events of that night involved families, not just soldiers and politicians. The women of the Clarke household endured the same fear and uncertainty as the militiamen on the Green, and Quincy's later accounts of the night provide a perspective that the male-dominated historical record rarely captures.

- 1747: Born May 10 in Boston, Massachusetts
- 1775: Present at Clarke parsonage during the alarm on the night of April 18-19
- 1775: Fled Lexington with John Hancock before the battle
- 1775: Married John Hancock on August 28
- 1830: Died December 29 in Boston at age 83

SOURCES
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Fowler, William M. Jr. "The Baron of Beacon Hill: A Biography of John Hancock." Houghton Mifflin, 1980.
- Hudson, Charles. "History of the Town of Lexington." Houghton Mifflin, 1913.`,
    },
    create: {
      id: 'person-dorothy-quincy',
      name: 'Dorothy Quincy',
      roles: ['Witness', 'Political Figure', 'Governor\'s Wife'],
      bioShort: 'Boston-born fiancee of John Hancock (1747-1830) who was present at the Clarke parsonage on the night of the alarm and fled Lexington before the battle on April 19, 1775.',
      bioLong: `Dorothy Quincy was born on May 10, 1747, in Boston, Massachusetts, the daughter of Edmund Quincy, a wealthy merchant and magistrate. She was engaged to John Hancock, one of the wealthiest men in Massachusetts and a leading figure in the patriot movement. In April 1775, Quincy was staying at the Clarke parsonage in Lexington along with Hancock, who had been attending sessions of the Provincial Congress in nearby Concord.

On the night of April 18-19, Quincy was awakened by the commotion of Paul Revere's arrival at the parsonage. In the hours that followed, she witnessed the frantic debate between Hancock and Adams over whether Hancock should stay and fight or flee to safety. Hancock, characteristically theatrical, wanted to take up arms and join the militia on the Green. Adams insisted that Hancock's value lay in his political leadership, not in being shot on a village common. Quincy and Hancock's aunt, Lydia Hancock, added their voices to the argument for departure.

Quincy and the Hancock party eventually fled Lexington by carriage in the pre-dawn darkness, heading northwest toward the town of Woburn. As their carriage moved through the countryside, Quincy could hear the distant sound of musket fire from the Green behind them. She later married Hancock on August 28, 1775, and became one of the most prominent women in Massachusetts society during and after the Revolution. After Hancock's death in 1793, she remarried Captain James Scott and lived until 1830, dying at the age of eighty-three.

WHY SHE MATTERS TO LEXINGTON

Dorothy Quincy was an eyewitness to the domestic drama that unfolded at the Clarke parsonage on the night of the alarm — a scene that is often overshadowed by the military events on the Green but is essential to understanding the full story of April 18-19. Her presence at the parsonage, along with Hancock's aunt, reminds us that the events of that night involved families, not just soldiers and politicians. The women of the Clarke household endured the same fear and uncertainty as the militiamen on the Green, and Quincy's later accounts of the night provide a perspective that the male-dominated historical record rarely captures.

- 1747: Born May 10 in Boston, Massachusetts
- 1775: Present at Clarke parsonage during the alarm on the night of April 18-19
- 1775: Fled Lexington with John Hancock before the battle
- 1775: Married John Hancock on August 28
- 1830: Died December 29 in Boston at age 83

SOURCES
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Fowler, William M. Jr. "The Baron of Beacon Hill: A Biography of John Hancock." Houghton Mifflin, 1980.
- Hudson, Charles. "History of the Town of Lexington." Houghton Mifflin, 1913.`,
      birthYear: 1747,
      deathYear: 1830,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-jedediah-munroe' },
    update: {
      bioLong: `Jedediah Munroe was born around 1760 in Lexington, Massachusetts, into the large and influential Munroe family. He was approximately fifteen years old on the morning of April 19, 1775, making him one of the youngest participants in the events on Lexington Green. Munroe served as the drummer boy for the Lexington militia, responsible for beating the drum that summoned the company to muster and that regulated their movements on the field.

In the pre-dawn hours of April 19, it was Munroe's drum — along with the town's bell — that roused the militiamen from their beds and called them to the Green. The beating of a drum in a colonial New England town carried unmistakable meaning: it was the signal that the company was being called to arms. Munroe's drumbeat that morning was one of the first sounds of the American Revolution, the physical pulse that translated alarm into action.

Munroe survived the battle and the war. The details of his later life are less well documented than those of the senior officers and casualties, but he lived to an old age and was among the Lexington residents who participated in early commemorations of the battle. His survival meant that he carried the memory of that morning for decades, a living link to the events that defined his town.

WHY HE MATTERS TO LEXINGTON

Jedediah Munroe represents the youth of the Lexington militia. At fifteen, he was barely more than a child, yet he played an indispensable role: without the drummer, the militia could not have mustered as quickly or as effectively. His youth also underscores the communal nature of the militia system — the defense of the town was a responsibility that fell on the entire community, including its boys. The image of a teenage drummer beating the call to arms in the darkness has become one of the enduring images of Lexington's story.

- c.1760: Born in Lexington, Massachusetts
- 1775: Served as drummer boy for the Lexington militia on April 19 at approximately age 15
- 1775: Beat the drum that mustered the militia to the Green in the pre-dawn hours
- After 1783: Lived in Lexington after the war; participated in early battle commemorations

SOURCES
- Hudson, Charles. "History of the Town of Lexington." Houghton Mifflin, 1913.
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Coburn, Frank Warren. "The Battle of April 19, 1775." Published by the author, Lexington, MA, 1912.`,
    },
    create: {
      id: 'person-jedediah-munroe',
      name: 'Jedediah Munroe',
      roles: ['Drummer Boy', 'Militiaman'],
      bioShort: 'Teenage drummer boy (c.1760-after 1800) of the Lexington militia who beat the drum that mustered the company to the Green on the morning of April 19, 1775.',
      bioLong: `Jedediah Munroe was born around 1760 in Lexington, Massachusetts, into the large and influential Munroe family. He was approximately fifteen years old on the morning of April 19, 1775, making him one of the youngest participants in the events on Lexington Green. Munroe served as the drummer boy for the Lexington militia, responsible for beating the drum that summoned the company to muster and that regulated their movements on the field.

In the pre-dawn hours of April 19, it was Munroe's drum — along with the town's bell — that roused the militiamen from their beds and called them to the Green. The beating of a drum in a colonial New England town carried unmistakable meaning: it was the signal that the company was being called to arms. Munroe's drumbeat that morning was one of the first sounds of the American Revolution, the physical pulse that translated alarm into action.

Munroe survived the battle and the war. The details of his later life are less well documented than those of the senior officers and casualties, but he lived to an old age and was among the Lexington residents who participated in early commemorations of the battle. His survival meant that he carried the memory of that morning for decades, a living link to the events that defined his town.

WHY HE MATTERS TO LEXINGTON

Jedediah Munroe represents the youth of the Lexington militia. At fifteen, he was barely more than a child, yet he played an indispensable role: without the drummer, the militia could not have mustered as quickly or as effectively. His youth also underscores the communal nature of the militia system — the defense of the town was a responsibility that fell on the entire community, including its boys. The image of a teenage drummer beating the call to arms in the darkness has become one of the enduring images of Lexington's story.

- c.1760: Born in Lexington, Massachusetts
- 1775: Served as drummer boy for the Lexington militia on April 19 at approximately age 15
- 1775: Beat the drum that mustered the militia to the Green in the pre-dawn hours
- After 1783: Lived in Lexington after the war; participated in early battle commemorations

SOURCES
- Hudson, Charles. "History of the Town of Lexington." Houghton Mifflin, 1913.
- Fischer, David Hackett. "Paul Revere's Ride." Oxford University Press, 1994.
- Coburn, Frank Warren. "The Battle of April 19, 1775." Published by the author, Lexington, MA, 1912.`,
      birthYear: 1760,
      deathYear: 1835,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-john-raymond' },
    update: {
      bioLong: `John Raymond was a resident of Lexington, Massachusetts, and one of the militiamen who mustered on the Green under Captain John Parker on the morning of April 19, 1775. Like most of the men who formed the militia line that day, Raymond was a farmer and a member of the local community who answered the call to arms in the pre-dawn darkness without knowing whether he would survive the morning.

Raymond appears in the muster rolls of the Lexington company and in the records of those who served during the events of April 19. He was among the militiamen who stood on the Green as the British column approached and who scattered when the firing began. The fragmentary nature of the records for ordinary militiamen like Raymond is itself a reminder of how much of the Revolution's story has been lost — the men who fought and died were overwhelmingly common farmers and tradespeople whose lives left thin traces in the documentary record.

Raymond's service extended beyond the events on the Green. He was among the Lexington men who regrouped after the initial engagement and participated in the harassment of the retreating British column later in the day. His continued willingness to fight, even after witnessing the deaths of his neighbors that morning, speaks to the determination that characterized Lexington's response to the events of April 19.

WHY HE MATTERS TO LEXINGTON

John Raymond represents the rank and file of the Lexington militia — the men whose names appear in the muster rolls but not in the history books. For every Parker, Harrington, or Estabrook whose story has been told and retold, there were dozens of men like Raymond who stood on the Green, faced the British regulars, and left little trace beyond a line in a ledger. His story is the story of the anonymous majority who made the Revolution possible through their collective willingness to show up.

- Dates of birth and death uncertain
- 1775: Mustered on Lexington Green on April 19 under Captain John Parker
- 1775: Survived the engagement and participated in harassment of the British retreat
- 1775: Listed in the Lexington militia muster rolls

SOURCES
- Hudson, Charles. "History of the Town of Lexington." Houghton Mifflin, 1913.
- Coburn, Frank Warren. "The Battle of April 19, 1775." Published by the author, Lexington, MA, 1912.
- Massachusetts Soldiers and Sailors of the Revolutionary War. Secretary of the Commonwealth, 1896-1908.`,
    },
    create: {
      id: 'person-john-raymond',
      name: 'John Raymond',
      roles: ['Militiaman', 'Farmer'],
      bioShort: 'Lexington militiaman who mustered on the Green on April 19, 1775, and participated in the harassment of the retreating British column, representing the ordinary farmers who made up the bulk of the militia.',
      bioLong: `John Raymond was a resident of Lexington, Massachusetts, and one of the militiamen who mustered on the Green under Captain John Parker on the morning of April 19, 1775. Like most of the men who formed the militia line that day, Raymond was a farmer and a member of the local community who answered the call to arms in the pre-dawn darkness without knowing whether he would survive the morning.

Raymond appears in the muster rolls of the Lexington company and in the records of those who served during the events of April 19. He was among the militiamen who stood on the Green as the British column approached and who scattered when the firing began. The fragmentary nature of the records for ordinary militiamen like Raymond is itself a reminder of how much of the Revolution's story has been lost — the men who fought and died were overwhelmingly common farmers and tradespeople whose lives left thin traces in the documentary record.

Raymond's service extended beyond the events on the Green. He was among the Lexington men who regrouped after the initial engagement and participated in the harassment of the retreating British column later in the day. His continued willingness to fight, even after witnessing the deaths of his neighbors that morning, speaks to the determination that characterized Lexington's response to the events of April 19.

WHY HE MATTERS TO LEXINGTON

John Raymond represents the rank and file of the Lexington militia — the men whose names appear in the muster rolls but not in the history books. For every Parker, Harrington, or Estabrook whose story has been told and retold, there were dozens of men like Raymond who stood on the Green, faced the British regulars, and left little trace beyond a line in a ledger. His story is the story of the anonymous majority who made the Revolution possible through their collective willingness to show up.

- Dates of birth and death uncertain
- 1775: Mustered on Lexington Green on April 19 under Captain John Parker
- 1775: Survived the engagement and participated in harassment of the British retreat
- 1775: Listed in the Lexington militia muster rolls

SOURCES
- Hudson, Charles. "History of the Town of Lexington." Houghton Mifflin, 1913.
- Coburn, Frank Warren. "The Battle of April 19, 1775." Published by the author, Lexington, MA, 1912.
- Massachusetts Soldiers and Sailors of the Revolutionary War. Secretary of the Commonwealth, 1896-1908.`,
      birthYear: 1740,
      deathYear: 1820,
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
    where: { id: 'lexington-green' },
    update: { slug: 'lexington-green', featured: true, description: 'Lexington Battle Green is the triangular common at the center of Lexington, Massachusetts, where on the morning of April 19, 1775, approximately 77 colonial militiamen under Captain John Parker confronted a column of roughly 700 British regulars. The ensuing exchange of fire killed eight militiamen and wounded ten others, marking the opening engagement of the American Revolutionary War.\n\nThe Green remains the symbolic heart of Lexington. It is bordered by the Minuteman Statue, the Revolutionary Monument, and several historic buildings. Every year on Patriots\' Day, the battle is reenacted on the Green at dawn, drawing thousands of spectators to witness the event that started a revolution.', historicalNote: 'The Lexington Battle Green, originally called the Common, served as the town\'s central gathering place and militia training ground in the colonial period. On the night of April 18-19, 1775, Captain John Parker mustered his militia company here after receiving word from Paul Revere and William Dawes that British regulars were marching from Boston toward Lexington and Concord. The men initially assembled around 1:00 a.m. but dispersed to Buckman Tavern and nearby homes when the British did not immediately appear.\n\nWhen the British advance guard arrived at approximately 5:00 a.m. on April 19, Parker reformed his men in two lines on the Green. The British commander, Major John Pitcairn, ordered the colonials to lay down their arms and disperse. Parker appears to have ordered his men to disperse but not to surrender their weapons. A shot was fired — by whom remains one of the great unsolved questions of American history — and the British regulars opened a ragged volley followed by a bayonet charge. Eight Lexington men were killed: Robert Munroe, Jonas Parker, Samuel Hadley, Jonathan Harrington, Isaac Muzzey, Caleb Harrington, John Brown, and Asahel Porter. Ten others were wounded, including Prince Estabrook.\n\nThe Green has been preserved as a memorial since the early nineteenth century. The Revolutionary Monument, erected in 1799, stands near the site where the militia formed. The Minuteman Statue, sculpted by Henry Hudson Kitson and dedicated in 1900, stands at the southeast corner. The Green was designated a National Historic Landmark in 1961 and remains the centerpiece of Lexington\'s identity as the "Birthplace of American Liberty."' },
    create: { id: 'lexington-green', townId: LEXINGTON_TOWN_ID, name: 'Lexington Battle Green', slug: 'lexington-green', placeType: 'BATTLEFIELD', description: 'Lexington Battle Green is the triangular common at the center of Lexington, Massachusetts, where on the morning of April 19, 1775, approximately 77 colonial militiamen under Captain John Parker confronted a column of roughly 700 British regulars. The ensuing exchange of fire killed eight militiamen and wounded ten others, marking the opening engagement of the American Revolutionary War.\n\nThe Green remains the symbolic heart of Lexington. It is bordered by the Minuteman Statue, the Revolutionary Monument, and several historic buildings. Every year on Patriots\' Day, the battle is reenacted on the Green at dawn, drawing thousands of spectators to witness the event that started a revolution.', historicalNote: 'The Lexington Battle Green, originally called the Common, served as the town\'s central gathering place and militia training ground in the colonial period. On the night of April 18-19, 1775, Captain John Parker mustered his militia company here after receiving word from Paul Revere and William Dawes that British regulars were marching from Boston toward Lexington and Concord. The men initially assembled around 1:00 a.m. but dispersed to Buckman Tavern and nearby homes when the British did not immediately appear.\n\nWhen the British advance guard arrived at approximately 5:00 a.m. on April 19, Parker reformed his men in two lines on the Green. The British commander, Major John Pitcairn, ordered the colonials to lay down their arms and disperse. Parker appears to have ordered his men to disperse but not to surrender their weapons. A shot was fired — by whom remains one of the great unsolved questions of American history — and the British regulars opened a ragged volley followed by a bayonet charge. Eight Lexington men were killed: Robert Munroe, Jonas Parker, Samuel Hadley, Jonathan Harrington, Isaac Muzzey, Caleb Harrington, John Brown, and Asahel Porter. Ten others were wounded, including Prince Estabrook.\n\nThe Green has been preserved as a memorial since the early nineteenth century. The Revolutionary Monument, erected in 1799, stands near the site where the militia formed. The Minuteman Statue, sculpted by Henry Hudson Kitson and dedicated in 1900, stands at the southeast corner. The Green was designated a National Historic Landmark in 1961 and remains the centerpiece of Lexington\'s identity as the "Birthplace of American Liberty."', address: '1625 Massachusetts Ave, Lexington, MA 02420', hours: 'Always accessible', admission: 'Free', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'buckman-tavern' },
    update: { slug: 'buckman-tavern', featured: true, description: 'Buckman Tavern, built around 1710, stands directly on the edge of Lexington Green and served as the gathering point for the Lexington militia in the early morning hours of April 19, 1775. After the initial muster around 1:00 a.m. produced no immediate British arrival, many of the militiamen retired to the tavern to wait, drink, and stay warm until the alarm was raised again at dawn.\n\nThe tavern is one of the best-preserved colonial tavern buildings in New England. Visitors can see the original tap room where the militiamen gathered and a bullet hole in the front door attributed to the British volley on the Green.', historicalNote: 'John Buckman operated the tavern in 1775, and it served as the social and commercial hub of the town. Colonial taverns were not merely drinking establishments but served as meeting halls, courtrooms, post offices, and centers of information exchange. On the night of April 18-19, the tavern took on an additional role as the staging area for the militia.\n\nAfter Paul Revere\'s warning arrived and Captain Parker mustered the company on the Green, the men waited in the cold for the British to appear. When scouts reported that the column had not yet arrived, Parker dismissed the company, telling them to reassemble at the beat of the drum. Many retreated to Buckman Tavern, where they waited for approximately three hours. When the drum finally sounded around 4:30 a.m., the men rushed out of the tavern and formed up on the Green — some of them, according to depositions, still with mugs in hand.\n\nThe tavern was purchased by the Lexington Historical Society in 1913 and has been maintained as a museum since. The building retains much of its original structure, including the tap room with its wide-plank floors and enormous central fireplace. A guided tour recounts the events of the night and morning, using the building itself as a primary source. The bullet hole in the front door, visible from the outside, is a tangible reminder that the men who gathered here walked out into gunfire.' },
    create: { id: 'buckman-tavern', townId: LEXINGTON_TOWN_ID, name: 'Buckman Tavern', slug: 'buckman-tavern', placeType: 'TAVERN', description: 'Buckman Tavern, built around 1710, stands directly on the edge of Lexington Green and served as the gathering point for the Lexington militia in the early morning hours of April 19, 1775. After the initial muster around 1:00 a.m. produced no immediate British arrival, many of the militiamen retired to the tavern to wait, drink, and stay warm until the alarm was raised again at dawn.\n\nThe tavern is one of the best-preserved colonial tavern buildings in New England. Visitors can see the original tap room where the militiamen gathered and a bullet hole in the front door attributed to the British volley on the Green.', historicalNote: 'John Buckman operated the tavern in 1775, and it served as the social and commercial hub of the town. Colonial taverns were not merely drinking establishments but served as meeting halls, courtrooms, post offices, and centers of information exchange. On the night of April 18-19, the tavern took on an additional role as the staging area for the militia.\n\nAfter Paul Revere\'s warning arrived and Captain Parker mustered the company on the Green, the men waited in the cold for the British to appear. When scouts reported that the column had not yet arrived, Parker dismissed the company, telling them to reassemble at the beat of the drum. Many retreated to Buckman Tavern, where they waited for approximately three hours. When the drum finally sounded around 4:30 a.m., the men rushed out of the tavern and formed up on the Green — some of them, according to depositions, still with mugs in hand.\n\nThe tavern was purchased by the Lexington Historical Society in 1913 and has been maintained as a museum since. The building retains much of its original structure, including the tap room with its wide-plank floors and enormous central fireplace. A guided tour recounts the events of the night and morning, using the building itself as a primary source. The bullet hole in the front door, visible from the outside, is a tangible reminder that the men who gathered here walked out into gunfire.', address: '1 Bedford St, Lexington, MA 02420', hours: 'April-October, daily 10am-4pm', admission: '$15 adults (combo ticket available)', website: 'https://www.lexingtonhistory.org', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'hancock-clarke-house' },
    update: { slug: 'hancock-clarke-house', featured: true, description: 'The Hancock-Clarke House is a colonial parsonage located about a quarter mile from Lexington Green along Hancock Street. It was the home of Reverend Jonas Clarke and the site where Samuel Adams and John Hancock were staying on the night of April 18-19, 1775, when Paul Revere arrived with his famous warning.\n\nThe house takes its double name from its two most prominent associations: Reverend John Hancock (grandfather of the patriot) built the original structure around 1698, and Reverend Jonas Clarke occupied it from 1755 onward.', historicalNote: 'The parsonage played a central role in the events of April 18-19, 1775. Samuel Adams and John Hancock had been attending sessions of the Provincial Congress in nearby Concord and were lodging with Reverend Clarke, a close ally of the patriot cause. The British expedition from Boston had among its objectives the arrest of Adams and Hancock, making the parsonage one of the primary targets of the night\'s march.\n\nPaul Revere arrived at the parsonage around midnight, followed by William Dawes approximately thirty minutes later. The scene that unfolded inside the house over the next several hours was one of the most dramatic of the night. Hancock wanted to stay and fight alongside the militia; Adams argued that their political leadership was too valuable to risk. Dorothy Quincy, Hancock\'s fiancee, and Hancock\'s aunt Lydia added their voices to the debate. Eventually, Adams prevailed, and the party fled toward Woburn before the British arrived.\n\nThe house was moved from its original location in 1896 to save it from demolition and now stands at 36 Hancock Street. It is operated as a museum by the Lexington Historical Society and contains original furnishings and artifacts, including the drum that William Diamond used on the morning of April 19. The parsonage offers a rare glimpse into the domestic world of a colonial minister and the night that forever changed the lives of everyone under its roof.' },
    create: { id: 'hancock-clarke-house', townId: LEXINGTON_TOWN_ID, name: 'Hancock-Clarke House', slug: 'hancock-clarke-house', placeType: 'HISTORIC_HOUSE', description: 'The Hancock-Clarke House is a colonial parsonage located about a quarter mile from Lexington Green along Hancock Street. It was the home of Reverend Jonas Clarke and the site where Samuel Adams and John Hancock were staying on the night of April 18-19, 1775, when Paul Revere arrived with his famous warning.\n\nThe house takes its double name from its two most prominent associations: Reverend John Hancock (grandfather of the patriot) built the original structure around 1698, and Reverend Jonas Clarke occupied it from 1755 onward.', historicalNote: 'The parsonage played a central role in the events of April 18-19, 1775. Samuel Adams and John Hancock had been attending sessions of the Provincial Congress in nearby Concord and were lodging with Reverend Clarke, a close ally of the patriot cause. The British expedition from Boston had among its objectives the arrest of Adams and Hancock, making the parsonage one of the primary targets of the night\'s march.\n\nPaul Revere arrived at the parsonage around midnight, followed by William Dawes approximately thirty minutes later. The scene that unfolded inside the house over the next several hours was one of the most dramatic of the night. Hancock wanted to stay and fight alongside the militia; Adams argued that their political leadership was too valuable to risk. Dorothy Quincy, Hancock\'s fiancee, and Hancock\'s aunt Lydia added their voices to the debate. Eventually, Adams prevailed, and the party fled toward Woburn before the British arrived.\n\nThe house was moved from its original location in 1896 to save it from demolition and now stands at 36 Hancock Street. It is operated as a museum by the Lexington Historical Society and contains original furnishings and artifacts, including the drum that William Diamond used on the morning of April 19. The parsonage offers a rare glimpse into the domestic world of a colonial minister and the night that forever changed the lives of everyone under its roof.', address: '36 Hancock St, Lexington, MA 02420', hours: 'April-October, daily 10am-4pm', admission: '$15 adults (combo ticket available)', website: 'https://www.lexingtonhistory.org', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'munroe-tavern' },
    update: { slug: 'munroe-tavern', featured: true, description: 'Munroe Tavern, built around 1695, is located about one mile east of Lexington Green along Massachusetts Avenue. On the afternoon of April 19, 1775, it served as the headquarters and field hospital for the British forces under Brigadier General Hugh Percy, who had marched from Boston with reinforcements to rescue the retreating British column.\n\nThe tavern is one of the three historic house museums operated by the Lexington Historical Society, alongside Buckman Tavern and the Hancock-Clarke House.', historicalNote: 'William Munroe operated the tavern in 1775. When the British column retreated from Concord through Lexington on the afternoon of April 19, it was in a state of near-collapse, harassed by militia fire from behind walls, trees, and buildings along the entire route. Brigadier General Percy\'s relief column of approximately 1,000 soldiers and two cannons met the retreating force near Lexington and established a defensive perimeter around the Green area.\n\nPercy chose Munroe Tavern as his temporary headquarters. British soldiers commandeered the building, cared for their wounded, and regrouped before resuming the march back to Boston. According to local tradition, a disabled elderly man named John Raymond, who had been left to tend the tavern, was shot and killed by British soldiers during the occupation. The tavern bears the marks of its wartime use.\n\nGeorge Washington dined at Munroe Tavern on November 5, 1789, during his presidential tour of New England, an event commemorated at the site. The tavern was purchased by the Lexington Historical Society in 1911 and has been operated as a museum since. The building retains its colonial-era kitchen, tap room, and upper chambers, offering visitors a view of both its revolutionary history and daily life in an eighteenth-century tavern.' },
    create: { id: 'munroe-tavern', townId: LEXINGTON_TOWN_ID, name: 'Munroe Tavern', slug: 'munroe-tavern', placeType: 'TAVERN', description: 'Munroe Tavern, built around 1695, is located about one mile east of Lexington Green along Massachusetts Avenue. On the afternoon of April 19, 1775, it served as the headquarters and field hospital for the British forces under Brigadier General Hugh Percy, who had marched from Boston with reinforcements to rescue the retreating British column.\n\nThe tavern is one of the three historic house museums operated by the Lexington Historical Society, alongside Buckman Tavern and the Hancock-Clarke House.', historicalNote: 'William Munroe operated the tavern in 1775. When the British column retreated from Concord through Lexington on the afternoon of April 19, it was in a state of near-collapse, harassed by militia fire from behind walls, trees, and buildings along the entire route. Brigadier General Percy\'s relief column of approximately 1,000 soldiers and two cannons met the retreating force near Lexington and established a defensive perimeter around the Green area.\n\nPercy chose Munroe Tavern as his temporary headquarters. British soldiers commandeered the building, cared for their wounded, and regrouped before resuming the march back to Boston. According to local tradition, a disabled elderly man named John Raymond, who had been left to tend the tavern, was shot and killed by British soldiers during the occupation. The tavern bears the marks of its wartime use.\n\nGeorge Washington dined at Munroe Tavern on November 5, 1789, during his presidential tour of New England, an event commemorated at the site. The tavern was purchased by the Lexington Historical Society in 1911 and has been operated as a museum since. The building retains its colonial-era kitchen, tap room, and upper chambers, offering visitors a view of both its revolutionary history and daily life in an eighteenth-century tavern.', address: '1332 Massachusetts Ave, Lexington, MA 02420', hours: 'April-October, daily 10am-4pm', admission: '$15 adults (combo ticket available)', website: 'https://www.lexingtonhistory.org', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'minuteman-statue' },
    update: { slug: 'minuteman-statue', featured: true, description: 'The Minuteman Statue stands at the southeast corner of Lexington Green, depicting a colonial militiaman with musket in hand, ready for action. Sculpted by Henry Hudson Kitson, the bronze statue was dedicated on April 19, 1900 — the 125th anniversary of the battle — and has become one of the most recognized symbols of the American Revolution.\n\nThe figure is traditionally identified as Captain John Parker, though it represents the Lexington militia as a whole. The statue faces southeast, toward the direction from which the British column approached along the road from Boston.', historicalNote: 'The Minuteman Statue was commissioned by the town of Lexington to commemorate the militia\'s stand on the Green. Henry Hudson Kitson, a British-born sculptor who had settled in the United States, created the figure in his studio in Quincy, Massachusetts. The bronze was cast by the Gorham Manufacturing Company and placed on a granite base inscribed with the words attributed to Captain Parker.\n\nThe statue has become the defining image of Lexington and appears on the town seal, road signs, and countless publications about the Revolution. Its posture — upright, alert, weapon at the ready — conveys both readiness and restraint, qualities that Lexington associates with its militia\'s conduct on April 19. The figure does not depict a man charging into battle but one standing his ground, which aligns with the tradition that Parker ordered his men not to fire unless fired upon.\n\nThe statue\'s prominence has made it a gathering point for commemorative events, particularly the annual Patriots\' Day reenactment held on the Green each April. It has also been reproduced in miniature as one of the most popular souvenirs sold in Lexington. The United States Postal Service featured the statue on a commemorative stamp in 1925, further cementing its place in the national iconography of the Revolution.' },
    create: { id: 'minuteman-statue', townId: LEXINGTON_TOWN_ID, name: 'Minuteman Statue', slug: 'minuteman-statue', placeType: 'MONUMENT', description: 'The Minuteman Statue stands at the southeast corner of Lexington Green, depicting a colonial militiaman with musket in hand, ready for action. Sculpted by Henry Hudson Kitson, the bronze statue was dedicated on April 19, 1900 — the 125th anniversary of the battle — and has become one of the most recognized symbols of the American Revolution.\n\nThe figure is traditionally identified as Captain John Parker, though it represents the Lexington militia as a whole. The statue faces southeast, toward the direction from which the British column approached along the road from Boston.', historicalNote: 'The Minuteman Statue was commissioned by the town of Lexington to commemorate the militia\'s stand on the Green. Henry Hudson Kitson, a British-born sculptor who had settled in the United States, created the figure in his studio in Quincy, Massachusetts. The bronze was cast by the Gorham Manufacturing Company and placed on a granite base inscribed with the words attributed to Captain Parker.\n\nThe statue has become the defining image of Lexington and appears on the town seal, road signs, and countless publications about the Revolution. Its posture — upright, alert, weapon at the ready — conveys both readiness and restraint, qualities that Lexington associates with its militia\'s conduct on April 19. The figure does not depict a man charging into battle but one standing his ground, which aligns with the tradition that Parker ordered his men not to fire unless fired upon.\n\nThe statue\'s prominence has made it a gathering point for commemorative events, particularly the annual Patriots\' Day reenactment held on the Green each April. It has also been reproduced in miniature as one of the most popular souvenirs sold in Lexington. The United States Postal Service featured the statue on a commemorative stamp in 1925, further cementing its place in the national iconography of the Revolution.', address: 'Lexington Green, Massachusetts Ave, Lexington, MA 02420', hours: 'Always accessible', admission: 'Free', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'battle-road-trail' },
    update: { slug: 'battle-road-trail', featured: true, description: 'The Battle Road Trail is a 5.5-mile walking and cycling path within Minute Man National Historical Park that follows the approximate route of the road along which British soldiers marched from Lexington to Concord and back on April 19, 1775. The trail passes through restored colonial landscapes, past historic houses, stone walls, and interpretive markers that tell the story of the running battle.\n\nThe trail connects Lexington\'s Fiske Hill area to the North Bridge in Concord, traversing some of the most historically significant terrain in the United States.', historicalNote: 'The road between Lexington and Concord — known in 1775 simply as the Bay Road or the Concord Road — was the axis of the entire day\'s events on April 19. The British column marched this route westward in the early morning, passed through Lexington, continued to Concord, and then retreated back along the same road under increasingly intense fire from colonial militia gathered from towns throughout Middlesex County.\n\nThe retreat was the bloodiest phase of the day. Colonial forces lined the road, firing from behind stone walls, trees, barns, and houses. The terrain along the road — rolling hills, scattered farmsteads, and dense stone walls — favored the colonial fighters, who used guerrilla tactics against the road-bound British column. The British suffered their heaviest casualties along this stretch, and several houses along the route still bear bullet marks from the engagement.\n\nMinute Man National Historical Park was established in 1959 to preserve this landscape. The Battle Road Trail, completed in 1992, allows visitors to walk the route at a pace similar to the marching soldiers, experiencing the terrain, distances, and sight lines that shaped the battle. Interpretive wayside exhibits along the trail describe specific episodes of the fighting, and several restored colonial houses — including the Hartwell Tavern and the Captain William Smith House — are open for tours during the summer months.' },
    create: { id: 'battle-road-trail', townId: LEXINGTON_TOWN_ID, name: 'Battle Road Trail', slug: 'battle-road-trail', placeType: 'TRAIL', description: 'The Battle Road Trail is a 5.5-mile walking and cycling path within Minute Man National Historical Park that follows the approximate route of the road along which British soldiers marched from Lexington to Concord and back on April 19, 1775. The trail passes through restored colonial landscapes, past historic houses, stone walls, and interpretive markers that tell the story of the running battle.\n\nThe trail connects Lexington\'s Fiske Hill area to the North Bridge in Concord, traversing some of the most historically significant terrain in the United States.', historicalNote: 'The road between Lexington and Concord — known in 1775 simply as the Bay Road or the Concord Road — was the axis of the entire day\'s events on April 19. The British column marched this route westward in the early morning, passed through Lexington, continued to Concord, and then retreated back along the same road under increasingly intense fire from colonial militia gathered from towns throughout Middlesex County.\n\nThe retreat was the bloodiest phase of the day. Colonial forces lined the road, firing from behind stone walls, trees, barns, and houses. The terrain along the road — rolling hills, scattered farmsteads, and dense stone walls — favored the colonial fighters, who used guerrilla tactics against the road-bound British column. The British suffered their heaviest casualties along this stretch, and several houses along the route still bear bullet marks from the engagement.\n\nMinute Man National Historical Park was established in 1959 to preserve this landscape. The Battle Road Trail, completed in 1992, allows visitors to walk the route at a pace similar to the marching soldiers, experiencing the terrain, distances, and sight lines that shaped the battle. Interpretive wayside exhibits along the trail describe specific episodes of the fighting, and several restored colonial houses — including the Hartwell Tavern and the Captain William Smith House — are open for tours during the summer months.', address: 'Minute Man NHP, off Route 2A, Lexington/Lincoln/Concord, MA', hours: 'Dawn to dusk, year-round', admission: 'Free', website: 'https://www.nps.gov/mima', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'belfry-hill' },
    update: { slug: 'belfry-hill', featured: true, description: 'Belfry Hill is a small rise located just off the Green where the town\'s belfry — the bell tower — once stood. On the night of April 18-19, 1775, the bell in this belfry was rung to alarm the town and summon the militia to the Green. The sound of that bell was the first public signal in Lexington that the British were coming.\n\nToday a small park and historical marker occupy the site, and a replica belfry structure recalls the original tower that played such a critical role in the night\'s events.', historicalNote: 'In colonial Lexington, the town belfry served a function similar to a church bell or fire alarm — it was the community\'s emergency signal. On the night of April 18-19, after Paul Revere\'s warning was received, the belfry bell was rung to rouse the town. Its pealing in the middle of the night carried an unmistakable message: something urgent was happening, and every able-bodied man was expected on the Green.\n\nThe original belfry was a freestanding wooden structure on the hilltop, separate from any church. It was a common feature of New England towns, where the belfry often served a civic rather than religious purpose. The Lexington belfry was rebuilt and relocated several times over the centuries; it blew down in a storm in 1768 and was re-erected on a different part of the hill. The current replica was placed on the hill in the twentieth century to mark the site.\n\nBelfry Hill offers one of the best vantage points for understanding the geography of April 19. From the hilltop, visitors can see the Green, the surrounding houses, and the roads by which the British approached and departed. The elevation also helps explain why the belfry was placed here — sound from the hilltop would carry across the entire town.' },
    create: { id: 'belfry-hill', townId: LEXINGTON_TOWN_ID, name: 'Belfry Hill', slug: 'belfry-hill', placeType: 'LANDMARK', description: 'Belfry Hill is a small rise located just off the Green where the town\'s belfry — the bell tower — once stood. On the night of April 18-19, 1775, the bell in this belfry was rung to alarm the town and summon the militia to the Green. The sound of that bell was the first public signal in Lexington that the British were coming.\n\nToday a small park and historical marker occupy the site, and a replica belfry structure recalls the original tower that played such a critical role in the night\'s events.', historicalNote: 'In colonial Lexington, the town belfry served a function similar to a church bell or fire alarm — it was the community\'s emergency signal. On the night of April 18-19, after Paul Revere\'s warning was received, the belfry bell was rung to rouse the town. Its pealing in the middle of the night carried an unmistakable message: something urgent was happening, and every able-bodied man was expected on the Green.\n\nThe original belfry was a freestanding wooden structure on the hilltop, separate from any church. It was a common feature of New England towns, where the belfry often served a civic rather than religious purpose. The Lexington belfry was rebuilt and relocated several times over the centuries; it blew down in a storm in 1768 and was re-erected on a different part of the hill. The current replica was placed on the hill in the twentieth century to mark the site.\n\nBelfry Hill offers one of the best vantage points for understanding the geography of April 19. From the hilltop, visitors can see the Green, the surrounding houses, and the roads by which the British approached and departed. The elevation also helps explain why the belfry was placed here — sound from the hilltop would carry across the entire town.', address: 'Off Massachusetts Ave, near the Green, Lexington, MA 02420', hours: 'Always accessible', admission: 'Free', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'minute-man-visitor-center' },
    update: { slug: 'minute-man-visitor-center', featured: true, description: 'The Minute Man Visitor Center, operated by the National Park Service, serves as the primary interpretive facility for Minute Man National Historical Park. Located at the eastern end of the park near Route 2A in Lexington, the center features a large multimedia presentation called "The Road to Revolution" that provides an overview of the events of April 19, 1775.\n\nThe center also houses exhibits on the people, politics, and military tactics of the opening day of the Revolution, along with a bookstore and ranger-staffed information desk.', historicalNote: 'The visitor center was built as part of the development of Minute Man National Historical Park, which was established by Congress in 1959 to preserve the sites associated with the opening battle of the American Revolution. The park encompasses approximately 1,000 acres of historically significant landscape along the Battle Road between Lexington and Concord.\n\nThe center\'s signature exhibit, "The Road to Revolution," is a 25-minute multimedia program that uses a large panoramic screen to tell the story of April 19 from multiple perspectives — British regulars, colonial militia, and civilians caught in the crossfire. The program provides essential context for visitors before they explore the Battle Road Trail and the park\'s historic sites.\n\nThe visitor center is positioned at the Lexington end of the park, near Fiske Hill, where some of the heaviest fighting of the British retreat took place. Captain Parker\'s Lexington militia, which had been driven from the Green that morning, reassembled and ambushed the retreating British column near this location in the afternoon. The area around the visitor center thus represents both the beginning and the continuation of Lexington\'s fight on April 19.' },
    create: { id: 'minute-man-visitor-center', townId: LEXINGTON_TOWN_ID, name: 'Minute Man Visitor Center', slug: 'minute-man-visitor-center', placeType: 'MUSEUM', description: 'The Minute Man Visitor Center, operated by the National Park Service, serves as the primary interpretive facility for Minute Man National Historical Park. Located at the eastern end of the park near Route 2A in Lexington, the center features a large multimedia presentation called "The Road to Revolution" that provides an overview of the events of April 19, 1775.\n\nThe center also houses exhibits on the people, politics, and military tactics of the opening day of the Revolution, along with a bookstore and ranger-staffed information desk.', historicalNote: 'The visitor center was built as part of the development of Minute Man National Historical Park, which was established by Congress in 1959 to preserve the sites associated with the opening battle of the American Revolution. The park encompasses approximately 1,000 acres of historically significant landscape along the Battle Road between Lexington and Concord.\n\nThe center\'s signature exhibit, "The Road to Revolution," is a 25-minute multimedia program that uses a large panoramic screen to tell the story of April 19 from multiple perspectives — British regulars, colonial militia, and civilians caught in the crossfire. The program provides essential context for visitors before they explore the Battle Road Trail and the park\'s historic sites.\n\nThe visitor center is positioned at the Lexington end of the park, near Fiske Hill, where some of the heaviest fighting of the British retreat took place. Captain Parker\'s Lexington militia, which had been driven from the Green that morning, reassembled and ambushed the retreating British column near this location in the afternoon. The area around the visitor center thus represents both the beginning and the continuation of Lexington\'s fight on April 19.', address: '250 N Great Rd (Route 2A), Lincoln, MA 01773', hours: 'Daily 9:30am-5pm (seasonal)', admission: 'Free', website: 'https://www.nps.gov/mima', featured: true },
  });

  // --- REMAINING PLACES (21) — shorter descriptions + historicalNotes ---

  await prisma.place.upsert({
    where: { id: 'revolutionary-monument' },
    update: { slug: 'revolutionary-monument', featured: true, description: 'The Revolutionary Monument, erected in 1799, is a stone obelisk on Lexington Green that marks the common grave of the men killed in the battle of April 19, 1775. It was the first public war memorial erected in the United States.', historicalNote: 'The remains of the eight men killed on the Green were originally buried in the Old Burying Ground. In 1835, they were exhumed and reinterred beneath the monument on the Green. The monument bears the names of all eight casualties and an inscription honoring their sacrifice. Its status as the first public memorial to fallen soldiers in America gives it particular significance in the history of commemoration.' },
    create: { id: 'revolutionary-monument', townId: LEXINGTON_TOWN_ID, name: 'Revolutionary Monument', slug: 'revolutionary-monument', placeType: 'MONUMENT', description: 'The Revolutionary Monument, erected in 1799, is a stone obelisk on Lexington Green that marks the common grave of the men killed in the battle of April 19, 1775. It was the first public war memorial erected in the United States.', historicalNote: 'The remains of the eight men killed on the Green were originally buried in the Old Burying Ground. In 1835, they were exhumed and reinterred beneath the monument on the Green. The monument bears the names of all eight casualties and an inscription honoring their sacrifice. Its status as the first public memorial to fallen soldiers in America gives it particular significance in the history of commemoration.', address: 'Lexington Green, Lexington, MA 02420', hours: 'Always accessible', admission: 'Free', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'old-burying-ground' },
    update: { slug: 'old-burying-ground', featured: true, description: 'The Old Burying Ground, dating to the seventeenth century, is Lexington\'s oldest cemetery. It contains the gravestones of many of the town\'s earliest settlers as well as veterans of the French and Indian War and the Revolution, including Robert Munroe, the oldest man killed on the Green.', historicalNote: 'The burying ground was the original resting place of the eight men killed on April 19, 1775, before their remains were moved to the Revolutionary Monument on the Green in 1835. The cemetery also contains the graves of Reverend Jonas Clarke and other figures central to Lexington\'s colonial and revolutionary history. The worn gravestones, many carved with the distinctive winged skull motif common in New England colonial cemeteries, are tangible artifacts of the community that produced the militia.' },
    create: { id: 'old-burying-ground', townId: LEXINGTON_TOWN_ID, name: 'Old Burying Ground', slug: 'old-burying-ground', placeType: 'CEMETERY', description: 'The Old Burying Ground, dating to the seventeenth century, is Lexington\'s oldest cemetery. It contains the gravestones of many of the town\'s earliest settlers as well as veterans of the French and Indian War and the Revolution, including Robert Munroe, the oldest man killed on the Green.', historicalNote: 'The burying ground was the original resting place of the eight men killed on April 19, 1775, before their remains were moved to the Revolutionary Monument on the Green in 1835. The cemetery also contains the graves of Reverend Jonas Clarke and other figures central to Lexington\'s colonial and revolutionary history. The worn gravestones, many carved with the distinctive winged skull motif common in New England colonial cemeteries, are tangible artifacts of the community that produced the militia.', address: 'Harrington Rd, Lexington, MA 02420', hours: 'Dawn to dusk', admission: 'Free', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'parker-boulder' },
    update: { slug: 'parker-boulder', featured: true, description: 'The Captain Parker Boulder is a large glacial boulder on Lexington Green inscribed with the words traditionally attributed to Captain John Parker on the morning of April 19, 1775. The inscription serves as one of the most quoted statements of the American Revolution.', historicalNote: 'The boulder was placed and inscribed in 1910 to commemorate Parker\'s order to his militia. The exact wording attributed to Parker varies across sources, but the most commonly cited version is the one carved on the stone. Historians have questioned whether Parker actually spoke these precise words, as the earliest known attribution dates to 1858, more than eighty years after the battle. Regardless of their exact provenance, the words have become inseparable from Lexington\'s identity.' },
    create: { id: 'parker-boulder', townId: LEXINGTON_TOWN_ID, name: 'Captain Parker Boulder', slug: 'parker-boulder', placeType: 'MONUMENT', description: 'The Captain Parker Boulder is a large glacial boulder on Lexington Green inscribed with the words traditionally attributed to Captain John Parker on the morning of April 19, 1775. The inscription serves as one of the most quoted statements of the American Revolution.', historicalNote: 'The boulder was placed and inscribed in 1910 to commemorate Parker\'s order to his militia. The exact wording attributed to Parker varies across sources, but the most commonly cited version is the one carved on the stone. Historians have questioned whether Parker actually spoke these precise words, as the earliest known attribution dates to 1858, more than eighty years after the battle. Regardless of their exact provenance, the words have become inseparable from Lexington\'s identity.', address: 'Lexington Green, Lexington, MA 02420', hours: 'Always accessible', admission: 'Free', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'hartwell-tavern' },
    update: { slug: 'hartwell-tavern', featured: true, description: 'Hartwell Tavern is a restored colonial tavern located along the Battle Road Trail within Minute Man National Historical Park. The building dates to the mid-eighteenth century and serves as a living history site staffed by costumed interpreters during the summer season.', historicalNote: 'The tavern sat along the road between Lexington and Concord and was in the direct path of the British march and retreat on April 19, 1775. The Hartwell family who operated it were among the residents who witnessed the running battle. Today the National Park Service uses the tavern to demonstrate colonial domestic life, foodways, and militia culture for visitors exploring the Battle Road.' },
    create: { id: 'hartwell-tavern', townId: LEXINGTON_TOWN_ID, name: 'Hartwell Tavern', slug: 'hartwell-tavern', placeType: 'TAVERN', description: 'Hartwell Tavern is a restored colonial tavern located along the Battle Road Trail within Minute Man National Historical Park. The building dates to the mid-eighteenth century and serves as a living history site staffed by costumed interpreters during the summer season.', historicalNote: 'The tavern sat along the road between Lexington and Concord and was in the direct path of the British march and retreat on April 19, 1775. The Hartwell family who operated it were among the residents who witnessed the running battle. Today the National Park Service uses the tavern to demonstrate colonial domestic life, foodways, and militia culture for visitors exploring the Battle Road.', address: 'Battle Road Trail, Minute Man NHP, Lincoln, MA', hours: 'Seasonal, check NPS schedule', admission: 'Free', website: 'https://www.nps.gov/mima', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'cary-memorial-hall' },
    update: { slug: 'cary-memorial-hall', featured: true, description: 'Cary Memorial Hall, built in 1928, is Lexington\'s principal civic auditorium and meeting space. Named for Maria Cary, who bequeathed funds for its construction, the hall serves as the site of town meetings and public events, including annual Patriots\' Day ceremonies.', historicalNote: 'Though not a colonial-era building, Cary Memorial Hall represents the continuity of Lexington\'s tradition of civic self-governance that stretches back to the town meetings of the eighteenth century. The building houses historical murals and serves as the venue for the town\'s principal commemorative events related to April 19.' },
    create: { id: 'cary-memorial-hall', townId: LEXINGTON_TOWN_ID, name: 'Cary Memorial Hall', slug: 'cary-memorial-hall', placeType: 'GOVERNMENT', description: 'Cary Memorial Hall, built in 1928, is Lexington\'s principal civic auditorium and meeting space. Named for Maria Cary, who bequeathed funds for its construction, the hall serves as the site of town meetings and public events, including annual Patriots\' Day ceremonies.', historicalNote: 'Though not a colonial-era building, Cary Memorial Hall represents the continuity of Lexington\'s tradition of civic self-governance that stretches back to the town meetings of the eighteenth century. The building houses historical murals and serves as the venue for the town\'s principal commemorative events related to April 19.', address: '1605 Massachusetts Ave, Lexington, MA 02420', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'lexington-visitor-center' },
    update: { slug: 'lexington-visitor-center', featured: true, description: 'The Lexington Visitors Center is located adjacent to the Battle Green and provides orientation for visitors exploring the town\'s historic sites. It offers maps, brochures, a small exhibition space, and information about guided tours and special events.', historicalNote: 'The visitor center serves as the starting point for most tours of Lexington\'s revolutionary sites. Its location next to the Green allows visitors to begin with the battle site itself and then radiate outward to Buckman Tavern, the Hancock-Clarke House, Munroe Tavern, and the other landmarks that tell the story of April 19.' },
    create: { id: 'lexington-visitor-center', townId: LEXINGTON_TOWN_ID, name: 'Lexington Visitors Center', slug: 'lexington-visitor-center', placeType: 'MUSEUM', description: 'The Lexington Visitors Center is located adjacent to the Battle Green and provides orientation for visitors exploring the town\'s historic sites. It offers maps, brochures, a small exhibition space, and information about guided tours and special events.', historicalNote: 'The visitor center serves as the starting point for most tours of Lexington\'s revolutionary sites. Its location next to the Green allows visitors to begin with the battle site itself and then radiate outward to Buckman Tavern, the Hancock-Clarke House, Munroe Tavern, and the other landmarks that tell the story of April 19.', address: '1875 Massachusetts Ave, Lexington, MA 02420', hours: 'Daily 9am-5pm (seasonal)', admission: 'Free', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'scottish-rite-museum' },
    update: { slug: 'national-heritage-museum', featured: true, description: 'The National Heritage Museum, located near Lexington Green, houses exhibits on American history with a particular focus on the revolutionary period and the history of civic organizations. Its collections include artifacts and documents related to the events of April 19, 1775.', historicalNote: 'The museum offers rotating and permanent exhibits that place the Battle of Lexington within the broader context of American revolutionary history. Its educational programs serve school groups and the general public, supplementing the site-specific interpretation provided by the Lexington Historical Society and the National Park Service.' },
    create: { id: 'scottish-rite-museum', townId: LEXINGTON_TOWN_ID, name: 'National Heritage Museum', slug: 'national-heritage-museum', placeType: 'MUSEUM', description: 'The National Heritage Museum, located near Lexington Green, houses exhibits on American history with a particular focus on the revolutionary period and the history of civic organizations. Its collections include artifacts and documents related to the events of April 19, 1775.', historicalNote: 'The museum offers rotating and permanent exhibits that place the Battle of Lexington within the broader context of American revolutionary history. Its educational programs serve school groups and the general public, supplementing the site-specific interpretation provided by the Lexington Historical Society and the National Park Service.', address: '33 Marrett Rd, Lexington, MA 02421', hours: 'Wed-Sat 10am-4:30pm', admission: 'Free', website: 'https://www.nationalheritagemuseum.org', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'minuteman-bikeway' },
    update: { slug: 'minuteman-bikeway', featured: true, description: 'The Minuteman Commuter Bikeway is a 10-mile paved trail running from the Alewife T station in Cambridge through Arlington and Lexington to Bedford. The path follows the approximate route of Paul Revere\'s midnight ride and passes near several historic sites.', historicalNote: 'The bikeway was built on the former right-of-way of the Boston and Maine Railroad. Its route through Lexington passes close to the Green and connects to the Battle Road Trail, making it possible to trace the path of the alarm riders and the British column by bicycle or on foot. The trail has become one of the most popular recreational paths in the greater Boston area.' },
    create: { id: 'minuteman-bikeway', townId: LEXINGTON_TOWN_ID, name: 'Minuteman Commuter Bikeway', slug: 'minuteman-bikeway', placeType: 'TRAIL', description: 'The Minuteman Commuter Bikeway is a 10-mile paved trail running from the Alewife T station in Cambridge through Arlington and Lexington to Bedford. The path follows the approximate route of Paul Revere\'s midnight ride and passes near several historic sites.', historicalNote: 'The bikeway was built on the former right-of-way of the Boston and Maine Railroad. Its route through Lexington passes close to the Green and connects to the Battle Road Trail, making it possible to trace the path of the alarm riders and the British column by bicycle or on foot. The trail has become one of the most popular recreational paths in the greater Boston area.', address: 'Various access points along Massachusetts Ave, Lexington, MA', hours: 'Dawn to dusk', admission: 'Free', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'line-of-minute-men-marker' },
    update: { slug: 'line-of-minute-men-marker', featured: true, description: 'The Line of Minute Men Marker is a stone marker on the Green indicating the approximate position where Captain Parker\'s militia formed its line on the morning of April 19, 1775, facing the approaching British column.', historicalNote: 'The marker helps visitors visualize the militia\'s formation on the Green — two thin lines of approximately 77 men facing a column of some 700 British regulars. The position of the line, slightly off the main road, has been interpreted as evidence that Parker did not intend to block the British march but rather to make a symbolic show of armed resistance.' },
    create: { id: 'line-of-minute-men-marker', townId: LEXINGTON_TOWN_ID, name: 'Line of Minute Men Marker', slug: 'line-of-minute-men-marker', placeType: 'MONUMENT', description: 'The Line of Minute Men Marker is a stone marker on the Green indicating the approximate position where Captain Parker\'s militia formed its line on the morning of April 19, 1775, facing the approaching British column.', historicalNote: 'The marker helps visitors visualize the militia\'s formation on the Green — two thin lines of approximately 77 men facing a column of some 700 British regulars. The position of the line, slightly off the main road, has been interpreted as evidence that Parker did not intend to block the British march but rather to make a symbolic show of armed resistance.', address: 'Lexington Green, Lexington, MA 02420', hours: 'Always accessible', admission: 'Free', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'ye-olde-burying-ground-sign' },
    update: { slug: 'harrington-house-site', featured: true, description: 'The Jonathan Harrington House Site marks the location of the house toward which Jonathan Harrington crawled after being mortally wounded on the Green on April 19, 1775. He died on the doorstep in view of his wife and son.', historicalNote: 'The house that stands on or near the original site is a private residence. The location, at the edge of the Green, underscores the intimate scale of the battle — Harrington was shot within sight of his own home and died trying to reach it. A marker identifies the site for visitors.' },
    create: { id: 'ye-olde-burying-ground-sign', townId: LEXINGTON_TOWN_ID, name: 'Jonathan Harrington House Site', slug: 'harrington-house-site', placeType: 'LANDMARK', description: 'The Jonathan Harrington House Site marks the location of the house toward which Jonathan Harrington crawled after being mortally wounded on the Green on April 19, 1775. He died on the doorstep in view of his wife and son.', historicalNote: 'The house that stands on or near the original site is a private residence. The location, at the edge of the Green, underscores the intimate scale of the battle — Harrington was shot within sight of his own home and died trying to reach it. A marker identifies the site for visitors.', address: 'Harrington Rd at the Green, Lexington, MA 02420', hours: 'Always accessible (exterior only)', admission: 'Free', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'british-expedition-marker' },
    update: { slug: 'british-expedition-marker', featured: true, description: 'The British Expedition Marker is a stone marker along Massachusetts Avenue noting the route taken by the British column on April 19, 1775, as it marched from Boston through Lexington to Concord and back.', historicalNote: 'The marker is one of several placed along the route to help visitors trace the path of the British expedition. The markers connect Lexington\'s story to the broader narrative of April 19, which stretched from Boston to Concord and back.' },
    create: { id: 'british-expedition-marker', townId: LEXINGTON_TOWN_ID, name: 'British Expedition Marker', slug: 'british-expedition-marker', placeType: 'MONUMENT', description: 'The British Expedition Marker is a stone marker along Massachusetts Avenue noting the route taken by the British column on April 19, 1775, as it marched from Boston through Lexington to Concord and back.', historicalNote: 'The marker is one of several placed along the route to help visitors trace the path of the British expedition. The markers connect Lexington\'s story to the broader narrative of April 19, which stretched from Boston to Concord and back.', address: 'Massachusetts Ave, Lexington, MA 02420', hours: 'Always accessible', admission: 'Free', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'mason-house' },
    update: { slug: 'marrett-house', featured: true, description: 'The Marrett House is a historic residence dating to the early eighteenth century that was home to generations of the Marrett family. The house offers a view of domestic life in Lexington across several centuries.', historicalNote: 'The Marrett family were among Lexington\'s established residents during the revolutionary period. The house, which evolved over time with additions reflecting changing styles, provides insight into how a New England family home changed from the colonial era through the nineteenth century.' },
    create: { id: 'mason-house', townId: LEXINGTON_TOWN_ID, name: 'Marrett House', slug: 'marrett-house', placeType: 'HISTORIC_HOUSE', description: 'The Marrett House is a historic residence dating to the early eighteenth century that was home to generations of the Marrett family. The house offers a view of domestic life in Lexington across several centuries.', historicalNote: 'The Marrett family were among Lexington\'s established residents during the revolutionary period. The house, which evolved over time with additions reflecting changing styles, provides insight into how a New England family home changed from the colonial era through the nineteenth century.', address: '971 Massachusetts Ave, Lexington, MA 02420', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'depot-square' },
    update: { slug: 'depot-square', featured: true, description: 'Depot Square is a public gathering space in central Lexington near the site of the former railroad depot. It serves as a community focal point and is close to the Green and several historic landmarks.', historicalNote: 'The square\'s name recalls the arrival of the railroad in Lexington in the nineteenth century, which transformed the town from an isolated farming community into a suburb connected to Boston. The depot area became a commercial center that coexisted with the older colonial landscape around the Green.' },
    create: { id: 'depot-square', townId: LEXINGTON_TOWN_ID, name: 'Depot Square', slug: 'depot-square', placeType: 'LANDMARK', description: 'Depot Square is a public gathering space in central Lexington near the site of the former railroad depot. It serves as a community focal point and is close to the Green and several historic landmarks.', historicalNote: 'The square\'s name recalls the arrival of the railroad in Lexington in the nineteenth century, which transformed the town from an isolated farming community into a suburb connected to Boston. The depot area became a commercial center that coexisted with the older colonial landscape around the Green.', address: 'Depot Square, Lexington, MA 02420', hours: 'Always accessible', admission: 'Free', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'follen-community-church' },
    update: { slug: 'first-parish-church', featured: true, description: 'The First Parish Church in Lexington traces its history to the founding of the town\'s congregation in the seventeenth century. Reverend Jonas Clarke served as its minister from 1755 to 1805 and used his pulpit to shape the town\'s political consciousness in the years before the Revolution.', historicalNote: 'The current church building is not the colonial-era structure in which Clarke preached, but the congregation represents the continuous thread of community identity that runs from the colonial period to the present. Clarke\'s sermons, which blended Calvinist theology with Whig political philosophy, were a primary vehicle through which Lexington\'s residents came to understand their resistance to British authority as a moral imperative.' },
    create: { id: 'follen-community-church', townId: LEXINGTON_TOWN_ID, name: 'First Parish Church', slug: 'first-parish-church', placeType: 'CHURCH', description: 'The First Parish Church in Lexington traces its history to the founding of the town\'s congregation in the seventeenth century. Reverend Jonas Clarke served as its minister from 1755 to 1805 and used his pulpit to shape the town\'s political consciousness in the years before the Revolution.', historicalNote: 'The current church building is not the colonial-era structure in which Clarke preached, but the congregation represents the continuous thread of community identity that runs from the colonial period to the present. Clarke\'s sermons, which blended Calvinist theology with Whig political philosophy, were a primary vehicle through which Lexington\'s residents came to understand their resistance to British authority as a moral imperative.', address: '7 Harrington Rd, Lexington, MA 02420', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'lexington-depot' },
    update: { slug: 'lexington-depot', featured: true, description: 'The Lexington Depot is a restored nineteenth-century railroad station that now serves as the headquarters of the Lexington Historical Society. The building houses the society\'s offices and a small gallery.', historicalNote: 'The depot\'s conversion to a historical society headquarters symbolizes Lexington\'s transition from a railroad-era commuter town to a community deeply invested in preserving and interpreting its revolutionary heritage.' },
    create: { id: 'lexington-depot', townId: LEXINGTON_TOWN_ID, name: 'Lexington Depot', slug: 'lexington-depot', placeType: 'LANDMARK', description: 'The Lexington Depot is a restored nineteenth-century railroad station that now serves as the headquarters of the Lexington Historical Society. The building houses the society\'s offices and a small gallery.', historicalNote: 'The depot\'s conversion to a historical society headquarters symbolizes Lexington\'s transition from a railroad-era commuter town to a community deeply invested in preserving and interpreting its revolutionary heritage.', address: '13 Depot Square, Lexington, MA 02420', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'massachusetts-avenue-historic' },
    update: { slug: 'massachusetts-avenue-historic-district', featured: true, description: 'The Massachusetts Avenue Historic District encompasses the central stretch of Lexington\'s main thoroughfare, which follows the same route as the colonial road from Boston to Concord along which the British marched on April 19, 1775.', historicalNote: 'Massachusetts Avenue was the road on which the British column arrived at the Green and on which it departed toward Concord and later retreated. Walking this street is to walk the same path traveled by redcoats, militiamen, and alarm riders on the day that started the Revolution.' },
    create: { id: 'massachusetts-avenue-historic', townId: LEXINGTON_TOWN_ID, name: 'Massachusetts Avenue Historic District', slug: 'massachusetts-avenue-historic-district', placeType: 'LANDMARK', description: 'The Massachusetts Avenue Historic District encompasses the central stretch of Lexington\'s main thoroughfare, which follows the same route as the colonial road from Boston to Concord along which the British marched on April 19, 1775.', historicalNote: 'Massachusetts Avenue was the road on which the British column arrived at the Green and on which it departed toward Concord and later retreated. Walking this street is to walk the same path traveled by redcoats, militiamen, and alarm riders on the day that started the Revolution.', address: 'Massachusetts Ave, Lexington, MA 02420', hours: 'Always accessible', admission: 'Free', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'ye-olde-burying-ground-munroe' },
    update: { slug: 'robert-munroe-gravestone', featured: true, description: 'The Robert Munroe Gravestone in the Old Burying Ground marks the resting place of the oldest man killed on Lexington Green. Munroe, a veteran of the French and Indian War, was approximately sixty-five years old when he was killed on April 19, 1775.', historicalNote: 'Munroe\'s gravestone is one of the most visited markers in the cemetery. Its inscription and location serve as a direct connection to the human cost of the battle. His Scottish origins and prior military service illustrate the diverse backgrounds of the men who formed the Lexington militia.' },
    create: { id: 'ye-olde-burying-ground-munroe', townId: LEXINGTON_TOWN_ID, name: 'Robert Munroe Gravestone', slug: 'robert-munroe-gravestone', placeType: 'MONUMENT', description: 'The Robert Munroe Gravestone in the Old Burying Ground marks the resting place of the oldest man killed on Lexington Green. Munroe, a veteran of the French and Indian War, was approximately sixty-five years old when he was killed on April 19, 1775.', historicalNote: 'Munroe\'s gravestone is one of the most visited markers in the cemetery. Its inscription and location serve as a direct connection to the human cost of the battle. His Scottish origins and prior military service illustrate the diverse backgrounds of the men who formed the Lexington militia.', address: 'Old Burying Ground, Harrington Rd, Lexington, MA 02420', hours: 'Dawn to dusk', admission: 'Free', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'sanderson-house-site' },
    update: { slug: 'sanderson-house-site', featured: true, description: 'The Sanderson House Site marks the location of a house near the Green that was occupied during the events of April 19, 1775. It is one of several markers around the Green that identify the positions of buildings and landmarks from the time of the battle.', historicalNote: 'Historical markers like this one help visitors understand the built environment of 1775 Lexington, which was considerably different from today\'s landscape. The houses that lined the Green were occupied by the families of the militiamen, many of whom watched the battle from their windows.' },
    create: { id: 'sanderson-house-site', townId: LEXINGTON_TOWN_ID, name: 'Sanderson House Site', slug: 'sanderson-house-site', placeType: 'LANDMARK', description: 'The Sanderson House Site marks the location of a house near the Green that was occupied during the events of April 19, 1775. It is one of several markers around the Green that identify the positions of buildings and landmarks from the time of the battle.', historicalNote: 'Historical markers like this one help visitors understand the built environment of 1775 Lexington, which was considerably different from today\'s landscape. The houses that lined the Green were occupied by the families of the militiamen, many of whom watched the battle from their windows.', address: 'Near Lexington Green, Lexington, MA 02420', hours: 'Always accessible', admission: 'Free', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'patriots-day-parade-route' },
    update: { slug: 'patriots-day-parade-route', featured: true, description: 'The Patriots\' Day Parade Route traces the path of the annual parade held each year on the Monday closest to April 19. The parade passes through the center of Lexington and culminates at the Green, where commemorative ceremonies honor the events of 1775.', historicalNote: 'Patriots\' Day has been observed in Massachusetts since 1894 and is a state holiday. The Lexington celebrations, which include a dawn reenactment of the battle on the Green, a parade, and educational programs, draw thousands of visitors and represent the town\'s most significant annual commemoration of its revolutionary heritage.' },
    create: { id: 'patriots-day-parade-route', townId: LEXINGTON_TOWN_ID, name: "Patriots' Day Parade Route", slug: 'patriots-day-parade-route', placeType: 'LANDMARK', description: 'The Patriots\' Day Parade Route traces the path of the annual parade held each year on the Monday closest to April 19. The parade passes through the center of Lexington and culminates at the Green, where commemorative ceremonies honor the events of 1775.', historicalNote: 'Patriots\' Day has been observed in Massachusetts since 1894 and is a state holiday. The Lexington celebrations, which include a dawn reenactment of the battle on the Green, a parade, and educational programs, draw thousands of visitors and represent the town\'s most significant annual commemoration of its revolutionary heritage.', address: 'Massachusetts Ave, Lexington, MA 02420', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'muzzey-house-site' },
    update: { slug: 'muzzey-house-site', featured: true, description: 'The Isaac Muzzey House Site marks the location of the home of Isaac Muzzey, one of the eight Lexington men killed on the Green on April 19, 1775. Like Jonathan Harrington, Muzzey lived close to the Green, and his death took place within sight of his own home.', historicalNote: 'Isaac Muzzey was among the youngest of the casualties on the Green. The proximity of his house to the battle site underscores the intimate, village-scale nature of the engagement — these men were not fighting on a distant battlefield but on the ground where they lived, worked, and worshipped.' },
    create: { id: 'muzzey-house-site', townId: LEXINGTON_TOWN_ID, name: 'Isaac Muzzey House Site', slug: 'muzzey-house-site', placeType: 'LANDMARK', description: 'The Isaac Muzzey House Site marks the location of the home of Isaac Muzzey, one of the eight Lexington men killed on the Green on April 19, 1775. Like Jonathan Harrington, Muzzey lived close to the Green, and his death took place within sight of his own home.', historicalNote: 'Isaac Muzzey was among the youngest of the casualties on the Green. The proximity of his house to the battle site underscores the intimate, village-scale nature of the engagement — these men were not fighting on a distant battlefield but on the ground where they lived, worked, and worshipped.', address: 'Near Lexington Green, Lexington, MA 02420', hours: 'Always accessible', admission: 'Free', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'tower-park' },
    update: { slug: 'tower-park', featured: true, description: 'Tower Park is a small public park in Lexington that features a stone observation tower offering views of the surrounding landscape. The park provides a quiet retreat from the busier historic sites near the Green.', historicalNote: 'The park\'s elevated position gives visitors a sense of the terrain that surrounded colonial Lexington — the rolling hills, wooded areas, and farmland that characterized the town in the eighteenth century and that influenced the military movements of April 19, 1775.' },
    create: { id: 'tower-park', townId: LEXINGTON_TOWN_ID, name: 'Tower Park', slug: 'tower-park', placeType: 'LANDMARK', description: 'Tower Park is a small public park in Lexington that features a stone observation tower offering views of the surrounding landscape. The park provides a quiet retreat from the busier historic sites near the Green.', historicalNote: 'The park\'s elevated position gives visitors a sense of the terrain that surrounded colonial Lexington — the rolling hills, wooded areas, and farmland that characterized the town in the eighteenth century and that influenced the military movements of April 19, 1775.', address: 'Tower Park, Lexington, MA 02420', hours: 'Dawn to dusk', admission: 'Free', featured: true },
  });

  await prisma.place.upsert({
    where: { id: 'the-liberty-ride' },
    update: { slug: 'liberty-ride-trolley', featured: true, description: 'The Liberty Ride is a narrated trolley tour that takes visitors through Lexington\'s historic sites, including the Green, Buckman Tavern, the Hancock-Clarke House, Munroe Tavern, and other landmarks associated with the events of April 19, 1775.', historicalNote: 'The trolley tour provides an accessible way to visit sites spread across Lexington\'s geography, connecting the Green and its immediate surroundings to more distant locations like Munroe Tavern and the entrance to the Battle Road Trail. The narration places each stop within the chronological sequence of the day\'s events.' },
    create: { id: 'the-liberty-ride', townId: LEXINGTON_TOWN_ID, name: 'Liberty Ride Trolley Tour', slug: 'liberty-ride-trolley', placeType: 'LANDMARK', description: 'The Liberty Ride is a narrated trolley tour that takes visitors through Lexington\'s historic sites, including the Green, Buckman Tavern, the Hancock-Clarke House, Munroe Tavern, and other landmarks associated with the events of April 19, 1775.', historicalNote: 'The trolley tour provides an accessible way to visit sites spread across Lexington\'s geography, connecting the Green and its immediate surroundings to more distant locations like Munroe Tavern and the entrance to the Battle Road Trail. The narration places each stop within the chronological sequence of the day\'s events.', address: 'Departs from Lexington Visitors Center, 1875 Massachusetts Ave, Lexington, MA 02420', hours: 'Seasonal, check schedule', admission: 'Fee varies', featured: true },
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
    where: { id: 'event-revere-dawes-warning' },
    update: { slug: 'revere-dawes-warning', summary: `On the night of April 18, 1775, Dr. Joseph Warren in Boston dispatched two riders to carry an urgent warning to Lexington: Paul Revere by the water route across the Charles River, and William Dawes by the land route through Boston Neck and Roxbury. Their mission was to alert Samuel Adams and John Hancock, who were lodging at Reverend Jonas Clarke's parsonage, that a column of approximately 700 British regulars was marching from Boston with orders to arrest the patriot leaders and seize military supplies stored in Concord.

Revere crossed the Charles River by rowboat, narrowly passing the warship HMS Somerset, and was provided a horse in Charlestown. He rode through Medford and Menotomy (now Arlington), raising the alarm at every house along the way. Church bells began to ring and signal guns were fired as the alarm spread faster than any single rider could travel. Revere arrived at the Clarke parsonage around midnight. Dawes, who had taken the longer route through Roxbury, Brookline, and Cambridge, arrived approximately thirty minutes later.

The success of both riders in reaching Lexington demonstrated the effectiveness of the patriot intelligence and communication network that had been built over the preceding months. Warren's decision to send two riders by different routes was a calculated redundancy — if one was intercepted, the other might get through. The alarm system they set in motion that night reached dozens of towns across eastern Massachusetts before dawn, ensuring that thousands of militia would be ready to respond when the British column arrived.` },
    create: { id: 'event-revere-dawes-warning', townId: LEXINGTON_TOWN_ID, name: 'Paul Revere and William Dawes Warn Lexington', slug: 'revere-dawes-warning', startDate: new Date('1775-04-19T00:00:00.000Z'), datePrecision: 'DAY', summary: `On the night of April 18, 1775, Dr. Joseph Warren in Boston dispatched two riders to carry an urgent warning to Lexington: Paul Revere by the water route across the Charles River, and William Dawes by the land route through Boston Neck and Roxbury. Their mission was to alert Samuel Adams and John Hancock, who were lodging at Reverend Jonas Clarke's parsonage, that a column of approximately 700 British regulars was marching from Boston with orders to arrest the patriot leaders and seize military supplies stored in Concord.

Revere crossed the Charles River by rowboat, narrowly passing the warship HMS Somerset, and was provided a horse in Charlestown. He rode through Medford and Menotomy (now Arlington), raising the alarm at every house along the way. Church bells began to ring and signal guns were fired as the alarm spread faster than any single rider could travel. Revere arrived at the Clarke parsonage around midnight. Dawes, who had taken the longer route through Roxbury, Brookline, and Cambridge, arrived approximately thirty minutes later.

The success of both riders in reaching Lexington demonstrated the effectiveness of the patriot intelligence and communication network that had been built over the preceding months. Warren's decision to send two riders by different routes was a calculated redundancy — if one was intercepted, the other might get through. The alarm system they set in motion that night reached dozens of towns across eastern Massachusetts before dawn, ensuring that thousands of militia would be ready to respond when the British column arrived.`, significanceWeight: 95 },
  });

  await prisma.event.upsert({
    where: { id: 'event-lexington-hancock-clarke-warning' },
    update: { slug: 'hancock-clarke-warning', summary: `Paul Revere arrived at the Hancock-Clarke parsonage in Lexington around midnight on April 19, 1775, and demanded entry. Sergeant William Munroe, who had been posted as a sentry by the Hancock family, told Revere not to make so much noise, to which Revere replied that the noise would soon be far more alarming. Reverend Jonas Clarke admitted Revere, who informed Adams and Hancock that the British regulars were on the march.

The scene inside the parsonage over the next several hours was one of urgent debate. John Hancock, characteristically bold, insisted on staying to fight alongside the militia. Samuel Adams argued strenuously that Hancock's political leadership was far too valuable to risk on a village green. Dorothy Quincy, Hancock's fiancee, and Hancock's aunt Lydia joined the argument on Adams's side. The debate continued even as William Dawes arrived with confirmation of Revere's report, and as the Lexington militia began to muster on the Green outside.

The warning at the Clarke parsonage was the critical link in the chain of events that unfolded over the next several hours. It gave Adams and Hancock time to flee to safety, ensured that the Lexington militia was alerted, and sent Revere and Dawes riding on toward Concord to extend the alarm. Without the warning, the British might have captured two of the most important leaders of the patriot movement.` },
    create: { id: 'event-lexington-hancock-clarke-warning', townId: LEXINGTON_TOWN_ID, name: 'Hancock and Adams Warned at Clarke House', slug: 'hancock-clarke-warning', startDate: new Date('1775-04-19T00:00:00.000Z'), datePrecision: 'DAY', summary: `Paul Revere arrived at the Hancock-Clarke parsonage in Lexington around midnight on April 19, 1775, and demanded entry. Sergeant William Munroe, who had been posted as a sentry by the Hancock family, told Revere not to make so much noise, to which Revere replied that the noise would soon be far more alarming. Reverend Jonas Clarke admitted Revere, who informed Adams and Hancock that the British regulars were on the march.

The scene inside the parsonage over the next several hours was one of urgent debate. John Hancock, characteristically bold, insisted on staying to fight alongside the militia. Samuel Adams argued strenuously that Hancock's political leadership was far too valuable to risk on a village green. Dorothy Quincy, Hancock's fiancee, and Hancock's aunt Lydia joined the argument on Adams's side. The debate continued even as William Dawes arrived with confirmation of Revere's report, and as the Lexington militia began to muster on the Green outside.

The warning at the Clarke parsonage was the critical link in the chain of events that unfolded over the next several hours. It gave Adams and Hancock time to flee to safety, ensured that the Lexington militia was alerted, and sent Revere and Dawes riding on toward Concord to extend the alarm. Without the warning, the British might have captured two of the most important leaders of the patriot movement.`, significanceWeight: 90 },
  });

  await prisma.event.upsert({
    where: { id: 'event-lexington-alarm-riders' },
    update: { slug: 'alarm-riders-middlesex', summary: `After Paul Revere and William Dawes reached Lexington, the alarm spread outward through Middlesex County like ripples in a pond. Local riders set out from Lexington to warn neighboring towns — Bedford, Woburn, Billerica, Tewksbury, and others. Church bells rang, signal guns were fired, and bonfires were lit on hilltops. Within hours, the alarm had reached communities thirty and forty miles from Boston.

The speed at which the alarm traveled was the product of months of preparation. The patriot network had established a system of riders, signals, and relay points specifically for this contingency. Each town had designated individuals responsible for carrying the warning to the next town, creating a cascading chain of alerts that moved far faster than any single rider could travel. By dawn, militia companies were mustering across the entire region.

The alarm riders of April 18-19 represented a triumph of grassroots organization. They were farmers, tradesmen, and local officials who had rehearsed this system and understood their roles. The result was that when the British column reached Lexington at dawn, thousands of colonial militia were already on the march from towns throughout eastern Massachusetts, converging on the road between Lexington and Concord.` },
    create: { id: 'event-lexington-alarm-riders', townId: LEXINGTON_TOWN_ID, name: 'Alarm Riders Spread Through Middlesex County', slug: 'alarm-riders-middlesex', startDate: new Date('1775-04-19T00:30:00.000Z'), datePrecision: 'DAY', summary: `After Paul Revere and William Dawes reached Lexington, the alarm spread outward through Middlesex County like ripples in a pond. Local riders set out from Lexington to warn neighboring towns — Bedford, Woburn, Billerica, Tewksbury, and others. Church bells rang, signal guns were fired, and bonfires were lit on hilltops. Within hours, the alarm had reached communities thirty and forty miles from Boston.

The speed at which the alarm traveled was the product of months of preparation. The patriot network had established a system of riders, signals, and relay points specifically for this contingency. Each town had designated individuals responsible for carrying the warning to the next town, creating a cascading chain of alerts that moved far faster than any single rider could travel. By dawn, militia companies were mustering across the entire region.

The alarm riders of April 18-19 represented a triumph of grassroots organization. They were farmers, tradesmen, and local officials who had rehearsed this system and understood their roles. The result was that when the British column reached Lexington at dawn, thousands of colonial militia were already on the march from towns throughout eastern Massachusetts, converging on the road between Lexington and Concord.`, significanceWeight: 80 },
  });

  await prisma.event.upsert({
    where: { id: 'event-parker-muster' },
    update: { slug: 'parker-muster', summary: `Captain John Parker ordered the Lexington militia to muster on the Green at approximately 1:00 a.m. on April 19, 1775, after receiving confirmation from Paul Revere that the British column was on the march. The town's bell on Belfry Hill was rung and the militia's drummer, likely William Diamond, beat the call to arms. Approximately 77 men assembled on the Green in the cold darkness.

Parker, who was suffering from tuberculosis and had only months to live, faced an impossible tactical situation. His 77 men, armed with a mix of muskets and fowling pieces, stood against a column of approximately 700 professionally trained British regulars. Parker could not hope to stop the column; the question was whether to make a stand, however symbolic, or to stand down. He chose to muster his men as a demonstration of resolve, reportedly telling them not to fire unless fired upon.

When scouts reported that the British column had not yet appeared, Parker dismissed the company, telling them to reassemble at the beat of the drum. Many of the men retired to Buckman Tavern, just yards from the Green, to wait. They would wait approximately three hours before the drum sounded again, calling them back to a confrontation that would change the course of history.` },
    create: { id: 'event-parker-muster', townId: LEXINGTON_TOWN_ID, name: 'Captain Parker Musters the Militia', slug: 'parker-muster', startDate: new Date('1775-04-19T01:00:00.000Z'), datePrecision: 'DAY', summary: `Captain John Parker ordered the Lexington militia to muster on the Green at approximately 1:00 a.m. on April 19, 1775, after receiving confirmation from Paul Revere that the British column was on the march. The town's bell on Belfry Hill was rung and the militia's drummer, likely William Diamond, beat the call to arms. Approximately 77 men assembled on the Green in the cold darkness.

Parker, who was suffering from tuberculosis and had only months to live, faced an impossible tactical situation. His 77 men, armed with a mix of muskets and fowling pieces, stood against a column of approximately 700 professionally trained British regulars. Parker could not hope to stop the column; the question was whether to make a stand, however symbolic, or to stand down. He chose to muster his men as a demonstration of resolve, reportedly telling them not to fire unless fired upon.

When scouts reported that the British column had not yet appeared, Parker dismissed the company, telling them to reassemble at the beat of the drum. Many of the men retired to Buckman Tavern, just yards from the Green, to wait. They would wait approximately three hours before the drum sounded again, calling them back to a confrontation that would change the course of history.`, significanceWeight: 90 },
  });

  await prisma.event.upsert({
    where: { id: 'event-buckman-tavern-muster' },
    update: { slug: 'buckman-tavern-muster', summary: `After Captain Parker's initial muster dispersed around 2:00 a.m. on April 19, many of the Lexington militiamen gathered in Buckman Tavern to wait for further developments. The tavern, located directly on the edge of the Green, became the staging area for the company — a warm place to wait while scouts watched the road from Boston for signs of the approaching British column.

For approximately three hours, the men waited in the tap room. Some drank, some dozed, some checked their weapons. The atmosphere was tense but uncertain — the alarm might prove to be a false one, as earlier alerts had been. Sergeant Ebenezer Munroe and other non-commissioned officers kept the men organized and ready to reassemble at a moment's notice. Scouts sent toward Cambridge and Menotomy returned periodically with updates.

When the scouts finally reported that the British column was close — visible in the growing light, their scarlet coats unmistakable — the drum beat again and the men rushed from the tavern to form up on the Green. The transition from tavern to battlefield took only minutes, and some of the men who walked out of Buckman Tavern that morning never walked back in.` },
    create: { id: 'event-buckman-tavern-muster', townId: LEXINGTON_TOWN_ID, name: 'Militia Assembles at Buckman Tavern', slug: 'buckman-tavern-muster', startDate: new Date('1775-04-19T02:00:00.000Z'), datePrecision: 'DAY', summary: `After Captain Parker's initial muster dispersed around 2:00 a.m. on April 19, many of the Lexington militiamen gathered in Buckman Tavern to wait for further developments. The tavern, located directly on the edge of the Green, became the staging area for the company — a warm place to wait while scouts watched the road from Boston for signs of the approaching British column.

For approximately three hours, the men waited in the tap room. Some drank, some dozed, some checked their weapons. The atmosphere was tense but uncertain — the alarm might prove to be a false one, as earlier alerts had been. Sergeant Ebenezer Munroe and other non-commissioned officers kept the men organized and ready to reassemble at a moment's notice. Scouts sent toward Cambridge and Menotomy returned periodically with updates.

When the scouts finally reported that the British column was close — visible in the growing light, their scarlet coats unmistakable — the drum beat again and the men rushed from the tavern to form up on the Green. The transition from tavern to battlefield took only minutes, and some of the men who walked out of Buckman Tavern that morning never walked back in.`, significanceWeight: 75 },
  });

  await prisma.event.upsert({
    where: { id: 'event-hancock-adams-escape' },
    update: { slug: 'hancock-adams-escape', summary: `In the hours before dawn on April 19, 1775, Samuel Adams and John Hancock finally departed the Clarke parsonage and fled Lexington. The debate over whether to stay or go had consumed much of the night, with Hancock insisting on joining the militia and Adams arguing that their political leadership was essential to the patriot cause. Adams reportedly told Hancock that it was not their business to be in the fight — that their role was to direct the larger movement.

The party that fled included Hancock, Adams, Dorothy Quincy (Hancock's fiancee), and Hancock's aunt Lydia. They traveled by carriage toward Woburn, then on to Billerica, eventually reaching the safety of the countryside well before the British arrived at the Green. As their carriage moved through the pre-dawn darkness, the sounds of the militia mustering on the Green and the distant alarm bells of neighboring towns filled the air.

Adams's insistence on flight proved prescient. Had Hancock and Adams been captured, the patriot movement would have lost two of its most important leaders at the moment of greatest crisis. Adams is reported to have exclaimed, as he heard the distant sound of gunfire from the Green, that it was a fine day — meaning that the conflict had finally begun and the colonies would now be forced to commit to armed resistance.` },
    create: { id: 'event-hancock-adams-escape', townId: LEXINGTON_TOWN_ID, name: 'Adams and Hancock Flee to Safety', slug: 'hancock-adams-escape', startDate: new Date('1775-04-19T03:30:00.000Z'), datePrecision: 'DAY', summary: `In the hours before dawn on April 19, 1775, Samuel Adams and John Hancock finally departed the Clarke parsonage and fled Lexington. The debate over whether to stay or go had consumed much of the night, with Hancock insisting on joining the militia and Adams arguing that their political leadership was essential to the patriot cause. Adams reportedly told Hancock that it was not their business to be in the fight — that their role was to direct the larger movement.

The party that fled included Hancock, Adams, Dorothy Quincy (Hancock's fiancee), and Hancock's aunt Lydia. They traveled by carriage toward Woburn, then on to Billerica, eventually reaching the safety of the countryside well before the British arrived at the Green. As their carriage moved through the pre-dawn darkness, the sounds of the militia mustering on the Green and the distant alarm bells of neighboring towns filled the air.

Adams's insistence on flight proved prescient. Had Hancock and Adams been captured, the patriot movement would have lost two of its most important leaders at the moment of greatest crisis. Adams is reported to have exclaimed, as he heard the distant sound of gunfire from the Green, that it was a fine day — meaning that the conflict had finally begun and the colonies would now be forced to commit to armed resistance.`, significanceWeight: 80 },
  });

  await prisma.event.upsert({
    where: { id: 'event-lexington-battle' },
    update: { slug: 'battle-of-lexington', summary: `At approximately 5:00 a.m. on April 19, 1775, the British advance guard under Major John Pitcairn arrived at Lexington Green to find Captain John Parker's militia formed in two lines. The roughly 77 colonials faced approximately 700 British regulars — professional soldiers of the 4th, 5th, 10th, 23rd, 38th, 43rd, 47th, and 52nd regiments of foot, along with a detachment of Royal Marines. The disparity in numbers was overwhelming.

Pitcairn rode forward and ordered the militia to lay down their arms and disperse. Parker, recognizing that resistance was futile against such odds, appears to have ordered his men to disperse but not to lay down their weapons. As the militia began to break formation, a shot rang out — the famous "shot heard round the world." To this day, no one knows with certainty who fired it. The British soldiers, without waiting for orders, opened a ragged volley into the militia and then charged with bayonets. The engagement lasted only minutes.

Eight Lexington men were killed: Robert Munroe, Jonas Parker, Samuel Hadley, Jonathan Harrington, Isaac Muzzey, Caleb Harrington, John Brown, and Asahel Porter. Ten others were wounded, including Prince Estabrook, an enslaved man who became the first Black American casualty of the Revolution. The British suffered one soldier wounded and Major Pitcairn's horse was grazed. After the firing, the British officers restored order, the column reformed, gave three cheers of victory, and marched on toward Concord. Behind them on the Green, the dead and wounded lay among the spring grass.` },
    create: { id: 'event-lexington-battle', townId: LEXINGTON_TOWN_ID, name: 'Battle of Lexington', slug: 'battle-of-lexington', startDate: new Date('1775-04-19T05:00:00.000Z'), datePrecision: 'DAY', summary: `At approximately 5:00 a.m. on April 19, 1775, the British advance guard under Major John Pitcairn arrived at Lexington Green to find Captain John Parker's militia formed in two lines. The roughly 77 colonials faced approximately 700 British regulars — professional soldiers of the 4th, 5th, 10th, 23rd, 38th, 43rd, 47th, and 52nd regiments of foot, along with a detachment of Royal Marines. The disparity in numbers was overwhelming.

Pitcairn rode forward and ordered the militia to lay down their arms and disperse. Parker, recognizing that resistance was futile against such odds, appears to have ordered his men to disperse but not to lay down their weapons. As the militia began to break formation, a shot rang out — the famous "shot heard round the world." To this day, no one knows with certainty who fired it. The British soldiers, without waiting for orders, opened a ragged volley into the militia and then charged with bayonets. The engagement lasted only minutes.

Eight Lexington men were killed: Robert Munroe, Jonas Parker, Samuel Hadley, Jonathan Harrington, Isaac Muzzey, Caleb Harrington, John Brown, and Asahel Porter. Ten others were wounded, including Prince Estabrook, an enslaved man who became the first Black American casualty of the Revolution. The British suffered one soldier wounded and Major Pitcairn's horse was grazed. After the firing, the British officers restored order, the column reformed, gave three cheers of victory, and marched on toward Concord. Behind them on the Green, the dead and wounded lay among the spring grass.`, significanceWeight: 100 },
  });

  await prisma.event.upsert({
    where: { id: 'event-british-retreat-lexington' },
    update: { slug: 'british-retreat-lexington', summary: `On the afternoon of April 19, 1775, the British column retreated from Concord through Lexington under increasingly devastating fire from colonial militia that had assembled from towns across Middlesex County. By the time the column reached Lexington, the soldiers were exhausted, low on ammunition, and taking casualties at an alarming rate. The running battle along the road had devolved into a desperate fight for survival.

Captain John Parker, who had been humiliated on the Green that morning, had reassembled his Lexington company and positioned them behind a hillside near Fiske Hill, along the road the British would have to travel. When the column passed, Parker's men opened fire in a coordinated ambush that inflicted significant casualties. It was a measure of revenge for the eight men killed that morning, and it demonstrated that the Lexington militia was not defeated — only bloodied.

Brigadier General Hugh Percy's relief column of approximately 1,000 fresh soldiers met the retreating force near Lexington and provided the firepower and discipline needed to prevent a complete rout. Percy set up his headquarters at Munroe Tavern and used his two cannons to hold the colonial militia at bay while the exhausted regulars rested and regrouped. The combined force then continued its retreat toward Boston, fighting all the way. By the end of the day, 73 British soldiers were dead, 174 wounded, and 26 missing. Colonial casualties totaled 49 dead, 39 wounded, and 5 missing.` },
    create: { id: 'event-british-retreat-lexington', townId: LEXINGTON_TOWN_ID, name: 'British Retreat Through Lexington', slug: 'british-retreat-lexington', startDate: new Date('1775-04-19T15:00:00.000Z'), datePrecision: 'DAY', summary: `On the afternoon of April 19, 1775, the British column retreated from Concord through Lexington under increasingly devastating fire from colonial militia that had assembled from towns across Middlesex County. By the time the column reached Lexington, the soldiers were exhausted, low on ammunition, and taking casualties at an alarming rate. The running battle along the road had devolved into a desperate fight for survival.

Captain John Parker, who had been humiliated on the Green that morning, had reassembled his Lexington company and positioned them behind a hillside near Fiske Hill, along the road the British would have to travel. When the column passed, Parker's men opened fire in a coordinated ambush that inflicted significant casualties. It was a measure of revenge for the eight men killed that morning, and it demonstrated that the Lexington militia was not defeated — only bloodied.

Brigadier General Hugh Percy's relief column of approximately 1,000 fresh soldiers met the retreating force near Lexington and provided the firepower and discipline needed to prevent a complete rout. Percy set up his headquarters at Munroe Tavern and used his two cannons to hold the colonial militia at bay while the exhausted regulars rested and regrouped. The combined force then continued its retreat toward Boston, fighting all the way. By the end of the day, 73 British soldiers were dead, 174 wounded, and 26 missing. Colonial casualties totaled 49 dead, 39 wounded, and 5 missing.`, significanceWeight: 90 },
  });

  await prisma.event.upsert({
    where: { id: 'event-lexington-depositions' },
    update: { slug: 'lexington-depositions', summary: `Within days of the battle, the Massachusetts Provincial Congress organized the collection of sworn depositions from participants and eyewitnesses to the events of April 19. The depositions from Lexington residents and others present at the Green were among the most important, as they addressed the critical question of who fired the first shot — a matter of intense propaganda warfare between the colonial and British sides.

The depositions were collected under the direction of the Committee of Safety and notarized by justices of the peace. Captain John Parker provided a deposition, as did numerous militiamen and bystanders including Sylvanus Wood, Ebenezer Munroe, and others. The colonial depositions consistently maintained that the British fired first and without provocation. British accounts, by contrast, claimed that the colonials initiated the firing.

The Provincial Congress rushed the depositions to England aboard the fast schooner Quero, which arrived before the official British dispatches. This propaganda coup ensured that the colonial version of events was the first to reach the British public, Parliament, and the international community. The depositions remain among the most important primary sources for understanding the Battle of Lexington and are housed at the Massachusetts State Archives. Their collection represented a sophisticated understanding of the importance of controlling the narrative — a lesson in information warfare that preceded the military conflict.` },
    create: { id: 'event-lexington-depositions', townId: LEXINGTON_TOWN_ID, name: 'Lexington Depositions Collected', slug: 'lexington-depositions', startDate: new Date('1775-04-25T00:00:00.000Z'), datePrecision: 'DAY', summary: `Within days of the battle, the Massachusetts Provincial Congress organized the collection of sworn depositions from participants and eyewitnesses to the events of April 19. The depositions from Lexington residents and others present at the Green were among the most important, as they addressed the critical question of who fired the first shot — a matter of intense propaganda warfare between the colonial and British sides.

The depositions were collected under the direction of the Committee of Safety and notarized by justices of the peace. Captain John Parker provided a deposition, as did numerous militiamen and bystanders including Sylvanus Wood, Ebenezer Munroe, and others. The colonial depositions consistently maintained that the British fired first and without provocation. British accounts, by contrast, claimed that the colonials initiated the firing.

The Provincial Congress rushed the depositions to England aboard the fast schooner Quero, which arrived before the official British dispatches. This propaganda coup ensured that the colonial version of events was the first to reach the British public, Parliament, and the international community. The depositions remain among the most important primary sources for understanding the Battle of Lexington and are housed at the Massachusetts State Archives. Their collection represented a sophisticated understanding of the importance of controlling the narrative — a lesson in information warfare that preceded the military conflict.`, significanceWeight: 75 },
  });

  await prisma.event.upsert({
    where: { id: 'event-lexington-memorial-1799' },
    update: { slug: 'lexington-memorial-1799', summary: `On July 4, 1799, the town of Lexington erected the Revolutionary Monument on the Green — the first public war memorial in the United States dedicated to the fallen of the American Revolution. The stone obelisk was placed near the site where the militia had formed on April 19, 1775, and inscribed with the names of the eight men killed in the battle.

The decision to erect a permanent memorial reflected a growing awareness in the young republic that the events of April 19 needed to be preserved in public memory. The revolutionary generation was aging, and the men who had stood on the Green were dying or had already died. Captain Parker himself had died of tuberculosis less than five months after the battle. The monument was intended to ensure that their sacrifice would not be forgotten.

The dedication ceremony on July 4 drew a large crowd and included speeches, military salutes, and prayers. The monument established a precedent for public war memorials in the United States and set the template for the culture of commemoration that would develop throughout the nineteenth century. In 1835, the remains of the eight men killed on the Green were exhumed from the Old Burying Ground and reinterred beneath the monument, giving it an additional layer of sacred significance as both memorial and grave.` },
    create: { id: 'event-lexington-memorial-1799', townId: LEXINGTON_TOWN_ID, name: 'First Memorial Erected on Lexington Green', slug: 'lexington-memorial-1799', startDate: new Date('1799-07-04T00:00:00.000Z'), datePrecision: 'DAY', summary: `On July 4, 1799, the town of Lexington erected the Revolutionary Monument on the Green — the first public war memorial in the United States dedicated to the fallen of the American Revolution. The stone obelisk was placed near the site where the militia had formed on April 19, 1775, and inscribed with the names of the eight men killed in the battle.

The decision to erect a permanent memorial reflected a growing awareness in the young republic that the events of April 19 needed to be preserved in public memory. The revolutionary generation was aging, and the men who had stood on the Green were dying or had already died. Captain Parker himself had died of tuberculosis less than five months after the battle. The monument was intended to ensure that their sacrifice would not be forgotten.

The dedication ceremony on July 4 drew a large crowd and included speeches, military salutes, and prayers. The monument established a precedent for public war memorials in the United States and set the template for the culture of commemoration that would develop throughout the nineteenth century. In 1835, the remains of the eight men killed on the Green were exhumed from the Old Burying Ground and reinterred beneath the monument, giving it an additional layer of sacred significance as both memorial and grave.`, significanceWeight: 70 },
  });

  // --- 10 New Events ---

  await prisma.event.upsert({
    where: { id: 'event-lexington-committee-safety' },
    update: { slug: 'lexington-committee-safety', summary: `In 1774, as tensions between the colonies and Britain escalated following the passage of the Coercive Acts, Lexington established its own Committee of Safety to coordinate the town's defense and political resistance. Reverend Jonas Clarke served as a leading figure on the committee, which worked in concert with the Provincial Congress and similar committees in neighboring towns to prepare for a potential military confrontation.

The committee oversaw the organization of the militia, the stockpiling of arms and ammunition, and the development of the alarm system that would prove so effective on April 18-19, 1775. It also served as the town's political voice, drafting resolves that expressed Lexington's opposition to parliamentary authority and its commitment to colonial self-governance. These local committees of safety were the grassroots infrastructure of the Revolution, translating the abstract principles of liberty into concrete preparations for armed resistance.

Lexington's committee represented the democratic tradition of town-meeting governance that characterized New England politics. The decisions to arm the militia, to drill regularly, and to establish an alarm network were made collectively by the townspeople — not imposed by distant leaders. This local agency would prove essential when the crisis arrived.` },
    create: { id: 'event-lexington-committee-safety', townId: LEXINGTON_TOWN_ID, name: 'Lexington Establishes Committee of Safety', slug: 'lexington-committee-safety', startDate: new Date('1774-09-01T00:00:00.000Z'), datePrecision: 'MONTH', summary: `In 1774, as tensions between the colonies and Britain escalated following the passage of the Coercive Acts, Lexington established its own Committee of Safety to coordinate the town's defense and political resistance. Reverend Jonas Clarke served as a leading figure on the committee, which worked in concert with the Provincial Congress and similar committees in neighboring towns to prepare for a potential military confrontation.

The committee oversaw the organization of the militia, the stockpiling of arms and ammunition, and the development of the alarm system that would prove so effective on April 18-19, 1775. It also served as the town's political voice, drafting resolves that expressed Lexington's opposition to parliamentary authority and its commitment to colonial self-governance. These local committees of safety were the grassroots infrastructure of the Revolution, translating the abstract principles of liberty into concrete preparations for armed resistance.

Lexington's committee represented the democratic tradition of town-meeting governance that characterized New England politics. The decisions to arm the militia, to drill regularly, and to establish an alarm network were made collectively by the townspeople — not imposed by distant leaders. This local agency would prove essential when the crisis arrived.`, significanceWeight: 60 },
  });

  await prisma.event.upsert({
    where: { id: 'event-lexington-provincial-congress' },
    update: { slug: 'lexington-provincial-congress', summary: `In October 1774, delegates from towns across Massachusetts convened the Provincial Congress, an extralegal body that effectively assumed governmental authority after Royal Governor Thomas Gage dissolved the General Court. Lexington sent delegates to this congress, which met alternately in Concord, Cambridge, and other locations outside British-controlled Boston.

The Provincial Congress authorized the creation of an army of minutemen — militia units that could be ready to march at a minute's notice — and directed towns to organize their defenses. Lexington's participation in the congress linked the small farming town to the colony-wide resistance movement and ensured that the town's militia preparations were coordinated with the broader strategy of the patriot leadership.

The congress also directed the collection and storage of military supplies at Concord, which became the immediate objective of the British expedition on April 19. Lexington's delegates would have been acutely aware that their town lay directly on the road between Boston and Concord and would be in the path of any British march westward.` },
    create: { id: 'event-lexington-provincial-congress', townId: LEXINGTON_TOWN_ID, name: 'Lexington Delegates Attend Provincial Congress', slug: 'lexington-provincial-congress', startDate: new Date('1774-10-11T00:00:00.000Z'), datePrecision: 'DAY', summary: `In October 1774, delegates from towns across Massachusetts convened the Provincial Congress, an extralegal body that effectively assumed governmental authority after Royal Governor Thomas Gage dissolved the General Court. Lexington sent delegates to this congress, which met alternately in Concord, Cambridge, and other locations outside British-controlled Boston.

The Provincial Congress authorized the creation of an army of minutemen — militia units that could be ready to march at a minute's notice — and directed towns to organize their defenses. Lexington's participation in the congress linked the small farming town to the colony-wide resistance movement and ensured that the town's militia preparations were coordinated with the broader strategy of the patriot leadership.

The congress also directed the collection and storage of military supplies at Concord, which became the immediate objective of the British expedition on April 19. Lexington's delegates would have been acutely aware that their town lay directly on the road between Boston and Concord and would be in the path of any British march westward.`, significanceWeight: 55 },
  });

  await prisma.event.upsert({
    where: { id: 'event-lexington-militia-drills' },
    update: { slug: 'lexington-militia-drills', summary: `During the winter of 1774-75, the Lexington militia intensified its training schedule in anticipation of a possible military confrontation with British forces. Captain John Parker drilled his men regularly on the Green, practicing formations, manual of arms, and response to alarm signals. The training transformed a peacetime militia company into a more disciplined fighting force.

Militia service was compulsory for all able-bodied men between the ages of sixteen and sixty in colonial Massachusetts. The Lexington company included farmers, tradesmen, and laborers of all ages — from teenage boys like Jedediah Munroe, the drummer, to veterans of the French and Indian War like Robert Munroe. The winter drills brought these men together in shared purpose and built the unit cohesion that would hold them on the Green on April 19.

The drills also served a political function. Each time the militia assembled on the Green with their weapons, they made a visible statement of the town's willingness to resist. The sight of armed citizens training for battle was a form of political expression that complemented the written resolves and committee proceedings that occupied the town's leaders.` },
    create: { id: 'event-lexington-militia-drills', townId: LEXINGTON_TOWN_ID, name: 'Lexington Militia Intensifies Training', slug: 'lexington-militia-drills', startDate: new Date('1774-12-01T00:00:00.000Z'), datePrecision: 'MONTH', summary: `During the winter of 1774-75, the Lexington militia intensified its training schedule in anticipation of a possible military confrontation with British forces. Captain John Parker drilled his men regularly on the Green, practicing formations, manual of arms, and response to alarm signals. The training transformed a peacetime militia company into a more disciplined fighting force.

Militia service was compulsory for all able-bodied men between the ages of sixteen and sixty in colonial Massachusetts. The Lexington company included farmers, tradesmen, and laborers of all ages — from teenage boys like Jedediah Munroe, the drummer, to veterans of the French and Indian War like Robert Munroe. The winter drills brought these men together in shared purpose and built the unit cohesion that would hold them on the Green on April 19.

The drills also served a political function. Each time the militia assembled on the Green with their weapons, they made a visible statement of the town's willingness to resist. The sight of armed citizens training for battle was a form of political expression that complemented the written resolves and committee proceedings that occupied the town's leaders.`, significanceWeight: 50 },
  });

  await prisma.event.upsert({
    where: { id: 'event-lexington-alarm-system' },
    update: { slug: 'lexington-alarm-system', summary: `In the early months of 1775, the patriot network in Massachusetts established a coordinated alarm system designed to rapidly spread warning of any British military movement from Boston into the countryside. Lexington played a key role in this system, positioned as it was on the main road between Boston and the military stores at Concord.

The alarm system relied on a combination of express riders, church bells, signal guns, and bonfires. Each town designated specific individuals to receive and relay the alarm to neighboring communities, creating a cascading network that could transmit a warning across dozens of miles within hours. Paul Revere's intelligence network in Boston — a group of approximately thirty artisans and mechanics who monitored British troop movements — served as the early warning component of the system.

The system was tested by several false alarms in the weeks before April 19, which helped refine the process and ensure that the relay chain functioned smoothly. When the real alarm came on the night of April 18, the system performed exactly as designed, spreading the warning faster than the British column could march and ensuring that militia from across the region were already in motion before dawn.` },
    create: { id: 'event-lexington-alarm-system', townId: LEXINGTON_TOWN_ID, name: 'Patriot Alarm System Established', slug: 'lexington-alarm-system', startDate: new Date('1775-02-01T00:00:00.000Z'), datePrecision: 'MONTH', summary: `In the early months of 1775, the patriot network in Massachusetts established a coordinated alarm system designed to rapidly spread warning of any British military movement from Boston into the countryside. Lexington played a key role in this system, positioned as it was on the main road between Boston and the military stores at Concord.

The alarm system relied on a combination of express riders, church bells, signal guns, and bonfires. Each town designated specific individuals to receive and relay the alarm to neighboring communities, creating a cascading network that could transmit a warning across dozens of miles within hours. Paul Revere's intelligence network in Boston — a group of approximately thirty artisans and mechanics who monitored British troop movements — served as the early warning component of the system.

The system was tested by several false alarms in the weeks before April 19, which helped refine the process and ensure that the relay chain functioned smoothly. When the real alarm came on the night of April 18, the system performed exactly as designed, spreading the warning faster than the British column could march and ensuring that militia from across the region were already in motion before dawn.`, significanceWeight: 55 },
  });

  await prisma.event.upsert({
    where: { id: 'event-british-column-departs' },
    update: { slug: 'british-column-departs-boston', summary: `On the evening of April 18, 1775, approximately 700 British regulars under Lieutenant Colonel Francis Smith and Major John Pitcairn assembled on Boston Common and were ferried across the Back Bay to Lechmere Point in Cambridge. Their orders from Royal Governor General Thomas Gage were to march to Concord, seize the provincial military stores cached there, and arrest Samuel Adams and John Hancock if encountered.

The operation was intended to be secret, but the patriot intelligence network had been tracking British preparations for days. The collection of longboats alongside the warships, the movement of grenadier and light infantry companies from their regular posts, and the sudden restriction of movement out of Boston all signaled an imminent expedition. Dr. Joseph Warren confirmed the intelligence and dispatched Revere and Dawes.

The British column did not begin its march until approximately 10:00 p.m., delayed by logistical difficulties in ferrying troops across the water. The soldiers waded ashore in waist-deep water and then stood in the cold for two hours while provisions were distributed. By the time the column finally stepped off, the alarm was already racing ahead of them through the countryside.` },
    create: { id: 'event-british-column-departs', townId: LEXINGTON_TOWN_ID, name: 'British Column Departs Boston', slug: 'british-column-departs-boston', startDate: new Date('1775-04-18T22:00:00.000Z'), datePrecision: 'DAY', summary: `On the evening of April 18, 1775, approximately 700 British regulars under Lieutenant Colonel Francis Smith and Major John Pitcairn assembled on Boston Common and were ferried across the Back Bay to Lechmere Point in Cambridge. Their orders from Royal Governor General Thomas Gage were to march to Concord, seize the provincial military stores cached there, and arrest Samuel Adams and John Hancock if encountered.

The operation was intended to be secret, but the patriot intelligence network had been tracking British preparations for days. The collection of longboats alongside the warships, the movement of grenadier and light infantry companies from their regular posts, and the sudden restriction of movement out of Boston all signaled an imminent expedition. Dr. Joseph Warren confirmed the intelligence and dispatched Revere and Dawes.

The British column did not begin its march until approximately 10:00 p.m., delayed by logistical difficulties in ferrying troops across the water. The soldiers waded ashore in waist-deep water and then stood in the cold for two hours while provisions were distributed. By the time the column finally stepped off, the alarm was already racing ahead of them through the countryside.`, significanceWeight: 80 },
  });

  await prisma.event.upsert({
    where: { id: 'event-lexington-pursuit-concord' },
    update: { slug: 'lexington-pursuit-after-concord', summary: `After the devastating encounter on the Green that morning, the surviving Lexington militiamen did not simply go home. Captain Parker reassembled his company and led them westward toward Concord, then positioned them along the route he knew the British would have to take on their return march to Boston. By early afternoon, Parker had his men in ambush positions near Fiske Hill, on the road between Lexington and the center of town.

When the retreating British column came down the road, harassed by militia fire from all directions, Parker's company delivered a concentrated volley from their concealed positions. The ambush was one of the most effective of the day's many engagements along the Battle Road. For the Lexington men, it was deeply personal — they were avenging the deaths of their friends and neighbors, killed on the Green only hours before.

The Lexington company continued to pursue the British column eastward, joining the growing mass of colonial militia that harassed the retreating regulars all the way back to Charlestown. Parker's willingness to rally his demoralized company and return to the fight demonstrated a resilience that defined the colonial response to the events of April 19.` },
    create: { id: 'event-lexington-pursuit-concord', townId: LEXINGTON_TOWN_ID, name: 'Lexington Militiamen Join the Pursuit After Concord', slug: 'lexington-pursuit-after-concord', startDate: new Date('1775-04-19T14:00:00.000Z'), datePrecision: 'DAY', summary: `After the devastating encounter on the Green that morning, the surviving Lexington militiamen did not simply go home. Captain Parker reassembled his company and led them westward toward Concord, then positioned them along the route he knew the British would have to take on their return march to Boston. By early afternoon, Parker had his men in ambush positions near Fiske Hill, on the road between Lexington and the center of town.

When the retreating British column came down the road, harassed by militia fire from all directions, Parker's company delivered a concentrated volley from their concealed positions. The ambush was one of the most effective of the day's many engagements along the Battle Road. For the Lexington men, it was deeply personal — they were avenging the deaths of their friends and neighbors, killed on the Green only hours before.

The Lexington company continued to pursue the British column eastward, joining the growing mass of colonial militia that harassed the retreating regulars all the way back to Charlestown. Parker's willingness to rally his demoralized company and return to the fight demonstrated a resilience that defined the colonial response to the events of April 19.`, significanceWeight: 80 },
  });

  await prisma.event.upsert({
    where: { id: 'event-lexington-dead-buried' },
    update: { slug: 'lexington-dead-buried', summary: `In the days following April 19, 1775, the town of Lexington buried its dead. The eight men killed on the Green — Robert Munroe, Jonas Parker, Samuel Hadley, Jonathan Harrington, Isaac Muzzey, Caleb Harrington, John Brown, and Asahel Porter — were interred in the Old Burying Ground. The burials were communal acts of grief that brought the entire town together in mourning.

The dead ranged in age from the elderly Robert Munroe, approximately sixty-five, to young men in their twenties and thirties. They represented a cross-section of the community: farmers, artisans, and family men whose absence left visible holes in the fabric of the small town. Their widows and children would depend on the support of the community in the difficult months and years ahead.

The burial of the Lexington dead was not merely a local event but a political one. The Provincial Congress recognized that the fallen of April 19 could serve as powerful symbols of British tyranny, and the collection of depositions and the public accounting of casualties were designed to build the case for armed resistance throughout the colonies. The dead of Lexington became the first martyrs of the American Revolution.` },
    create: { id: 'event-lexington-dead-buried', townId: LEXINGTON_TOWN_ID, name: 'The Dead of Lexington Are Buried', slug: 'lexington-dead-buried', startDate: new Date('1775-04-21T00:00:00.000Z'), datePrecision: 'DAY', summary: `In the days following April 19, 1775, the town of Lexington buried its dead. The eight men killed on the Green — Robert Munroe, Jonas Parker, Samuel Hadley, Jonathan Harrington, Isaac Muzzey, Caleb Harrington, John Brown, and Asahel Porter — were interred in the Old Burying Ground. The burials were communal acts of grief that brought the entire town together in mourning.

The dead ranged in age from the elderly Robert Munroe, approximately sixty-five, to young men in their twenties and thirties. They represented a cross-section of the community: farmers, artisans, and family men whose absence left visible holes in the fabric of the small town. Their widows and children would depend on the support of the community in the difficult months and years ahead.

The burial of the Lexington dead was not merely a local event but a political one. The Provincial Congress recognized that the fallen of April 19 could serve as powerful symbols of British tyranny, and the collection of depositions and the public accounting of casualties were designed to build the case for armed resistance throughout the colonies. The dead of Lexington became the first martyrs of the American Revolution.`, significanceWeight: 65 },
  });

  await prisma.event.upsert({
    where: { id: 'event-lexington-siege-boston' },
    update: { slug: 'lexington-joins-siege-boston', summary: `In the weeks following April 19, 1775, Lexington men joined the growing colonial force that surrounded Boston, trapping the British garrison in the city. The Siege of Boston, which lasted from April 19, 1775, to March 17, 1776, involved militia and later Continental Army forces from across New England. Lexington's contribution, though small in numbers, was symbolically significant — the town that had suffered the first casualties now joined the effort to contain the enemy.

Lexington men served in various capacities during the siege, from guard duty along the siege lines to construction of fortifications. Some enlisted for longer terms as the Continental Army was organized under George Washington's command beginning in July 1775. Captain Parker did not participate in the siege; his tuberculosis killed him on September 17, 1775, five months after the battle.

The siege ended on March 17, 1776, when the placement of cannons on Dorchester Heights by Colonel Henry Knox made the British position untenable, and General Howe evacuated the city by sea. For Lexington, the successful conclusion of the siege was a vindication — the sacrifice of April 19 had not been in vain, and the British who had marched through their town were now gone from Massachusetts.` },
    create: { id: 'event-lexington-siege-boston', townId: LEXINGTON_TOWN_ID, name: 'Lexington Joins the Siege of Boston', slug: 'lexington-joins-siege-boston', startDate: new Date('1775-04-20T00:00:00.000Z'), datePrecision: 'MONTH', summary: `In the weeks following April 19, 1775, Lexington men joined the growing colonial force that surrounded Boston, trapping the British garrison in the city. The Siege of Boston, which lasted from April 19, 1775, to March 17, 1776, involved militia and later Continental Army forces from across New England. Lexington's contribution, though small in numbers, was symbolically significant — the town that had suffered the first casualties now joined the effort to contain the enemy.

Lexington men served in various capacities during the siege, from guard duty along the siege lines to construction of fortifications. Some enlisted for longer terms as the Continental Army was organized under George Washington's command beginning in July 1775. Captain Parker did not participate in the siege; his tuberculosis killed him on September 17, 1775, five months after the battle.

The siege ended on March 17, 1776, when the placement of cannons on Dorchester Heights by Colonel Henry Knox made the British position untenable, and General Howe evacuated the city by sea. For Lexington, the successful conclusion of the siege was a vindication — the sacrifice of April 19 had not been in vain, and the British who had marched through their town were now gone from Massachusetts.`, significanceWeight: 55 },
  });

  await prisma.event.upsert({
    where: { id: 'event-patriots-day-established' },
    update: { slug: 'patriots-day-established', summary: `In 1894, the Massachusetts legislature established Patriots' Day as a state holiday, to be observed annually on April 19. The holiday commemorates the battles of Lexington and Concord and the beginning of the American Revolution. Lexington had been observing the anniversary informally for over a century, but the establishment of a formal holiday ensured that the commemoration would be sustained and expanded.

The holiday brought increased public attention to Lexington's historic sites and spurred efforts to preserve the Green, Buckman Tavern, and other landmarks. The annual dawn reenactment of the battle on the Green, which became a signature feature of the celebration, began to draw visitors from across the region and eventually the nation. Patriots' Day also became associated with the Boston Marathon, first run in 1897, creating a dual celebration of historical memory and athletic achievement.

In 1969, Massachusetts moved the observance of Patriots' Day to the third Monday in April, as part of the Uniform Monday Holiday Act. Despite the date change, the core commemorative activities in Lexington — the reenactment, the parade, and the ceremonies on the Green — continue to anchor the holiday and to ensure that the events of April 19, 1775, remain in public memory.` },
    create: { id: 'event-patriots-day-established', townId: LEXINGTON_TOWN_ID, name: "Patriots' Day Established as State Holiday", slug: 'patriots-day-established', startDate: new Date('1894-04-19T00:00:00.000Z'), datePrecision: 'DAY', summary: `In 1894, the Massachusetts legislature established Patriots' Day as a state holiday, to be observed annually on April 19. The holiday commemorates the battles of Lexington and Concord and the beginning of the American Revolution. Lexington had been observing the anniversary informally for over a century, but the establishment of a formal holiday ensured that the commemoration would be sustained and expanded.

The holiday brought increased public attention to Lexington's historic sites and spurred efforts to preserve the Green, Buckman Tavern, and other landmarks. The annual dawn reenactment of the battle on the Green, which became a signature feature of the celebration, began to draw visitors from across the region and eventually the nation. Patriots' Day also became associated with the Boston Marathon, first run in 1897, creating a dual celebration of historical memory and athletic achievement.

In 1969, Massachusetts moved the observance of Patriots' Day to the third Monday in April, as part of the Uniform Monday Holiday Act. Despite the date change, the core commemorative activities in Lexington — the reenactment, the parade, and the ceremonies on the Green — continue to anchor the holiday and to ensure that the events of April 19, 1775, remain in public memory.`, significanceWeight: 60 },
  });

  await prisma.event.upsert({
    where: { id: 'event-lexington-centennial-1875' },
    update: { slug: 'lexington-centennial-1875', summary: `On April 19, 1875, Lexington hosted a grand centennial celebration marking the hundredth anniversary of the battle. The event drew thousands of visitors, including President Ulysses S. Grant, and featured speeches, military processions, and commemorative ceremonies on the Green. The centennial was one of the largest public gatherings in Lexington's history and signaled the town's permanent identification with the events of April 19, 1775.

The celebration included the rededication of the Revolutionary Monument and the placement of additional markers and memorials around the Green. Prominent orators delivered addresses connecting the sacrifice of 1775 to the preservation of the Union during the recently concluded Civil War. The centennial framed the Battle of Lexington as the foundational event of American liberty — the moment when the ideals of self-governance were defended with blood.

The centennial also spurred the first systematic efforts to preserve Lexington's historic buildings. The Hancock-Clarke House, Buckman Tavern, and Munroe Tavern all received increased attention as historical landmarks worth protecting. The celebration established the pattern of grand commemorative events on the Green that continues to this day, with the Patriots' Day reenactment and parade drawing tens of thousands of visitors each spring.` },
    create: { id: 'event-lexington-centennial-1875', townId: LEXINGTON_TOWN_ID, name: 'Centennial Celebration and Monument Rededication', slug: 'lexington-centennial-1875', startDate: new Date('1875-04-19T00:00:00.000Z'), datePrecision: 'DAY', summary: `On April 19, 1875, Lexington hosted a grand centennial celebration marking the hundredth anniversary of the battle. The event drew thousands of visitors, including President Ulysses S. Grant, and featured speeches, military processions, and commemorative ceremonies on the Green. The centennial was one of the largest public gatherings in Lexington's history and signaled the town's permanent identification with the events of April 19, 1775.

The celebration included the rededication of the Revolutionary Monument and the placement of additional markers and memorials around the Green. Prominent orators delivered addresses connecting the sacrifice of 1775 to the preservation of the Union during the recently concluded Civil War. The centennial framed the Battle of Lexington as the foundational event of American liberty — the moment when the ideals of self-governance were defended with blood.

The centennial also spurred the first systematic efforts to preserve Lexington's historic buildings. The Hancock-Clarke House, Buckman Tavern, and Munroe Tavern all received increased attention as historical landmarks worth protecting. The celebration established the pattern of grand commemorative events on the Green that continues to this day, with the Patriots' Day reenactment and parade drawing tens of thousands of visitors each spring.`, significanceWeight: 60 },
  });

  console.log('  Events seeded.');
}

// =============================================================================
// EVENT-PEOPLE CONNECTIONS
// =============================================================================

async function seedEventPeople() {
  console.log('  Seeding event-people connections...');

  const connections = [
    // Revere-Dawes Warning
    { eventId: 'event-revere-dawes-warning', personId: 'paul-revere', roleInEvent: 'Rider — crossed Charles River and rode through Medford to Lexington' },
    { eventId: 'event-revere-dawes-warning', personId: 'person-william-dawes', roleInEvent: 'Rider — took land route through Roxbury and Cambridge to Lexington' },
    // Hancock-Clarke Warning
    { eventId: 'event-lexington-hancock-clarke-warning', personId: 'paul-revere', roleInEvent: 'Delivered warning to Adams and Hancock at Clarke parsonage' },
    { eventId: 'event-lexington-hancock-clarke-warning', personId: 'person-jonas-clarke', roleInEvent: 'Host — admitted Revere and sheltered Adams and Hancock' },
    { eventId: 'event-lexington-hancock-clarke-warning', personId: 'person-ebenezer-munroe', roleInEvent: 'Sentry at Clarke parsonage who confronted Revere' },
    { eventId: 'event-lexington-hancock-clarke-warning', personId: 'person-samuel-adams', roleInEvent: 'Warned of British approach; argued for departure' },
    // Alarm Riders
    { eventId: 'event-lexington-alarm-riders', personId: 'person-samuel-prescott', roleInEvent: 'Completed the ride to Concord after Revere was captured' },
    // Parker Muster
    { eventId: 'event-parker-muster', personId: 'person-john-parker', roleInEvent: 'Commander who ordered the militia to muster on the Green' },
    { eventId: 'event-parker-muster', personId: 'person-jedediah-munroe', roleInEvent: 'Drummer boy who beat the call to arms' },
    // Buckman Tavern Muster
    { eventId: 'event-buckman-tavern-muster', personId: 'person-john-parker', roleInEvent: 'Commander who dismissed men to the tavern to wait' },
    { eventId: 'event-buckman-tavern-muster', personId: 'person-ebenezer-munroe', roleInEvent: 'Sergeant who helped maintain readiness among the waiting men' },
    { eventId: 'event-buckman-tavern-muster', personId: 'person-jonas-parker', roleInEvent: 'Militiaman who waited at the tavern before the battle' },
    // Hancock-Adams Escape
    { eventId: 'event-hancock-adams-escape', personId: 'person-samuel-adams', roleInEvent: 'Argued for departure and fled to Woburn' },
    { eventId: 'event-hancock-adams-escape', personId: 'person-dorothy-quincy', roleInEvent: 'Accompanied Hancock in flight from Lexington' },
    // Battle of Lexington
    { eventId: 'event-lexington-battle', personId: 'person-john-parker', roleInEvent: 'Commander of the Lexington militia on the Green' },
    { eventId: 'event-lexington-battle', personId: 'person-jonas-parker', roleInEvent: 'Killed in action — shot and bayoneted while attempting to reload' },
    { eventId: 'event-lexington-battle', personId: 'person-jonathan-harrington', roleInEvent: 'Mortally wounded — crawled to his doorstep and died' },
    { eventId: 'event-lexington-battle', personId: 'person-prince-estabrook', roleInEvent: 'Wounded — first Black American casualty of the Revolution' },
    { eventId: 'event-lexington-battle', personId: 'person-robert-munroe', roleInEvent: 'Killed in action — oldest man killed on the Green' },
    { eventId: 'event-lexington-battle', personId: 'person-sylvanus-wood', roleInEvent: 'Participant and eyewitness who later provided critical deposition' },
    { eventId: 'event-lexington-battle', personId: 'person-john-raymond', roleInEvent: 'Militiaman on the Green' },
    { eventId: 'event-lexington-battle', personId: 'person-ebenezer-munroe', roleInEvent: 'Sergeant in the militia line' },
    { eventId: 'event-lexington-battle', personId: 'person-jedediah-munroe', roleInEvent: 'Drummer boy present on the Green' },
    // British Retreat Through Lexington
    { eventId: 'event-british-retreat-lexington', personId: 'person-john-parker', roleInEvent: 'Led Lexington militia ambush at Fiske Hill' },
    { eventId: 'event-british-retreat-lexington', personId: 'person-ebenezer-munroe', roleInEvent: 'Sergeant in the ambush party' },
    { eventId: 'event-british-retreat-lexington', personId: 'person-john-raymond', roleInEvent: 'Participated in harassment of the retreating column' },
    // Lexington Depositions
    { eventId: 'event-lexington-depositions', personId: 'person-sylvanus-wood', roleInEvent: 'Deponent — provided detailed eyewitness account' },
    { eventId: 'event-lexington-depositions', personId: 'person-john-parker', roleInEvent: 'Deponent — provided official account as militia commander' },
    { eventId: 'event-lexington-depositions', personId: 'person-ebenezer-munroe', roleInEvent: 'Deponent — provided eyewitness account' },
    // Committee of Safety
    { eventId: 'event-lexington-committee-safety', personId: 'person-jonas-clarke', roleInEvent: 'Leading member of the Committee of Safety' },
    // Militia Drills
    { eventId: 'event-lexington-militia-drills', personId: 'person-john-parker', roleInEvent: 'Captain who led militia training on the Green' },
    { eventId: 'event-lexington-militia-drills', personId: 'person-ebenezer-munroe', roleInEvent: 'Sergeant who assisted with drill and discipline' },
    // British Column Departs
    { eventId: 'event-british-column-departs', personId: 'paul-revere', roleInEvent: 'Observed preparations and was dispatched by Warren' },
    { eventId: 'event-british-column-departs', personId: 'person-william-dawes', roleInEvent: 'Dispatched by Warren on the land route' },
    // Lexington Pursuit After Concord
    { eventId: 'event-lexington-pursuit-concord', personId: 'person-john-parker', roleInEvent: 'Reassembled company and led ambush at Fiske Hill' },
    // Lexington Dead Buried
    { eventId: 'event-lexington-dead-buried', personId: 'person-jonas-clarke', roleInEvent: 'Presided over burial services' },
    // Lexington Joins Siege of Boston
    { eventId: 'event-lexington-siege-boston', personId: 'person-john-parker', roleInEvent: 'Did not participate — died September 17, 1775, of tuberculosis' },
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
    where: { id: 'story-parker-stand' },
    update: {
      slug: 'parkers-choice',
      textVersion: `John Parker had been coughing blood for months. The tuberculosis that would kill him in September was already well advanced in April 1775, hollowing his chest and sapping his stamina. But on the night of April 18, when the alarm reached Lexington that British regulars were on the march, Parker did not hesitate. He was the elected captain of the town's militia training band, and his men expected him on the Green.

Parker knew what a column of British regulars looked like. He had served as a soldier in the French and Indian War, fighting at the siege of Louisbourg in 1745 and ranging through the northern frontier with Robert Rogers's company. He had seen professional soldiers in action — their discipline, their firepower, their bayonets. He understood, with a clarity that no amount of patriotic fervor could obscure, that his 77 farmers and tradespeople could not stand against 700 of the best-trained infantry in the world.

So why did he muster them on the Green?

The question has occupied historians for 250 years. The most likely answer is that Parker intended a demonstration, not a battle. By forming his men in full view of the road, he signaled that Lexington would not pretend the British march was a routine affair. The militia's presence was a political statement as much as a military one — an assertion that the people of Lexington claimed the right to bear arms and to stand on their own common in defense of their community.

Parker positioned his men in two lines on the north end of the Green, offset from the road. The formation was not a roadblock; the British could have passed without engaging the militia at all. Parker reportedly told his men not to fire unless fired upon. He may have told them to disperse if the situation became untenable. The depositions taken after the battle suggest that Parker understood the overwhelming odds and planned for a symbolic stand followed by an orderly withdrawal.

What Parker could not have anticipated was the chaos that erupted when the British advance guard arrived. Major John Pitcairn rode ahead of the column and ordered the militia to lay down their arms and disperse. Parker appears to have ordered his men to disperse — multiple witnesses confirmed this — but the situation disintegrated before the order could be fully executed. A shot rang out. Then a volley. Then bayonets.

In the space of minutes, eight of Parker's men were dead or dying. Jonas Parker, his cousin, lay on the Green with a bayonet wound, having been run through while trying to reload his musket. Jonathan Harrington was crawling across the grass toward his house, mortally wounded. Robert Munroe, the oldest man in the company at roughly sixty-five, lay where the volley had found him. Prince Estabrook, an enslaved man, was wounded. The Green was streaked with blood and gunpowder smoke.

Parker survived. He gathered the remnants of his company and retreated from the Green as the British reformed their column and marched on toward Concord. For Parker, the morning might have seemed a disaster — his men scattered, his neighbors dead, the Green lost. But what happened next revealed the true significance of his decision to muster.

By early afternoon, the British column was retreating from Concord under heavy fire from colonial militia that had assembled from dozens of towns. Parker reassembled his Lexington company — the same men who had been driven from the Green that morning — and led them to Fiske Hill, where they ambushed the retreating column with a concentrated volley. The ambush was one of the most effective engagements of the day. Parker's men exacted a measure of revenge for their fallen neighbors, and they demonstrated that the militia was not defeated but rather enraged and determined.

Parker died of tuberculosis on September 17, 1775, five months after the battle. He never saw the Declaration of Independence, the victory at Yorktown, or the nation that grew from the seed planted on his village Green. But the decision he made in the pre-dawn darkness of April 19 — to stand his men on the Green, knowing they could not win, knowing they might die — became the founding act of the American Revolution.

The words inscribed on the boulder on the Green, attributed to Parker, have become part of the American creed. Whether he spoke those exact words matters less than what they represent: the willingness of ordinary citizens to stand against overwhelming power in defense of their rights. Parker was not a general, not a politician, not a philosopher. He was a sick farmer who did what he believed his community expected of him. That is both the simplicity and the grandeur of his story.

The Minuteman Statue on the Green, dedicated in 1900, is traditionally identified with Parker. The bronze figure stands upright, alert, musket ready — not charging, not retreating, but standing his ground. It is an idealized image, but it captures something true about the man and the moment. Parker did not seek glory. He sought to do his duty. The cost was borne by the men around him, and it haunts the Green to this day.`,
    },
    create: {
      id: 'story-parker-stand',
      townId: LEXINGTON_TOWN_ID,
      title: "Captain Parker's Choice",
      slug: 'parkers-choice',
      storyType: 'HISTORICAL_VOICE',
      subjectPersonId: 'person-john-parker',
      verificationStatus: 'VERIFIED',
      textVersion: `John Parker had been coughing blood for months. The tuberculosis that would kill him in September was already well advanced in April 1775, hollowing his chest and sapping his stamina. But on the night of April 18, when the alarm reached Lexington that British regulars were on the march, Parker did not hesitate. He was the elected captain of the town's militia training band, and his men expected him on the Green.

Parker knew what a column of British regulars looked like. He had served as a soldier in the French and Indian War, fighting at the siege of Louisbourg in 1745 and ranging through the northern frontier with Robert Rogers's company. He had seen professional soldiers in action — their discipline, their firepower, their bayonets. He understood, with a clarity that no amount of patriotic fervor could obscure, that his 77 farmers and tradespeople could not stand against 700 of the best-trained infantry in the world.

So why did he muster them on the Green?

The question has occupied historians for 250 years. The most likely answer is that Parker intended a demonstration, not a battle. By forming his men in full view of the road, he signaled that Lexington would not pretend the British march was a routine affair. The militia's presence was a political statement as much as a military one — an assertion that the people of Lexington claimed the right to bear arms and to stand on their own common in defense of their community.

Parker positioned his men in two lines on the north end of the Green, offset from the road. The formation was not a roadblock; the British could have passed without engaging the militia at all. Parker reportedly told his men not to fire unless fired upon. He may have told them to disperse if the situation became untenable. The depositions taken after the battle suggest that Parker understood the overwhelming odds and planned for a symbolic stand followed by an orderly withdrawal.

What Parker could not have anticipated was the chaos that erupted when the British advance guard arrived. Major John Pitcairn rode ahead of the column and ordered the militia to lay down their arms and disperse. Parker appears to have ordered his men to disperse — multiple witnesses confirmed this — but the situation disintegrated before the order could be fully executed. A shot rang out. Then a volley. Then bayonets.

In the space of minutes, eight of Parker's men were dead or dying. Jonas Parker, his cousin, lay on the Green with a bayonet wound, having been run through while trying to reload his musket. Jonathan Harrington was crawling across the grass toward his house, mortally wounded. Robert Munroe, the oldest man in the company at roughly sixty-five, lay where the volley had found him. Prince Estabrook, an enslaved man, was wounded. The Green was streaked with blood and gunpowder smoke.

Parker survived. He gathered the remnants of his company and retreated from the Green as the British reformed their column and marched on toward Concord. For Parker, the morning might have seemed a disaster — his men scattered, his neighbors dead, the Green lost. But what happened next revealed the true significance of his decision to muster.

By early afternoon, the British column was retreating from Concord under heavy fire from colonial militia that had assembled from dozens of towns. Parker reassembled his Lexington company — the same men who had been driven from the Green that morning — and led them to Fiske Hill, where they ambushed the retreating column with a concentrated volley. The ambush was one of the most effective engagements of the day. Parker's men exacted a measure of revenge for their fallen neighbors, and they demonstrated that the militia was not defeated but rather enraged and determined.

Parker died of tuberculosis on September 17, 1775, five months after the battle. He never saw the Declaration of Independence, the victory at Yorktown, or the nation that grew from the seed planted on his village Green. But the decision he made in the pre-dawn darkness of April 19 — to stand his men on the Green, knowing they could not win, knowing they might die — became the founding act of the American Revolution.

The words inscribed on the boulder on the Green, attributed to Parker, have become part of the American creed. Whether he spoke those exact words matters less than what they represent: the willingness of ordinary citizens to stand against overwhelming power in defense of their rights. Parker was not a general, not a politician, not a philosopher. He was a sick farmer who did what he believed his community expected of him. That is both the simplicity and the grandeur of his story.

The Minuteman Statue on the Green, dedicated in 1900, is traditionally identified with Parker. The bronze figure stands upright, alert, musket ready — not charging, not retreating, but standing his ground. It is an idealized image, but it captures something true about the man and the moment. Parker did not seek glory. He sought to do his duty. The cost was borne by the men around him, and it haunts the Green to this day.`,
      tags: ['lexington', 'revolution', 'john-parker', 'battle-green', 'militia'],
    },
  });

  await prisma.story.upsert({
    where: { id: 'story-harrington-doorstep' },
    update: {
      slug: 'harrington-distance-home',
      textVersion: `Jonathan Harrington's house stood on the edge of Lexington Green. He could see his front door from the place where he stood in the militia line on the morning of April 19, 1775. The distance between the two — the line of militiamen and the threshold of his home — was perhaps a hundred yards. On any other morning, it was a walk of less than a minute. On this morning, it was the distance between life and death.

Harrington was thirty-four years old, a farmer and fifer in the Lexington training band. He had a wife, Ruth, and a young son. Like most of the men on the Green, he had responded to the alarm because it was expected of him — because this was his town, and these were his neighbors, and the militia was the community under arms. He did not know, as he took his place in line, that he would not walk back to his house alive.

The British advance guard arrived at the Green at approximately five o'clock in the morning. The column emerged from the road to the southeast, their scarlet coats vivid in the growing light. Major Pitcairn rode forward and ordered the militia to disperse. Captain Parker appears to have given the order to fall out. The men began to move. And then a shot — from where, from whom, no one could say with certainty — broke the tense silence, and the British soldiers opened fire.

The volley was devastating at close range. Musket balls tore through the thin lines of militiamen. Men fell. Others ran. The British charged with bayonets, adding to the chaos. In the smoke and noise, Harrington was hit. A musket ball struck him in the chest or abdomen — the exact wound is not described in the depositions — and he went down on the Green.

What happened next has become one of the defining images of the American Revolution. Harrington did not die immediately. Mortally wounded, bleeding, he began to crawl across the grass of the Green toward his house. His wife and son were there — they had been watching the confrontation from the doorway, as many of the families who lived around the Green were doing. Ruth Harrington saw her husband fall and then saw him begin the agonizing crawl toward her.

The distance was impossibly long for a man with a bullet in his body. The Green, which visitors today can cross in a minute's easy walk, must have seemed an ocean of grass to Harrington as he pulled himself forward, yard by yard, leaving a trail of blood on the spring ground. The British were reforming their column, their officers restoring order after the firing. The other casualties lay where they had fallen. The smoke was drifting away.

Harrington reached his doorstep. He died there, at the feet of his wife, on the threshold of the house where he had lived and where his son would grow up without him. The image is almost unbearable in its domesticity — a man dying not on a distant battlefield but on his own front step, in view of his family, in the town where he was born.

The story of Harrington's crawl across the Green has been told in every significant account of the Battle of Lexington since 1775. It appears in the depositions, in the early histories by Phinney and Hudson, in Fischer's modern scholarship, and in the interpretive programs at the Green. It endures because it compresses the entire tragedy of April 19 into a single human image: a man trying to get home.

Harrington's house, or a house built on or near its site, still stands at the edge of the Green. It is a private residence, not a museum, which is somehow fitting — it remains what it was in 1775, a home. Visitors to the Green can stand near the Minuteman Statue and look across to the house and measure the distance with their eyes. It is a short distance. It was too far.

The other deaths on the Green were terrible in their own ways. Jonas Parker, bayoneted while reloading. Robert Munroe, the old veteran, cut down by the volley. Isaac Muzzey, Caleb Harrington (Jonathan's kinsman), Samuel Hadley, John Brown, Asahel Porter — each name on the Revolutionary Monument represents a life ended and a family shattered. But it is Jonathan Harrington's death that visitors remember most vividly, because the geography of the Green makes it real. You can see the house. You can imagine the crawl. You can feel the weight of those hundred yards.

Ruth Harrington survived her husband by many years. She lived in the same house, at the edge of the same Green, where she had watched him die. The town records do not tell us much about her grief, but the house itself is a testament to continuity — life went on in Lexington after April 19, 1775, as it had to. The men who died on the Green left behind wives, children, farms, and obligations that did not pause for mourning. The Revolution was made not only by those who fell but by those who carried on afterward.`,
    },
    create: {
      id: 'story-harrington-doorstep',
      townId: LEXINGTON_TOWN_ID,
      title: 'Jonathan Harrington: The Distance Home',
      slug: 'harrington-distance-home',
      storyType: 'HISTORICAL_VOICE',
      subjectPersonId: 'person-jonathan-harrington',
      verificationStatus: 'VERIFIED',
      textVersion: `Jonathan Harrington's house stood on the edge of Lexington Green. He could see his front door from the place where he stood in the militia line on the morning of April 19, 1775. The distance between the two — the line of militiamen and the threshold of his home — was perhaps a hundred yards. On any other morning, it was a walk of less than a minute. On this morning, it was the distance between life and death.

Harrington was thirty-four years old, a farmer and fifer in the Lexington training band. He had a wife, Ruth, and a young son. Like most of the men on the Green, he had responded to the alarm because it was expected of him — because this was his town, and these were his neighbors, and the militia was the community under arms. He did not know, as he took his place in line, that he would not walk back to his house alive.

The British advance guard arrived at the Green at approximately five o'clock in the morning. The column emerged from the road to the southeast, their scarlet coats vivid in the growing light. Major Pitcairn rode forward and ordered the militia to disperse. Captain Parker appears to have given the order to fall out. The men began to move. And then a shot — from where, from whom, no one could say with certainty — broke the tense silence, and the British soldiers opened fire.

The volley was devastating at close range. Musket balls tore through the thin lines of militiamen. Men fell. Others ran. The British charged with bayonets, adding to the chaos. In the smoke and noise, Harrington was hit. A musket ball struck him in the chest or abdomen — the exact wound is not described in the depositions — and he went down on the Green.

What happened next has become one of the defining images of the American Revolution. Harrington did not die immediately. Mortally wounded, bleeding, he began to crawl across the grass of the Green toward his house. His wife and son were there — they had been watching the confrontation from the doorway, as many of the families who lived around the Green were doing. Ruth Harrington saw her husband fall and then saw him begin the agonizing crawl toward her.

The distance was impossibly long for a man with a bullet in his body. The Green, which visitors today can cross in a minute's easy walk, must have seemed an ocean of grass to Harrington as he pulled himself forward, yard by yard, leaving a trail of blood on the spring ground. The British were reforming their column, their officers restoring order after the firing. The other casualties lay where they had fallen. The smoke was drifting away.

Harrington reached his doorstep. He died there, at the feet of his wife, on the threshold of the house where he had lived and where his son would grow up without him. The image is almost unbearable in its domesticity — a man dying not on a distant battlefield but on his own front step, in view of his family, in the town where he was born.

The story of Harrington's crawl across the Green has been told in every significant account of the Battle of Lexington since 1775. It appears in the depositions, in the early histories by Phinney and Hudson, in Fischer's modern scholarship, and in the interpretive programs at the Green. It endures because it compresses the entire tragedy of April 19 into a single human image: a man trying to get home.

Harrington's house, or a house built on or near its site, still stands at the edge of the Green. It is a private residence, not a museum, which is somehow fitting — it remains what it was in 1775, a home. Visitors to the Green can stand near the Minuteman Statue and look across to the house and measure the distance with their eyes. It is a short distance. It was too far.

The other deaths on the Green were terrible in their own ways. Jonas Parker, bayoneted while reloading. Robert Munroe, the old veteran, cut down by the volley. Isaac Muzzey, Caleb Harrington (Jonathan's kinsman), Samuel Hadley, John Brown, Asahel Porter — each name on the Revolutionary Monument represents a life ended and a family shattered. But it is Jonathan Harrington's death that visitors remember most vividly, because the geography of the Green makes it real. You can see the house. You can imagine the crawl. You can feel the weight of those hundred yards.

Ruth Harrington survived her husband by many years. She lived in the same house, at the edge of the same Green, where she had watched him die. The town records do not tell us much about her grief, but the house itself is a testament to continuity — life went on in Lexington after April 19, 1775, as it had to. The men who died on the Green left behind wives, children, farms, and obligations that did not pause for mourning. The Revolution was made not only by those who fell but by those who carried on afterward.`,
      tags: ['lexington', 'revolution', 'jonathan-harrington', 'battle-green', 'sacrifice'],
    },
  });

  await prisma.story.upsert({
    where: { id: 'story-estabrook-question' },
    update: {
      slug: 'estabrook-wound-and-question',
      textVersion: `Prince Estabrook stood on Lexington Green on the morning of April 19, 1775, in a position of staggering contradiction. He was an enslaved man, the property of Benjamin Estabrook of Lexington, and he was standing in a militia line that claimed to be defending liberty. The musket in his hands was the same weapon carried by free men on either side of him. The bullets that would fly did not distinguish between the enslaved and the free. Whatever Prince Estabrook thought about the irony of his situation, the historical record does not tell us. It records only that he was there, that he was shot, and that he survived.

The details of Estabrook's early life are lost. Colonial New England's enslaved population left few records of their own making, and the documents that mention them — tax rolls, estate inventories, church records — treat them as property rather than persons. What we know about Estabrook comes from the militia muster rolls, the depositions collected after the battle, and scattered references in town records. He was identified in the depositions as "a Negro Man" wounded in the engagement, a designation that tells us both something and nothing — something about his race and status, nothing about his thoughts, his fears, or his reasons for being on the Green.

Estabrook's presence in the militia was unusual but not unique. In colonial Massachusetts, enslaved men occasionally served in militia companies, sometimes at the direction of their owners and sometimes by their own choice. The militia system in New England was more permeable than the rigid racial hierarchies of the Southern colonies would have allowed. Whether Estabrook was ordered to serve by his owner or volunteered — and whether the distinction meant anything to a man who was not free — is unknown.

When the British fired on the Green, Estabrook was hit. The exact nature of his wound is not recorded, but he survived it. He went on to serve in the Continental Army during the Revolution, enlisting for multiple terms. Military service during the war became a pathway to freedom for many enslaved men in Massachusetts, and Estabrook appears to have gained his liberty at some point during or after the conflict. The Massachusetts courts effectively abolished slavery through a series of decisions in the 1780s, but Estabrook's military service may have been the more immediate instrument of his freedom.

The question that Estabrook's story poses is one that the American Revolution never satisfactorily answered: what did liberty mean when it was proclaimed by a society that held human beings in bondage? The men on the Green spoke of the rights of Englishmen, of resistance to tyranny, of the natural entitlement of free people to govern themselves. These were powerful ideas, but they were articulated by a community that included at least one enslaved person in its ranks. The contradiction was not lost on everyone. Reverend Jonas Clarke, in his sermons, occasionally touched on the tension between the patriot cause and the institution of slavery, though he never called for abolition.

Estabrook's wound on the Green made him the first Black American casualty of the Revolution — a distinction that carries enormous symbolic weight. He bled for a cause that did not extend its promises to him. He fought alongside men who claimed rights that they denied to him. And yet he fought. The reasons may have been complex — duty, community pressure, a hope that service might lead to freedom, or simply the same instinct that drove every man on the Green to answer the alarm. His motivations are as irrecoverable as the details of his life.

In recent decades, Lexington has made increasing efforts to recognize Estabrook's place in the town's history. A historical marker on the Green commemorates his service, and educational programs at the visitor center address the role of African Americans in the Revolution. These are welcome developments, but they also raise uncomfortable questions about why it took so long for Estabrook's story to be told alongside those of Parker, Harrington, and the other men on the Green.

The wound that Estabrook suffered on April 19 healed. He lived. He served. He presumably gained his freedom. But the wound that his story opens in the narrative of the American founding has not healed as neatly. It is a wound in the logic of liberty, a gap between principle and practice that the Revolution created and that the nation has spent nearly 250 years trying to close. Prince Estabrook did not choose the symbolism that history has attached to his name. He was simply a man standing on a piece of grass with a gun in his hands. That he was not free while doing so is the question his story asks of every generation that inherits the revolution he helped to start.`,
    },
    create: {
      id: 'story-estabrook-question',
      townId: LEXINGTON_TOWN_ID,
      title: 'Prince Estabrook: A Wound and a Question',
      slug: 'estabrook-wound-and-question',
      storyType: 'HISTORICAL_VOICE',
      subjectPersonId: 'person-prince-estabrook',
      verificationStatus: 'VERIFIED',
      textVersion: `Prince Estabrook stood on Lexington Green on the morning of April 19, 1775, in a position of staggering contradiction. He was an enslaved man, the property of Benjamin Estabrook of Lexington, and he was standing in a militia line that claimed to be defending liberty. The musket in his hands was the same weapon carried by free men on either side of him. The bullets that would fly did not distinguish between the enslaved and the free. Whatever Prince Estabrook thought about the irony of his situation, the historical record does not tell us. It records only that he was there, that he was shot, and that he survived.

The details of Estabrook's early life are lost. Colonial New England's enslaved population left few records of their own making, and the documents that mention them — tax rolls, estate inventories, church records — treat them as property rather than persons. What we know about Estabrook comes from the militia muster rolls, the depositions collected after the battle, and scattered references in town records. He was identified in the depositions as "a Negro Man" wounded in the engagement, a designation that tells us both something and nothing — something about his race and status, nothing about his thoughts, his fears, or his reasons for being on the Green.

Estabrook's presence in the militia was unusual but not unique. In colonial Massachusetts, enslaved men occasionally served in militia companies, sometimes at the direction of their owners and sometimes by their own choice. The militia system in New England was more permeable than the rigid racial hierarchies of the Southern colonies would have allowed. Whether Estabrook was ordered to serve by his owner or volunteered — and whether the distinction meant anything to a man who was not free — is unknown.

When the British fired on the Green, Estabrook was hit. The exact nature of his wound is not recorded, but he survived it. He went on to serve in the Continental Army during the Revolution, enlisting for multiple terms. Military service during the war became a pathway to freedom for many enslaved men in Massachusetts, and Estabrook appears to have gained his liberty at some point during or after the conflict. The Massachusetts courts effectively abolished slavery through a series of decisions in the 1780s, but Estabrook's military service may have been the more immediate instrument of his freedom.

The question that Estabrook's story poses is one that the American Revolution never satisfactorily answered: what did liberty mean when it was proclaimed by a society that held human beings in bondage? The men on the Green spoke of the rights of Englishmen, of resistance to tyranny, of the natural entitlement of free people to govern themselves. These were powerful ideas, but they were articulated by a community that included at least one enslaved person in its ranks. The contradiction was not lost on everyone. Reverend Jonas Clarke, in his sermons, occasionally touched on the tension between the patriot cause and the institution of slavery, though he never called for abolition.

Estabrook's wound on the Green made him the first Black American casualty of the Revolution — a distinction that carries enormous symbolic weight. He bled for a cause that did not extend its promises to him. He fought alongside men who claimed rights that they denied to him. And yet he fought. The reasons may have been complex — duty, community pressure, a hope that service might lead to freedom, or simply the same instinct that drove every man on the Green to answer the alarm. His motivations are as irrecoverable as the details of his life.

In recent decades, Lexington has made increasing efforts to recognize Estabrook's place in the town's history. A historical marker on the Green commemorates his service, and educational programs at the visitor center address the role of African Americans in the Revolution. These are welcome developments, but they also raise uncomfortable questions about why it took so long for Estabrook's story to be told alongside those of Parker, Harrington, and the other men on the Green.

The wound that Estabrook suffered on April 19 healed. He lived. He served. He presumably gained his freedom. But the wound that his story opens in the narrative of the American founding has not healed as neatly. It is a wound in the logic of liberty, a gap between principle and practice that the Revolution created and that the nation has spent nearly 250 years trying to close. Prince Estabrook did not choose the symbolism that history has attached to his name. He was simply a man standing on a piece of grass with a gun in his hands. That he was not free while doing so is the question his story asks of every generation that inherits the revolution he helped to start.`,
      tags: ['lexington', 'revolution', 'prince-estabrook', 'slavery', 'liberty', 'contradiction'],
    },
  });

  await prisma.story.upsert({
    where: { id: 'story-modern-curator' },
    update: {
      slug: 'why-we-still-stand',
      textVersion: `There is a moment every Patriots' Day, just before dawn, when the reenactors take their positions on Lexington Green and the crowd falls silent. The sky is gray, the air is cold, and the damp grass smells the way it must have smelled 250 years ago. In that silence, before the drums begin and the muskets crack, the distance between 1775 and the present collapses. For a few seconds, the Green is not a tourist site or a historical landmark but the place where it actually happened — where men stood in the dark and waited for a column of soldiers that might kill them.

That moment is why we preserve these places. Not because old buildings are inherently valuable, and not because the past is inherently better than the present, but because certain locations hold a density of meaning that cannot be replicated or relocated. Lexington Green is one of those places. The ground beneath the Minuteman Statue is the same ground where Captain Parker formed his line. The doorstep where Jonathan Harrington died is still a doorstep. The walls of Buckman Tavern still enclose the room where men waited for a fight they did not want.

Preserving these sites requires constant effort. The Lexington Historical Society, the National Park Service, and the town itself invest significant resources in maintaining the Green, the historic houses, and the Battle Road Trail. Buildings must be repaired, artifacts conserved, interpretive programs updated to reflect new scholarship. The work is often unglamorous — repointing brickwork, stabilizing foundations, digitizing fragile documents — but it ensures that future visitors will encounter the real thing, not a replica.

The challenge of historical preservation in Lexington goes beyond physical maintenance. It also involves the harder work of honest interpretation. For most of its commemorative history, Lexington told a relatively simple story: brave farmers stood up to tyranny, shots were fired, a revolution began. That story is not wrong, but it is incomplete. It omits Prince Estabrook, the enslaved man who fought and bled for a liberty he did not possess. It glosses over the question of who fired the first shot — a question that the evidence has never definitively answered. It tends to romanticize the militia and demonize the British soldiers, who were themselves young men far from home, following orders they may not have understood.

Modern historical practice demands that we hold these complexities rather than resolve them into comfortable narratives. The men on the Green were courageous, and they were also outnumbered and outgunned. The British soldiers were the agents of an oppressive policy, and they were also professionals doing their jobs. The Revolution was a triumph of democratic aspiration, and it was also a movement that excluded women, enslaved people, and Native Americans from its promises. These contradictions do not diminish the significance of April 19 — they deepen it.

Visitors to Lexington today encounter a town that takes its history seriously without being paralyzed by it. The Green is not a museum under glass but a living public space where children play, dogs are walked, and town events are held throughout the year. The historic houses are open for tours that present the full range of perspectives — colonial, British, enslaved, female — that converged on Lexington in April 1775. The educational programs offered by the Historical Society and the National Park Service challenge students to think critically about primary sources, to question received narratives, and to understand that history is not a settled matter but an ongoing conversation.

The reason we still stand on this ground — literally, every Patriots' Day, and figuratively, every day that the Green remains open to the public — is not to celebrate violence or to glorify war. It is to remember that ordinary people, in a small farming town in Massachusetts, made a choice that changed the world. They did not do it perfectly. They did not do it for everyone. But they did it, and we are still living with the consequences. The Green asks us not to worship the past but to take responsibility for the present — to ask what liberty means now, and for whom, and at what cost.`,
    },
    create: {
      id: 'story-modern-curator',
      townId: LEXINGTON_TOWN_ID,
      title: 'Why We Still Stand on This Ground',
      slug: 'why-we-still-stand',
      storyType: 'MODERN_VOICE',
      verificationStatus: 'VERIFIED',
      textVersion: `There is a moment every Patriots' Day, just before dawn, when the reenactors take their positions on Lexington Green and the crowd falls silent. The sky is gray, the air is cold, and the damp grass smells the way it must have smelled 250 years ago. In that silence, before the drums begin and the muskets crack, the distance between 1775 and the present collapses. For a few seconds, the Green is not a tourist site or a historical landmark but the place where it actually happened — where men stood in the dark and waited for a column of soldiers that might kill them.

That moment is why we preserve these places. Not because old buildings are inherently valuable, and not because the past is inherently better than the present, but because certain locations hold a density of meaning that cannot be replicated or relocated. Lexington Green is one of those places. The ground beneath the Minuteman Statue is the same ground where Captain Parker formed his line. The doorstep where Jonathan Harrington died is still a doorstep. The walls of Buckman Tavern still enclose the room where men waited for a fight they did not want.

Preserving these sites requires constant effort. The Lexington Historical Society, the National Park Service, and the town itself invest significant resources in maintaining the Green, the historic houses, and the Battle Road Trail. Buildings must be repaired, artifacts conserved, interpretive programs updated to reflect new scholarship. The work is often unglamorous — repointing brickwork, stabilizing foundations, digitizing fragile documents — but it ensures that future visitors will encounter the real thing, not a replica.

The challenge of historical preservation in Lexington goes beyond physical maintenance. It also involves the harder work of honest interpretation. For most of its commemorative history, Lexington told a relatively simple story: brave farmers stood up to tyranny, shots were fired, a revolution began. That story is not wrong, but it is incomplete. It omits Prince Estabrook, the enslaved man who fought and bled for a liberty he did not possess. It glosses over the question of who fired the first shot — a question that the evidence has never definitively answered. It tends to romanticize the militia and demonize the British soldiers, who were themselves young men far from home, following orders they may not have understood.

Modern historical practice demands that we hold these complexities rather than resolve them into comfortable narratives. The men on the Green were courageous, and they were also outnumbered and outgunned. The British soldiers were the agents of an oppressive policy, and they were also professionals doing their jobs. The Revolution was a triumph of democratic aspiration, and it was also a movement that excluded women, enslaved people, and Native Americans from its promises. These contradictions do not diminish the significance of April 19 — they deepen it.

Visitors to Lexington today encounter a town that takes its history seriously without being paralyzed by it. The Green is not a museum under glass but a living public space where children play, dogs are walked, and town events are held throughout the year. The historic houses are open for tours that present the full range of perspectives — colonial, British, enslaved, female — that converged on Lexington in April 1775. The educational programs offered by the Historical Society and the National Park Service challenge students to think critically about primary sources, to question received narratives, and to understand that history is not a settled matter but an ongoing conversation.

The reason we still stand on this ground — literally, every Patriots' Day, and figuratively, every day that the Green remains open to the public — is not to celebrate violence or to glorify war. It is to remember that ordinary people, in a small farming town in Massachusetts, made a choice that changed the world. They did not do it perfectly. They did not do it for everyone. But they did it, and we are still living with the consequences. The Green asks us not to worship the past but to take responsibility for the present — to ask what liberty means now, and for whom, and at what cost.`,
      tags: ['lexington', 'preservation', 'modern-perspective', 'patriots-day', 'public-history'],
    },
  });

  await prisma.story.upsert({
    where: { id: 'story-modern-teacher' },
    update: {
      slug: 'teaching-beyond-textbook',
      textVersion: `The first time a student asks a question that the textbook cannot answer, something shifts in the classroom. It happened for many teachers at Lexington during a field trip, standing on the Green with a group of eighth graders, when a student pointed at the Minuteman Statue and asked a question that cut through two centuries of commemoration: "If they knew they were going to lose, why did they stay?"

It is exactly the right question, and it has no simple answer. The textbook version of Lexington reduces the battle to a paragraph: British soldiers marched, militia stood, shots were fired, the Revolution began. It is accurate in the way that a skeleton is accurate — the bones are all present, but the life is missing. To teach Lexington properly, a teacher must bring students into the space between the facts, where the human decisions were made.

Begin with the night. It is April 18, 1775, and you are a farmer in Lexington. You have been asleep for three hours when the bell on Belfry Hill begins to ring. It is not Sunday. It is not a fire. The only reason the bell rings at this hour is the one you have been dreading. You get up, dress, take your musket from above the fireplace, and walk to the Green. Your wife watches you leave. Your children are still asleep. You do not know if you will come back.

This is the first teaching moment: the alarm. Students often assume that the militiamen were eager for a fight, that they marched to the Green with patriotic fervor and revolutionary zeal. The evidence suggests otherwise. The depositions describe men who were nervous, uncertain, and acutely aware that they were outnumbered. They came to the Green because their neighbors came, because their captain called, and because the militia system obligated every able-bodied man to respond. The revolution began not with a roar but with a bell in the dark and a walk through the cold.

The second teaching moment is the wait. After the initial muster around 1:00 a.m., Captain Parker dismissed the company when the British failed to appear. The men went to Buckman Tavern and waited for three hours. Three hours of sitting in a tap room, drinking, talking, checking weapons, wondering. Three hours in which any man could have gone home. Most stayed. Teaching this wait — this long interval of choice — is more important than teaching the battle itself, because it reveals that the men on the Green were not swept up in a moment but made a deliberate decision to be there.

The third teaching moment is the question of the first shot. No one knows who fired it. The colonial depositions say the British fired first. The British accounts say the colonials did. Some historians have proposed that the shot came from a bystander, or from inside a building, or was an accidental discharge. The uncertainty is the lesson. Students accustomed to history as a series of known facts must learn to sit with ambiguity, to understand that the most important moment of April 19 is also the most disputed. Primary sources contradict one another. Eyewitnesses disagree. The truth may be irrecoverable. This is not a failure of history but its essential condition.

The fourth teaching moment is Prince Estabrook. When students learn that an enslaved man stood on the Green and was wounded fighting for liberty, the contradiction is immediately apparent. They do not need a teacher to point it out. The question writes itself: How can you fight for freedom when you are not free? The discomfort that this question produces is productive. It forces students to reckon with the gap between the Revolution's ideals and its realities — a gap that did not close with the Declaration of Independence or the Constitution or even the Civil War, and that remains visible in American life today.

The fifth teaching moment is the doorstep. Jonathan Harrington's crawl across the Green to die at his wife's feet is not a story about military history. It is a story about the cost of war measured in the most intimate terms — a family destroyed in full view of their own home. Students who learn this story carry it with them. It makes the Revolution real in a way that dates and generals and legislative acts cannot.

Teaching Lexington is not about transmitting a fixed body of knowledge. It is about giving students the tools to interrogate the past — to read depositions critically, to recognize the biases in commemorative monuments, to understand that the people who made history were as confused, frightened, and conflicted as the people who study it. The Green is not a shrine. It is a classroom. The best lesson it teaches is that the questions matter more than the answers.`,
    },
    create: {
      id: 'story-modern-teacher',
      townId: LEXINGTON_TOWN_ID,
      title: 'Teaching Beyond the Textbook',
      slug: 'teaching-beyond-textbook',
      storyType: 'MODERN_VOICE',
      verificationStatus: 'VERIFIED',
      textVersion: `The first time a student asks a question that the textbook cannot answer, something shifts in the classroom. It happened for many teachers at Lexington during a field trip, standing on the Green with a group of eighth graders, when a student pointed at the Minuteman Statue and asked a question that cut through two centuries of commemoration: "If they knew they were going to lose, why did they stay?"

It is exactly the right question, and it has no simple answer. The textbook version of Lexington reduces the battle to a paragraph: British soldiers marched, militia stood, shots were fired, the Revolution began. It is accurate in the way that a skeleton is accurate — the bones are all present, but the life is missing. To teach Lexington properly, a teacher must bring students into the space between the facts, where the human decisions were made.

Begin with the night. It is April 18, 1775, and you are a farmer in Lexington. You have been asleep for three hours when the bell on Belfry Hill begins to ring. It is not Sunday. It is not a fire. The only reason the bell rings at this hour is the one you have been dreading. You get up, dress, take your musket from above the fireplace, and walk to the Green. Your wife watches you leave. Your children are still asleep. You do not know if you will come back.

This is the first teaching moment: the alarm. Students often assume that the militiamen were eager for a fight, that they marched to the Green with patriotic fervor and revolutionary zeal. The evidence suggests otherwise. The depositions describe men who were nervous, uncertain, and acutely aware that they were outnumbered. They came to the Green because their neighbors came, because their captain called, and because the militia system obligated every able-bodied man to respond. The revolution began not with a roar but with a bell in the dark and a walk through the cold.

The second teaching moment is the wait. After the initial muster around 1:00 a.m., Captain Parker dismissed the company when the British failed to appear. The men went to Buckman Tavern and waited for three hours. Three hours of sitting in a tap room, drinking, talking, checking weapons, wondering. Three hours in which any man could have gone home. Most stayed. Teaching this wait — this long interval of choice — is more important than teaching the battle itself, because it reveals that the men on the Green were not swept up in a moment but made a deliberate decision to be there.

The third teaching moment is the question of the first shot. No one knows who fired it. The colonial depositions say the British fired first. The British accounts say the colonials did. Some historians have proposed that the shot came from a bystander, or from inside a building, or was an accidental discharge. The uncertainty is the lesson. Students accustomed to history as a series of known facts must learn to sit with ambiguity, to understand that the most important moment of April 19 is also the most disputed. Primary sources contradict one another. Eyewitnesses disagree. The truth may be irrecoverable. This is not a failure of history but its essential condition.

The fourth teaching moment is Prince Estabrook. When students learn that an enslaved man stood on the Green and was wounded fighting for liberty, the contradiction is immediately apparent. They do not need a teacher to point it out. The question writes itself: How can you fight for freedom when you are not free? The discomfort that this question produces is productive. It forces students to reckon with the gap between the Revolution's ideals and its realities — a gap that did not close with the Declaration of Independence or the Constitution or even the Civil War, and that remains visible in American life today.

The fifth teaching moment is the doorstep. Jonathan Harrington's crawl across the Green to die at his wife's feet is not a story about military history. It is a story about the cost of war measured in the most intimate terms — a family destroyed in full view of their own home. Students who learn this story carry it with them. It makes the Revolution real in a way that dates and generals and legislative acts cannot.

Teaching Lexington is not about transmitting a fixed body of knowledge. It is about giving students the tools to interrogate the past — to read depositions critically, to recognize the biases in commemorative monuments, to understand that the people who made history were as confused, frightened, and conflicted as the people who study it. The Green is not a shrine. It is a classroom. The best lesson it teaches is that the questions matter more than the answers.`,
      tags: ['lexington', 'education', 'teaching', 'primary-sources', 'critical-thinking'],
    },
  });

  console.log('  Stories seeded.');
}

// =============================================================================
// LESSON PLANS
// =============================================================================

async function seedLessons() {
  console.log('  Seeding lesson plans...');

  // --- 2 Existing Lessons (update with slugs + full lessonData) ---

  await prisma.lessonPlan.upsert({
    where: { id: 'cmm2s5o1y00cop5g711c6ad8t' },
    update: {
      slug: 'shot-heard-round-world',
      summary: 'Students explore the events of April 19, 1775, examining why the confrontation on Lexington Green became the opening battle of the American Revolution and how the concept of the "shot heard round the world" shaped American identity. The lesson uses primary sources including depositions, maps, and eyewitness accounts.',
      lessonData: {
        objectives: [
          'Sequence the key events of April 18-19, 1775, from the alarm to the battle to the retreat',
          'Analyze primary source depositions from Lexington participants',
          'Evaluate the significance of the Battle of Lexington in the context of the broader independence movement',
          'Explain why the question of who fired first mattered to both sides',
        ],
        essentialQuestions: [
          'Why did the Lexington militia stand on the Green when they were vastly outnumbered?',
          'How did the events of April 19, 1775, transform a political dispute into an armed conflict?',
          'What role did ordinary citizens play in the outbreak of the Revolution?',
          'Why does the question of who fired first still matter today?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Show students a photograph of Lexington Green today and ask them to imagine it is 5:00 a.m. on April 19, 1775. They are standing in a line of 77 men with muskets. They can see 700 British soldiers approaching. Write one sentence describing what you would be thinking.',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'Background: The road from political protest to armed conflict, 1774-1775',
            'The night of April 18-19: Revere, Dawes, the alarm system, and the muster',
            'The confrontation on the Green: Parker\'s decision, Pitcairn\'s orders, the first shot',
            'The aftermath: eight dead, the march to Concord, the retreat, and the depositions',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Deposition Analysis: Students work in pairs with excerpts from the depositions of Captain Parker, Sylvanus Wood, and a British officer. They identify key claims, note contradictions, and assess the credibility of each source.',
            'Map Exercise: Using a map of the Green, students plot the positions of the militia, the British column, and key landmarks (Buckman Tavern, the Harrington house, the road to Concord). They consider how geography influenced the events.',
          ],
        },
        independentPractice: {
          duration: '20 minutes',
          assignment: 'Write a 250-word news dispatch about the Battle of Lexington as if you are a reporter who arrived on the Green one hour after the shooting. Use at least two details from the depositions. Your dispatch should answer: What happened? Who was involved? Why does it matter?',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Class discussion: Ralph Waldo Emerson called April 19, 1775, "the shot heard round the world." Is that an accurate description or an exaggeration? What did the events at Lexington mean to the rest of the colonies? Exit ticket: Name one thing you learned today that surprised you about the Battle of Lexington.',
        },
        differentiation: {
          struggling: 'Provide a chronological timeline with key events pre-filled and blank spaces for students to add details. Offer simplified deposition excerpts with vocabulary support.',
          advanced: 'Compare the Lexington depositions with the British account published in the London Gazette. Write a paragraph analyzing why the two accounts differ and what each side had to gain from its version.',
          ell: 'Provide a visual glossary of key terms (militia, deposition, muster, disperse, volley). Pair with a fluent English speaker for deposition analysis. Allow news dispatch to be completed as a bulleted list rather than paragraph form.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.1', 'RH.6-8.2', 'RH.6-8.6', 'WHST.6-8.2'],
        c3Framework: ['D2.His.1.6-8', 'D2.His.4.6-8', 'D2.His.6.6-8', 'D2.His.14.6-8'],
        note: 'Designed for grades 6-8. Can be adapted for grades 9-10 with more complex primary source analysis.',
      },
    },
    create: {
      id: 'cmm2s5o1y00cop5g711c6ad8t',
      townId: LEXINGTON_TOWN_ID,
      title: 'The Shot Heard Round the World: Lexington and the Start of Revolution',
      slug: 'shot-heard-round-world',
      gradeRange: '6-8',
      estimatedDuration: '2 class periods',
      summary: 'Students explore the events of April 19, 1775, examining why the confrontation on Lexington Green became the opening battle of the American Revolution and how the concept of the "shot heard round the world" shaped American identity. The lesson uses primary sources including depositions, maps, and eyewitness accounts.',
      lessonData: {
        objectives: [
          'Sequence the key events of April 18-19, 1775, from the alarm to the battle to the retreat',
          'Analyze primary source depositions from Lexington participants',
          'Evaluate the significance of the Battle of Lexington in the context of the broader independence movement',
          'Explain why the question of who fired first mattered to both sides',
        ],
        essentialQuestions: [
          'Why did the Lexington militia stand on the Green when they were vastly outnumbered?',
          'How did the events of April 19, 1775, transform a political dispute into an armed conflict?',
          'What role did ordinary citizens play in the outbreak of the Revolution?',
          'Why does the question of who fired first still matter today?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Show students a photograph of Lexington Green today and ask them to imagine it is 5:00 a.m. on April 19, 1775. They are standing in a line of 77 men with muskets. They can see 700 British soldiers approaching. Write one sentence describing what you would be thinking.',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'Background: The road from political protest to armed conflict, 1774-1775',
            'The night of April 18-19: Revere, Dawes, the alarm system, and the muster',
            'The confrontation on the Green: Parker\'s decision, Pitcairn\'s orders, the first shot',
            'The aftermath: eight dead, the march to Concord, the retreat, and the depositions',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Deposition Analysis: Students work in pairs with excerpts from the depositions of Captain Parker, Sylvanus Wood, and a British officer. They identify key claims, note contradictions, and assess the credibility of each source.',
            'Map Exercise: Using a map of the Green, students plot the positions of the militia, the British column, and key landmarks (Buckman Tavern, the Harrington house, the road to Concord). They consider how geography influenced the events.',
          ],
        },
        independentPractice: {
          duration: '20 minutes',
          assignment: 'Write a 250-word news dispatch about the Battle of Lexington as if you are a reporter who arrived on the Green one hour after the shooting. Use at least two details from the depositions. Your dispatch should answer: What happened? Who was involved? Why does it matter?',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Class discussion: Ralph Waldo Emerson called April 19, 1775, "the shot heard round the world." Is that an accurate description or an exaggeration? What did the events at Lexington mean to the rest of the colonies? Exit ticket: Name one thing you learned today that surprised you about the Battle of Lexington.',
        },
        differentiation: {
          struggling: 'Provide a chronological timeline with key events pre-filled and blank spaces for students to add details. Offer simplified deposition excerpts with vocabulary support.',
          advanced: 'Compare the Lexington depositions with the British account published in the London Gazette. Write a paragraph analyzing why the two accounts differ and what each side had to gain from its version.',
          ell: 'Provide a visual glossary of key terms (militia, deposition, muster, disperse, volley). Pair with a fluent English speaker for deposition analysis. Allow news dispatch to be completed as a bulleted list rather than paragraph form.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.1', 'RH.6-8.2', 'RH.6-8.6', 'WHST.6-8.2'],
        c3Framework: ['D2.His.1.6-8', 'D2.His.4.6-8', 'D2.His.6.6-8', 'D2.His.14.6-8'],
        note: 'Designed for grades 6-8. Can be adapted for grades 9-10 with more complex primary source analysis.',
      },
    },
  });

  await prisma.lessonPlan.upsert({
    where: { id: 'cmm2s5o2u00cpp5g79esglqe5' },
    update: {
      slug: 'revolution-and-rights',
      summary: 'Students examine the Battle of Lexington through the lens of rights and liberty, exploring whose rights were being defended, who was excluded from the promise of the Revolution, and how the meaning of liberty has expanded over the past 250 years. The lesson centers the stories of Prince Estabrook, Dorothy Quincy, and the ordinary militiamen to complicate the traditional narrative.',
      lessonData: {
        objectives: [
          'Analyze the concept of liberty as understood by different groups in 1775 (free white men, enslaved people, women)',
          'Evaluate how the presence of Prince Estabrook on the Green challenges the traditional narrative of the Revolution',
          'Compare colonial and British justifications for their actions on April 19',
          'Construct an argument about the relationship between the Revolution\'s ideals and its practices',
        ],
        essentialQuestions: [
          'Whose liberty was being defended on Lexington Green?',
          'How does Prince Estabrook\'s story complicate the narrative of the Revolution as a fight for freedom?',
          'What does it mean to fight for principles that do not apply to you?',
          'How has the meaning of the "rights" defended at Lexington expanded since 1775?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Read aloud the inscription on the Parker Boulder on Lexington Green. Then reveal that at least one man standing in the militia line was enslaved. Ask students to write a response: Does this change the meaning of the inscription? How?',
        },
        directInstruction: {
          duration: '25 minutes',
          content: [
            'Review of the events of April 19, 1775, with emphasis on the people present: militia, families, enslaved individuals',
            'Profile of Prince Estabrook: what we know, what we don\'t know, and why the gaps in the record matter',
            'Profile of Dorothy Quincy: a woman\'s experience of the night of the alarm',
            'The Revolution\'s promise and its limits: who was included in "We the People" and who was excluded',
            'The expansion of rights from 1775 to the present: abolition, women\'s suffrage, civil rights',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Perspective Journals: Students write three short journal entries — one from the perspective of a free militiaman, one from Prince Estabrook, and one from a woman watching from a house on the Green. Each entry must reference specific historical details.',
            'Rights Expansion Timeline: Students create a visual timeline showing how the rights claimed at Lexington have been extended to include previously excluded groups, with key dates, events, and constitutional amendments.',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Write a 400-word essay answering one of the essential questions. Your essay must include at least three specific historical references and must address at least one counterargument. Consider the perspectives of at least two different groups present at Lexington.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Socratic seminar: Is it possible to honor the sacrifice of the men on the Green while also acknowledging the Revolution\'s failures to extend liberty to all? How should Lexington tell its story in the 21st century? Exit ticket: Name one way the meaning of liberty has changed since 1775 and one way it has stayed the same.',
        },
        differentiation: {
          struggling: 'Provide sentence frames for the perspective journals and the essay. Offer a pre-built timeline template with some events already placed.',
          advanced: 'Research the post-war life of Prince Estabrook and write a one-page biographical essay. Alternatively, compare Lexington\'s commemoration of the battle with how other revolutionary sites (e.g., Colonial Williamsburg) address the role of enslaved people.',
          ell: 'Provide key vocabulary list with definitions and examples (liberty, rights, enslaved, militia, suffrage). Allow perspective journals to be completed as graphic organizers with images and key words rather than full sentences.',
        },
      },
      standards: {
        commonCore: ['RH.9-10.1', 'RH.9-10.6', 'RH.9-10.9', 'WHST.9-10.1', 'WHST.9-10.2'],
        c3Framework: ['D2.His.1.9-12', 'D2.His.4.9-12', 'D2.His.5.9-12', 'D2.His.14.9-12', 'D2.Civ.10.9-12'],
        note: 'Designed for grades 9-12. The Socratic seminar and essay components require maturity and prior experience with evidence-based argumentation.',
      },
    },
    create: {
      id: 'cmm2s5o2u00cpp5g79esglqe5',
      townId: LEXINGTON_TOWN_ID,
      title: 'Revolution and Rights: Lexington Through the Lens of Liberty',
      slug: 'revolution-and-rights',
      gradeRange: '9-12',
      estimatedDuration: '2-3 class periods',
      summary: 'Students examine the Battle of Lexington through the lens of rights and liberty, exploring whose rights were being defended, who was excluded from the promise of the Revolution, and how the meaning of liberty has expanded over the past 250 years. The lesson centers the stories of Prince Estabrook, Dorothy Quincy, and the ordinary militiamen to complicate the traditional narrative.',
      lessonData: {
        objectives: [
          'Analyze the concept of liberty as understood by different groups in 1775 (free white men, enslaved people, women)',
          'Evaluate how the presence of Prince Estabrook on the Green challenges the traditional narrative of the Revolution',
          'Compare colonial and British justifications for their actions on April 19',
          'Construct an argument about the relationship between the Revolution\'s ideals and its practices',
        ],
        essentialQuestions: [
          'Whose liberty was being defended on Lexington Green?',
          'How does Prince Estabrook\'s story complicate the narrative of the Revolution as a fight for freedom?',
          'What does it mean to fight for principles that do not apply to you?',
          'How has the meaning of the "rights" defended at Lexington expanded since 1775?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Read aloud the inscription on the Parker Boulder on Lexington Green. Then reveal that at least one man standing in the militia line was enslaved. Ask students to write a response: Does this change the meaning of the inscription? How?',
        },
        directInstruction: {
          duration: '25 minutes',
          content: [
            'Review of the events of April 19, 1775, with emphasis on the people present: militia, families, enslaved individuals',
            'Profile of Prince Estabrook: what we know, what we don\'t know, and why the gaps in the record matter',
            'Profile of Dorothy Quincy: a woman\'s experience of the night of the alarm',
            'The Revolution\'s promise and its limits: who was included in "We the People" and who was excluded',
            'The expansion of rights from 1775 to the present: abolition, women\'s suffrage, civil rights',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Perspective Journals: Students write three short journal entries — one from the perspective of a free militiaman, one from Prince Estabrook, and one from a woman watching from a house on the Green. Each entry must reference specific historical details.',
            'Rights Expansion Timeline: Students create a visual timeline showing how the rights claimed at Lexington have been extended to include previously excluded groups, with key dates, events, and constitutional amendments.',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Write a 400-word essay answering one of the essential questions. Your essay must include at least three specific historical references and must address at least one counterargument. Consider the perspectives of at least two different groups present at Lexington.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Socratic seminar: Is it possible to honor the sacrifice of the men on the Green while also acknowledging the Revolution\'s failures to extend liberty to all? How should Lexington tell its story in the 21st century? Exit ticket: Name one way the meaning of liberty has changed since 1775 and one way it has stayed the same.',
        },
        differentiation: {
          struggling: 'Provide sentence frames for the perspective journals and the essay. Offer a pre-built timeline template with some events already placed.',
          advanced: 'Research the post-war life of Prince Estabrook and write a one-page biographical essay. Alternatively, compare Lexington\'s commemoration of the battle with how other revolutionary sites (e.g., Colonial Williamsburg) address the role of enslaved people.',
          ell: 'Provide key vocabulary list with definitions and examples (liberty, rights, enslaved, militia, suffrage). Allow perspective journals to be completed as graphic organizers with images and key words rather than full sentences.',
        },
      },
      standards: {
        commonCore: ['RH.9-10.1', 'RH.9-10.6', 'RH.9-10.9', 'WHST.9-10.1', 'WHST.9-10.2'],
        c3Framework: ['D2.His.1.9-12', 'D2.His.4.9-12', 'D2.His.5.9-12', 'D2.His.14.9-12', 'D2.Civ.10.9-12'],
        note: 'Designed for grades 9-12. The Socratic seminar and essay components require maturity and prior experience with evidence-based argumentation.',
      },
    },
  });

  // --- 2 New Lessons ---

  await prisma.lessonPlan.upsert({
    where: { id: 'lexington-lesson-depositions' },
    update: {
      slug: 'lexington-depositions-close-reading',
      summary: 'Students conduct a close reading of the Lexington depositions — the sworn statements collected from participants and eyewitnesses within days of the battle. By analyzing these primary sources for bias, contradiction, and corroboration, students develop critical skills in historical thinking and evidence evaluation.',
      lessonData: {
        objectives: [
          'Read and analyze eighteenth-century primary source documents for content and bias',
          'Identify contradictions between different eyewitness accounts of the same event',
          'Evaluate the reliability of sworn depositions as historical evidence',
          'Understand the political purpose behind the collection and publication of the depositions',
        ],
        essentialQuestions: [
          'Can we trust eyewitness accounts? What factors affect their reliability?',
          'Why did the Provincial Congress rush to collect and publish depositions?',
          'How do the colonial and British accounts of the battle differ, and what explains the differences?',
          'What can depositions tell us that other sources cannot?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Show students a short video of a staged event (a brief altercation between two actors). Immediately ask three students to describe what they saw. Compare their accounts. Discuss: Why do eyewitnesses to the same event give different accounts? What does this tell us about historical testimony?',
        },
        directInstruction: {
          duration: '15 minutes',
          content: [
            'What is a deposition? Legal context, sworn testimony, the role of the justice of the peace',
            'Why the depositions were collected: the propaganda race between the colonies and Britain',
            'The Quero mission: how the colonial depositions reached England before the British account',
            'Brief overview of the events of April 19 to provide context for the documents',
          ],
        },
        guidedPractice: {
          duration: '35 minutes',
          activities: [
            'Close Reading: Students work in groups of 3-4, each group receiving a different deposition excerpt (Captain Parker, Sylvanus Wood, Ebenezer Munroe, and a British officer\'s account). Using a provided analysis worksheet, students identify: (a) who the deponent is, (b) what they claim happened, (c) what specific details they include, (d) what they leave out, and (e) any language that suggests bias.',
            'Cross-Examination: Groups pair up and compare their depositions, noting agreements and contradictions. Each pair creates a Venn diagram showing what the accounts share and where they diverge.',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'You are a historian tasked with writing a one-paragraph summary of what happened on Lexington Green using ONLY the depositions as evidence. You must cite at least two depositions and explain how you resolved any contradictions between them. Conclude with a sentence about what question the depositions cannot answer.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Class discussion: Based on our analysis, who do you think fired first? Take a class poll, then discuss: Can we ever know for certain? Does it matter? Exit ticket: Name one way that depositions are useful to historians and one limitation of depositions as evidence.',
        },
        differentiation: {
          struggling: 'Provide modernized versions of the deposition excerpts alongside the originals. Offer a guided analysis worksheet with fill-in-the-blank questions rather than open-ended prompts.',
          advanced: 'Read the full text of two depositions and write a 500-word comparative analysis. Research how modern forensic and archaeological evidence has been used to investigate the events on the Green.',
          ell: 'Provide a glossary of eighteenth-century legal and military terms (deponent, musket, volley, disperse, regulars). Allow the independent practice to be completed as a graphic organizer mapping evidence to claims.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.1', 'RH.6-8.2', 'RH.6-8.6', 'RH.6-8.8', 'RH.6-8.9'],
        c3Framework: ['D2.His.1.6-8', 'D2.His.2.6-8', 'D2.His.4.6-8', 'D2.His.11.6-8'],
        note: 'Designed for grades 7-10. The close reading component can be adjusted in complexity for different grade levels.',
      },
    },
    create: {
      id: 'lexington-lesson-depositions',
      townId: LEXINGTON_TOWN_ID,
      title: 'Reading the Evidence: Close Analysis of the Lexington Depositions',
      slug: 'lexington-depositions-close-reading',
      gradeRange: '7-10',
      estimatedDuration: '2 class periods',
      summary: 'Students conduct a close reading of the Lexington depositions — the sworn statements collected from participants and eyewitnesses within days of the battle. By analyzing these primary sources for bias, contradiction, and corroboration, students develop critical skills in historical thinking and evidence evaluation.',
      lessonData: {
        objectives: [
          'Read and analyze eighteenth-century primary source documents for content and bias',
          'Identify contradictions between different eyewitness accounts of the same event',
          'Evaluate the reliability of sworn depositions as historical evidence',
          'Understand the political purpose behind the collection and publication of the depositions',
        ],
        essentialQuestions: [
          'Can we trust eyewitness accounts? What factors affect their reliability?',
          'Why did the Provincial Congress rush to collect and publish depositions?',
          'How do the colonial and British accounts of the battle differ, and what explains the differences?',
          'What can depositions tell us that other sources cannot?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Show students a short video of a staged event (a brief altercation between two actors). Immediately ask three students to describe what they saw. Compare their accounts. Discuss: Why do eyewitnesses to the same event give different accounts? What does this tell us about historical testimony?',
        },
        directInstruction: {
          duration: '15 minutes',
          content: [
            'What is a deposition? Legal context, sworn testimony, the role of the justice of the peace',
            'Why the depositions were collected: the propaganda race between the colonies and Britain',
            'The Quero mission: how the colonial depositions reached England before the British account',
            'Brief overview of the events of April 19 to provide context for the documents',
          ],
        },
        guidedPractice: {
          duration: '35 minutes',
          activities: [
            'Close Reading: Students work in groups of 3-4, each group receiving a different deposition excerpt (Captain Parker, Sylvanus Wood, Ebenezer Munroe, and a British officer\'s account). Using a provided analysis worksheet, students identify: (a) who the deponent is, (b) what they claim happened, (c) what specific details they include, (d) what they leave out, and (e) any language that suggests bias.',
            'Cross-Examination: Groups pair up and compare their depositions, noting agreements and contradictions. Each pair creates a Venn diagram showing what the accounts share and where they diverge.',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'You are a historian tasked with writing a one-paragraph summary of what happened on Lexington Green using ONLY the depositions as evidence. You must cite at least two depositions and explain how you resolved any contradictions between them. Conclude with a sentence about what question the depositions cannot answer.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Class discussion: Based on our analysis, who do you think fired first? Take a class poll, then discuss: Can we ever know for certain? Does it matter? Exit ticket: Name one way that depositions are useful to historians and one limitation of depositions as evidence.',
        },
        differentiation: {
          struggling: 'Provide modernized versions of the deposition excerpts alongside the originals. Offer a guided analysis worksheet with fill-in-the-blank questions rather than open-ended prompts.',
          advanced: 'Read the full text of two depositions and write a 500-word comparative analysis. Research how modern forensic and archaeological evidence has been used to investigate the events on the Green.',
          ell: 'Provide a glossary of eighteenth-century legal and military terms (deponent, musket, volley, disperse, regulars). Allow the independent practice to be completed as a graphic organizer mapping evidence to claims.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.1', 'RH.6-8.2', 'RH.6-8.6', 'RH.6-8.8', 'RH.6-8.9'],
        c3Framework: ['D2.His.1.6-8', 'D2.His.2.6-8', 'D2.His.4.6-8', 'D2.His.11.6-8'],
        note: 'Designed for grades 7-10. The close reading component can be adjusted in complexity for different grade levels.',
      },
    },
  });

  await prisma.lessonPlan.upsert({
    where: { id: 'lexington-lesson-who-fired-first' },
    update: {
      slug: 'who-fired-first',
      summary: 'An interactive evidence lab in which students act as historical investigators, examining conflicting accounts, physical evidence, and contextual clues to determine who most likely fired the first shot on Lexington Green. Students weigh evidence, evaluate sources, and present their conclusions in a mock hearing format.',
      lessonData: {
        objectives: [
          'Weigh conflicting evidence to form a supported historical conclusion',
          'Distinguish between primary and secondary sources and evaluate their relative value',
          'Understand how context (political pressure, personal interest, time elapsed) affects testimony',
          'Present a historical argument orally using evidence and reasoning',
        ],
        essentialQuestions: [
          'Who fired the first shot at Lexington, and can we ever know for certain?',
          'How do historians decide what happened when sources disagree?',
          'Does it matter who fired first? Why or why not?',
          'How does the political context of 1775 affect the evidence we have?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Present students with a mystery scenario: Two groups disagree about who started a conflict. Each side has witnesses who support its version. The physical evidence is ambiguous. Ask: How would you decide who is telling the truth? What kinds of evidence would be most convincing? Create a class list of criteria for evaluating conflicting accounts.',
        },
        directInstruction: {
          duration: '15 minutes',
          content: [
            'Brief review of the events on Lexington Green on April 19, 1775',
            'The five main theories about who fired first: (1) a British soldier, (2) a colonial militiaman, (3) a spectator from behind a wall or building, (4) an accidental discharge, (5) impossible to determine',
            'Introduction to the evidence: colonial depositions, British officer accounts, physical analysis of the Green, and later scholarly arguments',
            'The political stakes: why both sides needed to blame the other for firing first',
          ],
        },
        guidedPractice: {
          duration: '35 minutes',
          activities: [
            'Evidence Stations: Set up five stations around the room, each containing a different type of evidence. Station 1: Colonial depositions (Parker, Wood, Munroe). Station 2: British accounts (Pitcairn\'s report, Barker\'s diary). Station 3: Map of the Green showing positions. Station 4: Analysis of musket ball trajectory and wound patterns. Station 5: Contextual evidence (the political purpose of the depositions, the British need to justify the shooting). Students rotate through all five stations, recording key evidence on a graphic organizer.',
            'Evidence Weighing: After completing the stations, students rate each piece of evidence on a scale of 1-5 for reliability and relevance. They discuss their ratings in small groups and must reach a consensus on their top three most reliable pieces of evidence.',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Each student (or pair) prepares a 2-minute oral argument for a "Historical Inquiry Hearing," presenting their conclusion about who fired first and supporting it with at least three pieces of evidence from the stations. They must also address the strongest counterargument against their position.',
        },
        closure: {
          duration: '15 minutes',
          activity: 'Hold the Historical Inquiry Hearing. Selected students present their arguments. The class votes on the most convincing argument (not necessarily the "right" answer). Final discussion: Is "we don\'t know" an acceptable conclusion in history? When is it important to acknowledge uncertainty rather than force a conclusion? Exit ticket: In one sentence, explain why the question of who fired first has been impossible to answer definitively.',
        },
        differentiation: {
          struggling: 'Provide pre-organized evidence packets at each station with key passages highlighted. Offer sentence starters for the oral argument: "I believe _____ fired first because...", "The strongest evidence is...", "A counterargument would be..."',
          advanced: 'Read David Hackett Fischer\'s analysis of the first shot in "Paul Revere\'s Ride" and evaluate his methodology. Write a 500-word essay on whether the question can ever be definitively resolved using current or future investigative methods.',
          ell: 'Provide visual evidence (maps, diagrams) alongside text-based evidence at each station. Allow oral argument to be delivered with notes or from a written script. Provide key vocabulary: deposition, testimony, trajectory, corroboration, contradiction.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.1', 'RH.6-8.8', 'RH.6-8.9', 'SL.8.1', 'SL.8.4'],
        c3Framework: ['D2.His.1.6-8', 'D2.His.2.6-8', 'D2.His.11.6-8', 'D2.His.16.6-8'],
        note: 'Designed for grades 6-9. The evidence stations and mock hearing format make this lesson particularly engaging for kinesthetic and oral learners.',
      },
    },
    create: {
      id: 'lexington-lesson-who-fired-first',
      townId: LEXINGTON_TOWN_ID,
      title: 'Who Fired First? An Evidence Lab on Lexington Green',
      slug: 'who-fired-first',
      gradeRange: '6-9',
      estimatedDuration: '2-3 class periods',
      summary: 'An interactive evidence lab in which students act as historical investigators, examining conflicting accounts, physical evidence, and contextual clues to determine who most likely fired the first shot on Lexington Green. Students weigh evidence, evaluate sources, and present their conclusions in a mock hearing format.',
      lessonData: {
        objectives: [
          'Weigh conflicting evidence to form a supported historical conclusion',
          'Distinguish between primary and secondary sources and evaluate their relative value',
          'Understand how context (political pressure, personal interest, time elapsed) affects testimony',
          'Present a historical argument orally using evidence and reasoning',
        ],
        essentialQuestions: [
          'Who fired the first shot at Lexington, and can we ever know for certain?',
          'How do historians decide what happened when sources disagree?',
          'Does it matter who fired first? Why or why not?',
          'How does the political context of 1775 affect the evidence we have?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Present students with a mystery scenario: Two groups disagree about who started a conflict. Each side has witnesses who support its version. The physical evidence is ambiguous. Ask: How would you decide who is telling the truth? What kinds of evidence would be most convincing? Create a class list of criteria for evaluating conflicting accounts.',
        },
        directInstruction: {
          duration: '15 minutes',
          content: [
            'Brief review of the events on Lexington Green on April 19, 1775',
            'The five main theories about who fired first: (1) a British soldier, (2) a colonial militiaman, (3) a spectator from behind a wall or building, (4) an accidental discharge, (5) impossible to determine',
            'Introduction to the evidence: colonial depositions, British officer accounts, physical analysis of the Green, and later scholarly arguments',
            'The political stakes: why both sides needed to blame the other for firing first',
          ],
        },
        guidedPractice: {
          duration: '35 minutes',
          activities: [
            'Evidence Stations: Set up five stations around the room, each containing a different type of evidence. Station 1: Colonial depositions (Parker, Wood, Munroe). Station 2: British accounts (Pitcairn\'s report, Barker\'s diary). Station 3: Map of the Green showing positions. Station 4: Analysis of musket ball trajectory and wound patterns. Station 5: Contextual evidence (the political purpose of the depositions, the British need to justify the shooting). Students rotate through all five stations, recording key evidence on a graphic organizer.',
            'Evidence Weighing: After completing the stations, students rate each piece of evidence on a scale of 1-5 for reliability and relevance. They discuss their ratings in small groups and must reach a consensus on their top three most reliable pieces of evidence.',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Each student (or pair) prepares a 2-minute oral argument for a "Historical Inquiry Hearing," presenting their conclusion about who fired first and supporting it with at least three pieces of evidence from the stations. They must also address the strongest counterargument against their position.',
        },
        closure: {
          duration: '15 minutes',
          activity: 'Hold the Historical Inquiry Hearing. Selected students present their arguments. The class votes on the most convincing argument (not necessarily the "right" answer). Final discussion: Is "we don\'t know" an acceptable conclusion in history? When is it important to acknowledge uncertainty rather than force a conclusion? Exit ticket: In one sentence, explain why the question of who fired first has been impossible to answer definitively.',
        },
        differentiation: {
          struggling: 'Provide pre-organized evidence packets at each station with key passages highlighted. Offer sentence starters for the oral argument: "I believe _____ fired first because...", "The strongest evidence is...", "A counterargument would be..."',
          advanced: 'Read David Hackett Fischer\'s analysis of the first shot in "Paul Revere\'s Ride" and evaluate his methodology. Write a 500-word essay on whether the question can ever be definitively resolved using current or future investigative methods.',
          ell: 'Provide visual evidence (maps, diagrams) alongside text-based evidence at each station. Allow oral argument to be delivered with notes or from a written script. Provide key vocabulary: deposition, testimony, trajectory, corroboration, contradiction.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.1', 'RH.6-8.8', 'RH.6-8.9', 'SL.8.1', 'SL.8.4'],
        c3Framework: ['D2.His.1.6-8', 'D2.His.2.6-8', 'D2.His.11.6-8', 'D2.His.16.6-8'],
        note: 'Designed for grades 6-9. The evidence stations and mock hearing format make this lesson particularly engaging for kinesthetic and oral learners.',
      },
    },
  });

  console.log('  Lesson plans seeded.');
}

// =============================================================================
// MAIN
// =============================================================================

async function main() {
  console.log('Seeding Lexington content...');

  await seedPeople();
  await seedPlaces();
  await seedEvents();
  await seedEventPeople();
  await seedStories();
  await seedLessons();

  console.log('Lexington content seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
