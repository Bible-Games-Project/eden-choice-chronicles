import jesusParable from "@/assets/sprites/lost-sheep/jesus-parable.png";
import shepherdFlock from "@/assets/sprites/lost-sheep/shepherd-flock.png";
import sheepWandering from "@/assets/sprites/lost-sheep/sheep-wandering.png";
import shepherdLeaving from "@/assets/sprites/lost-sheep/shepherd-leaving.png";
import shepherdSearching from "@/assets/sprites/lost-sheep/shepherd-searching.png";
import shepherdFinding from "@/assets/sprites/lost-sheep/shepherd-finding.png";
import shepherdCarrying from "@/assets/sprites/lost-sheep/shepherd-carrying.png";
import friendsCelebrating from "@/assets/sprites/lost-sheep/friends-celebrating.png";
import jesusRadiant from "@/assets/sprites/lost-sheep/jesus-radiant.png";

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
