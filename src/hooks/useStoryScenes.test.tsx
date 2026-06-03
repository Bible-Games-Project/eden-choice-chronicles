import { describe, it, expect, beforeAll } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { useStoryScenes } from "./useStoryScenes";
import { SettingsProvider } from "./useSettings";
import type { ReactNode } from "react";

// Wrapper to provide SettingsContext
const wrapper = ({ children }: { children: ReactNode }) => (
  <SettingsProvider>{children}</SettingsProvider>
);

describe("useStoryScenes", () => {
  it("should load scenes for creation story in English", async () => {
    const { result } = renderHook(() => useStoryScenes("creation"), {
      wrapper,
    });

    // Initially loading
    expect(result.current.loading).toBe(true);
    expect(result.current.scenes).toBeNull();
    expect(result.current.error).toBeNull();

    // Wait for scenes to load
    await waitFor(
      () => {
        expect(result.current.loading).toBe(false);
      },
      { timeout: 5000 }
    );

    // Verify scenes loaded
    expect(result.current.scenes).not.toBeNull();
    expect(result.current.error).toBeNull();

    // Verify structure
    const scenes = result.current.scenes!;
    expect(scenes.start).toBeDefined();
    expect(scenes.start.id).toBe("start");
    expect(scenes.start.title).toBeDefined();
    expect(scenes.start.text).toBeDefined();
    expect(scenes.start.choices).toBeInstanceOf(Array);
    expect(scenes.start.choices.length).toBeGreaterThan(0);

    // Verify first choice has all required fields
    const firstChoice = scenes.start.choices[0];
    expect(firstChoice.text).toBeDefined();
    expect(firstChoice.nextScene).toBeDefined();
    expect(firstChoice.isCorrect).toBeDefined();
    expect(typeof firstChoice.isCorrect).toBe("boolean");

    // Verify metadata fields are present (from TypeScript)
    expect(firstChoice.tag).toBeDefined();
    expect(firstChoice.sentiment).toBeDefined();

    console.log("✓ Scenes loaded successfully:", {
      sceneCount: Object.keys(scenes).length,
      startTitle: scenes.start.title,
      firstChoiceText: firstChoice.text,
      hasMetadata: !!firstChoice.tag,
    });
  });

  it("should merge text from JSON with metadata from TypeScript", async () => {
    const { result } = renderHook(() => useStoryScenes("creation"), {
      wrapper,
    });

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    const scenes = result.current.scenes!;
    const startScene = scenes.start;

    // Verify text fields come from JSON
    expect(startScene.title).toBe("Before All Things");
    expect(startScene.text).toContain("Nothing exists yet");

    // Verify metadata fields from TypeScript are preserved
    expect(startScene.choices[0].nextScene).toBeDefined();
    expect(startScene.choices[0].tag).toBeDefined();
    expect(startScene.choices[0].isCorrect).toBeDefined();
    expect(startScene.choices[0].sentiment).toBeDefined();
  });

  it("should handle invalid story ID gracefully", async () => {
    const { result } = renderHook(() => useStoryScenes("invalid-story-id"), {
      wrapper,
    });

    await waitFor(
      () => {
        expect(result.current.loading).toBe(false);
      },
      { timeout: 5000 }
    );

    // Should have an error
    expect(result.current.error).not.toBeNull();
    expect(result.current.scenes).toBeNull();
  });
});
