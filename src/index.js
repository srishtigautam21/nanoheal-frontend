import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { SearchProvider } from "./context/searchContext";
import { NextUIProvider } from "@nextui-org/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <NextUIProvider> */}
    <Router>
      <SearchProvider>
        <App />
      </SearchProvider>
    </Router>
    {/* </NextUIProvider> */}
  </React.StrictMode>
);
