import type { TownConfig } from "@hife/town-site";

/**
 * Concord, MA — town brand/editorial config.
 * Historical content (people, events, stories) comes from the database via
 * src/lib/api.ts. Nothing here hardcodes hours, prices, or phone numbers.
 */
export const townConfig: TownConfig = {
  slug: "concord-ma",
  name: "Concord",
  state: "MA",
  fullName: "Concord, Massachusetts",
  tagline: "The Shot Heard Round the World",
  domain: "visitconcordma.com",
  coordinates: { lat: 42.4604, lng: -71.3489 },
  accentColor: "--green",
  heroImageAlt: "The Old North Bridge in Concord, Massachusetts",
  heroKicker: "April 19, 1775 · The North Bridge",
  featuredEventName: "Patriots' Day",
  featuredEventMonth: 4,
  featuredPeopleSlugs: [],
  musterThemes: [
    {
      title: "Follow the Minuteman Trail",
      description: "Trace the militia's route from the town center out to the North Bridge.",
      theme: "minuteman-trail",
      icon: "🚶",
    },
    {
      title: "April 19 in Concord",
      description: "Plan a visit around the Patriots' Day ceremonies and reenactments.",
      theme: "patriots-day",
      icon: "🎖",
    },
    {
      title: "Farm & Field Day",
      description: "Explore the working landscape and homesteads that fed the Revolution.",
      theme: "farm-field",
      icon: "🌾",
    },
  ],
  transitInfo: {
    primary: "MBTA Fitchburg Line to Concord station",
    alternatives: [
      "Route 2 by car",
      "Shuttle from Alewife on Patriots' Day",
    ],
  },
  parkingInfo: [
    "Municipal and visitor lots near Concord Center, a short walk from the North Bridge",
    "On-street parking fills early on Patriots' Day weekend — confirm current options with official sources",
  ],
  accessibilityNotes:
    "Concord Center sidewalks and the North Bridge approach are largely walkable, though the bridge itself has steps. For current site access and program details, check the official Minute Man National Historical Park and Concord visitor sources before you travel.",
  hifeMusterUrl: "https://sabrinas-town.vercel.app/muster/new?towns=concord-ma",
};

export default townConfig;
