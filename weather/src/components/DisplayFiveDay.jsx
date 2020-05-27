import React from "react";
import { getFehrenheit } from '../store/functions/getFehrenheit';
import GetWeatherIcon from './GetWeatherIcon';

export const DisplayFiveDay = ({ weather }) => {

  return (
    <div className="weather-five-day">
      <div className="weather-icon">
        <div className="weather-state-name">
          <p>{weather.weather_state_name}</p>
        </div>
        <div className="weather-img">
          <GetWeatherIcon abbr={weather.weather_state_abbr} />
        </div>
      </div>


      <div className="weather-temp">
        <h1>
          {Math.round(getFehrenheit(weather.the_temp))}
          {"\u00b0"}
        </h1>
        <div className="temp-toggle-button"><p>F</p></div>
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


  );
};

export default DisplayFiveDay;