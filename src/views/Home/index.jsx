import React from "react";
import styled from "styled-components";
import { ParticuleNetwork } from "../../components";

const Container = styled.div``;
const Section = styled.section`
  padding: 50px;
  p {
    text-align: justify;
  }
`;
const Sections = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1080px;
  margin: auto;
  min-height: 64px;
  a {
    margin: 10px 10px;
    font-size: 1.2rem;
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
`;

const index = () => {
  return (
    <Container className="home-bg">
      <ParticuleNetwork />
      <Sections>
        <a href="">History</a>
        <a href="">Bowkr</a>
        <a href="">Stack</a>
      </Sections>
      <Section>
        <h3>History</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ducimus
          quaerat accusamus earum nemo ratione iste harum tempora debitis,
          reiciendis, quo assumenda totam delectus, dignissimos eum mollitia
          optio nulla. Sunt.
        </p>
      </Section>
      <Section>
        <h3>Bowkr</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          modi, expedita ex numquam nostrum fuga similique cupiditate possimus
          repellat qui illum a repellendus sint inventore vel suscipit minus
          quia architecto! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Voluptatum modi, expedita ex numquam nostrum fuga similique
          cupiditate possimus repellat qui illum a repellendus sint inventore
          vel suscipit minus quia architecto!
        </p>
      </Section>
      <Section>
        <h3>Stack</h3>
        <ul>
          <li>
            <img
              height="32"
              src="https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/14/thumb_bigger_formation-node-js.png"
              alt=""
            />
            Nodejs
          </li>
          <li>
            <img
              height="32"
              src="https://blog.octo.com/wp-content/uploads/2015/12/react-logo-1000-transparent-300x300.png"
              alt=""
            />
            React
          </li>
        </ul>
      </Section>
      <Section>Contact</Section>
    </Container>
  );
};

export default index;
