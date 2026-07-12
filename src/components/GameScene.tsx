import { motion } from "framer-motion";
import { StoryChoice } from "@/data/stories/creation";
import SceneEffects, { SceneEffect } from "@/components/SceneEffects";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSettings } from "@/hooks/useSettings";
import { playCorrect, playIncorrect } from "@/lib/sfx";
import { Home } from "lucide-react";

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
  sceneEffect?: SceneEffect;
  isTransitioning?: boolean;
  storyId?: string;
  onExitToMenu?: () => void;
  progress?: number;
}

const CORRECT_BG = "rgba(34, 197, 94, 0.85)";
const INCORRECT_BG = "rgba(239, 68, 68, 0.85)";
const CORRECT_BORDER = "rgba(74, 222, 128, 1)";
const INCORRECT_BORDER = "rgba(248, 113, 113, 1)";

// Stagger delays per button index (seconds)
const STAGGER_DELAYS = [2.0, 2.5, 3.0];
// Each button fades over 1s, so it's fully visible at delay + 1
const STAGGER_FADE_DURATION = 1;
const FINAL_BUTTON_DELAY = STAGGER_DELAYS[0] ?? 2.5;

const getStaggerDelay = (index: number) =>
  STAGGER_DELAYS[index] ?? STAGGER_DELAYS[STAGGER_DELAYS.length - 1];

const isChoiceCorrect = (choice: StoryChoice) => choice.isCorrect === true;
const getFeedbackColor = (isCorrect: boolean) => isCorrect ? CORRECT_BG : INCORRECT_BG;

