import type { TownConfig } from "@hife/town-site";

/**
 * Lexington, MA — town brand/editorial config.
 * Historical content (people, events, stories) comes from the database via
 * src/lib/api.ts. Nothing here hardcodes hours, prices, or phone numbers.
 */
export const townConfig: TownConfig = {
  slug: "lexington-ma",
  name: "Lexington",
  state: "MA",
  fullName: "Lexington, Massachusetts",
  tagline: "Where the Revolution Began",
  domain: "visitlexingtonma.com",
  coordinates: { lat: 42.4473, lng: -71.2272 },
  accentColor: "--rust",
  heroImageAlt: "The Battle Green in Lexington, Massachusetts",
  heroKicker: "April 19, 1775 · The First Shot of the American Revolution",
  featuredEventName: "Patriots' Day",
  featuredEventMonth: 4,
  // Ordering hints for the People gallery; the gallery itself is populated
  // from the database. Left empty until curated slugs are confirmed.
  featuredPeopleSlugs: [],
  musterThemes: [
    {
      title: "Dawn on the Green",
      description: "Walk the militia's ground from the alarm to the first volley.",
      theme: "battle-green",
      icon: "🌅",
    },
    {
      title: "The Alarm Ride",
      description: "Trace how word of the Regulars' march reached the countryside.",
      theme: "alarm-ride",
      icon: "🐎",
    },
    {
      title: "Patriots' Day in Lexington",
      description: "Plan a visit around the annual reenactment and ceremonies.",
      theme: "patriots-day",
      icon: "🎖",
    },
  ],
  transitInfo: {
    primary: "MBTA bus routes from Alewife Station (Red Line) to Lexington Center",
    alternatives: [
      "Minuteman Bikeway from Arlington and Bedford",
      "Route 2 / Route 128 by car",
    ],
  },
  parkingInfo: [
    "Municipal lots near Lexington Center, a short walk from the Battle Green",
    "On-street parking fills early on Patriots' Day weekend",
  ],
  accessibilityNotes:
    "The Battle Green and Center sidewalks are largely level. For current site access and program details, check the official Lexington visitor and National Park sources before you travel.",
  hifeMusterUrl: "https://sabrinas-town.vercel.app/muster/new?towns=lexington-ma",
};

export default townConfig;
