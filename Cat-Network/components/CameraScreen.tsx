import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "expo-router";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { LinearGradient } from "expo-linear-gradient";
import { Svg, Circle, Defs, RadialGradient, Stop, Polygon } from 'react-native-svg';
import { BlurView } from 'expo-blur';
import { Ionicons } from "@expo/vector-icons";

// Define the interface for the props
interface InfoBoxProps {
  title: string;
  subtitle: string;
  onPress: () => void;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, subtitle, onPress }) => {
  return (
     <LinearGradient
      colors={["rgba(255,255,255,0.95)", "rgba(255,255,255,0.75)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.card}
    >
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <LinearGradient
          colors={["#b9ffcf", "#02b749"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.buttonOuter}
        >
          <LinearGradient
            colors={["#f5fff9", "#28c74f"]}
            start={{ x: 0.1, y: 0.1 }}
            end={{ x: 0.9, y: 0.9 }}
            style={styles.buttonInner}
          >
            <Ionicons name="arrow-forward" size={20} color="white" />
          </LinearGradient>
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);
  const [classify, setClassify] = useState<boolean>(false)
  const router = useRouter();

  if (!permission) {
    return <View />;
  }

  // If permission was denied
  if (!permission.granted) {
    return (
      <View style={styles.center}>
        <Text style={styles.text}>We need your permission to use the camera</Text>
        <Button title="Grant Permission" onPress={requestPermission} />
      </View>
    );
  }

  const takePhoto = async () => {
    if (!cameraRef.current) return;

    const photo = await cameraRef.current.takePictureAsync({
      quality: 0.8,
      base64: false,
    });

    console.log("Photo:", photo);
    setClassify(!classify)
  };

  function navigatetoMap() {
    router.back();
  }

  function navigatetoCatInfo() {
    router.push('/card')
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} ref={cameraRef} facing="back" />

      {/* overlays */}
      <View style={styles.overlay} pointerEvents="box-none">

        {/* Back button */}
        <TouchableOpacity style={styles.backButton} activeOpacity={0.8} onPress={() => navigatetoMap()}>
            <BlurView intensity={40} tint="dark" style={styles.circleBlur}>
              <Ionicons name="chevron-back" size={24} color="#ffffff" />
            </BlurView>
          </TouchableOpacity>

        {/* scan frame */}
        <View style={styles.frame} />

        {/* info card example */}
        {classify && <InfoBox
          title="Kitty Cat"
          subtitle="Common house cat"
          onPress={() => navigatetoCatInfo()}
        />}

        {/* bottom bar */}
        <View style={styles.bottomBar}>
          {/* left/right icons would go here */}

          {/* shutter button */}
          <TouchableOpacity onPress={takePhoto} style={styles.shutterOuter}>
            <View style={styles.shutterInner} />
          </TouchableOpacity>

          {/* profile icon etc. */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  camera: {
    flex: 1,
  },
  controls: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    alignItems: "center",
  },
  captureButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#fff",
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginBottom: 12,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "space-between",
    paddingBottom: 40,
    paddingTop: 60,
  },
  frame: {
    alignSelf: "center",
    width: "75%",
    height: "40%",
    borderRadius: 24,
    borderWidth: 4,
    borderColor: "white",
  },
  infoCard: {
    position: "absolute",
    alignSelf: "center",
    top: "55%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.9)",
  },
  infoTitle: { fontWeight: "bold", fontSize: 16 },
  infoSubtitle: { fontSize: 12 },
  bottomBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  shutterOuter: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 6,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  shutterInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 18,
    overflow: "hidden",
    // soft shadow
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },
  subtitle: {
    fontSize: 12,
    color: "#555",
    marginTop: 2,
  },
  buttonOuter: {
    padding: 3,
    borderRadius: 22,
  },
  buttonInner: {
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 18,
  },
  circleBlur: {
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});


