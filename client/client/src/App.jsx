import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [country, setCountry] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchCountry = async () => {
    if (!country.trim()) {
      setError("Please enter a country name");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        `http://localhost:5000/api/country/${country}`
      );

      setData(response.data);

    } catch (err) {
      setData(null);

      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError("Network error");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">

      <div className="overlay"></div>

      <div className="container">

        <h1>🌍 Country Weather Explorer</h1>

        <p className="subtitle">
          Search any country and get live weather details
        </p>

        <div className="search-box">

          <input
            type="text"
            placeholder="Enter country name..."
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />

          <button onClick={fetchCountry}>
            Search
          </button>

        </div>

        {loading && (
          <p className="loading">
            Loading data...
          </p>
        )}

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        {data && (
          <div className="card">

            <img
              src={data.flag}
              alt="flag"
              className="flag"
            />

            <h2>{data.country}</h2>

            <div className="info">

              <div className="info-item">
                <span>🏛 Capital</span>
                <p>{data.capital}</p>
              </div>

              <div className="info-item">
                <span>👥 Population</span>
                <p>{data.population.toLocaleString()}</p>
              </div>

              <div className="info-item">
                <span>🌎 Region</span>
                <p>{data.region}</p>
              </div>

              <div className="info-item">
                <span>💰 Currency</span>
                <p>{data.currency}</p>
              </div>

              <div className="info-item">
                <span>🌡 Temperature</span>
                <p>{data.weather}°C</p>
              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}

export default App;