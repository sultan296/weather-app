// let url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;
let search = document.getElementById("search");
let weatherImage = document.getElementById("weather-image");
let temp = document.getElementById("temp");
let cityName = document.getElementById("city-name");
let weatherHumidity = document.getElementById("humidity");
let windSpeed = document.getElementById("wind-speed");
let weatherData = document.querySelector(".weather-data");
let searchIcon = document.getElementById("search-icon");

let key = `15d326426325ae289facd911f733ac6c`;

async function getWeatherData(city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    let data = await fetch(url);
    let response = await data.json();
    console.log(response);
    if (response.cod == 404) {
        weatherData.style.display = "none";
        alert("City Not Found and Please Check The Spelling Once Again");
    } else {
        
        temp.innerHTML = Math.floor(response.main.temp) + "°C";
        cityName.textContent = response.name;
        weatherHumidity.innerHTML = response.main.humidity + "%";
        windSpeed.innerHTML = response.wind.speed + "km/h";

        if (response.weather[0].main == "Clouds") {
            weatherImage.src = "./images/clouds.png"
        } else if (response.weather[0].main == "Clear") {
            weatherImage.src = "./images/clear.png";
        } else if (response.weather[0].main == "Smoke") {
            weatherImage.src = "./images/clouds.png";
        } else if (response.weather[0].main == "Mist") {
            weatherImage.src = "./images/mist.png";
        } else if (response.weather[0].main == "Rain") {
            weatherImage.src = "./images/rain.png";
        } else if (response.weather[0].main == "Snow") {
            weatherImage.src = "./images/snow.png";
        }
        weatherData.style.display = "block";
    }
}

searchIcon.addEventListener("click", () => {
    getWeatherData(search.value)
})