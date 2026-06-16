// Data-driven background music engine.
//
// Tracks are auto-discovered from `src/assets/music/*.m4a` files via Vite's
// import.meta.glob. All audio files are embedded in the app bundle for 100%
// offline support. Uses M4A (AAC) format for better compression (60% smaller
// than MP3 with same quality).
//
// To add a new track, drop a `.m4a` file in `src/assets/music/` — no code
// changes required.
//
// - Fisher-Yates shuffle per session
// - No back-to-back repetition (track that just played cannot start the
//   next cycle)
// - Single <audio> instance, persists across scenes
// - Volume bound to the global Settings Volume slider (0..100)

const trackModules = import.meta.glob("../assets/music/*.m4a", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const TRACKS: string[] = Object.entries(trackModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, url]) => url)
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
  // Prevent iOS from showing remote playback controls (AirPlay, lock screen)
  audio.disableRemotePlayback = true;
  audio.addEventListener("ended", () => {
    advance();
  });
  // Clear media session so iOS doesn't show Now Playing metadata
  if ("mediaSession" in navigator) {
    navigator.mediaSession.metadata = null;
  }
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

/**
 * Pauses background music. Called when app goes to background.
 */
export const pauseMusic = () => {
  if (!audio || audio.paused) return;
  console.log('[music.ts] pauseMusic: pausing audio');
  audio.pause();
};

/**
 * Resumes background music. Called when app returns to foreground.
 */
export const resumeMusic = () => {
  if (!audio || !started) return;
  if (!audio.paused) return;
  console.log('[music.ts] resumeMusic: resuming audio');
  const p = audio.play();
  if (p && typeof p.catch === "function") {
    p.catch((err) => {
      console.log('[music.ts] resumeMusic: play failed', err);
    });
  }
};
