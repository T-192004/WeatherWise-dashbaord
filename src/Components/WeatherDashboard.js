import { FiSunrise, FiSunset } from "react-icons/fi";
import { FaWater, FaWind } from "react-icons/fa";
import { MdSpeed } from "react-icons/md";
import { TbUvIndex } from "react-icons/tb";
import { useEffect, useState } from "react";
import './WeatherDashboard.css';

const WeatherDashboard = ({ weather, location, astro, hourlyForecast, fiveDayForecast }) => {
  const [localTime, setLocalTime] = useState(new Date(location.localtime));
  const currentHour = new Date(location.localtime).getHours();
  useEffect(() => {
    // Start interval to update time every second
    const interval = setInterval(() => {
      setLocalTime(prevTime => new Date(prevTime.getTime() + 1000));
    }, 1000);

    return () => clearInterval(interval); // Clean up
  }, []);
  // Filter to show only the next 5 future hours

  const futureHourlyForecast = hourlyForecast
    .filter(hour => new Date(hour.time).getHours() >= currentHour) // Only future hours
    .slice(0, 5); // Get the next 5 hours

  return (
    <div className="weather-dashboard">
      
      {/* Location & Time Details */}
      <div className="loc-date-detail detail-card">
        <h2 className="loc">{location.name}, {location.region}</h2>
        <h1 className="time">{localTime.toTimeString().slice(0, 8)}</h1>
        <p className="day-date">{new Date(location.localtime).toLocaleDateString("en-US", { 
            weekday: "long", 
            year: "numeric", 
            month: "long", 
            day: "numeric" 
        })}</p>
      </div>

      {/* Weather Details */}
      <div className="weather-detail detail-card">
        <div className="sun-temp">
          
          {/* Temperature */}
          <div className="temp-detail">
            <h1 className="temp">{weather.temp_c}°C</h1>
            <p>Feels like: <span>{weather.feelslike_c}°C</span></p>
          </div>

          {/* Sunrise & Sunset */}
          <div className="sun-details">
            <FiSunrise className="weather-icon" />
            <div>
              <p>Sunrise</p>
              <p>{astro.sunrise}</p>
            </div>
          </div>
          <div className="sun-details">
            <FiSunset className="weather-icon"/>
            <div>
              <p>Sunset</p>
              <p>{astro.sunset}</p>
            </div>
          </div>
        </div>

        {/* Weather Description */}
        <div className="weather-descp">
          <img src={weather.condition.icon} alt="weather icon" />
          <p>{weather.condition.text}</p>
        </div>

        {/* Additional Weather Info */}
        <div className="weather-extra">
          <div className="other-detail">
            <FaWater className="weather-icon" />
            <p>{weather.humidity}%</p>
            <p>Humidity</p>
          </div>
          <div className="other-detail">
            <FaWind className="weather-icon" />
            <p>{weather.wind_kph} km/h</p>
            <p>Wind Speed</p>
          </div>
          <div className="other-detail">
            <MdSpeed className="weather-icon"/>
            <p>{weather.pressure_in} in</p>
            <p>Pressure</p>
          </div>
          <div className="other-detail">
            <TbUvIndex className="weather-icon" />
            <p>{weather.uv}</p>
            <p>UV</p>
          </div>
        </div>
      </div>

      {/* 5-Day Forecast */}
      <div className="five-day-details detail-card">
        <h1>5 Days Forecast:</h1>
        {fiveDayForecast.map((day, index) => (
          <div className="forecast-detail" key={index}>
            <img src={day.day.condition.icon} alt="icon" />
            <p>🌡 {day.day.maxtemp_c}°C / {day.day.mintemp_c}°C</p>
            <p>{new Date(day.date).toLocaleDateString("en-US", { weekday: "long" })}</p>
          </div>
        ))}
      </div>

      {/* Next 5 Hours Forecast */}
      <div className="hourly-details detail-card">
        <h1>Next 5 Hours Forecast:</h1>
        <div className="hour-detail">
          {futureHourlyForecast.map((hour, index) => (
            <div className="hour-forecast" key={index}>
              <h2>{hour.time.split(" ")[1]}</h2>
              <img src={hour.condition.icon} alt="weather icon" />
              <p>{hour.temp_c}°C</p>
              <img src="https://cdn-icons-png.flaticon.com/512/615/615480.png" alt="wind icon" />
              <p>{hour.wind_kph} km/h</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherDashboard;
