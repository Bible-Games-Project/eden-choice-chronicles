import jesusApproaching from "@/assets/sprites/triumphal-entry/jesus-approaching.webp";
import disciplesDonkey from "@/assets/sprites/triumphal-entry/disciples-donkey.webp";
import jesusDonkey from "@/assets/sprites/triumphal-entry/jesus-donkey.webp";
import crowdCloaks from "@/assets/sprites/triumphal-entry/crowd-cloaks.webp";
import crowdPalms from "@/assets/sprites/triumphal-entry/crowd-palms.webp";
import crowdHosanna from "@/assets/sprites/triumphal-entry/crowd-hosanna.webp";
import phariseesQuestioning from "@/assets/sprites/triumphal-entry/pharisees-questioning.webp";
import jesusEntering from "@/assets/sprites/triumphal-entry/jesus-entering.webp";

import { SpriteConfig } from "@/data/creationSprites";

export const triumphalEntrySprites: Record<string, SpriteConfig> = {
  start: { left: jesusApproaching },
  push_consequence: { left: jesusApproaching },
  hang_consequence: { left: jesusApproaching },
  donkey: { left: disciplesDonkey },
  horse_consequence: { left: disciplesDonkey },
  ride: { left: jesusDonkey },
  mock_consequence: { left: jesusDonkey },
  worry_consequence: { left: jesusDonkey },
  cloaks: { left: crowdCloaks },
  keep_consequence: { left: crowdCloaks },
  palms: { left: crowdPalms },
  sell_consequence: { left: crowdPalms },
  stiff_consequence: { left: crowdPalms },
  hosanna: { left: crowdHosanna },
  political_consequence: { left: crowdHosanna },
  pharisees: { left: phariseesQuestioning },
  hush_consequence: { left: phariseesQuestioning },
  argue_consequence: { left: phariseesQuestioning },
  enter: { left: jesusEntering },
  slip_consequence: { left: jesusEntering },
  ending: { left: jesusEntering },
};
