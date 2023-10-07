import React, { useState } from "react";

export default function WeatherTemp(props) {
  // let temp = props.defaultData.temperature;
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <p className="my-auto">
        <img
          src={props.icons}
          alt={props.description}
          className="icon"
          id="icon"
        />
        <span className="align-middle degrees" id="degrees">
          {Math.round(props.celsius)}
        </span>
        <span className="units">
          <a
            href="/"
            rel="noreferrer"
            className="unit"
            id="celsius"
            onClick={showCelsius}>
            {" "}
            °C
          </a>
          |
          <a
            href="/"
            rel="noreferrer"
            className="unit"
            id="fahrenheit"
            onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </p>
    );
  } else {
    let fahrenheit = Math.round((9 / 5) * props.celsius + 32);
    return (
      <p className="my-auto">
        <img
          src={props.icons}
          alt={props.description}
          className="icon"
          id="icon"
        />
        <span className="align-middle degrees" id="degrees">
          {fahrenheit}
        </span>
        <span className="units">
          <a
            href="/"
            rel="noreferrer"
            className="unit"
            id="celsius"
            onClick={showCelsius}>
            {" "}
            °C
          </a>
          |
          <a
            href="/"
            rel="noreferrer"
            className="unit"
            id="fahrenheit"
            onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </p>
    );
  }
}
