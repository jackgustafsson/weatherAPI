export function renderFunction(weather) {
    const container = document.querySelector("main");

    const h1 = document.createElement("h1");
    h1.innerText = weather.name;
    container.appendChild(h1);

    const p1 = document.createElement("p");
    p1.innerText = `weather: ${weather.weather[0].main}`;
    container.appendChild(p1);

    const p2 = document.createElement("p");
    p2.innerText = `: ${weather.weather[0].description}`;
    container.appendChild(p2);

    const p4 = document.createElement("p");
    p4.innerText = `temp: ${weather.main.temp} °C`;
    container.appendChild(p4);

    const p5 = document.createElement("p");
    p5.innerText = `visibility: ${weather.visibility}M`;
    container.appendChild(p5);

    const p6 = document.createElement("p");
    p6.innerText = `humidity: ${weather.main.temp} °C`;
    container.appendChild(p6);

    }