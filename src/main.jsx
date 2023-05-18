import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CoinsContext from "./context/CoinsContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <React.StrictMode>
    <CoinsContext>
      <App />
    </CoinsContext>
  </React.StrictMode>
  </BrowserRouter>
);
