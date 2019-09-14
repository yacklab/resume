import React from "react";
import { useThemeValue, MODES } from "../../providers/theme";

type HeadType = 1 | 2 | 3;

interface TextProp {
  Element?: React.ElementType;
  style?: React.CSSProperties;
  headType?: HeadType;
}
const FontSizes = ["2.7rem", "2.3rem", "1.8rem"];
export const Heading: React.FunctionComponent<TextProp> = ({
  Element = "h3",
  headType = 3,
  children,
  style
}) => {
  const { themeState } = useThemeValue();
  const dark = themeState.themeMode === MODES.DARK;

  return (
    <Element
      style={{
        color: dark ? "white" : "black",
        fontSize: FontSizes[headType - 1],
        ...style
      }}
    >
      {children}
    </Element>
  );
};
