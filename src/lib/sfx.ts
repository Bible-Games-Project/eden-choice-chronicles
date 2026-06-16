// Lightweight Web Audio SFX system.
// No assets, no network, no external deps. Synthesized tones, enabled/disabled
// via setSfxEnabled().

type SfxKind = "click" | "correct" | "incorrect";

let ctx: AudioContext | null = null;
let masterGain: GainNode | null = null;
let sfxEnabled = true;
const FIXED_VOLUME = 0.8;
const lastPlayed: Record<SfxKind, number> = { click: 0, correct: 0, incorrect: 0 };
const MIN_INTERVAL_MS: Record<SfxKind, number> = { click: 40, correct: 120, incorrect: 120 };

const ensureContext = () => {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const Ctor: typeof AudioContext | undefined =
      window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return null;
    ctx = new Ctor();
    masterGain = ctx.createGain();
    masterGain.gain.value = FIXED_VOLUME * 2;
    masterGain.connect(ctx.destination);
  }
  if (ctx.state === "suspended") {
    void ctx.resume();
  }
  return ctx;
};

export const setSfxEnabled = (enabled: boolean) => {
  sfxEnabled = enabled;
};

const tone = (
  freq: number,
  duration: number,
  type: OscillatorType,
  startOffset = 0,
  peakGain = 0.25,
) => {
  const audio = ensureContext();
  if (!audio || !masterGain || !sfxEnabled) return;
  const osc = audio.createOscillator();
  const gain = audio.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  const start = audio.currentTime + startOffset;
  gain.gain.setValueAtTime(0, start);
  gain.gain.linearRampToValueAtTime(peakGain, start + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  osc.connect(gain).connect(masterGain);
  osc.start(start);
  osc.stop(start + duration + 0.02);
};

const canPlay = (kind: SfxKind) => {
  const now = performance.now();
  if (now - lastPlayed[kind] < MIN_INTERVAL_MS[kind]) return false;
  lastPlayed[kind] = now;
  return true;
};

export const playClick = () => {
  if (!canPlay("click")) return;
  // Soft, short, pleasant tick (sine blip)
  tone(620, 0.08, "sine", 0, 0.18);
  tone(880, 0.06, "sine", 0.01, 0.1);
};

export const playCorrect = () => {
  if (!canPlay("correct")) return;
  // Two-note rising chime (E5 -> A5)
  tone(659.25, 0.18, "triangle", 0, 0.22);
  tone(880.0, 0.28, "triangle", 0.1, 0.22);
};

export const playIncorrect = () => {
  if (!canPlay("incorrect")) return;
  // Soft descending tone (informative, not punishing)
  tone(311.13, 0.18, "sine", 0, 0.22); // Eb4
  tone(207.65, 0.28, "sine", 0.09, 0.22); // Ab3
};

// Attribute name used to opt a button out of the global click sound
// (so we don't double-play when it has its own correct/incorrect feedback).
export const SFX_SKIP_ATTR = "data-sfx-skip";
