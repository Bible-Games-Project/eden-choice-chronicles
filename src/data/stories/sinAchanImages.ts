import jerichoAftermath from "@/assets/scenes/sin-achan/jericho-aftermath.jpg";
import secretTent from "@/assets/scenes/sin-achan/secret-tent.jpg";
import aiDefeat from "@/assets/scenes/sin-achan/ai-defeat.jpg";
import arkGround from "@/assets/scenes/sin-achan/ark-ground.jpg";
import tribalCamp from "@/assets/scenes/sin-achan/tribal-camp.jpg";
import valleyAchor from "@/assets/scenes/sin-achan/valley-achor.jpg";

export const sinAchanImages: Record<string, string> = {
  start: jerichoAftermath,
  take_consequence: jerichoAftermath,
  token_consequence: jerichoAftermath,
  warn_camp: secretTent,
  ignore_consequence: secretTent,
  ai_battle: aiDefeat,
  blame_consequence: aiDefeat,
  counter_consequence: aiDefeat,
  seek_lord: arkGround,
  joshua_grief: arkGround,
  hush_consequence: arkGround,
  investigation: tribalCamp,
  stop_consequence: tribalCamp,
  achan_revealed: secretTent,
  excuse_consequence: secretTent,
  hide_consequence: secretTent,
  ending_obedient: valleyAchor,
};
