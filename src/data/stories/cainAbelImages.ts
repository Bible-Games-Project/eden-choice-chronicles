import farmlandImg from "@/assets/scenes/cain-abel/farmland.jpg";
import pastureImg from "@/assets/scenes/cain-abel/pasture.jpg";
import altarImg from "@/assets/scenes/cain-abel/altar.jpg";
import divineImg from "@/assets/scenes/cain-abel/divine.jpg";
import fieldImg from "@/assets/scenes/cain-abel/field.jpg";
import bloodGroundImg from "@/assets/scenes/cain-abel/blood_ground.jpg";
import wandererImg from "@/assets/scenes/cain-abel/wanderer.jpg";

export const cainAbelImages: Record<string, string> = {
  start: farmlandImg,
  fields: farmlandImg,
  abel_pasture: pastureImg,
  offerings: altarImg,
  accepted: altarImg,
  anger: divineImg,
  warning: divineImg,
  invitation: fieldImg,
  field: fieldImg,
  confrontation: bloodGroundImg,
  wanderer: wandererImg,
};
