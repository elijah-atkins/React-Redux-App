import React from "react";
import { getFehrenheit } from '../store/functions/getFehrenheit';
import GetWeatherIcon from './GetWeatherIcon';

export const DisplayDay = ({ weather }) => {
    console.log(weather)
  return (
    <div className="weather-day">
      <div className="weather-date">
        <p>{weather.applicable_date}</p>
      </div>
      <div className="weather-icon">
        <div className="weather-state-name">
          <p>{weather.weather_state_name}</p>
        </div>
        <div className="weather-img">
          <GetWeatherIcon abbr={weather.weather_state_abbr} />
        </div>
        <div className="weather-wind">
        <p>Wind</p>
      </div>
      </div>


      <div className="weather-temp">
        <h1>
          {Math.round(getFehrenheit(weather.the_temp))}
          {"\u00b0"}
        </h1>
        <div className="temp-toggle-button"><p>F</p></div>
      </div>
      <div className="weather-main">
      <div className="weather-wind">

        <h1>{Math.round(weather.wind_speed)}</h1>
        <div className="weather-wind-direction">
        <h2>{weather.wind_direction_compass}</h2>
        <p>mph</p>
        </div>
      </div>
      <div className="weather-low-high">
        <h1>
          {Math.round(getFehrenheit(weather.min_temp))}
          {"\u00b0"}
        </h1>
        <h1>
          {Math.round(getFehrenheit(weather.max_temp))}
          {"\u00b0"}
        </h1>
      </div>
      </div>
      <div className="five-day"></div>
    </div>
  );
};

export default DisplayDay;