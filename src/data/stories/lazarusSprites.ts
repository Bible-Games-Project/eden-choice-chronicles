import messengerNews from "@/assets/sprites/lazarus/messenger-news.webp";
import jesusTraveling from "@/assets/sprites/lazarus/jesus-traveling.webp";
import marthaJesus from "@/assets/sprites/lazarus/martha-jesus.webp";
import maryJesus from "@/assets/sprites/lazarus/mary-jesus.webp";
import jesusWeeping from "@/assets/sprites/lazarus/jesus-weeping.webp";
import jesusPrayingCommanding from "@/assets/sprites/lazarus/jesus-praying-commanding.webp";
import lazarusFamilyJoy from "@/assets/sprites/lazarus/lazarus-family-joy.webp";

import { SpriteConfig } from "@/data/creationSprites";

export const lazarusSprites: Record<string, SpriteConfig> = {
  start: { left: messengerNews },
  urge_consequence: { left: messengerNews },
  dismiss_consequence: { left: messengerNews },
  delay: { left: jesusTraveling },
  question_consequence: { left: jesusTraveling },
  travel: { left: jesusTraveling },
  stayback_consequence: { left: jesusTraveling },
  martha: { left: marthaJesus },
  giveup_consequence: { left: marthaJesus },
  silent_consequence: { left: marthaJesus },
  mary: { left: maryJesus },
  scold_consequence: { left: maryJesus },
  weeps: { left: jesusWeeping },
  pull_consequence: { left: jesusWeeping },
  tomb: { left: jesusPrayingCommanding },
  leave_consequence: { left: jesusPrayingCommanding },
  argue_consequence: { left: jesusPrayingCommanding },
  call: { left: jesusPrayingCommanding },
  cover_consequence: { left: jesusPrayingCommanding },
  emerge: { left: lazarusFamilyJoy },
};
