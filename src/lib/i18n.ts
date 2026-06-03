import enCommon from "@/locales/en/common.json";
import esCommon from "@/locales/es/common.json";
import ptBRCommon from "@/locales/pt-BR/common.json";
import frCommon from "@/locales/fr/common.json";
import deCommon from "@/locales/de/common.json";
import itCommon from "@/locales/it/common.json";
import plCommon from "@/locales/pl/common.json";
import ruCommon from "@/locales/ru/common.json";
import trCommon from "@/locales/tr/common.json";
import jaCommon from "@/locales/ja/common.json";
import koCommon from "@/locales/ko/common.json";
import arCommon from "@/locales/ar/common.json";

export const LANGUAGES = [
  { code: "en", label: "English", native: "English" },
  { code: "es", label: "Spanish", native: "Español" },
  { code: "pt-BR", label: "Portuguese (Brazil)", native: "Português" },
  { code: "fr", label: "French", native: "Français" },
  { code: "de", label: "German", native: "Deutsch" },
  { code: "it", label: "Italian", native: "Italiano" },
  { code: "pl", label: "Polish", native: "Polski" },
  { code: "ru", label: "Russian", native: "Русский" },
  { code: "tr", label: "Turkish", native: "Türkçe" },
  { code: "ja", label: "Japanese", native: "日本語" },
  { code: "ko", label: "Korean", native: "한국어" },
  { code: "ar", label: "Arabic", native: "العربية" },
] as const;

export type LanguageCode = (typeof LANGUAGES)[number]["code"];
export const DEFAULT_LANGUAGE: LanguageCode = "en";

export type TranslationKey = keyof typeof enCommon;

// Source of truth: English. Other languages may have missing keys → fall back to en.
export const translations: Record<LanguageCode, Record<string, string>> = {
  en: enCommon,
  es: esCommon,
  "pt-BR": ptBRCommon,
  fr: frCommon,
  de: deCommon,
  it: itCommon,
  pl: plCommon,
  ru: ruCommon,
  tr: trCommon,
  ja: jaCommon,
  ko: koCommon,
  ar: arCommon,
};
