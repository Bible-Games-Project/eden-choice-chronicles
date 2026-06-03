# Background Music

Tracks live on the Lovable Assets CDN. This folder only stores
`*.mp3.asset.json` pointer files — the actual binaries are NOT committed to
the repo.

## How to add a new track

From the sandbox:

```bash
lovable-assets create --file /path/to/my-track.mp3 --filename my-track.mp3 \
  > src/assets/music/my-track.mp3.asset.json
```

That's it. The music engine globs `*.mp3.asset.json` files and the new
track joins the shuffle pool automatically — no code changes required.

## Behavior

- Fisher-Yates shuffle per session
- No back-to-back repetition across cycles
- Volume tied to the global Settings Volume slider (0 = mute)
- Single `<audio>` instance, persists across all scenes
