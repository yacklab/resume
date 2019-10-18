import React from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
// import { useLocation } from "react-router";
import { Header } from "./components";
import { ProjectsView, HomeView, LocoView } from "./views";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

export const RouterPaths = {
  projects: "/projects",
  resume: "/resume",
  loco: "/loco2",
  home: "/"
};

const SwitchWrapper = styled.div`
  margin: 0;
  padding: 0;
  height: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none; // Safari and Chrome
  }
  .nav-transition-enter {
    opacity: 0.01;
    transform: scale(1.1);
  }

  .nav-transition-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: all 300ms;
  }

  .nav-transition-exit {
    opacity: 1;
    transform: scale(1);
  }

  .nav-transition-exit-active {
    opacity: 0.01;
    transform: scale(1.1);
    transition: all 300ms;
  }
`;

const SwitchRoutes = () => {
  const location = useLocation();
  return (
    <SwitchWrapper>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames={"nav-transition"}
        >
          <Switch location={location}>
            <Route path={RouterPaths.projects} component={ProjectsView} />
            <Route path={RouterPaths.resume} component={ProjectsView} />
            <Route path={RouterPaths.loco} component={LocoView} />
            <Route path={RouterPaths.home} component={HomeView} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </SwitchWrapper>
  );
};

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <SwitchRoutes />
    </BrowserRouter>
  );
};
