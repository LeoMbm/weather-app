// Variable

const input = document.querySelector("input");
const button = document.querySelector("button");
const city = document.querySelector("#location");
const weatherNow = document.querySelector("#weather-now");
const celsius = document.querySelector("#celsius");
const iconW = document.querySelector(".top-day");
const icon = document.querySelector("#icon");
const card = document.querySelector(".day-weather");

const forecastContainer = document.querySelector(".forecast-container");
const forecastWeather = document.querySelector(".forecast-weather");
const iconForecast = document.querySelector("#icon-forecast");
const tempForecast = document.querySelector("#forecast-temp");
const maxForecast = document.querySelector("#celsius-forecast");
// LISTENER

button.addEventListener("click", getWeather);
// input.addEventListener("keyup", getWeather);

async function getWeather(e) {
  e.preventDefault();
  const req = await fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      input.value +
      "&appid=67867bed00da52965e33edd641635061"
  );

  const data = await req.json();

  city.innerHTML = data["city"]["name"] + "," + " " + data["city"]["country"];
  weatherNow.innerHTML = data["list"][0]["weather"][0]["description"];
  icon.src =
    "https://openweathermap.org/img/wn/" +
    data["list"][0]["weather"][0]["icon"] +
    "@2x.png";
  celsius.innerHTML =
    Math.round(data["list"][0]["main"]["temp"] - 273.15) + " C°";
  card.style.backgroundImage =
    "url('https://source.unsplash.com/280x250/?" + input.value + "')";
  card.style.backgroundSize = "cover";

  for (const object in data) {
    tempForecast.innerHTML = object;
  }

  console.log(data);
}
