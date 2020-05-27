import React from 'react';


const LocationSearch = props =>{
    console.log(props)
    return(
        <div className="location-search-form">
            <form>
            <input
            className="location-input"
            type="text"
            name="newLocation"
            placeholder="Enter A Location"
            value={null}
            onChange={null}
          />
          <button
            onClick={() => {

            }}
          >
            Get Weather
          </button>
            </form>

        </div>
    )
};

export default LocationSearch;