import { useState, useCallback, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MainMenu from "@/components/MainMenu";
import StoryMap from "@/components/StoryMap";
import GameScene from "@/components/GameScene";
import SceneSelector from "@/components/SceneSelector";
import SpriteViewer from "@/components/SpriteViewer";
import { useGameProgress } from "@/hooks/useGameProgress";
import { useDevMode } from "@/hooks/useDevMode";
import { OLD_TESTAMENT_STORIES, ALL_NT_STORIES, StoryMeta } from "@/data/stories";
import { creationScenes, StoryChoice, StoryScene } from "@/data/stories/creation";
import { creationImages } from "@/data/stories/creationImages";
import { creationSprites, SpriteConfig } from "@/data/creationSprites";
import { creationEffects } from "@/data/creationEffects";
import { adamEveScenes } from "@/data/stories/adamEve";
import { adamEveImages } from "@/data/stories/adamEveImages";
import { adamEveSprites } from "@/data/stories/adamEveSprites";
import { adamEveEffects } from "@/data/stories/adamEveEffects";
import { cainAbelScenes } from "@/data/stories/cainAbel";
import { cainAbelImages } from "@/data/stories/cainAbelImages";
import { cainAbelSprites } from "@/data/stories/cainAbelSprites";
import { cainAbelEffects } from "@/data/stories/cainAbelEffects";
import { noahScenes } from "@/data/stories/noah";
import { noahImages } from "@/data/stories/noahImages";
import { noahSprites } from "@/data/stories/noahSprites";
import { noahEffects } from "@/data/stories/noahEffects";
import { babelScenes } from "@/data/stories/babel";
import { babelImages } from "@/data/stories/babelImages";
import { babelSprites } from "@/data/stories/babelSprites";
import { babelEffects } from "@/data/stories/babelEffects";
import { abrahamScenes } from "@/data/stories/abraham";
import { abrahamImages } from "@/data/stories/abrahamImages";
import { abrahamSprites } from "@/data/stories/abrahamSprites";
import { abrahamEffects } from "@/data/stories/abrahamEffects";
import { abrahamEgyptScenes } from "@/data/stories/abrahamEgypt";
import { abrahamEgyptImages } from "@/data/stories/abrahamEgyptImages";
import { abrahamEgyptSprites } from "@/data/stories/abrahamEgyptSprites";
import { abrahamEgyptEffects } from "@/data/stories/abrahamEgyptEffects";
import { abrahamLotScenes } from "@/data/stories/abrahamLot";
import { abrahamLotImages } from "@/data/stories/abrahamLotImages";
import { abrahamLotSprites } from "@/data/stories/abrahamLotSprites";
import { abrahamLotEffects } from "@/data/stories/abrahamLotEffects";
import { preloadImages } from "@/lib/preloadImages";

type Screen = "menu" | "map_ot" | "map_nt" | "playing" | "sprites";

const storySceneRegistry: Record<string, Record<string, StoryScene>> = {
  creation: creationScenes,
  "adam-eve": adamEveScenes,
  "cain-abel": cainAbelScenes,
  "noah-flood": noahScenes,
  "tower-babel": babelScenes,
  "call-abraham": abrahamScenes,
  "abraham-egypt": abrahamEgyptScenes,
  "abraham-lot": abrahamLotScenes,
};
const storyImageRegistry: Record<string, Record<string, string>> = {
  creation: creationImages,
  "adam-eve": adamEveImages,
  "cain-abel": cainAbelImages,
  "noah-flood": noahImages,
  "tower-babel": babelImages,
  "call-abraham": abrahamImages,
  "abraham-egypt": abrahamEgyptImages,
  "abraham-lot": abrahamLotImages,
};
const storySpriteRegistry: Record<string, Record<string, SpriteConfig>> = {
  creation: creationSprites,
  "adam-eve": adamEveSprites,
  "cain-abel": cainAbelSprites,
  "noah-flood": noahSprites,
  "tower-babel": babelSprites,
  "call-abraham": abrahamSprites,
  "abraham-egypt": abrahamEgyptSprites,
  "abraham-lot": abrahamLotSprites,
};
const storyEffectRegistry: Record<string, Record<string, string>> = {
  creation: creationEffects,
  "adam-eve": adamEveEffects,
  "cain-abel": cainAbelEffects,
  "noah-flood": noahEffects,
  "tower-babel": babelEffects,
  "call-abraham": abrahamEffects,
  "abraham-egypt": abrahamEgyptEffects,
  "abraham-lot": abrahamLotEffects,
};

const SCENE_TRANSITION_FADE_MS = 500;
const SCENE_TRANSITION_HOLD_MS = 100;
const SCENE_FEEDBACK_DELAY_MS = 150;

const Index = () => {
  const [screen, setScreen] = useState<Screen>("menu");
  const [currentStory, setCurrentStory] = useState<StoryMeta | null>(null);
  const [currentSceneId, setCurrentSceneId] = useState("start");
  const [stepCount, setStepCount] = useState(1);
  const [isSceneTransitioning, setIsSceneTransitioning] = useState(false);
  const [transitionOverlayOpacity, setTransitionOverlayOpacity] = useState(0);
  const [showSceneSelector, setShowSceneSelector] = useState(false);
  const progress = useGameProgress();
  const { devMode, toggleDevMode } = useDevMode();
  const transitionLock = useRef(false);
  const transitionTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTransitionTimers = useCallback(() => {
    transitionTimers.current.forEach((timer) => clearTimeout(timer));
    transitionTimers.current = [];
  }, []);

  useEffect(() => clearTransitionTimers, [clearTransitionTimers]);

  const wait = useCallback((ms: number) => {
    return new Promise<void>((resolve) => {
      const timer = setTimeout(() => {
        transitionTimers.current = transitionTimers.current.filter((t) => t !== timer);
        resolve();
      }, ms);
      transitionTimers.current.push(timer);
    });
  }, []);

  const getSceneAssetUrls = useCallback((storyId: string, sceneId: string) => {
    const storyImages = storyImageRegistry[storyId];
    const sceneSprites = storySpriteRegistry[storyId]?.[sceneId];
    return [storyImages?.[sceneId], sceneSprites?.left, sceneSprites?.right];
  }, []);

  const handleSelectStory = useCallback((story: StoryMeta) => {
    clearTransitionTimers();
    transitionLock.current = false;
    setIsSceneTransitioning(false);
    setTransitionOverlayOpacity(0);
    setCurrentStory(story);
    setCurrentSceneId("start");
    setStepCount(1);
    setScreen("playing");
  }, [clearTransitionTimers]);

  const handleRestart = useCallback(() => {
    if (!currentStory) return;
    clearTransitionTimers();
    transitionLock.current = false;
    setIsSceneTransitioning(false);
    setTransitionOverlayOpacity(0);
    setCurrentSceneId("start");
    setStepCount(1);
  }, [currentStory, clearTransitionTimers]);

  const handleJumpToScene = useCallback((sceneId: string) => {
    if (!currentStory || transitionLock.current) return;
    clearTransitionTimers();
    transitionLock.current = false;
    setIsSceneTransitioning(false);
    setTransitionOverlayOpacity(0);
    setCurrentSceneId(sceneId);
    setStepCount((s) => s + 1);
  }, [currentStory, clearTransitionTimers]);

  const handleChoice = useCallback((choice: StoryChoice) => {
    if (!currentStory || transitionLock.current || choice.nextScene === currentSceneId) return;
    transitionLock.current = true;
    setIsSceneTransitioning(true);

    void (async () => {
      await wait(SCENE_FEEDBACK_DELAY_MS);
      setTransitionOverlayOpacity(1);
      await wait(SCENE_TRANSITION_FADE_MS);
      await preloadImages(getSceneAssetUrls(currentStory.id, choice.nextScene));
      setCurrentSceneId(choice.nextScene);
      setStepCount((s) => s + 1);
      await wait(SCENE_TRANSITION_HOLD_MS);
      setTransitionOverlayOpacity(0);
      await wait(SCENE_TRANSITION_FADE_MS);
      setIsSceneTransitioning(false);
      transitionLock.current = false;
    })();
  }, [currentSceneId, currentStory, getSceneAssetUrls, wait]);

  const handleComplete = useCallback(() => {
    if (currentStory) progress.completeStory(currentStory.id);
    setScreen(currentStory?.section === "old_testament" ? "map_ot" : "map_nt");
    setCurrentStory(null);
  }, [currentStory, progress]);

  const fadeTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3, ease: "easeInOut" as const },
  };

  const renderScreen = () => {
    if (screen === "menu") {
      return (
        <motion.div key="menu" className="fixed inset-0" {...fadeTransition}>
          <MainMenu
            onSelectTestament={(t) => setScreen(t === "old" ? "map_ot" : "map_nt")}
            isNTUnlocked={progress.isNTUnlocked()}
            otProgress={progress.otProgress}
            ntProgress={progress.ntProgress}
            devMode={devMode}
            onToggleDevMode={toggleDevMode}
            onOpenSpriteViewer={() => setScreen("sprites")}
          />
        </motion.div>
      );
    }

    if (screen === "sprites") {
      return (
        <motion.div key="sprites" className="fixed inset-0" {...fadeTransition}>
          <SpriteViewer onBack={() => setScreen("menu")} />
        </motion.div>
      );
    }

    if (screen === "map_ot") {
      return (
        <motion.div key="map_ot" className="fixed inset-0" {...fadeTransition}>
          <StoryMap
            title="Old Testament"
            stories={OLD_TESTAMENT_STORIES}
            isStoryCompleted={progress.isStoryCompleted}
            isStoryUnlocked={(s, l) => progress.isStoryUnlocked(s, l)}
            onSelectStory={handleSelectStory}
            onBack={() => setScreen("menu")}
            devMode={devMode}
          />
        </motion.div>
      );
    }

    if (screen === "map_nt") {
      return (
        <motion.div key="map_nt" className="fixed inset-0" {...fadeTransition}>
          <StoryMap
            title="New Testament"
            stories={ALL_NT_STORIES}
            isStoryCompleted={progress.isStoryCompleted}
            isStoryUnlocked={(s, l) => progress.isStoryUnlocked(s, l)}
            onSelectStory={handleSelectStory}
            onBack={() => setScreen("menu")}
            devMode={devMode}
          />
        </motion.div>
      );
    }

    if (!currentStory) return null;
    const scenes = storySceneRegistry[currentStory.id];
    if (!scenes) return null;
    const scene = scenes[currentSceneId];
    if (!scene) return null;

    const images = storyImageRegistry[currentStory.id];
    const sprites = storySpriteRegistry[currentStory.id]?.[currentSceneId];
    const sceneEffect = storyEffectRegistry[currentStory.id]?.[currentSceneId] as any;

    return (
      <motion.div
        key="playing"
        className="fixed inset-0"
        style={{ backgroundColor: "hsl(var(--scene-base))" }}
        {...fadeTransition}
      >
        <GameScene
          title={scene.title}
          text={scene.text}
          choices={scene.choices}
          isFinal={scene.isFinal}
          onChoice={handleChoice}
          onComplete={handleComplete}
          stepCount={stepCount}
          backgroundImage={images?.[currentSceneId]}
          sprites={sprites}
          sceneEffect={sceneEffect}
          isTransitioning={isSceneTransitioning}
        />

        {/* Dev mode HUD */}
        {devMode && (
          <div className="absolute top-3 right-3 z-[65] flex gap-2">
            <button
              onClick={handleRestart}
              className="px-3 py-1.5 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-400 text-[10px] font-display tracking-wider uppercase cursor-pointer hover:bg-amber-500/30 transition-all"
            >
              Restart
            </button>
            <button
              onClick={() => setShowSceneSelector(true)}
              className="px-3 py-1.5 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-400 text-[10px] font-display tracking-wider uppercase cursor-pointer hover:bg-amber-500/30 transition-all"
            >
              Scenes
            </button>
          </div>
        )}

        {/* Scene selector modal */}
        {showSceneSelector && scenes && (
          <SceneSelector
            scenes={scenes}
            currentSceneId={currentSceneId}
            onSelectScene={handleJumpToScene}
            onClose={() => setShowSceneSelector(false)}
          />
        )}

        <div
          className={`absolute inset-0 z-[60] ${isSceneTransitioning || transitionOverlayOpacity > 0 ? "pointer-events-auto" : "pointer-events-none"}`}
          style={{
            opacity: transitionOverlayOpacity,
            transition: `opacity ${SCENE_TRANSITION_FADE_MS}ms ease-in-out`,
            backgroundColor: "hsl(var(--scene-base))",
          }}
        />
      </motion.div>
    );
  };

  return <AnimatePresence mode="wait">{renderScreen()}</AnimatePresence>;
};

export default Index;
