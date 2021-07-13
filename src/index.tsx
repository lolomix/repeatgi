import React from "react";
import { render } from "react-dom";
import App from "./App";
import Providers from "./Providers";

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  rootElement
);
