# Scene translations

Per-story JSON files go here. One file per story id.

Format (flat keys, i18next-compatible):

```json
{
  "scene_1.narrative": "...",
  "scene_1.choice.a": "...",
  "scene_1.choice.b": "..."
}
```

The English directory (`src/locales/en/scenes/`) is the source of truth.
Other languages mirror its keys. Missing keys fall back to English.
