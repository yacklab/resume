import React from "react";
import { Container, Typography, Box } from "@material-ui/core";

import { useTranslation } from "react-i18next";
import { CustomDivider } from "../../../components";
import useStyles from "../../../hooks/use-style";

const ProfileSection = React.forwardRef<HTMLElement>((props, ref) => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <Container ref={ref} maxWidth="sm">
      <Box marginY={5}>
        <Typography variant="h3" gutterBottom>
          {t("HOME.PROFILE.TITLE")}
        </Typography>
        <Typography paragraph variant="h6" gutterBottom>
          {t("HOME.PROFILE.SUBTITLE")}
        </Typography>
      </Box>
      <Typography paragraph variant="body2">
        {t("HOME.PROFILE.BODY")}
      </Typography>
      <CustomDivider />
      <Typography
        className={classes.subtitle}
        align="center"
        variant="h5"
        gutterBottom
      >
        {t("HOME.PROFILE.CONDITIONS_TITLE")}
      </Typography>
      <Typography variant="body2" gutterBottom>
        {t("HOME.PROFILE.CONDITIONS")}
      </Typography>
      <CustomDivider />
      <Typography
        className={classes.subtitle}
        align="center"
        variant="h5"
        gutterBottom
      >
        {t("HOME.PROFILE.DETAILS_TITLE")}
      </Typography>
      <Box>
        <Typography
          style={{ fontWeight: "bold" }}
          align="center"
          variant="body2"
          display="inline"
          gutterBottom
        >
          {t("HOME.PROFILE.NAME_HINT")}
        </Typography>
        <Typography
          align="center"
          variant="body2"
          display="inline"
          gutterBottom
        >
          {t("HOME.PROFILE.NAME")}
        </Typography>
      </Box>
      <Box>
        <Typography
          style={{ fontWeight: "bold" }}
          align="center"
          variant="body2"
          display="inline"
          gutterBottom
        >
          {t("HOME.PROFILE.AGE_HINT")}
        </Typography>
        <Typography
          align="center"
          variant="body2"
          display="inline"
          gutterBottom
        >
          {t("HOME.PROFILE.AGE")}
        </Typography>
      </Box>
      <Box>
        <Typography
          align="center"
          style={{ fontWeight: "bold" }}
          variant="body2"
          display="inline"
          gutterBottom
        >
          {t("HOME.PROFILE.LOCATION_HINT")}
        </Typography>
        <Typography
          align="center"
          variant="body2"
          display="inline"
          gutterBottom
        >
          {t("HOME.PROFILE.LOCATION")}
        </Typography>
      </Box>
      <Box>
        <Typography
          align="center"
          style={{ fontWeight: "bold" }}
          variant="body2"
          display="inline"
          gutterBottom
        >
          {t("HOME.PROFILE.WORKLOCATION_HINT")}
        </Typography>
        <Typography
          align="center"
          variant="body2"
          display="inline"
          gutterBottom
        >
          {t("HOME.PROFILE.WORKLOCATION")}
        </Typography>
      </Box>
      <Box>
        <Typography
          align="center"
          style={{ fontWeight: "bold" }}
          variant="body2"
          display="inline"
          gutterBottom
        >
          {t("HOME.PROFILE.POSITION_HINT")}
        </Typography>
        <Typography
          align="center"
          variant="body2"
          display="inline"
          gutterBottom
        >
          {t("HOME.PROFILE.POSITION")}
        </Typography>
      </Box>
      <CustomDivider color="secondary" />
    </Container>
  );
});

export default ProfileSection;
