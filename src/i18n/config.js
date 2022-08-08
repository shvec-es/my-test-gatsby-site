import i18next from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "uk",
    resources: {
      ru: {
        translations: require("../../locales/ru/translations.json"),
      },
      uk: {
        translations: require("../../locales/uk/translations.json"),
      },
    },
    ns: ["translations"],
    defaultNS: "translations",
    returnObjects: true,
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    react: {
      wait: true,
    },
  });

i18next.languages = ["ru", "uk"];

export default i18next;
