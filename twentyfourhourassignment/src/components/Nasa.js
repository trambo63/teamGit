import React from 'react';
import usePosition from './GeoLocation';

const NasaPic = () => {

let lat = Math.round(usePosition().latitude)
let lon = Math.round(usePosition().longitude)
console.log(lon)
console.log(lat)
const key = 'r2jRbdbVKRy6mnkRnkRP8YgBfg1DKYgZq9n5vIoz';
const baseUrl = `https://api.nasa.gov/planetary/earth/imagery?lon=${lon}&lat=${lat}&date=2014-02-01&dim=0.10&api_key=${key}`
 
    return(
        <div>
             <img src={baseUrl}/>
        </div>
    )
    
}


export default NasaPic;
