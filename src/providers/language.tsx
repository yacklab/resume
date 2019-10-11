import React, { useContext, useReducer, Dispatch, createContext } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../translations";

interface LanguageState {
  language: Language;
}

type Language = "fr" | "en";

interface LanguageContext {
  languageState: LanguageState;
  dispatchLanguage: Dispatch<any>;
}

const languageWithoutCountry = (): Language => {
  console.log(i18n.language.substring(0, 2));
  return i18n.language.substring(0, 2) as Language;
};

const reducer = (state: LanguageState, action: any): LanguageState => {
  switch (action.type) {
    case LANGUAGES_ACTIONS.SET_ENGLISH:
      i18n.changeLanguage("en");
      return { language: LANGUAGES.EN };
    case LANGUAGES_ACTIONS.SET_FRENCH:
      i18n.changeLanguage("fr");
      return { language: LANGUAGES.FR };
    default:
      return state;
  }
};

const LANGUAGES: Record<string, Language> = {
  FR: "fr",
  EN: "en"
};

const LANGUAGES_ACTIONS = {
  SET_ENGLISH: "SET_ENGLISH",
  SET_FRENCH: "SET_FRENCH"
};

const LanguageContext = createContext({} as LanguageContext);

const AppLanguageProvider: React.FunctionComponent = ({ children }) => {
  const [languageState, dispatchLanguage] = useReducer(reducer, {
    language: languageWithoutCountry()
  });

  return (
    <LanguageContext.Provider
      value={{
        languageState,
        dispatchLanguage
      }}
    >
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </LanguageContext.Provider>
  );
};

const useLanguageValue = () => useContext(LanguageContext);

export {
  LANGUAGES,
  LANGUAGES_ACTIONS,
  LanguageContext,
  AppLanguageProvider,
  useLanguageValue
};
