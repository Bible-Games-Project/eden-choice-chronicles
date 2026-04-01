// Web Audio API-based ambient audio engine

class AudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private musicLayer: { nodes: AudioNode[]; gain: GainNode } | null = null;
  private ambientLayer: { nodes: AudioNode[]; gain: GainNode } | null = null;
  private currentScene: string = "";
  private isPlaying = false;
  private fadeTime = 1.5;

  private getCtx(): AudioContext {
    if (!this.ctx) {
      this.ctx = new AudioContext();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.35;
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === "suspended") this.ctx.resume();
    return this.ctx;
  }

  private createNoiseSource(ctx: AudioContext, type: "white" | "pink" | "brown"): AudioBufferSourceNode {
    const bufferSize = ctx.sampleRate * 4;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      if (type === "white") { data[i] = white * 0.2; }
      else if (type === "pink") {
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
      chirpGain.gain.linearRampToValueAtTime(0.06, now + 0.02);
      chirpGain.gain.linearRampToValueAtTime(0, now + 0.12);
      osc.connect(chirpGain);
      chirpGain.connect(gain);
      osc.start(now);
      osc.stop(now + 0.15);
      setTimeout(scheduleChirp, 1500 + Math.random() * 4000);
    };
    setTimeout(scheduleChirp, 500 + Math.random() * 2000);
  }

  private createWind(ctx: AudioContext, gain: GainNode, intensity: number = 0.3): AudioNode[] {
    const noise = this.createNoiseSource(ctx, "brown");
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass"; filter.frequency.value = 400 + intensity * 300; filter.Q.value = 0.5;
    const noiseGain = ctx.createGain();
    noiseGain.gain.value = intensity * 0.4;
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.type = "sine"; lfo.frequency.value = 0.15 + Math.random() * 0.1;
    lfoGain.gain.value = 100;
    lfo.connect(lfoGain); lfoGain.connect(filter.frequency); lfo.start();
    noise.connect(filter); filter.connect(noiseGain); noiseGain.connect(gain); noise.start();
    return [noise, lfo];
  }

  private createWater(ctx: AudioContext, gain: GainNode, intensity: number = 0.5): AudioNode[] {
    const noise = this.createNoiseSource(ctx, "pink");
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass"; filter.frequency.value = 800; filter.Q.value = 0.8;
    const noiseGain = ctx.createGain();
    noiseGain.gain.value = intensity * 0.3;
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.type = "sine"; lfo.frequency.value = 0.3; lfoGain.gain.value = 200;
    lfo.connect(lfoGain); lfoGain.connect(filter.frequency); lfo.start();
    noise.connect(filter); filter.connect(noiseGain); noiseGain.connect(gain); noise.start();
    return [noise, lfo];
  }

  private createPadChord(ctx: AudioContext, gain: GainNode, notes: number[]): AudioNode[] {
    const nodes: AudioNode[] = [];
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass"; filter.frequency.value = 1200; filter.Q.value = 0.5;
    filter.connect(gain);
    notes.forEach((freq) => {
      const osc = ctx.createOscillator(); osc.type = "triangle"; osc.frequency.value = freq;
      const g = ctx.createGain(); g.gain.value = 0.04;
      osc.connect(g); g.connect(filter); osc.start(); nodes.push(osc);
      const osc2 = ctx.createOscillator(); osc2.type = "sine"; osc2.frequency.value = freq * 2.001;
      const g2 = ctx.createGain(); g2.gain.value = 0.015;
      osc2.connect(g2); g2.connect(filter); osc2.start(); nodes.push(osc2);
    });
    return nodes;
  }

  private createDrone(ctx: AudioContext, gain: GainNode, notes: number[], volume: number = 0.06): AudioNode[] {
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

  playScene(sceneKey: string, config?: {
    chordNotes: number[];
    droneNotes?: number[];
    droneVolume?: number;
    wind?: boolean;
    windIntensity?: number;
    water?: boolean;
    waterIntensity?: number;
    birds?: boolean;
  }) {
    if (sceneKey === this.currentScene) return;
    this.currentScene = sceneKey;
    this.isPlaying = true;

    const ctx = this.getCtx();
    const master = this.masterGain!;

    this.stopLayer(this.musicLayer);
    this.stopLayer(this.ambientLayer);

    const cfg = config || { chordNotes: [261.63, 329.63, 392.00], wind: true, windIntensity: 0.2 };

    const musicGain = ctx.createGain();
    musicGain.gain.setValueAtTime(0, ctx.currentTime);
    musicGain.gain.linearRampToValueAtTime(1, ctx.currentTime + this.fadeTime);
    musicGain.connect(master);

    const ambientGain = ctx.createGain();
    ambientGain.gain.setValueAtTime(0, ctx.currentTime);
    ambientGain.gain.linearRampToValueAtTime(1, ctx.currentTime + this.fadeTime);
    ambientGain.connect(master);

    const musicNodes: AudioNode[] = [];
    const ambientNodes: AudioNode[] = [];

    musicNodes.push(...this.createPadChord(ctx, musicGain, cfg.chordNotes));
    if (cfg.droneNotes) musicNodes.push(...this.createDrone(ctx, musicGain, cfg.droneNotes, cfg.droneVolume || 0.06));
    if (cfg.wind) ambientNodes.push(...this.createWind(ctx, ambientGain, cfg.windIntensity || 0.3));
    if (cfg.water) ambientNodes.push(...this.createWater(ctx, ambientGain, cfg.waterIntensity || 0.5));
    if (cfg.birds) this.createBirds(ctx, ambientGain);

    this.musicLayer = { nodes: musicNodes, gain: musicGain };
    this.ambientLayer = { nodes: ambientNodes, gain: ambientGain };
  }

  stop() {
    this.isPlaying = false;
    this.currentScene = "";
    this.stopLayer(this.musicLayer);
    this.stopLayer(this.ambientLayer);
    this.musicLayer = null;
    this.ambientLayer = null;
  }

  resume() {
    if (this.ctx?.state === "suspended") this.ctx.resume();
  }
}

export const audioEngine = new AudioEngine();
