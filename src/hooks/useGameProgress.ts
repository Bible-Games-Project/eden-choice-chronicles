import { useState, useCallback } from "react";
import { OLD_TESTAMENT_STORIES, ALL_NT_STORIES, StoryMeta } from "@/data/stories";

const STORAGE_KEY = "bible-journey-progress";

interface GameProgress {
  completedStories: string[];
}

function loadProgress(): GameProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { completedStories: [] };
}

function saveProgress(p: GameProgress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

export function useGameProgress() {
  const [progress, setProgress] = useState<GameProgress>(loadProgress);

  const isStoryCompleted = useCallback(
    (storyId: string) => progress.completedStories.includes(storyId),
    [progress]
  );

  const isStoryUnlocked = useCallback(
    (story: StoryMeta, list: StoryMeta[]) => {
      if (story.number === 1) {
        // First story in OT is always unlocked
        if (story.section === "old_testament") return true;
        // First NT story unlocked only if all OT done
        const allOTDone = OLD_TESTAMENT_STORIES.every((s) =>
          progress.completedStories.includes(s.id)
        );
        return allOTDone;
      }
      // Unlock if previous story in same list is completed
      const prev = list.find((s) => s.number === story.number - 1);
      return prev ? progress.completedStories.includes(prev.id) : false;
    },
    [progress]
  );

  const isNTUnlocked = useCallback(() => {
    return OLD_TESTAMENT_STORIES.every((s) =>
      progress.completedStories.includes(s.id)
    );
  }, [progress]);

  const completeStory = useCallback((storyId: string) => {
    setProgress((prev) => {
      if (prev.completedStories.includes(storyId)) return prev;
      const next = {
        completedStories: [...prev.completedStories, storyId],
      };
      saveProgress(next);
      return next;
    });
  }, []);

  const resetProgress = useCallback(() => {
    const empty: GameProgress = { completedStories: [] };
    saveProgress(empty);
    setProgress(empty);
  }, []);

  const otProgress = {
    completed: OLD_TESTAMENT_STORIES.filter((s) =>
      progress.completedStories.includes(s.id)
    ).length,
    total: OLD_TESTAMENT_STORIES.length,
  };

  const ntProgress = {
    completed: ALL_NT_STORIES.filter((s) =>
      progress.completedStories.includes(s.id)
    ).length,
    total: ALL_NT_STORIES.length,
  };

  return {
    isStoryCompleted,
    isStoryUnlocked,
    isNTUnlocked,
    completeStory,
    resetProgress,
    otProgress,
    ntProgress,
  };
}
