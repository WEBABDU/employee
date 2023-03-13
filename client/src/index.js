import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import "./assets/styles/bootstrap-grid.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
