import {
  responsiveFontSizes,
  Theme,
  createMuiTheme
} from "@material-ui/core/styles";
import { CommonTheme, responsiveFontSizeOptions } from "./common-theme";
import { amber, yellow } from "@material-ui/core/colors";

const darkTheme: Theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: yellow,
    secondary: amber,
    text: {
      primary: "#f5f8fa"
    },
    background: {
      paper: "#293742",
      default: "#171F24"
    }
  },
  ...CommonTheme
});

export default responsiveFontSizes(darkTheme, responsiveFontSizeOptions);
