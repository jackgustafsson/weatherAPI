/*
    Converting country-abbreviation to its full name:

    const country = data[0].country
    const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
    p.textContent = regionNames.of(country);

    Converting unix timestamps to local date and time strings:

    const timestamp = new Date(weather.dt * 1000);
    const sunset = new Date(weather.sys.sunset * 1000);
    const sunrise = new Date(weather.sys.sunrise * 1000);
    const sunriseDate = sunrise.toLocaleDateString("sv") + " " + sunrise.toLocaleTimeString("sv")
    const sunsetDate = sunset.toLocaleDateString("sv") + " " + sunset.toLocaleTimeString("sv")
    const date = timestamp.toLocaleDateString("sv") + " " + timestamp.toLocaleTimeString("sv")
    console.log("Today's date: " + date);
    console.log("Sunrise: " + sunriseDate)
    console.log("Sunset " + sunsetDate);
*/