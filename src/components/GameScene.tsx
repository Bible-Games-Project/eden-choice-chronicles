import { motion, AnimatePresence } from "framer-motion";
import { Choice } from "@/data/scenes";

interface GameSceneProps {
  title: string;
  text: string;
  choices: Choice[];
  isFinal?: boolean;
  onChoice: (choice: Choice) => void;
  onRestart: () => void;
  stepCount: number;
  backgroundImage?: string;
}

const GameScene = ({ title, text, choices, isFinal, onChoice, onRestart, stepCount, backgroundImage }: GameSceneProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed inset-0 flex items-center justify-center"
      >
        {/* Background image */}
        {backgroundImage && (
          <motion.div
            key={backgroundImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )}
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-foreground/60" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-10 w-full max-w-2xl mx-auto px-4 py-8 max-h-screen overflow-y-auto"
        >
          {/* Step counter */}
          <div className="flex justify-center mb-4">
            <span className="text-sm font-display tracking-widest uppercase text-gold-glow/80">
              Step {stepCount}
            </span>
          </div>

          {/* Title */}
          <h2 className="font-display text-2xl md:text-3xl text-center mb-4 text-primary-foreground tracking-wide">
            {title}
          </h2>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold" />
            <div className="w-2 h-2 rotate-45 bg-gold" />
            <div className="h-px w-12 bg-gold" />
          </div>

          {/* Story text */}
          <p className="font-body text-lg md:text-xl leading-relaxed text-primary-foreground/90 mb-8 text-center">
            {text}
          </p>

          {/* Choices */}
          {!isFinal ? (
            <div className="flex flex-col gap-3">
              {choices.map((choice, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                  onClick={() => onChoice(choice)}
                  className="group relative w-full text-left px-6 py-4 rounded-lg border border-gold/30 bg-foreground/40 backdrop-blur-sm hover:bg-gold/20 hover:border-gold transition-all duration-300 cursor-pointer"
                >
                  <span className="font-display text-xs tracking-widest uppercase text-gold mr-3">
                    {String.fromCharCode(65 + i)}.
                  </span>
                  <span className="font-body text-lg text-primary-foreground/90 group-hover:text-primary-foreground transition-colors">
                    {choice.text}
                  </span>
                </motion.button>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col items-center gap-6"
            >
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-16 bg-gold" />
                <span className="font-display text-sm tracking-widest uppercase text-gold">The End</span>
                <div className="h-px w-16 bg-gold" />
              </div>
              <button
                onClick={onRestart}
                className="font-display text-sm tracking-widest uppercase px-8 py-3 rounded-lg border border-gold text-gold hover:bg-gold hover:text-foreground transition-all duration-300 cursor-pointer"
              >
                Begin Again
              </button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GameScene;
