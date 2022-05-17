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
const tempForecast = document.querySelectorAll("#forecast-temp");
const maxForecast = document.querySelector("#celsius-forecast");
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
  card.style.backgroundImage =
    "url('https://source.unsplash.com/280x250/?" + input.value + "')";
  card.style.backgroundSize = "cover";


// tempForecast.forEach(h2 => {
  
//   h2.innerHTML = (data.list[i].main.temp - 273.15).toFixed(0)+ "°";
//   console.log(data.list.main);
// }); 


for (let i = 0; i < 5; i++) {
  tempForecast.innerHTML = (data.list[i].main.temp - 273.15).toFixed(0)+ "°";
  console.log((data.list[i].main.temp - 273.15).toFixed(0)+ "°");
 
}


  



}


// function getInfo(e){
//   e.preventDefault();
//   fetch('https://api.openweathermap.org/data/2.5/forecast?q=paris&appid=67867bed00da52965e33edd641635061')
//   .then(response => response.json())
//   .then(data => {
//     city.innerHTML = data["city"]["name"] + "," + " " + data["city"]["country"];
//    weatherNow.innerHTML = data["list"][0]["weather"][0]["description"];
//    icon.src =
//      "https://openweathermap.org/img/wn/" +
//      data["list"][0]["weather"][0]["icon"] +
//      "@2x.png";
//    celsius.innerHTML =
//      Math.round(data["list"][0]["main"]["temp"] - 273.15) + " C°";
//    card.style.backgroundImage =
//      "url('https://source.unsplash.com/280x250/?" + input.value + "')";
//    card.style.backgroundSize = "cover";
     
//    console.log((data.list[0].main.temp_min- 273.15).toFixed(0) + "°");
  
//       //Getting the min and max values for each day
//       for(i = 0; i<5; i++){
//           document.getElementById("forecast-temp" + (i+1)).innerHTML = (data.list[i].main.temp_min - 273.15).toFixed(0)+ "°";
//       }
  
//       for(i = 0; i<5; i++){
//           document.getElementById("forecast-temp" + (i+1)).innerHTML = Number(data.list[i].main.temp_max - 273.15).toFixed(0) + "°";
//       }
  
//       //Getting Weather Icons
//        for(i = 0; i<5; i++){
//           document.getElementById("icon-forecast" + (i+1)).src = "http://openweathermap.org/img/wn/%22" +
//           data.list[i].weather[0].icon + ".png";
 
//         }
// })

// };