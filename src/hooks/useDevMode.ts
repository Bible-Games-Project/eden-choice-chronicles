import { useState, useCallback, createContext, useContext, createElement } from "react";
import type { ReactNode } from "react";

const DEV_MODE_KEY = "bible-journey-dev-mode";

interface DevModeContextValue {
  devMode: boolean;
  toggleDevMode: () => void;
  activateDevMode: () => void;
}

const DevModeContext = createContext<DevModeContextValue | null>(null);

export function DevModeProvider({ children }: { children: ReactNode }) {
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

  return createElement(DevModeContext.Provider, { value: { devMode, toggleDevMode, activateDevMode } }, children);
}

export function useDevMode(): DevModeContextValue {
  const ctx = useContext(DevModeContext);
  if (!ctx) throw new Error("useDevMode must be used within DevModeProvider");
  return ctx;
}
