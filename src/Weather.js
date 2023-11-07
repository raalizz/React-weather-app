import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import ReactAnimatedWeather from "react-animated-weather";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "c8735bb7e8e2f8d8a38c7501f3cd47d3";
    const units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: (
        <ReactAnimatedWeather
          icon="RAIN"
          color="Black"
          size={60}
          animate={true}
        />
      ),
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  const form = (
    <div className="row">
      <div className="col-sm">
        <form onSumbit={handleSubmit}>
          <input
            type="search"
            placeholder="Search a city"
            onChange={updateCity}
            autocomplete="off"
            className="searchBar"
          />
        </form>
      </div>
      <div className="col-sm">
        <button className="search-btn">
          <h7 className="searchFont">Search</h7>
        </button>
      </div>
      <div className="col-sm">
        <button className="location-btn">
          {" "}
          <i className="fa-solid fa-location-crosshairs locationIcon"></i>{" "}
        </button>
      </div>
    </div>
  );

  const tempInfo = (
    <div className="row">
      <div className="col-sm-6 mt-4">
        <h1>{city} </h1>
        <ul>
          <li> Tuesday 01:02</li>
          <li>{weather.description}</li>
        </ul>
      </div>
      <div className="col-sm-3 mt-4">{weather.icon}</div>
      <div className="col-sm-3 mt-4">
        <span className="units">
          <a href="/" className="active">
            ˚C{" "}
          </a>{" "}
          |<a href="/">˚F</a>
        </span>
        <br />
        <h7> {weather.temperature} </h7>
      </div>
    </div>
  );

  const forecastInfo = (
    <div className="forecast-container">
      <div className="forecast">
        <div>
          <i className="fa-solid fa-temperature-three-quarters forecastIcons"></i>
          <br />
          <strong>{weather.temperature}</strong>˚C
          <br />
          <h7>Feels like</h7>
        </div>
        <div>
          <i className="fa-solid fa-droplet forecastIcons"></i>
          <br />
          <strong>{weather.humidity}</strong>%
          <br />
          <h7>Humidity</h7>
        </div>
        <div>
          <i className="fa-solid fa-wind forecastIcons"></i>
          <br />
          <strong>{weather.wind}</strong>m/s
          <br />
          <h7>Wind </h7>
        </div>
      </div>
    </div>
  );

  if (loaded) {
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
    return (
      <div className="Weather">
        <div className="container">
          <div className="wrapper">
            {form}
            <div className="row">
              <div className="col-sm-6 mt-4">
                <h1>{props.city} </h1>
                <h6> {weather.description}</h6>
              </div>
              <div className="col-sm-3 mt-4">{weather.icon}</div>
              <div className="col-sm-3 mt-4">
                <span className="units">
                  <a href="/" className="active">
                    ˚C{" "}
                  </a>{" "}
                  |<a href="/">˚F</a>
                </span>
                <br />
                <h7> {weather.temperature} </h7>
              </div>
            </div>
            {forecastInfo}
          </div>
        </div>
      </div>
    );
  }
}
