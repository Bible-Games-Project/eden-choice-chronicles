# Replace character sprites — 79. Pharisee and Tax Collector

Replace only this story's characters. All story text, choices, answers, feedback, translations, backgrounds, UI, gameplay and every other story stay exactly as they are. All 18 existing scene assignments are preserved.

## New reusable set (9 pictures)

1. `jesus-parable` — Jesus introducing the parable (waist-up)
2. `jesus-explaining` — Jesus explaining who went home justified, with two attentive listeners (waist-up)
3. `jesus-radiant` — Jesus closing the lesson on humility (waist-up)
4. `two-men-temple` — the Pharisee and the tax collector entering together, showing the contrast (knee-up)
5. `pharisee-praying` — the Pharisee standing confidently in prayer (knee-up)
6. `pharisee-boasting` — the Pharisee praying proudly of his fasting and tithes (knee-up)
7. `pharisee-looking-down` — the Pharisee glancing down on the tax collector (knee-up)
8. `tax-humble` — the tax collector at a distance, head lowered, sorrowful (knee-up)
9. `tax-mercy` — the tax collector striking his chest, asking for mercy (knee-up)

Exactly 3 waist-up, the other 6 ending naturally at the knees. Feet never visible.

## Characters

- Jesus: the established adult Jesus from stories 57–78, unchanged in face, hair, beard, clothing and proportions.
- The Pharisee: believable first-century religious man, well-groomed, fine but historically appropriate robe with prayer shawl and tassels, proud and self-assured — never a cartoon villain. Same identity in all four of his pictures.
- The Tax Collector: plainer, more ordinary first-century clothing, clearly distinct from the Pharisee, humble and remorseful. Same identity in all his pictures.

The temple, columns, light and crowds stay part of the existing backgrounds.

## Technical notes

- 928×1152 transparent PNGs, character only, no background, ground or shadows; complete head, hair, arms, elbows, hands and body sides inside comfortable transparent margins; centered, not oversized.
- Generated with the completed stories 57–78 sprites as direct visual references so rendering, proportions, facial design, lighting, shading, colours and edge treatment match exactly.
- Delete all old PNG/WebP files in `src/assets/sprites/pharisee-tax/`, install only the nine final PNGs, and update only `src/data/stories/phariseeTaxSprites.ts` imports and mappings.
- Verify all 12 language files untouched (`scripts/validate-locales.mjs`) and the web build. No native iOS/Android sync.
