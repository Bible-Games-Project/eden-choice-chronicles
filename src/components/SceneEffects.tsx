import { useEffect, useRef } from "react";

export type SceneEffect = "sparks" | "rain" | "sparkles" | "leaves" | "bubbles" | "fireflies";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
  color: string;
  rotation?: number;
  rotationSpeed?: number;
}

const EFFECT_CONFIG: Record<SceneEffect, {
  count: number;
  colors: string[];
  sizeRange: [number, number];
  speedRange: [number, number];
  lifeRange: [number, number];
  direction: "down" | "up" | "float";
  glow?: boolean;
}> = {
  sparks: {
    count: 18,
    colors: ["#FFD700", "#FFA500", "#FFEC8B", "#FFF8DC"],
    sizeRange: [1.5, 3.5],
    speedRange: [0.3, 1.2],
    lifeRange: [60, 150],
    direction: "up",
    glow: true,
  },
  rain: {
    count: 40,
    colors: ["rgba(180,210,240,0.4)", "rgba(160,200,235,0.3)", "rgba(200,220,245,0.35)"],
    sizeRange: [1, 2],
    speedRange: [2, 4],
    lifeRange: [40, 80],
    direction: "down",
  },
  sparkles: {
    count: 22,
    colors: ["#FFFDE7", "#E8EAF6", "#FCE4EC", "#FFF9C4"],
    sizeRange: [1, 3],
    speedRange: [0.1, 0.5],
    lifeRange: [80, 200],
    direction: "float",
    glow: true,
  },
  leaves: {
    count: 12,
    colors: ["rgba(120,180,80,0.5)", "rgba(160,200,100,0.4)", "rgba(100,160,60,0.45)", "rgba(180,160,60,0.4)"],
    sizeRange: [3, 6],
    speedRange: [0.3, 0.8],
    lifeRange: [120, 250],
    direction: "down",
  },
  bubbles: {
    count: 15,
    colors: ["rgba(150,210,255,0.3)", "rgba(180,230,255,0.25)", "rgba(200,240,255,0.2)"],
    sizeRange: [2, 5],
    speedRange: [0.2, 0.6],
    lifeRange: [100, 200],
    direction: "up",
  },
  fireflies: {
    count: 10,
    colors: ["#FFEB3B", "#FFF176", "#FFF9C4"],
    sizeRange: [1.5, 3],
    speedRange: [0.1, 0.4],
    lifeRange: [120, 300],
    direction: "float",
    glow: true,
  },
};

const SceneEffects = ({ effect }: { effect: SceneEffect }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const config = EFFECT_CONFIG[effect];
    particlesRef.current = [];

    const spawn = (): Particle => {
      const col = config.colors[Math.floor(Math.random() * config.colors.length)];
      const life = config.lifeRange[0] + Math.random() * (config.lifeRange[1] - config.lifeRange[0]);
      const speed = config.speedRange[0] + Math.random() * (config.speedRange[1] - config.speedRange[0]);
      const size = config.sizeRange[0] + Math.random() * (config.sizeRange[1] - config.sizeRange[0]);

      let vx = (Math.random() - 0.5) * 0.5;
      let vy = 0;
      if (config.direction === "down") {
        vy = speed;
        vx = (Math.random() - 0.5) * 0.3;
      } else if (config.direction === "up") {
        vy = -speed;
        vx = (Math.random() - 0.5) * 0.6;
      } else {
        vy = (Math.random() - 0.5) * speed * 0.5;
        vx = (Math.random() - 0.5) * speed * 0.5;
      }

      return {
        x: Math.random() * canvas.width,
        y: config.direction === "down" ? -10 : config.direction === "up" ? canvas.height + 10 : Math.random() * canvas.height,
        vx,
        vy,
        size,
        opacity: 0,
        life: 0,
        maxLife: life,
        color: col,
        rotation: effect === "leaves" ? Math.random() * Math.PI * 2 : undefined,
        rotationSpeed: effect === "leaves" ? (Math.random() - 0.5) * 0.03 : undefined,
      };
    };

    // Stagger initial spawn
    for (let i = 0; i < config.count; i++) {
      const p = spawn();
      p.life = Math.random() * p.maxLife * 0.5; // start at random life phase
      p.y = Math.random() * canvas.height; // distribute across screen
      particlesRef.current.push(p);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;

        if (p.rotation !== undefined && p.rotationSpeed !== undefined) {
          p.rotation += p.rotationSpeed;
        }

        // Fade in/out
        const progress = p.life / p.maxLife;
        if (progress < 0.15) {
          p.opacity = progress / 0.15;
        } else if (progress > 0.7) {
          p.opacity = (1 - progress) / 0.3;
        } else {
          p.opacity = 1;
        }
        p.opacity = Math.max(0, Math.min(1, p.opacity)) * 0.6; // keep subtle

        if (p.life >= p.maxLife || p.y < -20 || p.y > canvas.height + 20 || p.x < -20 || p.x > canvas.width + 20) {
          particlesRef.current[i] = spawn();
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.opacity;

        if (config.glow) {
          ctx.shadowColor = p.color;
          ctx.shadowBlur = p.size * 3;
        }

        if (effect === "leaves" && p.rotation !== undefined) {
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size, p.size * 0.5, 0, 0, Math.PI * 2);
          ctx.fill();
        } else if (effect === "rain") {
          ctx.strokeStyle = p.color;
          ctx.lineWidth = p.size * 0.5;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x + p.vx * 2, p.y + p.vy * 3);
          ctx.stroke();
        } else {
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [effect]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-15"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default SceneEffects;
