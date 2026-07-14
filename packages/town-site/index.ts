// Config contract
export type { TownConfig } from "./config/schema";

// Layout shell
export { TownLayout } from "./components/TownLayout";

// Homepage sections
export { TownHero } from "./components/TownHero";
export { WhatsOnSection } from "./components/WhatsOnSection";
export type { WhatsOnEvent } from "./components/WhatsOnSection";
export { PlanItSection } from "./components/PlanItSection";
export { EatShopSection } from "./components/EatShopSection";
export type { Business } from "./components/EatShopSection";
export { KnowBeforeSection } from "./components/KnowBeforeSection";
export { PeopleGallery } from "./components/PeopleGallery";
export type { GalleryPerson } from "./components/PeopleGallery";

// Hooks
export { useTownData } from "./hooks/useTownData";
export type { TownDataResult } from "./hooks/useTownData";
