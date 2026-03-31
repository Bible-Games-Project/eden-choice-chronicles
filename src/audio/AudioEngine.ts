// Web Audio API-based ambient audio engine
// Creates synthesized ambient music and environmental sounds

type OscType = OscillatorType;

interface AudioLayer {
  nodes: AudioNode[];
  gain: GainNode;
}

class AudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private musicLayer: AudioLayer | null = null;
  private ambientLayer: AudioLayer | null = null;
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
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
    return this.ctx;
  }

  private createNoiseSource(ctx: AudioContext, type: "white" | "pink" | "brown"): AudioBufferSourceNode {
    const bufferSize = ctx.sampleRate * 4;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      if (type === "white") {
        data[i] = white * 0.2;
      } else if (type === "pink") {
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
        b6 = white * 0.115926;
      } else {
        // Brown noise - like water/wind
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
    // Simulated bird chirps using modulated oscillators
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
    filter.type = "lowpass";
    filter.frequency.value = 400 + intensity * 300;
    filter.Q.value = 0.5;

    const noiseGain = ctx.createGain();
    noiseGain.gain.value = intensity * 0.4;

    // Gentle LFO for wind variation
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.type = "sine";
    lfo.frequency.value = 0.15 + Math.random() * 0.1;
    lfoGain.gain.value = 100;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start();

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(gain);
    noise.start();

    return [noise, lfo];
  }

  private createWater(ctx: AudioContext, gain: GainNode, intensity: number = 0.5): AudioNode[] {
    const noise = this.createNoiseSource(ctx, "pink");
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 800;
    filter.Q.value = 0.8;

    const noiseGain = ctx.createGain();
    noiseGain.gain.value = intensity * 0.3;

    // Water ripple modulation
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.type = "sine";
    lfo.frequency.value = 0.3;
    lfoGain.gain.value = 200;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start();

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(gain);
    noise.start();

    return [noise, lfo];
  }

  private createDrone(ctx: AudioContext, gain: GainNode, notes: number[], volume: number = 0.08): AudioNode[] {
    const nodes: AudioNode[] = [];
    notes.forEach((freq) => {
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = freq;

      const oscGain = ctx.createGain();
      oscGain.gain.value = volume;

      // Subtle detuned layer for warmth
      const osc2 = ctx.createOscillator();
      osc2.type = "sine";
      osc2.frequency.value = freq * 1.002;
      const oscGain2 = ctx.createGain();
      oscGain2.gain.value = volume * 0.5;

      osc.connect(oscGain);
      osc2.connect(oscGain2);
      oscGain.connect(gain);
      oscGain2.connect(gain);
      osc.start();
      osc2.start();
      nodes.push(osc, osc2);
    });
    return nodes;
  }

  private createPadChord(ctx: AudioContext, gain: GainNode, notes: number[]): AudioNode[] {
    const nodes: AudioNode[] = [];
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 1200;
    filter.Q.value = 0.5;
    filter.connect(gain);

    notes.forEach((freq) => {
      // Triangle for soft pad
      const osc = ctx.createOscillator();
      osc.type = "triangle";
      osc.frequency.value = freq;
      const g = ctx.createGain();
      g.gain.value = 0.04;
      osc.connect(g);
      g.connect(filter);
      osc.start();
      nodes.push(osc);

      // Detuned sine for depth
      const osc2 = ctx.createOscillator();
      osc2.type = "sine";
      osc2.frequency.value = freq * 2.001;
      const g2 = ctx.createGain();
      g2.gain.value = 0.015;
      osc2.connect(g2);
      g2.connect(filter);
      osc2.start();
      nodes.push(osc2);
    });

    return nodes;
  }

  private stopLayer(layer: AudioLayer | null) {
    if (!layer) return;
    const ctx = this.ctx;
    if (!ctx) return;

    const now = ctx.currentTime;
    layer.gain.gain.setValueAtTime(layer.gain.gain.value, now);
    layer.gain.gain.linearRampToValueAtTime(0, now + this.fadeTime);

    setTimeout(() => {
      layer.nodes.forEach((n) => {
        try {
          if (n instanceof OscillatorNode || n instanceof AudioBufferSourceNode) {
            n.stop();
          }
          n.disconnect();
        } catch {}
      });
      layer.gain.disconnect();
    }, this.fadeTime * 1000 + 100);
  }

  playScene(sceneId: string) {
    if (sceneId === this.currentScene) return;
    this.currentScene = sceneId;
    this.isPlaying = true;

    const ctx = this.getCtx();
    const master = this.masterGain!;

    // Fade out previous layers
    this.stopLayer(this.musicLayer);
    this.stopLayer(this.ambientLayer);

    // Create new layers
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

    // Scene-specific audio configurations
    const config = SCENE_AUDIO[sceneId] || SCENE_AUDIO["start"];

    // Music: ambient pad chords
    musicNodes.push(...this.createPadChord(ctx, musicGain, config.chordNotes));
    if (config.droneNotes) {
      musicNodes.push(...this.createDrone(ctx, musicGain, config.droneNotes, config.droneVolume || 0.06));
    }

    // Ambient sounds
    if (config.wind) {
      ambientNodes.push(...this.createWind(ctx, ambientGain, config.windIntensity || 0.3));
    }
    if (config.water) {
      ambientNodes.push(...this.createWater(ctx, ambientGain, config.waterIntensity || 0.5));
    }
    if (config.birds) {
      this.createBirds(ctx, ambientGain);
    }

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
    if (this.ctx?.state === "suspended") {
      this.ctx.resume();
    }
  }
}

