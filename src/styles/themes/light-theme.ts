import {
  responsiveFontSizes,
  Theme,
  createMuiTheme
} from "@material-ui/core/styles";
import { CommonTheme, responsiveFontSizeOptions } from "./common-theme";

const lightTheme: Theme = createMuiTheme({
  palette: {
    type: "light",
    secondary: {
      main: "#48aff0"
    },
    text: {
      primary: "#30404d"
    },
    background: {
      paper: "#FFF",
      default: "#f5f8fa"
    }
  },
  ...CommonTheme
});

export default responsiveFontSizes(lightTheme, responsiveFontSizeOptions);
