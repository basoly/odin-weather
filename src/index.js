import "./css/style.css";

// Write functions that hit WeatherAPI, take location, return weather data.
// feed data into console.log()

// base url: api.weatherapi.com/v1
// current weather api method: /current.json | forecast api method: /forecast.json


// write functions that process the JSON data you're getting from the API and return an object with only the data you require for your app.



const getCurrent = async (location) => {
    let url = 'https://api.weatherapi.com/v1/current.json?key=90f88ad0266142fc94e34413241506&q=';
    const response = await fetch(`${url}${location}`, {
        mode: 'cors'});
    const data = await response.json();
    console.log(data);
    console.log(`Current Weather: ${data.current.condition.text}`)
    let current = `Current Weather: ${data.current.condition.text}`
    let content = document.querySelector('#content');
    let locElem = document.createElement('p');
    let element = document.createElement('p');
    element.innerHTML = current;
    locElem.innerHTML = `<div>${data.location.name}, ${data.location.region}, ${data.location.country}. Local Time: ${data.location.localtime}</div>`
    content.appendChild(locElem);
    content.appendChild(element);
    return current
    // console.log(data);
}

const getForecast = async (location,days) => {
    if (days > 14 || days < 1) {
        return alert('Invalid input. Input a number of days between 1 and 14')
    } else {
        let url = `https://api.weatherapi.com/v1/forecast.json?key=90f88ad0266142fc94e34413241506&q=${location}&days=${days}`;
        const response = await fetch(url, {mode: 'cors'})
        const response2 = await response.json();
        // const data = await response2.json();
        var forecast = response2.forecast.forecastday;
        console.log(forecast);
        let content = document.querySelector('#content');

        for (const key of Object.values(forecast)) {
            // iterate through object keys to get date and value
            let element = document.createElement('p');
            let weather = document.createElement('p')
            element.innerHTML = `<div>Date: ${key['date']}</div>`;
            // console.log(key.day)
            weather.innerHTML = key.day.condition.text;
            content.appendChild(element);
            content.appendChild(weather);
        }



        

        // object with each day as object from 0 to days-1
        // data.forecast.forecastday.0.date, data.forecast.forecastday.0.day.condition
        // data.forecast.forecastday.0.day.avgtemp_c / .avgtemp_f / maxtemp_c / maxtemp_f / mintemp_c / mintemp_f
    }
}
// getCurrent('london');
// getForecast('london', 7);




// make form lets users input location, fetch weather info. 
// feed to console log.

var form = document.createElement("form");
form.setAttribute("method", "post");
form.setAttribute("action", "submit.php")

var location = document.createElement('input');
location.setAttribute('id', 'location')
location.setAttribute('type', 'text');
location.setAttribute('name', "location");
location.setAttribute('placeholder', 'Enter valid location');

var days = document.createElement('input');
days.setAttribute('id', 'days-number')
days.setAttribute('type', 'number');
days.setAttribute('name', 'forecast-days')
days.setAttribute('placeholder', 'Enter number of days between 1 and 14');

var s = document.createElement("input");
s.setAttribute("type", "submit");
s.setAttribute("value", "Submit");
s.addEventListener('click', (e) => {
    e.preventDefault();
    let dataContainer = document.querySelector('#content');
    dataContainer.innerHTML = '';
    let location = document.querySelector('#location');
    let days = document.querySelector('#days-number');
    getCurrent(location.value);
    getForecast(location.value, days.value);
    location.value = '';
    days.value = '';  
})

form.appendChild(location);
form.appendChild(days);
form.appendChild(s);

let formContainer = document.querySelector('#form');
formContainer.appendChild(form);



// https://www.geeksforgeeks.org/how-to-create-a-form-dynamically-with-the-javascript/
// https://medium.com/@stheodorejohn/event-preventdefault-explained-controlling-default-browser-behavior-with-ease-b578d883aefe#:~:text=In%20JavaScript%2C%20event.,navigating%20to%20a%20new%20URL.





// render information to web page.





// add styling


// push app to github by running npm run deploy:gh-pages
