# React Native Weather API
With this module you can easily show real-time weather information for over 4 million cities and towns in your Android and iOS app. You'll get the filtered data directly from the API.

# Installation
NOTE: This module uses the apixu.com API, so in order to use it, you need to create an account on https://www.apixu.com/signup.aspx and get your unique KEY. Free accounts are allowed to perform 10,000 requests per month.

Run: `$ npm install react-native-weather-api --save`

## Editing the editable.js file
Go to the `node_modules/react-native-weather-api` folder inside your project folder and open the editable.js file. Put your apixu key in the `KEY` variable. You can also edit `errorTitle` and `errorMessage` according to your needs. The content of these two variable forms the message shown when location isn't activated on the device.
## Projects with Native Code Only
This section only applies to projects made with `react-native init` or to those made with Create React Native App which have since ejected.
### Android
To request access to location, you need to add the following line to your app's `AndroidManifest.xml`:
```
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```
Android API >= 23 Requires an additional step to check for, and request the ACCESS_FINE_LOCATION permission using the <a href="https://facebook.github.io/react-native/docs/permissionsandroid.html">PermissionsAndroid</a> API. Failure to do so may result in a hard crash. 

### iOS
You need to include the `NSLocationWhenInUseUsageDescription` key in Info.plist to enable geolocation when using the app. Geolocation is enabled by default when you create a project with `react-native init`.

In order to enable geolocation in the background, you need to include the 'NSLocationAlwaysUsageDescription' key in Info.plist and add location as a background mode in the 'Capabilities' tab in Xcode.

If you are using CocoaPods for React Native, make sure to include the `RCTGeolocation sub-podspec`.

# Usage
You first need to import it:
```
import { getLocation } from 'react-native-weather-api';
```
## Requesting 
The first thing is to call the `getLocation()` function. The information retrived from the API is stored using AsyncStorage. My tests showed it's necessary to wait 5 seconds after calling the above function to guarantee the data is available. You can request it using any method you want, but I like to use the below one:
```
getLocation(); 

let cityName = ""; 
let temperature = "";

setTimeout(function() {    
AsyncStorage.getItem('weather_city').then((value) => {
  cityName = value;
  });
AsyncStorage.getItem('weather_tempC').then((value) => {
  temperature = value;
  });  
    
},5000);
```
To update the data you just need to call the `getLocation()` function again.

## AsyncStorage codes

`weather_city` - City name.\
`weather_country` - Country name.\
`weather_tempC` - Temperature in celsius.\
`weather_tempF` - Temperature in fahrenheit.\
`weather_feelsC` - Feels like temperature in celsius.\
`weather_feelsF` - Feels like temperature in fahrenheit.\
`weather_windKp` - Wind speed in kilometer per hour.\
`weather_windMph` - Wind speed in miles per hour.\
`weather_windDir` - Wind direction as 16 point compass. e.g.: NSW.\
`weather_pressure` - Pressure in millibars.\
`weather_humidity` - Humidity as percentage.\
`weather_condition` - Weather condition text.\
`weather_icon` - Weather icon url.
