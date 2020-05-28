import React, { useEffect } from "react";
import { connect } from "react-redux";
import DisplayDay from "./DisplayDay";
import DisplayFiveDay from './DisplayFiveDay';
import { formatTime } from "../store/functions/formatTime";
import { fetchWeather } from "../store/actions/weatherAction";

const DisplayWeather = (props) => {
  //console.log('DisplayWeather', props)
    const getWeather = props.fetchWeather;
  useEffect(() => {
    //call an action creator
    getWeather(props.woeid);
  }, [getWeather]);

  const sunRise = new Date(props.sun_rise);
  const sunSet = new Date(props.sun_set);
  if (props.fetchingWeather) {
    return <div>loading</div>;
  }
  return (
    <div className="display-weather">
      <div className="location">
        <h1>{props.title}</h1>
        <div className="sunset-sunrise">
          <p>Sunrise: {formatTime(sunRise)}</p>
          <p>Sunset: {formatTime(sunSet)}</p>
        </div>
      </div>
      {props.consolidated_weather.slice(0, 1).map((day) => {
        return <DisplayDay weather={day} key={day.id} />;
      })}
      <div className="five-day">
      {props.consolidated_weather.slice(1).map((day) => {
        return <DisplayFiveDay weather={day} key={day.id} />;
      })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {

  return {
    sun_rise: state.weather.sun_rise,
    sun_set: state.weather.sun_set,
    title: state.weather.title,
    consolidated_weather: [...state.weather.consolidated_weather],
    fetchingWeather: state.weather.fetchingWeather,
    woeid: state.weather.woeid,
    error: state.weather.error,
  };
};

export default connect(mapStateToProps, { fetchWeather })(DisplayWeather);
