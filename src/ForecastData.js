import React from "react";

export default function ForecastData(props) {
  function dailyDate() {
    let date = new Date(props.data[0].dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function maxTemperature() {
    let temperature = Math.round(props.data[0].temp.max);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data[0].temp.min);
    return `${temperature}`;
  }

  function windSpeed() {
    let winds = Math.round((props.data[0].wind_speed * 5) / 18);
    return `${winds}`;
  }

  function icons() {
    let icons = `images/${props.data[0].weather[0].icon}.svg`;
    return `${icons}`;
  }

  return (
    <div className="col forecast-table" id="forecast-table">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">{dailyDate()}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="img-weather">
            <td>
              <img src={icons()} alt=" " className="mini-img" />
            </td>
          </tr>
          <tr className="temperature-max">
            <td>{maxTemperature()}°</td>
          </tr>
          <tr className="temperature-min">
            <td>{minTemperature()}°</td>
          </tr>
          <tr className="pressure">
            <td>{props.data[0].pressure}</td>
          </tr>
          <tr className="humidity">
            <td>{props.data[0].humidity}</td>
          </tr>
          <tr className="wind">
            <td>{windSpeed()}</td>
          </tr>
          <tr>
            <td className="precipitation">{100 * props.data[0].pop}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
