import { motion } from "framer-motion";
import { Lock, Check, ChevronLeft, Play } from "lucide-react";
import { StoryMeta } from "@/data/stories";
import mapBg from "@/assets/map/ot-map-bg.jpg";

interface StoryMapProps {
  title: string;
  stories: StoryMeta[];
  isStoryCompleted: (id: string) => boolean;
  isStoryUnlocked: (story: StoryMeta, list: StoryMeta[]) => boolean;
  onSelectStory: (story: StoryMeta) => void;
  onBack: () => void;
}

// Generate winding path coordinates for story nodes
function generatePathNodes(count: number): { x: number; y: number }[] {
  const nodes: { x: number; y: number }[] = [];
  const amplitude = 28; // horizontal wave amplitude (%)
  const centerX = 50;
  const startY = 8;
  const spacing = 14; // vertical gap between nodes (%)

  for (let i = 0; i < count; i++) {
    const wave = Math.sin(i * 0.8) * amplitude;
    nodes.push({
      x: centerX + wave,
      y: startY + i * spacing,
    });
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

  // Group by category for section labels
  const categoryFirstIndex: Record<string, number> = {};
  stories.forEach((s, i) => {
    if (!(s.category in categoryFirstIndex)) categoryFirstIndex[s.category] = i;
  });

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Immersive background */}
      <img
        src={mapBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Atmospheric overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(25,40%,12%)]/70 via-transparent to-[hsl(43,60%,70%)]/10" />

      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 pt-6 pb-3 flex-shrink-0">
          <button
            onClick={onBack}
            className="p-2 rounded-lg text-gold hover:bg-gold/10 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h2 className="font-display text-lg tracking-widest uppercase text-gold">
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
                strokeWidth="0.4"
                strokeOpacity="0.25"
                strokeDasharray="1.5 1"
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
                  className="absolute flex items-center"
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}vh`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Category label */}
                  {isNewCategory && (
                    <div
                      className="absolute whitespace-nowrap font-display text-[10px] tracking-widest uppercase text-gold/40"
                      style={{
                        top: "-18px",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      {story.category}
                    </div>
                  )}

                  {/* Node button */}
                  <button
                    onClick={() => playable && onSelectStory(story)}
                    disabled={!playable}
                    className={`relative flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all backdrop-blur-sm ${
                      completed
                        ? "border-eden bg-eden/40 shadow-[0_0_16px_hsl(140,30%,30%,0.5)]"
                        : playable
                        ? "border-gold bg-gold/30 shadow-[0_0_16px_hsl(43,75%,55%,0.4)] cursor-pointer hover:scale-110 hover:shadow-[0_0_24px_hsl(43,75%,55%,0.6)]"
                        : unlocked && !story.hasContent
                        ? "border-muted-foreground/30 bg-black/30 opacity-50 cursor-not-allowed"
                        : "border-muted-foreground/20 bg-black/20 opacity-30 cursor-not-allowed"
                    }`}
                  >
                    {completed ? (
                      <Check className="w-4 h-4 text-eden-light" />
                    ) : playable ? (
                      <Play className="w-3.5 h-3.5 text-gold ml-0.5" />
                    ) : (
                      <Lock className="w-3 h-3 text-muted-foreground" />
                    )}

                    {/* Pulse ring for playable */}
                    {playable && !completed && (
                      <span className="absolute inset-0 rounded-full border border-gold/40 animate-ping" />
                    )}
                  </button>

                  {/* Story label */}
                  <div
                    className={`absolute whitespace-nowrap ${
                      node.x > 50 ? "right-full mr-3" : "left-full ml-3"
                    }`}
                  >
                    <span
                      className={`font-display text-[11px] tracking-wider ${
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
                      <p className="font-body text-[10px] text-muted-foreground/40">Coming soon</p>
                    )}
                  </div>
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
