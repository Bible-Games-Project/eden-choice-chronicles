import josephJourney from "@/assets/sprites/birth-jesus/joseph-journey.webp";
import maryDonkey from "@/assets/sprites/birth-jesus/mary-donkey.webp";
import josephAsking from "@/assets/sprites/birth-jesus/joseph-asking.webp";
import innkeeper from "@/assets/sprites/birth-jesus/innkeeper.webp";
import maryResting from "@/assets/sprites/birth-jesus/mary-resting.webp";
import josephKneeling from "@/assets/sprites/birth-jesus/joseph-kneeling.webp";
import maryChild from "@/assets/sprites/birth-jesus/mary-child.webp";
import holyFamily from "@/assets/sprites/birth-jesus/holy-family.webp";
import babyJesus from "@/assets/sprites/birth-jesus/baby-jesus.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Reusable set matching each story moment.
export const birthJesusSprites: Record<string, SpriteConfig> = {
  start: { left: maryDonkey },
  push_consequence: { left: maryDonkey },
  turnback_consequence: { left: josephJourney },
  bethlehem: { left: josephJourney },
  demand_consequence: { left: josephAsking },
  inn: { left: innkeeper },
  street_consequence: { left: josephAsking },
  argue_consequence: { left: innkeeper },
  stable: { left: maryResting },
  complain_consequence: { left: josephKneeling },
  birth: { left: maryChild },
  run_consequence: { left: holyFamily },
  manger: { left: babyJesus },
};
