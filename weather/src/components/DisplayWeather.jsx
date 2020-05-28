import React, { useEffect } from "react";
import { connect } from "react-redux";
import DisplayDay from "./DisplayDay";
import DisplayFiveDay from './DisplayFiveDay';
import Footer from './Footer';
import { formatTime } from "../store/functions/formatTime";
import { fetchWeather } from "../store/actions/weatherAction";

const DisplayWeather = (props) => {
  //console.log('DisplayWeather', props)
    const getWeather = props.fetchWeather;
    const woeid = props.woeid;
  useEffect(() => {
    //call an action creator
    if(woeid){
      getWeather(woeid);
    }

  }, [getWeather, woeid]);

  const sunRise = new Date(props.sun_rise);
  const sunSet = new Date(props.sun_set);
  if (!props.woeid) {
    return <div></div>;
  }else if (props.fetchingWeather) {
    return <div>Loading</div>;
  }
  return (
    <div className="display-weather">
      <div className="display-location">
        <div className="location"><h1>{props.title}</h1></div>
        <div className="sunset-sunrise">
          <p>Dawn: {formatTime(sunRise)}</p>
          <p>Dusk: {formatTime(sunSet)}</p>
        </div>
      </div>
     <DisplayDay weather={props.consolidated_weather[0]} key={props.consolidated_weather[0].id} />

      <div className="five-day">

      {props.consolidated_weather.slice(1).map((day) => {
        return <DisplayFiveDay weather={day} key={day.id} />;
      })}
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {

  return {
    woeid: state.location.woeid,
    
    sun_rise: state.weather.sun_rise,
    sun_set: state.weather.sun_set,
    title: state.weather.title,
    consolidated_weather: [...state.weather.consolidated_weather],
    fetchingWeather: state.weather.fetchingWeather,
    error: state.weather.error,
  };
};

export default connect(mapStateToProps, { fetchWeather })(DisplayWeather);
