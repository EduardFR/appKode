import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import styled, { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
    "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}
`;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Global />
    <App />
  </>
);
