# 🌦️ Weather Dashboard App

A React-based Weather Dashboard application that provides real-time weather updates, a 5-day forecast, and hourly weather information for any searched city. This app uses the [WeatherAPI](https://www.weatherapi.com/) to fetch accurate and up-to-date weather data.

---

## 🚀 Features

- **City Search:** Search weather information for any city worldwide.
- **Live Local Time:** Displays the local time of the searched location, updated every second.
- **Current Weather:** Shows temperature (°C), feels like temperature, humidity, wind speed, pressure, and UV index.
- **Sunrise and Sunset:** Displays sunrise and sunset timings for the location.
- **5-Day Forecast:** Provides a daily weather forecast including max and min temperatures with icons.
- **Hourly Forecast:** Displays the next 5 hours of weather conditions including temperature and wind speed.
- **Weather Icons:** Uses dynamic weather icons and React Icons for visual clarity.
- **Error Handling:** Alerts user if the location is invalid or data cannot be fetched.

---

## 🖼️ Screenshots

*(Add screenshots here after running the app to give users a preview of the UI)*

---

## 🛠 Tech Stack

- **React.js:** Frontend framework for building the UI.
- **React Icons:** For integrating weather and UI icons (`FiSunrise`, `FiSunset`, `FaWater`, `FaWind`, `MdSpeed`, `TbUvIndex`, etc.).
- **CSS:** Styling the components and layout.
- **WeatherAPI:** External API used to fetch weather and forecast data.
- **JavaScript (ES6+):** Core language for app logic and asynchronous data fetching.

---

## 📦 Installation & Setup

Follow these steps to get the app running locally on your machine:

1. **Clone the repository**
   ```bash
   git clone https://github.com/T-192004/WeatherWise-dashbaord.git
   cd weather-dashboard
2. **Install dependencies** 
    
    Make sure you have Node.js and npm installed. Then run:
    ``` bash
    npm install

3. **Add your WeatherAPI key**

    - Open the file src/App.js.
    - Find the line with the API key placeholder:

    ```js
    const weatherApiKey = "YOUR_WEATHER_API_KEY";

    Replace "YOUR_WEATHER_API_KEY" with your own API key from WeatherAPI.

4. **Run the app** 

    ```bash
    npm start

## 📁 Project Structure
        ```
        weather-dashboard/
        │
        ├── public/
        │   └── index.html           # HTML template
        │
        ├── src/
        │   ├── Components/
        |   |   └──WeatherDashboard.css # Styling for WeatherDashboard component
        │   │   └── WeatherDashboard.js   # Main weather dashboard component
        │   ├── App.js               # Main app component handling API calls and state
        │   ├── App.css              # Styling for App component
        │   └── index.js             # React app entry point
        │
        ├── package.json             # Project metadata and dependencies
        └── README.md                # This README file


## 🌐 API Reference

    The app uses the WeatherAPI forecast endpoint:

    1. **Base URL**
        ```bash
        http://api.weatherapi.com/v1/forecast.json
        
    2. **Query Parameters**

    - key - Your API key from WeatherAPI

    - q - Location query (city name or coordinates)

    - days - Number of days to forecast (up to 10; here it’s set to 5)

    - **Example API call**:
        ```bash
        http://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=Gwalior&days=5
    


## 🙌 Acknowledgments
    - WeatherAPI – For providing the comprehensive and easy-to-use weather API.

    - React Icons – For elegant and consistent iconography.

    - Inspiration from open source React weather apps.


## 📄 License
    This project is open-source and available under the MIT License.


## 💡 Future Enhancements
    - Geolocation: Automatically detect user location to display local weather without manual search.

    - Theme Toggle: Add light and dark mode for better user experience.
 
    - Localization: Support multiple languages for UI and weather descriptions.

    - Responsive Design: Optimize UI for mobile and tablets.

    - Extended Forecast: Include hourly forecasts for multiple days.

    - Performance: Implement caching and reduce API calls for better efficiency.



**Made with ❤️ by Tanvi Tomar**
```vbnet

Feel free to replace Tanvi Tomar and the GitHub URL placeholder with your actual info. This file fully documents your React weather app with clear instructions and explanations. Let me know if you want me to add a license file or deploy instructions!
