import { useEffect, useCallback, useRef } from "react";
import { audioEngine } from "@/audio/AudioEngine";

export function useSceneAudio(sceneId: string, isActive: boolean) {
  const hasInteracted = useRef(false);

  const enableAudio = useCallback(() => {
    if (!hasInteracted.current) {
      hasInteracted.current = true;
      audioEngine.resume();
      if (isActive) {
        audioEngine.playScene(sceneId);
      }
    }
  }, [sceneId, isActive]);

  useEffect(() => {
    // Listen for first user interaction to unlock audio context
    const handler = () => {
      enableAudio();
      window.removeEventListener("click", handler);
      window.removeEventListener("touchstart", handler);
      window.removeEventListener("keydown", handler);
    };
    window.addEventListener("click", handler);
    window.addEventListener("touchstart", handler);
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("click", handler);
      window.removeEventListener("touchstart", handler);
      window.removeEventListener("keydown", handler);
    };
  }, [enableAudio]);

  useEffect(() => {
    if (isActive && hasInteracted.current) {
      audioEngine.playScene(sceneId);
    }
    if (!isActive) {
      audioEngine.stop();
    }
  }, [sceneId, isActive]);

  return { enableAudio };
}
