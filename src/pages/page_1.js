// Write functions that hit WeatherAPI, take location, return weather data.
// feed data into console.log()

// base url: api.weatherapi.com/v1
// current weather api method: /current.json | forecast api method: /forecast.json

const getData = async (location) => {
    let url = 'https://api.weatherapi.com/v1/forecast.json?key=90f88ad0266142fc94e34413241506&q=';
    const response = await fetch(`${url}${location}`, {
        mode: 'cors'
        // headers: {
        //     'Content-Type': "application/json",
        // },
        // body: JSON.stringify(data),
    });
    const data = await response.json();
    console.log(data.current.condition);
}

getData('london');


// write functions that process the JSON data you're getting from the API and return an object with only the data you require for your app.




// make form lets users input location, fetch weather info. 
// feed to console log.





// render information to web page.





// add styling


// push app to github by running npm run deploy:gh-pages