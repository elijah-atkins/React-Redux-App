import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchLocation } from '../store/actions/locationAction';


const LocationSearch = (props) =>{
  const [search, setSearch] = useState('')
  const updateInput = e => {
    e.preventDefault();
    setSearch([e.target.name]= e.target.value)
 };


  const handleSubmit = e => {
    e.preventDefault();

    props.fetchLocation(search);

  };
    const getLocation = props.fetchLocation;
    useEffect(()=> {
      getLocation();
    },[getLocation]);
    return(
        <div className="location-search-form">
            <form>
            <input
            className="location-input"
            type="text"f
            name="newLocation"
            placeholder="Enter A Location"
            value={search}
            onChange={e => updateInput(e)}
          />
          <button
            onClick={handleSubmit}
          >
            Get Weather
          </button>
            </form>

        </div>
    )
};

const mapStateToProps = state => {
  return {
    search: state.location.search,
    woeid: state.location.woeid
  }
}

export default connect(
  mapStateToProps,
  { fetchLocation } )(LocationSearch);