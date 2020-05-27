import React from 'react';


const LocationSearch = () =>{

    return(
        <div className="location-search-form">
            <form>
            <input
            className="location-input"
            type="text"
            name="newLocation"
            placeholder="Enter A Location"
            value="Colorado Springs"
            onChange={()=> { return (null)}}
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