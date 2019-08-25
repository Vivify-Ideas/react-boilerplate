export const SOURCE = '[Language]';

export const CHANGE_LOCALE = `${SOURCE} CHANGE_LOCALE`;

export function changeLocale(languageLocale) {
  return {
    type: CHANGE_LOCALE,
    locale: languageLocale
  };
}
