import { motion } from "framer-motion";
import { Lock, Check, ChevronLeft, Play } from "lucide-react";
import { StoryMeta } from "@/data/stories";
import bibleBookBg from "@/assets/map/bible-book-bg.jpg";

interface StoryMapProps {
  title: string;
  stories: StoryMeta[];
  isStoryCompleted: (id: string) => boolean;
  isStoryUnlocked: (story: StoryMeta, list: StoryMeta[]) => boolean;
  onSelectStory: (story: StoryMeta) => void;
  onBack: () => void;
}

function generatePathNodes(count: number): { x: number; y: number }[] {
  const nodes: { x: number; y: number }[] = [];
  const startY = 10;
  const spacing = 14;

  for (let i = 0; i < count; i++) {
    const row = Math.floor(i / 3);
    const col = i % 3;
    const goingRight = row % 2 === 0;
    const xPositions = [22, 50, 78];
    const x = goingRight ? xPositions[col] : xPositions[2 - col];
    const y = startY + row * spacing;
    nodes.push({ x, y });
  }
  return nodes;
}

function buildPathD(nodes: { x: number; y: number }[]): string {
  if (nodes.length < 2) return "";
  let d = `M ${nodes[0].x} ${nodes[0].y}`;
  for (let i = 1; i < nodes.length; i++) {
    const prev = nodes[i - 1];
    const curr = nodes[i];
    const cpY = (prev.y + curr.y) / 2;
    d += ` C ${prev.x} ${cpY}, ${curr.x} ${cpY}, ${curr.x} ${curr.y}`;
  }
  return d;
}

const StoryMap = ({ title, stories, isStoryCompleted, isStoryUnlocked, onSelectStory, onBack }: StoryMapProps) => {
  const pathNodes = generatePathNodes(stories.length);
  const totalHeight = pathNodes.length > 0 ? pathNodes[pathNodes.length - 1].y + 14 : 100;
  const pathD = buildPathD(pathNodes);

  const categoryFirstIndex: Record<string, number> = {};
  stories.forEach((s, i) => {
    if (!(s.category in categoryFirstIndex)) categoryFirstIndex[s.category] = i;
  });

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Bible book background */}
      <img
        src={bibleBookBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Atmospheric overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(25,30%,6%)]/70 via-transparent to-[hsl(25,30%,6%)]/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(30,40%,12%)]/40 via-transparent to-[hsl(30,40%,12%)]/40" />
      {/* Warm vignette */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, hsl(25,30%,6%) 100%)' }} />

      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 px-5 pt-6 pb-4 flex-shrink-0">
          <button
            onClick={onBack}
            className="p-2.5 rounded-xl text-gold hover:bg-gold/10 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div>
            <h2 className="font-display text-2xl md:text-3xl tracking-widest uppercase text-gold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              {title}
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <div className="h-px w-12 bg-gold/40" />
              <span className="font-body text-xs text-gold/50 tracking-wider uppercase">Journey Map</span>
              <div className="h-px w-12 bg-gold/40" />
            </div>
          </div>
        </div>

        {/* Scrollable map */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden px-2 pb-16">
          <div className="relative w-full" style={{ height: `${totalHeight}vh` }}>
            {/* SVG path */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox={`0 0 100 ${totalHeight}`}
              preserveAspectRatio="none"
            >
              <path
                d={pathD}
                fill="none"
                stroke="hsl(43,75%,55%)"
                strokeWidth="0.35"
                strokeOpacity="0.3"
                strokeDasharray="1.2 0.8"
              />
            </svg>

            {/* Story nodes */}
            {stories.map((story, i) => {
              const node = pathNodes[i];
              const completed = isStoryCompleted(story.id);
              const unlocked = isStoryUnlocked(story, stories);
              const playable = unlocked && story.hasContent;
              const isNewCategory = categoryFirstIndex[story.category] === i;

              return (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.04, duration: 0.5 }}
                  className="absolute flex flex-col items-center"
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}vh`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Category label */}
                  {isNewCategory && (
                    <div className="absolute whitespace-nowrap -top-8">
                      <span className="font-display text-sm md:text-base tracking-[0.2em] uppercase text-gold/80 drop-shadow-[0_2px_6px_rgba(0,0,0,1)]">
                        {story.category}
                      </span>
                    </div>
                  )}

                  {/* Node button */}
                  <button
                    onClick={() => playable && onSelectStory(story)}
                    disabled={!playable}
                    className={`relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full border-2 transition-all duration-300 ${
                      completed
                        ? "border-eden bg-eden/40 shadow-[0_0_18px_hsl(140,30%,30%,0.5)]"
                        : playable
                        ? "border-gold bg-gold/20 shadow-[0_0_16px_hsl(43,75%,55%,0.4)] cursor-pointer hover:scale-110 hover:shadow-[0_0_24px_hsl(43,75%,55%,0.6)] hover:bg-gold/30"
                        : unlocked && !story.hasContent
                        ? "border-muted-foreground/30 bg-black/30 opacity-60 cursor-not-allowed"
                        : "border-muted-foreground/25 bg-black/25 opacity-50 cursor-not-allowed"
                    }`}
                  >
                    {completed ? (
                      <Check className="w-5 h-5 text-eden-light" />
                    ) : playable ? (
                      <Play className="w-4 h-4 text-gold ml-0.5" />
                    ) : (
                      <Lock className="w-3.5 h-3.5 text-muted-foreground/70" />
                    )}

                    {playable && !completed && (
                      <span className="absolute inset-0 rounded-full border border-gold/20 animate-ping" />
                    )}
                  </button>

                  {/* Story label */}
                  <span
                    className={`mt-2.5 whitespace-nowrap font-display text-sm md:text-base font-semibold tracking-wide ${
                      completed
                        ? "text-eden-light drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
                        : playable
                        ? "text-gold drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
                        : "text-primary-foreground/50 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
                    }`}
                  >
                    {story.number}. {story.title}
                  </span>
                  {unlocked && !story.hasContent && (
                    <span className="font-body text-xs text-primary-foreground/40 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] mt-0.5">
                      Coming soon
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryMap;
