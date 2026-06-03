import { Lock, Check, ChevronLeft, Play, Star, Gem } from "lucide-react";
import { StoryMeta } from "@/data/stories";
import storyListBg from "@/assets/map/story-list-bg.jpg";
import { useSettings } from "@/hooks/useSettings";

const StoryRowTitle = ({
  number,
  englishTitle,
  className,
}: {
  number: number;
  englishTitle: string;
  className: string;
}) => {
  return <span className={className}>{number}. {englishTitle}</span>;
};

/** Stories up to and including this number are free to play (set via VITE_FREE_STORY_LIMIT) */
export const FREE_STORY_LIMIT = Number(import.meta.env.VITE_FREE_STORY_LIMIT ?? 3);

interface StoryMapProps {
  title: string;
  stories: StoryMeta[];
  isStoryCompleted: (id: string) => boolean;
  isStoryUnlocked: (story: StoryMeta, list: StoryMeta[]) => boolean;
  getBestStars: (id: string) => number;
  onSelectStory: (story: StoryMeta) => void;
  onBack: () => void;
  devMode?: boolean;
  /** Whether the user has purchased the premium entitlement */
  hasPremium?: boolean;
  /** Called when the user taps a premium-locked story */
  onPaywallRequest?: () => void;
}

const StoryMap = ({
  title,
  stories,
  isStoryCompleted,
  isStoryUnlocked,
  getBestStars,
  onSelectStory,
  onBack,
  devMode = false,
  hasPremium = false,
  onPaywallRequest,
}: StoryMapProps) => {
  const { t } = useSettings();
  const translatedTitle = title;
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
              {translatedTitle}
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <div className="h-px w-12 bg-gold/40" />
              <span className="font-body text-xs text-gold/50 tracking-wider uppercase">
                {t("storiesLabel")}{devMode ? t("devModeSuffix") : ""}
              </span>
              <div className="h-px w-12 bg-gold/40" />
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-8">
          <div className="max-w-md mx-auto flex flex-col gap-3 pt-2">
            {stories.map((story, i) => {
              const completed = isStoryCompleted(story.id);
              // Premium gate: any story beyond the free limit requires purchase
              const isPremiumLocked = !devMode && !hasPremium && story.number > FREE_STORY_LIMIT;
              const unlocked = devMode || (!isPremiumLocked && isStoryUnlocked(story, stories));
              const playable = unlocked && story.hasContent;

              const handleClick = () => {
                if (isPremiumLocked) {
                  onPaywallRequest?.();
                } else if (playable) {
                  onSelectStory(story);
                }
              };

              const isInteractive = playable || isPremiumLocked;

              return (
                <div
                  key={story.id}
                  role={isInteractive ? "button" : undefined}
                  tabIndex={isInteractive ? 0 : undefined}
                  onClick={handleClick}
                  onKeyDown={(e) => { if (isInteractive && (e.key === "Enter" || e.key === " ")) handleClick(); }}
                  style={{ cursor: isInteractive ? 'pointer' : completed ? 'default' : 'not-allowed' }}
                  className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl border transition-all duration-300 text-left select-none ${
                    completed
                      ? "border-eden/40 bg-eden/15"
                      : isPremiumLocked
                      ? "border-gold/20 bg-gold/5 hover:border-gold/35 hover:bg-gold/10"
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
                        : isPremiumLocked
                        ? "border-gold/25 bg-gold/10"
                        : playable
                        ? "border-gold/40 bg-gold/20"
                        : "border-muted-foreground/20 bg-black/20"
                    }`}
                  >
                    {completed ? (
                      <Check className="w-4 h-4 text-eden-light" />
                    ) : isPremiumLocked ? (
                      <Gem className="w-3.5 h-3.5 text-gold/60" />
                    ) : playable ? (
                      <Play className="w-3.5 h-3.5 text-gold ml-0.5" />
                    ) : (
                      <Lock className="w-3 h-3 text-muted-foreground/50" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <StoryRowTitle
                      number={story.number}
                      englishTitle={story.title}
                      className={`font-display text-sm md:text-base tracking-wide block truncate ${
                        completed
                          ? "text-eden-light"
                          : isPremiumLocked
                          ? "text-gold/50"
                          : playable
                          ? "text-gold"
                          : "text-primary-foreground/40"
                      } drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]`}
                    />
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
                        {t("comingSoon")}
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
