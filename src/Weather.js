import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "bootstrap/dist/css/bootstrap.css";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.city);
  const [weather, setWeather] = useState({ loaded: false });

  const [unit, setUnit] = useState("celsius");
  const feels_like = getFeelsLike();
  const unitSymbols = {
    celsius: "˚C",
    fahrenheit: "˚F",
  };

  function getFeelsLike() {
    if (unit === "celsius") {
      return Math.round(weather.feels_like);
    } else {
      return (Math.round(weather.feels_like) * 9) / 5 + 32;
    }
  }

  function search() {
    const apiKey = "c8735bb7e8e2f8d8a38c7501f3cd47d3";
    const units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function displayWeather(response) {
    setWeather({
      loaded: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      feels_like: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      clouds: response.data.clouds.all,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  const form = (
    <div className="form-container">
      <div className="row">
        <div className="col-sm">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search a city"
              className="searchBar"
              onChange={updateCity}
            />
            <div className="col-sm">
              <input type="submit" value="Search" className="search-btn" />
            </div>
          </form>
        </div>
        <div className="col-sm">
          <button className="location-btn">
            {" "}
            <i className="fa-solid fa-location-crosshairs locationIcon"></i>{" "}
          </button>
        </div>
      </div>
    </div>
  );

  const tempInfo = (
    <div className="tempInfo-container">
      <div className="row">
        <div className="col-sm-7 ">
          <h1>{weather.city}</h1>

          <li>
            Last updated: <FormattedDate date={weather.date} />
          </li>
          <li className="text-capitalize">{weather.description}</li>
        </div>

        <div className="col-sm-2 animatedIcon">
          <WeatherIcon code={weather.icon} />
        </div>
        <div className="col-sm-3 ">
          <WeatherTemperature
            unit={unit}
            setUnit={setUnit}
            celsius={weather.temperature}
          />
        </div>
      </div>
    </div>
  );

  const forecastInfo = (
    <div className="forecast-container">
      <div className="forecast">
        <div>
          <i className="fa-solid fa-temperature-three-quarters forecastIcons"></i>
          <br />
          <strong>
            {Math.round(feels_like)} {unitSymbols[unit]}
          </strong>
          <br />
          <h6>Feels Like</h6>
        </div>
        <div>
          <i className="fa-solid fa-droplet forecastIcons"></i>
          <br />
          <strong>{weather.humidity} %</strong>
          <br />
          <h6>Humidity</h6>
        </div>
        <div>
          <i className="fa-solid fa-wind forecastIcons"></i>
          <br />
          <strong>{Math.round(weather.wind)} m/s</strong>
          <br />
          <h6>Wind </h6>
        </div>
        <div>
          <i className="fa-solid fa-cloud forecastIcons"></i>
          <br />
          <strong> {weather.clouds}</strong>
          <br />
          <h6> Clouds</h6>
        </div>
      </div>
    </div>
  );

  if (weather.loaded) {
    return (
      <div className="Weather">
        <div className="container">
          <i className="fa-solid fa-cloud outerIcon1"></i>
          <i className="fa-solid fa-cloud outerIcon2"></i>
          <div className="wrapper">
            {form}
            {tempInfo}
            {forecastInfo}
          </div>
        </div>
      </div>
    );
  } else {
    search();
  }
}
