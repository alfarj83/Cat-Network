import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";
import { useRouter } from "expo-router";
import { useState } from 'react';
import MapView from "react-native-maps";
import MapScreen from "./MapScreen";

const LandingPage: React.FC = () => {
    const [start, setStart] = useState<boolean>(true)
    const router = useRouter();

    function navigateToCamera() {
        router.push('/create')
        setStart(false)
    }
  return (
    <>
    {start && 
    <View style={styles.root}>
      {/* background sky/grass image */}
      <ImageBackground
        source={require("../assets/images/windows_background.png")} // <- your sky/grass image
        style={styles.background}
        resizeMode="cover"
      >
        {/* popup window */}
        <View style={styles.window}>
          {/* title bar */}
          <LinearGradient
            colors={["#245b93", "#17416d"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.titleBar}
          >
            <View style={styles.windowButtons}>
              <View style={[styles.winBtn, { backgroundColor: "#d0e4ff" }]} />
              <View style={[styles.winBtn, { backgroundColor: "#d0e4ff" }]} />
              <View style={[styles.winBtn, { backgroundColor: "#ff6b4a" }]} />
            </View>
          </LinearGradient>

          {/* body */}
          <View style={styles.windowBody}>
            <Text style={styles.heading}>Animals in your neighbourhood?</Text>
            <Text style={styles.bodyText}>
              We should be friends with the animals, one big friendly
              ecosystem!
            </Text>

            <TouchableOpacity activeOpacity={0.85} style={styles.ctaWrapper} onPress={() => navigateToCamera()}>
              <LinearGradient
                colors={["#38c665", "#21a843"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.ctaButton}
              >
                <Text style={styles.ctaText}>Take a pic!</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        {/* center paw icon + title */}
        {/* curved gray foreground hill */}
        <View style={styles.curveContainer} pointerEvents="none">
          <Svg width="100%" height="100%" viewBox="0 0 400 400">
            {/* top edge is the curve; bottom is flat to screen */}
            <Path
              d="M0 140 C 120 300 280 300 400 160 L400 450 L0 500 Z"
              fill="#e6e6e6"
            />
          </Svg>
        </View>

        {/* paw + title, sitting on top of gray curve */}
        <View style={styles.bottomSection}>
          <View style={styles.pawWrapper}>
            <LinearGradient
              colors={["#c4ffd5", "#02af43"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.pawOuter}
            >
              <LinearGradient
                colors={["#f7fff9", "#29c84d"]}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.9, y: 0.9 }}
                style={styles.pawInner}
              >
                <Ionicons name="paw" size={36} color="#ffffff" />
              </LinearGradient>
            </LinearGradient>
          </View>

          <View style={styles.titleBlock}>
            <Text style={styles.titleTop}>Critter</Text>
            <Text style={styles.titleBottom}>Watch</Text>
          </View>
        </View>
      </ImageBackground>
    </View>}
    {!start && 
    <MapScreen/>}
    </>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#000" },
  background: { flex: 1 },
  window: {
    marginTop: 80,
    marginHorizontal: 24,
    backgroundColor: "#e6eef7",
    borderRadius: 3,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 6,
    overflow: "hidden",
  },
  titleBar: {
    height: 38,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  windowButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 6,
  },
  winBtn: {
    width: 18,
    height: 14,
    borderRadius: 2,
  },
  windowBody: {
    paddingHorizontal: 18,
    paddingVertical: 18,
    backgroundColor: "#ffffff",
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 12,
  },
  bodyText: {
    fontSize: 13,
    textAlign: "center",
    color: "#333",
    lineHeight: 18,
    marginBottom: 18,
  },
  ctaWrapper: { alignSelf: "center" },
  ctaButton: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 6,
  },
  ctaText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },

  bottomSection: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 40,
  },
  pawWrapper: {
    marginBottom: 10,
  },
  pawOuter: {
    width: 92,
    height: 92,
    borderRadius: 46,
    padding: 4,
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 8,
  },
  pawInner: {
    flex: 1,
    borderRadius: 46,
    justifyContent: "center",
    alignItems: "center",
  },
  titleBlock: {
    alignItems: "center",
  },
  titleTop: {
    fontSize: 34,
    fontWeight: "600",
    letterSpacing: 1,
    color: "#2c6fd3",
  },
  titleBottom: {
    fontSize: 34,
    fontWeight: "600",
    letterSpacing: 1,
    color: "#31b54e",
  },
  curveContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 500, // controls how tall the gray area is
  },
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
