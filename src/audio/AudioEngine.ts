// Web Audio API-based ambient audio engine
// Plays ONE continuous track per context (menu or story), not per scene.

class AudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private activeLayer: { nodes: AudioNode[]; gain: GainNode } | null = null;
  private currentTrack: string = "";
  private isPlaying = false;
  private fadeTime = 1.5;

  private getCtx(): AudioContext {
    if (!this.ctx) {
      this.ctx = new AudioContext();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.3;
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === "suspended") this.ctx.resume();
    return this.ctx;
  }

  private createNoiseSource(ctx: AudioContext, type: "pink" | "brown"): AudioBufferSourceNode {
    const bufferSize = ctx.sampleRate * 6;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      if (type === "pink") {
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
        b6 = white * 0.115926;
      } else {
        b0 = (b0 + (0.02 * white)) / 1.02;
        data[i] = b0 * 2.5;
      }
    }
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;
    return source;
  }

  private createBirds(ctx: AudioContext, gain: GainNode) {
    const scheduleChirp = () => {
      if (!this.isPlaying) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const chirpGain = ctx.createGain();
      const freq = 2000 + Math.random() * 2000;
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.3, now + 0.05);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.8, now + 0.1);
      chirpGain.gain.setValueAtTime(0, now);
      chirpGain.gain.linearRampToValueAtTime(0.04, now + 0.02);
      chirpGain.gain.linearRampToValueAtTime(0, now + 0.12);
      osc.connect(chirpGain);
      chirpGain.connect(gain);
      osc.start(now);
      osc.stop(now + 0.15);
      setTimeout(scheduleChirp, 2000 + Math.random() * 5000);
    };
    setTimeout(scheduleChirp, 800 + Math.random() * 2000);
  }

  private createWind(ctx: AudioContext, gain: GainNode, intensity: number): AudioNode[] {
    const noise = this.createNoiseSource(ctx, "brown");
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass"; filter.frequency.value = 350 + intensity * 200; filter.Q.value = 0.5;
    const noiseGain = ctx.createGain();
    noiseGain.gain.value = intensity * 0.3;
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.type = "sine"; lfo.frequency.value = 0.1 + Math.random() * 0.08;
    lfoGain.gain.value = 80;
    lfo.connect(lfoGain); lfoGain.connect(filter.frequency); lfo.start();
    noise.connect(filter); filter.connect(noiseGain); noiseGain.connect(gain); noise.start();
    return [noise, lfo];
  }

  private createWater(ctx: AudioContext, gain: GainNode, intensity: number): AudioNode[] {
    const noise = this.createNoiseSource(ctx, "pink");
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass"; filter.frequency.value = 800; filter.Q.value = 0.8;
    const noiseGain = ctx.createGain();
    noiseGain.gain.value = intensity * 0.25;
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.type = "sine"; lfo.frequency.value = 0.25; lfoGain.gain.value = 150;
    lfo.connect(lfoGain); lfoGain.connect(filter.frequency); lfo.start();
    noise.connect(filter); filter.connect(noiseGain); noiseGain.connect(gain); noise.start();
    return [noise, lfo];
  }

  private createPadChord(ctx: AudioContext, gain: GainNode, notes: number[]): AudioNode[] {
    const nodes: AudioNode[] = [];
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass"; filter.frequency.value = 1000; filter.Q.value = 0.5;
    filter.connect(gain);
    notes.forEach((freq) => {
      const osc = ctx.createOscillator(); osc.type = "triangle"; osc.frequency.value = freq;
      const g = ctx.createGain(); g.gain.value = 0.035;
      osc.connect(g); g.connect(filter); osc.start(); nodes.push(osc);
      // Slight detune for warmth
      const osc2 = ctx.createOscillator(); osc2.type = "sine"; osc2.frequency.value = freq * 2.001;
      const g2 = ctx.createGain(); g2.gain.value = 0.012;
      osc2.connect(g2); g2.connect(filter); osc2.start(); nodes.push(osc2);
    });
    return nodes;
  }

  private createDrone(ctx: AudioContext, gain: GainNode, notes: number[], volume: number): AudioNode[] {
    const nodes: AudioNode[] = [];
    notes.forEach((freq) => {
      const osc = ctx.createOscillator(); osc.type = "sine"; osc.frequency.value = freq;
      const g = ctx.createGain(); g.gain.value = volume;
      const osc2 = ctx.createOscillator(); osc2.type = "sine"; osc2.frequency.value = freq * 1.002;
      const g2 = ctx.createGain(); g2.gain.value = volume * 0.5;
      osc.connect(g); osc2.connect(g2); g.connect(gain); g2.connect(gain);
      osc.start(); osc2.start(); nodes.push(osc, osc2);
    });
    return nodes;
  }

  private stopLayer(layer: { nodes: AudioNode[]; gain: GainNode } | null) {
    if (!layer || !this.ctx) return;
    const now = this.ctx.currentTime;
    layer.gain.gain.setValueAtTime(layer.gain.gain.value, now);
    layer.gain.gain.linearRampToValueAtTime(0, now + this.fadeTime);
    setTimeout(() => {
      layer.nodes.forEach((n) => {
        try {
          if (n instanceof OscillatorNode || n instanceof AudioBufferSourceNode) n.stop();
          n.disconnect();
        } catch {}
      });
      layer.gain.disconnect();
    }, this.fadeTime * 1000 + 100);
  }

  /** Play a named track. If already playing this track, do nothing. */
  play(trackId: string, config: {
    chordNotes: number[];
    droneNotes?: number[];
    droneVolume?: number;
    wind?: boolean;
    windIntensity?: number;
    water?: boolean;
    waterIntensity?: number;
    birds?: boolean;
  }) {
    if (trackId === this.currentTrack) return;
    this.currentTrack = trackId;
    this.isPlaying = true;

    const ctx = this.getCtx();
    const master = this.masterGain!;

    this.stopLayer(this.activeLayer);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(1, ctx.currentTime + this.fadeTime);
    gain.connect(master);

    const nodes: AudioNode[] = [];
    nodes.push(...this.createPadChord(ctx, gain, config.chordNotes));
    if (config.droneNotes) nodes.push(...this.createDrone(ctx, gain, config.droneNotes, config.droneVolume || 0.05));
    if (config.wind) nodes.push(...this.createWind(ctx, gain, config.windIntensity || 0.2));
    if (config.water) nodes.push(...this.createWater(ctx, gain, config.waterIntensity || 0.4));
    if (config.birds) this.createBirds(ctx, gain);

    this.activeLayer = { nodes, gain };
  }

  stop() {
    this.isPlaying = false;
    this.currentTrack = "";
    this.stopLayer(this.activeLayer);
    this.activeLayer = null;
  }

  resume() {
    if (this.ctx?.state === "suspended") this.ctx.resume();
  }

  getCurrentTrack() {
    return this.currentTrack;
  }
}

export const audioEngine = new AudioEngine();

// Predefined track configs
export const MENU_AUDIO = {
  chordNotes: [220.00, 261.63, 329.63],
  droneNotes: [110.00],
  droneVolume: 0.04,
  wind: true,
  windIntensity: 0.15,
};

export const STORY_AUDIO: Record<string, {
  chordNotes: number[];
  droneNotes?: number[];
  droneVolume?: number;
  wind?: boolean;
  windIntensity?: number;
  water?: boolean;
  waterIntensity?: number;
  birds?: boolean;
}> = {
  creation: {
    chordNotes: [261.63, 329.63, 392.00, 523.25],
    droneNotes: [130.81, 196.00],
    droneVolume: 0.06,
    wind: true,
    windIntensity: 0.15,
    birds: true,
  },
};
