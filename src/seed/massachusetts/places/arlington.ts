import { Prisma } from '@prisma/client';

/**
 * Arlington, Massachusetts - Revolutionary War Places
 *
 * Known as Menotomy during the Revolution, Arlington witnessed the bloodiest
 * fighting of April 19, 1775. As British troops retreated from Concord toward
 * Boston, colonial militia ambushed them along what is now Massachusetts Avenue.
 * More soldiers died in Menotomy than at Lexington and Concord combined. The
 * town's geography—stone walls, wooded hills, and scattered buildings—favored
 * the colonial fighters who knew the terrain.
 */

export const arlingtonPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'jason-russell-house',
    name: 'Jason Russell House Museum',
    placeType: 'HISTORIC_HOUSE',
    description:
      'The site of one of the bloodiest encounters on April 19, 1775. Jason Russell, a lame farmer who refused to flee, died defending his home along with eleven other men. British soldiers killed the defenders inside the house, and bullet holes remain visible in the original structure. The house museum interprets the day\'s events and displays period artifacts.',
    historicalNote:
      'Twelve men died at or near the Russell House—more than fell at Lexington Green. Russell was 58 years old and walked with a limp.',
    address: '7 Jason Street, Arlington, MA',
    website: 'https://arlingtonhistorical.org/jason-russell-house/',
    phone: '(781) 648-4300',
    hours: 'Apr-Oct: Sat-Sun 1-4pm, or by appointment',
    admission: 'Suggested donation $5',
    featured: true,
    displayOrder: 1,
    amenities: ['Guided tours', 'Period rooms', 'Museum shop'],
    accessibilityNotes: 'First floor accessible; upper floors via stairs',
    town: { connect: { id: 'us-ma-arlington' } },
  },
  {
    id: 'arlington-old-burying-ground',
    name: 'Old Burying Ground',
    placeType: 'CEMETERY',
    description:
      'Arlington\'s oldest cemetery, dating to 1732. Several militiamen killed on April 19, 1775, are buried here, including Jason Russell. The cemetery contains many 18th-century headstones with characteristic New England carvings. A monument honors the town\'s Revolutionary War dead.',
    address: 'Pleasant Street, Arlington, MA',
    hours: 'Dawn to dusk',
    admission: 'Free',
    featured: true,
    displayOrder: 2,
    amenities: ['Historic gravestones', 'Monument'],
    accessibilityNotes: 'Uneven terrain, grass and gravel paths',
    town: { connect: { id: 'us-ma-arlington' } },
  },
  {
    id: 'foot-of-the-rocks',
    name: 'Foot of the Rocks',
    placeType: 'BATTLEFIELD',
    description:
      'A natural outcropping where colonial militia staged a devastating ambush on the retreating British column. The rocky terrain provided excellent cover for the colonists, who fired down on the exposed regulars. Markers identify the approximate location along Massachusetts Avenue.',
    historicalNote:
      'The rocks have been quarried and built over, but the general terrain remains visible.',
    address: 'Massachusetts Avenue near Park Avenue, Arlington, MA',
    admission: 'Free (roadside marker)',
    featured: true,
    displayOrder: 3,
    amenities: ['Historic marker'],
    town: { connect: { id: 'us-ma-arlington' } },
  },
  {
    id: 'menotomy-rocks-park',
    name: 'Menotomy Rocks Park',
    placeType: 'LANDMARK',
    description:
      'A 17-acre park preserving rocky outcroppings similar to those that provided cover for colonial militia on April 19, 1775. While not a specific battle site, the terrain illustrates the landscape advantages colonists used against the British column. Hiking trails wind through the boulder-strewn woods.',
    address: 'Jason Street, Arlington, MA',
    hours: 'Dawn to dusk',
    admission: 'Free',
    displayOrder: 10,
    amenities: ['Hiking trails', 'Boulder scrambling', 'Nature observation'],
    accessibilityNotes: 'Rough terrain, not accessible',
    town: { connect: { id: 'us-ma-arlington' } },
  },
  {
    id: 'uncle-sam-memorial',
    name: 'Uncle Sam Memorial Statue',
    placeType: 'MONUMENT',
    description:
      'A statue honoring Samuel Wilson (1766-1854), who was born in what was then Menotomy. Wilson later became the inspiration for "Uncle Sam" during the War of 1812. While not directly Revolutionary, the memorial connects Arlington to the broader arc of American identity.',
    historicalNote:
      'Wilson moved to Troy, New York, where his meat-packing business supplied the U.S. Army. Barrels stamped "U.S." were jokingly said to stand for "Uncle Sam."',
    address: 'Main Street at Massachusetts Avenue, Arlington, MA',
    admission: 'Free',
    displayOrder: 11,
    amenities: ['Public art'],
    town: { connect: { id: 'us-ma-arlington' } },
  },
  {
    id: 'whittemore-house-site',
    name: 'Samuel Whittemore Site',
    placeType: 'MONUMENT',
    description:
      'A marker commemorates Samuel Whittemore, an 80-year-old farmer who attacked British soldiers with a musket, pistols, and sword during their retreat. Shot, bayoneted, and left for dead, Whittemore survived and lived to age 98. He is officially designated as the Massachusetts State Hero.',
    historicalNote:
      'Whittemore was the oldest combatant of April 19, 1775. He reportedly killed one soldier and wounded two others before being overwhelmed.',
    address: 'Massachusetts Avenue at Mystic Street, Arlington, MA',
    admission: 'Free (roadside marker)',
    featured: true,
    displayOrder: 4,
    amenities: ['Historic marker'],
    town: { connect: { id: 'us-ma-arlington' } },
  },
  {
    id: 'arlington-town-hall',
    name: 'Arlington Town Hall',
    placeType: 'GOVERNMENT',
    description:
      'The current town hall (1913) is not Revolutionary-era, but the building houses historical documents and occasionally displays artifacts related to April 19, 1775. The town government maintains strong connections to its Menotomy history.',
    address: '730 Massachusetts Avenue, Arlington, MA',
    website: 'https://www.arlingtonma.gov/',
    hours: 'Mon-Fri 8:30am-4:30pm',
    admission: 'Free',
    displayOrder: 12,
    amenities: ['Public building', 'Occasional exhibits'],
    accessibilityNotes: 'Fully accessible',
    town: { connect: { id: 'us-ma-arlington' } },
  },
  {
    id: 'arlington-historical-society',
    name: 'Arlington Historical Society',
    placeType: 'MUSEUM',
    description:
      'Operates the Jason Russell House Museum and maintains archives documenting Arlington\'s history, with particular emphasis on April 19, 1775. The society offers educational programs and walking tours of battle sites along Massachusetts Avenue.',
    address: '7 Jason Street, Arlington, MA',
    website: 'https://arlingtonhistorical.org/',
    phone: '(781) 648-4300',
    displayOrder: 13,
    amenities: ['Archives', 'Educational programs', 'Walking tours'],
    town: { connect: { id: 'us-ma-arlington' } },
  },
  {
    id: 'black-horse-tavern-site',
    name: 'Black Horse Tavern Site',
    placeType: 'TAVERN',
    description:
      'A marker indicates the location of the Black Horse Tavern, which stood on the main road through Menotomy. Like other colonial taverns, it served as a gathering place and information exchange. The original building no longer stands.',
    address: 'Massachusetts Avenue, Arlington, MA',
    admission: 'Free (marker only)',
    displayOrder: 14,
    town: { connect: { id: 'us-ma-arlington' } },
  },
  {
    id: 'cooper-tavern-site',
    name: 'Cooper Tavern Site',
    placeType: 'TAVERN',
    description:
      'Site of another Menotomy tavern where fighting occurred on April 19, 1775. Benjamin and Rachel Cooper owned the establishment, and two men were killed here during the British retreat. The building was demolished in the 19th century.',
    historicalNote:
      'Jason Winship and Jabez Wyman were killed at Cooper Tavern. A historic marker indicates the site.',
    address: 'Massachusetts Avenue, Arlington, MA',
    admission: 'Free (marker only)',
    displayOrder: 15,
    amenities: ['Historic marker'],
    town: { connect: { id: 'us-ma-arlington' } },
  },
  {
    id: 'minuteman-bikeway-arlington',
    name: 'Minuteman Bikeway (Arlington Section)',
    placeType: 'TRAIL',
    description:
      'A paved rail-trail following the approximate route of the British march and retreat. The Arlington section passes near several battle sites and provides interpretive signage. The 10-mile trail connects Arlington to Lexington, Bedford, and Cambridge.',
    address: 'Various access points along Massachusetts Avenue, Arlington, MA',
    website: 'https://minutemanbikeway.org/',
    hours: 'Dawn to dusk',
    admission: 'Free',
    featured: true,
    displayOrder: 5,
    amenities: ['Paved trail', 'Interpretive signs', 'Bicycle-friendly'],
    accessibilityNotes: 'Fully paved, wheelchair and stroller accessible',
    town: { connect: { id: 'us-ma-arlington' } },
  },
  {
    id: 'arlington-center-historic-district',
    name: 'Arlington Center Historic District',
    placeType: 'LANDMARK',
    description:
      'The commercial center of Arlington retains some 18th and 19th-century buildings. While most structures postdate the Revolution, the district\'s layout follows colonial-era roads. The Massachusetts Avenue corridor through the center approximates the route of the British column.',
    address: 'Massachusetts Avenue, Arlington Center',
    displayOrder: 16,
    amenities: ['Shopping', 'Restaurants', 'Historic architecture'],
    accessibilityNotes: 'Standard sidewalks',
    town: { connect: { id: 'us-ma-arlington' } },
  },
  {
    id: 'arlington-first-parish',
    name: 'First Parish Unitarian Universalist',
    placeType: 'CHURCH',
    description:
      'The congregation dates to 1733, though the current building is from 1840. The original meetinghouse would have been a gathering point for the community on April 19, 1775. Town meetings and militia musters often took place at or near the meetinghouse.',
    address: '630 Massachusetts Avenue, Arlington, MA',
    website: 'https://firstparish.info/',
    hours: 'Sunday services; office hours vary',
    admission: 'Free',
    displayOrder: 17,
    amenities: ['Historic congregation', 'Archives'],
    town: { connect: { id: 'us-ma-arlington' } },
  },
  {
    id: 'captain-samuel-cook-house',
    name: 'Captain Samuel Cook House Site',
    placeType: 'HISTORIC_HOUSE',
    description:
      'Captain Samuel Cook commanded one of the Menotomy militia companies that mustered on April 19. The site of his home is marked along Massachusetts Avenue, commemorating his role in organizing local response to the British march.',
    address: 'Massachusetts Avenue, Arlington, MA',
    admission: 'Free (marker only)',
    displayOrder: 18,
    amenities: ['Historic marker'],
    town: { connect: { id: 'us-ma-arlington' } },
  },
  {
    id: 'spy-pond',
    name: 'Spy Pond',
    placeType: 'LANDMARK',
    description:
      'Local tradition holds that the pond received its name from colonial scouts who observed British troop movements from its shores. The pond and surrounding park offer views of the terrain that shaped April 19 fighting. Whether the name\'s origin is genuine or apocryphal, it connects the landscape to Revolutionary memory.',
    address: 'Pond Lane, Arlington, MA',
    hours: 'Dawn to dusk',
    admission: 'Free',
    displayOrder: 19,
    amenities: ['Walking paths', 'Scenic views'],
    town: { connect: { id: 'us-ma-arlington' } },
  },
];
