import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import { store } from "./store";

const Global = createGlobalStyle`
*{
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
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
