import i18next from 'i18next';
import esCommon from '../../public/locales/es/common.json';
import enCommon from '../../public/locales/en/common.json';
import esCV from '../../public/locales/es/cv.json';
import enCV from '../../public/locales/en/cv.json';
import esSections from '../../public/locales/es/sections.json';
import enSections from '../../public/locales/en/sections.json';

export const locales = ['es', 'en'] as const;
export const defaultLocale = 'es' as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
};

export const localeFlags: Record<Locale, string> = {
  es: '🇪🇸',
  en: '🇺🇸',
};

let i18nInitialized = false;

const resources = {
  es: {
    common: esCommon as Record<string, any>,
    cv: esCV as Record<string, any>,
    sections: esSections as Record<string, any>,
  },
  en: {
    common: enCommon as Record<string, any>,
    cv: enCV as Record<string, any>,
    sections: enSections as Record<string, any>,
  },
};

export async function initI18n(locale: Locale = defaultLocale): Promise<void> {
  if (i18nInitialized) {
    await i18next.changeLanguage(locale);
    return;
  }

  await i18next.init({
    lng: locale,
    fallbackLng: defaultLocale,
    supportedLngs: locales,
    ns: ['common', 'cv', 'sections'],
    defaultNS: 'common',
    resources,
    interpolation: {
      escapeValue: false,
    },
    returnNull: false,
    returnEmptyString: false,
  });

  i18nInitialized = true;
}

export function getT(locale: Locale) {
  return i18next.getFixedT(locale);
}

export { i18next };
