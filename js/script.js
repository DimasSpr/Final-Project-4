let weather = {
    "apiKey":"132dbea7d22dd514207859d102786829",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&appid=" 
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed)
        document.querySelector(".city").innerHTML = name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
        document.querySelector(".description").innerHTML = description ;
        document.querySelector(".temp").innerHTML = temp + "C";
        document.querySelector(".speed").innerHTML = "Wind Speed : " + speed + " Km";
        document.querySelector(".weather").classList.remove("loading");
        document.querySelector(".img-content").style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);

    }
};

document.querySelector(".search-button").addEventListener("click", function(){
    weather.search();

});

document.querySelector(".search-bar").addEventListener("keyup" , function(event) {
  if(event.key == "Enter"){
    weather.search();
  }
});

weather.fetchWeather("Welcome");