import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchLocation } from '../store/actions/locationAction';


const LocationSearch = (props) =>{
    useEffect(()=> {
      props.fetchLocation();
    },[]);
    return(
        <div className="location-search-form">
            <form>
            <input
            className="location-input"
            type="text"
            name="newLocation"
            placeholder="Enter A Location"
            value={props.search}
            onChange={()=> {}}
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

const mapStateToProps = state => {
  return {
    search: state.location.search,
    woeid: state.location.woeid

  }
}

export default connect(
  mapStateToProps,
  { fetchLocation } )(LocationSearch);