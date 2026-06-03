import { useEffect } from "react";
import { useSettings } from "@/hooks/useSettings";
import { hasMusicTracks, setMusicVolume, startMusic } from "@/lib/music";

/**
 * Bridges the global Volume setting to the background music engine and
 * kicks off playback on the first user gesture (required by browser
 * autoplay policy). Mount once at the app root.
 */
const MusicBridge = () => {
  const { volume } = useSettings();

  useEffect(() => {
    setMusicVolume(volume);
  }, [volume]);

  useEffect(() => {
    if (!hasMusicTracks()) return;
    const kick = () => startMusic();
    // Try immediately (works if a prior gesture already unlocked audio)
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
