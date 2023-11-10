import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import ReactAnimatedWeather from "react-animated-weather";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({ loaded: false });

  function handleSubmit(event) {
    event.preventDefault();
  }

  function displayWeather(response) {
    setWeather({
      loaded: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      clouds: response.data.clouds.all,
      description: response.data.weather[0].description,
      date: "Tuesday 01:02 PM",
      icon: (
        <ReactAnimatedWeather
          icon="RAIN"
          color="#205682"
          size={50}
          animate={true}
        />
      ),
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  const form = (
    <div className="form-container">
      <div className="row">
        <div className="col-sm">
          <form onSumbit={handleSubmit}>
            <input
              type="search"
              placeholder="Search a city"
              onChange={updateCity}
              className="searchBar"
            />
          </form>
        </div>
        <div className="col-sm">
          <button className="search-btn">Search</button>
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
          <h1>{city} </h1>

          <li>Last updated: {weather.date} </li>
          <li className="text-capitalize">{weather.description}</li>
        </div>
        <div className="col-sm-2 animatedIcon">{weather.icon}</div>
        <div className="col-sm-3 ">
          <strong>
            {" "}
            <h7 className="tempNumber">
              {" "}
              {Math.round(weather.temperature)}{" "}
            </h7>{" "}
          </strong>

          <span className="units">
            <a href="/" className="active">
              ˚C{" "}
            </a>{" "}
            |<a href="/">˚F</a>
          </span>
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
          <strong>{Math.round(weather.temperature)}˚C</strong>
          <br />
          <h7>Feels like</h7>
        </div>
        <div>
          <i className="fa-solid fa-droplet forecastIcons"></i>
          <br />
          <strong>{weather.humidity} %</strong>
          <br />
          <h7>Humidity</h7>
        </div>
        <div>
          <i className="fa-solid fa-wind forecastIcons"></i>
          <br />
          <strong>{weather.wind} m/s</strong>
          <br />
          <h7>Wind </h7>
        </div>
        <div>
          <i class="fa-solid fa-cloud forecastIcons"></i>
          <br />
          <strong> {weather.clouds}</strong>
          <br />
          <h7> Clouds</h7>
        </div>
      </div>
    </div>
  );

  if (weather.loaded) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="wrapper">
            {form}
            {tempInfo}
            {forecastInfo}
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "c8735bb7e8e2f8d8a38c7501f3cd47d3";
    const units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }
}
