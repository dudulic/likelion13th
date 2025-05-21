const weatherIcons = {
  Clear: "☀️",
  Clouds: "☁️",
  Rain: "🌧️",
  Snow: "❄️",
  Thunderstorm: "⛈️",
  Drizzle: "🌦️",
  Mist: "🌫️",
  Fog: "🌫️",
  Haze: "🌫️",
};

export const getWeatherIcon = (main) => {
  return weatherIcons[main] || "🌍";
};
