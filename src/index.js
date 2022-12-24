import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import { store } from "./components/store";

const Global = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    font-family: "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
    "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <Global />
      <App />
    </Provider>
  </>
);
