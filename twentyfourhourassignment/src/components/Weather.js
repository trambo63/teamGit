import React, {useState} from 'react';
import usePosition from './GeoLocation';
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const key = "23467fc4ff5f97589f94669c40eee388";
const imperial = '&units=imperial';
const metric = '&units=metric';

// http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API

// http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API
const WeatherApp = () => {

    const [tempF, setTempF] = useState('');
    const [tempC, setTempC] = useState('');
    const [tempSwitch, settempSwitch] = useState(true);

    const FetchResultsC = () => {

        let lat = Math.round(usePosition().latitude)
        let lon = Math.round(usePosition().longitude)
        console.log(lon)
        console.log(lat)
        let url = `${baseUrl}?lat=${lat}&lon=${lon}&APPID=${key}${metric}`;
        
        fetch(url)
            .then(res => res.json())
            .then(data => setTempC(data.main.temp))
            .catch(err => console.log(err));
    };
    FetchResultsC();

    const FetchResultsF = () => {
        let lat = Math.round(usePosition().latitude)
        let lon = Math.round(usePosition().longitude)
        console.log(lon)
        console.log(lat)
        let url = `${baseUrl}?q=cleveland&APPID=${key}${imperial}`;
        
        fetch(url)
            .then(res => res.json())
            .then(data => setTempF(data.main.temp))
            .catch(err => console.log(err));
    };
    FetchResultsF();


    
    return(
        <div className="tempDisplay">
            <h3>Current Temp</h3>
            {
                tempSwitch?<p>{tempF} F</p>:<p>{tempC} C</p>
            }
            {/* <button onClick={()=>settempSwitch(true)}>Toogle</button>
            <button onClick={()=>settempSwitch(false)}>Toogle</button> */}
            <button onClick={()=>settempSwitch(!tempSwitch)}>Toogle</button>
        </div>
    )
}

export default WeatherApp;
