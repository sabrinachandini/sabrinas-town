// MODEL: Claude Sonnet
import { Prisma } from '@prisma/client';

/**
 * Plymouth, Massachusetts - Places
 *
 * Plymouth's Revolutionary identity sits atop a much older layer of historical
 * memory. The town that symbolized English settlement in America sent militia
 * to the siege of Boston within days of Lexington. Its 18th-century residents
 * understood themselves as inheritors of a tradition of self-governance that
 * predated royal authority by more than a century.
 */

export const plymouthPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'plymouth-rock',
    name: 'Plymouth Rock',
    placeType: 'MONUMENT',
    description:
      'The traditional landing site of the Mayflower passengers in 1620, now sheltered beneath a granite portico on the waterfront. While the rock\'s connection to the actual landing is debated by historians, it became a powerful symbol of self-governance that Revolutionary-era colonists invoked when arguing for independence.',
    historicalNote:
      'The rock was first identified as the landing site in 1741, when a 94-year-old church elder claimed his father had pointed it out. By the Revolution, it had become a rallying symbol for colonial rights.',
    address: '79 Water Street, Plymouth, MA 02360',
    website: 'https://www.nps.gov/plac/',
    hours: 'Open daily, dawn to dusk',
    admission: 'Free',
    featured: true,
    displayOrder: 1,
    amenities: ['Waterfront viewing', 'Historic marker', 'Nearby restrooms'],
    accessibilityNotes: 'Viewing area accessible via ramp; portico has stairs',
    town: { connect: { id: 'us-ma-plymouth' } },
  },
  {
    id: 'plymouth-pilgrim-hall-museum',
    name: 'Pilgrim Hall Museum',
    placeType: 'MUSEUM',
    description:
      'America\'s oldest continuously operating public museum, founded in 1824. Collections span from the 1620 settlement through the Revolutionary period. The museum documents how Plymouth\'s identity as a self-governing community shaped its politics in the 1770s.',
    address: '75 Court Street, Plymouth, MA 02360',
    website: 'https://www.pilgrimhall.org/',
    phone: '(508) 746-1620',
    hours: 'Daily 9:30am-4:30pm (seasonal)',
    admission: '$15 adults',
    featured: true,
    displayOrder: 2,
    amenities: ['Museum exhibits', 'Gift shop', 'Restrooms', 'Research library'],
    accessibilityNotes: 'Fully accessible with elevator',
    town: { connect: { id: 'us-ma-plymouth' } },
  },
  {
    id: 'plymouth-burial-hill',
    name: 'Burial Hill',
    placeType: 'CEMETERY',
    description:
      'Plymouth\'s oldest burying ground, dating to the colony\'s founding. The hillside contains graves spanning from the 1620s through the 19th century, including Revolutionary War veterans. The site also served as a watchtower and fortification point during the colony\'s early years.',
    address: 'School Street, Plymouth, MA 02360',
    hours: 'Daily, dawn to dusk',
    admission: 'Free',
    featured: true,
    displayOrder: 3,
    amenities: ['Historic gravestones', 'Harbor views', 'Walking paths'],
    accessibilityNotes: 'Steep hillside with uneven terrain; limited accessibility',
    town: { connect: { id: 'us-ma-plymouth' } },
  },
  {
    id: 'plymouth-national-monument',
    name: 'National Monument to the Forefathers',
    placeType: 'MONUMENT',
    description:
      'At 81 feet, this is the largest solid granite monument in the United States. Dedicated in 1889, it depicts allegorical figures representing the principles the Pilgrims valued: Faith, Morality, Education, Law, and Liberty. The monument reflects the 19th-century view that Plymouth\'s founding principles led directly to the Revolution.',
    address: '72 Allerton Street, Plymouth, MA 02360',
    hours: 'Daily, dawn to dusk',
    admission: 'Free',
    featured: true,
    displayOrder: 4,
    amenities: ['Monument viewing', 'Park grounds', 'Parking'],
    accessibilityNotes: 'Paved path to base; surrounding grounds are grass',
    town: { connect: { id: 'us-ma-plymouth' } },
  },
  {
    id: 'plymouth-plimoth-patuxet',
    name: 'Plimoth Patuxet Museums',
    placeType: 'MUSEUM',
    description:
      'A living history museum recreating both the 1627 English settlement and the Wampanoag homesite. While focused on the earlier colonial period, the museum provides context for the century and a half of self-governance that preceded Plymouth\'s participation in the Revolution. Costumed interpreters portray documented residents.',
    address: '137 Warren Avenue, Plymouth, MA 02360',
    website: 'https://plimoth.org/',
    phone: '(508) 746-1622',
    hours: 'Daily 9am-5pm (seasonal)',
    admission: '$30 adults',
    featured: true,
    displayOrder: 5,
    amenities: ['Living history', 'Costumed interpreters', 'Gift shop', 'Cafe', 'Restrooms'],
    accessibilityNotes: 'Visitor center accessible; outdoor village paths are uneven',
    town: { connect: { id: 'us-ma-plymouth' } },
  },
  {
    id: 'plymouth-mayflower-ii',
    name: 'Mayflower II',
    placeType: 'LANDMARK',
    description:
      'A full-scale reproduction of the 17th-century merchant ship that carried the Pilgrims to Plymouth. Built in England in 1956 and sailed to Plymouth, the ship illustrates the maritime traditions that continued to shape the town through the Revolutionary period. Interpreters discuss both the original voyage and colonial-era seafaring.',
    address: 'State Pier, Plymouth, MA 02360',
    website: 'https://plimoth.org/what-see-do/mayflower-ii',
    hours: 'Daily 10am-5pm (seasonal)',
    admission: 'Included with Plimoth Patuxet admission',
    featured: true,
    displayOrder: 6,
    amenities: ['Ship tours', 'Interpreters', 'Waterfront access'],
    accessibilityNotes: 'Gangway to ship may be steep; dock area accessible',
    town: { connect: { id: 'us-ma-plymouth' } },
  },
  {
    id: 'plymouth-court-house',
    name: 'Plymouth County Courthouse Site',
    placeType: 'GOVERNMENT',
    description:
      'The site of colonial-era court proceedings in Plymouth County. Courts were a focal point of Revolutionary resistance across Massachusetts — the closure of royal courts in 1774 was one of the earliest collective acts of defiance. Plymouth County\'s courts were among those shut down by patriot action.',
    address: 'Court Street, Plymouth, MA 02360',
    hours: 'Exterior viewing anytime',
    admission: 'Free',
    displayOrder: 7,
    amenities: ['Historic marker'],
    town: { connect: { id: 'us-ma-plymouth' } },
  },
  {
    id: 'plymouth-cole-hill',
    name: 'Cole\'s Hill',
    placeType: 'LANDMARK',
    description:
      'A hillside overlooking Plymouth Harbor where the first Pilgrim settlers who died during the winter of 1620-1621 were buried in unmarked graves. A sarcophagus with remains discovered in 1855 sits atop the hill. The site offers views of the harbor and waterfront that contextualize Plymouth\'s maritime economy.',
    address: 'Carver Street, Plymouth, MA 02360',
    hours: 'Open daily',
    admission: 'Free',
    displayOrder: 8,
    amenities: ['Harbor views', 'Historic markers', 'Walking paths'],
    accessibilityNotes: 'Hillside with stairs; partial access via street level',
    town: { connect: { id: 'us-ma-plymouth' } },
  },
  {
    id: 'plymouth-spooner-house',
    name: 'Spooner House',
    placeType: 'HISTORIC_HOUSE',
    description:
      'Built around 1749, this house was occupied by the Spooner family for over two centuries. The family\'s story spans the Revolutionary period, and the house contains furnishings and documents from the 18th century. Operated by the Plymouth Antiquarian Society.',
    address: '27 North Street, Plymouth, MA 02360',
    website: 'https://plymouthantiquariansociety.org/',
    hours: 'Jun-Sep, Thu-Sat 12-5pm',
    admission: '$8 adults',
    displayOrder: 9,
    amenities: ['Period furnishings', 'Guided tours'],
    accessibilityNotes: 'First floor partially accessible; upper floor via stairs',
    town: { connect: { id: 'us-ma-plymouth' } },
  },
  {
    id: 'plymouth-leyden-street',
    name: 'Leyden Street',
    placeType: 'LANDMARK',
    description:
      'The first street laid out by Plymouth colonists in 1620, running from the waterfront up to Burial Hill. While no original structures survive, the street\'s path follows the colony\'s earliest settlement pattern. The surrounding neighborhood preserves 18th-century buildings from the period leading to the Revolution.',
    address: 'Leyden Street, Plymouth, MA 02360',
    hours: 'Public street',
    admission: 'Free',
    displayOrder: 10,
    amenities: ['Historic streetscape', 'Walking'],
    town: { connect: { id: 'us-ma-plymouth' } },
  },
  {
    id: 'plymouth-jenny-grist-mill',
    name: 'Jenney Grist Mill',
    placeType: 'LANDMARK',
    description:
      'A reconstruction of the 1636 grist mill built by John Jenney on Town Brook. The original mill operated for over a century. Water-powered mills like this one were essential to colonial self-sufficiency — the kind of local production capacity that helped sustain resistance to British trade restrictions.',
    address: '6 Spring Lane, Plymouth, MA 02360',
    hours: 'Seasonal',
    admission: 'Nominal fee',
    displayOrder: 11,
    amenities: ['Working mill', 'Demonstrations'],
    accessibilityNotes: 'Ground floor accessible',
    town: { connect: { id: 'us-ma-plymouth' } },
  },
];
