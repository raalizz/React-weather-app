import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}˚`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}˚`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="DailyForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="DailyForecast-temperatures">
        <span className="DailyForecast-temperature-max">{maxTemp()}</span>
        <span className="DailyForecast-temperature-min">{minTemp()}</span>
      </div>
    </div>
  );
}
