import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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

const Container = styled.div<{ bgColor: string }>`
  width: 100%;
  z-index: 9;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  background-color: ${props => props.bgColor};
  transition: all 200ms ease;
`;

const Header = () => {
  const { themeState, dispatchTheme } = useThemeValue();
  const { languageState, dispatchLanguage } = useLanguageValue();
  return (
    <Container bgColor={themeState.theme.palette.background.default}>
      <h5>Morgan Tomasini</h5>
      <div>
        <Link to="/">Presentation</Link>
        <Link to="/">Resume</Link>
        <Link to="/">Projects</Link>
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
