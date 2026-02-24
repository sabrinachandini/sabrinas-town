// MODEL: Claude Sonnet
// Theme seed data

import { Prisma } from '@prisma/client';

export const themes: Prisma.ThemeCreateInput[] = [
  {
    id: 'liberty-freedom',
    name: 'Liberty and Freedom',
    description:
      'The foundational ideals of the American Revolution—the belief that all people possess natural rights to liberty and self-governance. This theme explores how colonists articulated and fought for these principles.',
  },
  {
    id: 'citizen-soldiers',
    name: 'Citizen Soldiers',
    description:
      'The militia tradition and the transformation of ordinary farmers, merchants, and tradesmen into soldiers willing to fight for independence. Explores the minuteman ideal and its legacy.',
  },
  {
    id: 'women-revolution',
    name: 'Women of the Revolution',
    description:
      'The often-overlooked contributions of women during the Revolutionary era—as spies, soldiers, propagandists, boycott organizers, and keepers of home and community during wartime.',
  },
  {
    id: 'enslaved-free-black',
    name: 'Enslaved and Free Black Voices',
    description:
      'The complex experiences of Black Americans during the Revolution—those who fought for the Patriot cause hoping for freedom, those who sided with the British for the same reason, and those who used the chaos of war to self-emancipate.',
  },
  {
    id: 'native-nations',
    name: 'Native Nations and the Revolution',
    description:
      'The sovereign Native nations caught between—and often divided by—the conflict between Britain and the colonies. Explores the strategic calculations, alliances, and devastating consequences for Indigenous peoples.',
  },
  {
    id: 'loyalists-divided',
    name: 'Loyalists and a Divided Society',
    description:
      'Not all colonists supported independence. This theme explores those who remained loyal to the Crown—their reasons, their fates, and what their stories tell us about the Revolution as a civil war.',
  },
  {
    id: 'economic-resistance',
    name: 'Economic Resistance',
    description:
      'Boycotts, non-importation agreements, and homespun cloth—the economic tools colonists used to resist British policy before and during the war. The Revolution was fought in marketplaces as well as battlefields.',
  },
  {
    id: 'propaganda-communication',
    name: 'Propaganda and Communication',
    description:
      'How Patriots and Loyalists used newspapers, pamphlets, sermons, and word of mouth to shape public opinion. The power of narrative in revolution.',
  },
  {
    id: 'military-innovation',
    name: 'Military Innovation',
    description:
      'From guerrilla tactics to fortification engineering, the military innovations that emerged during the Revolutionary War and shaped American military tradition.',
  },
  {
    id: 'preservation-memory',
    name: 'Preservation and Memory',
    description:
      "How communities have remembered, preserved, and sometimes reimagined their Revolutionary history. What we choose to commemorate reveals as much about our present as our past.",
  },
];
