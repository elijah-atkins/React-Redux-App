import axios from "axios";

export const FETCHING_WEATHERS = "FETCHING_WEATHERS";
export const WEATHER_FETCH_SUCCESS = "WEATHER_FETCH_SUCCESS";
export const WEATHER_FETCH_ERROR = "WEATHER_FETCH_ERROR";
// Those three types above are all a representation of our State Machine
// fetching, resolve, reject... etc. : ) Start to notice this pattern. You'll use it constantly in redux!

export const fetchWeather = (woeid) => {  
  const promise = axios.get(`https://www.metaweather.com/api/location/${woeid}`);
  return dispatch => {
    dispatch({ type: FETCHING_WEATHERS }); // first state of 'fetching' is dispatched
    promise
      .then(response => {
         console.log('weatherAction: then', response.data)
        dispatch({ type: WEATHER_FETCH_SUCCESS, payload: response.data }); // 2nd state of success is dispatched IF the promise resolves
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: WEATHER_FETCH_ERROR, payload: err}); // our other 2nd state of 'rejected' will be dispatched here.
      });
  };
};

export const updateWeather = newWeather => {
  return {};
}