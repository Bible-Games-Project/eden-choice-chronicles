import josephStern from "@/assets/sprites/joseph-brothers-egypt/joseph-stern.png";
import josephRecognizing from "@/assets/sprites/joseph-brothers-egypt/joseph-recognizing.png";
import josephAccusing from "@/assets/sprites/joseph-brothers-egypt/joseph-accusing.png";
import josephHidingTears from "@/assets/sprites/joseph-brothers-egypt/joseph-hiding-tears.png";
import josephCommanding from "@/assets/sprites/joseph-brothers-egypt/joseph-commanding.png";
import josephObserving from "@/assets/sprites/joseph-brothers-egypt/joseph-observing.png";
import brothersBowing from "@/assets/sprites/joseph-brothers-egypt/brothers-bowing.png";
import brothersAfraid from "@/assets/sprites/joseph-brothers-egypt/brothers-afraid.png";
import brothersPleading from "@/assets/sprites/joseph-brothers-egypt/brothers-pleading.png";
import brothersRemorseful from "@/assets/sprites/joseph-brothers-egypt/brothers-remorseful.png";
import reubenSpeaking from "@/assets/sprites/joseph-brothers-egypt/reuben-speaking.png";
import judahResolved from "@/assets/sprites/joseph-brothers-egypt/judah-resolved.png";
import simeonBound from "@/assets/sprites/joseph-brothers-egypt/simeon-bound.png";
import guard from "@/assets/sprites/joseph-brothers-egypt/guard-attention.png";
import jacobGrieving from "@/assets/sprites/joseph-brothers-egypt/jacob-grieving.png";

import { SpriteConfig } from "@/data/creationSprites";

// Each scene gets a unique sprite combo. No combo is reused across scenes.
export const josephBrothersEgyptSprites: Record<string, SpriteConfig> = {
  // Act I
  start: { left: josephStern, right: brothersBowing },
  wave_consequence: { left: josephStern },
  demand_consequence: { left: josephObserving, right: brothersBowing },
  recognize: { left: josephRecognizing, right: brothersBowing },
  reveal_consequence: { left: josephRecognizing },
  arrest_consequence: { left: josephAccusing, right: guard },
  // Act II
  hide_face: { left: josephObserving, right: brothersBowing },
  skip_consequence: { left: josephObserving },
  spy_accusation: { left: josephAccusing, right: brothersAfraid },
  smile_consequence: { left: josephRecognizing, right: brothersAfraid },
  they_protest: { left: josephStern, right: brothersPleading },
  pretend_consequence: { left: josephObserving, right: brothersPleading },
  mock_consequence: { left: josephAccusing, right: brothersPleading },
  // Act III
  demand_benjamin: { left: josephCommanding, right: brothersAfraid },
  free_consequence: { left: josephCommanding },
  three_days: { left: josephCommanding, right: guard },
  all_stay_consequence: { left: josephAccusing, right: brothersAfraid },
  keep_one: { left: josephObserving, right: brothersRemorseful },
  ignore_consequence: { left: josephStern },
  overhear: { left: josephRecognizing, right: brothersRemorseful },
  tears_open_consequence: { left: josephHidingTears, right: brothersRemorseful },
  weep_alone: { left: josephHidingTears },
  reuben_consequence: { left: josephCommanding, right: reubenSpeaking },
  bind_simeon: { left: simeonBound, right: guard },
  empty_consequence: { left: josephAccusing, right: brothersAfraid },
  // Act IV
  fill_sacks: { left: josephCommanding, right: guard },
  silver_consequence: { left: josephObserving },
  open_consequence: { left: josephCommanding },
  silver_hidden: { left: josephRecognizing, right: guard },
  no_warning_consequence: { left: josephCommanding, right: brothersAfraid },
  // Act V
  send_off: { left: josephHidingTears },
  run_consequence: { left: josephHidingTears, right: brothersBowing },
  first_camp: { left: brothersAfraid },
  silver_found: { left: brothersAfraid, right: reubenSpeaking },
  press_on: { left: brothersRemorseful, right: reubenSpeaking },
  hide_consequence: { left: brothersAfraid, right: judahResolved },
  // Act VI
  tell_jacob: { left: jacobGrieving, right: reubenSpeaking },
  argue_consequence: { left: jacobGrieving, right: brothersAfraid },
  walk_consequence: { left: jacobGrieving },
  promise_jacob: { left: jacobGrieving, right: judahResolved },
  force_consequence: { left: jacobGrieving, right: brothersPleading },
  // Act VII
  wait_famine: { left: jacobGrieving, right: brothersRemorseful },
  boast_consequence: { left: reubenSpeaking, right: jacobGrieving },
  judah_speaks: { left: judahResolved, right: jacobGrieving },
  mock_judah_consequence: { left: judahResolved, right: brothersAfraid },
  father_relents: { left: jacobGrieving, right: judahResolved },
  stingy_consequence: { left: brothersAfraid, right: jacobGrieving },
  preparation: { left: judahResolved, right: brothersBowing },
  no_pray_consequence: { left: judahResolved, right: brothersAfraid },
  ending: { left: judahResolved, right: brothersRemorseful },
};
