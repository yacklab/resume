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
import { Divider } from "@material-ui/core";
import { RouterPaths } from "../../router";
import { RouterLink } from "../router-link";

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

const Header = () => {
  const { themeState, dispatchTheme } = useThemeValue();
  const { languageState, dispatchLanguage } = useLanguageValue();
  return (
    <Container bgColor={themeState.theme.palette.background.default}>
      <h5>Morgan Tomasini</h5>
      <div>
        <Link to="/" component={RouterLink}>
          Presentation
        </Link>
        <Link to="/" component={RouterLink}>
          Resume
        </Link>
        <Link to={RouterPaths.projects} component={RouterLink}>
          Projects
        </Link>
      </div>
      <div>
        <span
          style={{ margin: "0 2px" }}
          className={languageState.language === LANGUAGES.FR ? "selected" : ""}
          onClick={() =>
            dispatchLanguage({ type: LANGUAGES_ACTIONS.SET_FRENCH })
          }
        >
          <img src="/fr.svg" height={12} alt="" />
        </span>
        <span
          className={languageState.language === LANGUAGES.EN ? "selected" : ""}
          onClick={() =>
            dispatchLanguage({ type: LANGUAGES_ACTIONS.SET_ENGLISH })
          }
        >
          <img src="/en.svg" height={12} alt="" />
        </span>
        <Divider orientation="vertical" />
        <span
          style={{ fontSize: 12 }}
          onClick={() => dispatchTheme({ type: THEME_ACTIONS.SWITCH_MODE })}
        >
          {" "}
          {themeState.themeName === THEME_NAMES.DARK ? "☀️" : "🌙"}
        </span>
      </div>
    </Container>
  );
};

export default Header;
