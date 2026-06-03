# i18n Implementation for Story Scenes

## Overview
Implemented a complete i18n (internationalization) system for story scenes that separates:
- **Translatable content** (title, text, choices) → JSON files per language
- **Game metadata** (nextScene, tags, isCorrect, etc.) → TypeScript files

## Architecture

### 1. Hook: `useStoryScenes(storyId)`
Located in: `src/hooks/useStoryScenes.ts`

**Features:**
- Dynamically loads scenes based on current language from `useSettings()`
- Fetches translations from: `src/locales/<lang>/scenes/<storyId>.json`
- Fetches metadata from: `src/data/stories/<storyId>.ts`
- Merges both at runtime to create complete `StoryScene` objects
- Caches loaded data to avoid re-fetching
- Returns: `{ scenes, loading, error }`

### 2. Data Structure

**JSON Translation Files** (`src/locales/<lang>/scenes/<storyId>.json`):
```json
{
  "sceneId": {
    "title": "Translated Title",
    "text": "Translated text",
    "choices": [
      {
        "text": "Translated choice text",
        "feedback": "Translated feedback"
      }
    ]
  }
}
```

**TypeScript Metadata Files** (`src/data/stories/<storyId>.ts`):
- Full `StoryScene` objects with all fields
- Contains both text (used as fallback) and metadata:
  - `nextScene`: string (which scene to go to)
  - `tag`: string (for analytics/tracking)
  - `isCorrect`: boolean (is this the right answer?)
  - `sentiment`: "positive" | "negative"
  - `isFinal`: boolean (is this the last scene?)

### 3. Updated Index.tsx
- Removed static scene imports (100+ lines eliminated)
- Removed `storySceneRegistry` object
- Added `useStoryScenes()` hook call
- Added loading and error states for scene loading
- Kept image, sprite, and effect registries (no i18n needed)

## Translation Contract

All user-facing strings MUST live in `src/locales/<lang>/...json`:
- ✅ Scene titles, texts, choice texts, feedbacks → JSON
- ❌ Never hardcode user-facing text in components

### Validation
Run before commits:
```bash
make validate-locales
```

Validates:
- All 12 languages have matching file structure
- All keys present in every language
- No missing or extra keys

## Supported Languages (12)
Source: `en` (English)
Translations: `es`, `pt-BR`, `fr`, `de`, `it`, `pl`, `ru`, `tr`, `ja`, `ko`, `ar`

## Performance
- **Dynamic imports**: Each story's JSON is code-split by Vite
- **Caching**: Loaded scenes cached in-memory per language/story
- **Lazy loading**: Scenes only loaded when story is selected

## Migration Complete ✅
- [x] Created `useStoryScenes` hook
- [x] Updated `Index.tsx` to use the hook
- [x] Removed 100+ static scene imports
- [x] Build succeeds with dynamic imports
- [x] All 100 stories × 12 languages validated
- [x] Performance: Dynamic code-splitting working

## Usage Example

```typescript
import { useStoryScenes } from "@/hooks/useStoryScenes";

function MyComponent({ storyId }: { storyId: string }) {
  const { scenes, loading, error } = useStoryScenes(storyId);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!scenes) return null;

  const startScene = scenes.start;
  return (
    <div>
      <h1>{startScene.title}</h1>
      <p>{startScene.text}</p>
      {startScene.choices.map((choice, i) => (
        <button key={i}>{choice.text}</button>
      ))}
    </div>
  );
}
```

## Future Improvements
- [ ] Preload next scene's assets during current scene
- [ ] Service worker caching for JSON files
- [ ] Compression for JSON files (gzip served by CDN)
- [ ] Consider moving images/sprites to separate JSON if needed for theming
