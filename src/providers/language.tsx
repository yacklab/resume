import React, { useContext, useReducer, Dispatch, createContext } from "react";

interface LanguageState {
  language: languages;
}

type languages = "FR" | "EN";

export const LANGUAGES: Record<string, languages> = {
  FR: "FR",
  EN: "EN"
};

export const LANGUAGES_ACTIONS = {
  SET_ENGLISH: "SET_ENGLISH",
  SET_FRENCH: "SET_FRENCH"
};

interface LanguageContext {
  languageState: LanguageState;
  dispatchLanguage: Dispatch<any>;
}
export const LanguageContext = createContext({} as LanguageContext);

const reducer = (state: LanguageState, action: any): LanguageState => {
  switch (action.type) {
    case LANGUAGES_ACTIONS.SET_ENGLISH:
      return { language: LANGUAGES.EN };
    case LANGUAGES_ACTIONS.SET_FRENCH:
      return { language: LANGUAGES.FR };
    default:
      return state;
  }
};

export const AppLanguageProvider: React.FunctionComponent = ({ children }) => {
  const [languageState, dispatchLanguage] = useReducer(reducer, {
    language: LANGUAGES.FR
  });

  return (
    <LanguageContext.Provider
      value={{
        languageState,
        dispatchLanguage: (action: any) => {
          dispatchLanguage(action);
        }
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageValue = () => useContext(LanguageContext);
