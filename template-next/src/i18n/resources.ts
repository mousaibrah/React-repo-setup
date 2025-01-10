import ar from '@messages/ar.json';
import en from '@messages/en.json';

export const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

export type Language = keyof typeof resources;
