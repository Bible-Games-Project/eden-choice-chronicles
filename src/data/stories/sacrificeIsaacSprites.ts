import abrahamCalm from "@/assets/sprites/isaac/abraham-calm.webp";
import abrahamBurdened from "@/assets/sprites/isaac/abraham-burdened.webp";
import abrahamResolved from "@/assets/sprites/isaac/abraham-resolved.webp";
import abrahamKnife from "@/assets/sprites/isaac/abraham-knife.webp";
import abrahamRelieved from "@/assets/sprites/isaac/abraham-relieved.webp";
import isaacCalm from "@/assets/sprites/isaac/isaac-calm.webp";
import isaacWood from "@/assets/sprites/isaac/isaac-wood.webp";
import isaacBound from "@/assets/sprites/isaac/isaac-bound.webp";
import angel from "@/assets/sprites/isaac/angel.webp";
import ram from "@/assets/sprites/isaac/ram.webp";

import { SpriteConfig } from "@/data/creationSprites";

export const sacrificeIsaacSprites: Record<string, SpriteConfig> = {
  // Act I
  start: { left: abrahamCalm },
  doubt_consequence: { left: abrahamBurdened },
  the_command: { left: abrahamBurdened },
  refuse_consequence: { left: abrahamBurdened },
  bargain_consequence: { left: abrahamBurdened },
  // Act II
  the_weight: { left: abrahamBurdened },
  delay_consequence: { left: abrahamBurdened },
  tell_sarah_consequence: { left: abrahamBurdened },
  departure: { left: abrahamResolved, right: isaacCalm },
  lie_consequence: { left: abrahamBurdened, right: isaacCalm },
  // Act III
  the_road: { left: abrahamResolved, right: isaacCalm },
  harden_consequence: { left: abrahamBurdened },
  turn_back_consequence: { left: abrahamBurdened },
  mountain_in_sight: { left: abrahamResolved, right: isaacCalm },
  servants_consequence: { left: abrahamBurdened },
  // Act IV
  leave_servants: { left: abrahamResolved, right: isaacWood },
  isaacs_question: { left: abrahamBurdened, right: isaacWood },
  tell_truth_consequence: { left: abrahamBurdened, right: isaacWood },
  silence_consequence: { left: abrahamBurdened, right: isaacWood },
  // Act V
  summit: { left: abrahamResolved, right: isaacCalm },
  stop_consequence: { left: abrahamBurdened },
  the_binding: { left: abrahamBurdened, right: isaacBound },
  flee_consequence: { left: abrahamBurdened, right: isaacBound },
  // Act VI
  the_knife: { left: abrahamKnife, right: isaacBound },
  strike_consequence: { left: abrahamKnife, right: isaacBound },
  the_stay: { left: abrahamRelieved, right: angel },
  the_ram: { left: abrahamRelieved, right: ram },
  no_sacrifice_consequence: { left: abrahamBurdened, right: ram },
  the_name: { left: abrahamRelieved, right: isaacCalm },
  // Act VII
  the_blessing: { left: abrahamRelieved, right: isaacCalm },
  homecoming: { left: abrahamResolved, right: isaacCalm },
};
