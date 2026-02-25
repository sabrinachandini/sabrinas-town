// MODEL: Claude Sonnet (structure + historical content)
// Morristown, NJ - Places seed data (6 historic sites)

import { Prisma } from '@prisma/client';

/**
 * Places in Morristown, New Jersey
 *
 * These locations represent the core Revolutionary War sites in and around
 * Morristown, centered on the Morristown National Historical Park — the
 * first national historical park in the United States (est. 1933).
 */

export const morristownPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'washingtons-headquarters-museum',
    name: "Washington's Headquarters Museum",
    placeType: 'MUSEUM',
    description:
      "The Ford Mansion served as Washington's headquarters during the Hard Winter of 1779-80. The adjacent museum houses one of the finest collections of Revolutionary War artifacts in the country, including weapons, documents, and personal items of Continental Army soldiers.",
    lat: 40.7672,
    lng: -74.4699,
    address: '30 Washington Place, Morristown, NJ 07960',
    hours: 'Wednesday-Sunday, 10:00 AM - 5:00 PM (seasonal hours vary)',
    admission: 'Free (National Park Service)',
    website: 'https://www.nps.gov/morr/',
    phone: '(973) 539-2016',
    accessibilityNotes:
      'Museum is fully accessible. Ford Mansion first floor accessible; upper floors via virtual tour.',
    parkingNotes: 'Free NPS parking lot adjacent to the museum.',
    amenities: ['restrooms', 'bookstore', 'museum exhibits', 'film', 'ranger programs'],
    historicalNote:
      "The Ford Mansion was the home of Colonel Jacob Ford Jr.'s widow and family. Washington commandeered it for the winter of 1779-80, establishing it as both military headquarters and his residence. The house was one of the finest in Morristown, reflecting the Ford family's wealth from the local iron industry.",
    displayOrder: 1,
    featured: true,
    town: { connect: { id: 'us-nj-morristown' } },
  },
  {
    id: 'jockey-hollow-encampment',
    name: 'Jockey Hollow Encampment',
    placeType: 'BATTLEFIELD',
    description:
      'The site of the Continental Army\'s main encampment during the Hard Winter of 1779-80. Over 10,000 soldiers built more than 1,000 log huts across this wooded landscape. Today, reconstructed huts and the outlines of original hut sites are visible along miles of hiking trails.',
    lat: 40.7628,
    lng: -74.5350,
    address: 'Tempe Wick Road, Morristown, NJ 07960',
    hours: 'Daily, sunrise to sunset. Visitor contact station open seasonally.',
    admission: 'Free (National Park Service)',
    website: 'https://www.nps.gov/morr/planyourvisit/jockeyhollowarea.htm',
    phone: '(973) 543-4030',
    accessibilityNotes:
      'Paved roads provide vehicle access. Some trails are unpaved and may be challenging for wheelchairs. Reconstructed soldier huts are viewable from road.',
    parkingNotes: 'Multiple free parking areas throughout Jockey Hollow.',
    amenities: ['hiking trails', 'reconstructed huts', 'historical markers', 'picnic areas'],
    historicalNote:
      'Jockey Hollow was selected for its natural resources: timber for huts and firewood, water from streams, and defensible terrain. The encampment area stretched across several hills, with different brigades assigned to specific locations. Depressions from the original hut sites are still visible throughout the forest.',
    displayOrder: 2,
    featured: true,
    town: { connect: { id: 'us-nj-morristown' } },
  },
  {
    id: 'fort-nonsense',
    name: 'Fort Nonsense',
    placeType: 'LANDMARK',
    description:
      'A hilltop earthwork fortification built by Continental soldiers in 1777, offering commanding views of the surrounding countryside. Local legend holds that Washington ordered its construction partly to keep idle soldiers busy — hence the name.',
    lat: 40.7933,
    lng: -74.4757,
    address: 'Ann Street, Morristown, NJ 07960',
    hours: 'Open daily, dawn to dusk',
    admission: 'Free',
    website: 'https://www.nps.gov/morr/planyourvisit/fortnonsense.htm',
    phone: null,
    accessibilityNotes:
      'Steep uphill walk from parking area. Not wheelchair accessible.',
    parkingNotes: 'Small parking area at base of hill.',
    amenities: ['historical markers', 'scenic overlook'],
    historicalNote:
      'Despite its dismissive name, Fort Nonsense was a legitimate defensive position. Its hilltop location provided observation of approaches from the east and could have served as a rally point if the British advanced through the Watchung gap. The earthworks are barely visible today, but the panoramic views remain.',
    displayOrder: 3,
    featured: false,
    town: { connect: { id: 'us-nj-morristown' } },
  },
  {
    id: 'wick-house',
    name: 'Wick House',
    placeType: 'HISTORIC_HOUSE',
    description:
      "A preserved 1750s farmhouse within Jockey Hollow, home of the Wick family during the Revolution. Major General Arthur St. Clair used it as his headquarters during the 1779-80 encampment. The house is associated with the legend of Tempe Wick hiding her horse from mutinous soldiers.",
    lat: 40.7655,
    lng: -74.5283,
    address: 'Jockey Hollow Road, Morristown, NJ 07960',
    hours: 'Interior open seasonally with ranger-led tours. Grounds open daily.',
    admission: 'Free (National Park Service)',
    website: 'https://www.nps.gov/morr/planyourvisit/jockeyhollowarea.htm',
    phone: null,
    accessibilityNotes:
      'Exterior accessible. Interior has narrow doorways and uneven floors typical of 18th-century construction.',
    parkingNotes: 'Parking available at nearby Jockey Hollow lots.',
    amenities: ['ranger tours', 'herb garden', 'historical markers'],
    historicalNote:
      "Henry Wick's 1,400-acre farm was commandeered for the encampment. The family remained in the house while thousands of soldiers camped on their land. The Tempe Wick legend — whether fully historical or partly folklore — captures the real tensions between the army and the civilian population that sustained it.",
    displayOrder: 4,
    featured: false,
    town: { connect: { id: 'us-nj-morristown' } },
  },
  {
    id: 'morristown-green',
    name: 'Morristown Green',
    placeType: 'LANDMARK',
    description:
      "The historic town green that served as the social and military center of Morristown during the Revolution. Washington's first headquarters (Arnold's Tavern) stood at its edge. The green witnessed troop musters, public announcements, and the daily life of an army encamped in a civilian town.",
    lat: 40.7968,
    lng: -74.4773,
    address: 'The Green, Morristown, NJ 07960',
    hours: 'Open daily',
    admission: 'Free',
    website: null,
    phone: null,
    accessibilityNotes:
      'Paved walkways surround the green. Fully accessible.',
    parkingNotes: 'Metered street parking and public garages nearby.',
    amenities: ['benches', 'historical markers', 'monuments'],
    historicalNote:
      "The Morristown Green has been the town's gathering place since its founding. During the first winter encampment (1777), Arnold's Tavern on the green served as Washington's headquarters. The green saw soldiers muster, drill, and receive their meager rations — a public stage for the army's struggles.",
    displayOrder: 5,
    featured: false,
    town: { connect: { id: 'us-nj-morristown' } },
  },
  {
    id: 'morristown-presbyterian-church',
    name: 'First Presbyterian Church of Morristown',
    placeType: 'CHURCH',
    description:
      'One of the oldest congregations in New Jersey, the church served as a hospital for Continental soldiers during both winter encampments. Reverend Timothy Johnes, a fervent patriot, used his pulpit to rally support for the Revolution.',
    lat: 40.7960,
    lng: -74.4790,
    address: '57 E Park Place, Morristown, NJ 07960',
    hours: 'Open for services and by appointment for historical visits.',
    admission: 'Free',
    website: null,
    phone: null,
    accessibilityNotes:
      'Main level accessible. Historic cemetery adjacent.',
    parkingNotes: 'Church parking lot and street parking.',
    amenities: ['historic cemetery', 'historical markers'],
    historicalNote:
      'The church was central to Morristown\'s Revolutionary identity. Its cemetery contains graves of Continental soldiers. Reverend Johnes provided moral support to the army and ministered to sick and dying soldiers during both encampments. The current building dates from the 19th century, but the congregation\'s Revolutionary-era role is well documented.',
    displayOrder: 6,
    featured: false,
    town: { connect: { id: 'us-nj-morristown' } },
  },
];
