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

const HeaderDivider = styled.div`
  display: inline;
  border-right: 1px solid #38546d;
  padding: 0 5px;
`;

const Container = styled.div`
  width: 100%;
  z-index: 9;
  height: 64px;
  position: fixed;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: black;
  font-weight: 300;
  font-size: 1.1rem;
  span.selected {
    border-bottom: 1px solid black;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
  h5 {
    @media screen and (max-width: 600px) {
      display: none;
    }
    &:hover {
      background: linear-gradient(90deg, #ff9a8b 0%, #ff6a88 55%, #ff99ac 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  a {
    text-decoration: none;
    cursor: pointer;
    margin: 0 15px;
    color: black;
    font-weight: 300;
    &:hover {
      background: linear-gradient(90deg, #ff9a8b 0%, #ff6a88 55%, #ff99ac 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

const Header = () => {
  const { themeState, dispatchTheme } = useThemeValue();
  const { languageState, dispatchLanguage } = useLanguageValue();
  return (
    <Container>
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
        <HeaderDivider />
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
