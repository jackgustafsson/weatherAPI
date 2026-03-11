export function renderFunction(name, lat, lon, weather) {
    const container = document.querySelector("main");

    const h1 = document.createElement("h1");
    h1.innerText = name;
    container.appendChild(h1);

    const p1 = document.createElement("p");
    p1.innerText = `lat: ${lat}`;
    container.appendChild(p1);

    const p2 = document.createElement("p");
    p2.innerText = `lon: ${lon}`;
    container.appendChild(p2);

    const p3 = document.createElement("p");
    p3.innerText = `temp: ${weather.main.temp} °C`;
    container.appendChild(p3);
}