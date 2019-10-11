import { Theme } from "@material-ui/core";
import styled from "styled-components";
import { PaletteColor } from "@material-ui/core/styles/createPalette";

interface DividerProps {
  theme: Theme;
  color?: PaletteColor | string;
}

export const CustomDivider = styled.div<DividerProps>`
  height: 1px;
  border-bottom: 1px solid
    ${({ theme, color = "#ccc" }) => {
      if (theme.palette[color]) {
        return theme.palette[color].main;
      } else {
        return color;
      }
    }};
  margin: 25px 0;
`;
