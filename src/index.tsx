import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Home from "./views/Home";
import "./styles/stylesheets/index.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import { default as AppContext } from "./providers";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider } from "@material-ui/styles";

const AppRouter = () => {
  return (
    <StylesProvider injectFirst>
      <AppContext>
        <CssBaseline />
        <Router>
          <Header />
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </AppContext>
    </StylesProvider>
  );
};

ReactDOM.render(<AppRouter />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
