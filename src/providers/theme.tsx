import React, { createContext, useReducer, useContext, Dispatch } from "react";
import {
  createMuiTheme,
  Theme,
  responsiveFontSizes,
  MuiThemeProvider
} from "@material-ui/core/styles";

const lightTheme: Theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: "light",
      text: {
        primary: "#30404d"
      },
      background: {
        default: "#f5f8fa"
      }
    }
  })
);

const darkTheme: Theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: "dark",
      text: {
        primary: "#f5f8fa"
      },
      background: {
        default: "#30404d"
      }
    }
  })
);

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
        theme: themeName === THEME_NAMES.DARK ? darkTheme : lightTheme
      };
    case THEME_ACTIONS.SET_LIGHT_MODE:
      return {
        themeName: THEME_NAMES.LIGHT,
        theme: lightTheme
      };
    case THEME_ACTIONS.SET_DARK_MODE:
      return {
        themeName: THEME_NAMES.DARK,
        theme: darkTheme
      };
    default:
      return state;
  }
};

export const AppThemeProvider: React.FunctionComponent = ({ children }) => {
  const [themeState, dispatchTheme] = useReducer(reducer, {
    themeName: THEME_NAMES.DARK,
    theme: darkTheme
  });
  return (
    <ThemeContext.Provider value={{ themeState, dispatchTheme }}>
      <MuiThemeProvider
        theme={
          themeState.themeName === THEME_NAMES.DARK ? darkTheme : lightTheme
        }
      >
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeValue = () => useContext(ThemeContext);
