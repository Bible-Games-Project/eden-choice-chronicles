import { createContext, useCallback, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { LanguageCode, translations, DEFAULT_LANGUAGE, TranslationKey } from "@/lib/i18n";

interface SettingsContextValue {
  soundEnabled: boolean;
  setSoundEnabled: (v: boolean) => void;
  language: LanguageCode;
  setLanguage: (l: LanguageCode) => void;
  t: (key: TranslationKey) => string;
}

const STORAGE_KEY = "sacred-quest-settings-v1";

const SettingsContext = createContext<SettingsContextValue | null>(null);

interface PersistedSettings {
  soundEnabled?: boolean;
  // legacy field — migrated on load
  volume?: number;
  language?: LanguageCode;
}

const loadPersisted = (): PersistedSettings => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as PersistedSettings;
  } catch {
    return {};
  }
};

const loadSoundEnabled = (p: PersistedSettings): boolean => {
  if (typeof p.soundEnabled === "boolean") return p.soundEnabled;
  // migrate from old numeric volume field
  if (typeof p.volume === "number") return p.volume > 0;
  return true;
};

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const initial = loadPersisted();
  const [soundEnabled, setSoundEnabledState] = useState<boolean>(loadSoundEnabled(initial));
  const [language, setLanguageState] = useState<LanguageCode>(
    initial.language ?? DEFAULT_LANGUAGE,
  );

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ soundEnabled, language }));
    } catch {
      /* ignore */
    }
  }, [soundEnabled, language]);

  const setSoundEnabled = useCallback((v: boolean) => {
    setSoundEnabledState(v);
  }, []);

  const setLanguage = useCallback((l: LanguageCode) => {
    setLanguageState(l);
  }, []);

  const t = useCallback(
    (key: TranslationKey) => {
      const langDict = translations[language] ?? translations[DEFAULT_LANGUAGE];
      return langDict[key] ?? translations[DEFAULT_LANGUAGE][key] ?? key;
    },
    [language],
  );

  const value = useMemo(
    () => ({ soundEnabled, setSoundEnabled, language, setLanguage, t }),
    [soundEnabled, setSoundEnabled, language, setLanguage, t],
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
};

export const useSettings = () => {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used within SettingsProvider");
  return ctx;
};
