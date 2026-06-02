import messengerNews from "@/assets/sprites/lazarus/messenger-news.webp";
import jesusWaiting from "@/assets/sprites/lazarus/jesus-waiting.webp";
import marthaGrieving from "@/assets/sprites/lazarus/martha-grieving.webp";
import maryWeeping from "@/assets/sprites/lazarus/mary-weeping.webp";
import jesusWeeping from "@/assets/sprites/lazarus/jesus-weeping.webp";
import jesusCalling from "@/assets/sprites/lazarus/jesus-calling.webp";
import lazarusEmerging from "@/assets/sprites/lazarus/lazarus-emerging.webp";

import { SpriteConfig } from "@/data/creationSprites";

export const lazarusSprites: Record<string, SpriteConfig> = {
  start: { left: messengerNews },
  urge_consequence: { left: messengerNews },
  dismiss_consequence: { left: messengerNews },
  delay: { left: jesusWaiting },
  question_consequence: { left: jesusWaiting },
  travel: { left: jesusWaiting },
  stayback_consequence: { left: jesusWaiting },
  martha: { left: marthaGrieving },
  giveup_consequence: { left: marthaGrieving },
  silent_consequence: { left: marthaGrieving },
  mary: { left: maryWeeping },
  scold_consequence: { left: maryWeeping },
  weeps: { left: jesusWeeping },
  pull_consequence: { left: jesusWeeping },
  tomb: { left: jesusCalling },
  leave_consequence: { left: jesusCalling },
  argue_consequence: { left: jesusCalling },
  call: { left: jesusCalling },
  cover_consequence: { left: jesusCalling },
  emerge: { left: lazarusEmerging },
};
