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
  private delayNode: DelayNode | null = null;
  private delayFeedback: GainNode | null = null;

  private getCtx(): AudioContext {
    if (!this.ctx) {
      this.ctx = new AudioContext();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.35;
      this.masterGain.connect(this.ctx.destination);
      this.reverbNode = this.createReverb(this.ctx);
      this.reverbNode.connect(this.masterGain);
      // Stereo delay for depth
      this.delayNode = this.ctx.createDelay(1.0);
      this.delayNode.delayTime.value = 0.375;
      this.delayFeedback = this.ctx.createGain();
      this.delayFeedback.gain.value = 0.25;
      this.delayNode.connect(this.delayFeedback);
      this.delayFeedback.connect(this.delayNode);
      this.delayNode.connect(this.reverbNode);
    }
    if (this.ctx.state === "suspended") this.ctx.resume();
    return this.ctx;
  }

  private createReverb(ctx: AudioContext): ConvolverNode {
    const convolver = ctx.createConvolver();
    const rate = ctx.sampleRate;
    const length = rate * 3;
    const impulse = ctx.createBuffer(2, length, rate);
    for (let ch = 0; ch < 2; ch++) {
      const data = impulse.getChannelData(ch);
      for (let i = 0; i < length; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, 2.0);
      }
    }
    convolver.buffer = impulse;
    return convolver;
  }

  // Piano-like note with harmonics
  private schedulePianoNote(
    ctx: AudioContext,
    dest: GainNode,
    freq: number,
    time: number,
    duration: number,
    volume: number,
    useReverb = true,
    useDelay = false
  ) {
    const env = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = Math.min(freq * 6, 6000);
    filter.Q.value = 0.7;

    // Fundamental + harmonics for richer piano timbre
    const harmonics = [
      { ratio: 1, gain: 1.0, type: "triangle" as OscillatorType },
      { ratio: 2.0, gain: 0.3, type: "sine" as OscillatorType },
      { ratio: 3.0, gain: 0.08, type: "sine" as OscillatorType },
      { ratio: 1.001, gain: 0.5, type: "sine" as OscillatorType }, // chorus detune
    ];

    const oscs: OscillatorNode[] = [];
    harmonics.forEach(h => {
      const osc = ctx.createOscillator();
      const hGain = ctx.createGain();
      osc.type = h.type;
      osc.frequency.value = freq * h.ratio;
      hGain.gain.value = h.gain;
      osc.connect(hGain);
      hGain.connect(filter);
      osc.start(time);
      osc.stop(time + duration + 0.1);
      oscs.push(osc);
      this.activeNodes.push(osc);
    });

    // Piano-like ADSR: fast attack, gentle decay, sustain, release
    const attack = 0.008;
    const decay = Math.min(duration * 0.25, 0.3);
    const sustain = volume * 0.55;
    const release = Math.min(duration * 0.4, 0.8);

    env.gain.setValueAtTime(0, time);
    env.gain.linearRampToValueAtTime(volume, time + attack);
    env.gain.exponentialRampToValueAtTime(Math.max(sustain, 0.001), time + attack + decay);
    env.gain.setValueAtTime(Math.max(sustain, 0.001), time + duration - release);
    env.gain.exponentialRampToValueAtTime(0.001, time + duration);

    filter.connect(env);
    env.connect(dest);

    if (useReverb && this.reverbNode) {
      const send = ctx.createGain();
      send.gain.value = 0.35;
      env.connect(send);
      send.connect(this.reverbNode);
    }
    if (useDelay && this.delayNode) {
      const send = ctx.createGain();
      send.gain.value = 0.15;
      env.connect(send);
      send.connect(this.delayNode);
    }
  }

  private scheduleBassNote(
    ctx: AudioContext,
    dest: GainNode,
    freq: number,
    time: number,
    duration: number
  ) {
    const osc = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const env = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = "triangle";
    osc.frequency.value = freq;
    osc2.type = "sine";
    osc2.frequency.value = freq * 1.002;

    filter.type = "lowpass";
    filter.frequency.value = 350;

    env.gain.setValueAtTime(0, time);
    env.gain.linearRampToValueAtTime(0.06, time + 0.04);
    env.gain.setValueAtTime(0.06, time + duration * 0.4);
    env.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(filter);
    osc2.connect(filter);
    filter.connect(env);
    env.connect(dest);

    if (this.reverbNode) {
      const send = ctx.createGain();
      send.gain.value = 0.15;
      env.connect(send);
      send.connect(this.reverbNode);
    }

    osc.start(time);
    osc2.start(time);
    osc.stop(time + duration + 0.05);
    osc2.stop(time + duration + 0.05);
    this.activeNodes.push(osc, osc2);
  }

  private schedulePadChord(
    ctx: AudioContext,
    dest: GainNode,
    freqs: number[],
    time: number,
    duration: number
  ) {
    freqs.forEach((freq) => {
      const osc = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const env = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = "sine";
      osc.frequency.value = freq * 0.5;
      osc2.type = "sine";
      osc2.frequency.value = freq * 0.5 * 1.004;

      filter.type = "lowpass";
      filter.frequency.value = 500;

      const vol = 0.01;
      env.gain.setValueAtTime(0, time);
      env.gain.linearRampToValueAtTime(vol, time + 1.2);
      env.gain.setValueAtTime(vol, time + duration - 2);
      env.gain.linearRampToValueAtTime(0, time + duration);

      osc.connect(filter);
      osc2.connect(filter);
      filter.connect(env);
      env.connect(dest);

      if (this.reverbNode) {
        const send = ctx.createGain();
        send.gain.value = 0.5;
        env.connect(send);
        send.connect(this.reverbNode);
      }

      osc.start(time);
      osc2.start(time);
      osc.stop(time + duration + 0.3);
      osc2.stop(time + duration + 0.3);
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

      while (this.nextNoteTime < ctx.currentTime + 0.5) {
        const chordIndices = chordProgression[this.currentChordIdx % totalChords];
        const beatInChord = this.currentNoteInChord;

        if (config.style === "arpeggiate") {
          // Rich multi-pattern arpeggio
          const arpeggioPatterns = [
            [0, 1, 2, 3, 2, 1, 0, 3],
            [0, 2, 1, 3, 0, 3, 2, 1],
            [3, 2, 1, 0, 1, 2, 3, 0],
            [0, 1, 3, 2, 0, 2, 3, 1],
            [2, 0, 3, 1, 2, 3, 0, 1],
            [0, 3, 1, 2, 3, 0, 2, 1],
          ];
          const patternIdx = this.currentChordIdx % arpeggioPatterns.length;
          const arpIdx = arpeggioPatterns[patternIdx][beatInChord % 8];
          const noteIdx = chordIndices[arpIdx % chordIndices.length];
          const freq = scale[noteIdx % scale.length];
          const octaveShift = Math.floor(noteIdx / scale.length);
          const finalFreq = freq * Math.pow(2, octaveShift);

          // Main arpeggio note with piano timbre
          this.schedulePianoNote(ctx, gain, finalFreq, this.nextNoteTime, beatDuration * 2.5, 0.1, true, beatInChord % 4 === 0);

          // High shimmer on downbeats
          if (beatInChord === 0 || beatInChord === 4) {
            this.schedulePianoNote(
              ctx, gain, finalFreq * 2,
              this.nextNoteTime + beatDuration * 0.25,
              beatDuration * 2, 0.025, true, true
            );
          }

          // Gentle ghost notes for flowing feel
          if (beatInChord % 2 === 1) {
            const ghostIdx = chordIndices[(arpIdx + 2) % chordIndices.length];
            const ghostFreq = scale[ghostIdx % scale.length] * Math.pow(2, Math.floor(ghostIdx / scale.length));
            this.schedulePianoNote(ctx, gain, ghostFreq, this.nextNoteTime + beatDuration * 0.5, beatDuration, 0.02, true, false);
          }

          // Additional passing tone every 3rd beat for variety
          if (beatInChord === 2 || beatInChord === 6) {
            const passIdx = chordIndices[(arpIdx + 1) % chordIndices.length];
            const passFreq = scale[passIdx % scale.length] * Math.pow(2, Math.floor(passIdx / scale.length));
            this.schedulePianoNote(ctx, gain, passFreq * 0.5, this.nextNoteTime + beatDuration * 0.33, beatDuration * 1.5, 0.015, true, false);
          }
        } else {
          // Flowing: staggered chord voicings with piano
          chordIndices.forEach((noteIdx, i) => {
            const freq = scale[noteIdx % scale.length];
            const delay = i * 0.15;
            this.schedulePianoNote(ctx, gain, freq, this.nextNoteTime + delay, beatDuration * 3.5, 0.05, true, i === 0);
          });
        }

        // Expressive melody line
        if (melodyPattern && beatInChord % 2 === 0) {
          const melIdx = (this.beatCount / 2) % melodyPattern.length;
          const melNoteIdx = melodyPattern[Math.floor(melIdx)];
          if (melNoteIdx >= 0) {
            const melFreq = scale[melNoteIdx % scale.length] * Math.pow(2, Math.floor(melNoteIdx / scale.length) + 1);
            // Melody with slight timing humanization
            const humanize = (Math.random() - 0.5) * 0.02;
            this.schedulePianoNote(ctx, gain, melFreq, this.nextNoteTime + 0.04 + humanize, beatDuration * 3, 0.045, true, true);
          }
        }

        // Bass on beat 1 and beat 5
        if ((beatInChord === 0 || beatInChord === 4) && config.bassNotes) {
          const bassFreq = config.bassNotes[this.currentChordIdx % config.bassNotes.length];
          const bassDur = beatInChord === 0 ? beatDuration * 4.5 : beatDuration * 3;
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

      this.schedulerTimer = window.setTimeout(scheduler, 60);
    };

    scheduler();
  }

  // Soft click sound for button feedback
  playClickSound() {
    const ctx = this.getCtx();
    if (!this.masterGain) return;

    const osc = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const env = ctx.createGain();

    osc.type = "sine";
    osc.frequency.value = 900;
    osc.frequency.exponentialRampToValueAtTime(1400, ctx.currentTime + 0.025);

    osc2.type = "triangle";
    osc2.frequency.value = 1800;

    env.gain.setValueAtTime(0, ctx.currentTime);
    env.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 0.004);
    env.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

    osc.connect(env);
    osc2.connect(env);
    env.connect(this.masterGain);
    osc.start(ctx.currentTime);
    osc2.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.12);
    osc2.stop(ctx.currentTime + 0.12);
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

// Scales — extended for richer melodies
const C4 = 261.63, D4 = 293.66, E4 = 329.63, F4 = 349.23, G4 = 392.00, A4 = 440.00, B4 = 493.88;
const C5 = 523.25, D5 = 587.33, E5 = 659.25, F5 = 698.46, G5 = 783.99;

// Menu: warm contemplative arpeggios
export const MENU_AUDIO: MusicConfig = {
  bpm: 66,
  scale: [C4, D4, E4, F4, G4, A4, B4, C5, D5, E5, F5, G5],
  chordProgression: [
    [0, 2, 4, 7],   // C maj
    [5, 7, 9, 4],   // Am7
    [3, 5, 7, 9],   // F maj7
    [4, 6, 8, 7],   // G
    [0, 2, 4, 7],   // C maj
    [2, 4, 6, 9],   // Em9
    [3, 5, 7, 10],  // F maj7
    [4, 7, 0, 2],   // G → C
    [5, 7, 9, 11],  // Am add11
    [0, 4, 7, 9],   // C add9
  ],
  melodyPattern: [7, 9, 8, 7, 4, 5, 7, 4, 9, 7, 5, 4, 2, 4, 7, 9, 11, 9, 7, 5, 4, 2, 0, 4],
  bassNotes: [C4 / 2, A4 / 4, F4 / 2, G4 / 2, C4 / 2, E4 / 2, F4 / 2, G4 / 2, A4 / 4, C4 / 2],
  style: "arpeggiate",
};

// Creation story: majestic, emotional, spiritual — longer progression for less repetition
export const STORY_AUDIO: Record<string, MusicConfig> = {
  creation: {
    bpm: 54,
    scale: [C4, D4, E4, F4, G4, A4, B4, C5, D5, E5, F5, G5],
    chordProgression: [
      [0, 4, 7, 9],   // C with high color
      [5, 7, 9, 4],   // Am7
      [3, 5, 7, 8],   // Fmaj7
      [0, 2, 7, 9],   // Csus2/add9
      [2, 4, 7, 9],   // Em add9
      [3, 5, 0, 4],   // F/C
      [4, 6, 8, 7],   // G
      [0, 4, 7, 9],   // C resolve
      [5, 7, 9, 2],   // Am9
      [3, 7, 9, 4],   // F6
      [0, 2, 4, 7],   // C
      [4, 7, 9, 0],   // G → C
      [0, 2, 7, 11],  // Cadd11
      [5, 9, 4, 7],   // Am/E
      [3, 5, 9, 11],  // Fmaj9
      [4, 7, 2, 0],   // G resolve
    ],
    melodyPattern: [
      9, 7, 4, 7, 9, 8, 7, 5,
      4, 2, 4, 7, 9, 7, 5, 4,
      0, 2, 4, 5, 7, 9, 8, 7,
      11, 9, 7, 4, 5, 7, 9, 11,
      9, 7, 5, 4, 2, 0, 2, 4,
      7, 9, 11, 9, 7, 5, 4, 2,
    ],
    bassNotes: [
      C4 / 2, A4 / 4, F4 / 2, C4 / 2,
      E4 / 2, F4 / 2, G4 / 2, C4 / 2,
      A4 / 4, F4 / 2, C4 / 2, G4 / 2,
      C4 / 2, A4 / 4, F4 / 2, G4 / 2,
    ],
    style: "arpeggiate",
  },
};
