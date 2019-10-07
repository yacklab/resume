import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import { ResponsiveFontSizesOptions } from "@material-ui/core/styles/responsiveFontSizes";

export const CommonTheme: Partial<ThemeOptions> = {
  typography: {
    fontFamily: [
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  }
};

export const responsiveFontSizeOptions: ResponsiveFontSizesOptions = {
  factor: 6
};
