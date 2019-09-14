import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Home from "./views/Home";
import "./styles/stylesheets/index.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import { default as AppContext } from "./providers";

const AppRouter = () => {
  return (
    <AppContext>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </AppContext>
  );
};

ReactDOM.render(<AppRouter />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
