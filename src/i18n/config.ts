export const locales = ['ko', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ko';

export const localeNames = {
  ko: '한국어',
  en: 'English',
} as const;