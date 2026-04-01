import { useEffect, useCallback, useRef } from "react";
import { audioEngine } from "@/audio/AudioEngine";

export function useSceneAudio(sceneKey: string, isActive: boolean, audioConfig?: any) {
  const hasInteracted = useRef(false);

  const enableAudio = useCallback(() => {
    if (!hasInteracted.current) {
      hasInteracted.current = true;
      audioEngine.resume();
      if (isActive) {
        audioEngine.playScene(sceneKey, audioConfig);
      }
    }
  }, [sceneKey, isActive, audioConfig]);

  useEffect(() => {
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
      audioEngine.playScene(sceneKey, audioConfig);
    }
    if (!isActive) {
      audioEngine.stop();
    }
  }, [sceneKey, isActive, audioConfig]);

  return { enableAudio };
}
