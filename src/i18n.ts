import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import TranslationEn from "./local/en.json";
import TranslationAr from "./local/ar.json";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: TranslationEn,
  },
  ar: {
    translation: TranslationAr,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    detection: {
      order: [
        "cookie",
        "htmlTag",
        "localStorage",
        "sessionStorage",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
