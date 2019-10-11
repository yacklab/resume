import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import fr from "./fr";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en,
      fr
    },
    load: "languageOnly",
    fallbackLng: "fr",
    lowerCaseLng: true,
    debug: true
  });

export default i18n;
