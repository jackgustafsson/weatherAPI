import { renderFunction } from "./main.js";
const API_KEY = "1bd191a3ddba932a50d8337c447a21a4";

async function getDataFromCity() {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=Stockholm&appid=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

async function getWeatherData(lon, lat) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data;
}

async function main() {
    const cityResults = await getDataFromCity();
    const { lat, lon, name } = cityResults[0];
    const weather = await getWeatherData(lon, lat);
    renderFunction(weather);
    console.log(weather)
}
main()
console.log(Date.now())
