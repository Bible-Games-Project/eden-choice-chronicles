// Data-driven background music engine.
//
// Tracks are auto-discovered from `src/assets/music/*.mp3.asset.json`
// pointer files via Vite's import.meta.glob. The binaries themselves live
// on the Lovable Assets CDN (kept out of the repo). To add a new track,
// upload it with `lovable-assets create` and drop the resulting
// `.mp3.asset.json` in that folder — no code changes required.
//
// - Fisher-Yates shuffle per session
// - No back-to-back repetition (track that just played cannot start the
//   next cycle)
// - Single <audio> instance, persists across scenes
// - Volume bound to the global Settings Volume slider (0..100)

type AssetPointer = { url: string };

const trackModules = import.meta.glob("../assets/music/*.mp3.asset.json", {
  eager: true,
}) as Record<string, { default: AssetPointer } | AssetPointer>;

const TRACKS: string[] = Object.entries(trackModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, mod]) => {
    const ptr = (mod as { default?: AssetPointer }).default ?? (mod as AssetPointer);
    return ptr.url;
  })
  .filter((u): u is string => typeof u === "string" && u.length > 0);


let audio: HTMLAudioElement | null = null;
let playlist: string[] = [];
let cursor = 0;
let started = false;
let currentVolume = 0.8; // 0..1
let lastPlayedUrl: string | null = null;

const fisherYates = <T,>(arr: T[]): T[] => {
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
};

const buildPlaylist = () => {
  if (TRACKS.length === 0) return [];
  let next = fisherYates(TRACKS);
  // Avoid back-to-back repetition across cycles
  if (TRACKS.length > 1 && lastPlayedUrl && next[0] === lastPlayedUrl) {
    const swapIdx = 1 + Math.floor(Math.random() * (next.length - 1));
    [next[0], next[swapIdx]] = [next[swapIdx], next[0]];
  }
  return next;
};

const ensureAudio = () => {
  if (audio) return audio;
  if (typeof window === "undefined") return null;
  audio = new Audio();
  audio.preload = "auto";
  audio.volume = currentVolume;
  audio.addEventListener("ended", () => {
    advance();
  });
  return audio;
};

const advance = () => {
  if (!audio || playlist.length === 0) return;
  cursor += 1;
  if (cursor >= playlist.length) {
    playlist = buildPlaylist();
    cursor = 0;
  }
  playCurrent();
};

const playCurrent = () => {
  if (!audio || playlist.length === 0) return;
  const url = playlist[cursor];
  lastPlayedUrl = url;
  audio.src = url;
  const p = audio.play();
  if (p && typeof p.catch === "function") {
    p.catch(() => {
      // Autoplay blocked — will retry on next user interaction.
      started = false;
    });
  }
};

export const setMusicVolume = (v0to100: number) => {
  currentVolume = Math.max(0, Math.min(1, v0to100 / 100));
  if (audio) audio.volume = currentVolume;
};

/**
 * Starts (or resumes) background music. Safe to call multiple times — only
 * one audio instance is ever created. Must be called from a user-gesture
 * handler the first time due to browser autoplay policy.
 */
export const startMusic = () => {
  if (TRACKS.length === 0) return;
  const a = ensureAudio();
  if (!a) return;
  if (started && !a.paused) return;
  if (playlist.length === 0) {
    playlist = buildPlaylist();
    cursor = 0;
    playCurrent();
  } else if (a.paused) {
    const p = a.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  }
  started = true;
};

export const hasMusicTracks = () => TRACKS.length > 0;
