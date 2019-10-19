import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Typography, Link } from "@material-ui/core";
import debounce from "lodash/debounce";

const Container = styled.div`
  height: calc(100vh - 40px);
  width: 100%;
  margin: auto;
  position: relative;
  background: #280744;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @keyframes translateX {
    0% {
      background-position: 0px 0px;
    }
    100% {
      background-position: 1920px 0px;
    }
  }
  @keyframes glow {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073,
        0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
    }
    to {
      text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6,
        0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
    }
  }
`;

interface WrapperProps {
  scale: number;
}

const Wrapper = styled.div<WrapperProps>`
  max-width: 1920px;
  max-height: 1080px;
  position: relative;
  background: #280744;
  overflow: hidden;
  transform: scale(${p => p.scale});
`;

const Background = styled.div`
  overflow-y: hidden;
  height: 1080px;
  width: 1920px;
  background: url(${`${process.env.PUBLIC_URL}/loco/bg.png`});
  background-repeat: repeat-x;
  background-position: top center;
  background-size: contain;
`;
const Rocks1 = styled.div`
  overflow-y: hidden;
  position: absolute;
  bottom: -5px;
  height: 315px;
  width: 1920px;
  background: url(${`${process.env.PUBLIC_URL}/loco/rocks_1.png`});
  background-repeat: repeat-x;
  background-position: top center;
  background-size: contain;
  animation: translateX 100s infinite linear both;
`;
const Rocks2 = styled.div`
  overflow-y: hidden;
  position: absolute;
  bottom: -60px;
  height: 315px;
  width: 1920px;
  background: url(${`${process.env.PUBLIC_URL}/loco/rocks_2.png`});
  background-repeat: repeat-x;
  background-position: top center;
  background-size: contain;
  animation: translateX 30s infinite linear both;
`;
const Rails = styled.div`
  overflow-y: hidden;
  position: absolute;
  bottom: -110px;
  height: 315px;
  width: 1920px;
  background: url(${`${process.env.PUBLIC_URL}/loco/rails.png`});
  background-repeat: repeat-x;
  background-position: top center;
  background-size: contain;
  animation: translateX 5s infinite linear both;
`;

const Train = styled.div`
  overflow-y: hidden;
  position: absolute;
  bottom: -105px;
  height: 315px;
  width: 1500px;
  right: 0px;
  background: url(${`${process.env.PUBLIC_URL}/loco/train.png`});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: contain;
`;

const Ground = styled.div`
  overflow-y: hidden;
  position: absolute;
  width: 1920px;
  height: 98px;
  bottom: 0px;
  background: #16012f;
`;

const Light = styled.div`
  overflow-y: hidden;
  position: absolute;
  bottom: -39px;
  height: 315px;
  width: 1920px;
  background: url(${`${process.env.PUBLIC_URL}/loco/lights.png`});
  background-repeat: repeat-x;
  background-position: top center;
  background-size: contain;
  animation: translateX 4s infinite linear both;
`;
const Moon = styled.div`
  overflow-y: hidden;
  position: absolute;
  top: 20%;
  height: 315px;
  left: 200px;
  width: 120px;
  background: url(${`${process.env.PUBLIC_URL}/loco/moon.png`});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: contain;
`;

const Text = styled(Typography)`
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff0080, 0 0 30px #ff0080,
    0 0 40px #ff0080, 0 0 55px #ff0080, 0 0 75px #ff0080;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
`;

const CreditContainer = styled(Link)`
  position: absolute;
  right: 20px;
  bottom: 20px;
`;

const TrainSection = () => {
  const [scale, setScale] = useState(Math.ceil(window.innerWidth / 1920));
  const handleResize = debounce(
    () => {
      console.log("resizing");
      setScale(Math.ceil(window.innerWidth / 1920));
    },
    200,
    { leading: true, trailing: true }
  );

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });
  return (
    <Container>
      <Wrapper scale={scale}>
        <Background />
        <Rocks1 />
        <Rocks2 />
        <Rails />
        <Train />
        <Ground />
        <Light />
        <Moon />
        <Text variant="h1">Hello LOCO2</Text>
        <CreditContainer
          target="_blank"
          href="https://codepen.io/ahmmu15/pen/jVELGQ"
        >
          credits
        </CreditContainer>
      </Wrapper>
    </Container>
  );
};

export default TrainSection;
