import React, { useState } from "react";
import axios from "axios";

import SunPosition from "./SunPosition";
import WeatherTitles from "./WeatherTitles";
import ForecastData from "./ForecastData";
import "./Forecast.css";

export default function Forecast(props) {
  const [forecast, setForecast] = useState(null);
  const [loaded, setLoaded] = useState(false);
  // function timeUTC(timestamp) {
  //   let nowUtc = new Date(timestamp);
  //   let hoursUtc = nowUtc.getUTCHours();
  //   if (hoursUtc < 10) {
  //     hoursUtc = `0${hoursUtc}`;
  //   }
  //   let minutesUtc = nowUtc.getUTCMinutes();
  //   if (minutesUtc < 10) {
  //     minutesUtc = `0${minutesUtc}`;
  //   }
  //   return `${hoursUtc}:${minutesUtc}`;
  // }

  // function dailyDate(timestamp) {
  //   let date = new Date(timestamp * 1000);
  //   let day = date.getDay();
  //   let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  //   return days[day];
  // }

  function showForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <>
        <SunPosition />
        <div className="container forecast">
          <div className="row row-forecast">
            <WeatherTitles />
            <ForecastData data={forecast} />
          </div>
        </div>
      </>
    );
  } else {
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;

    let apiKey = "e0a5a97de9a0b7a951e9d154a8f9bad8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showForecast);
    return "Loading";
  }
}
