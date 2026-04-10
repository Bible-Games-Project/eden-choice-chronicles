import { useState, useCallback, useEffect, useRef } from "react";
import MainMenu from "@/components/MainMenu";
import StoryMap from "@/components/StoryMap";
import GameScene from "@/components/GameScene";
import { useGameProgress } from "@/hooks/useGameProgress";
import { OLD_TESTAMENT_STORIES, ALL_NT_STORIES, StoryMeta } from "@/data/stories";
import { creationScenes, StoryChoice } from "@/data/stories/creation";
import { creationImages } from "@/data/stories/creationImages";
import { creationSprites, SpriteConfig } from "@/data/creationSprites";
import { creationEffects } from "@/data/creationEffects";
import { preloadImages } from "@/lib/preloadImages";

type Screen = "menu" | "map_ot" | "map_nt" | "playing";

const storySceneRegistry: Record<string, Record<string, any>> = {
  creation: creationScenes,
};
const storyImageRegistry: Record<string, Record<string, string>> = {
  creation: creationImages,
};
const storySpriteRegistry: Record<string, Record<string, SpriteConfig>> = {
  creation: creationSprites,
};
const storyEffectRegistry: Record<string, Record<string, string>> = {
  creation: creationEffects,
};

const SCENE_TRANSITION_FADE_MS = 500;
const SCENE_TRANSITION_HOLD_MS = 500;

const Index = () => {
  const [screen, setScreen] = useState<Screen>("menu");
  const [currentStory, setCurrentStory] = useState<StoryMeta | null>(null);
  const [currentSceneId, setCurrentSceneId] = useState("start");
  const [stepCount, setStepCount] = useState(1);
  const [isSceneTransitioning, setIsSceneTransitioning] = useState(false);
  const [transitionOverlayOpacity, setTransitionOverlayOpacity] = useState(0);
  const progress = useGameProgress();
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
        transitionTimers.current = transitionTimers.current.filter((activeTimer) => activeTimer !== timer);
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

  const handleChoice = useCallback((choice: StoryChoice) => {
    if (!currentStory || transitionLock.current || choice.nextScene === currentSceneId) return;

    transitionLock.current = true;
    setIsSceneTransitioning(true);
    setTransitionOverlayOpacity(1);

    void (async () => {
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
    if (currentStory) {
      progress.completeStory(currentStory.id);
    }
    setScreen(currentStory?.section === "old_testament" ? "map_ot" : "map_nt");
    setCurrentStory(null);
  }, [currentStory, progress]);

  if (screen === "menu") {
    return (
      <MainMenu
        onSelectTestament={(t) => setScreen(t === "old" ? "map_ot" : "map_nt")}
        isNTUnlocked={progress.isNTUnlocked()}
        otProgress={progress.otProgress}
        ntProgress={progress.ntProgress}
      />
    );
  }

  if (screen === "map_ot") {
    return (
      <StoryMap
        title="Old Testament"
        stories={OLD_TESTAMENT_STORIES}
        isStoryCompleted={progress.isStoryCompleted}
        isStoryUnlocked={(s, l) => progress.isStoryUnlocked(s, l)}
        onSelectStory={handleSelectStory}
        onBack={() => setScreen("menu")}
      />
    );
  }

  if (screen === "map_nt") {
    return (
      <StoryMap
        title="New Testament"
        stories={ALL_NT_STORIES}
        isStoryCompleted={progress.isStoryCompleted}
        isStoryUnlocked={(s, l) => progress.isStoryUnlocked(s, l)}
        onSelectStory={handleSelectStory}
        onBack={() => setScreen("menu")}
      />
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
    <div
      className="fixed inset-0"
      style={{ backgroundColor: "hsl(var(--scene-base))" }}
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

      <div
        className={`absolute inset-0 z-[60] ${isSceneTransitioning || transitionOverlayOpacity > 0 ? "pointer-events-auto" : "pointer-events-none"}`}
        style={{
          opacity: transitionOverlayOpacity,
          transition: `opacity ${SCENE_TRANSITION_FADE_MS}ms ease-in-out`,
          backgroundColor: "hsl(var(--scene-base))",
        }}
      />
    </div>
  );
};

export default Index;
