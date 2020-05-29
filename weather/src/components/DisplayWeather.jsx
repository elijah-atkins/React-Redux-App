import React, { useEffect } from "react";
import { connect } from "react-redux";
import DisplayDay from "./DisplayDay";
import DisplayFiveDay from './DisplayFiveDay';
import LocationSearch from './LocationSearch';
import Footer from './Footer';
import { fetchWeather } from "../store/actions/weatherAction";
import { toggleEditing } from '../store/actions/locationAction';



const DisplayWeather = (props) => {
  //console.log('DisplayWeather', props)
    const getWeather = props.fetchWeather;
    const woeid = props.woeid;
    const toggleEditing = props.toggleEditing;


  useEffect(() => {
    //call an action creator
    if(woeid){
      getWeather(woeid);
      toggleEditing();
    }

  }, [getWeather, woeid, toggleEditing]);

  if (!props.woeid) {
    return <div><LocationSearch /></div>;
  }else if (props.fetchingWeather) {

    return <div>Loading</div>;
  }
  return (
    <div className="display-weather">
      <div className="display-location">
        {props.toggle ? <div className="cancel-location"><button className="cancelButton" onClick={()=>{props.toggleEditing()}}>X</button><LocationSearch /></div> :
<div className="toggle-search" onClick={()=>{
props.toggleEditing()
}}><h1>{props.title}</h1></div>}

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
    toggle: state.location.toggle,

  };
};

export default connect(mapStateToProps, { fetchWeather, toggleEditing })(DisplayWeather);
