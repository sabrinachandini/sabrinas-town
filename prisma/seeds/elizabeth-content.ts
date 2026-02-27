import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const TOWN_ID = 'us-nj-elizabeth';

// =============================================================================
// PEOPLE
// =============================================================================

async function seedPeople() {
  console.log('  Seeding people...');

  await prisma.person.upsert({
    where: { id: 'person-elizabeth-abraham-clark' },
    update: {
      bioLong: `Abraham Clark was born on February 15, 1726, in Elizabethtown (present-day Elizabeth), New Jersey. His parents, Thomas Clark and Hannah Winans Clark, were farmers of modest means, and Abraham received little formal education. He was largely self-taught, developing a knowledge of surveying and law through independent study. He became a skilled surveyor and was frequently sought out by his poorer neighbors for legal advice on land titles, debts, and property disputes. Because he offered this counsel without charge, he earned the nickname "the Poor Man's Counselor," a reputation that reflected both his practical abilities and his identification with ordinary citizens rather than the colonial gentry.

Clark entered public life through local and county government, serving as sheriff of Essex County and as a member of the New Jersey colonial legislature. He was a persistent critic of what he viewed as the concentration of power among wealthy landholders and royal appointees, and he advocated for reforms that would expand access to the courts and reduce the costs of legal proceedings for small farmers. His political outlook was shaped by the economic conditions of Elizabethtown, where land disputes between settlers holding grants under the Elizabethtown Associates and proprietors claiming title under the East Jersey Board had been a source of conflict for generations.

In June 1776, the New Jersey Provincial Congress selected Clark as one of the colony's five delegates to the Continental Congress in Philadelphia. Clark arrived in time to vote for the resolution of independence on July 2 and to sign the Declaration of Independence on August 2, 1776. He served in Congress intermittently through 1778 and again from 1786 to 1788. During the war, he was a vocal advocate for the rights of common soldiers and pressed Congress to address the chronic problems of pay, supply, and prisoner exchange. Two of his own sons served as Continental officers and were captured by the British; they were held on the notorious prison ship Jersey in New York Harbor, where conditions were deliberately brutal. Clark appealed to Congress for their exchange, but their captivity lasted months.

After the war, Clark served in the Annapolis Convention of 1786 and was selected as a delegate to the Constitutional Convention in 1787, though he did not attend due to illness. He served in the first and second United States Congresses as a representative from New Jersey (1791-1794). Clark was a supporter of the new Constitution but remained wary of centralized power and sympathetic to the agrarian interests he had represented throughout his career. He died on September 15, 1794, at his home in Elizabethtown at the age of 68.

WHY HE MATTERS TO ELIZABETH

Abraham Clark is Elizabeth's signer of the Declaration of Independence, the town's direct link to the founding act of American nationhood. But his significance to Elizabeth goes deeper than that signature. Clark embodied a strand of Revolutionary thought rooted not in elite philosophy but in the practical grievances of ordinary people — farmers who could not get a fair hearing in court, veterans who were not paid for their service, families whose land titles were entangled in century-old disputes. He was born in Elizabethtown, lived his entire life there, and died there. His career, from local surveyor to congressman, traced an arc that was inseparable from the community that produced him. The Abraham Clark House, which stood in what is now the Peterstown section of Elizabeth, marked the site where one of the signers lived the daily reality of the independence he helped declare.

- 1726: Born February 15 in Elizabethtown, New Jersey
- 1776: Signed the Declaration of Independence as a delegate from New Jersey
- 1776-1778: Served in the Continental Congress; advocated for soldiers' rights and prisoner exchanges
- 1786: Attended the Annapolis Convention
- 1791-1794: Served in the U.S. House of Representatives
- 1794: Died September 15 in Elizabethtown at age 68

SOURCES
- Gerlach, Larry R. "Prologue to Independence: New Jersey in the Coming of the American Revolution." Rutgers University Press, 1976.
- Hatfield, Edwin F. "History of Elizabeth, New Jersey." Carlton and Lanahan, 1868.
- Maier, Pauline. "American Scripture: Making the Declaration of Independence." Alfred A. Knopf, 1997.`,
    },
    create: {
      id: 'person-elizabeth-abraham-clark',
      name: 'Abraham Clark',
      roles: ['Signer of the Declaration of Independence', 'Surveyor', 'Legislator', 'Congressman'],
      bioShort: 'Elizabethtown-born signer of the Declaration of Independence (1726-1794) known as "the Poor Man\'s Counselor" for his free legal advice to ordinary citizens, who served in the Continental Congress and the first U.S. Congress.',
      bioLong: `Abraham Clark was born on February 15, 1726, in Elizabethtown (present-day Elizabeth), New Jersey. His parents, Thomas Clark and Hannah Winans Clark, were farmers of modest means, and Abraham received little formal education. He was largely self-taught, developing a knowledge of surveying and law through independent study. He became a skilled surveyor and was frequently sought out by his poorer neighbors for legal advice on land titles, debts, and property disputes. Because he offered this counsel without charge, he earned the nickname "the Poor Man's Counselor," a reputation that reflected both his practical abilities and his identification with ordinary citizens rather than the colonial gentry.

Clark entered public life through local and county government, serving as sheriff of Essex County and as a member of the New Jersey colonial legislature. He was a persistent critic of what he viewed as the concentration of power among wealthy landholders and royal appointees, and he advocated for reforms that would expand access to the courts and reduce the costs of legal proceedings for small farmers. His political outlook was shaped by the economic conditions of Elizabethtown, where land disputes between settlers holding grants under the Elizabethtown Associates and proprietors claiming title under the East Jersey Board had been a source of conflict for generations.

In June 1776, the New Jersey Provincial Congress selected Clark as one of the colony's five delegates to the Continental Congress in Philadelphia. Clark arrived in time to vote for the resolution of independence on July 2 and to sign the Declaration of Independence on August 2, 1776. He served in Congress intermittently through 1778 and again from 1786 to 1788. During the war, he was a vocal advocate for the rights of common soldiers and pressed Congress to address the chronic problems of pay, supply, and prisoner exchange. Two of his own sons served as Continental officers and were captured by the British; they were held on the notorious prison ship Jersey in New York Harbor, where conditions were deliberately brutal. Clark appealed to Congress for their exchange, but their captivity lasted months.

After the war, Clark served in the Annapolis Convention of 1786 and was selected as a delegate to the Constitutional Convention in 1787, though he did not attend due to illness. He served in the first and second United States Congresses as a representative from New Jersey (1791-1794). Clark was a supporter of the new Constitution but remained wary of centralized power and sympathetic to the agrarian interests he had represented throughout his career. He died on September 15, 1794, at his home in Elizabethtown at the age of 68.

WHY HE MATTERS TO ELIZABETH

Abraham Clark is Elizabeth's signer of the Declaration of Independence, the town's direct link to the founding act of American nationhood. But his significance to Elizabeth goes deeper than that signature. Clark embodied a strand of Revolutionary thought rooted not in elite philosophy but in the practical grievances of ordinary people — farmers who could not get a fair hearing in court, veterans who were not paid for their service, families whose land titles were entangled in century-old disputes. He was born in Elizabethtown, lived his entire life there, and died there. His career, from local surveyor to congressman, traced an arc that was inseparable from the community that produced him. The Abraham Clark House, which stood in what is now the Peterstown section of Elizabeth, marked the site where one of the signers lived the daily reality of the independence he helped declare.

- 1726: Born February 15 in Elizabethtown, New Jersey
- 1776: Signed the Declaration of Independence as a delegate from New Jersey
- 1776-1778: Served in the Continental Congress; advocated for soldiers' rights and prisoner exchanges
- 1786: Attended the Annapolis Convention
- 1791-1794: Served in the U.S. House of Representatives
- 1794: Died September 15 in Elizabethtown at age 68

SOURCES
- Gerlach, Larry R. "Prologue to Independence: New Jersey in the Coming of the American Revolution." Rutgers University Press, 1976.
- Hatfield, Edwin F. "History of Elizabeth, New Jersey." Carlton and Lanahan, 1868.
- Maier, Pauline. "American Scripture: Making the Declaration of Independence." Alfred A. Knopf, 1997.`,
      birthYear: 1726,
      deathYear: 1794,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-elizabeth-elias-boudinot' },
    update: {
      bioLong: `Elias Boudinot was born on May 2, 1740, in Philadelphia, Pennsylvania, into a prosperous family of Huguenot descent. His father, Elias Boudinot Sr., was a merchant and silversmith who moved the family to Elizabethtown, New Jersey, where the younger Boudinot grew up and received his education. He studied law under Richard Stockton of Princeton (himself a future signer of the Declaration of Independence) and was admitted to the New Jersey bar in 1760. Boudinot established a successful legal practice in Elizabethtown and married Hannah Stockton, Richard Stockton's sister, deepening his connections to one of New Jersey's most prominent patriot families.

Boudinot's wealth and social standing made him a natural leader in Elizabethtown's resistance to British authority. He served on the Essex County Committee of Correspondence and the New Jersey Provincial Congress. In 1777, George Washington appointed Boudinot as Commissary General of Prisoners, a role that placed him in charge of negotiating prisoner exchanges with the British and overseeing the welfare of American prisoners of war. This was grueling and politically sensitive work. American prisoners held in New York suffered terribly on prison ships and in makeshift jails, and Boudinot spent his own money to purchase food, clothing, and medicine for captured soldiers when Congress failed to provide adequate funding.

Boudinot also played a significant but less publicly recognized role in intelligence gathering. His position as commissary general gave him regular contact with British officials during prisoner negotiations, and he used these channels to gather military intelligence. He maintained a network of informants in New York and the surrounding areas, passing information to Washington's headquarters. The intelligence networks that operated out of Elizabethtown — facilitated by the town's proximity to British-held Staten Island across the Arthur Kill — were among the most productive sources of information available to the Continental command.

In 1782, Boudinot was elected president of the Continental Congress, the highest executive office in the national government under the Articles of Confederation. He served in this role from November 1782 to November 1783, presiding over the Congress that ratified the Treaty of Paris and officially ended the Revolutionary War. After the Constitution was ratified, Boudinot served three terms in the U.S. House of Representatives (1789-1795) and was appointed by President Washington as Director of the United States Mint, a position he held from 1795 to 1805. He spent his later years engaged in philanthropic work, supporting the American Bible Society (of which he served as the first president) and institutions for the education of Native Americans. He died on October 24, 1821, in Burlington, New Jersey.

WHY HE MATTERS TO ELIZABETH

Elias Boudinot was Elizabethtown's most prominent citizen during the Revolution, and his home, Boxwood Hall, was a center of political and social life in the town. His role as Commissary General of Prisoners brought the suffering of the war directly to Elizabethtown, as he managed prisoner exchanges and intelligence operations from his base in the town. His presidency of the Continental Congress made Elizabethtown, for a time, the home of the highest-ranking civilian official in the United States. Boxwood Hall, which still stands on East Jersey Street in Elizabeth, is a tangible link to Boudinot's career and to the networks of power, information, and philanthropy that connected Elizabethtown to the wider world of the Revolution and the early Republic.

- 1740: Born May 2 in Philadelphia, Pennsylvania
- 1760: Admitted to the New Jersey bar; established legal practice in Elizabethtown
- 1777: Appointed Commissary General of Prisoners by George Washington
- 1782-1783: Served as President of the Continental Congress; presided over ratification of the Treaty of Paris
- 1789-1795: Served in the U.S. House of Representatives
- 1795-1805: Served as Director of the United States Mint
- 1821: Died October 24 in Burlington, New Jersey, at age 81

SOURCES
- Boyd, George Adams. "Elias Boudinot: Patriot and Statesman, 1740-1821." Princeton University Press, 1952.
- Hatfield, Edwin F. "History of Elizabeth, New Jersey." Carlton and Lanahan, 1868.
- Nagy, John A. "Invisible Ink: Spycraft of the American Revolution." Westholme Publishing, 2009.`,
    },
    create: {
      id: 'person-elizabeth-elias-boudinot',
      name: 'Elias Boudinot',
      roles: ['President of the Continental Congress', 'Commissary General of Prisoners', 'Congressman', 'Director of the U.S. Mint'],
      bioShort: 'Elizabethtown lawyer and statesman (1740-1821) who served as Commissary General of Prisoners, President of the Continental Congress during the ratification of the Treaty of Paris, and later Director of the United States Mint.',
      bioLong: `Elias Boudinot was born on May 2, 1740, in Philadelphia, Pennsylvania, into a prosperous family of Huguenot descent. His father, Elias Boudinot Sr., was a merchant and silversmith who moved the family to Elizabethtown, New Jersey, where the younger Boudinot grew up and received his education. He studied law under Richard Stockton of Princeton (himself a future signer of the Declaration of Independence) and was admitted to the New Jersey bar in 1760. Boudinot established a successful legal practice in Elizabethtown and married Hannah Stockton, Richard Stockton's sister, deepening his connections to one of New Jersey's most prominent patriot families.

Boudinot's wealth and social standing made him a natural leader in Elizabethtown's resistance to British authority. He served on the Essex County Committee of Correspondence and the New Jersey Provincial Congress. In 1777, George Washington appointed Boudinot as Commissary General of Prisoners, a role that placed him in charge of negotiating prisoner exchanges with the British and overseeing the welfare of American prisoners of war. This was grueling and politically sensitive work. American prisoners held in New York suffered terribly on prison ships and in makeshift jails, and Boudinot spent his own money to purchase food, clothing, and medicine for captured soldiers when Congress failed to provide adequate funding.

Boudinot also played a significant but less publicly recognized role in intelligence gathering. His position as commissary general gave him regular contact with British officials during prisoner negotiations, and he used these channels to gather military intelligence. He maintained a network of informants in New York and the surrounding areas, passing information to Washington's headquarters. The intelligence networks that operated out of Elizabethtown — facilitated by the town's proximity to British-held Staten Island across the Arthur Kill — were among the most productive sources of information available to the Continental command.

In 1782, Boudinot was elected president of the Continental Congress, the highest executive office in the national government under the Articles of Confederation. He served in this role from November 1782 to November 1783, presiding over the Congress that ratified the Treaty of Paris and officially ended the Revolutionary War. After the Constitution was ratified, Boudinot served three terms in the U.S. House of Representatives (1789-1795) and was appointed by President Washington as Director of the United States Mint, a position he held from 1795 to 1805. He spent his later years engaged in philanthropic work, supporting the American Bible Society (of which he served as the first president) and institutions for the education of Native Americans. He died on October 24, 1821, in Burlington, New Jersey.

WHY HE MATTERS TO ELIZABETH

Elias Boudinot was Elizabethtown's most prominent citizen during the Revolution, and his home, Boxwood Hall, was a center of political and social life in the town. His role as Commissary General of Prisoners brought the suffering of the war directly to Elizabethtown, as he managed prisoner exchanges and intelligence operations from his base in the town. His presidency of the Continental Congress made Elizabethtown, for a time, the home of the highest-ranking civilian official in the United States. Boxwood Hall, which still stands on East Jersey Street in Elizabeth, is a tangible link to Boudinot's career and to the networks of power, information, and philanthropy that connected Elizabethtown to the wider world of the Revolution and the early Republic.

- 1740: Born May 2 in Philadelphia, Pennsylvania
- 1760: Admitted to the New Jersey bar; established legal practice in Elizabethtown
- 1777: Appointed Commissary General of Prisoners by George Washington
- 1782-1783: Served as President of the Continental Congress; presided over ratification of the Treaty of Paris
- 1789-1795: Served in the U.S. House of Representatives
- 1795-1805: Served as Director of the United States Mint
- 1821: Died October 24 in Burlington, New Jersey, at age 81

SOURCES
- Boyd, George Adams. "Elias Boudinot: Patriot and Statesman, 1740-1821." Princeton University Press, 1952.
- Hatfield, Edwin F. "History of Elizabeth, New Jersey." Carlton and Lanahan, 1868.
- Nagy, John A. "Invisible Ink: Spycraft of the American Revolution." Westholme Publishing, 2009.`,
      birthYear: 1740,
      deathYear: 1821,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-elizabeth-james-caldwell' },
    update: {
      bioLong: `James Caldwell was born in 1734 in Charlotte County, Virginia. He attended the College of New Jersey (later Princeton University) and was ordained as a Presbyterian minister. In 1762, he was called to serve as pastor of the First Presbyterian Church of Elizabethtown, one of the most prominent congregations in New Jersey. Caldwell quickly became a central figure in the town's social and political life. His sermons drew large congregations, and his parsonage became a gathering place for the patriot leadership of Essex County.

As tensions with Britain escalated in the 1770s, Caldwell used his pulpit to advocate for colonial rights and resistance to Parliamentary taxation. He served as a member of the local Committee of Safety and used his influence to organize support for the Continental cause among the communities of northeastern New Jersey. After fighting broke out in 1775, Caldwell took on an increasingly active military role. He served as a chaplain to Colonel Elias Dayton's 3rd New Jersey Regiment and accompanied the troops on campaigns. His energy and combative temperament earned him the nickname "the Fighting Parson," though the name reflected his fiery advocacy and organizational work rather than personal combat.

Caldwell's activism made him a marked man. British and Loyalist forces specifically targeted patriot leaders in the Elizabethtown area, and Caldwell's family was directly affected. In June 1780, during a British raid on the village of Connecticut Farms (now Union), New Jersey — an action connected to the broader British advance toward Morristown — a British soldier shot and killed Caldwell's wife, Hannah, in the parsonage where she had taken refuge with her children. The circumstances of her death became one of the most inflammatory incidents of the war in New Jersey, galvanizing patriot sentiment across the region.

Caldwell himself was killed on November 24, 1781, at Elizabethtown Point by a Continental sentry named James Morgan. The circumstances remain disputed. Morgan claimed Caldwell refused to submit his belongings for inspection; others suspected Morgan had been bribed by Loyalist agents to assassinate the minister. Morgan was tried, convicted of murder, and hanged in January 1782. Caldwell's death at the hands of an American soldier — whether by accident, insubordination, or conspiracy — added a final layer of tragedy to a life that had been consumed by the war.

WHY HE MATTERS TO ELIZABETH

James Caldwell was the spiritual and political heart of Elizabethtown's patriot community. His First Presbyterian Church was not merely a house of worship but the institutional center of the town's resistance to British authority. His murder, following so closely on the murder of his wife, made the Caldwell family a symbol of the cost the war imposed on the civilians of Elizabethtown. The parsonage where Hannah was killed, the church where James preached, and the point where he was shot all became sites of collective memory for the town. Caldwell's story illustrates how thoroughly the war penetrated every aspect of life in Elizabethtown — from the pulpit to the household to the waterfront.

- 1734: Born in Charlotte County, Virginia
- 1762: Called as pastor of the First Presbyterian Church of Elizabethtown
- 1776: Served as chaplain to the 3rd New Jersey Regiment under Colonel Elias Dayton
- 1780: His wife Hannah was killed by a British soldier during the raid on Connecticut Farms, June 7
- 1781: Shot and killed by Continental sentry James Morgan at Elizabethtown Point, November 24

SOURCES
- Stryker, William S. "The Battle of Monmouth." Princeton University Press, 1927.
- Hatfield, Edwin F. "History of Elizabeth, New Jersey." Carlton and Lanahan, 1868.
- Thayer, Theodore. "Colonial and Revolutionary Morris County." Morris County Heritage Commission, 1975.
- Fleming, Thomas. "New Jersey: A History." W.W. Norton, 1984.`,
    },
    create: {
      id: 'person-elizabeth-james-caldwell',
      name: 'James Caldwell',
      roles: ['Presbyterian Minister', 'Military Chaplain', 'Patriot Leader'],
      bioShort: 'Presbyterian minister of Elizabethtown (1734-1781) known as "the Fighting Parson" for his fiery patriot advocacy, who served as chaplain to the 3rd New Jersey Regiment and was killed by a Continental sentry under disputed circumstances.',
      bioLong: `James Caldwell was born in 1734 in Charlotte County, Virginia. He attended the College of New Jersey (later Princeton University) and was ordained as a Presbyterian minister. In 1762, he was called to serve as pastor of the First Presbyterian Church of Elizabethtown, one of the most prominent congregations in New Jersey. Caldwell quickly became a central figure in the town's social and political life. His sermons drew large congregations, and his parsonage became a gathering place for the patriot leadership of Essex County.

As tensions with Britain escalated in the 1770s, Caldwell used his pulpit to advocate for colonial rights and resistance to Parliamentary taxation. He served as a member of the local Committee of Safety and used his influence to organize support for the Continental cause among the communities of northeastern New Jersey. After fighting broke out in 1775, Caldwell took on an increasingly active military role. He served as a chaplain to Colonel Elias Dayton's 3rd New Jersey Regiment and accompanied the troops on campaigns. His energy and combative temperament earned him the nickname "the Fighting Parson," though the name reflected his fiery advocacy and organizational work rather than personal combat.

Caldwell's activism made him a marked man. British and Loyalist forces specifically targeted patriot leaders in the Elizabethtown area, and Caldwell's family was directly affected. In June 1780, during a British raid on the village of Connecticut Farms (now Union), New Jersey — an action connected to the broader British advance toward Morristown — a British soldier shot and killed Caldwell's wife, Hannah, in the parsonage where she had taken refuge with her children. The circumstances of her death became one of the most inflammatory incidents of the war in New Jersey, galvanizing patriot sentiment across the region.

Caldwell himself was killed on November 24, 1781, at Elizabethtown Point by a Continental sentry named James Morgan. The circumstances remain disputed. Morgan claimed Caldwell refused to submit his belongings for inspection; others suspected Morgan had been bribed by Loyalist agents to assassinate the minister. Morgan was tried, convicted of murder, and hanged in January 1782. Caldwell's death at the hands of an American soldier — whether by accident, insubordination, or conspiracy — added a final layer of tragedy to a life that had been consumed by the war.

WHY HE MATTERS TO ELIZABETH

James Caldwell was the spiritual and political heart of Elizabethtown's patriot community. His First Presbyterian Church was not merely a house of worship but the institutional center of the town's resistance to British authority. His murder, following so closely on the murder of his wife, made the Caldwell family a symbol of the cost the war imposed on the civilians of Elizabethtown. The parsonage where Hannah was killed, the church where James preached, and the point where he was shot all became sites of collective memory for the town. Caldwell's story illustrates how thoroughly the war penetrated every aspect of life in Elizabethtown — from the pulpit to the household to the waterfront.

- 1734: Born in Charlotte County, Virginia
- 1762: Called as pastor of the First Presbyterian Church of Elizabethtown
- 1776: Served as chaplain to the 3rd New Jersey Regiment under Colonel Elias Dayton
- 1780: His wife Hannah was killed by a British soldier during the raid on Connecticut Farms, June 7
- 1781: Shot and killed by Continental sentry James Morgan at Elizabethtown Point, November 24

SOURCES
- Stryker, William S. "The Battle of Monmouth." Princeton University Press, 1927.
- Hatfield, Edwin F. "History of Elizabeth, New Jersey." Carlton and Lanahan, 1868.
- Thayer, Theodore. "Colonial and Revolutionary Morris County." Morris County Heritage Commission, 1975.
- Fleming, Thomas. "New Jersey: A History." W.W. Norton, 1984.`,
      birthYear: 1734,
      deathYear: 1781,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-elizabeth-hannah-caldwell' },
    update: {
      bioLong: `Hannah Ogden Caldwell was born in 1737 in Newark, New Jersey, the daughter of a prominent local family. She married Reverend James Caldwell in 1763, shortly after he assumed the pastorate of the First Presbyterian Church of Elizabethtown. The couple settled in the parsonage near the church and had nine children. Hannah Caldwell's life was centered on her family, her congregation, and the community of Elizabethtown, where she served as a minister's wife in a society that placed heavy social and charitable responsibilities on women in that role.

As the war engulfed northeastern New Jersey, the Caldwell family was increasingly exposed to danger. James Caldwell's outspoken patriot activism made the family a target for British and Loyalist retaliation. By 1780, the British forces on Staten Island were conducting regular raids across the Arthur Kill into the communities around Elizabethtown, burning homes, seizing livestock, and targeting known patriot leaders. The Caldwell family had relocated from Elizabethtown to the nearby village of Connecticut Farms (present-day Union), seeking safety further from the waterfront.

On June 7, 1780, a large British and Hessian force under General Wilhelm von Knyphausen crossed from Staten Island and advanced through Elizabethtown toward Connecticut Farms and ultimately Springfield, probing the American defenses around Morristown. During the attack on Connecticut Farms, Hannah Caldwell was inside the parsonage with her children when a British soldier fired through a window, killing her. The exact circumstances — whether the shooting was deliberate or accidental — were contested at the time and have remained so. American sources consistently described it as a deliberate murder of a defenseless woman; British accounts were less clear.

Hannah Caldwell's death had an immediate and powerful effect on patriot morale in New Jersey. Her killing became a rallying cry in the weeks before the Battle of Springfield on June 23, 1780, when American forces successfully repulsed the British advance. The story of the minister's wife, shot in her home while sheltering her children, was recounted in sermons, newspapers, and correspondence throughout the region. It became emblematic of the brutality of British raids on New Jersey's civilian communities and strengthened resolve among patriots who had grown weary of the war's toll.

WHY SHE MATTERS TO ELIZABETH

Hannah Caldwell's death transformed her from a private individual into a public symbol. In the context of Elizabethtown's war experience — the repeated raids, the burned homes, the constant threat from across the Arthur Kill — her murder crystallized the suffering of the town's civilian population. She represented the women of Elizabethtown who maintained households, raised children, and endured the depredations of a conflict that made no clean distinction between combatants and non-combatants. Her story, alongside that of her husband, made the Caldwell family the most recognized name in Elizabeth's Revolutionary history and illustrated the human cost of living on the front line of a civil war within a larger war for independence.

- 1737: Born in Newark, New Jersey
- 1763: Married Reverend James Caldwell; settled in Elizabethtown
- 1780: Killed by a British soldier during the raid on Connecticut Farms, June 7
- 1780: Her death became a rallying cry for patriot forces before the Battle of Springfield

SOURCES
- Hatfield, Edwin F. "History of Elizabeth, New Jersey." Carlton and Lanahan, 1868.
- Fleming, Thomas. "The Forgotten Victory: The Battle for New Jersey, 1780." Reader's Digest Press, 1973.
- Stryker, William S. "The Battle of Springfield." New Jersey Historical Society, 1901.`,
    },
    create: {
      id: 'person-elizabeth-hannah-caldwell',
      name: 'Hannah Caldwell',
      roles: ['Civilian', 'Minister\'s Wife', 'Patriot Symbol'],
      bioShort: 'Wife of Reverend James Caldwell (1737-1780) who was shot and killed by a British soldier during the raid on Connecticut Farms in June 1780, an event that became a rallying cry for patriot forces across New Jersey.',
      bioLong: `Hannah Ogden Caldwell was born in 1737 in Newark, New Jersey, the daughter of a prominent local family. She married Reverend James Caldwell in 1763, shortly after he assumed the pastorate of the First Presbyterian Church of Elizabethtown. The couple settled in the parsonage near the church and had nine children. Hannah Caldwell's life was centered on her family, her congregation, and the community of Elizabethtown, where she served as a minister's wife in a society that placed heavy social and charitable responsibilities on women in that role.

As the war engulfed northeastern New Jersey, the Caldwell family was increasingly exposed to danger. James Caldwell's outspoken patriot activism made the family a target for British and Loyalist retaliation. By 1780, the British forces on Staten Island were conducting regular raids across the Arthur Kill into the communities around Elizabethtown, burning homes, seizing livestock, and targeting known patriot leaders. The Caldwell family had relocated from Elizabethtown to the nearby village of Connecticut Farms (present-day Union), seeking safety further from the waterfront.

On June 7, 1780, a large British and Hessian force under General Wilhelm von Knyphausen crossed from Staten Island and advanced through Elizabethtown toward Connecticut Farms and ultimately Springfield, probing the American defenses around Morristown. During the attack on Connecticut Farms, Hannah Caldwell was inside the parsonage with her children when a British soldier fired through a window, killing her. The exact circumstances — whether the shooting was deliberate or accidental — were contested at the time and have remained so. American sources consistently described it as a deliberate murder of a defenseless woman; British accounts were less clear.

Hannah Caldwell's death had an immediate and powerful effect on patriot morale in New Jersey. Her killing became a rallying cry in the weeks before the Battle of Springfield on June 23, 1780, when American forces successfully repulsed the British advance. The story of the minister's wife, shot in her home while sheltering her children, was recounted in sermons, newspapers, and correspondence throughout the region. It became emblematic of the brutality of British raids on New Jersey's civilian communities and strengthened resolve among patriots who had grown weary of the war's toll.

WHY SHE MATTERS TO ELIZABETH

Hannah Caldwell's death transformed her from a private individual into a public symbol. In the context of Elizabethtown's war experience — the repeated raids, the burned homes, the constant threat from across the Arthur Kill — her murder crystallized the suffering of the town's civilian population. She represented the women of Elizabethtown who maintained households, raised children, and endured the depredations of a conflict that made no clean distinction between combatants and non-combatants. Her story, alongside that of her husband, made the Caldwell family the most recognized name in Elizabeth's Revolutionary history and illustrated the human cost of living on the front line of a civil war within a larger war for independence.

- 1737: Born in Newark, New Jersey
- 1763: Married Reverend James Caldwell; settled in Elizabethtown
- 1780: Killed by a British soldier during the raid on Connecticut Farms, June 7
- 1780: Her death became a rallying cry for patriot forces before the Battle of Springfield

SOURCES
- Hatfield, Edwin F. "History of Elizabeth, New Jersey." Carlton and Lanahan, 1868.
- Fleming, Thomas. "The Forgotten Victory: The Battle for New Jersey, 1780." Reader's Digest Press, 1973.
- Stryker, William S. "The Battle of Springfield." New Jersey Historical Society, 1901.`,
      birthYear: 1737,
      deathYear: 1780,
      verificationStatus: 'VERIFIED',
    },
  });

  console.log('  People (1-4) seeded.');
}

async function seedPeoplePartTwo() {
  console.log('  Seeding people (5-8)...');

  await prisma.person.upsert({
    where: { id: 'person-elizabeth-william-livingston' },
    update: {
      bioLong: `William Livingston was born on November 30, 1723, in Albany, New York, into one of the most powerful and wealthy families in colonial America. The Livingstons owned vast tracts of land along the Hudson River and wielded influence in New York politics, commerce, and law. William attended Yale College, graduating in 1741, and studied law in New York City. He was admitted to the bar and practiced law in Manhattan, where he also became a prolific essayist and political commentator, co-founding the Independent Reflector, a journal that criticized the concentration of power among Anglican elites in New York and advocated for religious tolerance and civil liberties.

In 1772, Livingston retired from active legal practice and moved to Elizabethtown, New Jersey, where he built a country estate he called Liberty Hall. The name was deliberate — Livingston was already deeply committed to the cause of colonial rights, and the estate became a gathering place for patriot leaders from across the region. Liberty Hall's proximity to New York and its position in one of New Jersey's most politically active communities made it a natural hub for the networks of correspondence and coordination that would produce the Revolution.

When the crisis with Britain reached its breaking point, Livingston was elected as a delegate to the First and Second Continental Congresses (1774-1776). He was a firm advocate for independence, though he left Congress before the final vote in July 1776 to assume command of the New Jersey militia. In August 1776, he was elected the first governor of the newly independent State of New Jersey under its 1776 constitution. He would serve as governor continuously until his death in 1790, a tenure of fourteen years that spanned the entire war and the early years of the Republic.

As wartime governor, Livingston faced extraordinary challenges. New Jersey was the most fought-over state in the Revolution, and Livingston personally was a high-value target for British kidnapping and assassination plots. He rarely slept in the same location twice and was forced to move constantly to avoid capture. Despite these conditions, he maintained the functioning of the state government, organized the militia, coordinated with Washington's army, and dealt with the complex problems of Loyalist property confiscation, civilian provisioning, and the administration of justice in a state that was simultaneously a battleground and a functioning political entity.

WHY HE MATTERS TO ELIZABETH

William Livingston chose Elizabethtown as his home, and the decision had consequences that shaped the town's wartime experience. Liberty Hall was a target for British raids precisely because the governor lived there. The repeated British attempts to capture Livingston — including at least one nighttime raid on Liberty Hall itself — kept Elizabethtown at the center of the war's political and military dynamics. Livingston's presence elevated the town's significance but also increased the danger its residents faced. His fourteen-year governorship, conducted in part from or near Elizabethtown, made the town a seat of state power during the most consequential years of New Jersey's history. Liberty Hall, which survives today as a museum operated by Kean University, remains the most tangible connection between Elizabeth and the highest levels of Revolutionary-era governance.

- 1723: Born November 30 in Albany, New York
- 1772: Moved to Elizabethtown; built Liberty Hall
- 1774-1776: Served as delegate to the First and Second Continental Congresses
- 1776-1790: Served as first governor of New Jersey under the state's 1776 constitution
- 1787: Attended the Constitutional Convention as a delegate from New Jersey; signed the U.S. Constitution
- 1790: Died July 25 at Liberty Hall, Elizabethtown, at age 66

SOURCES
- Sedgwick, Theodore Jr. "A Memoir of the Life of William Livingston." Harper and Brothers, 1833.
- Prince, Carl E. "William Livingston: New Jersey's Revolutionary Governor." New Jersey Historical Society, 1975.
- Hatfield, Edwin F. "History of Elizabeth, New Jersey." Carlton and Lanahan, 1868.`,
    },
    create: {
      id: 'person-elizabeth-william-livingston',
      name: 'William Livingston',
      roles: ['Governor of New Jersey', 'Continental Congress Delegate', 'Lawyer', 'Essayist'],
      bioShort: 'First governor of New Jersey (1723-1790) who served from 1776 until his death, built Liberty Hall in Elizabethtown, signed the U.S. Constitution, and governed the state through the entire Revolutionary War.',
      bioLong: `William Livingston was born on November 30, 1723, in Albany, New York, into one of the most powerful and wealthy families in colonial America. The Livingstons owned vast tracts of land along the Hudson River and wielded influence in New York politics, commerce, and law. William attended Yale College, graduating in 1741, and studied law in New York City. He was admitted to the bar and practiced law in Manhattan, where he also became a prolific essayist and political commentator, co-founding the Independent Reflector, a journal that criticized the concentration of power among Anglican elites in New York and advocated for religious tolerance and civil liberties.

In 1772, Livingston retired from active legal practice and moved to Elizabethtown, New Jersey, where he built a country estate he called Liberty Hall. The name was deliberate — Livingston was already deeply committed to the cause of colonial rights, and the estate became a gathering place for patriot leaders from across the region. Liberty Hall's proximity to New York and its position in one of New Jersey's most politically active communities made it a natural hub for the networks of correspondence and coordination that would produce the Revolution.

When the crisis with Britain reached its breaking point, Livingston was elected as a delegate to the First and Second Continental Congresses (1774-1776). He was a firm advocate for independence, though he left Congress before the final vote in July 1776 to assume command of the New Jersey militia. In August 1776, he was elected the first governor of the newly independent State of New Jersey under its 1776 constitution. He would serve as governor continuously until his death in 1790, a tenure of fourteen years that spanned the entire war and the early years of the Republic.

As wartime governor, Livingston faced extraordinary challenges. New Jersey was the most fought-over state in the Revolution, and Livingston personally was a high-value target for British kidnapping and assassination plots. He rarely slept in the same location twice and was forced to move constantly to avoid capture. Despite these conditions, he maintained the functioning of the state government, organized the militia, coordinated with Washington's army, and dealt with the complex problems of Loyalist property confiscation, civilian provisioning, and the administration of justice in a state that was simultaneously a battleground and a functioning political entity.

WHY HE MATTERS TO ELIZABETH

William Livingston chose Elizabethtown as his home, and the decision had consequences that shaped the town's wartime experience. Liberty Hall was a target for British raids precisely because the governor lived there. The repeated British attempts to capture Livingston — including at least one nighttime raid on Liberty Hall itself — kept Elizabethtown at the center of the war's political and military dynamics. Livingston's presence elevated the town's significance but also increased the danger its residents faced. His fourteen-year governorship, conducted in part from or near Elizabethtown, made the town a seat of state power during the most consequential years of New Jersey's history. Liberty Hall, which survives today as a museum operated by Kean University, remains the most tangible connection between Elizabeth and the highest levels of Revolutionary-era governance.

- 1723: Born November 30 in Albany, New York
- 1772: Moved to Elizabethtown; built Liberty Hall
- 1774-1776: Served as delegate to the First and Second Continental Congresses
- 1776-1790: Served as first governor of New Jersey under the state's 1776 constitution
- 1787: Attended the Constitutional Convention as a delegate from New Jersey; signed the U.S. Constitution
- 1790: Died July 25 at Liberty Hall, Elizabethtown, at age 66

SOURCES
- Sedgwick, Theodore Jr. "A Memoir of the Life of William Livingston." Harper and Brothers, 1833.
- Prince, Carl E. "William Livingston: New Jersey's Revolutionary Governor." New Jersey Historical Society, 1975.
- Hatfield, Edwin F. "History of Elizabeth, New Jersey." Carlton and Lanahan, 1868.`,
      birthYear: 1723,
      deathYear: 1790,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-elizabeth-shepard-kollock' },
    update: {
      bioLong: `Shepard Kollock was born on September 25, 1750, in Lewes, Delaware. He learned the printing trade as a youth, apprenticing with William Goddard in Philadelphia, and became a skilled compositor and pressman. During the early years of the Revolution, Kollock served as a printer for the Continental Army, producing official communications, broadsides, and military orders. His skills brought him to the attention of military and political leaders who understood the essential role of the press in maintaining public morale and disseminating information during the war.

In 1779, Kollock established the New Jersey Journal in Chatham, New Jersey, later relocating the paper to Elizabethtown. The Journal became one of the most widely read newspapers in wartime New Jersey and served as an organ of patriot communication. Kollock published news of military operations, congressional proceedings, and political commentary, as well as advertisements, legal notices, and correspondence. His press was one of the few functioning printing operations in the contested corridor of northeastern New Jersey, where British raids had destroyed or disrupted most civilian infrastructure.

Kollock's Elizabethtown printing operation was physically vulnerable. Located within striking distance of British-held Staten Island, the press was a target for Loyalist raids. Kollock reportedly kept his type and press ready for rapid relocation, and there were occasions when he had to move quickly to avoid capture or destruction of his equipment. Despite these dangers, he maintained publication throughout the war, providing a critical communications link for patriots in a region where reliable information was scarce and rumors were constant.

After the war, Kollock continued to publish the New Jersey Journal in Elizabethtown, covering the political debates of the new nation, including the ratification of the Constitution and the establishment of the federal government. He became a respected figure in the town's civic life and served as postmaster. Kollock continued his printing and publishing activities in Elizabeth until his death on July 28, 1839, at the age of 88.

WHY HE MATTERS TO ELIZABETH

Shepard Kollock brought the power of the press to Elizabethtown during the most dangerous period of the war. In an era when newspapers were the primary means of public communication, Kollock's New Jersey Journal gave the town a voice and a connection to the broader patriot cause. His willingness to operate a printing press within range of British raiders demonstrated the same kind of civilian commitment that defined Elizabethtown's war experience. The Journal documented the raids, the suffering, the political debates, and the daily life of a community at war, creating a written record that historians have relied upon to reconstruct the Revolutionary experience in northeastern New Jersey. Kollock's legacy in Elizabeth is that of the man who ensured the town's story was told.

- 1750: Born September 25 in Lewes, Delaware
- 1779: Established the New Jersey Journal in Chatham, New Jersey
- 1780s: Relocated the New Jersey Journal to Elizabethtown; published throughout the war
- 1783-1839: Continued publishing in Elizabethtown through the early Republic
- 1839: Died July 28 in Elizabethtown at age 88

SOURCES
- Hatfield, Edwin F. "History of Elizabeth, New Jersey." Carlton and Lanahan, 1868.
- Hunterdon County Democrat. "Early Newspapers of New Jersey." Proceedings of the New Jersey Historical Society, various volumes.
- Nelson, William. "Some New Jersey Printers and Printing in the Eighteenth Century." Proceedings of the American Antiquarian Society, 1911.`,
    },
    create: {
      id: 'person-elizabeth-shepard-kollock',
      name: 'Shepard Kollock',
      roles: ['Printer', 'Newspaper Publisher', 'Postmaster'],
      bioShort: 'Printer and publisher (1750-1839) who established the New Jersey Journal in Elizabethtown during the Revolutionary War, providing a critical organ of patriot communication in a region constantly threatened by British raids.',
      bioLong: `Shepard Kollock was born on September 25, 1750, in Lewes, Delaware. He learned the printing trade as a youth, apprenticing with William Goddard in Philadelphia, and became a skilled compositor and pressman. During the early years of the Revolution, Kollock served as a printer for the Continental Army, producing official communications, broadsides, and military orders. His skills brought him to the attention of military and political leaders who understood the essential role of the press in maintaining public morale and disseminating information during the war.

In 1779, Kollock established the New Jersey Journal in Chatham, New Jersey, later relocating the paper to Elizabethtown. The Journal became one of the most widely read newspapers in wartime New Jersey and served as an organ of patriot communication. Kollock published news of military operations, congressional proceedings, and political commentary, as well as advertisements, legal notices, and correspondence. His press was one of the few functioning printing operations in the contested corridor of northeastern New Jersey, where British raids had destroyed or disrupted most civilian infrastructure.

Kollock's Elizabethtown printing operation was physically vulnerable. Located within striking distance of British-held Staten Island, the press was a target for Loyalist raids. Kollock reportedly kept his type and press ready for rapid relocation, and there were occasions when he had to move quickly to avoid capture or destruction of his equipment. Despite these dangers, he maintained publication throughout the war, providing a critical communications link for patriots in a region where reliable information was scarce and rumors were constant.

After the war, Kollock continued to publish the New Jersey Journal in Elizabethtown, covering the political debates of the new nation, including the ratification of the Constitution and the establishment of the federal government. He became a respected figure in the town's civic life and served as postmaster. Kollock continued his printing and publishing activities in Elizabeth until his death on July 28, 1839, at the age of 88.

WHY HE MATTERS TO ELIZABETH

Shepard Kollock brought the power of the press to Elizabethtown during the most dangerous period of the war. In an era when newspapers were the primary means of public communication, Kollock's New Jersey Journal gave the town a voice and a connection to the broader patriot cause. His willingness to operate a printing press within range of British raiders demonstrated the same kind of civilian commitment that defined Elizabethtown's war experience. The Journal documented the raids, the suffering, the political debates, and the daily life of a community at war, creating a written record that historians have relied upon to reconstruct the Revolutionary experience in northeastern New Jersey. Kollock's legacy in Elizabeth is that of the man who ensured the town's story was told.

- 1750: Born September 25 in Lewes, Delaware
- 1779: Established the New Jersey Journal in Chatham, New Jersey
- 1780s: Relocated the New Jersey Journal to Elizabethtown; published throughout the war
- 1783-1839: Continued publishing in Elizabethtown through the early Republic
- 1839: Died July 28 in Elizabethtown at age 88

SOURCES
- Hatfield, Edwin F. "History of Elizabeth, New Jersey." Carlton and Lanahan, 1868.
- Hunterdon County Democrat. "Early Newspapers of New Jersey." Proceedings of the New Jersey Historical Society, various volumes.
- Nelson, William. "Some New Jersey Printers and Printing in the Eighteenth Century." Proceedings of the American Antiquarian Society, 1911.`,
      birthYear: 1750,
      deathYear: 1839,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-elizabeth-cornelius-hetfield' },
    update: {
      bioLong: `Cornelius Hetfield Jr. was born around 1740 in Elizabethtown, New Jersey, into a family that had been established in the area for several generations. The Hetfields were among the old settler families of the Elizabethtown tract, and Cornelius grew up in a community where land disputes, family rivalries, and political factions ran deep. When the Revolution divided Elizabethtown, Hetfield sided with the Crown, becoming one of the most active and notorious Loyalists in northeastern New Jersey.

Hetfield's decision to support the British reflected a combination of personal conviction, family allegiance, and opportunism that characterized Loyalism in the contested regions of New Jersey. The area around Elizabethtown was sharply divided, with patriots and Loyalists often living on adjacent farms and attending the same churches. The Arthur Kill, the narrow waterway separating New Jersey from British-held Staten Island, was easily crossed by small boats, making it possible for Loyalists to maintain contact with British forces, pass intelligence, and participate in raiding operations.

Hetfield became a leader of Loyalist irregular forces operating out of Staten Island and the coastal marshes. He participated in and reportedly organized raiding parties that crossed the Arthur Kill to attack patriot homes, farms, and military positions in the Elizabethtown area. These raids were characterized by theft, arson, and personal violence. Hetfield and men like him targeted not only military objectives but also the property of their patriot neighbors, settling old scores under the cover of wartime operations. The raids terrorized the civilian population of Elizabethtown and the surrounding communities, contributing to the atmosphere of fear and mutual suspicion that made the war in northeastern New Jersey as much a civil conflict as a struggle between armies.

Hetfield was captured by American forces during the war and was tried for his activities. The specific details of his trial and fate are not entirely clear in the surviving records, though some accounts indicate he was condemned. His career illustrates the brutal reality of the war in communities where neighbors took up arms against each other and where the line between military action and personal vendetta was often impossible to draw.

WHY HE MATTERS TO ELIZABETH

Cornelius Hetfield represents the Loyalist experience in Elizabethtown — a dimension of the town's Revolutionary history that is essential to understanding the full scope of the conflict. The Revolution in Elizabethtown was not simply a struggle between the town and a distant British army; it was a civil war within the community itself. Hetfield's raids from Staten Island kept Elizabethtown under constant threat and deepened the divisions within the town. His story is a reminder that the people of Elizabethtown were not unified in their response to the Revolution, and that the violence of the war was inflicted not only by foreign soldiers but by former neighbors and fellow townspeople.

- c.1740: Born in Elizabethtown, New Jersey
- 1776-1781: Operated as a Loyalist raider from Staten Island, conducting attacks on patriot communities in northeastern New Jersey
- During the war: Captured by American forces and tried for his Loyalist activities

SOURCES
- Hatfield, Edwin F. "History of Elizabeth, New Jersey." Carlton and Lanahan, 1868.
- Leiby, Adrian C. "The Revolutionary War in the Hackensack Valley: The Jersey Dutch and the Neutral Ground." Rutgers University Press, 1962.
- Fingerhut, Eugene R. "Survivor: Cadwallader Colden II in Revolutionary America." Associated University Presses, 1983.`,
    },
    create: {
      id: 'person-elizabeth-cornelius-hetfield',
      name: 'Cornelius Hetfield Jr.',
      roles: ['Loyalist', 'Raider', 'Farmer'],
      bioShort: 'Elizabethtown-born Loyalist (c.1740-unknown) who led raiding parties from Staten Island against patriot communities in northeastern New Jersey, embodying the civil war dimension of the Revolution in the Elizabethtown area.',
      bioLong: `Cornelius Hetfield Jr. was born around 1740 in Elizabethtown, New Jersey, into a family that had been established in the area for several generations. The Hetfields were among the old settler families of the Elizabethtown tract, and Cornelius grew up in a community where land disputes, family rivalries, and political factions ran deep. When the Revolution divided Elizabethtown, Hetfield sided with the Crown, becoming one of the most active and notorious Loyalists in northeastern New Jersey.

Hetfield's decision to support the British reflected a combination of personal conviction, family allegiance, and opportunism that characterized Loyalism in the contested regions of New Jersey. The area around Elizabethtown was sharply divided, with patriots and Loyalists often living on adjacent farms and attending the same churches. The Arthur Kill, the narrow waterway separating New Jersey from British-held Staten Island, was easily crossed by small boats, making it possible for Loyalists to maintain contact with British forces, pass intelligence, and participate in raiding operations.

Hetfield became a leader of Loyalist irregular forces operating out of Staten Island and the coastal marshes. He participated in and reportedly organized raiding parties that crossed the Arthur Kill to attack patriot homes, farms, and military positions in the Elizabethtown area. These raids were characterized by theft, arson, and personal violence. Hetfield and men like him targeted not only military objectives but also the property of their patriot neighbors, settling old scores under the cover of wartime operations. The raids terrorized the civilian population of Elizabethtown and the surrounding communities, contributing to the atmosphere of fear and mutual suspicion that made the war in northeastern New Jersey as much a civil conflict as a struggle between armies.

Hetfield was captured by American forces during the war and was tried for his activities. The specific details of his trial and fate are not entirely clear in the surviving records, though some accounts indicate he was condemned. His career illustrates the brutal reality of the war in communities where neighbors took up arms against each other and where the line between military action and personal vendetta was often impossible to draw.

WHY HE MATTERS TO ELIZABETH

Cornelius Hetfield represents the Loyalist experience in Elizabethtown — a dimension of the town's Revolutionary history that is essential to understanding the full scope of the conflict. The Revolution in Elizabethtown was not simply a struggle between the town and a distant British army; it was a civil war within the community itself. Hetfield's raids from Staten Island kept Elizabethtown under constant threat and deepened the divisions within the town. His story is a reminder that the people of Elizabethtown were not unified in their response to the Revolution, and that the violence of the war was inflicted not only by foreign soldiers but by former neighbors and fellow townspeople.

- c.1740: Born in Elizabethtown, New Jersey
- 1776-1781: Operated as a Loyalist raider from Staten Island, conducting attacks on patriot communities in northeastern New Jersey
- During the war: Captured by American forces and tried for his Loyalist activities

SOURCES
- Hatfield, Edwin F. "History of Elizabeth, New Jersey." Carlton and Lanahan, 1868.
- Leiby, Adrian C. "The Revolutionary War in the Hackensack Valley: The Jersey Dutch and the Neutral Ground." Rutgers University Press, 1962.
- Fingerhut, Eugene R. "Survivor: Cadwallader Colden II in Revolutionary America." Associated University Presses, 1983.`,
      birthYear: 1740,
      deathYear: null,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-elizabeth-cato-elizabeth' },
    update: {
      bioLong: `The man known in surviving records as Cato was one of the enslaved people who lived in the Elizabethtown area during the Revolutionary period. Specific details of his birth, parentage, and early life are not recorded in the surviving documents — a silence that itself reflects the systematic erasure of Black lives from the historical record. What is known is that Cato was among the enslaved people in Elizabethtown who navigated the upheaval of the Revolution in a community that proclaimed liberty while maintaining the institution of slavery.

New Jersey was a slaveholding colony, and Elizabethtown's leading families — including those who led the patriot cause — held enslaved people. The 1790 census recorded hundreds of enslaved individuals in Essex County. Enslaved people in Elizabethtown worked as domestic servants, farm laborers, and skilled artisans. They lived in close proximity to their enslavers, sharing the same communities, attending the same churches (in segregated sections), and enduring the same British raids that afflicted the rest of the population — though without the freedom to choose their own response to the conflict.

The Revolution created both opportunities and dangers for enslaved people in the Elizabethtown area. The British offered freedom to enslaved people who escaped patriot masters and reached British lines — a policy formalized by Lord Dunmore's Proclamation of 1775 and later by General Henry Clinton's Philipsburg Proclamation of 1779. The proximity of British-held Staten Island, just across the Arthur Kill, made escape a tangible possibility for enslaved people in Elizabethtown. Some crossed the waterway and gained their freedom behind British lines. Others served the patriot cause, either voluntarily or under compulsion, performing labor for the Continental Army, carrying messages, and maintaining the infrastructure of resistance.

Cato appears in local records in connection with the wartime community of Elizabethtown, though the fragmentary nature of the documentation makes it impossible to construct a full biography. His story is representative of a broader population — the enslaved and free Black people of Elizabethtown whose labor, knowledge, and presence shaped the town during the Revolution but whose individual histories were seldom recorded by the white community that controlled the written record.

WHY HE MATTERS TO ELIZABETH

Cato and the other enslaved people of Elizabethtown expose the contradiction at the heart of the town's Revolutionary story. The same community that produced a signer of the Declaration of Independence, a president of the Continental Congress, and a governor who championed liberty maintained a system of human bondage throughout the war and for decades afterward. New Jersey was the last Northern state to pass a gradual emancipation law, in 1804, and the last enslaved people in the state were not freed until the Thirteenth Amendment in 1865. Recognizing the presence of enslaved people like Cato in Elizabethtown is essential to telling an honest history of the town — one that acknowledges that the liberty celebrated by patriots was not extended to all who lived within the community.

- Exact dates unknown; lived in Elizabethtown during the Revolutionary era
- Enslaved within the Elizabethtown community during the war years
- Navigated the choices and constraints faced by enslaved people in a community on the front line between British and American forces

SOURCES
- Hodges, Graham Russell. "Slavery and Freedom in the Rural North: African Americans in Monmouth County, New Jersey, 1665-1865." Rowman and Littlefield, 1997.
- Gigantino, James J. II. "The Ragged Road to Abolition: Slavery and Freedom in New Jersey, 1775-1865." University of Pennsylvania Press, 2015.
- Hatfield, Edwin F. "History of Elizabeth, New Jersey." Carlton and Lanahan, 1868.`,
    },
    create: {
      id: 'person-elizabeth-cato-elizabeth',
      name: 'Cato (enslaved, Elizabethtown)',
      roles: ['Enslaved Person'],
      bioShort: 'An enslaved person who lived in Elizabethtown during the Revolutionary period, representative of the Black population whose labor sustained the community while the Declaration of Independence proclaimed liberty and equality.',
      bioLong: `The man known in surviving records as Cato was one of the enslaved people who lived in the Elizabethtown area during the Revolutionary period. Specific details of his birth, parentage, and early life are not recorded in the surviving documents — a silence that itself reflects the systematic erasure of Black lives from the historical record. What is known is that Cato was among the enslaved people in Elizabethtown who navigated the upheaval of the Revolution in a community that proclaimed liberty while maintaining the institution of slavery.

New Jersey was a slaveholding colony, and Elizabethtown's leading families — including those who led the patriot cause — held enslaved people. The 1790 census recorded hundreds of enslaved individuals in Essex County. Enslaved people in Elizabethtown worked as domestic servants, farm laborers, and skilled artisans. They lived in close proximity to their enslavers, sharing the same communities, attending the same churches (in segregated sections), and enduring the same British raids that afflicted the rest of the population — though without the freedom to choose their own response to the conflict.

The Revolution created both opportunities and dangers for enslaved people in the Elizabethtown area. The British offered freedom to enslaved people who escaped patriot masters and reached British lines — a policy formalized by Lord Dunmore's Proclamation of 1775 and later by General Henry Clinton's Philipsburg Proclamation of 1779. The proximity of British-held Staten Island, just across the Arthur Kill, made escape a tangible possibility for enslaved people in Elizabethtown. Some crossed the waterway and gained their freedom behind British lines. Others served the patriot cause, either voluntarily or under compulsion, performing labor for the Continental Army, carrying messages, and maintaining the infrastructure of resistance.

Cato appears in local records in connection with the wartime community of Elizabethtown, though the fragmentary nature of the documentation makes it impossible to construct a full biography. His story is representative of a broader population — the enslaved and free Black people of Elizabethtown whose labor, knowledge, and presence shaped the town during the Revolution but whose individual histories were seldom recorded by the white community that controlled the written record.

WHY HE MATTERS TO ELIZABETH

Cato and the other enslaved people of Elizabethtown expose the contradiction at the heart of the town's Revolutionary story. The same community that produced a signer of the Declaration of Independence, a president of the Continental Congress, and a governor who championed liberty maintained a system of human bondage throughout the war and for decades afterward. New Jersey was the last Northern state to pass a gradual emancipation law, in 1804, and the last enslaved people in the state were not freed until the Thirteenth Amendment in 1865. Recognizing the presence of enslaved people like Cato in Elizabethtown is essential to telling an honest history of the town — one that acknowledges that the liberty celebrated by patriots was not extended to all who lived within the community.

- Exact dates unknown; lived in Elizabethtown during the Revolutionary era
- Enslaved within the Elizabethtown community during the war years
- Navigated the choices and constraints faced by enslaved people in a community on the front line between British and American forces

SOURCES
- Hodges, Graham Russell. "Slavery and Freedom in the Rural North: African Americans in Monmouth County, New Jersey, 1665-1865." Rowman and Littlefield, 1997.
- Gigantino, James J. II. "The Ragged Road to Abolition: Slavery and Freedom in New Jersey, 1775-1865." University of Pennsylvania Press, 2015.
- Hatfield, Edwin F. "History of Elizabeth, New Jersey." Carlton and Lanahan, 1868.`,
      birthYear: null,
      deathYear: null,
      verificationStatus: 'ORAL_TRADITION',
    },
  });

  console.log('  People (5-8) seeded.');
}

// =============================================================================
// TOWN-PEOPLE CONNECTIONS
// =============================================================================

async function seedTownPeople() {
  console.log('  Seeding town-people connections...');

  const connections = [
    { personId: 'person-elizabeth-abraham-clark', connectionNote: 'Birthplace and lifelong residence' },
    { personId: 'person-elizabeth-elias-boudinot', connectionNote: 'Resided; Boxwood Hall' },
    { personId: 'person-elizabeth-james-caldwell', connectionNote: 'Pastor of First Presbyterian Church' },
    { personId: 'person-elizabeth-hannah-caldwell', connectionNote: 'Resided; killed at nearby Connecticut Farms' },
    { personId: 'person-elizabeth-william-livingston', connectionNote: 'Resided; Liberty Hall estate' },
    { personId: 'person-elizabeth-shepard-kollock', connectionNote: 'Published New Jersey Journal in Elizabethtown' },
    { personId: 'person-elizabeth-cornelius-hetfield', connectionNote: 'Born in Elizabethtown; Loyalist raider' },
    { personId: 'person-elizabeth-cato-elizabeth', connectionNote: 'Enslaved in Elizabethtown during the Revolution' },
  ];

  for (const conn of connections) {
    await prisma.townPerson.upsert({
      where: {
        townId_personId: {
          townId: TOWN_ID,
          personId: conn.personId,
        },
      },
      update: { connectionNote: conn.connectionNote },
      create: {
        townId: TOWN_ID,
        personId: conn.personId,
        connectionNote: conn.connectionNote,
      },
    });
  }

  console.log('  Town-people connections seeded.');
}

// =============================================================================
// PLACES
// =============================================================================

async function seedPlaces() {
  console.log('  Seeding places...');

  await prisma.place.upsert({
    where: { id: 'boxwood-hall-elizabeth' },
    update: {},
    create: {
      id: 'boxwood-hall-elizabeth',
      townId: TOWN_ID,
      name: 'Boxwood Hall (Boudinot Mansion)',
      slug: 'boxwood-hall',
      placeType: 'HISTORIC_HOUSE',
      description: 'Boxwood Hall is a Georgian-style mansion on East Jersey Street in Elizabeth that served as the home of Elias Boudinot, President of the Continental Congress, and later of Jonathan Dayton, the youngest signer of the U.S. Constitution. The house is a State Historic Site administered by the New Jersey Division of Parks and Forestry.',
      historicalNote: 'Boxwood Hall was built around 1750 and purchased by Elias Boudinot in 1772. During the Revolution, it served as Boudinot\'s base of operations for his work as Commissary General of Prisoners and his intelligence-gathering activities. George Washington stopped at Boxwood Hall on April 23, 1789, on his way to his first inauguration in New York City, where he was greeted by Boudinot and other Elizabethtown dignitaries. The house later became the residence of Jonathan Dayton, who had signed the Constitution in 1787 as the youngest delegate at the Philadelphia Convention.\n\nThe house was designated a National Historic Landmark in 1961 and is one of the few surviving eighteenth-century structures in Elizabeth. Its location on East Jersey Street places it on the historic main road of Elizabethtown, connecting the waterfront at Elizabethtown Point to the interior of the settlement.',
      lat: 40.6629,
      lng: -74.2107,
      address: '1073 East Jersey St, Elizabeth, NJ 07201',
      hours: 'By appointment; contact NJ Division of Parks and Forestry',
      admission: 'Free',
      website: 'https://www.nj.gov/dep/parksandforests/historic/boxwoodhall.htm',
      displayOrder: 1,
      featured: true,
    },
  });

  await prisma.place.upsert({
    where: { id: 'liberty-hall-elizabeth' },
    update: {},
    create: {
      id: 'liberty-hall-elizabeth',
      townId: TOWN_ID,
      name: 'Liberty Hall Museum',
      slug: 'liberty-hall-museum',
      placeType: 'HISTORIC_HOUSE',
      description: 'Liberty Hall is the estate built by William Livingston, first governor of New Jersey, in 1772. The property, now operated as a museum by Kean University, encompasses a restored mansion, period gardens, and exhibits spanning over 200 years of the Livingston and Kean families\' history.',
      historicalNote: 'William Livingston built Liberty Hall in 1772 as a country retreat from his legal career in New York. The name reflected his political convictions, and the estate quickly became a gathering place for patriot leaders. During the Revolution, the British mounted multiple raids on the property in attempts to capture Governor Livingston, who was forced to sleep in different locations to avoid kidnapping. The house was later expanded and modified by subsequent generations of the Livingston and Kean families, who remained prominent in New Jersey and national politics.\n\nThe estate\'s survival through more than two centuries, and its continuous association with politically active families, makes it a rare site where the Revolutionary period, the early Republic, the Gilded Age, and the twentieth century can all be interpreted in a single location. The museum\'s collections include furniture, documents, and personal effects spanning the entire period of the house\'s occupation.',
      lat: 40.6808,
      lng: -74.2345,
      address: '1003 Morris Ave, Union, NJ 07083',
      hours: 'Wed-Sat 10am-4pm (April-December)',
      admission: '$12 adults, $8 seniors/students, $6 children',
      website: 'https://www.kean.edu/libertyhall',
      displayOrder: 2,
      featured: true,
    },
  });

  await prisma.place.upsert({
    where: { id: 'first-presbyterian-elizabeth' },
    update: {},
    create: {
      id: 'first-presbyterian-elizabeth',
      townId: TOWN_ID,
      name: 'First Presbyterian Church of Elizabeth',
      slug: 'first-presbyterian-church-elizabeth',
      placeType: 'CHURCH',
      description: 'The First Presbyterian Church of Elizabeth, founded in 1664, is one of the oldest Presbyterian congregations in the United States. The current building on Broad Street occupies the site where Reverend James Caldwell preached his fiery patriot sermons during the Revolutionary era.',
      historicalNote: 'The First Presbyterian Church was established in the same year as the founding of Elizabethtown itself, making it one of the earliest congregations in New Jersey. Under the pastorate of James Caldwell from 1762 to 1781, the church became the institutional center of Elizabethtown\'s patriot movement. Caldwell used the pulpit to advocate for colonial rights and organized support for the Continental cause. The original church building was burned by the British during a raid in January 1780, an act of deliberate destruction targeting a symbol of patriot resistance. The congregation rebuilt, and the church has occupied the same site on Broad Street since its founding.\n\nThe churchyard contains graves dating to the colonial period, including markers for soldiers of the Revolutionary War. The site is a direct link to the era when religious institutions served as centers of political organization and community identity.',
      lat: 40.6636,
      lng: -74.2147,
      address: '42 Broad St, Elizabeth, NJ 07201',
      hours: 'Sunday services; office hours Mon-Fri 9am-4pm',
      admission: 'Free',
      website: 'https://www.firstpreselizabeth.org',
      displayOrder: 3,
      featured: true,
    },
  });

  await prisma.place.upsert({
    where: { id: 'elizabethtown-point-elizabeth' },
    update: {},
    create: {
      id: 'elizabethtown-point-elizabeth',
      townId: TOWN_ID,
      name: 'Elizabethtown Point (Elizabeth Marina)',
      slug: 'elizabethtown-point',
      placeType: 'LANDMARK',
      description: 'Elizabethtown Point, located at the southern end of Elizabeth where the Elizabeth River meets the Arthur Kill, was the colonial-era landing and ferry crossing that connected Elizabethtown to Staten Island and the wider Atlantic world. The area is now occupied by the Elizabeth Marina and surrounding waterfront.',
      historicalNote: 'Elizabethtown Point was the commercial and strategic heart of colonial Elizabethtown. The ferry to Staten Island operated from this location, and it was the primary point of embarkation for travelers heading to New York. During the Revolution, the Point became one of the most dangerous places in the town. British forces on Staten Island could observe activity at the Point, and raiding parties frequently crossed the Arthur Kill to attack the landing and surrounding area.\n\nIt was at Elizabethtown Point that Reverend James Caldwell was shot and killed by Continental sentry James Morgan on November 24, 1781. George Washington landed at the Point on April 23, 1789, arriving by barge from the New Jersey shore en route to his inaugural ceremony in New York City. These events made the Point a site of both tragedy and celebration in Elizabethtown\'s history.',
      lat: 40.6420,
      lng: -74.1985,
      address: 'Elizabeth Marina, Elizabeth, NJ 07206',
      hours: 'Dawn to dusk',
      admission: 'Free',
      displayOrder: 4,
      featured: true,
    },
  });

  await prisma.place.upsert({
    where: { id: 'snyder-academy-elizabeth' },
    update: {},
    create: {
      id: 'snyder-academy-elizabeth',
      townId: TOWN_ID,
      name: 'Site of Elizabethtown Academy',
      slug: 'elizabethtown-academy-site',
      placeType: 'LANDMARK',
      description: 'The site of the Elizabethtown Academy, a colonial-era school located near Broad Street, marks the location of one of the educational institutions that served the town\'s leading families before and during the Revolution. The academy educated several individuals who went on to play roles in the patriot cause.',
      historicalNote: 'Elizabethtown was a center of education in colonial New Jersey. The academy, along with private tutors employed by wealthy families, provided classical education to the sons of the local gentry. Several students of Elizabethtown\'s educational institutions went on to attend the College of New Jersey (Princeton) or King\'s College (Columbia). The town\'s role as New Jersey\'s colonial capital attracted families who valued education, and the concentration of lawyers, ministers, and merchants created a literate community that was well-connected to the intellectual currents of the pre-Revolutionary period.\n\nThe original academy building no longer stands, but the site is part of the historic fabric of downtown Elizabeth and serves as a reminder of the educational infrastructure that produced the town\'s Revolutionary leadership.',
      lat: 40.6640,
      lng: -74.2140,
      address: 'Broad Street area, Elizabeth, NJ 07201',
      hours: 'Always accessible (outdoor marker)',
      admission: 'Free',
      displayOrder: 7,
      featured: false,
    },
  });

  await prisma.place.upsert({
    where: { id: 'arthur-kill-waterfront-elizabeth' },
    update: {},
    create: {
      id: 'arthur-kill-waterfront-elizabeth',
      townId: TOWN_ID,
      name: 'Arthur Kill Waterfront',
      slug: 'arthur-kill-waterfront',
      placeType: 'LANDMARK',
      description: 'The Arthur Kill is the tidal strait separating Elizabeth and northeastern New Jersey from Staten Island. During the Revolution, this narrow waterway was the front line between patriot-held New Jersey and British-occupied Staten Island, and crossing it in either direction was an act fraught with danger.',
      historicalNote: 'The Arthur Kill defined Elizabethtown\'s wartime geography. At its narrowest points, the waterway is less than a mile wide, making it easy to cross by small boat and nearly impossible to patrol effectively. British and Loyalist raiding parties crossed regularly to attack patriot communities, steal livestock, and capture prisoners. Patriot militia maintained watch posts along the shore, and both sides used the waterway for intelligence operations — spies, informants, and couriers crossed the Arthur Kill carrying information in both directions.\n\nThe proximity of Staten Island also created opportunities for enslaved people seeking freedom. The British promise of emancipation for enslaved people who reached their lines made the Arthur Kill a boundary of possibility as well as danger. The waterfront where these crossings took place has been heavily industrialized since the nineteenth century, but the Arthur Kill itself — its width, its tides, its position between two worlds — remains essentially the same geographic feature that shaped Elizabethtown\'s Revolutionary experience.',
      lat: 40.6450,
      lng: -74.2000,
      address: 'Elizabeth waterfront along Arthur Kill, Elizabeth, NJ',
      hours: 'Varies by location',
      admission: 'Free',
      displayOrder: 5,
      featured: false,
    },
  });

  await prisma.place.upsert({
    where: { id: 'first-presbyterian-cemetery-elizabeth' },
    update: {},
    create: {
      id: 'first-presbyterian-cemetery-elizabeth',
      townId: TOWN_ID,
      name: 'First Presbyterian Churchyard and Cemetery',
      slug: 'first-presbyterian-cemetery',
      placeType: 'CEMETERY',
      description: 'The burial ground associated with the First Presbyterian Church of Elizabeth contains graves dating to the colonial period, including those of Revolutionary War soldiers and prominent citizens of Elizabethtown. The cemetery provides a tangible connection to the individuals who lived through the town\'s Revolutionary era.',
      historicalNote: 'The churchyard was the primary burial ground for Elizabethtown\'s Presbyterian community from the seventeenth century through the nineteenth century. Among those buried here are soldiers who served in the Continental Army and the New Jersey militia, as well as civilians who endured the raids and deprivations of the war years. The slate and sandstone headstones, many worn by centuries of weather, bear the names of families that appear throughout Elizabethtown\'s Revolutionary history.\n\nThe burial of Reverend James Caldwell, the "Fighting Parson," was a particularly significant event for the congregation. His grave became a site of memory for the community, linking the physical space of the churchyard to the most dramatic episodes of the war in Elizabethtown.',
      lat: 40.6636,
      lng: -74.2150,
      address: '42 Broad St, Elizabeth, NJ 07201',
      hours: 'Dawn to dusk',
      admission: 'Free',
      displayOrder: 6,
      featured: false,
    },
  });

  await prisma.place.upsert({
    where: { id: 'union-county-courthouse-elizabeth' },
    update: {},
    create: {
      id: 'union-county-courthouse-elizabeth',
      townId: TOWN_ID,
      name: 'Union County Courthouse',
      slug: 'union-county-courthouse',
      placeType: 'GOVERNMENT',
      description: 'The Union County Courthouse complex on Broad Street occupies the site where colonial-era government buildings stood when Elizabethtown served as the administrative center of the region. The courthouse area represents the continuity of civic function on this site from the colonial period to the present.',
      historicalNote: 'Elizabethtown was New Jersey\'s first colonial capital and a center of governance from the earliest days of English settlement in 1664. The colonial courthouse and associated government buildings were located in the area around Broad Street, where the town\'s civic, religious, and commercial functions converged. During the Revolution, the courthouse area was the site of Committee of Safety meetings, militia musters, and the administrative work of maintaining a community under constant military pressure.\n\nThe current courthouse building dates to the nineteenth century and has been expanded multiple times, but its location on Broad Street preserves the geographic relationship between government and community that has characterized Elizabeth since its founding. The courthouse grounds include monuments and markers related to the town\'s history.',
      lat: 40.6635,
      lng: -74.2135,
      address: '2 Broad St, Elizabeth, NJ 07207',
      hours: 'Mon-Fri 8:30am-4:30pm',
      admission: 'Free (public building)',
      displayOrder: 8,
      featured: false,
    },
  });

  console.log('  Places seeded.');
}

// =============================================================================
// EVENTS
// =============================================================================

async function seedEvents() {
  console.log('  Seeding events...');

  await prisma.event.upsert({
    where: { id: 'event-elizabeth-founding-1664' },
    update: {},
    create: {
      id: 'event-elizabeth-founding-1664',
      townId: TOWN_ID,
      name: 'Founding of Elizabethtown',
      slug: 'elizabeth-founding-1664',
      startDate: new Date('1664-01-01'),
      datePrecision: 'YEAR',
      summary: `In 1664, English settlers from Long Island purchased land from the Lenape people and established Elizabethtown, named for Lady Elizabeth Carteret, wife of Sir George Carteret, one of the Lords Proprietors of New Jersey. The settlement was among the earliest English communities in New Jersey and quickly became the colony's de facto capital. The original Elizabethtown Associates — the group of settlers who organized the purchase — held their grant under terms that would become the source of protracted land disputes lasting over a century, as competing claims from the East Jersey Board of Proprietors created legal conflicts that shaped the community's political culture well into the Revolutionary period.

The town's location on the Arthur Kill, with access to Staten Island, New York, and the Atlantic beyond, gave it commercial and strategic importance from the beginning. Elizabethtown grew into a center of governance, religion, and commerce, with the First Presbyterian Church (founded 1664), a courthouse, and a network of roads connecting it to the interior of New Jersey. By the mid-eighteenth century, it was one of the most prosperous and politically active communities in the colony.`,
      significanceWeight: 60,
    },
  });

  await prisma.event.upsert({
    where: { id: 'event-elizabeth-stamp-act-resistance-1765' },
    update: {},
    create: {
      id: 'event-elizabeth-stamp-act-resistance-1765',
      townId: TOWN_ID,
      name: 'Elizabethtown Stamp Act Resistance',
      slug: 'elizabeth-stamp-act-resistance-1765',
      startDate: new Date('1765-10-01'),
      datePrecision: 'MONTH',
      summary: `Elizabethtown was among the New Jersey communities that organized resistance to the Stamp Act of 1765. The town's lawyers, merchants, and civic leaders joined the broader colonial movement opposing Parliament's imposition of direct taxes on the colonies. Public meetings were held at which residents denounced the act and pledged to refuse compliance. The lawyers of Elizabethtown, who stood to be directly affected by the requirement to purchase stamps for legal documents, were particularly vocal in their opposition.

The Stamp Act crisis was a formative experience for the political networks that would later lead Elizabethtown into revolution. The committees formed to coordinate resistance, the public meetings that debated colonial rights, and the patterns of correspondence between Elizabethtown's leaders and their counterparts in other colonies all prefigured the organizational structures of the independence movement a decade later. When the act was repealed in 1766, Elizabethtown celebrated, but the experience had permanently altered the relationship between the town's leadership and British authority.`,
      significanceWeight: 55,
    },
  });

  await prisma.event.upsert({
    where: { id: 'event-elizabeth-tea-burning-1774' },
    update: {},
    create: {
      id: 'event-elizabeth-tea-burning-1774',
      townId: TOWN_ID,
      name: 'Elizabethtown Tea Burning',
      slug: 'elizabeth-tea-burning-1774',
      startDate: new Date('1774-12-22'),
      datePrecision: 'DAY',
      summary: `On December 22, 1774, residents of Elizabethtown burned a shipment of tea in a public demonstration of resistance to British taxation. The event was part of the broader wave of tea protests that swept the colonies following the Boston Tea Party of December 1773 and the passage of the Coercive Acts in 1774. The Elizabethtown tea burning was organized by the local Committee of Correspondence and carried out publicly, signaling that the community had moved beyond petitions and remonstrances to direct action against British commercial policy.

The tea burning demonstrated that Elizabethtown's resistance was not limited to elite political maneuvering but had broad community support. The public nature of the event — conducted openly rather than under the cover of darkness, as the Boston Tea Party had been — reflected the confidence of the patriot faction in Elizabethtown and the relative weakness of Loyalist opposition at that stage of the crisis. The event strengthened the town's connections to the intercolonial resistance network and positioned Elizabethtown as one of the leading patriot communities in New Jersey.`,
      significanceWeight: 60,
    },
  });

  await prisma.event.upsert({
    where: { id: 'event-elizabeth-militia-mobilization-1775' },
    update: {},
    create: {
      id: 'event-elizabeth-militia-mobilization-1775',
      townId: TOWN_ID,
      name: 'Elizabethtown Militia Mobilization',
      slug: 'elizabeth-militia-mobilization-1775',
      startDate: new Date('1775-04-20'),
      datePrecision: 'DAY',
      summary: `When news of the fighting at Lexington and Concord reached Elizabethtown in late April 1775, the town's militia companies mustered and prepared for active service. Colonel Elias Dayton organized the local forces that would become part of the 3rd New Jersey Regiment. Elizabethtown's militia, drawing on a population that included experienced soldiers, well-connected leaders, and a community already organized through committees of correspondence and safety, was among the first in New Jersey to mobilize for the Continental cause.

The mobilization transformed Elizabethtown from a center of political resistance into a military staging area. The town's position on the Arthur Kill, facing British-held territories, meant that it was simultaneously a base of patriot operations and a potential target for British attack. The militia organizations formed in 1775 would remain the backbone of Elizabethtown's defense throughout the war, providing the manpower for garrison duty, patrol operations, and resistance to the British raids that would define the town's wartime experience.`,
      significanceWeight: 65,
    },
  });

  await prisma.event.upsert({
    where: { id: 'event-elizabeth-british-occupation-1776' },
    update: {},
    create: {
      id: 'event-elizabeth-british-occupation-1776',
      townId: TOWN_ID,
      name: 'British Forces Enter Elizabethtown',
      slug: 'elizabeth-british-occupation-1776',
      startDate: new Date('1776-12-01'),
      datePrecision: 'MONTH',
      summary: `In late 1776, following the American defeats at Long Island and the retreat across New Jersey, British forces occupied or controlled much of northeastern New Jersey, including the Elizabethtown area. The British advance, which swept Washington's army across the state and into Pennsylvania, left communities like Elizabethtown exposed to enemy occupation and Loyalist resurgence. British and Hessian troops moved through the town, and Loyalists who had been suppressed by the patriot committees emerged to reclaim influence.

The occupation period was devastating for Elizabethtown's patriot community. Homes were looted, property was confiscated, and prominent patriots faced arrest or flight. The experience of 1776 established the pattern that would define the rest of the war in Elizabethtown: the town's proximity to British-held territory made it perpetually vulnerable, and its civilian population bore the brunt of a conflict that ebbed and flowed across the Arthur Kill. Washington's victories at Trenton and Princeton in late December 1776 and early January 1777 forced the British to pull back, but Elizabethtown would never be fully secure for the remainder of the war.`,
      significanceWeight: 70,
    },
  });

  await prisma.event.upsert({
    where: { id: 'event-elizabeth-church-burning-1780' },
    update: {},
    create: {
      id: 'event-elizabeth-church-burning-1780',
      townId: TOWN_ID,
      name: 'Burning of the First Presbyterian Church',
      slug: 'elizabeth-church-burning-1780',
      startDate: new Date('1780-01-25'),
      datePrecision: 'DAY',
      summary: `On January 25, 1780, British forces crossing from Staten Island raided Elizabethtown and set fire to the First Presbyterian Church, the institutional heart of the town's patriot community. The deliberate targeting of James Caldwell's church was an act calculated to demoralize the patriot population and punish the congregation whose minister had been among the most outspoken advocates of resistance. The church building was destroyed, along with records and property stored within it.

The burning of the church was part of a broader pattern of British raids on Elizabethtown during the winter of 1779-1780. These attacks, launched from Staten Island across the frozen Arthur Kill, targeted patriot homes, farms, and public buildings. The destruction of the church intensified patriot anger and strengthened the resolve of those who remained in the town. The congregation would rebuild, but the event became a marker of the war's toll on Elizabethtown's civilian institutions and a reminder that the conflict spared nothing — not homes, not farms, not even houses of worship.`,
      significanceWeight: 70,
    },
  });

  await prisma.event.upsert({
    where: { id: 'event-elizabeth-connecticut-farms-1780' },
    update: {},
    create: {
      id: 'event-elizabeth-connecticut-farms-1780',
      townId: TOWN_ID,
      name: 'Battle of Connecticut Farms',
      slug: 'elizabeth-connecticut-farms-1780',
      startDate: new Date('1780-06-07'),
      datePrecision: 'DAY',
      summary: `On June 7, 1780, a British and Hessian force of approximately 5,000 troops under General Wilhelm von Knyphausen crossed from Staten Island through Elizabethtown and advanced toward the village of Connecticut Farms (present-day Union), probing the American defenses guarding the road to Morristown, where Washington's main army was encamped. The American forces, including New Jersey militia and Continental troops, resisted the advance and ultimately forced the British to withdraw back through Elizabethtown to their boats.

The battle was significant for several reasons. It demonstrated that the British could still mount large-scale operations from their base on Staten Island, keeping the entire northeastern New Jersey corridor under threat. It resulted in the destruction of much of Connecticut Farms, which was burned during the fighting. And it produced the event that would become the single most potent symbol of the war in the Elizabethtown area: the killing of Hannah Caldwell, wife of Reverend James Caldwell, shot by a British soldier as she sheltered in the parsonage with her children. Her death galvanized patriot sentiment and contributed to the fierce American resistance at the Battle of Springfield two weeks later.`,
      significanceWeight: 85,
    },
  });

  await prisma.event.upsert({
    where: { id: 'event-elizabeth-springfield-1780' },
    update: {},
    create: {
      id: 'event-elizabeth-springfield-1780',
      townId: TOWN_ID,
      name: 'Battle of Springfield',
      slug: 'elizabeth-springfield-1780',
      startDate: new Date('1780-06-23'),
      datePrecision: 'DAY',
      summary: `On June 23, 1780, British forces under General Knyphausen again crossed from Staten Island through Elizabethtown and advanced toward Springfield, making a second attempt to break through to the American camp at Morristown. The American defenders, furious over the killing of Hannah Caldwell and the destruction of Connecticut Farms two weeks earlier, fought with determination. The New Jersey militia and Continental troops held their positions, and the British were unable to break through. Knyphausen ordered a retreat, and the British burned Springfield before withdrawing through Elizabethtown to Staten Island.

The Battle of Springfield was the last major British offensive in the northern theater of the war. Its failure ended any realistic possibility of a British advance into the New Jersey interior and confirmed that the war in the North had reached a stalemate. For Elizabethtown, which served as the corridor through which the British army advanced and retreated, the battle marked the culmination of years of raids, occupations, and civilian suffering. The town had been traversed by enemy armies twice in the span of sixteen days, and its residents had endured yet another round of destruction and disruption.`,
      significanceWeight: 85,
    },
  });

  await prisma.event.upsert({
    where: { id: 'event-elizabeth-caldwell-murder-1780' },
    update: {},
    create: {
      id: 'event-elizabeth-caldwell-murder-1780',
      townId: TOWN_ID,
      name: 'Murder of Hannah Caldwell',
      slug: 'elizabeth-caldwell-murder-1780',
      startDate: new Date('1780-06-07'),
      datePrecision: 'DAY',
      summary: `On June 7, 1780, during the British advance through Connecticut Farms toward Springfield, Hannah Caldwell — wife of Reverend James Caldwell, the "Fighting Parson" of Elizabethtown — was shot and killed by a British soldier as she sheltered in the parsonage with her children. The killing, whether deliberate or accidental, became the single most inflammatory event of the war in northeastern New Jersey.

American accounts, published widely in newspapers including Shepard Kollock's New Jersey Journal, described the killing as a cold-blooded murder of a defenseless woman and mother. The story spread rapidly through the patriot communities of New Jersey and beyond, hardening public opinion against the British and their methods of warfare. When Knyphausen's forces returned for the Battle of Springfield sixteen days later, the memory of Hannah Caldwell's death was a powerful motivating force among the American defenders. Her story became emblematic of the suffering inflicted on New Jersey's civilian population by a war that recognized no clear boundary between combatant and non-combatant.`,
      significanceWeight: 80,
    },
  });

  await prisma.event.upsert({
    where: { id: 'event-elizabeth-caldwell-assassination-1781' },
    update: {},
    create: {
      id: 'event-elizabeth-caldwell-assassination-1781',
      townId: TOWN_ID,
      name: 'Killing of Reverend James Caldwell',
      slug: 'elizabeth-caldwell-assassination-1781',
      startDate: new Date('1781-11-24'),
      datePrecision: 'DAY',
      summary: `On November 24, 1781, Reverend James Caldwell was shot and killed at Elizabethtown Point by a Continental sentry named James Morgan. The circumstances of the killing were immediately disputed and have remained so. Morgan claimed that Caldwell had refused to submit a package for inspection at the checkpoint. Others suspected that Morgan had been bribed or induced by Loyalist agents to assassinate the minister, who remained a powerful patriot leader even after his wife's murder the previous year.

Morgan was arrested, tried by court-martial, convicted of murder, and hanged on January 29, 1782. The execution took place in Westfield, New Jersey, before a large crowd. Whether the killing was an act of insubordination, a personal dispute, or a Loyalist conspiracy, Caldwell's death at the hands of an American soldier added a grim coda to a life that had been consumed by the conflict. The loss of both Caldwells — Hannah to a British soldier and James to an American one — encapsulated the savage, intimate nature of the war in the Elizabethtown area.`,
      significanceWeight: 75,
    },
  });

  await prisma.event.upsert({
    where: { id: 'event-elizabeth-loyalist-raids-1777-1782' },
    update: {},
    create: {
      id: 'event-elizabeth-loyalist-raids-1777-1782',
      townId: TOWN_ID,
      name: 'Loyalist Raids from Staten Island',
      slug: 'elizabeth-loyalist-raids-1777-1782',
      startDate: new Date('1777-01-01'),
      endDate: new Date('1782-12-31'),
      datePrecision: 'RANGE',
      summary: `Throughout the war, Elizabethtown was subjected to a relentless series of raids by Loyalist irregular forces and British troops operating from Staten Island. The Arthur Kill, less than a mile wide at some points, provided an easily crossed boundary between British-held territory and the patriot communities of New Jersey. Raiding parties crossed by night in small boats, striking farms, homes, and military positions before withdrawing to the safety of the island.

These raids were carried out by a mix of regular British forces, Loyalist militias, and individual opportunists. Figures like Cornelius Hetfield Jr. organized attacks that targeted specific patriot families and properties, blending military objectives with personal vendettas. The raids resulted in the theft of livestock, destruction of property, capture of prisoners, and occasional killings. The constant threat of attack forced the patriot community to maintain militia watches, fortify homes, and live in a state of perpetual alertness. The cumulative effect was exhausting, and the raids eroded the economic base of a community that depended on agriculture and commerce — both of which were disrupted by the insecurity along the waterfront.`,
      significanceWeight: 75,
    },
  });

  await prisma.event.upsert({
    where: { id: 'event-elizabeth-intelligence-operations' },
    update: {},
    create: {
      id: 'event-elizabeth-intelligence-operations',
      townId: TOWN_ID,
      name: 'Elizabethtown Intelligence Networks',
      slug: 'elizabeth-intelligence-operations-1777-1783',
      startDate: new Date('1777-01-01'),
      endDate: new Date('1783-12-31'),
      datePrecision: 'RANGE',
      summary: `Elizabethtown's position on the Arthur Kill, directly across from British-held Staten Island, made it one of the most important nodes in the American intelligence network during the Revolutionary War. Patriots in Elizabethtown — including Elias Boudinot in his capacity as Commissary General of Prisoners — used the town's proximity to British territory to gather and transmit military intelligence to Washington's headquarters. The regular traffic across the Arthur Kill for prisoner exchanges, trade, and clandestine meetings provided cover for intelligence operations.

Informants operating in New York and on Staten Island passed information through Elizabethtown to Continental commanders. Boudinot maintained a network of agents and contacts, and the information they provided contributed to American understanding of British troop movements, supply levels, and strategic intentions. The intelligence operations were dangerous — discovery meant execution — and required the cooperation of ordinary Elizabethtown residents who served as couriers, safe houses, and lookouts. The town's intelligence role remained largely secret during the war and has only been fully appreciated by historians working with the surviving correspondence and intelligence reports.`,
      significanceWeight: 70,
    },
  });

  await prisma.event.upsert({
    where: { id: 'event-elizabeth-washington-inauguration-1789' },
    update: {},
    create: {
      id: 'event-elizabeth-washington-inauguration-1789',
      townId: TOWN_ID,
      name: 'Washington\'s Inauguration Journey Through Elizabethtown',
      slug: 'elizabeth-washington-inauguration-1789',
      startDate: new Date('1789-04-23'),
      datePrecision: 'DAY',
      summary: `On April 23, 1789, George Washington passed through Elizabethtown on his way to New York City for his inauguration as the first President of the United States. Washington traveled from Mount Vernon northward through New Jersey, arriving at Elizabethtown Point, where he was greeted by a congressional committee that included Elias Boudinot. From the Point, Washington boarded a specially decorated barge and was rowed across the harbor to New York, accompanied by an escort of boats and cheering crowds lining the waterfront.

Washington's stop at Elizabethtown was a moment of celebration for a town that had endured years of war, raids, and destruction. The community that had been a battlefield and a corridor for invading armies now served as the gateway through which the new nation's leader passed to assume the highest office. Washington's visit to Boxwood Hall, where he was received by Boudinot, symbolized the connection between Elizabethtown's wartime sacrifices and the establishment of the constitutional government that those sacrifices had made possible.`,
      significanceWeight: 75,
    },
  });

  await prisma.event.upsert({
    where: { id: 'event-elizabeth-nj-journal-established-1779' },
    update: {},
    create: {
      id: 'event-elizabeth-nj-journal-established-1779',
      townId: TOWN_ID,
      name: 'Establishment of the New Jersey Journal',
      slug: 'elizabeth-nj-journal-established-1779',
      startDate: new Date('1779-02-16'),
      datePrecision: 'DAY',
      summary: `On February 16, 1779, Shepard Kollock published the first issue of the New Jersey Journal from his press in Chatham, New Jersey. The newspaper was later relocated to Elizabethtown, where it became one of the most important patriot publications in the state. The Journal served as an organ of communication for the patriot cause, publishing news of military operations, congressional proceedings, government proclamations, and political commentary.

In a region where British raids had destroyed or disrupted most civilian infrastructure, Kollock's newspaper provided a critical link between the communities of northeastern New Jersey and the broader world of patriot politics and military affairs. The Journal published accounts of the raids on Elizabethtown, the battles at Connecticut Farms and Springfield, the killing of Hannah Caldwell, and the ongoing struggle along the Arthur Kill. It also served practical functions, publishing legal notices, advertisements, and government orders. The newspaper's survival throughout the war, despite the physical danger of operating a press within range of British raiders, was a testament to the determination of Elizabethtown's patriot community to maintain their voice in the public sphere.`,
      significanceWeight: 60,
    },
  });

  await prisma.event.upsert({
    where: { id: 'event-elizabeth-dayton-regiment-1776' },
    update: {},
    create: {
      id: 'event-elizabeth-dayton-regiment-1776',
      townId: TOWN_ID,
      name: 'Formation of the 3rd New Jersey Regiment',
      slug: 'elizabeth-dayton-regiment-1776',
      startDate: new Date('1776-01-01'),
      datePrecision: 'YEAR',
      summary: `In early 1776, Colonel Elias Dayton organized the 3rd New Jersey Regiment of the Continental Army, drawing heavily from the Elizabethtown area. Reverend James Caldwell served as the regiment's chaplain. The 3rd New Jersey would serve throughout the war, participating in campaigns from the defense of New York to the battles in New Jersey and engagements in the southern theater.

The formation of the regiment was a turning point for Elizabethtown. It formalized the military commitment that the community had made informally through its militia organizations and transformed local men into soldiers of a national army. Families in Elizabethtown sent their sons, husbands, and fathers into a war that would last eight years, enduring separation, uncertainty, and the knowledge that their loved ones faced death, disease, and captivity. The regiment's connection to Elizabethtown through Dayton and Caldwell kept the town linked to the Continental Army's campaigns and made the national struggle a deeply personal matter for the community.`,
      significanceWeight: 65,
    },
  });

  await prisma.event.upsert({
    where: { id: 'event-elizabeth-liberty-hall-raid' },
    update: {},
    create: {
      id: 'event-elizabeth-liberty-hall-raid',
      townId: TOWN_ID,
      name: 'British Raid on Liberty Hall',
      slug: 'elizabeth-liberty-hall-raid-1780',
      startDate: new Date('1780-01-01'),
      datePrecision: 'YEAR',
      summary: `During the war, the British mounted at least one major attempt to capture Governor William Livingston at Liberty Hall, his estate in Elizabethtown. Livingston was a high-value target — as governor of New Jersey, his capture would have been a significant political and propaganda victory for the British. The raid on Liberty Hall was part of a broader pattern of British operations targeting patriot political and military leaders in the Elizabethtown area.

Livingston, aware of the danger, rarely slept at Liberty Hall during the active war years, moving frequently between locations to avoid capture. His family, however, remained at or near the estate and endured the anxiety of living in a home that the enemy actively sought to attack. The raids on Liberty Hall illustrated the personal cost of political leadership during the Revolution — Livingston governed New Jersey while living as a fugitive in his own community, unable to reside safely in the home he had built. The estate survived the war, but the experience left the Livingston family and the broader Elizabethtown community with a vivid understanding of how deeply the war penetrated private life.`,
      significanceWeight: 65,
    },
  });

  console.log('  Events seeded.');
}

// =============================================================================
// EVENT-PEOPLE CONNECTIONS
// =============================================================================

async function seedEventPeople() {
  console.log('  Seeding event-people connections...');

  const connections = [
    { eventId: 'event-elizabeth-tea-burning-1774', personId: 'person-elizabeth-abraham-clark', roleInEvent: 'Patriot organizer and Committee of Correspondence member' },
    { eventId: 'event-elizabeth-militia-mobilization-1775', personId: 'person-elizabeth-james-caldwell', roleInEvent: 'Chaplain to the 3rd New Jersey Regiment' },
    { eventId: 'event-elizabeth-militia-mobilization-1775', personId: 'person-elizabeth-william-livingston', roleInEvent: 'Continental Congress delegate organizing New Jersey defense' },
    { eventId: 'event-elizabeth-dayton-regiment-1776', personId: 'person-elizabeth-james-caldwell', roleInEvent: 'Regimental chaplain' },
    { eventId: 'event-elizabeth-british-occupation-1776', personId: 'person-elizabeth-william-livingston', roleInEvent: 'Governor of New Jersey; forced to relocate to avoid capture' },
    { eventId: 'event-elizabeth-british-occupation-1776', personId: 'person-elizabeth-cornelius-hetfield', roleInEvent: 'Loyalist who emerged to support British occupation' },
    { eventId: 'event-elizabeth-church-burning-1780', personId: 'person-elizabeth-james-caldwell', roleInEvent: 'Pastor of the destroyed church' },
    { eventId: 'event-elizabeth-connecticut-farms-1780', personId: 'person-elizabeth-hannah-caldwell', roleInEvent: 'Killed during the battle' },
    { eventId: 'event-elizabeth-connecticut-farms-1780', personId: 'person-elizabeth-james-caldwell', roleInEvent: 'Husband of Hannah Caldwell; patriot leader in the area' },
    { eventId: 'event-elizabeth-caldwell-murder-1780', personId: 'person-elizabeth-hannah-caldwell', roleInEvent: 'Victim' },
    { eventId: 'event-elizabeth-springfield-1780', personId: 'person-elizabeth-james-caldwell', roleInEvent: 'Chaplain supporting patriot forces during the battle' },
    { eventId: 'event-elizabeth-caldwell-assassination-1781', personId: 'person-elizabeth-james-caldwell', roleInEvent: 'Victim; shot by Continental sentry at Elizabethtown Point' },
    { eventId: 'event-elizabeth-loyalist-raids-1777-1782', personId: 'person-elizabeth-cornelius-hetfield', roleInEvent: 'Led Loyalist raiding parties from Staten Island' },
    { eventId: 'event-elizabeth-intelligence-operations', personId: 'person-elizabeth-elias-boudinot', roleInEvent: 'Organized intelligence network as Commissary General of Prisoners' },
    { eventId: 'event-elizabeth-washington-inauguration-1789', personId: 'person-elizabeth-elias-boudinot', roleInEvent: 'Greeted Washington at Boxwood Hall and escorted him to the barge' },
    { eventId: 'event-elizabeth-washington-inauguration-1789', personId: 'person-elizabeth-william-livingston', roleInEvent: 'Governor of New Jersey during Washington\'s passage' },
    { eventId: 'event-elizabeth-nj-journal-established-1779', personId: 'person-elizabeth-shepard-kollock', roleInEvent: 'Founder and publisher of the New Jersey Journal' },
    { eventId: 'event-elizabeth-liberty-hall-raid', personId: 'person-elizabeth-william-livingston', roleInEvent: 'Target of the British kidnapping attempt' },
    { eventId: 'event-elizabeth-stamp-act-resistance-1765', personId: 'person-elizabeth-elias-boudinot', roleInEvent: 'Patriot organizer opposing the Stamp Act' },
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
    where: { id: 'story-elizabeth-hannah-caldwell' },
    update: {},
    create: {
      id: 'story-elizabeth-hannah-caldwell',
      town: { connect: { id: TOWN_ID } },
      title: 'The Minister\'s Wife',
      slug: 'the-ministers-wife-elizabeth',
      storyType: 'HISTORICAL_VOICE',
      subjectPerson: { connect: { id: 'person-elizabeth-hannah-caldwell' } },
      verificationStatus: 'VERIFIED',
      textVersion: `I did not choose this war. None of the women I knew chose it. The men gathered in parlors and churches and taverns and debated the rights of Englishmen and the tyranny of Parliament, and they decided, and we lived with what they decided. My husband, James, was among those who decided. He decided from the pulpit of the First Presbyterian Church of Elizabethtown that resistance to British authority was not merely a political right but a moral duty, and he decided it with such force and eloquence that the British put his name on a list of men to be captured or killed.

I lived with that decision every day. I lived with it when the raids started, when the boats crossed the Arthur Kill in the dark and the militia alarm sounded and we did not know whether the men coming up from the waterfront were soldiers or bandits or neighbors who had chosen the other side. I lived with it when they burned our church, the building where James had married us and baptized our children and preached the sermons that made him famous and made us targets. I lived with it when we moved from Elizabethtown to Connecticut Farms, seeking safety farther from the water, knowing that safety in this war was a word without fixed meaning.

We had nine children. Nine. Try to imagine keeping nine children alive and fed and clothed in a town that was raided every few weeks, where the British stole the livestock and the Loyalists burned the barns and the militiamen came through demanding provisions they could not pay for. I managed the household. I managed it when James was away with the regiment, which was often, because he was the chaplain and the chaplain goes where the soldiers go. I managed it when the money stopped and the supplies ran short and the neighbors who could have helped were dealing with their own disasters.

On the morning of June 7, 1780, the British came again. Five thousand of them, or so we were told afterward — I did not count them. They crossed from Staten Island and came through Elizabethtown, heading toward our village and beyond it toward Springfield and Morristown. I gathered the children in the parsonage. I did not try to flee because I believed that a woman with her children in her own home would not be harmed. I believed that even in this war, there were limits.

A soldier fired through the window. The ball struck me. I will not describe what happened next, because the dying is the least important part of this story. What matters is what came after — the way my death was used by both sides, each claiming it proved something about the other's barbarity or righteousness. The patriots said I was murdered in cold blood. The British said it was an accident of war. My children, who saw it happen, said nothing to anyone for a long time.

I became a symbol. I became the murdered wife of the Fighting Parson, the innocent victim of British savagery, the rallying cry that sent men to fight at Springfield with fresh fury in their hearts. I do not object to being a symbol if it serves the truth. But the truth is more complicated than any symbol. The truth is that I was a woman who kept a household and raised children in a war zone, and one day a bullet came through the window, and that was the end of my story and the beginning of my legend.

There were hundreds of women like me in the towns along the Arthur Kill. Women who ran farms when the men were away. Women who hid the silver when the raiders came. Women who nursed wounded soldiers from both sides because the wounded man in front of you does not wear his politics on his face. We were not symbols. We were the people who held the communities together while the men went off to argue about liberty and then fight about it. My name survived because my husband was famous. The other women's names are in parish records and family Bibles and nowhere else.

I want you to remember me not as a martyr but as a mother who was trying to keep her children safe in a house that stood between two armies. I want you to remember that the war was not fought only on battlefields and in congress halls but in kitchens and parlors and churchyards, by women who never signed a declaration or fired a musket but who bore the weight of independence on their backs every single day.`,
      tags: ['elizabeth', 'hannah-caldwell', 'connecticut-farms', 'women', 'civilians', 'british-raids'],
    },
  });

  await prisma.story.upsert({
    where: { id: 'story-elizabeth-boudinot-intelligence' },
    update: {},
    create: {
      id: 'story-elizabeth-boudinot-intelligence',
      town: { connect: { id: TOWN_ID } },
      title: 'The Commissary\'s Other War',
      slug: 'the-commissarys-other-war-elizabeth',
      storyType: 'HISTORICAL_VOICE',
      subjectPerson: { connect: { id: 'person-elizabeth-elias-boudinot' } },
      verificationStatus: 'VERIFIED',
      textVersion: `My official title was Commissary General of Prisoners. My official duty was to negotiate with the British for the exchange and welfare of American soldiers held in captivity. What I also did, from my home in Elizabethtown, was gather intelligence — and I did it because Elizabethtown was the place where two worlds touched.

The Arthur Kill is not a wide body of water. On a clear day, you can see the buildings on Staten Island from the New Jersey shore. Boats cross it regularly — fishermen, traders, ferry passengers, and, during the war, everyone with a reason to move between British-held territory and the patriot side. My work with prisoners gave me a legitimate reason to communicate with British officers. We exchanged letters. We arranged meetings under flags of truce. We negotiated the terms under which captured soldiers would be returned. Each of these contacts was also an opportunity to observe, to listen, and to learn.

I maintained a network of informants. Some were patriots living within British lines, passing information at great personal risk. Others were people whose loyalties were uncertain but whose willingness to share what they knew could be purchased or encouraged. The information came in fragments — a report of troop movements on Staten Island, the name of a ship arriving in New York Harbor, a conversation overheard at a British officer's dinner. I assembled the fragments into intelligence reports and forwarded them to General Washington's headquarters.

The work was dangerous. The British were not fools, and they understood that the traffic across the Arthur Kill carried more than prisoners and trade goods. They maintained their own intelligence operations, and several of my contacts were discovered and dealt with harshly. I spent my own money — a great deal of it — to fund operations, purchase information, and support the families of agents who had been captured or killed. Congress reimbursed me partially and late, which was Congress's way in all things during the war.

Elizabethtown was suited to this work because it was a border town. Everyone here had connections on both sides. The same families that produced patriot leaders also had Loyalist branches. The merchants who traded with New York before the war did not all sever those connections when the fighting started. The waterfront, the ferries, the small boats that crossed the Kill at all hours — all of this created an environment where information moved as freely as goods and people. I used what Elizabethtown offered, and what it offered was proximity to the enemy and a population that knew how to navigate between worlds.

I do not claim that the intelligence I gathered was decisive. Washington had many sources, and the war was won by soldiers on battlefields, not by spies in parlors. But the information that flowed through Elizabethtown contributed to the Continental command's understanding of British intentions at critical moments. And the work itself — the careful, patient, dangerous work of maintaining contacts, verifying reports, and transmitting intelligence — was as much a part of Elizabethtown's war effort as the militia patrols along the waterfront or the sermons James Caldwell preached from the pulpit of the First Presbyterian Church.

The other part of my duty — the official part, the prisoners — was heartbreaking. American soldiers captured by the British were held in conditions of deliberate cruelty. The prison ships in New York Harbor were death traps. Men died of disease, starvation, and exposure, crowded below decks in filth. I spent months negotiating exchanges, begging Congress for funds to purchase food and medicine, and writing letters to British commanders protesting the treatment of prisoners. Some of those men I was able to bring home. Others I could not.

When the war ended and I was elected President of Congress, I presided over the ratification of the Treaty of Paris from a position earned not on a battlefield but in the murky space between the two sides, where information was currency and trust was the scarcest commodity of all. Elizabethtown gave me the geography to do that work. The Arthur Kill, that narrow, unremarkable waterway, was the seam along which the war was fought in ways that never made the history books.`,
      tags: ['elizabeth', 'elias-boudinot', 'intelligence', 'prisoners', 'arthur-kill', 'espionage'],
    },
  });

  await prisma.story.upsert({
    where: { id: 'story-elizabeth-loyalist-divide' },
    update: {},
    create: {
      id: 'story-elizabeth-loyalist-divide',
      town: { connect: { id: TOWN_ID } },
      title: 'The Neighbor Who Chose the King',
      slug: 'the-neighbor-who-chose-the-king-elizabeth',
      storyType: 'HISTORICAL_VOICE',
      subjectPerson: { connect: { id: 'person-elizabeth-cornelius-hetfield' } },
      verificationStatus: 'VERIFIED',
      textVersion: `They call me a traitor. The patriots of Elizabethtown, who were my neighbors and in some cases my kin, use that word as if loyalty to the Crown were a crime rather than the position of every subject of the British Empire until a handful of lawyers and ministers decided otherwise. I was born in this town. My family has been here since before most of theirs. I did not rebel against the government I was born under, and I do not accept that refusing to rebel makes me a criminal.

The trouble in Elizabethtown did not begin with taxes or stamps or tea. It began generations ago, with the land. The Elizabethtown Associates — the original settlers who purchased the land from the Indians — held grants that conflicted with the claims of the East Jersey Proprietors. For decades, families argued over who owned what, and the courts were clogged with suits and countersuits. Some families aligned with the Proprietors, others with the Associates, and the bitterness ran deep. When the Revolution came, many of those old fault lines determined which side a man chose. The patriots wrapped their cause in the language of liberty, but underneath it, the war in Elizabethtown was about who would control the land and the government and the courts.

I chose the King because I believed the King's government was the legitimate authority and because I did not trust the men who claimed to speak for liberty while seizing the property of anyone who disagreed with them. The Committees of Safety, which the patriots established in every town, were instruments of terror. They interrogated suspected Loyalists, confiscated their property, imprisoned them without trial, and in some cases drove them from their homes. These were the men who spoke of liberty — liberty for themselves, and coercion for everyone else.

When the British occupied parts of New Jersey in 1776, I crossed to Staten Island and joined the Loyalist forces. From there, I participated in operations on the New Jersey shore. I will not pretend these were genteel affairs. War is not genteel, and a civil war least of all. We raided patriot farms and homes because those farms and homes supplied the rebel army. We took what we could use and destroyed what we could not. The patriots did the same to Loyalist property. Both sides burned, both sides stole, both sides settled old grudges under the cover of military necessity.

I knew the men I raided. I knew their fathers and their wives and the names of their children. They knew me. That is what made the war in Elizabethtown different from a war between strangers. Every raid was personal. Every house I entered had been a house where I had once been welcome. The Arthur Kill, that thin strip of water between New Jersey and Staten Island, separated two communities that had once been one, and crossing it in a boat with a musket in my hands was the loneliest thing I have ever done.

Do I regret my choice? I regret the necessity of making it. I do not regret standing by what I believed was right. The patriots won, and history is written by the victors, and so I am remembered as a villain and they are remembered as heroes. But I would ask this: if loyalty to one's lawful government is treason, then what is the word for those who overthrew that government by force? The answer depends on which side of the Arthur Kill you stand on, and that is as true today as it was when the boats crossed in the dark and the muskets fired and the neighbors of Elizabethtown made war upon each other.`,
      tags: ['elizabeth', 'cornelius-hetfield', 'loyalist', 'civil-war', 'arthur-kill', 'divided-loyalties'],
    },
  });

  await prisma.story.upsert({
    where: { id: 'story-elizabeth-modern-legacy' },
    update: {},
    create: {
      id: 'story-elizabeth-modern-legacy',
      town: { connect: { id: TOWN_ID } },
      title: 'The Colonial Capital Remembers',
      slug: 'the-colonial-capital-remembers-elizabeth',
      storyType: 'MODERN_VOICE',
      verificationStatus: 'VERIFIED',
      textVersion: `Elizabeth, New Jersey, does not look like a Revolutionary War town. The industrial waterfront, the container cranes of Port Elizabeth, the traffic on the New Jersey Turnpike — all of it suggests a place defined by the twentieth century rather than the eighteenth. But the Revolution is here, embedded in the street grid and the place names and the few surviving buildings that connect the modern city to the colonial capital that once stood in its place.

Boxwood Hall sits on East Jersey Street, a Georgian mansion wedged between later commercial buildings, its brick walls holding memories of Elias Boudinot and George Washington and the networks of intelligence that operated from this address during the war. The house is a State Historic Site, open by appointment, a quiet presence in a busy city. Most passersby do not know what it is. Those who do enter find rooms furnished in period style and exhibits that tell the story of a man who served as president of the Continental Congress from this address.

Liberty Hall, technically just across the border in Union, spreads its grounds along Morris Avenue — the estate that William Livingston built and named with revolutionary intent. The museum, operated by Kean University, offers tours of a house that has been continuously occupied since 1772 and that encompasses not just the Revolution but the centuries of Livingston and Kean family history that followed. The contrast between the estate's manicured grounds and the surrounding suburban development is itself a kind of historical statement, a fragment of the eighteenth-century landscape preserved amid the asphalt and strip malls that now cover the farmland where militiamen once drilled.

The First Presbyterian Church on Broad Street still occupies the site where James Caldwell preached his fiery sermons. The building is not the one the British burned in 1780 — that church was rebuilt, and rebuilt again, as congregations do. But the continuity of the institution on the same site, serving the same community, is a thread that runs unbroken from 1664 to the present. The churchyard contains graves from the colonial period, their sandstone markers worn but legible, bearing the names of people who lived through the events that made this town a center of the Revolution.

The Arthur Kill, the waterway that defined Elizabethtown's wartime geography, still separates Elizabeth from Staten Island. It is not a dramatic body of water — it is a tidal strait, industrial and utilitarian, bordered by refineries and container terminals. But its narrowness remains striking. Standing on the Elizabeth side and looking across, you understand viscerally how close the enemy was, how easy it was to cross, how impossible it was for the militia to patrol every foot of shoreline. The geography that made Elizabethtown vulnerable in the 1770s and 1780s is unchanged, even if everything built upon it has been transformed.

What Elizabeth's Revolutionary sites ask of the visitor is a kind of imaginative reconstruction. Unlike Lexington or Concord, where preserved greens and restored taverns make the past visually accessible, Elizabeth requires effort. You must look past the traffic and the storefronts and the noise to see the colonial capital underneath — the town that was New Jersey's first settlement, the home of a signer of the Declaration, the place where a minister's wife was murdered and a governor lived in hiding and spies crossed the water with information that shaped the course of the war.

The effort is worth making. Elizabeth's story is the story of what the Revolution looked like not on the grand stage of Philadelphia or the battlefield at Yorktown but in a community that lived with the war every day for eight years. It is the story of civilians who endured raids and destruction, of women who held families together, of enslaved people who navigated a conflict over liberty that did not include them, of neighbors who took up arms against each other across a strip of water you could throw a stone across. It is a story that does not fit neatly into the triumphant narrative of independence, and that is precisely what makes it essential.`,
      tags: ['elizabeth', 'modern', 'heritage', 'preservation', 'tourism', 'arthur-kill'],
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
    where: { id: 'elizabeth-lesson-frontline-community' },
    update: {},
    create: {
      id: 'elizabeth-lesson-frontline-community',
      townId: TOWN_ID,
      title: 'Frontline Community: Elizabethtown and the War at Home',
      slug: 'elizabeth-frontline-community',
      gradeRange: '6-8',
      estimatedDuration: '2-3 class periods',
      summary: 'Students examine how the Revolutionary War affected the daily lives of civilians in Elizabethtown, a community located on the front line between patriot New Jersey and British-held Staten Island. Through analysis of raids, personal stories, and geographic factors, students explore the war\'s impact on families, property, and community relationships.',
      lessonData: {
        objectives: [
          'Explain why Elizabethtown\'s geography made it vulnerable to British raids',
          'Describe how the war affected civilians, including women, children, and enslaved people',
          'Analyze the impact of divided loyalties on a small community',
          'Compare the experience of a frontline community to that of a community farther from the fighting',
        ],
        essentialQuestions: [
          'How did the Arthur Kill waterway shape Elizabethtown\'s war experience?',
          'What was daily life like for civilians living between two armies?',
          'How did the war divide families and neighbors in Elizabethtown?',
          'How does the experience of a frontline community change our understanding of the Revolution?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Show students a map of Elizabethtown and Staten Island with the Arthur Kill between them. Explain that the Arthur Kill is less than a mile wide. Ask: If your neighborhood were separated from an enemy army by a body of water this narrow, how would it change your daily life? Brainstorm in pairs and share.',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'Elizabethtown\'s geography: the Arthur Kill, the ferry to Staten Island, the proximity of British forces',
            'The pattern of raids: Loyalist and British forces crossing from Staten Island to attack patriot homes, farms, and churches',
            'Civilian experiences: the burning of the First Presbyterian Church, the killing of Hannah Caldwell, the destruction of property',
            'Divided community: patriots and Loyalists living as neighbors, the civil war within the wider war',
          ],
        },
        guidedPractice: {
          duration: '30 minutes',
          activities: [
            'Map Analysis: Students annotate a map of the Elizabethtown area, marking key sites (Boxwood Hall, Liberty Hall, First Presbyterian Church, Elizabethtown Point, Arthur Kill). For each site, students write a one-sentence description of what happened there during the war.',
            'Perspective Exercise: In small groups, students read brief accounts from three perspectives — a patriot woman, a Loyalist raider, and an enslaved person — and fill out a Venn diagram showing what they have in common and how their experiences differ.',
          ],
        },
        independentPractice: {
          duration: '25 minutes',
          assignment: 'Write a diary entry from the perspective of a teenager living in Elizabethtown in 1780. Your entry should describe at least two specific historical events (such as a raid, the burning of the church, or the killing of Hannah Caldwell) and explain how these events affect your family\'s daily life. Include at least one reference to the Arthur Kill and the proximity of Staten Island.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Discussion: How was the war different for people in Elizabethtown compared to people in a town far from the fighting? What does the Elizabethtown experience teach us about war that we might not learn from studying only battles? Exit ticket: Name one way the Arthur Kill shaped life in wartime Elizabethtown.',
        },
        differentiation: {
          struggling: 'Provide a map template with key sites pre-marked. Offer diary entry sentence starters and a word bank of key terms.',
          advanced: 'Research and compare Elizabethtown\'s experience to that of another frontline community during the Revolution (e.g., Westchester County\'s Neutral Ground). Write a one-page comparison.',
          ell: 'Provide a glossary of key terms (raid, militia, Loyalist, Arthur Kill, ferry, parsonage). Use labeled photographs of surviving sites to supplement text descriptions.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.1', 'RH.6-8.2', 'RH.6-8.7', 'WHST.6-8.3'],
        c3Framework: ['D2.His.1.6-8', 'D2.His.3.6-8', 'D2.Geo.4.6-8', 'D2.Civ.6.6-8'],
        njsls: ['6.1.8.HistoryCC.3.d', '6.1.8.HistoryCC.3.e'],
        note: 'Aligned to Common Core literacy standards, C3 Framework, and New Jersey Student Learning Standards for Social Studies.',
      },
    },
  });

  await prisma.lessonPlan.upsert({
    where: { id: 'elizabeth-lesson-liberty-for-whom' },
    update: {},
    create: {
      id: 'elizabeth-lesson-liberty-for-whom',
      townId: TOWN_ID,
      title: 'Liberty for Whom? Slavery and Freedom in Revolutionary Elizabethtown',
      slug: 'elizabeth-liberty-for-whom',
      gradeRange: '9-12',
      estimatedDuration: '3-4 class periods',
      summary: 'Students examine the contradiction between the Revolutionary rhetoric of liberty and the reality of slavery in Elizabethtown, analyzing how enslaved people navigated the war, how British offers of emancipation complicated the conflict, and why New Jersey was the last Northern state to begin abolishing slavery.',
      lessonData: {
        objectives: [
          'Analyze the role of enslaved people in Elizabethtown during the Revolutionary period',
          'Evaluate the impact of British emancipation offers on enslaved people and patriot slaveholders',
          'Explain why New Jersey maintained slavery longer than other Northern states',
          'Assess the gap between Revolutionary ideals and practices regarding human bondage',
        ],
        essentialQuestions: [
          'How did enslaved people in Elizabethtown experience the Revolution?',
          'What choices did the Arthur Kill waterway create for enslaved people seeking freedom?',
          'Why did patriots who proclaimed liberty continue to hold people in bondage?',
          'What does the persistence of slavery in New Jersey tell us about the limits of the Revolution?',
        ],
        warmUp: {
          duration: '15 minutes',
          activity: 'Display side by side: (1) a passage from the Declaration of Independence about equality and unalienable rights, and (2) the 1790 census data showing hundreds of enslaved people in Essex County, New Jersey. Ask students: How do we reconcile these two facts? Discuss how the same community could produce a signer of the Declaration and maintain the institution of slavery.',
        },
        directInstruction: {
          duration: '25 minutes',
          content: [
            'Slavery in colonial Elizabethtown: the demographics, the labor, the legal framework under New Jersey law',
            'Lord Dunmore\'s Proclamation (1775) and Clinton\'s Philipsburg Proclamation (1779): British offers of freedom to enslaved people who fled patriot masters',
            'The geography of escape: the Arthur Kill as a boundary between slavery and the possibility of freedom on British-held Staten Island',
            'After the war: New Jersey\'s gradual emancipation act of 1804, the persistence of slavery until the Thirteenth Amendment (1865)',
          ],
        },
        guidedPractice: {
          duration: '35 minutes',
          activities: [
            'Document Analysis: Students examine excerpts from (1) Lord Dunmore\'s Proclamation, (2) the Philipsburg Proclamation, (3) a New Jersey slaveholder\'s petition, and (4) the 1804 New Jersey gradual emancipation act. For each document, students complete a structured analysis identifying the author\'s purpose, intended audience, and implications for enslaved people in the Elizabethtown area.',
            'Decision Tree: Students construct a decision tree showing the choices available to an enslaved person in Elizabethtown in 1779: stay, attempt to reach British lines across the Arthur Kill, seek service with the Continental Army, or other options. For each choice, students identify potential outcomes and risks.',
          ],
        },
        independentPractice: {
          duration: '30 minutes',
          assignment: 'Write a 500-word analytical essay answering the question: "Did the American Revolution advance or limit the cause of freedom for enslaved people in New Jersey?" Your essay must reference at least three specific historical facts about slavery in the Elizabethtown area, address the British emancipation offers, and explain why New Jersey was the last Northern state to begin emancipation. Use evidence from the primary source documents analyzed in class.',
        },
        closure: {
          duration: '15 minutes',
          activity: 'Socratic seminar: Is a revolution for liberty meaningful if it does not extend liberty to all people? How should modern communities like Elizabeth acknowledge and address the history of slavery in their founding? Exit ticket: Identify one specific way the Arthur Kill created both opportunity and danger for enslaved people in the Elizabethtown area.',
        },
        differentiation: {
          struggling: 'Provide a pre-filled decision tree template with some options already identified. Offer an essay outline with thesis, evidence sections, and conclusion structure.',
          advanced: 'Research the Book of Negroes — the British ledger of Black Loyalists who evacuated with the British in 1783 — and investigate whether any entries correspond to people from the Elizabethtown area. Write a supplementary analysis.',
          ell: 'Provide a glossary of key terms (emancipation, proclamation, gradual, bondage, manumission). Translate key primary source excerpts into simplified English. Allow collaborative essay drafting.',
        },
      },
      standards: {
        commonCore: ['RH.9-10.1', 'RH.9-10.2', 'RH.9-10.6', 'RH.9-10.9', 'WHST.9-10.1'],
        c3Framework: ['D2.His.1.9-12', 'D2.His.4.9-12', 'D2.His.5.9-12', 'D2.Civ.3.9-12', 'D2.Civ.10.9-12'],
        njsls: ['6.1.12.HistoryCC.3.a', '6.1.12.HistoryUP.3.b'],
        note: 'Aligned to Common Core literacy standards, C3 Framework, and New Jersey Student Learning Standards for Social Studies.',
      },
    },
  });

  await prisma.lessonPlan.upsert({
    where: { id: 'elizabeth-lesson-spies-and-secrets' },
    update: {},
    create: {
      id: 'elizabeth-lesson-spies-and-secrets',
      townId: TOWN_ID,
      title: 'Spies and Secrets: Intelligence Networks in Revolutionary Elizabethtown',
      slug: 'elizabeth-spies-and-secrets',
      gradeRange: '5-8 (adaptable)',
      estimatedDuration: '2 class periods',
      summary: 'Students explore the intelligence operations that ran through Elizabethtown during the Revolution, examining how Elias Boudinot and others used the town\'s position on the Arthur Kill to gather information about British forces on Staten Island. Through activities involving coded messages and geographic analysis, students learn about the hidden side of the war.',
      lessonData: {
        objectives: [
          'Explain why Elizabethtown was an important location for intelligence gathering',
          'Describe how Elias Boudinot used his role as Commissary General to gather intelligence',
          'Analyze the geographic features that made the Arthur Kill corridor useful for espionage',
          'Evaluate the risks faced by spies and informants during the Revolution',
        ],
        essentialQuestions: [
          'Why was Elizabethtown a natural hub for spy operations?',
          'How did Elias Boudinot combine his official duties with intelligence work?',
          'What risks did informants face, and why did they take those risks?',
          'How did information change the course of the war?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Show students a message written in invisible ink (use lemon juice on paper, revealed by heat). Explain that this was an actual technique used during the Revolution. Ask: Why would someone risk their life to carry a secret message? What kind of information would be worth that risk?',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'Elizabethtown\'s geography: why its position on the Arthur Kill, across from British-held Staten Island, made it ideal for intelligence operations',
            'Elias Boudinot\'s dual role: Commissary General of Prisoners and intelligence coordinator',
            'Methods of communication: invisible ink, coded messages, trusted couriers, meetings under flags of truce',
            'The dangers: what happened to spies who were caught (execution by hanging)',
          ],
        },
        guidedPractice: {
          duration: '25 minutes',
          activities: [
            'Code-Breaking Activity: Students receive a coded message using a simple substitution cipher similar to those used during the Revolution. Working in pairs, they decode the message, which contains information about a fictional British troop movement on Staten Island.',
            'Intelligence Report: Students receive fragments of information from different sources (a fisherman\'s observation, a prisoner\'s offhand comment, a merchant\'s report) and must assemble them into a coherent intelligence report for General Washington.',
          ],
        },
        independentPractice: {
          duration: '20 minutes',
          assignment: 'You are an agent working for Elias Boudinot in 1778. Write a brief intelligence report (one page) describing something you observed on Staten Island. Your report must explain how you crossed the Arthur Kill, what you observed, and why the information matters to the American cause. Use realistic geographic details from the Elizabethtown area.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Discussion: Why do we hear more about battles than about intelligence operations? How might the war have been different without the information that flowed through places like Elizabethtown? Exit ticket: Name two reasons Elizabethtown was well-suited for intelligence gathering.',
        },
        differentiation: {
          struggling: 'Provide a partially completed code key for the cipher activity. Offer a template for the intelligence report with prompts for each section.',
          advanced: 'Research the Culper Ring (Washington\'s spy network operating in New York) and compare its methods to the intelligence operations in Elizabethtown. Write a comparison.',
          ell: 'Provide a glossary of key terms (intelligence, cipher, informant, courier, flag of truce). Pair with fluent speakers for the code-breaking activity.',
        },
      },
      standards: {
        commonCore: ['RI.6.1', 'RI.6.7', 'W.6.3', 'SL.6.1'],
        c3Framework: ['D2.His.1.6-8', 'D2.His.3.6-8', 'D2.Geo.2.6-8'],
        njsls: ['6.1.8.HistoryCC.3.c'],
        note: 'Aligned to Common Core ELA standards, C3 Framework, and New Jersey Student Learning Standards for Social Studies.',
      },
    },
  });

  console.log('  Lessons seeded.');
}

// =============================================================================
// MAIN
// =============================================================================

async function main() {
  console.log('Seeding Elizabeth, NJ content...');

  await seedPeople();
  await seedPeoplePartTwo();
  await seedTownPeople();
  await seedPlaces();
  await seedEvents();
  await seedEventPeople();
  await seedStories();
  await seedLessons();

  console.log('Elizabeth, NJ content seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
