let pickCity = document.getElementById('pickCity');
pickCity.addEventListener('click', function(){
    if(selectCity.style.display === 'none'){
        selectCity.style.display = 'block'
    }else{
        selectCity.style.display = 'none'
    }
})

// api.openweathermap.org/data/2.5/weather?q=ohrid&units=metric&appid=bf97cf0916d81e0dab01902fe33edc89
// for more cities "api.openweathermap.org/data/2.5/weather?q="+ city + "&units=metric&appid=" + apiKey;
let weather = {
    "apiKey": "bf97cf0916d81e0dab01902fe33edc89",
    fetchWeather: function(city){
        fetch
        ("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=bf97cf0916d81e0dab01902fe33edc89")
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));

    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description} = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        document.getElementById('weatherCity').innerHTML = "Weather in " + name + " &nbsp;";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.getElementById('weatherDesc').innerText = description;
        document.getElementById('weatherTemp').innerHTML = parseInt(temp)  + " °C ";
        document.getElementById('weatherHumi').innerHTML = "&nbsp;| Humidity: " + humidity + "% &nbsp;";
        document.getElementById('weatherSpd').innerHTML = "&nbsp;| Wind speed " + speed +"km/h";
    }
}

let selectCity = document.getElementById('selectCity');
selectCity.addEventListener('click', function(){
    if(selectCity.value === 'ohrid'){
        weather.fetchWeather("Ohrid");
    }else if(selectCity.value === 'skopje'){
        weather.fetchWeather("Skopje");
    }else if(selectCity.value === 'bitola'){
        weather.fetchWeather("Bitola");
    }else if(selectCity.value === 'Kavadarci'){
        weather.fetchWeather("Kavadarci");   
    }else if(selectCity.value === 'strumica'){
        weather.fetchWeather("Strumica");   
    }else if(selectCity.value === 'Veles'){
        weather.fetchWeather("Veles");   
    }else{
        weather.fetchWeather("Prilep");
    }
})
weather.fetchWeather("Ohrid");

