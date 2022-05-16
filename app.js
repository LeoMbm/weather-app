require("dotenv").config();

const token = process.env.TOKEN;

async function getWeather() {
  const req = await fetch(
    "http://api.openweathermap.org/geo/1.0/direct?q=Brussels&limit=5&appid=" +
      token
  );

  const data = await req.json();

  console.log(data);
}

getWeather();
