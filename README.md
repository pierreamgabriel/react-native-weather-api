# React Native Weather API
With this module you can easily show real-time weather information for over 4 million cities and towns in your Android and iOS app. 

# Installation
NOTE: This module uses the apixu.com API, so in order to use it, you need to create an account on https://www.apixu.com/signup.aspx and get your unique KEY. Free accounts are allowed to perform 10,000 requests per month.

Run: `$ npm install react-native-weather-api --save`

## Editing the editable.js file
Go to `node_modules/react-native-weather-api` inside your project folder and open the `editable.js` file. Put your apixu key in the `KEY` variable. You can also edit `errorTitle` and `errorMessage` according to your needs. The content of these two variables forms the message shown when location isn't activated on the device.

## Projects with Native Code Only
This section only applies to projects made with `react-native init` or to those made with Create React Native App which have since ejected.

### Android
To request access to location, you need to add the following line to your app's `AndroidManifest.xml`:
```
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```
Android API >= 23 Requires an additional step to check for, and request the ACCESS_FINE_LOCATION permission using the <a href="https://facebook.github.io/react-native/docs/permissionsandroid.html">PermissionsAndroid API</a>. Failure to do so may result in a hard crash. 

### iOS
You need to include the `NSLocationWhenInUseUsageDescription` key in Info.plist to enable geolocation when using the app. Geolocation is enabled by default when you create a project with `react-native init`.

In order to enable geolocation in the background, you need to include the 'NSLocationAlwaysUsageDescription' key in Info.plist and add location as a background mode in the 'Capabilities' tab in Xcode.

If you are using CocoaPods for React Native, make sure to include the `RCTGeolocation sub-podspec`.

# Usage
You first need to import it:
```
import { getLocation, getData } from 'react-native-weather-api';
```
## Requesting 
The first thing is to call the `getLocation()` function. The information will be available after two seconds, but keep in mind more time may be necessary on slower connections. It's advisable to wait four or five seconds. See the example below:
```
getLocation();  

let cityName = ""; 
let temperature = "";
let windSpeed = "";

setTimeout(function() {    
let data = new getData()
cityName = data.city;
temperature = data.tempC;
windSpeed = data.windKph;
    
},2000);
```

## Identifiers

`city` - City name.\
`country` - Country name.\
`tempC` - Temperature in celsius.\
`tempF` - Temperature in fahrenheit.\
`feelsC` - Feels like temperature in celsius.\
`feelsF` - Feels like temperature in fahrenheit.\
`windKph` - Wind speed in kilometer per hour.\
`windMph` - Wind speed in miles per hour.\
`windDir` - Wind direction as 16 point compass. e.g.: NSW.\
`pressure` - Pressure in millibars.\
`humidity` - Humidity as percentage.\
`condition` - Weather condition text.\
`icon` - Weather icon url.
