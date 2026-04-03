// Web Audio API-based music engine
// Generates continuous instrumental piano-like compositions that loop seamlessly.

export interface MusicConfig {
  bpm: number;
  scale: number[]; // frequencies
  chordProgression: number[][]; // arrays of scale indices per chord
  bassNotes?: number[]; // bass frequencies
  style: "arpeggiate" | "flowing";
}

class AudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private currentTrack: string = "";
  private isPlaying = false;
  private fadeTime = 1.5;
  private schedulerTimer: number | null = null;
  private activeNodes: AudioNode[] = [];
  private activeGain: GainNode | null = null;
  private nextNoteTime = 0;
  private currentChordIdx = 0;
  private currentNoteInChord = 0;
  private beatCount = 0;

  private getCtx(): AudioContext {
    if (!this.ctx) {
      this.ctx = new AudioContext();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.25;
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === "suspended") this.ctx.resume();
    return this.ctx;
  }

  private scheduleNote(
    ctx: AudioContext,
    dest: GainNode,
    freq: number,
    time: number,
    duration: number,
    volume: number,
    type: OscillatorType = "sine"
  ) {
    const osc = ctx.createOscillator();
    const env = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = type;
    osc.frequency.value = freq;

    filter.type = "lowpass";
    filter.frequency.value = 2000;
    filter.Q.value = 0.7;

    // Piano-like envelope: quick attack, sustain, gentle release
    const attack = 0.02;
    const release = duration * 0.4;
    env.gain.setValueAtTime(0, time);
    env.gain.linearRampToValueAtTime(volume, time + attack);
    env.gain.setValueAtTime(volume, time + duration - release);
    env.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(filter);
    filter.connect(env);
    env.connect(dest);
    osc.start(time);
    osc.stop(time + duration + 0.05);

    this.activeNodes.push(osc);
  }

  private scheduleBassNote(
    ctx: AudioContext,
    dest: GainNode,
    freq: number,
    time: number,
    duration: number
  ) {
    const osc = ctx.createOscillator();
    const env = ctx.createGain();

    osc.type = "triangle";
    osc.frequency.value = freq;

    env.gain.setValueAtTime(0, time);
    env.gain.linearRampToValueAtTime(0.06, time + 0.05);
    env.gain.setValueAtTime(0.06, time + duration * 0.6);
    env.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(env);
    env.connect(dest);
    osc.start(time);
    osc.stop(time + duration + 0.05);
    this.activeNodes.push(osc);
  }

  private schedulePadNote(
    ctx: AudioContext,
    dest: GainNode,
    freq: number,
    time: number,
    duration: number
  ) {
    // Soft sustained pad for warmth
    const osc = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const env = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = "sine";
    osc.frequency.value = freq;
    osc2.type = "sine";
    osc2.frequency.value = freq * 1.002; // slight detune

    filter.type = "lowpass";
    filter.frequency.value = 800;

    env.gain.setValueAtTime(0, time);
    env.gain.linearRampToValueAtTime(0.015, time + 0.5);
    env.gain.setValueAtTime(0.015, time + duration - 1);
    env.gain.linearRampToValueAtTime(0, time + duration);

    osc.connect(filter);
    osc2.connect(filter);
    filter.connect(env);
    env.connect(dest);
    osc.start(time);
    osc2.start(time);
    osc.stop(time + duration + 0.1);
    osc2.stop(time + duration + 0.1);
    this.activeNodes.push(osc, osc2);
  }

  private startMusicLoop(config: MusicConfig) {
    const ctx = this.getCtx();
    const gain = this.activeGain!;
    const beatDuration = 60 / config.bpm;
    const { scale, chordProgression } = config;

    this.nextNoteTime = ctx.currentTime + 0.1;
    this.currentChordIdx = 0;
    this.currentNoteInChord = 0;
    this.beatCount = 0;

    const beatsPerChord = 8;
    const totalChords = chordProgression.length;

    const scheduler = () => {
      if (!this.isPlaying) return;

      while (this.nextNoteTime < ctx.currentTime + 0.3) {
        const chordIndices = chordProgression[this.currentChordIdx % totalChords];

        if (config.style === "arpeggiate") {
          // Arpeggiate through chord tones
          const noteIdx = chordIndices[this.currentNoteInChord % chordIndices.length];
          const freq = scale[noteIdx % scale.length];
          const octaveShift = Math.floor(noteIdx / scale.length);
          const finalFreq = freq * Math.pow(2, octaveShift);

          this.scheduleNote(ctx, gain, finalFreq, this.nextNoteTime, beatDuration * 1.8, 0.08);

          // Add higher octave echo on every other note
          if (this.currentNoteInChord % 2 === 0) {
            this.scheduleNote(
              ctx, gain, finalFreq * 2,
              this.nextNoteTime + beatDuration * 0.5,
              beatDuration * 1.2, 0.03
            );
          }
        } else {
          // Flowing style: play chord tones with slight delays
          chordIndices.forEach((noteIdx, i) => {
            const freq = scale[noteIdx % scale.length];
            const delay = i * 0.08;
            this.scheduleNote(ctx, gain, freq, this.nextNoteTime + delay, beatDuration * 2.5, 0.05);
          });
        }

        // Bass note on beat 1 of each chord
        if (this.currentNoteInChord === 0 && config.bassNotes) {
          const bassFreq = config.bassNotes[this.currentChordIdx % config.bassNotes.length];
          this.scheduleBassNote(ctx, gain, bassFreq, this.nextNoteTime, beatDuration * beatsPerChord);
        }

        // Pad chord on beat 1
        if (this.currentNoteInChord === 0) {
          chordIndices.forEach((noteIdx) => {
            const freq = scale[noteIdx % scale.length];
            this.schedulePadNote(ctx, gain, freq * 0.5, this.nextNoteTime, beatDuration * beatsPerChord);
          });
        }

        this.currentNoteInChord++;
        if (this.currentNoteInChord >= beatsPerChord) {
          this.currentNoteInChord = 0;
          this.currentChordIdx++;
        }

        this.nextNoteTime += beatDuration;
        this.beatCount++;
      }

      this.schedulerTimer = window.setTimeout(scheduler, 100);
    };

    scheduler();
  }

  play(trackId: string, config: MusicConfig) {
    if (trackId === this.currentTrack && this.isPlaying) return;

    this.stopInternal();

    this.currentTrack = trackId;
    this.isPlaying = true;

    const ctx = this.getCtx();
    const master = this.masterGain!;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(1, ctx.currentTime + this.fadeTime);
    gain.connect(master);

    this.activeGain = gain;
    this.activeNodes = [];

    this.startMusicLoop(config);
  }

  private stopInternal() {
    this.isPlaying = false;

    if (this.schedulerTimer !== null) {
      clearTimeout(this.schedulerTimer);
      this.schedulerTimer = null;
    }

    if (this.activeGain && this.ctx) {
      const now = this.ctx.currentTime;
      this.activeGain.gain.setValueAtTime(this.activeGain.gain.value, now);
      this.activeGain.gain.linearRampToValueAtTime(0, now + this.fadeTime);

      const nodes = this.activeNodes;
      const gainRef = this.activeGain;
      setTimeout(() => {
        nodes.forEach((n) => {
          try { n.disconnect(); } catch {}
        });
        try { gainRef.disconnect(); } catch {}
      }, this.fadeTime * 1000 + 200);
    }

    this.activeGain = null;
    this.activeNodes = [];
  }

  stop() {
    this.currentTrack = "";
    this.stopInternal();
  }

  resume() {
    if (this.ctx?.state === "suspended") this.ctx.resume();
  }

  getCurrentTrack() {
    return this.currentTrack;
  }
}

