# Replace character sprites — 77. Parable of the Talents

Only this story's character artwork changes. Story text, choices, biblical answers, feedback, translations, backgrounds, UI, gameplay and every other story stay exactly as they are. All 20 existing scene keys keep their assignments.

## New reusable set (10 portraits)

| Portrait | Framing | Content |
| --- | --- | --- |
| jesus-parable | waist-up | Jesus calmly introducing the parable, one hand open |
| jesus-charge | waist-up | Jesus concluding the lesson, both hands softly open |
| master-giving | knee-up | The master, wealthy and confident, handing out money bags |
| master-returning | knee-up | The same master returned, calm and expectant |
| master-pleased | waist-up | The same master approving, warm proud expression |
| master-stern | knee-up | The same master serious and disappointed |
| servant-five | knee-up | First servant, energetic and confident, holding five bags |
| servant-two | knee-up | Second servant, diligent and steady, holding two bags |
| servant-one-fearful | knee-up | Third servant, anxious, clutching a single bag close |
| servant-one-defensive | knee-up | The same third servant returning the coin, defensive |

Exactly 3 waist-up (jesus-parable, jesus-charge, master-pleased); the other 7 end naturally at the knees. Feet never visible. Complete head, hair, arms, elbows, hands and body sides inside comfortable transparent margins, centered, 928×1152 transparent PNG, character only — no ground, scenery or shadows.

## Character identity

- Jesus: unchanged established identity from stories 57–76 (cream tunic, blue-teal mantle).
- Master: ~50, dark hair with a neatly trimmed beard, fine deep-blue robe with subtle gold trim over a cream tunic; identical face and clothing across all four of his portraits.
- First servant: ~30, short dark hair, clean-shaven, warm ochre work tunic with a belt.
- Second servant: ~35, wavy brown hair, short beard, olive-green tunic.
- Third servant: ~28, longer dark hair, thin beard, plain grey-brown tunic — clearly distinct from the other two, identical in both of his portraits.

Style matches the existing sprites exactly, using completed stories 57–76 as direct visual references rather than a written description.

## Technical steps

1. Generate the ten portraits with existing story portraits as direct references.
2. Validate alpha bounds, framing and margins; normalize to 928×1152.
3. Delete all old PNG/WebP files in `src/assets/sprites/talents/`, install only the ten new PNGs.
4. Patch only `src/data/stories/parableTalentsSprites.ts` imports and mappings, keeping all 20 scene keys.
5. Run locale validation and the web build. Native iOS/Android sync stays manual.
