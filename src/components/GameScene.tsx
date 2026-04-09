import { motion, AnimatePresence } from "framer-motion";
import { StoryChoice, ChoiceSentiment } from "@/data/stories/creation";
import { useCallback, useState, useEffect, useMemo, useRef } from "react";

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

const SENTIMENT_COLORS: Record<ChoiceSentiment, string> = {
  positive: "rgba(74, 222, 128, 0.35)",
  neutral: "rgba(250, 204, 21, 0.30)",
  negative: "rgba(248, 113, 113, 0.30)",
};

const SENTIMENT_BORDER: Record<ChoiceSentiment, string> = {
  positive: "rgba(74, 222, 128, 0.7)",
  neutral: "rgba(250, 204, 21, 0.6)",
  negative: "rgba(248, 113, 113, 0.6)",
};

const GameScene = ({ text, choices, isFinal, onChoice, onComplete, backgroundImage, sprites }: GameSceneProps) => {
  const textLines = text.split("\n");
  const [showChoices, setShowChoices] = useState(false);
  const [feedbackText, setFeedbackText] = useState<string | null>(null);
  const [pendingChoice, setPendingChoice] = useState<StoryChoice | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [clickedSentiment, setClickedSentiment] = useState<ChoiceSentiment | null>(null);
  const [atmosphereShift, setAtmosphereShift] = useState(0); // -1 to 1 range, cumulative

  // Fixed 1.5s delay before buttons appear
  const choiceDelay = 1500;

  useEffect(() => {
    setShowChoices(false);
    setFeedbackText(null);
    setPendingChoice(null);
    setClickedIndex(null);
    setClickedSentiment(null);
    const timer = setTimeout(() => setShowChoices(true), choiceDelay);
    return () => clearTimeout(timer);
  }, [text, choiceDelay]);

  const handleChoice = useCallback((choice: StoryChoice, index: number) => {
    const sentiment = choice.sentiment || "neutral";
    setClickedIndex(index);
    setClickedSentiment(sentiment);

    // Update cumulative atmosphere
    const shift = sentiment === "positive" ? 0.12 : sentiment === "negative" ? -0.15 : 0;
    setAtmosphereShift(prev => Math.max(-1, Math.min(1, prev + shift)));

    // Button flash duration, then transition directly
    const flashDuration = 700;
    setTimeout(() => {
      setClickedIndex(null);
      setClickedSentiment(null);
      onChoice(choice);
    }, flashDuration);
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
      <div className={compact ? "mb-1" : "mb-3"}>
        {textLines.map((line, i) => (
          <p
            key={i}
            className={`font-body italic text-primary-foreground/90 drop-shadow-[0_3px_8px_rgba(0,0,0,0.85)] leading-snug ${
              compact ? "text-2xl" : "text-xl md:text-3xl"
            }`}
          >
            {line}
          </p>
        ))}
      </div>
    </motion.div>
  );


  const renderChoices = (compact = false) => (
    <>
      {showChoices && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {!isFinal ? (
            <div className={`flex flex-col ${compact ? "gap-1.5" : "gap-2.5"}`}>
              {choices.map((choice, i) => {
                const isClicked = clickedIndex === i;
                const flashBg = isClicked && clickedSentiment ? SENTIMENT_COLORS[clickedSentiment] : undefined;
                const flashBorder = isClicked && clickedSentiment ? SENTIMENT_BORDER[clickedSentiment] : undefined;
                return (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => handleChoice(choice, i)}
                    disabled={clickedIndex !== null}
                    whileTap={{ scale: 0.97 }}
                    className={`group w-full text-center rounded-lg border border-white/20 backdrop-blur-md bg-black/40 transition-all duration-300 cursor-pointer ${
                      compact ? "px-4 py-2" : "px-5 py-3"
                    } ${clickedIndex !== null && !isClicked ? "opacity-40" : ""}`}
                    style={{
                      backgroundColor: flashBg || undefined,
                      borderColor: flashBorder || undefined,
                    }}
                  >
                    <span
                      className={`font-body text-primary-foreground/90 group-hover:text-primary-foreground transition-colors ${
                        compact ? "text-sm" : "text-base md:text-lg"
                      }`}
                    >
                      {choice.text}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className={`flex flex-col items-center ${compact ? "gap-2" : "gap-4"}`}
            >
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-10 bg-gold/40" />
                <div className="w-1.5 h-1.5 rotate-45 bg-gold/60" />
                <div className="h-px w-10 bg-gold/40" />
              </div>
              <button
                onClick={handleComplete}
                className={`font-display text-xs tracking-[0.2em] uppercase rounded-lg border border-gold/40 text-gold hover:bg-gold/15 hover:border-gold transition-all duration-300 cursor-pointer ${
                  compact ? "px-5 py-2" : "px-8 py-3"
                }`}
              >
                Continue Journey
              </button>
            </motion.div>
          )}
        </motion.div>
      )}
    </>
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

        {/* Atmosphere overlay — cumulative sentiment shift */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-10"
          animate={{
            backgroundColor: atmosphereShift > 0
              ? `rgba(255, 220, 120, ${Math.min(atmosphereShift * 0.15, 0.15)})`
              : atmosphereShift < 0
              ? `rgba(30, 20, 50, ${Math.min(Math.abs(atmosphereShift) * 0.2, 0.2)})`
              : "rgba(0,0,0,0)",
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        {/* Flash overlay on choice */}
        <AnimatePresence>
          {clickedSentiment && (
            <motion.div
              key="flash"
              className="absolute inset-0 pointer-events-none z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                backgroundColor: clickedSentiment === "positive"
                  ? "rgba(180, 255, 180, 0.08)"
                  : clickedSentiment === "negative"
                  ? "rgba(80, 20, 20, 0.1)"
                  : "rgba(255, 240, 180, 0.06)",
              }}
            />
          )}
        </AnimatePresence>

        {/* ==================== MOBILE ==================== */}
        <div className="relative z-20 h-full md:hidden overflow-hidden">
          {/* Zone 1: Text + Buttons — 50vh */}
          <div className="absolute inset-x-0 top-0 w-full flex items-center justify-center overflow-hidden" style={{ height: '50vh' }}>
            <div className="w-full max-w-xs px-4 text-center flex flex-col items-center">
              {renderTextBlock(true)}
              <div style={{ marginTop: '0.75rem' }}>
                {renderChoices(true)}
              </div>
            </div>
          </div>
          {/* Zone 2: Sprite — 50vh, full width */}
          <div className="absolute inset-x-0 bottom-0 w-full overflow-hidden" style={{ height: '50vh' }}>
            {sprites?.left && !sprites?.right && (
              <motion.div
                key={`sprite-mobile-center-${text}`}
                className="absolute bottom-0 inset-x-0 pointer-events-none"
                style={{ height: '100%' }}
                {...spriteMotion}
              >
                <img
                  src={sprites.left}
                  alt="Character"
                  className="w-full h-full object-contain object-bottom"
                />
              </motion.div>
            )}
            {sprites?.left && sprites?.right && (
              <>
                <motion.div
                  key={`sprite-mobile-left-${text}`}
                  className="absolute bottom-0 left-0 pointer-events-none"
                  style={{ width: '50%', height: '100%' }}
                  {...spriteMotion}
                >
                  <img
                    src={sprites.left}
                    alt="Character Left"
                    className="w-full h-full object-contain object-bottom"
                  />
                </motion.div>
                <motion.div
                  key={`sprite-mobile-right-${text}`}
                  className="absolute bottom-0 right-0 pointer-events-none"
                  style={{ width: '50%', height: '100%' }}
                  {...spriteMotion}
                >
                  <img
                    src={sprites.right}
                    alt="Character Right"
                    className="w-full h-full object-contain object-bottom"
                    style={{ transform: 'scaleX(-1)' }}
                  />
                </motion.div>
              </>
            )}
          </div>
        </div>

        {/* ==================== TABLET ==================== */}
        <div className="relative z-20 h-full hidden md:block lg:hidden overflow-hidden">
          {/* Zone 1: Text + Buttons — 50vh */}
          <div className="absolute inset-x-0 top-0 w-full flex items-center justify-center overflow-hidden" style={{ height: '50vh' }}>
            <div className="w-full max-w-md px-6 text-center flex flex-col items-center">
              {renderTextBlock(true)}
              <div style={{ marginTop: '0.75rem' }}>
                {renderChoices(true)}
              </div>
            </div>
          </div>
          {/* Zone 2: Sprite — 50vh, full width */}
          <div className="absolute inset-x-0 bottom-0 w-full overflow-hidden" style={{ height: '50vh' }}>
            {sprites?.left && !sprites?.right && (
              <motion.div
                key={`sprite-tablet-center-${text}`}
                className="absolute bottom-0 inset-x-0 pointer-events-none"
                style={{ height: '100%' }}
                {...spriteMotion}
              >
                <img
                  src={sprites.left}
                  alt="Character"
                  className="w-full h-full object-contain object-bottom"
                />
              </motion.div>
            )}
            {sprites?.left && sprites?.right && (
              <>
                <motion.div
                  key={`sprite-tablet-left-${text}`}
                  className="absolute bottom-0 left-0 pointer-events-none"
                  style={{ width: '50%', height: '100%' }}
                  {...spriteMotion}
                >
                  <img
                    src={sprites.left}
                    alt="Character Left"
                    className="w-full h-full object-contain object-bottom"
                  />
                </motion.div>
                <motion.div
                  key={`sprite-tablet-right-${text}`}
                  className="absolute bottom-0 right-0 pointer-events-none"
                  style={{ width: '50%', height: '100%' }}
                  {...spriteMotion}
                >
                  <img
                    src={sprites.right}
                    alt="Character Right"
                    className="w-full h-full object-contain object-bottom"
                    style={{ transform: 'scaleX(-1)' }}
                  />
                </motion.div>
              </>
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
