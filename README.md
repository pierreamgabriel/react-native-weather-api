# React Native Weather API

Real-time weather information for any location on Earth, including over 200,000 cities.

## Installation

```bash
npm install react-native-weather-api
```
You must also install @react-native-community/geolocation:

```bash
npm install @react-native-community/geolocation
```

## Permission

**Android**

To request access to location, you need to add the following line to your app's AndroidManifest.xml:

```xml
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```

**iOS**

You need to include the `NSLocationWhenInUseUsageDescription` key in Info.plist to enable geolocation when using the app. Geolocation is enabled by default when you create a project with `react-native init`.

## Usage

This plugin uses the OpenWeather API to show weather information, so you need to create an account on https://openweathermap.org and get your key. Free accounts are allowed to perform 1,000,000 calls/month and 60 calls/minute.

### Import the plugin

```javascript
import { getWeather, dailyForecast, showWeather, getLocation } from 'react-native-weather-api';
```

### API calls 

**By geographic coordinates**

When using coordinates, you can't pass the city and ZIP code parameters.

```javascript
let temp;
let wind;

getLocation().then((location) => {
			
getWeather({

	key: "your_key",
	lat: location.coords.latitude,
	lon: location.coords.longitude,
	unit: "metric"

}).then(() => {

	let data = new showWeather();
	temp = data.temp;
	wind = data.wind;
});

});
```

**By city name**

When calling by city name, you can't pass the latitude, longitude, and ZIP code parameters.

```javascript
let temp;
let wind;

getWeather({
			
	key: "your_key",
	city: "London",
	country: "GB"

}).then(() => {

	let data = new showWeather();
	temp = data.temp;
	wind = data.wind;
});
```

**By ZIP code**

This method doesn't seem to work with all countries. For example, the API didn't recognize ZIP codes from Brazil during my tests.

Don't pass the latitude, longitude, and city parameters.

```javascript
let temp;
let wind;

getWeather({
			
	key: "your_key",
	zip_code: "90001",
	country: "US"

}).then(() => {

	let data = new showWeather();
	temp = data.temp;
	wind = data.wind;
});
```

## Parameters

`key` - Your OpenWeather key.<br> 
`lat` - Latitude.<br> 
`lon` - Longitude.<br> 
`city` - City name, e.g., Los Angeles.<br> 
`country` - Country code, e.g., US, CA, GB.<br> 
`zip_code` - Numeric or alphanumeric codes, e.g., 90001.<br>
`unit` - If you set it to `metric`, the temperature will be in Celsius and wind speed in meter/s. If you choose `imperial`, the temperature will be in Fahrenheit and wind speed in miles/h. If you don't set this parameter, Kelvin and meter/s are the standards.<br>
`lang` - The output language for the city name and description fields, e.g., en, pt_br, fr, es.

## Identifiers

`name` - Location name.<br>
`country` - Country name.<br>
`temp` - Temperature.<br>
`temp_min` - Minimum temperature.<br>
`temp_max` - Maximum temperature.<br>
`feels_like` - Feels like temperature.<br>
`wind` - Wind speed.<br>
`pressure` - Pressure.<br>
`humidity` - Humidity.<br>
`description` - Weather description, e.g., clear sky.<br>
`icon` - Weather icon URL.

## Daily forecast for 7 days

With only one call, you can get weather information for 7 days plus the current day. 

```javascript
let temp_min;
let temp_max;
let description;

getLocation().then((location) => {
			
dailyForecast({

	key: "your_key",
	lat: location.coords.latitude,
	lon: location.coords.longitude,
	unit: "metric"

}).then((data) => {

	temp_min = data.daily[0].temp.min;
	temp_max = data.daily[0].temp.max;
	description = data.daily[0].weather[0].description;
});

});
```

The `dailyForecast` function only accepts latitude and longitude to determine the location. In the example, we retrieved the minimum and maximum temperature and the weather description for the current day. If we wanted information for the following day, we'd change `daily[0]` to `daily[1]`, and so on up to `daily[7]`. To see all the fields available besides the ones we used in this section, create an `alert(JSON.stringify(data, null, 4))`, but don't forget to remove it before building for production.

## 5 day / 3 hour forecast data

```javascript
let temp;
let description;

getLocation().then((location) => {
			
fiveDaysForecast({

	key: "your_key",
	lat: location.coords.latitude,
	lon: location.coords.longitude,
	unit: "metric"

}).then((data) => {

	temp = data.list[0].main.temp;
	description = data.list[0].weather[0].description;
});

});
```