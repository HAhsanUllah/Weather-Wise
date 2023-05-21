
const apiKey = "863242cfb2b1d357e6093d9a4df19a4b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".search input");
const btn = document.querySelector(".search button"); 
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
  const response = await fetch(apiUrl + city+ `&appid=${apiKey}`);
  const data = await response.json();

  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main =="Clouds"){
    weatherIcon.src = "cloud.png";
  }
  else if (data.weather[0].main =="Rain"){
    weatherIcon.src = "rain.png";
  }
  else if (data.weather[0].main =="Clear"){
    weatherIcon.src = "sun.png";
  }
  else if (data.weather[0].main =="Drizzle"){
    weatherIcon.src = " drizzle.png";
  }
  else if (data.weather[0].main =="Mist"){
    weatherIcon.src = "mist.png";
  }
}

btn.addEventListener("click", function() {
  const city = search.value;
  checkWeather(city);
});
