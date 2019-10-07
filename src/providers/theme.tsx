import React, { createContext, useReducer, useContext, Dispatch } from "react";
import { Theme, MuiThemeProvider } from "@material-ui/core/styles";
import { DarkTheme, LightTheme } from "../styles/themes";

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
export const ThemeContext = createContext({} as ThemeContext);
const reducer = (state: ThemeState, action: any): ThemeState => {
  switch (action.type) {
    case THEME_ACTIONS.SWITCH_MODE:
      const themeName =
        state.themeName === THEME_NAMES.DARK
          ? THEME_NAMES.LIGHT
          : THEME_NAMES.DARK;
      return {
        themeName,
        theme: themeName === THEME_NAMES.DARK ? DarkTheme : LightTheme
      };
    case THEME_ACTIONS.SET_LIGHT_MODE:
      return {
        themeName: THEME_NAMES.LIGHT,
        theme: LightTheme
      };
    case THEME_ACTIONS.SET_DARK_MODE:
      return {
        themeName: THEME_NAMES.DARK,
        theme: DarkTheme
      };
    default:
      return state;
  }
};

export const AppThemeProvider: React.FunctionComponent = ({ children }) => {
  const [themeState, dispatchTheme] = useReducer(reducer, {
    themeName: THEME_NAMES.DARK,
    theme: DarkTheme
  });
  return (
    <ThemeContext.Provider value={{ themeState, dispatchTheme }}>
      <MuiThemeProvider
        theme={
          themeState.themeName === THEME_NAMES.DARK ? DarkTheme : LightTheme
        }
      >
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeValue = () => useContext(ThemeContext);
