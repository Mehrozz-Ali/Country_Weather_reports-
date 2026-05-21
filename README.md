# Country Weather Explorer

A MERN stack application that combines country information and live weather data using public APIs.

---

## Features

- Search any country
- View:
  - Flag
  - Capital
  - Population
  - Currency
  - Weather
- Error handling
- API timeout handling
- Input validation

---

## Installation

### Frontend

```bash
cd client
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
node server.js
```

---

## Environment Variables

Create `.env` file inside server folder:

```env
API_KEY=YOUR_OPENWEATHER_API_KEY
```

---

## APIs Used

- REST Countries API
- OpenWeather API