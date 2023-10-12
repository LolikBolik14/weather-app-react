import React from "react";

import SunPosition from "./SunPosition";
import WeatherTitles from "./WeatherTitles";
import "./Forecast.css";

export default function Forecast() {
  return (
    <>
      <SunPosition />
      <div className="container forecast">
        <div className="row">
          <WeatherTitles />
          <div className="col forecast-table" id="forecast-table">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Sat</th>
                </tr>
              </thead>
              <tbody>
                <tr className="img-weather">
                  <td>
                    <img src="/images/02n.svg" alt=" " className="mini-img" />
                  </td>
                </tr>
                <tr className="temperature-max">
                  <td>22°</td>
                </tr>
                <tr className="temperature-min">
                  <td>11</td>
                </tr>
                <tr className="pressure">
                  <td>756</td>
                </tr>
                <tr className="humidity">
                  <td>87</td>
                </tr>
                <tr className="wind">
                  <td>4</td>
                </tr>
                <tr>
                  <td className="precipitation">98</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
