import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./Form";
import { RecoilRoot } from "recoil";
import Thankyou from "./Thankyou";
import Notfound from "./notFound";
ReactDOM.createRoot(document.getElementById("online-justice") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/form" element={<Form />} />
          <Route path="/thankyou" element={<Thankyou />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </RecoilRoot>
  </React.StrictMode>
);
