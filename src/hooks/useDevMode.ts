import { useState, useCallback } from "react";

const DEV_MODE_KEY = "bible-journey-dev-mode";

export function useDevMode() {
  const [devMode, setDevMode] = useState(() => {
    try {
      return localStorage.getItem(DEV_MODE_KEY) === "true";
    } catch {
      return false;
    }
  });

  const toggleDevMode = useCallback(() => {
    setDevMode((prev) => {
      const next = !prev;
      localStorage.setItem(DEV_MODE_KEY, String(next));
      return next;
    });
  }, []);

  const activateDevMode = useCallback(() => {
    localStorage.setItem(DEV_MODE_KEY, "true");
    setDevMode(true);
  }, []);

  return { devMode, toggleDevMode, activateDevMode };
}
