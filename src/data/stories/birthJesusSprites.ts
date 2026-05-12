import josephJourney from "@/assets/sprites/birth-jesus/joseph-journey.png";
import maryDonkey from "@/assets/sprites/birth-jesus/mary-donkey.png";
import josephAsking from "@/assets/sprites/birth-jesus/joseph-asking.png";
import innkeeper from "@/assets/sprites/birth-jesus/innkeeper.png";
import maryResting from "@/assets/sprites/birth-jesus/mary-resting.png";
import josephKneeling from "@/assets/sprites/birth-jesus/joseph-kneeling.png";
import maryChild from "@/assets/sprites/birth-jesus/mary-child.png";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
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
  run_consequence: { left: josephKneeling },
  manger: { left: maryChild },
};
