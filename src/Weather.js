import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${props.city} is ${Math.round(response.data.main.temp)}˚F`
    );
  }
  const apiKey = "c8735bb7e8e2f8d8a38c7501f3cd47d3";
  const units = "imperial";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);

  return <h2>Hello from React</h2>;
}
