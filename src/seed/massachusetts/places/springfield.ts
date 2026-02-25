// MODEL: Claude Sonnet
import { Prisma } from '@prisma/client';

/**
 * Springfield, Massachusetts - Places
 *
 * Springfield's Revolutionary significance centers on weapons production.
 * George Washington selected the site for a national armory in 1777, and
 * the facility manufactured muskets, cannon, and ammunition throughout the
 * war. The town's location on the Connecticut River made it a natural
 * supply depot for the Continental Army. A decade after the war, the
 * armory became the target of Shays' Rebellion — an armed uprising that
 * helped convince leaders the Articles of Confederation needed replacing.
 */

export const springfieldPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'springfield-armory-nhs',
    name: 'Springfield Armory National Historic Site',
    placeType: 'MUSEUM',
    description:
      'The site of the nation\'s first federal armory, established by George Washington in 1777. The armory manufactured weapons for the Continental Army and continued production for nearly two centuries. The museum houses one of the largest historic firearms collections in the world, with artifacts spanning from the Revolution through the 20th century.',
    historicalNote:
      'Washington chose Springfield for its inland location — far enough from the coast to be safe from British naval raids — and its access to the Connecticut River for transport.',
    address: '1 Armory Square, Springfield, MA 01105',
    website: 'https://www.nps.gov/spar/',
    phone: '(413) 734-8551',
    hours: 'Wed-Sun 9am-5pm',
    admission: 'Free (NPS)',
    featured: true,
    displayOrder: 1,
    amenities: ['Museum exhibits', 'Firearms collection', 'Ranger talks', 'Film', 'Restrooms', 'Bookstore'],
    accessibilityNotes: 'Fully accessible with elevator',
    town: { connect: { id: 'us-ma-springfield' } },
  },
  {
    id: 'springfield-armory-grounds',
    name: 'Springfield Armory Green',
    placeType: 'LANDMARK',
    description:
      'The parade ground and surrounding buildings of the original armory complex. Several structures date to the early federal period. The green served as a mustering ground during the Revolution and later as the site of the 1787 confrontation between Shays\' rebels and federal troops guarding the arsenal.',
    address: 'Federal Street, Springfield, MA 01105',
    hours: 'Grounds open daily',
    admission: 'Free',
    featured: true,
    displayOrder: 2,
    amenities: ['Historic buildings', 'Walking paths', 'Monuments'],
    accessibilityNotes: 'Paved paths on grounds; some buildings have stairs',
    town: { connect: { id: 'us-ma-springfield' } },
  },
  {
    id: 'springfield-court-square',
    name: 'Court Square',
    placeType: 'LANDMARK',
    description:
      'Springfield\'s historic civic center, where the county courthouse and First Church face a public square. The courthouse was a target during Shays\' Rebellion in 1787, when armed farmers attempted to prevent debt proceedings. The square preserves the spatial relationship between religious, judicial, and commercial authority that defined New England towns.',
    address: 'Court Square, Springfield, MA 01103',
    hours: 'Public space',
    admission: 'Free',
    featured: true,
    displayOrder: 3,
    amenities: ['Historic architecture', 'Public square'],
    accessibilityNotes: 'Fully accessible',
    town: { connect: { id: 'us-ma-springfield' } },
  },
  {
    id: 'springfield-first-church',
    name: 'First Church of Christ',
    placeType: 'CHURCH',
    description:
      'Congregation established in 1637, making it one of the oldest in the Connecticut River Valley. The current building dates to the 19th century, but the congregation served as a civic center during the colonial and Revolutionary periods. Town meetings and political debates took place in or near the meetinghouse.',
    address: '36 Court Street, Springfield, MA 01103',
    hours: 'Sunday services; office hours vary',
    admission: 'Free',
    featured: true,
    displayOrder: 4,
    amenities: ['Historic congregation'],
    town: { connect: { id: 'us-ma-springfield' } },
  },
  {
    id: 'springfield-museums',
    name: 'Springfield Museums',
    placeType: 'MUSEUM',
    description:
      'A campus of five museums including the Springfield Science Museum, the Museum of Fine Arts, and the Lyman and Merrie Wood Museum of Springfield History. The history museum covers the city\'s development from its founding through the industrial era, including the armory\'s role in the Revolution and the impact of Shays\' Rebellion.',
    address: '21 Edwards Street, Springfield, MA 01103',
    website: 'https://springfieldmuseums.org/',
    phone: '(413) 263-6800',
    hours: 'Tue-Sat 10am-5pm, Sun 11am-5pm',
    admission: '$25 adults',
    featured: true,
    displayOrder: 5,
    amenities: ['Multiple museums', 'Gift shop', 'Cafe', 'Restrooms'],
    accessibilityNotes: 'Fully accessible',
    town: { connect: { id: 'us-ma-springfield' } },
  },
  {
    id: 'springfield-connecticut-river-walk',
    name: 'Connecticut Riverwalk and Bikeway',
    placeType: 'TRAIL',
    description:
      'A paved path along the Connecticut River that passes through the area where colonial-era wharves and landings once operated. The river was Springfield\'s primary connection to Long Island Sound and the broader Atlantic economy. During the Revolution, the river served as a transport route for weapons and supplies from the armory.',
    address: 'Riverwalk, Springfield, MA 01103',
    hours: 'Dawn to dusk',
    admission: 'Free',
    displayOrder: 6,
    amenities: ['Paved trail', 'River views', 'Bicycle-friendly'],
    accessibilityNotes: 'Fully paved and accessible',
    town: { connect: { id: 'us-ma-springfield' } },
  },
  {
    id: 'springfield-cemetery',
    name: 'Springfield Cemetery',
    placeType: 'CEMETERY',
    description:
      'Established in 1841 as a rural cemetery, the grounds include reinterred remains and memorials for Springfield residents who served in the Revolution. The cemetery also contains graves of participants on both sides of Shays\' Rebellion. The landscape design reflects the 19th-century garden cemetery movement.',
    address: '171 Maple Street, Springfield, MA 01105',
    hours: 'Daily, dawn to dusk',
    admission: 'Free',
    displayOrder: 7,
    amenities: ['Walking paths', 'Historic monuments', 'Scenic grounds'],
    accessibilityNotes: 'Paved roads throughout; some walking paths are uneven',
    town: { connect: { id: 'us-ma-springfield' } },
  },
  {
    id: 'springfield-old-first-church-cemetery',
    name: 'Old First Church Cemetery',
    placeType: 'CEMETERY',
    description:
      'One of Springfield\'s earliest burial grounds, adjacent to the original meetinghouse site. Contains 17th and 18th-century graves of founding families and Revolutionary-era residents. The headstone carvings reflect the evolution of funerary art in the Connecticut River Valley.',
    address: 'Bridge Street, Springfield, MA 01103',
    hours: 'Daily, dawn to dusk',
    admission: 'Free',
    displayOrder: 8,
    amenities: ['Historic gravestones'],
    accessibilityNotes: 'Uneven ground',
    town: { connect: { id: 'us-ma-springfield' } },
  },
  {
    id: 'springfield-stearns-square',
    name: 'Stearns Square',
    placeType: 'LANDMARK',
    description:
      'A small public square in downtown Springfield that has served as a commercial gathering point since the colonial period. The square\'s location near the river landing made it a natural center for trade and news. Now surrounded by restaurants and shops.',
    address: 'Worthington Street, Springfield, MA 01103',
    hours: 'Public space',
    admission: 'Free',
    displayOrder: 9,
    amenities: ['Restaurants', 'Public space'],
    town: { connect: { id: 'us-ma-springfield' } },
  },
  {
    id: 'springfield-mattoon-street',
    name: 'Mattoon Street Historic District',
    placeType: 'LANDMARK',
    description:
      'A block of restored 19th-century row houses that represents Springfield\'s early urban development. While the buildings postdate the Revolution, the neighborhood pattern reflects the town\'s growth from a frontier settlement to a manufacturing center driven by the armory\'s economic activity.',
    address: 'Mattoon Street, Springfield, MA 01105',
    hours: 'Public street; exterior viewing',
    admission: 'Free',
    displayOrder: 10,
    amenities: ['Historic architecture', 'Walking'],
    town: { connect: { id: 'us-ma-springfield' } },
  },
];
