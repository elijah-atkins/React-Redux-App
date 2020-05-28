import React from 'react';
//import actions

//import components
import LocationSearch from './components/LocationSearch';
import DisplayWeather from './components/DisplayWeather';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <LocationSearch />
        <DisplayWeather />

      </header>
    </div>
  );
}

export default App;
