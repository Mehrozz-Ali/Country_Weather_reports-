# ANSWERS

## 1. How to run

Backend:

```bash
cd server
npm install
node server.js
```

Frontend:

```bash
cd client
npm install
npm run dev
```

Create `.env` file inside server folder and add:

```env
API_KEY=YOUR_OPENWEATHER_API_KEY
```

---

## 2. Stack choice

I selected the MERN stack because JavaScript can be used for both frontend and backend, which simplifies development and improves consistency.

React provides a responsive UI, while Express and Node.js make API handling efficient.

A worse choice would have been using a desktop framework like Electron because the project requirements are better suited for a lightweight web application.

---

## 3. One real edge case

The application handles API timeout errors using Axios timeout configuration.

File:
server/controllers/countryController.js

Code:

```js
timeout: 5000
```

and:

```js
if (error.code === "ECONNABORTED")
```

Without this handling, the app could hang indefinitely if the external API became too slow.

---

## 4. AI usage

I used ChatGPT to:
- Generate project structure
- Improve API error handling
- Create README formatting
- Suggest edge case handling

One thing I changed:
The AI originally did not validate empty country names on the frontend. I added:

```js
if (!country.trim())
```

to prevent unnecessary API requests and improve user experience.

---

## 5. Honest gap

The current application lacks automated testing.

With another day, I would:
- add unit testing
- improve UI design
- add loading skeletons
- deploy the project online