// MODEL: Claude Sonnet
import { Prisma } from '@prisma/client';

/**
 * Worcester, Massachusetts - Places
 *
 * Worcester was the site of one of the Revolution's earliest acts of organized
 * defiance. In September 1774, thousands of armed citizens forced the closure
 * of the royal courts — months before Lexington and Concord. The town's interior
 * location made it a supply depot and recruiting center throughout the war. Its
 * built environment reflects two and a half centuries of growth from a frontier
 * settlement to an industrial city.
 */

export const worcesterPlaces: Prisma.PlaceCreateInput[] = [
  {
    id: 'worcester-common',
    name: 'Worcester Common',
    placeType: 'LANDMARK',
    description:
      'The civic center of Worcester since the town\'s founding in 1722. The common served as a militia training ground and public gathering space. On September 6, 1774, approximately 4,700 armed citizens assembled here to force the closure of the royal courts — one of the first collective acts of resistance in Massachusetts.',
    historicalNote:
      'The September 1774 courthouse closing predated Lexington by seven months. Judge Timothy Paine was forced to resign his Crown appointment in front of the assembled crowd.',
    address: 'Worcester Common, Main Street, Worcester, MA 01608',
    hours: 'Open daily',
    admission: 'Free',
    featured: true,
    displayOrder: 1,
    amenities: ['Walking paths', 'Benches', 'Public green'],
    accessibilityNotes: 'Paved paths throughout; fully accessible',
    town: { connect: { id: 'us-ma-worcester' } },
  },
  {
    id: 'worcester-city-hall',
    name: 'Worcester City Hall',
    placeType: 'GOVERNMENT',
    description:
      'The current City Hall (1898) occupies a site near where colonial-era town government operated. Worcester\'s town meetings were among the most assertive in opposing British authority. The building houses historical archives and occasional exhibits on local history.',
    address: '455 Main Street, Worcester, MA 01608',
    website: 'https://www.worcesterma.gov/',
    hours: 'Mon-Fri 8:30am-5pm',
    admission: 'Free (public building)',
    featured: true,
    displayOrder: 2,
    amenities: ['Public building', 'Archives'],
    accessibilityNotes: 'Fully accessible',
    town: { connect: { id: 'us-ma-worcester' } },
  },
  {
    id: 'worcester-art-museum',
    name: 'Worcester Art Museum',
    placeType: 'MUSEUM',
    description:
      'Founded in 1896, the museum\'s collections include American art from the colonial and Revolutionary periods. Portraits and decorative arts from 18th-century New England document the material culture of the era. While not primarily a history museum, it provides context for the world Worcester\'s revolutionaries inhabited.',
    address: '55 Salisbury Street, Worcester, MA 01609',
    website: 'https://www.worcesterart.org/',
    phone: '(508) 799-4406',
    hours: 'Wed-Sun 10am-4pm',
    admission: '$18 adults',
    featured: true,
    displayOrder: 3,
    amenities: ['Art galleries', 'Cafe', 'Gift shop', 'Restrooms'],
    accessibilityNotes: 'Fully accessible with elevators',
    town: { connect: { id: 'us-ma-worcester' } },
  },
  {
    id: 'worcester-salisbury-mansion',
    name: 'Salisbury Mansion',
    placeType: 'HISTORIC_HOUSE',
    description:
      'Built in 1772 by Stephen Salisbury, a merchant and civic leader, this is the only 18th-century house museum in Worcester. The mansion has been restored to its 1830s appearance but retains its Revolutionary-era structure. Salisbury was active in patriot politics and his home reflects the prosperity of Worcester\'s merchant class.',
    address: '40 Highland Street, Worcester, MA 01609',
    website: 'https://www.worcesterhistory.org/',
    phone: '(508) 753-8278',
    hours: 'Thu-Sat 10am-4pm',
    admission: '$10 adults',
    featured: true,
    displayOrder: 4,
    amenities: ['Period furnishings', 'Guided tours', 'Museum shop'],
    accessibilityNotes: 'First floor accessible; upper floors via stairs',
    town: { connect: { id: 'us-ma-worcester' } },
  },
  {
    id: 'worcester-history-museum',
    name: 'Worcester Historical Museum',
    placeType: 'MUSEUM',
    description:
      'The primary repository of Worcester\'s local history, with exhibits covering the town\'s founding through the industrial era. Collections include documents from the 1774 court closings, militia records, and artifacts from the Revolutionary period. The museum operates the Salisbury Mansion.',
    address: '30 Elm Street, Worcester, MA 01609',
    website: 'https://www.worcesterhistory.org/',
    phone: '(508) 753-8278',
    hours: 'Wed-Sat 10am-4pm',
    admission: '$7 adults',
    featured: true,
    displayOrder: 5,
    amenities: ['Exhibits', 'Archives', 'Research library'],
    accessibilityNotes: 'Accessible entrance; elevator to all floors',
    town: { connect: { id: 'us-ma-worcester' } },
  },
  {
    id: 'worcester-old-south-church',
    name: 'Old South Church Site',
    placeType: 'CHURCH',
    description:
      'The original Old South Church (no longer standing) was where Worcester\'s patriots gathered to organize resistance. The congregation was central to the town\'s political life, as meetinghouses served both religious and civic functions in colonial New England. A marker indicates the approximate location.',
    address: 'Main Street near Lincoln Square, Worcester, MA 01608',
    admission: 'Free (marker)',
    displayOrder: 6,
    amenities: ['Historic marker'],
    town: { connect: { id: 'us-ma-worcester' } },
  },
  {
    id: 'worcester-rural-cemetery',
    name: 'Worcester Rural Cemetery',
    placeType: 'CEMETERY',
    description:
      'Established in 1838 as one of America\'s early rural cemeteries. While postdating the Revolution, the cemetery contains reinterred remains and memorials for Worcester\'s Revolutionary-era residents. The grounds include markers for soldiers who served in the Continental Army.',
    address: '180 Grove Street, Worcester, MA 01605',
    hours: 'Daily, dawn to dusk',
    admission: 'Free',
    displayOrder: 7,
    amenities: ['Walking paths', 'Historic monuments', 'Scenic grounds'],
    accessibilityNotes: 'Paved roads throughout; some walking paths uneven',
    town: { connect: { id: 'us-ma-worcester' } },
  },
  {
    id: 'worcester-mechanics-hall',
    name: 'Mechanics Hall',
    placeType: 'LANDMARK',
    description:
      'Built in 1857, this is one of the finest pre-Civil War concert halls in the United States. While it postdates the Revolution, the hall represents the civic culture that grew from Worcester\'s tradition of public assembly — the same tradition that produced the 1774 court closings.',
    address: '321 Main Street, Worcester, MA 01608',
    website: 'https://www.mechanicshall.org/',
    hours: 'Events and tours; check schedule',
    admission: 'Varies by event',
    displayOrder: 8,
    amenities: ['Concert hall', 'Historic architecture', 'Events'],
    accessibilityNotes: 'Accessible entrance and seating available',
    town: { connect: { id: 'us-ma-worcester' } },
  },
  {
    id: 'worcester-lincoln-square',
    name: 'Lincoln Square',
    placeType: 'LANDMARK',
    description:
      'A central intersection and public space that has served as Worcester\'s commercial hub since the colonial period. The square\'s location at the meeting of several roads made it a natural gathering point for news, trade, and political activity during the Revolution.',
    address: 'Lincoln Square, Worcester, MA 01608',
    hours: 'Public space',
    admission: 'Free',
    displayOrder: 9,
    amenities: ['Urban landmark', 'Transit access'],
    town: { connect: { id: 'us-ma-worcester' } },
  },
  {
    id: 'worcester-paine-estate-site',
    name: 'Timothy Paine House Site',
    placeType: 'LANDMARK',
    description:
      'Marker for the former home of Judge Timothy Paine, the Crown-appointed councilor who was forced to resign by the assembled crowd on September 6, 1774. Paine recanted his loyalty to the Crown under pressure from approximately 4,700 armed citizens — a confrontation that demonstrated the collapse of royal authority in interior Massachusetts.',
    historicalNote:
      'Paine was one of several "mandamus councillors" appointed under the Massachusetts Government Act. His forced resignation was part of a coordinated campaign across the colony to prevent the new governance structure from functioning.',
    address: '140 Lincoln Street, Worcester, MA 01605',
    admission: 'Free (marker)',
    displayOrder: 10,
    amenities: ['Historic marker'],
    town: { connect: { id: 'us-ma-worcester' } },
  },
];
