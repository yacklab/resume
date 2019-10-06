import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components";
import { ProjectsView, HomeView } from "./views";

export const RouterPaths = {
  projects: "/projects",
  home: "/"
};

export const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={RouterPaths.projects} component={ProjectsView} />
        <Route path={RouterPaths.home} component={HomeView} />
      </Switch>
    </Router>
  );
};
