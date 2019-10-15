import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    subtitle: {
      margin: theme.spacing(3, 0)
    },
    headerLinks: {
      margin: theme.spacing(0, 1)
    }
  })
);

export default useStyles;
