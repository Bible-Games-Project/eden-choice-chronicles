// Web Audio API-based music engine
// Generates continuous instrumental piano compositions with melody, harmony, bass, and pads.

export interface MusicConfig {
  bpm: number;
  scale: number[];
  chordProgression: number[][];
  bassNotes?: number[];
  melodyPattern?: number[];
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
  private reverbNode: ConvolverNode | null = null;

  private getCtx(): AudioContext {
    if (!this.ctx) {
      this.ctx = new AudioContext();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.3;
      this.masterGain.connect(this.ctx.destination);
      this.reverbNode = this.createReverb(this.ctx);
      this.reverbNode.connect(this.masterGain);
    }
    if (this.ctx.state === "suspended") this.ctx.resume();
    return this.ctx;
  }

  private createReverb(ctx: AudioContext): ConvolverNode {
    const convolver = ctx.createConvolver();
    const rate = ctx.sampleRate;
    const length = rate * 2.5;
    const impulse = ctx.createBuffer(2, length, rate);
    for (let ch = 0; ch < 2; ch++) {
      const data = impulse.getChannelData(ch);
      for (let i = 0; i < length; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, 2.5);
      }
    }
    convolver.buffer = impulse;
    return convolver;
  }

  private scheduleNote(
    ctx: AudioContext,
    dest: GainNode,
    freq: number,
    time: number,
    duration: number,
    volume: number,
    type: OscillatorType = "sine",
    useReverb = false
  ) {
    const osc = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const env = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = type;
    osc.frequency.value = freq;
    osc2.type = "sine";
    osc2.frequency.value = freq * 1.001; // slight detune for richness

    filter.type = "lowpass";
    filter.frequency.value = 2500;
    filter.Q.value = 0.5;

    const attack = 0.015;
    const decay = duration * 0.15;
    const sustain = volume * 0.7;
    const release = duration * 0.35;

    env.gain.setValueAtTime(0, time);
    env.gain.linearRampToValueAtTime(volume, time + attack);
    env.gain.linearRampToValueAtTime(sustain, time + attack + decay);
    env.gain.setValueAtTime(sustain, time + duration - release);
    env.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(filter);
    osc2.connect(filter);
    filter.connect(env);
    env.connect(dest);

    if (useReverb && this.reverbNode) {
      const reverbSend = ctx.createGain();
      reverbSend.gain.value = 0.3;
      env.connect(reverbSend);
      reverbSend.connect(this.reverbNode);
    }

    osc.start(time);
    osc2.start(time);
    osc.stop(time + duration + 0.05);
    osc2.stop(time + duration + 0.05);

    this.activeNodes.push(osc, osc2);
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
    const filter = ctx.createBiquadFilter();

    osc.type = "triangle";
    osc.frequency.value = freq;

    filter.type = "lowpass";
    filter.frequency.value = 400;

    env.gain.setValueAtTime(0, time);
    env.gain.linearRampToValueAtTime(0.07, time + 0.06);
    env.gain.setValueAtTime(0.07, time + duration * 0.5);
    env.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(filter);
    filter.connect(env);
    env.connect(dest);
    osc.start(time);
    osc.stop(time + duration + 0.05);
    this.activeNodes.push(osc);
  }

  private schedulePadChord(
    ctx: AudioContext,
    dest: GainNode,
    freqs: number[],
    time: number,
    duration: number
  ) {
    freqs.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const env = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = "sine";
      osc.frequency.value = freq * 0.5;
      osc2.type = "sine";
      osc2.frequency.value = freq * 0.5 * 1.003;

      filter.type = "lowpass";
      filter.frequency.value = 600;

      const vol = 0.012;
      env.gain.setValueAtTime(0, time);
      env.gain.linearRampToValueAtTime(vol, time + 0.8);
      env.gain.setValueAtTime(vol, time + duration - 1.5);
      env.gain.linearRampToValueAtTime(0, time + duration);

      osc.connect(filter);
      osc2.connect(filter);
      filter.connect(env);
      env.connect(dest);

      if (this.reverbNode) {
        const send = ctx.createGain();
        send.gain.value = 0.4;
        env.connect(send);
        send.connect(this.reverbNode);
      }

      osc.start(time);
      osc2.start(time);
      osc.stop(time + duration + 0.2);
      osc2.stop(time + duration + 0.2);
      this.activeNodes.push(osc, osc2);
    });
  }

  private startMusicLoop(config: MusicConfig) {
    const ctx = this.getCtx();
    const gain = this.activeGain!;
    const beatDuration = 60 / config.bpm;
    const { scale, chordProgression, melodyPattern } = config;

    this.nextNoteTime = ctx.currentTime + 0.1;
    this.currentChordIdx = 0;
    this.currentNoteInChord = 0;
    this.beatCount = 0;

    const beatsPerChord = 8;
    const totalChords = chordProgression.length;

    const scheduler = () => {
      if (!this.isPlaying) return;

      while (this.nextNoteTime < ctx.currentTime + 0.4) {
        const chordIndices = chordProgression[this.currentChordIdx % totalChords];
        const beatInChord = this.currentNoteInChord;

        if (config.style === "arpeggiate") {
          // Rich arpeggio pattern: up, down, up variations
          const arpeggioPatterns = [
            [0, 1, 2, 3, 2, 1, 0, 3],
            [0, 2, 1, 3, 0, 3, 2, 1],
            [3, 2, 1, 0, 1, 2, 3, 0],
            [0, 1, 3, 2, 0, 2, 3, 1],
          ];
          const patternIdx = this.currentChordIdx % arpeggioPatterns.length;
          const arpIdx = arpeggioPatterns[patternIdx][beatInChord % 8];
          const noteIdx = chordIndices[arpIdx % chordIndices.length];
          const freq = scale[noteIdx % scale.length];
          const octaveShift = Math.floor(noteIdx / scale.length);
          const finalFreq = freq * Math.pow(2, octaveShift);

          // Main arpeggio note
          this.scheduleNote(ctx, gain, finalFreq, this.nextNoteTime, beatDuration * 2, 0.09, "sine", true);

          // Octave shimmer on beats 1 and 5
          if (beatInChord === 0 || beatInChord === 4) {
            this.scheduleNote(
              ctx, gain, finalFreq * 2,
              this.nextNoteTime + beatDuration * 0.33,
              beatDuration * 1.5, 0.025, "sine", true
            );
          }

          // Ghost note between beats for flow
          if (beatInChord % 2 === 1) {
            const ghostIdx = chordIndices[(arpIdx + 1) % chordIndices.length];
            const ghostFreq = scale[ghostIdx % scale.length] * Math.pow(2, Math.floor(ghostIdx / scale.length));
            this.scheduleNote(ctx, gain, ghostFreq, this.nextNoteTime + beatDuration * 0.5, beatDuration * 0.8, 0.02, "sine", true);
          }
        } else {
          // Flowing: staggered chord voicings
          chordIndices.forEach((noteIdx, i) => {
            const freq = scale[noteIdx % scale.length];
            const delay = i * 0.12;
            this.scheduleNote(ctx, gain, freq, this.nextNoteTime + delay, beatDuration * 3, 0.05, "sine", true);
          });
        }

        // Melody line on top
        if (melodyPattern && beatInChord % 2 === 0) {
          const melIdx = (this.beatCount / 2) % melodyPattern.length;
          const melNoteIdx = melodyPattern[Math.floor(melIdx)];
          if (melNoteIdx >= 0) {
            const melFreq = scale[melNoteIdx % scale.length] * Math.pow(2, Math.floor(melNoteIdx / scale.length) + 1);
            this.scheduleNote(ctx, gain, melFreq, this.nextNoteTime + 0.05, beatDuration * 2.5, 0.04, "sine", true);
          }
        }

        // Bass on beat 1 and beat 5
        if ((beatInChord === 0 || beatInChord === 4) && config.bassNotes) {
          const bassFreq = config.bassNotes[this.currentChordIdx % config.bassNotes.length];
          const bassDur = beatInChord === 0 ? beatDuration * 4 : beatDuration * 3;
          this.scheduleBassNote(ctx, gain, bassFreq, this.nextNoteTime, bassDur);
        }

        // Pad chord on beat 1
        if (beatInChord === 0) {
          const padFreqs = chordIndices.map(idx => scale[idx % scale.length]);
          this.schedulePadChord(ctx, gain, padFreqs, this.nextNoteTime, beatDuration * beatsPerChord);
        }

        this.currentNoteInChord++;
        if (this.currentNoteInChord >= beatsPerChord) {
          this.currentNoteInChord = 0;
          this.currentChordIdx++;
        }

        this.nextNoteTime += beatDuration;
        this.beatCount++;
      }

      this.schedulerTimer = window.setTimeout(scheduler, 80);
    };

    scheduler();
  }

  // Soft click sound for button feedback
  playClickSound() {
    const ctx = this.getCtx();
    if (!this.masterGain) return;

    const osc = ctx.createOscillator();
    const env = ctx.createGain();

    osc.type = "sine";
    osc.frequency.value = 800;
    osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.03);

    env.gain.setValueAtTime(0, ctx.currentTime);
    env.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.005);
    env.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

    osc.connect(env);
    env.connect(this.masterGain);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.15);
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

