import { CallProps, ShowWeatherProps, WeatherData } from "./types";

let current: WeatherData;

export async function getWeather(args: CallProps) {
  let result;
  let URL;

  if (args.city != null) {
    URL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      args.city +
      "," +
      args.country +
      "&appid=" +
      args.key +
      "&units=" +
      args.unit +
      "&lang=" +
      args.lang;
  } else if (args.zip_code != null) {
    URL =
      "https://api.openweathermap.org/data/2.5/weather?zip=" +
      args.zip_code +
      "," +
      args.country +
      "&appid=" +
      args.key +
      "&units=" +
      args.unit +
      "&lang=" +
      args.lang;
  } else {
    URL =
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
      args.lat +
      "&lon=" +
      args.lon +
      "&appid=" +
      args.key +
      "&units=" +
      args.unit +
      "&lang=" +
      args.lang;
  }

  await fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      current = data;
      result = Promise.resolve("Success");
    });

  return result;
}

export async function dailyForecast(args: CallProps) {
  let result;
  let URL =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    args.lat +
    "&lon=" +
    args.lon +
    "&exclude=hourly,minutely&appid=" +
    args.key +
    "&units=" +
    args.unit +
    "&lang=" +
    args.lang;

  await fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      result = data;
    });

  return result;
}

export async function fiveDaysForecast(args: CallProps) {
  let result;
  let URL =
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
    args.lat +
    "&lon=" +
    args.lon +
    "&appid=" +
    args.key +
    "&units=" +
    args.unit +
    "&lang=" +
    args.lang;

  await fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      result = data;
    });

  return result;
}

export class showWeather implements ShowWeatherProps {
  name: string;
  country: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  feels_like: number;
  wind: number;
  pressure: number;
  humidity: number;
  description: string;
  icon: string;

  constructor() {
    this.name = current.name;
    this.country = current.sys.country;
    this.temp = current.main.temp;
    this.temp_min = current.main.temp_min;
    this.temp_max = current.main.temp_max;
    this.feels_like = current.main.feels_like;
    this.wind = current.wind.speed;
    this.pressure = current.main.pressure;
    this.humidity = current.main.humidity;
    this.description = current.weather[0].description;
    this.icon =
      "https://openweathermap.org/img/w/" + current.weather[0].icon + ".png";
  }
}
