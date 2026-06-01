import hillsideParable from "@/assets/scenes/lost-sheep/hillside-parable.jpg";
import pasture from "@/assets/scenes/lost-sheep/pasture.jpg";
import rockyPath from "@/assets/scenes/lost-sheep/rocky-path.jpg";
import ninetyNine from "@/assets/scenes/lost-sheep/ninety-nine.jpg";
import valleySearch from "@/assets/scenes/lost-sheep/valley-search.jpg";
import ravineFound from "@/assets/scenes/lost-sheep/ravine-found.jpg";
import villageCelebration from "@/assets/scenes/lost-sheep/village-celebration.jpg";
import hillsideRadiant from "@/assets/scenes/lost-sheep/hillside-radiant.jpg";

export const lostSheepImages: Record<string, string> = {
  start: hillsideParable,
  turn_consequence: hillsideParable,
  flock: pasture,
  count_consequence: pasture,
  lost: rockyPath,
  blame_consequence: rockyPath,
  cruel_consequence: rockyPath,
  leave: ninetyNine,
  worth_consequence: ninetyNine,
  search: valleySearch,
  giveup_consequence: valleySearch,
  found: ravineFound,
  scold_consequence: ravineFound,
  carry: ravineFound,
  walk_consequence: ravineFound,
  celebration: villageCelebration,
  envy_consequence: villageCelebration,
  ending: hillsideRadiant,
};
