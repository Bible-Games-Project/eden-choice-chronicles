import { motion } from "framer-motion";
import { Lock, Check, ChevronLeft, Play, Star } from "lucide-react";
import { StoryMeta } from "@/data/stories";
import storyListBg from "@/assets/map/story-list-bg.jpg";

interface StoryMapProps {
  title: string;
  stories: StoryMeta[];
  isStoryCompleted: (id: string) => boolean;
  isStoryUnlocked: (story: StoryMeta, list: StoryMeta[]) => boolean;
  getBestStars: (id: string) => number;
  onSelectStory: (story: StoryMeta) => void;
  onBack: () => void;
  devMode?: boolean;
}

const StoryMap = ({ title, stories, isStoryCompleted, isStoryUnlocked, getBestStars, onSelectStory, onBack, devMode = false }: StoryMapProps) => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <img src={storyListBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(25,30%,6%)]/80 via-[hsl(25,30%,6%)]/40 to-[hsl(25,30%,6%)]/80" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, hsl(25,30%,6%) 100%)' }} />

      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center gap-3 px-5 pt-6 pb-4 flex-shrink-0">
          <button onClick={onBack} className="p-2.5 rounded-xl text-gold hover:bg-gold/10 transition-colors cursor-pointer">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div>
            <h2 className="font-display text-2xl md:text-3xl tracking-widest uppercase text-gold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              {title}
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <div className="h-px w-12 bg-gold/40" />
              <span className="font-body text-xs text-gold/50 tracking-wider uppercase">
                Stories{devMode ? " (Dev Mode)" : ""}
              </span>
              <div className="h-px w-12 bg-gold/40" />
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-8">
          <div className="max-w-md mx-auto flex flex-col gap-3 pt-2">
            {stories.map((story, i) => {
              const completed = isStoryCompleted(story.id);
              const unlocked = devMode || isStoryUnlocked(story, stories);
              const playable = unlocked && story.hasContent;

              return (
                <div
                  key={story.id}
                  role={playable ? "button" : undefined}
                  tabIndex={playable ? 0 : undefined}
                  onClick={() => playable && onSelectStory(story)}
                  onKeyDown={(e) => { if (playable && (e.key === "Enter" || e.key === " ")) onSelectStory(story); }}
                  style={{ cursor: playable ? 'pointer' : completed ? 'default' : 'not-allowed' }}
                  className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl border transition-all duration-300 text-left select-none ${
                    completed
                      ? "border-eden/40 bg-eden/15"
                      : playable
                      ? "border-gold/30 bg-gold/10 hover:border-gold/50 hover:bg-gold/20 hover:shadow-[0_0_20px_hsl(43,75%,55%,0.15)]"
                      : unlocked && !story.hasContent
                      ? "border-muted-foreground/20 bg-black/20 opacity-60"
                      : "border-muted-foreground/15 bg-black/20 opacity-40"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full border flex-shrink-0 flex items-center justify-center ${
                      completed
                        ? "border-eden/50 bg-eden/30"
                        : playable
                        ? "border-gold/40 bg-gold/20"
                        : "border-muted-foreground/20 bg-black/20"
                    }`}
                  >
                    {completed ? (
                      <Check className="w-4 h-4 text-eden-light" />
                    ) : playable ? (
                      <Play className="w-3.5 h-3.5 text-gold ml-0.5" />
                    ) : (
                      <Lock className="w-3 h-3 text-muted-foreground/50" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <span
                      className={`font-display text-sm md:text-base tracking-wide block truncate ${
                        completed
                          ? "text-eden-light"
                          : playable
                          ? "text-gold"
                          : "text-primary-foreground/40"
                      } drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]`}
                    >
                      {story.number}. {story.title}
                    </span>
                    {story.hasContent && (
                      <div className="flex items-center gap-0.5 mt-1">
                        {[1, 2, 3, 4, 5].map((n) => {
                          const best = getBestStars(story.id);
                          const earned = n <= best;
                          return (
                            <Star
                              key={n}
                              className={`w-3 h-3 ${earned ? "text-gold" : "text-primary-foreground/20"}`}
                              fill={earned ? "currentColor" : "none"}
                              strokeWidth={1.5}
                            />
                          );
                        })}
                      </div>
                    )}
                    {unlocked && !story.hasContent && (
                      <span className="font-body text-xs text-primary-foreground/30 mt-0.5 block">
                        Coming soon
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryMap;
