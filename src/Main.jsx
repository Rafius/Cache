import React from "react";
import ReactDOM from "react-dom";

import { GlobalStyle } from "./MainStyled";
import Home from "./pages/Home";

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);
