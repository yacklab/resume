import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
  height: ${(props: StyledProps) => `${props.height}px`};
  z-index: 10;

  &.sticky {
    position: fixed;
    top: ${(props: StyledProps) => `${props.offset}px`};
    background-color: white;
    box-shadow: 0px 79px 38px -59px rgba(0, 0, 0, 0.13);
  }
`;

interface StyledProps {
  height: number;
  offset: number;
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
    <Section ref={ref} {...{ height, offset }}>
      {children}
    </Section>
  );
};

export default StickySection;
