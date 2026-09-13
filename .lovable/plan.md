# Replace Story 69 character sprites

## Scope
Replace only the reusable portraits used by **The Blind Man Born Blind**. Preserve all story text, translations, choices, feedback, backgrounds, gameplay, UI, other stories, and current scene keys.

## Implementation
- Use completed New Testament portraits as direct visual references, especially the established adult Jesus.
- Create a compact reusable transparent PNG set covering the blind man before healing, Jesus teaching/healing, washing and restored sight, Pharisee questioning, confident testimony, and final recognition/worship where the existing playable scenes support those moments.
- Keep the blind man's identity identical before and after healing; portray blindness and healing naturally, safely, and non-graphically.
- Make exactly three portraits waist-up and all remaining portraits knee-up, with no feet, scenery, floor, or shadows.
- Preserve distinct, historically appropriate identities for disciples, neighbors, parents, and Pharisees when represented.
- Remove Story 69's old PNG/WebP files, install only the final PNG set, and update only Story 69 sprite imports and assignments.

## Validation
- Inspect every portrait for matching style, identity continuity, anatomy, transparency, margins, and correct framing.
- Confirm every Story 69 scene key remains mapped to an appropriate reusable portrait.
- Verify image dimensions and alpha bounds, validate locales remain untouched, and run the web build.
- Do not run native iOS or Android sync; that remains a manual step.
