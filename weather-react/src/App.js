import React from 'react';
const api = {
  key: "32af43367e742b699a38fa7d379fe838",
  base: "https://home.openweathermap.org/api_keys"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text"
          className="search-bar"
          placeholder="Search..."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
