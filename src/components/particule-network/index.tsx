import React from "react";
import styled from "styled-components";
// import { useThemeValue, MODES } from "../../providers/theme";
import ParticleCanvas from "./canvas";
import { useThemeValue, THEME_NAMES } from "../../providers/theme";
import { LongTypedName } from "../typed-name";
import { Typography } from "@material-ui/core";
import { useStyle } from "../../hooks";

const CanvasContainer = styled.div<{ dark: boolean }>`
  position: relative;
  background-color: ${p => (p.dark ? "#08AEEA" : "#ff9a8b")};
  background-image: ${p =>
    p.dark
      ? "linear-gradient(120deg, #f6d365 0%, #fda085 100%);"
      : "linear-gradient(90deg, #ff9a8b 0%, #ff6a88 55%, #ff99ac 100%)"};

  background-size: 400% 400%;
  transition: all 900ms ease;
  animation: MovingBG 15s ease infinite alternate;
  clip-path: polygon(0 0, 100% 0%, 100% 88%, 0% 100%);
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
  @media screen and (max-width: 600px) {
    height: 150px;
    width: 150px;
  }
  img {
    height: 190px;
    width: 190px;
    border-radius: 50%;
    box-shadow: 3px 3px 21px -5px rgba(115, 115, 115, 1);
    @media screen and (max-width: 600px) {
      height: 140px;
      width: 140px;
    }
  }
`;

const Title = styled(props => <Typography {...props} />)`
  position: absolute;
  top: calc(55% + 40px);
  left: 50%;
  width: 100%;
  text-align: center;
  transform: translate3d(-50%, 0%, 0);
`;

const NameContaienr = styled.div`
  position: absolute;
  top: calc(50% + 40px);
  left: 50%;
  transform: translate3d(-50%, 0%, 0);
`;

const ParticuleNetworkComponent: React.FunctionComponent = () => {
  const { themeState } = useThemeValue();
  const classes = useStyle();
  return (
    <ParticleCanvas
      viewHeight={70}
      particleOptions={{
        netColor: "#FFF",
        dotColor: "#FFF",
        globalAlpha: 0.6,
        densityDivider: 4000
      }}
      renderProps={{
        dark: themeState.themeName === THEME_NAMES.DARK
      }}
      renderBG={(c: React.ReactNode, renderProps: { dark: boolean }) => {
        return <CanvasContainer dark={renderProps.dark}>{c}</CanvasContainer>;
      }}
    >
      <Avatar>
        <img src="/avatar.svg" alt="" />
      </Avatar>
      <NameContaienr>
        <LongTypedName />
      </NameContaienr>
      <Title className={classes.subtitle} variant="h6" component="h2">
        Web Developper (Full Stack)
      </Title>
    </ParticleCanvas>
  );
};

export default React.memo(ParticuleNetworkComponent, () => true);
