import { useState } from "react";
import "./WeatherReact.css";

const api = {
  key: "14951c93f3d11e8ac8bed96dd90e8bc7",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>

        <div>
          <input
            className="inputstyle"
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed} className="btncol">
            Search
          </button>
        </div>

        {typeof weather.main !== "undefined" ? (
          <div>
            <p>{weather.name}</p>

            <p>{weather.main.temp}°C</p>

            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          "please enter your  location"
        )}
      </header>
    </div>
  );
}

export default Weather;
