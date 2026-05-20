import shoreArrival from "@/assets/scenes/demon-possessed/shore-arrival.jpg";
import tombsHillside from "@/assets/scenes/demon-possessed/tombs-hillside.jpg";
import villageDistant from "@/assets/scenes/demon-possessed/village-distant.jpg";
import clearingLight from "@/assets/scenes/demon-possessed/clearing-light.jpg";
import cliffPigs from "@/assets/scenes/demon-possessed/cliff-pigs.jpg";
import peacefulShore from "@/assets/scenes/demon-possessed/peaceful-shore.jpg";

export const demonPossessedImages: Record<string, string> = {
  start: shoreArrival,
  turn_back_consequence: shoreArrival,
  hide_consequence: shoreArrival,
  tombs: tombsHillside,
  mock_consequence: tombsHillside,
  villagers: villageDistant,
  flee_consequence: villageDistant,
  argue_consequence: villageDistant,
  confront: clearingLight,
  step_consequence: clearingLight,
  command: clearingLight,
  doubt_consequence: clearingLight,
  cover_consequence: clearingLight,
  pigs: cliffPigs,
  mourn_consequence: cliffPigs,
  restored: peacefulShore,
};
