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

const GameScene = ({ title, text, choices, isFinal, onChoice, onComplete, stepCount, backgroundImage, sprites }: GameSceneProps) => {
  const textLines = text.split("\n");

  const handleChoice = useCallback((choice: StoryChoice) => {
    onChoice(choice);
  }, [onChoice]);

  const handleComplete = useCallback(() => {
    onComplete();
  }, [onComplete]);

  const renderTextBlock = () => (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-center"
    >
      <div className="mb-1.5">
        <span className="text-xs font-display tracking-widest uppercase text-gold-glow/80">
          Step {stepCount}
        </span>
      </div>
      <h2 className="font-display text-lg md:text-2xl text-center mb-2 text-primary-foreground tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
        {title}
      </h2>
      <div className="flex items-center justify-center gap-3 mb-2">
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
  );

  const renderChoices = () => (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
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
              className="group w-full text-center px-4 py-2.5 rounded-lg border border-gold/30 bg-foreground/70 backdrop-blur-sm hover:bg-gold/20 hover:border-gold transition-all duration-300 cursor-pointer"
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
  );

  // Shared sprite idle animation (subtle breathing only, no repositioning)
  const spriteMotion = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" as const },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed inset-0"
      >
        {/* Background */}
        {backgroundImage && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )}
        <div className="absolute inset-0 bg-foreground/55" />

        {/* ==================== MOBILE LAYOUT (vertical) ==================== */}
        <div className="relative z-20 h-full md:hidden">
          {/* UI: top portion, centered */}
          <div className="absolute top-0 left-0 right-0 px-4 pt-5 pb-2 z-10" style={{ maxHeight: '38vh', overflowY: 'auto' }}>
            <div className="w-full max-w-sm mx-auto text-center">
              {renderTextBlock()}
              <div className="mt-3">
                {renderChoices()}
              </div>
            </div>
          </div>

          {/* Sprite: fixed bottom-center, 65vh tall */}
          {sprites?.left && (
            <motion.div
              key={`sprite-mobile-${title}`}
              className="absolute pointer-events-none"
              style={{
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
              }}
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

        {/* ==================== TABLET LAYOUT (horizontal) ==================== */}
        <div className="relative z-20 h-full hidden md:block lg:hidden">
          {/* Sprite: fixed bottom-left */}
          {sprites?.left && (
            <motion.div
              key={`sprite-tablet-${title}`}
              className="absolute pointer-events-none"
              style={{
                bottom: 0,
                left: '5%',
              }}
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

          {/* Right sprite if present */}
          {sprites?.right && (
            <motion.div
              key={`sprite-right-tablet-${title}`}
              className="absolute pointer-events-none"
              style={{ bottom: 0, right: '5%' }}
              {...spriteMotion}
            >
              <img
                src={sprites.right}
                alt="Character"
                style={{ height: '60vh', width: 'auto' }}
                className="object-contain object-bottom"
              />
            </motion.div>
          )}

          {/* UI: centered in viewport */}
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="w-full max-w-md mx-auto text-center">
              {renderTextBlock()}
              <div className="mt-6">
                {renderChoices()}
              </div>
            </div>
          </div>
        </div>

        {/* ==================== DESKTOP LAYOUT (horizontal) ==================== */}
        <div className="relative z-20 h-full hidden lg:block">
          {/* Sprite: fixed bottom-left */}
          {sprites?.left && (
            <motion.div
              key={`sprite-desktop-${title}`}
              className="absolute pointer-events-none"
              style={{
                bottom: 0,
                left: '5%',
              }}
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

          {/* Right sprite if present */}
          {sprites?.right && (
            <motion.div
              key={`sprite-right-desktop-${title}`}
              className="absolute pointer-events-none"
              style={{ bottom: 0, right: '5%' }}
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

          {/* UI: centered in viewport */}
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="w-full max-w-lg mx-auto text-center">
              {renderTextBlock()}
              <div className="mt-6">
                {renderChoices()}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GameScene;
