import React, { useState } from 'react';
import './App.css';

const API_KEY = 'your_api_key_here'; // Replace with your actual OpenWeatherMap API key

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    if (!city) return;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.cod === 200) {
      setWeather(data);
    } else {
      setWeather(null);
      alert('City not found!');
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city" />
      <button onClick={getWeather}>Get Weather</button>
      {weather && (
        <div className="weather-card">
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].main} - {weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default App;
