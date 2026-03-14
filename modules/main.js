import { viewForecastData } from "./api.js";

export function renderCurrent(f) {
    const container = document.querySelector("#results-container");
    const form = document.querySelector('#search-bar');

    container.innerHTML = "";
    container.appendChild(form);

    const currentWrap = document.createElement("section");
    currentWrap.classList.add("weather-current");
    container.appendChild(currentWrap);

    const h1 = document.createElement("h1");
    h1.classList.add("weather-title");
    h1.innerText = f.city;
    currentWrap.appendChild(h1);

    const rowsWrap = document.createElement("div");
    rowsWrap.classList.add("weather-rows");
    currentWrap.appendChild(rowsWrap);

    const rows = [
        ["Date", f.date],
        ["Weather", f.weather],
        ["Description", f.description],
        ["Temp", `${f.temp}C`],
        ["Feels like", `${f.tempFeelsLike}C`],
        ["Pressure", `${f.pressure}bar`],
        ["Humidity", `${f.humidity}%`],
        ["Visibility", `${f.visibility}m`],
        ["Sunrise", f.sunrise],
        ["Sunset", f.sunset],
        ["Wind speed", `${f.windSpeed}m/s`],
        ["Wind Direction", f.windDeg]
    ];

    for (const [label, value] of rows) {
        const row = document.createElement("p");
        row.classList.add("weather-row");

        const spanLabel = document.createElement("span");
        spanLabel.classList.add("weather-label");
        spanLabel.textContent = `${label}: `;

        const spanValue = document.createElement("span");
        spanValue.classList.add("weather-value");
        spanValue.textContent = value;

        row.appendChild(spanLabel);
        row.appendChild(spanValue);

        rowsWrap.appendChild(row);
    }
}

export function renderForecast(f) {
    const container = document.querySelector("#results-container");
    const form = document.querySelector("#search-bar");

    container.innerHTML = "";
    container.appendChild(form);

    const city = f.city?.name;

    const title = document.createElement("h1");
    title.classList.add("forecast-title");
    title.textContent = `${city} (Forecast)`;
    container.appendChild(title);

    const grid = document.createElement("div");
    grid.classList.add("forecast-grid");
    container.appendChild(grid);

    const list = Array.isArray(f.list) ? f.list : [];
    const picks = [0, 8, 16, 24].map((i) => list[i])

    for (const item of picks) {

        const vm = viewForecastData(city, item);
        const card = document.createElement("section");
        card.classList.add("forecast-card");

        const h2 = document.createElement("h2");
        h2.classList.add("forecast-time");
        h2.textContent = vm.date;
        card.appendChild(h2);

        const rows = [
            ["Weather", vm.weather],
            ["Description", vm.description],
            ["Temp", `${vm.temp}C`],
            ["Feels like", `${vm.tempFeelsLike}C`],
            ["Pressure", `${vm.pressure}bar`],
            ["Humidity", `${vm.humidity}%`],
            ["Visibility", `${vm.visibility}m`],
            ["Wind speed", `${vm.windSpeed}m/s`],
            ["Wind Direction", vm.windDeg],
        ];

        for (const [label, value] of rows) {
            const row = document.createElement("p");
            row.classList.add("forecast-row");
            row.textContent = `${label}: ${value}`;
            card.appendChild(row);
        }

    grid.appendChild(card);
    }
}