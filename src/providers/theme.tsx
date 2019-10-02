import React, { createContext, useReducer, useContext, Dispatch } from "react";
import { createMuiTheme, Theme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const lightTtheme: Theme = createMuiTheme({
  overrides: {
    MuiButton: {
      text: {
        background: "white",
        borderRadius: 3,
        border: 0,
        color: "black",
        height: 48,
        padding: "0 30px",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
      }
    }
  }
});

const darkTheme: Theme = createMuiTheme({
  overrides: {
    MuiButton: {
      text: {
        background: "black",
        borderRadius: 3,
        border: 0,
        color: "white",
        height: 48,
        padding: "0 30px",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
      }
    }
  }
});

interface ThemeState {
  themeName: string;
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
      return {
        themeName:
          state.themeName === THEME_NAMES.DARK
            ? THEME_NAMES.LIGHT
            : THEME_NAMES.DARK
      };
    case THEME_ACTIONS.SET_LIGHT_MODE:
      return {
        themeName: THEME_NAMES.LIGHT
      };
    case THEME_ACTIONS.SET_DARK_MODE:
      return {
        themeName: THEME_NAMES.DARK
      };
    default:
      return state;
  }
};

export const AppThemeProvider: React.FunctionComponent = ({ children }) => {
  const [themeState, dispatchTheme] = useReducer(reducer, {
    themeName: THEME_NAMES.DARK
  });
  return (
    <ThemeContext.Provider value={{ themeState, dispatchTheme }}>
      <ThemeProvider
        theme={
          themeState.themeName === THEME_NAMES.DARK ? darkTheme : lightTtheme
        }
      >
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeValue = () => useContext(ThemeContext);
