import React, {useState, useEffect} from 'react';
let lat = 39.7684
let lon = 86.1581
const key = 'r2jRbdbVKRy6mnkRnkRP8YgBfg1DKYgZq9n5vIoz';
const baseUrl = `https://api.nasa.gov/planetary/earth/imagery?lon=${lon}&lat=${lat}&date=2014-02-01&api_key=${key}`

const NasaPic = () => {
    console.log('in nasaPic');
    const fetchResults = () => {
        console.log('fetchResults');
        console.log(baseUrl);
        let url = baseUrl;
        
        fetch(url)
            .then(function(result) {
                return result.json();
            }).then(function(json){
                console.log(json);
            }).catch(function(err){
                alert(err);
            });
        };
    fetchResults();
    return(
        <div>
            <p>{}</p>
        </div>
    )
}


export default NasaPic;
