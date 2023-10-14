import React, { useState } from "react";
import axios from "axios";

import Logo from "./Logo";
import Dates from "./Dates";
import WeatherTemp from "./WeatherTemp";
import Forecast from "./Forecast";

import "./Current.css";

export default function Current(props) {
  const [weatherData, setWeatherData] = useState({ loader: false });
  const [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    setWeatherData({
      loader: true,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed * 3.6,
      icon: `images/${response.data.weather[0].icon}.svg`,
      zone: response.data.timezone,
    });
  }

  function handleSearch(event) {
    event.preventDefault();
    Search();
  }

  function handleUpdateCity(event) {
    setCity(event.target.value);
  }

  function Search() {
    const apiKey = "e0a5a97de9a0b7a951e9d154a8f9bad8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  if (weatherData.loader) {
    return (
      <>
        <div className="d-grid gap-2 d-md-block header">
          <Logo />

          <div className="d-md-inline-block search">
            <form id="searching" onSubmit={handleSearch}>
              <input
                className="search-city"
                id="enter-city"
                type="text"
                placeholder="Enter a city"
                autoComplete="off"
                onChange={handleUpdateCity}
              />
              <button className="search_city-submit" type="submit"></button>
            </form>
          </div>
        </div>
        <div className=" container forecast">
          <h2 className="city">
            in
            <span id="city"> {weatherData.city}</span>
          </h2>
          <div className="container temperature-city">
            <div className="row align-self-center current">
              <div className="col-4 align-self-center text-center temperature-today">
                <WeatherTemp
                  icons={weatherData.icon}
                  celsius={weatherData.temperature}
                />
              </div>
              <div className="col-4 align-self-center text-center current-description">
                <ul className="current-desc">
                  <li id="description">{weatherData.description}</li>
                  <li>
                    Humidity: <span id="humidity">{weatherData.humidity}</span>%
                  </li>
                  <li>
                    Wind:{" "}
                    <span id="wind">
                      {Math.round((weatherData.wind * 5) / 18)}
                    </span>
                    m/s
                  </li>
                </ul>
              </div>
              <Dates defaultDate={weatherData.date} />
            </div>
          </div>
        </div>
        <Forecast
          coordinates={weatherData.coordinates}
          time={weatherData.zone}
        />
      </>
    );
  } else {
    Search();
    return "Loading...";
  }
}
