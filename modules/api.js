import { renderFunction } from "./main.js";
const API_KEY = "1bd191a3ddba932a50d8337c447a21a4";

async function getDataFromCity(cityName) {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(cityName)}&appid=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    return data
}

async function getWeatherData(lon, lat) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data;
}


function viewData(weather) {
    const timestamp = new Date(weather.dt * 1000);
    const sunset = new Date(weather.sys.sunset * 1000);
    const sunrise = new Date(weather.sys.sunrise * 1000);
    const sunriseDate = sunrise.toLocaleDateString("sv") + " " + sunrise.toLocaleTimeString("sv")
    const sunsetDate = sunset.toLocaleDateString("sv") + " " + sunset.toLocaleTimeString("sv")
    const date = timestamp.toLocaleDateString("sv") + " " + timestamp.toLocaleTimeString("sv")

    return {
        city: weather.name,
        date,
        weather: weather.weather[0].main,
        description: weather.weather[0].description,
        temp: weather.main.temp,
        tempFeelsLike: weather.main.feels_like,
        pressure: weather.main.pressure,
        humidity: weather.main.humidity,
        visibility: weather.visibility,
        sunrise: sunriseDate,
        sunset: sunsetDate,
        windSpeed: weather.wind.speed,
        windDeg: weather.wind.deg,
    };
}

async function main(city) {
    const cityResults = await getDataFromCity(city);
    const { lat, lon } = cityResults[0];
    const weather = await getWeatherData(lon, lat);

    const vw = viewData(weather);
    renderFunction(vw);
    console.log(weather);
}

function searchForm() {
    const form = document.querySelector('#search-bar');
    const input = form.querySelector('input[type="text"]');

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const cityName = input.value.trim();
        if (!cityName) return;

        try {
            await main(cityName);
        } catch (error) {
            console.log(error);
        }
    })
}
searchForm()
console.log(Date.now())