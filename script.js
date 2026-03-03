function searchCity(){
    const city = document.getElementById("cityInput").value;
    
    if(city === ""){
        alert("Please enter city name");
        return;
    }

    const weatherTypes = [
        {temp:"30°C", condition:"Sunny", icon:"☀️", humidity:"55%", wind:"10 km/h", bg:"linear-gradient(to right,#f7971e,#ffd200)"},
        {temp:"22°C", condition:"Rainy", icon:"🌧️", humidity:"80%", wind:"15 km/h", bg:"linear-gradient(to right,#4e54c8,#8f94fb)"},
        {temp:"26°C", condition:"Cloudy", icon:"☁️", humidity:"65%", wind:"8 km/h", bg:"linear-gradient(to right,#bdc3c7,#2c3e50)"}
    ];

    const random = weatherTypes[Math.floor(Math.random()*weatherTypes.length)];

    document.getElementById("temperature").innerText = random.temp;
    document.getElementById("condition").innerText = random.condition;
    document.getElementById("weatherIcon").innerText = random.icon;
    document.getElementById("humidity").innerText = random.humidity;
    document.getElementById("wind").innerText = random.wind;

    document.body.style.background = random.bg;
}

function refreshWeather(){
    searchCity();
}

function toggleDarkMode(){
    document.body.classList.toggle("dark");
}
function toggleMenu(){
    document.getElementById("navLinks").classList.toggle("active");
}