// Scales
const C4 = 261.63, D4 = 293.66, E4 = 329.63, F4 = 349.23, G4 = 392.00, A4 = 440.00, B4 = 493.88;
const C5 = 523.25, D5 = 587.33, E5 = 659.25;

// Menu: warm contemplative arpeggios
export const MENU_AUDIO: MusicConfig = {
  bpm: 68,
  scale: [C4, D4, E4, F4, G4, A4, B4, C5, D5, E5],
  chordProgression: [
    [0, 2, 4, 7],  // C maj
    [5, 7, 9, 4],  // Am7
    [3, 5, 7, 9],  // F maj7
    [4, 6, 8, 7],  // G
    [0, 2, 4, 7],  // C maj
    [2, 4, 6, 8],  // Em7
    [3, 5, 7, 9],  // F maj7
    [4, 7, 0, 2],  // G → C
  ],
  melodyPattern: [7, 9, 8, 7, 4, 5, 7, 4, 9, 7, 5, 4, 2, 4, 7, 9],
  bassNotes: [C4 / 2, A4 / 4, F4 / 2, G4 / 2, C4 / 2, E4 / 2, F4 / 2, G4 / 2],
  style: "arpeggiate",
};

// Creation story: majestic, emotional, spiritual
export const STORY_AUDIO: Record<string, MusicConfig> = {
  creation: {
    bpm: 56,
    scale: [C4, D4, E4, F4, G4, A4, B4, C5, D5, E5],
    chordProgression: [
      [0, 4, 7, 9],  // C with high color
      [5, 7, 9, 4],  // Am7
      [3, 5, 7, 8],  // Fmaj7
      [0, 2, 7, 9],  // Csus2/add9
      [2, 4, 7, 9],  // Em add9
      [3, 5, 0, 4],  // F/C
      [4, 6, 8, 7],  // G
      [0, 4, 7, 9],  // C resolve
      [5, 7, 9, 2],  // Am9
      [3, 7, 9, 4],  // F6
      [0, 2, 4, 7],  // C
      [4, 7, 9, 0],  // G → C
    ],
    melodyPattern: [9, 7, 4, 7, 9, 8, 7, 5, 4, 2, 4, 7, 9, 7, 5, 4, 0, 2, 4, 5, 7, 9, 8, 7],
    bassNotes: [C4 / 2, A4 / 4, F4 / 2, C4 / 2, E4 / 2, F4 / 2, G4 / 2, C4 / 2, A4 / 4, F4 / 2, C4 / 2, G4 / 2],
    style: "arpeggiate",
  },
};
