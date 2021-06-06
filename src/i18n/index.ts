import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEn from './locales/en.json'
import translationSr from './locales/sr.json'

const LOCALE_EN = 'en'
const LOCALE_SR = 'sr'

export const LOCALES = [LOCALE_EN, LOCALE_SR]

export const DEFAULT_LOCALE = LOCALE_SR

const resources = {
  en: {
    translation: translationEn
  },
  sr: {
    translation: translationSr
  }
}

i18n.use(initReactI18next).init({
  lng: DEFAULT_LOCALE,
  fallbackLng: DEFAULT_LOCALE,
  debug: import.meta.env.DEV,
  interpolation: {
    escapeValue: false
  },
  resources
})

export const $t = (key: string, params = {}) => {
  return i18n.t(key, params)
}

export default i18n
