import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    subtitle: {
      margin: theme.spacing(3, 0)
    },
    headerLinks: {
      margin: theme.spacing(0, 1)
    },
    fileInput: {
      visibility: "hidden",
      position: "absolute",
      overflow: "hidden",
      whiteSpace: "nowrap",
      width: "1px",
      padding: 0,
      clip: "rect(0, 0, 0, 0)",
      height: "1px"
    }
  })
);

export default useStyles;
