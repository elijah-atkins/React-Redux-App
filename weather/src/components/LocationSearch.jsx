import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchLocation } from "../store/actions/locationAction";

const LocationSearch = (props) => {
  const getLocation = props.fetchLocation;

  const [search, setSearch] = useState(props.search);
  const updateInput = (e) => {
    e.preventDefault();
    setSearch(([e.target.name] = e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getLocation(search);
  };

  useEffect(() => {
    getLocation();
  }, [getLocation]);

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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    search: state.location.search,
    woeid: state.location.woeid,
    toggle: state.location.toggle,
  };
};

export default connect(mapStateToProps, { fetchLocation })(LocationSearch);
