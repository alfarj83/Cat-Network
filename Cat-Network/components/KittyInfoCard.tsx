// CatDetailsScreen.tsx
import React from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const KittyInfoCard: React.FC = () => {
  const router = useRouter();

  function navigateToCamera() {
    router.push('/create');
  }

  const CircleIcon = ({ icon }: { icon: keyof typeof Ionicons.glyphMap }) => (
    <TouchableOpacity activeOpacity={0.8} onPress={() => navigateToCamera()}>
      <View style={styles.circleButton}>
        <Ionicons name={icon} size={22} color="#ffffff" />
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.root}>
      {/* top gradient background */}
      <LinearGradient
        colors={["#63baff", "#0c56c9"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.topBackground}
      >
        {/* back + heart */}
        <View style={styles.topBar}>
          <CircleIcon icon="chevron-back" />
          <CircleIcon icon="heart" />
        </View>

        {/* green blob + cat image */}
        <View style={styles.catContainer}>
          <View style={styles.greenShape}>
            <Image
              source={require("../assets/images/kitty 1.png")}
              style={styles.catImage}
              resizeMode="cover"
            />
          </View>

          {/* right-side stats */}
          <View style={styles.stats}>
            <Text style={styles.statsLabel}>Cue</Text>
            <Text style={styles.statsValue}>Medium</Text>

            <View style={styles.statsBlock}>
              <Text style={styles.statsLabel}>Local Occurrences</Text>
              <Text style={styles.statsPercent}>49%</Text>
            </View>

            <View style={styles.statsBlock}>
              <Text style={styles.statsLabel}>Local Occurrences</Text>
              <Text style={styles.statsPercent}>49%</Text>
            </View>
          </View>
        </View>
      </LinearGradient>

      {/* scrollable bottom card */}
      <View style={styles.infoBox}>
        <View style={styles.infoHeader}>
          <Text style={styles.infoHeaderText}>About this Animal</Text>
        </View>

        <View style={styles.infoBody}>
          <Text style={styles.infoTitle}>Basic House Cat</Text>
          <Text style={styles.infoSubtitle}>Feline kitty</Text>

          <Text style={styles.infoText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi.
          </Text>

          <Text style={styles.infoTagsLabel}>Tags</Text>
          <View style={styles.tagsRow}>
            <View style={styles.tagPill}>
              <Text style={styles.tagText}># kitty</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default KittyInfoCard;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  topBackground: {
    height: 420,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: "hidden",
  },
  topBar: {
    marginTop: 40,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  circleButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "rgba(0,0,0,0.25)",
    justifyContent: "center",
    alignItems: "center",
  },

  catContainer: {
    flexDirection: "row",
    marginTop: 20,
    paddingHorizontal: 18,
  },
  greenShape: {
    width: 190,
    height: 290,
    backgroundColor: "#33b44b",
    borderTopLeftRadius: 120,
    borderTopRightRadius: 120,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 120,
    overflow: "hidden",
  },
  catImage: {
    width: "100%",
    height: "100%",
  },

  stats: {
    flex: 1,
    paddingLeft: 18,
    paddingTop: 40,
  },
  statsLabel: {
    color: "#e5f2ff",
    fontSize: 13,
  },
  statsValue: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 18,
  },
  statsBlock: {
    marginBottom: 16,
  },
  statsPercent: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },

  bottomWrapper: {
    flex: 1,
    marginTop: -40,
  },
  bottomContent: {
    paddingHorizontal: 18,
    paddingBottom: 30,
  },
  aboutHeader: {
    alignSelf: "flex-start",
    backgroundColor: "#2f4f70",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  aboutHeaderText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "500",
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 16,
    marginTop: 0,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  body: {
    fontSize: 13,
    color: "#444",
    lineHeight: 18,
    marginBottom: 16,
  },
  tagsLabel: {
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 6,
  },
  infoBox: {
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: "#2f5e8c",     // blue frame color
    borderRadius: 4,
    padding: 4,                     // thickness of blue border
  },
  infoHeader: {
    backgroundColor: "#2f5e8c",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    alignSelf: "flex-start",
    marginBottom: 4,
  },
  infoHeaderText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "500",
  },
  infoBody: {
    backgroundColor: "#ffffff",
    borderRadius: 2,
    padding: 12,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 4,
    color: "#000",
  },
  infoSubtitle: {
    fontSize: 15,
    color: "#222",
    marginBottom: 10,
  },
  infoText: {
    fontSize: 13,
    color: "#333",
    lineHeight: 18,
    marginBottom: 16,
  },
  infoTagsLabel: {
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 6,
  },
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tagPill: {
    backgroundColor: "#8ff27c",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 14,
  },
  tagText: {
    color: "#146b1e",
    fontSize: 12,
    fontWeight: "600",
  },
});
