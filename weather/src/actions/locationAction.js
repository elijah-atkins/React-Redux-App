import axios from "axios";

export const FETCHING_LOCATIONS = "FETCHING_LOCATIONS";
export const LOCATION_FETCH_SUCCESS = "LOCATION_FETCH_SUCCESS";
export const LOCATION_FETCH_ERROR = "LOCATION_FETCH_ERROR";
// Those three types above are all a representation of our State Machine
// fetching, resolve, reject... etc. : ) Start to notice this pattern. You'll use it constantly in redux!

export const fetchLocations = () => {
  const promise = axios.get(`https://www.metaweather.com/api/location/search/?query=${query}`);
  return dispatch => {
    dispatch({ type: FETCHING_LOCATIONS }); // first state of 'fetching' is dispatched
    promise
      .then(response => {
        dispatch({ type: LOCATION_FETCH_SUCCESS, payload: response.data.message }); // 2nd state of success is dispatched IF the promise resolves
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: LOCATION_FETCH_ERROR }); // our other 2nd state of 'rejected' will be dispatched here.
      });
  };
};
