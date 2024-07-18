import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpBackend from 'i18next-http-backend'
import { LANGUAGE } from '../constants'

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .init({
    fallbackLng: LANGUAGE.en,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}.json',
    },
    debug: true,
  })

export default i18n
