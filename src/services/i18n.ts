
import en from "../../locales/en.json";
import es from "../../locales/es.json";
import va from "../../locales/va.json";

const locales = { en, es, va };

export type Locale = keyof typeof locales;

export function getLocaleFromUrl(url: URL): Locale {
  const lang = url.searchParams.get("lang");
  if (lang && lang in locales) return lang as Locale;
  return "en"; // default
}

export function t(key: string, locale: Locale = "en"): string {
  const dict = locales[locale] as Record<string, string>;
  return dict[key] || key;
}
