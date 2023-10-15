import React from "react";

import "./ForecastData.css";

export default function ForecastData(props) {
  function dailyDate() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function windSpeed() {
    let winds = Math.round((props.data.wind_speed * 5) / 18);
    return `${winds}`;
  }

  function icons() {
    let icons = `images/${props.data.weather[0].icon}.svg`;
    return `${icons}`;
  }

  function precipitation() {
    let precipitation = Math.round(100 * props.data.pop);
    return `${precipitation}`;
  }

  return (
    <table className="table align-middle weather-table">
      <thead>
        <tr>
          <th className="text-center head" scope="col">
            {dailyDate()}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="img-weather">
          <td className="cell">
            <img src={icons()} alt=" " className="mini-img" />
          </td>
        </tr>
        <tr className="temperature-max">
          <td className="cell">{maxTemperature()}°</td>
        </tr>
        <tr className="temperature-min">
          <td className="cell">{minTemperature()}°</td>
        </tr>
        <tr className="pressure">
          <td className="cell">{props.data.pressure}</td>
        </tr>
        <tr className="humidity">
          <td className="cell">{props.data.humidity}</td>
        </tr>
        <tr className="wind">
          <td className="cell">{windSpeed()}</td>
        </tr>
        <tr>
          <td className="precipitation">{precipitation()}</td>
        </tr>
      </tbody>
    </table>
  );
}
