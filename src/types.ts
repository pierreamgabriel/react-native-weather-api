type Lang =
  | 'af'
  | 'al'
  | 'ar'
  | 'az'
  | 'bg'
  | 'ca'
  | 'cz'
  | 'da'
  | 'de'
  | 'el'
  | 'en'
  | 'eu'
  | 'fa'
  | 'fi'
  | 'fr'
  | 'gl'
  | 'he'
  | 'hi'
  | 'hr'
  | 'hu'
  | 'id'
  | 'it'
  | 'ja'
  | 'kr'
  | 'la'
  | 'lt'
  | 'mk'
  | 'no'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'pt_br'
  | 'ro'
  | 'ru'
  | 'sv'
  | 'se'
  | 'sk'
  | 'sl'
  | 'sp'
  | 'es'
  | 'sr'
  | 'th'
  | 'tr'
  | 'ua'
  | 'uk'
  | 'vi'
  | 'zh_cn'
  | 'zh_tw'
  | 'zu';

export interface CallProps {
  key: string;
  lat?: number;
  lon?: number;
  city?: string;
  country?: string;
  zip_code?: string;
  unit?: 'standard' | 'metric' | 'imperial';
  lang?: Lang;
}

export type WeatherData = {
  name: string;
  sys: {country: string};
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    feels_like: number;
    pressure: number;
    humidity: number;
  };
  wind: {speed: number};
  weather: [{description: string; icon: string}];
  icon: string;
};

export type ShowWeatherProps = {
  name: string;
  country: string;
  wind: number;
  weather: [{ description: string; icon: string }];
  description: string;
  icon: string;
} & WeatherData['main'];

export type GeolocationResponse = {
  coords: {
    latitude: number;
    longitude: number;
    altitude: number | null;
    accuracy: number;
    altitudeAccuracy: number | null;
    heading: number | null;
    speed: number | null;
  };
  timestamp: number;
};
