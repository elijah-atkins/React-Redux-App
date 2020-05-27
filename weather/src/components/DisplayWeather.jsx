import React from 'react';
import { connect } from 'react-redux';
import DisplayDay from './DisplayDay';

const DisplayWeather = props => {
    console.log(props)
    return(
        <div className="display-weather">
            <div className="location">
                <h1>{props.title}</h1>
                <div className="sunset-sunrise">
                    <p>Sunrise: {props.sun_rise}</p>
                    <p>Sunset: {props.sun_set}</p>
                </div>
            </div>
            {props.consolidated_weather.map(day =>{
                return(
                    <DisplayDay weather={day} />
                )
            })}
            
        </div>
        
    )
}

const mapStateToProps = state => {

    return {
        sun_rise: state.weather.sun_rise,
        sun_set: state.weather.sun_set,
        title: state.weather.title,
        consolidated_weather: state.weather.consolidated_weather


    }
}

export default connect(
    mapStateToProps, {})(DisplayWeather);