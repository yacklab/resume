import React from "react";
import styled from "styled-components";
import {
  useLanguageValue,
  LANGUAGES_ACTIONS,
  LANGUAGES
} from "../../providers/language";
import {
  useThemeValue,
  THEME_NAMES,
  THEME_ACTIONS
} from "../../providers/theme";
import { FrenchFlag, EnglishFlag } from "../flags";

import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import {
  withWidth,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from "@material-ui/core";
import { WithWidthProps } from "@material-ui/core/withWidth";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import Popover from "@material-ui/core/Popover";
import SettingsIcon from "@material-ui/icons/Settings";
import { useTranslation } from "react-i18next";

const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100px;
`;

const ActionsComponent: React.FunctionComponent<WithWidthProps> = ({
  width
}) => {
  const { languageState, dispatchLanguage } = useLanguageValue();
  const { themeState, dispatchTheme } = useThemeValue();
  const showPopoverSizes: Breakpoint[] = ["xs", "sm"];
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const { t } = useTranslation();

  if (width && showPopoverSizes.includes(width)) {
    return (
      <div>
        <Button
          onClick={(e: any) => {
            const button: HTMLButtonElement = e.currentTarget;
            setAnchorEl(button);
          }}
        >
          <SettingsIcon />
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
        >
          <List component="div">
            <ListItem
              button
              onClick={() =>
                dispatchLanguage({ type: LANGUAGES_ACTIONS.SET_FRENCH })
              }
            >
              <ListItemIcon>
                <FrenchFlag active={languageState.language === LANGUAGES.FR} />
              </ListItemIcon>
              <ListItemText primary={t("WORDS.FRENCH")} />
            </ListItem>
            <ListItem
              button
              onClick={() =>
                dispatchLanguage({ type: LANGUAGES_ACTIONS.SET_ENGLISH })
              }
            >
              <ListItemIcon>
                <EnglishFlag active={languageState.language === LANGUAGES.EN} />
              </ListItemIcon>
              <ListItemText primary={t("WORDS.ENGLISH")} />
            </ListItem>
          </List>
          <Divider />
          <List component="div">
            <ListItem
              button
              onClick={() => dispatchTheme({ type: THEME_ACTIONS.SWITCH_MODE })}
            >
              <ListItemIcon>
                {themeState.themeName === THEME_NAMES.DARK ? (
                  <WbSunnyIcon />
                ) : (
                  <Brightness3Icon />
                )}
              </ListItemIcon>
              <ListItemText
                primary={
                  themeState.themeName === THEME_NAMES.DARK
                    ? t("WORDS.DARK_MODE")
                    : t("WORDS.LIGHT_MODE")
                }
              />
            </ListItem>
          </List>
        </Popover>
      </div>
    );
  } else {
    return (
      <ActionsContainer>
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
          {themeState.themeName === THEME_NAMES.DARK ? (
            <WbSunnyIcon height={25} />
          ) : (
            <Brightness3Icon height={25} />
          )}
        </span>
      </ActionsContainer>
    );
  }
};
export const Actions = withWidth()(ActionsComponent);
