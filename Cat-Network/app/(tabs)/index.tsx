import { View, StyleSheet} from 'react-native';
import CameraScreen from '@/components/CameraScreen';
import MapScreen from '@/components/Map';
import KittyInfoCard from '@/components/KittyInfoCard';
import React from 'react';
import MapView from 'react-native-maps';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
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

//<KittyInfoCard title="" subtitle="" description="" tags={["hello", "hi"]}/>