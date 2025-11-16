import { useEffect, useState, useRef } from "react";
import MapView, { Region, Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import * as Location from "expo-location";

import orgs from "../data_scraping/shelter_data.json"

type Org = {
  displayId: string;
  organizationName: string;
  publicUrl: { url: string };
  primaryLocation: {
    email: string | null;
    address: { city: string; state: string };
    phone: string | null;
  };
};

type GeocodedOrg = Org & {
  latitude: number;
  longitude: number;
};

export default function MapScreen() {
  const mapRef = useRef<MapView>(null);
  const [region, setRegion] = useState<Region | null>(null);
  const [markers, setMarkers] = useState<GeocodedOrg[]>([]);

  useEffect(() => {
    const setup = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.warn("Location permission denied");
        // Optional: set a fallback region here
        return;
      }

      const pos = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      const nextRegion: Region = {
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      };

      setRegion(nextRegion);

      // optional: animate once we have the ref + region
      if (mapRef.current) {
        mapRef.current.animateToRegion(nextRegion, 1000);
      }

      // 2) Geocode org locations: "city, state"
      const geocoded: GeocodedOrg[] = [];
      for (const org of orgs as Org[]) {
        const { city, state } = org.primaryLocation.address;
        const query = `${city}, ${state}`;

        try {
          const results = await Location.geocodeAsync(query);
          if (results.length > 0) {
            geocoded.push({
              ...org,
              latitude: results[0].latitude,
              longitude: results[0].longitude,
            });
          }
        } catch (e) {
          console.warn("Failed to geocode", query, e);
        }
      }

      setMarkers(geocoded);
    };

    setup();
  }, []);

  return (
    <View style={styles.container}>
      {region && (
        <MapView
          showsUserLocation={true}
          followsUserLocation={true}
          showsMyLocationButton={true}
          scrollEnabled={true}
          zoomEnabled={true}
          rotateEnabled={true}
          pitchEnabled={true}
          ref={mapRef}
          style={styles.map}
          initialRegion={region} // or region={region} if you want it controlled
        />
      )}

      {/* org markers from JSON */}
      {markers.map((org) => (
        <Marker
          key={org.displayId}
          coordinate={{ latitude: org.latitude, longitude: org.longitude }}
          title={org.organizationName}
          description={`${org.primaryLocation.address.city}, ${org.primaryLocation.address.state}`}
        >
          {/* custom marker view */}
          <View style={styles.orgMarker}>
            <View style={styles.orgMarkerInner} />
          </View>
        </Marker>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { width: "100%", height: "100%" },

  orgMarker: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "rgba(0, 180, 80, 0.25)",
    justifyContent: "center",
    alignItems: "center",
  },
  orgMarkerInner: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#00b450",
  },
});
