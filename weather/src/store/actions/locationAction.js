import axios from "axios";

export const FETCHING_LOCATION = "FETCHING_LOCATIONS";
export const LOCATION_FETCH_SUCCESS = "LOCATION_FETCH_SUCCESS";
export const LOCATION_FETCH_ERROR = "LOCATION_FETCH_ERROR";
export const TOGGLE_EDITING = "TOGGLE_EDITING";

// Those three types above are all a representation of our State Machine
// fetching, resolve, reject... etc. : ) Start to notice this pattern. You'll use it constantly in redux!
export const toggleEditing = () => {
  return {
    type: TOGGLE_EDITING,
  };
};
export const fetchLocation = (query) => {
//https://cors-anywhere.herokuapp.com/
    const promise = axios.get(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${query}`
    );
    return (dispatch) => {
      dispatch({ type: FETCHING_LOCATION }); // first state of 'fetching' is dispatched
      promise
        .then((response) => {
          dispatch({ type: LOCATION_FETCH_SUCCESS, payload: response.data[0] }); // 2nd state of success is dispatched IF the promise resolves
        })
        .catch((err) => {
          console.log(err);
          dispatch({ type: LOCATION_FETCH_ERROR }); // our other d2nd state of 'rejected' will be dispatched here.
        });
    };
};
