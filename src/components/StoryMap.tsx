import { motion } from "framer-motion";
import { Lock, Check, ChevronLeft, Play } from "lucide-react";
import { StoryMeta } from "@/data/stories";

interface StoryMapProps {
  title: string;
  stories: StoryMeta[];
  isStoryCompleted: (id: string) => boolean;
  isStoryUnlocked: (story: StoryMeta, list: StoryMeta[]) => boolean;
  onSelectStory: (story: StoryMeta) => void;
  onBack: () => void;
}

const StoryMap = ({ title, stories, isStoryCompleted, isStoryUnlocked, onSelectStory, onBack }: StoryMapProps) => {
  // Group stories by category
  const categories: { name: string; stories: StoryMeta[] }[] = [];
  stories.forEach((s) => {
    const existing = categories.find((c) => c.name === s.category);
    if (existing) existing.stories.push(s);
    else categories.push({ name: s.category, stories: [s] });
  });

  return (
    <div className="fixed inset-0 bg-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-foreground via-[hsl(25,30%,20%)] to-foreground" />

      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 pt-6 pb-4">
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

        {/* Scrollable story list */}
        <div className="flex-1 overflow-y-auto px-4 pb-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: ci * 0.08 }}
              className="mb-6"
            >
              <p className="font-display text-xs tracking-widest uppercase text-gold/60 mb-3 px-1">
                {cat.name}
              </p>
              <div className="flex flex-col gap-2">
                {cat.stories.map((story) => {
                  const completed = isStoryCompleted(story.id);
                  const unlocked = isStoryUnlocked(story, stories);
                  const playable = unlocked && story.hasContent;

                  return (
                    <button
                      key={story.id}
                      onClick={() => playable && onSelectStory(story)}
                      disabled={!playable}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border text-left transition-all ${
                        completed
                          ? "border-eden/40 bg-eden/10 cursor-pointer hover:bg-eden/20"
                          : playable
                          ? "border-gold/30 bg-gold/10 cursor-pointer hover:border-gold/60 hover:bg-gold/20"
                          : unlocked && !story.hasContent
                          ? "border-muted-foreground/20 bg-foreground/20 cursor-not-allowed opacity-40"
                          : "border-muted-foreground/10 bg-foreground/10 cursor-not-allowed opacity-30"
                      }`}
                    >
                      {/* Status icon */}
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        completed
                          ? "bg-eden/20"
                          : playable
                          ? "bg-gold/20"
                          : "bg-muted-foreground/10"
                      }`}>
                        {completed ? (
                          <Check className="w-4 h-4 text-eden-light" />
                        ) : playable ? (
                          <Play className="w-3 h-3 text-gold ml-0.5" />
                        ) : (
                          <Lock className="w-3 h-3 text-muted-foreground" />
                        )}
                      </div>

                      {/* Story info */}
                      <div className="flex-1 min-w-0">
                        <span className={`font-display text-xs tracking-wider ${
                          completed
                            ? "text-eden-light"
                            : playable
                            ? "text-gold"
                            : "text-muted-foreground"
                        }`}>
                          {story.number}. {story.title}
                        </span>
                        {unlocked && !story.hasContent && (
                          <p className="font-body text-xs text-muted-foreground/50 mt-0.5">
                            Coming soon
                          </p>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryMap;
