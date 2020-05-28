import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchLocation } from '../store/actions/locationAction';


const LocationSearch = (props) =>{
  const handleChanges = e => {
    this.props.search(e.target.value)
 };


  const handleSubmit = e => {
    e.preventDefault();
    this.props.search(this.state.input);

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
            value={props.search}
            onChange={e => handleChanges(e.target.value)}
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