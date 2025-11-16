import { useEffect, useState, useRef } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

interface UserRegion {
    latitude: number,
    longitude: number,
    latitudeDelta: number,
    longitudeDelta: number
}
const requestLocationPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
            title: 'Location Permission',
            message: 'This app needs access to your location to show it on the map.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
        }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
        console.warn(err);
        return false;
    }
}

const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
        (position) => {
        resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        });
        },
        (error) => {
        reject(error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
    });
};

export default function Map() {
    const mapRef = useRef<MapView>(null);
    const [initialRegion, setInitialRegion] = useState<UserRegion>({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0, 
        longitudeDelta: 0
    });

    useEffect(() => {
        const setDefaultLocation = async () => {
          const hasPermission = await requestLocationPermission();
          if (hasPermission) {
            try {
              const location = await getCurrentLocation();
                if (location != null && 
                  typeof location === 'object' && 
                  'latitude' in location && 
                  'longitude' in location &&
  // This is the key line for your new error:
                    typeof (location).latitude === 'number' && 
                    typeof (location).longitude === 'number') {  // Check if the value is a number) {
                    setInitialRegion({
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.0922, // Adjust zoom level as needed
                    longitudeDelta: 0.0421, // Adjust zoom level as needed
                    });
                }
              // Optional: Animate to the location if the map is already rendered
              if (mapRef.current) {
                mapRef.current.animateToRegion(initialRegion, 1000);
              }
            } catch (error) {
              console.error('Error getting location:', error);
            }
          } else {
            console.log('Location permission denied');
            // Handle case where permission is denied, e.g., set a default static location
          }
        };
        setDefaultLocation();
      }, []);


  return (
    <View style={styles.container}>
      <MapView 
        ref={mapRef}
        initialRegion={initialRegion}
        style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