const GameScene = ({ text, choices, isFinal, onChoice, onComplete, stepCount, backgroundImage, sprites, sceneEffect, isTransitioning = false, storyId, onExitToMenu, progress }: GameSceneProps) => {
  void storyId;
  const { t } = useSettings();
  const translatedText = text;
  const choiceTexts = useMemo(() => choices.map((c) => c.text), [choices]);
  const translatedChoiceTexts = choiceTexts;
  const continueLabel = t("continueJourney");
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [clickedIsCorrect, setClickedIsCorrect] = useState<boolean | null>(null);
  const choicesCount = choices.length;
  const [buttonsVisible, setButtonsVisible] = useState<boolean[]>(() => Array(choicesCount).fill(false));
  const [buttonsReady, setButtonsReady] = useState<boolean[]>(() => Array(choicesCount).fill(false));
  const [finalButtonVisible, setFinalButtonVisible] = useState(false);
  const [finalButtonReady, setFinalButtonReady] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [pendingIncorrect, setPendingIncorrect] = useState<{ choice: StoryChoice; correctText: string; feedback: string } | null>(null);

  // Single effect: reset + schedule reveal timers when the scene actually changes.
  // IMPORTANT: do NOT depend on `choices` reference — parent re-shuffles each render
  // which would otherwise reset state and cause buttons to re-fade (flicker).
  useEffect(() => {
    setClickedIndex(null);
    setClickedIsCorrect(null);
    setButtonsVisible(Array(choicesCount).fill(false));
    setButtonsReady(Array(choicesCount).fill(false));
    setFinalButtonVisible(false);
    setFinalButtonReady(false);
    setPendingIncorrect(null);

    if (isTransitioning) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    for (let i = 0; i < choicesCount; i++) {
      const delay = getStaggerDelay(i);
      timers.push(setTimeout(() => {
        setButtonsVisible((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, delay * 1000));
      timers.push(setTimeout(() => {
        setButtonsReady((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, (delay + STAGGER_FADE_DURATION) * 1000));
    }

    if (isFinal) {
      timers.push(setTimeout(() => setFinalButtonVisible(true), FINAL_BUTTON_DELAY * 1000));
      timers.push(setTimeout(() => setFinalButtonReady(true), (FINAL_BUTTON_DELAY + STAGGER_FADE_DURATION) * 1000));
    }

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stepCount, text, choicesCount, isFinal, isTransitioning]);

  const handleChoice = useCallback((choice: StoryChoice, index: number) => {
    if (clickedIndex !== null || isTransitioning) return;

    const nextIsCorrect = isChoiceCorrect(choice);
    const finalUIColor = getFeedbackColor(nextIsCorrect);

    setClickedIndex(index);
    setClickedIsCorrect(nextIsCorrect);
    if (nextIsCorrect) playCorrect(); else playIncorrect();

    console.log("[answer-feedback]", {
      clickedAnswerText: choice.text,
      isCorrect: nextIsCorrect,
      finalUIColor,
    });

    // For the first five stories, show an educational explanation after an
    // incorrect answer before advancing. The explanation is the correct choice's
    // feedback, which is already localized (biblical reference + brief context).
    const EDU_STORIES = new Set([
      "creation", "adam-eve", "cain-abel", "noah-flood", "tower-babel",
      "call-abraham", "abraham-egypt", "abraham-lot", "sodom-gomorrah", "sacrifice-isaac",
      "rebekah-servant", "jacob-esau", "jacobs-dream", "jacob-wrestles", "joseph-sold",
      "joseph-potiphar", "joseph-prison", "joseph-dreams", "joseph-brothers-egypt", "joseph-reconciles",
      "birth-moses", "moses-flees", "burning-bush", "moses-pharaoh", "plagues-egypt",
      "passover", "crossing-red-sea", "manna-desert", "water-rock", "ten-commandments",
      "golden-calf", "spies-canaan", "rebellion-people", "balaam-donkey", "death-moses",
      "fall-jericho", "sin-achan", "deborah-barak", "gideon", "samson",
      "ruth-naomi", "samuel-called", "saul-king", "david-goliath", "david-saul",
      "david-bathsheba", "solomon-wisdom", "elijah-baal", "elisha-naaman", "fall-jerusalem",
      "annunciation", "birth-jesus", "shepherds", "wise-men", "flight-egypt",
      "jesus-temple", "baptism-jesus", "temptation-desert", "calling-disciples", "wedding-cana",
      "healing-leper", "centurion-servant", "calming-storm", "demon-possessed", "woman-blood",
      "jairus-daughter", "feeding-5000", "walking-water", "blind-man", "raising-lazarus",
      "sermon-mount", "lords-prayer", "good-samaritan", "prodigal-son", "rich-man-lazarus",
      "parable-sower", "parable-talents", "lost-sheep", "pharisee-tax", "ten-virgins",
    ]);
    if (!nextIsCorrect && storyId && EDU_STORIES.has(storyId)) {
      const correctChoice = choices.find((c) => isChoiceCorrect(c));
      const feedback = correctChoice?.feedback?.trim();
      if (correctChoice && feedback) {
        setPendingIncorrect({ choice, correctText: correctChoice.text, feedback });
        return;
      }
    }

    onChoice(choice);
  }, [clickedIndex, isTransitioning, onChoice, storyId, choices]);

  const handleDismissFeedback = useCallback(() => {
    if (!pendingIncorrect) return;
    const c = pendingIncorrect.choice;
    setPendingIncorrect(null);
    onChoice(c);
  }, [pendingIncorrect, onChoice]);

  const handleComplete = useCallback(() => {
    onComplete();
  }, [onComplete]);

  // Join text with ". " for mobile/tablet (single flowing paragraph)
  const mobileText = translatedText.replace(/\n/g, " ");

  const renderTextBlock = (compact = false, joinLines = false) => (
    <div className="text-center">
      <div className={compact ? "mb-1" : "mb-3"}>
        {joinLines ? (
          <p
            className={`font-body italic text-primary-foreground/90 leading-snug ${
              compact
                ? "text-[1.35rem] drop-shadow-[0_3px_10px_rgba(0,0,0,0.95)]"
                : "text-xl md:text-3xl drop-shadow-[0_3px_8px_rgba(0,0,0,0.85)]"
            }`}
          >
            {mobileText}
          </p>
        ) : (
          translatedText.split("\n").map((line, i) => (
            <p
              key={i}
              className={`font-body italic text-primary-foreground/90 drop-shadow-[0_3px_8px_rgba(0,0,0,0.85)] leading-snug ${
                compact ? "text-2xl" : "text-xl md:text-3xl"
              }`}
            >
              {line}
            </p>
          ))
        )}
      </div>
    </div>
  );

  const renderChoices = (compact = false, staggered = false) => {
    if (!isFinal) {
      return (
        <div className={`flex flex-col ${compact ? "gap-1.5" : "gap-2.5"}`}>
          {choices.map((choice, i) => {
            const isClicked = clickedIndex === i;
            const flashBg = isClicked && clickedIsCorrect !== null
              ? getFeedbackColor(clickedIsCorrect)
              : undefined;
            const flashBorder = isClicked && clickedIsCorrect !== null
              ? (clickedIsCorrect ? CORRECT_BORDER : INCORRECT_BORDER)
              : undefined;
            const isVisible = buttonsVisible[i] ?? false;
            const isReady = buttonsReady[i] ?? false;

            return (
              <motion.button
                key={`${stepCount}-${i}`}
                data-sfx-skip="true"
                initial={false}
                animate={{ opacity: clickedIndex !== null && !isClicked ? 0.4 : isVisible ? 1 : 0 }}
                transition={{ duration: clickedIndex !== null ? 0.3 : STAGGER_FADE_DURATION, ease: "easeInOut" }}
                onClick={() => handleChoice(choice, i)}
                disabled={clickedIndex !== null || !isReady || isTransitioning}
                className={`group w-full text-center rounded-lg border ${
                  isReady && !isTransitioning ? "cursor-pointer" : "cursor-default"
                } ${
                  compact ? "px-4 py-2" : "px-5 py-3"
                }`}
                style={{
                  backgroundColor: flashBg || "rgba(0,0,0,0.75)",
                  borderColor: flashBorder || "rgba(255,255,255,0.2)",
                  pointerEvents: isReady && !isTransitioning ? "auto" : "none",
                  transition: isClicked ? "none" : "background-color 300ms, border-color 300ms",
                }}
              >
                <span
                  className={`font-body text-primary-foreground/90 group-hover:text-primary-foreground transition-colors ${
                    compact ? "text-sm" : "text-base md:text-lg"
                  }`}
                >
                  {translatedChoiceTexts[i] ?? choice.text}
                </span>
              </motion.button>
            );
          })}
        </div>
      );
    }

    // Final scene button
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: finalButtonVisible ? 1 : 0 }}
        transition={{ duration: STAGGER_FADE_DURATION, ease: "easeInOut" }}
        className={`flex flex-col items-center ${compact ? "gap-2" : "gap-4"}`}
        style={{ pointerEvents: finalButtonReady && !isTransitioning ? "auto" : "none" }}
      >
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-10 bg-gold/40" />
          <div className="w-1.5 h-1.5 rotate-45 bg-gold/60" />
          <div className="h-px w-10 bg-gold/40" />
        </div>
        <button
          onClick={handleComplete}
          disabled={isTransitioning || !finalButtonReady}
          className={`font-display text-xs tracking-[0.2em] uppercase rounded-lg border border-gold/40 bg-black/50 text-gold hover:bg-black/60 hover:border-gold transition-all duration-300 ${
            finalButtonReady && !isTransitioning ? "cursor-pointer" : "cursor-default opacity-60"
          } ${
            compact ? "px-5 py-2" : "px-8 py-3"
          }`}
        >
          {continueLabel}
        </button>
      </motion.div>
    );
  };

  // Sprite breathing/sway animation for mobile/tablet
  const spriteMotionMobile = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: [0, -3, 0, -2, 0],
    },
    transition: {
      opacity: { duration: 0.5, ease: "easeOut" as const },
      y: {
        duration: 4,
        ease: "easeInOut" as const,
        repeat: Infinity,
        repeatType: "loop" as const,
        delay: 0,
      },
    },
  };

  // Desktop sprite: fade + breathing sway
  const spriteMotionDesktop = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      y: [0, -4, 0, -2, 0],
    },
    transition: {
      opacity: { duration: 0.8, ease: "easeOut" as const },
      y: {
        duration: 5,
        ease: "easeInOut" as const,
        repeat: Infinity,
        repeatType: "loop" as const,
        delay: 0,
      },
    },
  };

  return (
      <div
        className="fixed inset-0 overflow-hidden"
        style={{ backgroundColor: "hsl(var(--scene-base))" }}
      >
        {/* Background */}
        {backgroundImage && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )}
        <div className="absolute inset-0 bg-foreground/55" />

        {/* Environmental effects */}
        {sceneEffect && <SceneEffects effect={sceneEffect} />}

        {/* Subtle progress indicator (bottom) */}
        {typeof progress === "number" && (
          <div
            className="absolute left-0 right-0 z-30 pointer-events-none"
            style={{ bottom: 'env(safe-area-inset-bottom, 0px)' }}
            aria-hidden="true"
          >
            <div className="h-[6px] w-full bg-white/10">
              <div
                className="h-full bg-white/40 transition-[width] duration-700 ease-out"
                style={{ width: `${Math.max(0, Math.min(1, progress)) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Home button (top-left) */}
        {onExitToMenu && (
          <button
            type="button"
            onClick={() => setShowExitConfirm(true)}
            aria-label={t("returnHome")}
            className="absolute z-40 rounded-full p-2 bg-black/35 border border-white/15 text-white/70 hover:text-white hover:bg-black/55 transition-colors backdrop-blur-sm"
            style={{
              top: 'calc(env(safe-area-inset-top, 0px) + 12px)',
              left: 'calc(env(safe-area-inset-left, 0px) + 12px)',
            }}
          >
            <Home size={18} strokeWidth={1.75} />
          </button>
        )}

        {/* Exit confirm dialog */}
        {showExitConfirm && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-6">
            <div className="w-full max-w-xs rounded-xl border border-white/15 bg-black/80 p-5 text-center">
              <h3 className="font-display text-base text-white/95 mb-1.5">{t("returnHomeTitle")}</h3>
              <p className="font-body text-xs text-white/65 mb-4">{t("returnHomeBody")}</p>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setShowExitConfirm(false)}
                  className="w-full rounded-lg border border-white/25 bg-white/5 px-4 py-2 text-sm font-body text-white/90 hover:bg-white/10 transition-colors"
                >
                  {t("continueStory")}
                </button>
                <button
                  onClick={() => { setShowExitConfirm(false); onExitToMenu?.(); }}
                  className="w-full rounded-lg border border-white/15 px-4 py-2 text-sm font-body text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {t("returnHome")}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Educational feedback overlay for incorrect answers (Creation story) */}
        {pendingIncorrect && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-6">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full max-w-sm rounded-xl border border-gold/40 bg-black/85 p-5 text-center"
            >
              <div className="mb-4 text-center">
                <p className="font-body text-lg md:text-xl text-primary-foreground font-semibold mb-2">
                  {t("notQuite")}
                </p>
                <p className="font-body text-sm md:text-base text-primary-foreground/90 leading-relaxed mb-2">
                  {t("correctBiblicalAnswerWas")} "{pendingIncorrect.correctText}"
                </p>
                <p className="font-body text-sm md:text-base text-primary-foreground/90 leading-relaxed">
                  {pendingIncorrect.feedback}
                </p>
              </div>
              <button
                onClick={handleDismissFeedback}
                className="w-full rounded-lg border border-gold/50 bg-black/50 px-4 py-2 text-sm font-display tracking-[0.18em] uppercase text-gold hover:bg-gold/15 hover:border-gold transition-colors cursor-pointer"
              >
                {t("continue")}
              </button>
            </motion.div>
          </div>
        )}




        {/* ==================== MOBILE ==================== */}
        <div className="relative z-20 h-full md:hidden overflow-hidden">
          {/* Zone 1: Text + Buttons — 45vh */}
          <div className="absolute inset-x-0 top-0 w-full flex items-center justify-center overflow-hidden" style={{ height: '45vh', paddingTop: 'env(safe-area-inset-top)' }}>
            <div className="w-full max-w-xs px-4 text-center flex flex-col items-center">
              {renderTextBlock(true, true)}
              <div style={{ marginTop: '0.75rem' }}>
                {renderChoices(true, true)}
              </div>
            </div>
          </div>
          {/* Zone 2: Sprite — 55vh anchored to bottom, overflow hidden */}
          <div className="absolute inset-x-0 bottom-0 w-full overflow-hidden" style={{ height: '55vh', paddingBottom: 'env(safe-area-inset-bottom)' }}>
            {sprites?.left && !sprites?.right && (
              <motion.div
                key={`sprite-mobile-center-${text}`}
                className="absolute bottom-0 inset-x-0 pointer-events-none"
                style={{ height: '100%' }}
                {...spriteMotionMobile}
              >
                <img
                  src={sprites.left}
                  alt="Character"
                  className="w-full h-full object-contain object-bottom"
                />
              </motion.div>
            )}
            {sprites?.left && sprites?.right && (
              <div className="absolute bottom-0 inset-x-0 h-full flex">
                <motion.div
                  key={`sprite-mobile-left-${text}`}
                  className="relative w-1/2 h-full pointer-events-none flex items-end justify-center"
                  {...spriteMotionMobile}
                >
                  <img
                    src={sprites.left}
                    alt="Character Left"
                    className="h-full w-auto object-contain object-bottom"
                  />
                </motion.div>
                <motion.div
                  key={`sprite-mobile-right-${text}`}
                  className="relative w-1/2 h-full pointer-events-none flex items-end justify-center"
                  {...spriteMotionMobile}
                >
                  <img
                    src={sprites.right}
                    alt="Character Right"
                    className="h-full w-auto object-contain object-bottom"
                    style={{ transform: 'scaleX(-1)' }}
                  />
                </motion.div>
              </div>
            )}
          </div>
        </div>

        {/* ==================== TABLET ==================== */}
        <div className="relative z-20 h-full hidden md:block lg:hidden overflow-hidden">
          {/* Zone 1: Text + Buttons — 45vh */}
          <div className="absolute inset-x-0 top-0 w-full flex items-center justify-center overflow-hidden" style={{ height: '45vh', paddingTop: 'env(safe-area-inset-top)' }}>
            <div className="w-full max-w-md px-6 text-center flex flex-col items-center">
              {renderTextBlock(true, true)}
              <div style={{ marginTop: '0.75rem' }}>
                {renderChoices(true, true)}
              </div>
            </div>
          </div>
          {/* Zone 2: Sprite — 55vh anchored to bottom */}
          <div className="absolute inset-x-0 bottom-0 w-full overflow-hidden" style={{ height: '55vh', paddingBottom: 'env(safe-area-inset-bottom)' }}>
            {sprites?.left && !sprites?.right && (
              <motion.div
                key={`sprite-tablet-center-${text}`}
                className="absolute bottom-0 inset-x-0 pointer-events-none"
                style={{ height: '100%' }}
                {...spriteMotionMobile}
              >
                <img
                  src={sprites.left}
                  alt="Character"
                  className="w-full h-full object-contain object-bottom"
                />
              </motion.div>
            )}
            {sprites?.left && sprites?.right && (
              <div className="absolute bottom-0 inset-x-0 h-full flex">
                <motion.div
                  key={`sprite-tablet-left-${text}`}
                  className="relative w-1/2 h-full pointer-events-none flex items-end justify-center"
                  {...spriteMotionMobile}
                >
                  <img
                    src={sprites.left}
                    alt="Character Left"
                    className="h-full w-auto object-contain object-bottom"
                  />
                </motion.div>
                <motion.div
                  key={`sprite-tablet-right-${text}`}
                  className="relative w-1/2 h-full pointer-events-none flex items-end justify-center"
                  {...spriteMotionMobile}
                >
                  <img
                    src={sprites.right}
                    alt="Character Right"
                    className="h-full w-auto object-contain object-bottom"
                    style={{ transform: 'scaleX(-1)' }}
                  />
                </motion.div>
              </div>
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
                {...spriteMotionDesktop}
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
                {...spriteMotionDesktop}
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

      </div>
  );
};

export default GameScene;