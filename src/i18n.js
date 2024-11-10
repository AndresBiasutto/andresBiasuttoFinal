// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa tus traducciones
import translationEN from './locales/en.json';
import translationES from './locales/es.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    es: { translation: translationES },
  },
  lng: 'en', // Idioma predeterminado
  fallbackLng: 'en', // Idioma de respaldo si no hay traducción disponible
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
