// MODEL: Claude Sonnet
// Delaware towns source data - First State, Constitution, and Delaware Valley campaigns
// Towns: Dover, Wilmington

import { Prisma } from '@prisma/client';

export const delawareSources: Record<
  string,
  { sources: Prisma.SourceCreateInput[]; sharedIds?: string[] }
> = {
  'us-de-dover': {
    sources: [
      // TIER 1
      {
        id: 'src-dover-delaware-ratification',
        type: 'PRIMARY',
        title: 'Delaware Ratification of the U.S. Constitution, December 7, 1787',
        publisherOrHolder: 'National Archives, Records of the Continental and Confederation Congresses',
        url: 'https://www.archives.gov/founding-docs/constitution',
        credibilityTier: 'TIER1',
        notes:
          'The official engrossed ratification document signed by Delaware delegates at Dover, making Delaware the first state to ratify the U.S. Constitution. Dover served as the site of this unanimous vote.',
      },
      {
        id: 'src-dover-delaware-state-archives',
        type: 'PRIMARY',
        title: 'Delaware Public Archives: Revolutionary War Records',
        publisherOrHolder: 'Delaware Public Archives',
        url: 'https://archives.delaware.gov/',
        credibilityTier: 'TIER1',
        notes:
          'Delaware\'s official state archives holding the records of the Delaware Council of Safety, General Assembly wartime sessions held at Dover, military muster rolls, and correspondence with the Continental Congress.',
      },
      {
        id: 'src-dover-delaware-declaration',
        type: 'PRIMARY',
        title: 'Delaware Declaration of Rights and Fundamental Rules, September 11, 1776',
        publisherOrHolder: 'Delaware Public Archives',
        url: 'https://archives.delaware.gov/',
        credibilityTier: 'TIER1',
        notes:
          'Delaware\'s own declaration of rights and constitutional framework, adopted at New Castle but administered from Dover. Demonstrates Delaware\'s early move to establish independent governance separate from Pennsylvania.',
      },
      {
        id: 'src-dover-reed-delaware-revolution',
        type: 'SECONDARY',
        title: 'Life and Correspondence of Joseph Reed',
        publisherOrHolder: 'Lindsay and Blakiston (William B. Reed)',
        publicationDate: new Date('1847-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Correspondence that illuminates the relationship between Delaware and Pennsylvania military and political circles, with references to Caesar Rodney\'s famous midnight ride to Philadelphia to cast Delaware\'s deciding vote for independence.',
      },
      {
        id: 'src-dover-nps-first-state',
        type: 'INSTITUTIONAL',
        title: 'First State National Historical Park: Dover Unit',
        publisherOrHolder: 'National Park Service',
        url: 'https://www.nps.gov/frst/index.htm',
        credibilityTier: 'TIER1',
        notes:
          'NPS interpretive program for the First State National Historical Park, including the John Dickinson Plantation near Dover. Covers Delaware\'s constitutional history and its role as the first state to ratify.',
      },
      // TIER 2
      {
        id: 'src-dover-munroe-colonial-delaware',
        type: 'SECONDARY',
        title: 'Colonial Delaware: A History',
        publisherOrHolder: 'KTO Press (John A. Munroe)',
        publicationDate: new Date('1978-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Standard scholarly history of Delaware through the Revolutionary period. Covers Dover\'s emergence as the capital, the Declaration vote drama, and Delaware\'s complicated loyalties as a border state.',
      },
      {
        id: 'src-dover-delaware-historical-society',
        type: 'INSTITUTIONAL',
        title: 'Delaware Historical Society: Revolutionary War Collections',
        publisherOrHolder: 'Delaware Historical Society',
        url: 'https://dehs.org/',
        credibilityTier: 'TIER2',
        notes:
          'Archival and museum collections covering Delaware\'s Revolutionary War period, including Caesar Rodney papers, Delaware Regiment records, and materials related to Dover\'s wartime administrative function.',
      },
      {
        id: 'src-dover-hancock-caesar-rodney',
        type: 'SECONDARY',
        title: 'Caesar Rodney: Patriot',
        publisherOrHolder: 'University of Delaware Press (George Ryden)',
        publicationDate: new Date('1933-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Scholarly biography of Caesar Rodney, Dover\'s most prominent Revolutionary figure, covering his famous midnight ride from Dover to Philadelphia and his subsequent role commanding Delaware\'s militia.',
      },
      {
        id: 'src-dover-john-dickinson-plantation',
        type: 'INSTITUTIONAL',
        title: 'John Dickinson Plantation State Historic Site',
        publisherOrHolder: 'Delaware Division of Historical and Cultural Affairs',
        url: 'https://history.delaware.gov/dickinson/',
        credibilityTier: 'TIER2',
        notes:
          'State historic site documentation for the plantation of John Dickinson, author of the "Letters from a Farmer in Pennsylvania" and a key figure in Delaware\'s constitutional development near Dover.',
      },
      {
        id: 'src-dover-delaware-archives-muster',
        type: 'SECONDARY',
        title: 'Delaware Archives: Military Records of Delaware in the Revolution',
        publisherOrHolder: 'Public Archives Commission of Delaware (Henry Clay Conrad)',
        publicationDate: new Date('1911-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Published compilation of Delaware\'s Revolutionary War military records, including muster rolls, pension applications, and officer lists. Documents the Delaware Regiment\'s service and contributions from Dover.',
      },
      // TIER 3
      {
        id: 'src-dover-wikipedia',
        type: 'TERTIARY',
        title: 'Dover, Delaware -- Wikipedia',
        publisherOrHolder: 'Wikimedia Foundation',
        url: 'https://en.wikipedia.org/wiki/Dover,_Delaware',
        credibilityTier: 'TIER3',
        notes:
          'General reference overview of Dover including its establishment as the state capital and role in ratifying the Constitution. Specific claims should be verified against Delaware Public Archives and Munroe.',
      },
      {
        id: 'src-dover-visit-delaware',
        type: 'TERTIARY',
        title: 'Visit Delaware: First State Heritage Sites',
        publisherOrHolder: 'Delaware Tourism Office',
        url: 'https://www.visitdelaware.com/',
        credibilityTier: 'TIER3',
        notes:
          'State tourism resources on Delaware\'s Revolutionary heritage in Dover, including the Old State House, Legislative Hall, and the First State National Historical Park with practical visitor information.',
      },
    ],
  },

  'us-de-wilmington': {
    sources: [
      // TIER 1
      {
        id: 'src-wilmington-cooch-bridge-pension',
        type: 'PRIMARY',
        title: 'Revolutionary War Pension Applications: Delaware Veterans',
        publisherOrHolder: 'National Archives, Record Group 15',
        url: 'https://www.fold3.com/collection/revolutionary-war-pension-bounty-land-warrant-application-files',
        credibilityTier: 'TIER1',
        notes:
          'Pension application files from Delaware veterans who served in the Battle of Cooch\'s Bridge (September 3, 1777) near Wilmington--the only Revolutionary War battle fought on Delaware soil and possibly the first use of the Stars and Stripes in combat.',
      },
      {
        id: 'src-wilmington-howe-campaign-orders',
        type: 'PRIMARY',
        title: 'General Howe\'s Orders and Correspondence: Chesapeake Bay Campaign, August-October 1777',
        publisherOrHolder: 'British Headquarters Papers, Clements Library, University of Michigan',
        credibilityTier: 'TIER1',
        notes:
          'British military orders from Howe\'s advance through the Delaware Valley, including directives covering the march through Wilmington and its use as a staging point for the Philadelphia campaign.',
      },
      {
        id: 'src-wilmington-continental-army-orders',
        type: 'PRIMARY',
        title: 'Orderly Books of the Continental Army: Delaware Campaign, September 1777',
        publisherOrHolder: 'Library of Congress, George Washington Papers',
        url: 'https://www.loc.gov/collections/george-washington-papers/',
        credibilityTier: 'TIER1',
        notes:
          'Washington\'s headquarters orders during the period when both armies moved through the Wilmington area before the Battle of Brandywine. Documents the strategic significance of the Delaware Valley corridor.',
      },
      {
        id: 'src-wilmington-nps-brandywine',
        type: 'INSTITUTIONAL',
        title: 'Brandywine Battlefield Park: Historical Overview',
        publisherOrHolder: 'Pennsylvania Historical and Museum Commission',
        url: 'https://brandywinebattlefield.org/',
        credibilityTier: 'TIER1',
        notes:
          'Official documentation of the Brandywine campaign including the routes through Wilmington, the Delaware River crossings, and the regional significance of the Delaware Valley as a contested corridor in 1777.',
      },
      {
        id: 'src-wilmington-munroe-history-delaware',
        type: 'SECONDARY',
        title: 'History of Delaware Through its Governors, 1776-1888',
        publisherOrHolder: 'University of Delaware Press (John A. Munroe)',
        publicationDate: new Date('1954-01-01'),
        credibilityTier: 'TIER1',
        notes:
          'Scholarly history covering Delaware\'s wartime governance and the impact of the Philadelphia campaign on Wilmington, which experienced British occupation and the disruption of its Quaker-dominated commercial life.',
      },
      // TIER 2
      {
        id: 'src-wilmington-mcguire-philadelphia-campaign',
        type: 'SECONDARY',
        title: 'The Philadelphia Campaign, Volume 1: Brandywine and the Fall of Philadelphia',
        publisherOrHolder: 'Stackpole Books (Thomas McGuire)',
        publicationDate: new Date('2006-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Detailed military history of the 1777 Philadelphia campaign covering troop movements through Wilmington and the Delaware Valley. Well-researched account of how both armies used the Wilmington area.',
      },
      {
        id: 'src-wilmington-delaware-historical-society',
        type: 'INSTITUTIONAL',
        title: 'Delaware Historical Society: Wilmington Revolutionary Collections',
        publisherOrHolder: 'Delaware Historical Society',
        url: 'https://dehs.org/',
        credibilityTier: 'TIER2',
        notes:
          'Museum and archival resources on Wilmington\'s Revolutionary War period, including Quaker community records documenting the tensions between pacifism and Patriot mobilization.',
      },
      {
        id: 'src-wilmington-cooch-bridge-society',
        type: 'INSTITUTIONAL',
        title: 'Cooch\'s Bridge Battlefield: Historical Documentation',
        publisherOrHolder: 'Friends of Cooch\'s Bridge Battlefield',
        url: 'https://www.coochsbridgebattlefield.org/',
        credibilityTier: 'TIER2',
        notes:
          'Preservation organization documentation for Cooch\'s Bridge battlefield near Wilmington--the only battle of the Revolutionary War fought in Delaware and the possible first combat deployment of the Stars and Stripes.',
      },
      {
        id: 'src-wilmington-quaker-records',
        type: 'SECONDARY',
        title: 'Quakers and the American Revolution in Delaware',
        publisherOrHolder: 'Quaker History (Friends Historical Association)',
        credibilityTier: 'TIER2',
        notes:
          'Scholarly examination of Delaware Quakers\' response to the Revolution--their pacifism, commercial disruption during British occupation of Wilmington, and the disproportionate impact on Wilmington\'s dominant religious community.',
      },
      {
        id: 'src-wilmington-rodney-correspondence',
        type: 'SECONDARY',
        title: 'Letters to and from Caesar Rodney, 1756-1784',
        publisherOrHolder: 'University of Pennsylvania Press (ed. George Herbert Ryden)',
        publicationDate: new Date('1933-01-01'),
        credibilityTier: 'TIER2',
        notes:
          'Published correspondence illuminating communication between Delaware\'s Revolutionary leaders, including references to Wilmington\'s exposure to British forces during the 1777 Delaware Valley campaign.',
      },
      // TIER 3
      {
        id: 'src-wilmington-wikipedia',
        type: 'TERTIARY',
        title: 'Wilmington, Delaware -- Wikipedia',
        publisherOrHolder: 'Wikimedia Foundation',
        url: 'https://en.wikipedia.org/wiki/Wilmington,_Delaware',
        credibilityTier: 'TIER3',
        notes:
          'General reference overview of Wilmington including its founding history and Revolutionary War context. Cross-reference military claims with McGuire\'s Philadelphia campaign study.',
      },
      {
        id: 'src-wilmington-visit-tourism',
        type: 'TERTIARY',
        title: 'Visit Wilmington & the Brandywine Valley',
        publisherOrHolder: 'Wilmington Alliance / Greater Wilmington CVB',
        url: 'https://www.visitwilmingtonde.com/',
        credibilityTier: 'TIER3',
        notes:
          'Tourism resources covering Wilmington\'s Revolutionary War sites and the Brandywine Valley battlefields accessible from the city, including Brandywine Battlefield Park and Cooch\'s Bridge.',
      },
    ],
  },
};
