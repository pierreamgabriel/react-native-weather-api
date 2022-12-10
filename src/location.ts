import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';

export async function getLocation(): Promise<GeolocationResponse> {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(resolve, reject);
  });
}
