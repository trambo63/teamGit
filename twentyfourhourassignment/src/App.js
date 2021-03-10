import React, {useEffect, useState} from 'react';
import './App.css';
import WeatherApp from './components/Weather';
import Nasa from './components/Nasa';

function App() {


  return (
    <div className="App">
      <h2>test</h2>
      <WeatherApp />
      <Nasa />
    </div>
  );
}



export default App;
