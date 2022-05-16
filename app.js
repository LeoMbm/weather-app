async function getWeather() {
  const req = await fetch(
    "http://api.openweathermap.org/geo/1.0/direct?q=Brussels&limit=5&appid=0fe74432f1cac8182f5542fc98fe56e2"
  );

  const data = await req.json();

  console.log(data);
}

getWeather();
