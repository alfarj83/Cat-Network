import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function CameraScreen() {
  return (
    <View style={styles.root}>
      <ImageBackground
        source={require("../assets/images/kitty.jpg")} // replace with your image uri
        style={styles.bg}
        resizeMode="cover"
      >

        {/* Top Bar */}
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.topButton}>
            <Text style={styles.btnIcon}>◀</Text>
          </TouchableOpacity>

          <View style={styles.centerDot} />

          <View style={styles.topButton} />
        </View>

        {/* Scanner Frame */}
        <View style={styles.scanner}>
          <View style={[styles.corner, styles.tl]} />
          <View style={[styles.corner, styles.tr]} />
          <View style={[styles.corner, styles.bl]} />
          <View style={[styles.corner, styles.br]} />

          <View style={styles.middleBar} />
        </View>

        {/* Info Card */}
        <View style={styles.card}>
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>Kitty Cat</Text>
            <Text style={styles.cardSub}>Common house cat</Text>
          </View>

          <TouchableOpacity style={styles.goBtn}>
            <Text style={styles.goText}>➜</Text>
          </TouchableOpacity>
        </View>

        {/* Capture Button */}
        <TouchableOpacity style={styles.captureOuter}>
          <View style={styles.captureInner} />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#000" },
  bg: { flex: 1 },

  /* TOP BAR */
  topBar: {
    position: "absolute",
    top: 40,
    left: 16,
    right: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
    alignItems: "center",
  },
  btnIcon: { color: "#fff", fontSize: 18 },
  centerDot: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.25)",
  },

  /* SCANNER */
  scanner: {
    position: "absolute",
    top: "18%",
    left: "8%",
    right: "8%",
    height: "55%",
    justifyContent: "center",
    alignItems: "center",
  },

  corner: {
    position: "absolute",
    width: 52,
    height: 52,
    borderColor: "#fff",
  },
  tl: {
    top: 0,
    left: 0,
    borderTopWidth: 5,
    borderLeftWidth: 5,
    borderTopLeftRadius: 18,
  },
  tr: {
    top: 0,
    right: 0,
    borderTopWidth: 5,
    borderRightWidth: 5,
    borderTopRightRadius: 18,
  },
  bl: {
    bottom: 0,
    left: 0,
    borderBottomWidth: 5,
    borderLeftWidth: 5,
    borderBottomLeftRadius: 18,
  },
  br: {
    bottom: 0,
    right: 0,
    borderBottomWidth: 5,
    borderRightWidth: 5,
    borderBottomRightRadius: 18,
  },

  middleBar: {
    width: "100%",
    height: 95,
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 22,
  },

  /* INFO CARD */
  card: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 140,
    paddingVertical: 14,
    paddingHorizontal: 18,
    backgroundColor: "rgba(255,255,255,0.93)",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  cardTitle: { fontSize: 18, fontWeight: "600", color: "#222" },
  cardSub: { fontSize: 13, color: "#666", marginTop: 2 },
  goBtn: {
    width: 35,
    height: 35,
    marginLeft: 12,
    borderRadius: 18,
    backgroundColor: "#3ccf5a",
    justifyContent: "center",
    alignItems: "center",
  },
  goText: { color: "#fff", fontSize: 20 },

  /* CAPTURE BUTTON */
  captureOuter: {
    position: "absolute",
    bottom: 75,
    alignSelf: "center",
    width: 74,
    height: 74,
    borderRadius: 37,
    borderWidth: 4,
    borderColor: "#fff",
    backgroundColor: "rgba(255,255,255,0.25)",
    justifyContent: "center",
    alignItems: "center",
  },
  captureInner: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "#fff",
  },

  /* BOTTOM BAR */
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 75,
    paddingHorizontal: 10,
    backgroundColor: "rgba(240,240,240,0.95)",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  bottomItem: { alignItems: "center" },
  bottomIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#38c85a",
    marginBottom: 3,
  },
  bottomLabel: { fontSize: 11, color: "#444" },
});
