import {
  responsiveFontSizes,
  Theme,
  createMuiTheme
} from "@material-ui/core/styles";
import { CommonTheme, responsiveFontSizeOptions } from "./common-theme";
import { pink, deepOrange } from "@material-ui/core/colors";

const lightTheme: Theme = createMuiTheme({
  palette: {
    type: "light",
    primary: pink,
    secondary: deepOrange,

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
