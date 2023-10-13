import React from "react";

export default function ForecastData(props) {
  return (
    <div className="col forecast-table" id="forecast-table">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">{props.data[0].dt}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="img-weather">
            <td>
              <img src="/images/02n.svg" alt=" " className="mini-img" />
            </td>
          </tr>
          <tr className="temperature-max">
            <td>{Math.round(props.data[0].temp.max)}°</td>
          </tr>
          <tr className="temperature-min">
            <td>{Math.round(props.data[0].temp.min)}°</td>
          </tr>
          <tr className="pressure">
            <td>{props.data[0].pressure}</td>
          </tr>
          <tr className="humidity">
            <td>{props.data[0].humidity}</td>
          </tr>
          <tr className="wind">
            <td>{Math.round((props.data[0].wind_speed * 5) / 18)}</td>
          </tr>
          <tr>
            <td className="precipitation">{100 * props.data[0].pop}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
