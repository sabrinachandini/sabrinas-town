import { Prisma } from '@prisma/client';

/**
 * Cambridge, Massachusetts - Revolutionary War Places
 *
 * Cambridge served as the military headquarters for the Continental Army
 * from July 1775 to March 1776. George Washington took command on Cambridge
 * Common, and the town's proximity to Boston made it strategically vital
 * during the siege. Many of Harvard's buildings were requisitioned for
 * military use, and the intellectual community contributed significantly
 * to the revolutionary cause.
 */

export const cambridgePlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'cambridge-common',
    name: 'Cambridge Common',
    placeType: 'LANDMARK',
    description:
      'The site where George Washington took command of the Continental Army on July 3, 1775. Under an elm tree (since fallen), Washington drew his sword and formally assumed leadership of the forces besieging British-held Boston. The common served as an encampment for thousands of soldiers during the siege.',
    historicalNote:
      'Three cannons on the common were captured at Fort Ticonderoga and brought to Cambridge by Henry Knox. The original Washington Elm fell in 1923.',
    address: 'Massachusetts Avenue & Garden Street, Cambridge, MA',
    featured: true,
    displayOrder: 1,
    amenities: ['Restrooms', 'Walking paths', 'Monuments', 'Picnic areas'],
    accessibilityNotes: 'Flat terrain, paved paths throughout',
    town: { connect: { id: 'us-ma-cambridge' } },
  },
  {
    id: 'longfellow-washington-headquarters',
    name: "Longfellow House–Washington's Headquarters National Historic Site",
    placeType: 'HISTORIC_HOUSE',
    description:
      'This Georgian mansion served as George Washington\'s headquarters during the Siege of Boston from July 1775 to April 1776. Built in 1759 for Loyalist John Vassal, the house was confiscated when he fled. Washington planned the Continental Army\'s operations here and celebrated his wedding anniversary with Martha in these rooms.',
    historicalNote:
      'Later the home of poet Henry Wadsworth Longfellow for 45 years. The house contains original Washington-era artifacts alongside Longfellow family collections.',
    address: '105 Brattle Street, Cambridge, MA',
    website: 'https://www.nps.gov/long/',
    phone: '(617) 876-4491',
    hours: 'Wed-Sun 9:30am-5pm (seasonal)',
    admission: 'Free',
    featured: true,
    displayOrder: 2,
    amenities: ['Guided tours', 'Museum shop', 'Garden', 'Educational programs'],
    accessibilityNotes: 'First floor accessible; upper floors via stairs only',
    town: { connect: { id: 'us-ma-cambridge' } },
  },
  {
    id: 'christ-church-cambridge',
    name: 'Christ Church Cambridge',
    placeType: 'CHURCH',
    description:
      'The oldest church building in Cambridge (1761). When British soldiers worshipped here before the Revolution, the congregation was largely Loyalist. After war began, Continental troops used the building as barracks. Martha Washington attended New Year\'s Eve services here in 1775, and the church was rededicated in 1790.',
    historicalNote:
      'The organ pipes were melted down for bullets during the war. The current pipe organ dates from restoration efforts.',
    address: 'Zero Garden Street, Cambridge, MA',
    website: 'https://www.cccambridge.org/',
    hours: 'Open for services; tours by appointment',
    admission: 'Free',
    featured: true,
    displayOrder: 3,
    amenities: ['Historic architecture', 'Active congregation'],
    accessibilityNotes: 'Ramp entrance available',
    town: { connect: { id: 'us-ma-cambridge' } },
  },
  {
    id: 'harvard-yard',
    name: 'Harvard Yard',
    placeType: 'LANDMARK',
    description:
      'The historic center of Harvard College, established in 1636. During the Revolution, college buildings housed Continental soldiers and served as barracks and hospitals. Massachusetts Hall (1720) quartered troops, and commencement exercises were suspended from 1775 to 1781. The intellectual community at Harvard contributed political philosophy and practical support to the revolutionary cause.',
    historicalNote:
      'Classes relocated to Concord during the siege of Boston. Several Harvard graduates signed the Declaration of Independence.',
    address: 'Harvard Yard, Cambridge, MA',
    website: 'https://www.harvard.edu/',
    featured: true,
    displayOrder: 4,
    amenities: ['Walking paths', 'Historic buildings', 'Museums nearby'],
    accessibilityNotes: 'Mostly flat, brick and stone paths',
    town: { connect: { id: 'us-ma-cambridge' } },
  },
  {
    id: 'massachusetts-hall',
    name: 'Massachusetts Hall',
    placeType: 'HISTORIC_HOUSE',
    description:
      'Harvard\'s oldest surviving building (1720). During the Siege of Boston, it served as barracks for 640 Continental soldiers. The building has continuously served Harvard for over 300 years and now houses the university president\'s office.',
    historicalNote:
      'Students were displaced when troops occupied the building from 1775 to 1776.',
    address: 'Harvard Yard, Cambridge, MA',
    admission: 'Exterior viewing only',
    displayOrder: 10,
    town: { connect: { id: 'us-ma-cambridge' } },
  },
  {
    id: 'wadsworth-house',
    name: 'Wadsworth House',
    placeType: 'HISTORIC_HOUSE',
    description:
      'Built in 1726 as the home for Harvard presidents. George Washington briefly used this yellow clapboard building as his first headquarters upon arriving in Cambridge in July 1775, before moving to the larger Vassal-Craigie house (now Longfellow House).',
    address: '1341 Massachusetts Avenue, Cambridge, MA',
    admission: 'Exterior viewing only',
    displayOrder: 11,
    amenities: ['Historic marker'],
    town: { connect: { id: 'us-ma-cambridge' } },
  },
  {
    id: 'old-burying-ground-cambridge',
    name: 'Old Burying Ground',
    placeType: 'CEMETERY',
    description:
      'Cambridge\'s first cemetery, established in 1635. Several Revolutionary War soldiers rest here, including two African American soldiers of the Continental Army. Harvard presidents and early settlers also lie in this compact graveyard adjacent to Christ Church.',
    address: 'Garden Street at Massachusetts Avenue, Cambridge, MA',
    hours: 'Dawn to dusk',
    admission: 'Free',
    featured: true,
    displayOrder: 5,
    amenities: ['Historic gravestones', 'Self-guided tours'],
    accessibilityNotes: 'Uneven terrain, narrow paths',
    town: { connect: { id: 'us-ma-cambridge' } },
  },
  {
    id: 'tory-row',
    name: 'Tory Row (Brattle Street)',
    placeType: 'LANDMARK',
    description:
      'The stretch of Brattle Street between Harvard Square and Elmwood was home to wealthy Loyalist families before the Revolution. When these families fled, their elegant mansions were confiscated and used by Continental officers. The street retains its colonial character with several surviving 18th-century homes.',
    historicalNote:
      'Named "Tory Row" because so many Loyalist families lived here. Several houses still stand as private residences.',
    address: 'Brattle Street, Cambridge, MA',
    displayOrder: 12,
    amenities: ['Walking tour', 'Historic architecture'],
    accessibilityNotes: 'Sidewalk walking, public way only',
    town: { connect: { id: 'us-ma-cambridge' } },
  },
  {
    id: 'hooper-lee-nichols-house',
    name: 'Hooper-Lee-Nichols House',
    placeType: 'HISTORIC_HOUSE',
    description:
      'One of Cambridge\'s oldest houses, with portions dating to 1685. The house museum is operated by Cambridge Historical Society and interprets three centuries of Cambridge history, including the Revolutionary period when the surrounding area served the Continental Army.',
    address: '159 Brattle Street, Cambridge, MA',
    website: 'https://cambridgehistory.org/',
    phone: '(617) 547-4252',
    hours: 'By appointment',
    admission: 'Suggested donation',
    displayOrder: 13,
    amenities: ['Guided tours', 'Research library'],
    accessibilityNotes: 'Historic building, limited accessibility',
    town: { connect: { id: 'us-ma-cambridge' } },
  },
  {
    id: 'elmwood',
    name: 'Elmwood',
    placeType: 'HISTORIC_HOUSE',
    description:
      'Built in 1767 for Thomas Oliver, the last royal Lieutenant Governor of Massachusetts. When Revolution came, Oliver was forced to renounce his position by an angry crowd. The mansion later became home to poet James Russell Lowell and now serves as the official residence of Harvard\'s president.',
    historicalNote:
      'Thomas Oliver fled to England in 1776. The house remained in private hands until Harvard acquired it in 1962.',
    address: '33 Elmwood Avenue, Cambridge, MA',
    admission: 'Exterior viewing only (private residence)',
    displayOrder: 14,
    town: { connect: { id: 'us-ma-cambridge' } },
  },
  {
    id: 'cambridge-historical-society',
    name: 'Cambridge Historical Society',
    placeType: 'MUSEUM',
    description:
      'Located in the Hooper-Lee-Nichols House, the society maintains archives and collections documenting Cambridge history from its founding through the present. Research materials include documents from the Revolutionary period and the Siege of Boston.',
    address: '159 Brattle Street, Cambridge, MA',
    website: 'https://cambridgehistory.org/',
    phone: '(617) 547-4252',
    hours: 'Tue-Thu 10am-4pm',
    admission: 'Free for research; donations welcome',
    displayOrder: 15,
    amenities: ['Research library', 'Archives', 'Rotating exhibits'],
    accessibilityNotes: 'Call ahead for accessibility needs',
    town: { connect: { id: 'us-ma-cambridge' } },
  },
  {
    id: 'washington-elm-site',
    name: 'Washington Elm Site',
    placeType: 'MONUMENT',
    description:
      'A monument marks the approximate location where George Washington took command of the Continental Army on July 3, 1775. The original elm tree, under which tradition says Washington stood, fell in 1923 after storm damage. Seedlings from the tree have been planted throughout the country.',
    address: 'Garden Street at Cambridge Common, Cambridge, MA',
    admission: 'Free',
    displayOrder: 16,
    amenities: ['Historic marker', 'Monument'],
    town: { connect: { id: 'us-ma-cambridge' } },
  },
  {
    id: 'dawes-island',
    name: 'Dawes Island',
    placeType: 'MONUMENT',
    description:
      'A small traffic island with a memorial to William Dawes Jr., who rode from Boston to Lexington on April 18-19, 1775, alongside Paul Revere. Dawes took a different route through Roxbury and Cambridge, helping to warn colonists of the approaching British troops.',
    historicalNote:
      'Dawes continued past Lexington toward Concord but was stopped by a British patrol. He escaped on foot.',
    address: 'Massachusetts Avenue at Garden Street, Cambridge, MA',
    admission: 'Free',
    displayOrder: 17,
    amenities: ['Historic marker'],
    accessibilityNotes: 'Traffic island; view from sidewalk',
    town: { connect: { id: 'us-ma-cambridge' } },
  },
  {
    id: 'powder-house-cambridge',
    name: 'Old Powder House',
    placeType: 'LANDMARK',
    description:
      'A stone tower that served as a gunpowder magazine for Cambridge and surrounding towns. Similar to the Powder House in Somerville (then part of Charlestown), colonial powder stores were a source of tension with British authorities who sought to control ammunition supplies.',
    address: 'Powder House Square area, Cambridge/Somerville line',
    admission: 'Exterior viewing only',
    displayOrder: 18,
    town: { connect: { id: 'us-ma-cambridge' } },
  },
  {
    id: 'fort-washington-park',
    name: 'Fort Washington Park',
    placeType: 'BATTLEFIELD',
    description:
      'Site of a small earthwork fortification built by Continental forces during the Siege of Boston. Part of the defensive ring around Cambridge, the fort helped protect Washington\'s headquarters and the encamped army from any British attempt to break out of Boston.',
    address: 'Waverly Street, Cambridge, MA',
    hours: 'Dawn to dusk',
    admission: 'Free',
    displayOrder: 19,
    amenities: ['Walking paths', 'Historic marker'],
    accessibilityNotes: 'Park with paved paths',
    town: { connect: { id: 'us-ma-cambridge' } },
  },
  {
    id: 'first-parish-unitarian',
    name: 'First Parish in Cambridge',
    placeType: 'CHURCH',
    description:
      'The congregation dates to 1636, making it one of the oldest in the United States. The current building (1833) is not Revolutionary-era, but the congregation played an active role in the independence movement. The meetinghouse that stood during the Revolution was used for town meetings that debated colonial resistance.',
    address: '3 Church Street, Cambridge, MA',
    website: 'https://firstparishcambridge.org/',
    hours: 'Open for services',
    admission: 'Free',
    displayOrder: 20,
    town: { connect: { id: 'us-ma-cambridge' } },
  },
  {
    id: 'lechmere-point',
    name: 'Lechmere Point (East Cambridge)',
    placeType: 'BATTLEFIELD',
    description:
      'During the Siege of Boston, fortifications were constructed at Lechmere Point, overlooking the Charles River and Boston. The position was part of the Continental Army\'s encirclement of British forces. The landscape has been dramatically altered by landfill and development.',
    historicalNote:
      'The original point has been absorbed into East Cambridge. Markers indicate the approximate historical location.',
    address: 'East Cambridge area, near CambridgeSide',
    displayOrder: 21,
    town: { connect: { id: 'us-ma-cambridge' } },
  },
  {
    id: 'read-house',
    name: 'The Read House',
    placeType: 'HISTORIC_HOUSE',
    description:
      'A well-preserved Georgian house (c. 1772) on Brattle Street. During the Revolutionary period, it exemplified the architecture of prosperous colonial Cambridge. While not as famous as Washington\'s headquarters, it represents the residential character of pre-war Cambridge.',
    address: '55 Brattle Street, Cambridge, MA',
    admission: 'Private residence, exterior viewing only',
    displayOrder: 22,
    town: { connect: { id: 'us-ma-cambridge' } },
  },
];
