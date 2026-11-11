import jesusParable from "@/assets/sprites/prodigal-son/jesus-parable.webp";
import sonAsking from "@/assets/sprites/prodigal-son/son-asking.webp";
import sonLeaving from "@/assets/sprites/prodigal-son/son-leaving.webp";
import sonRevelry from "@/assets/sprites/prodigal-son/son-revelry.webp";
import sonPigs from "@/assets/sprites/prodigal-son/son-pigs.webp";
import sonRepenting from "@/assets/sprites/prodigal-son/son-repenting.webp";
import fatherEmbrace from "@/assets/sprites/prodigal-son/father-embrace.webp";
import fatherCelebration from "@/assets/sprites/prodigal-son/father-celebration.webp";
import brotherAngry from "@/assets/sprites/prodigal-son/brother-angry.webp";
import fatherPleading from "@/assets/sprites/prodigal-son/father-pleading.webp";
import jesusGrace from "@/assets/sprites/prodigal-son/jesus-grace.webp";

import { SpriteConfig } from "@/data/creationSprites";

export const prodigalSonSprites: Record<string, SpriteConfig> = {
  start: { left: jesusParable },
  turn_consequence: { left: jesusParable },
  inheritance: { left: sonAsking },
  praise_consequence: { left: sonAsking },
  demand_consequence: { left: sonAsking },
  leaving: { left: sonLeaving },
  cheer_consequence: { left: sonLeaving },
  revelry: { left: sonRevelry },
  envy_consequence: { left: sonRevelry },
  lookaway_consequence: { left: sonRevelry },
  famine: { left: sonPigs },
  mock_consequence: { left: sonPigs },
  pigs: { left: sonPigs },
  pity_consequence: { left: sonPigs },
  repentance: { left: sonRepenting },
  hidden_consequence: { left: sonRepenting },
  doubt_consequence: { left: sonRepenting },
  return: { left: fatherEmbrace },
  stern_consequence: { left: fatherEmbrace },
  feast: { left: fatherCelebration },
  prove_consequence: { left: fatherCelebration },
  brother: { left: brotherAngry },
  agree_consequence: { left: brotherAngry },
  hide_consequence: { left: fatherPleading },
  ending: { left: jesusGrace },
};
