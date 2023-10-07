import React from "react";

import Forecast from "./Forecast";
import Footer from "./Footer";

import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <div className="container main">
        <Forecast defaultCity="Kyiv" />
        <Footer />
      </div>
    </div>
  );
}
