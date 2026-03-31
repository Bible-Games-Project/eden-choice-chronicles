import { motion, AnimatePresence } from "framer-motion";
import { Choice } from "@/data/scenes";
import { SpriteConfig } from "@/data/spriteConfig";

interface GameSceneProps {
  title: string;
  text: string;
  choices: Choice[];
  isFinal?: boolean;
  onChoice: (choice: Choice) => void;
  onRestart: () => void;
  stepCount: number;
  backgroundImage?: string;
  sprites?: SpriteConfig;
}

const GameScene = ({ title, text, choices, isFinal, onChoice, onRestart, stepCount, backgroundImage, sprites }: GameSceneProps) => {
  const textLines = text.split("\n");

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
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-foreground/55" />

        {/* Character sprites */}
        {sprites && (
          <>
            {/* Adam - left side */}
            <div
              key={sprites.left}
              className="absolute bottom-0 left-0 z-10 pointer-events-none"
            >
              <img
                src={sprites.left}
                alt="Adam"
                className="h-[45vh] md:h-[55vh] w-auto object-contain object-bottom opacity-80"
                loading="lazy"
              />
            </div>

            {/* Right character (Eve/Serpent) */}
            {sprites.right && (
              <div
                key={sprites.right}
                className="absolute bottom-0 right-0 z-10 pointer-events-none"
              >
                <img
                  src={sprites.right}
                  alt="Character"
                  className="h-[40vh] md:h-[50vh] w-auto object-contain object-bottom opacity-80"
                  loading="lazy"
                />
              </div>
            )}
          </>
        )}

        {/* Content - centered, above sprites */}
        <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-md mx-auto text-center"
          >
            {/* Step counter */}
            <div className="mb-3">
              <span className="text-xs font-display tracking-widest uppercase text-gold-glow/80">
                Step {stepCount}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-display text-xl md:text-2xl text-center mb-3 text-primary-foreground tracking-wide">
              {title}
            </h2>

            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-10 bg-gold" />
              <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
              <div className="h-px w-10 bg-gold" />
            </div>

            {/* Story text - short and impactful */}
            <div className="mb-6">
              {textLines.map((line, i) => (
                <p key={i} className="font-body text-lg md:text-xl leading-relaxed text-primary-foreground/90">
                  {line}
                </p>
              ))}
            </div>

            {/* Choices */}
            {!isFinal ? (
              <div className="flex flex-col gap-2.5">
                {choices.map((choice, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.12 }}
                    onClick={() => onChoice(choice)}
                    className="group w-full text-center px-5 py-3 rounded-lg border border-gold/30 bg-foreground/50 backdrop-blur-sm hover:bg-gold/20 hover:border-gold transition-all duration-300 cursor-pointer"
                  >
                    <span className="font-display text-xs tracking-widest uppercase text-gold mr-2">
                      {String.fromCharCode(65 + i)}.
                    </span>
                    <span className="font-body text-base md:text-lg text-primary-foreground/90 group-hover:text-primary-foreground transition-colors">
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
                className="flex flex-col items-center gap-5"
              >
                <div className="flex items-center justify-center gap-3">
                  <div className="h-px w-14 bg-gold" />
                  <span className="font-display text-xs tracking-widest uppercase text-gold">The End</span>
                  <div className="h-px w-14 bg-gold" />
                </div>
                <button
                  onClick={onRestart}
                  className="font-display text-xs tracking-widest uppercase px-8 py-3 rounded-lg border border-gold text-gold hover:bg-gold hover:text-foreground transition-all duration-300 cursor-pointer"
                >
                  Begin Again
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
