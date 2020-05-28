import {
  FETCHING_WEATHERS,
  WEATHER_FETCH_SUCCESS,
  WEATHER_FETCH_ERROR,
} from "../actions/weatherAction";

const initialState = {
  fetchingWeather: false,
  consolidated_weather: [
    {
      id: 6126943885852672,
      weather_state_name: "Light Rain",
      weather_state_abbr: "sn",
      wind_direction_compass: "NE",
      created: "2020-05-27T00:53:37.471109Z",
      applicable_date: "2020-05-26",
      min_temp: 9.77,
      max_temp: 24.354999999999997,
      the_temp: 23.155,
      wind_speed: 5.198435597258676,
      wind_direction: 38.5,
      air_pressure: 1014,
      humidity: 24,
      visibility: 15.049610275988229,
      predictability: 70,
    },
  ],
  time: "2020-05-26T21:42:00.844135-06:00",
  sun_rise: "2020-05-26T05:38:34.254490-06:00",
  sun_set: "2020-05-26T20:13:54.478915-06:00",
  timezone_name: "LMT",
  parent: {
    title: "Colorado",
    location_type: "Region / State / Province",
    woeid: 2347564,
    latt_long: "38.997921,-105.550957",
  },
  sources: [{}],
  title: "Colorado Springs",
  location_type: "City",
  woeid: 2383489,
  latt_long: "38.833450,-104.821808",
  timezone: "America/Denver",

};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_WEATHERS:
      return { 
        ...state,  
        fetchingWeather: true }; // if we're fetching simply trigger the boolean!
    case WEATHER_FETCH_SUCCESS:
      return {
        ...state,
        ...action.payload,
        fetchingWeather: false,
        error: ''
      };
    case WEATHER_FETCH_ERROR:
      return {
        ...state,
        fetchingWeathers: false, // we're also no longer fetching here so set the boolean to false
        error: "Error fetching Weather", // now we're getting an error back, set the error as we'd see fit
      };
    default:
      return state;
  }
};

// fetching
// feteched
// errorFetching
