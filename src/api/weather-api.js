import Boom from "@hapi/boom";
import axios from "axios";

let placemark;
const weatherApiKey= process.env.weatherApi
export const weatherApi = {
  baseUrl: "https://api.openweathermap.org/data/2.5",
  getWeather: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        placemark = request.payload;
        const weather = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${placemark.latitude}&lon=${placemark.longitude}&units=metric&appid=${weatherApiKey}`);

        const weatherData = {
          name: weather.data.city.name,
          sunrise:  weather.data.city.sunrise,
          sunset: weather.data.city.sunset,
          icon: `https://openweathermap.org/img/wn/${weather.data.list[0].weather[0].icon}.png`,
          current: {
            feels_like: weather.data.list[0].main.feels_like,
            humidity: weather.data.list[0].main.humidity,
            pressure: weather.data.list[0].main.pressure,
            temp: weather.data.list[0].main.temp,
            temp_max: weather.data.list[0].main.temp_max,
            temp_min: weather.data.list[0].main.temp_min,
          },
          list: weather.data.list,
        }
        return weatherData;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    // response: { schema: PlacemarkArraySpec, failAction: validationError },
    description: "Get's weather info for a single Placemark",
    notes: "Returns weather data",
  },
}