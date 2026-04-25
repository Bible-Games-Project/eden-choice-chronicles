import josephDreamer from "@/assets/sprites/joseph-sold/joseph-dreamer.png";
import josephTelling from "@/assets/sprites/joseph-sold/joseph-telling.png";
import josephSearching from "@/assets/sprites/joseph-sold/joseph-searching.png";
import josephAfraid from "@/assets/sprites/joseph-sold/joseph-afraid.png";
import josephPleading from "@/assets/sprites/joseph-sold/joseph-pleading.png";
import josephBound from "@/assets/sprites/joseph-sold/joseph-bound.png";
import reubenTroubled from "@/assets/sprites/joseph-sold/reuben-troubled.png";
import judahScheming from "@/assets/sprites/joseph-sold/judah-scheming.png";
import brothersAngry from "@/assets/sprites/joseph-sold/brothers-angry.png";
import brothersEating from "@/assets/sprites/joseph-sold/brothers-eating.png";
import ishmaeliteTrader from "@/assets/sprites/joseph-sold/ishmaelite-trader.png";
import jacobMourning from "@/assets/sprites/joseph-sold/jacob-mourning.png";

import { SpriteConfig } from "@/data/creationSprites";

// Each scene uses a unique pose/expression — no duplicate combos across scenes.
export const josephSoldSprites: Record<string, SpriteConfig> = {
  // Act I
  start: { left: josephDreamer },
  mock_consequence: { left: josephDreamer, right: brothersAngry },
  hide_consequence: { left: josephSearching },
  thank_father: { left: josephDreamer, right: jacobMourning },
  secret_consequence: { left: josephTelling },
  // Act II
  tell_brothers: { left: josephTelling, right: brothersAngry },
  retract_consequence: { left: josephAfraid },
  stand_firm: { left: josephDreamer, right: brothersEating },
  refuse_consequence: { left: josephAfraid, right: jacobMourning },
  servant_consequence: { left: josephSearching, right: jacobMourning },
  // Act III
  set_out: { left: josephSearching },
  turnback_consequence: { left: josephAfraid },
  to_dothan: { left: josephSearching, right: brothersAngry },
  run_consequence: { left: josephAfraid, right: brothersAngry },
  hide2_consequence: { left: josephAfraid },
  // Act IV
  approach: { left: josephPleading, right: brothersAngry },
  curse_consequence: { left: josephAfraid },
  fight_consequence: { left: josephPleading },
  beg_reuben: { left: josephPleading, right: reubenTroubled },
  threat_consequence: { left: josephAfraid, right: judahScheming },
  cry_out: { left: josephPleading },
  silent_consequence: { left: josephBound, right: judahScheming },
  // Act V
  judah_speaks: { left: josephBound, right: judahScheming },
  plead_consequence: { left: josephPleading, right: ishmaeliteTrader },
  strike_consequence: { left: josephBound, right: judahScheming },
  accept: { left: josephBound, right: ishmaeliteTrader },
  // Act VI
  to_egypt: { left: josephBound },
  father_grief: { left: jacobMourning },
  ending: { left: josephBound, right: ishmaeliteTrader },
};
