import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./styles/stylesheets/index.scss";
import { default as AppContext } from "./providers";
import CssBaseline from "@material-ui/core/CssBaseline";
import { AppRouter } from "./router";
import { StylesProvider } from "@material-ui/styles";

const App = () => {
  return (
    <StylesProvider injectFirst>
      <AppContext>
        <CssBaseline />
        <AppRouter />
      </AppContext>
    </StylesProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
