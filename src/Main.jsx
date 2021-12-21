import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/store";

import "typeface-roboto";
import { GlobalStyle } from "./MainStyled";
import Routes from "./routes";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
      <GlobalStyle />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
