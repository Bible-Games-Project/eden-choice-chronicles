import { useEffect } from "react";
import { useSettings } from "@/hooks/useSettings";
import { hasMusicTracks, pauseMusic, resumeMusic, startMusic } from "@/lib/music";

/**
 * Bridges the global soundEnabled setting to the background music engine and
 * kicks off playback on the first user gesture (required by browser
 * autoplay policy). Mount once at the app root.
 */
const MusicBridge = () => {
  const { soundEnabled } = useSettings();

  useEffect(() => {
    if (soundEnabled) {
      resumeMusic();
    } else {
      pauseMusic();
    }
  }, [soundEnabled]);

  useEffect(() => {
    if (!hasMusicTracks()) return;
    const kick = () => startMusic();
    kick();
    const events: Array<keyof DocumentEventMap> = [
      "pointerdown",
      "keydown",
      "touchstart",
    ];
    events.forEach((ev) => document.addEventListener(ev, kick, { once: false, passive: true }));
    return () => {
      events.forEach((ev) => document.removeEventListener(ev, kick));
    };
  }, []);

  return null;
};

export default MusicBridge;
