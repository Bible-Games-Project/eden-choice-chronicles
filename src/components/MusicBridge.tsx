import { useEffect, useRef } from "react";
import { useSettings } from "@/hooks/useSettings";
import { hasMusicTracks, pauseMusic, resumeMusic, setMusicEnabled, startMusic } from "@/lib/music";

/**
 * Bridges the global soundEnabled setting to the background music engine and
 * kicks off playback on the first user gesture (required by browser
 * autoplay policy). Mount once at the app root.
 */
const MusicBridge = () => {
  const { soundEnabled } = useSettings();
  const soundEnabledRef = useRef(soundEnabled);
  soundEnabledRef.current = soundEnabled;

  useEffect(() => {
    setMusicEnabled(soundEnabled);
    if (soundEnabled) {
      resumeMusic();
    } else {
      pauseMusic();
    }
  }, [soundEnabled]);

  useEffect(() => {
    if (!hasMusicTracks()) return;
    // Read the ref so the listener always sees the latest soundEnabled value
    // without needing to re-register on every toggle.
    const kick = () => { if (soundEnabledRef.current) startMusic(); };
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
