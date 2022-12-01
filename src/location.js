import Geolocation from '@react-native-community/geolocation';

export async function getLocation() {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(resolve, reject);
  });
}
