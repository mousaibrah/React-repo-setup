import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './en.json';
import translationAR from './ar.json';

export const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export interface Language {
  value: string;
  label: string;
  isRtl: boolean;
}

export const languages: Language[] = [
  { value: 'ar', label: 'العربية', isRtl: true },
  { value: 'en', label: 'English', isRtl: false },
];

export default i18n;
