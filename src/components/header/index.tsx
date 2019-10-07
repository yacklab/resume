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
            Presentation
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
            Resume
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
            Projects
          </Link>
        </Box>
      </div>
      <Actions>
        <div>
          <span
            style={{ margin: "0 10px" }}
            className={
              languageState.language === LANGUAGES.FR ? "selected" : ""
            }
            onClick={() =>
              dispatchLanguage({ type: LANGUAGES_ACTIONS.SET_FRENCH })
            }
          >
            <img src="/fr.svg" height={12} alt="" />
          </span>
          <span
            className={
              languageState.language === LANGUAGES.EN ? "selected" : ""
            }
            onClick={() =>
              dispatchLanguage({ type: LANGUAGES_ACTIONS.SET_ENGLISH })
            }
          >
            <img src="/en.svg" height={12} alt="" />
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
