import React from "react";

import Current from "./Current";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <div className="container main">
        <div className="weather-wrapper">
          <Current defaultCity="Kyiv" />
          <Forecast />
        </div>
        <Footer />
      </div>
    </div>
  );
}
