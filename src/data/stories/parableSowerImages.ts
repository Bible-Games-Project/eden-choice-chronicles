import seashore from "@/assets/scenes/sower/seashore-teaching.jpg";
import field from "@/assets/scenes/sower/field-sower.jpg";
import pathBirds from "@/assets/scenes/sower/path-birds.jpg";
import rocky from "@/assets/scenes/sower/rocky-ground.jpg";
import thorny from "@/assets/scenes/sower/thorny-ground.jpg";
import goodSoil from "@/assets/scenes/sower/good-soil.jpg";
import grove from "@/assets/scenes/sower/grove-dusk.jpg";
import radiant from "@/assets/scenes/sower/seashore-radiant.jpg";

export const parableSowerImages: Record<string, string> = {
  start: seashore,
  drift_consequence: seashore,
  sower: field,
  dull_consequence: field,
  path: pathBirds,
  blame_consequence: pathBirds,
  shrug_consequence: pathBirds,
  rocky: rocky,
  easy_consequence: rocky,
  thorns: thorny,
  worry_consequence: thorny,
  wealth_consequence: thorny,
  good_soil: goodSoil,
  selfish_consequence: goodSoil,
  disciples: grove,
  sure_consequence: grove,
  ending: radiant,
};
