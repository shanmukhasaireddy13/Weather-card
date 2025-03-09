const apikey = "fd41668c797b2b2e2354bf3bbf193602";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector("weather-icon");

async function checkweather(city) {
    const response = await fetch(apiurl+city+`&appid=${apikey}`);
    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";
    if (data.weather[0].main == "Clouds") {
        weathericon.src = "images/Clouds.png";
        
    } else {
        
    }


    
}
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);

})

