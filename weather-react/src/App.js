import React from 'react';
const api = {
  key: "32af43367e742b699a38fa7d379fe838",
  base: "https://home.openweathermap.org/api_keys"
}

function App() {

    const dateBuilder = (d) => {
      let months = ["January","February","March","April","May","June","July",
      "August","September","October","November","December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
    

    return `${day} ${date} ${month} ${year}`
    }

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text"
          className="search-bar"
          placeholder="Search..."
          />
        </div>
        <div className="location-box">
          <div className="location">New York City, US</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
            15ºc
            </div>
            <div className="weather">sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
