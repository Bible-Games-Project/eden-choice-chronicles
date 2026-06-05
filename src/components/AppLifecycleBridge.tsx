import { useEffect } from "react";
import { App } from "@capacitor/app";
import { pauseMusic, resumeMusic } from "@/lib/music";

/**
 * Bridges Capacitor App lifecycle events to the audio engines.
 * Pauses music when app goes to background, resumes on foreground.
 * Mount once at the app root.
 */
const AppLifecycleBridge = () => {
  useEffect(() => {
    // Only set up listeners on native platforms (not web)
    if (typeof window === "undefined") return;

    const handleAppStateChange = App.addListener("appStateChange", ({ isActive }) => {
      console.log('[AppLifecycleBridge] App state changed:', isActive ? "foreground" : "background");
      if (isActive) {
        resumeMusic();
      } else {
        pauseMusic();
      }
    });

    return () => {
      handleAppStateChange.then((listener) => listener.remove());
    };
  }, []);

  return null;
};

export default AppLifecycleBridge;
