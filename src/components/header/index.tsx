import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "@material-ui/core/Link";

import { Theme } from "@material-ui/core";
// import { RouterPaths } from "../../router";
// import { RouterLink } from "../router-link";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Actions } from "./actions";
import { ShortTypedName } from "../";
import { useThemeValue, THEME_NAMES } from "../../providers/theme";
import { useStyle } from "../../hooks";
import CloudDownload from "@material-ui/icons/CloudDownload";
import { appStorage } from "../../firebase";
import { useLanguageValue } from "../../providers/language";

const Container = styled.div<{ theme: Theme }>`
  width: 100%;
  height: 64px;
  z-index: 9;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.palette.background.default};
  transition: all 200ms ease;
  transform: translateZ(0);
`;
const LinkContainer = styled.div<{ theme: Theme }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  line-height: 25px;
`;

const Header: React.FunctionComponent<RouteComponentProps<any>> = ({
  location
}) => {
  const { t } = useTranslation();
  const { themeState } = useThemeValue();
  const classes = useStyle();
  const [resumeUrl, setResumeUrl] = useState();
  const { languageState } = useLanguageValue();

  useEffect(() => {
    appStorage
      .ref(t("PATHS.RESUME"))
      .getDownloadURL()
      .then(function(url) {
        setResumeUrl(url);
      });
  }, [t, languageState]);

  return (
    <Container>
      <ShortTypedName />
      <LinkContainer>
        {/* <Box component="span" marginX={0.5}>
          <Link
            underline="hover"
            color={
              location.pathname === RouterPaths.home
                ? "inherit"
                : "textSecondary"
            }
            to={RouterPaths.home}
            component={RouterLink}
          >
            {t("NAVBAR.HOME")}
          </Link>
        </Box> */}
        <Link
          className={classes.headerLinks}
          color="inherit"
          href="https://github.com/yacklab/resume"
          underline="hover"
        >
          <img
            height={15}
            src={
              themeState.themeName === THEME_NAMES.DARK
                ? "ghmark_dark.png"
                : "/ghmark.png"
            }
            alt="github"
            style={{ marginRight: 5 }}
          />
          {t("NAVBAR.GITHUB")}
        </Link>
        {resumeUrl && (
          <Link
            color="inherit"
            className={classes.headerLinks}
            underline="hover"
            href={resumeUrl}
            target="_blank"
          >
            <CloudDownload
              fontSize="small"
              style={{ marginRight: 5, transform: "translateY(4px)" }}
            />
            {t("NAVBAR.RESUME")}
          </Link>
        )}
        {/* 
        <Box component="span" marginX={0.5}>
          <Link
            underline="hover"
            color={
              location.pathname === RouterPaths.projects
                ? "inherit"
                : "textSecondary"
            }
            to={RouterPaths.projects}
            component={RouterLink}
          >
            {t("NAVBAR.PROJECTS")}
          </Link>
        </Box> */}
      </LinkContainer>
      <Actions />
    </Container>
  );
};

export default withRouter(Header);
