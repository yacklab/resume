import React, { createContext, useReducer, useContext, Dispatch } from "react";

interface ThemeState {
  themeMode: string;
}

export const MODES = {
  DARK: "DARK",
  LIGHT: "LIGHT"
};
export const THEME_ACTIONS = {
  SET_DARK_MODE: "SET_DARK_MODE",
  SET_LIGHT_MODE: "SET_LIGHT_MODE",
  SWITCH_MODE: "SWITCH_MODE"
};

interface ThemeContext {
  themeState: ThemeState;
  dispatchTheme: Dispatch<any>;
}
export const ThemeContext = createContext({} as ThemeContext);

const reducer = (state: ThemeState, action: any): ThemeState => {
  switch (action.type) {
    case THEME_ACTIONS.SWITCH_MODE:
      return {
        themeMode: state.themeMode === MODES.DARK ? MODES.LIGHT : MODES.DARK
      };
    case THEME_ACTIONS.SET_LIGHT_MODE:
      return {
        themeMode: MODES.LIGHT
      };
    case THEME_ACTIONS.SET_DARK_MODE:
      return {
        themeMode: MODES.DARK
      };
    default:
      return state;
  }
};

export const AppThemeProvider: React.FunctionComponent = ({ children }) => {
  const [themeState, dispatchTheme] = useReducer(reducer, {
    themeMode: MODES.DARK
  });
  return (
    <ThemeContext.Provider value={{ themeState, dispatchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeValue = () => useContext(ThemeContext);
