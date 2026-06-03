import corruptWorldImg from "@/assets/scenes/noah/corrupt-world.jpg";
import divineImg from "@/assets/scenes/noah/divine.jpg";
import buildingImg from "@/assets/scenes/noah/building.jpg";
import arkCompleteImg from "@/assets/scenes/noah/ark-complete.jpg";
import floodImg from "@/assets/scenes/noah/flood.jpg";
import arkInteriorImg from "@/assets/scenes/noah/ark-interior.jpg";
import newEarthImg from "@/assets/scenes/noah/new-earth.jpg";
import rainbowImg from "@/assets/scenes/noah/rainbow.jpg";

export const noahImages: Record<string, string> = {
  command: divineImg,
  mockery: corruptWorldImg,
  building: buildingImg,
  ark_done: arkCompleteImg,
  animals: arkCompleteImg,
  boarding: arkCompleteImg,
  storm: floodImg,
  inside: arkInteriorImg,
  dove: arkInteriorImg,
  dry_land: newEarthImg,
  covenant: rainbowImg,
};
