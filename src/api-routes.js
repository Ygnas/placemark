import { userApi } from "./api/user-api.js";
import { categoryApi } from "./api/category-api.js";
import { placemarkApi } from "./api/placemark-api.js";
import { weatherApi } from "./api/weather-api.js";

export const apiRoutes = [
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },
  { method: "GET", path: "/api/users/safe", config: userApi.findUser },

  { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },

  { method: "POST", path: "/api/categorys", config: categoryApi.create },
  { method: "DELETE", path: "/api/categorys", config: categoryApi.deleteAll },
  { method: "GET", path: "/api/categorys", config: categoryApi.find },
  { method: "GET", path: "/api/categorys/{id}", config: categoryApi.findOne },
  { method: "DELETE", path: "/api/categorys/{id}", config: categoryApi.deleteOne },

  { method: "GET", path: "/api/placemarks", config: placemarkApi.find },
  { method: "GET", path: "/api/placemarks/{id}", config: placemarkApi.findOne },
  { method: "POST", path: "/api/categorys/{id}/placemarks", config: placemarkApi.create },
  { method: "DELETE", path: "/api/placemarks", config: placemarkApi.deleteAll },
  { method: "DELETE", path: "/api/placemarks/{id}", config: placemarkApi.deleteOne },
  { method: "POST", path: "/api/placemarks/{id}/deleteimage", config: placemarkApi.deleteImage },

  { method: "POST", path: "/api/placemark/weather", config: weatherApi.getWeather },
];
