import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const TOWN_ID = 'us-nj-princeton';

// =============================================================================
// PEOPLE
// =============================================================================

async function seedPeople() {
  console.log('  Seeding people...');

  // --- 8 Existing People (upsert with rich bioLong) ---

  await prisma.person.upsert({
    where: { id: 'person-princeton-hugh-mercer' },
    update: {
      bioLong: `Hugh Mercer was born around 1726 in Pitsligo, Aberdeenshire, Scotland. He studied medicine at the University of Aberdeen and served as an assistant surgeon in the army of Charles Edward Stuart during the Jacobite rising of 1745. After the devastating defeat at the Battle of Culloden in April 1746, Mercer fled Scotland and emigrated to Pennsylvania around 1747. He settled near present-day Mercersburg, Pennsylvania, where he practiced medicine among frontier communities and local Lenape people.

During the French and Indian War, Mercer served as a captain in the Pennsylvania provincial forces. He participated in the disastrous Braddock expedition of 1755 and later served under General John Forbes in the 1758 campaign that captured Fort Duquesne (present-day Pittsburgh). It was during this period that Mercer formed a friendship with George Washington, a fellow officer in the Virginia militia. This personal connection would shape the remainder of Mercer's life and bring him ultimately to Princeton.

After the French and Indian War, Mercer relocated to Fredericksburg, Virginia, where he established a successful apothecary and medical practice. When the Revolution began, Washington appointed Mercer a brigadier general in the Continental Army, a reflection of both his military experience and their personal bond. Mercer commanded a brigade during the New Jersey campaign of late 1776 and early 1777, participating in the crossing of the Delaware and the victory at Trenton.

At the Battle of Princeton on January 3, 1777, Mercer led an advance party that encountered British troops under Lieutenant Colonel Charles Mawhood near the Thomas Clarke farmhouse. Mercer's horse was shot from under him, and he was surrounded by British soldiers. According to accounts from both sides, the British mistook him for Washington and demanded his surrender. When Mercer refused and attempted to fight with his sword, he was bayoneted repeatedly — at least seven times by most accounts. Left for dead on the frozen ground, Mercer was carried to the Thomas Clarke house, where he lingered for nine days before dying on January 12, 1777.

WHY HE MATTERS TO PRINCETON

Hugh Mercer's death at Princeton gave the battle much of its emotional resonance. His refusal to surrender, his brutal wounding, and his slow death became a rallying narrative for the patriot cause, widely publicized in newspapers and pamphlets throughout the colonies. The site of his wounding, near what is now Mercer Street, remains a focal point of the battlefield landscape. John Trumbull's painting "The Death of General Mercer at the Battle of Princeton" became one of the defining images of the Revolution. Mercer County, New Jersey, along with Mercersburg, Pennsylvania, and numerous streets and institutions bear his name.

- c.1726: Born in Pitsligo, Aberdeenshire, Scotland
- 1746: Fled Scotland after the Battle of Culloden
- 1755-1758: Served in the French and Indian War; befriended George Washington
- 1776: Appointed brigadier general in the Continental Army
- 1777: Mortally wounded at the Battle of Princeton on January 3; died January 12

SOURCES
- Fischer, David Hackett. "Washington's Crossing." Oxford University Press, 2004.
- Stryker, William S. "The Battles of Trenton and Princeton." Houghton Mifflin, 1898.
- Waterman, Joseph M. "With Sword and Lancet: The Life of General Hugh Mercer." Kennikat Press, 1941.`,
    },
    create: {
      id: 'person-princeton-hugh-mercer',
      name: 'General Hugh Mercer',
      roles: ['Continental General', 'Physician', 'Veteran'],
      bioShort: 'Scottish-born physician and Continental Army brigadier general (c.1726-1777) who was mortally wounded at the Battle of Princeton on January 3, 1777, after refusing to surrender to British soldiers.',
      bioLong: `Hugh Mercer was born around 1726 in Pitsligo, Aberdeenshire, Scotland. He studied medicine at the University of Aberdeen and served as an assistant surgeon in the army of Charles Edward Stuart during the Jacobite rising of 1745. After the devastating defeat at the Battle of Culloden in April 1746, Mercer fled Scotland and emigrated to Pennsylvania around 1747. He settled near present-day Mercersburg, Pennsylvania, where he practiced medicine among frontier communities and local Lenape people.

During the French and Indian War, Mercer served as a captain in the Pennsylvania provincial forces. He participated in the disastrous Braddock expedition of 1755 and later served under General John Forbes in the 1758 campaign that captured Fort Duquesne (present-day Pittsburgh). It was during this period that Mercer formed a friendship with George Washington, a fellow officer in the Virginia militia. This personal connection would shape the remainder of Mercer's life and bring him ultimately to Princeton.

After the French and Indian War, Mercer relocated to Fredericksburg, Virginia, where he established a successful apothecary and medical practice. When the Revolution began, Washington appointed Mercer a brigadier general in the Continental Army, a reflection of both his military experience and their personal bond. Mercer commanded a brigade during the New Jersey campaign of late 1776 and early 1777, participating in the crossing of the Delaware and the victory at Trenton.

At the Battle of Princeton on January 3, 1777, Mercer led an advance party that encountered British troops under Lieutenant Colonel Charles Mawhood near the Thomas Clarke farmhouse. Mercer's horse was shot from under him, and he was surrounded by British soldiers. According to accounts from both sides, the British mistook him for Washington and demanded his surrender. When Mercer refused and attempted to fight with his sword, he was bayoneted repeatedly — at least seven times by most accounts. Left for dead on the frozen ground, Mercer was carried to the Thomas Clarke house, where he lingered for nine days before dying on January 12, 1777.

WHY HE MATTERS TO PRINCETON

Hugh Mercer's death at Princeton gave the battle much of its emotional resonance. His refusal to surrender, his brutal wounding, and his slow death became a rallying narrative for the patriot cause, widely publicized in newspapers and pamphlets throughout the colonies. The site of his wounding, near what is now Mercer Street, remains a focal point of the battlefield landscape. John Trumbull's painting "The Death of General Mercer at the Battle of Princeton" became one of the defining images of the Revolution. Mercer County, New Jersey, along with Mercersburg, Pennsylvania, and numerous streets and institutions bear his name.

- c.1726: Born in Pitsligo, Aberdeenshire, Scotland
- 1746: Fled Scotland after the Battle of Culloden
- 1755-1758: Served in the French and Indian War; befriended George Washington
- 1776: Appointed brigadier general in the Continental Army
- 1777: Mortally wounded at the Battle of Princeton on January 3; died January 12

SOURCES
- Fischer, David Hackett. "Washington's Crossing." Oxford University Press, 2004.
- Stryker, William S. "The Battles of Trenton and Princeton." Houghton Mifflin, 1898.
- Waterman, Joseph M. "With Sword and Lancet: The Life of General Hugh Mercer." Kennikat Press, 1941.`,
      birthYear: 1726,
      deathYear: 1777,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-princeton-charles-mawhood' },
    update: {
      bioLong: `Charles Mawhood was a British Army officer who served as a lieutenant colonel in the 17th Regiment of Foot during the American Revolution. Born in England, Mawhood had a long career in the British military before being posted to North America. He commanded the British garrison left at Princeton in late December 1776 and early January 1777, when most of the British forces in New Jersey were concentrated at Trenton and New Brunswick under General Charles Cornwallis.

On the morning of January 3, 1777, Mawhood was marching a detachment of approximately 800 soldiers — drawn from the 17th, 40th, and 55th Regiments of Foot — from Princeton toward Trenton to reinforce Cornwallis. His column had crossed Stony Brook and was proceeding south on the Post Road when scouts spotted the American column moving toward Princeton across the fields to the southeast. Mawhood made the aggressive decision to turn his column around and attack the smaller American force he could see, which was General Hugh Mercer's advance brigade.

Mawhood's counterattack was executed with professional precision. His troops formed a line of battle, delivered devastating volleys, and charged with bayonets, routing Mercer's brigade and mortally wounding Mercer himself. For a brief period, the British appeared to be winning the engagement. However, Mawhood had not anticipated the arrival of Washington with the main American force. When Washington rallied the fleeing Americans and brought fresh troops into the fight, Mawhood found himself outnumbered and outflanked. He fought a skillful rearguard action and led the remnant of the 17th Regiment in a fighting retreat toward Trenton, breaking through the American lines.

Mawhood's conduct at Princeton earned him respect from both sides. He displayed tactical competence, personal bravery, and an ability to maintain unit cohesion under extreme pressure. He continued to serve in the British Army for the remainder of the war.

WHY HE MATTERS TO PRINCETON

Charles Mawhood is the British counterpart in the Princeton story — the professional soldier whose initial success nearly turned the battle into an American defeat. His decision to attack rather than continue his march toward Trenton created the engagement that became the Battle of Princeton. Understanding Mawhood's role is essential to understanding why the battle unfolded as it did: his aggressiveness led to the rout of Mercer's brigade, which in turn drew Washington personally into the fighting. The battle was not a straightforward American victory but a chaotic, near-run engagement in which both sides displayed courage and tactical skill.

- Birth/death dates: Exact dates uncertain; active service 1750s-1780s
- 1776-1777: Commanded British garrison at Princeton
- 1777: Led counterattack at Battle of Princeton on January 3
- 1777: Fought rearguard action and retreated toward Trenton after Washington's arrival

SOURCES
- Fischer, David Hackett. "Washington's Crossing." Oxford University Press, 2004.
- Stryker, William S. "The Battles of Trenton and Princeton." Houghton Mifflin, 1898.
- Smith, Samuel Stelle. "The Battle of Princeton." Philip Freneau Press, 1967.`,
    },
    create: {
      id: 'person-princeton-charles-mawhood',
      name: 'Lieutenant Colonel Charles Mawhood',
      roles: ['British Colonel', 'Military Commander'],
      bioShort: 'British Army lieutenant colonel who commanded the garrison at Princeton and led the aggressive counterattack at the Battle of Princeton on January 3, 1777, initially routing American forces before being driven from the field by Washington.',
      bioLong: `Charles Mawhood was a British Army officer who served as a lieutenant colonel in the 17th Regiment of Foot during the American Revolution. Born in England, Mawhood had a long career in the British military before being posted to North America. He commanded the British garrison left at Princeton in late December 1776 and early January 1777, when most of the British forces in New Jersey were concentrated at Trenton and New Brunswick under General Charles Cornwallis.

On the morning of January 3, 1777, Mawhood was marching a detachment of approximately 800 soldiers — drawn from the 17th, 40th, and 55th Regiments of Foot — from Princeton toward Trenton to reinforce Cornwallis. His column had crossed Stony Brook and was proceeding south on the Post Road when scouts spotted the American column moving toward Princeton across the fields to the southeast. Mawhood made the aggressive decision to turn his column around and attack the smaller American force he could see, which was General Hugh Mercer's advance brigade.

Mawhood's counterattack was executed with professional precision. His troops formed a line of battle, delivered devastating volleys, and charged with bayonets, routing Mercer's brigade and mortally wounding Mercer himself. For a brief period, the British appeared to be winning the engagement. However, Mawhood had not anticipated the arrival of Washington with the main American force. When Washington rallied the fleeing Americans and brought fresh troops into the fight, Mawhood found himself outnumbered and outflanked. He fought a skillful rearguard action and led the remnant of the 17th Regiment in a fighting retreat toward Trenton, breaking through the American lines.

Mawhood's conduct at Princeton earned him respect from both sides. He displayed tactical competence, personal bravery, and an ability to maintain unit cohesion under extreme pressure. He continued to serve in the British Army for the remainder of the war.

WHY HE MATTERS TO PRINCETON

Charles Mawhood is the British counterpart in the Princeton story — the professional soldier whose initial success nearly turned the battle into an American defeat. His decision to attack rather than continue his march toward Trenton created the engagement that became the Battle of Princeton. Understanding Mawhood's role is essential to understanding why the battle unfolded as it did: his aggressiveness led to the rout of Mercer's brigade, which in turn drew Washington personally into the fighting. The battle was not a straightforward American victory but a chaotic, near-run engagement in which both sides displayed courage and tactical skill.

- Birth/death dates: Exact dates uncertain; active service 1750s-1780s
- 1776-1777: Commanded British garrison at Princeton
- 1777: Led counterattack at Battle of Princeton on January 3
- 1777: Fought rearguard action and retreated toward Trenton after Washington's arrival

SOURCES
- Fischer, David Hackett. "Washington's Crossing." Oxford University Press, 2004.
- Stryker, William S. "The Battles of Trenton and Princeton." Houghton Mifflin, 1898.
- Smith, Samuel Stelle. "The Battle of Princeton." Philip Freneau Press, 1967.`,
      birthYear: null,
      deathYear: null,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-princeton-john-witherspoon' },
    update: {
      bioLong: `John Witherspoon was born on February 5, 1723, in Gifford, East Lothian, Scotland. He was educated at the University of Edinburgh, where he earned a Master of Arts degree and was licensed to preach in the Church of Scotland. He became a prominent Presbyterian minister and theological writer, gaining a reputation as a defender of evangelical orthodoxy within the Scottish Kirk. His writings, particularly "Ecclesiastical Characteristics" (1753), established him as a sharp-witted polemicist.

In 1768, Witherspoon accepted an invitation to become the sixth president of the College of New Jersey (later Princeton University). His arrival transformed the institution. He modernized the curriculum, introducing the study of philosophy, history, French, and the Scottish Common Sense school of thought. He expanded the library, recruited new faculty, and raised funds to improve the physical plant, including repairs to Nassau Hall. Under Witherspoon's leadership, the college became a training ground for the political leadership of the new nation.

Witherspoon's influence extended well beyond education. He was an early and vocal advocate of American independence. Elected to the Continental Congress in June 1776, he arrived in Philadelphia just in time to participate in the debates over the Declaration of Independence. When some delegates argued that the colonies were not yet ripe for independence, Witherspoon reportedly countered that they were not only ripe but in danger of rotting for want of it. He signed the Declaration on August 2, 1776, becoming the only active college president and the only clergyman to sign the document.

The war devastated Princeton and the college. British forces occupied Nassau Hall during their control of New Jersey in late 1776, using it as a barracks. Witherspoon's personal library and scientific instruments were destroyed. He spent the war years working to keep the college alive while also serving in Congress, where he sat on over 100 committees and contributed to debates on finance, foreign affairs, and the Articles of Confederation.

After the war, Witherspoon rebuilt the college and continued to shape American intellectual life until his death on November 15, 1794.

WHY HE MATTERS TO PRINCETON

John Witherspoon stands at the intersection of education, religion, and revolution in Princeton. As president of the College of New Jersey for twenty-six years, he trained an extraordinary generation of American leaders: his students included a future president (James Madison), a vice president (Aaron Burr), six members of the Continental Congress, twenty-one senators, twenty-nine representatives, twelve governors, and three Supreme Court justices. Witherspoon's Scottish Common Sense philosophy profoundly influenced the intellectual foundations of the American republic. His willingness to stake his career and institution on the cause of independence — when the British were literally occupying his campus — demonstrated a commitment that went beyond rhetoric.

- 1723: Born February 5 in Gifford, East Lothian, Scotland
- 1768: Became president of the College of New Jersey (Princeton)
- 1776: Signed the Declaration of Independence
- 1776-1782: Served in the Continental Congress
- 1794: Died November 15 at his farm near Princeton

SOURCES
- Morrison, Jeffry H. "John Witherspoon and the Founding of the American Republic." University of Notre Dame Press, 2005.
- Collins, Varnum Lansing. "President Witherspoon: A Biography." Princeton University Press, 1925.
- Ashbel Green. "The Life of the Revd. John Witherspoon." 1849. Princeton University Library Special Collections.`,
    },
    create: {
      id: 'person-princeton-john-witherspoon',
      name: 'John Witherspoon',
      roles: ['College President', 'Signer of Declaration', 'Clergyman'],
      bioShort: 'Scottish-born president of the College of New Jersey (1768-1794) and signer of the Declaration of Independence, whose leadership transformed the college into a training ground for the political leaders of the new American republic.',
      bioLong: `John Witherspoon was born on February 5, 1723, in Gifford, East Lothian, Scotland. He was educated at the University of Edinburgh, where he earned a Master of Arts degree and was licensed to preach in the Church of Scotland. He became a prominent Presbyterian minister and theological writer, gaining a reputation as a defender of evangelical orthodoxy within the Scottish Kirk. His writings, particularly "Ecclesiastical Characteristics" (1753), established him as a sharp-witted polemicist.

In 1768, Witherspoon accepted an invitation to become the sixth president of the College of New Jersey (later Princeton University). His arrival transformed the institution. He modernized the curriculum, introducing the study of philosophy, history, French, and the Scottish Common Sense school of thought. He expanded the library, recruited new faculty, and raised funds to improve the physical plant, including repairs to Nassau Hall. Under Witherspoon's leadership, the college became a training ground for the political leadership of the new nation.

Witherspoon's influence extended well beyond education. He was an early and vocal advocate of American independence. Elected to the Continental Congress in June 1776, he arrived in Philadelphia just in time to participate in the debates over the Declaration of Independence. When some delegates argued that the colonies were not yet ripe for independence, Witherspoon reportedly countered that they were not only ripe but in danger of rotting for want of it. He signed the Declaration on August 2, 1776, becoming the only active college president and the only clergyman to sign the document.

The war devastated Princeton and the college. British forces occupied Nassau Hall during their control of New Jersey in late 1776, using it as a barracks. Witherspoon's personal library and scientific instruments were destroyed. He spent the war years working to keep the college alive while also serving in Congress, where he sat on over 100 committees and contributed to debates on finance, foreign affairs, and the Articles of Confederation.

After the war, Witherspoon rebuilt the college and continued to shape American intellectual life until his death on November 15, 1794.

WHY HE MATTERS TO PRINCETON

John Witherspoon stands at the intersection of education, religion, and revolution in Princeton. As president of the College of New Jersey for twenty-six years, he trained an extraordinary generation of American leaders: his students included a future president (James Madison), a vice president (Aaron Burr), six members of the Continental Congress, twenty-one senators, twenty-nine representatives, twelve governors, and three Supreme Court justices. Witherspoon's Scottish Common Sense philosophy profoundly influenced the intellectual foundations of the American republic. His willingness to stake his career and institution on the cause of independence — when the British were literally occupying his campus — demonstrated a commitment that went beyond rhetoric.

- 1723: Born February 5 in Gifford, East Lothian, Scotland
- 1768: Became president of the College of New Jersey (Princeton)
- 1776: Signed the Declaration of Independence
- 1776-1782: Served in the Continental Congress
- 1794: Died November 15 at his farm near Princeton

SOURCES
- Morrison, Jeffry H. "John Witherspoon and the Founding of the American Republic." University of Notre Dame Press, 2005.
- Collins, Varnum Lansing. "President Witherspoon: A Biography." Princeton University Press, 1925.
- Ashbel Green. "The Life of the Revd. John Witherspoon." 1849. Princeton University Library Special Collections.`,
      birthYear: 1723,
      deathYear: 1794,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-princeton-richard-stockton' },
    update: {
      bioLong: `Richard Stockton was born on October 1, 1730, at Morven, the family estate in Princeton, New Jersey. He was a fifth-generation American, descended from one of the original English settlers of the region. Stockton graduated from the College of New Jersey (later Princeton University) in 1748 and studied law under David Ogden in Newark, gaining admission to the bar in 1754. He built a distinguished legal practice and was appointed to the Royal Council of New Jersey in 1768.

Stockton's transition from royal official to revolutionary was gradual. He traveled to England and Scotland in 1766-1767, during which he met with King George III and recruited John Witherspoon to lead the College of New Jersey. His initial position was moderate — he preferred reconciliation with Britain — but by 1776, the escalation of hostilities and the actions of the British military in New Jersey pushed him toward independence. He was elected to the Continental Congress in June 1776 and signed the Declaration of Independence on August 2, 1776.

Stockton's signing of the Declaration came at an extraordinary personal cost. In November 1776, as British and Hessian forces swept across New Jersey, Stockton fled Princeton with his family. He was betrayed by Loyalist informers and captured by the British near Monmouth Court House on November 30, 1776. He was taken to the notorious Provost Jail in New York City, where he was subjected to harsh treatment — confined in irons, exposed to cold, and given inadequate food. The Continental Congress formally protested his treatment, and Stockton was eventually released in early 1777 after signing an oath not to take up arms against the Crown.

The oath of allegiance was controversial. Some contemporaries viewed it as a reasonable act of self-preservation by a man who had been brutally treated; others saw it as a betrayal. Stockton returned to Princeton to find Morven ransacked by the British, his library and papers destroyed, and his estate in ruins. He never fully recovered his health or his fortune. He died of cancer on February 28, 1781, at the age of fifty.

WHY HE MATTERS TO PRINCETON

Richard Stockton's story illustrates the personal cost of revolution for Princeton's leading families. Morven, his estate on Stockton Street, was one of the grandest properties in central New Jersey, and its destruction by British forces was emblematic of the devastation the war brought to the town. Stockton is the only signer of the Declaration of Independence known to have recanted under duress, and his story raises difficult questions about the limits of courage, the nature of patriotism, and the price of principle. He is buried in the Princeton Cemetery on Witherspoon Street, and Morven now serves as a museum and the official residence of the Governor of New Jersey.

- 1730: Born October 1 at Morven, Princeton, New Jersey
- 1748: Graduated from the College of New Jersey
- 1766-1767: Traveled to Britain; recruited John Witherspoon
- 1776: Signed the Declaration of Independence; captured by the British in November
- 1777: Released after signing loyalty oath
- 1781: Died February 28 in Princeton

SOURCES
- Fischer, David Hackett. "Washington's Crossing." Oxford University Press, 2004.
- Bill, Alfred Hoyt. "New Jersey and the Revolutionary War." D. Van Nostrand, 1964.
- Stockton, Thomas Coates. "The Stockton Family of New Jersey." 1911. Princeton University Library Special Collections.`,
    },
    create: {
      id: 'person-princeton-richard-stockton',
      name: 'Richard Stockton',
      roles: ['Signer of Declaration', 'Lawyer', 'Landowner'],
      bioShort: 'Princeton lawyer and landowner (1730-1781) who signed the Declaration of Independence, was captured and imprisoned by the British, and saw his estate Morven destroyed during the war.',
      bioLong: `Richard Stockton was born on October 1, 1730, at Morven, the family estate in Princeton, New Jersey. He was a fifth-generation American, descended from one of the original English settlers of the region. Stockton graduated from the College of New Jersey (later Princeton University) in 1748 and studied law under David Ogden in Newark, gaining admission to the bar in 1754. He built a distinguished legal practice and was appointed to the Royal Council of New Jersey in 1768.

Stockton's transition from royal official to revolutionary was gradual. He traveled to England and Scotland in 1766-1767, during which he met with King George III and recruited John Witherspoon to lead the College of New Jersey. His initial position was moderate — he preferred reconciliation with Britain — but by 1776, the escalation of hostilities and the actions of the British military in New Jersey pushed him toward independence. He was elected to the Continental Congress in June 1776 and signed the Declaration of Independence on August 2, 1776.

Stockton's signing of the Declaration came at an extraordinary personal cost. In November 1776, as British and Hessian forces swept across New Jersey, Stockton fled Princeton with his family. He was betrayed by Loyalist informers and captured by the British near Monmouth Court House on November 30, 1776. He was taken to the notorious Provost Jail in New York City, where he was subjected to harsh treatment — confined in irons, exposed to cold, and given inadequate food. The Continental Congress formally protested his treatment, and Stockton was eventually released in early 1777 after signing an oath not to take up arms against the Crown.

The oath of allegiance was controversial. Some contemporaries viewed it as a reasonable act of self-preservation by a man who had been brutally treated; others saw it as a betrayal. Stockton returned to Princeton to find Morven ransacked by the British, his library and papers destroyed, and his estate in ruins. He never fully recovered his health or his fortune. He died of cancer on February 28, 1781, at the age of fifty.

WHY HE MATTERS TO PRINCETON

Richard Stockton's story illustrates the personal cost of revolution for Princeton's leading families. Morven, his estate on Stockton Street, was one of the grandest properties in central New Jersey, and its destruction by British forces was emblematic of the devastation the war brought to the town. Stockton is the only signer of the Declaration of Independence known to have recanted under duress, and his story raises difficult questions about the limits of courage, the nature of patriotism, and the price of principle. He is buried in the Princeton Cemetery on Witherspoon Street, and Morven now serves as a museum and the official residence of the Governor of New Jersey.

- 1730: Born October 1 at Morven, Princeton, New Jersey
- 1748: Graduated from the College of New Jersey
- 1766-1767: Traveled to Britain; recruited John Witherspoon
- 1776: Signed the Declaration of Independence; captured by the British in November
- 1777: Released after signing loyalty oath
- 1781: Died February 28 in Princeton

SOURCES
- Fischer, David Hackett. "Washington's Crossing." Oxford University Press, 2004.
- Bill, Alfred Hoyt. "New Jersey and the Revolutionary War." D. Van Nostrand, 1964.
- Stockton, Thomas Coates. "The Stockton Family of New Jersey." 1911. Princeton University Library Special Collections.`,
      birthYear: 1730,
      deathYear: 1781,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-princeton-benjamin-rush' },
    update: {
      bioLong: `Benjamin Rush was born on January 4, 1746, in Byberry Township, near Philadelphia, Pennsylvania. He studied at the College of New Jersey (later Princeton University), graduating in 1760 at the age of fourteen under the presidency of Samuel Davies. He then apprenticed under Dr. John Redman in Philadelphia before traveling to the University of Edinburgh, where he earned his medical degree in 1768. Rush returned to Philadelphia to establish a medical practice and was appointed professor of chemistry at the College of Philadelphia, becoming the first professor of chemistry in North America.

Rush's political radicalism developed alongside his medical career. He became an early advocate of independence and encouraged Thomas Paine to write "Common Sense," suggesting the title and helping to arrange its publication in January 1776. Rush was elected to the Continental Congress in 1776 and signed the Declaration of Independence. He served as Surgeon General of the Middle Department of the Continental Army in 1777, an experience that exposed him to the catastrophic medical conditions of the army and led him into a bitter dispute with Dr. William Shippen Jr. over the management of military hospitals.

Rush's connection to Princeton was both personal and intellectual. His education at the College of New Jersey shaped his thinking, and he maintained close ties with the institution throughout his life. He attended the Battle of Princeton in his capacity as a military physician and treated wounded soldiers from both sides after the engagement on January 3, 1777. His letters describe the carnage of the battlefield and the medical challenges of treating bayonet and musket wounds in freezing conditions.

After the war, Rush became a leading figure in Philadelphia medicine, education, and social reform. He advocated for the abolition of slavery, the reform of criminal punishment, improvements in education for women, and humane treatment of the mentally ill. He published "Medical Inquiries and Observations upon the Diseases of the Mind" in 1812, the first American textbook on psychiatry. Rush died on April 19, 1813.

WHY HE MATTERS TO PRINCETON

Benjamin Rush's connection to Princeton operated on multiple levels. As an alumnus of the College of New Jersey, he represented the institution's role in producing leaders who shaped the new nation. As a physician present at the Battle of Princeton, he witnessed the human cost of the engagement firsthand. His later career as a medical reformer, abolitionist, and public intellectual demonstrated the breadth of talent that the college fostered. Rush's advocacy for Paine's "Common Sense" alone would secure his place in revolutionary history, but his contributions to medicine, education, and social justice extended his influence well beyond the war years.

- 1746: Born January 4 in Byberry Township, Pennsylvania
- 1760: Graduated from the College of New Jersey at age 14
- 1768: Earned medical degree from the University of Edinburgh
- 1776: Signed the Declaration of Independence
- 1777: Present at the Battle of Princeton as military physician
- 1813: Died April 19 in Philadelphia

SOURCES
- Brodsky, Alyn. "Benjamin Rush: Patriot and Physician." Truman Talley Books, 2004.
- Goodman, Nathan G. "Benjamin Rush: Physician and Citizen." University of Pennsylvania Press, 1934.
- D'Elia, Donald J. "Benjamin Rush: Philosopher of the American Revolution." American Philosophical Society, 1974.`,
    },
    create: {
      id: 'person-princeton-benjamin-rush',
      name: 'Benjamin Rush',
      roles: ['Physician', 'Patriot', 'Signer of Declaration'],
      bioShort: 'Physician, Princeton alumnus (1746-1813), and signer of the Declaration of Independence who encouraged Thomas Paine to write "Common Sense" and served as a military physician at the Battle of Princeton.',
      bioLong: `Benjamin Rush was born on January 4, 1746, in Byberry Township, near Philadelphia, Pennsylvania. He studied at the College of New Jersey (later Princeton University), graduating in 1760 at the age of fourteen under the presidency of Samuel Davies. He then apprenticed under Dr. John Redman in Philadelphia before traveling to the University of Edinburgh, where he earned his medical degree in 1768. Rush returned to Philadelphia to establish a medical practice and was appointed professor of chemistry at the College of Philadelphia, becoming the first professor of chemistry in North America.

Rush's political radicalism developed alongside his medical career. He became an early advocate of independence and encouraged Thomas Paine to write "Common Sense," suggesting the title and helping to arrange its publication in January 1776. Rush was elected to the Continental Congress in 1776 and signed the Declaration of Independence. He served as Surgeon General of the Middle Department of the Continental Army in 1777, an experience that exposed him to the catastrophic medical conditions of the army and led him into a bitter dispute with Dr. William Shippen Jr. over the management of military hospitals.

Rush's connection to Princeton was both personal and intellectual. His education at the College of New Jersey shaped his thinking, and he maintained close ties with the institution throughout his life. He attended the Battle of Princeton in his capacity as a military physician and treated wounded soldiers from both sides after the engagement on January 3, 1777. His letters describe the carnage of the battlefield and the medical challenges of treating bayonet and musket wounds in freezing conditions.

After the war, Rush became a leading figure in Philadelphia medicine, education, and social reform. He advocated for the abolition of slavery, the reform of criminal punishment, improvements in education for women, and humane treatment of the mentally ill. He published "Medical Inquiries and Observations upon the Diseases of the Mind" in 1812, the first American textbook on psychiatry. Rush died on April 19, 1813.

WHY HE MATTERS TO PRINCETON

Benjamin Rush's connection to Princeton operated on multiple levels. As an alumnus of the College of New Jersey, he represented the institution's role in producing leaders who shaped the new nation. As a physician present at the Battle of Princeton, he witnessed the human cost of the engagement firsthand. His later career as a medical reformer, abolitionist, and public intellectual demonstrated the breadth of talent that the college fostered. Rush's advocacy for Paine's "Common Sense" alone would secure his place in revolutionary history, but his contributions to medicine, education, and social justice extended his influence well beyond the war years.

- 1746: Born January 4 in Byberry Township, Pennsylvania
- 1760: Graduated from the College of New Jersey at age 14
- 1768: Earned medical degree from the University of Edinburgh
- 1776: Signed the Declaration of Independence
- 1777: Present at the Battle of Princeton as military physician
- 1813: Died April 19 in Philadelphia

SOURCES
- Brodsky, Alyn. "Benjamin Rush: Patriot and Physician." Truman Talley Books, 2004.
- Goodman, Nathan G. "Benjamin Rush: Physician and Citizen." University of Pennsylvania Press, 1934.
- D'Elia, Donald J. "Benjamin Rush: Philosopher of the American Revolution." American Philosophical Society, 1974.`,
      birthYear: 1746,
      deathYear: 1813,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-princeton-james-madison' },
    update: {
      bioLong: `James Madison was born on March 16, 1751, in Port Conway, Virginia, the eldest of twelve children of a prominent planter family. After early education by private tutors and at a school run by Donald Robertson, Madison traveled north to attend the College of New Jersey at Princeton, arriving in 1769. He completed the standard three-year curriculum in two years, graduating in September 1771, then remained at Princeton for an additional six months of study in Hebrew and political philosophy under President John Witherspoon.

Witherspoon's influence on Madison was profound. The Scottish Common Sense philosophy that Witherspoon taught — emphasizing reason, moral sense, and the practical application of philosophical principles to governance — shaped Madison's thinking for the rest of his life. At Princeton, Madison also encountered students from across the colonies, an experience that broadened his perspective beyond Virginia and helped him develop the continental outlook that would characterize his later political career. Among his classmates was Aaron Burr, who would become vice president.

Madison's years at Princeton also exposed him to the growing political tensions between the colonies and Britain. The college was a hotbed of patriot sentiment, and the students organized protests and debates about colonial rights. Madison participated in the American Whig Society, a debating club that honed his skills in argumentation and rhetoric. His health was delicate throughout his college years, and the intense pace of study took a physical toll from which he was slow to recover.

After leaving Princeton, Madison returned to Virginia, where he began his political career. He served in the Virginia Constitutional Convention of 1776, the Continental Congress, and the Virginia legislature. Drawing on the education he had received at Princeton, he became the principal architect of the United States Constitution at the Philadelphia Convention of 1787. He co-authored the Federalist Papers with Alexander Hamilton and John Jay, served as Secretary of State under Thomas Jefferson, and was elected the fourth President of the United States in 1808.

WHY HE MATTERS TO PRINCETON

James Madison is Princeton's contribution to the presidency and to the constitutional foundation of the American republic. The education he received under Witherspoon — in philosophy, political theory, and the art of governance — is directly traceable in the structure and logic of the Constitution. Madison credited Witherspoon with giving him the intellectual framework that made the Constitution possible. Princeton thus serves as the educational bridge between Scottish Enlightenment thought and the American system of government. Madison returned to Princeton on multiple occasions and maintained connections with the college throughout his life.

- 1751: Born March 16 in Port Conway, Virginia
- 1769-1772: Studied at the College of New Jersey under John Witherspoon
- 1776: Served in the Virginia Constitutional Convention
- 1787: Principal architect of the United States Constitution
- 1808-1817: Served as fourth President of the United States
- 1836: Died June 28 at Montpelier, Virginia

SOURCES
- Ketcham, Ralph. "James Madison: A Biography." University Press of Virginia, 1990.
- Rakove, Jack N. "James Madison and the Creation of the American Republic." Longman, 2002.
- Brant, Irving. "James Madison." 6 vols. Bobbs-Merrill, 1941-1961.`,
    },
    create: {
      id: 'person-princeton-james-madison',
      name: 'James Madison',
      roles: ['Future President', 'Constitutional Framer', 'Princeton Alumnus'],
      bioShort: 'Fourth President of the United States (1751-1836) and principal architect of the Constitution, who studied at the College of New Jersey in Princeton under John Witherspoon, an education that shaped his political philosophy.',
      bioLong: `James Madison was born on March 16, 1751, in Port Conway, Virginia, the eldest of twelve children of a prominent planter family. After early education by private tutors and at a school run by Donald Robertson, Madison traveled north to attend the College of New Jersey at Princeton, arriving in 1769. He completed the standard three-year curriculum in two years, graduating in September 1771, then remained at Princeton for an additional six months of study in Hebrew and political philosophy under President John Witherspoon.

Witherspoon's influence on Madison was profound. The Scottish Common Sense philosophy that Witherspoon taught — emphasizing reason, moral sense, and the practical application of philosophical principles to governance — shaped Madison's thinking for the rest of his life. At Princeton, Madison also encountered students from across the colonies, an experience that broadened his perspective beyond Virginia and helped him develop the continental outlook that would characterize his later political career. Among his classmates was Aaron Burr, who would become vice president.

Madison's years at Princeton also exposed him to the growing political tensions between the colonies and Britain. The college was a hotbed of patriot sentiment, and the students organized protests and debates about colonial rights. Madison participated in the American Whig Society, a debating club that honed his skills in argumentation and rhetoric. His health was delicate throughout his college years, and the intense pace of study took a physical toll from which he was slow to recover.

After leaving Princeton, Madison returned to Virginia, where he began his political career. He served in the Virginia Constitutional Convention of 1776, the Continental Congress, and the Virginia legislature. Drawing on the education he had received at Princeton, he became the principal architect of the United States Constitution at the Philadelphia Convention of 1787. He co-authored the Federalist Papers with Alexander Hamilton and John Jay, served as Secretary of State under Thomas Jefferson, and was elected the fourth President of the United States in 1808.

WHY HE MATTERS TO PRINCETON

James Madison is Princeton's contribution to the presidency and to the constitutional foundation of the American republic. The education he received under Witherspoon — in philosophy, political theory, and the art of governance — is directly traceable in the structure and logic of the Constitution. Madison credited Witherspoon with giving him the intellectual framework that made the Constitution possible. Princeton thus serves as the educational bridge between Scottish Enlightenment thought and the American system of government. Madison returned to Princeton on multiple occasions and maintained connections with the college throughout his life.

- 1751: Born March 16 in Port Conway, Virginia
- 1769-1772: Studied at the College of New Jersey under John Witherspoon
- 1776: Served in the Virginia Constitutional Convention
- 1787: Principal architect of the United States Constitution
- 1808-1817: Served as fourth President of the United States
- 1836: Died June 28 at Montpelier, Virginia

SOURCES
- Ketcham, Ralph. "James Madison: A Biography." University Press of Virginia, 1990.
- Rakove, Jack N. "James Madison and the Creation of the American Republic." Longman, 2002.
- Brant, Irving. "James Madison." 6 vols. Bobbs-Merrill, 1941-1961.`,
      birthYear: 1751,
      deathYear: 1836,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-princeton-thomas-olden' },
    update: {
      bioLong: `Thomas Olden was a farmer who lived on a property along the Stony Brook near Princeton, New Jersey, during the American Revolution. The Olden family had been established in the Princeton area for several generations, and Thomas Olden's farm occupied land along the route that Washington's army would use during its approach to Princeton on January 2-3, 1777. The Olden farmhouse, which still stands today as one of the oldest houses in Princeton, served as a landmark during the battle.

During the night march from Trenton to Princeton on January 2-3, 1777, Washington's army passed through the area near the Olden farm. The march was conducted in extreme secrecy and cold — temperatures were well below freezing, and the soldiers wrapped their feet in rags to muffle their footsteps and protect against frostbite. The Quaker Road, which the army used to bypass British positions along the Post Road, ran near Olden's property. Local residents like Olden, who knew the back roads and paths of the area, were valuable sources of information for the Continental Army as it navigated the dark countryside.

Olden's experience was typical of the Princeton-area farmers who found themselves caught between two armies during the New Jersey campaign. Whether they supported independence or remained neutral, these families had little choice but to endure the passage of troops through their lands, the requisitioning of food and livestock, and the destruction that accompanied military operations. The Olden farmhouse survived the battle and the war, a testament to both luck and the relatively brief nature of the Princeton engagement.

WHY HE MATTERS TO PRINCETON

Thomas Olden represents the ordinary residents of Princeton who lived through the Revolution without holding rank, signing declarations, or commanding troops. His farmhouse, now known as Drumthwacket (though the current mansion was built later by the Olden family), connects the agricultural landscape of colonial Princeton to the military events of January 1777. The Olden family's long presence in the area illustrates the deep roots of the community that existed before, during, and after the war. Their story reminds us that revolutions are fought not only by soldiers and statesmen but by the farming families whose land becomes the battlefield.

- Birth/death dates: Exact dates uncertain; active in Princeton area during the Revolution
- 1777: Farm was along the route of Washington's night march to Princeton
- Olden family presence in Princeton area spanned multiple generations

SOURCES
- Hageman, John F. "History of Princeton and Its Institutions." J.B. Lippincott, 1879.
- Fischer, David Hackett. "Washington's Crossing." Oxford University Press, 2004.
- Princeton Battlefield Society. "The Battle of Princeton: A Guide." 2017.`,
    },
    create: {
      id: 'person-princeton-thomas-olden',
      name: 'Thomas Olden',
      roles: ['Local Farmer', 'Civilian'],
      bioShort: 'Princeton-area farmer whose property lay along the route of Washington\'s night march from Trenton to Princeton in January 1777, representing the ordinary civilians whose land became a battlefield.',
      bioLong: `Thomas Olden was a farmer who lived on a property along the Stony Brook near Princeton, New Jersey, during the American Revolution. The Olden family had been established in the Princeton area for several generations, and Thomas Olden's farm occupied land along the route that Washington's army would use during its approach to Princeton on January 2-3, 1777. The Olden farmhouse, which still stands today as one of the oldest houses in Princeton, served as a landmark during the battle.

During the night march from Trenton to Princeton on January 2-3, 1777, Washington's army passed through the area near the Olden farm. The march was conducted in extreme secrecy and cold — temperatures were well below freezing, and the soldiers wrapped their feet in rags to muffle their footsteps and protect against frostbite. The Quaker Road, which the army used to bypass British positions along the Post Road, ran near Olden's property. Local residents like Olden, who knew the back roads and paths of the area, were valuable sources of information for the Continental Army as it navigated the dark countryside.

Olden's experience was typical of the Princeton-area farmers who found themselves caught between two armies during the New Jersey campaign. Whether they supported independence or remained neutral, these families had little choice but to endure the passage of troops through their lands, the requisitioning of food and livestock, and the destruction that accompanied military operations. The Olden farmhouse survived the battle and the war, a testament to both luck and the relatively brief nature of the Princeton engagement.

WHY HE MATTERS TO PRINCETON

Thomas Olden represents the ordinary residents of Princeton who lived through the Revolution without holding rank, signing declarations, or commanding troops. His farmhouse, now known as Drumthwacket (though the current mansion was built later by the Olden family), connects the agricultural landscape of colonial Princeton to the military events of January 1777. The Olden family's long presence in the area illustrates the deep roots of the community that existed before, during, and after the war. Their story reminds us that revolutions are fought not only by soldiers and statesmen but by the farming families whose land becomes the battlefield.

- Birth/death dates: Exact dates uncertain; active in Princeton area during the Revolution
- 1777: Farm was along the route of Washington's night march to Princeton
- Olden family presence in Princeton area spanned multiple generations

SOURCES
- Hageman, John F. "History of Princeton and Its Institutions." J.B. Lippincott, 1879.
- Fischer, David Hackett. "Washington's Crossing." Oxford University Press, 2004.
- Princeton Battlefield Society. "The Battle of Princeton: A Guide." 2017.`,
      birthYear: null,
      deathYear: null,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-princeton-annis-boudinot-stockton' },
    update: {
      bioLong: `Annis Boudinot Stockton was born on July 1, 1736, in Darby, Pennsylvania, to Elias Boudinot and Catherine Williams. She was the sister of Elias Boudinot IV, who would later serve as President of the Continental Congress. In 1757, she married Richard Stockton, a Princeton lawyer who would become a signer of the Declaration of Independence. The couple settled at Morven, the Stockton family estate on what is now Stockton Street in Princeton, where Annis transformed the grounds into elaborate formal gardens.

Stockton was an accomplished poet whose work circulated widely in colonial literary circles. She published under the pen name "Emelia" and later "Amelia," contributing verses to newspapers, magazines, and private manuscript collections. Her poetry addressed themes of patriotism, friendship, nature, and loss. She was one of the few women of her era whose literary work received public recognition, and she corresponded with other writers and political figures, including George Washington, who received and responded to her poetry on multiple occasions.

The Revolution struck the Stockton family with devastating force. When British troops advanced on Princeton in late November 1776, Annis buried the family's valuables and important papers in the garden at Morven before fleeing with her children. Her husband Richard was captured shortly afterward and imprisoned in New York. When the British occupied Princeton, they used Morven as a headquarters, destroying much of its contents, burning furniture for fuel, and slaughtering livestock. Annis's efforts to hide the family papers saved some irreplaceable documents, but the destruction of the house and grounds was extensive.

After Richard Stockton's release and subsequent decline in health, Annis managed the family's affairs largely on her own. Richard died in 1781, leaving Annis to rebuild the estate and raise their children. She continued to write poetry and maintained her literary correspondence for the rest of her life. She died on February 6, 1801.

WHY SHE MATTERS TO PRINCETON

Annis Boudinot Stockton provides a window into the experience of elite women during the Revolution — women who did not fight on battlefields but who bore the consequences of war in their homes, their families, and their daily lives. Her efforts to save the family papers before fleeing Morven demonstrated practical courage, while her poetry gave voice to patriotic sentiment and personal grief. As the mistress of Morven, she shaped one of Princeton's defining properties, and her literary legacy makes her one of the few colonial women whose own words survive in significant quantity. Her story complicates the common assumption that the Revolution was exclusively a men's affair.

- 1736: Born July 1 in Darby, Pennsylvania
- 1757: Married Richard Stockton; settled at Morven in Princeton
- 1776: Buried family papers at Morven before fleeing British advance
- 1781: Managed family affairs after Richard Stockton's death
- 1801: Died February 6 in Princeton

SOURCES
- Mulford, Carla. "Only for the Eye of a Friend: The Poems of Annis Boudinot Stockton." University Press of Virginia, 1995.
- Stockton, Thomas Coates. "The Stockton Family of New Jersey." 1911. Princeton University Library Special Collections.
- Wulf, Karin. "Not All Wives: Women of Colonial Philadelphia." Cornell University Press, 2000.`,
    },
    create: {
      id: 'person-princeton-annis-boudinot-stockton',
      name: 'Annis Boudinot Stockton',
      roles: ['Poet', 'Patriot', 'Estate Manager'],
      bioShort: 'Princeton poet and patriot (1736-1801) who buried the family papers at Morven before fleeing the British advance, managed the estate after her husband Richard Stockton\'s death, and published widely read patriotic verse.',
      bioLong: `Annis Boudinot Stockton was born on July 1, 1736, in Darby, Pennsylvania, to Elias Boudinot and Catherine Williams. She was the sister of Elias Boudinot IV, who would later serve as President of the Continental Congress. In 1757, she married Richard Stockton, a Princeton lawyer who would become a signer of the Declaration of Independence. The couple settled at Morven, the Stockton family estate on what is now Stockton Street in Princeton, where Annis transformed the grounds into elaborate formal gardens.

Stockton was an accomplished poet whose work circulated widely in colonial literary circles. She published under the pen name "Emelia" and later "Amelia," contributing verses to newspapers, magazines, and private manuscript collections. Her poetry addressed themes of patriotism, friendship, nature, and loss. She was one of the few women of her era whose literary work received public recognition, and she corresponded with other writers and political figures, including George Washington, who received and responded to her poetry on multiple occasions.

The Revolution struck the Stockton family with devastating force. When British troops advanced on Princeton in late November 1776, Annis buried the family's valuables and important papers in the garden at Morven before fleeing with her children. Her husband Richard was captured shortly afterward and imprisoned in New York. When the British occupied Princeton, they used Morven as a headquarters, destroying much of its contents, burning furniture for fuel, and slaughtering livestock. Annis's efforts to hide the family papers saved some irreplaceable documents, but the destruction of the house and grounds was extensive.

After Richard Stockton's release and subsequent decline in health, Annis managed the family's affairs largely on her own. Richard died in 1781, leaving Annis to rebuild the estate and raise their children. She continued to write poetry and maintained her literary correspondence for the rest of her life. She died on February 6, 1801.

WHY SHE MATTERS TO PRINCETON

Annis Boudinot Stockton provides a window into the experience of elite women during the Revolution — women who did not fight on battlefields but who bore the consequences of war in their homes, their families, and their daily lives. Her efforts to save the family papers before fleeing Morven demonstrated practical courage, while her poetry gave voice to patriotic sentiment and personal grief. As the mistress of Morven, she shaped one of Princeton's defining properties, and her literary legacy makes her one of the few colonial women whose own words survive in significant quantity. Her story complicates the common assumption that the Revolution was exclusively a men's affair.

- 1736: Born July 1 in Darby, Pennsylvania
- 1757: Married Richard Stockton; settled at Morven in Princeton
- 1776: Buried family papers at Morven before fleeing British advance
- 1781: Managed family affairs after Richard Stockton's death
- 1801: Died February 6 in Princeton

SOURCES
- Mulford, Carla. "Only for the Eye of a Friend: The Poems of Annis Boudinot Stockton." University Press of Virginia, 1995.
- Stockton, Thomas Coates. "The Stockton Family of New Jersey." 1911. Princeton University Library Special Collections.
- Wulf, Karin. "Not All Wives: Women of Colonial Philadelphia." Cornell University Press, 2000.`,
      birthYear: 1736,
      deathYear: 1801,
      verificationStatus: 'VERIFIED',
    },
  });

  // --- 2 NEW People ---

  await prisma.person.upsert({
    where: { id: 'person-princeton-george-washington' },
    update: {},
    create: {
      id: 'person-princeton-george-washington',
      name: 'George Washington',
      roles: ['Commander-in-Chief', 'Continental General'],
      bioShort: 'Commander-in-Chief of the Continental Army (1732-1799) who personally led the attack at the Battle of Princeton on January 3, 1777, rallying his troops at a critical moment to turn the tide of the engagement.',
      bioLong: `George Washington was born on February 22, 1732, in Westmoreland County, Virginia, into a prosperous planter family. His military career began during the French and Indian War, where he served as a lieutenant colonel in the Virginia militia and gained experience in frontier warfare. After the war, he managed his plantation at Mount Vernon and served in the Virginia House of Burgesses. In June 1775, the Continental Congress appointed him Commander-in-Chief of the Continental Army, a position he held for the duration of the war.

By late December 1776, Washington's army was in desperate condition. A string of defeats in New York and New Jersey had reduced his force through casualties, desertions, and expiring enlistments. The army had retreated across New Jersey and into Pennsylvania, and many observers believed the Revolution was on the verge of collapse. Washington's crossing of the Delaware River on December 25-26, 1776, and the subsequent victory at Trenton on December 26 began to reverse the tide, but the campaign was far from over.

On January 2, 1777, Washington slipped away from a confrontation with Cornwallis at Trenton, leaving campfires burning to deceive the British, and marched his army north through the night toward Princeton. The march was grueling — temperatures were below freezing, roads were icy, and many soldiers lacked adequate shoes and clothing. Washington's plan was audacious: to attack the British garrison at Princeton and then move on to the supply depot at New Brunswick.

At Princeton on the morning of January 3, when Mercer's brigade was routed by Mawhood's counterattack and the American line began to collapse, Washington rode to the front on his white horse and personally rallied the fleeing soldiers. Multiple accounts describe him riding between the two lines as musket fire erupted, an exposed and conspicuous figure urging his men forward. His aide, Colonel John Fitzgerald, reportedly covered his eyes, expecting to see Washington fall. When the smoke cleared, Washington was unharmed and the Americans were charging. His personal leadership at that moment turned a potential defeat into a decisive victory.

WHY HE MATTERS TO PRINCETON

Princeton was the engagement where Washington's personal bravery was tested and proved in the most direct way. At Lexington, Bunker Hill, and Long Island, other officers commanded on the field. At Princeton, Washington himself rode into the musket fire and changed the outcome by his physical presence. The battle cemented his reputation as a leader who would share the dangers of his troops, and it completed the "Ten Crucial Days" that saved the Revolution from collapse. Washington's later return to Princeton during the Continental Congress of 1783 reinforced the town's association with his leadership.

- 1732: Born February 22 in Westmoreland County, Virginia
- 1775: Appointed Commander-in-Chief of the Continental Army
- 1776: Crossed the Delaware and won at Trenton on December 26
- 1777: Led the attack at the Battle of Princeton on January 3
- 1783: Received news of peace treaty while Congress met in Nassau Hall
- 1799: Died December 14 at Mount Vernon, Virginia

SOURCES
- Fischer, David Hackett. "Washington's Crossing." Oxford University Press, 2004.
- Chernow, Ron. "Washington: A Life." Penguin Press, 2010.
- Flexner, James Thomas. "Washington: The Indispensable Man." Little, Brown, 1974.`,
      birthYear: 1732,
      deathYear: 1799,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-princeton-elias-boudinot' },
    update: {},
    create: {
      id: 'person-princeton-elias-boudinot',
      name: 'Elias Boudinot',
      roles: ['President of Congress', 'Lawyer', 'Philanthropist'],
      bioShort: 'Princeton-area lawyer and statesman (1740-1821) who served as President of the Continental Congress in 1782-1783, presiding over the peace treaty with Britain while Congress met at Nassau Hall in Princeton.',
      bioLong: `Elias Boudinot IV was born on May 2, 1740, in Philadelphia, Pennsylvania. He was the brother of Annis Boudinot Stockton and brother-in-law of Richard Stockton. Boudinot studied law under Richard Stockton and established a successful legal practice in Elizabethtown (present-day Elizabeth), New Jersey. He was deeply involved in patriot politics from an early stage, serving on the New Jersey Committee of Correspondence and supporting the cause of independence through both political action and financial contributions.

During the Revolution, Boudinot served as Commissary General of Prisoners from 1777 to 1778, a position that gave him direct responsibility for the welfare of American prisoners of war and for negotiating prisoner exchanges with the British. His reports on the treatment of American prisoners in British custody — documenting starvation, disease, and neglect — became important documents of the war. He later served in the Continental Congress from 1778 to 1779 and again from 1781 to 1783.

In November 1782, Boudinot was elected President of the Continental Congress, the presiding officer of the national government under the Articles of Confederation. When Congress fled Philadelphia in June 1783 due to a mutiny of unpaid soldiers, it reconvened at Nassau Hall in Princeton. Boudinot presided over Congress in Princeton from June to November 1783, a period during which he received official word of the Treaty of Paris ending the Revolutionary War. He signed the proclamation announcing the treaty and oversaw the formal reception of the Dutch minister to the United States, one of the new nation's first diplomatic ceremonies.

After the war, Boudinot served three terms in the United States House of Representatives and was appointed the first Director of the United States Mint by George Washington in 1795. He was also a devoted philanthropist, supporting education and religious institutions. He died on October 24, 1821.

WHY HE MATTERS TO PRINCETON

Elias Boudinot connects Princeton to the conclusion of the Revolutionary War. As President of Congress when the peace treaty was announced, and as the presiding officer during Congress's residence at Nassau Hall, Boudinot made Princeton — however briefly — the capital of the United States. His family connections to the Stocktons and to the College of New Jersey wove him into Princeton's social and political fabric. His earlier work as Commissary General of Prisoners adds a dimension of wartime administration that is often overlooked in popular accounts of the Revolution.

- 1740: Born May 2 in Philadelphia, Pennsylvania
- 1777-1778: Served as Commissary General of Prisoners
- 1782-1783: Elected President of the Continental Congress
- 1783: Presided over Congress at Nassau Hall in Princeton; announced Treaty of Paris
- 1795-1805: Served as first Director of the United States Mint
- 1821: Died October 24 in Burlington, New Jersey

SOURCES
- Boyd, George Adams. "Elias Boudinot: Patriot and Statesman." Princeton University Press, 1952.
- Clark, Barbara Niss. "Elias Boudinot and His Family." New Jersey Historical Society, 1977.
- Boudinot, J.J., ed. "The Life, Public Services, Addresses, and Letters of Elias Boudinot." Houghton Mifflin, 1896.`,
      birthYear: 1740,
      deathYear: 1821,
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
    where: { id: 'nassau-hall-princeton' },
    update: {},
    create: {
      id: 'nassau-hall-princeton',
      name: 'Nassau Hall',
      slug: 'nassau-hall',
      placeType: 'LANDMARK',
      description: 'Nassau Hall, completed in 1756, was the sole building of the College of New Jersey (later Princeton University) for nearly half a century and the largest stone building in colonial New Jersey. It served as a dormitory, classroom, chapel, and library, housing the entire college within its walls. During the Revolution, it was occupied by both British and American forces and sustained damage during the Battle of Princeton on January 3, 1777.\n\nIn 1783, Nassau Hall served as the meeting place of the Continental Congress, making Princeton briefly the capital of the United States. The Congress received the news of the Treaty of Paris within its walls.',
      historicalNote: 'Nassau Hall was designed by Robert Smith and named after King William III of the House of Orange-Nassau. During the British occupation of Princeton in late 1776, the building was used as a barracks and stable, and much of its interior — including Witherspoon\'s library and the college\'s scientific instruments — was destroyed. During the Battle of Princeton on January 3, 1777, approximately 194 British soldiers of the 40th Regiment of Foot barricaded themselves inside Nassau Hall. American Captain Alexander Hamilton directed cannon fire at the building, and according to tradition, one shot entered through a window and destroyed a portrait of King George II. The British garrison surrendered shortly afterward.\n\nIn June 1783, the Continental Congress fled Philadelphia after a mutiny of unpaid soldiers and reconvened at Nassau Hall, where it met until November. During this period, George Washington was officially thanked by Congress for his service, and the announcement of the Treaty of Paris was received. Charles Willson Peale was commissioned to paint Washington\'s portrait, which now hangs in the Faculty Room.\n\nNassau Hall has been rebuilt and renovated multiple times following fires in 1802 and 1855, but its sandstone walls and essential form survive from the colonial era. It remains the administrative center of Princeton University.',
      lat: 40.3487,
      lng: -74.6593,
      address: 'Nassau Street, Princeton, NJ 08544',
      hours: 'Exterior always accessible; interior by university tour',
      admission: 'Free',
      website: 'https://www.princeton.edu',
      displayOrder: 1,
      featured: true,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'princeton-battlefield-state-park' },
    update: {},
    create: {
      id: 'princeton-battlefield-state-park',
      name: 'Princeton Battlefield State Park',
      slug: 'princeton-battlefield',
      placeType: 'BATTLEFIELD',
      description: 'Princeton Battlefield State Park preserves the site of the Battle of Princeton, fought on January 3, 1777. The park encompasses approximately 85 acres of open fields and wooded areas where American and British forces clashed in the engagement that concluded the Ten Crucial Days campaign. The landscape retains much of its eighteenth-century character, with rolling fields, tree lines, and the Stony Brook providing a sense of the terrain over which the battle was fought.\n\nThe park includes the Thomas Clarke House, which served as a field hospital during and after the battle, and the Mercer Oak, which marks the approximate location where General Hugh Mercer was mortally wounded.',
      historicalNote: 'The battlefield was the site of the engagement on the morning of January 3, 1777, when Washington\'s army, having marched through the night from Trenton, encountered Lieutenant Colonel Charles Mawhood\'s British force. The battle began near the Thomas Clarke farmhouse when Mercer\'s advance brigade collided with Mawhood\'s column. The initial British counterattack routed the Americans, but Washington\'s personal arrival with reinforcements turned the engagement into an American victory.\n\nThe open fields visible today are essentially the same terrain over which the armies fought. The slight ridge where Mawhood formed his line, the orchard area where Mercer fell, and the fields across which Washington led his charge are all identifiable within the park. The New Jersey Division of Parks and Forestry manages the site, and interpretive markers guide visitors through the sequence of the battle.\n\nThe park was listed on the National Register of Historic Places in 1975 and designated a National Historic Landmark in 1961.',
      lat: 40.3335,
      lng: -74.6684,
      address: '500 Mercer Rd, Princeton, NJ 08540',
      hours: 'Dawn to dusk, daily',
      admission: 'Free',
      website: 'https://www.state.nj.us/dep/parksandforests/parks/princebat.html',
      displayOrder: 2,
      featured: true,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'morven-museum-princeton' },
    update: {},
    create: {
      id: 'morven-museum-princeton',
      name: 'Morven Museum & Garden',
      slug: 'morven-museum',
      placeType: 'HISTORIC_HOUSE',
      description: 'Morven is the historic Stockton family estate on Stockton Street in Princeton. Built in the 1750s by Richard Stockton Sr. and expanded by his son Richard Stockton, a signer of the Declaration of Independence, the property served as the family home until it was donated to the State of New Jersey in 1954. It served as the official governor\'s residence until 1981 and was opened as a museum in 2004.\n\nThe grounds include formal gardens that trace their origins to the designs of Annis Boudinot Stockton, who cultivated the estate\'s landscape in the colonial period.',
      historicalNote: 'Morven was occupied and damaged by British forces during the occupation of Princeton in late 1776. The troops used it as a headquarters, destroyed furnishings and books, and slaughtered livestock. Annis Boudinot Stockton buried the family\'s important papers in the garden before fleeing, saving documents that would otherwise have been lost. The house was gradually restored after the war and served the Stockton family for several more generations.\n\nThe name "Morven" comes from the realm of Fingal in the Ossian poems by James Macpherson, reflecting the literary sensibility of Annis Boudinot Stockton. The property\'s evolution from colonial estate to governor\'s residence to museum mirrors the broader transformation of Princeton from a colonial village to a center of education and governance.',
      lat: 40.3498,
      lng: -74.6596,
      address: '55 Stockton St, Princeton, NJ 08540',
      hours: 'Wednesday-Sunday, 10am-4pm',
      admission: '$10 adults, $8 seniors, $5 students',
      website: 'https://www.morven.org',
      displayOrder: 3,
      featured: true,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'thomas-clarke-house-princeton' },
    update: {},
    create: {
      id: 'thomas-clarke-house-princeton',
      name: 'Thomas Clarke House',
      slug: 'thomas-clarke-house',
      placeType: 'HISTORIC_HOUSE',
      description: 'The Thomas Clarke House is a colonial farmhouse located within Princeton Battlefield State Park. Built around 1772 by Thomas Clarke, a Quaker farmer, the house stood at the epicenter of the Battle of Princeton on January 3, 1777. After the battle, the house was used as a field hospital where wounded soldiers from both armies were treated.\n\nThe house is maintained by the Princeton Battlefield Society and is open for tours during scheduled events and by appointment.',
      historicalNote: 'General Hugh Mercer was carried to the Thomas Clarke House after being bayoneted on the battlefield. He was treated by physicians in the house but died of his wounds on January 12, 1777, nine days after the battle. British wounded were also treated in the house. The Clarke family, as Quakers, did not take sides in the conflict but provided care to soldiers of both armies.\n\nThe house is one of the few surviving structures that was directly involved in the Battle of Princeton. Its position within the battlefield park allows visitors to understand the spatial relationship between the house, the fields where the fighting occurred, and the road along which Mawhood\'s column marched.',
      lat: 40.3339,
      lng: -74.6680,
      address: '500 Mercer Rd, Princeton, NJ 08540',
      hours: 'Open during Princeton Battlefield Society events; by appointment',
      admission: 'Free',
      website: 'https://www.princetonbattlefieldsociety.org',
      displayOrder: 4,
      featured: true,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'princeton-cemetery' },
    update: {},
    create: {
      id: 'princeton-cemetery',
      name: 'Princeton Cemetery',
      slug: 'princeton-cemetery',
      placeType: 'CEMETERY',
      description: 'Princeton Cemetery, established in 1757, is the resting place of many of the individuals who shaped Princeton\'s role in the American Revolution. Located on Witherspoon Street behind the Nassau Presbyterian Church, the cemetery contains the graves of Aaron Burr Sr. and Jr., Jonathan Edwards, John Witherspoon, Richard and Annis Boudinot Stockton, and numerous Continental soldiers.\n\nThe cemetery is maintained by the Nassau Presbyterian Church and is freely accessible to visitors.',
      historicalNote: 'The cemetery\'s revolutionary-era graves include those of two signers of the Declaration of Independence (Richard Stockton and John Witherspoon), two presidents of the College of New Jersey (Witherspoon and Jonathan Edwards), and soldiers from the Battle of Princeton. The graveyard reflects the deep interconnection between the college, the Presbyterian church, and the political leadership of colonial Princeton.\n\nAaron Burr Sr., the second president of the College of New Jersey, and Jonathan Edwards, the third president and renowned theologian, are both buried here, though they died before the Revolution. Their graves connect the cemetery\'s history to the broader intellectual tradition of colonial Princeton.',
      lat: 40.3517,
      lng: -74.6608,
      address: '29 Greenview Ave, Princeton, NJ 08540',
      hours: 'Dawn to dusk',
      admission: 'Free',
      displayOrder: 5,
      featured: true,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'stony-brook-bridge-princeton' },
    update: {},
    create: {
      id: 'stony-brook-bridge-princeton',
      name: 'Stony Brook Bridge (Worth\'s Mill Site)',
      slug: 'stony-brook-bridge',
      placeType: 'LANDMARK',
      description: 'The Stony Brook Bridge marks the crossing point where the Post Road between Trenton and Princeton crossed Stony Brook. On the morning of January 3, 1777, Mawhood\'s British column had just crossed this bridge heading south toward Trenton when his scouts spotted Washington\'s army approaching Princeton from the southeast. The bridge and the adjacent Worth\'s Mill were strategic points during the battle.\n\nThe current bridge is not the original colonial structure, but the crossing point and the Stony Brook itself remain essentially unchanged.',
      historicalNote: 'After the main battle was decided, Washington sent troops to destroy the bridge over Stony Brook to delay any British reinforcements from Trenton. This demolition bought critical time for the American army to complete its operations in Princeton before withdrawing toward New Brunswick and eventually to winter quarters in Morristown. The bridge site thus played a dual role: it was the point from which Mawhood departed and the barrier that prevented Cornwallis from pursuing Washington.',
      lat: 40.3365,
      lng: -74.6715,
      address: 'Mercer Road at Stony Brook, Princeton, NJ',
      hours: 'Always accessible',
      admission: 'Free',
      displayOrder: 6,
      featured: false,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'mercer-oak-site-princeton' },
    update: {},
    create: {
      id: 'mercer-oak-site-princeton',
      name: 'Mercer Oak Site',
      slug: 'mercer-oak',
      placeType: 'MONUMENT',
      description: 'The Mercer Oak site marks the location within Princeton Battlefield State Park where General Hugh Mercer was unhorsed and bayoneted by British soldiers on January 3, 1777. The original white oak tree, under which Mercer reportedly fell, stood for over 300 years before it died and collapsed in March 2000. A descendant tree, grown from an acorn of the original, was planted near the site.\n\nA monument and interpretive markers explain the significance of the location.',
      historicalNote: 'The Mercer Oak became the symbolic centerpiece of the Princeton battlefield. The image of the wounded Mercer beneath the tree appeared in numerous paintings and engravings of the battle, including works by John Trumbull and James Peale. The tree\'s death in 2000 was mourned as the loss of a living connection to the battle. The Princeton Battlefield Society and the State of New Jersey ensured that the site remained marked and that descendant trees were planted to maintain the landscape\'s connection to the event.',
      lat: 40.3340,
      lng: -74.6675,
      address: 'Princeton Battlefield State Park, 500 Mercer Rd, Princeton, NJ 08540',
      hours: 'Dawn to dusk',
      admission: 'Free',
      displayOrder: 7,
      featured: true,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'drumthwacket-princeton' },
    update: {},
    create: {
      id: 'drumthwacket-princeton',
      name: 'Drumthwacket',
      slug: 'drumthwacket',
      placeType: 'HISTORIC_HOUSE',
      description: 'Drumthwacket is a Greek Revival mansion built in 1835 on land that was part of the Olden family\'s colonial-era farm. The property is associated with the Olden family, whose farm bordered the route of Washington\'s night march to Princeton. Since 1981, Drumthwacket has served as the official residence of the Governor of New Jersey.\n\nThe mansion is open for public tours on selected days and features exhibits on New Jersey history and governance.',
      historicalNote: 'The Olden family\'s connection to the site predates the Revolution. Thomas Olden\'s farmland encompassed the area where Drumthwacket now stands, and the family witnessed the passage of Washington\'s army through the area on the night of January 2-3, 1777. The Quaker Road, used by the Continental Army to approach Princeton, passed near the property. While the current mansion dates to the 1830s, the land itself is part of the revolutionary landscape of Princeton.',
      lat: 40.3410,
      lng: -74.6672,
      address: '354 Stockton St, Princeton, NJ 08540',
      hours: 'Wednesday tours by reservation, 12pm-2pm',
      admission: 'Free',
      website: 'https://www.drumthwacket.org',
      displayOrder: 8,
      featured: false,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'nassau-presbyterian-church-princeton' },
    update: {},
    create: {
      id: 'nassau-presbyterian-church-princeton',
      name: 'Nassau Presbyterian Church',
      slug: 'nassau-presbyterian-church',
      placeType: 'CHURCH',
      description: 'Nassau Presbyterian Church, located on Nassau Street adjacent to the Princeton University campus, is the descendant of the congregation that John Witherspoon led during the revolutionary era. The current building dates to 1836, replacing earlier structures, but the congregation\'s history extends back to the founding of the college and the town.\n\nThe church\'s cemetery, Princeton Cemetery, contains the graves of many revolutionary-era figures.',
      historicalNote: 'The Presbyterian congregation in Princeton was intimately connected to the College of New Jersey from its founding. College presidents served as pastors, and the church functioned as both a religious and intellectual center. During the British occupation of Princeton in 1776, the earlier church building suffered damage. John Witherspoon preached from this pulpit while simultaneously serving in the Continental Congress, embodying the fusion of religious conviction and political activism that characterized Princeton\'s revolutionary generation.',
      lat: 40.3502,
      lng: -74.6594,
      address: '61 Nassau St, Princeton, NJ 08542',
      hours: 'Sunday services; weekday office hours',
      admission: 'Free',
      website: 'https://www.nassauchurch.org',
      displayOrder: 9,
      featured: false,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'quaker-road-princeton' },
    update: {},
    create: {
      id: 'quaker-road-princeton',
      name: 'Quaker Road (Night March Route)',
      slug: 'quaker-road-night-march',
      placeType: 'TRAIL',
      description: 'Quaker Road is the route used by Washington\'s army during its night march from Trenton to Princeton on January 2-3, 1777. The road, also known as the Quaker Bridge Road, ran east of the main Post Road and allowed the Continental Army to bypass British positions along the direct route. The march of approximately 5,000 soldiers through the freezing darkness over icy, rutted roads was one of the great feats of endurance of the war.\n\nPortions of the historic road alignment are still traceable in the modern landscape.',
      historicalNote: 'Washington\'s decision to use the Quaker Road rather than the Post Road was critical to the success of the Princeton operation. The Post Road was watched by British sentries, and any movement along it would have been detected. The Quaker Road, a secondary route used primarily by the local Quaker community, offered a less-observed path. A local guide, possibly a farmer familiar with the area, helped direct the army along the correct route in the darkness.\n\nThe march began around midnight on January 2-3, 1777, after Washington\'s army had spent the day in a tense standoff with Cornwallis\'s forces along Assunpink Creek in Trenton. The soldiers marched in silence, with wagon wheels muffled and campfires left burning to deceive the British. By dawn, the army had reached the outskirts of Princeton.',
      lat: 40.3270,
      lng: -74.6590,
      address: 'Quaker Road, Princeton/West Windsor area, NJ',
      hours: 'Always accessible (public road)',
      admission: 'Free',
      displayOrder: 10,
      featured: false,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'princeton-battle-monument' },
    update: {},
    create: {
      id: 'princeton-battle-monument',
      name: 'Princeton Battle Monument',
      slug: 'princeton-battle-monument',
      placeType: 'MONUMENT',
      description: 'The Princeton Battle Monument is a large limestone sculpture at the intersection of Nassau Street, Stockton Street, and Bayard Lane. Designed by Frederick MacMonnies and dedicated in 1922, the monument depicts Washington leading his troops at the Battle of Princeton, with the figure of General Mercer falling wounded at his feet. The monument faces south toward the battlefield site.\n\nPresident Warren G. Harding dedicated the monument in a public ceremony.',
      historicalNote: 'The monument was funded by the State of New Jersey and represents one of the largest commemorative sculptures of the Revolution in the United States. Its dramatic composition captures the pivotal moment when Washington rode to the front to rally his retreating troops. The figure of Liberty leading the charge and the fallen Mercer at the base convey both the heroism and the cost of the engagement. The monument\'s prominent placement at a major intersection ensures that Princeton\'s revolutionary heritage is visible to everyone passing through the town center.',
      lat: 40.3497,
      lng: -74.6621,
      address: 'Nassau St & Stockton St, Princeton, NJ 08540',
      hours: 'Always accessible',
      admission: 'Free',
      displayOrder: 11,
      featured: true,
      town: { connect: { id: TOWN_ID } },
    },
  });

  await prisma.place.upsert({
    where: { id: 'bainbridge-house-princeton' },
    update: {},
    create: {
      id: 'bainbridge-house-princeton',
      name: 'Bainbridge House',
      slug: 'bainbridge-house',
      placeType: 'HISTORIC_HOUSE',
      description: 'Bainbridge House is a Georgian-style house built around 1766 on Nassau Street in Princeton. It is the birthplace of Commodore William Bainbridge, a naval hero of the War of 1812, and served as the headquarters of the Historical Society of Princeton for many years. The house was standing during the Battle of Princeton and the period when Congress met at Nassau Hall.\n\nThe building is one of the few surviving colonial-era structures on Nassau Street.',
      historicalNote: 'The house was built by Robert Stockton, a member of the extended Stockton family. Its location on Nassau Street placed it at the center of colonial Princeton life and within the area occupied by British forces during the winter of 1776-1777. The house witnessed the passage of troops, the sound of cannon during the battle, and the arrival of the Continental Congress in 1783. Its survival provides a tangible link to the built environment of revolutionary Princeton.',
      lat: 40.3499,
      lng: -74.6586,
      address: '158 Nassau St, Princeton, NJ 08542',
      hours: 'Varies; check Historical Society schedule',
      admission: 'Free',
      displayOrder: 12,
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

  // --- 8 Existing Events (upsert to add slugs) ---

  await prisma.event.upsert({
    where: { id: 'event-princeton-battle-1777' },
    update: { slug: 'battle-of-princeton-1777' },
    create: { id: 'event-princeton-battle-1777', townId: TOWN_ID, name: 'Battle of Princeton', slug: 'battle-of-princeton-1777', startDate: new Date('1777-01-03T08:00:00.000Z'), datePrecision: 'DAY', summary: `On the morning of January 3, 1777, Washington's Continental Army attacked the British garrison at Princeton after an all-night march from Trenton. The engagement began when General Hugh Mercer's advance brigade encountered Lieutenant Colonel Charles Mawhood's column near the Thomas Clarke farmhouse. Mawhood's troops routed Mercer's brigade, mortally wounding Mercer, but Washington arrived with the main body and personally rallied the fleeing Americans. The battle ended with the British garrison at Nassau Hall surrendering after cannon fire struck the building. The American victory, combined with the earlier success at Trenton, concluded the Ten Crucial Days and revived the patriot cause at a moment of near-collapse.`, significanceWeight: 100 },
  });

  await prisma.event.upsert({
    where: { id: 'event-princeton-nassau-hall-cannonade' },
    update: { slug: 'nassau-hall-cannonade' },
    create: { id: 'event-princeton-nassau-hall-cannonade', townId: TOWN_ID, name: 'Cannonade of Nassau Hall', slug: 'nassau-hall-cannonade', startDate: new Date('1777-01-03T09:00:00.000Z'), datePrecision: 'DAY', summary: `During the final phase of the Battle of Princeton, approximately 194 British soldiers of the 40th Regiment of Foot barricaded themselves inside Nassau Hall. Captain Alexander Hamilton directed American artillery fire at the building, and cannon balls struck the walls and entered through the windows. According to tradition, one shot destroyed a portrait of King George II hanging in the prayer hall. The British garrison inside the building surrendered shortly after the cannonade began. The capture of Nassau Hall was the symbolic climax of the battle — the college that had been desecrated by British occupation was now liberated by American arms.`, significanceWeight: 85 },
  });

  await prisma.event.upsert({
    where: { id: 'event-princeton-night-march' },
    update: { slug: 'night-march-trenton-to-princeton' },
    create: { id: 'event-princeton-night-march', townId: TOWN_ID, name: 'Night March from Trenton to Princeton', slug: 'night-march-trenton-to-princeton', startDate: new Date('1777-01-02T23:00:00.000Z'), datePrecision: 'DAY', summary: `On the night of January 2-3, 1777, Washington's army of approximately 5,000 soldiers slipped away from their positions along Assunpink Creek in Trenton and marched north toward Princeton. The army left campfires burning and sentries posted to deceive Cornwallis into believing they were still in position. The march followed the Quaker Road, a secondary route east of the main Post Road, to avoid British detection. Temperatures were well below freezing, the roads were icy and rutted, and many soldiers lacked adequate shoes and clothing. The march covered approximately 12 miles and took most of the night. It was one of the great feats of strategic deception and endurance of the war.`, significanceWeight: 95 },
  });

  await prisma.event.upsert({
    where: { id: 'event-princeton-congress-1783' },
    update: { slug: 'continental-congress-at-princeton' },
    create: { id: 'event-princeton-congress-1783', townId: TOWN_ID, name: 'Continental Congress Meets at Princeton', slug: 'continental-congress-at-princeton', startDate: new Date('1783-06-30T00:00:00.000Z'), endDate: new Date('1783-11-04T00:00:00.000Z'), datePrecision: 'MONTH', summary: `In June 1783, the Continental Congress fled Philadelphia after approximately 400 unpaid soldiers of the Pennsylvania Line surrounded the State House (Independence Hall) demanding back pay. Congress reconvened at Nassau Hall in Princeton, where it met from June 30 to November 4, 1783. During this period, Princeton served as the de facto capital of the United States. Congress received official notification of the Treaty of Paris ending the Revolutionary War, formally thanked George Washington for his service as Commander-in-Chief, and received the first minister from the Netherlands. Elias Boudinot, brother-in-law of Richard Stockton, served as President of Congress during this period.`, significanceWeight: 90 },
  });

  await prisma.event.upsert({
    where: { id: 'event-princeton-stockton-capture' },
    update: { slug: 'richard-stockton-captured' },
    create: { id: 'event-princeton-stockton-capture', townId: TOWN_ID, name: 'Richard Stockton Captured by the British', slug: 'richard-stockton-captured', startDate: new Date('1776-11-30T00:00:00.000Z'), datePrecision: 'DAY', summary: `On November 30, 1776, Richard Stockton, a signer of the Declaration of Independence, was captured by Loyalist informers near Monmouth Court House while fleeing the British advance across New Jersey. Stockton had left Princeton with his family as British and Hessian forces approached. He was taken to the Provost Jail in New York City, where he was held in harsh conditions — confined in irons, subjected to cold, and given inadequate food. The Continental Congress formally protested his treatment. Stockton was eventually released in early 1777 after signing an oath not to take up arms against the Crown, a decision that remained controversial.`, significanceWeight: 75 },
  });

  await prisma.event.upsert({
    where: { id: 'event-princeton-mercer-death' },
    update: { slug: 'death-of-general-mercer' },
    create: { id: 'event-princeton-mercer-death', townId: TOWN_ID, name: 'Death of General Hugh Mercer', slug: 'death-of-general-mercer', startDate: new Date('1777-01-12T00:00:00.000Z'), datePrecision: 'DAY', summary: `General Hugh Mercer died on January 12, 1777, at the Thomas Clarke House on the Princeton battlefield, nine days after being bayoneted multiple times during the battle. Despite the attention of physicians, his wounds — which included at least seven bayonet stabs and a musket ball wound — proved fatal. Mercer's prolonged death was widely publicized in patriot newspapers and pamphlets, and his sacrifice became a powerful recruiting tool and rallying point. His death at Princeton transformed him from a competent but relatively obscure brigadier general into one of the celebrated martyrs of the Revolution.`, significanceWeight: 85 },
  });

  await prisma.event.upsert({
    where: { id: 'event-princeton-british-occupation' },
    update: { slug: 'british-occupation-of-princeton' },
    create: { id: 'event-princeton-british-occupation', townId: TOWN_ID, name: 'British Occupation of Princeton', slug: 'british-occupation-of-princeton', startDate: new Date('1776-12-07T00:00:00.000Z'), endDate: new Date('1777-01-03T00:00:00.000Z'), datePrecision: 'DAY', summary: `British and Hessian forces occupied Princeton from approximately December 7, 1776, through January 3, 1777. During this period, the troops used Nassau Hall as a barracks, destroying much of the college's library, scientific instruments, and furnishings. Private homes, including the Stockton estate Morven, were ransacked and their contents destroyed or confiscated. The occupation was part of the broader British campaign to secure New Jersey after driving Washington's army across the Delaware River. The damage to Princeton's buildings, institutions, and civilian property was extensive and shaped the town's experience of the war.`, significanceWeight: 80 },
  });

  await prisma.event.upsert({
    where: { id: 'event-princeton-witherspoon-declaration' },
    update: { slug: 'witherspoon-signs-declaration' },
    create: { id: 'event-princeton-witherspoon-declaration', townId: TOWN_ID, name: 'Witherspoon Signs the Declaration of Independence', slug: 'witherspoon-signs-declaration', startDate: new Date('1776-08-02T00:00:00.000Z'), datePrecision: 'DAY', summary: `On August 2, 1776, John Witherspoon, president of the College of New Jersey at Princeton, signed the Declaration of Independence in Philadelphia. Witherspoon was the only active college president and the only clergyman among the signers. He had arrived at the Continental Congress in late June 1776 and quickly became an advocate for immediate independence. During the debates, he countered arguments that the colonies were not ready for separation from Britain by arguing forcefully for action. His signature represented not only his personal commitment but the involvement of Princeton's intellectual and religious community in the revolutionary cause.`, significanceWeight: 85 },
  });

  // --- 13 NEW Events ---

  await prisma.event.upsert({
    where: { id: 'event-princeton-mercer-mawhood-clash' },
    update: {},
    create: { id: 'event-princeton-mercer-mawhood-clash', townId: TOWN_ID, name: 'Mercer and Mawhood Clash at Clarke Farm', slug: 'mercer-mawhood-clash', startDate: new Date('1777-01-03T08:15:00.000Z'), datePrecision: 'DAY', summary: `The Battle of Princeton began when General Hugh Mercer's advance brigade, which Washington had sent to destroy the Stony Brook Bridge, encountered Lieutenant Colonel Charles Mawhood's column near the Thomas Clarke farmhouse. Both forces spotted each other nearly simultaneously and raced for higher ground. Mawhood's well-trained British regulars of the 17th Regiment of Foot formed a line of battle and delivered devastating musket volleys. They then charged with bayonets, a tactic the Americans were ill-equipped to counter. Mercer's horse was shot from under him, and when he drew his sword and continued fighting on foot, British soldiers surrounded him and bayoneted him repeatedly, apparently mistaking him for Washington. Mercer's brigade broke and fled, carrying with them part of General John Cadwalader's militia brigade that had come up in support.`, significanceWeight: 90 },
  });

  await prisma.event.upsert({
    where: { id: 'event-princeton-washington-rallies-troops' },
    update: {},
    create: { id: 'event-princeton-washington-rallies-troops', townId: TOWN_ID, name: 'Washington Rallies Troops at Princeton', slug: 'washington-rallies-troops', startDate: new Date('1777-01-03T08:30:00.000Z'), datePrecision: 'DAY', summary: `As Mercer's and Cadwalader's men streamed toward the rear, George Washington rode forward on his white horse to meet them. Riding between the retreating Americans and the advancing British, Washington shouted to the men to halt and reform. His personal intervention — conspicuously mounted and exposed to fire from both sides — steadied the panicking troops. As fresh Continental regiments arrived, Washington led them in a charge toward the British line. Colonel John Fitzgerald, Washington's aide, reportedly covered his eyes, certain that Washington would be killed. When the smoke cleared, Washington was unharmed and the British line was breaking. This moment became the iconic image of the Battle of Princeton and demonstrated Washington's willingness to risk his life alongside his soldiers.`, significanceWeight: 95 },
  });

  await prisma.event.upsert({
    where: { id: 'event-princeton-stony-brook-bridge-destroyed' },
    update: {},
    create: { id: 'event-princeton-stony-brook-bridge-destroyed', townId: TOWN_ID, name: 'Stony Brook Bridge Destroyed', slug: 'stony-brook-bridge-destroyed', startDate: new Date('1777-01-03T09:30:00.000Z'), datePrecision: 'DAY', summary: `After the main engagement at Princeton was decided, Washington sent troops to destroy the bridge over Stony Brook on the Post Road south of Princeton. This was a critical tactical decision: General Cornwallis, who had been camped at Trenton expecting to attack Washington's army in the morning, would discover the deception and pursue northward. Destroying the bridge delayed Cornwallis's advance and gave Washington's army time to complete its operations in Princeton, gather supplies, and withdraw toward New Brunswick. The demolition of the bridge was one of several rearguard actions that allowed the Americans to escape with their victory intact.`, significanceWeight: 70 },
  });

  await prisma.event.upsert({
    where: { id: 'event-princeton-annis-stockton-buries-papers' },
    update: {},
    create: { id: 'event-princeton-annis-stockton-buries-papers', townId: TOWN_ID, name: 'Annis Stockton Buries Family Papers at Morven', slug: 'annis-stockton-buries-papers', startDate: new Date('1776-12-01T00:00:00.000Z'), datePrecision: 'MONTH', summary: `As British forces advanced on Princeton in late November and early December 1776, Annis Boudinot Stockton took action to preserve the family's papers and valuables. With her husband Richard Stockton having already fled and been captured, Annis gathered the family's legal documents, correspondence, and other important papers and buried them in the garden at Morven before fleeing with her children. The British subsequently occupied Morven and destroyed much of the house's contents. Annis's foresight in burying the papers saved documents that would otherwise have been lost. Her action represents the largely untold story of women who protected their families' legacies while men were at war or in captivity.`, significanceWeight: 65 },
  });

  await prisma.event.upsert({
    where: { id: 'event-princeton-college-closed' },
    update: {},
    create: { id: 'event-princeton-college-closed', townId: TOWN_ID, name: 'College of New Jersey Closes for the War', slug: 'college-closes-for-war', startDate: new Date('1776-11-29T00:00:00.000Z'), datePrecision: 'MONTH', summary: `As British and Hessian forces advanced through New Jersey in November 1776, the College of New Jersey suspended operations and its students dispersed. President John Witherspoon, who was serving in the Continental Congress in Philadelphia, could only watch from a distance as the institution he had built was threatened. The college's buildings, library, and equipment would suffer severe damage during the subsequent British occupation. The college did not fully resume operations until after the war. The closure represented a broader pattern across the colonies, where educational institutions were disrupted, commandeered, or destroyed by the conflict.`, significanceWeight: 65 },
  });

  await prisma.event.upsert({
    where: { id: 'event-princeton-nassau-hall-damage' },
    update: {},
    create: { id: 'event-princeton-nassau-hall-damage', townId: TOWN_ID, name: 'British Damage Nassau Hall During Occupation', slug: 'nassau-hall-occupation-damage', startDate: new Date('1776-12-08T00:00:00.000Z'), datePrecision: 'MONTH', summary: `During the British occupation of Princeton from December 1776 to January 1777, soldiers used Nassau Hall as a barracks. They burned furniture and woodwork for fuel, destroyed or carried off the college's library and scientific instruments, and damaged the building's interior. The philosophical apparatus — scientific equipment used for teaching — was particularly targeted. Witherspoon later estimated the damage to the college at thousands of pounds. The destruction was not limited to Nassau Hall; the entire campus and several private homes in Princeton were similarly treated. The vandalism reflected both the practical needs of soldiers quartered in a cold winter and a deliberate disregard for colonial institutions.`, significanceWeight: 70 },
  });

  await prisma.event.upsert({
    where: { id: 'event-princeton-treaty-of-paris-announced' },
    update: {},
    create: { id: 'event-princeton-treaty-of-paris-announced', townId: TOWN_ID, name: 'Treaty of Paris Announced at Princeton', slug: 'treaty-of-paris-announced', startDate: new Date('1783-10-31T00:00:00.000Z'), datePrecision: 'DAY', summary: `On October 31, 1783, while the Continental Congress was meeting at Nassau Hall in Princeton, official word arrived that the Treaty of Paris had been signed, formally ending the Revolutionary War. Congress, under the presidency of Elias Boudinot, received the news and issued a proclamation announcing the peace. Princeton thus became the place where the end of the war was officially recognized by the American government. The moment was both a conclusion and a beginning — the war was over, but the task of building a functioning nation from the Articles of Confederation was just starting.`, significanceWeight: 85 },
  });

  await prisma.event.upsert({
    where: { id: 'event-princeton-washington-thanked' },
    update: {},
    create: { id: 'event-princeton-washington-thanked', townId: TOWN_ID, name: 'Congress Thanks Washington at Princeton', slug: 'congress-thanks-washington', startDate: new Date('1783-08-26T00:00:00.000Z'), datePrecision: 'DAY', summary: `On August 26, 1783, the Continental Congress, meeting at Nassau Hall in Princeton, formally passed a resolution thanking George Washington for his service as Commander-in-Chief of the Continental Army. Washington traveled to Princeton and was received by Congress in a ceremony at Nassau Hall. Congress commissioned Charles Willson Peale to paint an equestrian portrait of Washington, which was eventually completed and still hangs in Nassau Hall. The event reinforced Princeton's role as a center of national governance during the summer and fall of 1783.`, significanceWeight: 80 },
  });

  await prisma.event.upsert({
    where: { id: 'event-princeton-dutch-minister-received' },
    update: {},
    create: { id: 'event-princeton-dutch-minister-received', townId: TOWN_ID, name: 'Dutch Minister Received at Princeton', slug: 'dutch-minister-received', startDate: new Date('1783-10-31T00:00:00.000Z'), datePrecision: 'MONTH', summary: `During the period when the Continental Congress met at Nassau Hall, Congress received Pieter Johan van Berckel, the first minister from the Netherlands to the United States. This diplomatic reception, conducted in the relatively modest setting of a college building in a small New Jersey town, was one of the earliest formal diplomatic ceremonies of the new American nation. The event demonstrated that despite the provisional and itinerant nature of the American government in 1783, the United States was beginning to take its place among the nations of the world.`, significanceWeight: 65 },
  });

  await prisma.event.upsert({
    where: { id: 'event-princeton-washington-crosses-delaware' },
    update: {},
    create: { id: 'event-princeton-washington-crosses-delaware', townId: TOWN_ID, name: 'Washington Crosses the Delaware', slug: 'washington-crosses-delaware', startDate: new Date('1776-12-25T00:00:00.000Z'), datePrecision: 'DAY', summary: `On the night of December 25-26, 1776, Washington led approximately 2,400 soldiers across the ice-choked Delaware River from Pennsylvania to New Jersey. The crossing, conducted in a nor'easter with sleet and snow, was the opening move of the Ten Crucial Days campaign that would culminate at Princeton. The army crossed at McConkey's Ferry (now Washington Crossing) and marched nine miles south to Trenton, where they surprised and defeated the Hessian garrison on the morning of December 26. While this event did not occur in Princeton, it set in motion the chain of events that led directly to the Battle of Princeton eight days later.`, significanceWeight: 90 },
  });

  await prisma.event.upsert({
    where: { id: 'event-princeton-second-battle-trenton' },
    update: {},
    create: { id: 'event-princeton-second-battle-trenton', townId: TOWN_ID, name: 'Second Battle of Trenton (Assunpink Creek)', slug: 'second-battle-trenton', startDate: new Date('1777-01-02T00:00:00.000Z'), datePrecision: 'DAY', summary: `On January 2, 1777, General Cornwallis advanced on Trenton with a force of approximately 8,000 troops, intending to destroy Washington's army. Washington's forces held a defensive position behind Assunpink Creek, repelling several British attempts to cross the bridge. As darkness fell, Cornwallis reportedly decided to delay the final assault until morning, confident that Washington was trapped. That night, Washington convened a council of war and made the decision to slip away from Trenton and march on Princeton instead. The Second Battle of Trenton set the stage directly for the night march and the Battle of Princeton.`, significanceWeight: 80 },
  });

  await prisma.event.upsert({
    where: { id: 'event-princeton-witherspoon-rebuilds-college' },
    update: {},
    create: { id: 'event-princeton-witherspoon-rebuilds-college', townId: TOWN_ID, name: 'Witherspoon Rebuilds the College After the War', slug: 'witherspoon-rebuilds-college', startDate: new Date('1783-01-01T00:00:00.000Z'), datePrecision: 'YEAR', summary: `After the war, John Witherspoon devoted his remaining years to rebuilding the College of New Jersey. The task was enormous: Nassau Hall had been severely damaged, the library had been destroyed, the scientific equipment was gone, and enrollment had collapsed. Witherspoon traveled throughout the states to raise funds, recruited new students, and gradually restored the curriculum and physical plant. Despite losing his eyesight in the final years of his life, he continued to serve as president until his death in 1794. The rebuilding of the college paralleled the rebuilding of the nation — both required sustained effort, financial sacrifice, and a belief that the institutions damaged by war were worth restoring.`, significanceWeight: 65 },
  });

  await prisma.event.upsert({
    where: { id: 'event-princeton-philadelphia-mutiny-congress-flees' },
    update: {},
    create: { id: 'event-princeton-philadelphia-mutiny-congress-flees', townId: TOWN_ID, name: 'Congress Flees Philadelphia Mutiny', slug: 'congress-flees-philadelphia', startDate: new Date('1783-06-21T00:00:00.000Z'), datePrecision: 'DAY', summary: `On June 21, 1783, approximately 400 soldiers of the Pennsylvania Line surrounded the State House in Philadelphia, demanding back pay from Congress and the Pennsylvania state government. When the Pennsylvania authorities refused to call out the militia to protect Congress, the delegates decided to relocate rather than govern under the threat of armed coercion. Congress decamped to Princeton, arriving at Nassau Hall on June 30. The mutiny exposed the weakness of the national government under the Articles of Confederation — Congress had no independent military force and depended on the states for its physical security. Princeton's willingness to host Congress provided a temporary solution to this constitutional crisis.`, significanceWeight: 75 },
  });

  console.log('  Events seeded.');
}

// =============================================================================
// EVENT-PEOPLE CONNECTIONS
// =============================================================================

async function seedEventPeople() {
  console.log('  Seeding event-people connections...');

  const connections = [
    // Battle of Princeton
    { eventId: 'event-princeton-battle-1777', personId: 'person-princeton-george-washington', roleInEvent: 'Commander-in-Chief who personally led the charge that turned the battle' },
    { eventId: 'event-princeton-battle-1777', personId: 'person-princeton-hugh-mercer', roleInEvent: 'Brigade commander who was mortally wounded leading the advance guard' },
    { eventId: 'event-princeton-battle-1777', personId: 'person-princeton-charles-mawhood', roleInEvent: 'British commander whose counterattack initially routed the Americans' },
    { eventId: 'event-princeton-battle-1777', personId: 'person-princeton-benjamin-rush', roleInEvent: 'Military physician who treated wounded after the battle' },
    // Nassau Hall Cannonade
    { eventId: 'event-princeton-nassau-hall-cannonade', personId: 'person-princeton-george-washington', roleInEvent: 'Ordered the cannonade of Nassau Hall to force British surrender' },
    // Night March from Trenton to Princeton
    { eventId: 'event-princeton-night-march', personId: 'person-princeton-george-washington', roleInEvent: 'Planned and led the night march, deceiving Cornwallis' },
    { eventId: 'event-princeton-night-march', personId: 'person-princeton-hugh-mercer', roleInEvent: 'Brigade commander during the march' },
    // Continental Congress at Princeton
    { eventId: 'event-princeton-congress-1783', personId: 'person-princeton-elias-boudinot', roleInEvent: 'President of Congress during its residence at Nassau Hall' },
    { eventId: 'event-princeton-congress-1783', personId: 'person-princeton-george-washington', roleInEvent: 'Received formal thanks from Congress at Nassau Hall' },
    // Stockton Capture
    { eventId: 'event-princeton-stockton-capture', personId: 'person-princeton-richard-stockton', roleInEvent: 'Captured by Loyalist informers while fleeing the British advance' },
    { eventId: 'event-princeton-stockton-capture', personId: 'person-princeton-annis-boudinot-stockton', roleInEvent: 'Wife who remained to manage family affairs after his capture' },
    // Mercer Death
    { eventId: 'event-princeton-mercer-death', personId: 'person-princeton-hugh-mercer', roleInEvent: 'Died of bayonet wounds at the Thomas Clarke House' },
    { eventId: 'event-princeton-mercer-death', personId: 'person-princeton-benjamin-rush', roleInEvent: 'Among the physicians who attended Mercer' },
    // British Occupation
    { eventId: 'event-princeton-british-occupation', personId: 'person-princeton-charles-mawhood', roleInEvent: 'Commander of the British garrison at Princeton' },
    { eventId: 'event-princeton-british-occupation', personId: 'person-princeton-john-witherspoon', roleInEvent: 'College president whose institution was damaged during occupation' },
    { eventId: 'event-princeton-british-occupation', personId: 'person-princeton-thomas-olden', roleInEvent: 'Local farmer whose property was affected by troop movements' },
    // Witherspoon Signs Declaration
    { eventId: 'event-princeton-witherspoon-declaration', personId: 'person-princeton-john-witherspoon', roleInEvent: 'Signed the Declaration of Independence as only active college president' },
    { eventId: 'event-princeton-witherspoon-declaration', personId: 'person-princeton-richard-stockton', roleInEvent: 'Fellow New Jersey delegate who also signed the Declaration' },
    // Mercer-Mawhood Clash
    { eventId: 'event-princeton-mercer-mawhood-clash', personId: 'person-princeton-hugh-mercer', roleInEvent: 'Led the advance brigade and was unhorsed and bayoneted' },
    { eventId: 'event-princeton-mercer-mawhood-clash', personId: 'person-princeton-charles-mawhood', roleInEvent: 'Led the British counterattack that routed Mercer\'s brigade' },
    // Washington Rallies Troops
    { eventId: 'event-princeton-washington-rallies-troops', personId: 'person-princeton-george-washington', roleInEvent: 'Rode between the lines to rally fleeing troops and led the charge' },
    // Annis Stockton Buries Papers
    { eventId: 'event-princeton-annis-stockton-buries-papers', personId: 'person-princeton-annis-boudinot-stockton', roleInEvent: 'Buried family papers and valuables in Morven\'s garden before fleeing' },
    { eventId: 'event-princeton-annis-stockton-buries-papers', personId: 'person-princeton-richard-stockton', roleInEvent: 'Had already fled Princeton; was subsequently captured' },
    // College Closes
    { eventId: 'event-princeton-college-closed', personId: 'person-princeton-john-witherspoon', roleInEvent: 'President who oversaw the college\'s closure as British forces advanced' },
    { eventId: 'event-princeton-college-closed', personId: 'person-princeton-james-madison', roleInEvent: 'Alumnus whose alma mater was shuttered by the war' },
    // Treaty of Paris Announced
    { eventId: 'event-princeton-treaty-of-paris-announced', personId: 'person-princeton-elias-boudinot', roleInEvent: 'President of Congress who signed the proclamation of peace' },
    // Congress Thanks Washington
    { eventId: 'event-princeton-washington-thanked', personId: 'person-princeton-george-washington', roleInEvent: 'Received formal thanks and commission for portrait from Congress' },
    { eventId: 'event-princeton-washington-thanked', personId: 'person-princeton-elias-boudinot', roleInEvent: 'Presided over the ceremony thanking Washington' },
    // Witherspoon Rebuilds College
    { eventId: 'event-princeton-witherspoon-rebuilds-college', personId: 'person-princeton-john-witherspoon', roleInEvent: 'Led fundraising and rebuilding efforts for the damaged college' },
    // Congress Flees Philadelphia
    { eventId: 'event-princeton-philadelphia-mutiny-congress-flees', personId: 'person-princeton-elias-boudinot', roleInEvent: 'President of Congress who led the relocation to Princeton' },
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
    where: { id: 'story-princeton-mercers-stand' },
    update: {
      slug: 'mercers-stand-at-princeton',
      textVersion: `Hugh Mercer had been a fugitive before. After the Battle of Culloden in 1746, he had fled across Scotland with a price on his head, eventually boarding a ship for the American colonies. He had rebuilt his life from nothing — practicing medicine on the Pennsylvania frontier, fighting in the French and Indian War, establishing an apothecary in Fredericksburg, Virginia. By the winter of 1776-1777, he was a brigadier general in the Continental Army, commanding a brigade in the campaign that would determine whether the Revolution survived or died.

The night march from Trenton to Princeton on January 2-3, 1777, was punishing. Temperatures were well below freezing. The roads were icy and rutted, and many soldiers had no shoes, wrapping their feet in rags that left bloody tracks on the frozen ground. Mercer marched with his brigade through the darkness, following the Quaker Road north toward Princeton. The army had slipped away from Cornwallis at Trenton, leaving campfires burning to sustain the deception. By dawn, they were approaching Princeton from the southeast.

Washington sent Mercer's brigade ahead to destroy the bridge over Stony Brook, which would cut off any British reinforcements from Trenton. It was a straightforward assignment — destroy the bridge and rejoin the main column. But as Mercer's men crossed the fields near the Thomas Clarke farmhouse, they spotted a column of British soldiers marching south along the Post Road. The British had spotted them at nearly the same moment.

Both forces raced for a slight rise near an orchard. Mawhood's British regulars of the 17th Regiment of Foot won the race and formed a battle line with the practiced efficiency of professional soldiers. They fired devastating volleys and then charged with bayonets — the weapon the Continental Army feared above all others. Mercer's men, many of whom were militia with limited training, began to break.

Mercer's horse was shot from under him. On foot, he drew his sword and continued to fight. British soldiers surrounded him. Some accounts say they mistook the silver-haired general for Washington and demanded his surrender. Mercer refused. He was bayoneted at least seven times — in the chest, the abdomen, the arms, and the head. Left for dead on the frozen ground, he lay among the bodies as his brigade disintegrated and fled toward the rear.

What saved the day was Washington. Riding his white horse, he appeared from the direction of the main column, which had been following behind Mercer. He rode directly into the space between the retreating Americans and the advancing British, shouting at his soldiers to halt, to reform, to follow him. Fresh troops from Daniel Hitchcock's New England brigade and Edward Hand's Pennsylvania riflemen arrived and formed a new line. Washington led them forward. The British line, which had seemed invincible moments before, wavered and then broke.

Mercer was found alive and carried to the Thomas Clarke House. For nine days, physicians tried to save him. But the bayonet wounds were too numerous and too deep. He died on January 12, 1777, in the same farmhouse where the battle had begun.

The painting by John Trumbull — "The Death of General Mercer at the Battle of Princeton" — became one of the iconic images of the Revolution. It shows Mercer on the ground, his sword still in his hand, as a British soldier lunges at him with a bayonet while Washington charges in from the background. Like all historical paintings, it simplifies and dramatizes. But the core of the image is accurate: Mercer stood his ground, refused to surrender, and paid with his life.

Mercer was buried first in the churchyard at Christ Church in Philadelphia. His remains were later moved to Laurel Hill Cemetery. Mercer County, New Jersey, was named for him, as were Mercersburg, Pennsylvania, and Fort Mercer in Red Bank, New Jersey. The Mercer Oak on the Princeton battlefield — the white oak under which he reportedly fell — stood for over 300 years before dying in 2000. A descendant tree was planted at the site.

Hugh Mercer's story at Princeton is not about victory. It is about the moment before victory, when everything appeared lost — when the advance guard was routed, the commander was down, and the army was fleeing. It was in that moment of apparent defeat that Washington's intervention changed the course of the battle. Mercer's stand, and his sacrifice, bought the time that made Washington's rally possible.`,
    },
    create: {
      id: 'story-princeton-mercers-stand',
      townId: TOWN_ID,
      title: "Mercer's Stand at Princeton",
      slug: 'mercers-stand-at-princeton',
      storyType: 'HISTORICAL_VOICE',
      subjectPersonId: 'person-princeton-hugh-mercer',
      verificationStatus: 'VERIFIED',
      textVersion: `Hugh Mercer had been a fugitive before. After the Battle of Culloden in 1746, he had fled across Scotland with a price on his head, eventually boarding a ship for the American colonies. He had rebuilt his life from nothing — practicing medicine on the Pennsylvania frontier, fighting in the French and Indian War, establishing an apothecary in Fredericksburg, Virginia. By the winter of 1776-1777, he was a brigadier general in the Continental Army, commanding a brigade in the campaign that would determine whether the Revolution survived or died.

The night march from Trenton to Princeton on January 2-3, 1777, was punishing. Temperatures were well below freezing. The roads were icy and rutted, and many soldiers had no shoes, wrapping their feet in rags that left bloody tracks on the frozen ground. Mercer marched with his brigade through the darkness, following the Quaker Road north toward Princeton. The army had slipped away from Cornwallis at Trenton, leaving campfires burning to sustain the deception. By dawn, they were approaching Princeton from the southeast.

Washington sent Mercer's brigade ahead to destroy the bridge over Stony Brook, which would cut off any British reinforcements from Trenton. It was a straightforward assignment — destroy the bridge and rejoin the main column. But as Mercer's men crossed the fields near the Thomas Clarke farmhouse, they spotted a column of British soldiers marching south along the Post Road. The British had spotted them at nearly the same moment.

Both forces raced for a slight rise near an orchard. Mawhood's British regulars of the 17th Regiment of Foot won the race and formed a battle line with the practiced efficiency of professional soldiers. They fired devastating volleys and then charged with bayonets — the weapon the Continental Army feared above all others. Mercer's men, many of whom were militia with limited training, began to break.

Mercer's horse was shot from under him. On foot, he drew his sword and continued to fight. British soldiers surrounded him. Some accounts say they mistook the silver-haired general for Washington and demanded his surrender. Mercer refused. He was bayoneted at least seven times — in the chest, the abdomen, the arms, and the head. Left for dead on the frozen ground, he lay among the bodies as his brigade disintegrated and fled toward the rear.

What saved the day was Washington. Riding his white horse, he appeared from the direction of the main column, which had been following behind Mercer. He rode directly into the space between the retreating Americans and the advancing British, shouting at his soldiers to halt, to reform, to follow him. Fresh troops from Daniel Hitchcock's New England brigade and Edward Hand's Pennsylvania riflemen arrived and formed a new line. Washington led them forward. The British line, which had seemed invincible moments before, wavered and then broke.

Mercer was found alive and carried to the Thomas Clarke House. For nine days, physicians tried to save him. But the bayonet wounds were too numerous and too deep. He died on January 12, 1777, in the same farmhouse where the battle had begun.

The painting by John Trumbull — "The Death of General Mercer at the Battle of Princeton" — became one of the iconic images of the Revolution. It shows Mercer on the ground, his sword still in his hand, as a British soldier lunges at him with a bayonet while Washington charges in from the background. Like all historical paintings, it simplifies and dramatizes. But the core of the image is accurate: Mercer stood his ground, refused to surrender, and paid with his life.

Mercer was buried first in the churchyard at Christ Church in Philadelphia. His remains were later moved to Laurel Hill Cemetery. Mercer County, New Jersey, was named for him, as were Mercersburg, Pennsylvania, and Fort Mercer in Red Bank, New Jersey. The Mercer Oak on the Princeton battlefield — the white oak under which he reportedly fell — stood for over 300 years before dying in 2000. A descendant tree was planted at the site.

Hugh Mercer's story at Princeton is not about victory. It is about the moment before victory, when everything appeared lost — when the advance guard was routed, the commander was down, and the army was fleeing. It was in that moment of apparent defeat that Washington's intervention changed the course of the battle. Mercer's stand, and his sacrifice, bought the time that made Washington's rally possible.`,
      tags: ['princeton', 'revolution', 'hugh-mercer', 'battle', 'ten-crucial-days'],
    },
  });

  await prisma.story.upsert({
    where: { id: 'story-princeton-night-march' },
    update: {
      slug: 'the-night-march',
      textVersion: `The campfires burned on the south bank of Assunpink Creek, their glow visible to the British sentries across the water. General Cornwallis, settling into his headquarters in Trenton for the night, was confident that the American army was trapped. He would attack at dawn on January 3, 1777, and finish what the defeats at Long Island, White Plains, and Fort Washington had started. The war, he believed, was nearly over.

But behind those campfires, the American camp was emptying. Washington had convened a council of war as darkness fell on January 2 and proposed one of the boldest maneuvers of the Revolution: instead of fighting or retreating, the army would slip away from Trenton in the night and march north to attack the British garrison at Princeton. It was a plan that required perfect execution and absolute silence.

The army began to move around midnight. Approximately 5,000 soldiers formed columns and filed out of their positions, leaving a small detachment to tend the fires, clatter tools against the frozen ground, and make enough noise to convince the British pickets that the army was still digging in. Wagon wheels were wrapped in cloth to muffle their sound. Artillery pieces were dragged over frozen roads. The men marched in silence, their breath clouding in the bitter cold.

The route followed the Quaker Road, a secondary path east of the main Post Road that connected Trenton and Princeton. The road ran through farmland and forest, much of it unfamiliar to the soldiers. Local guides helped navigate the way in the darkness. The ground had frozen during the night — a stroke of fortune, as the previous day's thaw had turned the roads to mud that would have made marching nearly impossible. The hard frost provided a solid surface but also made the going treacherous, with soldiers slipping on ice and frozen ruts.

The march covered approximately 12 miles and took most of the night. Many soldiers had been awake for over 24 hours, having fought the Second Battle of Trenton at Assunpink Creek that afternoon. They had little food and less rest. Their shoes, when they had them, were falling apart. Some left bloody footprints on the icy road, a detail noted by multiple witnesses. The cold was severe enough that at least two soldiers froze to death during the march.

As dawn approached, the army neared Princeton. The first light revealed smoke rising from the chimneys of the town ahead. Mawhood's British column was spotted marching south on the Post Road, heading toward Trenton to reinforce Cornwallis. The collision between the two forces was unplanned by either side — Mawhood had not expected an American army at his back, and Washington had not expected to encounter a British force on the march.

The night march from Trenton to Princeton was a triumph of will, discipline, and deception. It demonstrated that the Continental Army, often dismissed as a rabble by British officers, was capable of executing a complex maneuver that would have challenged any professional force. The march also showed Washington's willingness to gamble — if Cornwallis had discovered the deception and pursued, or if Mawhood's column had been larger, the entire American army might have been destroyed between the two forces.

Instead, the march set up the Battle of Princeton, the final victory of the Ten Crucial Days that saved the Revolution. When Cornwallis discovered the empty camp at dawn, he reportedly exclaimed that the old fox had escaped. By the time he turned his army north in pursuit, Washington had already won at Princeton and was marching toward the safety of the hills around Morristown. The army that had seemed defeated two weeks earlier had crossed the Delaware, won at Trenton, outmaneuvered the British at the Assunpink, and taken Princeton — all without losing a major engagement.

The night march is one of those events that is easier to describe than to experience. Twelve miles through the dark, in freezing weather, over icy roads, with an enemy army behind and an uncertain fight ahead. The men who made that march did so on empty stomachs and bleeding feet, carrying muskets and ammunition in numb hands. They did not know they were making history. They knew only that the next step was cold, and the one after that was colder, and that somewhere ahead in the darkness was Princeton.`,
    },
    create: {
      id: 'story-princeton-night-march',
      townId: TOWN_ID,
      title: 'The Night March: Trenton to Princeton',
      slug: 'the-night-march',
      storyType: 'HISTORICAL_VOICE',
      verificationStatus: 'VERIFIED',
      textVersion: `The campfires burned on the south bank of Assunpink Creek, their glow visible to the British sentries across the water. General Cornwallis, settling into his headquarters in Trenton for the night, was confident that the American army was trapped. He would attack at dawn on January 3, 1777, and finish what the defeats at Long Island, White Plains, and Fort Washington had started. The war, he believed, was nearly over.

But behind those campfires, the American camp was emptying. Washington had convened a council of war as darkness fell on January 2 and proposed one of the boldest maneuvers of the Revolution: instead of fighting or retreating, the army would slip away from Trenton in the night and march north to attack the British garrison at Princeton. It was a plan that required perfect execution and absolute silence.

The army began to move around midnight. Approximately 5,000 soldiers formed columns and filed out of their positions, leaving a small detachment to tend the fires, clatter tools against the frozen ground, and make enough noise to convince the British pickets that the army was still digging in. Wagon wheels were wrapped in cloth to muffle their sound. Artillery pieces were dragged over frozen roads. The men marched in silence, their breath clouding in the bitter cold.

The route followed the Quaker Road, a secondary path east of the main Post Road that connected Trenton and Princeton. The road ran through farmland and forest, much of it unfamiliar to the soldiers. Local guides helped navigate the way in the darkness. The ground had frozen during the night — a stroke of fortune, as the previous day's thaw had turned the roads to mud that would have made marching nearly impossible. The hard frost provided a solid surface but also made the going treacherous, with soldiers slipping on ice and frozen ruts.

The march covered approximately 12 miles and took most of the night. Many soldiers had been awake for over 24 hours, having fought the Second Battle of Trenton at Assunpink Creek that afternoon. They had little food and less rest. Their shoes, when they had them, were falling apart. Some left bloody footprints on the icy road, a detail noted by multiple witnesses. The cold was severe enough that at least two soldiers froze to death during the march.

As dawn approached, the army neared Princeton. The first light revealed smoke rising from the chimneys of the town ahead. Mawhood's British column was spotted marching south on the Post Road, heading toward Trenton to reinforce Cornwallis. The collision between the two forces was unplanned by either side — Mawhood had not expected an American army at his back, and Washington had not expected to encounter a British force on the march.

The night march from Trenton to Princeton was a triumph of will, discipline, and deception. It demonstrated that the Continental Army, often dismissed as a rabble by British officers, was capable of executing a complex maneuver that would have challenged any professional force. The march also showed Washington's willingness to gamble — if Cornwallis had discovered the deception and pursued, or if Mawhood's column had been larger, the entire American army might have been destroyed between the two forces.

Instead, the march set up the Battle of Princeton, the final victory of the Ten Crucial Days that saved the Revolution. When Cornwallis discovered the empty camp at dawn, he reportedly exclaimed that the old fox had escaped. By the time he turned his army north in pursuit, Washington had already won at Princeton and was marching toward the safety of the hills around Morristown. The army that had seemed defeated two weeks earlier had crossed the Delaware, won at Trenton, outmaneuvered the British at the Assunpink, and taken Princeton — all without losing a major engagement.

The night march is one of those events that is easier to describe than to experience. Twelve miles through the dark, in freezing weather, over icy roads, with an enemy army behind and an uncertain fight ahead. The men who made that march did so on empty stomachs and bleeding feet, carrying muskets and ammunition in numb hands. They did not know they were making history. They knew only that the next step was cold, and the one after that was colder, and that somewhere ahead in the darkness was Princeton.`,
      tags: ['princeton', 'revolution', 'night-march', 'ten-crucial-days', 'washington'],
    },
  });

  await prisma.story.upsert({
    where: { id: 'story-princeton-annis-stockton-morven' },
    update: {
      slug: 'annis-stockton-and-morven',
      textVersion: `The British were coming, and Annis Boudinot Stockton had very little time. Her husband Richard had already fled Princeton — he would be captured within days and thrown into the Provost Jail in New York — and the sound of approaching armies was growing closer. Annis stood in the garden at Morven, the Stockton family estate on what is now Stockton Street, and made a decision that would preserve her family's legacy while the world around her collapsed.

She gathered the family's papers: legal documents, correspondence, financial records, and whatever else she could carry. She wrapped them and buried them in the garden. Then she gathered her children and left.

The act seems simple in the telling. But consider what it meant. Annis Stockton was a woman of education and literary accomplishment — a published poet whose work circulated in newspapers and private collections, who corresponded with George Washington himself. She was not a soldier or a politician. She was the wife of a signer of the Declaration of Independence, a man who had just made himself a target of the British Crown. And she was about to lose everything.

When the British occupied Princeton, they turned Morven into a headquarters. They destroyed the furniture, burned the woodwork for fuel, slaughtered the livestock, and systematically ruined the property. The formal gardens that Annis had cultivated — her personal artistic creation, the living expression of her literary and aesthetic sensibility — were trampled. The house that had been the center of Princeton's social life was gutted.

But the papers survived. Buried in the garden, they escaped the destruction that consumed everything else. When Annis returned after the battle of January 3, 1777, she found the house in ruins but the documents intact. Those papers preserved the legal records of the Stockton family and documents that would otherwise have been lost to history.

Annis Stockton's wartime experience did not end with the burial of the papers. Her husband Richard, released from prison after signing a loyalty oath, returned to Princeton broken in health and reputation. The oath was controversial — some saw it as a reasonable response to brutal treatment, while others viewed it as a betrayal of the cause he had signed the Declaration to support. Richard never recovered. He died of cancer in 1781, leaving Annis to manage the shattered estate, raise the children, and rebuild what could be rebuilt.

Through it all, Annis continued to write. Her poetry from the war years and afterward addressed themes of patriotism, loss, and the cost of independence. She wrote odes to Washington and elegies for fallen friends. Her work was not private — it circulated widely and was published in newspapers. She was one of the few women of her era whose literary voice was heard in public, and she used that voice to process the trauma of the war and to contribute to the emerging national narrative.

Morven itself survived and evolved. It remained in the Stockton family for generations, was donated to the State of New Jersey in 1954, and served as the governor's residence before becoming a museum. The gardens have been restored, though not to their colonial form. The house stands as a monument to the family that lived there, the woman who saved its papers, and the war that nearly destroyed it.

Annis Boudinot Stockton's story challenges the assumption that the Revolution was a men's affair. While Richard Stockton signed the Declaration, sat in Congress, and was imprisoned, Annis protected the family's legacy, managed the estate, raised the children, and gave literary voice to the cause. The history of Morven is as much her story as his — perhaps more so, because she was the one who stayed, who acted, and who endured.`,
    },
    create: {
      id: 'story-princeton-annis-stockton-morven',
      townId: TOWN_ID,
      title: 'Annis Stockton and the Papers of Morven',
      slug: 'annis-stockton-and-morven',
      storyType: 'HISTORICAL_VOICE',
      subjectPersonId: 'person-princeton-annis-boudinot-stockton',
      verificationStatus: 'VERIFIED',
      textVersion: `The British were coming, and Annis Boudinot Stockton had very little time. Her husband Richard had already fled Princeton — he would be captured within days and thrown into the Provost Jail in New York — and the sound of approaching armies was growing closer. Annis stood in the garden at Morven, the Stockton family estate on what is now Stockton Street, and made a decision that would preserve her family's legacy while the world around her collapsed.

She gathered the family's papers: legal documents, correspondence, financial records, and whatever else she could carry. She wrapped them and buried them in the garden. Then she gathered her children and left.

The act seems simple in the telling. But consider what it meant. Annis Stockton was a woman of education and literary accomplishment — a published poet whose work circulated in newspapers and private collections, who corresponded with George Washington himself. She was not a soldier or a politician. She was the wife of a signer of the Declaration of Independence, a man who had just made himself a target of the British Crown. And she was about to lose everything.

When the British occupied Princeton, they turned Morven into a headquarters. They destroyed the furniture, burned the woodwork for fuel, slaughtered the livestock, and systematically ruined the property. The formal gardens that Annis had cultivated — her personal artistic creation, the living expression of her literary and aesthetic sensibility — were trampled. The house that had been the center of Princeton's social life was gutted.

But the papers survived. Buried in the garden, they escaped the destruction that consumed everything else. When Annis returned after the battle of January 3, 1777, she found the house in ruins but the documents intact. Those papers preserved the legal records of the Stockton family and documents that would otherwise have been lost to history.

Annis Stockton's wartime experience did not end with the burial of the papers. Her husband Richard, released from prison after signing a loyalty oath, returned to Princeton broken in health and reputation. The oath was controversial — some saw it as a reasonable response to brutal treatment, while others viewed it as a betrayal of the cause he had signed the Declaration to support. Richard never recovered. He died of cancer in 1781, leaving Annis to manage the shattered estate, raise the children, and rebuild what could be rebuilt.

Through it all, Annis continued to write. Her poetry from the war years and afterward addressed themes of patriotism, loss, and the cost of independence. She wrote odes to Washington and elegies for fallen friends. Her work was not private — it circulated widely and was published in newspapers. She was one of the few women of her era whose literary voice was heard in public, and she used that voice to process the trauma of the war and to contribute to the emerging national narrative.

Morven itself survived and evolved. It remained in the Stockton family for generations, was donated to the State of New Jersey in 1954, and served as the governor's residence before becoming a museum. The gardens have been restored, though not to their colonial form. The house stands as a monument to the family that lived there, the woman who saved its papers, and the war that nearly destroyed it.

Annis Boudinot Stockton's story challenges the assumption that the Revolution was a men's affair. While Richard Stockton signed the Declaration, sat in Congress, and was imprisoned, Annis protected the family's legacy, managed the estate, raised the children, and gave literary voice to the cause. The history of Morven is as much her story as his — perhaps more so, because she was the one who stayed, who acted, and who endured.`,
      tags: ['princeton', 'revolution', 'annis-stockton', 'morven', 'women-revolution'],
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
    where: { id: 'lesson-princeton-ten-crucial-days' },
    update: {},
    create: {
      id: 'lesson-princeton-ten-crucial-days',
      townId: TOWN_ID,
      title: 'The Ten Crucial Days: From Despair to Victory at Princeton',
      slug: 'ten-crucial-days-princeton',
      gradeRange: '6-8',
      estimatedDuration: '2-3 class periods',
      summary: 'Students trace the Ten Crucial Days from Washington\'s crossing of the Delaware through the victories at Trenton and Princeton, analyzing how a series of bold decisions reversed the course of the Revolution. The lesson uses maps, primary source letters, and battlefield geography to help students understand the strategic and human dimensions of the campaign.',
      lessonData: {
        objectives: [
          'Sequence the key events of the Ten Crucial Days (December 25, 1776 - January 3, 1777)',
          'Analyze Washington\'s strategic decisions, including the night march from Trenton to Princeton',
          'Evaluate the significance of the Battle of Princeton in reviving the patriot cause',
          'Use primary source letters to understand the perspectives of participants',
        ],
        essentialQuestions: [
          'Why were the Ten Crucial Days a turning point in the American Revolution?',
          'What risks did Washington take, and why were those risks justified?',
          'How did the Battle of Princeton complete what the Battle of Trenton began?',
          'What role did geography and weather play in the campaign?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Show students a map of New Jersey in December 1776. Mark the positions of the British army (stretching from New York to Trenton) and Washington\'s army (across the Delaware in Pennsylvania). Ask: Based on this map, who appears to be winning the war? What options does Washington have?',
        },
        directInstruction: {
          duration: '25 minutes',
          content: [
            'Background: The collapse of American morale after the fall of New York and the retreat across New Jersey',
            'The crossing of the Delaware: planning, execution, weather conditions, and the attack on Trenton',
            'The Second Battle of Trenton: the standoff at Assunpink Creek and Cornwallis\'s overconfidence',
            'The night march: deception, the Quaker Road, and the approach to Princeton',
            'The Battle of Princeton: Mercer\'s stand, Washington\'s rally, the cannonade of Nassau Hall',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Map Exercise: Students trace Washington\'s movements on a map from the Delaware crossing through Trenton, along Assunpink Creek, up the Quaker Road, and to the Princeton battlefield. They annotate the map with key events and note the distances involved.',
            'Primary Source Analysis: Students read excerpts from letters by soldiers who participated in the night march, noting details about weather, physical conditions, and morale. They identify at least three specific hardships described in the sources.',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Write a 300-word essay answering the question: "Why was the night march from Trenton to Princeton one of the most important decisions of the American Revolution?" Your essay should reference at least two specific historical details and explain how the march led to the American victory at Princeton.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Class discussion: Thomas Paine wrote, "These are the times that try men\'s souls." How do the Ten Crucial Days illustrate both the trials and the determination of the American cause? Exit ticket: Name the single decision during the Ten Crucial Days that you think was most important, and explain why in two sentences.',
        },
        differentiation: {
          struggling: 'Provide a pre-filled timeline with key events and blank spaces for students to add details. Offer a simplified map with routes already marked and labeled.',
          advanced: 'Compare the American campaign at Trenton-Princeton with another military campaign where a weaker force defeated a stronger one through deception and maneuver. Write a paragraph analyzing the common elements.',
          ell: 'Provide a visual glossary of military terms (brigade, column, retreat, advance guard, cannonade). Use annotated images of the battlefield and maps with bilingual labels where possible.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.1', 'RH.6-8.2', 'RH.6-8.7', 'WHST.6-8.2'],
        c3Framework: ['D2.His.1.6-8', 'D2.His.3.6-8', 'D2.His.5.6-8', 'D2.Geo.4.6-8'],
        note: 'Designed for grades 6-8. Map skills and primary source analysis are central to the lesson.',
      },
      displayOrder: 1,
      published: true,
    },
  });

  await prisma.lessonPlan.upsert({
    where: { id: 'lesson-princeton-nassau-hall-nation' },
    update: {},
    create: {
      id: 'lesson-princeton-nassau-hall-nation',
      townId: TOWN_ID,
      title: 'Nassau Hall and the Birth of a Nation: Princeton as Capital',
      slug: 'nassau-hall-birth-of-nation',
      gradeRange: '9-12',
      estimatedDuration: '2 class periods',
      summary: 'Students examine Princeton\'s role as the capital of the United States in 1783, exploring why Congress fled Philadelphia, what it meant for a college building to house the national government, and how the events at Nassau Hall — from battle damage to congressional debates — reflect the fragility and resilience of the new American republic.',
      lessonData: {
        objectives: [
          'Analyze the weaknesses of the national government under the Articles of Confederation',
          'Evaluate why the Philadelphia mutiny of 1783 forced Congress to relocate',
          'Explain the significance of Princeton as the capital and Nassau Hall as the seat of government',
          'Connect the events at Nassau Hall (battle, occupation, Congress) to the broader arc of the Revolution',
        ],
        essentialQuestions: [
          'What does it tell us about the new American government that it could be driven from its capital by its own soldiers?',
          'How did Princeton\'s dual role as college town and temporary capital reflect the relationship between education and governance in the new republic?',
          'What was the significance of receiving the Treaty of Paris at Nassau Hall?',
          'How did the weaknesses exposed in 1783 lead to the Constitutional Convention in 1787?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Present students with two images of Nassau Hall: one showing battle damage from the 1777 cannonade, and one showing it as the seat of Congress in 1783. Ask: What do these two uses of the same building tell us about the American Revolution?',
        },
        directInstruction: {
          duration: '25 minutes',
          content: [
            'The Articles of Confederation: structure, powers, and limitations of the national government',
            'The Philadelphia mutiny of June 1783: unpaid soldiers, state inaction, and congressional flight',
            'Congress at Princeton: the logistics of governing from a college town',
            'Key events at Princeton: Washington\'s reception, the Dutch minister, the Treaty of Paris announcement',
            'The road from Princeton to the Constitution: how the weaknesses of 1783 drove the reforms of 1787',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Document Analysis: Students examine excerpts from congressional records during the Princeton session, including the resolution thanking Washington and the proclamation of the Treaty of Paris. They identify the tone, language, and concerns expressed.',
            'Debate: Students take roles as members of Congress debating whether to return to Philadelphia or seek a permanent capital. They must cite specific weaknesses of the current system and propose solutions.',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Write a 400-word analytical essay answering one of the essential questions. Your essay must reference at least three specific historical events or documents and must connect the events at Princeton to the broader development of American governance.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Socratic seminar: Nassau Hall was shelled in 1777 and housed Congress in 1783. How does this building\'s history serve as a metaphor for the American republic itself — damaged by war, rebuilt, and put to new purposes? Exit ticket: Identify one weakness of the Articles of Confederation that is illustrated by the events at Princeton in 1783.',
        },
        differentiation: {
          struggling: 'Provide a structured outline for the essay with topic sentences and spaces for evidence. Simplify primary source excerpts and provide definitions of governmental terms.',
          advanced: 'Research the Newburgh Conspiracy of 1783 and write a comparison between the officers\' near-mutiny at Newburgh and the soldiers\' mutiny in Philadelphia. Analyze what both events reveal about civil-military relations in the early republic.',
          ell: 'Provide a glossary of key terms (Articles of Confederation, mutiny, ratification, treaty, proclamation). Allow the debate to be conducted in small groups with note cards rather than formal speeches.',
        },
      },
      standards: {
        commonCore: ['RH.9-10.1', 'RH.9-10.2', 'RH.9-10.6', 'WHST.9-10.1', 'WHST.9-10.9'],
        c3Framework: ['D2.His.1.9-12', 'D2.His.4.9-12', 'D2.Civ.1.9-12', 'D2.Civ.3.9-12'],
        note: 'Designed for grades 9-12. Requires prior understanding of the Articles of Confederation.',
      },
      displayOrder: 2,
      published: true,
    },
  });

  await prisma.lessonPlan.upsert({
    where: { id: 'lesson-princeton-cost-of-revolution' },
    update: {},
    create: {
      id: 'lesson-princeton-cost-of-revolution',
      townId: TOWN_ID,
      title: 'The Cost of Revolution: Princeton Families at War',
      slug: 'cost-of-revolution-princeton',
      gradeRange: '7-10',
      estimatedDuration: '2 class periods',
      summary: 'Students examine the personal costs of the Revolution through the experiences of Princeton families, including the Stocktons, the Witherspoons, and ordinary farmers like the Oldens. The lesson explores how war affected civilians, women, property, and community bonds, using Princeton as a case study for the broader civilian experience of the Revolution.',
      lessonData: {
        objectives: [
          'Analyze the impact of the Revolution on civilian life in Princeton',
          'Compare the experiences of different social groups during the British occupation',
          'Evaluate the role of women, particularly Annis Boudinot Stockton, during the war',
          'Construct an evidence-based argument about the personal costs of revolution',
        ],
        essentialQuestions: [
          'What did the Revolution cost the people of Princeton beyond lives lost on the battlefield?',
          'How did the war affect women, families, and property owners differently?',
          'Was the cost of independence worth the sacrifice? How might different Princeton residents have answered this question?',
          'How do we remember civilian contributions to the Revolution?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Read a brief description of Morven before and after the British occupation: the elegant house, the gardens, the library — and then the destruction. Ask students to write a response: What would it feel like to return to your home and find it destroyed by soldiers? What would you do next?',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'Princeton before the war: the college, the estates, the farming community',
            'The British occupation: damage to Nassau Hall, Morven, and private homes',
            'Richard Stockton\'s capture and controversial loyalty oath',
            'Annis Boudinot Stockton\'s actions: burying papers, managing the estate, writing poetry',
            'Ordinary civilians: the Olden family, the Clarke family, and the cost of having a battlefield on your farm',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Character Profiles: Students work in groups, each assigned a Princeton resident (Richard Stockton, Annis Stockton, John Witherspoon, Thomas Olden, Thomas Clarke). Each group creates a profile listing what that person lost, what they gained, and how the war changed their life.',
            'Cost-Benefit Analysis: Students create a T-chart listing the costs and benefits of the Revolution for Princeton as a community. They must include economic, social, cultural, and personal factors.',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Choose one Princeton resident from the lesson and write a 300-word letter from their perspective, dated January 1778 — one year after the Battle of Princeton. Describe what you have lost, what you hope for, and whether you believe the cause of independence is worth the price. Use at least three specific historical details.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Gallery walk: Students post their letters and read each other\'s work. Class discussion: Whose perspective surprised you? Whose losses were greatest? Exit ticket: Name one way the Revolution affected Princeton civilians that you did not expect before this lesson.',
        },
        differentiation: {
          struggling: 'Provide character profile templates with guiding questions. Offer a word bank of historical terms and events for the letter-writing exercise.',
          advanced: 'Research the post-war recovery of the College of New Jersey under Witherspoon. Write a one-page analysis of how educational institutions recover from wartime destruction, using Princeton as a case study.',
          ell: 'Provide visual aids showing Morven, Nassau Hall, and the battlefield before and after the war. Allow the letter to be written as a series of diary entries rather than a single letter. Provide key vocabulary with simple definitions.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.1', 'RH.6-8.6', 'WHST.6-8.1', 'WHST.6-8.4'],
        c3Framework: ['D2.His.1.6-8', 'D2.His.4.6-8', 'D2.His.5.6-8', 'D2.Eco.1.6-8'],
        note: 'Adaptable for grades 7-10. The letter-writing exercise can be adjusted for complexity.',
      },
      displayOrder: 3,
      published: true,
    },
  });

  await prisma.lessonPlan.upsert({
    where: { id: 'lesson-princeton-education-and-revolution' },
    update: {},
    create: {
      id: 'lesson-princeton-education-and-revolution',
      townId: TOWN_ID,
      title: 'Education and Revolution: How Princeton Shaped the Founders',
      slug: 'education-and-revolution-princeton',
      gradeRange: '9-12',
      estimatedDuration: '2-3 class periods',
      summary: 'Students investigate the connection between education and revolution by examining how the College of New Jersey under John Witherspoon produced an extraordinary generation of political leaders, including James Madison. The lesson explores the Scottish Common Sense philosophy, the role of colleges in colonial political life, and how ideas taught in Princeton classrooms shaped the Constitution and the new republic.',
      lessonData: {
        objectives: [
          'Explain the intellectual foundations of the American Revolution, particularly Scottish Common Sense philosophy',
          'Analyze John Witherspoon\'s influence on James Madison and other Princeton graduates',
          'Evaluate the role of colonial colleges in producing revolutionary leadership',
          'Connect ideas taught at Princeton to specific provisions of the Constitution',
        ],
        essentialQuestions: [
          'How did what students learned at Princeton shape the kind of government they created?',
          'Why did so many leaders of the new republic come from one college?',
          'What is the relationship between education and political revolution?',
          'Can we trace specific ideas from Witherspoon\'s classroom to Madison\'s Constitution?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Present the list of Witherspoon\'s students: 1 president, 1 vice president, 6 Continental Congress members, 21 senators, 29 representatives, 12 governors, 3 Supreme Court justices. Ask: What might explain why one teacher produced so many leaders? What was he teaching them?',
        },
        directInstruction: {
          duration: '30 minutes',
          content: [
            'The College of New Jersey before Witherspoon: its founding, early presidents, and Presbyterian identity',
            'Witherspoon\'s arrival in 1768: curricular reforms, the Scottish Common Sense philosophy, and the emphasis on practical ethics',
            'The college as a political incubator: debates, the American Whig Society, cross-colonial friendships',
            'James Madison at Princeton: his two-year curriculum, his extra term of study, and the ideas he carried to Philadelphia',
            'From classroom to Constitution: tracing concepts of checks and balances, factions, and religious liberty from Witherspoon to Madison',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Idea Mapping: Students create a visual map connecting Witherspoon\'s key teachings (reason, moral sense, balance of power, religious liberty) to specific features of the Constitution (separation of powers, Bill of Rights, Federalist No. 10 on factions).',
            'Primary Source Analysis: Students read excerpts from Madison\'s notes on Witherspoon\'s lectures alongside relevant sections of the Federalist Papers, identifying connections between the educational content and the political arguments.',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Write a 400-word essay answering the question: "How did John Witherspoon\'s teaching at Princeton contribute to the creation of the United States Constitution?" Your essay must reference at least two specific philosophical ideas and connect them to specific provisions or arguments in the founding documents.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Class discussion: If Witherspoon had not come to Princeton, would the Constitution have been different? Is it possible to overstate the influence of one teacher? Exit ticket: Name one idea from Witherspoon\'s classroom that you can identify in the American system of government today.',
        },
        differentiation: {
          struggling: 'Provide a graphic organizer with Witherspoon\'s ideas on one side and Constitutional features on the other, with arrows to draw connections. Simplify primary source excerpts.',
          advanced: 'Compare Witherspoon\'s educational philosophy with that of another colonial college (Harvard, Yale, William & Mary). Write an analysis of how different educational traditions produced different kinds of political leaders.',
          ell: 'Provide a glossary of philosophical terms (common sense, moral sense, natural law, faction, separation of powers) with simple definitions and examples. Allow the idea map to be completed with images and key words rather than full sentences.',
        },
      },
      standards: {
        commonCore: ['RH.9-10.1', 'RH.9-10.2', 'RH.9-10.6', 'RH.9-10.9', 'WHST.9-10.1'],
        c3Framework: ['D2.His.1.9-12', 'D2.His.4.9-12', 'D2.His.14.9-12', 'D2.Civ.1.9-12'],
        note: 'Designed for grades 9-12. Requires some prior knowledge of the Constitution and the founding debates.',
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
  console.log('Seeding Princeton, NJ content...');

  await seedPeople();
  await seedPlaces();
  await seedEvents();
  await seedEventPeople();
  await seedStories();
  await seedLessons();

  console.log('Princeton content seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
