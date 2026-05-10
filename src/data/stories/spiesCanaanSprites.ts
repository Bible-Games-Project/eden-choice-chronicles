import mosesSending from "@/assets/sprites/spies-canaan/moses-sending.png";
import mosesGrieved from "@/assets/sprites/spies-canaan/moses-grieved.png";
import joshuaCalebGrapes from "@/assets/sprites/spies-canaan/joshua-caleb-grapes.png";
import joshuaCalebFaithful from "@/assets/sprites/spies-canaan/joshua-caleb-faithful.png";
import spiesFearful from "@/assets/sprites/spies-canaan/spies-fearful.png";
import israelitesWeeping from "@/assets/sprites/spies-canaan/israelites-weeping.png";
import israelitesRebellious from "@/assets/sprites/spies-canaan/israelites-rebellious.png";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up, transparent PNG.
export const spiesCanaanSprites: Record<string, SpriteConfig> = {
  // Act I
  start: { left: mosesSending },
  rash_consequence: { left: mosesSending },
  spies_depart: { left: joshuaCalebGrapes },
  threat_consequence: { left: mosesSending },
  bribe_consequence: { left: mosesSending },
  // Act II
  valley_seen: { left: joshuaCalebGrapes },
  mistrust_consequence: { left: joshuaCalebGrapes },
  city_seen: { left: spiesFearful },
  hide_consequence: { left: spiesFearful },
  fear_consequence: { left: spiesFearful },
  // Act III
  report_back: { left: spiesFearful },
  agree_consequence: { left: spiesFearful },
  silent_consequence: { left: spiesFearful },
  // Act IV
  caleb_speaks: { left: joshuaCalebFaithful },
  silence_consequence: { left: joshuaCalebFaithful },
  // Act V
  people_weep: { left: israelitesWeeping },
  mock_consequence: { left: israelitesWeeping },
  leave_consequence: { left: israelitesWeeping },
  // Act VI
  rebellion: { left: israelitesRebellious },
  destroy_consequence: { left: israelitesRebellious },
  self_consequence: { left: mosesGrieved },
  ending: { left: mosesGrieved },
};
