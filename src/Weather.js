import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    temperature: 19,
    humidity: 80,
    wind: 3,
  };
  return (
    <div className="weather-describtion">
      <div className="row">
        <div className="col-6">
          <div className="clearfix float-left">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="sunny"
              id="icon"
              width="50"
            />
            <div className="temperature">
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li className="weather-details">
              Precipitation: <span id="humidity">{weatherData.humidity}</span>%
            </li>
            <li className="weather-details">
              Wind: <span id="wind">{weatherData.wind}</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
