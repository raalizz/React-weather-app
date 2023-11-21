import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function temperatureFahrenheitMax() {
    let temperature = Math.round(props.data.temp.max);
    if (props.unit === "celsius") {
      return `${temperature}˚`;
    } else {
      return `${Math.round((temperature * 9) / 5 + 32)}˚`;
    }
  }

  function temperatureFahrenheitMin() {
    let temperature = Math.round(props.data.temp.min);
    if (props.unit === "celsius") {
      return `${temperature}˚`;
    } else {
      return `${Math.round((temperature * 9) / 5 + 32)}˚`;
    }
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="DailyForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="DailyForecast-temperatures">
        <span className="DailyForecast-temperature-max">
          {temperatureFahrenheitMax()}
        </span>
        <span className="DailyForecast-temperature-min">
          {temperatureFahrenheitMin()}
        </span>
      </div>
    </div>
  );
}
