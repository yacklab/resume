import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  z-index: 9;
  height: 64px;
  position: fixed;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 15px;
  color: black;
  font-weight: 300;
  font-size: 1.2rem;
  h5 {
    &:hover {
      background: linear-gradient(90deg, #ff9a8b 0%, #ff6a88 55%, #ff99ac 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  a {
    text-decoration: none;
    cursor: pointer;
    margin: 0 15px;
    color: black;
    font-weight: 300;
    font-size: 1.2re;
    &:hover {
      background: linear-gradient(90deg, #ff9a8b 0%, #ff6a88 55%, #ff99ac 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

const Header = () => {
  return (
    <Container>
      <h5>Morgan Tomasini</h5>
      <div>
        <Link to="/">Presentation</Link>
        <Link to="/">Resume</Link>
        <Link to="/">Projects</Link>
      </div>
    </Container>
  );
};

export default Header;
