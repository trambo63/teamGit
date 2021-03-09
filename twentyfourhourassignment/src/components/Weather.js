import React, {useState, useEffect} from 'react';
const baseUrl = "https://api.openweathermap.org/data/2.5/weather"
const key = "23467fc4ff5f97589f94669c40eee388";
const imperial = '&units=imperial';
const metric = '&units=metric';


const WeatherApp = () => {
    const [city, setCity] = useState('');
    const [tempF, setTempF] = useState('');
    const [tempC, setTempC] = useState('');
    const [tempSwitch, settempSwitch] = useState(true);
    
    const fetchResultsC = () => {
        let url = `${baseUrl}?q=cleveland&APPID=${key}${metric}`;
        
        fetch(url)
            .then(res => res.json())
            .then(data => setTempC(data.main.temp))
            .catch(err => console.log(err));
    };
    fetchResultsC();

    const fetchResultsF = () => {
        let url = `${baseUrl}?q=cleveland&APPID=${key}${imperial}`;
        
        fetch(url)
            .then(res => res.json())
            .then(data => setTempF(data.main.temp))
            .catch(err => console.log(err));
    };
    fetchResultsF();
    
    let temp = tempF;
    
    return(
        <div>
            <p>{temp}</p>
            {/* <p>{tempC}</p> */}
            <button>Toogle</button>
        </div>
    )
}

export default WeatherApp;
