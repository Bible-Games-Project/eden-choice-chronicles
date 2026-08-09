import joshuaResolute from "@/assets/sprites/sin-achan/joshua-resolute.webp";
import joshuaSummoning from "@/assets/sprites/sin-achan/joshua-summoning.webp";
import joshuaGrieving from "@/assets/sprites/sin-achan/joshua-grieving.webp";
import achanGuilty from "@/assets/sprites/sin-achan/achan-guilty.webp";
import achanTaking from "@/assets/sprites/sin-achan/achan-taking.webp";
import achanHiding from "@/assets/sprites/sin-achan/achan-hiding.webp";
import achanConfessing from "@/assets/sprites/sin-achan/achan-confessing.webp";
import achanRevealed from "@/assets/sprites/sin-achan/achan-revealed.webp";
import soldiersDefeated from "@/assets/sprites/sin-achan/soldiers-defeated.webp";
import tribesAssembled from "@/assets/sprites/sin-achan/tribes-assembled.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Reusable set matching story progression.
export const sinAchanSprites: Record<string, SpriteConfig> = {
  start: { left: joshuaResolute },
  take_consequence: { left: achanTaking },
  token_consequence: { left: joshuaResolute },
  warn_camp: { left: achanHiding },
  ignore_consequence: { left: achanGuilty },
  ai_battle: { left: soldiersDefeated },
  blame_consequence: { left: soldiersDefeated },
  counter_consequence: { left: soldiersDefeated },
  seek_lord: { left: joshuaGrieving },
  joshua_grief: { left: joshuaGrieving },
  hush_consequence: { left: joshuaGrieving },
  investigation: { left: tribesAssembled },
  stop_consequence: { left: joshuaSummoning },
  achan_revealed: { left: achanConfessing },
  excuse_consequence: { left: achanRevealed },
  hide_consequence: { left: achanRevealed },
  ending_obedient: { left: joshuaResolute },
};
