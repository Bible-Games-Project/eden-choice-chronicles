import { motion, AnimatePresence } from "framer-motion";
import { StoryChoice } from "@/data/stories/creation";
import { audioEngine } from "@/audio/AudioEngine";
import { useCallback } from "react";

interface GameSceneProps {
  title: string;
  text: string;
  choices: StoryChoice[];
  isFinal?: boolean;
  onChoice: (choice: StoryChoice) => void;
  onComplete: () => void;
  stepCount: number;
  backgroundImage?: string;
  sprites?: { left?: string; right?: string };
}

const GameScene = ({ title, text, choices, isFinal, onChoice, onComplete, stepCount, backgroundImage, sprites }: GameSceneProps) => {
  const textLines = text.split("\n");

  const handleChoice = useCallback((choice: StoryChoice) => {
    audioEngine.playClickSound();
    onChoice(choice);
  }, [onChoice]);

  const handleComplete = useCallback(() => {
    audioEngine.playClickSound();
    onComplete();
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed inset-0 flex flex-col"
      >
        {/* Background */}
        {backgroundImage && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )}
        <div className="absolute inset-0 bg-foreground/55" />

        {/* === MOBILE LAYOUT: top text, middle sprite, bottom buttons === */}
        {/* === DESKTOP: original overlay layout === */}

        {/* Top: Title + Text */}
        <div className="relative z-20 flex-shrink-0 px-4 pt-6 pb-2 md:pt-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-md mx-auto text-center"
          >
            <div className="mb-2">
              <span className="text-xs font-display tracking-widest uppercase text-gold-glow/80">
                Step {stepCount}
              </span>
            </div>

            <h2 className="font-display text-lg md:text-2xl text-center mb-2 text-primary-foreground tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
              {title}
            </h2>

            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-8 bg-gold" />
              <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
              <div className="h-px w-8 bg-gold" />
            </div>

            <div className="mb-1">
              {textLines.map((line, i) => (
                <p key={i} className="font-body text-base md:text-xl leading-relaxed text-primary-foreground/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                  {line}
                </p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Middle: Character Sprite — takes remaining space */}
        <div className="relative z-10 flex-1 flex items-end justify-center overflow-hidden">
          {sprites && (
            <>
              {sprites.left && (
                <motion.div
                  key={`sprite-left-${title}`}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 pointer-events-none"
                  initial={{ opacity: 0, x: -30, scale: 0.95 }}
                  animate={{
                    opacity: 0.9,
                    x: 0,
                    scale: 1,
                    y: [0, -4, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.8, ease: "easeOut" },
                    x: { duration: 1, ease: "easeOut" },
                    scale: { duration: 1, ease: "easeOut" },
                    y: {
                      duration: 4,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 1,
                    },
                  }}
                >
                  <img
                    src={sprites.left}
                    alt="Character"
                    className="h-[40vh] md:h-[60vh] w-auto object-contain object-bottom"
                  />
                </motion.div>
              )}
              {sprites.right && (
                <motion.div
                  key={`sprite-right-${title}`}
                  className="absolute bottom-0 right-0 pointer-events-none hidden md:block"
                  initial={{ opacity: 0, x: 30, scale: 0.95 }}
                  animate={{
                    opacity: 0.9,
                    x: 0,
                    scale: 1,
                    y: [0, -3, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.8, ease: "easeOut" },
                    x: { duration: 1, ease: "easeOut" },
                    scale: { duration: 1, ease: "easeOut" },
                    y: {
                      duration: 5,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 1.2,
                    },
                  }}
                >
                  <img
                    src={sprites.right}
                    alt="Character"
                    className="h-[55vh] w-auto object-contain object-bottom"
                  />
                </motion.div>
              )}
            </>
          )}
        </div>

        {/* Bottom: Choice Buttons */}
        <div className="relative z-20 flex-shrink-0 px-4 pb-6 pt-2 md:pb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full max-w-md mx-auto"
          >
            {!isFinal ? (
              <div className="flex flex-col gap-2">
                {choices.map((choice, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    onClick={() => handleChoice(choice)}
                    whileTap={{ scale: 0.97 }}
                    className="group w-full text-center px-4 py-2.5 rounded-lg border border-gold/30 bg-foreground/60 backdrop-blur-sm hover:bg-gold/20 hover:border-gold transition-all duration-300 cursor-pointer"
                  >
                    <span className="font-display text-xs tracking-widest uppercase text-gold mr-2">
                      {String.fromCharCode(65 + i)}.
                    </span>
                    <span className="font-body text-sm md:text-lg text-primary-foreground/90 group-hover:text-primary-foreground transition-colors">
                      {choice.text}
                    </span>
                  </motion.button>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="flex items-center justify-center gap-3">
                  <div className="h-px w-14 bg-gold" />
                  <span className="font-display text-xs tracking-widest uppercase text-gold">The End</span>
                  <div className="h-px w-14 bg-gold" />
                </div>
                <button
                  onClick={handleComplete}
                  className="font-display text-xs tracking-widest uppercase px-8 py-3 rounded-lg border border-gold text-gold hover:bg-gold hover:text-foreground transition-all duration-300 cursor-pointer"
                >
                  Continue Journey
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GameScene;
