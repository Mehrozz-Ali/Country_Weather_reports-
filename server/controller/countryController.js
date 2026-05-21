const axios = require("axios");

const getCountryData = async (req, res) => {
  try {
    const countryName = req.params.name;

    if (!countryName || countryName.trim() === "") {
      return res.status(400).json({
        message: "Country name is required",
      });
    }

    const countryResponse = await axios.get(
      `https://restcountries.com/v3.1/name/${countryName}`,
      {
        timeout: 5000,
      }
    );

    const country = countryResponse.data[0];

    const capital = country.capital[0];

    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${process.env.API_KEY}&units=metric`,
      {
        timeout: 5000,
      }
    );

    res.json({
      country: country.name.common,
      capital: capital,
      population: country.population,
      region: country.region,
      flag: country.flags.png,
      currency: Object.values(country.currencies)[0].name,
      weather: weatherResponse.data.main.temp,
    });

  } catch (error) {

    if (error.code === "ECONNABORTED") {
      return res.status(408).json({
        message: "API request timeout",
      });
    }

    if (error.response) {
      return res.status(error.response.status).json({
        message: "Country not found or API error",
      });
    }

    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  getCountryData,
};