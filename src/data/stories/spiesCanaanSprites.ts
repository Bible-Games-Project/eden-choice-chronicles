import mosesSending from "@/assets/sprites/spies-canaan/moses-sending.webp";
import mosesGrieved from "@/assets/sprites/spies-canaan/moses-grieved.webp";
import joshuaCalebGrapes from "@/assets/sprites/spies-canaan/joshua-caleb-grapes.webp";
import joshuaCalebFaithful from "@/assets/sprites/spies-canaan/joshua-caleb-faithful.webp";
import spiesFearful from "@/assets/sprites/spies-canaan/spies-fearful.webp";
import spiesExploring from "@/assets/sprites/spies-canaan/spies-exploring.webp";
import spiesWalls from "@/assets/sprites/spies-canaan/spies-walls.webp";
import spiesReturning from "@/assets/sprites/spies-canaan/spies-returning.webp";
import israelitesWeeping from "@/assets/sprites/spies-canaan/israelites-weeping.webp";
import israelitesRebellious from "@/assets/sprites/spies-canaan/israelites-rebellious.webp";

import { SpriteConfig } from "@/data/creationSprites";

// Exactly ONE sprite per scene. Waist-up or knees-up, transparent PNG.
export const spiesCanaanSprites: Record<string, SpriteConfig> = {
  // Act I — sending the twelve
  start: { left: mosesSending },
  rash_consequence: { left: mosesSending },
  spies_depart: { left: spiesExploring },
  threat_consequence: { left: mosesSending },
  bribe_consequence: { left: mosesSending },
  // Act II — the land observed
  valley_seen: { left: joshuaCalebGrapes },
  mistrust_consequence: { left: joshuaCalebGrapes },
  city_seen: { left: spiesWalls },
  hide_consequence: { left: spiesWalls },
  fear_consequence: { left: spiesWalls },
  // Act III — the fearful report
  report_back: { left: spiesFearful },
  agree_consequence: { left: spiesFearful },
  silent_consequence: { left: spiesReturning },
  // Act IV — Joshua and Caleb
  caleb_speaks: { left: joshuaCalebFaithful },
  silence_consequence: { left: joshuaCalebFaithful },
  // Act V — the people weep
  people_weep: { left: israelitesWeeping },
  mock_consequence: { left: israelitesWeeping },
  leave_consequence: { left: israelitesWeeping },
  // Act VI — rebellion & decision
  rebellion: { left: israelitesRebellious },
  destroy_consequence: { left: israelitesRebellious },
  self_consequence: { left: mosesGrieved },
  ending: { left: mosesGrieved },
};
