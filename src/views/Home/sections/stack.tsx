import React from "react";
import { Container, Typography, Box } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { CustomDivider, TechIcon } from "../../../components";
import { TechName } from "../../../components/tech-icon";
import { useThemeValue, THEME_NAMES } from "../../../providers/theme";

const Stack = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 30px;
  justify-items: center;
  height: 100%;
`;

const techs: TechName[] = [
  "angular",
  "aws",
  "digital-ocean",
  "docker",
  "express",
  "firebase",
  "flutter",
  "git",
  "github",
  "ionic",
  "lodash",
  "nodejs",
  "puppeteer",
  "react",
  "reactivex",
  "sass",
  "sourcetree",
  "typescript"
];

const StackSection = React.forwardRef<HTMLElement>((props, ref) => {
  const { t } = useTranslation();
  const { themeState } = useThemeValue();
  return (
    <Container ref={ref} maxWidth="sm">
      <Box marginY={5}>
        <Typography variant="h3" gutterBottom>
          {t("HOME.STACK.TITLE")}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {t("HOME.STACK.SUBTITLE")}
        </Typography>
      </Box>
      <Stack>
        {techs.map((tech: TechName, index: number) => (
          <TechIcon
            key={index}
            dark={themeState.themeName === THEME_NAMES.DARK}
            techName={tech}
            showName
            height={35}
          />
        ))}
      </Stack>
      {/* <CustomDivider /> */}
      {/* <Box>
        <Typography variant="body2">{t("HOME.STACK.BODY")}</Typography>
      </Box> */}
      <CustomDivider color="secondary" />
    </Container>
  );
});
export default StackSection;
