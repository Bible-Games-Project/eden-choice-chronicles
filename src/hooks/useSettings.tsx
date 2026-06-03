import { createContext, useCallback, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { LanguageCode, translations, DEFAULT_LANGUAGE, TranslationKey } from "@/lib/i18n";

interface SettingsContextValue {
  volume: number;
  setVolume: (v: number) => void;
  language: LanguageCode;
  setLanguage: (l: LanguageCode) => void;
  t: (key: TranslationKey) => string;
}

const STORAGE_KEY = "sacred-quest-settings-v1";

const SettingsContext = createContext<SettingsContextValue | null>(null);

interface PersistedSettings {
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

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const initial = loadPersisted();
  const [volume, setVolumeState] = useState<number>(
    typeof initial.volume === "number" ? initial.volume : 80,
  );
  const [language, setLanguageState] = useState<LanguageCode>(
    initial.language ?? DEFAULT_LANGUAGE,
  );

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ volume, language }));
    } catch {
      /* ignore */
    }
  }, [volume, language]);

  const setVolume = useCallback((v: number) => {
    setVolumeState(Math.max(0, Math.min(100, Math.round(v))));
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
    () => ({ volume, setVolume, language, setLanguage, t }),
    [volume, setVolume, language, setLanguage, t],
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
};

export const useSettings = () => {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used within SettingsProvider");
  return ctx;
};
