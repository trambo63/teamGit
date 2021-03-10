import React from 'react';

const NasaPic = () => {

let lat = 39.7684
let lon = 86.1581
const key = 'r2jRbdbVKRy6mnkRnkRP8YgBfg1DKYgZq9n5vIoz';
const baseUrl = `https://api.nasa.gov/planetary/earth/imagery?lon=${lon}&lat=${lat}&date=2014-02-01&api_key=${key}`
 
    return(
        <div>
             <img src={baseUrl}/>
        </div>
    )
    
}


export default NasaPic;
