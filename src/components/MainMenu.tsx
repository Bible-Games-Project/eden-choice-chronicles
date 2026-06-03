import { motion } from "framer-motion";
import { BookOpen, Lock, Wrench, Eye } from "lucide-react";

interface MainMenuProps {
  onSelectTestament: (testament: "old" | "new") => void;
  isNTUnlocked: boolean;
  otProgress: { completed: number; total: number };
  ntProgress: { completed: number; total: number };
  devMode: boolean;
  onToggleDevMode: () => void;
  onOpenSpriteViewer: () => void;
}

const MainMenu = ({ onSelectTestament, isNTUnlocked, otProgress, ntProgress, devMode, onToggleDevMode, onOpenSpriteViewer }: MainMenuProps) => {
  const effectiveNTUnlocked = devMode || isNTUnlocked;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden">
      {/* Layered atmospheric background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(25,25%,8%)] via-[hsl(30,30%,14%)] to-[hsl(25,20%,6%)]" />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 45%, hsl(38,50%,25%,0.3) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, hsl(25,25%,6%) 100%)",
        }}
      />

      <div className="relative z-10 text-center max-w-md w-full px-8">

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-display text-4xl md:text-5xl text-gold tracking-[0.15em] mb-3"
          style={{
            textShadow: "0 0 40px hsl(43,75%,55%,0.3), 0 2px 8px rgba(0,0,0,0.8)",
          }}
        >
          Sacred Quest
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-3 mb-3"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/50" />
          <div className="w-1.5 h-1.5 rotate-45 bg-gold/60" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/50" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-body italic text-lg md:text-xl text-primary-foreground/50 mb-12"
        >
          Walk through the greatest stories ever told.
        </motion.p>

        {/* Testament cards */}
        <div className="flex flex-col gap-5">
          {/* Old Testament */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectTestament("old")}

            className="group w-full p-6 rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/10 via-gold/5 to-transparent backdrop-blur-sm text-left cursor-pointer transition-all duration-500 hover:border-gold/40 hover:shadow-[0_0_30px_hsl(43,75%,55%,0.1)]"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center bg-gold/10 group-hover:bg-gold/20 transition-colors">
                <BookOpen className="w-4 h-4 text-gold" />
              </div>
              <span className="font-display text-base tracking-[0.15em] uppercase text-gold">
                Old Testament
              </span>
            </div>
            <p className="font-body text-base text-primary-foreground/50 mb-4 pl-[52px]">
              {otProgress.completed} of {otProgress.total} stories completed
            </p>
            <div className="ml-[52px] h-1 w-[calc(100%-52px)] rounded-full bg-foreground/40 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-gold/80 to-gold"
                initial={{ width: 0 }}
                animate={{
                  width: `${(otProgress.completed / Math.max(otProgress.total, 1)) * 100}%`,
                }}
                transition={{ duration: 1, delay: 1.2 }}
              />
            </div>
          </motion.button>

          {/* New Testament */}
          <motion.button
            whileHover={effectiveNTUnlocked ? { scale: 1.02 } : {}}
            whileTap={effectiveNTUnlocked ? { scale: 0.98 } : {}}
            onClick={() => effectiveNTUnlocked && onSelectTestament("new")}

            className={`group w-full p-6 rounded-2xl border text-left transition-all duration-500 ${
              effectiveNTUnlocked
                ? "border-gold/20 bg-gradient-to-br from-gold/10 via-gold/5 to-transparent backdrop-blur-sm cursor-pointer hover:border-gold/40 hover:shadow-[0_0_30px_hsl(43,75%,55%,0.1)]"
                : "border-primary-foreground/10 bg-foreground/20 cursor-not-allowed"
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                  effectiveNTUnlocked
                    ? "border-gold/30 bg-gold/10 group-hover:bg-gold/20"
                    : "border-primary-foreground/15 bg-foreground/20"
                }`}
              >
                {effectiveNTUnlocked ? (
                  <BookOpen className="w-4 h-4 text-gold" />
                ) : (
                  <Lock className="w-4 h-4 text-primary-foreground/30" />
                )}
              </div>
              <span
                className={`font-display text-base tracking-[0.15em] uppercase ${
                  effectiveNTUnlocked ? "text-gold" : "text-primary-foreground/30"
                }`}
              >
                New Testament
              </span>
            </div>
            <p
              className={`font-body text-base pl-[52px] ${
                effectiveNTUnlocked
                  ? "text-primary-foreground/50"
                  : "text-primary-foreground/25 italic"
              }`}
            >
              {effectiveNTUnlocked
                ? `${ntProgress.completed} of ${ntProgress.total} stories completed`
                : "Complete all Old Testament stories to unlock"}
            </p>
            {effectiveNTUnlocked && (
              <div className="mt-4 ml-[52px] h-1 w-[calc(100%-52px)] rounded-full bg-foreground/40 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-gold/80 to-gold"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${(ntProgress.completed / Math.max(ntProgress.total, 1)) * 100}%`,
                  }}
                  transition={{ duration: 1, delay: 1.4 }}
                />
              </div>
            )}
          </motion.button>
        </div>

        {/* Dev tools section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-8 flex flex-col gap-3"
        >
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={onToggleDevMode}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-xs font-display tracking-wider uppercase transition-all cursor-pointer ${
                devMode
                  ? "border-amber-500/50 bg-amber-500/20 text-amber-400"
                  : "border-primary-foreground/15 bg-black/20 text-primary-foreground/40 hover:bg-primary-foreground/5"
              }`}
            >
              <Wrench className="w-3.5 h-3.5" />
              Dev Mode: {devMode ? "ON" : "OFF"}
            </button>

            <button
              onClick={onOpenSpriteViewer}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-foreground/15 bg-black/20 text-primary-foreground/40 hover:bg-primary-foreground/5 text-xs font-display tracking-wider uppercase transition-all cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              Sprite Viewer
            </button>
          </div>

          {devMode && (
            <p className="text-[10px] text-amber-400/60 font-body text-center">
              All stories unlocked • Scene selector available
            </p>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MainMenu;
