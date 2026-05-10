import sinaiBase from "@/assets/scenes/ten-commandments/sinai-base.jpg";
import sinaiAscent from "@/assets/scenes/ten-commandments/sinai-ascent.jpg";
import sinaiSummit from "@/assets/scenes/ten-commandments/sinai-summit.jpg";
import campTrembling from "@/assets/scenes/ten-commandments/camp-trembling.jpg";
import stoneTablets from "@/assets/scenes/ten-commandments/stone-tablets.jpg";
import sinaiDescent from "@/assets/scenes/ten-commandments/sinai-descent.jpg";

export const tenCommandmentsImages: Record<string, string> = {
  // Act I
  start: sinaiBase,
  haste_consequence: sinaiBase,
  shift_consequence: sinaiBase,
  // Act II
  people_tremble: campTrembling,
  mock_consequence: campTrembling,
  // Act III
  ascend_begin: sinaiAscent,
  fear_consequence: sinaiAscent,
  delay_consequence: sinaiAscent,
  // Act IV
  summit: sinaiSummit,
  pride_consequence: sinaiSummit,
  // Act V
  god_speaks: sinaiSummit,
  argue_consequence: sinaiSummit,
  add_consequence: sinaiSummit,
  // Act VI
  tablets_given: stoneTablets,
  hide_consequence: stoneTablets,
  // Act VII
  descent: sinaiDescent,
  boast_consequence: sinaiDescent,
  secret_consequence: sinaiDescent,
  covenant_sealed: campTrembling,
  ending: sinaiBase,
};
