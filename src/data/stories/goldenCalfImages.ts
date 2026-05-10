import campWaiting from "@/assets/scenes/golden-calf/camp-waiting.jpg";
import goldPile from "@/assets/scenes/golden-calf/gold-pile.jpg";
import calfAltar from "@/assets/scenes/golden-calf/calf-altar.jpg";
import sinaiSummitTablets from "@/assets/scenes/golden-calf/sinai-summit-tablets.jpg";
import mountainDescent from "@/assets/scenes/golden-calf/mountain-descent.jpg";
import shatteredAftermath from "@/assets/scenes/golden-calf/shattered-aftermath.jpg";

export const goldenCalfImages: Record<string, string> = {
  // Act I — summit
  start: sinaiSummitTablets,
  haste_consequence: sinaiSummitTablets,
  // Act II — camp impatience
  people_demand: campWaiting,
  aaron_yields: goldPile,
  // Act III — God warns
  god_warns: sinaiSummitTablets,
  consume_consequence: sinaiSummitTablets,
  self_consequence: sinaiSummitTablets,
  intercede: sinaiSummitTablets,
  // Act IV — descent
  descent: mountainDescent,
  ignore_consequence: mountainDescent,
  // Act V — see idol
  see_idol: calfAltar,
  hide_consequence: calfAltar,
  join_consequence: calfAltar,
  // Act VI — destruction
  tablets_broken: shatteredAftermath,
  leave_consequence: calfAltar,
  // Act VII — aaron / repentance
  aaron_questioned: shatteredAftermath,
  shrug_consequence: shatteredAftermath,
  single_consequence: shatteredAftermath,
  repentance: campWaiting,
  ending: campWaiting,
};
