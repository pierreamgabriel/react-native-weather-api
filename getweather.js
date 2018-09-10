import { KEY } from "./editable";
import { AsyncStorage } from 'react-native';


export function getWeather() {

    AsyncStorage.removeItem("weather_city");
    AsyncStorage.removeItem("weather_country");
    AsyncStorage.removeItem("weather_tempC");
    AsyncStorage.removeItem("weather_tempF");
    AsyncStorage.removeItem("weather_feelsC");
    AsyncStorage.removeItem("weather_feelsF");
    AsyncStorage.removeItem("weather_windKph");
    AsyncStorage.removeItem("weather_windMph");
    AsyncStorage.removeItem("weather_windDir");
    AsyncStorage.removeItem("weather_pressure");
    AsyncStorage.removeItem("weather_humidity");
    AsyncStorage.removeItem("weather_condition");
    AsyncStorage.removeItem("weather_icon");
    
let options = {
  enableHighAccuracy: true,
  timeout: 5000,
};
    
navigator.geolocation.getCurrentPosition(function(position) {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      let URL = "https://api.apixu.com/v1/current.json?key=" + KEY + "&q=" + lat + "," + lng;

fetch(URL)
    .then(res => res.json())
    .then(function (data) {
    
   filter(data);
                });
                }, error, options);
    
function filter(data) {
    
    AsyncStorage.setItem("weather_city", data.location.name);
    AsyncStorage.setItem("weather_country", data.location.country);
    AsyncStorage.setItem("weather_tempC", data.current.temp_c.toString());
    AsyncStorage.setItem("weather_tempF", data.current.temp_f.toString());
    AsyncStorage.setItem("weather_feelsC", data.current.feelslike_c.toString());
    AsyncStorage.setItem("weather_feelsF", data.current.feelslike_f.toString());
    AsyncStorage.setItem("weather_windKph", data.current.wind_kph.toString());
    AsyncStorage.setItem("weather_windMph", data.current.wind_mph.toString());
    AsyncStorage.setItem("weather_windDir", data.current.wind_dir);
    AsyncStorage.setItem("weather_pressure", data.current.pressure_mb.toString());
    AsyncStorage.setItem("weather_humidity", data.current.humidity.toString());
    AsyncStorage.setItem("weather_condition", data.current.condition.text);
    AsyncStorage.setItem("weather_icon", "http:" + data.current.condition.icon);
    
     
}   
        
function error() {
console.log("something is wrong");    
}   
}

