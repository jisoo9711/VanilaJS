const API_KEY = "a42364ecf91f0c503ed2cbc39afd862a"
const WeatherIcon = document.getElementById("weatherIcon");

const weather = document.getElementById("weatherInfo")

function Geo(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    const url2 = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lng}&appid=${API_KEY}`

    fetch(url).then(response => response.json()).then(data => {

        const icon = `${data.weather[0].icon}`;
        WeatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`
        weather.innerText =
            `[Location] ${data.name}  

             [Weather] ${data.weather[0].main} 

             [Temperature] ${data.main.temp}C 
             
             [Humidity] ${data.main.humidity}%`;
    });

    fetch(url2).then(response => response.json()).then(data => {
        const airpollutioninfo = document.querySelector("#weather span:last-child");
        const airpollution = data.list[0].main.aqi
        const airArray = [
            { value: "GOOD", index: "1" },
            { value: "FAIR", index: "2" },
            { value: "MODERATE", index: "3" },
            { value: "POOR", index: "4" },
            { value: "VERYPOOR", index: "5" }];
        const airresult = airArray.find(e => e.index == airpollution);
        airpollutioninfo.innerText = `[Airpollution] 
        ${airresult.value}`;

    });
}
function GeoError() {
    alert("Can't find your location");
}
navigator.geolocation.getCurrentPosition(Geo, GeoError);