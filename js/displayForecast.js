const forecastWeather = document.querySelectorAll(".forecast-weather");
const iconForecast = document.querySelectorAll("#icon-forecast");
const tempForecast = document.querySelectorAll("#forecast-temp");
const maxForecast = document.querySelectorAll("#celsius-forecast");

export default function displayForecast(data) {
  for (let i = 0; i < 5; i++) {
    const element = (data.list[i].main.temp - 273.15).toFixed(0) + "°";
    maxForecast[i].innerHTML = element;
  }

  for (let i = 0; i < 5; i++) {
    const element =
      "https://openweathermap.org/img/wn/" +
      data["list"][i]["weather"][0]["icon"] +
      "@2x.png";
    iconForecast[i].src = element;
  }

  for (let i = 0; i < 5; i++) {
    const element = data["list"][i]["weather"][0]["description"];
    tempForecast[i].innerHTML = element;
  }

  forecastWeather.forEach((bg) => {
    bg.style.background = "#1498d5";
  });
}
