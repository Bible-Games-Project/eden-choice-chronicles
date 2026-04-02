import { useEffect, useCallback, useRef } from "react";
import { audioEngine } from "@/audio/AudioEngine";

/**
 * Plays ONE continuous audio track identified by trackId.
 * Does NOT change audio per scene — only per story or menu context.
 */
export function useSceneAudio(trackId: string, isActive: boolean, audioConfig?: any) {
  const hasInteracted = useRef(false);

  const enableAudio = useCallback(() => {
    if (!hasInteracted.current) {
      hasInteracted.current = true;
      audioEngine.resume();
      if (isActive && audioConfig) {
        audioEngine.play(trackId, audioConfig);
      }
    }
  }, [trackId, isActive, audioConfig]);

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
    if (isActive && hasInteracted.current && audioConfig) {
      audioEngine.play(trackId, audioConfig);
    }
    if (!isActive) {
      audioEngine.stop();
    }
  }, [trackId, isActive, audioConfig]);

  return { enableAudio };
}
