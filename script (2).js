// Yahan apni free API key daalna (openweathermap.org se mil jayegi)
const apiKey = "5d4edf6a94dcec908b175c606143b0f"; 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.getElementById("city-input");
const weatherInfo = document.getElementById("weather-info");
const errorMsg = document.getElementById("error-msg");

async function checkWeather(city = searchInput.value) {
    if(city === "") return;

    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        
        if (response.status === 404) {
            errorMsg.style.display = "block";
            weatherInfo.style.display = "none";
        } else {
            const data = await response.json();
            
            document.getElementById("city-name").innerText = data.name;
            document.getElementById("temperature").innerText = Math.round(data.main.temp);
            document.getElementById("description").innerText = data.weather[0].description;
            document.getElementById("humidity").innerText = data.main.humidity + "%";
            document.getElementById("wind").innerText = data.wind.speed + " km/h";
            
            weatherInfo.style.display = "block";
            errorMsg.style.display = "none";
        }
    } catch (error) {
        console.error("Failed to fetch weather data", error);
    }
}

// Enter button dabane pe bhi search ho jaye
searchInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkWeather();
    }
});