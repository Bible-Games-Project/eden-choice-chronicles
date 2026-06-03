import { useEffect } from "react";
import { useSettings } from "@/hooks/useSettings";
import { playClick, setSfxVolume, SFX_SKIP_ATTR } from "@/lib/sfx";

/**
 * Bridges the global Volume setting to the SFX engine and installs a
 * single global click listener that plays the UI click sound for every
 * enabled <button>. Buttons that play their own feedback (correct/incorrect)
 * should set `data-sfx-skip="true"` to avoid double sounds.
 */
const SfxBridge = () => {
  const { volume } = useSettings();

  useEffect(() => {
    setSfxVolume(volume);
  }, [volume]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const btn = target.closest("button") as HTMLButtonElement | null;
      if (!btn) return;
      if (btn.disabled) return;
      if (btn.getAttribute(SFX_SKIP_ATTR) === "true") return;
      playClick();
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  return null;
};

export default SfxBridge;
