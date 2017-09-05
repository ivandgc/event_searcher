import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Map from './components/Map'
import MapContainer from './components/MapContainer'

class App extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
        </p>
        <MapContainer />
      </div>
    );
  }
}

export default App;
