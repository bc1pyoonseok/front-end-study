import React from "react";
import ReactDOM from "react-dom";
import GuguDan from "./Gugudan";
import Menu from "./Menu";

ReactDOM.render(
  <React.StrictMode>
    <Menu />
    <GuguDan />
    <GuguDan />
    <GuguDan />
  </React.StrictMode>,
  document.getElementById("root")
);
