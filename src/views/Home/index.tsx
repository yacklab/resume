import React, { useRef, MutableRefObject, useEffect } from "react";
import styled from "styled-components";
import { ParticuleNetwork } from "../../components";
import { Row, Col } from "antd";
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
  margin: auto;
  min-height: 64px;
  z-index: 10;
  &.sticky {
    position: fixed;
    top: 64px;
    width: 100%;
    background-color: white;
  }
  a {
    margin: 10px 10px;
    font-size: 1.2rem;
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
`;
const scrollToRef = (ref: MutableRefObject<any> | null) => {
  if (ref) {
    window.scrollTo(0, ref.current.offsetTop - 128);
  }
};

const Home: React.FunctionComponent = ({ children }) => {
  const [s1, s2, s3, s4] = [
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null)
  ];
  const stickyRef = useRef<HTMLDivElement>(null);

  useEffect(function() {
    const offset =
      (stickyRef && stickyRef.current && stickyRef.current.offsetTop) || 0;
    window.addEventListener("scroll", () => {
      if (stickyRef && stickyRef.current) {
        if (window.pageYOffset >= offset - 64) {
          stickyRef.current.classList.add("sticky");
        } else {
          stickyRef.current.classList.remove("sticky");
        }
      }
    });
  });

  return (
    <Container className="home-bg">
      <ParticuleNetwork />
      <Sections ref={stickyRef}>
        <a onClick={() => scrollToRef(s1)}>History</a>
        <a onClick={() => scrollToRef(s2)}>Bowkr</a>
        <a onClick={() => scrollToRef(s3)}>Stack</a>
        <a onClick={() => scrollToRef(s4)}>Moto</a>
      </Sections>
      <Section ref={s1}>
        <Row
          style={{ width: "100%" }}
          gutter={{ xs: 6 }}
          align="top"
          justify="center"
          type="flex"
        >
          <Col xs={24} xl={18}>
            <h3 style={{ margin: "20px 0" }}>History</h3>
          </Col>
        </Row>
        <Row
          style={{ width: "100%" }}
          gutter={{ xs: 6 }}
          align="top"
          justify="center"
          type="flex"
        >
          <Col xs={24} xl={18}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut enim
            distinctio consectetur ipsum aperiam et modi possimus. Quod rem,
            amet suscipit praesentium minima placeat neque laboriosam ipsa nam
            asperiores cupiditate? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ut enim distinctio consectetur ipsum aperiam et
            modi possimus. Quod rem, amet suscipit praesentium minima placeat
            neque laboriosam ipsa nam asperiores cupiditate? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Ut enim distinctio
            consectetur ipsum aperiam et modi possimus. Quod rem, amet suscipit
            praesentium minima placeat neque laboriosam ipsa nam asperiores
            cupiditate? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ut enim distinctio consectetur ipsum aperiam et modi possimus. Quod
            rem, amet suscipit praesentium minima placeat neque laboriosam ipsa
            nam asperiores cupiditate?
          </Col>
        </Row>
      </Section>
      <Section ref={s2}>
        <Row
          style={{ width: "100%" }}
          gutter={{ xs: 6 }}
          align="top"
          justify="center"
          type="flex"
        >
          <Col xs={24} xl={18}>
            <h3 style={{ margin: "20px 0" }}>Bowkr</h3>
          </Col>
        </Row>
        <Row
          style={{ width: "100%" }}
          gutter={{ xs: 6 }}
          align="top"
          justify="center"
          type="flex"
        >
          <Col xs={24} xl={18}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut enim
            distinctio consectetur ipsum aperiam et modi possimus. Quod rem,
            amet suscipit praesentium minima placeat neque laboriosam ipsa nam
            asperiores cupiditate? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ut enim distinctio consectetur ipsum aperiam et
            modi possimus. Quod rem, amet suscipit praesentium minima placeat
            neque laboriosam ipsa nam asperiores cupiditate? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Ut enim distinctio
            consectetur ipsum aperiam et modi possimus. Quod rem, amet suscipit
            praesentium minima placeat neque laboriosam ipsa nam asperiores
            cupiditate? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ut enim distinctio consectetur ipsum aperiam et modi possimus. Quod
            rem, amet suscipit praesentium minima placeat neque laboriosam ipsa
            nam asperiores cupiditate?
          </Col>
        </Row>
      </Section>
      <Section ref={s3}>
        <Row
          style={{ width: "100%" }}
          gutter={{ xs: 6 }}
          align="top"
          justify="center"
          type="flex"
        >
          <Col xs={24} xl={18}>
            <h3 style={{ margin: "20px 0" }}>Stack</h3>
          </Col>
        </Row>
        <Row
          style={{ width: "100%" }}
          gutter={{ xs: 6 }}
          align="top"
          justify="center"
          type="flex"
        >
          <Col xs={24} xl={18}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut enim
            distinctio consectetur ipsum aperiam et modi possimus. Quod rem,
            amet suscipit praesentium minima placeat neque laboriosam ipsa nam
            asperiores cupiditate? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ut enim distinctio consectetur ipsum aperiam et
            modi possimus. Quod rem, amet suscipit praesentium minima placeat
            neque laboriosam ipsa nam asperiores cupiditate? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Ut enim distinctio
            consectetur ipsum aperiam et modi possimus. Quod rem, amet suscipit
            praesentium minima placeat neque laboriosam ipsa nam asperiores
            cupiditate? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ut enim distinctio consectetur ipsum aperiam et modi possimus. Quod
            rem, amet suscipit praesentium minima placeat neque laboriosam ipsa
            nam asperiores cupiditate? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ut enim distinctio consectetur ipsum aperiam et
            modi possimus. Quod rem, amet suscipit praesentium minima placeat
            neque laboriosam ipsa nam asperiores cupiditate? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Ut enim distinctio
            consectetur ipsum aperiam et modi possimus. Quod rem, amet suscipit
            praesentium minima placeat neque laboriosam ipsa nam asperiores
            cupiditate? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ut enim distinctio consectetur ipsum aperiam et modi possimus. Quod
            rem, amet suscipit praesentium minima placeat neque laboriosam ipsa
            nam asperiores cupiditate? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ut enim distinctio consectetur ipsum aperiam et
            modi possimus. Quod rem, amet suscipit praesentium minima placeat
            neque laboriosam ipsa nam asperiores cupiditate?
          </Col>
        </Row>
      </Section>
      <Section ref={s4}>
        <Row
          style={{ width: "100%" }}
          gutter={{ xs: 6 }}
          align="top"
          justify="center"
          type="flex"
        >
          <Col xs={24} xl={18}>
            <h3 style={{ margin: "20px 0" }}>Moto</h3>
          </Col>
        </Row>
        <Row
          style={{ width: "100%" }}
          gutter={{ xs: 6 }}
          align="top"
          justify="center"
          type="flex"
        >
          <Col xs={24} xl={18}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut enim
            distinctio consectetur ipsum aperiam et modi possimus. Quod rem,
            amet suscipit praesentium minima placeat neque laboriosam ipsa nam
            asperiores cupiditate? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ut enim distinctio consectetur ipsum aperiam et
            modi possimus. Quod rem, amet suscipit praesentium minima placeat
            neque laboriosam ipsa nam asperiores cupiditate? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Ut enim distinctio
            consectetur ipsum aperiam et modi possimus. Quod rem, amet suscipit
            praesentium minima placeat neque laboriosam ipsa nam asperiores
            cupiditate? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ut enim distinctio consectetur ipsum aperiam et modi possimus. Quod
            rem, amet suscipit praesentium minima placeat neque laboriosam ipsa
            nam asperiores cupiditate? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ut enim distinctio consectetur ipsum aperiam et
            modi possimus. Quod rem, amet suscipit praesentium minima placeat
            neque laboriosam ipsa nam asperiores cupiditate? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Ut enim distinctio
            consectetur ipsum aperiam et modi possimus. Quod rem, amet suscipit
            praesentium minima placeat neque laboriosam ipsa nam asperiores
            cupiditate? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ut enim distinctio consectetur ipsum aperiam et modi possimus. Quod
            rem, amet suscipit praesentium minima placeat neque laboriosam ipsa
            nam asperiores cupiditate? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ut enim distinctio consectetur ipsum aperiam et
            modi possimus. Quod rem, amet suscipit praesentium minima placeat
            neque laboriosam ipsa nam asperiores cupiditate?
          </Col>
        </Row>
      </Section>

      <Section>Contact</Section>
    </Container>
  );
};

export default Home;
