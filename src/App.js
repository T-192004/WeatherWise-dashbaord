

import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import WeatherDashboard from "./Components/WeatherDashboard";
import './App.css';


const weatherApiKey = "2c9a98ef9b7b478694d121858250104";
function App() {
  const [loc, setLoc] = useState("Gwalior");
  const [searchLoc, setSearchLoc] = useState("Gwalior"); // Store user input for searching
  const [weather, setWeather] = useState(null);
  const [resultLocation, setResultLocation] = useState(null);
  const [astro, setAstro] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [fiveDayForecast, setFiveDayForecast] = useState([]);

  // Function to fetch weather data based on location
  const fetchWeatherData = async (location) => {
    try {
      const forecastRes = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${location}&days=5`
      );
      const forecastData = await forecastRes.json();

      if (forecastData.error) {
        alert("Location not found. Please enter a valid city.");
        return;
      }

      setWeather(forecastData.current);
      setResultLocation(forecastData.location);
      setAstro(forecastData.forecast.forecastday[0].astro);
      setHourlyForecast(forecastData.forecast.forecastday[0].hour);
      setFiveDayForecast(forecastData.forecast.forecastday);
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
    }
  };

  // Fetch weather when the component loads and when `loc` changes
  useEffect(() => {
    fetchWeatherData(loc);
  }, [loc]);

  // Handle search button click
  const handleSearch = () => {
    setLoc(searchLoc); // Update `loc` to trigger useEffect
  };

  return (
    <div className="bg-container">
      <header className="header">
        {/* Search Input */}
        <div className="search-location">
          <input
            type="text"
            placeholder="Search for your preferred city..."
            value={searchLoc}
            onChange={(e) => setSearchLoc(e.target.value)}
          />
          <button onClick={handleSearch}>
            <BsSearch size={20} />
          </button>
        </div>

  
      </header>

      {/* Weather Dashboard */}
      <div>
        {weather && resultLocation && astro && hourlyForecast.length > 0 && fiveDayForecast.length > 0 ? (
          <WeatherDashboard
            weather={weather}
            location={resultLocation}
            astro={astro}
            hourlyForecast={hourlyForecast}
            fiveDayForecast={fiveDayForecast}
          />
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    </div>
  );
}

export default App;

