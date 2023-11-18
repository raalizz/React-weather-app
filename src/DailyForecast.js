import React, { useState } from "react";
import "./DailyForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function DailyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="DailyForecast-Container">
        <div className="DailyForecast">
          <div className="row">
            {forecast.map((dailyForecast, index) => {
              if (index < 7) {
                return (
                  <div className="col-sm" key={index}>
                    <WeatherForecastDay data={dailyForecast} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "ed238469f9b5e9d801834270e65449bc";
    const longitude = props.coordinates.lon;
    const latitude = props.coordinates.lat;
    const units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
