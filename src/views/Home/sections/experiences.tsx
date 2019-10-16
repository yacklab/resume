import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { CustomDivider, Translator } from "../../../components";

const ExperiencesSection = React.forwardRef<HTMLElement>((props, ref) => {
  const { t } = useTranslation();
  return (
    <Container ref={ref} maxWidth="sm">
      <Typography variant="h3" gutterBottom>
        {t("HOME.EXPERIENCES.TITLE")}
      </Typography>
      <Box marginY={5}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <img
            height={80}
            src="/bowkr/bowkr.png"
            alt=""
            style={{ marginLeft: "-30px" }}
          />
          <Typography
            style={{ padding: "0px 0" }}
            variant="h6"
            display="block"
            gutterBottom
          >
            {t("HOME.EXPERIENCES.NAME")}
          </Typography>
        </div>
        <Typography
          style={{ padding: "0px 0" }}
          variant="caption"
          display="inline"
          gutterBottom
        >
          {t("HOME.EXPERIENCES.POSITION")}
        </Typography>
        <Typography
          style={{ padding: "0 0 10px 0" }}
          variant="caption"
          display="block"
          gutterBottom
        >
          {t("HOME.EXPERIENCES.DATE")}
        </Typography>
        <img src="/bowkr/bowkr_old.jpg" style={{ maxWidth: "100%" }} alt="" />
        <Typography paragraph component="div" variant="body1" gutterBottom>
          <Translator k="HOME.EXPERIENCES.BODY" />
        </Typography>
        <img
          src="/bowkr/facebook_share.jp2"
          style={{ maxWidth: "100%" }}
          alt=""
        />
        <Typography paragraph component="div" variant="body1" gutterBottom>
          <Translator k="HOME.EXPERIENCES.BODY_2" />
        </Typography>
      </Box>
      <CustomDivider color="secondary" />
    </Container>
  );
});

export default ExperiencesSection;
