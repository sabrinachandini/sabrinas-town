import type { TownConfig } from "@hife/town-site";

/**
 * Yorktown, VA — town brand/editorial config.
 * Historical content (people, events, stories) comes from the database via
 * src/lib/api.ts. Nothing here hardcodes hours, prices, or phone numbers.
 */
export const townConfig: TownConfig = {
  slug: "yorktown-va",
  name: "Yorktown",
  state: "VA",
  fullName: "Yorktown, Virginia",
  tagline: "Where the Revolution Was Won",
  domain: "visityorktownva.com",
  coordinates: { lat: 37.2279, lng: -76.5074 },
  accentColor: "--green",
  heroImageAlt: "The Yorktown Battlefield in Yorktown, Virginia",
  heroKicker: "October 1781 · The Siege of Yorktown",
  featuredEventName: "Yorktown Day",
  featuredEventMonth: 10,
  featuredPeopleSlugs: [],
  musterThemes: [
    {
      title: "The Final Siege",
      description: "Walk the siege lines where American and French forces closed in on Cornwallis.",
      theme: "final-siege",
      icon: "💥",
    },
    {
      title: "The French Alliance",
      description: "Trace the role of Rochambeau's army and de Grasse's fleet in the victory.",
      theme: "french-alliance",
      icon: "⚜️",
    },
    {
      title: "Surrender Field Walk",
      description: "Visit the field where the British army laid down its arms in October 1781.",
      theme: "surrender-field",
      icon: "🏳️",
    },
  ],
  transitInfo: {
    primary: "No direct public transit — car or guided tour recommended",
    alternatives: [
      "Colonial Williamsburg shuttle (seasonal)",
      "Guided bus tours from Richmond",
    ],
  },
  parkingInfo: [
    "Visitor parking is available near the Yorktown Battlefield and the historic waterfront",
    "Lots fill early on Yorktown Day weekend — confirm current options with official sources",
  ],
  accessibilityNotes:
    "The Yorktown waterfront and visitor center areas are largely accessible, though battlefield terrain varies. For current site access and program details, check the official Colonial National Historical Park and Yorktown visitor sources before you travel.",
  hifeMusterUrl: "https://sabrinas-town.vercel.app/muster/new?towns=yorktown-va",
};

export default townConfig;
