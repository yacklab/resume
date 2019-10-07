import {
  responsiveFontSizes,
  Theme,
  createMuiTheme
} from "@material-ui/core/styles";
import { CommonTheme, responsiveFontSizeOptions } from "./common-theme";

const darkTheme: Theme = createMuiTheme({
  palette: {
    type: "dark",
    text: {
      primary: "#f5f8fa"
    },
    background: {
      default: "#30404d"
    }
  },
  ...CommonTheme
});

export default responsiveFontSizes(darkTheme, responsiveFontSizeOptions);
