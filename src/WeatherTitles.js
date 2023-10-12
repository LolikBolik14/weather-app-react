import React from "react";

export default function WeatherTitles() {
  return (
    <div className="col weather-titles">
      <ul className="properties">
        <li className="max-min">
          Temperature,
          <li>
            °C <b>max</b>/min
          </li>
        </li>
        <li>Pressure, hPa</li>
        <li>Humidity, %</li>
        <li>Wind, m/sec</li>
        <li className="precipitation">Precipitation, %</li>
      </ul>
    </div>
  );
}
