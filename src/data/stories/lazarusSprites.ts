import messengerNews from "@/assets/sprites/lazarus/messenger-news.png";
import jesusTraveling from "@/assets/sprites/lazarus/jesus-traveling.png";
import marthaJesus from "@/assets/sprites/lazarus/martha-jesus.png";
import maryJesus from "@/assets/sprites/lazarus/mary-jesus.png";
import jesusWeeping from "@/assets/sprites/lazarus/jesus-weeping.png";
import jesusPrayingCommanding from "@/assets/sprites/lazarus/jesus-praying-commanding.png";
import lazarusFamilyJoy from "@/assets/sprites/lazarus/lazarus-family-joy.png";

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
