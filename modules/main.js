export function renderFunction(f) {
    const container = document.querySelector("#results-container");
    const form = document.querySelector('#search-bar');

    container.innerHTML = "";
    container.appendChild(form);

    const h1 = document.createElement("h1");
    h1.innerText = f.city;
    container.appendChild(h1);

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
        const p = document.createElement("p");
        p.textContent = `${label}: ${value}`;
        container.appendChild(p);
    }
}