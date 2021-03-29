import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from './locales/en.json';

export const DEFAULT_LOCALE = 'en';

const resources = {
  en: {
    translation: translationEn,
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

export const changeLanguage = (language) => {
  i18n.changeLanguage(language);
};

export default i18n;
