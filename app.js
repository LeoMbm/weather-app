// Variable

const input = document.querySelector("input");
const button = document.querySelector("button");
const city = document.querySelector("#location");
const weatherNow = document.querySelector("#weather-now");
const celsius = document.querySelector("#celsius");
const iconW = document.querySelector(".top-day");
const icon = document.querySelector("#icon");
const card = document.querySelector(".day-weather");
const background = document.querySelector(".big-container");

const forecastContainer = document.querySelector(".forecast-container");
const forecastWeather = document.querySelector(".forecast-weather");
const iconForecast = document.querySelectorAll("#icon-forecast");
const tempForecast = document.querySelectorAll("#forecast-temp");
const maxForecast = document.querySelectorAll("#celsius-forecast");
const topForecast = document.querySelectorAll(".top-forecast");
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
  background.style.backgroundImage =
    "url('https://source.unsplash.com/850x450/?" + input.value + "')";
  background.style.backgroundSize = "cover";
  background.style.backgroundPosition = "center";

  maxForecast.forEach((p) => {
    const deg = (data.list[0].main.temp - 273.15).toFixed(0) + "°";
    p.innerHTML = deg;
    console.log(deg);
  });

  iconForecast.forEach((img) => {
    const linkImg =
      "https://openweathermap.org/img/wn/" +
      data["list"][0]["weather"][0]["icon"] +
      "@2x.png";
    img.src = linkImg;
    console.log(linkImg);
  });

  tempForecast.forEach((h2) => {
    const time = data["list"][0]["weather"][0]["description"];
    h2.innerHTML = time;
    console.log(time);
  });

  console.log(data.list);
}
