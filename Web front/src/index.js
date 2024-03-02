import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import PatientReg from "./pages/patientreg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/patreg" element={<PatientReg />} />
    </Routes>
  </Router>
);
