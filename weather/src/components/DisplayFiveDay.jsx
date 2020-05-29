import React from "react";
import { getFehrenheit } from '../store/functions/getFehrenheit';
import { returnWeekday } from '../store/functions/formateDate';
import GetWeatherIcon from './GetWeatherIcon';

export const DisplayFiveDay = ({ weather }) => {

  return (
    <div className="weather-five-day">
      <div className="weather-day-abbr">
      <p>{returnWeekday(weather.applicable_date)}</p>
      </div>
      <div className="weather-icon">
        <div className="weather-state-name">
        </div>
        <div className="weather-img">
          <GetWeatherIcon abbr={weather.weather_state_abbr} />
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


  );
};

export default DisplayFiveDay;