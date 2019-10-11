import React, { createContext, useReducer, useContext, Dispatch } from "react";
import { Theme, MuiThemeProvider } from "@material-ui/core/styles";
import { DarkTheme, LightTheme } from "../styles/themes";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
const LOCALSTORAGE_THEME_KEY = "THEME";

interface ThemeState {
  themeName: string;
  theme: Theme;
}

export const THEME_NAMES = {
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

const ThemeMap = {
  [THEME_NAMES.DARK]: DarkTheme,
  [THEME_NAMES.LIGHT]: LightTheme
};

const saveTheme = (theme: string) => {
  if (window.localStorage) {
    window.localStorage.setItem(LOCALSTORAGE_THEME_KEY, theme);
  }
};
const getThemeName = () => {
  if (window.localStorage) {
    return (
      window.localStorage.getItem(LOCALSTORAGE_THEME_KEY) || THEME_NAMES.LIGHT
    );
  }
  return THEME_NAMES.LIGHT;
};

export const ThemeContext = createContext({} as ThemeContext);
const reducer = (state: ThemeState, action: any): ThemeState => {
  let themeName;
  switch (action.type) {
    case THEME_ACTIONS.SWITCH_MODE:
      themeName =
        state.themeName === THEME_NAMES.DARK
          ? THEME_NAMES.LIGHT
          : THEME_NAMES.DARK;
      saveTheme(themeName);
      return {
        themeName,
        theme: ThemeMap[themeName]
      };
    case THEME_ACTIONS.SET_LIGHT_MODE:
      themeName = THEME_NAMES.LIGHT;
      saveTheme(themeName);
      return {
        themeName,
        theme: ThemeMap[themeName]
      };
    case THEME_ACTIONS.SET_DARK_MODE:
      themeName = THEME_NAMES.DARK;
      saveTheme(themeName);
      return {
        themeName,
        theme: ThemeMap[themeName]
      };
    default:
      return state;
  }
};

export const AppThemeProvider: React.FunctionComponent = ({ children }) => {
  const [themeState, dispatchTheme] = useReducer(reducer, {
    themeName: getThemeName(),
    theme: ThemeMap[getThemeName()]
  });
  return (
    <ThemeContext.Provider value={{ themeState, dispatchTheme }}>
      <StyledThemeProvider theme={ThemeMap[themeState.themeName]}>
        <MuiThemeProvider theme={ThemeMap[themeState.themeName]}>
          {children}
        </MuiThemeProvider>
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeValue = () => useContext(ThemeContext);
