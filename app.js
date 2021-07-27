function showWeather() {
    let cityName = (prompt("Enter your city")).toUpperCase();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
        .then((res) => res.json())
        .then((data) => {

            let statementDiv = document.createElement("div");
            statementDiv.classList.add("statement-block");
            let statementText = data.name;
            statementDiv.textContent = ("Current Weather in " + statementText+ ":");
            document.body.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.append(statementDiv);

            let weatherIcon = document.createElement("img");
            weatherIcon.classList.add("img-block");
            let weatherIconCode = data.weather[0].icon;
            let iconUrl = (`http://openweathermap.org/img/w/${weatherIconCode}.png`);
            weatherIcon.setAttribute("src", iconUrl);
            document.body.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.append(weatherIcon);            

            let tempDiv = document.createElement("div");
            tempDiv.classList.add("temp-block");
            let tempText = data.main.temp;
            tempDiv.textContent = (tempText + "°C");
            document.body.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.append(tempDiv);

            let descriptionDiv = document.createElement("div");
            descriptionDiv.classList.add("description-block");
            let descriptionText = data.weather[0].description;
            descriptionDiv.textContent = (descriptionText);
            document.body.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.append(descriptionDiv);

            let pressureDiv = document.createElement("div");
            pressureDiv.classList.add("pressure-block");
            let pressureText = data.main.pressure;
            pressureDiv.textContent = ("Pressure:" + " " + pressureText + " " + "hPa");
            document.body.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.append(pressureDiv);

            let humidityDiv = document.createElement("div");
            humidityDiv.classList.add("humidity-block");
            let humidityText = data.main.humidity;
            humidityDiv.textContent = ("Humidity:" + " " + humidityText + "%");
            document.body.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.append(humidityDiv);

            let windSpeedDiv = document.createElement("div");
            windSpeedDiv.classList.add("wind-speed-block");
            let windSpeedText = data.wind.speed;
            windSpeedDiv.textContent = ("Wind speed:" + " " + windSpeedText + " " + "km/h");
            document.body.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.append(windSpeedDiv);

            let windDegDiv = document.createElement("div");
            windDegDiv.classList.add("wind-degree-block");
            let windDegText = data.wind.deg;
            windDegDiv.textContent = ("Wind degree:" + " " + windDegText + " " + "deg");
            document.body.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.append(windDegDiv);
        })

};
document.querySelector(".find-out-weather-btn").addEventListener("click", showWeather);