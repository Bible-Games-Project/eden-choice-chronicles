import { supabase } from "@/integrations/supabase/client";
import type { LanguageCode } from "@/lib/i18n";

// Runtime translation with localStorage cache + batched AI calls.
// English is passthrough. Other languages are translated lazily.

const STORAGE_PREFIX = "tx:v1:";
const BATCH_WINDOW_MS = 90;
const MAX_BATCH = 40;

// In-memory cache: `${lang}|${text}` -> translated
const memCache = new Map<string, string>();

// Listeners awaiting a translation key.
const listeners = new Map<string, Set<() => void>>();

// Pending queue (per flush window).
let queue: Array<{ lang: LanguageCode; text: string }> = [];
let flushTimer: ReturnType<typeof setTimeout> | null = null;

const cacheKey = (lang: string, text: string) => `${lang}|${text}`;

const djb2 = (s: string) => {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h) ^ s.charCodeAt(i);
  return (h >>> 0).toString(36);
};

const storageKey = (lang: string, text: string) =>
  `${STORAGE_PREFIX}${lang}:${djb2(text)}`;

const readStorage = (lang: string, text: string): string | null => {
  try {
    return localStorage.getItem(storageKey(lang, text));
  } catch {
    return null;
  }
};

const writeStorage = (lang: string, text: string, value: string) => {
  try {
    localStorage.setItem(storageKey(lang, text), value);
  } catch {
    /* quota or disabled — ignore */
  }
};

/**
 * Synchronously read the cached translation. Returns null if not cached.
 * English passes through.
 */
export function getCached(lang: LanguageCode, text: string): string | null {
  if (!text) return text;
  if (lang === "en") return text;
  const k = cacheKey(lang, text);
  const mem = memCache.get(k);
  if (mem !== undefined) return mem;
  const stored = readStorage(lang, text);
  if (stored !== null) {
    memCache.set(k, stored);
    return stored;
  }
  return null;
}

/**
 * Subscribe to a translation result. Schedules a fetch if not cached.
 * Returns an unsubscribe function.
 */
export function subscribeTranslation(
  lang: LanguageCode,
  text: string,
  cb: () => void,
): () => void {
  if (lang === "en" || !text) {
    return () => undefined;
  }
  const k = cacheKey(lang, text);
  if (memCache.has(k) || readStorage(lang, text) !== null) {
    return () => undefined;
  }
  let set = listeners.get(k);
  if (!set) {
    set = new Set();
    listeners.set(k, set);
  }
  set.add(cb);
  enqueue(lang, text);
  return () => {
    const s = listeners.get(k);
    if (!s) return;
    s.delete(cb);
    if (s.size === 0) listeners.delete(k);
  };
}

function enqueue(lang: LanguageCode, text: string) {
  queue.push({ lang, text });
  if (flushTimer) return;
  flushTimer = setTimeout(flush, BATCH_WINDOW_MS);
}

async function flush() {
  flushTimer = null;
  const batch = queue;
  queue = [];

  // Group by language; dedupe by text.
  const byLang = new Map<LanguageCode, Set<string>>();
  for (const { lang, text } of batch) {
    const k = cacheKey(lang, text);
    if (memCache.has(k)) continue;
    if (readStorage(lang, text) !== null) continue;
    let set = byLang.get(lang);
    if (!set) {
      set = new Set();
      byLang.set(lang, set);
    }
    set.add(text);
  }

  await Promise.all(
    Array.from(byLang.entries()).map(async ([lang, set]) => {
      const all = Array.from(set);
      // Chunk into MAX_BATCH-sized requests.
      for (let i = 0; i < all.length; i += MAX_BATCH) {
        const slice = all.slice(i, i + MAX_BATCH);
        await translateChunk(lang, slice);
      }
    }),
  );
}

async function translateChunk(lang: LanguageCode, texts: string[]) {
  try {
    const { data, error } = await supabase.functions.invoke("translate", {
      body: { texts, targetLang: lang },
    });
    if (error || !data?.translations || !Array.isArray(data.translations)) {
      return;
    }
    const translations: string[] = data.translations;
    texts.forEach((t, idx) => {
      const tr = typeof translations[idx] === "string" ? translations[idx] : t;
      const k = cacheKey(lang, t);
      memCache.set(k, tr);
      writeStorage(lang, t, tr);
      const set = listeners.get(k);
      if (set) {
        set.forEach((cb) => cb());
        listeners.delete(k);
      }
    });
  } catch {
    /* network error — leave English fallback */
  }
}
