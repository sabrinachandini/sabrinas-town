// MODEL: Claude Sonnet
import { Prisma } from '@prisma/client';

/**
 * Marblehead, Massachusetts - Places
 *
 * Marblehead's fishermen and sailors played outsized roles in the Revolution
 * relative to the town's small size. Colonel John Glover's regiment — largely
 * Marblehead mariners — rowed Washington's army across the Delaware on
 * Christmas night 1776 and evacuated troops from Long Island earlier that year.
 * The town's harbor, fortifications, and colonial-era buildings remain
 * largely intact.
 */

export const marbleheadPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'marblehead-fort-sewall',
    name: 'Fort Sewall',
    placeType: 'LANDMARK',
    description:
      'A harbor fortification dating to 1742, positioned on a rocky headland at the mouth of Marblehead Harbor. The fort was garrisoned during the Revolution and later conflicts. Its earthworks and stone walls overlook the harbor approaches that Marblehead\'s fishing fleet and Glover\'s regiment knew well.',
    historicalNote:
      'The fort saw active use through the War of 1812 but was never attacked. Its strategic value lay in deterrence — controlling access to one of the best natural harbors on the North Shore.',
    address: 'Fort Sewall, Front Street, Marblehead, MA 01945',
    hours: 'Open daily, dawn to dusk',
    admission: 'Free',
    featured: true,
    displayOrder: 1,
    amenities: ['Harbor views', 'Historic fortifications', 'Picnic area'],
    accessibilityNotes: 'Uneven terrain with stone pathways; some areas steep',
    town: { connect: { id: 'us-ma-marblehead' } },
  },
  {
    id: 'marblehead-old-town-house',
    name: 'Old Town House',
    placeType: 'GOVERNMENT',
    description:
      'Built in 1727, this is one of the oldest town halls in continuous public use in the United States. Marblehead residents gathered here to debate resistance to British taxation and to organize support for the Continental cause. The building served as both civic meetinghouse and market.',
    address: '25 Market Square, Marblehead, MA 01945',
    hours: 'Varies; check locally',
    admission: 'Free',
    featured: true,
    displayOrder: 2,
    amenities: ['Historic architecture', 'Civic building'],
    accessibilityNotes: 'Ground floor accessible; upper level via stairs',
    town: { connect: { id: 'us-ma-marblehead' } },
  },
  {
    id: 'marblehead-jeremiah-lee-mansion',
    name: 'Jeremiah Lee Mansion',
    placeType: 'HISTORIC_HOUSE',
    description:
      'A Georgian mansion built in 1768 for Colonel Jeremiah Lee, one of the wealthiest merchants in pre-Revolutionary Massachusetts. Lee was an active patriot who helped organize resistance to British policies. He died in 1775, reportedly from illness contracted while hiding outdoors to avoid British capture. The mansion retains original hand-painted wallpaper and period furnishings.',
    historicalNote:
      'Lee\'s wealth came from cod fishing and Atlantic trade. His mansion cost an estimated 10,000 pounds — an enormous sum at the time — and used mahogany imported from Honduras.',
    address: '161 Washington Street, Marblehead, MA 01945',
    website: 'https://www.marbleheadmuseum.org/',
    phone: '(781) 631-1768',
    hours: 'Jun-Oct, Tue-Sat 10am-4pm',
    admission: '$12 adults',
    featured: true,
    displayOrder: 3,
    amenities: ['Guided tours', 'Period furnishings', 'Original wallpaper', 'Museum shop'],
    accessibilityNotes: 'First floor partially accessible; upper floors via stairs',
    town: { connect: { id: 'us-ma-marblehead' } },
  },
  {
    id: 'marblehead-abbot-hall',
    name: 'Abbot Hall',
    placeType: 'GOVERNMENT',
    description:
      'Marblehead\'s town hall since 1876, notable for housing Archibald Willard\'s painting "The Spirit of \'76." The painting depicts a fifer, drummer, and flag bearer marching through battle and has become one of the most recognized images of the Revolution. The selectmen\'s meeting room displays the painting alongside other town artifacts.',
    historicalNote:
      'The models for the painting were reportedly based on real people from the region. Whether the painting\'s popular association with Marblehead is historically precise remains debated.',
    address: '188 Washington Street, Marblehead, MA 01945',
    phone: '(781) 631-0528',
    hours: 'Mon-Fri 8am-5pm, seasonal weekend hours',
    admission: 'Free',
    featured: true,
    displayOrder: 4,
    amenities: ['Spirit of \'76 painting', 'Town artifacts', 'Restrooms'],
    accessibilityNotes: 'Main floor accessible; painting viewable from accessible area',
    town: { connect: { id: 'us-ma-marblehead' } },
  },
  {
    id: 'marblehead-old-burial-hill',
    name: 'Old Burial Hill',
    placeType: 'CEMETERY',
    description:
      'Marblehead\'s primary colonial-era cemetery, overlooking the harbor from a prominent hilltop. Graves include Revolutionary War soldiers, fishermen, and the merchant families who built the town\'s economy. The hilltop offers panoramic views of the harbor and coastline that contextualize Marblehead\'s maritime geography.',
    historicalNote:
      'The site served as a lookout point during wartime. From the summit, one can see the harbor approaches, neighboring Salem, and the open ocean — the same vantage points that colonial watchers used.',
    address: 'Orne Street, Marblehead, MA 01945',
    hours: 'Daily, dawn to dusk',
    admission: 'Free',
    featured: true,
    displayOrder: 5,
    amenities: ['Historic gravestones', 'Harbor views', 'Walking paths'],
    accessibilityNotes: 'Steep hillside with uneven ground; limited accessibility',
    town: { connect: { id: 'us-ma-marblehead' } },
  },
  {
    id: 'marblehead-museum',
    name: 'Marblehead Museum',
    placeType: 'MUSEUM',
    description:
      'Operated by the Marblehead Museum and Historical Society, the museum interprets the town\'s fishing, maritime, and military history. Collections include artifacts related to Glover\'s Regiment and the town\'s role in naval operations during the Revolution. The museum also manages the Lee Mansion.',
    address: '170 Washington Street, Marblehead, MA 01945',
    website: 'https://www.marbleheadmuseum.org/',
    phone: '(781) 631-1768',
    hours: 'Tue-Sat 10am-4pm (seasonal)',
    admission: '$5 adults',
    displayOrder: 6,
    amenities: ['Exhibits', 'Archives', 'Museum shop'],
    accessibilityNotes: 'Ground floor accessible',
    town: { connect: { id: 'us-ma-marblehead' } },
  },
  {
    id: 'marblehead-st-michaels-church',
    name: 'St. Michael\'s Church',
    placeType: 'CHURCH',
    description:
      'Built in 1714, this is the oldest Episcopal church building still standing in New England. The church served a congregation that included both loyalist and patriot members, reflecting the divisions that the Revolution created within communities. The interior retains its colonial-era box pews.',
    address: '26 Pleasant Street, Marblehead, MA 01945',
    hours: 'Sunday services; tours by arrangement',
    admission: 'Free',
    displayOrder: 7,
    amenities: ['Colonial box pews', 'Historic architecture'],
    accessibilityNotes: 'Steps at entrance; interior accessible once inside',
    town: { connect: { id: 'us-ma-marblehead' } },
  },
  {
    id: 'marblehead-king-hooper-mansion',
    name: 'King Hooper Mansion',
    placeType: 'HISTORIC_HOUSE',
    description:
      'Built in stages between 1728 and 1747 for Robert "King" Hooper, a wealthy merchant and loyalist. Hooper\'s nickname reflected his commercial power rather than political sympathies, though he ultimately sided with the Crown. The mansion now houses the Marblehead Arts Association and is open for exhibits.',
    address: '8 Hooper Street, Marblehead, MA 01945',
    website: 'https://www.marbleheadarts.org/',
    hours: 'Tue-Sat 12-5pm, Sun 12-4pm',
    admission: 'Free',
    displayOrder: 8,
    amenities: ['Art galleries', 'Historic rooms', 'Garden'],
    accessibilityNotes: 'Partial first-floor access; upper galleries via stairs',
    town: { connect: { id: 'us-ma-marblehead' } },
  },
  {
    id: 'marblehead-crocker-park',
    name: 'Crocker Park',
    placeType: 'LANDMARK',
    description:
      'A small waterfront park with views across Marblehead Harbor. The park overlooks the mooring field and harbor mouth, providing context for the town\'s dependence on maritime activity. During the Revolution, the harbor sheltered fishing boats that were sometimes repurposed for military use.',
    address: 'Front Street, Marblehead, MA 01945',
    hours: 'Open daily',
    admission: 'Free',
    displayOrder: 9,
    amenities: ['Harbor views', 'Benches', 'Waterfront access'],
    accessibilityNotes: 'Accessible via paved path',
    town: { connect: { id: 'us-ma-marblehead' } },
  },
  {
    id: 'marblehead-elbridge-gerry-house',
    name: 'Elbridge Gerry House Site',
    placeType: 'LANDMARK',
    description:
      'Marker indicating the birthplace of Elbridge Gerry (1744-1814), a signer of the Declaration of Independence and later Vice President of the United States. Gerry represented Massachusetts in the Continental Congress and was a vocal advocate for colonial rights. The term "gerrymandering" derives from his later political career.',
    historicalNote:
      'Gerry\'s father was a successful merchant in the cod trade, connecting the family\'s politics to Marblehead\'s economic interests in opposing British trade restrictions.',
    address: '44 Washington Street, Marblehead, MA 01945',
    admission: 'Free (marker)',
    displayOrder: 10,
    amenities: ['Historic marker'],
    town: { connect: { id: 'us-ma-marblehead' } },
  },
  {
    id: 'marblehead-lighthouse',
    name: 'Marblehead Light',
    placeType: 'LANDMARK',
    description:
      'A cast-iron lighthouse built in 1895, replacing earlier navigational markers at the entrance to Marblehead Harbor. While the current structure postdates the Revolution, the point it occupies has guided mariners for centuries. The lighthouse offers views of the coastline between Marblehead and Salem.',
    address: 'Follett Street, Chandler Hovey Park, Marblehead, MA 01945',
    hours: 'Grounds open daily; tower exterior only',
    admission: 'Free',
    displayOrder: 11,
    amenities: ['Coastal views', 'Photography', 'Walking paths'],
    accessibilityNotes: 'Path to lighthouse is paved; surrounding rocks are uneven',
    town: { connect: { id: 'us-ma-marblehead' } },
  },
];
