import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from './locales/en.json';
import translationDe from './locales/de.json';

const LOCALE_ENG = 'en';
const LOCALE_DE = 'de';

export const LOCALES = [LOCALE_ENG, LOCALE_DE];

export const DEFAULT_LOCALE = LOCALE_ENG;

const resources = {
  en: {
    translation: translationEn,
  },
  de: {
    translation: translationDe,
  },
};

i18n.use(initReactI18next).init({
  lng: DEFAULT_LOCALE,
  fallbackLng: DEFAULT_LOCALE,
  debug:
    process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test',
  interpolation: {
    escapeValue: false,
  },
  resources,
});

export const $t = (key, params = {}) => {
  return i18n.t(key, params);
};

export default i18n;
