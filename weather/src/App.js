import React, { Component } from 'react';
//import actions
import Rain from './components/Rain';
//import components
import LocationSearch from './components/LocationSearch';
import DisplayWeather from './components/DisplayWeather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Rain />
        <LocationSearch />
        <DisplayWeather />
      </header>
    </div>
  );
}

export default App;
