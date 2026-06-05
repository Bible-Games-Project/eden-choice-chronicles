import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { useSettings } from "@/hooks/useSettings";

interface StoryEndScreenProps {
  stars: number; // 0-5
  totalChoices: number;
  wrongChoices: number;
  backgroundImage?: string;
  onReplay: () => void;
  onContinue: () => void;
}

const StoryEndScreen = ({
  stars,
  totalChoices,
  wrongChoices,
  backgroundImage,
  onReplay,
  onContinue,
}: StoryEndScreenProps) => {
  const { t } = useSettings();
  const [revealedStars, setRevealedStars] = useState(0);
  const [showActions, setShowActions] = useState(false);

  const correctChoices = Math.max(0, totalChoices - wrongChoices);
  const percentage = totalChoices > 0
    ? Math.round((correctChoices / totalChoices) * 100)
    : 100;
  const isPerfect = stars === 5;

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    // Reveal stars one by one starting after a small delay
    for (let i = 1; i <= 5; i++) {
      timers.push(setTimeout(() => setRevealedStars(i), 600 + i * 350));
    }
    timers.push(setTimeout(() => setShowActions(true), 600 + 5 * 350 + 400));
    return () => timers.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden" style={{ backgroundColor: "hsl(var(--scene-base))" }}>
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className="absolute inset-0 bg-foreground/75" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-gold/40" />
            <span className="font-display text-xs tracking-[0.3em] uppercase text-gold/70">
              {t("storyComplete")}
            </span>
            <div className="h-px w-12 bg-gold/40" />
          </div>
        </motion.div>

        {/* Stars */}
        <div className="flex items-center justify-center gap-2 md:gap-3 mb-8">
          {[1, 2, 3, 4, 5].map((i) => {
            const earned = i <= stars;
            const visible = revealedStars >= i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
                animate={
                  visible
                    ? { opacity: 1, scale: 1, rotate: 0 }
                    : { opacity: 0, scale: 0.4, rotate: -20 }
                }
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Star
                  className={`w-12 h-12 md:w-16 md:h-16 ${
                    earned ? "text-gold" : "text-primary-foreground/20"
                  }`}
                  fill={earned ? "currentColor" : "none"}
                  strokeWidth={1.5}
                />
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: showActions ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          className="font-body italic text-primary-foreground/85 text-base md:text-lg text-center mb-10 drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]"
        >
          {percentage}{t("alignedSuffix")}
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: showActions ? 1 : 0, y: showActions ? 0 : 8 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-3"
          style={{ pointerEvents: showActions ? "auto" : "none" }}
        >
          {!isPerfect && (
            <button
              onClick={onReplay}
              className="font-display text-xs tracking-[0.2em] uppercase rounded-lg border border-gold/40 bg-black/50 text-gold hover:bg-black/60 hover:border-gold transition-all duration-300 px-6 py-3 cursor-pointer"
            >
              {t("replayStory")}
            </button>
          )}
          <button
            onClick={onContinue}
            className="font-display text-xs tracking-[0.2em] uppercase rounded-lg border border-gold/60 bg-black/50 text-gold hover:bg-black/60 hover:border-gold transition-all duration-300 px-8 py-3 cursor-pointer"
          >
            {t("continue")}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default StoryEndScreen;
