import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css";
import axios from "axios";

export default function DailyForecast(props) {
  const apiKey = "c8735bb7e8e2f8d8a38c7501f3cd47d3";
  const longitude = props.coordinates.lon;
  const latitude = props.coordinates.lat;
  const units = "metric";
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units};
`;
  axios.get(apiUrl).then(handleResponse);

  function handleResponse(response) {}

  return (
    <div className="DailyForecast-Container">
      <div className="DailyForecast">
        <div className="row">
          <div className="col-sm">
            <div className="DailyForecast-day">Thu</div>
            <WeatherIcon code="01d" size={36} />
            <div className="DailyForecast-temperatures">
              <span className="DailyForecast-temperature-max"> 19˚ </span>
              <span className="DailyForecast-temperature-min"> 10˚</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
