import {
  responsiveFontSizes,
  Theme,
  createMuiTheme
} from "@material-ui/core/styles";
import { CommonTheme, responsiveFontSizeOptions } from "./common-theme";

const lightTheme: Theme = createMuiTheme({
  palette: {
    type: "light",
    text: {
      primary: "#30404d"
    },
    background: {
      default: "#f5f8fa"
    }
  },
  ...CommonTheme
});

export default responsiveFontSizes(lightTheme, responsiveFontSizeOptions);
