import { useEffect, useState } from "react";
import { useSettings } from "@/hooks/useSettings";
import { getCached, subscribeTranslation } from "@/lib/translator";

/**
 * Translate a single English string into the active language.
 * Returns the English original until the translation is ready (then re-renders).
 */
export function useTranslated(text: string): string {
  const { language } = useSettings();
  const [value, setValue] = useState<string>(() => getCached(language, text) ?? text);

  useEffect(() => {
    const cached = getCached(language, text);
    if (cached !== null) {
      setValue(cached);
      return;
    }
    setValue(text);
    const unsub = subscribeTranslation(language, text, () => {
      const v = getCached(language, text);
      if (v !== null) setValue(v);
    });
    return unsub;
  }, [language, text]);

  return value;
}

/**
 * Translate a stable list of English strings.
 * Returns an array of strings; updates as each translation arrives.
 */
export function useTranslatedList(texts: string[]): string[] {
  const { language } = useSettings();
  const joined = texts.join("\u0001");
  const [values, setValues] = useState<string[]>(() =>
    texts.map((t) => getCached(language, t) ?? t),
  );

  useEffect(() => {
    setValues(texts.map((t) => getCached(language, t) ?? t));
    const unsubs = texts.map((t, i) => {
      const cached = getCached(language, t);
      if (cached !== null) return () => undefined;
      return subscribeTranslation(language, t, () => {
        const v = getCached(language, t);
        if (v === null) return;
        setValues((prev) => {
          if (prev[i] === v) return prev;
          const next = prev.slice();
          next[i] = v;
          return next;
        });
      });
    });
    return () => unsubs.forEach((u) => u());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language, joined]);

  return values;
}