export const audioEngine = new AudioEngine();

// C major scale frequencies (octave 4)
const C4 = 261.63, D4 = 293.66, E4 = 329.63, F4 = 349.23, G4 = 392.00, A4 = 440.00, B4 = 493.88;
const C5 = 523.25, D5 = 587.33, E5 = 659.25;

// Menu: gentle, contemplative piano arpeggios in C major
export const MENU_AUDIO: MusicConfig = {
  bpm: 72,
  scale: [C4, D4, E4, F4, G4, A4, B4, C5, D5, E5],
  chordProgression: [
    [0, 2, 4, 7],  // C maj (C E G C5)
    [3, 5, 7, 9],  // F maj (F A C5 E5)
    [4, 6, 8, 7],  // G (G B D5 C5)
    [0, 2, 4, 5],  // Am (C E G A)
    [3, 5, 7, 9],  // F maj
    [0, 2, 4, 7],  // C maj
    [2, 4, 6, 8],  // Em (E G B D5)
    [4, 6, 8, 7],  // G
  ],
  bassNotes: [C4 / 2, F4 / 2, G4 / 2, A4 / 2, F4 / 2, C4 / 2, E4 / 2, G4 / 2],
  style: "arpeggiate",
};

// Creation story: majestic, emotional piano in C major with wonder
export const STORY_AUDIO: Record<string, MusicConfig> = {
  creation: {
    bpm: 60,
    scale: [C4, D4, E4, F4, G4, A4, B4, C5, D5, E5],
    chordProgression: [
      [0, 4, 7, 9],  // C with high E5
      [5, 7, 9, 4],  // Am7 feel
      [3, 5, 7, 8],  // F maj7
      [4, 6, 8, 7],  // G
      [0, 2, 4, 7],  // C
      [2, 5, 7, 9],  // Dm7 feel
      [3, 5, 7, 8],  // F
      [4, 7, 9, 0],  // G → C resolution
    ],
    bassNotes: [C4 / 2, A4 / 4, F4 / 2, G4 / 2, C4 / 2, D4 / 2, F4 / 2, G4 / 2],
    style: "arpeggiate",
  },
};
