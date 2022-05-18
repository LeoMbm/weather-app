const city = document.querySelector("#location");
const weatherNow = document.querySelector("#weather-now");
const celsius = document.querySelector("#celsius");
const icon = document.querySelector("#icon");
const background = document.querySelector(".big-container");
const input = document.querySelector("input");

export default function displayWeather(data) {
  city.innerHTML = data["city"]["name"] + "," + " " + data["city"]["country"];
  weatherNow.innerHTML = data["list"][0]["weather"][0]["description"];
  icon.src =
    "https://openweathermap.org/img/wn/" +
    data["list"][0]["weather"][0]["icon"] +
    "@2x.png";
  celsius.innerHTML =
    Math.round(data["list"][0]["main"]["temp"] - 273.15) + " C°";
  background.style.backgroundImage =
    "url('https://source.unsplash.com/850x450/?" + input.value + "')";
  background.style.backgroundSize = "cover";
  background.style.backgroundPosition = "center";
}
