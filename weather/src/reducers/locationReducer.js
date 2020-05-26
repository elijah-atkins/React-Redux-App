import { FETCHING_LOCATION, FETCHING_LOCATION_SUCCESS, FETCHING_LOCATION_ERROR } from "./locationAction";

const initialState = { location: "", fetchingLocation: false, error: "" };

export const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_LOCATION:
      return Object.assign({}, state, { fetchingLocation: true }); // if we're fetching simply trigger the boolean!
    case FETCHING_LOCATION_SUCCESS:
      return Object.assign({}, state, {
        location: action.payload, // if our promise was successfull, build out the dogs array.
        fetchingLocation: false // also, set our boolean to false, because we're no longer fetching
      });
    case FETCHING_LOCATION_ERROR:
      return Object.assign({}, state, {
        fetchingLocation: false, // we're also no longer fetching here so set the boolean to false
        error: "Error fetching Location" // now we're getting an error back, set the error as we'd see fit
      });
    default:
      return state;
  }
};

// fetching
// feteched
// errorFetching