// Musical note frequencies (Hz)
const C3 = 130.81, D3 = 146.83, E3 = 164.81, F3 = 174.61, G3 = 196.00, A3 = 220.00, B3 = 246.94;
const C4 = 261.63, D4 = 293.66, E4 = 329.63, F4 = 349.23, G4 = 392.00, A4 = 440.00;
const C5 = 523.25, E5 = 659.25, G5 = 783.99;

interface SceneAudioConfig {
  chordNotes: number[];
  droneNotes?: number[];
  droneVolume?: number;
  wind?: boolean;
  windIntensity?: number;
  water?: boolean;
  waterIntensity?: number;
  birds?: boolean;
}

const SCENE_AUDIO: Record<string, SceneAudioConfig> = {
  // Peaceful garden scenes - C major / warm
  start: {
    chordNotes: [C4, E4, G4, C5],
    droneNotes: [C3],
    birds: true,
    wind: true,
    windIntensity: 0.15,
  },
  animals: {
    chordNotes: [D4, F4, A4],
    droneNotes: [D3],
    birds: true,
    wind: true,
    windIntensity: 0.2,
  },
  play: {
    chordNotes: [G3, B3, D4, G4],
    droneNotes: [G3],
    droneVolume: 0.04,
    birds: true,
    wind: true,
    windIntensity: 0.15,
  },
  naming: {
    chordNotes: [A3, C4, E4],
    droneNotes: [A3],
    droneVolume: 0.05,
    birds: true,
    wind: true,
    windIntensity: 0.1,
  },
  // Water scenes
  river: {
    chordNotes: [E3, G3, B3, E4],
    droneNotes: [E3],
    water: true,
    waterIntensity: 0.6,
    wind: true,
    windIntensity: 0.1,
  },
  upstream: {
    chordNotes: [F3, A3, C4, F4],
    droneNotes: [F3],
    water: true,
    waterIntensity: 0.7,
    wind: true,
    windIntensity: 0.15,
  },
  meditation_river: {
    chordNotes: [C4, E4, G4],
    droneNotes: [C3, G3],
    droneVolume: 0.05,
    water: true,
    waterIntensity: 0.4,
  },
  // Meditation / spiritual scenes
  meditation: {
    chordNotes: [C4, E4, G4, B3],
    droneNotes: [C3, G3],
    droneVolume: 0.07,
    wind: true,
    windIntensity: 0.08,
  },
  sky_gaze: {
    chordNotes: [A3, E4, A4],
    droneNotes: [A3],
    droneVolume: 0.08,
    wind: true,
    windIntensity: 0.12,
  },
  // Flower / nature scenes
  flowers: {
    chordNotes: [D4, F4, A4, D4 * 2],
    droneNotes: [D3],
    birds: true,
    wind: true,
    windIntensity: 0.2,
  },
  garland: {
    chordNotes: [F3, A3, C4, F4],
    droneNotes: [F3],
    droneVolume: 0.04,
    birds: true,
    wind: true,
    windIntensity: 0.1,
  },
  // Deeper / more tense scenes
  deep_garden: {
    chordNotes: [A3, C4, E4],
    droneNotes: [A3, E3],
    droneVolume: 0.07,
    wind: true,
    windIntensity: 0.3,
  },
  tree_of_life: {
    chordNotes: [C4, E4, G4, C5],
    droneNotes: [C3, G3],
    droneVolume: 0.08,
    wind: true,
    windIntensity: 0.15,
  },
  fig_rest: {
    chordNotes: [E3, G3, B3],
    droneNotes: [E3],
    droneVolume: 0.06,
    wind: true,
    windIntensity: 0.35,
  },
  approach_tree: {
    chordNotes: [A3, C4, E4],
    droneNotes: [A3, E3],
    droneVolume: 0.09,
    wind: true,
    windIntensity: 0.4,
  },
  // Dark / tense scenes
  forbidden_tree: {
    chordNotes: [E3, G3, B3, D4],
    droneNotes: [E3, B3],
    droneVolume: 0.1,
    wind: true,
    windIntensity: 0.5,
  },
  share_eve: {
    chordNotes: [D3, F3, A3],
    droneNotes: [D3],
    droneVolume: 0.1,
    wind: true,
    windIntensity: 0.3,
  },
  hide: {
    chordNotes: [C3, E3, G3],
    droneNotes: [C3],
    droneVolume: 0.1,
    wind: true,
    windIntensity: 0.45,
  },
  expulsion: {
    chordNotes: [A3, C4, E4],
    droneNotes: [A3, E3],
    droneVolume: 0.12,
    wind: true,
    windIntensity: 0.6,
  },
};

export const audioEngine = new AudioEngine();
