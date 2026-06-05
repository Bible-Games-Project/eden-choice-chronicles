# Background Music

All tracks are embedded in the app bundle as M4A (AAC) files for 100% offline support.

**Format:** M4A (AAC) @ 96kbps - optimized for size while maintaining quality
**Total size:** ~31 MB for 12 tracks (~40 minutes of music)

## How to add a new track

Simply drop a `.m4a` file in this directory (`src/assets/music/`). The music
engine uses Vite's `import.meta.glob` to auto-discover all `*.m4a` files — no
code changes required.

Example:
```bash
# Convert and compress with afconvert (macOS)
afconvert -f mp4f -d aac -b 96000 -s 3 input.mp3 src/assets/music/audio_13.m4a
```

## Behavior

- Fisher-Yates shuffle per session
- No back-to-back repetition across cycles
- Volume tied to the global Settings Volume slider (0 = mute)
- Single `<audio>` instance, persists across all scenes
- All audio is local — no network requests, works 100% offline
