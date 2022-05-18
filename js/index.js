// IMPORT

import displayWeather from "./displayWeather.js";
import displayForecast from "./displayForecast.js";

// Variable
const input = document.querySelector("input");
const button = document.querySelector("button");

// LISTENER

button.addEventListener("click", getInfoWeather);
// input.addEventListener("keyup", getWeather);

async function getInfoWeather(e) {
  e.preventDefault();
  const req = await fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      input.value +
      "&appid=67867bed00da52965e33edd641635061"
  );

  const data = await req.json();

  displayWeather(data);

  displayForecast(data);

  console.log(data.list);
}
