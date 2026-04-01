import { useState, useCallback } from "react";
import MainMenu from "@/components/MainMenu";
import StoryMap from "@/components/StoryMap";
import GameScene from "@/components/GameScene";
import { useGameProgress } from "@/hooks/useGameProgress";
import { OLD_TESTAMENT_STORIES, ALL_NT_STORIES, StoryMeta } from "@/data/stories";
import { creationScenes, creationAudio, StoryChoice } from "@/data/stories/creation";
import { useSceneAudio } from "@/hooks/useSceneAudio";

type Screen = "menu" | "map_ot" | "map_nt" | "playing";

// Story scene registry - add new stories here
const storySceneRegistry: Record<string, Record<string, any>> = {
  creation: creationScenes,
};
const storyAudioRegistry: Record<string, Record<string, any>> = {
  creation: creationAudio,
};

const Index = () => {
  const [screen, setScreen] = useState<Screen>("menu");
  const [currentStory, setCurrentStory] = useState<StoryMeta | null>(null);
  const [currentSceneId, setCurrentSceneId] = useState("start");
  const [stepCount, setStepCount] = useState(1);
  const progress = useGameProgress();

  // Audio - use story-specific audio config
  const audioConfig = currentStory ? storyAudioRegistry[currentStory.id] : null;
  useSceneAudio(
    screen === "playing" ? `${currentStory?.id}_${currentSceneId}` : "",
    screen === "playing",
    audioConfig?.[currentSceneId]
  );

  const handleSelectStory = useCallback((story: StoryMeta) => {
    setCurrentStory(story);
    setCurrentSceneId("start");
    setStepCount(1);
    setScreen("playing");
  }, []);

  const handleChoice = useCallback((choice: StoryChoice) => {
    setCurrentSceneId(choice.nextScene);
    setStepCount((s) => s + 1);
  }, []);

  const handleComplete = useCallback(() => {
    if (currentStory) {
      progress.completeStory(currentStory.id);
    }
    setScreen(currentStory?.section === "old_testament" ? "map_ot" : "map_nt");
    setCurrentStory(null);
  }, [currentStory, progress]);

  // Render screens
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

  // Playing screen
  if (!currentStory) return null;
  const scenes = storySceneRegistry[currentStory.id];
  if (!scenes) return null;
  const scene = scenes[currentSceneId];
  if (!scene) return null;

  return (
    <GameScene
      title={scene.title}
      text={scene.text}
      choices={scene.choices}
      isFinal={scene.isFinal}
      onChoice={handleChoice}
      onComplete={handleComplete}
      stepCount={stepCount}
    />
  );
};

export default Index;
