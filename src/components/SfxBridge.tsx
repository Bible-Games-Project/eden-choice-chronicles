import { useEffect } from "react";
import { useSettings } from "@/hooks/useSettings";
import { playClick, setSfxEnabled, SFX_SKIP_ATTR } from "@/lib/sfx";

/**
 * Bridges the global soundEnabled setting to the SFX engine and installs a
 * single global click listener that plays the UI click sound for every
 * enabled <button>. Buttons that play their own feedback (correct/incorrect)
 * should set `data-sfx-skip="true"` to avoid double sounds.
 */
const SfxBridge = () => {
  const { soundEnabled } = useSettings();

  useEffect(() => {
    setSfxEnabled(soundEnabled);
  }, [soundEnabled]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const el = target.closest("button, [role='button']") as HTMLElement | null;
      if (!el) return;
      if (el instanceof HTMLButtonElement && el.disabled) return;
      if (el.getAttribute("aria-disabled") === "true") return;
      if (el.getAttribute(SFX_SKIP_ATTR) === "true") return;
      playClick();
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  return null;
};

export default SfxBridge;
