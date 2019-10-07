import React from "react";
import styled from "styled-components";
import Link from "@material-ui/core/Link";
import {
  useLanguageValue,
  LANGUAGES,
  LANGUAGES_ACTIONS
} from "../../providers/language";
import {
  useThemeValue,
  THEME_ACTIONS,
  THEME_NAMES
} from "../../providers/theme";
import { Box, Typography } from "@material-ui/core";
import { RouterPaths } from "../../router";
import { RouterLink } from "../router-link";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FrenchFlag, EnglishFlag } from "../flags";

const Container = styled.div<{ bgColor: string }>`
  width: 100%;
  height: 64px;
  z-index: 9;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  background-color: ${props => props.bgColor};
  transition: all 200ms ease;
  transform: translateY(0);
`;

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100px;
`;

const Header: React.FunctionComponent<RouteComponentProps<any>> = ({
  location
}) => {
  const { themeState, dispatchTheme } = useThemeValue();
  const { languageState, dispatchLanguage } = useLanguageValue();
  const { t } = useTranslation();
  return (
    <Container bgColor={themeState.theme.palette.background.default}>
      <Typography variant="subtitle2" component="h1">
        Morgan Tomasini
      </Typography>
      <div>
        <Box component="span" marginX={0.5}>
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
        </Box>
        <Box component="span" marginX={0.5}>
          <Link
            underline="hover"
            color={
              location.pathname === RouterPaths.resume
                ? "inherit"
                : "textSecondary"
            }
            to={RouterPaths.resume}
            component={RouterLink}
          >
            {t("NAVBAR.RESUME")}
          </Link>
        </Box>
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
        </Box>
      </div>
      <Actions>
        <div>
          <span
            style={{ margin: "0 5px", cursor: "pointer" }}
            onClick={() =>
              dispatchLanguage({ type: LANGUAGES_ACTIONS.SET_FRENCH })
            }
          >
            <FrenchFlag active={languageState.language === LANGUAGES.FR} />
          </span>
          <span
            style={{ margin: "0 5px", cursor: "pointer" }}
            onClick={() =>
              dispatchLanguage({ type: LANGUAGES_ACTIONS.SET_ENGLISH })
            }
          >
            <EnglishFlag active={languageState.language === LANGUAGES.EN} />
          </span>
        </div>
        <span
          style={{ fontSize: 12 }}
          onClick={() => dispatchTheme({ type: THEME_ACTIONS.SWITCH_MODE })}
        >
          {" "}
          {themeState.themeName === THEME_NAMES.DARK ? (
            <WbSunnyIcon />
          ) : (
            <Brightness3Icon />
          )}
        </span>
      </Actions>
    </Container>
  );
};

export default withRouter(Header);
