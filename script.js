const get_input = document.querySelector('.search-input');
const weather_body = document.querySelector('.weather-container');
const weather_img = document.querySelector('.weather-img');
const searchBtn = document.getElementById('searchBtn');
const temperature = document.querySelector('.temperature');
const humidity = document.getElementById('humidity');
const speed = document.getElementById('wind-speed');
const title = document.querySelector('.weather-title');
const not_found = document.querySelector('.not-found');



async function WeatherChecker(city){
    const api_key = "c5dea024b5f181f4f8c8c2bad9ab2ae7";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const get_output = await fetch(`${url}`).then(response => response.json());


    if(get_output.cod === `404`){
        not_found.style.display = "flex";
        weather_body.style.display = "none";
        return;
    }

    not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(get_output.main.temp - 273.15)}°C`;
    title.innerHTML = `${get_output.weather[0].title}`;

    humidity.innerHTML = `${get_output.main.humidity}%`;
    speed.innerHTML = `${get_output.wind.speed}Km/H`;


    switch(get_output.weather[0].main){
        case 'Clouds':
            weather_img.src = "/images/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "/images/clear.png";
            break;
        case 'Rain':
            weather_img.src = "/images/rain.png";
            break;
        case 'Mist':
            weather_img.src = "/images/mist.png";
            break;
        case 'Snow':
            weather_img.src = "/images/snow.png";
            break;

    }

}


searchBtn.addEventListener('click', ()=>{
    WeatherChecker(get_input.value);
});
