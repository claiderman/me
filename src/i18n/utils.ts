import {
  defaultLocale,
  getT,
  initI18n,
  type Locale,
  localeFlags,
  localeNames,
  locales,
} from "./config";

export { defaultLocale, type Locale, localeFlags, localeNames, locales };

export async function loadTranslations(locale: Locale) {
  await initI18n(locale);
  return getT(locale);
}

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];
  if (locales.includes(firstSegment as Locale)) {
    return firstSegment as Locale;
  }
  return defaultLocale;
}

export function getPathWithLocale(pathname: string, locale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  if (locales.includes(firstSegment as Locale)) {
    segments[0] = locale;
  } else {
    segments.unshift(locale);
  }

  return `/${segments.join("/")}`;
}

export function removeLocaleFromPath(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  if (locales.includes(firstSegment as Locale)) {
    segments.shift();
  }

  return `/${segments.join("/")}`;
}

export function getAlternateUrls(
  pathname: string,
  baseUrl: string,
): Record<Locale, string> {
  const cleanPath = removeLocaleFromPath(pathname);
  const alternates: Record<Locale, string> = {} as Record<Locale, string>;

  for (const locale of locales) {
    const localizedPath =
      locale === defaultLocale ? cleanPath : `/${locale}${cleanPath}`;
    alternates[locale] = `${baseUrl}${localizedPath}`;
  }

  return alternates;
}
