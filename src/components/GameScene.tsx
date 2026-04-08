import { motion, AnimatePresence } from "framer-motion";
import { StoryChoice } from "@/data/stories/creation";
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

const GameScene = ({ text, choices, isFinal, onChoice, onComplete, backgroundImage, sprites }: GameSceneProps) => {
  const textLines = text.split("\n");

  const handleChoice = useCallback((choice: StoryChoice) => {
    onChoice(choice);
  }, [onChoice]);

  const handleComplete = useCallback(() => {
    onComplete();
  }, [onComplete]);

  const renderTextBlock = (compact = false) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="text-center"
    >
      <div className={compact ? "mb-2" : "mb-3"}>
        {textLines.map((line, i) => (
          <p
            key={i}
            className={`font-body italic text-primary-foreground/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] leading-relaxed ${
              compact ? "text-base" : "text-lg md:text-2xl"
            }`}
          >
            {line}
          </p>
        ))}
      </div>
    </motion.div>
  );

  const renderChoices = (compact = false) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.35 }}
    >
      {!isFinal ? (
        <div className={`flex flex-col ${compact ? "gap-1.5" : "gap-2.5"}`}>
          {choices.map((choice, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              onClick={() => handleChoice(choice)}
              whileTap={{ scale: 0.97 }}
              className={`group w-full text-center rounded-lg border border-gold/25 bg-foreground/60 backdrop-blur-md hover:bg-gold/15 hover:border-gold/50 transition-all duration-300 cursor-pointer ${
                compact ? "px-4 py-2" : "px-5 py-3"
              }`}
            >
              <span
                className={`font-body text-primary-foreground/90 group-hover:text-primary-foreground transition-colors ${
                  compact ? "text-sm" : "text-base md:text-lg"
                }`}
              >
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
          className={`flex flex-col items-center ${compact ? "gap-3" : "gap-4"}`}
        >
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-gold/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold/60" />
            <div className="h-px w-10 bg-gold/40" />
          </div>
          <button
            onClick={handleComplete}
            className={`font-display text-xs tracking-[0.2em] uppercase rounded-lg border border-gold/40 text-gold hover:bg-gold/15 hover:border-gold transition-all duration-300 cursor-pointer ${
              compact ? "px-6 py-2" : "px-8 py-3"
            }`}
          >
            Continue Journey
          </button>
        </motion.div>
      )}
    </motion.div>
  );

  const spriteMotion = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" as const },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={text}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed inset-0 overflow-hidden"
      >
        {/* Background */}
        {backgroundImage && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )}
        <div className="absolute inset-0 bg-foreground/55" />

        {/* ==================== MOBILE ==================== */}
        <div className="relative z-20 h-full md:hidden overflow-hidden">
          {/* Zone 1: Text + Buttons — 35% */}
          <div className="absolute inset-x-0 top-0 overflow-hidden" style={{ height: '35vh' }}>
            <div
              className="absolute left-1/2 w-full max-w-xs px-5 text-center"
              style={{ top: '30%', transform: 'translateX(-50%)' }}
            >
              {renderTextBlock(true)}
              <div style={{ marginTop: '0.75rem' }}>
                {renderChoices(true)}
              </div>
            </div>
          </div>
          {/* Zone 2: Sprite — 65% */}
          <div className="absolute inset-x-0 bottom-0 overflow-hidden" style={{ height: '65vh' }}>
            {sprites?.left && (
              <motion.div
                key={`sprite-mobile-${text}`}
                className="absolute pointer-events-none"
                style={{ bottom: '2vh', left: '50%', transform: 'translateX(-50%)' }}
                {...spriteMotion}
              >
                <img
                  src={sprites.left}
                  alt="Character"
                  style={{ height: '55vh', width: 'auto' }}
                  className="object-contain object-bottom"
                />
              </motion.div>
            )}
          </div>
        </div>

        {/* ==================== TABLET ==================== */}
        <div className="relative z-20 h-full hidden md:flex lg:hidden flex-col overflow-hidden">
          {/* Zone 1: Text + Buttons — 33% */}
          <div className="flex-none flex items-center justify-center px-6" style={{ height: '33vh' }}>
            <div className="w-full max-w-md mx-auto text-center">
              {renderTextBlock(true)}
              {renderChoices(true)}
            </div>
          </div>
          {/* Zone 2: Sprite — 67% */}
          <div className="relative flex-none overflow-hidden" style={{ height: '67vh' }}>
            {sprites?.left && (
              <motion.div
                key={`sprite-tablet-${text}`}
                className="absolute pointer-events-none"
                style={{ bottom: 0, left: '50%', transform: 'translateX(-50%)' }}
                {...spriteMotion}
              >
                <img
                  src={sprites.left}
                  alt="Character"
                  style={{ height: '58vh', width: 'auto' }}
                  className="object-contain object-bottom"
                />
              </motion.div>
            )}
          </div>
        </div>

        {/* ==================== DESKTOP (3 columns) ==================== */}
        <div className="relative z-20 h-full hidden lg:grid overflow-hidden" style={{ gridTemplateColumns: '1fr minmax(0, 480px) 1fr' }}>
          {/* Left column: main sprite */}
          <div className="relative">
            {sprites?.left && (
              <motion.div
                key={`sprite-desktop-${text}`}
                className="absolute pointer-events-none"
                style={{ bottom: 0, left: '10%' }}
                {...spriteMotion}
              >
                <img
                  src={sprites.left}
                  alt="Character"
                  style={{ height: '65vh', width: 'auto' }}
                  className="object-contain object-bottom"
                />
              </motion.div>
            )}
          </div>

          {/* Center column: text + buttons */}
          <div className="flex items-center justify-center px-6">
            <div className="w-full max-w-lg mx-auto text-center">
              {renderTextBlock()}
              <div className="mt-4">
                {renderChoices()}
              </div>
            </div>
          </div>

          {/* Right column: optional second sprite */}
          <div className="relative">
            {sprites?.right && (
              <motion.div
                key={`sprite-right-desktop-${text}`}
                className="absolute pointer-events-none"
                style={{ bottom: 0, right: '10%' }}
                {...spriteMotion}
              >
                <img
                  src={sprites.right}
                  alt="Character"
                  style={{ height: '65vh', width: 'auto' }}
                  className="object-contain object-bottom"
                />
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GameScene;
