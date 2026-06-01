import roadApproach from "@/assets/scenes/triumphal-entry/road-approach.jpg";
import villageBethphage from "@/assets/scenes/triumphal-entry/village-bethphage.jpg";
import roadDescent from "@/assets/scenes/triumphal-entry/road-descent.jpg";
import roadCloaks from "@/assets/scenes/triumphal-entry/road-cloaks.jpg";
import roadPalms from "@/assets/scenes/triumphal-entry/road-palms.jpg";
import gatesCrowd from "@/assets/scenes/triumphal-entry/gates-crowd.jpg";
import gatesTension from "@/assets/scenes/triumphal-entry/gates-tension.jpg";
import cityRadiant from "@/assets/scenes/triumphal-entry/city-radiant.jpg";

export const triumphalEntryImages: Record<string, string> = {
  start: roadApproach,
  push_consequence: roadApproach,
  hang_consequence: roadApproach,
  donkey: villageBethphage,
  horse_consequence: villageBethphage,
  ride: roadDescent,
  mock_consequence: roadDescent,
  worry_consequence: roadDescent,
  cloaks: roadCloaks,
  keep_consequence: roadCloaks,
  palms: roadPalms,
  sell_consequence: roadPalms,
  stiff_consequence: roadPalms,
  hosanna: gatesCrowd,
  political_consequence: gatesCrowd,
  pharisees: gatesTension,
  hush_consequence: gatesTension,
  argue_consequence: gatesTension,
  enter: cityRadiant,
  slip_consequence: cityRadiant,
  ending: cityRadiant,
};
