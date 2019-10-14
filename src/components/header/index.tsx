import React from "react";
import styled from "styled-components";
import Link from "@material-ui/core/Link";

import { Box, Theme } from "@material-ui/core";
// import { RouterPaths } from "../../router";
// import { RouterLink } from "../router-link";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Actions } from "./actions";
import { ShortTypedName } from "../";

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

const Header: React.FunctionComponent<RouteComponentProps<any>> = ({
  location
}) => {
  const { t } = useTranslation();

  return (
    <Container>
      <ShortTypedName />
      <div>
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
        <Box component="span" marginX={0.5}>
          <Link href="https://github.com/yacklab/resume" underline="hover">
            <img
              height={15}
              src="/ghmark.png"
              alt="github"
              style={{ marginRight: 5 }}
            />
            {t("NAVBAR.GITHUB")}
          </Link>
        </Box>
        {/* <Box component="span" marginX={0.5}>
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
        </Box> */}
      </div>
      <Actions />
    </Container>
  );
};

export default withRouter(Header);
