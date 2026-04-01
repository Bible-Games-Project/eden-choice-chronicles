import { motion } from "framer-motion";
import { BookOpen, Lock } from "lucide-react";

interface MainMenuProps {
  onSelectTestament: (testament: "old" | "new") => void;
  isNTUnlocked: boolean;
  otProgress: { completed: number; total: number };
  ntProgress: { completed: number; total: number };
}

const MainMenu = ({ onSelectTestament, isNTUnlocked, otProgress, ntProgress }: MainMenuProps) => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-foreground">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground via-[hsl(25,30%,20%)] to-foreground" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-sm w-full px-6"
      >
        {/* Title */}
        <h1 className="font-display text-3xl md:text-4xl text-gold tracking-wide mb-2">
          Bible Journey
        </h1>
        <p className="font-body text-base text-primary-foreground/60 mb-10">
          Walk through the greatest stories ever told.
        </p>

        {/* Testament buttons */}
        <div className="flex flex-col gap-4">
          {/* Old Testament */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectTestament("old")}
            className="w-full p-5 rounded-xl border border-gold/30 bg-gold/10 backdrop-blur-sm text-left cursor-pointer transition-all hover:border-gold/60 hover:bg-gold/20"
          >
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-5 h-5 text-gold" />
              <span className="font-display text-sm tracking-widest uppercase text-gold">
                Old Testament
              </span>
            </div>
            <p className="font-body text-sm text-primary-foreground/60">
              {otProgress.completed} / {otProgress.total} stories
            </p>
            <div className="mt-3 h-1.5 w-full rounded-full bg-foreground/50 overflow-hidden">
              <div
                className="h-full bg-gold rounded-full transition-all duration-500"
                style={{ width: `${(otProgress.completed / otProgress.total) * 100}%` }}
              />
            </div>
          </motion.button>

          {/* New Testament */}
          <motion.button
            whileHover={isNTUnlocked ? { scale: 1.02 } : {}}
            whileTap={isNTUnlocked ? { scale: 0.98 } : {}}
            onClick={() => isNTUnlocked && onSelectTestament("new")}
            className={`w-full p-5 rounded-xl border text-left transition-all ${
              isNTUnlocked
                ? "border-gold/30 bg-gold/10 backdrop-blur-sm cursor-pointer hover:border-gold/60 hover:bg-gold/20"
                : "border-muted-foreground/20 bg-foreground/30 cursor-not-allowed opacity-50"
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              {isNTUnlocked ? (
                <BookOpen className="w-5 h-5 text-gold" />
              ) : (
                <Lock className="w-5 h-5 text-muted-foreground" />
              )}
              <span className={`font-display text-sm tracking-widest uppercase ${
                isNTUnlocked ? "text-gold" : "text-muted-foreground"
              }`}>
                New Testament
              </span>
            </div>
            <p className={`font-body text-sm ${
              isNTUnlocked ? "text-primary-foreground/60" : "text-muted-foreground/50"
            }`}>
              {isNTUnlocked
                ? `${ntProgress.completed} / ${ntProgress.total} stories`
                : "Complete all Old Testament stories to unlock"
              }
            </p>
            {isNTUnlocked && (
              <div className="mt-3 h-1.5 w-full rounded-full bg-foreground/50 overflow-hidden">
                <div
                  className="h-full bg-gold rounded-full transition-all duration-500"
                  style={{ width: `${(ntProgress.completed / ntProgress.total) * 100}%` }}
                />
              </div>
            )}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default MainMenu;
