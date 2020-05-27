import { FETCHING_WEATHERS, WEATHER_FETCH_SUCCESS, WEATHER_FETCH_ERROR } from "./weatherAction";

const initialState = { title: "", consolidated_weather: [], fetchingWeathers: false, error: "" };

export const weathersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_WEATHERS:
      return Object.assign({}, state, { fetchingWeathers: true }); // if we're fetching simply trigger the boolean!
    case WEATHER_FETCH_SUCCESS:
      return Object.assign({}, state, {
        consolidated_weather: [...state.consolidated_weather, ...action.payload], // if our promise was successfull, build out the weathers array.
        title: state.title,
        fetchingWeathers: false // also, set our boolean to false, because we're no longer fetching

      });
    case WEATHER_FETCH_ERROR:
      return Object.assign({}, state, {
        fetchingWeathers: false, // we're also no longer fetching here so set the boolean to false
        error: "Error fetching Weathers" // now we're getting an error back, set the error as we'd see fit
      });
    default:
      return state;
  }
};

// fetching
// feteched
// errorFetching
