import React from "react";

export default function WeatherTemperature(props) {
  function showFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }

  if (props.unit === "celsius") {
    return (
      <div>
        <strong>
          {" "}
          <h2 className="tempNumber"> {Math.round(props.celsius)}</h2>
        </strong>

        <span className="units">
          ˚C|
          <a href="/" className="active" onClick={showFahrenheit}>
            ˚F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <strong>
          {" "}
          <h2 className="tempNumber"> {Math.round(fahrenheit)}</h2>
        </strong>

        <span className="units">
          <a href="/" onClick={showCelsius} className="active">
            ˚C
          </a>
          |˚F
        </span>
      </div>
    );
  }
}
