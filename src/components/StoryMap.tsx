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

// Generate winding path coordinates across the "pages" of the book
function generatePathNodes(count: number): { x: number; y: number }[] {
  const nodes: { x: number; y: number }[] = [];
  const startY = 8;
  const spacing = 12;

  for (let i = 0; i < count; i++) {
    // Serpentine path across the book pages
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
  const totalHeight = pathNodes.length > 0 ? pathNodes[pathNodes.length - 1].y + 12 : 100;
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
      {/* Warm atmospheric overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(25,30%,8%)]/60 via-transparent to-[hsl(25,30%,8%)]/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(30,40%,15%)]/30 via-transparent to-[hsl(30,40%,15%)]/30" />

      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 pt-6 pb-3 flex-shrink-0">
          <button
            onClick={onBack}
            className="p-2 rounded-lg text-gold hover:bg-gold/10 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h2 className="font-display text-xl tracking-widest uppercase text-gold drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
            {title}
          </h2>
        </div>

        {/* Scrollable map */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden px-2 pb-12">
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
                strokeWidth="0.3"
                strokeOpacity="0.35"
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
                  transition={{ delay: i * 0.03, duration: 0.4 }}
                  className="absolute flex flex-col items-center"
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}vh`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Category label */}
                  {isNewCategory && (
                    <div className="absolute whitespace-nowrap font-display text-[9px] tracking-widest uppercase text-gold/50 -top-5">
                      {story.category}
                    </div>
                  )}

                  {/* Node button */}
                  <button
                    onClick={() => playable && onSelectStory(story)}
                    disabled={!playable}
                    className={`relative flex items-center justify-center w-11 h-11 rounded-full border-2 transition-all backdrop-blur-sm ${
                      completed
                        ? "border-eden bg-eden/40 shadow-[0_0_14px_hsl(140,30%,30%,0.5)]"
                        : playable
                        ? "border-gold bg-gold/25 shadow-[0_0_14px_hsl(43,75%,55%,0.4)] cursor-pointer hover:scale-110 hover:shadow-[0_0_20px_hsl(43,75%,55%,0.6)]"
                        : unlocked && !story.hasContent
                        ? "border-muted-foreground/30 bg-black/20 opacity-50 cursor-not-allowed"
                        : "border-muted-foreground/20 bg-black/15 opacity-30 cursor-not-allowed"
                    }`}
                  >
                    {completed ? (
                      <Check className="w-4 h-4 text-eden-light" />
                    ) : playable ? (
                      <Play className="w-3.5 h-3.5 text-gold ml-0.5" />
                    ) : (
                      <Lock className="w-3 h-3 text-muted-foreground" />
                    )}

                    {playable && !completed && (
                      <span className="absolute inset-0 rounded-full border border-gold/30 animate-ping" />
                    )}
                  </button>

                  {/* Story label */}
                  <span
                    className={`mt-1.5 whitespace-nowrap font-display text-[10px] tracking-wider drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] ${
                      completed
                        ? "text-eden-light"
                        : playable
                        ? "text-gold"
                        : "text-muted-foreground/50"
                    }`}
                  >
                    {story.number}. {story.title}
                  </span>
                  {unlocked && !story.hasContent && (
                    <span className="font-body text-[9px] text-muted-foreground/40 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">Coming soon</span>
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
