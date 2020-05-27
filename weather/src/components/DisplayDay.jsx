import React from "react";


export const DisplayDay = ({ weather }) => {
    console.log(weather)
  return (
    <div className="day-weather">
      <div className="weather-state-name">
        <p>{weather.weather_state_name}</p>
      </div>
      <div className="TEMP-REACT-SVG-SWITCH">
        ICON={weather.weather_state_abbr}
      </div>
      <div className="wind">
        <p>Wind</p>
      </div>

      <div className="weather-temp">
        <h1>
          {weather.the_temp}
          {"\u00b0"}
        </h1>
        <div className="temp-toggle-button">F/C</div>
      </div>
      <div className="weather-wind">
        <h1>3</h1>
        <p>mph</p>
        <h2>SW</h2>
      </div>
      <div className="weather-low-high">
        <h1>
          {weather.min_temp}
          {"\u00b0"}
        </h1>
        <h1>
          {weather.max_temp}
          {"\u00b0"}
        </h1>
      </div>
      <div className="five-day"></div>
    </div>
  );
};

export default DisplayDay;