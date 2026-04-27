import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MainMenu from "@/components/MainMenu";
import StoryMap from "@/components/StoryMap";
import GameScene from "@/components/GameScene";
import StoryEndScreen from "@/components/StoryEndScreen";
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
import { sodomScenes } from "@/data/stories/sodom";
import { sodomImages } from "@/data/stories/sodomImages";
import { sodomSprites } from "@/data/stories/sodomSprites";
import { sodomEffects } from "@/data/stories/sodomEffects";
import { sacrificeIsaacScenes } from "@/data/stories/sacrificeIsaac";
import { sacrificeIsaacImages } from "@/data/stories/sacrificeIsaacImages";
import { sacrificeIsaacSprites } from "@/data/stories/sacrificeIsaacSprites";
import { sacrificeIsaacEffects } from "@/data/stories/sacrificeIsaacEffects";
import { rebekahScenes } from "@/data/stories/rebekah";
import { rebekahImages } from "@/data/stories/rebekahImages";
import { rebekahSprites } from "@/data/stories/rebekahSprites";
import { rebekahEffects } from "@/data/stories/rebekahEffects";
import { jacobEsauScenes } from "@/data/stories/jacobEsau";
import { jacobEsauImages } from "@/data/stories/jacobEsauImages";
import { jacobEsauSprites } from "@/data/stories/jacobEsauSprites";
import { jacobEsauEffects } from "@/data/stories/jacobEsauEffects";
import { jacobsDreamScenes } from "@/data/stories/jacobsDream";
import { jacobsDreamImages } from "@/data/stories/jacobsDreamImages";
import { jacobsDreamSprites } from "@/data/stories/jacobsDreamSprites";
import { jacobsDreamEffects } from "@/data/stories/jacobsDreamEffects";
import { jacobWrestlesScenes } from "@/data/stories/jacobWrestles";
import { jacobWrestlesImages } from "@/data/stories/jacobWrestlesImages";
import { jacobWrestlesSprites } from "@/data/stories/jacobWrestlesSprites";
import { jacobWrestlesEffects } from "@/data/stories/jacobWrestlesEffects";
import { josephSoldScenes } from "@/data/stories/josephSold";
import { josephSoldImages } from "@/data/stories/josephSoldImages";
import { josephSoldSprites } from "@/data/stories/josephSoldSprites";
import { josephSoldEffects } from "@/data/stories/josephSoldEffects";
import { josephPotipharScenes } from "@/data/stories/josephPotiphar";
import { josephPotipharImages } from "@/data/stories/josephPotipharImages";
import { josephPotipharSprites } from "@/data/stories/josephPotipharSprites";
import { josephPotipharEffects } from "@/data/stories/josephPotipharEffects";
import { josephPrisonScenes } from "@/data/stories/josephPrison";
import { josephPrisonImages } from "@/data/stories/josephPrisonImages";
import { josephPrisonSprites } from "@/data/stories/josephPrisonSprites";
import { josephPrisonEffects } from "@/data/stories/josephPrisonEffects";
import { josephDreamsScenes } from "@/data/stories/josephDreams";
import { josephDreamsImages } from "@/data/stories/josephDreamsImages";
import { josephDreamsSprites } from "@/data/stories/josephDreamsSprites";
import { josephDreamsEffects } from "@/data/stories/josephDreamsEffects";
import { josephBrothersEgyptScenes } from "@/data/stories/josephBrothersEgypt";
import { josephBrothersEgyptImages } from "@/data/stories/josephBrothersEgyptImages";
import { josephBrothersEgyptSprites } from "@/data/stories/josephBrothersEgyptSprites";
import { josephBrothersEgyptEffects } from "@/data/stories/josephBrothersEgyptEffects";
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
  "sodom-gomorrah": sodomScenes,
  "sacrifice-isaac": sacrificeIsaacScenes,
  "rebekah-servant": rebekahScenes,
  "jacob-esau": jacobEsauScenes,
  "jacobs-dream": jacobsDreamScenes,
  "jacob-wrestles": jacobWrestlesScenes,
  "joseph-sold": josephSoldScenes,
  "joseph-potiphar": josephPotipharScenes,
  "joseph-prison": josephPrisonScenes,
  "joseph-dreams": josephDreamsScenes,
  "joseph-brothers-egypt": josephBrothersEgyptScenes,
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
  "sodom-gomorrah": sodomImages,
  "sacrifice-isaac": sacrificeIsaacImages,
  "rebekah-servant": rebekahImages,
  "jacob-esau": jacobEsauImages,
  "jacobs-dream": jacobsDreamImages,
  "jacob-wrestles": jacobWrestlesImages,
  "joseph-sold": josephSoldImages,
  "joseph-potiphar": josephPotipharImages,
  "joseph-prison": josephPrisonImages,
  "joseph-dreams": josephDreamsImages,
  "joseph-brothers-egypt": josephBrothersEgyptImages,
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
  "sodom-gomorrah": sodomSprites,
  "sacrifice-isaac": sacrificeIsaacSprites,
  "rebekah-servant": rebekahSprites,
  "jacob-esau": jacobEsauSprites,
  "jacobs-dream": jacobsDreamSprites,
  "jacob-wrestles": jacobWrestlesSprites,
  "joseph-sold": josephSoldSprites,
  "joseph-potiphar": josephPotipharSprites,
  "joseph-prison": josephPrisonSprites,
  "joseph-dreams": josephDreamsSprites,
  "joseph-brothers-egypt": josephBrothersEgyptSprites,
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
  "sodom-gomorrah": sodomEffects,
  "sacrifice-isaac": sacrificeIsaacEffects,
  "rebekah-servant": rebekahEffects,
  "jacob-esau": jacobEsauEffects,
  "jacobs-dream": jacobsDreamEffects,
  "jacob-wrestles": jacobWrestlesEffects,
  "joseph-sold": josephSoldEffects,
  "joseph-potiphar": josephPotipharEffects,
  "joseph-prison": josephPrisonEffects,
  "joseph-dreams": josephDreamsEffects,
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
  const [wrongChoices, setWrongChoices] = useState(0);
  const [totalChoices, setTotalChoices] = useState(0);
  const [showEndScreen, setShowEndScreen] = useState(false);
  const { devMode, toggleDevMode } = useDevMode();
  const progress = useGameProgress(devMode);
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
    setWrongChoices(0);
    setTotalChoices(0);
    setShowEndScreen(false);
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
    setWrongChoices(0);
    setTotalChoices(0);
    setShowEndScreen(false);
  }, [currentStory, clearTransitionTimers]);

  const handleJumpToScene = useCallback((sceneId: string) => {
    if (!currentStory || transitionLock.current) return;
    clearTransitionTimers();
    transitionLock.current = false;
    setIsSceneTransitioning(false);
    setTransitionOverlayOpacity(0);
    setCurrentSceneId(sceneId);
    setStepCount((s) => s + 1);
    setShowEndScreen(false);
  }, [currentStory, clearTransitionTimers]);

  const handleChoice = useCallback((choice: StoryChoice) => {
    if (!currentStory || transitionLock.current || choice.nextScene === currentSceneId) return;
    transitionLock.current = true;
    setIsSceneTransitioning(true);

    // Track correctness — sentiment "negative" = non-biblical
    setTotalChoices((c) => c + 1);
    if (choice.sentiment === "negative") setWrongChoices((w) => w + 1);

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

  const computedStars = useMemo(
    () => Math.max(0, 5 - wrongChoices),
    [wrongChoices]
  );

  const handleReachEnd = useCallback(() => {
    setShowEndScreen(true);
  }, []);

  const handleContinueAfterEnd = useCallback(() => {
    if (currentStory) progress.completeStory(currentStory.id, computedStars);
    setScreen(currentStory?.section === "old_testament" ? "map_ot" : "map_nt");
    setCurrentStory(null);
    setShowEndScreen(false);
  }, [currentStory, progress, computedStars]);

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
            getBestStars={progress.getBestStars}
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
            getBestStars={progress.getBestStars}
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
          onComplete={handleReachEnd}
          stepCount={stepCount}
          backgroundImage={images?.[currentSceneId]}
          sprites={sprites}
          sceneEffect={sceneEffect}
          isTransitioning={isSceneTransitioning}
        />

        {/* End of story screen overlay */}
        {showEndScreen && (
          <StoryEndScreen
            stars={computedStars}
            totalChoices={totalChoices}
            wrongChoices={wrongChoices}
            backgroundImage={images?.[currentSceneId]}
            onReplay={handleRestart}
            onContinue={handleContinueAfterEnd}
          />
        )}
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
