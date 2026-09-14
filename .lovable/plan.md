# Replace Story 70 character sprites

## Scope
Replace only the reusable character portraits used by **Raising Lazarus**. Preserve all story text, translations, choices, feedback, backgrounds, gameplay, UI, other stories, and existing scene keys.

## Implementation
- Use completed portraits from Stories 57–69 as direct visual references, especially the established adult Jesus and disciples.
- Create a compact reusable transparent PNG set covering: the messenger and journey toward Bethany; Martha speaking with Jesus; Mary grieving; Jesus showing compassion and sorrow; Jesus directing the stone’s removal and praying; Jesus calling Lazarus; Lazarus emerging alive; and the family/community’s joyful response where supported by the playable scenes.
- Keep Martha, Mary, Lazarus, Jesus, Peter, disciples, and supporting people visually distinct and consistent. Keep Lazarus’s burial cloths modest, safe, and non-graphic.
- Frame exactly three portraits waist-up and every remaining portrait knee-up. Show no feet, tomb, stone, landscape, scenery, floor, or shadows.
- Remove Story 70’s old PNG/WebP files, install only the final local PNG set, and update only Story 70’s sprite imports and assignments.

## Validation
- Inspect every portrait for exact style matching, identity continuity, anatomy, transparency, clean margins, and correct framing.
- Confirm all 21 Story 70 scene keys retain an appropriate reusable portrait.
- Verify image dimensions and alpha bounds, validate locales remain untouched, and run the web build.
- Do not run native iOS or Android sync; that remains a manual step.
