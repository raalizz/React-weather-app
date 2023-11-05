import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "c8735bb7e8e2f8d8a38c7501f3cd47d3";
    const units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function displayWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: (
        <ReactAnimatedWeather
          icon="RAIN"
          color="Black"
          size={30}
          animate={true}
        />
      ),
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="container">
      <div className="wrapper">
        <div className="row">
          <div className="col-sm">
            <form onSumbit={handleSubmit}>
              <input
                type="search"
                placeholder="Search a city"
                onChange={updateCity}
              />
              <input type="submit" value="search" />
            </form>
          </div>
          <div className="col-sm">
            <button>
              {" "}
              <i class="fa-solid fa-location-crosshairs"></i>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
