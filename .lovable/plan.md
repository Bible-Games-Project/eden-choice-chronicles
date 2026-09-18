# Replace character sprites — 78. Lost Sheep

Only this story's character artwork changes. Story text, choices, biblical answers, feedback, translations, backgrounds, UI, gameplay and every other story stay exactly as they are. All 18 existing scene keys keep their assignments.

## New reusable set (9 sprites)

| Sprite | Framing | Content |
| --- | --- | --- |
| jesus-parable | waist-up | Jesus calmly introducing the parable, one hand open |
| jesus-radiant | waist-up | Jesus warmly concluding the lesson, both hands softly open |
| shepherd-carrying | waist-up | The shepherd joyfully carrying the lost sheep across his shoulders |
| shepherd-flock | knee-up | The shepherd caring for his flock, two sheep beside him |
| shepherd-leaving | knee-up | The same shepherd realizing one is missing, setting out with his staff |
| shepherd-searching | knee-up | The same shepherd searching, lantern raised, determined |
| shepherd-finding | knee-up | The same shepherd kneeling and lifting the trembling lamb |
| friends-celebrating | knee-up | The shepherd rejoicing with two neighbours |
| sheep-wandering | full-body animal | The lost sheep alone, complete body inside the canvas |

Exactly 3 human sprites are waist-up (jesus-parable, jesus-radiant, shepherd-carrying); the other 5 human sprites end naturally at the knees. Feet never visible. Complete head, hair, arms, elbows, hands and body sides inside comfortable transparent margins, centered, 928×1152 transparent PNG, character only — no ground, scenery or shadows. The sheep sprite keeps its whole body, head, legs and tail inside the canvas with generous margins.

## Character identity

- Jesus: unchanged established identity from stories 57–77 (cream tunic, blue-teal mantle).
- Shepherd: ~40, short dark-brown hair with a short trimmed beard, sun-warmed skin, simple undyed sand-coloured work tunic with a leather belt and a woollen mantle; identical face and clothing in all six of his sprites.
- Lost sheep: cream-white wool with soft grey-brown face and ears, gentle natural proportions — identical wherever it appears (alone, found, carried).
- Neighbours: two ordinary first-century villagers, distinct from the shepherd, used only for the celebration.

Style matches the existing sprites exactly, using completed stories 57–77 as direct visual references rather than a written description.

## Technical steps

1. Generate the nine sprites with existing story portraits as direct references.
2. Validate alpha bounds, framing and margins; normalize to 928×1152.
3. Delete all old PNG/WebP files in `src/assets/sprites/lost-sheep/`, install only the nine new PNGs.
4. Patch only `src/data/stories/lostSheepSprites.ts` imports, keeping all 18 scene keys.
5. Run locale validation and the web build. Native iOS/Android sync stays manual.
