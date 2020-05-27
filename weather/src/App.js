import React, { Component } from 'react';
//import actions
import Rain from './components/Rain';
//import components
import LocationSearch from './components/LocationSearch'

function App() {
  return (
    <div className="App">
      <header className="App-header">
<Rain />
        <LocationSearch />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
