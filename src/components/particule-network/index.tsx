import React from "react";
import styled from "styled-components";
// import { useThemeValue, MODES } from "../../providers/theme";
import { Heading } from "../../styled/text";
import ParticleCanvas from "./canvas";

type CanvasContainerProps = {
  dark: boolean;
};
const CanvasContainer = styled.div`
  position: relative;
  background-color: ${(p: CanvasContainerProps) =>
    p.dark ? "#08AEEA" : "#ff9a8b"};
  background-image: ${(p: CanvasContainerProps) =>
    p.dark
      ? "linear-gradient(315deg, #08AEEA 0%, #2AF598 100%)"
      : "linear-gradient(90deg, #ff9a8b 0%, #ff6a88 55%, #ff99ac 100%)"};

  background-size: 400% 400%;
  transition: all 900ms ease;
  animation: MovingBG 15s ease infinite alternate;
  clip-path: polygon(0 0, 100% 0%, 100% 88%, 0% 100%);
  z-index: 0;
  @keyframes MovingBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Avatar = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate3d(-50%, 80%, 0);
  height: 200px;
  width: 200px;
  img {
    height: 190px;
    width: 190px;
    border-radius: 50%;
    box-shadow: 3px 3px 21px -5px rgba(115, 115, 115, 1);
  }
`;

const ParticuleNetworkComponent: React.FunctionComponent = () => {
  return (
    <ParticleCanvas
      viewHeight={90}
      particleOptions={{
        netColor: "#FFF",
        dotColor: "#FFF",
        globalAlpha: 0.6,
        densityDivider: 4000
      }}
      renderBG={(c: React.ReactNode) => {
        return <CanvasContainer dark={false}>{c}</CanvasContainer>;
      }}
    >
      <Avatar>
        <img src="/avatar.svg" alt="" />
      </Avatar>
      <Heading
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate3d(-50%, 50%, 0)"
        }}
        Element={"h2"}
        headType={2}
      >
        Web Developper (Full Stack)
      </Heading>
    </ParticleCanvas>
  );
};

export default React.memo(ParticuleNetworkComponent, () => true);
