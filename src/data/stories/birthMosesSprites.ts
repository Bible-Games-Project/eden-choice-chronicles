import jochebedWorried from "@/assets/sprites/birth-moses/jochebed-worried.webp";
import jochebedCradling from "@/assets/sprites/birth-moses/jochebed-cradling.webp";
import jochebedWithBasket from "@/assets/sprites/birth-moses/jochebed-with-basket.webp";
import miriamWatching from "@/assets/sprites/birth-moses/miriam-watching.webp";
import miriamSpeaking from "@/assets/sprites/birth-moses/miriam-speaking.webp";
import princessCompassion from "@/assets/sprites/birth-moses/princess-compassion.webp";
import princessHolding from "@/assets/sprites/birth-moses/princess-holding.webp";
import guardStern from "@/assets/sprites/birth-moses/guard-stern.webp";
import servantAttending from "@/assets/sprites/birth-moses/servant-attending.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Single sprite per scene (left only) per spec.
export const birthMosesSprites: Record<string, SpriteConfig> = {
  // Act I
  start: { left: guardStern },
  hand_consequence: { left: jochebedCradling },
  flee_consequence: { left: jochebedWorried },
  hide_home: { left: jochebedCradling },
  show_consequence: { left: jochebedWorried },
  growing_baby: { left: jochebedCradling },
  bury_consequence: { left: jochebedWorried },
  prayer: { left: jochebedWorried },
  ignore_consequence: { left: jochebedWorried },
  // Act II
  weave_basket: { left: jochebedWithBasket },
  clay_consequence: { left: jochebedWithBasket },
  miriam_called: { left: miriamWatching },
  anger_consequence: { left: miriamWatching },
  lie_consequence: { left: miriamSpeaking },
  to_river: { left: jochebedWithBasket },
  throw_consequence: { left: jochebedWorried },
  place_basket: { left: jochebedWithBasket },
  snatch_consequence: { left: jochebedWorried },
  // Act III
  miriam_watch: { left: miriamWatching },
  swim_consequence: { left: miriamSpeaking },
  princess_arrives: { left: princessCompassion },
  stone_consequence: { left: miriamWatching },
  she_sees: { left: princessCompassion },
  shout_consequence: { left: miriamSpeaking },
  // Act IV
  she_opens: { left: princessHolding },
  beg_consequence: { left: miriamSpeaking },
  compassion: { left: princessHolding },
  silent_consequence: { left: miriamWatching },
  miriam_offers: { left: miriamSpeaking },
  egyptian_consequence: { left: servantAttending },
  // Act V
  yes_go: { left: miriamSpeaking },
  refuse_consequence: { left: jochebedWorried },
  before_princess: { left: princessHolding },
  confess_consequence: { left: jochebedWorried },
  wages: { left: jochebedCradling },
  pride_consequence: { left: jochebedWorried },
  home_again: { left: jochebedCradling },
  hide_forever_consequence: { left: jochebedWorried },
  return_palace: { left: jochebedWithBasket },
  runaway_consequence: { left: jochebedWorried },
  named_moses: { left: princessHolding },
  ending: { left: princessHolding },
};
