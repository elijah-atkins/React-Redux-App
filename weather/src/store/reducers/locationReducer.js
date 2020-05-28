import { FETCHING_LOCATION, LOCATION_FETCH_SUCCESS, LOCATION_FETCH_ERROR } from "../actions/locationAction";

const initialState = { 
  woeid: "", 
  search: "",
  fetchingLocation: false, 
  error: "" };

export const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_LOCATION:
      return {
        ...state, 
        fetchingLocation: true }; // if we're fetching simply trigger the boolean!
    case LOCATION_FETCH_SUCCESS:
      console.log('locationReducer Fetch Succesful',action.payload)
      return {
        ...state,
        ...action.payload, // if our promise was successfull, build out the dogs array.
        fetchingLocation: false, // also, set our boolean to false, because we're no longer fetching
        error: ''
      };
    case LOCATION_FETCH_ERROR:
      return {
        ...state, 
        fetchingLocation: false, // we're also no longer fetching here so set the boolean to false
        error: "Error fetching Location" // now we're getting an error back, set the error as we'd see fit
      };
    default:
      return state;
  }
};

// fetching
// feteched
// errorFetching
