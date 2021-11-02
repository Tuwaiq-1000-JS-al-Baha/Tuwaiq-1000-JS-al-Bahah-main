const weatherDiv = document.querySelector(".weather-div")

navigator.geolocation.getCurrentPosition(function (position) {
    console.log("success")
    console.log("position:", position)

    const lon = position.coords.longitude
    const lat = position.coords.latitude

    axios.get("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=75798695b70753c1e6e38f96ae146a71&units=metric&lang=ar")
        .then(response => {
            const data = response.data

            console.log("data:", data)

            const temp = Math.round(data.main.temp)
            const name = data.name

            const icon = data.weather[0].icon
            const main = data.weather[0].main
            const description = data.weather[0].description

            const tempMax = Math.round(data.main.temp_max)
            const tempMin = Math.round(data.main.temp_min)

            const weatherElement = `
            <div>
                <h2>${name}</h2>
                <h2>${temp}°C</h2>
                <img src="http://openweathermap.org/img/wn/${icon}@2x.png">
                <p>${main}</p>
                <p>H: ${tempMax}°C, L: ${tempMin}°C</p>
                <p>${description}</p>
            </div>
            `

            weatherDiv.innerHTML = weatherElement
        })

}, function (error) {
    console.log("you need to allow location to use this app")
})