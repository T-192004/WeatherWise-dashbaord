import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import WeatherDashboard from "./Components/WeatherDashboard";
import './App.css';

// Replace with your actual API key
const weatherApiKey = "2c9a98ef9b7b478694d121858250104";

function App() {
  // Default location for initial fetch
  const [loc, setLoc] = useState("Gwalior");

  // Stores user input before clicking search
  const [searchLoc, setSearchLoc] = useState("Gwalior");

  // Weather-related state variables
  const [weather, setWeather] = useState(null);                // Current weather data
  const [resultLocation, setResultLocation] = useState(null);  // Location metadata (name, country, etc.)
  const [astro, setAstro] = useState(null);                    // Astronomical info (sunrise/sunset)
  const [hourlyForecast, setHourlyForecast] = useState([]);    // Hourly weather forecast
  const [fiveDayForecast, setFiveDayForecast] = useState([]);  // 5-day weather forecast

  // Function to fetch weather data from WeatherAPI
  const fetchWeatherData = async (location) => {
    try {
      const forecastRes = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${location}&days=5`
      );
      const forecastData = await forecastRes.json();

      // Check if the API returned an error
      if (forecastData.error) {
        alert("Location not found. Please enter a valid city.");
        return;
      }

      // Set weather-related state
      setWeather(forecastData.current);
      setResultLocation(forecastData.location);
      setAstro(forecastData.forecast.forecastday[0].astro);
      setHourlyForecast(forecastData.forecast.forecastday[0].hour);
      setFiveDayForecast(forecastData.forecast.forecastday);
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
    }
  };

  // Fetch weather on component mount and whenever `loc` changes
  useEffect(() => {
    fetchWeatherData(loc);
  }, [loc]);

  // Handle click on search button
  const handleSearch = () => {
    setLoc(searchLoc); // This triggers useEffect to refetch data
  };

  return (
    <div className="bg-container">
      <header className="header">
        {/* Search Bar for entering city name */}
        <div className="search-location">
          <input
            type="text"
            placeholder="Search for your preferred city..."
            value={searchLoc}
            onChange={(e) => setSearchLoc(e.target.value)} // Update search input
          />
          <button onClick={handleSearch}>
            <BsSearch size={20} />
          </button>
        </div>
      </header>

      {/* Weather Dashboard: Render only when all data is available */}
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
