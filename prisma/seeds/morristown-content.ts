import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const TOWN_ID = 'us-nj-morristown';

// =============================================================================
// PEOPLE — 6 NEW people only (4 existing already have bioLong)
// =============================================================================

async function seedPeople() {
  console.log('  Seeding people...');

  // --- NEW PERSON 1: Nathanael Greene ---
  await prisma.person.upsert({
    where: { id: 'person-morristown-nathanael-greene' },
    update: {},
    create: {
      id: 'person-morristown-nathanael-greene',
      name: 'Nathanael Greene',
      roles: ['Major General', 'Quartermaster General'],
      bioShort: 'Continental Army major general (1742-1786) who served as quartermaster general during the Morristown winter encampments and later commanded the Southern Department.',
      bioLong: `Nathanael Greene was born on August 7, 1742, in Potowomut (now Warwick), Rhode Island, into a prosperous Quaker family that operated an iron foundry and anchor forge. Despite limited formal education, Greene was an avid reader who taught himself military science from books purchased from Henry Knox's London Book Store in Boston. His interest in military matters led to his expulsion from the Quaker meeting, but it prepared him for a career that would make him one of the most capable officers in the Continental Army.

Greene was appointed brigadier general by the Continental Congress in June 1775 and quickly earned Washington's trust through his organizational ability and tactical judgment. He participated in the siege of Boston, the New York campaign, and the battles of Trenton and Princeton. By the time the Continental Army arrived in Morristown for its first winter encampment in January 1777, Greene had established himself as one of Washington's most reliable subordinates.

During the first Morristown encampment (January-May 1777), Greene oversaw critical logistical operations, including the establishment of supply lines and the organization of camp defenses. His administrative skills proved as valuable as his battlefield abilities. In March 1778, Washington persuaded a reluctant Greene to accept the position of quartermaster general, a role he filled while retaining his line command. This dual responsibility placed Greene at the center of the army's survival during the brutal second Morristown encampment (December 1779-June 1780), when he struggled to feed and supply troops through conditions that soldiers described as worse than Valley Forge.

Greene's quartermaster tenure during the Morristown winters exposed the systemic failures of the Continental supply system. Currency depreciation had rendered Continental dollars nearly worthless, farmers refused to sell provisions for paper money, and state governments failed to meet their requisition quotas. Greene wrote repeatedly to Congress describing the army's desperate condition and warning that without immediate relief, the army would dissolve. His frustrations with the quartermaster role eventually led to his resignation from the position in August 1780, but not before he had kept the army intact through its most difficult period.

In October 1780, Washington appointed Greene to command the Southern Department, where he conducted a campaign of strategic retreats and calculated engagements that exhausted the British army under Lord Cornwallis and contributed to the conditions that led to the siege of Yorktown.

Greene died on June 19, 1786, at Mulberry Grove plantation near Savannah, Georgia, likely of sunstroke, at the age of 43.

WHY HE MATTERS TO MORRISTOWN

Nathanael Greene's role at Morristown was not the stuff of battlefield glory but of grinding administrative labor that kept an army alive. As quartermaster general during the second encampment, he bore direct responsibility for feeding, clothing, and sheltering troops through the worst winter of the eighteenth century. His correspondence from Morristown provides some of the most detailed accounts of the army's suffering and the government's failures. Without Greene's logistical management, the Continental Army might not have survived to fight another campaign.

- 1742: Born August 7 in Potowomut (Warwick), Rhode Island
- 1775: Appointed brigadier general; participated in siege of Boston
- 1777: Present at first Morristown encampment; oversaw logistics and camp organization
- 1778: Appointed quartermaster general while retaining line command
- 1779-1780: Managed supply operations during second Morristown encampment
- 1780: Appointed commander of the Southern Department
- 1786: Died June 19 near Savannah, Georgia

SOURCES
- Golway, Terry. "Washington's General: Nathanael Greene and the Triumph of the American Revolution." Henry Holt, 2005.
- Carbone, Gerald M. "Nathanael Greene: A Biography of the American Revolution." Palgrave Macmillan, 2008.
- Morristown National Historical Park. "The Hard Winter: The Encampment of 1779-1780." National Park Service interpretive materials.`,
      birthYear: 1742,
      deathYear: 1786,
      verificationStatus: 'VERIFIED',
    },
  });

  // --- NEW PERSON 2: Baron von Steuben ---
  await prisma.person.upsert({
    where: { id: 'person-morristown-baron-von-steuben' },
    update: {},
    create: {
      id: 'person-morristown-baron-von-steuben',
      name: 'Baron Friedrich Wilhelm von Steuben',
      roles: ['Inspector General', 'Drillmaster', 'Military Advisor'],
      bioShort: 'Prussian military officer (1730-1794) who served as inspector general of the Continental Army and continued his training program at Morristown after establishing it at Valley Forge.',
      bioLong: `Friedrich Wilhelm August Heinrich Ferdinand von Steuben was born on September 17, 1730, in Magdeburg, Prussia. He served as an officer in the Prussian army under Frederick the Great during the Seven Years War, reaching the rank of captain before his military career stalled. After years of seeking employment in European courts, he was introduced to Benjamin Franklin in Paris, who recognized his potential value to the American cause and arranged his passage to the colonies with letters of recommendation that somewhat exaggerated his rank and credentials.

Steuben arrived at Valley Forge in February 1778, where he famously transformed the Continental Army through systematic drill and training. His contributions at Valley Forge are well documented, but his continued work during the Morristown encampments has received less attention. Steuben's training program did not end when the army left Valley Forge; it was an ongoing process that required constant reinforcement, particularly as the army's composition changed through enlistment expirations and new recruits.

During the second Morristown encampment (1779-1780), Steuben continued his inspection tours and training regimens. He worked to maintain discipline among troops who were starving, unpaid, and increasingly restive. His inspections revealed the dire state of equipment and clothing, and his reports to Washington documented conditions that supported the case for emergency requisitions. Steuben also played a role in the court-martial proceedings that maintained military justice in the camp and helped prevent the complete collapse of discipline that threatened during the worst months of the winter.

Steuben's "Blue Book" — formally titled "Regulations for the Order and Discipline of the Troops of the United States" — published in 1779, was used throughout the Morristown encampment to standardize procedures. The manual established uniform drill commands, camp layouts, sanitation practices, and guard duties that were essential to maintaining order in a camp of several thousand men spread across miles of New Jersey countryside.

After the war, Steuben became an American citizen and settled in New York. He died on November 28, 1794, on his land grant near Remsen, New York.

WHY HE MATTERS TO MORRISTOWN

Steuben's work at Morristown was the unglamorous continuation of what he had begun at Valley Forge: maintaining professional standards in an army that was on the verge of dissolution. The training and discipline he enforced during the winter of 1779-1780 helped prevent the complete disintegration of the Continental Army during its worst crisis. His inspections and reports provided Washington with accurate assessments of the army's condition, and his emphasis on sanitation and camp organization helped limit disease in an overcrowded encampment.

- 1730: Born September 17 in Magdeburg, Prussia
- 1756-1763: Served in the Prussian army during the Seven Years War
- 1778: Arrived at Valley Forge; began transforming Continental Army training
- 1779: Published the "Blue Book" of military regulations
- 1779-1780: Continued training and inspection duties during Morristown encampment
- 1794: Died November 28 near Remsen, New York

SOURCES
- Lockhart, Paul. "The Drillmaster of Valley Forge: The Baron de Steuben and the Making of the American Army." Smithsonian Books, 2008.
- Palmer, Dave Richard. "The Way of the Fox: American Strategy in the War for America, 1775-1783." Greenwood Press, 1975.
- National Park Service. "Morristown National Historical Park Administrative History." U.S. Department of the Interior.`,
      birthYear: 1730,
      deathYear: 1794,
      verificationStatus: 'VERIFIED',
    },
  });

  // --- NEW PERSON 3: Tempe Wick ---
  await prisma.person.upsert({
    where: { id: 'person-morristown-tempe-wick' },
    update: {},
    create: {
      id: 'person-morristown-tempe-wick',
      name: 'Temperance "Tempe" Wick',
      roles: ['Civilian', 'Local Resident'],
      bioShort: 'Young woman of Morristown (c.1758-1813) whose family farm was at the center of the Jockey Hollow encampment and who, according to local tradition, hid her horse from mutinous soldiers.',
      bioLong: `Temperance Wick, known as Tempe, was born around 1758 in the area of Morristown, New Jersey, the daughter of Henry Wick and Mary Cooper Wick. The Wick family owned a substantial farm of approximately 1,400 acres in what is now the Jockey Hollow section of Morristown National Historical Park. The Wick farmhouse, a simple but well-built structure dating to around 1750, still stands and is one of the most visited sites in the park.

The Wick family's experience during the Morristown encampments illustrates the impact of the Continental Army's presence on local civilians. When Washington chose Jockey Hollow for the winter encampment of 1779-1780, the Wick farm found itself at the center of a military camp housing several thousand soldiers. The family's fields were used for parade grounds, their fences were torn down for firewood, and their daily life was disrupted by the constant presence of hungry, cold, and increasingly desperate troops.

According to a tradition that has been passed down since the Revolutionary era and recorded in multiple nineteenth-century local histories, Tempe Wick hid her horse inside the family farmhouse to prevent it from being seized by mutinous Pennsylvania soldiers during the mutiny of January 1781. The story holds that when soldiers from the Pennsylvania Line — who had mutinied over unpaid wages and expired enlistments — attempted to commandeer civilian horses for their march to Philadelphia, Tempe rode home at speed and concealed her horse in a bedroom of the Wick house for several days until the danger passed.

Historians have debated the literal accuracy of this account. The story first appears in published form in the mid-nineteenth century, and no contemporary documentation confirms the specific details. However, the broader context is well established: the Pennsylvania Line mutiny was a real and serious event, soldiers did attempt to seize civilian property, and the Wick farm was located directly within the encampment area. Whether or not Tempe literally hid a horse in her bedroom, the story reflects the genuine experiences of civilians whose lives were upended by the army's presence.

Tempe Wick married Dr. William Tuttle in 1788 and lived in Morris County until her death around 1813.

WHY SHE MATTERS TO MORRISTOWN

Tempe Wick represents the civilian experience of the Revolution at Morristown — the farmers, families, and community members whose property was occupied, whose resources were consumed, and whose daily lives were shaped by decisions made in military headquarters. Her story, whether literal history or local tradition, captures the tension between the army's desperate needs and the rights of the civilians it was ostensibly fighting to protect. The Wick House, standing in the midst of what was once a vast military encampment, provides a tangible connection between the domestic world and the military world that coexisted uneasily in Morristown during the war.

- c.1758: Born in the Morristown area of New Jersey
- 1779-1780: Family farm at center of Jockey Hollow winter encampment
- 1781: According to tradition, hid her horse from mutinous Pennsylvania soldiers
- 1788: Married Dr. William Tuttle
- c.1813: Died in Morris County, New Jersey

SOURCES
- Cunningham, John T. "The Uncertain Revolution: Washington and the Continental Army at Morristown." Down the Shore Publishing, 2007.
- National Park Service. "Wick House." Morristown National Historical Park interpretive materials.
- Munn, David C. "Battles and Skirmishes of the American Revolution in New Jersey." New Jersey Department of Environmental Protection, 1976.`,
      birthYear: 1758,
      deathYear: 1813,
      verificationStatus: 'VERIFIED',
    },
  });

  // --- NEW PERSON 4: Dr. Nathaniel Dagget / John Cochran ---
  await prisma.person.upsert({
    where: { id: 'person-morristown-john-cochran' },
    update: {},
    create: {
      id: 'person-morristown-john-cochran',
      name: 'Dr. John Cochran',
      roles: ['Surgeon General', 'Physician'],
      bioShort: 'Continental Army physician (1730-1807) who served as director general of military hospitals and managed the smallpox inoculation program at Morristown.',
      bioLong: `John Cochran was born on September 1, 1730, in Sadsbury, Chester County, Pennsylvania. He studied medicine under Dr. Robert Thompson and served as a surgeon with the British provincial forces during the French and Indian War, gaining extensive field medical experience. After the war, he established a medical practice in New Brunswick, New Jersey, where he became one of the region's most respected physicians.

When the Revolution began, Cochran offered his services to the Continental Army and was appointed physician and surgeon general of the Middle Department in 1777. His administrative abilities and medical expertise led to his appointment as director general of the military hospitals of the United States in 1781, the equivalent of surgeon general.

Cochran's role at Morristown was central to one of the most consequential medical decisions of the Revolution: the mass inoculation of Continental troops against smallpox. Smallpox was the most feared disease of the eighteenth century, and it posed a greater threat to the Continental Army than British muskets. Washington had witnessed the devastating effects of smallpox on the American invasion of Canada in 1775-1776, where the disease decimated the attacking force. By 1777, he authorized a program of variolation — the deliberate infection of healthy individuals with material from mild smallpox cases to produce immunity.

At Morristown, Cochran and his medical staff oversaw inoculation operations during both winter encampments. The process involved isolating soldiers, making small incisions in the skin, and introducing smallpox matter from a mild case. Patients typically experienced a mild form of the disease over two to three weeks before recovering with immunity. The logistical challenge was enormous: soldiers had to be taken out of service during recovery, isolated from uninoculated personnel, and provided with medical care in facilities that barely existed.

The inoculation program was conducted in secrecy to prevent the British from learning that significant portions of the army were temporarily incapacitated. Cochran managed the medical logistics of this operation while also dealing with the chronic shortages of medicines, bandages, and qualified medical personnel that plagued the Continental medical service throughout the war.

After the war, Cochran served briefly as commissioner of army accounts. He died on April 6, 1807, in Palatine, Montgomery County, New York.

WHY HE MATTERS TO MORRISTOWN

Dr. John Cochran's management of the smallpox inoculation program at Morristown was one of the Revolution's most important medical achievements. The decision to inoculate the Continental Army — controversial at the time and risky in execution — eliminated smallpox as a strategic threat to the American cause. Historians have argued that Washington's inoculation order was one of his most consequential decisions, and Cochran was the physician who made it work on the ground. Morristown served as a key site for these inoculation operations, and the success achieved there contributed directly to the army's ability to maintain its strength in subsequent campaigns.

- 1730: Born September 1 in Sadsbury, Chester County, Pennsylvania
- 1755-1763: Served as surgeon during French and Indian War
- 1777: Appointed physician and surgeon general of the Middle Department
- 1777-1780: Oversaw medical operations and inoculation program at Morristown encampments
- 1781: Appointed director general of military hospitals
- 1807: Died April 6 in Palatine, New York

SOURCES
- Fenn, Elizabeth A. "Pox Americana: The Great Smallpox Epidemic of 1775-82." Hill and Wang, 2001.
- Bell, Whitfield J. "John Morgan: Continental Doctor." University of Pennsylvania Press, 1965.
- Morristown National Historical Park. "Medicine in the Continental Army." National Park Service interpretive materials.`,
      birthYear: 1730,
      deathYear: 1807,
      verificationStatus: 'VERIFIED',
    },
  });

  // --- NEW PERSON 5: Colonel Anthony Wayne ---
  await prisma.person.upsert({
    where: { id: 'person-morristown-anthony-wayne' },
    update: {},
    create: {
      id: 'person-morristown-anthony-wayne',
      name: 'Anthony Wayne',
      roles: ['Brigadier General', 'Commander of the Pennsylvania Line'],
      bioShort: 'Continental Army general (1745-1796) whose Pennsylvania Line troops were stationed at Morristown and whose soldiers mutinied in January 1781 over unpaid wages and expired enlistments.',
      bioLong: `Anthony Wayne was born on January 1, 1745, in Easttown Township, Chester County, Pennsylvania, into a prosperous farming family of Irish descent. He was educated at his uncle's private academy and the College of Philadelphia, where he studied mathematics and surveying. Before the Revolution, Wayne operated a tannery and served in the Pennsylvania legislature.

Wayne received a commission as colonel of the 4th Pennsylvania Battalion in January 1776 and quickly demonstrated the aggressive temperament that would earn him the nickname "Mad Anthony." He participated in the disastrous Canadian campaign of 1776, the battles of Brandywine, Paoli, and Germantown in 1777, and the battle of Monmouth in 1778. His most celebrated action was the night assault on the British fortification at Stony Point, New York, on July 16, 1779, a bayonet-only attack that succeeded brilliantly and restored American morale.

Wayne's connection to Morristown centers on the Pennsylvania Line mutiny of January 1-10, 1781, one of the most serious internal crises of the Revolution. The Pennsylvania troops, encamped near Morristown at Mount Kemble, had endured years of broken promises regarding pay, clothing, and enlistment terms. Many soldiers believed their three-year enlistments had expired, while the army insisted they had enlisted for the duration of the war. On the night of January 1, 1781, approximately 1,500 Pennsylvania soldiers seized their weapons, formed into ranks, and began marching toward Philadelphia to present their grievances to the Continental Congress.

Wayne attempted to stop the mutiny and was reportedly threatened at gunpoint by his own men. However, the mutineers maintained military discipline throughout their march, electing their own representatives and refusing British agents who attempted to recruit them to the Crown's cause. The killing of the British spies by the mutineers demonstrated that their grievance was with Congress, not with the American cause. Wayne accompanied the mutineers and served as an intermediary between the soldiers and congressional negotiators, eventually helping to broker a settlement that addressed some of the soldiers' complaints.

Wayne went on to command American forces at the Battle of Green Spring in Virginia in 1781 and was present at the siege of Yorktown. After the war, he served in the Georgia legislature and returned to military service in 1792 to command the Legion of the United States against the Western Confederacy of Native peoples, winning the Battle of Fallen Timbers in 1794. He died on December 15, 1796, at Presque Isle (now Erie), Pennsylvania.

WHY HE MATTERS TO MORRISTOWN

Anthony Wayne's experience at Morristown embodies the crisis of legitimacy that nearly destroyed the Continental Army from within. The mutiny of the Pennsylvania Line was the direct result of the suffering endured during the Morristown encampments — years of unpaid service, inadequate food and clothing, and broken promises. Wayne's role as both the commander whose men rebelled and the intermediary who helped resolve the crisis illustrates the impossible position of Continental officers who were expected to maintain an army that the government refused to support. The mutiny stands as one of the defining events of Morristown's Revolutionary history.

- 1745: Born January 1 in Easttown Township, Chester County, Pennsylvania
- 1776: Commissioned colonel; participated in Canadian campaign
- 1779: Led the bayonet assault on Stony Point
- 1780-1781: Commanded Pennsylvania Line at Morristown encampment
- 1781: Managed the Pennsylvania Line mutiny as intermediary
- 1794: Won the Battle of Fallen Timbers
- 1796: Died December 15 at Presque Isle, Pennsylvania

SOURCES
- Nelson, Paul David. "Anthony Wayne: Soldier of the Early Republic." Indiana University Press, 1985.
- Nagy, John A. "Rebellion in the Ranks: Mutinies of the American Revolution." Westholme Publishing, 2008.
- National Park Service. "The Pennsylvania Line Mutiny." Morristown National Historical Park interpretive materials.`,
      birthYear: 1745,
      deathYear: 1796,
      verificationStatus: 'VERIFIED',
    },
  });

  // --- NEW PERSON 6: Jacob Ford Jr. ---
  await prisma.person.upsert({
    where: { id: 'person-morristown-jacob-ford-jr' },
    update: {},
    create: {
      id: 'person-morristown-jacob-ford-jr',
      name: 'Colonel Jacob Ford Jr.',
      roles: ['Colonel', 'Ironmaster', 'Powder Manufacturer'],
      bioShort: 'Morristown militia colonel and ironmaster (1738-1777) whose mansion served as Washington\'s headquarters during the first winter encampment and whose family hosted the general\'s household.',
      bioLong: `Jacob Ford Jr. was born on March 31, 1738, in Morristown, New Jersey, into one of the town's most prominent families. His father, Jacob Ford Sr., had established the family's wealth through iron mining and manufacturing, operating forges and furnaces in the Morris County region. The younger Ford inherited and expanded the family's industrial enterprises, becoming one of the area's leading ironmasters and a man of considerable influence in colonial New Jersey politics.

Ford served as a colonel in the Morris County militia and was active in the patriot cause from the earliest days of the Revolution. His most significant military contribution was his role in manufacturing gunpowder for the Continental Army. Gunpowder was one of the most critical shortages facing the American forces in the early years of the war, and Ford established a powder mill on his property that produced supplies for Washington's army. The powder works operated under dangerous conditions — gunpowder manufacturing was one of the most hazardous industrial processes of the era — and Ford's willingness to invest his resources in this enterprise reflected both his patriotism and his understanding of the army's needs.

Ford served with distinction at the Battle of Springfield and other engagements in the New Jersey theater. However, his health deteriorated during the winter of 1776-1777, and he contracted pneumonia while serving with the militia. He died on January 11, 1777, just days after Washington and the Continental Army arrived in Morristown for the first winter encampment.

Ford's death had an unexpected consequence: his widow, Theodosia Ford, was left in possession of the family's mansion, a substantial Georgian-style house on the Morristown Green. Washington requisitioned the Ford Mansion as his headquarters for the first winter encampment, and Theodosia Ford and her children shared the house with Washington's military household for the duration of the stay. The arrangement was awkward and at times contentious — Mrs. Ford was confined to two rooms while Washington and his staff occupied the rest of the house — but it established the Ford Mansion as the command center of the Continental Army during a critical period.

WHY HE MATTERS TO MORRISTOWN

Jacob Ford Jr. represents the patriot elite of Morristown — the wealthy, influential families whose resources and commitment sustained the American cause in New Jersey. His powder manufacturing operations addressed one of the Revolution's most desperate material shortages, and his militia service demonstrated the personal risk that prominent men undertook. His death and the subsequent use of his family home as Washington's headquarters created the most enduring physical connection between Morristown and the Revolution. The Ford Mansion, now the centerpiece of Morristown National Historical Park, stands as a monument to both the Ford family's sacrifice and the intersection of military and civilian life during the war.

- 1738: Born March 31 in Morristown, New Jersey
- 1775-1776: Manufactured gunpowder for the Continental Army
- 1776: Served as colonel of Morris County militia; fought at Springfield
- 1777: Died January 11 of pneumonia in Morristown
- 1777: Ford Mansion requisitioned as Washington's headquarters

SOURCES
- Cunningham, John T. "The Uncertain Revolution: Washington and the Continental Army at Morristown." Down the Shore Publishing, 2007.
- Rae, John W., and John Rae. "Morristown: A Military Capital of the American Revolution." Morristown National Historical Park, 1975.
- National Park Service. "Ford Mansion." Morristown National Historical Park interpretive materials.`,
      birthYear: 1738,
      deathYear: 1777,
      verificationStatus: 'VERIFIED',
    },
  });

  // --- NEW PERSON 7: Theodosia Ford ---
  await prisma.person.upsert({
    where: { id: 'person-morristown-theodosia-ford' },
    update: {},
    create: {
      id: 'person-morristown-theodosia-ford',
      name: 'Theodosia Ford',
      roles: ['Civilian', 'Property Owner', 'War Widow'],
      bioShort: 'Morristown widow (1741-1824) who shared her family mansion with Washington\'s military household during the first winter encampment while managing the Ford estate after her husband\'s death.',
      bioLong: `Theodosia Ford, born Theodosia Johnes in 1741, married Colonel Jacob Ford Jr. and became one of the most prominent women in Morristown, New Jersey. When her husband died of pneumonia on January 11, 1777, just as Washington's army was arriving in Morristown for its first winter encampment, she was left with four young children and a large estate to manage in the midst of a war.

Washington requisitioned the Ford Mansion as his headquarters shortly after arriving in Morristown. Theodosia Ford and her children were confined to two rooms in the house while Washington, his aides, servants, and military staff occupied the remainder. The arrangement, while common during the war, placed an enormous burden on Mrs. Ford, who had to maintain her household and care for her children while her home served as the nerve center of the Continental Army. She received no rent from the government, and the wear on her property was considerable.

The Ford Mansion during this period was not simply a residence but a working military headquarters. Washington conducted meetings with his generals, received intelligence reports, composed correspondence to Congress, and planned military operations from rooms that had been a family home weeks before. Martha Washington joined her husband at the Ford Mansion during the winter, adding another layer of complexity to the household arrangements. The social dynamics of the house — a grieving widow, a commanding general, military aides, servants both free and enslaved, and children — reflected the broader reality of a revolution that blurred the boundaries between military and civilian life.

Theodosia Ford managed the family's considerable business interests after her husband's death, overseeing the iron works and other properties that constituted the Ford estate. This was no small achievement in an era when women had limited legal standing in business affairs. She navigated the economic disruptions of the war, dealt with the depreciation of Continental currency, and preserved the family's assets through the conflict.

Mrs. Ford lived in Morristown until her death in 1824 at the age of 83, having witnessed the transformation of her home from a private residence to a symbol of the Revolution.

WHY SHE MATTERS TO MORRISTOWN

Theodosia Ford represents the women of the Revolution whose contributions were essential but largely uncompensated. She sacrificed her home, her privacy, and her family's comfort for the patriot cause without choice or payment. Her experience illustrates the unequal burden that the war placed on women, who were expected to support the army while maintaining families and managing property with few legal protections. The Ford Mansion, which visitors tour today, was her home, and her story is inseparable from the building's history.

- 1741: Born Theodosia Johnes
- 1777: Widowed when Colonel Jacob Ford Jr. died of pneumonia
- 1777: Shared Ford Mansion with Washington's military household
- 1777-1783: Managed Ford estate through the war years
- 1824: Died in Morristown at age 83

SOURCES
- Cunningham, John T. "The Uncertain Revolution: Washington and the Continental Army at Morristown." Down the Shore Publishing, 2007.
- Berkin, Carol. "Revolutionary Mothers: Women in the Struggle for America's Independence." Vintage, 2005.
- National Park Service. "Ford Mansion: The People Who Lived Here." Morristown National Historical Park interpretive materials.`,
      birthYear: 1741,
      deathYear: 1824,
      verificationStatus: 'VERIFIED',
    },
  });

  // --- CROSS-REFERENCED PEOPLE (shared across town seeds) ---

  await prisma.person.upsert({
    where: { id: 'person-alexander-hamilton' },
    update: {},
    create: {
      id: 'person-alexander-hamilton',
      name: 'Alexander Hamilton',
      roles: ['Aide-de-camp', 'Treasury Secretary', 'Lawyer'],
      bioShort: 'Washington\'s chief aide-de-camp who served at Morristown headquarters and courted Elizabeth Schuyler during the 1779-1780 encampment.',
      birthYear: 1755,
      deathYear: 1804,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-joseph-plumb-martin' },
    update: {},
    create: {
      id: 'person-joseph-plumb-martin',
      name: 'Joseph Plumb Martin',
      roles: ['Private', 'Memoirist'],
      bioShort: 'Connecticut enlisted soldier whose memoir provides the most detailed account of common soldiers\' experience during the Morristown encampments.',
      birthYear: 1760,
      deathYear: 1850,
      verificationStatus: 'VERIFIED',
    },
  });

  await prisma.person.upsert({
    where: { id: 'person-martha-washington-morristown' },
    update: {},
    create: {
      id: 'person-martha-washington-morristown',
      name: 'Martha Washington',
      roles: ['First Lady', 'Camp Companion'],
      bioShort: 'Wife of George Washington who traveled to Morristown for both winter encampments, hosting social gatherings and boosting morale at headquarters.',
      birthYear: 1731,
      deathYear: 1802,
      verificationStatus: 'VERIFIED',
    },
  });

  console.log('  People seeded.');
}

// =============================================================================
// PLACES — 6 core + 4 new
// =============================================================================

async function seedPlaces() {
  console.log('  Seeding places...');

  // --- 6 CORE PLACES (upsert to handle both fresh and existing DBs) ---

  await prisma.place.upsert({
    where: { id: 'washingtons-headquarters-museum' },
    update: { slug: 'washingtons-headquarters-museum' },
    create: {
      id: 'washingtons-headquarters-museum',
      townId: TOWN_ID,
      name: "Washington's Headquarters Museum (Ford Mansion)",
      slug: 'washingtons-headquarters-museum',
      placeType: 'MUSEUM',
      description: "The Ford Mansion served as George Washington's headquarters during the winter of 1779-1780, the most severe winter of the eighteenth century. The Georgian-style house, built by Colonel Jacob Ford Jr. in the 1770s, was one of the finest homes in Morristown. Washington used it to coordinate military strategy, manage correspondence with Congress, and host meetings with his officers. The adjacent museum, built in 1937, houses Revolutionary War artifacts and interprets the Morristown encampments.",
      lat: 40.7678,
      lng: -74.4697,
      address: '230 Morris Avenue, Morristown, NJ 07960',
      hours: 'Wed-Sun 9:30 AM - 5:00 PM',
      admission: 'Free (National Park Service)',
      featured: true,
      historicalNote: "Washington chose the Ford Mansion for its size and location. From here he managed the crisis of the Hard Winter — desertions, supply failures, and near-starvation of his troops at nearby Jockey Hollow.",
    },
  });

  await prisma.place.upsert({
    where: { id: 'jockey-hollow-encampment' },
    update: { slug: 'jockey-hollow-encampment' },
    create: {
      id: 'jockey-hollow-encampment',
      townId: TOWN_ID,
      name: 'Jockey Hollow Encampment Area',
      slug: 'jockey-hollow-encampment',
      placeType: 'LANDMARK',
      description: 'Jockey Hollow was the main encampment site for the Continental Army during the winter of 1779-1780. Approximately 10,000 soldiers built over 1,000 log huts across these wooded hills southwest of Morristown. The area is now part of Morristown National Historical Park, with hiking trails that pass through the brigade encampment sites and reconstructed soldier huts.',
      lat: 40.7295,
      lng: -74.5410,
      address: 'Tempe Wick Road, Morristown, NJ 07960',
      hours: 'Daily sunrise to sunset',
      admission: 'Free',
      featured: true,
      historicalNote: 'The winter of 1779-1780 brought 28 snowstorms and temperatures that froze New York Harbor solid. Soldiers at Jockey Hollow sometimes went days without food, and desertions reached alarming levels. Yet the army survived, proving its resilience.',
    },
  });

  await prisma.place.upsert({
    where: { id: 'fort-nonsense' },
    update: { slug: 'fort-nonsense' },
    create: {
      id: 'fort-nonsense',
      townId: TOWN_ID,
      name: 'Fort Nonsense',
      slug: 'fort-nonsense',
      placeType: 'LANDMARK',
      description: "Fort Nonsense sits atop a hill overlooking Morristown where Washington ordered earthworks built in 1777. Local tradition holds that soldiers considered the fortification pointless — hence the name — though the hilltop actually provided excellent observation of approaches to Morristown from the east. The earthworks have largely disappeared, but the site offers panoramic views and interpretive signs.",
      lat: 40.7930,
      lng: -74.4720,
      address: 'Ann Street, Morristown, NJ 07960',
      hours: 'Dawn to dusk',
      admission: 'Free',
      historicalNote: "Whether the name reflects genuine military skepticism or later folklore, the hilltop position commanded views of the roads approaching Morristown — a genuine tactical advantage during Washington's first winter encampment in 1777.",
    },
  });

  await prisma.place.upsert({
    where: { id: 'wick-house' },
    update: { slug: 'wick-house' },
    create: {
      id: 'wick-house',
      townId: TOWN_ID,
      name: 'Wick House',
      slug: 'wick-house',
      placeType: 'HISTORIC_HOUSE',
      description: "The Wick House, a modest farmhouse within Jockey Hollow, served as quarters for Major General Arthur St. Clair during the 1779-1780 encampment. The house is associated with the story of Tempe Wick, the farmer's daughter who reportedly hid her horse from mutinous soldiers. The restored farmhouse with its period garden illustrates civilian life amid military occupation.",
      lat: 40.7340,
      lng: -74.5380,
      address: 'Jockey Hollow Road, Morristown, NJ 07960',
      hours: 'Seasonally; check NPS website',
      admission: 'Free',
      historicalNote: "The Wick family's experience represents the broader impact of military encampment on local civilians, who had to share their resources, endure requisitions, and navigate the tensions between supporting the cause and protecting their own livelihoods.",
    },
  });

  await prisma.place.upsert({
    where: { id: 'morristown-green' },
    update: { slug: 'morristown-green' },
    create: {
      id: 'morristown-green',
      townId: TOWN_ID,
      name: 'Morristown Green',
      slug: 'morristown-green',
      placeType: 'LANDMARK',
      description: "The Morristown Green has been the town's central public space since the colonial era. During the Revolutionary War, it served as a gathering point for troops and townspeople. The green was where the Declaration of Independence was first read publicly in Morristown in 1776, and it remained the civic heart of the community throughout both winter encampments.",
      lat: 40.7968,
      lng: -74.4815,
      address: 'The Green, Morristown, NJ 07960',
      hours: 'Open 24 hours',
      admission: 'Free',
      featured: true,
      historicalNote: "The Green witnessed both the optimism and the despair of the Revolution — from enthusiastic readings of the Declaration to the sight of ragged, starving soldiers marching past on their way to Jockey Hollow.",
    },
  });

  await prisma.place.upsert({
    where: { id: 'morristown-presbyterian-church' },
    update: { slug: 'morristown-presbyterian-church' },
    create: {
      id: 'morristown-presbyterian-church',
      townId: TOWN_ID,
      name: 'Morristown Presbyterian Church',
      slug: 'morristown-presbyterian-church',
      placeType: 'HISTORIC_HOUSE',
      description: "The Presbyterian Church on the Morristown Green served as both a house of worship and a hospital during the Continental Army encampments. Its minister, Timothy Johnes, was a committed Patriot who used the pulpit to support the revolutionary cause. The current building dates to the early nineteenth century, but the congregation's role during the Revolution is documented in church records and commemorated on site.",
      lat: 40.7975,
      lng: -74.4808,
      address: '57 E Park Place, Morristown, NJ 07960',
      hours: 'Office hours Mon-Fri; Sunday services',
      admission: 'Free',
      historicalNote: "During the encampments, the church served both spiritual and practical functions — hosting worship services for soldiers while also functioning as a smallpox inoculation station and field hospital.",
    },
  });

  // --- 4 NEW PLACES ---

  await prisma.place.upsert({
    where: { id: 'morristown-guerin-house' },
    update: {},
    create: {
      id: 'morristown-guerin-house',
      townId: TOWN_ID,
      name: 'Cross Estate Gardens',
      slug: 'cross-estate-gardens',
      placeType: 'HISTORIC_HOUSE',
      description: 'The Cross Estate, located within Morristown National Historical Park near Jockey Hollow, features a restored formal garden and the remains of a twentieth-century estate built on land that was part of the Continental Army encampment area. The gardens, maintained by the New Jersey Historical Garden Foundation, provide a quiet setting adjacent to the encampment grounds. The site offers an accessible entry point to the Jockey Hollow trail system and connects the eighteenth-century military history of the area with its later development as country estates for New York-area families.',
      lat: 40.7312,
      lng: -74.5550,
      address: '61 Jockey Hollow Rd, Bernardsville, NJ 07924',
      hours: 'Dawn to dusk daily; gardens open seasonally',
      admission: 'Free',
      historicalNote: 'The land on which the Cross Estate stands was part of the broader Jockey Hollow area where Continental Army troops encamped during the winter of 1779-1780. While the estate buildings date to the early twentieth century, the property sits amid the landscape that thousands of soldiers occupied, and trails from the gardens lead directly into the encampment area.',
    },
  });

  await prisma.place.upsert({
    where: { id: 'morristown-schuyler-hamilton-house' },
    update: {},
    create: {
      id: 'morristown-schuyler-hamilton-house',
      townId: TOWN_ID,
      name: 'Schuyler-Hamilton House',
      slug: 'schuyler-hamilton-house',
      placeType: 'HISTORIC_HOUSE',
      description: 'This colonial-era house, located on Olyphant Place in Morristown, is where Alexander Hamilton courted Elizabeth Schuyler during the winter encampment of 1779-1780. Dr. Jabez Campfield owned the house, and the Schuyler family — including Elizabeth and her sister — were guests during the social season that accompanied the army\'s presence in Morristown. Hamilton, serving as Washington\'s aide-de-camp, visited frequently, and the courtship that began here led to their marriage in December 1780. The house is maintained by the Daughters of the American Revolution and is open for tours by appointment.',
      lat: 40.7968,
      lng: -74.4815,
      address: '5 Olyphant Place, Morristown, NJ 07960',
      hours: 'By appointment; contact DAR chapter',
      admission: 'Free',
      historicalNote: 'The Schuyler-Hamilton House is the site where one of the Revolution\'s most consequential personal relationships began. Alexander Hamilton\'s marriage to Elizabeth Schuyler connected him to one of New York\'s most powerful families and provided the social and political foundation for his later career as the first Secretary of the Treasury. The courtship took place amid the suffering of the Hard Winter, a contrast between the social world of the officer class and the privations endured by common soldiers in Jockey Hollow.',
    },
  });

  await prisma.place.upsert({
    where: { id: 'morristown-soldiers-huts-site' },
    update: {},
    create: {
      id: 'morristown-soldiers-huts-site',
      townId: TOWN_ID,
      name: 'Reconstructed Soldier Huts at Jockey Hollow',
      slug: 'soldier-huts-jockey-hollow',
      placeType: 'LANDMARK',
      description: 'The reconstructed soldier huts at Jockey Hollow represent the log cabins that housed Continental Army troops during the winter encampment of 1779-1780. Built according to specifications issued by Washington in December 1779, each hut measured approximately 14 by 15 feet and housed twelve soldiers. The huts were constructed of notched logs chinked with clay, with a fireplace at one end and a single door. The reconstructions, built by the Civilian Conservation Corps in the 1930s and maintained by the National Park Service, allow visitors to experience the scale and conditions of the encampment. The cramped, dark interiors convey the reality of winter quarters far more effectively than any written description.',
      lat: 40.7295,
      lng: -74.5410,
      address: 'Jockey Hollow Road, Morristown, NJ 07960',
      hours: 'Daily 9:00 AM - 5:00 PM',
      admission: 'Free (part of Morristown National Historical Park)',
      historicalNote: 'During the winter of 1779-1780, approximately 10,000 soldiers built over 1,000 log huts across the Jockey Hollow landscape. The huts were organized by brigade, with each regiment occupying its own row of structures. Officers were quartered in local civilian homes or in slightly larger huts at the ends of the rows. The reconstructed huts show the standard enlisted quarters, which were crowded, smoky, and cold. Soldiers slept on straw or bare ground, often sharing blankets and huddling together for warmth during what was the coldest winter recorded in the eighteenth century.',
    },
  });

  await prisma.place.upsert({
    where: { id: 'morristown-pennsylvania-line-marker' },
    update: {},
    create: {
      id: 'morristown-pennsylvania-line-marker',
      townId: TOWN_ID,
      name: 'Pennsylvania Line Mutiny Site (Mount Kemble)',
      slug: 'pennsylvania-line-mutiny-site',
      placeType: 'MONUMENT',
      description: 'Mount Kemble, located south of Morristown along what is now Tempe Wick Road, was the encampment site of the Pennsylvania Line during the winter of 1780-1781. It was here, on the night of January 1, 1781, that approximately 1,500 Pennsylvania soldiers mutinied against their officers, seized their weapons, and began marching toward Philadelphia to demand redress of grievances from the Continental Congress. A historical marker at the site commemorates the mutiny, which was the most serious internal crisis the Continental Army faced during the war. The site is accessible from trails within Morristown National Historical Park.',
      lat: 40.7200,
      lng: -74.5300,
      address: 'Tempe Wick Road, Morristown, NJ 07960',
      hours: 'Dawn to dusk',
      admission: 'Free',
      historicalNote: 'The Pennsylvania Line mutiny of January 1781 was not a spontaneous uprising but the culmination of years of broken promises. The soldiers had not been paid in months, their enlistment terms were disputed, and many lacked adequate clothing and food. The mutineers maintained remarkable discipline throughout their march, killing two British spies who attempted to recruit them and negotiating directly with congressional representatives. The event forced Congress to address the systemic failures of army administration, though many of the underlying problems persisted until the end of the war.',
    },
  });

  console.log('  Places seeded.');
}

// =============================================================================
// EVENTS — Add slugs to 5 existing, create 16 new
// =============================================================================

async function seedEvents() {
  console.log('  Seeding events...');

  // --- 5 CORE EVENTS (upsert to handle both fresh and existing DBs) ---

  await prisma.event.upsert({
    where: { id: 'event-morristown-hard-winter' },
    update: { slug: 'hard-winter-1779-1780' },
    create: {
      id: 'event-morristown-hard-winter',
      townId: TOWN_ID,
      name: 'The Hard Winter at Morristown',
      slug: 'hard-winter-1779-1780',
      startDate: new Date('1779-12-01'),
      datePrecision: 'MONTH',
      summary: 'The winter of 1779-1780 was the most severe of the eighteenth century. The Continental Army at Jockey Hollow endured 28 snowstorms, sub-zero temperatures, and critical supply shortages. Soldiers went days without food, desertions spiked, and the army nearly dissolved. Yet it survived, demonstrating a resilience that would prove decisive.',
      significanceWeight: 95,
    },
  });

  await prisma.event.upsert({
    where: { id: 'event-morristown-pa-mutiny' },
    update: { slug: 'pennsylvania-line-mutiny-1781' },
    create: {
      id: 'event-morristown-pa-mutiny',
      townId: TOWN_ID,
      name: 'Pennsylvania Line Mutiny',
      slug: 'pennsylvania-line-mutiny-1781',
      startDate: new Date('1781-01-01'),
      datePrecision: 'DAY',
      summary: 'On New Year\'s Day 1781, approximately 1,500 Pennsylvania soldiers mutinied at their Jockey Hollow encampment, seizing weapons and marching toward Philadelphia to demand back pay and clarification of enlistment terms. The mutiny was the most serious internal crisis the Continental Army faced, exposing the failures of congressional support.',
      significanceWeight: 90,
    },
  });

  await prisma.event.upsert({
    where: { id: 'event-morristown-first-winter' },
    update: { slug: 'first-winter-encampment-1777' },
    create: {
      id: 'event-morristown-first-winter',
      townId: TOWN_ID,
      name: 'First Winter Encampment at Morristown',
      slug: 'first-winter-encampment-1777',
      startDate: new Date('1777-01-06'),
      datePrecision: 'MONTH',
      summary: 'After victories at Trenton and Princeton, Washington chose Morristown for his first winter quarters. The town\'s position in the Watchung Mountains provided natural defense, access to supply routes, and distance from British-held New York. About 3,000 troops established camp in and around the town.',
      significanceWeight: 85,
    },
  });

  await prisma.event.upsert({
    where: { id: 'event-morristown-smallpox-inoculation' },
    update: { slug: 'smallpox-inoculation-program' },
    create: {
      id: 'event-morristown-smallpox-inoculation',
      townId: TOWN_ID,
      name: 'Continental Army Smallpox Inoculation Program',
      slug: 'smallpox-inoculation-program',
      startDate: new Date('1777-02-01'),
      datePrecision: 'MONTH',
      summary: 'Washington ordered the mass inoculation of Continental Army troops against smallpox during the first Morristown encampment — one of the earliest large-scale military vaccination programs in history. The controversial decision, which temporarily weakened troops during recovery, ultimately preserved the fighting force from the disease that had devastated armies throughout the war.',
      significanceWeight: 80,
    },
  });

  await prisma.event.upsert({
    where: { id: 'event-morristown-arnold-treason' },
    update: { slug: 'arnold-treason-revealed-1780' },
    create: {
      id: 'event-morristown-arnold-treason',
      townId: TOWN_ID,
      name: 'Benedict Arnold\'s Treason Revealed',
      slug: 'arnold-treason-revealed-1780',
      startDate: new Date('1780-09-25'),
      datePrecision: 'DAY',
      summary: 'News of Benedict Arnold\'s treason reached Washington and his officers, many of whom were based in and around Morristown. Arnold\'s plot to surrender West Point to the British shocked the officer corps and threatened to undermine trust within the army. The capture of British spy John André and Arnold\'s escape to British lines created a crisis that reverberated through the Morristown command structure.',
      significanceWeight: 75,
    },
  });

  // --- 16 NEW EVENTS ---

  await prisma.event.upsert({
    where: { id: 'event-morristown-army-arrival-1777' },
    update: {},
    create: {
      id: 'event-morristown-army-arrival-1777',
      townId: TOWN_ID,
      name: 'Continental Army Arrives in Morristown',
      slug: 'army-arrival-january-1777',
      startDate: new Date('1777-01-06'),
      datePrecision: 'DAY',
      summary: 'After victories at Trenton and Princeton, Washington led the Continental Army into Morristown for its first winter encampment. The town was chosen for its defensible position in the Watchung Mountains, its access to supply routes, and its distance from British-held New York. Approximately 3,000 troops established camp in and around the town, marking the beginning of Morristown\'s role as a military capital of the Revolution.',
      significanceWeight: 85,
      lat: 40.7968,
      lng: -74.4815,
    },
  });

  await prisma.event.upsert({
    where: { id: 'event-morristown-ford-mansion-hq' },
    update: {},
    create: {
      id: 'event-morristown-ford-mansion-hq',
      townId: TOWN_ID,
      name: 'Washington Establishes Headquarters at Ford Mansion',
      slug: 'ford-mansion-headquarters-1777',
      startDate: new Date('1777-01-07'),
      datePrecision: 'MONTH',
      summary: 'Washington requisitioned the mansion of the recently deceased Colonel Jacob Ford Jr. as his headquarters for the first winter encampment. Theodosia Ford, the colonel\'s widow, was confined to two rooms while Washington and his staff occupied the rest of the house. The Ford Mansion served as the command center from which Washington directed intelligence operations, coordinated with Congress, and planned the spring campaign.',
      significanceWeight: 75,
      lat: 40.7975,
      lng: -74.4770,
    },
  });

  await prisma.event.upsert({
    where: { id: 'event-morristown-fort-nonsense-built' },
    update: {},
    create: {
      id: 'event-morristown-fort-nonsense-built',
      townId: TOWN_ID,
      name: 'Construction of Fort Nonsense',
      slug: 'fort-nonsense-construction-1777',
      startDate: new Date('1777-05-01'),
      datePrecision: 'MONTH',
      summary: 'Washington ordered the construction of an earthwork fortification on a hilltop overlooking Morristown during the first encampment. The fort commanded views of the surrounding countryside and would have served as a rallying point in case of British attack. Local tradition holds that the soldiers nicknamed it "Fort Nonsense" because they considered the construction unnecessary — a name that stuck despite the sound military reasoning behind the position. The fort was never tested in combat.',
      significanceWeight: 45,
      lat: 40.7990,
      lng: -74.4735,
    },
  });

  await prisma.event.upsert({
    where: { id: 'event-morristown-intelligence-network' },
    update: {},
    create: {
      id: 'event-morristown-intelligence-network',
      townId: TOWN_ID,
      name: 'Morristown Intelligence Network Operations',
      slug: 'intelligence-network-1777',
      startDate: new Date('1777-01-15'),
      endDate: new Date('1777-05-28'),
      datePrecision: 'RANGE',
      summary: 'During the first winter encampment, Washington established and expanded intelligence networks operating from Morristown. The town\'s position behind the Watchung Mountains provided security for espionage operations directed against British-held New York and New Jersey. Spies and scouts moved between Morristown and British lines, gathering information about troop movements, supply shipments, and fortification construction. These networks provided the intelligence that shaped Washington\'s strategic decisions throughout 1777.',
      significanceWeight: 70,
    },
  });

  await prisma.event.upsert({
    where: { id: 'event-morristown-army-arrival-1779' },
    update: {},
    create: {
      id: 'event-morristown-army-arrival-1779',
      townId: TOWN_ID,
      name: 'Continental Army Returns to Morristown for Second Encampment',
      slug: 'army-returns-december-1779',
      startDate: new Date('1779-12-01'),
      datePrecision: 'MONTH',
      summary: 'Washington selected Morristown for a second winter encampment, bringing approximately 10,000 troops to the area. The army established its main camp at Jockey Hollow, south of the town, where soldiers began constructing over 1,000 log huts. Washington again took up residence at the Ford Mansion. The encampment was far larger than the first, and the strain on local resources and civilian property was correspondingly greater.',
      significanceWeight: 85,
      lat: 40.7295,
      lng: -74.5410,
    },
  });

  await prisma.event.upsert({
    where: { id: 'event-morristown-hut-construction' },
    update: {},
    create: {
      id: 'event-morristown-hut-construction',
      townId: TOWN_ID,
      name: 'Soldier Hut Construction at Jockey Hollow',
      slug: 'hut-construction-jockey-hollow-1779',
      startDate: new Date('1779-12-14'),
      endDate: new Date('1780-01-31'),
      datePrecision: 'RANGE',
      summary: 'Washington issued specifications for soldier huts on December 14, 1779, directing that each structure measure approximately 14 by 15 feet and house twelve men. Construction began immediately, but deep snow, frozen ground, and the lack of adequate tools slowed progress. Many soldiers lived in tents for weeks while huts were being built, exposing them to brutal cold. The construction effort consumed virtually all the timber in the Jockey Hollow area and required the organized labor of thousands of men working in difficult conditions.',
      significanceWeight: 65,
      lat: 40.7295,
      lng: -74.5410,
    },
  });

  await prisma.event.upsert({
    where: { id: 'event-morristown-great-snowstorms' },
    update: {},
    create: {
      id: 'event-morristown-great-snowstorms',
      townId: TOWN_ID,
      name: 'Great Snowstorms of January 1780',
      slug: 'great-snowstorms-january-1780',
      startDate: new Date('1780-01-02'),
      endDate: new Date('1780-01-07'),
      datePrecision: 'RANGE',
      summary: 'A series of severe snowstorms struck the Morristown area in early January 1780, burying the camp under four to six feet of snow and cutting supply lines for days. The storms were part of the broader pattern that made the winter of 1779-1780 the coldest of the eighteenth century. Roads became impassable, wagons could not deliver provisions, and soldiers who were already on reduced rations faced the prospect of starvation. Diarists in the camp recorded temperatures well below zero Fahrenheit and described the suffering of men who lacked blankets, shoes, and adequate firewood.',
      significanceWeight: 75,
      lat: 40.7295,
      lng: -74.5410,
    },
  });

  await prisma.event.upsert({
    where: { id: 'event-morristown-supply-crisis' },
    update: {},
    create: {
      id: 'event-morristown-supply-crisis',
      townId: TOWN_ID,
      name: 'Supply Crisis and Starvation at Jockey Hollow',
      slug: 'supply-crisis-starvation-1780',
      startDate: new Date('1780-01-01'),
      endDate: new Date('1780-05-01'),
      datePrecision: 'RANGE',
      summary: 'The Continental Army at Morristown faced a supply crisis more severe than Valley Forge. The collapse of Continental currency made it impossible to purchase provisions, and states failed to meet their requisition quotas. For days at a time, soldiers received no food at all. Washington wrote to Congress warning that the army was on the verge of dissolution. Officers resorted to forced requisitions from local farms, issuing promissory notes that many farmers suspected would never be honored. The supply crisis persisted throughout the encampment and was a primary cause of the subsequent Pennsylvania Line mutiny.',
      significanceWeight: 85,
    },
  });

  await prisma.event.upsert({
    where: { id: 'event-morristown-hamilton-courtship' },
    update: {},
    create: {
      id: 'event-morristown-hamilton-courtship',
      townId: TOWN_ID,
      name: 'Alexander Hamilton Courts Elizabeth Schuyler',
      slug: 'hamilton-schuyler-courtship-1780',
      startDate: new Date('1780-02-01'),
      endDate: new Date('1780-04-01'),
      datePrecision: 'RANGE',
      summary: 'During the second Morristown encampment, Alexander Hamilton, serving as Washington\'s aide-de-camp, courted Elizabeth Schuyler at the home of Dr. Jabez Campfield. The Schuyler sisters had traveled to Morristown as part of the social circle that gathered around the army\'s winter quarters. The courtship took place against the backdrop of the army\'s suffering — officers attended social gatherings and dances while enlisted men starved in their huts at Jockey Hollow. Hamilton and Elizabeth married on December 14, 1780.',
      significanceWeight: 60,
      lat: 40.7968,
      lng: -74.4815,
    },
  });

  await prisma.event.upsert({
    where: { id: 'event-morristown-nj-brigade-mutiny' },
    update: {},
    create: {
      id: 'event-morristown-nj-brigade-mutiny',
      townId: TOWN_ID,
      name: 'New Jersey Line Mutiny',
      slug: 'new-jersey-line-mutiny-1781',
      startDate: new Date('1781-01-20'),
      datePrecision: 'DAY',
      summary: 'Inspired by the partial success of the Pennsylvania Line mutiny earlier that month, soldiers of the New Jersey Line at Pompton mutinied on January 20, 1781. Unlike the Pennsylvania mutiny, Washington responded with immediate force. He dispatched Major General Robert Howe with 500 loyal New England troops to suppress the mutiny. Howe surrounded the mutineers, forced them to parade without arms, and selected three ringleaders for execution by firing squad. Two were shot; the third was pardoned. The contrasting responses to the two mutinies revealed Washington\'s calculation: he could negotiate with the Pennsylvanians because their complaints were legitimate, but he could not allow mutiny to become an accepted method of seeking redress.',
      significanceWeight: 70,
    },
  });

  await prisma.event.upsert({
    where: { id: 'event-morristown-martha-washington-arrives' },
    update: {},
    create: {
      id: 'event-morristown-martha-washington-arrives',
      townId: TOWN_ID,
      name: 'Martha Washington Arrives at Morristown',
      slug: 'martha-washington-arrives-1780',
      startDate: new Date('1779-12-31'),
      datePrecision: 'MONTH',
      summary: 'Martha Washington traveled from Virginia to join her husband at Morristown during the second winter encampment, as she did during most winter quarters throughout the war. Her presence at the Ford Mansion served both personal and political purposes: she provided companionship and domestic stability for Washington, and she organized social events that maintained morale among the officer corps. Martha Washington also visited sick soldiers and coordinated sewing circles among officers\' wives that produced shirts and other clothing for the troops.',
      significanceWeight: 55,
      lat: 40.7975,
      lng: -74.4770,
    },
  });

  await prisma.event.upsert({
    where: { id: 'event-morristown-currency-collapse' },
    update: {},
    create: {
      id: 'event-morristown-currency-collapse',
      townId: TOWN_ID,
      name: 'Continental Currency Collapse',
      slug: 'continental-currency-collapse-1780',
      startDate: new Date('1780-03-01'),
      datePrecision: 'MONTH',
      summary: 'By early 1780, Continental currency had depreciated to the point that it took approximately $40 in paper to equal $1 in coin, a ratio that would worsen to $100-to-$1 by year\'s end. The currency collapse was felt acutely at Morristown, where the army could not purchase supplies from local farmers who had no use for paper money that was losing value by the day. The phrase "not worth a Continental" entered the American lexicon during this period. The crisis forced Washington to rely on forced requisitions and highlighted the fundamental weakness of the Continental government\'s fiscal structure.',
      significanceWeight: 65,
    },
  });

  await prisma.event.upsert({
    where: { id: 'event-morristown-battle-of-springfield' },
    update: {},
    create: {
      id: 'event-morristown-battle-of-springfield',
      townId: TOWN_ID,
      name: 'Battle of Springfield',
      slug: 'battle-of-springfield-1780',
      startDate: new Date('1780-06-23'),
      datePrecision: 'DAY',
      summary: 'A British and Hessian force of approximately 6,000 troops under General Wilhelm von Knyphausen advanced from Elizabethtown toward Morristown in June 1780, seeking to destroy Continental Army supply depots and possibly the army itself. American forces, including Continental regulars and New Jersey militia, met them at Springfield, approximately 15 miles east of Morristown. The Americans repulsed the British advance in sharp fighting, and the British withdrew to Staten Island. The Battle of Springfield was the last significant British offensive in the northern theater and confirmed that the Continental Army, despite its suffering at Morristown, remained a viable fighting force.',
      significanceWeight: 80,
      lat: 40.6984,
      lng: -74.3118,
    },
  });

  await prisma.event.upsert({
    where: { id: 'event-morristown-knyphausen-raid' },
    update: {},
    create: {
      id: 'event-morristown-knyphausen-raid',
      townId: TOWN_ID,
      name: 'Knyphausen Raids Connecticut Farms',
      slug: 'knyphausen-raids-connecticut-farms-1780',
      startDate: new Date('1780-06-07'),
      datePrecision: 'DAY',
      summary: 'General Wilhelm von Knyphausen led a force from Staten Island into New Jersey on June 7, 1780, advancing through Elizabethtown and Connecticut Farms (now Union) toward Morristown. The raid was intended to exploit intelligence suggesting that Continental troops were on the verge of mass desertion. At Connecticut Farms, British or Hessian soldiers killed Hannah Caldwell, the wife of patriot minister James Caldwell, as she sheltered in her home with her children. The killing galvanized New Jersey militia resistance. American forces held at Connecticut Farms, and Knyphausen withdrew, returning two weeks later in the larger assault at Springfield.',
      significanceWeight: 65,
    },
  });

  await prisma.event.upsert({
    where: { id: 'event-morristown-army-departs-1777' },
    update: {},
    create: {
      id: 'event-morristown-army-departs-1777',
      townId: TOWN_ID,
      name: 'Continental Army Departs Morristown (First Encampment)',
      slug: 'army-departs-morristown-may-1777',
      startDate: new Date('1777-05-28'),
      datePrecision: 'DAY',
      summary: 'Washington led the Continental Army out of Morristown at the end of May 1777, moving to Middlebrook, New Jersey, to observe British movements and prepare for the summer campaign. The first encampment had lasted approximately five months, during which the army had recovered from the winter, received new recruits, and conducted the smallpox inoculation program. The departure marked the end of Morristown\'s first period as a military capital, though the army would return two and a half years later.',
      significanceWeight: 50,
    },
  });

  await prisma.event.upsert({
    where: { id: 'event-morristown-army-departs-1780' },
    update: {},
    create: {
      id: 'event-morristown-army-departs-1780',
      townId: TOWN_ID,
      name: 'Continental Army Departs Morristown (Second Encampment)',
      slug: 'army-departs-morristown-june-1780',
      startDate: new Date('1780-06-01'),
      endDate: new Date('1780-06-23'),
      datePrecision: 'RANGE',
      summary: 'The Continental Army broke camp at Jockey Hollow in June 1780, dispersing to various positions across New Jersey and New York. The departure was prompted by the approach of British forces and the need to defend the state against the raids that culminated in the Battle of Springfield. The second encampment had lasted approximately six months and had tested the army\'s survival more severely than any other period of the war. The army that left Morristown was diminished, hungry, and poorly equipped, but it had endured.',
      significanceWeight: 55,
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
    // --- EXISTING EVENTS (some already have connections for washington, hamilton, martha, joseph-plumb-martin — add new ones) ---

    // Hard Winter 1779-1780
    { eventId: 'event-morristown-hard-winter', personId: 'person-morristown-nathanael-greene', roleInEvent: 'Quartermaster general responsible for supply operations' },
    { eventId: 'event-morristown-hard-winter', personId: 'person-morristown-baron-von-steuben', roleInEvent: 'Inspector general maintaining training and discipline' },
    { eventId: 'event-morristown-hard-winter', personId: 'person-morristown-tempe-wick', roleInEvent: 'Civilian whose family farm was occupied by the encampment' },

    // PA Mutiny
    { eventId: 'event-morristown-pa-mutiny', personId: 'person-morristown-anthony-wayne', roleInEvent: 'Commander of the Pennsylvania Line who served as intermediary' },
    { eventId: 'event-morristown-pa-mutiny', personId: 'person-morristown-tempe-wick', roleInEvent: 'Local resident — tradition holds she hid her horse from mutineers' },

    // First Winter Encampment
    { eventId: 'event-morristown-first-winter', personId: 'person-morristown-nathanael-greene', roleInEvent: 'Senior officer overseeing logistics and camp organization' },
    { eventId: 'event-morristown-first-winter', personId: 'person-morristown-jacob-ford-jr', roleInEvent: 'Local militia colonel whose mansion became headquarters (died Jan 11)' },
    { eventId: 'event-morristown-first-winter', personId: 'person-morristown-theodosia-ford', roleInEvent: 'Widow who shared Ford Mansion with Washington\'s household' },

    // Smallpox Inoculation
    { eventId: 'event-morristown-smallpox-inoculation', personId: 'person-morristown-john-cochran', roleInEvent: 'Physician overseeing the inoculation program' },

    // Arnold Treason Revealed
    { eventId: 'event-morristown-arnold-treason', personId: 'person-alexander-hamilton', roleInEvent: 'Aide-de-camp who helped manage the crisis at headquarters' },

    // --- NEW EVENTS ---

    // Army Arrival 1777
    { eventId: 'event-morristown-army-arrival-1777', personId: 'person-george-washington', roleInEvent: 'Commander-in-chief who selected Morristown for winter quarters' },
    { eventId: 'event-morristown-army-arrival-1777', personId: 'person-morristown-nathanael-greene', roleInEvent: 'Senior general accompanying the army' },
    { eventId: 'event-morristown-army-arrival-1777', personId: 'person-morristown-jacob-ford-jr', roleInEvent: 'Local colonel who died shortly after the army arrived' },

    // Ford Mansion HQ
    { eventId: 'event-morristown-ford-mansion-hq', personId: 'person-george-washington', roleInEvent: 'Commander-in-chief who requisitioned the mansion' },
    { eventId: 'event-morristown-ford-mansion-hq', personId: 'person-morristown-theodosia-ford', roleInEvent: 'Widow confined to two rooms while her home served as headquarters' },
    { eventId: 'event-morristown-ford-mansion-hq', personId: 'person-alexander-hamilton', roleInEvent: 'Aide-de-camp stationed at headquarters' },

    // Fort Nonsense
    { eventId: 'event-morristown-fort-nonsense-built', personId: 'person-george-washington', roleInEvent: 'Ordered construction of the hilltop fortification' },

    // Intelligence Network
    { eventId: 'event-morristown-intelligence-network', personId: 'person-george-washington', roleInEvent: 'Director of intelligence operations from Morristown' },
    { eventId: 'event-morristown-intelligence-network', personId: 'person-alexander-hamilton', roleInEvent: 'Aide-de-camp involved in processing intelligence reports' },

    // Army Arrival 1779
    { eventId: 'event-morristown-army-arrival-1779', personId: 'person-george-washington', roleInEvent: 'Commander-in-chief who selected Morristown for second encampment' },
    { eventId: 'event-morristown-army-arrival-1779', personId: 'person-morristown-nathanael-greene', roleInEvent: 'Quartermaster general responsible for camp logistics' },
    { eventId: 'event-morristown-army-arrival-1779', personId: 'person-morristown-baron-von-steuben', roleInEvent: 'Inspector general overseeing camp layout and discipline' },
    { eventId: 'event-morristown-army-arrival-1779', personId: 'person-joseph-plumb-martin', roleInEvent: 'Enlisted soldier who marched to Morristown with the army' },

    // Hut Construction
    { eventId: 'event-morristown-hut-construction', personId: 'person-george-washington', roleInEvent: 'Issued specifications for hut construction' },
    { eventId: 'event-morristown-hut-construction', personId: 'person-joseph-plumb-martin', roleInEvent: 'Enlisted soldier who built and occupied the huts' },

    // Great Snowstorms
    { eventId: 'event-morristown-great-snowstorms', personId: 'person-joseph-plumb-martin', roleInEvent: 'Enlisted soldier who endured the storms and recorded conditions' },
    { eventId: 'event-morristown-great-snowstorms', personId: 'person-morristown-nathanael-greene', roleInEvent: 'Quartermaster general struggling to maintain supply lines' },

    // Supply Crisis
    { eventId: 'event-morristown-supply-crisis', personId: 'person-george-washington', roleInEvent: 'Commander who wrote to Congress warning of army dissolution' },
    { eventId: 'event-morristown-supply-crisis', personId: 'person-morristown-nathanael-greene', roleInEvent: 'Quartermaster general who managed the failing supply system' },
    { eventId: 'event-morristown-supply-crisis', personId: 'person-joseph-plumb-martin', roleInEvent: 'Enlisted soldier who experienced starvation firsthand' },

    // Hamilton Courtship
    { eventId: 'event-morristown-hamilton-courtship', personId: 'person-alexander-hamilton', roleInEvent: 'Suitor who courted Elizabeth Schuyler' },
    { eventId: 'event-morristown-hamilton-courtship', personId: 'person-martha-washington-morristown', roleInEvent: 'Hosted social gatherings where the courtship developed' },

    // NJ Brigade Mutiny
    { eventId: 'event-morristown-nj-brigade-mutiny', personId: 'person-george-washington', roleInEvent: 'Ordered forceful suppression of the mutiny' },

    // Martha Washington Arrives
    { eventId: 'event-morristown-martha-washington-arrives', personId: 'person-martha-washington-morristown', roleInEvent: 'Arrived to join her husband at winter quarters' },
    { eventId: 'event-morristown-martha-washington-arrives', personId: 'person-george-washington', roleInEvent: 'Commander-in-chief who received his wife at headquarters' },
    { eventId: 'event-morristown-martha-washington-arrives', personId: 'person-morristown-theodosia-ford', roleInEvent: 'Hostess sharing the Ford Mansion with the Washingtons' },

    // Currency Collapse
    { eventId: 'event-morristown-currency-collapse', personId: 'person-morristown-nathanael-greene', roleInEvent: 'Quartermaster general who could not purchase supplies with worthless currency' },
    { eventId: 'event-morristown-currency-collapse', personId: 'person-alexander-hamilton', roleInEvent: 'Aide-de-camp who drafted analysis of the fiscal crisis' },

    // Battle of Springfield
    { eventId: 'event-morristown-battle-of-springfield', personId: 'person-george-washington', roleInEvent: 'Commander-in-chief who directed the American defense' },
    { eventId: 'event-morristown-battle-of-springfield', personId: 'person-morristown-nathanael-greene', roleInEvent: 'Commanded Continental forces at the battle' },

    // Knyphausen Raids
    { eventId: 'event-morristown-knyphausen-raid', personId: 'person-george-washington', roleInEvent: 'Commander who ordered forces to resist the advance' },

    // Army Departs 1777
    { eventId: 'event-morristown-army-departs-1777', personId: 'person-george-washington', roleInEvent: 'Led the army out of Morristown toward Middlebrook' },
    { eventId: 'event-morristown-army-departs-1777', personId: 'person-morristown-nathanael-greene', roleInEvent: 'Senior officer departing with the army' },

    // Army Departs 1780
    { eventId: 'event-morristown-army-departs-1780', personId: 'person-george-washington', roleInEvent: 'Commander who broke camp in response to British movements' },
    { eventId: 'event-morristown-army-departs-1780', personId: 'person-joseph-plumb-martin', roleInEvent: 'Enlisted soldier departing after months of suffering' },
    { eventId: 'event-morristown-army-departs-1780', personId: 'person-morristown-anthony-wayne', roleInEvent: 'Commander of Pennsylvania Line departing Jockey Hollow' },
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
// STORIES — 3 new (2 already exist)
// =============================================================================

async function seedStories() {
  console.log('  Seeding stories...');

  // --- NEW STORY 1: Historical Voice — Joseph Plumb Martin ---
  await prisma.story.upsert({
    where: { id: 'story-morristown-soldier-hunger' },
    update: {},
    create: {
      id: 'story-morristown-soldier-hunger',
      townId: TOWN_ID,
      title: 'Starving at Jockey Hollow',
      slug: 'starving-at-jockey-hollow',
      storyType: 'HISTORICAL_VOICE',
      subjectPersonId: 'person-joseph-plumb-martin',
      verificationStatus: 'VERIFIED',
      textVersion: `We arrived in Morristown in December with the expectation that winter quarters would mean rest, shelter, and provisions. It meant none of those things. The march into Jockey Hollow was through snow that was already deep, and the cold was of a kind I had not experienced in all my years of service. We were told to build huts, and we did, cutting timber and notching logs in frozen ground while the wind tore through our clothing — what clothing we had, for many among us were in rags.

The huts, when finished, were tolerable in their construction but miserable as shelter. Twelve men to a hut that measured fourteen feet to a side. We slept on straw when straw was available and on the bare earth when it was not. The fireplace at one end provided smoke more than warmth, and the chinking between the logs let in the wind no matter how carefully we packed it with clay. The men nearest the fire roasted on one side and froze on the other. The men farthest from the fire simply froze.

But the cold was not the worst of it. The worst was the hunger. There were days — not one or two, but stretches of three, four, five days together — when we received nothing to eat. Nothing. I do not mean short rations or poor rations. I mean no rations at all. The commissary wagons did not come. The quartermasters had no provisions to distribute. We were told to be patient, that supplies were on the way, and then we were told nothing at all.

I ate bark. I boiled my shoes, though there was precious little leather left in them to boil. I watched men eat candle tallow and lick the grease from cartridge papers. I saw soldiers too weak from hunger to stand for roll call. I heard men weep at night — grown men, soldiers who had stood in line at Monmouth and Germantown — weeping from hunger and cold in the darkness of those huts.

The officers suffered less, as officers always do. They were quartered in farmhouses in the surrounding countryside, and while their provisions were irregular, they did not starve. We knew this. We saw them riding to and from headquarters, well-fed and warmly dressed, while we shivered and went without. I do not say this to condemn them — a man will take what comfort is available — but the contrast sharpened our misery and our anger.

There was talk of mutiny that winter. There was more than talk — there were incidents, refusals to obey orders, confrontations between soldiers and officers. The wonder is not that the Pennsylvania troops eventually mutinied but that it took as long as it did. We had been promised pay, and we received none. We had been promised food, and we received none. We had been promised that our enlistments had a definite end, and we were told they did not. At what point does a soldier owe obedience to a government that has broken every promise it made to him?

I did not mutiny. I remained with my regiment and served out the war. But I understood the men who did, and I will not condemn them for it. They were not traitors. They were men who had reached the limit of what they could endure, and that limit was generous by any human measure. What happened at Morristown was not a failure of the soldiers. It was a failure of the country they were fighting for, which asked everything of them and gave almost nothing in return.

Valley Forge has the reputation. But those of us who were at both will tell you: Morristown was worse.`,
      tags: ['morristown', 'jockey-hollow', 'starvation', 'hard-winter', 'enlisted-experience', 'joseph-plumb-martin'],
    },
  });

  // --- NEW STORY 2: Historical Voice — Theodosia Ford ---
  await prisma.story.upsert({
    where: { id: 'story-morristown-theodosia-ford' },
    update: {},
    create: {
      id: 'story-morristown-theodosia-ford',
      townId: TOWN_ID,
      title: 'The Widow Whose House Became Headquarters',
      slug: 'widow-whose-house-became-headquarters',
      storyType: 'HISTORICAL_VOICE',
      subjectPersonId: 'person-morristown-theodosia-ford',
      verificationStatus: 'VERIFIED',
      textVersion: `My husband had been dead eleven days when General Washington arrived in Morristown. Colonel Jacob Ford, my husband, died of the pneumonia on the eleventh of January, 1777, having served his country in the militia and worn out his health in the doing of it. He left me four children and a house that had been the pride of Morris County — a fine house, well built, with good rooms and a proper kitchen and everything a family could want.

The General needed a headquarters. His officers looked at the houses in Morristown and determined that mine was the most suitable — large enough for a commanding general, his staff, his servants, and the constant traffic of military business. I was informed, not asked. A widow with four children does not refuse a commanding general in wartime. I do not say this with bitterness, only with the clarity that comes from understanding one's position.

I was given two rooms. Two rooms in my own house, for myself and my children. The rest — the parlors, the dining room, the bedrooms upstairs — were taken over by the General and his people. His aides-de-camp worked at tables in my dining room. Officers came and went at all hours. Sentries stood at my doors. The noise, the mud tracked through the hallways, the wear on the carpets and the furniture — these were constant irritations, small in themselves but accumulating into a weight that pressed upon me daily.

I do not wish to speak ill of General Washington. He was courteous in his manner and correct in his dealings with me. Mrs. Washington, when she arrived, was kind and made efforts to include me in conversation. But courtesy does not restore a house to its owner, and kindness does not pay for the wood burned in fireplaces that served military purposes rather than family ones.

The truth that no one speaks of is this: the Revolution was fought, in part, on the backs of women like me. Women who kept farms running while their husbands marched. Women who fed soldiers from their own stores and received promissory notes in return — notes that depreciated to nothing before the ink was dry. Women who gave up their homes, their privacy, their peace, and received neither thanks nor compensation.

I kept my house. I kept my children fed. I kept the Ford name respected in Morristown. These are not the things that histories record, but they are the things that mattered, and they were accomplished at a cost that only those who bore it can understand.

After the army left, I found that the house required extensive repairs. The garden had been trampled, the fences torn down for firewood by soldiers who cared nothing for property that was not their own. I applied to the government for compensation and received, eventually, a fraction of what was owed. This, too, is the Revolution as it was actually lived — not a story of glory but of sacrifice demanded and inadequately repaid.`,
      tags: ['morristown', 'ford-mansion', 'theodosia-ford', 'women', 'civilian-experience', 'headquarters'],
    },
  });

  // --- NEW STORY 3: Modern Voice — The Park Today ---
  await prisma.story.upsert({
    where: { id: 'story-morristown-park-modern' },
    update: {},
    create: {
      id: 'story-morristown-park-modern',
      townId: TOWN_ID,
      title: 'Walking Jockey Hollow in Winter',
      slug: 'walking-jockey-hollow-in-winter',
      storyType: 'MODERN_VOICE',
      verificationStatus: 'VERIFIED',
      textVersion: `The trails at Jockey Hollow are quiet in February. The parking lot holds a few cars, and the visitor center offers warmth and maps, but the landscape itself belongs mostly to the cold. This is the time to come, if understanding is what you are after. Come when it is uncomfortable. Come when the wind cuts through your jacket and the ground is hard underfoot. Come when you are glad you brought gloves and a hat. Then stand in front of the reconstructed soldier huts and consider what it meant to be here in the winter of 1780 without those gloves, without that hat, without the car that will take you home to a warm house.

The huts are smaller than you expect. The National Park Service maintains several reconstructions, built by the Civilian Conservation Corps in the 1930s based on the specifications Washington issued in December 1779. Each hut measures roughly fourteen by fifteen feet. Each held twelve men. Stand at the door and look at the interior — the packed-earth floor, the stone fireplace, the low ceiling darkened by centuries of imagined smoke — and do the arithmetic. Twelve men in this space. For six months.

The trails loop through what was once a landscape of over a thousand such structures, arranged by brigade and regiment across the hillsides. Today the forest has reclaimed the land, and you walk through mature hardwoods along well-maintained paths. The National Park Service has installed interpretive markers at key locations: the sites of brigade encampments, the parade grounds, the hospital area. Each marker offers context without overwhelming the experience.

The Wick House sits at the edge of the encampment area, a modest farmhouse that has been restored to its eighteenth-century appearance. The contrast between the house — with its furnished rooms and domestic artifacts — and the soldier huts a short walk away captures the class divide that ran through the encampment like a fault line. Officers lived in houses; enlisted men lived in huts. Officers ate, however irregularly; enlisted men starved.

The Ford Mansion, three miles north in the center of Morristown, operates as a separate unit of the park. Tours of the mansion are guided and require reservations. The museum adjacent to the mansion houses one of the finest collections of Revolutionary War artifacts in the country, including Washington's correspondence, military equipment, and personal items.

What Morristown National Historical Park preserves is not a single dramatic event but a slow accumulation of suffering, endurance, and institutional failure. There was no battle at Morristown. What happened here was, in some ways, harder to commemorate than a battle: months of cold, hunger, disease, and eroding morale that brought the Continental Army closer to dissolution than any British army ever did. The park asks visitors to sit with that complexity — to understand that the Revolution was not won only through courage on the battlefield but through the willingness of ordinary people to endure conditions that no government had a right to impose upon them.

Morristown National Historical Park was established in 1933, the first national historical park in the United States. The designation was itself a recognition that the story preserved here — not of victory but of survival — was worthy of the same national attention given to battlefields. It was a quiet argument that endurance is as American as triumph, and that the people who held on through the worst of it deserve to be remembered alongside those who charged the heights.`,
      tags: ['morristown', 'national-park', 'jockey-hollow', 'modern-visit', 'ford-mansion', 'preservation'],
    },
  });

  console.log('  Stories seeded.');
}

// =============================================================================
// LESSONS — 2 new (2 already exist)
// =============================================================================

async function seedLessons() {
  console.log('  Seeding lesson plans...');

  // --- NEW LESSON 1: The Hard Winter ---
  await prisma.lessonPlan.upsert({
    where: { id: 'lesson-morristown-hard-winter' },
    update: {},
    create: {
      id: 'lesson-morristown-hard-winter',
      townId: TOWN_ID,
      title: 'Surviving the Hard Winter: The Continental Army at Morristown, 1779-1780',
      slug: 'surviving-the-hard-winter',
      gradeRange: '6-8',
      estimatedDuration: '3-4 class periods',
      summary: 'Students investigate the conditions faced by the Continental Army during the Morristown winter encampment of 1779-1780, analyzing primary source accounts from soldiers, officers, and civilians to understand why the encampment represented a greater threat to the army than any British military action. Through document analysis, mapping activities, and comparative writing, students explore the intersection of military history, climate, economics, and government responsibility.',
      lessonData: {
        objectives: [
          'Describe the conditions faced by Continental soldiers at Jockey Hollow during the winter of 1779-1780',
          'Analyze primary source accounts from multiple perspectives (enlisted soldiers, officers, civilians)',
          'Explain how currency depreciation, supply chain failures, and government neglect threatened the army',
          'Compare the Morristown encampment to Valley Forge and evaluate why Morristown receives less historical attention',
          'Construct an evidence-based argument about the most significant threat to the Continental Army',
        ],
        essentialQuestions: [
          'What conditions did soldiers face at Morristown, and how did they compare to Valley Forge?',
          'Why did the supply system fail, and who was responsible?',
          'How did different people — soldiers, officers, civilians — experience the same crisis differently?',
          'What does the Morristown encampment tell us about the challenges of maintaining an army in a republic?',
        ],
        warmUp: {
          duration: '10 minutes',
          activity: 'Display two images side by side: a modern winter scene of Jockey Hollow from the National Park Service and a period illustration of soldier huts. Ask students to list what they observe. Then share the dimensions of a soldier hut (14x15 feet) and have students measure that space in the classroom. Ask: How would twelve people live in this space for six months?',
        },
        directInstruction: {
          duration: '20 minutes',
          content: [
            'Context: why Washington chose Morristown (geography, defensive position, distance from British-held New York)',
            'The winter of 1779-1780: the coldest winter of the eighteenth century, with record snowfall and sustained sub-zero temperatures',
            'The supply crisis: Continental currency depreciation, state requisition failures, the breakdown of the commissary system',
            'The human cost: starvation, disease, inadequate clothing, desertion, and the mutinies of 1781',
            'The contrast between officer and enlisted experience: headquarters social life vs. Jockey Hollow starvation',
          ],
        },
        guidedPractice: {
          duration: '40 minutes',
          activities: [
            'Document Analysis Stations: Students rotate through four stations, each featuring a primary source excerpt (Joseph Plumb Martin memoir, Washington letter to Congress, Nathanael Greene quartermaster report, civilian account of army requisitions). At each station, students complete a SOAPS analysis (Speaker, Occasion, Audience, Purpose, Significance).',
            'Perspective Comparison: In small groups, students create a three-column chart comparing the experiences of an enlisted soldier, an officer, and a civilian during the encampment, using evidence from the documents.',
          ],
        },
        independentPractice: {
          duration: '30 minutes',
          assignment: 'Write a two-paragraph response to this prompt: "Was the greatest threat to the Continental Army at Morristown the weather, the supply system, or the soldiers\' own morale?" Use evidence from at least two primary sources examined in class. Your response must acknowledge a counterargument and explain why your chosen factor was the most significant.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Gallery walk: students post their arguments on the wall organized by which threat they identified as most significant. Class discussion: Why does Valley Forge receive more attention in American memory than Morristown, even though many veterans said Morristown was worse? What does this tell us about how we remember history?',
        },
        differentiation: {
          struggling: 'Provide sentence frames for the writing assignment. Pre-highlight key passages in primary source documents. Offer a graphic organizer for the perspective comparison activity.',
          advanced: 'Research the economic causes of the supply crisis in more depth. Compare the Continental Army\'s logistical challenges to those of another military force (e.g., Napoleon\'s army in Russia, the British army in the Crimean War).',
          ell: 'Provide a glossary of military and economic terms (commissary, requisition, depreciation, enlistment, mutiny). Pair with a fluent English speaker for document analysis stations.',
        },
      },
      standards: {
        commonCore: ['RH.6-8.1', 'RH.6-8.2', 'RH.6-8.6', 'WHST.6-8.1'],
        c3Framework: ['D2.His.1.6-8', 'D2.His.5.6-8', 'D2.His.6.6-8', 'D2.Eco.1.6-8'],
        note: 'Aligned to Common Core literacy standards for history/social studies (reading and writing) and C3 Framework for historical thinking, sourcing, and economic reasoning.',
      },
    },
  });

  // --- NEW LESSON 2: Mutiny and Military Discipline ---
  await prisma.lessonPlan.upsert({
    where: { id: 'lesson-morristown-mutiny-discipline' },
    update: {},
    create: {
      id: 'lesson-morristown-mutiny-discipline',
      townId: TOWN_ID,
      title: 'When Soldiers Rebel: The Morristown Mutinies and the Limits of Obedience',
      slug: 'mutiny-and-limits-of-obedience',
      gradeRange: '9-12',
      estimatedDuration: '2-3 class periods',
      summary: 'Students examine the Pennsylvania Line and New Jersey Line mutinies of January 1781 through the lens of political philosophy, military ethics, and the social contract. By analyzing the mutineers\' grievances, the government\'s failures, and Washington\'s contrasting responses to the two mutinies, students grapple with fundamental questions about the limits of obedience, the obligations of government to those who serve it, and the tension between military discipline and individual rights.',
      lessonData: {
        objectives: [
          'Describe the causes, events, and outcomes of both the Pennsylvania Line and New Jersey Line mutinies',
          'Analyze the mutineers\' grievances in the context of Enlightenment social contract theory',
          'Evaluate Washington\'s contrasting responses to the two mutinies and the reasoning behind each',
          'Construct an argument about whether the mutineers were justified in their actions',
          'Connect the mutinies to broader questions about government obligations to military personnel',
        ],
        essentialQuestions: [
          'When, if ever, is a soldier justified in disobeying orders or rebelling against military authority?',
          'What obligations does a government owe to the people who fight its wars?',
          'Why did Washington negotiate with the Pennsylvania mutineers but crush the New Jersey mutineers?',
          'How do the Morristown mutinies relate to the principles articulated in the Declaration of Independence?',
        ],
        warmUp: {
          duration: '15 minutes',
          activity: 'Present students with a hypothetical scenario: You are a soldier who has not been paid in six months. Your enlistment contract says three years, but your officers say you enlisted for the entire war. You have no shoes and have not eaten in two days. Your government has broken every promise it made to you. What do you do? Students write a brief response, then share in small groups. Tally class responses: comply, protest, desert, or mutiny.',
        },
        directInstruction: {
          duration: '25 minutes',
          content: [
            'Background: the conditions at Morristown that produced the mutinies (unpaid wages, disputed enlistments, starvation, broken promises)',
            'The Pennsylvania Line mutiny (January 1-10, 1781): timeline, the role of Anthony Wayne, the soldiers\' discipline, the rejection of British agents, the negotiated settlement',
            'The New Jersey Line mutiny (January 20, 1781): timeline, Washington\'s decision to use force, Robert Howe\'s suppression, the execution of ringleaders',
            'The contrasting responses: why Washington negotiated with one group and executed members of the other',
            'Aftermath: congressional responses, the ongoing crisis of army pay, and the eventual Newburgh Conspiracy of 1783',
          ],
        },
        guidedPractice: {
          duration: '35 minutes',
          activities: [
            'Philosophical Chairs Debate: Students position themselves along a spectrum from "The mutineers were completely justified" to "The mutineers were wrong regardless of their grievances." Students must defend their position using evidence from the documents and may change positions during the discussion.',
            'Document Comparison: In pairs, students analyze Washington\'s letters regarding both mutinies. They identify specific language that reveals his reasoning, his emotional state, and his calculation of risks. They create a Venn diagram comparing his approach to each crisis.',
          ],
        },
        independentPractice: {
          duration: '30 minutes',
          assignment: 'Write a formal essay (3-4 paragraphs) responding to one of the following prompts: (A) "Were the Pennsylvania Line mutineers exercising the same right of resistance claimed in the Declaration of Independence? Why or why not?" OR (B) "Was Washington\'s decision to negotiate with the Pennsylvanians but crush the New Jersey mutineers a principled decision or a pragmatic one? Defend your answer." Your essay must reference at least two primary sources and engage with at least one counterargument.',
        },
        closure: {
          duration: '10 minutes',
          activity: 'Exit discussion: How do the Morristown mutinies connect to modern debates about the treatment of military veterans? Are there parallels between the Continental soldiers\' grievances and issues facing veterans today? Students write a brief reflection on what, if anything, a democratic government owes to those who serve in its military.',
        },
        differentiation: {
          struggling: 'Provide a structured essay outline with topic sentence starters. Create a simplified timeline of both mutinies for reference. Offer a vocabulary list with definitions for key philosophical and military terms.',
          advanced: 'Research the Newburgh Conspiracy of 1783 and write a supplementary analysis comparing it to the Morristown mutinies. How did the threat of officer mutiny differ from enlisted mutiny in its implications for the Republic?',
          ell: 'Provide translated key terms where possible. Use visual timelines and graphic organizers. Allow oral presentation as an alternative to written essay for initial assessment.',
        },
      },
      standards: {
        commonCore: ['RH.9-10.1', 'RH.9-10.6', 'RH.9-10.9', 'WHST.9-10.1'],
        c3Framework: ['D2.His.1.9-12', 'D2.His.4.9-12', 'D2.His.5.9-12', 'D2.Civ.3.9-12'],
        note: 'Aligned to Common Core literacy standards for history/social studies and C3 Framework for historical thinking, civic reasoning, and argumentation.',
      },
    },
  });

  console.log('  Lesson plans seeded.');
}

// =============================================================================
// MAIN
// =============================================================================

async function main() {
  console.log('Seeding Morristown, NJ content...');
  await seedPeople();
  await seedPlaces();
  await seedEvents();
  await seedEventPeople();
  await seedStories();
  await seedLessons();
  console.log('Done!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
