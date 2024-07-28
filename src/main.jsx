import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeContext.jsx";
import ScrollTop from "./components/ScrollTop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ScrollTop />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
