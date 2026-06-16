import { useState, useCallback } from "react";
import { OLD_TESTAMENT_STORIES, ALL_NT_STORIES, StoryMeta } from "@/data/stories";

const STORAGE_KEY = "bible-journey-progress";

interface GameProgress {
  completedStories: string[];
  bestStars: Record<string, number>;
}

function loadProgress(): GameProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        completedStories: parsed.completedStories ?? [],
        bestStars: parsed.bestStars ?? {},
      };
    }
  } catch {}
  return { completedStories: [], bestStars: {} };
}

function saveProgress(p: GameProgress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

export function useGameProgress(devMode: boolean = false) {
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
    [progress, devMode]
  );

  const isNTUnlocked = useCallback(() => {
    if (devMode) return true;
    return OLD_TESTAMENT_STORIES.every((s) =>
      progress.completedStories.includes(s.id)
    );
  }, [progress, devMode]);

  const completeStory = useCallback((storyId: string, stars?: number) => {
    setProgress((prev) => {
      const alreadyDone = prev.completedStories.includes(storyId);
      const prevBest = prev.bestStars[storyId] ?? 0;
      const newBest =
        typeof stars === "number" ? Math.max(prevBest, Math.max(0, Math.min(5, stars))) : prevBest;
      if (alreadyDone && newBest === prevBest) return prev;
      const next: GameProgress = {
        completedStories: alreadyDone
          ? prev.completedStories
          : [...prev.completedStories, storyId],
        bestStars: { ...prev.bestStars, [storyId]: newBest },
      };
      saveProgress(next);
      return next;
    });
  }, []);

  const getBestStars = useCallback(
    (storyId: string) => progress.bestStars[storyId] ?? 0,
    [progress]
  );

  const resetProgress = useCallback(() => {
    const empty: GameProgress = { completedStories: [], bestStars: {} };
    saveProgress(empty);
    setProgress(empty);
  }, []);

  const devSetCompleted = useCallback((storyId: string, completed: boolean) => {
    setProgress((prev) => {
      if (completed) {
        if (prev.completedStories.includes(storyId)) return prev;
        const next: GameProgress = { ...prev, completedStories: [...prev.completedStories, storyId] };
        saveProgress(next);
        return next;
      } else {
        const filtered = prev.completedStories.filter((id) => id !== storyId);
        if (filtered.length === prev.completedStories.length) return prev;
        const next: GameProgress = { ...prev, completedStories: filtered };
        saveProgress(next);
        return next;
      }
    });
  }, []);

  const devCompleteAll = useCallback((storyIds: string[]) => {
    setProgress((prev) => {
      const merged = Array.from(new Set([...prev.completedStories, ...storyIds]));
      const next: GameProgress = { ...prev, completedStories: merged };
      saveProgress(next);
      return next;
    });
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
    getBestStars,
    resetProgress,
    devSetCompleted,
    devCompleteAll,
    otProgress,
    ntProgress,
  };
}
