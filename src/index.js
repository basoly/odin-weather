import "./css/style.css";

// Write functions that hit WeatherAPI, take location, return weather data.
// feed data into console.log()

// base url: api.weatherapi.com/v1
// current weather api method: /current.json | forecast api method: /forecast.json

const getCurrent = async (location) => {
    let url = 'https://api.weatherapi.com/v1/current.json?key=90f88ad0266142fc94e34413241506&q=';
    const response = await fetch(`${url}${location}`, {
        mode: 'cors'});
    const data = await response.json();
    console.log(`Current Weather: ${data.current.condition.text}`);
    // console.log(data);
}

const getForecast = async (location,days) => {
    if (days > 14 || days < 1) {
        return alert('Invalid input. Input a number of days between 1 and 14')
    } else {
        let url = `https://api.weatherapi.com/v1/forecast.json?key=90f88ad0266142fc94e34413241506&q=${location}&days=${days}`;
        const response = await fetch(url, {mode: 'cors'})
        const data = await response.json();
        console.log(data.forecast.forecastday); // object with each day as object from 0 to days-1
        // data.forecast.forecastday.0.date, data.forecast.forecastday.0.day.condition
        // data.forecast.forecastday.0.day.avgtemp_c / .avgtemp_f / maxtemp_c / maxtemp_f / mintemp_c / mintemp_f
    }
}

getCurrent('london');
getForecast('london', 7);


// write functions that process the JSON data you're getting from the API and return an object with only the data you require for your app.




// make form lets users input location, fetch weather info. 
// feed to console log.





// render information to web page.





// add styling


// push app to github by running npm run deploy:gh-pages