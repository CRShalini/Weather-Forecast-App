# Weather-Forecast-App
A responsive and visually appealing weather forecast application built with React.js. It fetches real-time weather data using the OpenWeatherMap API and provides current weather details for any city entered by the user.


##  Features

*  Search weather by city name
*  Displays temperature, humidity, wind speed, and condition
*  Beautiful glassmorphism UI with animated transitions
*  Mobile responsive design
*  Dynamic weather icons (via OpenWeatherMap)
*  Handles invalid city input gracefully

##  Technologies Used

* React.js (with hooks)
* JavaScript (ES6+)
* CSS (custom styling, animations, responsive design)
* OpenWeatherMap API

##  Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/weather-forecast-app.git
   cd weather-forecast-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Add your OpenWeatherMap API key:

   * Open App.js
   * Replace YOUR\_API\_KEY\_HERE with your actual API key:

     ```js
     const API_KEY = 'your_api_key_here';
     ```

4. Run the app:

   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

##  Get a Free API Key

Sign up at [https://openweathermap.org/api](https://openweathermap.org/api) and generate your free API key.

##  What I Learned

* How to fetch and parse external API data in React
* Managing UI state with useState
* Building responsive layouts with modern CSS
* Animating components and styling input validation

##  Deployment

You can deploy this app to platforms like Vercel or Netlify:

```bash
npm run build
```

##  Future Enhancements

*  Add geolocation-based weather
*  Include 5-day forecast
*  Save recent searches
*  Add dark mode toggle
