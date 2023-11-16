import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css";

export default function DailyForecast() {
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
