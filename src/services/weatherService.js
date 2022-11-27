import axios from "axios";
import NoCityFoundError from "@/models/noCityFoundError";

export default class WeatherService {
  static getWeather(city) {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.VUE_APP_WEATHER_API_KEY}`)
      .then(response => response.data)
      .catch(error => {
        if (error.response.status === 404 && error.response.data.message === "city not found") {
          throw new NoCityFoundError()
        }
      })
  }
}