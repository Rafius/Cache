import React from "react";
import ReactDOM from "react-dom";

import "typeface-roboto";
import { GlobalStyle } from "./MainStyled";
import Home from "@/pages/home";

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);
