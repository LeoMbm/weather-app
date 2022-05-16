// Variable

const input = document.querySelector("input");
const button = document.querySelector("button");

// LISTENER

button.addEventListener("click", getWeather);
// input.addEventListener("keyup", getWeather);

async function getWeather(e) {
  e.preventDefault();
  const req = await fetch(
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
      input.value +
      "&limit=5&appid=0fe74432f1cac8182f5542fc98fe56e2"
  );

  const data = await req.json();

  console.log(data);
}
