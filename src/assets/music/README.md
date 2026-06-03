# Background Music

Drop any `.mp3` file in this folder and it will be automatically picked up by
the music system (Vite glob import). No code changes required.

- Files are shuffled per session (Fisher-Yates).
- No track repeats back-to-back; full reshuffle when the playlist ends.
- Volume tied to the global Settings Volume slider (0 = mute).
- Single audio instance, persists across all scenes.

Recommended: keep filenames lowercase, no spaces (e.g. `track-01.mp3`).
