import { KEY } from "./editable";

let allData = {
    "location":{"name":"null","country":"null"},
    "current":{"temp_c":"null","temp_f":"null","condition":{"text":"null","icon":"null"},"wind_mph":"null","wind_kph":"null","wind_dir":"null","pressure_mb":"null","humidity":"null","feelslike_c":"null","feelslike_f":"null"}};

export function getWeather() {
    
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
    
   allData = data;
    
                });
                }, error, options);
    
        
function error() {
console.log("something is wrong");    
}   
}

export function getData() {
  
    this.city = allData.location.name;
    this.country = allData.location.country;
    this.tempC = allData.current.temp_c;
    this.tempF = allData.current.temp_f;    
    this.feelsC = allData.current.feelslike_c;
    this.feelsF = allData.current.feelslike_f;
    this.windKph = allData.current.wind_kph;
    this.windMph = allData.current.wind_mph;
    this.windDir = allData.current.wind_dir;
    this.pressure = allData.current.pressure_mb;
    this.humidity = allData.current.humidity;
    this.condition = allData.current.condition.text;
    this.icon = "http:" + allData.current.condition.icon;
    
    
}
