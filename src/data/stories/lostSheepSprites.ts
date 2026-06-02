import jesusParable from "@/assets/sprites/lost-sheep/jesus-parable.webp";
import shepherdFlock from "@/assets/sprites/lost-sheep/shepherd-flock.webp";
import sheepWandering from "@/assets/sprites/lost-sheep/sheep-wandering.webp";
import shepherdLeaving from "@/assets/sprites/lost-sheep/shepherd-leaving.webp";
import shepherdSearching from "@/assets/sprites/lost-sheep/shepherd-searching.webp";
import shepherdFinding from "@/assets/sprites/lost-sheep/shepherd-finding.webp";
import shepherdCarrying from "@/assets/sprites/lost-sheep/shepherd-carrying.webp";
import friendsCelebrating from "@/assets/sprites/lost-sheep/friends-celebrating.webp";
import jesusRadiant from "@/assets/sprites/lost-sheep/jesus-radiant.webp";

import { SpriteConfig } from "@/data/creationSprites";

export const lostSheepSprites: Record<string, SpriteConfig> = {
  start: { left: jesusParable },
  turn_consequence: { left: jesusParable },
  flock: { left: shepherdFlock },
  count_consequence: { left: shepherdFlock },
  lost: { left: sheepWandering },
  blame_consequence: { left: sheepWandering },
  cruel_consequence: { left: sheepWandering },
  leave: { left: shepherdLeaving },
  worth_consequence: { left: shepherdLeaving },
  search: { left: shepherdSearching },
  giveup_consequence: { left: shepherdSearching },
  found: { left: shepherdFinding },
  scold_consequence: { left: shepherdFinding },
  carry: { left: shepherdCarrying },
  walk_consequence: { left: shepherdCarrying },
  celebration: { left: friendsCelebrating },
  envy_consequence: { left: friendsCelebrating },
  ending: { left: jesusRadiant },
};
