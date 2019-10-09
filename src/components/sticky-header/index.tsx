import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useThemeValue } from "../../providers/theme";

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: ${(props: StyledProps) => `${props.height}px`};
  background-color: transparent;
  transform: translateZ(1px);
  will-change: scroll-position;
  position: sticky;
  top: 64px;
  &.sticky {
    position: fixed;
    top: ${(props: StyledProps) => `${props.offset}px`};
    background-color: ${(props: StyledProps) => props.bgColor};
    box-shadow: 0px 79px 38px -59px rgba(0, 0, 0, 0.13);
  }
`;

interface StyledProps {
  height: number;
  offset: number;
  bgColor?: string;
}
interface StickySectionProps {
  height?: number;
  offset?: number;
}

const StickySection: React.FunctionComponent<StickySectionProps> = ({
  children,
  height = 64,
  offset = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { themeState } = useThemeValue();
  useEffect(
    function() {
      const headerStartingPos =
        (ref && ref.current && ref.current.offsetTop) || 0;
      const handler = () => {
        if (ref && ref.current) {
          if (window.pageYOffset >= headerStartingPos - height) {
            ref.current.classList.add("sticky");
          } else {
            ref.current.classList.remove("sticky");
          }
        }
      };

      window.addEventListener("scroll", handler);
      return () => {
        window.removeEventListener("scroll", handler);
      };
    },
    [height]
  );
  return (
    <Section
      ref={ref}
      bgColor={themeState.theme.palette.background.default}
      {...{
        height,
        offset
      }}
    >
      {children}
    </Section>
  );
};

export default StickySection;
