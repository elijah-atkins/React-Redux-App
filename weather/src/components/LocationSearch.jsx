import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchLocation } from "../store/actions/locationAction";
import validLocations from './validLocations';

const LocationSearch = (props) => {
  const getLocation = props.fetchLocation;
  /* STEP 1: Create search and searchResults state
   - search will save the data from the search input on every occurance of the change event.
   - searchResults is used to set the search result.
  */
  const [search, setSearch] = useState(props.search);
  const [searchResults, setSearchResults] = useState(validLocations.cities);
  
    /* STEP 2: create handleChange function and add to input 
   The handleChange method takes the event object as the argument
   and sets the current value of the input to the searchTerm state
   using setSearchTerm
  */
  const updateInput = (e) => {

    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getLocation(search);
  };

  const handleCities = (value) => {
    setSearch(value.target.innerHTML);
  }


  useEffect(() => {
    // map transforms [].length => a new type of data at the same length
    // find reads an expression and then returns the first value that that expression is true
    // filter reads an expression and then returns an [] with values where expression was true
    // reduce
    const AllLocations = [...validLocations.cities];
    const newResults = AllLocations.filter(cities => {
      return cities.toLowerCase().includes(search.toLowerCase());
    });
    setSearchResults(newResults.slice(0,4));
  }, [search]);
  return (
    <div className="location-search">
      <div className="searchBox">
        <input
          id="search"
          className="searchInput"
          type="text"
          name="search"
          placeholder="Enter A Location"
          value={search}
          onChange={(e) => updateInput(e)}
          onBlur={handleSubmit}
        />

        <button className="searchButton" onClick={handleSubmit}>
          <svg
            className="search-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M7.008 34.984c0-15.75 12.77-28.393 28.52-28.393 15.751 0 28.52 12.643 28.52 28.393 0 15.751-12.769 28.394-28.52 28.394S7.008 50.735 7.008 34.984m-5.82.125C1.188 16.114 16.511.791 35.506.791c18.994 0 34.318 15.324 34.318 34.318 0 18.995-15.324 34.318-34.318 34.318-18.995 0-34.318-15.323-34.318-34.318z"
            />
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M58.857 57.461c3.566-3.076 5.182 2.038 13.667 8.749 22.551 17.835 32.83 19.804 24.016 29.771-8.836 9.99-15.182-2.686-30.849-23.603-6.558-8.755-10.581-11.685-6.834-14.917z"
            />
          </svg>
        </button>
      </div>
      {(searchResults.length > 1)?
      <div className="city-list">
        <ul>
          {/* STEP 3: Map over searchResults to see values in that array */}
          {searchResults.map(city => {
            return <li key={city} onClick={ handleCities }>{city}</li>;
          })}
        </ul>
      </div> : null
}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    search: state.location.search,
    searchResults: state.location.searchResults,
    woeid: state.location.woeid,
    toggle: state.location.toggle,
  };
};

export default connect(mapStateToProps, { fetchLocation })(LocationSearch);
