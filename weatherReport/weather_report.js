function showWeatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = '92bb730465aaddf0393d1c2917f63dad'; // Replace 'YOUR_API_KEY' with your actual API key
    const lat = document.getElementById("lat").value;
    const long = document.getElementById("long").value;
    let apiUrl;
    if(city){
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    } else {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;
    }
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                <p>Temperature: ${data.main.temp} &#8451;</p>
                                <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
      });
}

 document.getElementById('weatherForm').addEventListener(
    'submit',showWeatherDetails );

document.getElementById("coord_weather_form").addEventListener(
    'submit', showWeatherDetails);